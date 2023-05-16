/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { NotificationAlertResponse } from '../models/notification-alert-response';
import { NotificationApiModel } from '../models/notification-api-model';
import { NotificationApiModelPagedResult } from '../models/notification-api-model-paged-result';
import { NotificationFilterApiModel } from '../models/notification-filter-api-model';

@Injectable({
  providedIn: 'root',
})
export class NotificationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiNotificationUserAlertNotificationsGet
   */
  static readonly ApiNotificationUserAlertNotificationsGetPath = '/api/Notification/UserAlertNotifications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationUserAlertNotificationsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationUserAlertNotificationsGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<NotificationAlertResponse>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.ApiNotificationUserAlertNotificationsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationAlertResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotificationUserAlertNotificationsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationUserAlertNotificationsGet$Plain(params?: {

  }): Observable<NotificationAlertResponse> {

    return this.apiNotificationUserAlertNotificationsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationAlertResponse>) => r.body as NotificationAlertResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationUserAlertNotificationsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationUserAlertNotificationsGet$Response(params?: {

  }): Observable<StrictHttpResponse<NotificationAlertResponse>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.ApiNotificationUserAlertNotificationsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationAlertResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotificationUserAlertNotificationsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationUserAlertNotificationsGet(params?: {

  }): Observable<NotificationAlertResponse> {

    return this.apiNotificationUserAlertNotificationsGet$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationAlertResponse>) => r.body as NotificationAlertResponse)
    );
  }

  /**
   * Path part for operation apiNotificationUserNotificationsPost
   */
  static readonly ApiNotificationUserNotificationsPostPath = '/api/Notification/UserNotifications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationUserNotificationsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationUserNotificationsPost$Plain$Response(params?: {
      body?: NotificationFilterApiModel
  }): Observable<StrictHttpResponse<NotificationApiModelPagedResult>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.ApiNotificationUserNotificationsPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationApiModelPagedResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotificationUserNotificationsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationUserNotificationsPost$Plain(params?: {
      body?: NotificationFilterApiModel
  }): Observable<NotificationApiModelPagedResult> {

    return this.apiNotificationUserNotificationsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationApiModelPagedResult>) => r.body as NotificationApiModelPagedResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationUserNotificationsPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationUserNotificationsPost$Response(params?: {
      body?: NotificationFilterApiModel
  }): Observable<StrictHttpResponse<NotificationApiModelPagedResult>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.ApiNotificationUserNotificationsPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationApiModelPagedResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotificationUserNotificationsPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationUserNotificationsPost(params?: {
      body?: NotificationFilterApiModel
  }): Observable<NotificationApiModelPagedResult> {

    return this.apiNotificationUserNotificationsPost$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationApiModelPagedResult>) => r.body as NotificationApiModelPagedResult)
    );
  }

  /**
   * Path part for operation apiNotificationCreatePost
   */
  static readonly ApiNotificationCreatePostPath = '/api/Notification/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationCreatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationCreatePost$Plain$Response(params?: {
      body?: NotificationApiModel
  }): Observable<StrictHttpResponse<NotificationApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.ApiNotificationCreatePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotificationCreatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationCreatePost$Plain(params?: {
      body?: NotificationApiModel
  }): Observable<NotificationApiModel> {

    return this.apiNotificationCreatePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationApiModel>) => r.body as NotificationApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationCreatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationCreatePost$Response(params?: {
      body?: NotificationApiModel
  }): Observable<StrictHttpResponse<NotificationApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.ApiNotificationCreatePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotificationCreatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationCreatePost(params?: {
      body?: NotificationApiModel
  }): Observable<NotificationApiModel> {

    return this.apiNotificationCreatePost$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationApiModel>) => r.body as NotificationApiModel)
    );
  }

  /**
   * Path part for operation apiNotificationDeleteDelete
   */
  static readonly ApiNotificationDeleteDeletePath = '/api/Notification/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationDeleteDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationDeleteDelete$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.ApiNotificationDeleteDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiNotificationDeleteDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationDeleteDelete$Plain(params?: {
    id?: number;

  }): Observable<boolean> {

    return this.apiNotificationDeleteDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationDeleteDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationDeleteDelete$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.ApiNotificationDeleteDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiNotificationDeleteDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationDeleteDelete(params?: {
    id?: number;

  }): Observable<boolean> {

    return this.apiNotificationDeleteDelete$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiNotificationMarkAsReadPut
   */
  static readonly ApiNotificationMarkAsReadPutPath = '/api/Notification/MarkAsRead';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationMarkAsReadPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationMarkAsReadPut$Plain$Response(params?: {
    notificationId?: number;

  }): Observable<StrictHttpResponse<NotificationApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.ApiNotificationMarkAsReadPutPath, 'put');
    if (params) {

      rb.query('notificationId', params.notificationId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotificationMarkAsReadPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationMarkAsReadPut$Plain(params?: {
    notificationId?: number;

  }): Observable<NotificationApiModel> {

    return this.apiNotificationMarkAsReadPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationApiModel>) => r.body as NotificationApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationMarkAsReadPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationMarkAsReadPut$Response(params?: {
    notificationId?: number;

  }): Observable<StrictHttpResponse<NotificationApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.ApiNotificationMarkAsReadPutPath, 'put');
    if (params) {

      rb.query('notificationId', params.notificationId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NotificationApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotificationMarkAsReadPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationMarkAsReadPut(params?: {
    notificationId?: number;

  }): Observable<NotificationApiModel> {

    return this.apiNotificationMarkAsReadPut$Response(params).pipe(
      map((r: StrictHttpResponse<NotificationApiModel>) => r.body as NotificationApiModel)
    );
  }

}
