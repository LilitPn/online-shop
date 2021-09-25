import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

import { AccordionComponent } from '../accordion/accordion.component';



@Component({
  selector: 'post',
  template: `
    <div class="post">
      <h4><ng-content select=".title"></ng-content></h4>
      <hr>
      <p #p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
        Donec eu libero sit amet quam egestas semper.
        Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
      </p>
      <h6 *ngIf="showMessage"><ng-content select=".auther"></ng-content></h6>
      <ng-content select="accordion"></ng-content> 
    </div>
  `,
  styles: [`
    .post { margin-bottom: 15px; background: #fff; margin: 0 0 30px; border: solid 1px #e6e6e6; padding: 20px; -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); text-align: center; } 
    h4 { color: #555; }
    h6 { color: #4fbfa8; }
  `]
})
export class PostComponent implements AfterContentInit, AfterViewInit {
  @ViewChild('p') p: ElementRef;
  @ContentChild(AccordionComponent) accordion: AccordionComponent;

  showMessage: boolean = false;

  ngAfterContentInit(): void {
    if (this.accordion) {
      this.accordion.show.subscribe(show => this.showMessage = show)
    }
  }

  ngAfterViewInit(): void {
    console.log(this.p)
  }
}