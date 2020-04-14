import { Component, OnInit } from "@angular/core";
import { MomentService } from "../services/moment/moment.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-dates",
  templateUrl: "./dates.page.html",
  styleUrls: ["./dates.page.scss"],
})
export class DatesPage implements OnInit {
  date: string;
  header: string;
  header2: string;
  date2: string;
  constructor(private moment: MomentService, private router: Router) {
    this.header = "End Date";
    this.date = this.moment.getMoment().toISOString();
    this.header2 = "Start Date";
    this.date2 = this.moment.getMoment().toISOString();
  }

  ngOnInit() {}

  navigate() {
    this.router.navigate(["/"]);
  }
}
