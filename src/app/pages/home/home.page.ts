import { Component } from "@angular/core";
import { MomentService } from "src/app/services/moment/moment.service";
import { Router } from "@angular/router";
import { SimpleSelectorData } from 'src/app/components/simple-select/simple-select.component';

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
  clinicianSelectorData: SimpleSelectorData;
  clinicians : any[]=[ { name: 'Matt', id: 'matt'}, { name: 'John', id: 'john' } ];
  data: any[]=['Adam', 'Frank', 'Eve', 'Snake'];
  selectedClinician = 'Matt';
  

  constructor(private moment: MomentService, private router: Router) {
    this.startDate = "";
    this.startHeader = "Start Date";
    this.endDate = "";
    this.endHeader = "End Date";

   //this.clinicianSelectorData = { selected: this.selectedClinician, header: 'Select A Clinician', sortAlphabetically: "name", textKey: "name", valueKey:"id", multiple: true, selectAll: true }

    this.clinicianSelectorData = {selected: this.selectedClinician, header: 'Select A Clinician', multiple:true, selectAll:true}
  }


  ngOnInit() {}

  navigate() {
    this.router.navigate(["/"]);
  }

  retrieveClinicianSelection(clinicianName: string) {
    console.log(clinicianName);
    this.selectedClinician = clinicianName;


    //do more
  }
}
