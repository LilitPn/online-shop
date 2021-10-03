import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AuthService } from 'src/app/core/services/auth.service';
import { InitDataService } from 'src/app/core/services/InitData.service';
import { ModalDataService } from 'src/app/shared/services/modalData.service';

import { OverlayModalComponent } from 'src/app/shared/components/overlay-modal/overlay-modal.component';
import { LoginComponent } from '../../auth/login/login.component';
import { RegistrationComponent } from '../../auth/registration/registration.component';




interface ITopNavigationModel {
  link: string,
  exact: boolean,
  name: string
}

interface IMainNavigationItemModel {
  link: string,
  exact: boolean,
  name: string,
  hasCaret: boolean,
  children?: ISubMenu[]
}

interface ISubMenu {
  sectionTitle: string,
  sectionName: string[]
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOpen: number = null;
  menuIsOpen: number = 0;
  subMenuIsOpen: number = 0;
  showMobileNavigation: boolean = false;
  searchIsShown: boolean = false;
  topNavigationConfigs: ITopNavigationModel[];
  mainNavigationConfigs: IMainNavigationItemModel[];
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
        this.topNavigationConfigs = res.sections[0].data;
        this.mainNavigationConfigs = res.sections[1].data;
      });
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
  }

  openMobileNavigation(section: number): void {
    console.log(section);

    this.isOpen == section ? this.isOpen = 0 : this.isOpen = section;
  }

  changeNavigation(section: number): void {
    this.menuIsOpen == section ? this.menuIsOpen = 0 : this.menuIsOpen = section;
  }

  changeSubNavigation(section: number): void {
    this.subMenuIsOpen == section ? this.subMenuIsOpen = null : this.subMenuIsOpen = section;

    setTimeout(() => { this.menuIsOpen = 0 }, 1000)
  }

  openLoginModal(): void {
    this._modalService.showModalComponent(OverlayModalComponent, LoginComponent);
  }

  openRegistrationModal(): void {
    this._modalService.showModalComponent(OverlayModalComponent, RegistrationComponent);
  }

  logout(): void {
    this.authService.logout();
  }
}