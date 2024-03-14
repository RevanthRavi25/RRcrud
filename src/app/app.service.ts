import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    return this.http.get<any>('http://172.16.4.88:3000/api/findall');
  }
}
