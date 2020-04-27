import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MomentService } from "src/app/services/moment/moment.service";
import { Moment } from "moment";

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.scss"],
})
export class DatePickerComponent {
  @Input() date: string;
  @Output() sendDate: EventEmitter<string> = new EventEmitter();

  minDate: Date;
  maxDate: Date;
  startDate: string;
  endDate: string;
  constructor(private moment: MomentService) {
    this.maxDate = this.moment.getMaxDate().toDate();
    this.minDate = this.moment.getMinDate().toDate();
  }

  changedDate({ value }) {
    const ISOString = value.toISOString();
    this.sendDate.emit(ISOString);
  }
}
