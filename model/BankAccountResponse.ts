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

import * as models from './models';

export interface BankAccountResponse {
    /**
     * The type of bank account
     */
    type?: BankAccountResponse.TypeEnum;

    /**
     * The address of the owner of the bank account
     */
    ownerAddress?: models.Address;

    /**
     * The name of the owner of the bank account
     */
    ownerName?: string;

    /**
     * The object owner's UserId
     */
    userId?: string;

    /**
     * Whether the bank account is active or not
     */
    active?: boolean;

    id?: string;

    creationDate?: number;

    tag?: string;

}
export namespace BankAccountResponse {
    export enum TypeEnum {
        IBAN = <any> 'IBAN',
        GB = <any> 'GB',
        US = <any> 'US',
        CA = <any> 'CA',
        OTHER = <any> 'OTHER'
    }
}
