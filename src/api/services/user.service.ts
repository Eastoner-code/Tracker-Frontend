/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ChangePassword } from '../models/change-password';
import { LoginUser } from '../models/login-user';
import { RegisterUser } from '../models/register-user';
import { UpdateUser } from '../models/update-user';
import { UserApiModel } from '../models/user-api-model';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUserRegisterPost
   */
  static readonly ApiUserRegisterPostPath = '/api/User/Register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRegisterPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRegisterPost$Plain$Response(params?: {
      body?: RegisterUser
  }): Observable<StrictHttpResponse<UserApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserRegisterPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserRegisterPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRegisterPost$Plain(params?: {
      body?: RegisterUser
  }): Observable<UserApiModel> {

    return this.apiUserRegisterPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserApiModel>) => r.body as UserApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRegisterPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRegisterPost$Response(params?: {
      body?: RegisterUser
  }): Observable<StrictHttpResponse<UserApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserRegisterPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserRegisterPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRegisterPost(params?: {
      body?: RegisterUser
  }): Observable<UserApiModel> {

    return this.apiUserRegisterPost$Response(params).pipe(
      map((r: StrictHttpResponse<UserApiModel>) => r.body as UserApiModel)
    );
  }

  /**
   * Path part for operation apiUserGetCurrentGet
   */
  static readonly ApiUserGetCurrentGetPath = '/api/User/GetCurrent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetCurrentGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetCurrentGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<UserApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetCurrentGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGetCurrentGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetCurrentGet$Plain(params?: {

  }): Observable<UserApiModel> {

    return this.apiUserGetCurrentGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserApiModel>) => r.body as UserApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetCurrentGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetCurrentGet$Response(params?: {

  }): Observable<StrictHttpResponse<UserApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetCurrentGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGetCurrentGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetCurrentGet(params?: {

  }): Observable<UserApiModel> {

    return this.apiUserGetCurrentGet$Response(params).pipe(
      map((r: StrictHttpResponse<UserApiModel>) => r.body as UserApiModel)
    );
  }

  /**
   * Path part for operation apiUserGetUserUserIdGet
   */
  static readonly ApiUserGetUserUserIdGetPath = '/api/User/GetUser/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetUserUserIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserUserIdGet$Plain$Response(params: {
    userId: null | string;

  }): Observable<StrictHttpResponse<UserApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetUserUserIdGetPath, 'get');
    if (params) {

      rb.path('userId', params.userId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGetUserUserIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserUserIdGet$Plain(params: {
    userId: null | string;

  }): Observable<UserApiModel> {

    return this.apiUserGetUserUserIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserApiModel>) => r.body as UserApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetUserUserIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserUserIdGet$Response(params: {
    userId: null | string;

  }): Observable<StrictHttpResponse<UserApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetUserUserIdGetPath, 'get');
    if (params) {

      rb.path('userId', params.userId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGetUserUserIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserUserIdGet(params: {
    userId: null | string;

  }): Observable<UserApiModel> {

    return this.apiUserGetUserUserIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<UserApiModel>) => r.body as UserApiModel)
    );
  }

  /**
   * Path part for operation apiUserGetAllGet
   */
  static readonly ApiUserGetAllGetPath = '/api/User/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<UserApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetAllGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllGet$Plain(params?: {

  }): Observable<Array<UserApiModel>> {

    return this.apiUserGetAllGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserApiModel>>) => r.body as Array<UserApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetAllGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<UserApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetAllGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGetAllGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllGet(params?: {

  }): Observable<Array<UserApiModel>> {

    return this.apiUserGetAllGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserApiModel>>) => r.body as Array<UserApiModel>)
    );
  }

  /**
   * Path part for operation apiUserGetNotComfirmedGet
   */
  static readonly ApiUserGetNotComfirmedGetPath = '/api/User/GetNotComfirmed';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetNotComfirmedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetNotComfirmedGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<UserApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetNotComfirmedGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGetNotComfirmedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetNotComfirmedGet$Plain(params?: {

  }): Observable<Array<UserApiModel>> {

    return this.apiUserGetNotComfirmedGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserApiModel>>) => r.body as Array<UserApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetNotComfirmedGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetNotComfirmedGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<UserApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetNotComfirmedGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGetNotComfirmedGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetNotComfirmedGet(params?: {

  }): Observable<Array<UserApiModel>> {

    return this.apiUserGetNotComfirmedGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserApiModel>>) => r.body as Array<UserApiModel>)
    );
  }

  /**
   * Path part for operation apiUserConfirmUEmailPut
   */
  static readonly ApiUserConfirmUEmailPutPath = '/api/User/ConfirmU/{email}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserConfirmUEmailPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserConfirmUEmailPut$Plain$Response(params: {
    email: null | string;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserConfirmUEmailPutPath, 'put');
    if (params) {

      rb.path('email', params.email, {});

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
   * To access the full response (for headers, for example), `apiUserConfirmUEmailPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserConfirmUEmailPut$Plain(params: {
    email: null | string;

  }): Observable<boolean> {

    return this.apiUserConfirmUEmailPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserConfirmUEmailPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserConfirmUEmailPut$Response(params: {
    email: null | string;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserConfirmUEmailPutPath, 'put');
    if (params) {

      rb.path('email', params.email, {});

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
   * To access the full response (for headers, for example), `apiUserConfirmUEmailPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserConfirmUEmailPut(params: {
    email: null | string;

  }): Observable<boolean> {

    return this.apiUserConfirmUEmailPut$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiUserLogoutPost
   */
  static readonly ApiUserLogoutPostPath = '/api/User/Logout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserLogoutPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserLogoutPost$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserLogoutPostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `apiUserLogoutPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserLogoutPost$Plain(params?: {

  }): Observable<boolean> {

    return this.apiUserLogoutPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserLogoutPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserLogoutPost$Response(params?: {

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserLogoutPostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `apiUserLogoutPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserLogoutPost(params?: {

  }): Observable<boolean> {

    return this.apiUserLogoutPost$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiUserRefreshSignPost
   */
  static readonly ApiUserRefreshSignPostPath = '/api/User/RefreshSign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRefreshSignPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRefreshSignPost$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<UserApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserRefreshSignPostPath, 'post');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserRefreshSignPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRefreshSignPost$Plain(params?: {

  }): Observable<UserApiModel> {

    return this.apiUserRefreshSignPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserApiModel>) => r.body as UserApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRefreshSignPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRefreshSignPost$Response(params?: {

  }): Observable<StrictHttpResponse<UserApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserRefreshSignPostPath, 'post');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserRefreshSignPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRefreshSignPost(params?: {

  }): Observable<UserApiModel> {

    return this.apiUserRefreshSignPost$Response(params).pipe(
      map((r: StrictHttpResponse<UserApiModel>) => r.body as UserApiModel)
    );
  }

  /**
   * Path part for operation apiUserUpdatePost
   */
  static readonly ApiUserUpdatePostPath = '/api/User/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdatePost$Plain$Response(params?: {
      body?: UpdateUser
  }): Observable<StrictHttpResponse<UserApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserUpdatePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserUpdatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdatePost$Plain(params?: {
      body?: UpdateUser
  }): Observable<UserApiModel> {

    return this.apiUserUpdatePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserApiModel>) => r.body as UserApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdatePost$Response(params?: {
      body?: UpdateUser
  }): Observable<StrictHttpResponse<UserApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserUpdatePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserUpdatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdatePost(params?: {
      body?: UpdateUser
  }): Observable<UserApiModel> {

    return this.apiUserUpdatePost$Response(params).pipe(
      map((r: StrictHttpResponse<UserApiModel>) => r.body as UserApiModel)
    );
  }

  /**
   * Path part for operation apiUserUpdateSelfPost
   */
  static readonly ApiUserUpdateSelfPostPath = '/api/User/UpdateSelf';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdateSelfPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateSelfPost$Plain$Response(params?: {
      body?: UpdateUser
  }): Observable<StrictHttpResponse<UserApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserUpdateSelfPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserUpdateSelfPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateSelfPost$Plain(params?: {
      body?: UpdateUser
  }): Observable<UserApiModel> {

    return this.apiUserUpdateSelfPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserApiModel>) => r.body as UserApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdateSelfPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateSelfPost$Response(params?: {
      body?: UpdateUser
  }): Observable<StrictHttpResponse<UserApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserUpdateSelfPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserUpdateSelfPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateSelfPost(params?: {
      body?: UpdateUser
  }): Observable<UserApiModel> {

    return this.apiUserUpdateSelfPost$Response(params).pipe(
      map((r: StrictHttpResponse<UserApiModel>) => r.body as UserApiModel)
    );
  }

  /**
   * Path part for operation apiUserChangeSelfPasswordPut
   */
  static readonly ApiUserChangeSelfPasswordPutPath = '/api/User/ChangeSelfPassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserChangeSelfPasswordPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserChangeSelfPasswordPut$Plain$Response(params?: {
      body?: ChangePassword
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserChangeSelfPasswordPutPath, 'put');
    if (params) {


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
   * To access the full response (for headers, for example), `apiUserChangeSelfPasswordPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserChangeSelfPasswordPut$Plain(params?: {
      body?: ChangePassword
  }): Observable<boolean> {

    return this.apiUserChangeSelfPasswordPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserChangeSelfPasswordPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserChangeSelfPasswordPut$Response(params?: {
      body?: ChangePassword
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserChangeSelfPasswordPutPath, 'put');
    if (params) {


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
   * To access the full response (for headers, for example), `apiUserChangeSelfPasswordPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserChangeSelfPasswordPut(params?: {
      body?: ChangePassword
  }): Observable<boolean> {

    return this.apiUserChangeSelfPasswordPut$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiUserLoginPost
   */
  static readonly ApiUserLoginPostPath = '/api/User/Login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserLoginPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserLoginPost$Plain$Response(params?: {
      body?: LoginUser
  }): Observable<StrictHttpResponse<UserApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserLoginPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserLoginPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserLoginPost$Plain(params?: {
      body?: LoginUser
  }): Observable<UserApiModel> {

    return this.apiUserLoginPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserApiModel>) => r.body as UserApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserLoginPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserLoginPost$Response(params?: {
      body?: LoginUser
  }): Observable<StrictHttpResponse<UserApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserLoginPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserLoginPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserLoginPost(params?: {
      body?: LoginUser
  }): Observable<UserApiModel> {

    return this.apiUserLoginPost$Response(params).pipe(
      map((r: StrictHttpResponse<UserApiModel>) => r.body as UserApiModel)
    );
  }

  /**
   * Path part for operation apiUserGetAllowedGet
   */
  static readonly ApiUserGetAllowedGetPath = '/api/User/GetAllowed';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetAllowedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllowedGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<UserApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetAllowedGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGetAllowedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllowedGet$Plain(params?: {

  }): Observable<Array<UserApiModel>> {

    return this.apiUserGetAllowedGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserApiModel>>) => r.body as Array<UserApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetAllowedGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllowedGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<UserApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetAllowedGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGetAllowedGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllowedGet(params?: {

  }): Observable<Array<UserApiModel>> {

    return this.apiUserGetAllowedGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserApiModel>>) => r.body as Array<UserApiModel>)
    );
  }

  /**
   * Path part for operation apiUserGetAllRolesByIdUserIdGet
   */
  static readonly ApiUserGetAllRolesByIdUserIdGetPath = '/api/User/GetAllRolesById/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetAllRolesByIdUserIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllRolesByIdUserIdGet$Plain$Response(params: {
    userId: number;

  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetAllRolesByIdUserIdGetPath, 'get');
    if (params) {

      rb.path('userId', params.userId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGetAllRolesByIdUserIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllRolesByIdUserIdGet$Plain(params: {
    userId: number;

  }): Observable<Array<string>> {

    return this.apiUserGetAllRolesByIdUserIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetAllRolesByIdUserIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllRolesByIdUserIdGet$Response(params: {
    userId: number;

  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetAllRolesByIdUserIdGetPath, 'get');
    if (params) {

      rb.path('userId', params.userId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGetAllRolesByIdUserIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllRolesByIdUserIdGet(params: {
    userId: number;

  }): Observable<Array<string>> {

    return this.apiUserGetAllRolesByIdUserIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation apiUserGetAllRolesGet
   */
  static readonly ApiUserGetAllRolesGetPath = '/api/User/GetAllRoles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetAllRolesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllRolesGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetAllRolesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGetAllRolesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllRolesGet$Plain(params?: {

  }): Observable<Array<string>> {

    return this.apiUserGetAllRolesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetAllRolesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllRolesGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetAllRolesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGetAllRolesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllRolesGet(params?: {

  }): Observable<Array<string>> {

    return this.apiUserGetAllRolesGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation apiUserUpdateUserRolesUserIdPut
   */
  static readonly ApiUserUpdateUserRolesUserIdPutPath = '/api/User/UpdateUserRoles/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdateUserRolesUserIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserRolesUserIdPut$Response(params: {
    userId: number;
      body?: null | Array<string>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserUpdateUserRolesUserIdPutPath, 'put');
    if (params) {

      rb.path('userId', params.userId, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserUpdateUserRolesUserIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserRolesUserIdPut(params: {
    userId: number;
      body?: null | Array<string>
  }): Observable<void> {

    return this.apiUserUpdateUserRolesUserIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiUserGetUsersByProjectIdProjectIdGet
   */
  static readonly ApiUserGetUsersByProjectIdProjectIdGetPath = '/api/User/GetUsersByProjectId/{projectId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetUsersByProjectIdProjectIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUsersByProjectIdProjectIdGet$Plain$Response(params: {
    projectId: number;

  }): Observable<StrictHttpResponse<Array<UserApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetUsersByProjectIdProjectIdGetPath, 'get');
    if (params) {

      rb.path('projectId', params.projectId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGetUsersByProjectIdProjectIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUsersByProjectIdProjectIdGet$Plain(params: {
    projectId: number;

  }): Observable<Array<UserApiModel>> {

    return this.apiUserGetUsersByProjectIdProjectIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserApiModel>>) => r.body as Array<UserApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetUsersByProjectIdProjectIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUsersByProjectIdProjectIdGet$Response(params: {
    projectId: number;

  }): Observable<StrictHttpResponse<Array<UserApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetUsersByProjectIdProjectIdGetPath, 'get');
    if (params) {

      rb.path('projectId', params.projectId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGetUsersByProjectIdProjectIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUsersByProjectIdProjectIdGet(params: {
    projectId: number;

  }): Observable<Array<UserApiModel>> {

    return this.apiUserGetUsersByProjectIdProjectIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserApiModel>>) => r.body as Array<UserApiModel>)
    );
  }

}
