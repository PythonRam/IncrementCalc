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
  leaves = [];
  minDate: Date;
  maxDate: Date;

  days(e, i) {
    console.log(e, i);
  }
  delete(i) {
    this.leaves.splice(i, 1);
  }

  addLeave() {
    this.leaves.push({ 'days': 0 });
  }
  computeMinMax() {
    this.minDate = new Date(this.date_of_joining.value);
    this.maxDate = new Date(new Date(this.date_of_joining.value).valueOf() + this.days_before_increment.value * 24 * 60 * 60 * 1000);
  }
}
