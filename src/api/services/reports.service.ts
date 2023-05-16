/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ActivityApiModel } from '../models/activity-api-model';
import { ReportFilterApiModel } from '../models/report-filter-api-model';

@Injectable({
  providedIn: 'root',
})
export class ReportsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiReportsGetByFilterPost
   */
  static readonly ApiReportsGetByFilterPostPath = '/api/Reports/GetByFilter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportsGetByFilterPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportsGetByFilterPost$Plain$Response(params?: {
      body?: ReportFilterApiModel
  }): Observable<StrictHttpResponse<Array<ActivityApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, ReportsService.ApiReportsGetByFilterPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ActivityApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReportsGetByFilterPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportsGetByFilterPost$Plain(params?: {
      body?: ReportFilterApiModel
  }): Observable<Array<ActivityApiModel>> {

    return this.apiReportsGetByFilterPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ActivityApiModel>>) => r.body as Array<ActivityApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReportsGetByFilterPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportsGetByFilterPost$Response(params?: {
      body?: ReportFilterApiModel
  }): Observable<StrictHttpResponse<Array<ActivityApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, ReportsService.ApiReportsGetByFilterPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ActivityApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReportsGetByFilterPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReportsGetByFilterPost(params?: {
      body?: ReportFilterApiModel
  }): Observable<Array<ActivityApiModel>> {

    return this.apiReportsGetByFilterPost$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ActivityApiModel>>) => r.body as Array<ActivityApiModel>)
    );
  }

}
