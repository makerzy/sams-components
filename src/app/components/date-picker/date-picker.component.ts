import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MomentService } from "src/app/services/moment/moment.service";
import { Moment } from 'moment';

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.scss"]
})

export class DatePickerComponent {

  @Input() header: string;
  @Input() date: string;
  @Output() sendDate: EventEmitter<string> = new EventEmitter();

  minDate: Moment;
  maxDate: Moment;

  constructor(private moment: MomentService) {
    this.maxDate = this.moment.getMaxDate();
    this.minDate = this.moment.getMinDate();
  }

  changedDate({ value }) {
    const ISOString = value.toISOString();
    this.sendDate.emit(ISOString);
  }

}
