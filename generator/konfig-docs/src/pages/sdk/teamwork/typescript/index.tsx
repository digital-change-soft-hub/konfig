import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function TeamworkTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="teamwork-typescript-sdk"
      metaDescription={`Teamwork.com is the only project management platform built specifically for client work. Deliver work on time and on budget, eliminate client chaos, and understand profitability, all in one platform.

Headquartered in Cork, Ireland and founded by a team who have run an agency before, Teamwork has more than 20,000 customers around the world with a global team of over 350 employees.

Learn more at teamwork.com.`}
      company="Teamwork"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/teamwork/logo.png"
      companyKebabCase="teamwork"
      clientNameCamelCase="teamwork"
      homepage="teamwork.com"
      lastUpdated={new Date("2024-03-28T21:25:19.896Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/teamwork/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/teamwork/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["project_management","collaboration"]}
      methods={[
  {
    "url": "/projects/api/v3/activity/{activityLogId}",
    "method": "deleteActivityItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Activity",
    "typeScriptTag": "activity",
    "description": "Deletes an activity item.",
    "parameters": [
      {
        "name": "activityLogId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/allocations/{allocationId}/time.json",
    "method": "getTimeEntriesForAllocation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Get time entries for a specific allocation",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by a starting date"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "sort order",
        "default": "date"
      },
      {
        "name": "invoicedType",
        "schema": "string",
        "description": "filter by invoiced type",
        "default": "all"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by an ending date"
      },
      {
        "name": "billableType",
        "schema": "string",
        "description": "filter by billable type",
        "default": "all"
      },
      {
        "name": "updatedBy",
        "schema": "integer",
        "description": "filter by the user who updated the timelog"
      },
      {
        "name": "ticketId",
        "schema": "integer",
        "description": "filter by ticket id"
      },
      {
        "name": "tasklistId",
        "schema": "integer",
        "description": "filter by tasklist id"
      },
      {
        "name": "taskId",
        "schema": "integer",
        "description": "filter by task id (deprecated, use taskIds)"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project id (deprecated, use projectIds)"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "budgetId",
        "schema": "integer",
        "description": "filter by budget id"
      },
      {
        "name": "allocationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "allocationId",
        "schema": "integer",
        "description": "filter by allocation id"
      },
      {
        "name": "unattachedTimelogs",
        "schema": "boolean",
        "description": "filter by timelogs that are directly logged against projects and not its child tasks"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "matchAllTaskTags",
        "schema": "boolean",
        "description": "match all task tags"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeTotals",
        "schema": "boolean",
        "description": "include totals",
        "default": "false"
      },
      {
        "name": "includePermissions",
        "schema": "boolean",
        "description": "include permissions",
        "default": "false"
      },
      {
        "name": "includeDescendants",
        "schema": "boolean",
        "description": "include descendants",
        "default": "false"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "taskTagIds",
        "schema": "array",
        "description": "filter by task tag ids"
      },
      {
        "name": "taskIds",
        "schema": "array",
        "description": "filter by task ids"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns"
      },
      {
        "name": "projectsFromCompanyId",
        "schema": "array",
        "description": "filter by project company ids (deprecated, use projectCompanyIds)"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project statuses"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by project company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[timelogs]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectcategories]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "assignedToUserIds",
        "schema": "array",
        "description": "filter by assigned user ids"
      },
      {
        "name": "assignedToTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      },
      {
        "name": "assignedToCompanyIds",
        "schema": "array",
        "description": "filter by assigned company ids"
      },
      {
        "name": "assignedTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TimelogsResponse contains information about a group of timelogs."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/budget/notifications/{notificationId}.json",
    "method": "deleteNotification",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Budgets",
    "typeScriptTag": "budgets",
    "description": "Delete an existing notification.",
    "parameters": [
      {
        "name": "notificationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/budget/notifications/{notificationId}.json",
    "method": "updateNotification",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Budgets",
    "typeScriptTag": "budgets",
    "description": "Update an existing notification.",
    "parameters": [
      {
        "name": "notificationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "notification",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific notification."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      },
      {
        "statusCode": "409",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/budgets/:id/tasklists/budgets/bulk/add.json",
    "method": "createTasklistBudgets",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Budgets",
    "typeScriptTag": "budgets",
    "description": "Creates new tasklist budgets",
    "parameters": [
      {
        "name": "tasklistBudgets",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tasklistBudgetsOptions",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "BudgetsResponse contains information about a group of budgets."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "409",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/calendar/events.csv",
    "method": "generateAgendaReportCsv",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CalendarEvents",
    "typeScriptTag": "calendarEvents",
    "description": "Generate agenda report in CSV format",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "events that happen after this date"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "events that happen before this date"
      },
      {
        "name": "withTasks",
        "schema": "boolean",
        "description": "include tasks",
        "default": "false"
      },
      {
        "name": "withMilestones",
        "schema": "boolean",
        "description": "include milestones",
        "default": "false"
      },
      {
        "name": "withEvents",
        "schema": "boolean",
        "description": "include events",
        "default": "true"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeTags",
        "schema": "boolean",
        "description": "should include tags",
        "default": "false"
      },
      {
        "name": "attendingOnly",
        "schema": "boolean",
        "description": "when filtering events with targetUserIDs, display only when attending the event",
        "default": "false"
      },
      {
        "name": "typeIDs",
        "schema": "array",
        "description": "filter calendar events to show only the ones in typeIDs"
      },
      {
        "name": "targetUserIDs",
        "schema": "array",
        "description": "filter to show only events for the provided user"
      },
      {
        "name": "targetProjectIDs",
        "schema": "array",
        "description": "filter to show only events for the provided projects"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/calendar/events.html",
    "method": "generateAgendaReportHtml",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CalendarEvents",
    "typeScriptTag": "calendarEvents",
    "description": "Generate agenda report in HTML format",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "events that happen after this date"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "events that happen before this date"
      },
      {
        "name": "withTasks",
        "schema": "boolean",
        "description": "include tasks",
        "default": "false"
      },
      {
        "name": "withMilestones",
        "schema": "boolean",
        "description": "include milestones",
        "default": "false"
      },
      {
        "name": "withEvents",
        "schema": "boolean",
        "description": "include events",
        "default": "true"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeTags",
        "schema": "boolean",
        "description": "should include tags",
        "default": "false"
      },
      {
        "name": "attendingOnly",
        "schema": "boolean",
        "description": "when filtering events with targetUserIDs, display only when attending the event",
        "default": "false"
      },
      {
        "name": "typeIDs",
        "schema": "array",
        "description": "filter calendar events to show only the ones in typeIDs"
      },
      {
        "name": "targetUserIDs",
        "schema": "array",
        "description": "filter to show only events for the provided user"
      },
      {
        "name": "targetProjectIDs",
        "schema": "array",
        "description": "filter to show only events for the provided projects"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/calendar/events.pdf",
    "method": "generateAgendaReportPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CalendarEvents",
    "typeScriptTag": "calendarEvents",
    "description": "Generate agenda report in PDF format",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "events that happen after this date"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "events that happen before this date"
      },
      {
        "name": "withTasks",
        "schema": "boolean",
        "description": "include tasks",
        "default": "false"
      },
      {
        "name": "withMilestones",
        "schema": "boolean",
        "description": "include milestones",
        "default": "false"
      },
      {
        "name": "withEvents",
        "schema": "boolean",
        "description": "include events",
        "default": "true"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeTags",
        "schema": "boolean",
        "description": "should include tags",
        "default": "false"
      },
      {
        "name": "attendingOnly",
        "schema": "boolean",
        "description": "when filtering events with targetUserIDs, display only when attending the event",
        "default": "false"
      },
      {
        "name": "typeIDs",
        "schema": "array",
        "description": "filter calendar events to show only the ones in typeIDs"
      },
      {
        "name": "targetUserIDs",
        "schema": "array",
        "description": "filter to show only events for the provided user"
      },
      {
        "name": "targetProjectIDs",
        "schema": "array",
        "description": "filter to show only events for the provided projects"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/calendar/events.xlsx",
    "method": "generateAgendaReportXlsx",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CalendarEvents",
    "typeScriptTag": "calendarEvents",
    "description": "Generate agenda report in XLSX format",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "events that happen after this date"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "events that happen before this date"
      },
      {
        "name": "withTasks",
        "schema": "boolean",
        "description": "include tasks",
        "default": "false"
      },
      {
        "name": "withMilestones",
        "schema": "boolean",
        "description": "include milestones",
        "default": "false"
      },
      {
        "name": "withEvents",
        "schema": "boolean",
        "description": "include events",
        "default": "true"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeTags",
        "schema": "boolean",
        "description": "should include tags",
        "default": "false"
      },
      {
        "name": "attendingOnly",
        "schema": "boolean",
        "description": "when filtering events with targetUserIDs, display only when attending the event",
        "default": "false"
      },
      {
        "name": "typeIDs",
        "schema": "array",
        "description": "filter calendar events to show only the ones in typeIDs"
      },
      {
        "name": "targetUserIDs",
        "schema": "array",
        "description": "filter to show only events for the provided user"
      },
      {
        "name": "targetProjectIDs",
        "schema": "array",
        "description": "filter to show only events for the provided projects"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/companies.json",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Get all companies.",
    "parameters": [
      {
        "name": "updatedAfterDate",
        "schema": "string",
        "description": "filter by updated after date (deprecated, use updatedAfter)"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by company name and description"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "company"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "ownercompany"
      },
      {
        "name": "firstLetter",
        "schema": "string",
        "description": "filter by first letter of company name"
      },
      {
        "name": "createdAfterDate",
        "schema": "string",
        "description": "filter by created after date (deprecated, use createdAfter)"
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "filter by created after date"
      },
      {
        "name": "budgetRanges",
        "schema": "string",
        "description": "budget distribution ranges"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "orderByCustomFieldId",
        "schema": "integer",
        "description": "order by custom field id when orderBy is equal to customfield"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "searchClientManagers",
        "schema": "boolean",
        "description": "include client managers in the search"
      },
      {
        "name": "returnLetters",
        "schema": "boolean",
        "description": "return unfiltered company initial letter counts",
        "default": "false"
      },
      {
        "name": "onlyUntaggedCompanies",
        "schema": "boolean",
        "description": "only untagged companies"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all tags"
      },
      {
        "name": "matchAllExcludedTags",
        "schema": "boolean",
        "description": "match all exclude tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeUntaggedCompanies",
        "schema": "boolean",
        "description": "include untagged companies"
      },
      {
        "name": "includeProfitability",
        "schema": "boolean",
        "description": "include profitability data for each client",
        "default": "false"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeBudgetDistribution",
        "schema": "boolean",
        "description": "include budget distribution data",
        "default": "false"
      },
      {
        "name": "getStats",
        "schema": "boolean",
        "description": "include stats of company tasks and projects",
        "default": "false"
      },
      {
        "name": "getEmoji",
        "schema": "boolean",
        "description": "parse emojis to unicode",
        "default": "true"
      },
      {
        "name": "fullProfile",
        "schema": "boolean",
        "description": "include full profile"
      },
      {
        "name": "excludeOwnerCompany",
        "schema": "boolean",
        "description": "exclude the owner company"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project statuses"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[industries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[countries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "excludeTagIds",
        "schema": "array",
        "description": "filter by excluded tag ids"
      },
      {
        "name": "excludeIds",
        "schema": "array",
        "description": "exclude by company ids"
      },
      {
        "name": "clientManagedByUserIds",
        "schema": "array",
        "description": "filter by client manager user ids"
      },
      {
        "name": "customFields",
        "schema": "array",
        "description": "filter by custom fields"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "CompaniesResponse contains information about a group of companies."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/companies.json",
    "method": "createNewCompany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Create a company.",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "company",
        "schema": "object",
        "description": ""
      },
      {
        "name": "companyOptions",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Response contains information about a specific company."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/companies/time.json",
    "method": "getAllEntriesGroupedByCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Get all time entries, grouped by company ID",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by a starting date"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "sort order",
        "default": "date"
      },
      {
        "name": "invoicedType",
        "schema": "string",
        "description": "filter by invoiced type",
        "default": "all"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by an ending date"
      },
      {
        "name": "billableType",
        "schema": "string",
        "description": "filter by billable type",
        "default": "all"
      },
      {
        "name": "updatedBy",
        "schema": "integer",
        "description": "filter by the user who updated the timelog"
      },
      {
        "name": "ticketId",
        "schema": "integer",
        "description": "filter by ticket id"
      },
      {
        "name": "tasklistId",
        "schema": "integer",
        "description": "filter by tasklist id"
      },
      {
        "name": "taskId",
        "schema": "integer",
        "description": "filter by task id (deprecated, use taskIds)"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project id (deprecated, use projectIds)"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "budgetId",
        "schema": "integer",
        "description": "filter by budget id"
      },
      {
        "name": "allocationId",
        "schema": "integer",
        "description": "filter by allocation id"
      },
      {
        "name": "unattachedTimelogs",
        "schema": "boolean",
        "description": "filter by timelogs that are directly logged against projects and not its child tasks"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "matchAllTaskTags",
        "schema": "boolean",
        "description": "match all task tags"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeTotals",
        "schema": "boolean",
        "description": "include totals",
        "default": "false"
      },
      {
        "name": "includePermissions",
        "schema": "boolean",
        "description": "include permissions",
        "default": "false"
      },
      {
        "name": "includeDescendants",
        "schema": "boolean",
        "description": "include descendants",
        "default": "false"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "taskTagIds",
        "schema": "array",
        "description": "filter by task tag ids"
      },
      {
        "name": "taskIds",
        "schema": "array",
        "description": "filter by task ids"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns"
      },
      {
        "name": "projectsFromCompanyId",
        "schema": "array",
        "description": "filter by project company ids (deprecated, use projectCompanyIds)"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project statuses"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by project company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[timelogs]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectcategories]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "assignedToUserIds",
        "schema": "array",
        "description": "filter by assigned user ids"
      },
      {
        "name": "assignedToTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      },
      {
        "name": "assignedToCompanyIds",
        "schema": "array",
        "description": "filter by assigned company ids"
      },
      {
        "name": "assignedTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "CompanyTimelogsResponse contains information about a group of timelogs, grouped by company ID."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/companies/{companyId}.json",
    "method": "deleteExistingCompany",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Delete an existing company.",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/companies/{companyId}.json",
    "method": "getSpecificCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Get a specific company.",
    "parameters": [
      {
        "name": "updatedAfterDate",
        "schema": "string",
        "description": "filter by updated after date (deprecated, use updatedAfter)"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by company name and description"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "company"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "ownercompany"
      },
      {
        "name": "firstLetter",
        "schema": "string",
        "description": "filter by first letter of company name"
      },
      {
        "name": "createdAfterDate",
        "schema": "string",
        "description": "filter by created after date (deprecated, use createdAfter)"
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "filter by created after date"
      },
      {
        "name": "budgetRanges",
        "schema": "string",
        "description": "budget distribution ranges"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "orderByCustomFieldId",
        "schema": "integer",
        "description": "order by custom field id when orderBy is equal to customfield"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "searchClientManagers",
        "schema": "boolean",
        "description": "include client managers in the search"
      },
      {
        "name": "returnLetters",
        "schema": "boolean",
        "description": "return unfiltered company initial letter counts",
        "default": "false"
      },
      {
        "name": "onlyUntaggedCompanies",
        "schema": "boolean",
        "description": "only untagged companies"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all tags"
      },
      {
        "name": "matchAllExcludedTags",
        "schema": "boolean",
        "description": "match all exclude tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeUntaggedCompanies",
        "schema": "boolean",
        "description": "include untagged companies"
      },
      {
        "name": "includeProfitability",
        "schema": "boolean",
        "description": "include profitability data for each client",
        "default": "false"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeBudgetDistribution",
        "schema": "boolean",
        "description": "include budget distribution data",
        "default": "false"
      },
      {
        "name": "getStats",
        "schema": "boolean",
        "description": "include stats of company tasks and projects",
        "default": "false"
      },
      {
        "name": "getEmoji",
        "schema": "boolean",
        "description": "parse emojis to unicode",
        "default": "true"
      },
      {
        "name": "fullProfile",
        "schema": "boolean",
        "description": "include full profile"
      },
      {
        "name": "excludeOwnerCompany",
        "schema": "boolean",
        "description": "exclude the owner company"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project statuses"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[industries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[countries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "excludeTagIds",
        "schema": "array",
        "description": "filter by excluded tag ids"
      },
      {
        "name": "excludeIds",
        "schema": "array",
        "description": "exclude by company ids"
      },
      {
        "name": "clientManagedByUserIds",
        "schema": "array",
        "description": "filter by client manager user ids"
      },
      {
        "name": "customFields",
        "schema": "array",
        "description": "filter by custom fields"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific company."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/companies/{companyId}.json",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Update an existing company.",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
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
        "name": "company",
        "schema": "object",
        "description": ""
      },
      {
        "name": "companyOptions",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific company."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      },
      {
        "statusCode": "409",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/companies/{companyId}/customfields.json",
    "method": "getValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Company custom field values.",
    "parameters": [
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by custom field value"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "companyId",
        "schema": "integer",
        "description": "filter by company id"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[customfields]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customFieldIds",
        "schema": "array",
        "description": "filter by custom field ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/companies/{companyId}/customfields.json",
    "method": "addValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Add company custom field value.",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customfieldCompany",
        "schema": "object",
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
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/companies/{companyId}/customfields/bulk/delete.json",
    "method": "bulkDelete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Delete many company custom fields values at once.",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customfieldCompanyIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/companies/{companyId}/customfields/bulk/update.json",
    "method": "updateManyValues",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Update many company custom field values at once.",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customfieldCompanies",
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
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      },
      {
        "statusCode": "409",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/companies/{companyId}/customfields/{customFieldId}.json",
    "method": "deleteCompanyCustomFieldValue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Delete an existing company custom field value.",
    "parameters": [
      {
        "name": "customFieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/companies/{companyId}/customfields/{customFieldId}.json",
    "method": "getCompanyCustomFieldValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Company custom field value.",
    "parameters": [
      {
        "name": "customFieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "companyId",
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
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/companies/{companyId}/customfields/{customFieldId}.json",
    "method": "updateCompanyCustomFieldValue",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Update an existing company custom field value.",
    "parameters": [
      {
        "name": "customFieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customfieldCompany",
        "schema": "object",
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
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      },
      {
        "statusCode": "409",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/customfields.json",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Get all custom fields",
    "parameters": [
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by custom field name"
      },
      {
        "name": "projectStatuses",
        "schema": "string",
        "description": "filter by project statuses"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "name"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "filter by name"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project id"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlySiteLevel",
        "schema": "boolean",
        "description": "only return site-level custom fields",
        "default": "false"
      },
      {
        "name": "onlyProjectLevel",
        "schema": "boolean",
        "description": "only return custom fields for project-level in the response",
        "default": "false"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "includeSiteLevel",
        "schema": "boolean",
        "description": "include custom fields for site-level in the response",
        "default": "true"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by custom field ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "entities",
        "schema": "array",
        "description": "filter by entities"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "CustomFieldsResponse contains information about a group of custom fields."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/customfields.json",
    "method": "createNewField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Create a new custom field",
    "parameters": [
      {
        "name": "customfield",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Response contains information about a specific customfield."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/customfields/bulk/delete.json",
    "method": "deleteManyAtOnce",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Delete many custom fields at once",
    "parameters": [
      {
        "name": "customfieldIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/customfields/{customFieldId}.json",
    "method": "deleteField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Delete an existing custom field",
    "parameters": [
      {
        "name": "customFieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/customfields/{customFieldId}.json",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Get a custom field by id.",
    "parameters": [
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by custom field name"
      },
      {
        "name": "projectStatuses",
        "schema": "string",
        "description": "filter by project statuses"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "name"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "filter by name"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project id"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "customFieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlySiteLevel",
        "schema": "boolean",
        "description": "only return site-level custom fields",
        "default": "false"
      },
      {
        "name": "onlyProjectLevel",
        "schema": "boolean",
        "description": "only return custom fields for project-level in the response",
        "default": "false"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "includeSiteLevel",
        "schema": "boolean",
        "description": "include custom fields for site-level in the response",
        "default": "true"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by custom field ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "entities",
        "schema": "array",
        "description": "filter by entities"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific customfield."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/customfields/{customFieldId}.json",
    "method": "updateExistingField",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Update an existing custom field.",
    "parameters": [
      {
        "name": "customFieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customfield",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific customfield."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      },
      {
        "statusCode": "409",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/customfields/{customFieldId}.json",
    "method": "updateExistingField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Update an existing custom field.",
    "parameters": [
      {
        "name": "customFieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customfield",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific customfield."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      },
      {
        "statusCode": "409",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/dashboards.json",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Get all dashboards",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "isDefault"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "filter by user id"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project id"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "emoji",
        "schema": "boolean",
        "description": "parse emoji alias to unicode",
        "default": "true"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[dashboards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[dashboardSettings]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[dashboardPanels]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[dashboardPanelSettings]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dashboardIds",
        "schema": "array",
        "description": "filter by user dashboard ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "UserDashboardsResponse contains information about a group of dashboards."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/features.json",
    "method": "listAccessible",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Features",
    "typeScriptTag": "features",
    "description": "Get installation features",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "FeaturesResponse contains all the information returned when sending a GET\nrequest to the features endpoint."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/files/{fileId}/comments.json",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FileComments",
    "typeScriptTag": "fileComments",
    "description": "Get a list of comments for a file",
    "parameters": [
      {
        "name": "fileId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "CommentsResponse contains information about a group of comments."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/fileversions/{id}/comments.json",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FileVersionComments",
    "typeScriptTag": "fileVersionComments",
    "description": "Get a list of comments for a file version",
    "parameters": [
      {
        "name": "updatedAfterDate",
        "schema": "string",
        "description": "filter by updated after date (deprecated, use updatedAfter)"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by comment content (like v1 filterText param)"
      },
      {
        "name": "publishedStartDate",
        "schema": "string",
        "description": "filter by published after date"
      },
      {
        "name": "publishedEndDate",
        "schema": "string",
        "description": "filter by published before date"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "data"
      },
      {
        "name": "commentStatus",
        "schema": "string",
        "description": "filter by commment status"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "strictHtml",
        "schema": "boolean",
        "description": "use strict html filtering fto content",
        "default": "false"
      },
      {
        "name": "getReactionsCount",
        "schema": "boolean",
        "description": "get reactions count"
      },
      {
        "name": "userIds",
        "schema": "array",
        "description": "filter by user ids"
      },
      {
        "name": "notifiedUserIds",
        "schema": "array",
        "description": "filter by users who got notified for the comments"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "CommentsResponse contains information about a group of comments."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/forms.json",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Get all forms.",
    "parameters": [
      {
        "name": "tokenState",
        "schema": "string",
        "description": "query by token state"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by form name"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "dateUpdated"
      },
      {
        "name": "hostObjectType",
        "schema": "string",
        "description": "query by hostObject type"
      },
      {
        "name": "contentState",
        "schema": "string",
        "description": "query by form state"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "filter by user id"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "hostObjectId",
        "schema": "integer",
        "description": "filter by host id"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "onlyProjectsWithExplicitMembership",
        "schema": "boolean",
        "description": "filter only by project with direct membership"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[forms]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "FormsResponse contains information about a group of forms."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/forms.json",
    "method": "createNewForm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Create a new form.",
    "parameters": [
      {
        "name": "form",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Response contains information about a specific form."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "409",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/forms/public/{token}.json",
    "method": "getByToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FormsPublic",
    "typeScriptTag": "formsPublic",
    "description": "Get a forms via its token.",
    "parameters": [
      {
        "name": "tokenState",
        "schema": "string",
        "description": "query by token state"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by form name"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "dateUpdated"
      },
      {
        "name": "hostObjectType",
        "schema": "string",
        "description": "query by hostObject type"
      },
      {
        "name": "contentState",
        "schema": "string",
        "description": "query by form state"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "filter by user id"
      },
      {
        "name": "token",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "hostObjectId",
        "schema": "integer",
        "description": "filter by host id"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "onlyProjectsWithExplicitMembership",
        "schema": "boolean",
        "description": "filter only by project with direct membership"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[forms]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "PublicResponse contains information about a specific public form."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/forms/{formID}/copy.json",
    "method": "copyForm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "FormsPublic",
    "typeScriptTag": "formsPublic",
    "description": "Copy a form",
    "parameters": [
      {
        "name": "formId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "form",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific form."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/forms/{formId}.json",
    "method": "deleteExistingForm",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Delete an existing form.",
    "parameters": [
      {
        "name": "formId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/forms/{formId}.json",
    "method": "getSpecificForm",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Get a specific form.",
    "parameters": [
      {
        "name": "formId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific form."
      },
      {
        "statusCode": "403",
        "description": "Response contains information about a specific form."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/forms/{formId}.json",
    "method": "updateExistingForm",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Update an existing form.",
    "parameters": [
      {
        "name": "formId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "form",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific form."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      },
      {
        "statusCode": "409",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/forms/{formId}/draft.json",
    "method": "getDraftForm",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forms",
    "typeScriptTag": "forms",
    "description": "Get the draft version of a specific form.",
    "parameters": [
      {
        "name": "formId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific form."
      },
      {
        "statusCode": "403",
        "description": "Response contains information about a specific form."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/importer/stats.json",
    "method": "getStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Importers",
    "typeScriptTag": "importers",
    "description": "Get stats about Importers",
    "parameters": [
      {
        "name": "resetImporters",
        "schema": "boolean",
        "description": "reset importers",
        "default": "false"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ImportersResponse contains information about a group of importers."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/latestactivity.json",
    "method": "listAllProjectsActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activity",
    "typeScriptTag": "activity",
    "description": "Latest activity (all projects)",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by start datetime"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "sort by (deprecated, use orderBy)"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "sort by"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by end datetime"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project id (deprecated, use projectIds)"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "maxId",
        "schema": "integer",
        "description": "activity id offset"
      },
      {
        "name": "catchupFromId",
        "schema": "integer",
        "description": "limit results from previous id"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only",
        "default": "false"
      },
      {
        "name": "onlyProjectsWithExplicitMembership",
        "schema": "boolean",
        "description": "only projects with explicit membership"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "enforce all tag ids must be matched"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "groupCommentActivityType",
        "schema": "boolean",
        "description": "group all activities on comments"
      },
      {
        "name": "userIds",
        "schema": "array",
        "description": "filter by user ids"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "list of project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "list of project health"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[activities]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "activityTypes",
        "schema": "array",
        "description": "filter by activity types"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ActivitiesResponse contains all the information returned when sending a GET\nrequest to the activity endpoint."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/me/timers.json",
    "method": "getAllRunningTimers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Get all your running timers",
    "parameters": [
      {
        "name": "updatedAfterDate",
        "schema": "string",
        "description": "filter by updated after date (deprecated, use updatedAfter)"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "filter by user id"
      },
      {
        "name": "taskId",
        "schema": "integer",
        "description": "filter by task id"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project id"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "runningTimersOnly",
        "schema": "boolean",
        "description": "enforce running timers only",
        "default": "false"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[timers]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TimersResponse contains all the information returned when sending a GET\nrequest to the timers endpoint."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/me/timers.json",
    "method": "createNewTimer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Create a new timer",
    "parameters": [
      {
        "name": "timer",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains the information returned when sending a PUT/POST\nrequest to the timers endpoint, or GET request for a single item by ID"
      },
      {
        "statusCode": "201",
        "description": "Response contains the information returned when sending a PUT/POST\nrequest to the timers endpoint, or GET request for a single item by ID"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/me/timers/{timerId}.json",
    "method": "deleteTimerById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Delete a timer by ID",
    "parameters": [
      {
        "name": "timerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "hardDelete",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/me/timers/{timerId}.json",
    "method": "editTimerFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Edits a timer",
    "parameters": [
      {
        "name": "timerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "timer",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains the information returned when sending a PUT/POST\nrequest to the timers endpoint, or GET request for a single item by ID"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/me/timers/{timerId}/complete.json",
    "method": "completeTimerById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Complete a timer by ID",
    "parameters": [
      {
        "name": "timerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains the information returned when sending a PUT/POST\nrequest to the timers endpoint, or GET request for a single item by ID"
      },
      {
        "statusCode": "201",
        "description": "Response contains the information returned when sending a PUT/POST\nrequest to the timers endpoint, or GET request for a single item by ID"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/me/timers/{timerId}/pause.json",
    "method": "pauseTimerById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Pause a timer by ID",
    "parameters": [
      {
        "name": "timerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains the information returned when sending a PUT/POST\nrequest to the timers endpoint, or GET request for a single item by ID"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/me/timers/{timerId}/resume.json",
    "method": "resumeTimerById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Resume a timer by ID",
    "parameters": [
      {
        "name": "timerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains the information returned when sending a PUT/POST\nrequest to the timers endpoint, or GET request for a single item by ID"
      },
      {
        "statusCode": "201",
        "description": "Response contains the information returned when sending a PUT/POST\nrequest to the timers endpoint, or GET request for a single item by ID"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/me/timers/{timerId}/undelete.json",
    "method": "restoreTimerItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Restore a deleted timer item.",
    "parameters": [
      {
        "name": "timerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/messages.json",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Get all messages.",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by message name and body"
      },
      {
        "name": "projectType",
        "schema": "string",
        "description": "filter by project type",
        "default": "normal"
      },
      {
        "name": "projectStatuses",
        "schema": "string",
        "description": "filter by project statuses"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "ownermessage"
      },
      {
        "name": "createdBefore",
        "schema": "string",
        "description": "filter by created before date"
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "filter by created after date"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "updatedAfterIncludesReplies",
        "schema": "boolean",
        "description": "consider reply dates when using updatedAfter"
      },
      {
        "name": "unreadOnly",
        "schema": "boolean",
        "description": "show unread messages only"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "includeDeleted",
        "schema": "boolean",
        "description": "include deleted messages"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "getEmoji",
        "schema": "boolean",
        "description": "parse emojis to unicode",
        "default": "true"
      },
      {
        "name": "formatMarkdown",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "archivedOnly",
        "schema": "boolean",
        "description": "show archived messages only"
      },
      {
        "name": "userIds",
        "schema": "array",
        "description": "filter by user ids"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "notifiedUserIds",
        "schema": "array",
        "description": "filter by users who got notified for the messages"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[messageReplies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "MessagesResponse contains all the information returned when sending a GET\nrequest to the message endpoint."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/messages/{messageId}.json",
    "method": "getSpecificMessage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Get a specific message.",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by message name and body"
      },
      {
        "name": "projectType",
        "schema": "string",
        "description": "filter by project type",
        "default": "normal"
      },
      {
        "name": "projectStatuses",
        "schema": "string",
        "description": "filter by project statuses"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "ownermessage"
      },
      {
        "name": "createdBefore",
        "schema": "string",
        "description": "filter by created before date"
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "filter by created after date"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "messageId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "updatedAfterIncludesReplies",
        "schema": "boolean",
        "description": "consider reply dates when using updatedAfter"
      },
      {
        "name": "unreadOnly",
        "schema": "boolean",
        "description": "show unread messages only"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "includeDeleted",
        "schema": "boolean",
        "description": "include deleted messages"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "getEmoji",
        "schema": "boolean",
        "description": "parse emojis to unicode",
        "default": "true"
      },
      {
        "name": "formatMarkdown",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "archivedOnly",
        "schema": "boolean",
        "description": "show archived messages only"
      },
      {
        "name": "userIds",
        "schema": "array",
        "description": "filter by user ids"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "notifiedUserIds",
        "schema": "array",
        "description": "filter by users who got notified for the messages"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[messageReplies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific message."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/messages/{messageId}.json",
    "method": "updateFields",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Edit a message.",
    "parameters": [
      {
        "name": "messageId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "read",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/milestones.json",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Milestones",
    "typeScriptTag": "milestones",
    "description": "Get all milestones",
    "parameters": [
      {
        "name": "updatedAfterDate",
        "schema": "string",
        "description": "filter by updated after date (deprecated, use updatedAfter)"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by milestone name and description"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "agenda"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "date"
      },
      {
        "name": "dueBeforeDate",
        "schema": "string",
        "description": "filter by due before date (deprecated, use dueBefore)"
      },
      {
        "name": "dueBefore",
        "schema": "string",
        "description": "filter by due before date"
      },
      {
        "name": "dueAfterDate",
        "schema": "string",
        "description": "filter by due after date (deprecated, use dueAfter)"
      },
      {
        "name": "dueAfter",
        "schema": "string",
        "description": "filter by due after date"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "showPrivate",
        "schema": "boolean",
        "description": "show private milestones",
        "default": "true"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "showAttachedTasklists",
        "schema": "boolean",
        "description": "show attached tasklists"
      },
      {
        "name": "searchCompaniesTeams",
        "schema": "boolean",
        "description": "include companies and teams in the search term"
      },
      {
        "name": "searchAssignees",
        "schema": "boolean",
        "description": "include assignees in the search"
      },
      {
        "name": "progress",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists (deprecated, use includePercentageComplete)",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyMyProjects",
        "schema": "boolean",
        "description": "filter by projects that the logged-in user is related",
        "default": "false"
      },
      {
        "name": "onlyAdminProjects",
        "schema": "boolean",
        "description": "only include milestones from projects where the user is strictly a project admin.\nsite admins have visibility to all projects."
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all milestone tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeUpdate",
        "schema": "boolean",
        "description": "include milestones latest update action"
      },
      {
        "name": "includeToday",
        "schema": "boolean",
        "description": "include today when milestone status is upcoming",
        "default": "true"
      },
      {
        "name": "includeTeamUserIds",
        "schema": "boolean",
        "description": "include team users to the responsible party ids",
        "default": "true"
      },
      {
        "name": "includeTags",
        "schema": "boolean",
        "description": "include tags in the reports",
        "default": "true"
      },
      {
        "name": "includeProgress",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists (deprecated, use includePercentageComplete)",
        "default": "false"
      },
      {
        "name": "includePercentageComplete",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists",
        "default": "false"
      },
      {
        "name": "includeCompleted",
        "schema": "boolean",
        "description": "optional to include completed milestones"
      },
      {
        "name": "includeCompanyUserIds",
        "schema": "boolean",
        "description": "include company users to the responsible party ids",
        "default": "true"
      },
      {
        "name": "includeAssigneeTeams",
        "schema": "boolean",
        "description": "include teams related to the responsible user ids"
      },
      {
        "name": "includeAssigneeCompanies",
        "schema": "boolean",
        "description": "include companies related to the responsible user ids"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "emoji",
        "schema": "boolean",
        "description": "convert emoji alias to unicode",
        "default": "true"
      },
      {
        "name": "countUnreadComments",
        "schema": "boolean",
        "description": "count unread comments",
        "default": "false"
      },
      {
        "name": "calendar",
        "schema": "boolean",
        "description": "enables the calendar style layout",
        "default": "false"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by milestone tag ids"
      },
      {
        "name": "status",
        "schema": "array",
        "description": "filter by list of milestone status"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed."
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by list of project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by list of project health"
      },
      {
        "name": "projectHealth",
        "schema": "array",
        "description": "filter by list of project health (deprecated, use projectHealths)"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "followerIds",
        "schema": "array",
        "description": "filter by followers' ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "creatorIds",
        "schema": "array",
        "description": "filter by creators' ids"
      },
      {
        "name": "assignedToUserIds",
        "schema": "array",
        "description": "filter by assigned user ids"
      },
      {
        "name": "assignedToTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      },
      {
        "name": "assignedToCompanyIds",
        "schema": "array",
        "description": "filter by assigned company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "MilestonesResponse contains information about a group of milestones."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/milestones/metrics/deadlines.json",
    "method": "getMilestonesByDueDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Milestones",
    "typeScriptTag": "milestones",
    "description": "Get milestones by due date in a time range",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "MilestoneMetricDeadlinesResponse contains information about a group of deadlines."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/milestones/{milestonId}.json",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Milestones",
    "typeScriptTag": "milestones",
    "description": "Get a milestone by id.",
    "parameters": [
      {
        "name": "updatedAfterDate",
        "schema": "string",
        "description": "filter by updated after date (deprecated, use updatedAfter)"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by milestone name and description"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "agenda"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "date"
      },
      {
        "name": "dueBeforeDate",
        "schema": "string",
        "description": "filter by due before date (deprecated, use dueBefore)"
      },
      {
        "name": "dueBefore",
        "schema": "string",
        "description": "filter by due before date"
      },
      {
        "name": "dueAfterDate",
        "schema": "string",
        "description": "filter by due after date (deprecated, use dueAfter)"
      },
      {
        "name": "dueAfter",
        "schema": "string",
        "description": "filter by due after date"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "milestonId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "showPrivate",
        "schema": "boolean",
        "description": "show private milestones",
        "default": "true"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "showAttachedTasklists",
        "schema": "boolean",
        "description": "show attached tasklists"
      },
      {
        "name": "searchCompaniesTeams",
        "schema": "boolean",
        "description": "include companies and teams in the search term"
      },
      {
        "name": "searchAssignees",
        "schema": "boolean",
        "description": "include assignees in the search"
      },
      {
        "name": "progress",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists (deprecated, use includePercentageComplete)",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyMyProjects",
        "schema": "boolean",
        "description": "filter by projects that the logged-in user is related",
        "default": "false"
      },
      {
        "name": "onlyAdminProjects",
        "schema": "boolean",
        "description": "only include milestones from projects where the user is strictly a project admin.\nsite admins have visibility to all projects."
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all milestone tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeUpdate",
        "schema": "boolean",
        "description": "include milestones latest update action"
      },
      {
        "name": "includeToday",
        "schema": "boolean",
        "description": "include today when milestone status is upcoming",
        "default": "true"
      },
      {
        "name": "includeTeamUserIds",
        "schema": "boolean",
        "description": "include team users to the responsible party ids",
        "default": "true"
      },
      {
        "name": "includeTags",
        "schema": "boolean",
        "description": "include tags in the reports",
        "default": "true"
      },
      {
        "name": "includeProgress",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists (deprecated, use includePercentageComplete)",
        "default": "false"
      },
      {
        "name": "includePercentageComplete",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists",
        "default": "false"
      },
      {
        "name": "includeCompleted",
        "schema": "boolean",
        "description": "optional to include completed milestones"
      },
      {
        "name": "includeCompanyUserIds",
        "schema": "boolean",
        "description": "include company users to the responsible party ids",
        "default": "true"
      },
      {
        "name": "includeAssigneeTeams",
        "schema": "boolean",
        "description": "include teams related to the responsible user ids"
      },
      {
        "name": "includeAssigneeCompanies",
        "schema": "boolean",
        "description": "include companies related to the responsible user ids"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "emoji",
        "schema": "boolean",
        "description": "convert emoji alias to unicode",
        "default": "true"
      },
      {
        "name": "countUnreadComments",
        "schema": "boolean",
        "description": "count unread comments",
        "default": "false"
      },
      {
        "name": "calendar",
        "schema": "boolean",
        "description": "enables the calendar style layout",
        "default": "false"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by milestone tag ids"
      },
      {
        "name": "status",
        "schema": "array",
        "description": "filter by list of milestone status"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed."
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by list of project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by list of project health"
      },
      {
        "name": "projectHealth",
        "schema": "array",
        "description": "filter by list of project health (deprecated, use projectHealths)"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "followerIds",
        "schema": "array",
        "description": "filter by followers' ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "creatorIds",
        "schema": "array",
        "description": "filter by creators' ids"
      },
      {
        "name": "assignedToUserIds",
        "schema": "array",
        "description": "filter by assigned user ids"
      },
      {
        "name": "assignedToTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      },
      {
        "name": "assignedToCompanyIds",
        "schema": "array",
        "description": "filter by assigned company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a milestone."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/milestones/{milestoneId}/comments.json",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "MilestoneComments",
    "typeScriptTag": "milestoneComments",
    "description": "Get a list of comments for a milestone",
    "parameters": [
      {
        "name": "milestoneId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "CommentsResponse contains information about a group of comments."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/notebooks.json",
    "method": "listNotebooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notebooks",
    "typeScriptTag": "notebooks",
    "description": "Get a list of notebooks.",
    "parameters": [
      {
        "name": "updatedAfterDate",
        "schema": "string",
        "description": "filter by updated after date (deprecated, use updatedAfter)"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by notebook name and description"
      },
      {
        "name": "projectType",
        "schema": "string",
        "description": "filter by project type",
        "default": "normal"
      },
      {
        "name": "projectStatuses",
        "schema": "string",
        "description": "filter by project statuses"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "dateUpdated"
      },
      {
        "name": "createdAfterDate",
        "schema": "string",
        "description": "filter by created after date (deprecated, use createdAfter)"
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "filter by created after date"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "secureOnly",
        "schema": "boolean",
        "description": "filter by showing only secure notebooks",
        "default": "false"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all notebook tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "lockedOnly",
        "schema": "boolean",
        "description": "filter by showing only locked notebooks",
        "default": "false"
      },
      {
        "name": "includeContents",
        "schema": "boolean",
        "description": "include contents.",
        "default": "true"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "getEmoji",
        "schema": "boolean",
        "description": "parse emojis to unicode",
        "default": "true"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by notebook tag ids"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[notebooks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[notebookCategories]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "creatorIds",
        "schema": "array",
        "description": "filter by creators' ids"
      },
      {
        "name": "categoryIds",
        "schema": "array",
        "description": "filter by notebook category ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "NotebooksResponse contains information about a group of notebooks."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/notebooks/{notebookId}.json",
    "method": "deleteExistingNotebook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notebooks",
    "typeScriptTag": "notebooks",
    "description": "Delete an existing notebook.",
    "parameters": [
      {
        "name": "notebookId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/notebooks/{notebookId}.json",
    "method": "getSpecificNotebook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notebooks",
    "typeScriptTag": "notebooks",
    "description": "Get a specific notebook.",
    "parameters": [
      {
        "name": "updatedAfterDate",
        "schema": "string",
        "description": "filter by updated after date (deprecated, use updatedAfter)"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "projectType",
        "schema": "string",
        "description": "filter by project type",
        "default": "normal"
      },
      {
        "name": "notebookId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "show deleted notebooks"
      },
      {
        "name": "getEmoji",
        "schema": "boolean",
        "description": "parse emojis to unicode",
        "default": "true"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[notebooks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[notebookCategories]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific notebook."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/notebooks/{notebookId}.json",
    "method": "editFields",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Notebooks",
    "typeScriptTag": "notebooks",
    "description": "Edits a notebook",
    "parameters": [
      {
        "name": "notebookId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "getEmoji",
        "schema": "boolean",
        "description": "parse emojis to unicode",
        "default": "true"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[notebooks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[notebookCategories]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notebook",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific notebook."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/notebooks/{notebookId}/comments.json",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "NotebookComments",
    "typeScriptTag": "notebookComments",
    "description": "Get a list of comments for a notebook",
    "parameters": [
      {
        "name": "notebookId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "CommentsResponse contains information about a group of comments."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/notebooks/{notebookId}/compare.json",
    "method": "compareVersionsContentDiff",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notebooks",
    "typeScriptTag": "notebooks",
    "description": "Compare 2 notebook versions",
    "parameters": [
      {
        "name": "notebookId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "VersionResponse contains information about a specifc notebook version"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/notebooks/{notebookId}/lock.json",
    "method": "lockNotebook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notebooks",
    "typeScriptTag": "notebooks",
    "description": "Lock a notebook",
    "parameters": [
      {
        "name": "notebookId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/notebooks/{notebookId}/unlock.json",
    "method": "unlockNotebook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notebooks",
    "typeScriptTag": "notebooks",
    "description": "Unlock a notebook",
    "parameters": [
      {
        "name": "notebookId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/notebooks/{notebookId}/versions.json",
    "method": "deleteVersions",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notebooks",
    "typeScriptTag": "notebooks",
    "description": "Delete notebook versions.",
    "parameters": [
      {
        "name": "notebookId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/notebooks/{notebookId}/versions.json",
    "method": "getVersionsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notebooks",
    "typeScriptTag": "notebooks",
    "description": "Get notebook versions",
    "parameters": [
      {
        "name": "notebookId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "VersionsResponse contains information about a group of notebook versions"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/notebooks/{notebookId}/versions/{versionId}.json",
    "method": "getVersion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notebooks",
    "typeScriptTag": "notebooks",
    "description": "Get a notebook version",
    "parameters": [
      {
        "name": "versionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "notebookId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "VersionResponse contains information about a specifc notebook version"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/people.json",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Returns a list of people",
    "parameters": [
      {
        "name": "userType",
        "schema": "string",
        "description": "user type"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "date time"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by comment content"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "name"
      },
      {
        "name": "lastLoginAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page (not used when generating reports)",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number (not used when generating reports)",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "orderPrioritiseCurrentUser",
        "schema": "boolean",
        "description": "Force to have the current/session user in the response"
      },
      {
        "name": "onlySiteOwner",
        "schema": "boolean",
        "description": "",
        "default": "false"
      },
      {
        "name": "onlyOwnerCompany",
        "schema": "boolean",
        "description": "return people only from the owner company. This will replace any provided\ncompany ID.",
        "default": "false"
      },
      {
        "name": "includeServiceAccounts",
        "schema": "boolean",
        "description": "include service accounts",
        "default": "false"
      },
      {
        "name": "includeCollaborators",
        "schema": "boolean",
        "description": "exclude collaborators types, returning only account and contact.",
        "default": "true"
      },
      {
        "name": "includeClients",
        "schema": "boolean",
        "description": "include clients",
        "default": "true"
      },
      {
        "name": "excludeContacts",
        "schema": "boolean",
        "description": "exclude contact types, returning only account and collaborator.",
        "default": "false"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "team ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include (not used when generating reports)"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by user ids"
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[person]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[people]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectPermissions]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "excludeProjectIds",
        "schema": "array",
        "description": "exclude people assigned to certain project id"
      },
      {
        "name": "companyIds",
        "schema": "array",
        "description": "company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "MultiResponse contains information about a group of users."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/people/metrics/performance.json",
    "method": "listCompletedUserTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Performance of users completing the most tasks",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "desc"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "PeopleMetricPerformancesResponse contains information about a group of performances."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/people/utilization.json",
    "method": "getUserUtilization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Return the user utilization.",
    "parameters": [
      {
        "name": "zoom",
        "schema": "string",
        "description": "determine the type of zoom filter used to display on the report"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by start date"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "sort by (deprecated, use orderBy)",
        "default": "name"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by user first or last name"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "group by"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "sort by",
        "default": "name"
      },
      {
        "name": "groupBy",
        "schema": "string",
        "description": "group by"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by end date"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document",
        "default": "false"
      },
      {
        "name": "isCustomDateRange",
        "schema": "boolean",
        "description": "determine if the query is for a custom date range"
      },
      {
        "name": "includeCollaborators",
        "schema": "boolean",
        "description": "include collaborators",
        "default": "true"
      },
      {
        "name": "includeClients",
        "schema": "boolean",
        "description": "include client users",
        "default": "true"
      },
      {
        "name": "userIds",
        "schema": "array",
        "description": "filter by userIds"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "filter by team ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed."
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[utilizations]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyIds",
        "schema": "array",
        "description": "filter by company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific availability."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/people/{personId}.json",
    "method": "deletePerson",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Delete an existing person.",
    "parameters": [
      {
        "name": "personId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/people/{personId}.json",
    "method": "getRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Returns a person",
    "parameters": [
      {
        "name": "userType",
        "schema": "string",
        "description": "user type"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "date time"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by comment content"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "name"
      },
      {
        "name": "lastLoginAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "personId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page (not used when generating reports)",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number (not used when generating reports)",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "orderPrioritiseCurrentUser",
        "schema": "boolean",
        "description": "Force to have the current/session user in the response"
      },
      {
        "name": "onlySiteOwner",
        "schema": "boolean",
        "description": "",
        "default": "false"
      },
      {
        "name": "onlyOwnerCompany",
        "schema": "boolean",
        "description": "return people only from the owner company. This will replace any provided\ncompany ID.",
        "default": "false"
      },
      {
        "name": "includeServiceAccounts",
        "schema": "boolean",
        "description": "include service accounts",
        "default": "false"
      },
      {
        "name": "includeCollaborators",
        "schema": "boolean",
        "description": "exclude collaborators types, returning only account and contact.",
        "default": "true"
      },
      {
        "name": "includeClients",
        "schema": "boolean",
        "description": "include clients",
        "default": "true"
      },
      {
        "name": "excludeContacts",
        "schema": "boolean",
        "description": "exclude contact types, returning only account and collaborator.",
        "default": "false"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "team ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include (not used when generating reports)"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by user ids"
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[person]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[people]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectPermissions]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "excludeProjectIds",
        "schema": "array",
        "description": "exclude people assigned to certain project id"
      },
      {
        "name": "companyIds",
        "schema": "array",
        "description": "company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a user."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projectcategories.json",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Returns a list of project categories",
    "parameters": [
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by name"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only.\nnote: if an owner company admin, counts will honour this filter,\nbut all categories will be returned regardless."
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project statuses.\nnote: if an owner company admin, counts will honour this filter,\nbut all categories will be returned regardless."
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by specific ids"
      },
      {
        "name": "fields[projectcategories]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "CategoriesResponse contains information about a group of categories."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projectcategories/{categoryId}.json",
    "method": "getSpecificCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Get a specific project category",
    "parameters": [
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by name"
      },
      {
        "name": "categoryId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only.\nnote: if an owner company admin, counts will honour this filter,\nbut all categories will be returned regardless."
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project statuses.\nnote: if an owner company admin, counts will honour this filter,\nbut all categories will be returned regardless."
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by specific ids"
      },
      {
        "name": "fields[projectcategories]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "CategoriesResponse contains information about a group of categories."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects.json",
    "method": "listProjectsFilteredByCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Returns a list of projects",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "updated after"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by project name"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "project"
      },
      {
        "name": "reportTimezone",
        "schema": "string",
        "description": "Optional to configure the report dates displayed in a timezone"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "projectType",
        "schema": "string",
        "description": "filter by project type"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "name"
      },
      {
        "name": "notCompletedBefore",
        "schema": "string",
        "description": "filter by projects that have not been completed before the given date"
      },
      {
        "name": "minLastActivityDate",
        "schema": "string",
        "description": "filter by min last activity date"
      },
      {
        "name": "maxLastActivityDate",
        "schema": "string",
        "description": "filter by max last activity date"
      },
      {
        "name": "currencySymbol",
        "schema": "string",
        "description": "currency symbol for report export"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "filter by user id"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page (not used when generating reports)",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number (not used when generating reports)",
        "default": "1"
      },
      {
        "name": "orderByCustomFieldId",
        "schema": "integer",
        "description": "order by custom field id when orderBy is equal to customfield"
      },
      {
        "name": "minBudgetCapacityUsedPercent",
        "schema": "integer",
        "description": "filter by minimum budget capacity used"
      },
      {
        "name": "maxBudgetCapacityUsedPercent",
        "schema": "integer",
        "description": "filter by maximum budget capacity used"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "searchCompanies",
        "schema": "boolean",
        "description": "include companies in the search"
      },
      {
        "name": "searchByLetter",
        "schema": "boolean",
        "description": "search projects beginning with the search term character only when it contains a single character."
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyProjectsWithExplicitMembership",
        "schema": "boolean",
        "description": "only show projects with explicit membership",
        "default": "false"
      },
      {
        "name": "onlyProjectsThatCanLogTime",
        "schema": "boolean",
        "description": "can log time on projects",
        "default": "false"
      },
      {
        "name": "onlyArchivedProjects",
        "schema": "boolean",
        "description": "return only archived projects",
        "default": "false"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "matchAllExcludedTags",
        "schema": "boolean",
        "description": "match all excluded project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document",
        "default": "false"
      },
      {
        "name": "includeTentativeProjects",
        "schema": "boolean",
        "description": "include alongside normal projects, tentative ones"
      },
      {
        "name": "includeSubCategories",
        "schema": "boolean",
        "description": "include sub categories when filtering by ids"
      },
      {
        "name": "includeStats",
        "schema": "boolean",
        "description": "include project status counts for tasks columns billing events milestones"
      },
      {
        "name": "includeProjectUserInfo",
        "schema": "boolean",
        "description": "fetch user-specific data such as isStarred",
        "default": "false"
      },
      {
        "name": "includeProjectProfitability",
        "schema": "boolean",
        "description": "include project profitability in response"
      },
      {
        "name": "includeProjectDates",
        "schema": "boolean",
        "description": "include minimum and maximum start/end dates for projects"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCounts",
        "schema": "boolean",
        "description": "include project related counts"
      },
      {
        "name": "includeCompletedStatus",
        "schema": "boolean",
        "description": "optional to include completed projects when filtering by project statuses \"current,late\"."
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "hideObservedProjects",
        "schema": "boolean",
        "description": "hide projects where the logged-in user is just an observer",
        "default": "false"
      },
      {
        "name": "alwaysIncludeFiltering",
        "schema": "boolean",
        "description": "includes filters when project ids are provided"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "filter by projects that contain users associated with the team ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "select the columns to use in exports."
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "includeCustomFieldIds",
        "schema": "array",
        "description": "include specific custom fields"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include (not used when generating reports)"
      },
      {
        "name": "fields[workflows]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[stages]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectcategories]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectUpdates]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectBudgets]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioColumns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioCards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioBoards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[industries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[customfields]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[customfieldProjects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[countries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "featuresEnabled",
        "schema": "array",
        "description": "filter by projects that have features enabled"
      },
      {
        "name": "excludeTagIds",
        "schema": "array",
        "description": "exclude by project tag ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "projectsResponseV205 contains information about a group of projects."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/budgets/:budgetId/tasklists/budgets/:tasklistId.json",
    "method": "updateTasklistBudget",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Budgets",
    "typeScriptTag": "budgets",
    "description": "Updates a tasklist budget",
    "parameters": [
      {
        "name": "tasklistBudget",
        "schema": "object",
        "description": ""
      },
      {
        "name": "tasklistBudgetOptions",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "BudgetResponse contains information about a group of budgets."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "409",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/budgets/:id/tasklists/budgets.json",
    "method": "getAllTasklistBudgets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Budgets",
    "typeScriptTag": "budgets",
    "description": "Get all tasklist budgets in a project budget.",
    "parameters": [
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "dateCreated"
      },
      {
        "name": "projectBudgetId",
        "schema": "integer",
        "description": "parent project budget id",
        "default": "0"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklistBudgetNotifications]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectBudgets]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "BudgetsResponse contains information about a group of budgets."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/budgets/:id/tasklists/budgets.json",
    "method": "addOrUpdateTaskListBudgets",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Budgets",
    "typeScriptTag": "budgets",
    "description": "Adds or updates task list budgets depending on the",
    "parameters": [
      {
        "name": "tasklistBudgets",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tasklistBudgetsOptions",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "BudgetsResponse contains information about a group of budgets."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      },
      {
        "statusCode": "409",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/featureorder.json",
    "method": "setDefaultFeaturesOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Sets the default features order to display in tab",
    "parameters": [
      {
        "name": "billing",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "board",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "comments",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "dashboard",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "files",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "finance",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "forms",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "gantt",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "links",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "list",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "messages",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "milestones",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "notebooks",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "numVisibleTabs",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "people",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "proofs",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "risks",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "table",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "time",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "FeatureOrderResponse is the api response containing\ninformation about the order to display the featues in the UI."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/metrics/active.json",
    "method": "getActiveCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get the total count of active projects",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific active."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/metrics/billable.json",
    "method": "getTotalBillableTime",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get the total billable time per project",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "desc"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ProjectMetricBillablesResponse contains information about a group of billables."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/metrics/healths.json",
    "method": "getAllHealthSummaries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get a health summary for all projects",
    "parameters": [
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project statuses"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "project health\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ProjectMetricHealthsResponse contains information about a group of healths.\nFollowing this format to satisfy the Numerics integration."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/metrics/invoice.json",
    "method": "getAllOpenInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Return open invoices across all projects",
    "parameters": [
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "project health\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ProjectMetricInvoicesResponse contains information about a group of invoices."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/metrics/owners.json",
    "method": "countOwnedProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get number of owned and un-assigned projects",
    "parameters": [
      {
        "name": "orderMode",
        "schema": "string",
        "description": "sort order",
        "default": "desc"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "project health\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ProjectMetricOwnersResponse contains information about a group of owners."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/metrics/unbilled.json",
    "method": "getUnbilledExpenses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Return un-billed expenses across all projects",
    "parameters": [
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "project health\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ProjectMetricUnbilledResponse contains information about a group of unbilled\ninvoices."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/starred.json",
    "method": "listStarredProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Returns a list of starred projects",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "updated after"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by project name"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "project"
      },
      {
        "name": "reportTimezone",
        "schema": "string",
        "description": "Optional to configure the report dates displayed in a timezone"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "projectType",
        "schema": "string",
        "description": "filter by project type"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "name"
      },
      {
        "name": "notCompletedBefore",
        "schema": "string",
        "description": "filter by projects that have not been completed before the given date"
      },
      {
        "name": "minLastActivityDate",
        "schema": "string",
        "description": "filter by min last activity date"
      },
      {
        "name": "maxLastActivityDate",
        "schema": "string",
        "description": "filter by max last activity date"
      },
      {
        "name": "currencySymbol",
        "schema": "string",
        "description": "currency symbol for report export"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "filter by user id"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page (not used when generating reports)",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number (not used when generating reports)",
        "default": "1"
      },
      {
        "name": "orderByCustomFieldId",
        "schema": "integer",
        "description": "order by custom field id when orderBy is equal to customfield"
      },
      {
        "name": "minBudgetCapacityUsedPercent",
        "schema": "integer",
        "description": "filter by minimum budget capacity used"
      },
      {
        "name": "maxBudgetCapacityUsedPercent",
        "schema": "integer",
        "description": "filter by maximum budget capacity used"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "searchCompanies",
        "schema": "boolean",
        "description": "include companies in the search"
      },
      {
        "name": "searchByLetter",
        "schema": "boolean",
        "description": "search projects beginning with the search term character only when it contains a single character."
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyProjectsWithExplicitMembership",
        "schema": "boolean",
        "description": "only show projects with explicit membership",
        "default": "false"
      },
      {
        "name": "onlyProjectsThatCanLogTime",
        "schema": "boolean",
        "description": "can log time on projects",
        "default": "false"
      },
      {
        "name": "onlyArchivedProjects",
        "schema": "boolean",
        "description": "return only archived projects",
        "default": "false"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "matchAllExcludedTags",
        "schema": "boolean",
        "description": "match all excluded project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document",
        "default": "false"
      },
      {
        "name": "includeTentativeProjects",
        "schema": "boolean",
        "description": "include alongside normal projects, tentative ones"
      },
      {
        "name": "includeSubCategories",
        "schema": "boolean",
        "description": "include sub categories when filtering by ids"
      },
      {
        "name": "includeStats",
        "schema": "boolean",
        "description": "include project status counts for tasks columns billing events milestones"
      },
      {
        "name": "includeProjectUserInfo",
        "schema": "boolean",
        "description": "fetch user-specific data such as isStarred",
        "default": "false"
      },
      {
        "name": "includeProjectProfitability",
        "schema": "boolean",
        "description": "include project profitability in response"
      },
      {
        "name": "includeProjectDates",
        "schema": "boolean",
        "description": "include minimum and maximum start/end dates for projects"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCounts",
        "schema": "boolean",
        "description": "include project related counts"
      },
      {
        "name": "includeCompletedStatus",
        "schema": "boolean",
        "description": "optional to include completed projects when filtering by project statuses \"current,late\"."
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "hideObservedProjects",
        "schema": "boolean",
        "description": "hide projects where the logged-in user is just an observer",
        "default": "false"
      },
      {
        "name": "alwaysIncludeFiltering",
        "schema": "boolean",
        "description": "includes filters when project ids are provided"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "filter by projects that contain users associated with the team ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "select the columns to use in exports."
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "includeCustomFieldIds",
        "schema": "array",
        "description": "include specific custom fields"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include (not used when generating reports)"
      },
      {
        "name": "fields[workflows]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[stages]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectcategories]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectUpdates]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectBudgets]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioColumns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioCards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioBoards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[industries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[customfields]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[customfieldProjects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[countries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "featuresEnabled",
        "schema": "array",
        "description": "filter by projects that have features enabled"
      },
      {
        "name": "excludeTagIds",
        "schema": "array",
        "description": "exclude by project tag ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "projectsResponseV205 contains information about a group of projects."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/teamwork/categories.json",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Returns a list of teamwork project categories",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "CategoriesResponse contains information about a group of categories."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/teamwork/samples.json",
    "method": "listTeamworkSamples",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Returns a list of teamwork sample projects",
    "parameters": [
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by project name"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page (not used when generating reports)",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number (not used when generating reports)",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by sample ids"
      },
      {
        "name": "fields[sampleprojects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "categoryIds",
        "schema": "array",
        "description": "filter by category ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SampleProjectsResponse contains information about a group of sample projects."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/templates.json",
    "method": "listProjectTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Returns a list of projects templates",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "updated after"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by project name"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "project"
      },
      {
        "name": "reportTimezone",
        "schema": "string",
        "description": "Optional to configure the report dates displayed in a timezone"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "projectType",
        "schema": "string",
        "description": "filter by project type"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "name"
      },
      {
        "name": "notCompletedBefore",
        "schema": "string",
        "description": "filter by projects that have not been completed before the given date"
      },
      {
        "name": "minLastActivityDate",
        "schema": "string",
        "description": "filter by min last activity date"
      },
      {
        "name": "maxLastActivityDate",
        "schema": "string",
        "description": "filter by max last activity date"
      },
      {
        "name": "currencySymbol",
        "schema": "string",
        "description": "currency symbol for report export"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "filter by user id"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page (not used when generating reports)",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number (not used when generating reports)",
        "default": "1"
      },
      {
        "name": "orderByCustomFieldId",
        "schema": "integer",
        "description": "order by custom field id when orderBy is equal to customfield"
      },
      {
        "name": "minBudgetCapacityUsedPercent",
        "schema": "integer",
        "description": "filter by minimum budget capacity used"
      },
      {
        "name": "maxBudgetCapacityUsedPercent",
        "schema": "integer",
        "description": "filter by maximum budget capacity used"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "searchCompanies",
        "schema": "boolean",
        "description": "include companies in the search"
      },
      {
        "name": "searchByLetter",
        "schema": "boolean",
        "description": "search projects beginning with the search term character only when it contains a single character."
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyProjectsWithExplicitMembership",
        "schema": "boolean",
        "description": "only show projects with explicit membership",
        "default": "false"
      },
      {
        "name": "onlyProjectsThatCanLogTime",
        "schema": "boolean",
        "description": "can log time on projects",
        "default": "false"
      },
      {
        "name": "onlyArchivedProjects",
        "schema": "boolean",
        "description": "return only archived projects",
        "default": "false"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "matchAllExcludedTags",
        "schema": "boolean",
        "description": "match all excluded project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document",
        "default": "false"
      },
      {
        "name": "includeTentativeProjects",
        "schema": "boolean",
        "description": "include alongside normal projects, tentative ones"
      },
      {
        "name": "includeSubCategories",
        "schema": "boolean",
        "description": "include sub categories when filtering by ids"
      },
      {
        "name": "includeStats",
        "schema": "boolean",
        "description": "include project status counts for tasks columns billing events milestones"
      },
      {
        "name": "includeProjectUserInfo",
        "schema": "boolean",
        "description": "fetch user-specific data such as isStarred",
        "default": "false"
      },
      {
        "name": "includeProjectProfitability",
        "schema": "boolean",
        "description": "include project profitability in response"
      },
      {
        "name": "includeProjectDates",
        "schema": "boolean",
        "description": "include minimum and maximum start/end dates for projects"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCounts",
        "schema": "boolean",
        "description": "include project related counts"
      },
      {
        "name": "includeCompletedStatus",
        "schema": "boolean",
        "description": "optional to include completed projects when filtering by project statuses \"current,late\"."
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "hideObservedProjects",
        "schema": "boolean",
        "description": "hide projects where the logged-in user is just an observer",
        "default": "false"
      },
      {
        "name": "alwaysIncludeFiltering",
        "schema": "boolean",
        "description": "includes filters when project ids are provided"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "filter by projects that contain users associated with the team ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "select the columns to use in exports."
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "includeCustomFieldIds",
        "schema": "array",
        "description": "include specific custom fields"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include (not used when generating reports)"
      },
      {
        "name": "fields[workflows]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[stages]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectcategories]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectUpdates]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectBudgets]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioColumns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioCards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioBoards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[industries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[customfields]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[customfieldProjects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[countries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "featuresEnabled",
        "schema": "array",
        "description": "filter by projects that have features enabled"
      },
      {
        "name": "excludeTagIds",
        "schema": "array",
        "description": "exclude by project tag ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "projectsResponseV205 contains information about a group of projects."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/tentative/{projectId}/convert.json",
    "method": "convertTentativeProject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Converts the given tentative project into normal",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SampleProjectsResponse contains information about a group of sample projects."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/updates.json",
    "method": "getAllUpdates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProjectUpdates",
    "typeScriptTag": "projectUpdates",
    "description": "Get all project updates",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "date"
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "filter by creation date"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project id"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "reactions",
        "schema": "boolean",
        "description": "add reactions to the response",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "emoji",
        "schema": "boolean",
        "description": "parse emojis to unicode",
        "default": "true"
      },
      {
        "name": "activeOnly",
        "schema": "boolean",
        "description": "filter by active",
        "default": "true"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "list of project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project health"
      },
      {
        "name": "projectHealth",
        "schema": "array",
        "description": "filter by project health (deprecated, use projectHealths)"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectUpdates]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ProjectUpdatesResponse contains information about a group of updates."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectIds}/updates.json",
    "method": "getAllUpdates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProjectUpdates",
    "typeScriptTag": "projectUpdates",
    "description": "Get all updates from a specific project",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "date"
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "filter by creation date"
      },
      {
        "name": "projectIds",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project id"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "reactions",
        "schema": "boolean",
        "description": "add reactions to the response",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "emoji",
        "schema": "boolean",
        "description": "parse emojis to unicode",
        "default": "true"
      },
      {
        "name": "activeOnly",
        "schema": "boolean",
        "description": "filter by active",
        "default": "true"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "list of project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project health"
      },
      {
        "name": "projectHealth",
        "schema": "array",
        "description": "filter by project health (deprecated, use projectHealths)"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectUpdates]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ProjectUpdatesResponse contains information about a group of updates."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}.json",
    "method": "getProjectByCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Returns a project",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "updated after"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by project name"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "project"
      },
      {
        "name": "reportTimezone",
        "schema": "string",
        "description": "Optional to configure the report dates displayed in a timezone"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "projectType",
        "schema": "string",
        "description": "filter by project type"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "name"
      },
      {
        "name": "notCompletedBefore",
        "schema": "string",
        "description": "filter by projects that have not been completed before the given date"
      },
      {
        "name": "minLastActivityDate",
        "schema": "string",
        "description": "filter by min last activity date"
      },
      {
        "name": "maxLastActivityDate",
        "schema": "string",
        "description": "filter by max last activity date"
      },
      {
        "name": "currencySymbol",
        "schema": "string",
        "description": "currency symbol for report export"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "filter by user id"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page (not used when generating reports)",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number (not used when generating reports)",
        "default": "1"
      },
      {
        "name": "orderByCustomFieldId",
        "schema": "integer",
        "description": "order by custom field id when orderBy is equal to customfield"
      },
      {
        "name": "minBudgetCapacityUsedPercent",
        "schema": "integer",
        "description": "filter by minimum budget capacity used"
      },
      {
        "name": "maxBudgetCapacityUsedPercent",
        "schema": "integer",
        "description": "filter by maximum budget capacity used"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "searchCompanies",
        "schema": "boolean",
        "description": "include companies in the search"
      },
      {
        "name": "searchByLetter",
        "schema": "boolean",
        "description": "search projects beginning with the search term character only when it contains a single character."
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyProjectsWithExplicitMembership",
        "schema": "boolean",
        "description": "only show projects with explicit membership",
        "default": "false"
      },
      {
        "name": "onlyProjectsThatCanLogTime",
        "schema": "boolean",
        "description": "can log time on projects",
        "default": "false"
      },
      {
        "name": "onlyArchivedProjects",
        "schema": "boolean",
        "description": "return only archived projects",
        "default": "false"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "matchAllExcludedTags",
        "schema": "boolean",
        "description": "match all excluded project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document",
        "default": "false"
      },
      {
        "name": "includeTentativeProjects",
        "schema": "boolean",
        "description": "include alongside normal projects, tentative ones"
      },
      {
        "name": "includeSubCategories",
        "schema": "boolean",
        "description": "include sub categories when filtering by ids"
      },
      {
        "name": "includeStats",
        "schema": "boolean",
        "description": "include project status counts for tasks columns billing events milestones"
      },
      {
        "name": "includeProjectUserInfo",
        "schema": "boolean",
        "description": "fetch user-specific data such as isStarred",
        "default": "false"
      },
      {
        "name": "includeProjectProfitability",
        "schema": "boolean",
        "description": "include project profitability in response"
      },
      {
        "name": "includeProjectDates",
        "schema": "boolean",
        "description": "include minimum and maximum start/end dates for projects"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCounts",
        "schema": "boolean",
        "description": "include project related counts"
      },
      {
        "name": "includeCompletedStatus",
        "schema": "boolean",
        "description": "optional to include completed projects when filtering by project statuses \"current,late\"."
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "hideObservedProjects",
        "schema": "boolean",
        "description": "hide projects where the logged-in user is just an observer",
        "default": "false"
      },
      {
        "name": "alwaysIncludeFiltering",
        "schema": "boolean",
        "description": "includes filters when project ids are provided"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "filter by projects that contain users associated with the team ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "select the columns to use in exports."
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "includeCustomFieldIds",
        "schema": "array",
        "description": "include specific custom fields"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include (not used when generating reports)"
      },
      {
        "name": "fields[workflows]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[stages]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectcategories]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectUpdates]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectBudgets]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioColumns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioCards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioBoards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[industries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[customfields]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[customfieldProjects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[countries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "featuresEnabled",
        "schema": "array",
        "description": "filter by projects that have features enabled"
      },
      {
        "name": "excludeTagIds",
        "schema": "array",
        "description": "exclude by project tag ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "responseV205 contains information about a project."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/activity",
    "method": "deleteProjectActivityLog",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Activity",
    "typeScriptTag": "activity",
    "description": "Deletes a projects activity log.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/customfields.json",
    "method": "getProjectCustomFieldValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Project custom field values.",
    "parameters": [
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by custom field value"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project id"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[customfields]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customFieldIds",
        "schema": "array",
        "description": "filter by custom field ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/customfields.json",
    "method": "addValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Add project custom field value.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customfieldProject",
        "schema": "object",
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
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/customfields/bulk/delete.json",
    "method": "deleteManyValues",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Delete many project custom fields values at once.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customfieldProjectIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/customfields/bulk/update.json",
    "method": "updateManyValues",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Update many project custom field values at once.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customfieldProjects",
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
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      },
      {
        "statusCode": "409",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/customfields/{customFieldId}.json",
    "method": "deleteExistingValue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Delete an existing project custom field value.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customFieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/customfields/{customFieldId}.json",
    "method": "getProjectCustomFieldValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Project custom field value.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customFieldId",
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
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/customfields/{customFieldId}.json",
    "method": "updateValue",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Update an existing project custom field value.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customFieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customfieldProject",
        "schema": "object",
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
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      },
      {
        "statusCode": "409",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/featureorder.json",
    "method": "getFeatureOrder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Returns a project features order to display in tab",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "FeatureOrderResponse is the api response containing\ninformation about the order to display the featues in the UI."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/featureorder.json",
    "method": "updateFeatureOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Sets the the features order to display in tab",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "featureOrder",
        "schema": "object",
        "description": ""
      },
      {
        "name": "featureOrderOptions",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "FeatureOrderResponse is the api response containing\ninformation about the order to display the featues in the UI."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/latestactivity",
    "method": "listProjectLatestActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activity",
    "typeScriptTag": "activity",
    "description": "List latest activity for a specific project.",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by start datetime"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "sort by (deprecated, use orderBy)"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "sort by"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by end datetime"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project id (deprecated, use projectIds)"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "maxId",
        "schema": "integer",
        "description": "activity id offset"
      },
      {
        "name": "catchupFromId",
        "schema": "integer",
        "description": "limit results from previous id"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only",
        "default": "false"
      },
      {
        "name": "onlyProjectsWithExplicitMembership",
        "schema": "boolean",
        "description": "only projects with explicit membership"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "enforce all tag ids must be matched"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "groupCommentActivityType",
        "schema": "boolean",
        "description": "group all activities on comments"
      },
      {
        "name": "userIds",
        "schema": "array",
        "description": "filter by user ids"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "list of project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "list of project health"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[activities]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "activityTypes",
        "schema": "array",
        "description": "filter by activity types"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ActivitiesResponse contains all the information returned when sending a GET\nrequest to the activity endpoint."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/milestones.json",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Milestones",
    "typeScriptTag": "milestones",
    "description": "Get milestones in a project",
    "parameters": [
      {
        "name": "updatedAfterDate",
        "schema": "string",
        "description": "filter by updated after date (deprecated, use updatedAfter)"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by milestone name and description"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "agenda"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "date"
      },
      {
        "name": "dueBeforeDate",
        "schema": "string",
        "description": "filter by due before date (deprecated, use dueBefore)"
      },
      {
        "name": "dueBefore",
        "schema": "string",
        "description": "filter by due before date"
      },
      {
        "name": "dueAfterDate",
        "schema": "string",
        "description": "filter by due after date (deprecated, use dueAfter)"
      },
      {
        "name": "dueAfter",
        "schema": "string",
        "description": "filter by due after date"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "showPrivate",
        "schema": "boolean",
        "description": "show private milestones",
        "default": "true"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "showAttachedTasklists",
        "schema": "boolean",
        "description": "show attached tasklists"
      },
      {
        "name": "searchCompaniesTeams",
        "schema": "boolean",
        "description": "include companies and teams in the search term"
      },
      {
        "name": "searchAssignees",
        "schema": "boolean",
        "description": "include assignees in the search"
      },
      {
        "name": "progress",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists (deprecated, use includePercentageComplete)",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyMyProjects",
        "schema": "boolean",
        "description": "filter by projects that the logged-in user is related",
        "default": "false"
      },
      {
        "name": "onlyAdminProjects",
        "schema": "boolean",
        "description": "only include milestones from projects where the user is strictly a project admin.\nsite admins have visibility to all projects."
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all milestone tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeUpdate",
        "schema": "boolean",
        "description": "include milestones latest update action"
      },
      {
        "name": "includeToday",
        "schema": "boolean",
        "description": "include today when milestone status is upcoming",
        "default": "true"
      },
      {
        "name": "includeTeamUserIds",
        "schema": "boolean",
        "description": "include team users to the responsible party ids",
        "default": "true"
      },
      {
        "name": "includeTags",
        "schema": "boolean",
        "description": "include tags in the reports",
        "default": "true"
      },
      {
        "name": "includeProgress",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists (deprecated, use includePercentageComplete)",
        "default": "false"
      },
      {
        "name": "includePercentageComplete",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists",
        "default": "false"
      },
      {
        "name": "includeCompleted",
        "schema": "boolean",
        "description": "optional to include completed milestones"
      },
      {
        "name": "includeCompanyUserIds",
        "schema": "boolean",
        "description": "include company users to the responsible party ids",
        "default": "true"
      },
      {
        "name": "includeAssigneeTeams",
        "schema": "boolean",
        "description": "include teams related to the responsible user ids"
      },
      {
        "name": "includeAssigneeCompanies",
        "schema": "boolean",
        "description": "include companies related to the responsible user ids"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "emoji",
        "schema": "boolean",
        "description": "convert emoji alias to unicode",
        "default": "true"
      },
      {
        "name": "countUnreadComments",
        "schema": "boolean",
        "description": "count unread comments",
        "default": "false"
      },
      {
        "name": "calendar",
        "schema": "boolean",
        "description": "enables the calendar style layout",
        "default": "false"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by milestone tag ids"
      },
      {
        "name": "status",
        "schema": "array",
        "description": "filter by list of milestone status"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed."
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by list of project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by list of project health"
      },
      {
        "name": "projectHealth",
        "schema": "array",
        "description": "filter by list of project health (deprecated, use projectHealths)"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "followerIds",
        "schema": "array",
        "description": "filter by followers' ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "creatorIds",
        "schema": "array",
        "description": "filter by creators' ids"
      },
      {
        "name": "assignedToUserIds",
        "schema": "array",
        "description": "filter by assigned user ids"
      },
      {
        "name": "assignedToTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      },
      {
        "name": "assignedToCompanyIds",
        "schema": "array",
        "description": "filter by assigned company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "MilestonesResponse contains information about a group of milestones."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/notebooks.json",
    "method": "createNewNotebook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notebooks",
    "typeScriptTag": "notebooks",
    "description": "Create a new notebook.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "getEmoji",
        "schema": "boolean",
        "description": "parse emojis to unicode",
        "default": "true"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[notebooks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[notebookCategories]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "notebook",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Response contains information about a specific notebook."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/people.json",
    "method": "getAllOnProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Returns a list of people on a project",
    "parameters": [
      {
        "name": "userType",
        "schema": "string",
        "description": "user type"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "date time"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by comment content"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "name"
      },
      {
        "name": "lastLoginAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page (not used when generating reports)",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number (not used when generating reports)",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "orderPrioritiseCurrentUser",
        "schema": "boolean",
        "description": "Force to have the current/session user in the response"
      },
      {
        "name": "onlySiteOwner",
        "schema": "boolean",
        "description": "",
        "default": "false"
      },
      {
        "name": "onlyOwnerCompany",
        "schema": "boolean",
        "description": "return people only from the owner company. This will replace any provided\ncompany ID.",
        "default": "false"
      },
      {
        "name": "includeServiceAccounts",
        "schema": "boolean",
        "description": "include service accounts",
        "default": "false"
      },
      {
        "name": "includeObservers",
        "schema": "boolean",
        "description": "include project observers",
        "default": "true"
      },
      {
        "name": "includeCollaborators",
        "schema": "boolean",
        "description": "exclude collaborators types, returning only account and contact.",
        "default": "true"
      },
      {
        "name": "includeClients",
        "schema": "boolean",
        "description": "include clients",
        "default": "true"
      },
      {
        "name": "excludeContacts",
        "schema": "boolean",
        "description": "exclude contact types, returning only account and collaborator.",
        "default": "false"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "team ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include (not used when generating reports)"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by user ids"
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[person]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[people]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectPermissions]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "excludeProjectIds",
        "schema": "array",
        "description": "exclude people assigned to certain project id"
      },
      {
        "name": "companyIds",
        "schema": "array",
        "description": "company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "MultiResponse contains information about a group of users."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/people.json",
    "method": "addToProject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Add people to a project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "checkTeamIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "userIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AddPeopleToProjectResponse contains information about which users were and weren't add to the project as well\nas why the users were not able to be added"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/people/{personId}.json",
    "method": "getRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Returns a person on a project",
    "parameters": [
      {
        "name": "userType",
        "schema": "string",
        "description": "user type"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "date time"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by comment content"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "name"
      },
      {
        "name": "lastLoginAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "personId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page (not used when generating reports)",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number (not used when generating reports)",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "orderPrioritiseCurrentUser",
        "schema": "boolean",
        "description": "Force to have the current/session user in the response"
      },
      {
        "name": "onlySiteOwner",
        "schema": "boolean",
        "description": "",
        "default": "false"
      },
      {
        "name": "onlyOwnerCompany",
        "schema": "boolean",
        "description": "return people only from the owner company. This will replace any provided\ncompany ID.",
        "default": "false"
      },
      {
        "name": "includeServiceAccounts",
        "schema": "boolean",
        "description": "include service accounts",
        "default": "false"
      },
      {
        "name": "includeCollaborators",
        "schema": "boolean",
        "description": "exclude collaborators types, returning only account and contact.",
        "default": "true"
      },
      {
        "name": "includeClients",
        "schema": "boolean",
        "description": "include clients",
        "default": "true"
      },
      {
        "name": "excludeContacts",
        "schema": "boolean",
        "description": "exclude contact types, returning only account and collaborator.",
        "default": "false"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "team ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include (not used when generating reports)"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by user ids"
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[person]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[people]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectPermissions]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "excludeProjectIds",
        "schema": "array",
        "description": "exclude people assigned to certain project id"
      },
      {
        "name": "companyIds",
        "schema": "array",
        "description": "company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a user."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/risks",
    "method": "forProjectGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Risks",
    "typeScriptTag": "risks",
    "description": "Get risks for a specific project",
    "parameters": [
      {
        "name": "updatedAfterDate",
        "schema": "string",
        "description": "filter by risks updated after specified date (deprecated, use updatedAfter)"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by risks updated after specified date"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "sort order (deprecated, use orderMode)"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "sort by (deprecated, use orderBy)"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "search term"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "sort order"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "sort by"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "probabilityTo",
        "schema": "integer",
        "description": "filter by probability"
      },
      {
        "name": "probabilityFrom",
        "schema": "integer",
        "description": "filter by probability"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "impactTo",
        "schema": "integer",
        "description": "filter by impact"
      },
      {
        "name": "impactFrom",
        "schema": "integer",
        "description": "filter by impact"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only",
        "default": "false"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "enforce all tag ids must be matched"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "impactSchedule",
        "schema": "boolean",
        "description": "filter by risks that impact schedule"
      },
      {
        "name": "impactPerformance",
        "schema": "boolean",
        "description": "filter by risks that impact performance"
      },
      {
        "name": "impactCost",
        "schema": "boolean",
        "description": "filter by risks that impact cost"
      },
      {
        "name": "statuses",
        "schema": "array",
        "description": "filter by risk statuses"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "list of project statuses"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "list of project health"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by specific ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[risks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "RisksResponse contains all the information returned when sending a GET\nrequest to the risk endpoint."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/risks/copy",
    "method": "copyProjectRiskRegister",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Risks",
    "typeScriptTag": "risks",
    "description": "Copies project risks",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/summary.json",
    "method": "getProjectSummaryDashboardByProjectCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Summary",
    "typeScriptTag": "summary",
    "description": "Get project summary dashboard",
    "parameters": [
      {
        "name": "until",
        "schema": "string",
        "description": "used to limit the since counters to a specific period"
      },
      {
        "name": "timeRangeStart",
        "schema": "string",
        "description": "filter by start datetime"
      },
      {
        "name": "timeRangeEnd",
        "schema": "string",
        "description": "filter by end datetime"
      },
      {
        "name": "timeRange",
        "schema": "string",
        "description": "filter by time range. It will be ignored if timeRangeStart and timeRangeEnd\nwere informed."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "project status (deprecated, use projectStatuses)"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "project status"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "eventsDaysAhead",
        "schema": "integer",
        "description": "number of days remaining to event's start",
        "default": "7"
      },
      {
        "name": "useStartDatesForTodaysTasks",
        "schema": "boolean",
        "description": "enforce today is considered as start date for today's tasks"
      },
      {
        "name": "unreadMessagesMineOnly",
        "schema": "boolean",
        "description": "filter by my unread messages only"
      },
      {
        "name": "unreadCommentsMineOnly",
        "schema": "boolean",
        "description": "filter by my unread comments only"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyProjectEvents",
        "schema": "boolean",
        "description": "filter only project events"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "enforce all tag ids must be matched (deprecated, use matchAllProjectTags)"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "enforce all tag ids must be matched"
      },
      {
        "name": "includeAssigneeTeams",
        "schema": "boolean",
        "description": "include teams related to the taskAssigneeUserIds"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "eventsAttendingOnly",
        "schema": "boolean",
        "description": "count only events that the users are attending"
      },
      {
        "name": "applyTaskAssigneeUsersToSince",
        "schema": "boolean",
        "description": "the since section will only use taskAssigneeUserIds if this flag is true\n(keeps backward compatibility)"
      },
      {
        "name": "applySinceOnUnread",
        "schema": "boolean",
        "description": "when enabled unread counters will respect the time range period.",
        "default": "false"
      },
      {
        "name": "userIds",
        "schema": "array",
        "description": "filter by user ids"
      },
      {
        "name": "timeLoggedByUserIds",
        "schema": "array",
        "description": "filter by user ids who time logged"
      },
      {
        "name": "taskAssigneeUserIds",
        "schema": "array",
        "description": "filter by user ids with tasks assigned"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "project statuses"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectHealth",
        "schema": "array",
        "description": "project health (deprecated, use projectHealths)\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "milestoneAssigneeUserIds",
        "schema": "array",
        "description": "filter by user ids with milestones assigned"
      },
      {
        "name": "health",
        "schema": "array",
        "description": "project healths (deprecated, use projectHealths)\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "filterTagIds",
        "schema": "array",
        "description": "filter by project tag ids (deprecated, use projectTagIds)"
      },
      {
        "name": "fields[unread]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[time]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": "sparse fields"
      },
      {
        "name": "fields[since]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[risks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[health]",
        "schema": "array",
        "description": "0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "fields[events]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[columns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyIds",
        "schema": "array",
        "description": "filter by company ids (deprecated, use projectCompanyIds)"
      },
      {
        "name": "assigneeUserIds",
        "schema": "array",
        "description": "filter by user ids with tasks or milestones assigned"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ProjectResponse contains all the information returned when sending\na GET request to the summary endpoint (https://apidocs.teamwork.com/."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/tasklists",
    "method": "getInProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TaskLists",
    "typeScriptTag": "taskLists",
    "description": "Get tasklists in a project",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by search term"
      },
      {
        "name": "projectType",
        "schema": "string",
        "description": "filter by project type"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "displayorder"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "projectBudgetId",
        "schema": "integer",
        "description": "filter the task list budget by its parent project budget id, if none\nis provided it weill default to the current active budget.",
        "default": "nil"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "sortActiveListsFirst",
        "schema": "boolean",
        "description": "sort active lists first",
        "default": "false"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showPrivate",
        "schema": "boolean",
        "description": "include private items",
        "default": "true"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "showCompleted",
        "schema": "boolean",
        "description": "include completed items",
        "default": "false"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "this means use the tasklist report endpoint, which has totally different query params",
        "default": "false"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "completedOnly",
        "schema": "boolean",
        "description": "include only completed items",
        "default": "false"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by project company ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[lockdowns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TasklistsResponse contains information about a group of tasklists."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/tasklists.csv",
    "method": "generateCsvReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TaskLists",
    "typeScriptTag": "taskLists",
    "description": "Generate tasklist report in CSV format",
    "parameters": [
      {
        "name": "taskDate",
        "schema": "string",
        "description": "filter by task date",
        "default": "anytime"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by start datetime"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "manual"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by end datetime"
      },
      {
        "name": "commentsOrderMode",
        "schema": "string",
        "description": "order mode of the comments",
        "default": "asc"
      },
      {
        "name": "tasklistId",
        "schema": "integer",
        "description": "filter by task list"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "onlyCompletedTasks",
        "schema": "boolean",
        "description": "only completed tasks",
        "default": "false"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeTime",
        "schema": "boolean",
        "description": "include time"
      },
      {
        "name": "includeTags",
        "schema": "boolean",
        "description": "include tags",
        "default": "true"
      },
      {
        "name": "includePrivateItems",
        "schema": "boolean",
        "description": "include private items",
        "default": "true"
      },
      {
        "name": "includeLateTasks",
        "schema": "boolean",
        "description": "include late tasks"
      },
      {
        "name": "includeEstimatedTime",
        "schema": "boolean",
        "description": "include estimated time",
        "default": "true"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCompletedTasks",
        "schema": "boolean",
        "description": "include completed tasks",
        "default": "true"
      },
      {
        "name": "includeComments",
        "schema": "boolean",
        "description": "include comments",
        "default": "false"
      },
      {
        "name": "includeCommentAvatars",
        "schema": "boolean",
        "description": "include comment avatars"
      },
      {
        "name": "includeColumns",
        "schema": "boolean",
        "description": "include columns",
        "default": "true"
      },
      {
        "name": "includeAnytimeTasks",
        "schema": "boolean",
        "description": "include anytime tasks"
      },
      {
        "name": "includeAllComments",
        "schema": "boolean",
        "description": "include all comments",
        "default": "false"
      },
      {
        "name": "ignoreStartDates",
        "schema": "boolean",
        "description": "ignore task start dates"
      },
      {
        "name": "groupByTasklists",
        "schema": "boolean",
        "description": "group by task lists"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "filter by tag names"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "assignedToUserIds",
        "schema": "array",
        "description": "filter by assigned user ids"
      },
      {
        "name": "assignedToTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      },
      {
        "name": "assignedToCompanyIds",
        "schema": "array",
        "description": "filter by assigned company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/tasklists.html",
    "method": "generateHtmlReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TaskLists",
    "typeScriptTag": "taskLists",
    "description": "Generate tasklist report in HTML format",
    "parameters": [
      {
        "name": "taskDate",
        "schema": "string",
        "description": "filter by task date",
        "default": "anytime"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by start datetime"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "manual"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by end datetime"
      },
      {
        "name": "commentsOrderMode",
        "schema": "string",
        "description": "order mode of the comments",
        "default": "asc"
      },
      {
        "name": "tasklistId",
        "schema": "integer",
        "description": "filter by task list"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "onlyCompletedTasks",
        "schema": "boolean",
        "description": "only completed tasks",
        "default": "false"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeTime",
        "schema": "boolean",
        "description": "include time"
      },
      {
        "name": "includeTags",
        "schema": "boolean",
        "description": "include tags",
        "default": "true"
      },
      {
        "name": "includePrivateItems",
        "schema": "boolean",
        "description": "include private items",
        "default": "true"
      },
      {
        "name": "includeLateTasks",
        "schema": "boolean",
        "description": "include late tasks"
      },
      {
        "name": "includeEstimatedTime",
        "schema": "boolean",
        "description": "include estimated time",
        "default": "true"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCompletedTasks",
        "schema": "boolean",
        "description": "include completed tasks",
        "default": "true"
      },
      {
        "name": "includeComments",
        "schema": "boolean",
        "description": "include comments",
        "default": "false"
      },
      {
        "name": "includeCommentAvatars",
        "schema": "boolean",
        "description": "include comment avatars"
      },
      {
        "name": "includeColumns",
        "schema": "boolean",
        "description": "include columns",
        "default": "true"
      },
      {
        "name": "includeAnytimeTasks",
        "schema": "boolean",
        "description": "include anytime tasks"
      },
      {
        "name": "includeAllComments",
        "schema": "boolean",
        "description": "include all comments",
        "default": "false"
      },
      {
        "name": "ignoreStartDates",
        "schema": "boolean",
        "description": "ignore task start dates"
      },
      {
        "name": "groupByTasklists",
        "schema": "boolean",
        "description": "group by task lists"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "filter by tag names"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "assignedToUserIds",
        "schema": "array",
        "description": "filter by assigned user ids"
      },
      {
        "name": "assignedToTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      },
      {
        "name": "assignedToCompanyIds",
        "schema": "array",
        "description": "filter by assigned company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/tasklists.pdf",
    "method": "generatePdfReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TaskLists",
    "typeScriptTag": "taskLists",
    "description": "Generate tasklist report in PDF format",
    "parameters": [
      {
        "name": "taskDate",
        "schema": "string",
        "description": "filter by task date",
        "default": "anytime"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by start datetime"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "manual"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by end datetime"
      },
      {
        "name": "commentsOrderMode",
        "schema": "string",
        "description": "order mode of the comments",
        "default": "asc"
      },
      {
        "name": "tasklistId",
        "schema": "integer",
        "description": "filter by task list"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "onlyCompletedTasks",
        "schema": "boolean",
        "description": "only completed tasks",
        "default": "false"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeTime",
        "schema": "boolean",
        "description": "include time"
      },
      {
        "name": "includeTags",
        "schema": "boolean",
        "description": "include tags",
        "default": "true"
      },
      {
        "name": "includePrivateItems",
        "schema": "boolean",
        "description": "include private items",
        "default": "true"
      },
      {
        "name": "includeLateTasks",
        "schema": "boolean",
        "description": "include late tasks"
      },
      {
        "name": "includeEstimatedTime",
        "schema": "boolean",
        "description": "include estimated time",
        "default": "true"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCompletedTasks",
        "schema": "boolean",
        "description": "include completed tasks",
        "default": "true"
      },
      {
        "name": "includeComments",
        "schema": "boolean",
        "description": "include comments",
        "default": "false"
      },
      {
        "name": "includeCommentAvatars",
        "schema": "boolean",
        "description": "include comment avatars"
      },
      {
        "name": "includeColumns",
        "schema": "boolean",
        "description": "include columns",
        "default": "true"
      },
      {
        "name": "includeAnytimeTasks",
        "schema": "boolean",
        "description": "include anytime tasks"
      },
      {
        "name": "includeAllComments",
        "schema": "boolean",
        "description": "include all comments",
        "default": "false"
      },
      {
        "name": "ignoreStartDates",
        "schema": "boolean",
        "description": "ignore task start dates"
      },
      {
        "name": "groupByTasklists",
        "schema": "boolean",
        "description": "group by task lists"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "filter by tag names"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "assignedToUserIds",
        "schema": "array",
        "description": "filter by assigned user ids"
      },
      {
        "name": "assignedToTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      },
      {
        "name": "assignedToCompanyIds",
        "schema": "array",
        "description": "filter by assigned company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/tasklists.xlsx",
    "method": "generateXlsxReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TaskLists",
    "typeScriptTag": "taskLists",
    "description": "Generate tasklist report in XLSX format",
    "parameters": [
      {
        "name": "taskDate",
        "schema": "string",
        "description": "filter by task date",
        "default": "anytime"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by start datetime"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "manual"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by end datetime"
      },
      {
        "name": "commentsOrderMode",
        "schema": "string",
        "description": "order mode of the comments",
        "default": "asc"
      },
      {
        "name": "tasklistId",
        "schema": "integer",
        "description": "filter by task list"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "onlyCompletedTasks",
        "schema": "boolean",
        "description": "only completed tasks",
        "default": "false"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeTime",
        "schema": "boolean",
        "description": "include time"
      },
      {
        "name": "includeTags",
        "schema": "boolean",
        "description": "include tags",
        "default": "true"
      },
      {
        "name": "includePrivateItems",
        "schema": "boolean",
        "description": "include private items",
        "default": "true"
      },
      {
        "name": "includeLateTasks",
        "schema": "boolean",
        "description": "include late tasks"
      },
      {
        "name": "includeEstimatedTime",
        "schema": "boolean",
        "description": "include estimated time",
        "default": "true"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCompletedTasks",
        "schema": "boolean",
        "description": "include completed tasks",
        "default": "true"
      },
      {
        "name": "includeComments",
        "schema": "boolean",
        "description": "include comments",
        "default": "false"
      },
      {
        "name": "includeCommentAvatars",
        "schema": "boolean",
        "description": "include comment avatars"
      },
      {
        "name": "includeColumns",
        "schema": "boolean",
        "description": "include columns",
        "default": "true"
      },
      {
        "name": "includeAnytimeTasks",
        "schema": "boolean",
        "description": "include anytime tasks"
      },
      {
        "name": "includeAllComments",
        "schema": "boolean",
        "description": "include all comments",
        "default": "false"
      },
      {
        "name": "ignoreStartDates",
        "schema": "boolean",
        "description": "ignore task start dates"
      },
      {
        "name": "groupByTasklists",
        "schema": "boolean",
        "description": "group by task lists"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "filter by tag names"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "assignedToUserIds",
        "schema": "array",
        "description": "filter by assigned user ids"
      },
      {
        "name": "assignedToTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      },
      {
        "name": "assignedToCompanyIds",
        "schema": "array",
        "description": "filter by assigned company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/tasks.json",
    "method": "getSpecificProjectTasksFilteredByCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get a specific project's tasks.",
    "parameters": [
      {
        "name": "updatedBefore",
        "schema": "string",
        "description": "filter by updated before date"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "today",
        "schema": "string",
        "description": "filter by today"
      },
      {
        "name": "taskFilter",
        "schema": "string",
        "description": "filter by a taskFilter"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter on start date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by search term"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "task"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "priority",
        "schema": "string",
        "description": "filter by task priority"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "duedate"
      },
      {
        "name": "notCompletedBefore",
        "schema": "string",
        "description": "filter by projects that have not been completed before the given date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter on end date"
      },
      {
        "name": "dueBefore",
        "schema": "string",
        "description": "filter before a due date"
      },
      {
        "name": "dueAfter",
        "schema": "string",
        "description": "filter after a due date"
      },
      {
        "name": "deletedAfter",
        "schema": "string",
        "description": "filter on deleted after date"
      },
      {
        "name": "createdFilter",
        "schema": "string",
        "description": "filter by created filter"
      },
      {
        "name": "createdDateCode",
        "schema": "string",
        "description": "filter by created date code"
      },
      {
        "name": "createdBefore",
        "schema": "string",
        "description": "filter by created before date"
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "filter by created after date"
      },
      {
        "name": "completedBefore",
        "schema": "string",
        "description": "filter by completed before date"
      },
      {
        "name": "completedAfter",
        "schema": "string",
        "description": "filter by completed after date"
      },
      {
        "name": "updatedByUserId",
        "schema": "integer",
        "description": "filter by updated user id"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "parentTaskId",
        "schema": "integer",
        "description": "filter by parent task ids"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "orderByCustomFieldId",
        "schema": "integer",
        "description": "order by custom field id when orderBy is equal to customfield"
      },
      {
        "name": "includeTaskId",
        "schema": "integer",
        "description": "include task id"
      },
      {
        "name": "filterId",
        "schema": "integer",
        "description": "provide a user saved filter ID"
      },
      {
        "name": "completedByUserId",
        "schema": "integer",
        "description": "filter by completed user id"
      },
      {
        "name": "useStartDatesForTodaysTasks",
        "schema": "boolean",
        "description": "use start dates for todays tasks"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "useAllProjects",
        "schema": "boolean",
        "description": "filter on all projects"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "showCompletedLists",
        "schema": "boolean",
        "description": "include tasks from completed lists"
      },
      {
        "name": "searchCompaniesTeams",
        "schema": "boolean",
        "description": "include companies and teams in the search term"
      },
      {
        "name": "searchAssignees",
        "schema": "boolean",
        "description": "include assignees in the search"
      },
      {
        "name": "onlyUntaggedTasks",
        "schema": "boolean",
        "description": "only untagged tasks"
      },
      {
        "name": "onlyUnplanned",
        "schema": "boolean",
        "description": "only return tasks that are unplanned. Not assigned, no due date or\nmissing estimated time.",
        "default": "false"
      },
      {
        "name": "onlyTasksWithUnreadComments",
        "schema": "boolean",
        "description": "filter by only tasks with unread comments"
      },
      {
        "name": "onlyTasksWithTickets",
        "schema": "boolean",
        "description": "filter by only tasks with tickets"
      },
      {
        "name": "onlyTasksWithEstimatedTime",
        "schema": "boolean",
        "description": "only return tasks with estimated time"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyAdminProjects",
        "schema": "boolean",
        "description": "only include tasks from projects where the user is strictly a project admin.\nsite admins have visibility to all projects."
      },
      {
        "name": "nestSubTasks",
        "schema": "boolean",
        "description": "nest sub tasks"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "matchAllExcludedTags",
        "schema": "boolean",
        "description": "match all exclude tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report export.",
        "default": "false"
      },
      {
        "name": "includeUpdate",
        "schema": "boolean",
        "description": "include tasks latest update action"
      },
      {
        "name": "includeUntaggedTasks",
        "schema": "boolean",
        "description": "include untagged tasks"
      },
      {
        "name": "includeTomorrow",
        "schema": "boolean",
        "description": "filter by include tomorrow"
      },
      {
        "name": "includeToday",
        "schema": "boolean",
        "description": "filter by include today"
      },
      {
        "name": "includeTeamUserIds",
        "schema": "boolean",
        "description": "include members of the given teams"
      },
      {
        "name": "includeTasksWithoutDueDates",
        "schema": "boolean",
        "description": "include tasks without due dates"
      },
      {
        "name": "includeTasksWithCards",
        "schema": "boolean",
        "description": "include tasks with cards",
        "default": "true"
      },
      {
        "name": "includeTasksFromDeletedLists",
        "schema": "boolean",
        "description": "include tasks from deleted lists"
      },
      {
        "name": "includeRelatedTasks",
        "schema": "boolean",
        "description": "include ids of completed and active subtasks, dependencies, predecessors"
      },
      {
        "name": "includePrivateItems",
        "schema": "boolean",
        "description": "include private items"
      },
      {
        "name": "includeOverdueTasks",
        "schema": "boolean",
        "description": "include overdue tasks"
      },
      {
        "name": "includeOriginalDueDate",
        "schema": "boolean",
        "description": "include original due date of a task"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCompletedTasks",
        "schema": "boolean",
        "description": "include completed tasks"
      },
      {
        "name": "includeCompanyUserIds",
        "schema": "boolean",
        "description": "include members of the given companies"
      },
      {
        "name": "includeCommentStats",
        "schema": "boolean",
        "description": "include number of unread and read comments for each task",
        "default": "false"
      },
      {
        "name": "includeBlocked",
        "schema": "boolean",
        "description": "filter by include blocked"
      },
      {
        "name": "includeAttachmentCommentStats",
        "schema": "boolean",
        "description": "include number of unread and read comments for each file attachment",
        "default": "false"
      },
      {
        "name": "includeAssigneeTeams",
        "schema": "boolean",
        "description": "include teams related to the responsible user ids"
      },
      {
        "name": "includeAssigneeCompanies",
        "schema": "boolean",
        "description": "include companies related to the responsible user ids"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "includeAllComments",
        "schema": "boolean",
        "description": "include all comments"
      },
      {
        "name": "groupByTasklist",
        "schema": "boolean",
        "description": "group by tasklist"
      },
      {
        "name": "groupByTaskgroup",
        "schema": "boolean",
        "description": "group by taskgroup"
      },
      {
        "name": "getSubTasks",
        "schema": "boolean",
        "description": "get sub tasks"
      },
      {
        "name": "getFiles",
        "schema": "boolean",
        "description": "get files"
      },
      {
        "name": "fallbackToMilestoneDueDate",
        "schema": "boolean",
        "description": "set due date as milestone due date if due date is null and there's a related milestone"
      },
      {
        "name": "extractTemplateRoleName",
        "schema": "boolean",
        "description": "For tasks created in a project template it's possible to assign a role instead of people, companies or teams.\nThis role is then stored with the task name as a prefix. When this flag is enabled it will extract the role name\nand return it inside a special field."
      },
      {
        "name": "excludeAssigneeNotOnProjectTeams",
        "schema": "boolean",
        "description": "exclude assignee not on project teams"
      },
      {
        "name": "completedOnly",
        "schema": "boolean",
        "description": "only completed tasks",
        "default": "false"
      },
      {
        "name": "checkForReminders",
        "schema": "boolean",
        "description": "check if task has reminders"
      },
      {
        "name": "allowAssigneesOutsideProject",
        "schema": "boolean",
        "description": "when filtering by assigned or unassagned tasks, include assignees that\nare not in the project.",
        "default": "true"
      },
      {
        "name": "tasksSelectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed for tasks report"
      },
      {
        "name": "tasklistIds",
        "schema": "array",
        "description": "filter by tasklist ids"
      },
      {
        "name": "taskgroupIds",
        "schema": "array",
        "description": "filter by taskgroup ids"
      },
      {
        "name": "taskIncludedSet",
        "schema": "array",
        "description": "filter by task included set"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "filter by tag values"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "status",
        "schema": "array",
        "description": "filter by list of task status"
      },
      {
        "name": "skipCrmDealIds",
        "schema": "array",
        "description": "skip crm deal ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed for planned vs actual."
      },
      {
        "name": "responsiblePartyIds",
        "schema": "array",
        "description": "filter by responsible party ids"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectFeaturesEnabled",
        "schema": "array",
        "description": "filter by projects that have features enabled"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "includeCustomFieldIds",
        "schema": "array",
        "description": "include specific custom fields"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by task ids"
      },
      {
        "name": "followedByUserIds",
        "schema": "array",
        "description": "filter by followed by user ids"
      },
      {
        "name": "filterBoardColumnIds",
        "schema": "array",
        "description": "filter by board column ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[timers]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[taskgroups]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[taskSequences]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[lockdowns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[files]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[comments]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[columns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[cards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectPermissions]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "expandedIds",
        "schema": "array",
        "description": "the ids of the expanded tasks"
      },
      {
        "name": "excludeTagIds",
        "schema": "array",
        "description": "filter by excluded tag ids"
      },
      {
        "name": "crmDealIds",
        "schema": "array",
        "description": "filter by crm deal ids"
      },
      {
        "name": "createdByUserIds",
        "schema": "array",
        "description": "filter by creator user ids"
      },
      {
        "name": "assigneeTeamIds",
        "schema": "array",
        "description": "filter by assignee team ids"
      },
      {
        "name": "assigneeCompanyIds",
        "schema": "array",
        "description": "filter by assignee company ids"
      },
      {
        "name": "customFields",
        "schema": "array",
        "description": "filter by custom fields"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/time.json",
    "method": "getProjectTimeEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Get time entries for a specific project",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by a starting date"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "sort order",
        "default": "date"
      },
      {
        "name": "invoicedType",
        "schema": "string",
        "description": "filter by invoiced type",
        "default": "all"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by an ending date"
      },
      {
        "name": "billableType",
        "schema": "string",
        "description": "filter by billable type",
        "default": "all"
      },
      {
        "name": "updatedBy",
        "schema": "integer",
        "description": "filter by the user who updated the timelog"
      },
      {
        "name": "ticketId",
        "schema": "integer",
        "description": "filter by ticket id"
      },
      {
        "name": "tasklistId",
        "schema": "integer",
        "description": "filter by tasklist id"
      },
      {
        "name": "taskId",
        "schema": "integer",
        "description": "filter by task id (deprecated, use taskIds)"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project id (deprecated, use projectIds)"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "budgetId",
        "schema": "integer",
        "description": "filter by budget id"
      },
      {
        "name": "allocationId",
        "schema": "integer",
        "description": "filter by allocation id"
      },
      {
        "name": "unattachedTimelogs",
        "schema": "boolean",
        "description": "filter by timelogs that are directly logged against projects and not its child tasks"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "matchAllTaskTags",
        "schema": "boolean",
        "description": "match all task tags"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeTotals",
        "schema": "boolean",
        "description": "include totals",
        "default": "false"
      },
      {
        "name": "includePermissions",
        "schema": "boolean",
        "description": "include permissions",
        "default": "false"
      },
      {
        "name": "includeDescendants",
        "schema": "boolean",
        "description": "include descendants",
        "default": "false"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "taskTagIds",
        "schema": "array",
        "description": "filter by task tag ids"
      },
      {
        "name": "taskIds",
        "schema": "array",
        "description": "filter by task ids"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns"
      },
      {
        "name": "projectsFromCompanyId",
        "schema": "array",
        "description": "filter by project company ids (deprecated, use projectCompanyIds)"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project statuses"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by project company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[timelogs]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectcategories]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "assignedToUserIds",
        "schema": "array",
        "description": "filter by assigned user ids"
      },
      {
        "name": "assignedToTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      },
      {
        "name": "assignedToCompanyIds",
        "schema": "array",
        "description": "filter by assigned company ids"
      },
      {
        "name": "assignedTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TimelogsResponse contains information about a group of timelogs."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/time.json",
    "method": "createEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Create a time entry in a specific project.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "integer",
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
        "name": "timelog",
        "schema": "object",
        "description": ""
      },
      {
        "name": "timelogOptions",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Response contains information about a specific timelog."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/projects/{projectId}/time/total.json",
    "method": "getTimelogTotals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Get timelog totals for a specific project.",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by a starting date"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by an ending date"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "filter by user id (deprecated, use assignedToUserIds)"
      },
      {
        "name": "tasklistId",
        "schema": "integer",
        "description": "filter by tasklist id"
      },
      {
        "name": "taskId",
        "schema": "integer",
        "description": "filter by task id (deprecated, use taskIds)"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project id"
      },
      {
        "name": "deskTicketId",
        "schema": "integer",
        "description": "filter by desk ticket id"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "includeDescendants",
        "schema": "boolean",
        "description": "get subtask totals"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "userIds",
        "schema": "array",
        "description": "filter by user ids (deprecated, use assignedToUserIds)"
      },
      {
        "name": "taskIds",
        "schema": "array",
        "description": "filter by task ids"
      },
      {
        "name": "subTaskStatuses",
        "schema": "array",
        "description": "filter by sub-task status, includeDescendants must be set to true\nfor this to have any effect",
        "default": "all"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project statuses"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by project company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "companyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "assignedToUserIds",
        "schema": "array",
        "description": "filter by assigned user ids"
      },
      {
        "name": "assignedToTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      },
      {
        "name": "assignedToCompanyIds",
        "schema": "array",
        "description": "filter by assigned company ids"
      },
      {
        "name": "assignedTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TotalsResponse contains information about timelog totals."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/reporting/precanned/companytime.json",
    "method": "getAllEntriesGroupedByCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Get all time entries, grouped by company ID",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by a starting date"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "sort order",
        "default": "date"
      },
      {
        "name": "invoicedType",
        "schema": "string",
        "description": "filter by invoiced type",
        "default": "all"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by an ending date"
      },
      {
        "name": "billableType",
        "schema": "string",
        "description": "filter by billable type",
        "default": "all"
      },
      {
        "name": "updatedBy",
        "schema": "integer",
        "description": "filter by the user who updated the timelog"
      },
      {
        "name": "ticketId",
        "schema": "integer",
        "description": "filter by ticket id"
      },
      {
        "name": "tasklistId",
        "schema": "integer",
        "description": "filter by tasklist id"
      },
      {
        "name": "taskId",
        "schema": "integer",
        "description": "filter by task id (deprecated, use taskIds)"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project id (deprecated, use projectIds)"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "budgetId",
        "schema": "integer",
        "description": "filter by budget id"
      },
      {
        "name": "allocationId",
        "schema": "integer",
        "description": "filter by allocation id"
      },
      {
        "name": "unattachedTimelogs",
        "schema": "boolean",
        "description": "filter by timelogs that are directly logged against projects and not its child tasks"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "matchAllTaskTags",
        "schema": "boolean",
        "description": "match all task tags"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeTotals",
        "schema": "boolean",
        "description": "include totals",
        "default": "false"
      },
      {
        "name": "includePermissions",
        "schema": "boolean",
        "description": "include permissions",
        "default": "false"
      },
      {
        "name": "includeDescendants",
        "schema": "boolean",
        "description": "include descendants",
        "default": "false"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "taskTagIds",
        "schema": "array",
        "description": "filter by task tag ids"
      },
      {
        "name": "taskIds",
        "schema": "array",
        "description": "filter by task ids"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns"
      },
      {
        "name": "projectsFromCompanyId",
        "schema": "array",
        "description": "filter by project company ids (deprecated, use projectCompanyIds)"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project statuses"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by project company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[timelogs]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectcategories]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "assignedToUserIds",
        "schema": "array",
        "description": "filter by assigned user ids"
      },
      {
        "name": "assignedToTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      },
      {
        "name": "assignedToCompanyIds",
        "schema": "array",
        "description": "filter by assigned company ids"
      },
      {
        "name": "assignedTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "CompanyTimelogsResponse contains information about a group of timelogs, grouped by company ID."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/reporting/precanned/health/projects.csv",
    "method": "generateProjectReportCsv",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Generate project report in CSV format",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "updated after"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by project name"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "project"
      },
      {
        "name": "reportTimezone",
        "schema": "string",
        "description": "Optional to configure the report dates displayed in a timezone"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "projectType",
        "schema": "string",
        "description": "filter by project type"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "name"
      },
      {
        "name": "notCompletedBefore",
        "schema": "string",
        "description": "filter by projects that have not been completed before the given date"
      },
      {
        "name": "minLastActivityDate",
        "schema": "string",
        "description": "filter by min last activity date"
      },
      {
        "name": "maxLastActivityDate",
        "schema": "string",
        "description": "filter by max last activity date"
      },
      {
        "name": "currencySymbol",
        "schema": "string",
        "description": "currency symbol for report export"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "filter by user id"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page (not used when generating reports)",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number (not used when generating reports)",
        "default": "1"
      },
      {
        "name": "orderByCustomFieldId",
        "schema": "integer",
        "description": "order by custom field id when orderBy is equal to customfield"
      },
      {
        "name": "minBudgetCapacityUsedPercent",
        "schema": "integer",
        "description": "filter by minimum budget capacity used"
      },
      {
        "name": "maxBudgetCapacityUsedPercent",
        "schema": "integer",
        "description": "filter by maximum budget capacity used"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "searchCompanies",
        "schema": "boolean",
        "description": "include companies in the search"
      },
      {
        "name": "searchByLetter",
        "schema": "boolean",
        "description": "search projects beginning with the search term character only when it contains a single character."
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyProjectsWithExplicitMembership",
        "schema": "boolean",
        "description": "only show projects with explicit membership",
        "default": "false"
      },
      {
        "name": "onlyProjectsThatCanLogTime",
        "schema": "boolean",
        "description": "can log time on projects",
        "default": "false"
      },
      {
        "name": "onlyArchivedProjects",
        "schema": "boolean",
        "description": "return only archived projects",
        "default": "false"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "matchAllExcludedTags",
        "schema": "boolean",
        "description": "match all excluded project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document",
        "default": "false"
      },
      {
        "name": "includeTentativeProjects",
        "schema": "boolean",
        "description": "include alongside normal projects, tentative ones"
      },
      {
        "name": "includeSubCategories",
        "schema": "boolean",
        "description": "include sub categories when filtering by ids"
      },
      {
        "name": "includeStats",
        "schema": "boolean",
        "description": "include project status counts for tasks columns billing events milestones"
      },
      {
        "name": "includeProjectUserInfo",
        "schema": "boolean",
        "description": "fetch user-specific data such as isStarred",
        "default": "false"
      },
      {
        "name": "includeProjectProfitability",
        "schema": "boolean",
        "description": "include project profitability in response"
      },
      {
        "name": "includeProjectDates",
        "schema": "boolean",
        "description": "include minimum and maximum start/end dates for projects"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCounts",
        "schema": "boolean",
        "description": "include project related counts"
      },
      {
        "name": "includeCompletedStatus",
        "schema": "boolean",
        "description": "optional to include completed projects when filtering by project statuses \"current,late\"."
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "hideObservedProjects",
        "schema": "boolean",
        "description": "hide projects where the logged-in user is just an observer",
        "default": "false"
      },
      {
        "name": "alwaysIncludeFiltering",
        "schema": "boolean",
        "description": "includes filters when project ids are provided"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "filter by projects that contain users associated with the team ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "select the columns to use in exports."
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "includeCustomFieldIds",
        "schema": "array",
        "description": "include specific custom fields"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include (not used when generating reports)"
      },
      {
        "name": "fields[workflows]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[stages]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectcategories]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectUpdates]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectBudgets]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioColumns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioCards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioBoards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[industries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[customfields]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[customfieldProjects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[countries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "featuresEnabled",
        "schema": "array",
        "description": "filter by projects that have features enabled"
      },
      {
        "name": "excludeTagIds",
        "schema": "array",
        "description": "exclude by project tag ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/reporting/precanned/health/projects.html",
    "method": "generateProjectReportHtml",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Generate project report in HTML format",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "updated after"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by project name"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "project"
      },
      {
        "name": "reportTimezone",
        "schema": "string",
        "description": "Optional to configure the report dates displayed in a timezone"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "projectType",
        "schema": "string",
        "description": "filter by project type"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "name"
      },
      {
        "name": "notCompletedBefore",
        "schema": "string",
        "description": "filter by projects that have not been completed before the given date"
      },
      {
        "name": "minLastActivityDate",
        "schema": "string",
        "description": "filter by min last activity date"
      },
      {
        "name": "maxLastActivityDate",
        "schema": "string",
        "description": "filter by max last activity date"
      },
      {
        "name": "currencySymbol",
        "schema": "string",
        "description": "currency symbol for report export"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "filter by user id"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page (not used when generating reports)",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number (not used when generating reports)",
        "default": "1"
      },
      {
        "name": "orderByCustomFieldId",
        "schema": "integer",
        "description": "order by custom field id when orderBy is equal to customfield"
      },
      {
        "name": "minBudgetCapacityUsedPercent",
        "schema": "integer",
        "description": "filter by minimum budget capacity used"
      },
      {
        "name": "maxBudgetCapacityUsedPercent",
        "schema": "integer",
        "description": "filter by maximum budget capacity used"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "searchCompanies",
        "schema": "boolean",
        "description": "include companies in the search"
      },
      {
        "name": "searchByLetter",
        "schema": "boolean",
        "description": "search projects beginning with the search term character only when it contains a single character."
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyProjectsWithExplicitMembership",
        "schema": "boolean",
        "description": "only show projects with explicit membership",
        "default": "false"
      },
      {
        "name": "onlyProjectsThatCanLogTime",
        "schema": "boolean",
        "description": "can log time on projects",
        "default": "false"
      },
      {
        "name": "onlyArchivedProjects",
        "schema": "boolean",
        "description": "return only archived projects",
        "default": "false"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "matchAllExcludedTags",
        "schema": "boolean",
        "description": "match all excluded project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document",
        "default": "false"
      },
      {
        "name": "includeTentativeProjects",
        "schema": "boolean",
        "description": "include alongside normal projects, tentative ones"
      },
      {
        "name": "includeSubCategories",
        "schema": "boolean",
        "description": "include sub categories when filtering by ids"
      },
      {
        "name": "includeStats",
        "schema": "boolean",
        "description": "include project status counts for tasks columns billing events milestones"
      },
      {
        "name": "includeProjectUserInfo",
        "schema": "boolean",
        "description": "fetch user-specific data such as isStarred",
        "default": "false"
      },
      {
        "name": "includeProjectProfitability",
        "schema": "boolean",
        "description": "include project profitability in response"
      },
      {
        "name": "includeProjectDates",
        "schema": "boolean",
        "description": "include minimum and maximum start/end dates for projects"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCounts",
        "schema": "boolean",
        "description": "include project related counts"
      },
      {
        "name": "includeCompletedStatus",
        "schema": "boolean",
        "description": "optional to include completed projects when filtering by project statuses \"current,late\"."
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "hideObservedProjects",
        "schema": "boolean",
        "description": "hide projects where the logged-in user is just an observer",
        "default": "false"
      },
      {
        "name": "alwaysIncludeFiltering",
        "schema": "boolean",
        "description": "includes filters when project ids are provided"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "filter by projects that contain users associated with the team ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "select the columns to use in exports."
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "includeCustomFieldIds",
        "schema": "array",
        "description": "include specific custom fields"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include (not used when generating reports)"
      },
      {
        "name": "fields[workflows]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[stages]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectcategories]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectUpdates]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectBudgets]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioColumns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioCards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioBoards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[industries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[customfields]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[customfieldProjects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[countries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "featuresEnabled",
        "schema": "array",
        "description": "filter by projects that have features enabled"
      },
      {
        "name": "excludeTagIds",
        "schema": "array",
        "description": "exclude by project tag ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/reporting/precanned/health/projects.pdf",
    "method": "generateProjectReportPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Generate project report in PDF format",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "updated after"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by project name"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "project"
      },
      {
        "name": "reportTimezone",
        "schema": "string",
        "description": "Optional to configure the report dates displayed in a timezone"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "projectType",
        "schema": "string",
        "description": "filter by project type"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "name"
      },
      {
        "name": "notCompletedBefore",
        "schema": "string",
        "description": "filter by projects that have not been completed before the given date"
      },
      {
        "name": "minLastActivityDate",
        "schema": "string",
        "description": "filter by min last activity date"
      },
      {
        "name": "maxLastActivityDate",
        "schema": "string",
        "description": "filter by max last activity date"
      },
      {
        "name": "currencySymbol",
        "schema": "string",
        "description": "currency symbol for report export"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "filter by user id"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page (not used when generating reports)",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number (not used when generating reports)",
        "default": "1"
      },
      {
        "name": "orderByCustomFieldId",
        "schema": "integer",
        "description": "order by custom field id when orderBy is equal to customfield"
      },
      {
        "name": "minBudgetCapacityUsedPercent",
        "schema": "integer",
        "description": "filter by minimum budget capacity used"
      },
      {
        "name": "maxBudgetCapacityUsedPercent",
        "schema": "integer",
        "description": "filter by maximum budget capacity used"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "searchCompanies",
        "schema": "boolean",
        "description": "include companies in the search"
      },
      {
        "name": "searchByLetter",
        "schema": "boolean",
        "description": "search projects beginning with the search term character only when it contains a single character."
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyProjectsWithExplicitMembership",
        "schema": "boolean",
        "description": "only show projects with explicit membership",
        "default": "false"
      },
      {
        "name": "onlyProjectsThatCanLogTime",
        "schema": "boolean",
        "description": "can log time on projects",
        "default": "false"
      },
      {
        "name": "onlyArchivedProjects",
        "schema": "boolean",
        "description": "return only archived projects",
        "default": "false"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "matchAllExcludedTags",
        "schema": "boolean",
        "description": "match all excluded project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document",
        "default": "false"
      },
      {
        "name": "includeTentativeProjects",
        "schema": "boolean",
        "description": "include alongside normal projects, tentative ones"
      },
      {
        "name": "includeSubCategories",
        "schema": "boolean",
        "description": "include sub categories when filtering by ids"
      },
      {
        "name": "includeStats",
        "schema": "boolean",
        "description": "include project status counts for tasks columns billing events milestones"
      },
      {
        "name": "includeProjectUserInfo",
        "schema": "boolean",
        "description": "fetch user-specific data such as isStarred",
        "default": "false"
      },
      {
        "name": "includeProjectProfitability",
        "schema": "boolean",
        "description": "include project profitability in response"
      },
      {
        "name": "includeProjectDates",
        "schema": "boolean",
        "description": "include minimum and maximum start/end dates for projects"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCounts",
        "schema": "boolean",
        "description": "include project related counts"
      },
      {
        "name": "includeCompletedStatus",
        "schema": "boolean",
        "description": "optional to include completed projects when filtering by project statuses \"current,late\"."
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "hideObservedProjects",
        "schema": "boolean",
        "description": "hide projects where the logged-in user is just an observer",
        "default": "false"
      },
      {
        "name": "alwaysIncludeFiltering",
        "schema": "boolean",
        "description": "includes filters when project ids are provided"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "filter by projects that contain users associated with the team ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "select the columns to use in exports."
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "includeCustomFieldIds",
        "schema": "array",
        "description": "include specific custom fields"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include (not used when generating reports)"
      },
      {
        "name": "fields[workflows]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[stages]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectcategories]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectUpdates]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectBudgets]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioColumns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioCards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioBoards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[industries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[customfields]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[customfieldProjects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[countries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "featuresEnabled",
        "schema": "array",
        "description": "filter by projects that have features enabled"
      },
      {
        "name": "excludeTagIds",
        "schema": "array",
        "description": "exclude by project tag ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/reporting/precanned/health/projects.xlsx",
    "method": "generateProjectReportXlsx",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Generate project report in XLSX format",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "updated after"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by project name"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "project"
      },
      {
        "name": "reportTimezone",
        "schema": "string",
        "description": "Optional to configure the report dates displayed in a timezone"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "projectType",
        "schema": "string",
        "description": "filter by project type"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "name"
      },
      {
        "name": "notCompletedBefore",
        "schema": "string",
        "description": "filter by projects that have not been completed before the given date"
      },
      {
        "name": "minLastActivityDate",
        "schema": "string",
        "description": "filter by min last activity date"
      },
      {
        "name": "maxLastActivityDate",
        "schema": "string",
        "description": "filter by max last activity date"
      },
      {
        "name": "currencySymbol",
        "schema": "string",
        "description": "currency symbol for report export"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "filter by user id"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page (not used when generating reports)",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number (not used when generating reports)",
        "default": "1"
      },
      {
        "name": "orderByCustomFieldId",
        "schema": "integer",
        "description": "order by custom field id when orderBy is equal to customfield"
      },
      {
        "name": "minBudgetCapacityUsedPercent",
        "schema": "integer",
        "description": "filter by minimum budget capacity used"
      },
      {
        "name": "maxBudgetCapacityUsedPercent",
        "schema": "integer",
        "description": "filter by maximum budget capacity used"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "searchCompanies",
        "schema": "boolean",
        "description": "include companies in the search"
      },
      {
        "name": "searchByLetter",
        "schema": "boolean",
        "description": "search projects beginning with the search term character only when it contains a single character."
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyProjectsWithExplicitMembership",
        "schema": "boolean",
        "description": "only show projects with explicit membership",
        "default": "false"
      },
      {
        "name": "onlyProjectsThatCanLogTime",
        "schema": "boolean",
        "description": "can log time on projects",
        "default": "false"
      },
      {
        "name": "onlyArchivedProjects",
        "schema": "boolean",
        "description": "return only archived projects",
        "default": "false"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "matchAllExcludedTags",
        "schema": "boolean",
        "description": "match all excluded project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document",
        "default": "false"
      },
      {
        "name": "includeTentativeProjects",
        "schema": "boolean",
        "description": "include alongside normal projects, tentative ones"
      },
      {
        "name": "includeSubCategories",
        "schema": "boolean",
        "description": "include sub categories when filtering by ids"
      },
      {
        "name": "includeStats",
        "schema": "boolean",
        "description": "include project status counts for tasks columns billing events milestones"
      },
      {
        "name": "includeProjectUserInfo",
        "schema": "boolean",
        "description": "fetch user-specific data such as isStarred",
        "default": "false"
      },
      {
        "name": "includeProjectProfitability",
        "schema": "boolean",
        "description": "include project profitability in response"
      },
      {
        "name": "includeProjectDates",
        "schema": "boolean",
        "description": "include minimum and maximum start/end dates for projects"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCounts",
        "schema": "boolean",
        "description": "include project related counts"
      },
      {
        "name": "includeCompletedStatus",
        "schema": "boolean",
        "description": "optional to include completed projects when filtering by project statuses \"current,late\"."
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "hideObservedProjects",
        "schema": "boolean",
        "description": "hide projects where the logged-in user is just an observer",
        "default": "false"
      },
      {
        "name": "alwaysIncludeFiltering",
        "schema": "boolean",
        "description": "includes filters when project ids are provided"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "filter by projects that contain users associated with the team ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "select the columns to use in exports."
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "includeCustomFieldIds",
        "schema": "array",
        "description": "include specific custom fields"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include (not used when generating reports)"
      },
      {
        "name": "fields[workflows]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[stages]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectcategories]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectUpdates]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectBudgets]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioColumns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioCards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[portfolioBoards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[industries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[customfields]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[customfieldProjects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[countries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "featuresEnabled",
        "schema": "array",
        "description": "filter by projects that have features enabled"
      },
      {
        "name": "excludeTagIds",
        "schema": "array",
        "description": "exclude by project tag ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/reporting/precanned/plannedvsactual/milestones.csv",
    "method": "generateCsvReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Milestones",
    "typeScriptTag": "milestones",
    "description": "Generate milestone report in CSV format",
    "parameters": [
      {
        "name": "updatedAfterDate",
        "schema": "string",
        "description": "filter by updated after date (deprecated, use updatedAfter)"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by milestone name and description"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "agenda"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "date"
      },
      {
        "name": "dueBeforeDate",
        "schema": "string",
        "description": "filter by due before date (deprecated, use dueBefore)"
      },
      {
        "name": "dueBefore",
        "schema": "string",
        "description": "filter by due before date"
      },
      {
        "name": "dueAfterDate",
        "schema": "string",
        "description": "filter by due after date (deprecated, use dueAfter)"
      },
      {
        "name": "dueAfter",
        "schema": "string",
        "description": "filter by due after date"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "showPrivate",
        "schema": "boolean",
        "description": "show private milestones",
        "default": "true"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "showAttachedTasklists",
        "schema": "boolean",
        "description": "show attached tasklists"
      },
      {
        "name": "searchCompaniesTeams",
        "schema": "boolean",
        "description": "include companies and teams in the search term"
      },
      {
        "name": "searchAssignees",
        "schema": "boolean",
        "description": "include assignees in the search"
      },
      {
        "name": "progress",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists (deprecated, use includePercentageComplete)",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyMyProjects",
        "schema": "boolean",
        "description": "filter by projects that the logged-in user is related",
        "default": "false"
      },
      {
        "name": "onlyAdminProjects",
        "schema": "boolean",
        "description": "only include milestones from projects where the user is strictly a project admin.\nsite admins have visibility to all projects."
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all milestone tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeUpdate",
        "schema": "boolean",
        "description": "include milestones latest update action"
      },
      {
        "name": "includeToday",
        "schema": "boolean",
        "description": "include today when milestone status is upcoming",
        "default": "true"
      },
      {
        "name": "includeTeamUserIds",
        "schema": "boolean",
        "description": "include team users to the responsible party ids",
        "default": "true"
      },
      {
        "name": "includeTags",
        "schema": "boolean",
        "description": "include tags in the reports",
        "default": "true"
      },
      {
        "name": "includeProgress",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists (deprecated, use includePercentageComplete)",
        "default": "false"
      },
      {
        "name": "includePercentageComplete",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists",
        "default": "false"
      },
      {
        "name": "includeCompleted",
        "schema": "boolean",
        "description": "optional to include completed milestones"
      },
      {
        "name": "includeCompanyUserIds",
        "schema": "boolean",
        "description": "include company users to the responsible party ids",
        "default": "true"
      },
      {
        "name": "includeAssigneeTeams",
        "schema": "boolean",
        "description": "include teams related to the responsible user ids"
      },
      {
        "name": "includeAssigneeCompanies",
        "schema": "boolean",
        "description": "include companies related to the responsible user ids"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "emoji",
        "schema": "boolean",
        "description": "convert emoji alias to unicode",
        "default": "true"
      },
      {
        "name": "countUnreadComments",
        "schema": "boolean",
        "description": "count unread comments",
        "default": "false"
      },
      {
        "name": "calendar",
        "schema": "boolean",
        "description": "enables the calendar style layout",
        "default": "false"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by milestone tag ids"
      },
      {
        "name": "status",
        "schema": "array",
        "description": "filter by list of milestone status"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed."
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by list of project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by list of project health"
      },
      {
        "name": "projectHealth",
        "schema": "array",
        "description": "filter by list of project health (deprecated, use projectHealths)"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "followerIds",
        "schema": "array",
        "description": "filter by followers' ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "creatorIds",
        "schema": "array",
        "description": "filter by creators' ids"
      },
      {
        "name": "assignedToUserIds",
        "schema": "array",
        "description": "filter by assigned user ids"
      },
      {
        "name": "assignedToTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      },
      {
        "name": "assignedToCompanyIds",
        "schema": "array",
        "description": "filter by assigned company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/reporting/precanned/plannedvsactual/milestones.html",
    "method": "generateHtmlReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Milestones",
    "typeScriptTag": "milestones",
    "description": "Generate milestone report in HTML format",
    "parameters": [
      {
        "name": "updatedAfterDate",
        "schema": "string",
        "description": "filter by updated after date (deprecated, use updatedAfter)"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by milestone name and description"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "agenda"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "date"
      },
      {
        "name": "dueBeforeDate",
        "schema": "string",
        "description": "filter by due before date (deprecated, use dueBefore)"
      },
      {
        "name": "dueBefore",
        "schema": "string",
        "description": "filter by due before date"
      },
      {
        "name": "dueAfterDate",
        "schema": "string",
        "description": "filter by due after date (deprecated, use dueAfter)"
      },
      {
        "name": "dueAfter",
        "schema": "string",
        "description": "filter by due after date"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "showPrivate",
        "schema": "boolean",
        "description": "show private milestones",
        "default": "true"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "showAttachedTasklists",
        "schema": "boolean",
        "description": "show attached tasklists"
      },
      {
        "name": "searchCompaniesTeams",
        "schema": "boolean",
        "description": "include companies and teams in the search term"
      },
      {
        "name": "searchAssignees",
        "schema": "boolean",
        "description": "include assignees in the search"
      },
      {
        "name": "progress",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists (deprecated, use includePercentageComplete)",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyMyProjects",
        "schema": "boolean",
        "description": "filter by projects that the logged-in user is related",
        "default": "false"
      },
      {
        "name": "onlyAdminProjects",
        "schema": "boolean",
        "description": "only include milestones from projects where the user is strictly a project admin.\nsite admins have visibility to all projects."
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all milestone tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeUpdate",
        "schema": "boolean",
        "description": "include milestones latest update action"
      },
      {
        "name": "includeToday",
        "schema": "boolean",
        "description": "include today when milestone status is upcoming",
        "default": "true"
      },
      {
        "name": "includeTeamUserIds",
        "schema": "boolean",
        "description": "include team users to the responsible party ids",
        "default": "true"
      },
      {
        "name": "includeTags",
        "schema": "boolean",
        "description": "include tags in the reports",
        "default": "true"
      },
      {
        "name": "includeProgress",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists (deprecated, use includePercentageComplete)",
        "default": "false"
      },
      {
        "name": "includePercentageComplete",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists",
        "default": "false"
      },
      {
        "name": "includeCompleted",
        "schema": "boolean",
        "description": "optional to include completed milestones"
      },
      {
        "name": "includeCompanyUserIds",
        "schema": "boolean",
        "description": "include company users to the responsible party ids",
        "default": "true"
      },
      {
        "name": "includeAssigneeTeams",
        "schema": "boolean",
        "description": "include teams related to the responsible user ids"
      },
      {
        "name": "includeAssigneeCompanies",
        "schema": "boolean",
        "description": "include companies related to the responsible user ids"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "emoji",
        "schema": "boolean",
        "description": "convert emoji alias to unicode",
        "default": "true"
      },
      {
        "name": "countUnreadComments",
        "schema": "boolean",
        "description": "count unread comments",
        "default": "false"
      },
      {
        "name": "calendar",
        "schema": "boolean",
        "description": "enables the calendar style layout",
        "default": "false"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by milestone tag ids"
      },
      {
        "name": "status",
        "schema": "array",
        "description": "filter by list of milestone status"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed."
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by list of project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by list of project health"
      },
      {
        "name": "projectHealth",
        "schema": "array",
        "description": "filter by list of project health (deprecated, use projectHealths)"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "followerIds",
        "schema": "array",
        "description": "filter by followers' ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "creatorIds",
        "schema": "array",
        "description": "filter by creators' ids"
      },
      {
        "name": "assignedToUserIds",
        "schema": "array",
        "description": "filter by assigned user ids"
      },
      {
        "name": "assignedToTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      },
      {
        "name": "assignedToCompanyIds",
        "schema": "array",
        "description": "filter by assigned company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/reporting/precanned/plannedvsactual/milestones.pdf",
    "method": "generateMilestoneReportPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Milestones",
    "typeScriptTag": "milestones",
    "description": "Generate milestone report in PDF format",
    "parameters": [
      {
        "name": "updatedAfterDate",
        "schema": "string",
        "description": "filter by updated after date (deprecated, use updatedAfter)"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by milestone name and description"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "agenda"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "date"
      },
      {
        "name": "dueBeforeDate",
        "schema": "string",
        "description": "filter by due before date (deprecated, use dueBefore)"
      },
      {
        "name": "dueBefore",
        "schema": "string",
        "description": "filter by due before date"
      },
      {
        "name": "dueAfterDate",
        "schema": "string",
        "description": "filter by due after date (deprecated, use dueAfter)"
      },
      {
        "name": "dueAfter",
        "schema": "string",
        "description": "filter by due after date"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "showPrivate",
        "schema": "boolean",
        "description": "show private milestones",
        "default": "true"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "showAttachedTasklists",
        "schema": "boolean",
        "description": "show attached tasklists"
      },
      {
        "name": "searchCompaniesTeams",
        "schema": "boolean",
        "description": "include companies and teams in the search term"
      },
      {
        "name": "searchAssignees",
        "schema": "boolean",
        "description": "include assignees in the search"
      },
      {
        "name": "progress",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists (deprecated, use includePercentageComplete)",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyMyProjects",
        "schema": "boolean",
        "description": "filter by projects that the logged-in user is related",
        "default": "false"
      },
      {
        "name": "onlyAdminProjects",
        "schema": "boolean",
        "description": "only include milestones from projects where the user is strictly a project admin.\nsite admins have visibility to all projects."
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all milestone tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeUpdate",
        "schema": "boolean",
        "description": "include milestones latest update action"
      },
      {
        "name": "includeToday",
        "schema": "boolean",
        "description": "include today when milestone status is upcoming",
        "default": "true"
      },
      {
        "name": "includeTeamUserIds",
        "schema": "boolean",
        "description": "include team users to the responsible party ids",
        "default": "true"
      },
      {
        "name": "includeTags",
        "schema": "boolean",
        "description": "include tags in the reports",
        "default": "true"
      },
      {
        "name": "includeProgress",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists (deprecated, use includePercentageComplete)",
        "default": "false"
      },
      {
        "name": "includePercentageComplete",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists",
        "default": "false"
      },
      {
        "name": "includeCompleted",
        "schema": "boolean",
        "description": "optional to include completed milestones"
      },
      {
        "name": "includeCompanyUserIds",
        "schema": "boolean",
        "description": "include company users to the responsible party ids",
        "default": "true"
      },
      {
        "name": "includeAssigneeTeams",
        "schema": "boolean",
        "description": "include teams related to the responsible user ids"
      },
      {
        "name": "includeAssigneeCompanies",
        "schema": "boolean",
        "description": "include companies related to the responsible user ids"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "emoji",
        "schema": "boolean",
        "description": "convert emoji alias to unicode",
        "default": "true"
      },
      {
        "name": "countUnreadComments",
        "schema": "boolean",
        "description": "count unread comments",
        "default": "false"
      },
      {
        "name": "calendar",
        "schema": "boolean",
        "description": "enables the calendar style layout",
        "default": "false"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by milestone tag ids"
      },
      {
        "name": "status",
        "schema": "array",
        "description": "filter by list of milestone status"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed."
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by list of project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by list of project health"
      },
      {
        "name": "projectHealth",
        "schema": "array",
        "description": "filter by list of project health (deprecated, use projectHealths)"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "followerIds",
        "schema": "array",
        "description": "filter by followers' ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "creatorIds",
        "schema": "array",
        "description": "filter by creators' ids"
      },
      {
        "name": "assignedToUserIds",
        "schema": "array",
        "description": "filter by assigned user ids"
      },
      {
        "name": "assignedToTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      },
      {
        "name": "assignedToCompanyIds",
        "schema": "array",
        "description": "filter by assigned company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/reporting/precanned/plannedvsactual/milestones.xlsx",
    "method": "generateXlsxReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Milestones",
    "typeScriptTag": "milestones",
    "description": "Generate milestone report in XLSX format",
    "parameters": [
      {
        "name": "updatedAfterDate",
        "schema": "string",
        "description": "filter by updated after date (deprecated, use updatedAfter)"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by milestone name and description"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "agenda"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "date"
      },
      {
        "name": "dueBeforeDate",
        "schema": "string",
        "description": "filter by due before date (deprecated, use dueBefore)"
      },
      {
        "name": "dueBefore",
        "schema": "string",
        "description": "filter by due before date"
      },
      {
        "name": "dueAfterDate",
        "schema": "string",
        "description": "filter by due after date (deprecated, use dueAfter)"
      },
      {
        "name": "dueAfter",
        "schema": "string",
        "description": "filter by due after date"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "showPrivate",
        "schema": "boolean",
        "description": "show private milestones",
        "default": "true"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "showAttachedTasklists",
        "schema": "boolean",
        "description": "show attached tasklists"
      },
      {
        "name": "searchCompaniesTeams",
        "schema": "boolean",
        "description": "include companies and teams in the search term"
      },
      {
        "name": "searchAssignees",
        "schema": "boolean",
        "description": "include assignees in the search"
      },
      {
        "name": "progress",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists (deprecated, use includePercentageComplete)",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyMyProjects",
        "schema": "boolean",
        "description": "filter by projects that the logged-in user is related",
        "default": "false"
      },
      {
        "name": "onlyAdminProjects",
        "schema": "boolean",
        "description": "only include milestones from projects where the user is strictly a project admin.\nsite admins have visibility to all projects."
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all milestone tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeUpdate",
        "schema": "boolean",
        "description": "include milestones latest update action"
      },
      {
        "name": "includeToday",
        "schema": "boolean",
        "description": "include today when milestone status is upcoming",
        "default": "true"
      },
      {
        "name": "includeTeamUserIds",
        "schema": "boolean",
        "description": "include team users to the responsible party ids",
        "default": "true"
      },
      {
        "name": "includeTags",
        "schema": "boolean",
        "description": "include tags in the reports",
        "default": "true"
      },
      {
        "name": "includeProgress",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists (deprecated, use includePercentageComplete)",
        "default": "false"
      },
      {
        "name": "includePercentageComplete",
        "schema": "boolean",
        "description": "include percentage of tasks completed for all linked tasklists",
        "default": "false"
      },
      {
        "name": "includeCompleted",
        "schema": "boolean",
        "description": "optional to include completed milestones"
      },
      {
        "name": "includeCompanyUserIds",
        "schema": "boolean",
        "description": "include company users to the responsible party ids",
        "default": "true"
      },
      {
        "name": "includeAssigneeTeams",
        "schema": "boolean",
        "description": "include teams related to the responsible user ids"
      },
      {
        "name": "includeAssigneeCompanies",
        "schema": "boolean",
        "description": "include companies related to the responsible user ids"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "emoji",
        "schema": "boolean",
        "description": "convert emoji alias to unicode",
        "default": "true"
      },
      {
        "name": "countUnreadComments",
        "schema": "boolean",
        "description": "count unread comments",
        "default": "false"
      },
      {
        "name": "calendar",
        "schema": "boolean",
        "description": "enables the calendar style layout",
        "default": "false"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by milestone tag ids"
      },
      {
        "name": "status",
        "schema": "array",
        "description": "filter by list of milestone status"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed."
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by list of project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by list of project health"
      },
      {
        "name": "projectHealth",
        "schema": "array",
        "description": "filter by list of project health (deprecated, use projectHealths)"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "followerIds",
        "schema": "array",
        "description": "filter by followers' ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "creatorIds",
        "schema": "array",
        "description": "filter by creators' ids"
      },
      {
        "name": "assignedToUserIds",
        "schema": "array",
        "description": "filter by assigned user ids"
      },
      {
        "name": "assignedToTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      },
      {
        "name": "assignedToCompanyIds",
        "schema": "array",
        "description": "filter by assigned company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/reporting/precanned/plannedvsactual/tasks.csv",
    "method": "generatePlannedVsActualReportCsv",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Generate plannedvsactual report in CSV format",
    "parameters": [
      {
        "name": "updatedBefore",
        "schema": "string",
        "description": "filter by updated before date"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "today",
        "schema": "string",
        "description": "filter by today"
      },
      {
        "name": "taskFilter",
        "schema": "string",
        "description": "filter by a taskFilter"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter on start date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by search term"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "task"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "priority",
        "schema": "string",
        "description": "filter by task priority"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "duedate"
      },
      {
        "name": "notCompletedBefore",
        "schema": "string",
        "description": "filter by projects that have not been completed before the given date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter on end date"
      },
      {
        "name": "dueBefore",
        "schema": "string",
        "description": "filter before a due date"
      },
      {
        "name": "dueAfter",
        "schema": "string",
        "description": "filter after a due date"
      },
      {
        "name": "deletedAfter",
        "schema": "string",
        "description": "filter on deleted after date"
      },
      {
        "name": "createdFilter",
        "schema": "string",
        "description": "filter by created filter"
      },
      {
        "name": "createdDateCode",
        "schema": "string",
        "description": "filter by created date code"
      },
      {
        "name": "createdBefore",
        "schema": "string",
        "description": "filter by created before date"
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "filter by created after date"
      },
      {
        "name": "completedBefore",
        "schema": "string",
        "description": "filter by completed before date"
      },
      {
        "name": "completedAfter",
        "schema": "string",
        "description": "filter by completed after date"
      },
      {
        "name": "updatedByUserId",
        "schema": "integer",
        "description": "filter by updated user id"
      },
      {
        "name": "parentTaskId",
        "schema": "integer",
        "description": "filter by parent task ids"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "orderByCustomFieldId",
        "schema": "integer",
        "description": "order by custom field id when orderBy is equal to customfield"
      },
      {
        "name": "includeTaskId",
        "schema": "integer",
        "description": "include task id"
      },
      {
        "name": "filterId",
        "schema": "integer",
        "description": "provide a user saved filter ID"
      },
      {
        "name": "completedByUserId",
        "schema": "integer",
        "description": "filter by completed user id"
      },
      {
        "name": "useStartDatesForTodaysTasks",
        "schema": "boolean",
        "description": "use start dates for todays tasks"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "useAllProjects",
        "schema": "boolean",
        "description": "filter on all projects"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "showCompletedLists",
        "schema": "boolean",
        "description": "include tasks from completed lists"
      },
      {
        "name": "searchCompaniesTeams",
        "schema": "boolean",
        "description": "include companies and teams in the search term"
      },
      {
        "name": "searchAssignees",
        "schema": "boolean",
        "description": "include assignees in the search"
      },
      {
        "name": "onlyUntaggedTasks",
        "schema": "boolean",
        "description": "only untagged tasks"
      },
      {
        "name": "onlyUnplanned",
        "schema": "boolean",
        "description": "only return tasks that are unplanned. Not assigned, no due date or\nmissing estimated time.",
        "default": "false"
      },
      {
        "name": "onlyTasksWithUnreadComments",
        "schema": "boolean",
        "description": "filter by only tasks with unread comments"
      },
      {
        "name": "onlyTasksWithTickets",
        "schema": "boolean",
        "description": "filter by only tasks with tickets"
      },
      {
        "name": "onlyTasksWithEstimatedTime",
        "schema": "boolean",
        "description": "only return tasks with estimated time"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyAdminProjects",
        "schema": "boolean",
        "description": "only include tasks from projects where the user is strictly a project admin.\nsite admins have visibility to all projects."
      },
      {
        "name": "nestSubTasks",
        "schema": "boolean",
        "description": "nest sub tasks"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "matchAllExcludedTags",
        "schema": "boolean",
        "description": "match all exclude tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report export.",
        "default": "false"
      },
      {
        "name": "includeUpdate",
        "schema": "boolean",
        "description": "include tasks latest update action"
      },
      {
        "name": "includeUntaggedTasks",
        "schema": "boolean",
        "description": "include untagged tasks"
      },
      {
        "name": "includeTomorrow",
        "schema": "boolean",
        "description": "filter by include tomorrow"
      },
      {
        "name": "includeToday",
        "schema": "boolean",
        "description": "filter by include today"
      },
      {
        "name": "includeTeamUserIds",
        "schema": "boolean",
        "description": "include members of the given teams"
      },
      {
        "name": "includeTasksWithoutDueDates",
        "schema": "boolean",
        "description": "include tasks without due dates"
      },
      {
        "name": "includeTasksWithCards",
        "schema": "boolean",
        "description": "include tasks with cards",
        "default": "true"
      },
      {
        "name": "includeTasksFromDeletedLists",
        "schema": "boolean",
        "description": "include tasks from deleted lists"
      },
      {
        "name": "includeRelatedTasks",
        "schema": "boolean",
        "description": "include ids of completed and active subtasks, dependencies, predecessors"
      },
      {
        "name": "includePrivateItems",
        "schema": "boolean",
        "description": "include private items"
      },
      {
        "name": "includeOverdueTasks",
        "schema": "boolean",
        "description": "include overdue tasks"
      },
      {
        "name": "includeOriginalDueDate",
        "schema": "boolean",
        "description": "include original due date of a task"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCompletedTasks",
        "schema": "boolean",
        "description": "include completed tasks"
      },
      {
        "name": "includeCompanyUserIds",
        "schema": "boolean",
        "description": "include members of the given companies"
      },
      {
        "name": "includeCommentStats",
        "schema": "boolean",
        "description": "include number of unread and read comments for each task",
        "default": "false"
      },
      {
        "name": "includeBlocked",
        "schema": "boolean",
        "description": "filter by include blocked"
      },
      {
        "name": "includeAttachmentCommentStats",
        "schema": "boolean",
        "description": "include number of unread and read comments for each file attachment",
        "default": "false"
      },
      {
        "name": "includeAssigneeTeams",
        "schema": "boolean",
        "description": "include teams related to the responsible user ids"
      },
      {
        "name": "includeAssigneeCompanies",
        "schema": "boolean",
        "description": "include companies related to the responsible user ids"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "includeAllComments",
        "schema": "boolean",
        "description": "include all comments"
      },
      {
        "name": "groupByTasklist",
        "schema": "boolean",
        "description": "group by tasklist"
      },
      {
        "name": "groupByTaskgroup",
        "schema": "boolean",
        "description": "group by taskgroup"
      },
      {
        "name": "getSubTasks",
        "schema": "boolean",
        "description": "get sub tasks"
      },
      {
        "name": "getFiles",
        "schema": "boolean",
        "description": "get files"
      },
      {
        "name": "fallbackToMilestoneDueDate",
        "schema": "boolean",
        "description": "set due date as milestone due date if due date is null and there's a related milestone"
      },
      {
        "name": "extractTemplateRoleName",
        "schema": "boolean",
        "description": "For tasks created in a project template it's possible to assign a role instead of people, companies or teams.\nThis role is then stored with the task name as a prefix. When this flag is enabled it will extract the role name\nand return it inside a special field."
      },
      {
        "name": "excludeAssigneeNotOnProjectTeams",
        "schema": "boolean",
        "description": "exclude assignee not on project teams"
      },
      {
        "name": "completedOnly",
        "schema": "boolean",
        "description": "only completed tasks",
        "default": "false"
      },
      {
        "name": "checkForReminders",
        "schema": "boolean",
        "description": "check if task has reminders"
      },
      {
        "name": "allowAssigneesOutsideProject",
        "schema": "boolean",
        "description": "when filtering by assigned or unassagned tasks, include assignees that\nare not in the project.",
        "default": "true"
      },
      {
        "name": "tasksSelectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed for tasks report"
      },
      {
        "name": "tasklistIds",
        "schema": "array",
        "description": "filter by tasklist ids"
      },
      {
        "name": "taskgroupIds",
        "schema": "array",
        "description": "filter by taskgroup ids"
      },
      {
        "name": "taskIncludedSet",
        "schema": "array",
        "description": "filter by task included set"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "filter by tag values"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "status",
        "schema": "array",
        "description": "filter by list of task status"
      },
      {
        "name": "skipCrmDealIds",
        "schema": "array",
        "description": "skip crm deal ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed for planned vs actual."
      },
      {
        "name": "responsiblePartyIds",
        "schema": "array",
        "description": "filter by responsible party ids"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectFeaturesEnabled",
        "schema": "array",
        "description": "filter by projects that have features enabled"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "includeCustomFieldIds",
        "schema": "array",
        "description": "include specific custom fields"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by task ids"
      },
      {
        "name": "followedByUserIds",
        "schema": "array",
        "description": "filter by followed by user ids"
      },
      {
        "name": "filterBoardColumnIds",
        "schema": "array",
        "description": "filter by board column ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[timers]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[taskgroups]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[taskSequences]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[lockdowns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[files]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[comments]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[columns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[cards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectPermissions]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "expandedIds",
        "schema": "array",
        "description": "the ids of the expanded tasks"
      },
      {
        "name": "excludeTagIds",
        "schema": "array",
        "description": "filter by excluded tag ids"
      },
      {
        "name": "crmDealIds",
        "schema": "array",
        "description": "filter by crm deal ids"
      },
      {
        "name": "createdByUserIds",
        "schema": "array",
        "description": "filter by creator user ids"
      },
      {
        "name": "assigneeTeamIds",
        "schema": "array",
        "description": "filter by assignee team ids"
      },
      {
        "name": "assigneeCompanyIds",
        "schema": "array",
        "description": "filter by assignee company ids"
      },
      {
        "name": "customFields",
        "schema": "array",
        "description": "filter by custom fields"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/reporting/precanned/plannedvsactual/tasks.html",
    "method": "generatePlannedVsActualReportHtml",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Generate plannedvsactual report in HTML format",
    "parameters": [
      {
        "name": "updatedBefore",
        "schema": "string",
        "description": "filter by updated before date"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "today",
        "schema": "string",
        "description": "filter by today"
      },
      {
        "name": "taskFilter",
        "schema": "string",
        "description": "filter by a taskFilter"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter on start date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by search term"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "task"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "priority",
        "schema": "string",
        "description": "filter by task priority"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "duedate"
      },
      {
        "name": "notCompletedBefore",
        "schema": "string",
        "description": "filter by projects that have not been completed before the given date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter on end date"
      },
      {
        "name": "dueBefore",
        "schema": "string",
        "description": "filter before a due date"
      },
      {
        "name": "dueAfter",
        "schema": "string",
        "description": "filter after a due date"
      },
      {
        "name": "deletedAfter",
        "schema": "string",
        "description": "filter on deleted after date"
      },
      {
        "name": "createdFilter",
        "schema": "string",
        "description": "filter by created filter"
      },
      {
        "name": "createdDateCode",
        "schema": "string",
        "description": "filter by created date code"
      },
      {
        "name": "createdBefore",
        "schema": "string",
        "description": "filter by created before date"
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "filter by created after date"
      },
      {
        "name": "completedBefore",
        "schema": "string",
        "description": "filter by completed before date"
      },
      {
        "name": "completedAfter",
        "schema": "string",
        "description": "filter by completed after date"
      },
      {
        "name": "updatedByUserId",
        "schema": "integer",
        "description": "filter by updated user id"
      },
      {
        "name": "parentTaskId",
        "schema": "integer",
        "description": "filter by parent task ids"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "orderByCustomFieldId",
        "schema": "integer",
        "description": "order by custom field id when orderBy is equal to customfield"
      },
      {
        "name": "includeTaskId",
        "schema": "integer",
        "description": "include task id"
      },
      {
        "name": "filterId",
        "schema": "integer",
        "description": "provide a user saved filter ID"
      },
      {
        "name": "completedByUserId",
        "schema": "integer",
        "description": "filter by completed user id"
      },
      {
        "name": "useStartDatesForTodaysTasks",
        "schema": "boolean",
        "description": "use start dates for todays tasks"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "useAllProjects",
        "schema": "boolean",
        "description": "filter on all projects"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "showCompletedLists",
        "schema": "boolean",
        "description": "include tasks from completed lists"
      },
      {
        "name": "searchCompaniesTeams",
        "schema": "boolean",
        "description": "include companies and teams in the search term"
      },
      {
        "name": "searchAssignees",
        "schema": "boolean",
        "description": "include assignees in the search"
      },
      {
        "name": "onlyUntaggedTasks",
        "schema": "boolean",
        "description": "only untagged tasks"
      },
      {
        "name": "onlyUnplanned",
        "schema": "boolean",
        "description": "only return tasks that are unplanned. Not assigned, no due date or\nmissing estimated time.",
        "default": "false"
      },
      {
        "name": "onlyTasksWithUnreadComments",
        "schema": "boolean",
        "description": "filter by only tasks with unread comments"
      },
      {
        "name": "onlyTasksWithTickets",
        "schema": "boolean",
        "description": "filter by only tasks with tickets"
      },
      {
        "name": "onlyTasksWithEstimatedTime",
        "schema": "boolean",
        "description": "only return tasks with estimated time"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyAdminProjects",
        "schema": "boolean",
        "description": "only include tasks from projects where the user is strictly a project admin.\nsite admins have visibility to all projects."
      },
      {
        "name": "nestSubTasks",
        "schema": "boolean",
        "description": "nest sub tasks"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "matchAllExcludedTags",
        "schema": "boolean",
        "description": "match all exclude tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report export.",
        "default": "false"
      },
      {
        "name": "includeUpdate",
        "schema": "boolean",
        "description": "include tasks latest update action"
      },
      {
        "name": "includeUntaggedTasks",
        "schema": "boolean",
        "description": "include untagged tasks"
      },
      {
        "name": "includeTomorrow",
        "schema": "boolean",
        "description": "filter by include tomorrow"
      },
      {
        "name": "includeToday",
        "schema": "boolean",
        "description": "filter by include today"
      },
      {
        "name": "includeTeamUserIds",
        "schema": "boolean",
        "description": "include members of the given teams"
      },
      {
        "name": "includeTasksWithoutDueDates",
        "schema": "boolean",
        "description": "include tasks without due dates"
      },
      {
        "name": "includeTasksWithCards",
        "schema": "boolean",
        "description": "include tasks with cards",
        "default": "true"
      },
      {
        "name": "includeTasksFromDeletedLists",
        "schema": "boolean",
        "description": "include tasks from deleted lists"
      },
      {
        "name": "includeRelatedTasks",
        "schema": "boolean",
        "description": "include ids of completed and active subtasks, dependencies, predecessors"
      },
      {
        "name": "includePrivateItems",
        "schema": "boolean",
        "description": "include private items"
      },
      {
        "name": "includeOverdueTasks",
        "schema": "boolean",
        "description": "include overdue tasks"
      },
      {
        "name": "includeOriginalDueDate",
        "schema": "boolean",
        "description": "include original due date of a task"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCompletedTasks",
        "schema": "boolean",
        "description": "include completed tasks"
      },
      {
        "name": "includeCompanyUserIds",
        "schema": "boolean",
        "description": "include members of the given companies"
      },
      {
        "name": "includeCommentStats",
        "schema": "boolean",
        "description": "include number of unread and read comments for each task",
        "default": "false"
      },
      {
        "name": "includeBlocked",
        "schema": "boolean",
        "description": "filter by include blocked"
      },
      {
        "name": "includeAttachmentCommentStats",
        "schema": "boolean",
        "description": "include number of unread and read comments for each file attachment",
        "default": "false"
      },
      {
        "name": "includeAssigneeTeams",
        "schema": "boolean",
        "description": "include teams related to the responsible user ids"
      },
      {
        "name": "includeAssigneeCompanies",
        "schema": "boolean",
        "description": "include companies related to the responsible user ids"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "includeAllComments",
        "schema": "boolean",
        "description": "include all comments"
      },
      {
        "name": "groupByTasklist",
        "schema": "boolean",
        "description": "group by tasklist"
      },
      {
        "name": "groupByTaskgroup",
        "schema": "boolean",
        "description": "group by taskgroup"
      },
      {
        "name": "getSubTasks",
        "schema": "boolean",
        "description": "get sub tasks"
      },
      {
        "name": "getFiles",
        "schema": "boolean",
        "description": "get files"
      },
      {
        "name": "fallbackToMilestoneDueDate",
        "schema": "boolean",
        "description": "set due date as milestone due date if due date is null and there's a related milestone"
      },
      {
        "name": "extractTemplateRoleName",
        "schema": "boolean",
        "description": "For tasks created in a project template it's possible to assign a role instead of people, companies or teams.\nThis role is then stored with the task name as a prefix. When this flag is enabled it will extract the role name\nand return it inside a special field."
      },
      {
        "name": "excludeAssigneeNotOnProjectTeams",
        "schema": "boolean",
        "description": "exclude assignee not on project teams"
      },
      {
        "name": "completedOnly",
        "schema": "boolean",
        "description": "only completed tasks",
        "default": "false"
      },
      {
        "name": "checkForReminders",
        "schema": "boolean",
        "description": "check if task has reminders"
      },
      {
        "name": "allowAssigneesOutsideProject",
        "schema": "boolean",
        "description": "when filtering by assigned or unassagned tasks, include assignees that\nare not in the project.",
        "default": "true"
      },
      {
        "name": "tasksSelectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed for tasks report"
      },
      {
        "name": "tasklistIds",
        "schema": "array",
        "description": "filter by tasklist ids"
      },
      {
        "name": "taskgroupIds",
        "schema": "array",
        "description": "filter by taskgroup ids"
      },
      {
        "name": "taskIncludedSet",
        "schema": "array",
        "description": "filter by task included set"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "filter by tag values"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "status",
        "schema": "array",
        "description": "filter by list of task status"
      },
      {
        "name": "skipCrmDealIds",
        "schema": "array",
        "description": "skip crm deal ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed for planned vs actual."
      },
      {
        "name": "responsiblePartyIds",
        "schema": "array",
        "description": "filter by responsible party ids"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectFeaturesEnabled",
        "schema": "array",
        "description": "filter by projects that have features enabled"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "includeCustomFieldIds",
        "schema": "array",
        "description": "include specific custom fields"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by task ids"
      },
      {
        "name": "followedByUserIds",
        "schema": "array",
        "description": "filter by followed by user ids"
      },
      {
        "name": "filterBoardColumnIds",
        "schema": "array",
        "description": "filter by board column ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[timers]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[taskgroups]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[taskSequences]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[lockdowns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[files]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[comments]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[columns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[cards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectPermissions]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "expandedIds",
        "schema": "array",
        "description": "the ids of the expanded tasks"
      },
      {
        "name": "excludeTagIds",
        "schema": "array",
        "description": "filter by excluded tag ids"
      },
      {
        "name": "crmDealIds",
        "schema": "array",
        "description": "filter by crm deal ids"
      },
      {
        "name": "createdByUserIds",
        "schema": "array",
        "description": "filter by creator user ids"
      },
      {
        "name": "assigneeTeamIds",
        "schema": "array",
        "description": "filter by assignee team ids"
      },
      {
        "name": "assigneeCompanyIds",
        "schema": "array",
        "description": "filter by assignee company ids"
      },
      {
        "name": "customFields",
        "schema": "array",
        "description": "filter by custom fields"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/reporting/precanned/plannedvsactual/tasks.pdf",
    "method": "generatePlannedVsActualPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Generate plannedvsactual report in PDF format",
    "parameters": [
      {
        "name": "updatedBefore",
        "schema": "string",
        "description": "filter by updated before date"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "today",
        "schema": "string",
        "description": "filter by today"
      },
      {
        "name": "taskFilter",
        "schema": "string",
        "description": "filter by a taskFilter"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter on start date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by search term"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "task"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "priority",
        "schema": "string",
        "description": "filter by task priority"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "duedate"
      },
      {
        "name": "notCompletedBefore",
        "schema": "string",
        "description": "filter by projects that have not been completed before the given date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter on end date"
      },
      {
        "name": "dueBefore",
        "schema": "string",
        "description": "filter before a due date"
      },
      {
        "name": "dueAfter",
        "schema": "string",
        "description": "filter after a due date"
      },
      {
        "name": "deletedAfter",
        "schema": "string",
        "description": "filter on deleted after date"
      },
      {
        "name": "createdFilter",
        "schema": "string",
        "description": "filter by created filter"
      },
      {
        "name": "createdDateCode",
        "schema": "string",
        "description": "filter by created date code"
      },
      {
        "name": "createdBefore",
        "schema": "string",
        "description": "filter by created before date"
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "filter by created after date"
      },
      {
        "name": "completedBefore",
        "schema": "string",
        "description": "filter by completed before date"
      },
      {
        "name": "completedAfter",
        "schema": "string",
        "description": "filter by completed after date"
      },
      {
        "name": "updatedByUserId",
        "schema": "integer",
        "description": "filter by updated user id"
      },
      {
        "name": "parentTaskId",
        "schema": "integer",
        "description": "filter by parent task ids"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "orderByCustomFieldId",
        "schema": "integer",
        "description": "order by custom field id when orderBy is equal to customfield"
      },
      {
        "name": "includeTaskId",
        "schema": "integer",
        "description": "include task id"
      },
      {
        "name": "filterId",
        "schema": "integer",
        "description": "provide a user saved filter ID"
      },
      {
        "name": "completedByUserId",
        "schema": "integer",
        "description": "filter by completed user id"
      },
      {
        "name": "useStartDatesForTodaysTasks",
        "schema": "boolean",
        "description": "use start dates for todays tasks"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "useAllProjects",
        "schema": "boolean",
        "description": "filter on all projects"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "showCompletedLists",
        "schema": "boolean",
        "description": "include tasks from completed lists"
      },
      {
        "name": "searchCompaniesTeams",
        "schema": "boolean",
        "description": "include companies and teams in the search term"
      },
      {
        "name": "searchAssignees",
        "schema": "boolean",
        "description": "include assignees in the search"
      },
      {
        "name": "onlyUntaggedTasks",
        "schema": "boolean",
        "description": "only untagged tasks"
      },
      {
        "name": "onlyUnplanned",
        "schema": "boolean",
        "description": "only return tasks that are unplanned. Not assigned, no due date or\nmissing estimated time.",
        "default": "false"
      },
      {
        "name": "onlyTasksWithUnreadComments",
        "schema": "boolean",
        "description": "filter by only tasks with unread comments"
      },
      {
        "name": "onlyTasksWithTickets",
        "schema": "boolean",
        "description": "filter by only tasks with tickets"
      },
      {
        "name": "onlyTasksWithEstimatedTime",
        "schema": "boolean",
        "description": "only return tasks with estimated time"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyAdminProjects",
        "schema": "boolean",
        "description": "only include tasks from projects where the user is strictly a project admin.\nsite admins have visibility to all projects."
      },
      {
        "name": "nestSubTasks",
        "schema": "boolean",
        "description": "nest sub tasks"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "matchAllExcludedTags",
        "schema": "boolean",
        "description": "match all exclude tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report export.",
        "default": "false"
      },
      {
        "name": "includeUpdate",
        "schema": "boolean",
        "description": "include tasks latest update action"
      },
      {
        "name": "includeUntaggedTasks",
        "schema": "boolean",
        "description": "include untagged tasks"
      },
      {
        "name": "includeTomorrow",
        "schema": "boolean",
        "description": "filter by include tomorrow"
      },
      {
        "name": "includeToday",
        "schema": "boolean",
        "description": "filter by include today"
      },
      {
        "name": "includeTeamUserIds",
        "schema": "boolean",
        "description": "include members of the given teams"
      },
      {
        "name": "includeTasksWithoutDueDates",
        "schema": "boolean",
        "description": "include tasks without due dates"
      },
      {
        "name": "includeTasksWithCards",
        "schema": "boolean",
        "description": "include tasks with cards",
        "default": "true"
      },
      {
        "name": "includeTasksFromDeletedLists",
        "schema": "boolean",
        "description": "include tasks from deleted lists"
      },
      {
        "name": "includeRelatedTasks",
        "schema": "boolean",
        "description": "include ids of completed and active subtasks, dependencies, predecessors"
      },
      {
        "name": "includePrivateItems",
        "schema": "boolean",
        "description": "include private items"
      },
      {
        "name": "includeOverdueTasks",
        "schema": "boolean",
        "description": "include overdue tasks"
      },
      {
        "name": "includeOriginalDueDate",
        "schema": "boolean",
        "description": "include original due date of a task"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCompletedTasks",
        "schema": "boolean",
        "description": "include completed tasks"
      },
      {
        "name": "includeCompanyUserIds",
        "schema": "boolean",
        "description": "include members of the given companies"
      },
      {
        "name": "includeCommentStats",
        "schema": "boolean",
        "description": "include number of unread and read comments for each task",
        "default": "false"
      },
      {
        "name": "includeBlocked",
        "schema": "boolean",
        "description": "filter by include blocked"
      },
      {
        "name": "includeAttachmentCommentStats",
        "schema": "boolean",
        "description": "include number of unread and read comments for each file attachment",
        "default": "false"
      },
      {
        "name": "includeAssigneeTeams",
        "schema": "boolean",
        "description": "include teams related to the responsible user ids"
      },
      {
        "name": "includeAssigneeCompanies",
        "schema": "boolean",
        "description": "include companies related to the responsible user ids"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "includeAllComments",
        "schema": "boolean",
        "description": "include all comments"
      },
      {
        "name": "groupByTasklist",
        "schema": "boolean",
        "description": "group by tasklist"
      },
      {
        "name": "groupByTaskgroup",
        "schema": "boolean",
        "description": "group by taskgroup"
      },
      {
        "name": "getSubTasks",
        "schema": "boolean",
        "description": "get sub tasks"
      },
      {
        "name": "getFiles",
        "schema": "boolean",
        "description": "get files"
      },
      {
        "name": "fallbackToMilestoneDueDate",
        "schema": "boolean",
        "description": "set due date as milestone due date if due date is null and there's a related milestone"
      },
      {
        "name": "extractTemplateRoleName",
        "schema": "boolean",
        "description": "For tasks created in a project template it's possible to assign a role instead of people, companies or teams.\nThis role is then stored with the task name as a prefix. When this flag is enabled it will extract the role name\nand return it inside a special field."
      },
      {
        "name": "excludeAssigneeNotOnProjectTeams",
        "schema": "boolean",
        "description": "exclude assignee not on project teams"
      },
      {
        "name": "completedOnly",
        "schema": "boolean",
        "description": "only completed tasks",
        "default": "false"
      },
      {
        "name": "checkForReminders",
        "schema": "boolean",
        "description": "check if task has reminders"
      },
      {
        "name": "allowAssigneesOutsideProject",
        "schema": "boolean",
        "description": "when filtering by assigned or unassagned tasks, include assignees that\nare not in the project.",
        "default": "true"
      },
      {
        "name": "tasksSelectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed for tasks report"
      },
      {
        "name": "tasklistIds",
        "schema": "array",
        "description": "filter by tasklist ids"
      },
      {
        "name": "taskgroupIds",
        "schema": "array",
        "description": "filter by taskgroup ids"
      },
      {
        "name": "taskIncludedSet",
        "schema": "array",
        "description": "filter by task included set"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "filter by tag values"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "status",
        "schema": "array",
        "description": "filter by list of task status"
      },
      {
        "name": "skipCrmDealIds",
        "schema": "array",
        "description": "skip crm deal ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed for planned vs actual."
      },
      {
        "name": "responsiblePartyIds",
        "schema": "array",
        "description": "filter by responsible party ids"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectFeaturesEnabled",
        "schema": "array",
        "description": "filter by projects that have features enabled"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "includeCustomFieldIds",
        "schema": "array",
        "description": "include specific custom fields"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by task ids"
      },
      {
        "name": "followedByUserIds",
        "schema": "array",
        "description": "filter by followed by user ids"
      },
      {
        "name": "filterBoardColumnIds",
        "schema": "array",
        "description": "filter by board column ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[timers]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[taskgroups]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[taskSequences]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[lockdowns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[files]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[comments]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[columns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[cards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectPermissions]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "expandedIds",
        "schema": "array",
        "description": "the ids of the expanded tasks"
      },
      {
        "name": "excludeTagIds",
        "schema": "array",
        "description": "filter by excluded tag ids"
      },
      {
        "name": "crmDealIds",
        "schema": "array",
        "description": "filter by crm deal ids"
      },
      {
        "name": "createdByUserIds",
        "schema": "array",
        "description": "filter by creator user ids"
      },
      {
        "name": "assigneeTeamIds",
        "schema": "array",
        "description": "filter by assignee team ids"
      },
      {
        "name": "assigneeCompanyIds",
        "schema": "array",
        "description": "filter by assignee company ids"
      },
      {
        "name": "customFields",
        "schema": "array",
        "description": "filter by custom fields"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/reporting/precanned/plannedvsactual/tasks.xlsx",
    "method": "generatePlannedVsActualXlsx",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Generate plannedvsactual report in XLSX format",
    "parameters": [
      {
        "name": "updatedBefore",
        "schema": "string",
        "description": "filter by updated before date"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "today",
        "schema": "string",
        "description": "filter by today"
      },
      {
        "name": "taskFilter",
        "schema": "string",
        "description": "filter by a taskFilter"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter on start date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by search term"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "task"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "priority",
        "schema": "string",
        "description": "filter by task priority"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "duedate"
      },
      {
        "name": "notCompletedBefore",
        "schema": "string",
        "description": "filter by projects that have not been completed before the given date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter on end date"
      },
      {
        "name": "dueBefore",
        "schema": "string",
        "description": "filter before a due date"
      },
      {
        "name": "dueAfter",
        "schema": "string",
        "description": "filter after a due date"
      },
      {
        "name": "deletedAfter",
        "schema": "string",
        "description": "filter on deleted after date"
      },
      {
        "name": "createdFilter",
        "schema": "string",
        "description": "filter by created filter"
      },
      {
        "name": "createdDateCode",
        "schema": "string",
        "description": "filter by created date code"
      },
      {
        "name": "createdBefore",
        "schema": "string",
        "description": "filter by created before date"
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "filter by created after date"
      },
      {
        "name": "completedBefore",
        "schema": "string",
        "description": "filter by completed before date"
      },
      {
        "name": "completedAfter",
        "schema": "string",
        "description": "filter by completed after date"
      },
      {
        "name": "updatedByUserId",
        "schema": "integer",
        "description": "filter by updated user id"
      },
      {
        "name": "parentTaskId",
        "schema": "integer",
        "description": "filter by parent task ids"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "orderByCustomFieldId",
        "schema": "integer",
        "description": "order by custom field id when orderBy is equal to customfield"
      },
      {
        "name": "includeTaskId",
        "schema": "integer",
        "description": "include task id"
      },
      {
        "name": "filterId",
        "schema": "integer",
        "description": "provide a user saved filter ID"
      },
      {
        "name": "completedByUserId",
        "schema": "integer",
        "description": "filter by completed user id"
      },
      {
        "name": "useStartDatesForTodaysTasks",
        "schema": "boolean",
        "description": "use start dates for todays tasks"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "useAllProjects",
        "schema": "boolean",
        "description": "filter on all projects"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "showCompletedLists",
        "schema": "boolean",
        "description": "include tasks from completed lists"
      },
      {
        "name": "searchCompaniesTeams",
        "schema": "boolean",
        "description": "include companies and teams in the search term"
      },
      {
        "name": "searchAssignees",
        "schema": "boolean",
        "description": "include assignees in the search"
      },
      {
        "name": "onlyUntaggedTasks",
        "schema": "boolean",
        "description": "only untagged tasks"
      },
      {
        "name": "onlyUnplanned",
        "schema": "boolean",
        "description": "only return tasks that are unplanned. Not assigned, no due date or\nmissing estimated time.",
        "default": "false"
      },
      {
        "name": "onlyTasksWithUnreadComments",
        "schema": "boolean",
        "description": "filter by only tasks with unread comments"
      },
      {
        "name": "onlyTasksWithTickets",
        "schema": "boolean",
        "description": "filter by only tasks with tickets"
      },
      {
        "name": "onlyTasksWithEstimatedTime",
        "schema": "boolean",
        "description": "only return tasks with estimated time"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyAdminProjects",
        "schema": "boolean",
        "description": "only include tasks from projects where the user is strictly a project admin.\nsite admins have visibility to all projects."
      },
      {
        "name": "nestSubTasks",
        "schema": "boolean",
        "description": "nest sub tasks"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "matchAllExcludedTags",
        "schema": "boolean",
        "description": "match all exclude tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report export.",
        "default": "false"
      },
      {
        "name": "includeUpdate",
        "schema": "boolean",
        "description": "include tasks latest update action"
      },
      {
        "name": "includeUntaggedTasks",
        "schema": "boolean",
        "description": "include untagged tasks"
      },
      {
        "name": "includeTomorrow",
        "schema": "boolean",
        "description": "filter by include tomorrow"
      },
      {
        "name": "includeToday",
        "schema": "boolean",
        "description": "filter by include today"
      },
      {
        "name": "includeTeamUserIds",
        "schema": "boolean",
        "description": "include members of the given teams"
      },
      {
        "name": "includeTasksWithoutDueDates",
        "schema": "boolean",
        "description": "include tasks without due dates"
      },
      {
        "name": "includeTasksWithCards",
        "schema": "boolean",
        "description": "include tasks with cards",
        "default": "true"
      },
      {
        "name": "includeTasksFromDeletedLists",
        "schema": "boolean",
        "description": "include tasks from deleted lists"
      },
      {
        "name": "includeRelatedTasks",
        "schema": "boolean",
        "description": "include ids of completed and active subtasks, dependencies, predecessors"
      },
      {
        "name": "includePrivateItems",
        "schema": "boolean",
        "description": "include private items"
      },
      {
        "name": "includeOverdueTasks",
        "schema": "boolean",
        "description": "include overdue tasks"
      },
      {
        "name": "includeOriginalDueDate",
        "schema": "boolean",
        "description": "include original due date of a task"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCompletedTasks",
        "schema": "boolean",
        "description": "include completed tasks"
      },
      {
        "name": "includeCompanyUserIds",
        "schema": "boolean",
        "description": "include members of the given companies"
      },
      {
        "name": "includeCommentStats",
        "schema": "boolean",
        "description": "include number of unread and read comments for each task",
        "default": "false"
      },
      {
        "name": "includeBlocked",
        "schema": "boolean",
        "description": "filter by include blocked"
      },
      {
        "name": "includeAttachmentCommentStats",
        "schema": "boolean",
        "description": "include number of unread and read comments for each file attachment",
        "default": "false"
      },
      {
        "name": "includeAssigneeTeams",
        "schema": "boolean",
        "description": "include teams related to the responsible user ids"
      },
      {
        "name": "includeAssigneeCompanies",
        "schema": "boolean",
        "description": "include companies related to the responsible user ids"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "includeAllComments",
        "schema": "boolean",
        "description": "include all comments"
      },
      {
        "name": "groupByTasklist",
        "schema": "boolean",
        "description": "group by tasklist"
      },
      {
        "name": "groupByTaskgroup",
        "schema": "boolean",
        "description": "group by taskgroup"
      },
      {
        "name": "getSubTasks",
        "schema": "boolean",
        "description": "get sub tasks"
      },
      {
        "name": "getFiles",
        "schema": "boolean",
        "description": "get files"
      },
      {
        "name": "fallbackToMilestoneDueDate",
        "schema": "boolean",
        "description": "set due date as milestone due date if due date is null and there's a related milestone"
      },
      {
        "name": "extractTemplateRoleName",
        "schema": "boolean",
        "description": "For tasks created in a project template it's possible to assign a role instead of people, companies or teams.\nThis role is then stored with the task name as a prefix. When this flag is enabled it will extract the role name\nand return it inside a special field."
      },
      {
        "name": "excludeAssigneeNotOnProjectTeams",
        "schema": "boolean",
        "description": "exclude assignee not on project teams"
      },
      {
        "name": "completedOnly",
        "schema": "boolean",
        "description": "only completed tasks",
        "default": "false"
      },
      {
        "name": "checkForReminders",
        "schema": "boolean",
        "description": "check if task has reminders"
      },
      {
        "name": "allowAssigneesOutsideProject",
        "schema": "boolean",
        "description": "when filtering by assigned or unassagned tasks, include assignees that\nare not in the project.",
        "default": "true"
      },
      {
        "name": "tasksSelectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed for tasks report"
      },
      {
        "name": "tasklistIds",
        "schema": "array",
        "description": "filter by tasklist ids"
      },
      {
        "name": "taskgroupIds",
        "schema": "array",
        "description": "filter by taskgroup ids"
      },
      {
        "name": "taskIncludedSet",
        "schema": "array",
        "description": "filter by task included set"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "filter by tag values"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "status",
        "schema": "array",
        "description": "filter by list of task status"
      },
      {
        "name": "skipCrmDealIds",
        "schema": "array",
        "description": "skip crm deal ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed for planned vs actual."
      },
      {
        "name": "responsiblePartyIds",
        "schema": "array",
        "description": "filter by responsible party ids"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectFeaturesEnabled",
        "schema": "array",
        "description": "filter by projects that have features enabled"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "includeCustomFieldIds",
        "schema": "array",
        "description": "include specific custom fields"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by task ids"
      },
      {
        "name": "followedByUserIds",
        "schema": "array",
        "description": "filter by followed by user ids"
      },
      {
        "name": "filterBoardColumnIds",
        "schema": "array",
        "description": "filter by board column ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[timers]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[taskgroups]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[taskSequences]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[lockdowns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[files]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[comments]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[columns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[cards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectPermissions]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "expandedIds",
        "schema": "array",
        "description": "the ids of the expanded tasks"
      },
      {
        "name": "excludeTagIds",
        "schema": "array",
        "description": "filter by excluded tag ids"
      },
      {
        "name": "crmDealIds",
        "schema": "array",
        "description": "filter by crm deal ids"
      },
      {
        "name": "createdByUserIds",
        "schema": "array",
        "description": "filter by creator user ids"
      },
      {
        "name": "assigneeTeamIds",
        "schema": "array",
        "description": "filter by assignee team ids"
      },
      {
        "name": "assigneeCompanyIds",
        "schema": "array",
        "description": "filter by assignee company ids"
      },
      {
        "name": "customFields",
        "schema": "array",
        "description": "filter by custom fields"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/reporting/precanned/usertaskcompletion.json",
    "method": "getTaskCompletions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Returns task completions for all users",
    "parameters": [
      {
        "name": "userType",
        "schema": "string",
        "description": "user type"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "date time"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "start date for task completion report"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by comment content"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "name"
      },
      {
        "name": "lastLoginAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "end date for task completion report"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page (not used when generating reports)",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number (not used when generating reports)",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "orderPrioritiseCurrentUser",
        "schema": "boolean",
        "description": "Force to have the current/session user in the response"
      },
      {
        "name": "onlySiteOwner",
        "schema": "boolean",
        "description": "",
        "default": "false"
      },
      {
        "name": "onlyOwnerCompany",
        "schema": "boolean",
        "description": "return people only from the owner company. This will replace any provided\ncompany ID.",
        "default": "false"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeServiceAccounts",
        "schema": "boolean",
        "description": "include service accounts",
        "default": "false"
      },
      {
        "name": "includeCollaborators",
        "schema": "boolean",
        "description": "exclude collaborators types, returning only account and contact.",
        "default": "true"
      },
      {
        "name": "includeClients",
        "schema": "boolean",
        "description": "include clients",
        "default": "true"
      },
      {
        "name": "excludeContacts",
        "schema": "boolean",
        "description": "exclude contact types, returning only account and collaborator.",
        "default": "false"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "team ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include (not used when generating reports)"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by user ids"
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[person]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[people]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectPermissions]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "excludeProjectIds",
        "schema": "array",
        "description": "exclude people assigned to certain project id"
      },
      {
        "name": "companyIds",
        "schema": "array",
        "description": "company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TaskCompletionResponse contains information about tasks completed by a user."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/reporting/precanned/usertaskcompletion/{userId}.json",
    "method": "getTaskCompletionsByUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Person",
    "typeScriptTag": "person",
    "description": "Returns task completions for given user",
    "parameters": [
      {
        "name": "userType",
        "schema": "string",
        "description": "user type"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "date time"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "start date for task completion report"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by comment content"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "name"
      },
      {
        "name": "lastLoginAfter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "end date for task completion report"
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page (not used when generating reports)",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number (not used when generating reports)",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "orderPrioritiseCurrentUser",
        "schema": "boolean",
        "description": "Force to have the current/session user in the response"
      },
      {
        "name": "onlySiteOwner",
        "schema": "boolean",
        "description": "",
        "default": "false"
      },
      {
        "name": "onlyOwnerCompany",
        "schema": "boolean",
        "description": "return people only from the owner company. This will replace any provided\ncompany ID.",
        "default": "false"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeServiceAccounts",
        "schema": "boolean",
        "description": "include service accounts",
        "default": "false"
      },
      {
        "name": "includeCollaborators",
        "schema": "boolean",
        "description": "exclude collaborators types, returning only account and contact.",
        "default": "true"
      },
      {
        "name": "includeClients",
        "schema": "boolean",
        "description": "include clients",
        "default": "true"
      },
      {
        "name": "excludeContacts",
        "schema": "boolean",
        "description": "exclude contact types, returning only account and collaborator.",
        "default": "false"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "team ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include (not used when generating reports)"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by user ids"
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[person]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[people]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectPermissions]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "excludeProjectIds",
        "schema": "array",
        "description": "exclude people assigned to certain project id"
      },
      {
        "name": "companyIds",
        "schema": "array",
        "description": "company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TaskCompletionResponse contains information about tasks completed by a user."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/reporting/precanned/utilization.csv",
    "method": "getUtilizationReportCsv",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Generate utilization report in CSV format",
    "parameters": [
      {
        "name": "zoom",
        "schema": "string",
        "description": "determine the type of zoom filter used to display on the report"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by start date"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "sort by (deprecated, use orderBy)",
        "default": "name"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by user first or last name"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "group by"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "sort by",
        "default": "name"
      },
      {
        "name": "groupBy",
        "schema": "string",
        "description": "group by"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by end date"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document",
        "default": "false"
      },
      {
        "name": "isCustomDateRange",
        "schema": "boolean",
        "description": "determine if the query is for a custom date range"
      },
      {
        "name": "includeCollaborators",
        "schema": "boolean",
        "description": "include collaborators",
        "default": "true"
      },
      {
        "name": "includeClients",
        "schema": "boolean",
        "description": "include client users",
        "default": "true"
      },
      {
        "name": "userIds",
        "schema": "array",
        "description": "filter by userIds"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "filter by team ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed."
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[utilizations]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyIds",
        "schema": "array",
        "description": "filter by company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/reporting/precanned/utilization.html",
    "method": "generateUtilizationReportHtml",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Generate utilization report in HTML format",
    "parameters": [
      {
        "name": "zoom",
        "schema": "string",
        "description": "determine the type of zoom filter used to display on the report"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by start date"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "sort by (deprecated, use orderBy)",
        "default": "name"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by user first or last name"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "group by"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "sort by",
        "default": "name"
      },
      {
        "name": "groupBy",
        "schema": "string",
        "description": "group by"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by end date"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document",
        "default": "false"
      },
      {
        "name": "isCustomDateRange",
        "schema": "boolean",
        "description": "determine if the query is for a custom date range"
      },
      {
        "name": "includeCollaborators",
        "schema": "boolean",
        "description": "include collaborators",
        "default": "true"
      },
      {
        "name": "includeClients",
        "schema": "boolean",
        "description": "include client users",
        "default": "true"
      },
      {
        "name": "userIds",
        "schema": "array",
        "description": "filter by userIds"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "filter by team ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed."
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[utilizations]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyIds",
        "schema": "array",
        "description": "filter by company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/reporting/precanned/utilization.pdf",
    "method": "generateUtilizationReportPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Generate utilization report in PDF format",
    "parameters": [
      {
        "name": "zoom",
        "schema": "string",
        "description": "determine the type of zoom filter used to display on the report"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by start date"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "sort by (deprecated, use orderBy)",
        "default": "name"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by user first or last name"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "group by"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "sort by",
        "default": "name"
      },
      {
        "name": "groupBy",
        "schema": "string",
        "description": "group by"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by end date"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document",
        "default": "false"
      },
      {
        "name": "isCustomDateRange",
        "schema": "boolean",
        "description": "determine if the query is for a custom date range"
      },
      {
        "name": "includeCollaborators",
        "schema": "boolean",
        "description": "include collaborators",
        "default": "true"
      },
      {
        "name": "includeClients",
        "schema": "boolean",
        "description": "include client users",
        "default": "true"
      },
      {
        "name": "userIds",
        "schema": "array",
        "description": "filter by userIds"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "filter by team ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed."
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[utilizations]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyIds",
        "schema": "array",
        "description": "filter by company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/reporting/precanned/utilization.xlsx",
    "method": "generateUtilizationXlsx",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "People",
    "typeScriptTag": "people",
    "description": "Generate utilization report in XLSX format",
    "parameters": [
      {
        "name": "zoom",
        "schema": "string",
        "description": "determine the type of zoom filter used to display on the report"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by start date"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "sort by (deprecated, use orderBy)",
        "default": "name"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by user first or last name"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "group by"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "sort by",
        "default": "name"
      },
      {
        "name": "groupBy",
        "schema": "string",
        "description": "group by"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by end date"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document",
        "default": "false"
      },
      {
        "name": "isCustomDateRange",
        "schema": "boolean",
        "description": "determine if the query is for a custom date range"
      },
      {
        "name": "includeCollaborators",
        "schema": "boolean",
        "description": "include collaborators",
        "default": "true"
      },
      {
        "name": "includeClients",
        "schema": "boolean",
        "description": "include client users",
        "default": "true"
      },
      {
        "name": "userIds",
        "schema": "array",
        "description": "filter by userIds"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "filter by team ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed."
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[utilizations]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyIds",
        "schema": "array",
        "description": "filter by company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "200 OK (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/risks.json",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Risks",
    "typeScriptTag": "risks",
    "description": "Get all risks",
    "parameters": [
      {
        "name": "updatedAfterDate",
        "schema": "string",
        "description": "filter by risks updated after specified date (deprecated, use updatedAfter)"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by risks updated after specified date"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "sort order (deprecated, use orderMode)"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "sort by (deprecated, use orderBy)"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "search term"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "sort order"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "sort by"
      },
      {
        "name": "probabilityTo",
        "schema": "integer",
        "description": "filter by probability"
      },
      {
        "name": "probabilityFrom",
        "schema": "integer",
        "description": "filter by probability"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "impactTo",
        "schema": "integer",
        "description": "filter by impact"
      },
      {
        "name": "impactFrom",
        "schema": "integer",
        "description": "filter by impact"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only",
        "default": "false"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "enforce all tag ids must be matched"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "impactSchedule",
        "schema": "boolean",
        "description": "filter by risks that impact schedule"
      },
      {
        "name": "impactPerformance",
        "schema": "boolean",
        "description": "filter by risks that impact performance"
      },
      {
        "name": "impactCost",
        "schema": "boolean",
        "description": "filter by risks that impact cost"
      },
      {
        "name": "statuses",
        "schema": "array",
        "description": "filter by risk statuses"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "list of project statuses"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "list of project health"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by specific ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[risks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "RisksResponse contains all the information returned when sending a GET\nrequest to the risk endpoint."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/statuses.json",
    "method": "getAllStatuses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PeopleStatus",
    "typeScriptTag": "peopleStatus",
    "description": "Get all statuses",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "return only statuses updated after a specific date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by the user name or status message"
      },
      {
        "name": "teamId",
        "schema": "integer",
        "description": "filter by team"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "100"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showEveryone",
        "schema": "boolean",
        "description": "show also users without status"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "showDeleted statuses",
        "default": "false"
      },
      {
        "name": "includeSubteams",
        "schema": "boolean",
        "description": "also include statuses from subteams"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[statuses]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TimelineResponse contains information about a group of statuses."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/statuses/timeline.json",
    "method": "listTimeline",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PeopleStatus",
    "typeScriptTag": "peopleStatus",
    "description": "Get the people statuses timeline.",
    "parameters": [
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by the user name or status message"
      },
      {
        "name": "teamId",
        "schema": "integer",
        "description": "filter by team"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "showDeleted statuses",
        "default": "false"
      },
      {
        "name": "includeSubteams",
        "schema": "boolean",
        "description": "also include statuses from subteams"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TimelineResponse contains information about a group of statuses."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/summary.json",
    "method": "dashboardDataByProjectCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Summary",
    "typeScriptTag": "summary",
    "description": "Get installation summary dashboard",
    "parameters": [
      {
        "name": "until",
        "schema": "string",
        "description": "used to limit the since counters to a specific period"
      },
      {
        "name": "timeRangeStart",
        "schema": "string",
        "description": "filter by start datetime"
      },
      {
        "name": "timeRangeEnd",
        "schema": "string",
        "description": "filter by end datetime"
      },
      {
        "name": "timeRange",
        "schema": "string",
        "description": "filter by time range. It will be ignored if timeRangeStart and timeRangeEnd\nare provided."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "project status (deprecated, use projectStatuses)"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "project status"
      },
      {
        "name": "eventsDaysAhead",
        "schema": "integer",
        "description": "number of days remaining to event's start",
        "default": "7"
      },
      {
        "name": "useStartDatesForTodaysTasks",
        "schema": "boolean",
        "description": "enforce today is considered as start date for today's tasks"
      },
      {
        "name": "unreadMessagesMineOnly",
        "schema": "boolean",
        "description": "filter by my unread messages only"
      },
      {
        "name": "unreadCommentsMineOnly",
        "schema": "boolean",
        "description": "filter by my unread comments only"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyProjectEvents",
        "schema": "boolean",
        "description": "filter only project events"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "enforce all tag ids must be matched (deprecated, use matchAllProjectTags)"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "enforce all tag ids must be matched"
      },
      {
        "name": "includeAssigneeTeams",
        "schema": "boolean",
        "description": "include teams related to the taskAssigneeUserIds"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "eventsAttendingOnly",
        "schema": "boolean",
        "description": "count only events that the users are attending"
      },
      {
        "name": "applyTaskAssigneeUsersToSince",
        "schema": "boolean",
        "description": "the since section will only use taskAssigneeUserIds if this flag is true\n(keeps backward compatibility)"
      },
      {
        "name": "applySinceOnUnread",
        "schema": "boolean",
        "description": "when enabled unread counters will respect the time range period.",
        "default": "false"
      },
      {
        "name": "userIds",
        "schema": "array",
        "description": "filter by user ids"
      },
      {
        "name": "timeLoggedByUserIds",
        "schema": "array",
        "description": "filter by user ids who time logged"
      },
      {
        "name": "taskAssigneeUserIds",
        "schema": "array",
        "description": "filter by user ids with tasks assigned"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "project statuses"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectHealth",
        "schema": "array",
        "description": "project healths (deprecated, use projectHealths)\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "milestoneAssigneeUserIds",
        "schema": "array",
        "description": "filter by user ids with milestones assigned"
      },
      {
        "name": "filterTagIds",
        "schema": "array",
        "description": "filter by project tag ids (deprecated, use projectTagIds)"
      },
      {
        "name": "fields[unread]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[time]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": "sparse fields"
      },
      {
        "name": "fields[since]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[risks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[health]",
        "schema": "array",
        "description": "0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "fields[events]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[columns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyIds",
        "schema": "array",
        "description": "filter by company ids (deprecated, use projectCompanyIds)"
      },
      {
        "name": "assigneeUserIds",
        "schema": "array",
        "description": "filter by user ids with tasks or milestones assigned"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains all the information returned when sending a GET\nrequest to the summary endpoint (https://apidocs.teamwork.com/."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tags.json",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get all tags",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "search for tags updated after the provided date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by search term"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "name"
      },
      {
        "name": "itemType",
        "schema": "string",
        "description": "filter by item type",
        "default": "all"
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "mode used when filtering the tags",
        "default": "all"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "500"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "withCounters",
        "schema": "boolean",
        "description": "include in the response the number of items that use the tag",
        "default": "false"
      },
      {
        "name": "skipSpecial",
        "schema": "boolean",
        "description": "do not include in the response special tags",
        "default": "true"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "searchRightOnly",
        "schema": "boolean",
        "description": "search term will be placed as a prefix to match the tag names",
        "default": "false"
      },
      {
        "name": "skipIds",
        "schema": "array",
        "description": "skip from the result tags with the defined ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by projects"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TagsResponse contains information about a group of tags."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tags.json",
    "method": "createTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Create a single tag",
    "parameters": [
      {
        "name": "tag",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific tag."
      },
      {
        "statusCode": "201",
        "description": "Response contains information about a specific tag."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "409",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tags/bulk/delete.json",
    "method": "deleteManyTags",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Delete many tags at once",
    "parameters": [
      {
        "name": "tagIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tagNames",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/tags/{tagId}.json",
    "method": "removeTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Deletes a tag",
    "parameters": [
      {
        "name": "tagId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/tags/{tagId}.json",
    "method": "getTagDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get details of an individual tag",
    "parameters": [
      {
        "name": "tagId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific tag."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/tags/{tagId}.json",
    "method": "updateTag",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Update a single tag",
    "parameters": [
      {
        "name": "tagId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "tag",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific tag."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      },
      {
        "statusCode": "409",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasklists",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TaskLists",
    "typeScriptTag": "taskLists",
    "description": "Get all tasklists",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by search term"
      },
      {
        "name": "projectType",
        "schema": "string",
        "description": "filter by project type"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "displayorder"
      },
      {
        "name": "projectBudgetId",
        "schema": "integer",
        "description": "filter the task list budget by its parent project budget id, if none\nis provided it weill default to the current active budget.",
        "default": "nil"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "sortActiveListsFirst",
        "schema": "boolean",
        "description": "sort active lists first",
        "default": "false"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showPrivate",
        "schema": "boolean",
        "description": "include private items",
        "default": "true"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "showCompleted",
        "schema": "boolean",
        "description": "include completed items",
        "default": "false"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "this means use the tasklist report endpoint, which has totally different query params",
        "default": "false"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "completedOnly",
        "schema": "boolean",
        "description": "include only completed items",
        "default": "false"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by project company ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[lockdowns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TasklistsResponse contains information about a group of tasklists."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasklists/{tasklistId}",
    "method": "getSpecificTasklist",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TaskLists",
    "typeScriptTag": "taskLists",
    "description": "Get specific tasklist",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by search term"
      },
      {
        "name": "projectType",
        "schema": "string",
        "description": "filter by project type"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "displayorder"
      },
      {
        "name": "tasklistId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "projectBudgetId",
        "schema": "integer",
        "description": "filter the task list budget by its parent project budget id, if none\nis provided it weill default to the current active budget.",
        "default": "nil"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "sortActiveListsFirst",
        "schema": "boolean",
        "description": "sort active lists first",
        "default": "false"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showPrivate",
        "schema": "boolean",
        "description": "include private items",
        "default": "true"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "showCompleted",
        "schema": "boolean",
        "description": "include completed items",
        "default": "false"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "this means use the tasklist report endpoint, which has totally different query params",
        "default": "false"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "completedOnly",
        "schema": "boolean",
        "description": "include only completed items",
        "default": "false"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by project company ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[lockdowns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific tasklist."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasklists/{tasklistId}.json",
    "method": "deleteTasklist",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TaskLists",
    "typeScriptTag": "taskLists",
    "description": "Delete an existing tasklist.",
    "parameters": [
      {
        "name": "tasklistId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasklists/{tasklistId}/tasks.json",
    "method": "getByCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get a specific tasklist's tasks.",
    "parameters": [
      {
        "name": "updatedBefore",
        "schema": "string",
        "description": "filter by updated before date"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "today",
        "schema": "string",
        "description": "filter by today"
      },
      {
        "name": "taskFilter",
        "schema": "string",
        "description": "filter by a taskFilter"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter on start date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by search term"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "task"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "priority",
        "schema": "string",
        "description": "filter by task priority"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "duedate"
      },
      {
        "name": "notCompletedBefore",
        "schema": "string",
        "description": "filter by projects that have not been completed before the given date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter on end date"
      },
      {
        "name": "dueBefore",
        "schema": "string",
        "description": "filter before a due date"
      },
      {
        "name": "dueAfter",
        "schema": "string",
        "description": "filter after a due date"
      },
      {
        "name": "deletedAfter",
        "schema": "string",
        "description": "filter on deleted after date"
      },
      {
        "name": "createdFilter",
        "schema": "string",
        "description": "filter by created filter"
      },
      {
        "name": "createdDateCode",
        "schema": "string",
        "description": "filter by created date code"
      },
      {
        "name": "createdBefore",
        "schema": "string",
        "description": "filter by created before date"
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "filter by created after date"
      },
      {
        "name": "completedBefore",
        "schema": "string",
        "description": "filter by completed before date"
      },
      {
        "name": "completedAfter",
        "schema": "string",
        "description": "filter by completed after date"
      },
      {
        "name": "updatedByUserId",
        "schema": "integer",
        "description": "filter by updated user id"
      },
      {
        "name": "tasklistId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "parentTaskId",
        "schema": "integer",
        "description": "filter by parent task ids"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "orderByCustomFieldId",
        "schema": "integer",
        "description": "order by custom field id when orderBy is equal to customfield"
      },
      {
        "name": "includeTaskId",
        "schema": "integer",
        "description": "include task id"
      },
      {
        "name": "filterId",
        "schema": "integer",
        "description": "provide a user saved filter ID"
      },
      {
        "name": "completedByUserId",
        "schema": "integer",
        "description": "filter by completed user id"
      },
      {
        "name": "useStartDatesForTodaysTasks",
        "schema": "boolean",
        "description": "use start dates for todays tasks"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "useAllProjects",
        "schema": "boolean",
        "description": "filter on all projects"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "showCompletedLists",
        "schema": "boolean",
        "description": "include tasks from completed lists"
      },
      {
        "name": "searchCompaniesTeams",
        "schema": "boolean",
        "description": "include companies and teams in the search term"
      },
      {
        "name": "searchAssignees",
        "schema": "boolean",
        "description": "include assignees in the search"
      },
      {
        "name": "onlyUntaggedTasks",
        "schema": "boolean",
        "description": "only untagged tasks"
      },
      {
        "name": "onlyUnplanned",
        "schema": "boolean",
        "description": "only return tasks that are unplanned. Not assigned, no due date or\nmissing estimated time.",
        "default": "false"
      },
      {
        "name": "onlyTasksWithUnreadComments",
        "schema": "boolean",
        "description": "filter by only tasks with unread comments"
      },
      {
        "name": "onlyTasksWithTickets",
        "schema": "boolean",
        "description": "filter by only tasks with tickets"
      },
      {
        "name": "onlyTasksWithEstimatedTime",
        "schema": "boolean",
        "description": "only return tasks with estimated time"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyAdminProjects",
        "schema": "boolean",
        "description": "only include tasks from projects where the user is strictly a project admin.\nsite admins have visibility to all projects."
      },
      {
        "name": "nestSubTasks",
        "schema": "boolean",
        "description": "nest sub tasks"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "matchAllExcludedTags",
        "schema": "boolean",
        "description": "match all exclude tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report export.",
        "default": "false"
      },
      {
        "name": "includeUpdate",
        "schema": "boolean",
        "description": "include tasks latest update action"
      },
      {
        "name": "includeUntaggedTasks",
        "schema": "boolean",
        "description": "include untagged tasks"
      },
      {
        "name": "includeTomorrow",
        "schema": "boolean",
        "description": "filter by include tomorrow"
      },
      {
        "name": "includeToday",
        "schema": "boolean",
        "description": "filter by include today"
      },
      {
        "name": "includeTeamUserIds",
        "schema": "boolean",
        "description": "include members of the given teams"
      },
      {
        "name": "includeTasksWithoutDueDates",
        "schema": "boolean",
        "description": "include tasks without due dates"
      },
      {
        "name": "includeTasksWithCards",
        "schema": "boolean",
        "description": "include tasks with cards",
        "default": "true"
      },
      {
        "name": "includeTasksFromDeletedLists",
        "schema": "boolean",
        "description": "include tasks from deleted lists"
      },
      {
        "name": "includeRelatedTasks",
        "schema": "boolean",
        "description": "include ids of completed and active subtasks, dependencies, predecessors"
      },
      {
        "name": "includePrivateItems",
        "schema": "boolean",
        "description": "include private items"
      },
      {
        "name": "includeOverdueTasks",
        "schema": "boolean",
        "description": "include overdue tasks"
      },
      {
        "name": "includeOriginalDueDate",
        "schema": "boolean",
        "description": "include original due date of a task"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCompletedTasks",
        "schema": "boolean",
        "description": "include completed tasks"
      },
      {
        "name": "includeCompanyUserIds",
        "schema": "boolean",
        "description": "include members of the given companies"
      },
      {
        "name": "includeCommentStats",
        "schema": "boolean",
        "description": "include number of unread and read comments for each task",
        "default": "false"
      },
      {
        "name": "includeBlocked",
        "schema": "boolean",
        "description": "filter by include blocked"
      },
      {
        "name": "includeAttachmentCommentStats",
        "schema": "boolean",
        "description": "include number of unread and read comments for each file attachment",
        "default": "false"
      },
      {
        "name": "includeAssigneeTeams",
        "schema": "boolean",
        "description": "include teams related to the responsible user ids"
      },
      {
        "name": "includeAssigneeCompanies",
        "schema": "boolean",
        "description": "include companies related to the responsible user ids"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "includeAllComments",
        "schema": "boolean",
        "description": "include all comments"
      },
      {
        "name": "groupByTasklist",
        "schema": "boolean",
        "description": "group by tasklist"
      },
      {
        "name": "groupByTaskgroup",
        "schema": "boolean",
        "description": "group by taskgroup"
      },
      {
        "name": "getSubTasks",
        "schema": "boolean",
        "description": "get sub tasks"
      },
      {
        "name": "getFiles",
        "schema": "boolean",
        "description": "get files"
      },
      {
        "name": "fallbackToMilestoneDueDate",
        "schema": "boolean",
        "description": "set due date as milestone due date if due date is null and there's a related milestone"
      },
      {
        "name": "extractTemplateRoleName",
        "schema": "boolean",
        "description": "For tasks created in a project template it's possible to assign a role instead of people, companies or teams.\nThis role is then stored with the task name as a prefix. When this flag is enabled it will extract the role name\nand return it inside a special field."
      },
      {
        "name": "excludeAssigneeNotOnProjectTeams",
        "schema": "boolean",
        "description": "exclude assignee not on project teams"
      },
      {
        "name": "completedOnly",
        "schema": "boolean",
        "description": "only completed tasks",
        "default": "false"
      },
      {
        "name": "checkForReminders",
        "schema": "boolean",
        "description": "check if task has reminders"
      },
      {
        "name": "allowAssigneesOutsideProject",
        "schema": "boolean",
        "description": "when filtering by assigned or unassagned tasks, include assignees that\nare not in the project.",
        "default": "true"
      },
      {
        "name": "tasksSelectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed for tasks report"
      },
      {
        "name": "tasklistIds",
        "schema": "array",
        "description": "filter by tasklist ids"
      },
      {
        "name": "taskgroupIds",
        "schema": "array",
        "description": "filter by taskgroup ids"
      },
      {
        "name": "taskIncludedSet",
        "schema": "array",
        "description": "filter by task included set"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "filter by tag values"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "status",
        "schema": "array",
        "description": "filter by list of task status"
      },
      {
        "name": "skipCrmDealIds",
        "schema": "array",
        "description": "skip crm deal ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed for planned vs actual."
      },
      {
        "name": "responsiblePartyIds",
        "schema": "array",
        "description": "filter by responsible party ids"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectFeaturesEnabled",
        "schema": "array",
        "description": "filter by projects that have features enabled"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "includeCustomFieldIds",
        "schema": "array",
        "description": "include specific custom fields"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by task ids"
      },
      {
        "name": "followedByUserIds",
        "schema": "array",
        "description": "filter by followed by user ids"
      },
      {
        "name": "filterBoardColumnIds",
        "schema": "array",
        "description": "filter by board column ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[timers]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[taskgroups]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[taskSequences]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[lockdowns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[files]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[comments]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[columns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[cards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectPermissions]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "expandedIds",
        "schema": "array",
        "description": "the ids of the expanded tasks"
      },
      {
        "name": "excludeTagIds",
        "schema": "array",
        "description": "filter by excluded tag ids"
      },
      {
        "name": "crmDealIds",
        "schema": "array",
        "description": "filter by crm deal ids"
      },
      {
        "name": "createdByUserIds",
        "schema": "array",
        "description": "filter by creator user ids"
      },
      {
        "name": "assigneeTeamIds",
        "schema": "array",
        "description": "filter by assignee team ids"
      },
      {
        "name": "assigneeCompanyIds",
        "schema": "array",
        "description": "filter by assignee company ids"
      },
      {
        "name": "customFields",
        "schema": "array",
        "description": "filter by custom fields"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasklists/{tasklistId}/tasks.json",
    "method": "createNewTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Creates a task.",
    "parameters": [
      {
        "name": "tasklistId",
        "schema": "integer",
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
        "name": "attachmentOptions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "object",
        "description": ""
      },
      {
        "name": "card",
        "schema": "object",
        "description": ""
      },
      {
        "name": "predecessors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "task",
        "schema": "object",
        "description": ""
      },
      {
        "name": "taskOptions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workflows",
        "schema": "object",
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
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasklists/{tasklistId}/time/total.json",
    "method": "getTimelogTotalsForTask",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Get timelog totals for a specific task.",
    "parameters": [
      {
        "name": "tasklistId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TotalsResponse contains information about timelog totals."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasks.json",
    "method": "getAllTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get all tasks.",
    "parameters": [
      {
        "name": "updatedBefore",
        "schema": "string",
        "description": "filter by updated before date"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "today",
        "schema": "string",
        "description": "filter by today"
      },
      {
        "name": "taskFilter",
        "schema": "string",
        "description": "filter by a taskFilter"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter on start date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by search term"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "task"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "priority",
        "schema": "string",
        "description": "filter by task priority"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "duedate"
      },
      {
        "name": "notCompletedBefore",
        "schema": "string",
        "description": "filter by projects that have not been completed before the given date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter on end date"
      },
      {
        "name": "dueBefore",
        "schema": "string",
        "description": "filter before a due date"
      },
      {
        "name": "dueAfter",
        "schema": "string",
        "description": "filter after a due date"
      },
      {
        "name": "deletedAfter",
        "schema": "string",
        "description": "filter on deleted after date"
      },
      {
        "name": "createdFilter",
        "schema": "string",
        "description": "filter by created filter"
      },
      {
        "name": "createdDateCode",
        "schema": "string",
        "description": "filter by created date code"
      },
      {
        "name": "createdBefore",
        "schema": "string",
        "description": "filter by created before date"
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "filter by created after date"
      },
      {
        "name": "completedBefore",
        "schema": "string",
        "description": "filter by completed before date"
      },
      {
        "name": "completedAfter",
        "schema": "string",
        "description": "filter by completed after date"
      },
      {
        "name": "updatedByUserId",
        "schema": "integer",
        "description": "filter by updated user id"
      },
      {
        "name": "parentTaskId",
        "schema": "integer",
        "description": "filter by parent task ids"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "orderByCustomFieldId",
        "schema": "integer",
        "description": "order by custom field id when orderBy is equal to customfield"
      },
      {
        "name": "includeTaskId",
        "schema": "integer",
        "description": "include task id"
      },
      {
        "name": "filterId",
        "schema": "integer",
        "description": "provide a user saved filter ID"
      },
      {
        "name": "completedByUserId",
        "schema": "integer",
        "description": "filter by completed user id"
      },
      {
        "name": "useStartDatesForTodaysTasks",
        "schema": "boolean",
        "description": "use start dates for todays tasks"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "useAllProjects",
        "schema": "boolean",
        "description": "filter on all projects"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "showCompletedLists",
        "schema": "boolean",
        "description": "include tasks from completed lists"
      },
      {
        "name": "searchCompaniesTeams",
        "schema": "boolean",
        "description": "include companies and teams in the search term"
      },
      {
        "name": "searchAssignees",
        "schema": "boolean",
        "description": "include assignees in the search"
      },
      {
        "name": "onlyUntaggedTasks",
        "schema": "boolean",
        "description": "only untagged tasks"
      },
      {
        "name": "onlyUnplanned",
        "schema": "boolean",
        "description": "only return tasks that are unplanned. Not assigned, no due date or\nmissing estimated time.",
        "default": "false"
      },
      {
        "name": "onlyTasksWithUnreadComments",
        "schema": "boolean",
        "description": "filter by only tasks with unread comments"
      },
      {
        "name": "onlyTasksWithTickets",
        "schema": "boolean",
        "description": "filter by only tasks with tickets"
      },
      {
        "name": "onlyTasksWithEstimatedTime",
        "schema": "boolean",
        "description": "only return tasks with estimated time"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyAdminProjects",
        "schema": "boolean",
        "description": "only include tasks from projects where the user is strictly a project admin.\nsite admins have visibility to all projects."
      },
      {
        "name": "nestSubTasks",
        "schema": "boolean",
        "description": "nest sub tasks"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "matchAllExcludedTags",
        "schema": "boolean",
        "description": "match all exclude tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report export.",
        "default": "false"
      },
      {
        "name": "includeUpdate",
        "schema": "boolean",
        "description": "include tasks latest update action"
      },
      {
        "name": "includeUntaggedTasks",
        "schema": "boolean",
        "description": "include untagged tasks"
      },
      {
        "name": "includeTomorrow",
        "schema": "boolean",
        "description": "filter by include tomorrow"
      },
      {
        "name": "includeToday",
        "schema": "boolean",
        "description": "filter by include today"
      },
      {
        "name": "includeTeamUserIds",
        "schema": "boolean",
        "description": "include members of the given teams"
      },
      {
        "name": "includeTasksWithoutDueDates",
        "schema": "boolean",
        "description": "include tasks without due dates"
      },
      {
        "name": "includeTasksWithCards",
        "schema": "boolean",
        "description": "include tasks with cards",
        "default": "true"
      },
      {
        "name": "includeTasksFromDeletedLists",
        "schema": "boolean",
        "description": "include tasks from deleted lists"
      },
      {
        "name": "includeRelatedTasks",
        "schema": "boolean",
        "description": "include ids of completed and active subtasks, dependencies, predecessors"
      },
      {
        "name": "includePrivateItems",
        "schema": "boolean",
        "description": "include private items"
      },
      {
        "name": "includeOverdueTasks",
        "schema": "boolean",
        "description": "include overdue tasks"
      },
      {
        "name": "includeOriginalDueDate",
        "schema": "boolean",
        "description": "include original due date of a task"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCompletedTasks",
        "schema": "boolean",
        "description": "include completed tasks"
      },
      {
        "name": "includeCompanyUserIds",
        "schema": "boolean",
        "description": "include members of the given companies"
      },
      {
        "name": "includeCommentStats",
        "schema": "boolean",
        "description": "include number of unread and read comments for each task",
        "default": "false"
      },
      {
        "name": "includeBlocked",
        "schema": "boolean",
        "description": "filter by include blocked"
      },
      {
        "name": "includeAttachmentCommentStats",
        "schema": "boolean",
        "description": "include number of unread and read comments for each file attachment",
        "default": "false"
      },
      {
        "name": "includeAssigneeTeams",
        "schema": "boolean",
        "description": "include teams related to the responsible user ids"
      },
      {
        "name": "includeAssigneeCompanies",
        "schema": "boolean",
        "description": "include companies related to the responsible user ids"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "includeAllComments",
        "schema": "boolean",
        "description": "include all comments"
      },
      {
        "name": "groupByTasklist",
        "schema": "boolean",
        "description": "group by tasklist"
      },
      {
        "name": "groupByTaskgroup",
        "schema": "boolean",
        "description": "group by taskgroup"
      },
      {
        "name": "getSubTasks",
        "schema": "boolean",
        "description": "get sub tasks"
      },
      {
        "name": "getFiles",
        "schema": "boolean",
        "description": "get files"
      },
      {
        "name": "fallbackToMilestoneDueDate",
        "schema": "boolean",
        "description": "set due date as milestone due date if due date is null and there's a related milestone"
      },
      {
        "name": "extractTemplateRoleName",
        "schema": "boolean",
        "description": "For tasks created in a project template it's possible to assign a role instead of people, companies or teams.\nThis role is then stored with the task name as a prefix. When this flag is enabled it will extract the role name\nand return it inside a special field."
      },
      {
        "name": "excludeAssigneeNotOnProjectTeams",
        "schema": "boolean",
        "description": "exclude assignee not on project teams"
      },
      {
        "name": "completedOnly",
        "schema": "boolean",
        "description": "only completed tasks",
        "default": "false"
      },
      {
        "name": "checkForReminders",
        "schema": "boolean",
        "description": "check if task has reminders"
      },
      {
        "name": "allowAssigneesOutsideProject",
        "schema": "boolean",
        "description": "when filtering by assigned or unassagned tasks, include assignees that\nare not in the project.",
        "default": "true"
      },
      {
        "name": "tasksSelectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed for tasks report"
      },
      {
        "name": "tasklistIds",
        "schema": "array",
        "description": "filter by tasklist ids"
      },
      {
        "name": "taskgroupIds",
        "schema": "array",
        "description": "filter by taskgroup ids"
      },
      {
        "name": "taskIncludedSet",
        "schema": "array",
        "description": "filter by task included set"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "filter by tag values"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "status",
        "schema": "array",
        "description": "filter by list of task status"
      },
      {
        "name": "skipCrmDealIds",
        "schema": "array",
        "description": "skip crm deal ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed for planned vs actual."
      },
      {
        "name": "responsiblePartyIds",
        "schema": "array",
        "description": "filter by responsible party ids"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectFeaturesEnabled",
        "schema": "array",
        "description": "filter by projects that have features enabled"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "includeCustomFieldIds",
        "schema": "array",
        "description": "include specific custom fields"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by task ids"
      },
      {
        "name": "followedByUserIds",
        "schema": "array",
        "description": "filter by followed by user ids"
      },
      {
        "name": "filterBoardColumnIds",
        "schema": "array",
        "description": "filter by board column ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[timers]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[taskgroups]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[taskSequences]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[lockdowns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[files]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[comments]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[columns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[cards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectPermissions]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "expandedIds",
        "schema": "array",
        "description": "the ids of the expanded tasks"
      },
      {
        "name": "excludeTagIds",
        "schema": "array",
        "description": "filter by excluded tag ids"
      },
      {
        "name": "crmDealIds",
        "schema": "array",
        "description": "filter by crm deal ids"
      },
      {
        "name": "createdByUserIds",
        "schema": "array",
        "description": "filter by creator user ids"
      },
      {
        "name": "assigneeTeamIds",
        "schema": "array",
        "description": "filter by assignee team ids"
      },
      {
        "name": "assigneeCompanyIds",
        "schema": "array",
        "description": "filter by assignee company ids"
      },
      {
        "name": "customFields",
        "schema": "array",
        "description": "filter by custom fields"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasks/metrics/complete.json",
    "method": "getCompletedCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Total count of completed tasks",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific complete."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasks/metrics/late.json",
    "method": "getLateTaskCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get total count of late tasks",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains the count of late tasks.\nFollowing this format to satisfy the Numerics integration."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasks/{taskId}.json",
    "method": "deleteTask",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Delete an existing task.",
    "parameters": [
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasks/{taskId}.json",
    "method": "getSpecificTask",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get a specific task.",
    "parameters": [
      {
        "name": "taskId",
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
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasks/{taskId}.json",
    "method": "updateExistingTask",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Update an existing task.",
    "parameters": [
      {
        "name": "taskId",
        "schema": "integer",
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
        "name": "attachmentOptions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "object",
        "description": ""
      },
      {
        "name": "card",
        "schema": "object",
        "description": ""
      },
      {
        "name": "predecessors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "task",
        "schema": "object",
        "description": ""
      },
      {
        "name": "taskOptions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workflows",
        "schema": "object",
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
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      },
      {
        "statusCode": "409",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasks/{taskId}/comments.json",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TaskComments",
    "typeScriptTag": "taskComments",
    "description": "Get a list of comments for a task",
    "parameters": [
      {
        "name": "updatedAfterDate",
        "schema": "string",
        "description": "filter by updated after date (deprecated, use updatedAfter)"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by comment content (like v1 filterText param)"
      },
      {
        "name": "publishedStartDate",
        "schema": "string",
        "description": "filter by published after date"
      },
      {
        "name": "publishedEndDate",
        "schema": "string",
        "description": "filter by published before date"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "data"
      },
      {
        "name": "commentStatus",
        "schema": "string",
        "description": "filter by commment status"
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "strictHtml",
        "schema": "boolean",
        "description": "use strict html filtering fto content",
        "default": "false"
      },
      {
        "name": "getReactionsCount",
        "schema": "boolean",
        "description": "get reactions count"
      },
      {
        "name": "userIds",
        "schema": "array",
        "description": "filter by user ids"
      },
      {
        "name": "notifiedUserIds",
        "schema": "array",
        "description": "filter by users who got notified for the comments"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "CommentsResponse contains information about a group of comments."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasks/{taskId}/customfields.json",
    "method": "getValuesFromTask",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Task custom field values.",
    "parameters": [
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by custom field value"
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "taskId",
        "schema": "integer",
        "description": "filter by task id"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[customfields]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customFieldIds",
        "schema": "array",
        "description": "filter by custom field ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasks/{taskId}/customfields.json",
    "method": "addTaskCustomFieldValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Add task custom field value.",
    "parameters": [
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customfieldTask",
        "schema": "object",
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
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasks/{taskId}/customfields/bulk/delete.json",
    "method": "deleteManyTaskCustomFieldValues",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Delete many task custom fields values at once.",
    "parameters": [
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customfieldTaskIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasks/{taskId}/customfields/bulk/update.json",
    "method": "updateManyValues",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Update many task custom field values at once.",
    "parameters": [
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customfieldTasks",
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
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      },
      {
        "statusCode": "409",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasks/{taskId}/customfields/{customFieldId}.json",
    "method": "deleteTaskCustomFieldValue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Delete an existing task custom field value.",
    "parameters": [
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customFieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasks/{taskId}/customfields/{customFieldId}.json",
    "method": "getTaskCustomFieldValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Task custom field value.",
    "parameters": [
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customFieldId",
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
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasks/{taskId}/customfields/{customFieldId}.json",
    "method": "updateTaskCustomFieldValue",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Update an existing task custom field value.",
    "parameters": [
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customFieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customfieldTask",
        "schema": "object",
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
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      },
      {
        "statusCode": "409",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasks/{taskId}/subtasks.json",
    "method": "getSubtasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get all subtasks for a specific task.",
    "parameters": [
      {
        "name": "updatedBefore",
        "schema": "string",
        "description": "filter by updated before date"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "today",
        "schema": "string",
        "description": "filter by today"
      },
      {
        "name": "taskFilter",
        "schema": "string",
        "description": "filter by a taskFilter"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter on start date"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by search term"
      },
      {
        "name": "reportType",
        "schema": "string",
        "description": "define the type of the report",
        "default": "task"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report",
        "default": "pdf"
      },
      {
        "name": "priority",
        "schema": "string",
        "description": "filter by task priority"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "duedate"
      },
      {
        "name": "notCompletedBefore",
        "schema": "string",
        "description": "filter by projects that have not been completed before the given date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter on end date"
      },
      {
        "name": "dueBefore",
        "schema": "string",
        "description": "filter before a due date"
      },
      {
        "name": "dueAfter",
        "schema": "string",
        "description": "filter after a due date"
      },
      {
        "name": "deletedAfter",
        "schema": "string",
        "description": "filter on deleted after date"
      },
      {
        "name": "createdFilter",
        "schema": "string",
        "description": "filter by created filter"
      },
      {
        "name": "createdDateCode",
        "schema": "string",
        "description": "filter by created date code"
      },
      {
        "name": "createdBefore",
        "schema": "string",
        "description": "filter by created before date"
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "filter by created after date"
      },
      {
        "name": "completedBefore",
        "schema": "string",
        "description": "filter by completed before date"
      },
      {
        "name": "completedAfter",
        "schema": "string",
        "description": "filter by completed after date"
      },
      {
        "name": "updatedByUserId",
        "schema": "integer",
        "description": "filter by updated user id"
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "parentTaskId",
        "schema": "integer",
        "description": "filter by parent task ids"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "orderByCustomFieldId",
        "schema": "integer",
        "description": "order by custom field id when orderBy is equal to customfield"
      },
      {
        "name": "includeTaskId",
        "schema": "integer",
        "description": "include task id"
      },
      {
        "name": "filterId",
        "schema": "integer",
        "description": "provide a user saved filter ID"
      },
      {
        "name": "completedByUserId",
        "schema": "integer",
        "description": "filter by completed user id"
      },
      {
        "name": "useStartDatesForTodaysTasks",
        "schema": "boolean",
        "description": "use start dates for todays tasks"
      },
      {
        "name": "useFormulaFields",
        "schema": "boolean",
        "description": "use formula fields"
      },
      {
        "name": "useAllProjects",
        "schema": "boolean",
        "description": "filter on all projects"
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "showCompletedLists",
        "schema": "boolean",
        "description": "include tasks from completed lists"
      },
      {
        "name": "searchCompaniesTeams",
        "schema": "boolean",
        "description": "include companies and teams in the search term"
      },
      {
        "name": "searchAssignees",
        "schema": "boolean",
        "description": "include assignees in the search"
      },
      {
        "name": "onlyUntaggedTasks",
        "schema": "boolean",
        "description": "only untagged tasks"
      },
      {
        "name": "onlyUnplanned",
        "schema": "boolean",
        "description": "only return tasks that are unplanned. Not assigned, no due date or\nmissing estimated time.",
        "default": "false"
      },
      {
        "name": "onlyTasksWithUnreadComments",
        "schema": "boolean",
        "description": "filter by only tasks with unread comments"
      },
      {
        "name": "onlyTasksWithTickets",
        "schema": "boolean",
        "description": "filter by only tasks with tickets"
      },
      {
        "name": "onlyTasksWithEstimatedTime",
        "schema": "boolean",
        "description": "only return tasks with estimated time"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "onlyAdminProjects",
        "schema": "boolean",
        "description": "only include tasks from projects where the user is strictly a project admin.\nsite admins have visibility to all projects."
      },
      {
        "name": "nestSubTasks",
        "schema": "boolean",
        "description": "nest sub tasks"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "matchAllExcludedTags",
        "schema": "boolean",
        "description": "match all exclude tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report export.",
        "default": "false"
      },
      {
        "name": "includeUpdate",
        "schema": "boolean",
        "description": "include tasks latest update action"
      },
      {
        "name": "includeUntaggedTasks",
        "schema": "boolean",
        "description": "include untagged tasks"
      },
      {
        "name": "includeTomorrow",
        "schema": "boolean",
        "description": "filter by include tomorrow"
      },
      {
        "name": "includeToday",
        "schema": "boolean",
        "description": "filter by include today"
      },
      {
        "name": "includeTeamUserIds",
        "schema": "boolean",
        "description": "include members of the given teams"
      },
      {
        "name": "includeTasksWithoutDueDates",
        "schema": "boolean",
        "description": "include tasks without due dates"
      },
      {
        "name": "includeTasksWithCards",
        "schema": "boolean",
        "description": "include tasks with cards",
        "default": "true"
      },
      {
        "name": "includeTasksFromDeletedLists",
        "schema": "boolean",
        "description": "include tasks from deleted lists"
      },
      {
        "name": "includeRelatedTasks",
        "schema": "boolean",
        "description": "include ids of completed and active subtasks, dependencies, predecessors"
      },
      {
        "name": "includePrivateItems",
        "schema": "boolean",
        "description": "include private items"
      },
      {
        "name": "includeOverdueTasks",
        "schema": "boolean",
        "description": "include overdue tasks"
      },
      {
        "name": "includeOriginalDueDate",
        "schema": "boolean",
        "description": "include original due date of a task"
      },
      {
        "name": "includeCustomFields",
        "schema": "boolean",
        "description": "include custom fields",
        "default": "false"
      },
      {
        "name": "includeCompletedTasks",
        "schema": "boolean",
        "description": "include completed tasks"
      },
      {
        "name": "includeCompanyUserIds",
        "schema": "boolean",
        "description": "include members of the given companies"
      },
      {
        "name": "includeCommentStats",
        "schema": "boolean",
        "description": "include number of unread and read comments for each task",
        "default": "false"
      },
      {
        "name": "includeBlocked",
        "schema": "boolean",
        "description": "filter by include blocked"
      },
      {
        "name": "includeAttachmentCommentStats",
        "schema": "boolean",
        "description": "include number of unread and read comments for each file attachment",
        "default": "false"
      },
      {
        "name": "includeAssigneeTeams",
        "schema": "boolean",
        "description": "include teams related to the responsible user ids"
      },
      {
        "name": "includeAssigneeCompanies",
        "schema": "boolean",
        "description": "include companies related to the responsible user ids"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "includeAllComments",
        "schema": "boolean",
        "description": "include all comments"
      },
      {
        "name": "groupByTasklist",
        "schema": "boolean",
        "description": "group by tasklist"
      },
      {
        "name": "groupByTaskgroup",
        "schema": "boolean",
        "description": "group by taskgroup"
      },
      {
        "name": "getSubTasks",
        "schema": "boolean",
        "description": "get sub tasks"
      },
      {
        "name": "getFiles",
        "schema": "boolean",
        "description": "get files"
      },
      {
        "name": "fallbackToMilestoneDueDate",
        "schema": "boolean",
        "description": "set due date as milestone due date if due date is null and there's a related milestone"
      },
      {
        "name": "extractTemplateRoleName",
        "schema": "boolean",
        "description": "For tasks created in a project template it's possible to assign a role instead of people, companies or teams.\nThis role is then stored with the task name as a prefix. When this flag is enabled it will extract the role name\nand return it inside a special field."
      },
      {
        "name": "excludeAssigneeNotOnProjectTeams",
        "schema": "boolean",
        "description": "exclude assignee not on project teams"
      },
      {
        "name": "completedOnly",
        "schema": "boolean",
        "description": "only completed tasks",
        "default": "false"
      },
      {
        "name": "checkForReminders",
        "schema": "boolean",
        "description": "check if task has reminders"
      },
      {
        "name": "allowAssigneesOutsideProject",
        "schema": "boolean",
        "description": "when filtering by assigned or unassagned tasks, include assignees that\nare not in the project.",
        "default": "true"
      },
      {
        "name": "tasksSelectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed for tasks report"
      },
      {
        "name": "tasklistIds",
        "schema": "array",
        "description": "filter by tasklist ids"
      },
      {
        "name": "taskgroupIds",
        "schema": "array",
        "description": "filter by taskgroup ids"
      },
      {
        "name": "taskIncludedSet",
        "schema": "array",
        "description": "filter by task included set"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "filter by tag values"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "status",
        "schema": "array",
        "description": "filter by list of task status"
      },
      {
        "name": "skipCrmDealIds",
        "schema": "array",
        "description": "skip crm deal ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns to be displayed for planned vs actual."
      },
      {
        "name": "responsiblePartyIds",
        "schema": "array",
        "description": "filter by responsible party ids"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectFeaturesEnabled",
        "schema": "array",
        "description": "filter by projects that have features enabled"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "includeCustomFieldIds",
        "schema": "array",
        "description": "include specific custom fields"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by task ids"
      },
      {
        "name": "followedByUserIds",
        "schema": "array",
        "description": "filter by followed by user ids"
      },
      {
        "name": "filterBoardColumnIds",
        "schema": "array",
        "description": "filter by board column ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[timers]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[teams]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[taskgroups]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[taskSequences]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[lockdowns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[files]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[comments]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[columns]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[cards]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectPermissions]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "expandedIds",
        "schema": "array",
        "description": "the ids of the expanded tasks"
      },
      {
        "name": "excludeTagIds",
        "schema": "array",
        "description": "filter by excluded tag ids"
      },
      {
        "name": "crmDealIds",
        "schema": "array",
        "description": "filter by crm deal ids"
      },
      {
        "name": "createdByUserIds",
        "schema": "array",
        "description": "filter by creator user ids"
      },
      {
        "name": "assigneeTeamIds",
        "schema": "array",
        "description": "filter by assignee team ids"
      },
      {
        "name": "assigneeCompanyIds",
        "schema": "array",
        "description": "filter by assignee company ids"
      },
      {
        "name": "customFields",
        "schema": "array",
        "description": "filter by custom fields"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasks/{taskId}/subtasks.json",
    "method": "createSubtask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Creates a subtask.",
    "parameters": [
      {
        "name": "taskId",
        "schema": "integer",
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
        "name": "attachmentOptions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "object",
        "description": ""
      },
      {
        "name": "card",
        "schema": "object",
        "description": ""
      },
      {
        "name": "predecessors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "task",
        "schema": "object",
        "description": ""
      },
      {
        "name": "taskOptions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workflows",
        "schema": "object",
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
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasks/{taskId}/time.json",
    "method": "getTaskTimeEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Get time entries for a specific task",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by a starting date"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "sort order",
        "default": "date"
      },
      {
        "name": "invoicedType",
        "schema": "string",
        "description": "filter by invoiced type",
        "default": "all"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by an ending date"
      },
      {
        "name": "billableType",
        "schema": "string",
        "description": "filter by billable type",
        "default": "all"
      },
      {
        "name": "updatedBy",
        "schema": "integer",
        "description": "filter by the user who updated the timelog"
      },
      {
        "name": "ticketId",
        "schema": "integer",
        "description": "filter by ticket id"
      },
      {
        "name": "tasklistId",
        "schema": "integer",
        "description": "filter by tasklist id"
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "taskId",
        "schema": "integer",
        "description": "filter by task id (deprecated, use taskIds)"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project id (deprecated, use projectIds)"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "budgetId",
        "schema": "integer",
        "description": "filter by budget id"
      },
      {
        "name": "allocationId",
        "schema": "integer",
        "description": "filter by allocation id"
      },
      {
        "name": "unattachedTimelogs",
        "schema": "boolean",
        "description": "filter by timelogs that are directly logged against projects and not its child tasks"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "matchAllTaskTags",
        "schema": "boolean",
        "description": "match all task tags"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeTotals",
        "schema": "boolean",
        "description": "include totals",
        "default": "false"
      },
      {
        "name": "includePermissions",
        "schema": "boolean",
        "description": "include permissions",
        "default": "false"
      },
      {
        "name": "includeDescendants",
        "schema": "boolean",
        "description": "include descendants",
        "default": "false"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "taskTagIds",
        "schema": "array",
        "description": "filter by task tag ids"
      },
      {
        "name": "taskIds",
        "schema": "array",
        "description": "filter by task ids"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns"
      },
      {
        "name": "projectsFromCompanyId",
        "schema": "array",
        "description": "filter by project company ids (deprecated, use projectCompanyIds)"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project statuses"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by project company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[timelogs]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectcategories]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "assignedToUserIds",
        "schema": "array",
        "description": "filter by assigned user ids"
      },
      {
        "name": "assignedToTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      },
      {
        "name": "assignedToCompanyIds",
        "schema": "array",
        "description": "filter by assigned company ids"
      },
      {
        "name": "assignedTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TimelogsResponse contains information about a group of timelogs."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasks/{taskId}/time.json",
    "method": "createLinkedEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Create a time entry linked to a specific task.",
    "parameters": [
      {
        "name": "taskId",
        "schema": "integer",
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
        "name": "timelog",
        "schema": "object",
        "description": ""
      },
      {
        "name": "timelogOptions",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Response contains information about a specific timelog."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/tasks/{taskId}/time/total.json",
    "method": "getTimelogTotals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Get timelog totals for a specific task.",
    "parameters": [
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TotalsResponse contains information about timelog totals."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/teams/{teamId}/statuses/timeline.json",
    "method": "listTimeline",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PeopleStatus",
    "typeScriptTag": "peopleStatus",
    "description": "Get statuses timeline for a specific team",
    "parameters": [
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by the user name or status message"
      },
      {
        "name": "teamId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "teamId",
        "schema": "integer",
        "description": "filter by team"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "showDeleted statuses",
        "default": "false"
      },
      {
        "name": "includeSubteams",
        "schema": "boolean",
        "description": "also include statuses from subteams"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TimelineResponse contains information about a group of statuses."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/time.json",
    "method": "getAllEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Get all time entries",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by a starting date"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "sort order",
        "default": "date"
      },
      {
        "name": "invoicedType",
        "schema": "string",
        "description": "filter by invoiced type",
        "default": "all"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by an ending date"
      },
      {
        "name": "billableType",
        "schema": "string",
        "description": "filter by billable type",
        "default": "all"
      },
      {
        "name": "updatedBy",
        "schema": "integer",
        "description": "filter by the user who updated the timelog"
      },
      {
        "name": "ticketId",
        "schema": "integer",
        "description": "filter by ticket id"
      },
      {
        "name": "tasklistId",
        "schema": "integer",
        "description": "filter by tasklist id"
      },
      {
        "name": "taskId",
        "schema": "integer",
        "description": "filter by task id (deprecated, use taskIds)"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project id (deprecated, use projectIds)"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "budgetId",
        "schema": "integer",
        "description": "filter by budget id"
      },
      {
        "name": "allocationId",
        "schema": "integer",
        "description": "filter by allocation id"
      },
      {
        "name": "unattachedTimelogs",
        "schema": "boolean",
        "description": "filter by timelogs that are directly logged against projects and not its child tasks"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "matchAllTaskTags",
        "schema": "boolean",
        "description": "match all task tags"
      },
      {
        "name": "matchAllTags",
        "schema": "boolean",
        "description": "match all tags"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report document"
      },
      {
        "name": "includeTotals",
        "schema": "boolean",
        "description": "include totals",
        "default": "false"
      },
      {
        "name": "includePermissions",
        "schema": "boolean",
        "description": "include permissions",
        "default": "false"
      },
      {
        "name": "includeDescendants",
        "schema": "boolean",
        "description": "include descendants",
        "default": "false"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "taskTagIds",
        "schema": "array",
        "description": "filter by task tag ids"
      },
      {
        "name": "taskIds",
        "schema": "array",
        "description": "filter by task ids"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "selectedColumns",
        "schema": "array",
        "description": "customise the report by selecting columns"
      },
      {
        "name": "projectsFromCompanyId",
        "schema": "array",
        "description": "filter by project company ids (deprecated, use projectCompanyIds)"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project statuses"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by project company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "filter by ids"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[timelogs]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tags]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projectcategories]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "assignedToUserIds",
        "schema": "array",
        "description": "filter by assigned user ids"
      },
      {
        "name": "assignedToTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      },
      {
        "name": "assignedToCompanyIds",
        "schema": "array",
        "description": "filter by assigned company ids"
      },
      {
        "name": "assignedTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TimelogsResponse contains information about a group of timelogs."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/time/total.json",
    "method": "getTimelogTotals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Get timelog totals.",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by a starting date"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by an ending date"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "filter by user id (deprecated, use assignedToUserIds)"
      },
      {
        "name": "tasklistId",
        "schema": "integer",
        "description": "filter by tasklist id"
      },
      {
        "name": "taskId",
        "schema": "integer",
        "description": "filter by task id (deprecated, use taskIds)"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project id"
      },
      {
        "name": "deskTicketId",
        "schema": "integer",
        "description": "filter by desk ticket id"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "match all project tags"
      },
      {
        "name": "includeDescendants",
        "schema": "boolean",
        "description": "get subtask totals"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects",
        "default": "false"
      },
      {
        "name": "userIds",
        "schema": "array",
        "description": "filter by user ids (deprecated, use assignedToUserIds)"
      },
      {
        "name": "taskIds",
        "schema": "array",
        "description": "filter by task ids"
      },
      {
        "name": "subTaskStatuses",
        "schema": "array",
        "description": "filter by sub-task status, includeDescendants must be set to true\nfor this to have any effect",
        "default": "all"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project statuses"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "filter by project healths\n\n0: not set\n1: bad\n2: ok\n3: good"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by project company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "companyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "assignedToUserIds",
        "schema": "array",
        "description": "filter by assigned user ids"
      },
      {
        "name": "assignedToTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      },
      {
        "name": "assignedToCompanyIds",
        "schema": "array",
        "description": "filter by assigned company ids"
      },
      {
        "name": "assignedTeamIds",
        "schema": "array",
        "description": "filter by assigned team ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TotalsResponse contains information about timelog totals."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/time/{timelogId}.json",
    "method": "deleteTimelog",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Delete an existing timelog.",
    "parameters": [
      {
        "name": "timelogId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "204 No Content (no data)"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/time/{timelogId}.json",
    "method": "getSpecificTimeEntry",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Get a specific time entry",
    "parameters": [
      {
        "name": "timelogId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific timelog."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/time/{timelogId}.json",
    "method": "updateExistingTimeEntry",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Update an existing time entry.",
    "parameters": [
      {
        "name": "timelogId",
        "schema": "integer",
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
        "name": "timelog",
        "schema": "object",
        "description": ""
      },
      {
        "name": "timelogOptions",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains information about a specific timelog."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "403",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      },
      {
        "statusCode": "409",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/timers.json",
    "method": "getAllRunningTimers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Get all running timers",
    "parameters": [
      {
        "name": "updatedAfterDate",
        "schema": "string",
        "description": "filter by updated after date (deprecated, use updatedAfter)"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "filter by updated after date"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "filter by user id"
      },
      {
        "name": "taskId",
        "schema": "integer",
        "description": "filter by task id"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "description": "filter by project id"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "include deleted items",
        "default": "false"
      },
      {
        "name": "runningTimersOnly",
        "schema": "boolean",
        "description": "enforce running timers only",
        "default": "false"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[timers]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "TimersResponse contains all the information returned when sending a GET\nrequest to the timers endpoint."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/timers/{timerId}.json",
    "method": "getSpecificTimer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TimeTracking",
    "typeScriptTag": "timeTracking",
    "description": "Get a specific timer",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "description": "filter by user id"
      },
      {
        "name": "timerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "showDeleted",
        "schema": "boolean",
        "description": "filter by task id"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[timers]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[projects]",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response contains the information returned when sending a PUT/POST\nrequest to the timers endpoint, or GET request for a single item by ID"
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      },
      {
        "statusCode": "404",
        "description": "404 Not Found (no data)"
      }
    ]
  },
  {
    "url": "/projects/api/v3/timesheets.json",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Get list of timesheet rows",
    "parameters": [
      {
        "name": "weekDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taskStatus",
        "schema": "string",
        "description": "filter by task status",
        "default": "all"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by a starting date, will default to the start of users work week."
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by tasks/projects/company names"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "dueDate"
      },
      {
        "name": "invoicedType",
        "schema": "string",
        "description": "filter by invoiced type",
        "default": "all"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by an ending date, will default to the end of users work week."
      },
      {
        "name": "billableType",
        "schema": "string",
        "description": "filter by billable type",
        "default": "all"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "filter by user id, will default to session user"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report export.",
        "default": "false"
      },
      {
        "name": "includeUnavailableTimes",
        "schema": "boolean",
        "description": "include users unavailable times field."
      },
      {
        "name": "hasTimeLogged",
        "schema": "boolean",
        "description": "filter by tasks and projects that have time logged"
      },
      {
        "name": "assignedToTeams",
        "schema": "boolean",
        "description": "also include tasks that are assigned to teams"
      },
      {
        "name": "taskIds",
        "schema": "array",
        "description": "filter by task ids"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project statuses",
        "default": "all"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "excludeTimeframes",
        "schema": "array",
        "description": "exclude by time frames",
        "default": "empty"
      },
      {
        "name": "companyIds",
        "schema": "array",
        "description": "filter by company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "MyTimesheetsResponse contains timesheets list, includes and metadata."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/timesheets/totals.json",
    "method": "getTotals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Timesheets",
    "typeScriptTag": "timesheets",
    "description": "Get the totals for the all the user's timesheets.",
    "parameters": [
      {
        "name": "weekDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taskStatus",
        "schema": "string",
        "description": "filter by task status",
        "default": "all"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "filter by a starting date, will default to the start of users work week."
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "filter by tasks/projects/company names"
      },
      {
        "name": "reportFormat",
        "schema": "string",
        "description": "define the format of the report"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "dueDate"
      },
      {
        "name": "invoicedType",
        "schema": "string",
        "description": "filter by invoiced type",
        "default": "all"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "filter by an ending date, will default to the end of users work week."
      },
      {
        "name": "billableType",
        "schema": "string",
        "description": "filter by billable type",
        "default": "all"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "filter by user id, will default to session user"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects"
      },
      {
        "name": "isReportDownload",
        "schema": "boolean",
        "description": "generate a report export.",
        "default": "false"
      },
      {
        "name": "includeUnavailableTimes",
        "schema": "boolean",
        "description": "include users unavailable times field."
      },
      {
        "name": "hasTimeLogged",
        "schema": "boolean",
        "description": "filter by tasks and projects that have time logged"
      },
      {
        "name": "assignedToTeams",
        "schema": "boolean",
        "description": "also include tasks that are assigned to teams"
      },
      {
        "name": "taskIds",
        "schema": "array",
        "description": "filter by task ids"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "filter by project statuses",
        "default": "all"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "excludeTimeframes",
        "schema": "array",
        "description": "exclude by time frames",
        "default": "empty"
      },
      {
        "name": "companyIds",
        "schema": "array",
        "description": "filter by company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "MyTimesheetsTotalsResponse contains timesheets list, includes and metadata."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  },
  {
    "url": "/projects/api/v3/workload/planners.json",
    "method": "getPlanner",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workload",
    "typeScriptTag": "workload",
    "description": "Retrieve user workload planner",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "define the start date of the planner"
      },
      {
        "name": "searchUserName",
        "schema": "string",
        "description": "filter by user name"
      },
      {
        "name": "searchTaskName",
        "schema": "string",
        "description": "filter by task name"
      },
      {
        "name": "projectStatus",
        "schema": "string",
        "description": "filter by project status"
      },
      {
        "name": "orderMode",
        "schema": "string",
        "description": "order mode",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "order by",
        "default": "name"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "define the end date of the planner"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of items in a page",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "page number",
        "default": "1"
      },
      {
        "name": "subtractLoggedTimeFromEstimates",
        "schema": "boolean",
        "description": "subtract logged time from task estimated time"
      },
      {
        "name": "skipCounts",
        "schema": "boolean",
        "description": "SkipCounts allows you to skip doing counts on a list API endpoint for\nperformance reasons."
      },
      {
        "name": "prorating",
        "schema": "boolean",
        "description": "include tasks that have the start and due dates outside the window range",
        "default": "false"
      },
      {
        "name": "onlyUntaggedTasks",
        "schema": "boolean",
        "description": "filter ony untagged tasks"
      },
      {
        "name": "onlyStarredProjects",
        "schema": "boolean",
        "description": "filter by starred projects only"
      },
      {
        "name": "matchAllProjectTags",
        "schema": "boolean",
        "description": "enforce all tag ids must be matched"
      },
      {
        "name": "includeTeamUserIds",
        "schema": "boolean",
        "description": "include team users to the responsible party ids",
        "default": "true"
      },
      {
        "name": "includeTasksWithoutDates",
        "schema": "boolean",
        "description": "include tasks without start or due date"
      },
      {
        "name": "includeCompletedTasks",
        "schema": "boolean",
        "description": "include completed tasks"
      },
      {
        "name": "includeCompanyUserIds",
        "schema": "boolean",
        "description": "include company users to the responsible party ids",
        "default": "true"
      },
      {
        "name": "includeCalendarEvents",
        "schema": "boolean",
        "description": "include calendar events on capacity calculation"
      },
      {
        "name": "includeAssigneeTeams",
        "schema": "boolean",
        "description": "include teams related to the responsible party ids"
      },
      {
        "name": "includeAssigneeCompanies",
        "schema": "boolean",
        "description": "include companies related to the responsible party ids"
      },
      {
        "name": "includeArchivedProjects",
        "schema": "boolean",
        "description": "include archived projects"
      },
      {
        "name": "distribute",
        "schema": "boolean",
        "description": "distribute the estimated time for a task between all the assignees"
      },
      {
        "name": "teamIds",
        "schema": "array",
        "description": "filter by member of team ids"
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": "filter by task tag ids"
      },
      {
        "name": "responsiblePartyIds",
        "schema": "array",
        "description": "filter by responsible party ids"
      },
      {
        "name": "projectTagIds",
        "schema": "array",
        "description": "filter by project tag ids"
      },
      {
        "name": "projectStatuses",
        "schema": "array",
        "description": "list of project status"
      },
      {
        "name": "projectOwnerIds",
        "schema": "array",
        "description": "filter by project owner ids"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "filter by project ids"
      },
      {
        "name": "projectHealths",
        "schema": "array",
        "description": "list of project health"
      },
      {
        "name": "projectCompanyIds",
        "schema": "array",
        "description": "filter by company ids"
      },
      {
        "name": "projectCategoryIds",
        "schema": "array",
        "description": "filter by project category ids"
      },
      {
        "name": "memberOfProjectIds",
        "schema": "array",
        "description": "filter by member of project ids"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "include"
      },
      {
        "name": "fields[workingHours]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[workingHourEntries]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[users]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[timelogs]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasks]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[tasklists]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[milestones]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[companies]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fields[calendarEvents]",
        "schema": "array",
        "description": ""
      },
      {
        "name": "excludeTagIds",
        "schema": "array",
        "description": "filter by removing task tag ids"
      },
      {
        "name": "companyIds",
        "schema": "array",
        "description": "filter by user company id"
      },
      {
        "name": "assigneeTeamIds",
        "schema": "array",
        "description": "filter by assignee team ids"
      },
      {
        "name": "assigneeCompanyIds",
        "schema": "array",
        "description": "filter by assignee company ids"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "WorkloadPlannersResponse contains information about a group of planners."
      },
      {
        "statusCode": "400",
        "description": "ErrorResponse defines how []Error should be marshaled to JSON."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Teamwork API V3"
      apiBaseUrl="https://{site_name}.teamwork.com"
      apiVersion="3.0"
      endpoints={147}
      sdkMethods={188}
      schemas={296}
      parameters={4155}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/teamwork/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/teamwork/openapi.yaml"
      developerDocumentation="apidocs.teamwork.com/"
    />
  );
}
  