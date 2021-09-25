import { Component, DoCheck, OnInit } from '@angular/core';

import { LoaderService } from '../../services/loader.service';



@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements DoCheck {
  loading: boolean = false;

  constructor(
    private _loaderServce: LoaderService
  ) { }

  ngDoCheck() {
    this.loading = this._loaderServce.loading;
  }
}