import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  date_of_joining = new FormControl();
  days_before_increment = new FormControl(365);
  date_of_increment: Date;
  leaves = [];
  minDate: Date;
  maxDate: Date;

  computeDate() {
    let days = 0;
    this.leaves.forEach(l => {
      days += l.days * 24 * 60 * 60 * 1000;
    });
    const extra = this.days_before_increment.value * 24 * 60 * 60 * 1000;
    this.date_of_increment = (new Date(((new Date(this.date_of_joining.value).valueOf()) + days +  extra)));
  }
  days(e, i) {
    this.leaves[i]['days'] = e;
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
    this.maxDate = new Date(new Date(this.date_of_joining.value).valueOf() + this.days_before_increment.value * 24 * 60 * 60 * 1000);
    this.computeDate();
  }
}
