import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function IrisSoftwareGroupCascadeTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="iris-software-group-cascade-typescript-sdk"
      metaDescription={`IRIS Software Group is a leading global provider of mission critical software and services and one of UK's largest privately held software companies.

We help organisations to make better business decisions by developing integrated software solutions to minimise admin, make business processes more efficient and give more time to do what's valued.

We started 45 years ago with accountancy software and have evolved to be trusted by more than 100,000 customers in 135 countries around the world. We invest heavily in development using the latest processes and technologies, driven by our Indian and Romanian Product Development Centres to build the next generation of cloud-based accountancy, HR and education solutions.

Our global and domestic payroll and HR solutions are used nearly five million employees. Almost one million UK employees are managed by our HR solutions, and one in eight UK employees are paid through IRIS payroll solutions. We are the largest third-party online tax filer with UK Government, and we are used by 54 of the top 100 US and 91 of the top 100 UK accountancy firms. We also serve over 13,000 schools and academies, and almost five million UK families use our apps to connect to their child's school.

In the last year, we have been awarded Technology Company of the Year in the UK Tech Awards; Employer of the Year in the Thames Valley Tech Awards; and the Americas Prime Award from the K2 Enterprise Awards. IRIS Education has been named Company of the Year at the UK National MAT Awards 2023, and crowned Company of the Year (more than 12m) in the Bett Awards 2023.`}
      company="IRIS Software Group"
      serviceName="Cascade"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/iris-software-group/cascade/logo.png"
      companyKebabCase="iris-software-group"
      clientNameCamelCase="irisSoftwareGroupCascade"
      homepage="www.iris.co.uk/products/iris-cascade/"
      lastUpdated={new Date("2024-03-26T19:14:53.376Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/iris-software-group/cascade/favicon.png"
      contactUrl="https://help.iris.co.uk/hr/cascade/api/"
      contactEmail="hrapi@iris.co.uk"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/iris-software-group/cascade/imagePreview.webp"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","human_resources"]}
      methods={[
  {
    "url": "/employees",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Gets a list of Employees.",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "description": "Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "description": "Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)"
      },
      {
        "name": "$filter",
        "schema": "string",
        "description": "Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)"
      },
      {
        "name": "$orderby",
        "schema": "string",
        "description": "Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)"
      },
      {
        "name": "$count",
        "schema": "boolean",
        "description": "Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)"
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
    "url": "/employees",
    "method": "createNewEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Creates a new Employee.",
    "parameters": [
      {
        "name": "DisplayId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TitleHonorific",
        "schema": "string",
        "description": ""
      },
      {
        "name": "FirstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "KnownAs",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OtherName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "CostCentre",
        "schema": "string",
        "description": ""
      },
      {
        "name": "WorkingStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "IsManager",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "NationalInsuranceNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "PayrollId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TaxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "IncludeInPayroll",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "EmploymentStartDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EmploymentLeftDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ContinuousServiceDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DateOfBirth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LastWorkingDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Gender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Ethnicity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Nationality",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Religion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LeaverReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "MaritalStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Phones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "Emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "Addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "GenderIdentity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "WindowsUsername",
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
    "url": "/employees/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Gets a single Employee referenced by ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An HR Employee."
      }
    ]
  },
  {
    "url": "/employees/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Update an Employee referenced by ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of Employee to update.",
        "example": "ID"
      },
      {
        "name": "DisplayId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TitleHonorific",
        "schema": "string",
        "description": ""
      },
      {
        "name": "FirstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "KnownAs",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OtherName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "CostCentre",
        "schema": "string",
        "description": ""
      },
      {
        "name": "WorkingStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "IsManager",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "NationalInsuranceNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "PayrollId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TaxCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "IncludeInPayroll",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "EmploymentStartDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EmploymentLeftDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ContinuousServiceDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DateOfBirth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LastWorkingDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Gender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Ethnicity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Nationality",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Religion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LeaverReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "MaritalStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Phones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "Emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "Addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "GenderIdentity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "WindowsUsername",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Gets a list of Jobs.",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "description": "Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "description": "Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)"
      },
      {
        "name": "$filter",
        "schema": "string",
        "description": "Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)"
      },
      {
        "name": "$orderby",
        "schema": "string",
        "description": "Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)"
      },
      {
        "name": "$count",
        "schema": "boolean",
        "description": "Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)"
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
    "url": "/jobs",
    "method": "createNewJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Creates a new Job.",
    "parameters": [
      {
        "name": "JobTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Classification",
        "schema": "string",
        "description": ""
      },
      {
        "name": "StartDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EndDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "WorkingCalendar",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LineManagerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "HierarchyNodeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "Salary",
        "schema": "number",
        "description": ""
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Contract",
        "schema": "string",
        "description": ""
      },
      {
        "name": "PayFrequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "PayBasis",
        "schema": "string",
        "description": ""
      },
      {
        "name": "FullTimeEquivalent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "ChangeReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "NextIncrementDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TimesheetLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TimesheetLunchDuration",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ExpenseSubmissionFrequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "CostCentre",
        "schema": "string",
        "description": ""
      },
      {
        "name": "JobFamily",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ApprenticeUnder25",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "ApprenticeshipEndDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ContractEndDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "NormalHours",
        "schema": "number",
        "description": ""
      },
      {
        "name": "RealTimeInformationIrregularFrequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "NoticePeriod",
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
    "url": "/jobs/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Gets a single Job referenced by an ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Job ID.",
        "example": "ID"
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
    "url": "/jobs/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Update a Job referenced by an ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the Job to update.",
        "example": "ID"
      },
      {
        "name": "JobTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Classification",
        "schema": "string",
        "description": ""
      },
      {
        "name": "StartDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EndDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "WorkingCalendar",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LineManagerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "HierarchyNodeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "Salary",
        "schema": "number",
        "description": ""
      },
      {
        "name": "Contract",
        "schema": "string",
        "description": ""
      },
      {
        "name": "PayFrequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "PayBasis",
        "schema": "string",
        "description": ""
      },
      {
        "name": "FullTimeEquivalent",
        "schema": "number",
        "description": ""
      },
      {
        "name": "ChangeReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "NextIncrementDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TimesheetLocation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TimesheetLunchDuration",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ExpenseSubmissionFrequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "CostCentre",
        "schema": "string",
        "description": ""
      },
      {
        "name": "JobFamily",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ApprenticeUnder25",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "ApprenticeshipEndDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ContractEndDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "NormalHours",
        "schema": "number",
        "description": ""
      },
      {
        "name": "RealTimeInformationIrregularFrequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "NoticePeriod",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/hierarchy",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hierarchy",
    "typeScriptTag": "hierarchy",
    "description": "Gets a list of Hierarchy Nodes.",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "description": "Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "description": "Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)"
      },
      {
        "name": "$filter",
        "schema": "string",
        "description": "Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)"
      },
      {
        "name": "$orderby",
        "schema": "string",
        "description": "Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)"
      },
      {
        "name": "$count",
        "schema": "boolean",
        "description": "Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)"
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
    "url": "/hierarchy/{id}",
    "method": "getNodeById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hierarchy",
    "typeScriptTag": "hierarchy",
    "description": "Gets a single Hierarchy Node by ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Hierarchy Node ID.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Hierarchy node."
      }
    ]
  },
  {
    "url": "/hierarchy/{id}/path",
    "method": "getPathById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hierarchy",
    "typeScriptTag": "hierarchy",
    "description": "Gets a Hierarchy Path by ID. The path is an array of nodes traversed from the root to the node specified.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Hierarchy Node ID.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Hierarchy node."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/bankdetails",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BankDetails",
    "typeScriptTag": "bankDetails",
    "description": "Gets a list of Bank Details.",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "description": "Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "description": "Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)"
      },
      {
        "name": "$filter",
        "schema": "string",
        "description": "Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)"
      },
      {
        "name": "$orderby",
        "schema": "string",
        "description": "Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)"
      },
      {
        "name": "$count",
        "schema": "boolean",
        "description": "Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)"
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
    "url": "/bankdetails",
    "method": "createBankDetail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "BankDetails",
    "typeScriptTag": "bankDetails",
    "description": "Creates a Bank Details.",
    "parameters": [
      {
        "name": "EmployeeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "BankName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "BankAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "AccountName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "AccountNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "SortCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RollNumber",
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
    "url": "/bankdetails/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BankDetails",
    "typeScriptTag": "bankDetails",
    "description": "Gets a single Bank Details by an ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Bank Details ID.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An HR Employee's Bank Details."
      }
    ]
  },
  {
    "url": "/bankdetails/{id}",
    "method": "updateBankDetail",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "BankDetails",
    "typeScriptTag": "bankDetails",
    "description": "Updates Bank Details.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of Bank Details to update.",
        "example": "ID"
      },
      {
        "name": "BankName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "BankAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "AccountName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "AccountNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "SortCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RollNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/attendance/absencereasons",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AbsenceReasons",
    "typeScriptTag": "absenceReasons",
    "description": "Gets a list of Absence Reasons",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "description": "Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "description": "Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)"
      },
      {
        "name": "$filter",
        "schema": "string",
        "description": "Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)"
      },
      {
        "name": "$orderby",
        "schema": "string",
        "description": "Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)"
      },
      {
        "name": "$count",
        "schema": "boolean",
        "description": "Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)"
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
    "url": "/attendance/absencereasons/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AbsenceReasons",
    "typeScriptTag": "absenceReasons",
    "description": "Gets a single Absence Reason referenced by ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Absence Reason ID.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An HR Attendance Absence Reason."
      }
    ]
  },
  {
    "url": "/attendance/absencereasons/{id}/employees/{employeeId}",
    "method": "getEmployeeById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AbsenceReasons",
    "typeScriptTag": "absenceReasons",
    "description": "Gets a single Employee Absence Reason referenced by ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Absence Reason ID.",
        "example": "ID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Employee ID.",
        "example": "EMPLOYEEID"
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
    "url": "/attendance/entitlements",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Entitlements",
    "typeScriptTag": "entitlements",
    "description": "Gets a list of Entitlements.",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "description": "Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "description": "Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)"
      },
      {
        "name": "$filter",
        "schema": "string",
        "description": "Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)"
      },
      {
        "name": "$orderby",
        "schema": "string",
        "description": "Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)"
      },
      {
        "name": "$count",
        "schema": "boolean",
        "description": "Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)"
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
    "url": "/attendance/entitlements/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Entitlements",
    "typeScriptTag": "entitlements",
    "description": "Gets an Entitlement by ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Entitlement ID.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An Employee's Attendance Entitlement."
      }
    ]
  },
  {
    "url": "/attendance/absences",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Absences",
    "typeScriptTag": "absences",
    "description": "Gets a list of Absences.",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "description": "Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "description": "Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)"
      },
      {
        "name": "$filter",
        "schema": "string",
        "description": "Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)"
      },
      {
        "name": "$orderby",
        "schema": "string",
        "description": "Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)"
      },
      {
        "name": "$count",
        "schema": "boolean",
        "description": "Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)"
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
    "url": "/attendance/absences",
    "method": "createNewAbsence",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Absences",
    "typeScriptTag": "absences",
    "description": "Creates a new Absence.",
    "parameters": [
      {
        "name": "EmployeeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "AbsenceReasonId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Narrative",
        "schema": "string",
        "description": ""
      },
      {
        "name": "StartDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EndDate",
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
    "url": "/attendance/absences/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Absences",
    "typeScriptTag": "absences",
    "description": "Delete an Absence referenced by ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the Absence to delete.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/attendance/absences/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Absences",
    "typeScriptTag": "absences",
    "description": "Gets a single Absence referenced by ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Absence ID.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An HR Employee's Attendance Absence."
      }
    ]
  },
  {
    "url": "/attendance/absences/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Absences",
    "typeScriptTag": "absences",
    "description": "Update an Absence referenced by ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the Absence to update.",
        "example": "ID"
      },
      {
        "name": "Narrative",
        "schema": "string",
        "description": ""
      },
      {
        "name": "StartDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EndDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/attendance/absencedays",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AbsenceDays",
    "typeScriptTag": "absenceDays",
    "description": "Gets a list of all Absence Days.",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "description": "Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "description": "Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)"
      },
      {
        "name": "$filter",
        "schema": "string",
        "description": "Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)"
      },
      {
        "name": "$orderby",
        "schema": "string",
        "description": "Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)"
      },
      {
        "name": "$count",
        "schema": "boolean",
        "description": "Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)"
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
    "url": "/attendance/absencedays",
    "method": "createAbsenceDay",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AbsenceDays",
    "typeScriptTag": "absenceDays",
    "description": "Creates an Absence Day.",
    "parameters": [
      {
        "name": "AbsenceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EmployeeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DurationDays",
        "schema": "number",
        "description": ""
      },
      {
        "name": "DurationMinutes",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "DayPart",
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
    "url": "/attendance/absencedays/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AbsenceDays",
    "typeScriptTag": "absenceDays",
    "description": "Deletes an Absence Day.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the Absence Day to delete.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/attendance/absencedays/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AbsenceDays",
    "typeScriptTag": "absenceDays",
    "description": "Gets a single Absence Day based on ID given.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Absence Day ID.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An Attendance Absence Day"
      }
    ]
  },
  {
    "url": "/attendance/absencedays/{id}",
    "method": "updateAbsenceDay",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AbsenceDays",
    "typeScriptTag": "absenceDays",
    "description": "Updates an Absence Day.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the Absence Day to update.",
        "example": "ID"
      },
      {
        "name": "Date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DurationDays",
        "schema": "number",
        "description": ""
      },
      {
        "name": "DurationMinutes",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "DayPart",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/benefits",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Gets a list of Benefits.",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "description": "Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "description": "Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)"
      },
      {
        "name": "$filter",
        "schema": "string",
        "description": "Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)"
      },
      {
        "name": "$orderby",
        "schema": "string",
        "description": "Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)"
      },
      {
        "name": "$count",
        "schema": "boolean",
        "description": "Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)"
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
    "url": "/benefits/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Benefits",
    "typeScriptTag": "benefits",
    "description": "Gets a single Benefit referenced by ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Benefit ID.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An HR Employee's Benefits."
      }
    ]
  },
  {
    "url": "/publicholidays",
    "method": "getLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PublicHolidays",
    "typeScriptTag": "publicHolidays",
    "description": "Gets a set of Public Holidays with locations.",
    "parameters": [
      {
        "name": "$top",
        "schema": "integer",
        "description": "Show only the first n items, maximum of 250, see [Paging - Top](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)"
      },
      {
        "name": "$skip",
        "schema": "integer",
        "description": "Skip the first n items, see [Paging - Skip](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)"
      },
      {
        "name": "$filter",
        "schema": "string",
        "description": "Filter items by property values, see [Filtering](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)"
      },
      {
        "name": "$select",
        "schema": "array",
        "description": "Select properties to be returned, see [Select](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)"
      },
      {
        "name": "$orderby",
        "schema": "string",
        "description": "Order items by property values, see [Sorting](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)"
      },
      {
        "name": "$count",
        "schema": "boolean",
        "description": "Include count of items, see [Count](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)"
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
    "url": "/publicholidays/{id}",
    "method": "getLocationListById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PublicHolidays",
    "typeScriptTag": "publicHolidays",
    "description": "Gets a location based Public Holiday list by ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Public Holiday ID.",
        "example": "ID"
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
      apiTitle="HR API"
      apiBaseUrl="https://api.iris.co.uk/hr/v2"
      apiVersion="2"
      endpoints={22}
      sdkMethods={34}
      schemas={52}
      parameters={227}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/iris-software-group/cascade/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/iris-software-group/cascade/openapi.yaml"
      developerDocumentation="help-iris.co.uk/hr/cascade/api/getstart/getting-started.htm"
    />
  );
}
  