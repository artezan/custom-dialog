import { Component, OnInit } from '@angular/core';
import { DialogRef } from '../module-dialog/dialog/dialog-ref';
import { DialogConfig } from '../module-dialog/dialog/dialog-config';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.scss']
})
export class Example3Component {
  constructor(public dialog: DialogRef, public config: DialogConfig) {}

  onClose() {
    this.dialog.close(this.config);
  }
}
