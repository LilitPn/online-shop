import { Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: [`
    .page-item.active .page-link { z-index: 3; color: #fff; background-color: #4fbfa8; border-color: #4fbfa8; }
    .conatiner { justify-content: center; }
  `]
})
export class PaginationComponent {
  @Output() changeCurrentItems = new EventEmitter();
  @Output() changeCurrentPage = new EventEmitter();

  @Input() currentPage:number;
  @Input() pageCount:number[];
  @Input() items:Array<any>;
  @Input() currentItems:Array<any>;

  setCurrentRibbons(): void {
    this.changeCurrentItems.emit(this.currentItems);
  }

  setCurrentPage(): void {
    this.changeCurrentPage.emit(this.currentPage);
  }

  changePage(page): void {
    this.currentItems = [];

    if (page == 'previous') {
      this.currentPage == this.pageCount[0] ? this.currentPage : this.currentPage = this.currentPage - 1;
    } else if (page == 'next') {
      this.currentPage == this.pageCount[this.pageCount.length - 1] ? this.currentPage : this.currentPage = this.currentPage + 1;
    } else {
      this.currentPage = page;
    }

    this.setCurrentPage();

    for (let i = this.currentPage * 12 - 12; i < this.currentPage * 12; i++) {
      if (this.items[i]) {
        this.currentItems.push(this.items[i])
      }
    }

    this.setCurrentRibbons();
  }
}