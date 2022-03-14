import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private Url = 'https://apiint.holapisos.com/es/api/node/inmuebles?page[limit]=32&page[offset]=0&sort[weight][path]=field_inmu_peso_orde&sort[weight][direction]=DESC&sort[relevancy][path]=relevancy&sort[relevancy][direction]=DESC&fields[node--inmuebles]=field_inmu_imag_arra,field_inmu_prec,field_inmu_nume_habi,field_inmu_refe,field_inmu_pobl,field_inmu_area_cons,field_inmu_tipo_sin_agru,field_inmu_tipo_via,field_inmu_nomb_call.%20Estos%20datos%20est%C3%A1n%20en%20el%20est%C3%A1ndar%20JSONAPI';
  constructor(private http: HttpClient) { }

  getHouse(): Observable < any > {
    return this.http.get(this.Url)
      .pipe(
        tap(w => console.log(w)),
        catchError(this.handleError)
      );
  }

  getHouseMore(offset: any): Observable<any> {
    console.log('offset: ', offset);
    let limite = 32;
    const options = { params: new HttpParams({fromString: `page[limit]=${limite}&page[offset]=${offset}&sort[weight][path]=field_inmu_peso_orde&sort[weight][direction]=DESC&sort[relevancy][path]=relevancy&sort[relevancy][direction]=DESC&fields[node--inmuebles]=field_inmu_imag_arra,field_inmu_prec,field_inmu_nume_habi,field_inmu_refe,field_inmu_pobl,field_inmu_area_cons,field_inmu_tipo_sin_agru,field_inmu_tipo_via,field_inmu_nomb_call.%20Estos%20datos%20est%C3%A1n%20en%20el%20est%C3%A1ndar%20JSONAPI`}) };
    return this.http.get(this.Url,options)
      .pipe(
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
