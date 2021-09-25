import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccordionComponent } from './components/accordion/accordion.component';
import { BreadcrumpComponent } from './components/breadcrump/breadcrump.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeadingComponent } from './components/heading/heading.component';
import { LoaderComponent } from './components/loader/loader.component';
import { OverlayModalComponent } from './components/overlay-modal/overlay-modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PostComponent } from './components/post/post.component';
import { RibonComponent } from './components/ribbon/ribbon.component';
import { SwalAlertComponent } from './components/swal-alert/swal-alert.component';
import { SortComponent } from './components/sort/sort.component';

import { ModalContainerDirective } from './directives/modal.container.directive';
import { ModalDirective } from './directives/modal.directive';

import { SwalAlertService } from './services/swalAlert.service';
import { ModalDataService } from './services/modalData.service';
import { LoaderService } from './services/loader.service';
import { AlertService } from './services/alert.service';




@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AccordionComponent,
        BreadcrumpComponent,
        CarouselComponent,
        HeadingComponent,
        LoaderComponent,
        OverlayModalComponent,
        PaginationComponent,
        PostComponent,
        RibonComponent,
        SwalAlertComponent,
        ModalContainerDirective,
        ModalDirective,
        SortComponent
    ],
    exports: [
        AccordionComponent,
        BreadcrumpComponent,
        CarouselComponent,
        HeadingComponent,
        LoaderComponent,
        OverlayModalComponent,
        PaginationComponent,
        PostComponent,
        RibonComponent,
        SwalAlertComponent,
        ModalContainerDirective,
        ModalDirective,
        SortComponent
    ],
    providers: [
        AlertService,
        LoaderService,
        ModalDataService,
        SwalAlertService
    ]
})
export class SharedModule { }