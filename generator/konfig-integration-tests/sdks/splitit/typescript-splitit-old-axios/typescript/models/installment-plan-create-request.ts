/*
splitit-web-api-v3

Splitit's Web API

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AddressDataModel } from './address-data-model';
import { EventsEndpointsModel } from './events-endpoints-model';
import { PaymentMethodModel } from './payment-method-model';
import { PlanDataModel } from './plan-data-model';
import { ProcessingData } from './processing-data';
import { RedirectionEndpointsModel } from './redirection-endpoints-model';
import { ShopperData } from './shopper-data';

/**
 * 
 * @export
 * @interface InstallmentPlanCreateRequest
 */
export interface InstallmentPlanCreateRequest {
    /**
     * 
     * @type {boolean}
     * @memberof InstallmentPlanCreateRequest
     */
    'AutoCapture': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof InstallmentPlanCreateRequest
     */
    'Attempt3dSecure'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof InstallmentPlanCreateRequest
     */
    'TermsAndConditionsAccepted': boolean;
    /**
     * 
     * @type {ShopperData}
     * @memberof InstallmentPlanCreateRequest
     */
    'Shopper'?: ShopperData;
    /**
     * 
     * @type {PlanDataModel}
     * @memberof InstallmentPlanCreateRequest
     */
    'PlanData'?: PlanDataModel;
    /**
     * 
     * @type {AddressDataModel}
     * @memberof InstallmentPlanCreateRequest
     */
    'BillingAddress'?: AddressDataModel;
    /**
     * 
     * @type {PaymentMethodModel}
     * @memberof InstallmentPlanCreateRequest
     */
    'PaymentMethod'?: PaymentMethodModel;
    /**
     * 
     * @type {RedirectionEndpointsModel}
     * @memberof InstallmentPlanCreateRequest
     */
    'RedirectUrls'?: RedirectionEndpointsModel;
    /**
     * 
     * @type {ProcessingData}
     * @memberof InstallmentPlanCreateRequest
     */
    'ProcessingData'?: ProcessingData;
    /**
     * 
     * @type {EventsEndpointsModel}
     * @memberof InstallmentPlanCreateRequest
     */
    'EventsEndpoints'?: EventsEndpointsModel;
}
