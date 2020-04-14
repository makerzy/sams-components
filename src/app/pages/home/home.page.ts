import { Component } from "@angular/core";
import { MomentService } from "src/app/services/moment/moment.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  today: string;
  header: string;
  day: string;
  header2: string;
  constructor(private moment: MomentService, private router: Router) {
    this.today = this.moment.getMoment().toISOString();
    this.header = "Date of Birth";
    this.header2 = "End Date";
    this.day = this.moment.getMoment().toISOString();
  }

  navigate() {
    this.router.navigate(["/dates"]);
  }
}
