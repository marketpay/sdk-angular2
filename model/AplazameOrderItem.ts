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

export interface AplazameOrderItem {
    id?: string;

    name: string;

    url?: string;

    imageUrl?: string;

    quantity?: number;

    price: number;

    description?: string;

    taxRate?: number;

}
