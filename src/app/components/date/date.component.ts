import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MomentService } from "../../services/moment/moment.service";
import { Moment } from "moment";
@Component({
  selector: "app-date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.scss"],
})
export class DateComponent implements OnInit {
  @Input() startDate: string;
  @Input() endDate: string;
  @Output() sendDate: EventEmitter<any> = new EventEmitter();
  @Output() emitDate: EventEmitter<any> = new EventEmitter();

  startMinDate: Date;
  startMaxDate: Date;
  endMinDate: Date;
  endMaxDate: Date;

  constructor(private moment: MomentService) {
    this.startMaxDate = this.moment.getMaxDate().toDate();
    this.startMinDate = this.moment.getMinDate().toDate();
    this.endMaxDate = this.moment.getMaxDate().toDate();
    this.endMinDate = this.moment.getMinDate().toDate();
  }

  ngOnInit() {}

  onChange({ value }) {
    const ISOString = value.toISOString();
    this.sendDate.emit(ISOString);
  }

  changedDate({ value }) {
    const ISOString = value.toISOString();
    this.emitDate.emit(ISOString);
  }
}
