/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AbsenceApiModelCreateUpdate } from '../models/absence-api-model-create-update';
import { CandidateApiModel } from '../models/candidate-api-model';
import { CandidateStatus } from '../models/candidate-status';
import { VacancyApiModel } from '../models/vacancy-api-model';

@Injectable({
  providedIn: 'root',
})
export class RecruitmentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiRecruitmentAllVacanciesGet
   */
  static readonly ApiRecruitmentAllVacanciesGetPath = '/api/Recruitment/AllVacancies';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRecruitmentAllVacanciesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecruitmentAllVacanciesGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<VacancyApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, RecruitmentService.ApiRecruitmentAllVacanciesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<VacancyApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRecruitmentAllVacanciesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecruitmentAllVacanciesGet$Plain(params?: {

  }): Observable<Array<VacancyApiModel>> {

    return this.apiRecruitmentAllVacanciesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<VacancyApiModel>>) => r.body as Array<VacancyApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRecruitmentAllVacanciesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecruitmentAllVacanciesGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<VacancyApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, RecruitmentService.ApiRecruitmentAllVacanciesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<VacancyApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRecruitmentAllVacanciesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecruitmentAllVacanciesGet(params?: {

  }): Observable<Array<VacancyApiModel>> {

    return this.apiRecruitmentAllVacanciesGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<VacancyApiModel>>) => r.body as Array<VacancyApiModel>)
    );
  }

  /**
   * Path part for operation apiRecruitmentVacancyCandidatesGet
   */
  static readonly ApiRecruitmentVacancyCandidatesGetPath = '/api/Recruitment/VacancyCandidates';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRecruitmentVacancyCandidatesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecruitmentVacancyCandidatesGet$Plain$Response(params?: {
    vacancyId?: number;

  }): Observable<StrictHttpResponse<Array<CandidateApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, RecruitmentService.ApiRecruitmentVacancyCandidatesGetPath, 'get');
    if (params) {

      rb.query('vacancyId', params.vacancyId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CandidateApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRecruitmentVacancyCandidatesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecruitmentVacancyCandidatesGet$Plain(params?: {
    vacancyId?: number;

  }): Observable<Array<CandidateApiModel>> {

    return this.apiRecruitmentVacancyCandidatesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CandidateApiModel>>) => r.body as Array<CandidateApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRecruitmentVacancyCandidatesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecruitmentVacancyCandidatesGet$Response(params?: {
    vacancyId?: number;

  }): Observable<StrictHttpResponse<Array<CandidateApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, RecruitmentService.ApiRecruitmentVacancyCandidatesGetPath, 'get');
    if (params) {

      rb.query('vacancyId', params.vacancyId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CandidateApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRecruitmentVacancyCandidatesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecruitmentVacancyCandidatesGet(params?: {
    vacancyId?: number;

  }): Observable<Array<CandidateApiModel>> {

    return this.apiRecruitmentVacancyCandidatesGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CandidateApiModel>>) => r.body as Array<CandidateApiModel>)
    );
  }

  /**
   * Path part for operation apiRecruitmentAllCadnditatesGet
   */
  static readonly ApiRecruitmentAllCadnditatesGetPath = '/api/Recruitment/AllCadnditates';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRecruitmentAllCadnditatesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecruitmentAllCadnditatesGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<CandidateApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, RecruitmentService.ApiRecruitmentAllCadnditatesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CandidateApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRecruitmentAllCadnditatesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecruitmentAllCadnditatesGet$Plain(params?: {

  }): Observable<Array<CandidateApiModel>> {

    return this.apiRecruitmentAllCadnditatesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CandidateApiModel>>) => r.body as Array<CandidateApiModel>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRecruitmentAllCadnditatesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecruitmentAllCadnditatesGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<CandidateApiModel>>> {

    const rb = new RequestBuilder(this.rootUrl, RecruitmentService.ApiRecruitmentAllCadnditatesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CandidateApiModel>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRecruitmentAllCadnditatesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecruitmentAllCadnditatesGet(params?: {

  }): Observable<Array<CandidateApiModel>> {

    return this.apiRecruitmentAllCadnditatesGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CandidateApiModel>>) => r.body as Array<CandidateApiModel>)
    );
  }

  /**
   * Path part for operation apiRecruitmentUpdateRequestStatusIdStatusPut
   */
  static readonly ApiRecruitmentUpdateRequestStatusIdStatusPutPath = '/api/Recruitment/UpdateRequestStatus/{id}/{status}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRecruitmentUpdateRequestStatusIdStatusPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecruitmentUpdateRequestStatusIdStatusPut$Plain$Response(params: {
    id: number;
    status: CandidateStatus;

  }): Observable<StrictHttpResponse<AbsenceApiModelCreateUpdate>> {

    const rb = new RequestBuilder(this.rootUrl, RecruitmentService.ApiRecruitmentUpdateRequestStatusIdStatusPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiRecruitmentUpdateRequestStatusIdStatusPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecruitmentUpdateRequestStatusIdStatusPut$Plain(params: {
    id: number;
    status: CandidateStatus;

  }): Observable<AbsenceApiModelCreateUpdate> {

    return this.apiRecruitmentUpdateRequestStatusIdStatusPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AbsenceApiModelCreateUpdate>) => r.body as AbsenceApiModelCreateUpdate)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRecruitmentUpdateRequestStatusIdStatusPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecruitmentUpdateRequestStatusIdStatusPut$Response(params: {
    id: number;
    status: CandidateStatus;

  }): Observable<StrictHttpResponse<AbsenceApiModelCreateUpdate>> {

    const rb = new RequestBuilder(this.rootUrl, RecruitmentService.ApiRecruitmentUpdateRequestStatusIdStatusPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiRecruitmentUpdateRequestStatusIdStatusPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRecruitmentUpdateRequestStatusIdStatusPut(params: {
    id: number;
    status: CandidateStatus;

  }): Observable<AbsenceApiModelCreateUpdate> {

    return this.apiRecruitmentUpdateRequestStatusIdStatusPut$Response(params).pipe(
      map((r: StrictHttpResponse<AbsenceApiModelCreateUpdate>) => r.body as AbsenceApiModelCreateUpdate)
    );
  }

}
