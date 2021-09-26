import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-breadcrump',
  templateUrl: './breadcrump.component.html',
  styleUrls: ['./breadcrump.component.css']
})
export class BreadcrumpComponent implements OnInit {
  @Input() parentPath: string;

  breadcrumbStr: string = "";
  breadcrumbArr: string[] = new Array();


  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.createBreadctumb();
    this.parentPath = this.parentPath.charAt(0).toUpperCase() + this.parentPath.slice(1);
  }

  createBreadctumb(): void {
    let urlArr = this.router.url.split('/');
    urlArr = urlArr.slice(urlArr.indexOf(this.parentPath));

    for (let i = 0; i < urlArr.length; i++) {
      this.breadcrumbArr.push(urlArr[i].charAt(0).toUpperCase() + urlArr[i].slice(1));
    }
  }
}