import { Injectable, ComponentFactoryResolver } from '@angular/core';

import { ModalDirective } from 'src/app/shared/directives/modal.directive';



@Injectable()
export class ModalDataService {
  modalContainer: ModalDirective = null;

  constructor(
    public componentFactoryResolver: ComponentFactoryResolver
  ) { }

  showModalComponent(component: any, type: any): void {
    document.getElementsByTagName('body')[0].setAttribute('style', 'background-color:black;')
    document.getElementsByTagName('div')[0].setAttribute('id', 'overlay');

    const viewContainerRef = this.modalContainer.viewContainerRef;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = viewContainerRef.createComponent<any>(componentFactory);
    componentRef.instance.data = type;
  }

  hideModalComponent(): void {
    const viewContainerRef = this.modalContainer.viewContainerRef;
    viewContainerRef.clear();

    document.getElementsByTagName('body')[0].removeAttribute('style')
    document.getElementsByTagName('div')[0].removeAttribute('id');
  }
}