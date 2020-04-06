import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from "@angular/core";
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from "@angular/material/core";
import { MomentService } from "src/app/services/moment/moment.service";
import { MY_FORMAT } from "../../services/format/format.service";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { NgModel } from "@angular/forms";

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.scss"],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMAT },
  ],
})
export class DatePickerComponent implements OnInit {
  type: string;
  today: string;
  minDate;
  maxDate;
  date = this.today;
  @Input() currentDate: string;
  @Output() public sendDate: EventEmitter<string> = new EventEmitter();
  newDate: any = "";

  constructor(private moment: MomentService) {
    const today = this.moment.convertDateToISO(new Date());
    if (today.length > 10) {
      const numtoday = today.slice(0, 10);
      this.today = numtoday;
    }

    this.maxDate = this.moment.getMaxDate();
    this.minDate = this.moment.getMinDate();
  }

  ngOnInit() {}
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    const convevent = this.moment.convertDateToISO(event.value);

    this.newDate = `${convevent}`;
  }
  getInput(event) {
    const indate = event.value;
    this.date = indate;
  }
  selectedDate(event: MatDatepickerInputEvent<Date>) {
    if (this.date !== this.today) {
      this.date = this.moment.convertDateToISO(event.value);

      this.newDate = this.date;
    }
  }
}
