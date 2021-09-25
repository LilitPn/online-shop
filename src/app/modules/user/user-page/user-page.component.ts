import { Component, OnInit } from "@angular/core";

import { InitDataService } from "src/app/core/services/InitData.service";
import { IRibbons } from "../../home/models/home.models";



@Component({
  selector: 'user-home-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  parentUrl: string = 'user';
  ribbons: IRibbons[];
  currentPage: number = 1;
  pageCount: number[] = [];
  currentRibbons: IRibbons[] = [];

  
  constructor(
    private _initDataService: InitDataService
  ) { }

  ngOnInit() {
    this._initDataService.getInitData().subscribe(res => {
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
    this.currentPage = currentPage;
  }
}