import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseSettings } from '../../../../core/services/baseSettings';

import { EmailMessageI } from '../../../../core/interfaces/shared_components.interfaces';
import { Observable, Subject } from 'rxjs';



@Injectable()
export class ContactService {
    data: Subject<any> = new Subject<any>();

    constructor(
        private http: HttpClient,
        private baseSettings: BaseSettings
    ) { }

    sendEmail(userMessage: EmailMessageI): Observable<EmailMessageI> {
        return this.http.post<EmailMessageI>(`${this.baseSettings.apiUrl}/sendemails`, userMessage);
    }

    selectSection(section) {

    }

    setData(products) {
        this.data.next(products);
    }
}