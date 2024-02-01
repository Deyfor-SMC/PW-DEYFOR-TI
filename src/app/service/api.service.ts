import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, single, throwError } from 'rxjs';
import { News } from '../models/news.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://www.corp.deyfor.net';

  constructor(private http:HttpClient) {}


  public getNews(): Observable<News[]>{
    return this.http.get<News[]>(this.urlApi + "/api/").pipe(single());
  }


  public GetNoticeById(id: number): Observable<News> {
    return this.http.get<News>(this.urlApi + "/api/" + id).pipe(single());
  }

}
