import { Component, OnInit } from "@angular/core";
import * as _moment from "moment";
const moment = _moment;

@Component({
  selector: "app-date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.scss"],
})
export class DateComponent implements OnInit {
  constructor() {}
  date: any = "";
  ngOnInit() {}

  formatDate() {
    if (this.date.length < 10) {
      return null;
    } else {
      let date = moment(this.date).format("MM-DD-YYYY");
      console.log(date.length);
      return (this.date = date);
    }
  }

  dpFormated(event) {
    if (!event) {
      event.value = this.date;
    } else {
      console.log(event.value);
    }
  }
}
