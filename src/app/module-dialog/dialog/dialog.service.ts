import {
  Injectable,
  ComponentRef,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  Type,
  EmbeddedViewRef
} from '@angular/core';
import { DialogComponent } from './dialog.component';
import { DialogRef } from './dialog-ref';
import { DialogInjector } from './dialog-injector';
import { Dialog } from './dialog.model';
import { DialogConfig } from './dialog-config';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  dialogComponentRef: ComponentRef<DialogComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  public open(componentType: Type<any>, config: Dialog) {
    const dialogRef = this.appendDialogComponentToBody(config);

    this.dialogComponentRef.instance.childComponentType = componentType;

    return dialogRef;
  }

  private appendDialogComponentToBody(config: Dialog) {
    const map = new WeakMap();
    map.set(DialogConfig, config);
    const dialogRef = new DialogRef();
    map.set(DialogRef, dialogRef);

    const sub = dialogRef.afterClosed.subscribe(() => {
      this.removeDialogComponentFromBody();
      sub.unsubscribe();
    });

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      DialogComponent
    );
    const componentRef = componentFactory.create(
      new DialogInjector(this.injector, map)
    );

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.dialogComponentRef = componentRef;

    this.dialogComponentRef.instance.onClose.subscribe(() => {
      this.removeDialogComponentFromBody();
    });

    return dialogRef;
  }

  private removeDialogComponentFromBody() {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }
}
