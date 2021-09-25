import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'accordion',
  template: `
    <div>
      <div [hidden]="!isHidden">
        <button class="btn btn-primary" (click)="openAccordion()">{{openBtnName}}</button>
      </div>
      <div [hidden]="isHidden">
        <p>{{context}}</p>
        <button class="btn btn-primary" (click)="closeAccordion()">{{closeBtnName}}</button>
      </div>
    </div>
  `,
  styles: [`
    .btn-primary { background-color: #4fbfa8; border-color: #4fbfa8; }
  `]
})
export class AccordionComponent {
  @Input() openBtnName: string;
  @Input() closeBtnName: string;
  @Input() context: string;
  @Output() show: EventEmitter<boolean> = new EventEmitter<boolean>();

  isHidden: boolean = true;

  closeAccordion(): void {
    this.isHidden = true;
    this.show.emit(false);
  }

  openAccordion(): void {
    this.isHidden = false;
    this.show.emit(true);
  }
}