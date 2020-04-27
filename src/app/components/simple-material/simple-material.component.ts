import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MatFormFieldControl } from "@angular/material/form-field";
export interface SimpleInputDataObject {
  data: string | number | boolean;
  header: string;
  textInput: {
    type:
      | "text"
      | "tel"
      | "url"
      | "email"
      | "numeric"
      | "decimal"
      | "search"
      | "password";
    min: number;
    max: number;
    capitalize: boolean;
    uppercase: boolean;
  };
  textAreaInput: {
    rows: number;
  };
  toggleInput: {
    active: boolean;
  };
  icon: {
    name: string;
    size: "small" | "large";
    color: string;
    slot: "start" | "end";
    show: boolean;
  };
  textOnly: {
    text: string;
  };
  hideLines?: boolean;
  endBadge?: {
    color: string;
    text: string | number;
  };
  requiredNote?: boolean;
}
@Component({
  selector: "app-simple-material",
  templateUrl: "./simple-material.component.html",
  styleUrls: ["./simple-material.component.scss"],
})
export class SimpleMaterialComponent implements OnInit {
  @Input() data: SimpleInputDataObject;
  @Output() sendData: EventEmitter<SimpleInputDataObject["data"]>;
  @Output() iconClicked: EventEmitter<boolean>;

  constructor() {
    this.sendData = new EventEmitter<SimpleInputDataObject["data"]>();
    this.iconClicked = new EventEmitter<boolean>();
  }

  ngOnInit() {}

  sendEnteredData() {
    if (typeof this.data.data === "string" && !this.data.data) {
      // eliminate empty strings
      this.data.data = null;
    }
    if (typeof this.data.data === "string" && !this.data.textAreaInput) {
      this.data.data = this.data.data.trim().toLowerCase();
    }
    this.sendData.emit(this.data.data);
  }

  clickedIcon() {
    this.iconClicked.emit(true);
  }
}
