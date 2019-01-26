import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { InsertionDirective } from 'src/app/module-dialog/dialog/insertion.directive';

@NgModule({
  entryComponents: [DialogComponent],
  imports: [CommonModule],
  declarations: [DialogComponent, InsertionDirective]
})
export class DialogModule {}
