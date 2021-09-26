import { Component } from '@angular/core';

import { ModalDataService } from 'src/app/shared/services/modalData.service';

import { OverlayModalComponent } from 'src/app/shared/components/overlay-modal/overlay-modal.component';
import { LoginComponent } from '../../auth/login/login.component';
import { RegistrationComponent } from '../../auth/registration/registration.component';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(
    private _modalService: ModalDataService,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'hy', 'ru']);
    translate.setDefaultLang('en');
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
  }

  openLoginModal(): void {
    window.scroll(0, 0);
    this._modalService.showModalComponent(OverlayModalComponent, LoginComponent);
  }

  openRegistrationModal(): void {
    window.scroll(0, 0);
    this._modalService.showModalComponent(OverlayModalComponent, RegistrationComponent);
  }
}
