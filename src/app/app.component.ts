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
  leaves = [1, 2, 3, 4, 5];
}
