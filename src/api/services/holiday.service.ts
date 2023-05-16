/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { HolidayApiModel } from '../models/holiday-api-model';

@Injectable({
  providedIn: 'root',
})
export class HolidayService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiHolidayGetHolidaysByYearsGet
   */
  static readonly ApiHolidayGetHolidaysByYearsGetPath = '/api/Holiday/GetHolidaysByYears';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHolidayGetHolidaysByYearsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHolidayGetHolidaysByYearsGet$Plain$Response(params?: {
    from?: string;
    to?: string;

  }): Observable<StrictHttpResponse<Array<HolidayApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, HolidayService.ApiHolidayGetHolidaysByYearsGetPath, 'get');
    if (params) {

      rb.query('from', params.from, {});
      rb.query('to', params.to, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<HolidayApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiHolidayGetHolidaysByYearsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHolidayGetHolidaysByYearsGet$Plain(params?: {
    from?: string;
    to?: string;

  }): Observable<Array<HolidayApiModel>> {

    return this.apiHolidayGetHolidaysByYearsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<HolidayApiModel>>) => r.body as Array<HolidayApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHolidayGetHolidaysByYearsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHolidayGetHolidaysByYearsGet$Response(params?: {
    from?: string;
    to?: string;

  }): Observable<StrictHttpResponse<Array<HolidayApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, HolidayService.ApiHolidayGetHolidaysByYearsGetPath, 'get');
    if (params) {

      rb.query('from', params.from, {});
      rb.query('to', params.to, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<HolidayApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiHolidayGetHolidaysByYearsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHolidayGetHolidaysByYearsGet(params?: {
    from?: string;
    to?: string;

  }): Observable<Array<HolidayApiModel>> {

    return this.apiHolidayGetHolidaysByYearsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<HolidayApiModel>>) => r.body as Array<HolidayApiModel>)
    );
  }

  /**
   * Path part for operation apiHolidayUpdateHolidaysPut
   */
  static readonly ApiHolidayUpdateHolidaysPutPath = '/api/Holiday/UpdateHolidays';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHolidayUpdateHolidaysPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiHolidayUpdateHolidaysPut$Plain$Response(params?: {
    from?: string;
    to?: string;
      body?: null | Array<HolidayApiModel>
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, HolidayService.ApiHolidayUpdateHolidaysPutPath, 'put');
    if (params) {

      rb.query('from', params.from, {});
      rb.query('to', params.to, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiHolidayUpdateHolidaysPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiHolidayUpdateHolidaysPut$Plain(params?: {
    from?: string;
    to?: string;
      body?: null | Array<HolidayApiModel>
  }): Observable<boolean> {

    return this.apiHolidayUpdateHolidaysPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHolidayUpdateHolidaysPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiHolidayUpdateHolidaysPut$Response(params?: {
    from?: string;
    to?: string;
      body?: null | Array<HolidayApiModel>
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, HolidayService.ApiHolidayUpdateHolidaysPutPath, 'put');
    if (params) {

      rb.query('from', params.from, {});
      rb.query('to', params.to, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiHolidayUpdateHolidaysPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiHolidayUpdateHolidaysPut(params?: {
    from?: string;
    to?: string;
      body?: null | Array<HolidayApiModel>
  }): Observable<boolean> {

    return this.apiHolidayUpdateHolidaysPut$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

}
