import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function Sdk7ShiftsTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="7-shifts-typescript-sdk"
      metaDescription={`7shifts is a team management software designed for restaurants. We help managers and operators spend less time and effort scheduling their staff, reduce their monthly labor costs and improve team communication. The result is simplified team management, one shift at a time.

7shifts also offers free mobile apps (iOS and Android) allowing managers and employees to have everything at their fingertips.

Start your free trial or request a demo at www.7shifts.com.`}
      company="7shifts"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/7-shifts/logo.png"
      companyKebabCase="7-shifts"
      clientNameCamelCase="7Shifts"
      homepage="7shifts.com"
      lastUpdated={new Date("2024-03-25T19:04:01.511Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/7-shifts/favicon.jpg"
      // Missing contactUrl
      contactEmail="api-support@7shifts.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/7-shifts/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["team_management","restaurant","scheduling","labor_costs","team_communication","workforce_insights","hr_metrics","hr_analytics","hr_reporting","workforce_planning","human_capital_management","workforce_solutions","food_beverages","restaurants","staff_scheduling","restaurant_scheduling","restaurant_communication","scheduling_software","labor_tools","staff_management"]}
      methods={[
  {
    "url": "/oauth2/token",
    "method": "generateOAuthToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Create OAuth Token",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GRANT_TYPE"
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_ID"
      },
      {
        "name": "client_secret",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/whoami",
    "method": "getIdentity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Retrieve Identity",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/partner_company_creation",
    "method": "createTrialAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "Create Trial Account",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "firstname",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "lastname",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "company_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_NAME"
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRY"
      },
      {
        "name": "mobile_phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "utm_campaign",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "utm_content",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "utm_medium",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "utm_source",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UTM_SOURCE"
      },
      {
        "name": "utm_term",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "List Companies",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "modifiedSince",
        "schema": "string",
        "required": false,
        "description": "Return companies that have been modified since the specified date. Format YYYY-MM-DD",
        "example": "2020-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Retrieve Company",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 8655
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{id}",
    "method": "updateCompanyById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Update Company",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "photo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/labor_settings",
    "method": "getLaborSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Retrieve Labor Settings",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/inactive_reasons",
    "method": "listInactiveReasons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "List Inactive Reasons",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/locations",
    "method": "listGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "List Locations",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "modifiedSince",
        "schema": "string",
        "required": false,
        "description": "Return locations that have been modified since the specified date. Format YYYY-MM-DD",
        "example": "2020-01-01"
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": "When TRUE the search will return deleted locations",
        "default": false
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Cursor for the next or previous page of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results desired per page.",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/locations",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Create Location",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Quackers"
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CA"
      },
      {
        "name": "formatted_address",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "701 Broadway Ave #200, MadeUpCity, SK SVN 1C3, Canada"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ON"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Toronto"
      },
      {
        "name": "latitude",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "longitude",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "place_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "America/Chicago"
      },
      {
        "name": "holiday_pay",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "sun_hours_close",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 57030,
        "default": "00:00:00"
      },
      {
        "name": "mon_hours_close",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 57030,
        "default": "00:00:00"
      },
      {
        "name": "tue_hours_close",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 57030,
        "default": "00:00:00"
      },
      {
        "name": "wed_hours_close",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 57030,
        "default": "00:00:00"
      },
      {
        "name": "thu_hours_close",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 57030,
        "default": "00:00:00"
      },
      {
        "name": "fri_hours_close",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 57030,
        "default": "00:00:00"
      },
      {
        "name": "sat_hours_close",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 57030,
        "default": "00:00:00"
      },
      {
        "name": "sun_hours_open",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 57030,
        "default": "07:00:00"
      },
      {
        "name": "mon_hours_open",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 57030,
        "default": "07:00:00"
      },
      {
        "name": "tue_hours_open",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 57030,
        "default": "07:00:00"
      },
      {
        "name": "wed_hours_open",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 57030,
        "default": "07:00:00"
      },
      {
        "name": "thu_hours_open",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 57030,
        "default": "07:00:00"
      },
      {
        "name": "fri_hours_open",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 57030,
        "default": "07:00:00"
      },
      {
        "name": "sat_hours_open",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 57030,
        "default": "07:00:00"
      },
      {
        "name": "sun_is_closed",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "mon_is_closed",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "tue_is_closed",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "wed_is_closed",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "thu_is_closed",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "fri_is_closed",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "sat_is_closed",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "enable_shift_feedback",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "shift_feedback",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "coupon",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Quakers"
      },
      {
        "name": "stripe_token_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "tok_1KG8LT2eZvKYlo2CODSv0IXB"
      },
      {
        "name": "copy_from_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/locations/{location_id}",
    "method": "removeLocationById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Delete Location",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/locations/{location_id}",
    "method": "getLocation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Retrieve Location",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/locations/{location_id}",
    "method": "updateLocationById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Update Location",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 1234
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Quackers"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "Toronto"
      },
      {
        "name": "country",
        "schema": "string",
        "description": "",
        "example": "CA"
      },
      {
        "name": "state",
        "schema": "string",
        "description": "",
        "example": "ON"
      },
      {
        "name": "shift_feedback",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "formatted_address",
        "schema": "string",
        "description": "",
        "example": "200 Bathurst Street, Toronto, ON, Canada"
      },
      {
        "name": "lat",
        "schema": "number",
        "description": "",
        "example": 43.6478436
      },
      {
        "name": "lng",
        "schema": "number",
        "description": "",
        "example": -79.4043708
      },
      {
        "name": "place_id",
        "schema": "string",
        "description": "",
        "example": "ChIJUyrhFOc0K4gRyuFq6AUlfmE"
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "",
        "example": "America/Chicago"
      },
      {
        "name": "hash",
        "schema": "string",
        "description": ""
      },
      {
        "name": "department_based_budget",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "holiday_pay",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "auto_send_log_book_time",
        "schema": "string",
        "description": "",
        "example": 57030
      },
      {
        "name": "sun_hours_close",
        "schema": "string",
        "description": "",
        "example": 57030,
        "default": "00:00:00"
      },
      {
        "name": "mon_hours_close",
        "schema": "string",
        "description": "",
        "example": 57030,
        "default": "00:00:00"
      },
      {
        "name": "tue_hours_close",
        "schema": "string",
        "description": "",
        "example": 57030,
        "default": "00:00:00"
      },
      {
        "name": "wed_hours_close",
        "schema": "string",
        "description": "",
        "example": 57030,
        "default": "00:00:00"
      },
      {
        "name": "thu_hours_close",
        "schema": "string",
        "description": "",
        "example": 57030,
        "default": "00:00:00"
      },
      {
        "name": "fri_hours_close",
        "schema": "string",
        "description": "",
        "example": 57030,
        "default": "00:00:00"
      },
      {
        "name": "sat_hours_close",
        "schema": "string",
        "description": "",
        "example": 57030,
        "default": "00:00:00"
      },
      {
        "name": "sun_hours_open",
        "schema": "string",
        "description": "",
        "example": 57030,
        "default": "07:00:00"
      },
      {
        "name": "mon_hours_open",
        "schema": "string",
        "description": "",
        "example": 57030,
        "default": "07:00:00"
      },
      {
        "name": "tue_hours_open",
        "schema": "string",
        "description": "",
        "example": 57030,
        "default": "07:00:00"
      },
      {
        "name": "wed_hours_open",
        "schema": "string",
        "description": "",
        "example": 57030,
        "default": "07:00:00"
      },
      {
        "name": "thu_hours_open",
        "schema": "string",
        "description": "",
        "example": 57030,
        "default": "07:00:00"
      },
      {
        "name": "fri_hours_open",
        "schema": "string",
        "description": "",
        "example": 57030,
        "default": "07:00:00"
      },
      {
        "name": "sat_hours_open",
        "schema": "string",
        "description": "",
        "example": 57030,
        "default": "07:00:00"
      },
      {
        "name": "sun_is_closed",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "mon_is_closed",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "tue_is_closed",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "wed_is_closed",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "thu_is_closed",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "fri_is_closed",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "sat_is_closed",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "message",
        "schema": "string",
        "description": "",
        "example": "msg"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/departments",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "List Departments",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "modifiedSince",
        "schema": "string",
        "required": false,
        "description": "Return departments that have been modified since the specified date. Format YYYY-MM-DD",
        "example": "2020-01-01"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Cursor for the next or previous page of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results desired per page."
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": false,
        "description": "Return departments that match the provided location ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/departments",
    "method": "createNewDepartment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Create Department",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "location_id",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "default",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/departments/{department_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Delete Department",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "Department ID",
        "example": 1234
      },
      {
        "name": "transferTo",
        "schema": "integer",
        "required": false,
        "description": "Department ID to move roles and shifts to",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/departments/{department_id}",
    "method": "getDepartment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Retrieve Department",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "Department ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/departments/{department_id}",
    "method": "updateDepartment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Update Department",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "Department ID",
        "example": 1234
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "default",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/roles",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "List Roles",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": false,
        "description": "Location ID"
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": false,
        "description": "Department ID"
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "Role IDs",
        "example": "123,321"
      },
      {
        "name": "modifiedSince",
        "schema": "string",
        "required": false,
        "description": "Return roles that have been modified since the specified date. Format YYYY-MM-DD",
        "example": "2020-01-01"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Cursor for the next or previous page of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results desired per page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/roles",
    "method": "createRole",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "Create Role",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "The company id",
        "example": 1234
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "color",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLOR"
      },
      {
        "name": "location_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "department_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "sort",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "job_code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stations",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/roles/{role_id}",
    "method": "deleteRole",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "Delete Role",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "roleId",
        "schema": "integer",
        "required": true,
        "description": "Role ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/roles/{role_id}",
    "method": "getRole",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "Retrieve Role",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "roleId",
        "schema": "integer",
        "required": true,
        "description": "Role ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/roles/{role_id}",
    "method": "updateRoleById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "Update Role",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "roleId",
        "schema": "integer",
        "required": true,
        "description": "Role ID",
        "example": 1234
      },
      {
        "name": "department_id",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "color",
        "schema": "string",
        "description": "",
        "example": "76a939"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Bartender"
      },
      {
        "name": "job_code",
        "schema": "string",
        "description": "",
        "example": "BOH-Bartender"
      },
      {
        "name": "stations",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/users",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List Users",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "modifiedSince",
        "schema": "string",
        "required": false,
        "description": "Return users that have been modified since the specified date. Format YYYY-MM-DD",
        "example": "2020-01-01"
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": false,
        "description": "Location ID (cannot be used in conjunction with Department ID and Role ID)"
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": false,
        "description": "Department ID (cannot be used in conjunction with Location ID and Role ID)"
      },
      {
        "name": "roleId",
        "schema": "integer",
        "required": false,
        "description": "Role ID (cannot be used in conjunction with Location ID and Department ID)"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "The user status"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter by partial or full employee name"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": "Sort the paginated result by the given field and direction.",
        "example": "firstname.asc,lastname.desc"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Cursor for the next or previous page of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results desired per page.",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/users",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create User",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRST_NAME"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_NAME"
      },
      {
        "name": "preferred_first_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "preferred_last_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "location_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "department_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "role_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "example@7shifts.com"
      },
      {
        "name": "mobile_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 3061234454
      },
      {
        "name": "home_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 3061234454
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "postal_zip",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "prov_state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "invite_user",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hire_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-05-20"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "employee_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "punch_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "birth_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-07-21"
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "en"
      },
      {
        "name": "appear_as_employee",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "subscribe_to_updates",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "max_weekly_hours",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "wage_cents",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 2253
      },
      {
        "name": "wage_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wages",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "permissions_template_id",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/create_many_users",
    "method": "bulkCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create Many Users",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/users/{identifier}",
    "method": "deactivate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Deactivate User",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "identifier",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "inactive_reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INACTIVE_REASON"
      },
      {
        "name": "inactive_comments",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/users/{identifier}",
    "method": "getUserByIdentifier",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Retrieve User",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "User ID. Accepted values are 7shifts user id or punch id. Use prefix punch: for punch id",
        "example": "IDENTIFIER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/users/{identifier}",
    "method": "updateUserByIdentifier",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update User",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "identifier",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "first_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "preferred_first_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "preferred_last_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "example@7shifts.com"
      },
      {
        "name": "mobile_number",
        "schema": "string",
        "description": "",
        "example": 3061234454
      },
      {
        "name": "home_number",
        "schema": "string",
        "description": "",
        "example": 3061234454
      },
      {
        "name": "address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postal_zip",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prov_state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hire_date",
        "schema": "string",
        "description": "",
        "example": "2017-05-20"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employee_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "punch_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "birth_date",
        "schema": "string",
        "description": "",
        "example": "2017-07-21"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "",
        "default": "en"
      },
      {
        "name": "appear_as_employee",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "subscribe_to_updates",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "max_weekly_hours",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "pronouns",
        "schema": "string",
        "description": ""
      },
      {
        "name": "permissions_template_id",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/users/{user_id}/wages",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Wages",
    "typeScriptTag": "userWages",
    "description": "List User Wages",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/users/{user_id}/wages",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User Wages",
    "typeScriptTag": "userWages",
    "description": "Create User Wage",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "effective_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-01-01"
      },
      {
        "name": "role_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "wage_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WAGE_TYPE"
      },
      {
        "name": "wage_cents",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/users/{user_id}/assignments",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Assignments",
    "typeScriptTag": "userAssignments",
    "description": "List Assignments",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/users/{user_id}/location_assignments",
    "method": "listLocationAssignments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Assignments",
    "typeScriptTag": "userAssignments",
    "description": "List Location Assignments",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/users/{user_id}/location_assignments",
    "method": "createLocationAssignment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User Assignments",
    "typeScriptTag": "userAssignments",
    "description": "Create Location Assignments",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "location_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/users/{user_id}/location_assignments/{location_id}",
    "method": "removeLocationAssignment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User Assignments",
    "typeScriptTag": "userAssignments",
    "description": "Delete Location Assignment",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/users/{user_id}/department_assignments",
    "method": "listDepartmentAssignments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Assignments",
    "typeScriptTag": "userAssignments",
    "description": "List Department Assignments",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/users/{user_id}/department_assignments",
    "method": "createDepartmentAssignment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User Assignments",
    "typeScriptTag": "userAssignments",
    "description": "Create Department Assignment",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "department_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "appear_on_schedule",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/users/{user_id}/department_assignments/{department_id}",
    "method": "removeDepartmentAssignment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User Assignments",
    "typeScriptTag": "userAssignments",
    "description": "Delete Department Assignment",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "Department ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/users/{user_id}/role_assignments",
    "method": "listRoleAssignments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Assignments",
    "typeScriptTag": "userAssignments",
    "description": "List Role Assignments",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/users/{user_id}/role_assignments",
    "method": "createRoleAssignment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User Assignments",
    "typeScriptTag": "userAssignments",
    "description": "Create Role Assignment",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "role_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "primary",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/users/{user_id}/role_assignments/{role_id}",
    "method": "deleteRoleAssignment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User Assignments",
    "typeScriptTag": "userAssignments",
    "description": "Delete Role Assignment",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "roleId",
        "schema": "integer",
        "required": true,
        "description": "Role ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/shifts",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shifts",
    "typeScriptTag": "shifts",
    "description": "List Shifts",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Cursor for the next or previous page of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results desired per page.",
        "default": 100
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": false,
        "description": "Location ID",
        "example": 1234
      },
      {
        "name": "shiftIds",
        "schema": "array",
        "required": false,
        "description": "A comma separated list of Shift IDs",
        "example": "123,231,222"
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": false,
        "description": "Department ID",
        "example": 1234
      },
      {
        "name": "departmentIds",
        "schema": "array",
        "required": false,
        "description": "Department IDs",
        "example": "123,231,222"
      },
      {
        "name": "roleId",
        "schema": "integer",
        "required": false,
        "description": "Role ID",
        "example": 1234
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": false,
        "description": "User ID",
        "example": 1234
      },
      {
        "name": "start[lte]",
        "schema": "string",
        "required": false,
        "description": "Return shifts that start before or on specified date. In ISO8601 Format",
        "example": "2021-01-30T08:30:00Z"
      },
      {
        "name": "start[gte]",
        "schema": "string",
        "required": false,
        "description": "Return shifts that start after or on specified date time. In ISO8601 Format",
        "example": "2021-01-30T08:30:00Z"
      },
      {
        "name": "end[lte]",
        "schema": "string",
        "required": false,
        "description": "Return shifts that end before or on specified date time. In ISO8601 Format",
        "example": "2021-01-30T08:30:00Z"
      },
      {
        "name": "end[gte]",
        "schema": "string",
        "required": false,
        "description": "Return shifts that end after or on specified date time. In ISO8601 Format",
        "example": "2021-01-30T08:30:00Z"
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": "Return shifts that were published and have been deleted. Cannot be combined with draft.",
        "default": false
      },
      {
        "name": "draft",
        "schema": "boolean",
        "required": false,
        "description": "Return shifts that are in draft. Draft shifts have created, edited or deleted but not been published. Overrides deleted flag.",
        "default": false
      },
      {
        "name": "includeDraft",
        "schema": "boolean",
        "required": false,
        "description": "Return shifts that are published, and also shifts in draft. Overrides deleted flag and draft flag.",
        "default": false
      },
      {
        "name": "open",
        "schema": "boolean",
        "required": false,
        "description": "Return shifts that are open. Open shifts means anyone can request to take it and not assigned to any individual."
      },
      {
        "name": "modifiedSince",
        "schema": "string",
        "required": false,
        "description": "Return only shifts that have been modified from specified date time. In ISO8601 Format",
        "example": "2021-01-30T08:30:00Z"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": "Sort by either start or end"
      },
      {
        "name": "sortDir",
        "schema": "string",
        "required": false,
        "description": "Sort by direction (asc, desc)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/shifts",
    "method": "createNewShift",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shifts",
    "typeScriptTag": "shifts",
    "description": "Create Shift",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "location_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "user_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "department_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "role_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "station_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "END"
      },
      {
        "name": "close",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "business_decline",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "notified",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "open",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "open_offer_type",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "unassigned",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "unassigned_skill_level",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "late_minutes",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "breaks",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/shifts/{shift_id}",
    "method": "deleteShiftById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shifts",
    "typeScriptTag": "shifts",
    "description": "Delete Shift",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "shiftId",
        "schema": "integer",
        "required": true,
        "description": "Shift ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/shifts/{shift_id}",
    "method": "getShiftById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shifts",
    "typeScriptTag": "shifts",
    "description": "Retrieve Shift",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "shiftId",
        "schema": "integer",
        "required": true,
        "description": "Shift ID",
        "example": 0
      },
      {
        "name": "includeDeleted",
        "schema": "boolean",
        "required": false,
        "description": "Return the shift even if its deleted"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/shifts/{shift_id}",
    "method": "updateShiftById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shifts",
    "typeScriptTag": "shifts",
    "description": "Update Shift",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "shiftId",
        "schema": "integer",
        "required": true,
        "description": "Shift ID",
        "example": 0
      },
      {
        "name": "location_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "department_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "role_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "station_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "start",
        "schema": "string",
        "description": "",
        "example": "2021-01-01T00:00:00.000Z"
      },
      {
        "name": "end",
        "schema": "string",
        "description": "",
        "example": "2021-01-01T00:00:00.000Z"
      },
      {
        "name": "close",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "business_decline",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "draft",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "open",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "open_offer_type",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "unassigned",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "unassigned_skill_level",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "status",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "late_minutes",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "breaks",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/shifts_scheduled/{id}",
    "method": "listScheduledShifts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schedule Enforcement",
    "typeScriptTag": "scheduleEnforcement",
    "description": "List Scheduled Shifts",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Specified user_id of the user to check if scheduled. If the value begins with punch_id: then this specifies a user punch_id.",
        "example": "punch_id:003184"
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID.",
        "example": 5
      },
      {
        "name": "gracePeriod",
        "schema": "integer",
        "description": "Grace period in minutes.",
        "example": 5
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/time_punches",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Punches",
    "typeScriptTag": "timePunches",
    "description": "List Time Punches",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "locationId",
        "schema": "integer",
        "description": "Location ID"
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "description": "Department ID"
      },
      {
        "name": "roleId",
        "schema": "integer",
        "description": "Role ID"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "User ID"
      },
      {
        "name": "approved",
        "schema": "boolean",
        "required": false,
        "description": "Returns time punches that have been approved. Default null, returns both approved and unapproved punches. If true returns only approved punches. If false returns only unapproved punches.",
        "default": null
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The limit of results that will be returned.",
        "default": 20
      },
      {
        "name": "modifiedSince",
        "schema": "string",
        "required": false,
        "description": "Return time punches that have been modified after the specified date time. UTC in ISO8601 Format",
        "example": "2020-12-30T15:00:00.000Z"
      },
      {
        "name": "clockedIn[lte]",
        "schema": "string",
        "description": "Return time punches with clocked in before or on the specified date.  UTC in ISO8601 format"
      },
      {
        "name": "clockedIn[gte]",
        "schema": "string",
        "description": "Return time punches with clocked in after or on the specified date.  UTC in ISO8601 format"
      },
      {
        "name": "clockedOut[lte]",
        "schema": "string",
        "description": "Return time punches with clocked out before or on the specified date.  UTC in ISO8601 format"
      },
      {
        "name": "clockedOut[gte]",
        "schema": "string",
        "description": "Return time punches with clocked out after or on the specified date.  UTC in ISO8601 format"
      },
      {
        "name": "includeDeleted",
        "schema": "boolean",
        "description": "Deprecated, see 'deleted'",
        "default": false
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": "Returns punches filtered by deleted status.  Default false, returns undeleted punches. If true returns only deleted punches. if value is null then returns both deleted and undeleted punches.",
        "default": false
      },
      {
        "name": "localizeSearchTime",
        "schema": "boolean",
        "description": "If true, convert any date ranges to consider the local timezone of the punches.  If false, date ranges will be in UTC",
        "default": false
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Cursor for the next or previous page of results."
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "The name of the field and direction you want the results ordered by."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/time_punches",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Punches",
    "typeScriptTag": "timePunches",
    "description": "Create Time Punch",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "The company id",
        "example": 1234
      },
      {
        "name": "location_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "department_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "role_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "clocked_in",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2021-01-01T00:00:00.000Z"
      },
      {
        "name": "clocked_out",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-01-01T00:00:00.000Z"
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tips",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "breaks",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/time_punches/{time_punch_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Time Punches",
    "typeScriptTag": "timePunches",
    "description": "Delete Time Punch",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "timePunchId",
        "schema": "integer",
        "required": true,
        "description": "Time punch ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/time_punches/{time_punch_id}",
    "method": "getTimePunch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Punches",
    "typeScriptTag": "timePunches",
    "description": "Retrieve Time Punch",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "timePunchId",
        "schema": "integer",
        "required": true,
        "description": "Time punch ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/time_punches/{time_punch_id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time Punches",
    "typeScriptTag": "timePunches",
    "description": "Update Time Punch",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company id",
        "example": 1234
      },
      {
        "name": "timePunchId",
        "schema": "integer",
        "required": true,
        "description": "Time punch id",
        "example": 1234
      },
      {
        "name": "department_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "role_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "clocked_in",
        "schema": "string",
        "description": "",
        "example": "2021-01-01T00:00:00.000Z"
      },
      {
        "name": "clocked_out",
        "schema": "string",
        "description": "",
        "example": "2021-01-01T00:00:00.000Z"
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tips",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "breaks",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/receipts",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Receipts",
    "typeScriptTag": "receipts",
    "description": "List Receipts",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 1234
      },
      {
        "name": "receiptDate[gte]",
        "schema": "string",
        "required": false,
        "description": "Return receipts that were created on or after a specific date",
        "example": "2022-01-01"
      },
      {
        "name": "receiptDate[lte]",
        "schema": "string",
        "required": false,
        "description": "Return receipts that were created on or before a specific date",
        "example": "2022-01-01"
      },
      {
        "name": "modifiedSince",
        "schema": "string",
        "required": false,
        "description": "Return receipts that were modified on or after a specific date",
        "example": "2022-01-01"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter receipts by status type",
        "example": "open"
      },
      {
        "name": "externalUserId",
        "schema": "string",
        "required": false,
        "description": "Filter receipts by external user id",
        "example": "ABC123"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "An opaque cursor for the next or previous result set."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results desired per page.",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/receipts",
    "method": "createReceipt",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Receipts",
    "typeScriptTag": "receipts",
    "description": "Create Receipt",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "receipt_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECEIPT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/receipts/{receipt_id}",
    "method": "getReceipt",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Receipts",
    "typeScriptTag": "receipts",
    "description": "Retrieve Receipt",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "receiptId",
        "schema": "string",
        "required": true,
        "description": "Receipt UUID",
        "example": "RECEIPT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/receipts/{receipt_id}",
    "method": "updateReceipt",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Receipts",
    "typeScriptTag": "receipts",
    "description": "Update Receipt",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "receiptId",
        "schema": "string",
        "required": true,
        "description": "Receipt ID.  Either 7shifts receipt UUID or a combination of the External ID of the sales receipt in your system and a Location ID. External ID's must start with 'ext:' and the format is ext:location_id:receipt_id.",
        "example": "ext:7890:rec_8522451"
      },
      {
        "name": "receipt_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-01-01T00:00:00.000Z"
      },
      {
        "name": "net_total",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "gross_total",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "total_receipt_discounts",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "tips",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "external_user_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "revenue_center",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "receipt_lines",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "tip_details",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "order_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dining_option",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/receipts_summary",
    "method": "getSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Receipts",
    "typeScriptTag": "receipts",
    "description": "Retrieve Receipts Summary",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 1234
      },
      {
        "name": "receiptDate[gte]",
        "schema": "string",
        "required": false,
        "description": "Return receipts that were created on or after a specific date. Limit to 31-day range with receipt_date[lte].",
        "example": "2022-01-01"
      },
      {
        "name": "receiptDate[lte]",
        "schema": "string",
        "required": false,
        "description": "Return receipts that were created on or before a specific date. Limit to 31-day range with receipt_date[gte].",
        "example": "2022-01-01"
      },
      {
        "name": "modifiedSince",
        "schema": "string",
        "required": false,
        "description": "Return receipts that were modified on or after a specific date. Limited to past 30 days.",
        "example": "2022-01-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/external_user_mappings/{identifier}",
    "method": "deleteMapping",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "External User Mappings",
    "typeScriptTag": "externalUserMappings",
    "description": "Delete External User Mapping",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "User ID. Accepted values are 7Shifts user id, external user id or user email address. Use prefix ext: for external id or email: for email address",
        "example": "IDENTIFIER"
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": false,
        "description": "Location ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/external_user_mappings/{identifier}",
    "method": "getMappingById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "External User Mappings",
    "typeScriptTag": "externalUserMappings",
    "description": "Retrieve User External Mapping",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "User ID. Accepted values are 7Shifts user id or external user id. Use prefix ext: for external id",
        "example": "IDENTIFIER"
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": false,
        "description": "Location ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/external_user_mappings/{identifier}",
    "method": "updateMappingByIdentifier",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "External User Mappings",
    "typeScriptTag": "externalUserMappings",
    "description": "Update External User Mappings",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "User ID. Accepted values are 7Shifts user id or external user id. Use prefix ext: for external id",
        "example": "IDENTIFIER"
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": false,
        "description": "Location ID"
      },
      {
        "name": "user_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "external_user_id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/external_user_mappings",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "External User Mappings",
    "typeScriptTag": "externalUserMappings",
    "description": "List External User Mapping",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": false,
        "description": "Location ID"
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": false,
        "description": "The 7shifts user ID"
      },
      {
        "name": "externalUserId",
        "schema": "string",
        "required": false,
        "description": "The external user ID"
      },
      {
        "name": "modifiedSince",
        "schema": "string",
        "required": false,
        "description": "Return records that have been modified since the specified date. Format YYYY-MM-DD",
        "example": "2020-01-01"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Cursor for the next or previous page of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results desired per page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/external_user_mappings",
    "method": "createMapping",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "External User Mappings",
    "typeScriptTag": "externalUserMappings",
    "description": "Create External User Mapping",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": false,
        "description": "Location ID"
      },
      {
        "name": "user_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "external_user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXTERNAL_USER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/external_user_mappings_bulk",
    "method": "createBulkMappings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "External User Mappings",
    "typeScriptTag": "externalUserMappings",
    "description": "Create User External Mappings",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": false,
        "description": "Location ID"
      },
      {
        "name": "data",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/events",
    "method": "listEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schedule Events",
    "typeScriptTag": "scheduleEvents",
    "description": "List Events",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": false,
        "description": "Location ID",
        "example": 1234
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "A date string to request only events within a range.  Format YYYY-MM-DD",
        "example": "2020-02-02"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "A date string to request only events within a range.  Format YYYY-MM-DD",
        "example": "2020-02-08"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/events",
    "method": "createEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Schedule Events",
    "typeScriptTag": "scheduleEvents",
    "description": "Create Event",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "location_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2019-01-01"
      },
      {
        "name": "start_time",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "09:00:00"
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2019-01-02"
      },
      {
        "name": "end_time",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "17:00:00"
      },
      {
        "name": "color",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "5ea17c"
      },
      {
        "name": "is_multi_day",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "recurrence",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Daily for 10 occurrences ==> (1997 9:00 AM EDT) September 2-11 DTSTART;TZID=America/New_York:19970902T090000 RRULE:FREQ=DAILY;COUNT=10"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/events/{event_id}",
    "method": "deleteEvent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Schedule Events",
    "typeScriptTag": "scheduleEvents",
    "description": "Delete Event",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "eventId",
        "schema": "integer",
        "required": true,
        "description": "Event ID",
        "example": 1234
      },
      {
        "name": "recurrenceTarget",
        "schema": "string",
        "description": "Recurrence Target",
        "example": [
          "THIS",
          "THIS_AND_FUTURE"
        ]
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Start of the targeted range for recurrence. Format YYYY-MM-DD HH:MM:SS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/events/{event_id}",
    "method": "getEventById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Schedule Events",
    "typeScriptTag": "scheduleEvents",
    "description": "Retrieve Event",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "eventId",
        "schema": "integer",
        "required": true,
        "description": "Event ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/events/{event_id}",
    "method": "updateEventById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Schedule Events",
    "typeScriptTag": "scheduleEvents",
    "description": "Update Event",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "eventId",
        "schema": "integer",
        "required": true,
        "description": "Event ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/task_management_settings",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task Management",
    "typeScriptTag": "taskManagement",
    "description": "Gets task management settings for a company",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/task_tags",
    "method": "deleteTaskTags",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Task Management",
    "typeScriptTag": "taskManagement",
    "description": "Delete Task Tags",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "company_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "uuids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/task_tags",
    "method": "createTaskTags",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task Management",
    "typeScriptTag": "taskManagement",
    "description": "Create Task Tags",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "tags",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "company_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/task_list_templates",
    "method": "getTaskListTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task Management",
    "typeScriptTag": "taskManagement",
    "description": "Get task list templates",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 8655
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": false,
        "description": "Location ID"
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": false,
        "description": "Department ID"
      },
      {
        "name": "roleId",
        "schema": "integer",
        "required": false,
        "description": "Role ID"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Cursor for the next or previous page of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results desired per page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/task_list_templates",
    "method": "createTaskListTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task Management",
    "typeScriptTag": "taskManagement",
    "description": "Create Task List Template",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 8655
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recurrence",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO"
      },
      {
        "name": "assignments",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "due",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "time_frame",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "task_templates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/task_list_templates/{uuid}",
    "method": "deleteTaskListTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Task Management",
    "typeScriptTag": "taskManagement",
    "description": "Delete Task List Template",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 8655
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "Task List Template UUID",
        "example": "UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/task_list_templates/{uuid}",
    "method": "getTaskListTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task Management",
    "typeScriptTag": "taskManagement",
    "description": "Retrieve Task List Template",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 8655
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "Task List Template UUID",
        "example": "UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/task_list_templates/{uuid}",
    "method": "editTaskListTemplate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Task Management",
    "typeScriptTag": "taskManagement",
    "description": "edit task list template",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 8655
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "Task List Template UUID",
        "example": "8cff3c09-e328-4425-bea5-20151ddc805a"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "task_templates",
        "schema": "array",
        "description": ""
      },
      {
        "name": "recurrence",
        "schema": "string",
        "description": "",
        "example": "RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO"
      },
      {
        "name": "assignments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "due",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "time_frame",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/task_lists",
    "method": "getTaskLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task Management",
    "typeScriptTag": "taskManagement",
    "description": "List Task Lists",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 8655
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "User ID",
        "example": 5678
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": false,
        "description": "Location ID",
        "example": 8655
      },
      {
        "name": "uuid",
        "schema": "string",
        "description": "Task List Template UUID",
        "example": "325bf7a2-21a8-4599-a377-2380140b6710"
      },
      {
        "name": "activeOnDate",
        "schema": "string",
        "required": false,
        "description": "Show only tasks lists that were active on a date (YYYY-MM-DD)",
        "example": "2019-11-05T00:00:00.000Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/task_lists/{list_id}",
    "method": "getTaskList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task Management",
    "typeScriptTag": "taskManagement",
    "description": "Retrieve Task List",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "List ID",
        "example": 1234
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": false,
        "description": "User ID",
        "example": 5678
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/task_lists/{list_id}/tasks/{task_id}/clear",
    "method": "clearTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task Management",
    "typeScriptTag": "taskManagement",
    "description": "Clear task",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "Task List ID",
        "example": 1234
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "Task ID",
        "example": 1234
      },
      {
        "name": "user_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/task_lists/{list_id}/tasks/{task_id}/complete",
    "method": "markComplete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task Management",
    "typeScriptTag": "taskManagement",
    "description": "Complete Task",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "Task List ID",
        "example": 1234
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "Task ID",
        "example": 1234
      },
      {
        "name": "user_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "completion_value",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/task_list_daily_summary",
    "method": "listTaskListsSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task Management",
    "typeScriptTag": "taskManagement",
    "description": "List Task Lists Summary",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 5678
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date of requested task lists",
        "example": "2019-07-01T00:00:00.000Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/log_book_categories",
    "method": "listCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Log Book",
    "typeScriptTag": "logBook",
    "description": "List Log Book Categories",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/log_book_categories",
    "method": "createCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Log Book",
    "typeScriptTag": "logBook",
    "description": "Create Log Book Category",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "col",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sort",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "field_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notify",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/log_book_categories/{id}",
    "method": "deleteCategoryById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Log Book",
    "typeScriptTag": "logBook",
    "description": "Delete Log Book Category",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Category ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/log_book_categories/{id}",
    "method": "updateCategoryById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Log Book",
    "typeScriptTag": "logBook",
    "description": "Update Log Book Category",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Category ID",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "col",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "field_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notify",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/log_book_posts",
    "method": "listPosts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Log Book",
    "typeScriptTag": "logBook",
    "description": "List Log Book Posts",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "locationId",
        "schema": "integer",
        "description": "Location ID"
      },
      {
        "name": "logBookCategoryId",
        "schema": "integer",
        "description": "Log Book Category ID"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "Post Author User ID"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "Date of log book creation, format YYYY-MM-DD",
        "example": "2020-01-01"
      },
      {
        "name": "postedDateGte",
        "schema": "string",
        "description": "List only log book posts from dates inclusive after, format YYYY-MM-DD",
        "example": "2020-01-01"
      },
      {
        "name": "postedDateLte",
        "schema": "string",
        "description": "List only log book posts from dates inclusive before, format YYYY-MM-DD",
        "example": "2020-01-01"
      },
      {
        "name": "message",
        "schema": "string",
        "description": "List only posts containing the message"
      },
      {
        "name": "orderField",
        "schema": "string",
        "description": "Order listed log book posts by a field"
      },
      {
        "name": "orderDir",
        "schema": "string",
        "description": "Specified direction to order listed log book posts"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Cursor for the next or previous page of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results desired per page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/log_book_posts",
    "method": "createPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Log Book",
    "typeScriptTag": "logBook",
    "description": "Create Log Book Post",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "location_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "log_book_category_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-01-01"
      },
      {
        "name": "message",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGE"
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/log_book_posts/{id}",
    "method": "deletePost",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Log Book",
    "typeScriptTag": "logBook",
    "description": "Delete Log Book Post",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Log Book Post ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/log_book_posts/{id}",
    "method": "getPost",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Log Book",
    "typeScriptTag": "logBook",
    "description": "Retrieve Log Book Post",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Log Book Post ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/log_book_comments",
    "method": "listComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Log Book",
    "typeScriptTag": "logBook",
    "description": "List Log Book Comments",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "logBookIds",
        "schema": "array",
        "required": true,
        "description": "Log book post id associated with log book comments",
        "example": "123,321"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/log_book_comments",
    "method": "createComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Log Book",
    "typeScriptTag": "logBook",
    "description": "Create Log Book Comment",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "log_book_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "message",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/log_book_comments/{id}",
    "method": "deleteComment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Log Book",
    "typeScriptTag": "logBook",
    "description": "Delete Log Book Comment",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Log Book Comment ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/log_book_comments/{id}",
    "method": "getComment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Log Book",
    "typeScriptTag": "logBook",
    "description": "Retrieve Log Book Comment",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Log Book Comment ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/reports/hours_and_wages",
    "method": "getWorkedHoursWages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Retrieve Worked Hours & Wages",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "punches",
        "schema": "boolean",
        "required": true,
        "description": "Whether or not to use the punch labour source",
        "example": true
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "The company id to pull the report for.",
        "example": 0
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Starting date for which you want the report to start.",
        "example": "2019-12-01"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "Ending date for which you want the report to end.",
        "example": "2019-12-01"
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": false,
        "description": "The location id for which you want the report for.",
        "example": 1234
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": false,
        "description": "The department id for the report.",
        "example": 1234
      },
      {
        "name": "roleId",
        "schema": "integer",
        "required": false,
        "description": "The role id for the report",
        "example": 1234
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": false,
        "description": "The user id the report should be fetched for - internal use only",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/reports/daily_sales_and_labor",
    "method": "getDailySalesAndLabor",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Retrieve Daily Sales & Labor",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "Starting date for which you want the daily sales and labor data for.",
        "example": "2019-12-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "Ending date for which you want the daily sales and labor data for.",
        "example": "2019-12-01"
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 1234
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": false,
        "description": "Department ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/company/{company_id}/location/{location_id}/daily_stats",
    "method": "getDailyStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Retrieve Daily Stats",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 0
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": false,
        "description": "Department ID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date",
        "example": "DATE"
      },
      {
        "name": "includeFuture",
        "schema": "boolean",
        "required": false,
        "description": "include future"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/location/{location_id}/forecast_override",
    "method": "syncProjectedForecastOverride",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Forecast Overrides",
    "typeScriptTag": "forecastOverrides",
    "description": "Sync Daily Projected Forecast Override",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 0
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-01-01"
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-01-01"
      },
      {
        "name": "report_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REPORT_TYPE",
        "default": "sales"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/location/{location_id}/forecast_override",
    "method": "createDailyProjectedForecastOverride",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forecast Overrides",
    "typeScriptTag": "forecastOverrides",
    "description": "Create Daily Projected Forecast Override",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 0
      },
      {
        "name": "department_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1234
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-01-01"
      },
      {
        "name": "value",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1234
      },
      {
        "name": "report_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REPORT_TYPE",
        "default": "sales"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/location/{location_id}/forecast_overrides",
    "method": "bulkCreateProjectedForecastOverride",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forecast Overrides",
    "typeScriptTag": "forecastOverrides",
    "description": "Create Bulk Daily Projected Forecast Overrides",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 0
      },
      {
        "name": "data",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/locations/{location_id}/forecast_override_interval",
    "method": "syncProjectedSalesInterval",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Forecast Overrides",
    "typeScriptTag": "forecastOverrides",
    "description": "Sync Interval Projected Forecast Override",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 0
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-12-30T20:00:00Z"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-12-30T20:15:00Z"
      },
      {
        "name": "report_type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "sales"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/locations/{location_id}/forecast_override_interval",
    "method": "overrideInterval",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forecast Overrides",
    "typeScriptTag": "forecastOverrides",
    "description": "Create Interval Projected Forecast Override",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 0
      },
      {
        "name": "department_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-12-30T20:00:00Z"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-12-30T20:15:00Z"
      },
      {
        "name": "value",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1234
      },
      {
        "name": "report_type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "sales"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/locations/{location_id}/forecast_overrides_intervals",
    "method": "bulkCreateProjectedSalesIntervalOverride",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forecast Overrides",
    "typeScriptTag": "forecastOverrides",
    "description": "Create Bulk Daily Projected Forecast Overrides",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/tip_pool_settings",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tip Pool",
    "typeScriptTag": "tipPool",
    "description": "Gets tip pool settings for a company",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/tip_pool/{tip_pool_settings_uuid}/manual_entry",
    "method": "getManualEntryTips",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tip Pool",
    "typeScriptTag": "tipPool",
    "description": "Grabs manual entry tips for a tip pool",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "The company ID for the target tip pool settings",
        "example": 384
      },
      {
        "name": "tipPoolSettingsUuid",
        "schema": "string",
        "required": true,
        "description": "The tip pool settings uuid",
        "example": 1234
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The start date of the manual entry query range",
        "example": "2021-01-01T00:00:00.000Z"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "The end date of the manual entry query range",
        "example": "2021-01-08T00:00:00.000Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/tip_pool/{tip_pool_settings_uuid}/manual_entry",
    "method": "saveManualEntry",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tip Pool",
    "typeScriptTag": "tipPool",
    "description": "Saves manual entries for a tip pool",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "The company ID for the target tip pool settings",
        "example": 384
      },
      {
        "name": "tipPoolSettingsUuid",
        "schema": "string",
        "required": true,
        "description": "The tip pool settings uuid",
        "example": 1234
      },
      {
        "name": "object",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "data",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/locations/{location_id}/tip_pool_summary_report",
    "method": "getSummaryReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tip Pool",
    "typeScriptTag": "tipPool",
    "description": "Retreive Tip Pool Summary Report",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 0
      },
      {
        "name": "tipPoolUuid",
        "schema": "string",
        "required": false,
        "description": "The tip pool UUID, when omitted the report will return all tip pools"
      },
      {
        "name": "dayPartUuid",
        "schema": "string",
        "required": false,
        "description": "Daypart UUID, when omitted the report will return all dayparts"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The start date in YYYY-MM-DD format",
        "example": "2020-12-25"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "The end date in YYYY-MM-DD format",
        "example": "2020-12-25"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/locations/{location_id}/tip_pool_detailed_report",
    "method": "getDetailedReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tip Pool",
    "typeScriptTag": "tipPool",
    "description": "Retreive Tip Pool Detailed Report",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 0
      },
      {
        "name": "tipPoolUuid",
        "schema": "string",
        "required": false,
        "description": "The tip pool UUID, when omitted the report will return all tip pools"
      },
      {
        "name": "dayPartUuid",
        "schema": "string",
        "required": false,
        "description": "Daypart UUID, when omitted the report will return all dayparts"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The start date in YYYY-MM-DD format",
        "example": "2020-12-25"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "The end date in YYYY-MM-DD format",
        "example": "2020-12-25"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/day_part/settings",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Day Part",
    "typeScriptTag": "dayPart",
    "description": "Retrieve day part settings",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": false,
        "description": "Location ID - null will fetch all day parts for company",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/availabilities",
    "method": "listAvailabilities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Availability",
    "typeScriptTag": "availability",
    "description": "List Availabilities",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Cursor for the next or previous page of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number results desired per page.",
        "default": 100
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": false,
        "description": "Location ID",
        "example": 1234
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": false,
        "description": "User ID",
        "example": 1234
      },
      {
        "name": "status",
        "schema": "integer",
        "required": false,
        "description": "Return availabilities for a specified status (pending = 0, approved = 1, declined = 2)."
      },
      {
        "name": "repeating",
        "schema": "boolean",
        "required": false,
        "description": "Return repeating or weekly availabilities."
      },
      {
        "name": "weekGte",
        "schema": "string",
        "required": false,
        "description": "Return availabilities for a specific week.",
        "example": "2020-01-01"
      },
      {
        "name": "weekToIncludeRepeatingGte",
        "schema": "string",
        "required": false,
        "description": "Return repeating availabilities that end before or on a specified week.",
        "example": "2020-01-01"
      },
      {
        "name": "orderField",
        "schema": "string",
        "description": "The field that availabilities will be sorted by."
      },
      {
        "name": "orderDir",
        "schema": "string",
        "description": "The direction that availabilities will be sorted by."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/availabilities",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Availability",
    "typeScriptTag": "availability",
    "description": "Create Availability",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "user_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "week",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "week_to",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "repeat",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "mon",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "mon_from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MON_FROM"
      },
      {
        "name": "mon_to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MON_TO"
      },
      {
        "name": "mon_comments",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MON_COMMENTS"
      },
      {
        "name": "mon_reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MON_REASON"
      },
      {
        "name": "tue",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "tue_from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TUE_FROM"
      },
      {
        "name": "tue_to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TUE_TO"
      },
      {
        "name": "tue_comments",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TUE_COMMENTS"
      },
      {
        "name": "tue_reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TUE_REASON"
      },
      {
        "name": "wed",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "wed_from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WED_FROM"
      },
      {
        "name": "wed_to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WED_TO"
      },
      {
        "name": "wed_comments",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WED_COMMENTS"
      },
      {
        "name": "wed_reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WED_REASON"
      },
      {
        "name": "thu",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "thu_from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "THU_FROM"
      },
      {
        "name": "thu_to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "THU_TO"
      },
      {
        "name": "thu_comments",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "THU_COMMENTS"
      },
      {
        "name": "thu_reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "THU_REASON"
      },
      {
        "name": "fri",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "fri_from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FRI_FROM"
      },
      {
        "name": "fri_to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FRI_TO"
      },
      {
        "name": "fri_comments",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FRI_COMMENTS"
      },
      {
        "name": "fri_reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FRI_REASON"
      },
      {
        "name": "sat",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "sat_from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SAT_FROM"
      },
      {
        "name": "sat_to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SAT_TO"
      },
      {
        "name": "sat_comments",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SAT_COMMENTS"
      },
      {
        "name": "sat_reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SAT_REASON"
      },
      {
        "name": "sun",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "sun_from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUN_FROM"
      },
      {
        "name": "sun_to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUN_TO"
      },
      {
        "name": "sun_comments",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUN_COMMENTS"
      },
      {
        "name": "sun_reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUN_REASON"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/availabilities/{availability_id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Availability",
    "typeScriptTag": "availability",
    "description": "Delete Availability",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "availabilityId",
        "schema": "integer",
        "required": true,
        "description": "Availability ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/availabilities/{availability_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Availability",
    "typeScriptTag": "availability",
    "description": "Retrieve Availability",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "availabilityId",
        "schema": "integer",
        "required": true,
        "description": "Availability ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/availabilities/{availability_id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Availability",
    "typeScriptTag": "availability",
    "description": "Update Availability",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "availabilityId",
        "schema": "integer",
        "required": true,
        "description": "Availability ID",
        "example": 1234
      },
      {
        "name": "week",
        "schema": "string",
        "description": ""
      },
      {
        "name": "week_to",
        "schema": "string",
        "description": ""
      },
      {
        "name": "repeat",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "mon",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "mon_from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mon_to",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mon_comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mon_reason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tue",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "tue_from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tue_to",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tue_comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tue_reason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "wed",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "wed_from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "wed_to",
        "schema": "string",
        "description": ""
      },
      {
        "name": "wed_comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "wed_reason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "thu",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "thu_from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "thu_to",
        "schema": "string",
        "description": ""
      },
      {
        "name": "thu_comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "thu_reason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fri",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "fri_from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fri_to",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fri_comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fri_reason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sat",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "sat_from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sat_to",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sat_comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sat_reason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sun",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "sun_from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sun_to",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sun_comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sun_reason",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/availabilities/{availability_id}/status",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Availability",
    "typeScriptTag": "availability",
    "description": "Update Availability Status",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "availabilityId",
        "schema": "integer",
        "required": true,
        "description": "Availability ID",
        "example": 1234
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/availability_reasons",
    "method": "listReasons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Availability",
    "typeScriptTag": "availability",
    "description": "List Availability Reasons",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Cursor for the next or previous page of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number results desired per page.",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/availability_reasons",
    "method": "createReason",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Availability",
    "typeScriptTag": "availability",
    "description": "Create Availability Reason",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASON"
      },
      {
        "name": "comments_required",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/availability_reasons/{availability_reason_id}",
    "method": "deleteReason",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Availability",
    "typeScriptTag": "availability",
    "description": "Delete Availability Reason",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "availabilityReasonId",
        "schema": "integer",
        "required": true,
        "description": "Availability Reason ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/availability_reasons/{availability_reason_id}",
    "method": "updateReasonById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Availability",
    "typeScriptTag": "availability",
    "description": "Update Availability Reason",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "availabilityReasonId",
        "schema": "integer",
        "required": true,
        "description": "Availability Reason ID",
        "example": 1234
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASON"
      },
      {
        "name": "comments_required",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/time_off",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "List Time Off",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 8655
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": false,
        "description": "Location ID",
        "example": 1540
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": false,
        "description": "User ID",
        "example": 1122554
      },
      {
        "name": "status",
        "schema": "integer",
        "required": false,
        "description": "Status",
        "example": 1
      },
      {
        "name": "category",
        "schema": "string",
        "required": false,
        "description": "Category",
        "example": "paid"
      },
      {
        "name": "toDateGte",
        "schema": "string",
        "required": false,
        "description": "Return time offs that end after a specified date.",
        "example": "2020-01-01"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": "Sort by column",
        "example": "created"
      },
      {
        "name": "sortDir",
        "schema": "string",
        "required": false,
        "description": "Sort by direction (asc, desc)",
        "example": "asc"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Cursor for the next or previous page of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results desired per page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/time_off",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Create time off",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "user_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "company_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "from_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FROM_DATE"
      },
      {
        "name": "to_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TO_DATE"
      },
      {
        "name": "partial",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "partial_from",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partial_to",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "comments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY"
      },
      {
        "name": "hours",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "status_action_user_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "status_action_message",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/time_off/{time_off_id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Delete Time Off",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "timeOffId",
        "schema": "integer",
        "required": true,
        "description": "Time Off ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/time_off/{time_off_id}",
    "method": "getTimeOffById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Retrieve Time Off",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "timeOffId",
        "schema": "integer",
        "required": true,
        "description": "Time Off ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/time_off/{time_off_id}",
    "method": "updateTimeOffById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Update Time Off",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "timeOffId",
        "schema": "integer",
        "required": true,
        "description": "Time Off ID",
        "example": 1234
      },
      {
        "name": "user_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "from_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "to_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "partial",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "partial_from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "partial_to",
        "schema": "string",
        "description": ""
      },
      {
        "name": "comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "status_action_message",
        "schema": "string",
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hours",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/time_off/{time_off_id}/approve",
    "method": "approveRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Approve Time Off Request",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "timeOffId",
        "schema": "integer",
        "required": true,
        "description": "Time Off ID",
        "example": 1234
      },
      {
        "name": "status_action_message",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/time_off/{time_off_id}/decline",
    "method": "declineRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Decline Time Off Request",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "timeOffId",
        "schema": "integer",
        "required": true,
        "description": "Time Off ID",
        "example": 1234
      },
      {
        "name": "status_action_message",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/time_off/total_hours",
    "method": "getTotalHours",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Retrieve Time Off Hours",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 8655
      },
      {
        "name": "employeeId",
        "schema": "array",
        "required": true,
        "description": "Employee IDs",
        "example": "?employee_id=3&employee_id=4&employee_id=5"
      },
      {
        "name": "dateStart",
        "schema": "string",
        "required": true,
        "description": "An ISO 8601 date string",
        "example": "2019-11-05T12:32:00-08:00:00"
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "required": true,
        "description": "An ISO 8601 date string",
        "example": "2019-11-05T12:32:00-08:00:00"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/time_off_settings/{company_id}",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Retrieve Time Off Settings",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/time_off_settings/{company_id}",
    "method": "setTimeOffSettings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Off",
    "typeScriptTag": "timeOff",
    "description": "Create Time Off Settings",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "paid_time_off",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "sick_time_off",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "time_off_request_comment",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "time_off_request_notice",
        "schema": "number",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/shift_feedback",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shift Feedback",
    "typeScriptTag": "shiftFeedback",
    "description": "List Shift Feedback",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 384
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The start date of the range you want shift feedback for",
        "example": "2023-01-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "The end date of the range you want shift feedback for (inclusive)",
        "example": "2023-01-01"
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": false,
        "description": "Location ID",
        "example": 408
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": false,
        "description": "User ID",
        "example": 1007790
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Cursor for the next or previous page of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results desired per page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/locations/{location_id}/engage_overview",
    "method": "overviewByLocationId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Engage",
    "typeScriptTag": "engage",
    "description": "Retrieve Engagement Overview",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 384
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 408
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "A date with YYYY-MM-DD format",
        "example": "2022-11-22"
      },
      {
        "name": "frequency",
        "schema": "string",
        "required": false,
        "description": "Length of the engage data set",
        "example": "week"
      },
      {
        "name": "userType",
        "schema": "string",
        "required": false,
        "description": "select user type for engage data",
        "example": "managers"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/webhooks",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List Webhooks",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "modifiedSince",
        "schema": "string",
        "required": false,
        "description": "Return webhooks that have been modified since the specified date. Format YYYY-MM-DD",
        "example": "2020-01-01"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Cursor for the next or previous page of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results desired per page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/webhooks",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create Webhook",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "METHOD"
      },
      {
        "name": "event",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENT"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/webhooks/{webhook_id}",
    "method": "deleteWebhookById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete Webhook",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "webhookId",
        "schema": "integer",
        "required": true,
        "description": "Webhook ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/webhooks/{webhook_id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update Webhook",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "webhookId",
        "schema": "integer",
        "required": true,
        "description": "Webhook ID",
        "example": 1234
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/test_webhook",
    "method": "getWebhook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Test Webhook",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 1234
      },
      {
        "name": "topic",
        "schema": "string",
        "required": true,
        "description": "topic for the sample payload",
        "example": "user.modified"
      },
      {
        "name": "webhookId",
        "schema": "integer",
        "required": false,
        "description": "Webhook ID",
        "example": 1234
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/location/{location_id}/sales_category_mappings",
    "method": "listSalesCategoryMappings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integration Mappings",
    "typeScriptTag": "integrationMappings",
    "description": "List Sales Category Mappings",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 0
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "Department ID",
        "example": 0
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Cursor for the next or previous page of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results desired per page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/location/{location_id}/sales_category_mappings_bulk",
    "method": "createSalesCategoryMappingsBulk",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integration Mappings",
    "typeScriptTag": "integrationMappings",
    "description": "Create Sales Category Mappings",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 0
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "Department ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/company/{company_id}/location/{location_id}/sales_category_mappings/{external_id}",
    "method": "deleteSalesCategoryMappings",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Integration Mappings",
    "typeScriptTag": "integrationMappings",
    "description": "Delete Sales Category Mappings",
    "parameters": [
      {
        "name": "xApiVersion",
        "schema": "string",
        "required": false,
        "description": "7shifts API version",
        "example": "2022-05-01"
      },
      {
        "name": "xCompanyGuid",
        "schema": "string",
        "required": false,
        "description": "Company GUID",
        "example": "1310bfe1-cb3f-4f24-98a2-fde2bc504108"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company ID",
        "example": 0
      },
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "Location ID",
        "example": 0
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "External Category ID",
        "example": "EXTERNAL_ID"
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "Department ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="7shifts API"
      apiBaseUrl="https://api.7shifts.com"
      apiVersion="2023-05-01"
      endpoints={83}
      sdkMethods={138}
      schemas={727}
      parameters={1081}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/7-shifts/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/7-shifts/openapi.yaml"
      developerDocumentation="developers.7shifts.com/reference/introduction"
    />
  );
}
  