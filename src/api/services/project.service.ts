/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ProjectApiModel } from '../models/project-api-model';
import { ProjectApiModelPagedResult } from '../models/project-api-model-paged-result';
import { ProjectFilterPageApiModel } from '../models/project-filter-page-api-model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiProjectCreatePost
   */
  static readonly ApiProjectCreatePostPath = '/api/Project/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectCreatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectCreatePost$Plain$Response(params?: {
      body?: ProjectApiModel
  }): Observable<StrictHttpResponse<ProjectApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectCreatePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjectApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectCreatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectCreatePost$Plain(params?: {
      body?: ProjectApiModel
  }): Observable<ProjectApiModel> {

    return this.apiProjectCreatePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProjectApiModel>) => r.body as ProjectApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectCreatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectCreatePost$Response(params?: {
      body?: ProjectApiModel
  }): Observable<StrictHttpResponse<ProjectApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectCreatePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjectApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectCreatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectCreatePost(params?: {
      body?: ProjectApiModel
  }): Observable<ProjectApiModel> {

    return this.apiProjectCreatePost$Response(params).pipe(
      map((r: StrictHttpResponse<ProjectApiModel>) => r.body as ProjectApiModel)
    );
  }

  /**
   * Path part for operation apiProjectUpdatePut
   */
  static readonly ApiProjectUpdatePutPath = '/api/Project/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectUpdatePut$Plain$Response(params?: {
      body?: ProjectApiModel
  }): Observable<StrictHttpResponse<ProjectApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectUpdatePutPath, 'put');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjectApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectUpdatePut$Plain(params?: {
      body?: ProjectApiModel
  }): Observable<ProjectApiModel> {

    return this.apiProjectUpdatePut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProjectApiModel>) => r.body as ProjectApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectUpdatePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectUpdatePut$Response(params?: {
      body?: ProjectApiModel
  }): Observable<StrictHttpResponse<ProjectApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectUpdatePutPath, 'put');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjectApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectUpdatePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectUpdatePut(params?: {
      body?: ProjectApiModel
  }): Observable<ProjectApiModel> {

    return this.apiProjectUpdatePut$Response(params).pipe(
      map((r: StrictHttpResponse<ProjectApiModel>) => r.body as ProjectApiModel)
    );
  }

  /**
   * Path part for operation apiProjectDeleteIdDelete
   */
  static readonly ApiProjectDeleteIdDeletePath = '/api/Project/Delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectDeleteIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectDeleteIdDelete$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<ProjectApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectDeleteIdDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjectApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectDeleteIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectDeleteIdDelete$Plain(params: {
    id: number;

  }): Observable<ProjectApiModel> {

    return this.apiProjectDeleteIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProjectApiModel>) => r.body as ProjectApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectDeleteIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectDeleteIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<ProjectApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectDeleteIdDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjectApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectDeleteIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectDeleteIdDelete(params: {
    id: number;

  }): Observable<ProjectApiModel> {

    return this.apiProjectDeleteIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<ProjectApiModel>) => r.body as ProjectApiModel)
    );
  }

  /**
   * Path part for operation apiProjectRestoreIdPut
   */
  static readonly ApiProjectRestoreIdPutPath = '/api/Project/Restore/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectRestoreIdPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectRestoreIdPut$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectRestoreIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiProjectRestoreIdPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectRestoreIdPut$Plain(params: {
    id: number;

  }): Observable<boolean> {

    return this.apiProjectRestoreIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectRestoreIdPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectRestoreIdPut$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectRestoreIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiProjectRestoreIdPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectRestoreIdPut(params: {
    id: number;

  }): Observable<boolean> {

    return this.apiProjectRestoreIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiProjectGetIdGet
   */
  static readonly ApiProjectGetIdGetPath = '/api/Project/Get/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectGetIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetIdGet$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<ProjectApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectGetIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjectApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectGetIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetIdGet$Plain(params: {
    id: number;

  }): Observable<ProjectApiModel> {

    return this.apiProjectGetIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProjectApiModel>) => r.body as ProjectApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectGetIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetIdGet$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<ProjectApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectGetIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjectApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectGetIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetIdGet(params: {
    id: number;

  }): Observable<ProjectApiModel> {

    return this.apiProjectGetIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<ProjectApiModel>) => r.body as ProjectApiModel)
    );
  }

  /**
   * Path part for operation apiProjectGetAllGet
   */
  static readonly ApiProjectGetAllGetPath = '/api/Project/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetAllGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ProjectApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectGetAllGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProjectApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetAllGet$Plain(params?: {

  }): Observable<Array<ProjectApiModel>> {

    return this.apiProjectGetAllGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ProjectApiModel>>) => r.body as Array<ProjectApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectGetAllGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetAllGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ProjectApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectGetAllGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProjectApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectGetAllGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetAllGet(params?: {

  }): Observable<Array<ProjectApiModel>> {

    return this.apiProjectGetAllGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ProjectApiModel>>) => r.body as Array<ProjectApiModel>)
    );
  }

  /**
   * Path part for operation apiProjectGetPageByFilterPost
   */
  static readonly ApiProjectGetPageByFilterPostPath = '/api/Project/GetPageByFilter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectGetPageByFilterPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectGetPageByFilterPost$Plain$Response(params?: {
      body?: ProjectFilterPageApiModel
  }): Observable<StrictHttpResponse<ProjectApiModelPagedResult>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectGetPageByFilterPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjectApiModelPagedResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectGetPageByFilterPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectGetPageByFilterPost$Plain(params?: {
      body?: ProjectFilterPageApiModel
  }): Observable<ProjectApiModelPagedResult> {

    return this.apiProjectGetPageByFilterPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProjectApiModelPagedResult>) => r.body as ProjectApiModelPagedResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectGetPageByFilterPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectGetPageByFilterPost$Response(params?: {
      body?: ProjectFilterPageApiModel
  }): Observable<StrictHttpResponse<ProjectApiModelPagedResult>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectGetPageByFilterPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjectApiModelPagedResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectGetPageByFilterPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjectGetPageByFilterPost(params?: {
      body?: ProjectFilterPageApiModel
  }): Observable<ProjectApiModelPagedResult> {

    return this.apiProjectGetPageByFilterPost$Response(params).pipe(
      map((r: StrictHttpResponse<ProjectApiModelPagedResult>) => r.body as ProjectApiModelPagedResult)
    );
  }

  /**
   * Path part for operation apiProjectGetProjectsByUserGet
   */
  static readonly ApiProjectGetProjectsByUserGetPath = '/api/Project/GetProjectsByUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectGetProjectsByUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetProjectsByUserGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ProjectApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectGetProjectsByUserGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProjectApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectGetProjectsByUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetProjectsByUserGet$Plain(params?: {

  }): Observable<Array<ProjectApiModel>> {

    return this.apiProjectGetProjectsByUserGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ProjectApiModel>>) => r.body as Array<ProjectApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectGetProjectsByUserGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetProjectsByUserGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ProjectApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectGetProjectsByUserGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProjectApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectGetProjectsByUserGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetProjectsByUserGet(params?: {

  }): Observable<Array<ProjectApiModel>> {

    return this.apiProjectGetProjectsByUserGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ProjectApiModel>>) => r.body as Array<ProjectApiModel>)
    );
  }

  /**
   * Path part for operation apiProjectGetByUserIdIdGet
   */
  static readonly ApiProjectGetByUserIdIdGetPath = '/api/Project/GetByUserId/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectGetByUserIdIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetByUserIdIdGet$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<Array<ProjectApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectGetByUserIdIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProjectApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectGetByUserIdIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetByUserIdIdGet$Plain(params: {
    id: number;

  }): Observable<Array<ProjectApiModel>> {

    return this.apiProjectGetByUserIdIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ProjectApiModel>>) => r.body as Array<ProjectApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectGetByUserIdIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetByUserIdIdGet$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<Array<ProjectApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectGetByUserIdIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProjectApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProjectGetByUserIdIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectGetByUserIdIdGet(params: {
    id: number;

  }): Observable<Array<ProjectApiModel>> {

    return this.apiProjectGetByUserIdIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ProjectApiModel>>) => r.body as Array<ProjectApiModel>)
    );
  }

  /**
   * Path part for operation apiProjectAddUsersToProjectPut
   */
  static readonly ApiProjectAddUsersToProjectPutPath = '/api/Project/AddUsersToProject';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectAddUsersToProjectPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectAddUsersToProjectPut$Plain$Response(params?: {
    userId?: number;
    projectId?: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectAddUsersToProjectPutPath, 'put');
    if (params) {

      rb.query('userId', params.userId, {});
      rb.query('projectId', params.projectId, {});

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
   * To access the full response (for headers, for example), `apiProjectAddUsersToProjectPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectAddUsersToProjectPut$Plain(params?: {
    userId?: number;
    projectId?: number;

  }): Observable<boolean> {

    return this.apiProjectAddUsersToProjectPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectAddUsersToProjectPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectAddUsersToProjectPut$Response(params?: {
    userId?: number;
    projectId?: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectAddUsersToProjectPutPath, 'put');
    if (params) {

      rb.query('userId', params.userId, {});
      rb.query('projectId', params.projectId, {});

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
   * To access the full response (for headers, for example), `apiProjectAddUsersToProjectPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectAddUsersToProjectPut(params?: {
    userId?: number;
    projectId?: number;

  }): Observable<boolean> {

    return this.apiProjectAddUsersToProjectPut$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiProjectRemoveUsersFromProjectPut
   */
  static readonly ApiProjectRemoveUsersFromProjectPutPath = '/api/Project/RemoveUsersFromProject';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectRemoveUsersFromProjectPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectRemoveUsersFromProjectPut$Plain$Response(params?: {
    userId?: number;
    projectId?: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectRemoveUsersFromProjectPutPath, 'put');
    if (params) {

      rb.query('userId', params.userId, {});
      rb.query('projectId', params.projectId, {});

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
   * To access the full response (for headers, for example), `apiProjectRemoveUsersFromProjectPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectRemoveUsersFromProjectPut$Plain(params?: {
    userId?: number;
    projectId?: number;

  }): Observable<boolean> {

    return this.apiProjectRemoveUsersFromProjectPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjectRemoveUsersFromProjectPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectRemoveUsersFromProjectPut$Response(params?: {
    userId?: number;
    projectId?: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectService.ApiProjectRemoveUsersFromProjectPutPath, 'put');
    if (params) {

      rb.query('userId', params.userId, {});
      rb.query('projectId', params.projectId, {});

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
   * To access the full response (for headers, for example), `apiProjectRemoveUsersFromProjectPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjectRemoveUsersFromProjectPut(params?: {
    userId?: number;
    projectId?: number;

  }): Observable<boolean> {

    return this.apiProjectRemoveUsersFromProjectPut$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

}
