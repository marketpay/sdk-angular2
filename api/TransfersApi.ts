/**
 * MarketPay API
 * API for Smart Contracts and Payments
 *
 * OpenAPI spec version: v2.01
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class TransfersApi {
    protected basePath = 'https://localhost/';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * View a Transfer
     * A Transfer is a request to relocate e-money from one wallet to another wallet.
     * @param transferId The Id of a transfer
     */
    public transfersGet(transferId: number, extraHttpRequestParams?: any): Observable<models.TransferResponse> {
        return this.transfersGetWithHttpInfo(transferId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * 
     * @param page 
     * @param perPage 
     */
    public transfersGetList(page?: number, perPage?: number, extraHttpRequestParams?: any): Observable<models.ResponseListTransferResponse> {
        return this.transfersGetListWithHttpInfo(page, perPage, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create a Transfer
     * 
     * @param transfer Transfer Object params
     */
    public transfersPost(transfer?: models.TransferPost, extraHttpRequestParams?: any): Observable<models.TransferResponse> {
        return this.transfersPostWithHttpInfo(transfer, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * View a Transfer
     * A Transfer is a request to relocate e-money from one wallet to another wallet.
     * @param transferId The Id of a transfer
     */
    public transfersGetWithHttpInfo(transferId: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/v2.01/Transfers/${TransferId}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'transferId' is not null or undefined
        if (transferId === null || transferId === undefined) {
            throw new Error('Required parameter transferId was null or undefined when calling transfersGet.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'text/plain', 
            'application/json', 
            'text/json'
        ];

        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * 
     * @param page 
     * @param perPage 
     */
    public transfersGetListWithHttpInfo(page?: number, perPage?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/v2.01/Transfers`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (page !== undefined) {
            if(page instanceof Date) {
                queryParameters.set('Page', <any>page.d.toISOString());
            } else {
                queryParameters.set('Page', <any>page);
            }
        }

        if (perPage !== undefined) {
            if(perPage instanceof Date) {
                queryParameters.set('Per_Page', <any>perPage.d.toISOString());
            } else {
                queryParameters.set('Per_Page', <any>perPage);
            }
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'text/plain', 
            'application/json', 
            'text/json'
        ];

        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Create a Transfer
     * 
     * @param transfer Transfer Object params
     */
    public transfersPostWithHttpInfo(transfer?: models.TransferPost, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/v2.01/Transfers`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json', 
            'text/json', 
            'application/json-patch+json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'text/plain', 
            'application/json', 
            'text/json'
        ];

        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: transfer == null ? '' : JSON.stringify(transfer), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
