/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { PositionApiModel } from '../models/position-api-model';

@Injectable({
  providedIn: 'root',
})
export class PositionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPositionCreatePost
   */
  static readonly ApiPositionCreatePostPath = '/api/Position/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPositionCreatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPositionCreatePost$Plain$Response(params?: {
      body?: PositionApiModel
  }): Observable<StrictHttpResponse<PositionApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, PositionService.ApiPositionCreatePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PositionApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPositionCreatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPositionCreatePost$Plain(params?: {
      body?: PositionApiModel
  }): Observable<PositionApiModel> {

    return this.apiPositionCreatePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PositionApiModel>) => r.body as PositionApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPositionCreatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPositionCreatePost$Response(params?: {
      body?: PositionApiModel
  }): Observable<StrictHttpResponse<PositionApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, PositionService.ApiPositionCreatePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PositionApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPositionCreatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPositionCreatePost(params?: {
      body?: PositionApiModel
  }): Observable<PositionApiModel> {

    return this.apiPositionCreatePost$Response(params).pipe(
      map((r: StrictHttpResponse<PositionApiModel>) => r.body as PositionApiModel)
    );
  }

  /**
   * Path part for operation apiPositionUpdatePut
   */
  static readonly ApiPositionUpdatePutPath = '/api/Position/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPositionUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPositionUpdatePut$Plain$Response(params?: {
      body?: PositionApiModel
  }): Observable<StrictHttpResponse<PositionApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, PositionService.ApiPositionUpdatePutPath, 'put');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PositionApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPositionUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPositionUpdatePut$Plain(params?: {
      body?: PositionApiModel
  }): Observable<PositionApiModel> {

    return this.apiPositionUpdatePut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PositionApiModel>) => r.body as PositionApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPositionUpdatePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPositionUpdatePut$Response(params?: {
      body?: PositionApiModel
  }): Observable<StrictHttpResponse<PositionApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, PositionService.ApiPositionUpdatePutPath, 'put');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PositionApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPositionUpdatePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPositionUpdatePut(params?: {
      body?: PositionApiModel
  }): Observable<PositionApiModel> {

    return this.apiPositionUpdatePut$Response(params).pipe(
      map((r: StrictHttpResponse<PositionApiModel>) => r.body as PositionApiModel)
    );
  }

  /**
   * Path part for operation apiPositionDeleteDelete
   */
  static readonly ApiPositionDeleteDeletePath = '/api/Position/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPositionDeleteDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionDeleteDelete$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, PositionService.ApiPositionDeleteDeletePath, 'delete');
    if (params) {

      rb.query('id', params.id, {});

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
   * To access the full response (for headers, for example), `apiPositionDeleteDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionDeleteDelete$Plain(params?: {
    id?: number;

  }): Observable<boolean> {

    return this.apiPositionDeleteDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPositionDeleteDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionDeleteDelete$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, PositionService.ApiPositionDeleteDeletePath, 'delete');
    if (params) {

      rb.query('id', params.id, {});

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
   * To access the full response (for headers, for example), `apiPositionDeleteDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionDeleteDelete(params?: {
    id?: number;

  }): Observable<boolean> {

    return this.apiPositionDeleteDelete$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiPositionGetIdGet
   */
  static readonly ApiPositionGetIdGetPath = '/api/Position/Get/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPositionGetIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionGetIdGet$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<PositionApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, PositionService.ApiPositionGetIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PositionApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPositionGetIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionGetIdGet$Plain(params: {
    id: number;

  }): Observable<PositionApiModel> {

    return this.apiPositionGetIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PositionApiModel>) => r.body as PositionApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPositionGetIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionGetIdGet$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<PositionApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, PositionService.ApiPositionGetIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PositionApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPositionGetIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionGetIdGet(params: {
    id: number;

  }): Observable<PositionApiModel> {

    return this.apiPositionGetIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<PositionApiModel>) => r.body as PositionApiModel)
    );
  }

  /**
   * Path part for operation apiPositionGetAllGet
   */
  static readonly ApiPositionGetAllGetPath = '/api/Position/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPositionGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionGetAllGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<PositionApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, PositionService.ApiPositionGetAllGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PositionApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPositionGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionGetAllGet$Plain(params?: {

  }): Observable<Array<PositionApiModel>> {

    return this.apiPositionGetAllGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PositionApiModel>>) => r.body as Array<PositionApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPositionGetAllGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionGetAllGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<PositionApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, PositionService.ApiPositionGetAllGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PositionApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPositionGetAllGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionGetAllGet(params?: {

  }): Observable<Array<PositionApiModel>> {

    return this.apiPositionGetAllGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PositionApiModel>>) => r.body as Array<PositionApiModel>)
    );
  }

}
