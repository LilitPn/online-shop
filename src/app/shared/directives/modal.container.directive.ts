import { Directive, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[modalContainer]'
})
export class ModalContainerDirective {
  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }
}