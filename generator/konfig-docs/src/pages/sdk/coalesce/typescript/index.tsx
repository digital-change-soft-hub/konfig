import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function CoalesceTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="coalesce-typescript-sdk"
      metaDescription={`Founded in 2020, Coalesce is the only data transformation tool built for scale. As the first platform to combine the speed of an intuitive graphical user interface (GUI), the flexibility of code, and the efficiency of automation for data transformations, Coalesce customers benefit from increased data engineer productivity and insights. Based in San Francisco, Calif., Coalesce is backed by Emergence Capital, 11.2 Capital, GreatPoint Ventures, and Industry Ventures, and supports customers worldwide.`}
      company="Coalesce"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/coalesce/logo.png"
      companyKebabCase="coalesce"
      clientNameCamelCase="coalesce"
      homepage="coalesce.io/"
      lastUpdated={new Date("2024-03-19T20:37:31.306Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/coalesce/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/coalesce/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["automation","data_management","data_transformation","graphical_user_interface","data"]}
      methods={[
  {
    "url": "/scheduler/startRun",
    "method": "initiateRun",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Trigger Job to Run",
    "parameters": [
      {
        "name": "parameters",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "runDetails",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "userCredentials",
        "schema": "object",
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
      }
    ]
  },
  {
    "url": "/scheduler/runStatus",
    "method": "getStatusUpdates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Get Job Status",
    "parameters": [
      {
        "name": "runCounter",
        "schema": "integer",
        "required": true,
        "description": "ID of the run to query",
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
      }
    ]
  },
  {
    "url": "/scheduler/rerun",
    "method": "triggerRerun",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Trigger Job to Re-Run",
    "parameters": [
      {
        "name": "parameters",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "runDetails",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "userCredentials",
        "schema": "object",
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
      }
    ]
  },
  {
    "url": "/scheduler/cancelRun",
    "method": "cancelJobRun",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Cancel Running Job",
    "parameters": [
      {
        "name": "runID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "orgID",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "environmentID",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/environments",
    "method": "listInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Environments",
    "typeScriptTag": "environments",
    "description": "List Environments",
    "parameters": [
      {
        "name": "detail",
        "schema": "boolean",
        "required": false,
        "description": "Include the full detail of the environments.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "500",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "502",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "503",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "504",
        "description": "Error detail in addition to the HTTP status code and text."
      }
    ]
  },
  {
    "url": "/api/v1/environments/{environmentID}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Environments",
    "typeScriptTag": "environments",
    "description": "Get Environment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "An environment is used for deploying your data pipeline to non-development Snowflake environments."
      },
      {
        "statusCode": "400",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "404",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "500",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "502",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "503",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "504",
        "description": "Error detail in addition to the HTTP status code and text."
      }
    ]
  },
  {
    "url": "/api/v1/environments/{environmentID}/nodes",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Nodes",
    "typeScriptTag": "nodes",
    "description": "List Nodes",
    "parameters": [
      {
        "name": "detail",
        "schema": "boolean",
        "required": false,
        "description": "Include the full detail of the nodes.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "404",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "500",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "502",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "503",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "504",
        "description": "Error detail in addition to the HTTP status code and text."
      }
    ]
  },
  {
    "url": "/api/v1/environments/{environmentID}/nodes/{nodeID}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Nodes",
    "typeScriptTag": "nodes",
    "description": "Get Node",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "404",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "500",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "502",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "503",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "504",
        "description": "Error detail in addition to the HTTP status code and text."
      }
    ]
  },
  {
    "url": "/api/v1/runs",
    "method": "listInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Runs",
    "typeScriptTag": "runs",
    "description": "List Runs",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of runs to return.",
        "default": 25
      },
      {
        "name": "startingFrom",
        "schema": "undefined",
        "required": false,
        "description": "The starting run ID, runStartTime, or runEndTime (exclusive) for paging the query results."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "The field used to order results.",
        "default": "id"
      },
      {
        "name": "orderByDirection",
        "schema": "string",
        "required": false,
        "description": "The sort order for query results.",
        "default": "desc"
      },
      {
        "name": "runType",
        "schema": "string",
        "required": false,
        "description": "A run type to filter the query results."
      },
      {
        "name": "runStatus",
        "schema": "string",
        "required": false,
        "description": "A status value to filter the query results."
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": false,
        "description": "An environment ID to filter the query results."
      },
      {
        "name": "detail",
        "schema": "boolean",
        "required": false,
        "description": "Include the full detail of the run.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A collection of runs."
      },
      {
        "statusCode": "400",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "500",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "502",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "503",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "504",
        "description": "Error detail in addition to the HTTP status code and text."
      }
    ]
  },
  {
    "url": "/api/v1/runs/{runID}",
    "method": "getRunDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Runs",
    "typeScriptTag": "runs",
    "description": "Get Run",
    "parameters": [
      {
        "name": "runId",
        "schema": "integer",
        "required": true,
        "description": "The run ID.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The full details of a run, without the run results."
      },
      {
        "statusCode": "400",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "404",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "500",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "502",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "503",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "504",
        "description": "Error detail in addition to the HTTP status code and text."
      }
    ]
  },
  {
    "url": "/api/v1/runs/{runID}/results",
    "method": "listResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Runs",
    "typeScriptTag": "runs",
    "description": "List Run Results",
    "parameters": [
      {
        "name": "runId",
        "schema": "integer",
        "required": true,
        "description": "The run ID.",
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
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "404",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "500",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "502",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "503",
        "description": "Error detail in addition to the HTTP status code and text."
      },
      {
        "statusCode": "504",
        "description": "Error detail in addition to the HTTP status code and text."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Coalesce API"
      apiBaseUrl="https://app.coalescesoftware.io"
      apiVersion="1.0.0"
      endpoints={11}
      sdkMethods={32}
      schemas={67}
      parameters={22}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/coalesce/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/coalesce/openapi.yaml"
      developerDocumentation="docs.coalesce.io/"
    />
  );
}
  