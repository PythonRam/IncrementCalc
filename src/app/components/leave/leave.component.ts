import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
})
export class LeaveComponent implements OnInit {
  @Input('minDate') minDate: Date;
  @Input('maxDate') maxDate: Date;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() days: EventEmitter<any> = new EventEmitter();
  leave_start = new FormControl();
  leave_end = new FormControl();
  constructor() {

  }

  ngOnInit() {
  }

}
