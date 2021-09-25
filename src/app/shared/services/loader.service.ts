import { Injectable } from '@angular/core';


@Injectable()
export class LoaderService {
    public loading: boolean = false;
    private _body: HTMLElement = document.getElementsByTagName('body')[0];

    addLoader(): void {
        this.loading = true;
        this._body.setAttribute('class', 'overlay');
    }

    removeLoader(): void {
        this.loading = false;
        this._body.removeAttribute('class');
    }
}