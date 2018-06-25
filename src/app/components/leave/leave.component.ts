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
  leaves = 0;
  leave_start = new FormControl();
  leave_end = new FormControl();
  constructor() {

  }
  DeleteLeave() {
    this.delete.emit();
  }
  computeDays() {
    if (this.leave_start.valid && this.leave_end.valid && this.leave_end.value >= this.leave_start.value) {
      this.leaves = ((this.leave_end.value - this.leave_start.value) / (24 * 60 * 60 * 1000)) + 1;
      this.days.emit(this.leaves);
    }
  }

  ngOnInit() {
  }

}
