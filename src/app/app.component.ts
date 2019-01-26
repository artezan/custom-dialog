import { Component } from '@angular/core';
import { DialogControllerService } from './dialog/dialog-controller.service';
import { ExampleComponent } from './example/example.component';
import { Example2Component } from './example2/example2.component';
import { DialogService } from './module-dialog/dialog/dialog.service';
import { Example3Component } from './example3/example3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dialogos';

  constructor(
    public dialog: DialogControllerService,
    public dialogModule: DialogService
  ) {
    const ref = this.dialog.open(ExampleComponent, {
      data: { message: 'I am a dynamic component inside of a dialog!' }
    });

    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });
  }
  openDialog(str: string) {
    const ref = this.dialog.open(ExampleComponent, {
      data: { message: str }
    });

    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });
  }
  openDialog2(str: string, data) {
    const ref = this.dialog.open(Example2Component, {
      data: { message: str, obj: { data } }
    });

    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });
  }
  openDialogModule(str: string, data) {
    const ref = this.dialogModule.open(Example3Component, {
      data: { message: str, obj: { data } }
    });

    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });
  }
}
