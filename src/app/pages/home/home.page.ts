import { Component } from "@angular/core";
import { MomentService } from "src/app/services/moment/moment.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  startDate: string;
  startHeader: string;
  endDate: string;
  endHeader: string;
  constructor(private moment: MomentService, private router: Router) {
    this.startDate = "";
    this.startHeader = "Start Date";
    this.endDate = "";
    this.endHeader = "End Date";
  }

  ngOnInit() {}

  navigate() {
    this.router.navigate(["/"]);
  }
}
