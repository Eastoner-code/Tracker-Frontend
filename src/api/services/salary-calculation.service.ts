/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { MonthSalaryApiModel } from '../models/month-salary-api-model';
import { SalariesApiModel } from '../models/salaries-api-model';

@Injectable({
  providedIn: 'root',
})
export class SalaryCalculationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiSalaryCalculationGetSalaryByUserIdMonthUserIdMonthYearGet
   */
  static readonly ApiSalaryCalculationGetSalaryByUserIdMonthUserIdMonthYearGetPath = '/api/SalaryCalculation/GetSalaryByUserIdMonth/{userId}/{month}/{year}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSalaryCalculationGetSalaryByUserIdMonthUserIdMonthYearGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalaryCalculationGetSalaryByUserIdMonthUserIdMonthYearGet$Plain$Response(params: {
    userId: number;
    month: number;
    year: number;

  }): Observable<StrictHttpResponse<MonthSalaryApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, SalaryCalculationService.ApiSalaryCalculationGetSalaryByUserIdMonthUserIdMonthYearGetPath, 'get');
    if (params) {

      rb.path('userId', params.userId, {});
      rb.path('month', params.month, {});
      rb.path('year', params.year, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MonthSalaryApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSalaryCalculationGetSalaryByUserIdMonthUserIdMonthYearGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalaryCalculationGetSalaryByUserIdMonthUserIdMonthYearGet$Plain(params: {
    userId: number;
    month: number;
    year: number;

  }): Observable<MonthSalaryApiModel> {

    return this.apiSalaryCalculationGetSalaryByUserIdMonthUserIdMonthYearGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<MonthSalaryApiModel>) => r.body as MonthSalaryApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSalaryCalculationGetSalaryByUserIdMonthUserIdMonthYearGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalaryCalculationGetSalaryByUserIdMonthUserIdMonthYearGet$Response(params: {
    userId: number;
    month: number;
    year: number;

  }): Observable<StrictHttpResponse<MonthSalaryApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, SalaryCalculationService.ApiSalaryCalculationGetSalaryByUserIdMonthUserIdMonthYearGetPath, 'get');
    if (params) {

      rb.path('userId', params.userId, {});
      rb.path('month', params.month, {});
      rb.path('year', params.year, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MonthSalaryApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSalaryCalculationGetSalaryByUserIdMonthUserIdMonthYearGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalaryCalculationGetSalaryByUserIdMonthUserIdMonthYearGet(params: {
    userId: number;
    month: number;
    year: number;

  }): Observable<MonthSalaryApiModel> {

    return this.apiSalaryCalculationGetSalaryByUserIdMonthUserIdMonthYearGet$Response(params).pipe(
      map((r: StrictHttpResponse<MonthSalaryApiModel>) => r.body as MonthSalaryApiModel)
    );
  }

  /**
   * Path part for operation apiSalaryCalculationGetSalariesByMonthMonthYearGet
   */
  static readonly ApiSalaryCalculationGetSalariesByMonthMonthYearGetPath = '/api/SalaryCalculation/GetSalariesByMonth/{month}/{year}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSalaryCalculationGetSalariesByMonthMonthYearGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalaryCalculationGetSalariesByMonthMonthYearGet$Plain$Response(params: {
    month: number;
    year: number;

  }): Observable<StrictHttpResponse<Array<SalariesApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, SalaryCalculationService.ApiSalaryCalculationGetSalariesByMonthMonthYearGetPath, 'get');
    if (params) {

      rb.path('month', params.month, {});
      rb.path('year', params.year, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SalariesApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSalaryCalculationGetSalariesByMonthMonthYearGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalaryCalculationGetSalariesByMonthMonthYearGet$Plain(params: {
    month: number;
    year: number;

  }): Observable<Array<SalariesApiModel>> {

    return this.apiSalaryCalculationGetSalariesByMonthMonthYearGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SalariesApiModel>>) => r.body as Array<SalariesApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSalaryCalculationGetSalariesByMonthMonthYearGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalaryCalculationGetSalariesByMonthMonthYearGet$Response(params: {
    month: number;
    year: number;

  }): Observable<StrictHttpResponse<Array<SalariesApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, SalaryCalculationService.ApiSalaryCalculationGetSalariesByMonthMonthYearGetPath, 'get');
    if (params) {

      rb.path('month', params.month, {});
      rb.path('year', params.year, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SalariesApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSalaryCalculationGetSalariesByMonthMonthYearGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalaryCalculationGetSalariesByMonthMonthYearGet(params: {
    month: number;
    year: number;

  }): Observable<Array<SalariesApiModel>> {

    return this.apiSalaryCalculationGetSalariesByMonthMonthYearGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SalariesApiModel>>) => r.body as Array<SalariesApiModel>)
    );
  }

}
