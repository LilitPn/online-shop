import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Alert, AlertType } from '../models/auth.interface';



@Injectable()
export class AlertService {
    private _subject: Subject<Alert> = new Subject<Alert>();
    private _defaultId: string = 'default-alert';

    onAlert(id = this._defaultId): Observable<Alert> {
        return this._subject.asObservable().pipe(filter(x => x && x.id === id));
    }

    success(message: string, options?: any): void {
        this.alert(new Alert({ ...options, type: AlertType.Success, message }));
    }

    error(message: string, options?: any): void {
        this.alert(new Alert({ ...options, type: AlertType.Error, message }));
    }

    info(message: string, options?: any): void {
        this.alert(new Alert({ ...options, type: AlertType.Info, message }));
    }

    warn(message: string, options?: any): void {
        this.alert(new Alert({ ...options, type: AlertType.Warning, message }));
    }

    alert(alert: Alert): void {
        alert.id = alert.id || this._defaultId;
        this._subject.next(alert);
    }

    clear(id = this._defaultId): void {
        this._subject.next(new Alert({ id }));
    }
}