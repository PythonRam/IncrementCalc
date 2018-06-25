import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnChanges {
  @Input('initDate') initDate: Date;
  @Output('yearData') yearData: EventEmitter<any> = new EventEmitter();
  date_of_joining = new FormControl();
  days_before_increment = new FormControl(365);
  date_of_increment: Date;
  leaves = [];
  minDate: Date;

  constructor() {

  }

  ngOnChanges() {
    if (this.initDate) {
      this.date_of_joining.setValue(this.initDate);
    }
    this.computeMinMax();
  }

  computeDate() {
    let days = 0;
    this.leaves.forEach(l => {
      days += l.days * 24 * 60 * 60 * 1000;
    });
    const extra = this.days_before_increment.value * 24 * 60 * 60 * 1000;
    this.date_of_increment = (new Date(((new Date(this.date_of_joining.value).valueOf()) + days + extra)));
    let validLeaves = this.leaves;
    validLeaves = validLeaves.filter(l => l['days'] > 0);
    const yearObj = {
      leaves: validLeaves,
      final: this.date_of_increment
    };
    this.yearData.emit(yearObj);
  }
  days(e, i) {
    this.leaves[i]['start_date'] = e.start_date;
    this.leaves[i]['end_date'] = e.end_date;
    this.leaves[i]['days'] = e.days;
    this.computeDate();
  }
  delete(i) {
    this.leaves.splice(i, 1);
    this.computeDate();
  }

  addLeave() {
    this.leaves.push({ 'days': 0 });
  }
  computeMinMax() {
    this.minDate = new Date(this.date_of_joining.value);
    this.computeDate();
  }
}
