import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { InsertionDirective } from './dialog/insertion.directive';
import { ExampleComponent } from './example/example.component';
import { Example2Component } from './example2/example2.component';
import { DialogModule } from './module-dialog/dialog/dialog.module';
import { Example3Component } from './example3/example3.component';

@NgModule({
  entryComponents: [
    ExampleComponent,
    DialogComponent,
    Example2Component,
    Example3Component
  ],
  declarations: [
    AppComponent,
    InsertionDirective,
    DialogComponent,
    ExampleComponent,
    Example2Component,
    Example3Component
  ],
  imports: [BrowserModule, AppRoutingModule, DialogModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
