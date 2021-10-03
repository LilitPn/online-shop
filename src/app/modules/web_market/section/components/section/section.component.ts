import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


interface Ribbon {
  hasGift: boolean;
  hasNew: boolean;
  hasSale: boolean;
  link: string;
  price: string;
  src: string;
  text: string;
}

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  providers: [Store]
})
export class SectionComponent implements OnInit {
  parentUrl: string = 'Market';
  loading: boolean = false;
  ribbons: Ribbon[] = new Array<Ribbon>();

  constructor(private _store: Store<any>) { }

  ngOnInit(): void {
    this._store
      .select(state => state.data)
      .subscribe(data => {
        this.ribbons = data.data[0].ribbons;
      });
  }
}
