import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SalesflareTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="salesflare-typescript-sdk"
      metaDescription={`Salesflare is the intelligent CRM startups and small businesses love to use. It's a zero-input sales pipeline tool that thinks and works for its user, not the other way around.

No more manual data entry. Salesflare fills out your address book and keeps track of all interactions with the people you're in contact with. It takes data from social media, company databases, phone, email, calendar and hands it to you in automated customer timelines that tell you everything you need to know. You just have to write the emails, make the calls, and have the coffee.

Never miss a deal again. Salesflare will tell and remind you what to do about leads so deals can't fall through the cracks anymore. Visual pipelines and powerful insights put you in full control of your sales funnel. Intuitive and easy-to-use, Salesflare turns complexity into simplicity so you can turn leads into customers.

Salesflare works wherever you work and with whatever you are working with. Use it on desktop, mobile or just from a sidebar in your email inbox (Gmail and Outlook). Get even more out of Salesflare by integrating with 5000+ other productivity tools, such as Google Apps, MailChimp, Trello and Slack.

There's a free trial available from salesflare.com.`}
      company="Salesflare"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/salesflare/logo.png"
      companyKebabCase="salesflare"
      clientNameCamelCase="salesflare"
      homepage="salesflare.com"
      lastUpdated={new Date("2024-03-27T20:44:35.877Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/salesflare/favicon.png"
      // Missing contactUrl
      contactEmail="support@salesflare.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/salesflare/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["crm","sales"]}
      methods={[
  {
    "url": "/accounts",
    "method": "listAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "List accounts",
    "parameters": [
      {
        "name": "id",
        "schema": "array",
        "description": ""
      },
      {
        "name": "details",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "search",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "creationAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "creationBefore",
        "schema": "string",
        "description": ""
      },
      {
        "name": "minSize",
        "schema": "number",
        "description": ""
      },
      {
        "name": "maxSize",
        "schema": "number",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tagName",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addressCountry",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addressCity",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addressStateRegion",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hotness",
        "schema": "number",
        "description": "1: Room temp, 2: Hot, 3: On fire"
      },
      {
        "name": "offset",
        "schema": "number",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "array",
        "description": "Can be just 'key' e.g. 'name' or 'key sortOrder' e.g. 'name desc'. Defaults to asc."
      },
      {
        "name": "q",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts",
    "method": "createAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Create an account",
    "parameters": [
      {
        "name": "updateIfExists",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "owner",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "picture",
        "schema": "string",
        "description": ""
      },
      {
        "name": "size",
        "schema": "number",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email_addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone_numbers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "social_profiles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "links",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "_dirty",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "parent_account",
        "schema": "number",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts",
    "method": "listContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "List contacts",
    "parameters": [
      {
        "name": "id",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modificationAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modificationBefore",
        "schema": "string",
        "description": ""
      },
      {
        "name": "creationAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "creationBefore",
        "schema": "string",
        "description": ""
      },
      {
        "name": "account",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tagName",
        "schema": "array",
        "description": ""
      },
      {
        "name": "positionRole",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addressCountry",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addressStateRegion",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addressCity",
        "schema": "array",
        "description": ""
      },
      {
        "name": "includeArchived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "search",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "",
        "default": 20
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "custom",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "array",
        "description": "Can be just 'key' e.g. 'name' or 'key sortOrder' e.g. 'name desc'. Defaults to asc."
      },
      {
        "name": "q",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts",
    "method": "createContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Create a contact",
    "parameters": [
      {
        "name": "force",
        "schema": "boolean",
        "description": "When force is false, the contact will not be created if a contact with the same email address used to exist.",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/currencies",
    "method": "listSupportedCurrencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Regional Settings",
    "typeScriptTag": "regionalSettings",
    "description": "List supported currencies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "List groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/me",
    "method": "getCurrentUserDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get current user's details",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/opportunities",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "List opportunities",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": "DEPRECATED"
      },
      {
        "name": "stage",
        "schema": "number",
        "description": ""
      },
      {
        "name": "stageName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "owner",
        "schema": "number",
        "description": ""
      },
      {
        "name": "teamMember",
        "schema": "number",
        "description": ""
      },
      {
        "name": "ownerGroup",
        "schema": "number",
        "description": ""
      },
      {
        "name": "assigneeGroup",
        "schema": "number",
        "description": ""
      },
      {
        "name": "teamMemberGroup",
        "schema": "number",
        "description": ""
      },
      {
        "name": "account",
        "schema": "number",
        "description": ""
      },
      {
        "name": "assignee",
        "schema": "number",
        "description": ""
      },
      {
        "name": "minValue",
        "schema": "number",
        "description": ""
      },
      {
        "name": "maxValue",
        "schema": "number",
        "description": ""
      },
      {
        "name": "closeAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "closeBefore",
        "schema": "string",
        "description": ""
      },
      {
        "name": "creationAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "creationBefore",
        "schema": "string",
        "description": ""
      },
      {
        "name": "closed",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "done",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tagName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hotness",
        "schema": "number",
        "description": "1: Room temp, 2: Hot, 3: On fire"
      },
      {
        "name": "limit",
        "schema": "number",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "number",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "array",
        "description": "Can be just 'key' e.g. 'name' or 'key sortOrder' e.g. 'name desc'. Defaults to asc."
      },
      {
        "name": "pipeline",
        "schema": "number",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "string",
        "description": ""
      },
      {
        "name": "details",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "q",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/opportunities",
    "method": "createOpportunity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Create an opportunity",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "owner",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "account",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "stage",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "lost_reason",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "files",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "lead_source",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "probability",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "assignee",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "creator",
        "schema": "number",
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
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "value",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "status_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "close_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "closed",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "recurring_price_per_unit",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "units",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "contract_start_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contract_end_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "main_contact",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/persons",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "List persons",
    "parameters": [
      {
        "name": "id",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "search",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/pipelines",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "List pipelines",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "array",
        "description": "Can be just 'key' e.g. 'name' or 'key sortOrder' e.g. 'name desc'. Defaults to asc."
      },
      {
        "name": "q",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/stages",
    "method": "listStages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "List stages",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pipelineId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "pipelineName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/tags",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "List tags",
    "parameters": [
      {
        "name": "id",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": "This property is deprecated, use q.search instead. When both are provided, q.search will be used."
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "",
        "default": 20
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "orderBy",
        "schema": "array",
        "description": "Can be just 'key' e.g. 'name' or 'key sortOrder' e.g. 'name desc'. Defaults to asc."
      },
      {
        "name": "q",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tags",
    "method": "createTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Create a tag",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tasks",
    "method": "listTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "List tasks",
    "parameters": [
      {
        "name": "id",
        "schema": "array",
        "description": ""
      },
      {
        "name": "search",
        "schema": "string",
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "description": "Defaults to the user"
      },
      {
        "name": "type",
        "schema": "array",
        "description": ""
      },
      {
        "name": "account",
        "schema": "array",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "array",
        "description": "Can be just 'key' e.g. 'name' or 'key sortOrder' e.g. 'name desc'. Defaults to asc."
      },
      {
        "name": "limit",
        "schema": "number",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "number",
        "description": ""
      },
      {
        "name": "q",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tasks",
    "method": "createTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Create a task",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List users",
    "parameters": [
      {
        "name": "id",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "search",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "number",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "number",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "array",
        "description": "Can be just 'key' e.g. 'name' or 'key sortOrder' e.g. 'name desc'. Defaults to asc."
      },
      {
        "name": "onlyEnabled",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workflows",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "List workflows",
    "parameters": [
      {
        "name": "limit",
        "schema": "number",
        "description": "",
        "default": 20
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "orderBy",
        "schema": "array",
        "description": "Can be just 'key' e.g. 'name' or 'key sortOrder' e.g. 'name desc'. Defaults to asc."
      },
      {
        "name": "search",
        "schema": "string",
        "description": ""
      },
      {
        "name": "q",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/workflows",
    "method": "createWorkflow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Create a workflow",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "filter",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "individual_record_filter",
        "schema": "object",
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
        "name": "status_message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "record_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "goal",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "continuous",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "exit_after_days",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "schedule_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "schedule_time_start",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "schedule_time_end",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "schedule_days",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "steps",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{account_id}",
    "method": "id",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Delete an account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{account_id}",
    "method": "id",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get account details",
    "parameters": [
      {
        "name": "accountId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{account_id}",
    "method": "id",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Update an account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "picture",
        "schema": "string",
        "description": ""
      },
      {
        "name": "size",
        "schema": "number",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email_addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone_numbers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "social_profiles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "links",
        "schema": "string",
        "description": ""
      },
      {
        "name": "_dirty",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "parent_account",
        "schema": "number",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "q",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/campaigns/mergefields",
    "method": "getMergeFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Get a workflow's merge fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/conferences/{conference_id}",
    "method": "id",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get meeting details by conference id",
    "parameters": [
      {
        "name": "conferenceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONFERENCE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contact_id}",
    "method": "id",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Delete a contact",
    "parameters": [
      {
        "name": "contactId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contact_id}",
    "method": "id",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get contact details",
    "parameters": [
      {
        "name": "contactId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contact_id}",
    "method": "id",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Update a contact",
    "parameters": [
      {
        "name": "contactId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "force",
        "schema": "boolean",
        "description": "When force is false, the contact's name will not be updated if the name in the update is just the first part of the email address.",
        "default": true
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "prefix",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "middle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "suffix",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "role",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "owner",
        "schema": "number",
        "description": ""
      },
      {
        "name": "picture",
        "schema": "string",
        "description": ""
      },
      {
        "name": "account",
        "schema": "number",
        "description": ""
      },
      {
        "name": "birth_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "opt-out",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "opt-out_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "opt-out_campaign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bounced",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "bounced_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "files",
        "schema": "array",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mobile_phone_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "home_phone_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fax_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone_numbers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "position",
        "schema": "object",
        "description": ""
      },
      {
        "name": "positions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "social_profiles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": ""
      },
      {
        "name": "_dirty",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/customfields/types",
    "method": "listTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "List custom field types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/customfields/{itemClass}",
    "method": "listTypeCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "List custom fields of a type",
    "parameters": [
      {
        "name": "itemClass",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ITEMCLASS"
      },
      {
        "name": "includeDisabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "pipeline",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/customfields/{itemClass}",
    "method": "createFieldType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Create a custom field of a type",
    "parameters": [
      {
        "name": "itemClass",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ITEMCLASS"
      },
      {
        "name": "type",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "pipeline",
        "schema": "number",
        "description": ""
      },
      {
        "name": "predefined_customfield",
        "schema": "number",
        "description": ""
      },
      {
        "name": "users_can_add_options",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "options",
        "schema": "array",
        "description": ""
      },
      {
        "name": "order_alphabetically",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "min_number",
        "schema": "number",
        "description": ""
      },
      {
        "name": "max_number",
        "schema": "number",
        "description": ""
      },
      {
        "name": "min_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "default_boolean_value",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasources/email",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email Data Sources",
    "typeScriptTag": "emailDataSources",
    "description": "List email data sources",
    "parameters": [
      {
        "name": "includeTeamDataSources",
        "schema": "boolean",
        "description": "Team data sources will only be included when the session user is an admin.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/filterfields/{entity}",
    "method": "listForEntity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Filter Fields",
    "typeScriptTag": "filterFields",
    "description": "List filter fields for an entity",
    "parameters": [
      {
        "name": "entity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITY"
      },
      {
        "name": "pipeline",
        "schema": "number",
        "description": ""
      },
      {
        "name": "includePipelineSpecificPredefinedFilterFields",
        "schema": "boolean",
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get a group",
    "parameters": [],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/contacts",
    "method": "listContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List current user's contacts",
    "parameters": [
      {
        "name": "id",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modificationAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modificationBefore",
        "schema": "string",
        "description": ""
      },
      {
        "name": "creationAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "creationBefore",
        "schema": "string",
        "description": ""
      },
      {
        "name": "account",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tagName",
        "schema": "array",
        "description": ""
      },
      {
        "name": "positionRole",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addressCountry",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addressStateRegion",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addressCity",
        "schema": "array",
        "description": ""
      },
      {
        "name": "includeArchived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "search",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "",
        "default": 20
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "custom",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "array",
        "description": "Can be just 'key' e.g. 'name' or 'key sortOrder' e.g. 'name desc'. Defaults to asc."
      },
      {
        "name": "q",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/meetings/{meeting_id}",
    "method": "id",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Delete a meeting",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/meetings/{meeting_id}",
    "method": "id",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Get meeting details",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/meetings/{meeting_id}",
    "method": "id",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Update a meeting",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "calendar_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CALENDAR_ID"
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXTERNAL_ID"
      },
      {
        "name": "minutes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTES"
      },
      {
        "name": "edited_by",
        "schema": "number",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/opportunities/{id}",
    "method": "removeOpportunity",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Delete an opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/opportunities/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Get opportunity details",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/opportunities/{id}",
    "method": "updateOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Update an opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "owner",
        "schema": "number",
        "description": ""
      },
      {
        "name": "account",
        "schema": "number",
        "description": ""
      },
      {
        "name": "stage",
        "schema": "number",
        "description": ""
      },
      {
        "name": "lost_reason",
        "schema": "number",
        "description": ""
      },
      {
        "name": "files",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lead_source",
        "schema": "number",
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "probability",
        "schema": "number",
        "description": ""
      },
      {
        "name": "assignee",
        "schema": "number",
        "description": ""
      },
      {
        "name": "creator",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "number",
        "description": ""
      },
      {
        "name": "close_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "closed",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "done",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "recurring_price_per_unit",
        "schema": "number",
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "units",
        "schema": "number",
        "description": ""
      },
      {
        "name": "contract_start_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contract_end_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "main_contact",
        "schema": "number",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/stages/{stage_id}",
    "method": "id",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get stage details",
    "parameters": [
      {
        "name": "stageId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/tags/{tag_id}",
    "method": "id",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Delete a tag",
    "parameters": [
      {
        "name": "tagId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tags/{tag_id}",
    "method": "id",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get tag details",
    "parameters": [
      {
        "name": "tagId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/tags/{tag_id}",
    "method": "id",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Update a tag",
    "parameters": [
      {
        "name": "tagId",
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
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}",
    "method": "getUserDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get user details",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workflows/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Get workflow details",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/workflows/{id}",
    "method": "updateWorkflow",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Update a workflow",
    "parameters": [
      {
        "name": "id",
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
        "name": "filter",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "individual_record_filter",
        "schema": "object",
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
        "name": "status_message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "record_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "goal",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "continuous",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "exit_after_days",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "schedule_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "schedule_time_start",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "schedule_time_end",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "schedule_days",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "steps",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{account_id}/messages",
    "method": "idMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "List an account's messages",
    "parameters": [
      {
        "name": "accountId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "before",
        "schema": "string",
        "description": ""
      },
      {
        "name": "after",
        "schema": "string",
        "description": "",
        "default": "1970-01-01T00:00:00.000Z"
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/customfields/{itemClass}/{id}",
    "method": "deleteCustomField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Delete a custom field",
    "parameters": [
      {
        "name": "itemClass",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ITEMCLASS"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/customfields/{itemClass}/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Get custom field details",
    "parameters": [
      {
        "name": "itemClass",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ITEMCLASS"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/customfields/{itemClass}/{id}",
    "method": "updateField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Update a custom field",
    "parameters": [
      {
        "name": "itemClass",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ITEMCLASS"
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "type",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "pipeline",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "pipelineName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "predefined_customfield",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "users_can_add_options",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "order_alphabetically",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "min_number",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "max_number",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "min_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "max_date",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/tags/{tag_id}/usage",
    "method": "idUsage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get tag details on usage in workflows, saved filters & reports",
    "parameters": [
      {
        "name": "tagId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/customfields/{itemClass}/{customFieldApiField}/options",
    "method": "listOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "List a custom field's options",
    "parameters": [
      {
        "name": "itemClass",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ITEMCLASS"
      },
      {
        "name": "customFieldApiField",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMFIELDAPIFIELD"
      },
      {
        "name": "searchString",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/calls",
    "method": "createCall",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Calls",
    "typeScriptTag": "calls",
    "description": "Create a call",
    "parameters": [],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/meetings",
    "method": "createMeeting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Create a meeting",
    "parameters": [],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages",
    "method": "createNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Internal Notes",
    "typeScriptTag": "internalNotes",
    "description": "Create an internal note",
    "parameters": [
      {
        "name": "account",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
      },
      {
        "name": "mentions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{account_id}/users",
    "method": "idUsers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Update an account's users",
    "parameters": [
      {
        "name": "accountId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{account_id}/users",
    "method": "idUsers",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Update an account's users",
    "parameters": [
      {
        "name": "accountId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{account_id}/contacts",
    "method": "idContacts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Update an account's contacts",
    "parameters": [
      {
        "name": "accountId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{account_id}/contacts",
    "method": "idContacts",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Update an account's contacts",
    "parameters": [
      {
        "name": "accountId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/calls/{meeting_id}",
    "method": "id",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Calls",
    "typeScriptTag": "calls",
    "description": "Update a call",
    "parameters": [
      {
        "name": "meetingId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "calendar_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CALENDAR_ID"
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXTERNAL_ID"
      },
      {
        "name": "minutes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTES"
      },
      {
        "name": "edited_by",
        "schema": "number",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/{message_id}",
    "method": "id",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Internal Notes",
    "typeScriptTag": "internalNotes",
    "description": "Delete an internal note",
    "parameters": [
      {
        "name": "messageId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/{message_id}",
    "method": "id",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Internal Notes",
    "typeScriptTag": "internalNotes",
    "description": "Update an internal note",
    "parameters": [
      {
        "name": "messageId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "account",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BODY"
      },
      {
        "name": "mentions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/tasks/{id}",
    "method": "deleteTask",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Delete a task",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tasks/{id}",
    "method": "updateTask",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Update a task",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "account",
        "schema": "number",
        "description": ""
      },
      {
        "name": "reminder_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "description": ""
      },
      {
        "name": "completed",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasources/email/{id}",
    "method": "updateDataSource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Email Data Sources",
    "typeScriptTag": "emailDataSources",
    "description": "Update an email data source",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "email_signature",
        "schema": "string",
        "description": ""
      },
      {
        "name": "add_signature_to_campaign",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "add_signature_to_replies",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "max_emails_day",
        "schema": "number",
        "description": ""
      },
      {
        "name": "max_emails_hour",
        "schema": "number",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/workflows/{id}/audience/{record_id}",
    "method": "id",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Exit an entity from a workflow",
    "parameters": [
      {
        "name": "id",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "recordId",
        "schema": "number",
        "required": true,
        "description": "This is the entity id. For email workflows this should be the contact id.",
        "example": 0
      },
      {
        "name": "exited",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "met_goal",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Salesflare API"
      apiBaseUrl="https://api.salesflare.com"
      apiVersion="1.0.0"
      endpoints={43}
      sdkMethods={67}
      schemas={86}
      parameters={406}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/salesflare/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/salesflare/openapi.yaml"
      developerDocumentation="api.salesflare.com/docs"
    />
  );
}
  