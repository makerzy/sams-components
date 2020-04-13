import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { DatePickerComponent } from "./date-picker/date-picker.component";
import { MatExpansionModule } from "@angular/material/expansion";

import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [DatePickerComponent],
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
  exports: [DatePickerComponent]
})
export class ComponentsModule {}
