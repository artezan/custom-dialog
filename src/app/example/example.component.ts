import { Component, OnInit } from '@angular/core';
import { DialogRef } from '../dialog/dialog-ref';
import { DialogConfig } from '../dialog/dialog-config';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  constructor(public dialog: DialogRef, public config: DialogConfig) {}

  onClose() {
    this.dialog.close('some value');
  }
}
