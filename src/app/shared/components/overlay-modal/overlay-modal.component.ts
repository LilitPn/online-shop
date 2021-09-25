import { ComponentFactoryResolver } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Input, Component, OnInit } from '@angular/core';

import { ModalComponent } from 'src/app/core/interfaces/shared_components.interfaces';

import { ModalContainerDirective } from '../../directives/modal.container.directive';




@Component({
  selector: 'app-overlay-modal',
  templateUrl: './overlay-modal.component.html',
  styleUrls: ['./overlay-modal.component.css']
})
export class OverlayModalComponent implements ModalComponent, OnInit {
  @Input() data: any;
  @ViewChild(ModalContainerDirective) modalContainer: ModalContainerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    setTimeout(() => { this.addComponentIntoModal() }, 100)
  }

  addComponentIntoModal(): void {
    const viewContainerRef = this.modalContainer.viewContainerRef;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data);
    const componentRef = viewContainerRef.createComponent<any>(componentFactory);
  }
}