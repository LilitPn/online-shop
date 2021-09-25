import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ModalDirective } from './shared/directives/modal.directive';

import { ModalDataService } from './shared/services/modalData.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['#overlay { opacity: 0.3;}']
})
export class AppComponent {
  @ViewChild(ModalDirective) modal: ModalDirective;

  constructor(
    private _modalService: ModalDataService,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'hy', 'ru']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    setTimeout(() => {
      this._modalService.modalContainer = this.modal
    }, 100)
  }
}
