/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { SkillApiModel } from '../models/skill-api-model';

@Injectable({
  providedIn: 'root',
})
export class SkillService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiSkillCreatePost
   */
  static readonly ApiSkillCreatePostPath = '/api/Skill/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSkillCreatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSkillCreatePost$Plain$Response(params?: {
      body?: SkillApiModel
  }): Observable<StrictHttpResponse<SkillApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, SkillService.ApiSkillCreatePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SkillApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSkillCreatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSkillCreatePost$Plain(params?: {
      body?: SkillApiModel
  }): Observable<SkillApiModel> {

    return this.apiSkillCreatePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SkillApiModel>) => r.body as SkillApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSkillCreatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSkillCreatePost$Response(params?: {
      body?: SkillApiModel
  }): Observable<StrictHttpResponse<SkillApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, SkillService.ApiSkillCreatePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SkillApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSkillCreatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSkillCreatePost(params?: {
      body?: SkillApiModel
  }): Observable<SkillApiModel> {

    return this.apiSkillCreatePost$Response(params).pipe(
      map((r: StrictHttpResponse<SkillApiModel>) => r.body as SkillApiModel)
    );
  }

  /**
   * Path part for operation apiSkillUpdatePut
   */
  static readonly ApiSkillUpdatePutPath = '/api/Skill/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSkillUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSkillUpdatePut$Plain$Response(params?: {
      body?: SkillApiModel
  }): Observable<StrictHttpResponse<SkillApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, SkillService.ApiSkillUpdatePutPath, 'put');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SkillApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSkillUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSkillUpdatePut$Plain(params?: {
      body?: SkillApiModel
  }): Observable<SkillApiModel> {

    return this.apiSkillUpdatePut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SkillApiModel>) => r.body as SkillApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSkillUpdatePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSkillUpdatePut$Response(params?: {
      body?: SkillApiModel
  }): Observable<StrictHttpResponse<SkillApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, SkillService.ApiSkillUpdatePutPath, 'put');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SkillApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSkillUpdatePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSkillUpdatePut(params?: {
      body?: SkillApiModel
  }): Observable<SkillApiModel> {

    return this.apiSkillUpdatePut$Response(params).pipe(
      map((r: StrictHttpResponse<SkillApiModel>) => r.body as SkillApiModel)
    );
  }

  /**
   * Path part for operation apiSkillDeleteDelete
   */
  static readonly ApiSkillDeleteDeletePath = '/api/Skill/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSkillDeleteDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSkillDeleteDelete$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, SkillService.ApiSkillDeleteDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiSkillDeleteDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSkillDeleteDelete$Plain(params?: {
    id?: number;

  }): Observable<boolean> {

    return this.apiSkillDeleteDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSkillDeleteDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSkillDeleteDelete$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, SkillService.ApiSkillDeleteDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiSkillDeleteDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSkillDeleteDelete(params?: {
    id?: number;

  }): Observable<boolean> {

    return this.apiSkillDeleteDelete$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiSkillGetIdGet
   */
  static readonly ApiSkillGetIdGetPath = '/api/Skill/Get/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSkillGetIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSkillGetIdGet$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<SkillApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, SkillService.ApiSkillGetIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SkillApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSkillGetIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSkillGetIdGet$Plain(params: {
    id: number;

  }): Observable<SkillApiModel> {

    return this.apiSkillGetIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SkillApiModel>) => r.body as SkillApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSkillGetIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSkillGetIdGet$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<SkillApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, SkillService.ApiSkillGetIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SkillApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSkillGetIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSkillGetIdGet(params: {
    id: number;

  }): Observable<SkillApiModel> {

    return this.apiSkillGetIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<SkillApiModel>) => r.body as SkillApiModel)
    );
  }

  /**
   * Path part for operation apiSkillGetAllGet
   */
  static readonly ApiSkillGetAllGetPath = '/api/Skill/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSkillGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSkillGetAllGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<SkillApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, SkillService.ApiSkillGetAllGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SkillApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSkillGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSkillGetAllGet$Plain(params?: {

  }): Observable<Array<SkillApiModel>> {

    return this.apiSkillGetAllGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SkillApiModel>>) => r.body as Array<SkillApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSkillGetAllGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSkillGetAllGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<SkillApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, SkillService.ApiSkillGetAllGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SkillApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSkillGetAllGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSkillGetAllGet(params?: {

  }): Observable<Array<SkillApiModel>> {

    return this.apiSkillGetAllGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SkillApiModel>>) => r.body as Array<SkillApiModel>)
    );
  }

}
