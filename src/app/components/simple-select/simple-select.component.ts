import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import {Pipe} from '@angular/core';
export interface SimpleSelectorData {
  selected: any;
  header: string;
  valueKey?: string;
  textKey?: string;
  multiple?: boolean;
  hideDelete?: boolean;
  interface?: 'action-sheet' | 'popover' | 'alert' | 'chips';
  regularLabel?: boolean;
  sortAlphabetically?: string; //set the value to the property you want to sort by
  hideLines?: boolean;
  selectAll?: boolean;
  dataMissing?: boolean;
  requiredNote?: boolean;
}

@Component({
  selector: 'app-simple-select',
  templateUrl: './simple-select.component.html',
  styleUrls: ['./simple-select.component.scss'],
})
export class SimpleSelectComponent implements OnChanges {

  @Input() list: any[];
  @Input() data: SimpleSelectorData
  @Output() sendData: EventEmitter<any>;

  interface;
  listType;
  requiredText = 'required';

  constructor() {
    this.sendData = new EventEmitter<any>();
  }

  selectItem() {
    this.sendData.emit(this.data.selected);
  }

  selectChip(value: string) {
    if (this.data.multiple) {
      if (!this.data.selected) this.data.selected = [];
      const index = this.data.selected.indexOf(value);
      if ( index >= 0) {
        this.data.selected.splice(index, 1);
      } else {
        this.data.selected.push(value);
      }
    } else {
      this.data.selected = value;
    }
    this.sendData.emit(this.data.selected);
  }

  ngOnChanges() {
    if (this.list && this.data && !this.interface) {
      if (this.data.sortAlphabetically) {
        this.list = this.list.sort((a, b) => a[this.data.sortAlphabetically].localeCompare(b[this.data.sortAlphabetically]));
      }
      this.interface = this.determineInterface();
      this.listType = typeof this.list[0];
    }
  }

  determineInterface() {
    if (this.data.interface) {
      return this.data.interface;
    }
    if (this.data.multiple) {
      return 'alert';
    }
    if (this.list.length > 8) {
      return 'action-sheet'
    } else {
      return 'popover';
    }
  }

  deleteSelection() {
    this.data.selected = null;
  }

  selectAll() {
    let key;
    this.data.selected = [];
    if (this.data.valueKey) {
      key = this.data.valueKey;
    } else {
      key = 'value'
    }
    for (const item of this.list) {
      if (item[key] !== 'dataMissing') {
        this.data.selected.push(item[key]);
      }
    }
  }

}
