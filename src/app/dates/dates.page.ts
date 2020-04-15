import { Component, OnInit } from "@angular/core";
import { MomentService } from "../services/moment/moment.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-dates",
  templateUrl: "./dates.page.html",
  styleUrls: ["./dates.page.scss"],
})
export class DatesPage implements OnInit {
  startDate: string;

  endDate: string;

  constructor(private moment: MomentService, private router: Router) {
    this.startDate = "";

    this.endDate = "";
  }

  ngOnInit() {}

  navigate() {
    this.router.navigate(["/"]);
  }
}
