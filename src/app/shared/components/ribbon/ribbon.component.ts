import { Component, Input } from '@angular/core';

import { IRibbons } from 'src/app/modules/home/models/home.models';


@Component({
  selector: 'ribon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.css']
})
export class RibonComponent {
  @Input() ribbon:IRibbons;
}
