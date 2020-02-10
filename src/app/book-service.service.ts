import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  //Url For Api call.
  private _siteURL = 'https://www.googleapis.com/books/v1/volumes?q=';
  private _key = '&key=AIzaSyDY7cvXQUdQc4MPrxKAzJcKke8aTAWr08k';

  //Gets book info
  getBookInfo(bookName: string): Observable<Book> {
    //console.log(bookName);
    return this._http.get<Book>(this._siteURL + bookName + this._key).pipe(tap(data => console.log('All: ' + JSON.stringify(data))));

  }

  constructor(private _http: HttpClient) { }
}
