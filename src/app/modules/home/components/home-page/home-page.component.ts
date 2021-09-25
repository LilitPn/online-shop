import { Component, OnInit } from '@angular/core';

import { InitDataService } from 'src/app/core/services/InitData.service';

import { IAccordion, IRibbons } from '../../models/home.models';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  advantages: any[];
  ribbons: IRibbons[];
  currentPage: number = 1;
  pageCount: number[] = [];
  currentRibbons: any[] = [];
  mainCarouselItems: any[] = [];
  insparedCarouselItems: any[] = [];
  showHeading: boolean;

  accordionData: IAccordion = {
    buttons: [
      'Countinue reading', 
      'Close'
    ],
    context: "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
  }

  constructor(
    private _initDataService: InitDataService
  ) { }

  ngOnInit(): void {
    this._initDataService.getInitData().subscribe(res => {
      this.advantages = res.pages[0].data.advantages;
      this.mainCarouselItems = res.pages[0].data.mainCarouselItems;
      this.insparedCarouselItems = res.pages[0].data.insparedCarouselItems;
      this.ribbons = res.pages[0].data.ribbons;

      let currentValue = this.ribbons.length / 12;

      if (currentValue != Number(currentValue.toFixed(0))) {
        currentValue = currentValue + 1
      }

      for (let i = 1; i < currentValue; i++) {
        this.pageCount.push(i)
      }

      for (let i = this.currentPage * 12 - 12; i < this.currentPage * 12; i++) {
        if (this.ribbons[i]) {
          this.currentRibbons.push(this.ribbons[i])
        }
      }
    })
  }

  getCurrentRibbons(ribbons: IRibbons[]): void {
    this.currentRibbons = ribbons;
  }

  getCurrentPage(currentPage: number): void {
    this.currentPage = currentPage
  }
}