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
import { ActivityApiModelPagedResult } from '../models/activity-api-model-paged-result';
import { ActivityFilterApiModel } from '../models/activity-filter-api-model';
import { ActivityFilterPageApiModel } from '../models/activity-filter-page-api-model';

@Injectable({
  providedIn: 'root',
})
export class ActivityService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiActivityCreatePost
   */
  static readonly ApiActivityCreatePostPath = '/api/Activity/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivityCreatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivityCreatePost$Plain$Response(params?: {
      body?: ActivityApiModel
  }): Observable<StrictHttpResponse<ActivityApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, ActivityService.ApiActivityCreatePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ActivityApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiActivityCreatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivityCreatePost$Plain(params?: {
      body?: ActivityApiModel
  }): Observable<ActivityApiModel> {

    return this.apiActivityCreatePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ActivityApiModel>) => r.body as ActivityApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivityCreatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivityCreatePost$Response(params?: {
      body?: ActivityApiModel
  }): Observable<StrictHttpResponse<ActivityApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, ActivityService.ApiActivityCreatePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ActivityApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiActivityCreatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivityCreatePost(params?: {
      body?: ActivityApiModel
  }): Observable<ActivityApiModel> {

    return this.apiActivityCreatePost$Response(params).pipe(
      map((r: StrictHttpResponse<ActivityApiModel>) => r.body as ActivityApiModel)
    );
  }

  /**
   * Path part for operation apiActivityUpdatePut
   */
  static readonly ApiActivityUpdatePutPath = '/api/Activity/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivityUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivityUpdatePut$Plain$Response(params?: {
      body?: ActivityApiModel
  }): Observable<StrictHttpResponse<ActivityApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, ActivityService.ApiActivityUpdatePutPath, 'put');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ActivityApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiActivityUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivityUpdatePut$Plain(params?: {
      body?: ActivityApiModel
  }): Observable<ActivityApiModel> {

    return this.apiActivityUpdatePut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ActivityApiModel>) => r.body as ActivityApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivityUpdatePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivityUpdatePut$Response(params?: {
      body?: ActivityApiModel
  }): Observable<StrictHttpResponse<ActivityApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, ActivityService.ApiActivityUpdatePutPath, 'put');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ActivityApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiActivityUpdatePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivityUpdatePut(params?: {
      body?: ActivityApiModel
  }): Observable<ActivityApiModel> {

    return this.apiActivityUpdatePut$Response(params).pipe(
      map((r: StrictHttpResponse<ActivityApiModel>) => r.body as ActivityApiModel)
    );
  }

  /**
   * Path part for operation apiActivityDeleteIdDelete
   */
  static readonly ApiActivityDeleteIdDeletePath = '/api/Activity/Delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivityDeleteIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivityDeleteIdDelete$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ActivityService.ApiActivityDeleteIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiActivityDeleteIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivityDeleteIdDelete$Plain(params: {
    id: number;

  }): Observable<boolean> {

    return this.apiActivityDeleteIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivityDeleteIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivityDeleteIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ActivityService.ApiActivityDeleteIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiActivityDeleteIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivityDeleteIdDelete(params: {
    id: number;

  }): Observable<boolean> {

    return this.apiActivityDeleteIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiActivityGetIdGet
   */
  static readonly ApiActivityGetIdGetPath = '/api/Activity/Get/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivityGetIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivityGetIdGet$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<ActivityApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, ActivityService.ApiActivityGetIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ActivityApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiActivityGetIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivityGetIdGet$Plain(params: {
    id: number;

  }): Observable<ActivityApiModel> {

    return this.apiActivityGetIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ActivityApiModel>) => r.body as ActivityApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivityGetIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivityGetIdGet$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<ActivityApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, ActivityService.ApiActivityGetIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ActivityApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiActivityGetIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivityGetIdGet(params: {
    id: number;

  }): Observable<ActivityApiModel> {

    return this.apiActivityGetIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<ActivityApiModel>) => r.body as ActivityApiModel)
    );
  }

  /**
   * Path part for operation apiActivityGetAllGet
   */
  static readonly ApiActivityGetAllGetPath = '/api/Activity/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivityGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivityGetAllGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ActivityApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, ActivityService.ApiActivityGetAllGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `apiActivityGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivityGetAllGet$Plain(params?: {

  }): Observable<Array<ActivityApiModel>> {

    return this.apiActivityGetAllGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ActivityApiModel>>) => r.body as Array<ActivityApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivityGetAllGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivityGetAllGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ActivityApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, ActivityService.ApiActivityGetAllGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `apiActivityGetAllGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiActivityGetAllGet(params?: {

  }): Observable<Array<ActivityApiModel>> {

    return this.apiActivityGetAllGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ActivityApiModel>>) => r.body as Array<ActivityApiModel>)
    );
  }

  /**
   * Path part for operation apiActivityGetByFilterPost
   */
  static readonly ApiActivityGetByFilterPostPath = '/api/Activity/GetByFilter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivityGetByFilterPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivityGetByFilterPost$Plain$Response(params?: {
      body?: ActivityFilterApiModel
  }): Observable<StrictHttpResponse<Array<ActivityApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, ActivityService.ApiActivityGetByFilterPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiActivityGetByFilterPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivityGetByFilterPost$Plain(params?: {
      body?: ActivityFilterApiModel
  }): Observable<Array<ActivityApiModel>> {

    return this.apiActivityGetByFilterPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ActivityApiModel>>) => r.body as Array<ActivityApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivityGetByFilterPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivityGetByFilterPost$Response(params?: {
      body?: ActivityFilterApiModel
  }): Observable<StrictHttpResponse<Array<ActivityApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, ActivityService.ApiActivityGetByFilterPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiActivityGetByFilterPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivityGetByFilterPost(params?: {
      body?: ActivityFilterApiModel
  }): Observable<Array<ActivityApiModel>> {

    return this.apiActivityGetByFilterPost$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ActivityApiModel>>) => r.body as Array<ActivityApiModel>)
    );
  }

  /**
   * Path part for operation apiActivityGetPageByFilterPost
   */
  static readonly ApiActivityGetPageByFilterPostPath = '/api/Activity/GetPageByFilter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivityGetPageByFilterPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivityGetPageByFilterPost$Plain$Response(params?: {
      body?: ActivityFilterPageApiModel
  }): Observable<StrictHttpResponse<ActivityApiModelPagedResult>> {

    const rb = new RequestBuilder(this.rootUrl, ActivityService.ApiActivityGetPageByFilterPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ActivityApiModelPagedResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiActivityGetPageByFilterPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivityGetPageByFilterPost$Plain(params?: {
      body?: ActivityFilterPageApiModel
  }): Observable<ActivityApiModelPagedResult> {

    return this.apiActivityGetPageByFilterPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ActivityApiModelPagedResult>) => r.body as ActivityApiModelPagedResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiActivityGetPageByFilterPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivityGetPageByFilterPost$Response(params?: {
      body?: ActivityFilterPageApiModel
  }): Observable<StrictHttpResponse<ActivityApiModelPagedResult>> {

    const rb = new RequestBuilder(this.rootUrl, ActivityService.ApiActivityGetPageByFilterPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ActivityApiModelPagedResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiActivityGetPageByFilterPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiActivityGetPageByFilterPost(params?: {
      body?: ActivityFilterPageApiModel
  }): Observable<ActivityApiModelPagedResult> {

    return this.apiActivityGetPageByFilterPost$Response(params).pipe(
      map((r: StrictHttpResponse<ActivityApiModelPagedResult>) => r.body as ActivityApiModelPagedResult)
    );
  }

}
