import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MomentService } from "src/app/services/moment/moment.service";

// export interface DateRange {
//   startDate?: string;
//   endDate?: string;
// }

@Component({
  selector: "app-date-range-selector",
  templateUrl: "./date-range-selector.component.html",
  styleUrls: ["./date-range-selector.component.scss"],
})
export class DateRangeSelectorComponent implements OnInit {
  @Input() data;
  @Output() sendData: EventEmitter<any> = new EventEmitter();

  minDate: Date;
  maxDate: Date;

  constructor(private moment: MomentService) {
    this.minDate = this.moment.getMinDate().toDate();
    this.maxDate = this.moment.getMaxDate().toDate();
    this.data = { startDate: "", endDate: "" };
  }

  ngOnInit() {}
  retrieveSelectedDate(type: "startDate" | "endDate", date: string) {
    //Date = ISO String
    this.data[type] = date;
    if (this.data.endDate && this.data.startDate) {
      console.log(this.data);
      this.sendData.emit(this.data);
    }
  }
}
