import { Component } from "@angular/core";
import { MomentService } from 'src/app/services/moment/moment.service';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {

  today: string;
  header: string;

  constructor(
    private moment: MomentService
  ) {
    this.today = this.moment.getMoment().toISOString();
    this.header = 'Date of Birth';
  }
}
