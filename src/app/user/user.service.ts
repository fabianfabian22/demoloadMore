import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getUser(): Observable < any > {
    return this.http.get(this.Url)
      .pipe(
        tap(w => console.log(w)),
        catchError(this.handleError)
      );
  }


  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `un error -->: ${err.error.message}`;
    } else {
      errorMessage = ` code error ${err}`;
    }
    console.error(err);
    return errorMessage;
  }


}
