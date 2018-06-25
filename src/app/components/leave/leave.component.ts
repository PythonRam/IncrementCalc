import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _moment from 'moment';
import { FormControl } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
const moment = _moment;
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class LeaveComponent implements OnInit {
  @Input('minDate') minDate: Date;
  @Input('maxDate') maxDate: Date;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() days: EventEmitter<any> = new EventEmitter();
  today = moment();
  leave_start = new FormControl(moment([this.today.year(), this.today.month(), this.today.date()]));
  leave_end = new FormControl(moment([this.today.year(), this.today.month(), this.today.date()]));
  constructor() {

  }

  ngOnInit() {
  }

}
