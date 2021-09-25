import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'carousel',
    template: `
  <div id="carouselExampleIndicators" class="carousel slide p-0 pt-4" data-ride="carousel">
    <ol class="carousel-indicators">
        <li 
           *ngFor="let carouselItem of carouselItems, let i = index;" 
            data-target="#carouselExampleIndicators"
            data-slide-to={{i}} class={{carouselItem.class}}
        ></li>
    </ol>
    <div class="carousel-inner">
        <div 
            *ngFor="let carouselItem of carouselItems" 
            class="carousel-item" [ngClass]="{'active':carouselItem.class!=''}"
        >
            <img 
                class="img-fluid col-lg-12 col-md-12 col-sm-12 col-12 p-0" 
                src={{carouselItem.src}} alt={{carouselItem.alt}}
            >
        </div>
    </div>
</div>`
})

export class CarouselComponent implements OnInit {
    @Input() carouselItems;

    ngOnInit() { }
}
