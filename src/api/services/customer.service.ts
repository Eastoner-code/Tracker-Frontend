/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { GeneralCustomerReportApiModal } from '../models/general-customer-report-api-modal';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCustomerCustomerReportGet
   */
  static readonly ApiCustomerCustomerReportGetPath = '/api/Customer/CustomerReport';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerCustomerReportGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerCustomerReportGet$Plain$Response(params?: {
    customerUrl?: string;
    preMonth?: boolean;
    timezoneOffset?: number;

  }): Observable<StrictHttpResponse<GeneralCustomerReportApiModal>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerCustomerReportGetPath, 'get');
    if (params) {

      rb.query('customerUrl', params.customerUrl, {});
      rb.query('preMonth', params.preMonth, {});
      rb.query('timezoneOffset', params.timezoneOffset, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GeneralCustomerReportApiModal>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerCustomerReportGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerCustomerReportGet$Plain(params?: {
    customerUrl?: string;
    preMonth?: boolean;
    timezoneOffset?: number;

  }): Observable<GeneralCustomerReportApiModal> {

    return this.apiCustomerCustomerReportGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GeneralCustomerReportApiModal>) => r.body as GeneralCustomerReportApiModal)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerCustomerReportGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerCustomerReportGet$Response(params?: {
    customerUrl?: string;
    preMonth?: boolean;
    timezoneOffset?: number;

  }): Observable<StrictHttpResponse<GeneralCustomerReportApiModal>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerCustomerReportGetPath, 'get');
    if (params) {

      rb.query('customerUrl', params.customerUrl, {});
      rb.query('preMonth', params.preMonth, {});
      rb.query('timezoneOffset', params.timezoneOffset, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GeneralCustomerReportApiModal>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerCustomerReportGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerCustomerReportGet(params?: {
    customerUrl?: string;
    preMonth?: boolean;
    timezoneOffset?: number;

  }): Observable<GeneralCustomerReportApiModal> {

    return this.apiCustomerCustomerReportGet$Response(params).pipe(
      map((r: StrictHttpResponse<GeneralCustomerReportApiModal>) => r.body as GeneralCustomerReportApiModal)
    );
  }

}
