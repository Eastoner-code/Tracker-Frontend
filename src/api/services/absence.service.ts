/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AbsenceApiModel } from '../models/absence-api-model';
import { AbsenceApiModelCreateUpdate } from '../models/absence-api-model-create-update';
import { AbsenceStatus } from '../models/absence-status';
import { FromToApiModel } from '../models/from-to-api-model';
import { UserYearRangeApiModel } from '../models/user-year-range-api-model';
import { UserYearRangeFullApiModel } from '../models/user-year-range-full-api-model';

@Injectable({
  providedIn: 'root',
})
export class AbsenceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAbsenceGetMyRangesGet
   */
  static readonly ApiAbsenceGetMyRangesGetPath = '/api/Absence/GetMyRanges';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAbsenceGetMyRangesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceGetMyRangesGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<UserYearRangeApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, AbsenceService.ApiAbsenceGetMyRangesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserYearRangeApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAbsenceGetMyRangesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceGetMyRangesGet$Plain(params?: {

  }): Observable<Array<UserYearRangeApiModel>> {

    return this.apiAbsenceGetMyRangesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserYearRangeApiModel>>) => r.body as Array<UserYearRangeApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAbsenceGetMyRangesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceGetMyRangesGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<UserYearRangeApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, AbsenceService.ApiAbsenceGetMyRangesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserYearRangeApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAbsenceGetMyRangesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceGetMyRangesGet(params?: {

  }): Observable<Array<UserYearRangeApiModel>> {

    return this.apiAbsenceGetMyRangesGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserYearRangeApiModel>>) => r.body as Array<UserYearRangeApiModel>)
    );
  }

  /**
   * Path part for operation apiAbsenceGetDaysSummaryRangeIdGet
   */
  static readonly ApiAbsenceGetDaysSummaryRangeIdGetPath = '/api/Absence/GetDaysSummary/{rangeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAbsenceGetDaysSummaryRangeIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceGetDaysSummaryRangeIdGet$Plain$Response(params: {
    rangeId: number;

  }): Observable<StrictHttpResponse<UserYearRangeFullApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, AbsenceService.ApiAbsenceGetDaysSummaryRangeIdGetPath, 'get');
    if (params) {

      rb.path('rangeId', params.rangeId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserYearRangeFullApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAbsenceGetDaysSummaryRangeIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceGetDaysSummaryRangeIdGet$Plain(params: {
    rangeId: number;

  }): Observable<UserYearRangeFullApiModel> {

    return this.apiAbsenceGetDaysSummaryRangeIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserYearRangeFullApiModel>) => r.body as UserYearRangeFullApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAbsenceGetDaysSummaryRangeIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceGetDaysSummaryRangeIdGet$Response(params: {
    rangeId: number;

  }): Observable<StrictHttpResponse<UserYearRangeFullApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, AbsenceService.ApiAbsenceGetDaysSummaryRangeIdGetPath, 'get');
    if (params) {

      rb.path('rangeId', params.rangeId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserYearRangeFullApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAbsenceGetDaysSummaryRangeIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceGetDaysSummaryRangeIdGet(params: {
    rangeId: number;

  }): Observable<UserYearRangeFullApiModel> {

    return this.apiAbsenceGetDaysSummaryRangeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<UserYearRangeFullApiModel>) => r.body as UserYearRangeFullApiModel)
    );
  }

  /**
   * Path part for operation apiAbsenceGetAllAbsencesByRangePost
   */
  static readonly ApiAbsenceGetAllAbsencesByRangePostPath = '/api/Absence/GetAllAbsencesByRange';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAbsenceGetAllAbsencesByRangePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAbsenceGetAllAbsencesByRangePost$Plain$Response(params?: {
      body?: FromToApiModel
  }): Observable<StrictHttpResponse<Array<AbsenceApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, AbsenceService.ApiAbsenceGetAllAbsencesByRangePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AbsenceApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAbsenceGetAllAbsencesByRangePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAbsenceGetAllAbsencesByRangePost$Plain(params?: {
      body?: FromToApiModel
  }): Observable<Array<AbsenceApiModel>> {

    return this.apiAbsenceGetAllAbsencesByRangePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AbsenceApiModel>>) => r.body as Array<AbsenceApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAbsenceGetAllAbsencesByRangePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAbsenceGetAllAbsencesByRangePost$Response(params?: {
      body?: FromToApiModel
  }): Observable<StrictHttpResponse<Array<AbsenceApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, AbsenceService.ApiAbsenceGetAllAbsencesByRangePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AbsenceApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAbsenceGetAllAbsencesByRangePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAbsenceGetAllAbsencesByRangePost(params?: {
      body?: FromToApiModel
  }): Observable<Array<AbsenceApiModel>> {

    return this.apiAbsenceGetAllAbsencesByRangePost$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AbsenceApiModel>>) => r.body as Array<AbsenceApiModel>)
    );
  }

  /**
   * Path part for operation apiAbsenceGetMyAbsencesGet
   */
  static readonly ApiAbsenceGetMyAbsencesGetPath = '/api/Absence/GetMyAbsences';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAbsenceGetMyAbsencesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceGetMyAbsencesGet$Plain$Response(params?: {
    yearRangeId?: number;

  }): Observable<StrictHttpResponse<Array<AbsenceApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, AbsenceService.ApiAbsenceGetMyAbsencesGetPath, 'get');
    if (params) {

      rb.query('yearRangeId', params.yearRangeId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AbsenceApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAbsenceGetMyAbsencesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceGetMyAbsencesGet$Plain(params?: {
    yearRangeId?: number;

  }): Observable<Array<AbsenceApiModel>> {

    return this.apiAbsenceGetMyAbsencesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AbsenceApiModel>>) => r.body as Array<AbsenceApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAbsenceGetMyAbsencesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceGetMyAbsencesGet$Response(params?: {
    yearRangeId?: number;

  }): Observable<StrictHttpResponse<Array<AbsenceApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, AbsenceService.ApiAbsenceGetMyAbsencesGetPath, 'get');
    if (params) {

      rb.query('yearRangeId', params.yearRangeId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AbsenceApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAbsenceGetMyAbsencesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceGetMyAbsencesGet(params?: {
    yearRangeId?: number;

  }): Observable<Array<AbsenceApiModel>> {

    return this.apiAbsenceGetMyAbsencesGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AbsenceApiModel>>) => r.body as Array<AbsenceApiModel>)
    );
  }

  /**
   * Path part for operation apiAbsenceRequestAbsencePost
   */
  static readonly ApiAbsenceRequestAbsencePostPath = '/api/Absence/RequestAbsence';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAbsenceRequestAbsencePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAbsenceRequestAbsencePost$Plain$Response(params?: {
      body?: AbsenceApiModel
  }): Observable<StrictHttpResponse<AbsenceApiModelCreateUpdate>> {

    const rb = new RequestBuilder(this.rootUrl, AbsenceService.ApiAbsenceRequestAbsencePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AbsenceApiModelCreateUpdate>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAbsenceRequestAbsencePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAbsenceRequestAbsencePost$Plain(params?: {
      body?: AbsenceApiModel
  }): Observable<AbsenceApiModelCreateUpdate> {

    return this.apiAbsenceRequestAbsencePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AbsenceApiModelCreateUpdate>) => r.body as AbsenceApiModelCreateUpdate)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAbsenceRequestAbsencePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAbsenceRequestAbsencePost$Response(params?: {
      body?: AbsenceApiModel
  }): Observable<StrictHttpResponse<AbsenceApiModelCreateUpdate>> {

    const rb = new RequestBuilder(this.rootUrl, AbsenceService.ApiAbsenceRequestAbsencePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AbsenceApiModelCreateUpdate>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAbsenceRequestAbsencePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAbsenceRequestAbsencePost(params?: {
      body?: AbsenceApiModel
  }): Observable<AbsenceApiModelCreateUpdate> {

    return this.apiAbsenceRequestAbsencePost$Response(params).pipe(
      map((r: StrictHttpResponse<AbsenceApiModelCreateUpdate>) => r.body as AbsenceApiModelCreateUpdate)
    );
  }

  /**
   * Path part for operation apiAbsenceDeleteIdDelete
   */
  static readonly ApiAbsenceDeleteIdDeletePath = '/api/Absence/Delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAbsenceDeleteIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceDeleteIdDelete$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<AbsenceApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, AbsenceService.ApiAbsenceDeleteIdDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AbsenceApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAbsenceDeleteIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceDeleteIdDelete$Plain(params: {
    id: number;

  }): Observable<AbsenceApiModel> {

    return this.apiAbsenceDeleteIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AbsenceApiModel>) => r.body as AbsenceApiModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAbsenceDeleteIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceDeleteIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<AbsenceApiModel>> {

    const rb = new RequestBuilder(this.rootUrl, AbsenceService.ApiAbsenceDeleteIdDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AbsenceApiModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAbsenceDeleteIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceDeleteIdDelete(params: {
    id: number;

  }): Observable<AbsenceApiModel> {

    return this.apiAbsenceDeleteIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<AbsenceApiModel>) => r.body as AbsenceApiModel)
    );
  }

  /**
   * Path part for operation apiAbsenceGetAbsencesToApproveGet
   */
  static readonly ApiAbsenceGetAbsencesToApproveGetPath = '/api/Absence/GetAbsencesToApprove';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAbsenceGetAbsencesToApproveGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceGetAbsencesToApproveGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<AbsenceApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, AbsenceService.ApiAbsenceGetAbsencesToApproveGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AbsenceApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAbsenceGetAbsencesToApproveGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceGetAbsencesToApproveGet$Plain(params?: {

  }): Observable<Array<AbsenceApiModel>> {

    return this.apiAbsenceGetAbsencesToApproveGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AbsenceApiModel>>) => r.body as Array<AbsenceApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAbsenceGetAbsencesToApproveGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceGetAbsencesToApproveGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<AbsenceApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, AbsenceService.ApiAbsenceGetAbsencesToApproveGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AbsenceApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAbsenceGetAbsencesToApproveGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceGetAbsencesToApproveGet(params?: {

  }): Observable<Array<AbsenceApiModel>> {

    return this.apiAbsenceGetAbsencesToApproveGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AbsenceApiModel>>) => r.body as Array<AbsenceApiModel>)
    );
  }

  /**
   * Path part for operation apiAbsenceUpdateRequestStatusIdStatusPut
   */
  static readonly ApiAbsenceUpdateRequestStatusIdStatusPutPath = '/api/Absence/UpdateRequestStatus/{id}/{status}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAbsenceUpdateRequestStatusIdStatusPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceUpdateRequestStatusIdStatusPut$Plain$Response(params: {
    id: number;
    status: AbsenceStatus;

  }): Observable<StrictHttpResponse<AbsenceApiModelCreateUpdate>> {

    const rb = new RequestBuilder(this.rootUrl, AbsenceService.ApiAbsenceUpdateRequestStatusIdStatusPutPath, 'put');
    if (params) {

      rb.path('id', params.id, {});
      rb.path('status', params.status, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AbsenceApiModelCreateUpdate>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAbsenceUpdateRequestStatusIdStatusPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceUpdateRequestStatusIdStatusPut$Plain(params: {
    id: number;
    status: AbsenceStatus;

  }): Observable<AbsenceApiModelCreateUpdate> {

    return this.apiAbsenceUpdateRequestStatusIdStatusPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AbsenceApiModelCreateUpdate>) => r.body as AbsenceApiModelCreateUpdate)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAbsenceUpdateRequestStatusIdStatusPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceUpdateRequestStatusIdStatusPut$Response(params: {
    id: number;
    status: AbsenceStatus;

  }): Observable<StrictHttpResponse<AbsenceApiModelCreateUpdate>> {

    const rb = new RequestBuilder(this.rootUrl, AbsenceService.ApiAbsenceUpdateRequestStatusIdStatusPutPath, 'put');
    if (params) {

      rb.path('id', params.id, {});
      rb.path('status', params.status, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AbsenceApiModelCreateUpdate>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAbsenceUpdateRequestStatusIdStatusPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAbsenceUpdateRequestStatusIdStatusPut(params: {
    id: number;
    status: AbsenceStatus;

  }): Observable<AbsenceApiModelCreateUpdate> {

    return this.apiAbsenceUpdateRequestStatusIdStatusPut$Response(params).pipe(
      map((r: StrictHttpResponse<AbsenceApiModelCreateUpdate>) => r.body as AbsenceApiModelCreateUpdate)
    );
  }

}
