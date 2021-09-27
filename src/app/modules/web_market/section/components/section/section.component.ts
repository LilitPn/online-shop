import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  parentUrl: string = 'Market';
  loading: boolean = false;
  data = []

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.store
      .select(state => state.data)
      .subscribe(data => console.log(data));
  }
}
