import { Component } from '@angular/core';

@Component({
  selector: 'heading',
  template: `
    <div class="heading row p-0">
      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <h2><ng-content select=".title"></ng-content></h2>
        <p><ng-content select=".subtitle"></ng-content></p>
      </div>
    </div>
  `,
  styles: [`
    .heading { background: #fff; padding: 30px; height: 110px; display: flex; justify-content: center; align-items: center; }
    .heading h2 { text-transform: uppercase; letter-spacing: 0.1em; font-size: 2.25rem; color: #4fbfa8; font-weight: 100; text-align: center; }
    .heading p { text-align:center; } 
    `]
})
export class HeadingComponent { }