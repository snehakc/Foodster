import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Response, RequestOptions } from '@angular/http'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { cities } from '../model/cities';
import { RestrauntFound } from '../model/restraunts';



@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  // Zomato API calls

  apiRoot: string = "https://developers.zomato.com/api/v2.1";
  header: HttpHeaders = new HttpHeaders(
    {
      'content-type': "application/json",
      'user-key': '08db76e22ccb7e3569c7caa5dd56514c'
    }
  );
  constructor(private http: HttpClient) {
  }

  /**
   * citySearchApi
   * Searches available cities based on given query 
   *  //  https://developers.zomato.com/api/v2.1/cities?q=Oma
   */
  public citySearch(cityQuery) {
    const options = {
      headers: this.header,
      params: new HttpParams()
        .set('q', cityQuery)
        .set('count', '5')

    };
    return this.http.get<cities>(this.apiRoot + "/cities", options)
      .pipe(
        map(data => {
          return data.location_suggestions
        })
      );
  }

  /**
    * getRestrauntsApi 
    * Get Restraunts List based on the city selected 
    */
  public getRestraunts(cityId) {
    const options = {
      headers: this.header,
      params: new HttpParams()
        .set('entity_id', cityId)
        .set('entity_type', "city")
        .set('count', '20')

    };
    return this.http.get<RestrauntFound>(this.apiRoot + "/search", options)
      .pipe(
        map(
          data => {
            return  data.restaurants
          })
      );
  }

  /**
    * getRestrauntsApi 
    * Get Restaurant detais of the selected restaurant 
    */
   public getRestrauntDetails(resId) {
    const options = {
      headers: this.header,
      params: new HttpParams()
        .set('res_id', resId)
    };
    return this.http.get<RestrauntFound>(this.apiRoot + "/restaurant", options)
      .pipe(
        map(
          data => {
            return data.restaurants
          })
      );
  }

}
