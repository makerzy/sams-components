import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { DatePickerComponent } from "./date-picker/date-picker.component";

import { MaterialModule } from "../material/material.module";
import { SimpleInputComponent } from "./simple-input/simple-input.component";
import { SimpleMaterialComponent } from "./simple-material/simple-material.component";
import { DateRangeSelectorComponent } from "./date-range-selector/date-range-selector.component";

@NgModule({
  declarations: [
    DatePickerComponent,
    SimpleInputComponent,
    SimpleMaterialComponent,
    DateRangeSelectorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    DatePickerComponent,
    SimpleInputComponent,
    DateRangeSelectorComponent,
    SimpleMaterialComponent,
  ],
})
export class ComponentsModule {}
