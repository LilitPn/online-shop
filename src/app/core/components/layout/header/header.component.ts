import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { MainNavigationItem, TopNavigationItem } from 'src/app/core/interfaces/layout.interface';

import { AuthService } from 'src/app/core/services/auth.service';
import { InitDataService } from 'src/app/core/services/InitData.service';
import { ModalDataService } from 'src/app/shared/services/modalData.service';

import { OverlayModalComponent } from 'src/app/shared/components/overlay-modal/overlay-modal.component';
import { LoginComponent } from '../../auth/login/login.component';
import { RegistrationComponent } from '../../auth/registration/registration.component';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOpen: number = null;
  mainIsOpen: number = 0;
  showMobileNavigation: boolean = false;
  searchIsShown: boolean = false;
  topNavigationData: TopNavigationItem[];
  mainNavigationData: MainNavigationItem[];
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;


  constructor(
    private _initDataService: InitDataService,
    private _modalService: ModalDataService,
    public authService: AuthService,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'hy', 'ru']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this._initDataService
      .getInitData()
      .subscribe(res => {
        this.topNavigationData = res.pages[1].data.topNavigationData;
        this.mainNavigationData = res.pages[1].data.mainNavigationData;
      });
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
  }

  openMobileNavigation(section: number): void {
    this.isOpen == section ? this.isOpen = 0 : this.isOpen = section;
  }

  openSubNavigation(section: number): void {
    this.mainIsOpen == section ? this.mainIsOpen = 0 : this.mainIsOpen = section;
  }

  logout(): void {
    this.authService.logout();
  }

  openLoginModal(): void {
    this._modalService.showModalComponent(OverlayModalComponent, LoginComponent);
  }

  openRegistrationModal(): void {
    this._modalService.showModalComponent(OverlayModalComponent, RegistrationComponent);
  }
}