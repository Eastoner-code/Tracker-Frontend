/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { UserRateApiModel } from '../models/user-rate-api-model';

@Injectable({
  providedIn: 'root',
})
export class SalaryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiSalaryGetRatesByUserIdUserIdGet
   */
  static readonly ApiSalaryGetRatesByUserIdUserIdGetPath = '/api/Salary/GetRatesByUserId/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSalaryGetRatesByUserIdUserIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalaryGetRatesByUserIdUserIdGet$Plain$Response(params: {
    userId: number;

  }): Observable<StrictHttpResponse<Array<UserRateApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, SalaryService.ApiSalaryGetRatesByUserIdUserIdGetPath, 'get');
    if (params) {

      rb.path('userId', params.userId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserRateApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSalaryGetRatesByUserIdUserIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalaryGetRatesByUserIdUserIdGet$Plain(params: {
    userId: number;

  }): Observable<Array<UserRateApiModel>> {

    return this.apiSalaryGetRatesByUserIdUserIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserRateApiModel>>) => r.body as Array<UserRateApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSalaryGetRatesByUserIdUserIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalaryGetRatesByUserIdUserIdGet$Response(params: {
    userId: number;

  }): Observable<StrictHttpResponse<Array<UserRateApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, SalaryService.ApiSalaryGetRatesByUserIdUserIdGetPath, 'get');
    if (params) {

      rb.path('userId', params.userId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserRateApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSalaryGetRatesByUserIdUserIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalaryGetRatesByUserIdUserIdGet(params: {
    userId: number;

  }): Observable<Array<UserRateApiModel>> {

    return this.apiSalaryGetRatesByUserIdUserIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserRateApiModel>>) => r.body as Array<UserRateApiModel>)
    );
  }

  /**
   * Path part for operation apiSalaryAddRatePost
   */
  static readonly ApiSalaryAddRatePostPath = '/api/Salary/AddRate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSalaryAddRatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSalaryAddRatePost$Plain$Response(params?: {
      body?: UserRateApiModel
  }): Observable<StrictHttpResponse<UserRateApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, SalaryService.ApiSalaryAddRatePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserRateApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSalaryAddRatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSalaryAddRatePost$Plain(params?: {
      body?: UserRateApiModel
  }): Observable<UserRateApiModel> {

    return this.apiSalaryAddRatePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserRateApiModel>) => r.body as UserRateApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSalaryAddRatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSalaryAddRatePost$Response(params?: {
      body?: UserRateApiModel
  }): Observable<StrictHttpResponse<UserRateApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, SalaryService.ApiSalaryAddRatePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserRateApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSalaryAddRatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSalaryAddRatePost(params?: {
      body?: UserRateApiModel
  }): Observable<UserRateApiModel> {

    return this.apiSalaryAddRatePost$Response(params).pipe(
      map((r: StrictHttpResponse<UserRateApiModel>) => r.body as UserRateApiModel)
    );
  }

  /**
   * Path part for operation apiSalaryUpdateRatePut
   */
  static readonly ApiSalaryUpdateRatePutPath = '/api/Salary/UpdateRate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSalaryUpdateRatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSalaryUpdateRatePut$Plain$Response(params?: {
      body?: UserRateApiModel
  }): Observable<StrictHttpResponse<UserRateApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, SalaryService.ApiSalaryUpdateRatePutPath, 'put');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserRateApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSalaryUpdateRatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSalaryUpdateRatePut$Plain(params?: {
      body?: UserRateApiModel
  }): Observable<UserRateApiModel> {

    return this.apiSalaryUpdateRatePut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserRateApiModel>) => r.body as UserRateApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSalaryUpdateRatePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSalaryUpdateRatePut$Response(params?: {
      body?: UserRateApiModel
  }): Observable<StrictHttpResponse<UserRateApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, SalaryService.ApiSalaryUpdateRatePutPath, 'put');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserRateApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSalaryUpdateRatePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSalaryUpdateRatePut(params?: {
      body?: UserRateApiModel
  }): Observable<UserRateApiModel> {

    return this.apiSalaryUpdateRatePut$Response(params).pipe(
      map((r: StrictHttpResponse<UserRateApiModel>) => r.body as UserRateApiModel)
    );
  }

  /**
   * Path part for operation apiSalaryDeleteRateIdDelete
   */
  static readonly ApiSalaryDeleteRateIdDeletePath = '/api/Salary/DeleteRate/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSalaryDeleteRateIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalaryDeleteRateIdDelete$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, SalaryService.ApiSalaryDeleteRateIdDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id, {});

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
   * To access the full response (for headers, for example), `apiSalaryDeleteRateIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalaryDeleteRateIdDelete$Plain(params: {
    id: number;

  }): Observable<boolean> {

    return this.apiSalaryDeleteRateIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSalaryDeleteRateIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalaryDeleteRateIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, SalaryService.ApiSalaryDeleteRateIdDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id, {});

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
   * To access the full response (for headers, for example), `apiSalaryDeleteRateIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSalaryDeleteRateIdDelete(params: {
    id: number;

  }): Observable<boolean> {

    return this.apiSalaryDeleteRateIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

}
