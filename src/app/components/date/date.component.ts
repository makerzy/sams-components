import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MomentService } from "../../services/moment/moment.service";
import { Moment } from "moment";
@Component({
  selector: "app-date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.scss"],
})
export class DateComponent implements OnInit {
  @Input() header: string;
  @Input() date: string;
  @Output() sendDate: EventEmitter<string> = new EventEmitter();

  minDate: Moment;
  maxDate: Moment;
  constructor(private moment: MomentService) {
    this.maxDate = this.moment.getMaxDate();
    this.minDate = this.moment.getMinDate();
  }

  ngOnInit() {}

  onChange({ value }) {
    const ISOString = value.toISOString();
    this.sendDate.emit(ISOString);
  }
}
