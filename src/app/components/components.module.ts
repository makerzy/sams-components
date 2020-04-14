import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { DatePickerComponent } from "./date-picker/date-picker.component";
import { DateComponent } from "./date/date.component";
import { Date2Component } from "./date2/date2.component";
import { MatExpansionModule } from "@angular/material/expansion";

import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [DatePickerComponent, DateComponent, Date2Component],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  exports: [DatePickerComponent, DateComponent, Date2Component],
})
export class ComponentsModule {}
