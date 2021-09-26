import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class PreloaderService {
  loading: Subject<boolean> = new Subject<boolean>();

  show(): void {
    this.loading.next(true);
  }

  hide(): void {
    setTimeout(() => {
      this.loading.next(false);
    }, 5000);
  }
}