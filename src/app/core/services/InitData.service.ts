import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class InitDataService {
  constructor(public http: HttpClient) { }

  getInitData(): Observable<any> {
    return this.http.get("assets/db/db.json")
  }
}