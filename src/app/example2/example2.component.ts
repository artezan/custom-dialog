import { Component, OnInit } from '@angular/core';
import { DialogRef } from '../dialog/dialog-ref';
import { DialogConfig } from '../dialog/dialog-config';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss']
})
export class Example2Component {
  constructor(public dialog: DialogRef, public config: DialogConfig) {}

  onClose() {
    this.dialog.close(this.config);
  }
}
