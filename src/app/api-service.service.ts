import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiPrefix = "https://67262f21302d03037e6cab06.mockapi.io/api/sample/"

  constructor( private http: HttpClient ) { }

  getAllProduct():Observable<any>{
    return this.http.get(`${this.apiPrefix}/userDetails`)
  }
}
