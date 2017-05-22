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

export interface UniversalPayRefundResponse {
    /**
     * Information about the funds that are being debited
     */
    debitedFunds?: models.Money;

    /**
     * Details about the funds that are being credited (DebitedFunds – Fees = CreditedFunds)
     */
    creditedFunds?: models.Money;

    /**
     * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
     */
    fees?: models.Money;

    /**
     * The ID of the wallet that was debited
     */
    debitedWalletId?: string;

    /**
     * The ID of the wallet where money will be credited
     */
    creditedWalletId?: string;

    /**
     * A user's ID
     */
    authorId?: string;

    /**
     * The user ID who was credited
     */
    creditedUserId?: string;

    /**
     * The nature of the transaction
     */
    nature?: UniversalPayRefundResponse.NatureEnum;

    /**
     * The status of the transaction
     */
    status?: UniversalPayRefundResponse.StatusEnum;

    /**
     * When the transaction happened
     */
    executionDate?: number;

    /**
     * The result code
     */
    resultCode?: string;

    /**
     * A verbal explanation of the ResultCode
     */
    resultMessage?: string;

    /**
     * The type of the transaction
     */
    type?: UniversalPayRefundResponse.TypeEnum;

    /**
     * The initial transaction ID
     */
    initialTransactionId?: string;

    /**
     * The initial transaction type
     */
    initialTransactionType?: UniversalPayRefundResponse.InitialTransactionTypeEnum;

    /**
     * Contains info about the reason for refund
     */
    refundReason?: models.RefundReason;

    id?: string;

    creationDate?: number;

    tag?: string;

}
export namespace UniversalPayRefundResponse {
    export enum NatureEnum {
        REGULAR = <any> 'REGULAR',
        REFUND = <any> 'REFUND',
        REPUDIATION = <any> 'REPUDIATION',
        SETTLEMENT = <any> 'SETTLEMENT'
    }
    export enum StatusEnum {
        CREATED = <any> 'CREATED',
        SUCCEEDED = <any> 'SUCCEEDED',
        FAILED = <any> 'FAILED'
    }
    export enum TypeEnum {
        PAYIN = <any> 'PAYIN',
        PAYOUT = <any> 'PAYOUT',
        TRANSFER = <any> 'TRANSFER'
    }
    export enum InitialTransactionTypeEnum {
        NotSpecified = <any> 'NotSpecified',
        PAYIN = <any> 'PAYIN',
        TRANSFER = <any> 'TRANSFER',
        PAYOUT = <any> 'PAYOUT'
    }
}
