import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Moment } from "moment";
import { MomentService } from "src/app/services/moment/moment.service";

@Component({
  selector: "app-date2",
  templateUrl: "./date2.component.html",
  styleUrls: ["./date2.component.scss"],
})
export class Date2Component implements OnInit {
  @Input() date2: string;
  @Output() sendDate: EventEmitter<string> = new EventEmitter();

  minDate: Moment;
  maxDate: Moment;
  constructor(private moment: MomentService) {
    this.minDate = this.moment.getMinDate();
    this.maxDate = this.moment.getMaxDate();
  }

  ngOnInit() {}
  changedDate({ value }) {
    const ISOString = value.toISOString();
    this.sendDate.emit(ISOString);
  }
}
