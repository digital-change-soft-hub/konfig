import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('invalid-required-property-syntax', [
  {
    name: 'invalid case - snaptrade',
    document: {
      openapi: '3.0.0',
      info: {
        description:
          'Connect brokerage accounts to your app for live positions and trading',
        version: '1.0.0',
        title: 'SnapTrade',
        termsOfService: 'N/A',
        contact: {
          email: 'api@snaptrade.com',
        },
        'x-konfig-ignore': {
          'potential-incorrect-type': true,
        },
        'x-readme': {
          'explorer-enabled': false,
        },
      },
      servers: [
        {
          description: 'SnapTrade Production API',
          url: 'https://api.snaptrade.com/api/v1',
        },
      ],
      security: [
        {
          PartnerSignature: [],
          PartnerClientId: [],
          PartnerTimestamp: [],
        },
      ],
      tags: [
        {
          name: 'API Status',
          description:
            'Check whether the API is operational and verify timestamps.',
        },
        {
          name: 'API Disclaimer',
          description:
            'Endpoints related to terms of conditions of SnapTrade API use',
        },
        {
          name: 'Custom Brokerage API Credentials',
          description:
            'Allows SnapTrade partners to use their own brokerage API credentials',
        },
        {
          name: 'Development Tools',
          description: 'Test and debug API authentication.',
        },
        {
          name: 'Authentication',
          description: 'Register and authenticate users with SnapTrade.',
        },
        {
          name: 'Connections',
          description: 'Retrieve and manage user connections.',
        },
        {
          name: 'Account Information',
          description:
            'Retrieve account information, such as positions, balances, etc.',
        },
        {
          name: 'Transactions And Reporting',
          description:
            'Retrieve information on account transactions, performance, dividends, contributions, etc.',
        },
        {
          name: 'Trading',
          description: 'Manage orders on user accounts',
        },
        {
          name: 'Reference Data',
          description:
            'Retrieve basic information for API use, such as supported brokerages, exchanges, currencies, etc.',
        },
        {
          name: 'Error Logs',
          description:
            'Retrieve error logs for your SnapTrade users and API requests.',
        },
        {
          name: 'Webhooks',
          description:
            'Reach out directly to SnapTrade to enable webhooks in order to be notified when certain events occur.',
        },
        {
          name: 'Options',
          description:
            'Endpoints to search for options prices and chains as well as place options trades if supported.',
        },
      ],
      paths: {
        '/': {
          get: {
            tags: ['API Status'],
            summary: 'Get API Status',
            description:
              'Check whether the API is operational and verify timestamps.',
            operationId: 'ApiStatus_check',
            security: [],
            responses: {
              '200': {
                description: 'API is alive and kicking in some fashion',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/Status',
                    },
                  },
                },
              },
              default: {
                description: 'Unexpected error.',
              },
            },
          },
        },
        '/snapTrade/apiCredentials': {
          get: {
            tags: ['Custom Brokerage API Credentials'],
            summary:
              'Gets a list of api credentials linked to SnapTrade Partner',
            operationId: 'CustomBrokerageAPICredentials_list',
            parameters: [],
            responses: {
              '200': {
                description:
                  'Returns data needed to verify that request signature is correct',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/SnapTradePartnerAPICredential',
                      },
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected Error. Please contact support',
              },
            },
          },
          post: {
            tags: ['Custom Brokerage API Credentials'],
            summary: 'Creates a new SnapTradePartnerAPICredential object',
            operationId: 'CustomBrokerageAPICredentials_create',
            parameters: [],
            requestBody: {
              $ref: '#/components/requestBodies/CreateSnapTradeParterAPICredentialsRequestBody',
            },
            responses: {
              '200': {
                description:
                  'Returns created SnapTradePartnerAPICredential object',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/SnapTradePartnerAPICredential',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected Error. Please contact support',
              },
            },
          },
        },
        '/snapTrade/apiCredentials/{apiCredentialsId}': {
          get: {
            tags: ['Custom Brokerage API Credentials'],
            summary: 'Gets SnapTradePartnerAPICredential based on id',
            operationId: 'CustomBrokerageAPICredentials_getById',
            parameters: [
              {
                in: 'path',
                name: 'apiCredentialsId',
                required: true,
                description:
                  'The ID of the SnapTradePartnerAPICredential object.',
                schema: {
                  type: 'string',
                  format: 'uuid',
                },
              },
            ],
            responses: {
              '200': {
                description:
                  'Get SnapTradePartnerAPICredential obj based on id',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/SnapTradePartnerAPICredential',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected Error. Please contact support',
              },
            },
          },
          put: {
            tags: ['Custom Brokerage API Credentials'],
            summary: 'Updates SnapTradePartnerAPICredential object',
            operationId: 'CustomBrokerageAPICredentials_updateById',
            parameters: [
              {
                in: 'path',
                name: 'apiCredentialsId',
                required: true,
                description:
                  'The ID of the SnapTradePartnerAPICredential object.',
                schema: {
                  type: 'string',
                  format: 'uuid',
                },
              },
            ],
            requestBody: {
              $ref: '#/components/requestBodies/CreateSnapTradeParterAPICredentialsRequestBody',
            },
            responses: {
              '200': {
                description:
                  'Get SnapTradePartnerAPICredential obj based on id',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/SnapTradePartnerAPICredential',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected Error. Please contact support',
              },
            },
          },
          delete: {
            tags: ['Custom Brokerage API Credentials'],
            summary: 'Deletes SnapTradePartnerAPICredential object',
            operationId: 'CustomBrokerageAPICredentials_deleteById',
            parameters: [
              {
                in: 'path',
                name: 'apiCredentialsId',
                required: true,
                description:
                  'The ID of the SnapTradePartnerAPICredential object.',
                schema: {
                  type: 'string',
                  format: 'uuid',
                },
              },
            ],
            responses: {
              '204': {
                description:
                  'SnapTradePartnerAPICredential object was delete successfully',
              },
              '500': {
                description: 'Unexpected Error. Please contact support',
              },
            },
          },
        },
        '/snapTrade/listUsers': {
          get: {
            tags: ['Authentication'],
            summary: 'List SnapTrade users',
            operationId: 'Authentication_listSnapTradeUsers',
            responses: {
              '200': {
                description: 'Successfully generated a list of users',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/UserList',
                    },
                  },
                },
              },
              '400': {
                description:
                  'Bad Request. Could be caused by various reasons. Error message is provided in response',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/400FailedRequestResponse',
                    },
                  },
                },
              },
              '404': {
                description: 'Invalid SnapTrade Client ID provided in query',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/404FailedRequestResponse',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected error',
              },
            },
          },
        },
        '/snapTrade/registerUser': {
          post: {
            tags: ['Authentication'],
            summary: 'Create SnapTrade user',
            operationId: 'Authentication_registerSnapTradeUser',
            requestBody: {
              $ref: '#/components/requestBodies/RegisterUserRequestBody',
            },
            responses: {
              '200': {
                description: 'Successfully registered user',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/UserIDandSecret',
                    },
                  },
                },
              },
              '400': {
                description:
                  'Bad Request. Could be caused by various reasons. Error message is provided in response',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/400FailedRequestResponse',
                    },
                  },
                },
              },
              '404': {
                description: 'Invalid SnapTrade Client ID provided in query',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/404FailedRequestResponse',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected error',
              },
            },
          },
        },
        '/snapTrade/deleteUser': {
          delete: {
            tags: ['Authentication'],
            summary: 'Delete SnapTrade user',
            operationId: 'Authentication_deleteSnapTradeUser',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
            ],
            responses: {
              '200': {
                description: 'Delete successful',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/DeleteUserResponse',
                    },
                  },
                },
              },
              '400': {
                description: 'Bad Request',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/400FailedRequestResponse',
                    },
                  },
                },
              },
              '403': {
                description: 'Forbidden',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/403FailedRequestResponse',
                    },
                  },
                },
              },
              '404': {
                description: 'Not Found',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/404FailedRequestResponse',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected Error',
              },
            },
          },
        },
        '/snapTrade/login': {
          post: {
            tags: ['Authentication'],
            summary: 'Login user & generate connection link',
            operationId: 'Authentication_loginSnapTradeUser',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
            ],
            requestBody: {
              $ref: '#/components/requestBodies/SnapTradeLoginUserRequestBody',
            },
            responses: {
              '200': {
                description:
                  'Login successful. Redirect user to provided URI in response',
                content: {
                  'application/json': {
                    schema: {
                      oneOf: [
                        {
                          $ref: '#/components/schemas/LoginRedirectURI',
                        },
                        {
                          $ref: '#/components/schemas/encryptedResponse',
                        },
                      ],
                    },
                  },
                },
              },
              '400': {
                description: 'Bad Request',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/400FailedRequestResponse',
                    },
                  },
                },
              },
              '403': {
                description: 'Forbidden',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/403FailedRequestResponse',
                    },
                  },
                },
              },
              '404': {
                description: 'Not Found',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/404FailedRequestResponse',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected Error',
              },
            },
          },
        },
        '/snapTrade/encryptedJWT': {
          get: {
            tags: ['Authentication'],
            summary: 'Generate encrypted JWT token',
            operationId: 'Authentication_getUserJWT',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
            ],
            responses: {
              '200': {
                description:
                  'Successfully obtained encrypted JWT data. See description on how to object JWT token',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/encryptedResponse',
                    },
                  },
                },
              },
              '400': {
                description: 'Bad Request',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/400FailedRequestResponse',
                    },
                  },
                },
              },
              '403': {
                description: 'Forbidden',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/403FailedRequestResponse',
                    },
                  },
                },
              },
              '404': {
                description: 'Not Found',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/404FailedRequestResponse',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected Error',
              },
            },
          },
        },
        '/snapTrade/partners': {
          get: {
            tags: ['Reference Data'],
            summary: 'Get metadata related to Snaptrade partner',
            operationId: 'ReferenceData_getPartnerInfo',
            parameters: [],
            responses: {
              '200': {
                description:
                  'Successfully obtained encrypted JWT data. See description on how to object JWT token',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/PartnerData',
                    },
                  },
                },
              },
              '400': {
                description: 'Bad Request',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/400FailedRequestResponse',
                    },
                  },
                },
              },
              '401': {
                description: 'Unauthorized',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/401FailedRequestResponse',
                    },
                  },
                },
              },
              '404': {
                description: 'Not Found',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/404FailedRequestResponse',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected Error',
              },
            },
          },
        },
        '/holdings': {
          get: {
            deprecated: true,
            tags: ['Account Information'],
            summary:
              'List all accounts for the user, plus balances, positions, and orders for each account.',
            operationId: 'AccountInformation_getAllUserHoldings',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
              {
                in: 'query',
                required: false,
                name: 'brokerage_authorizations',
                description:
                  'Optional. Comma seperated list of authorization IDs (only use if filtering is needed on one or more authorizations).',
                schema: {
                  type: 'string',
                  format: 'uuid',
                  example: '917c8734-8470-4a3e-a18f-57c3f2ee6631',
                },
              },
            ],
            responses: {
              '200': {
                description: 'Returns list of accounts and holdings',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/AccountHoldings',
                      },
                    },
                  },
                },
              },
              '400': {
                description: 'Bad Request',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/400FailedRequestResponse',
                    },
                  },
                },
              },
              '403': {
                description: 'Forbidden',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/403FailedRequestResponse',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected Error',
              },
            },
          },
        },
        '/accounts/{accountId}/holdings': {
          get: {
            tags: ['Account Information'],
            summary:
              'List balances, positions and orders for the specified account.',
            operationId: 'AccountInformation_getUserHoldings',
            parameters: [
              {
                in: 'path',
                name: 'accountId',
                required: true,
                description: 'The ID of the account to fetch holdings for.',
                schema: {
                  type: 'string',
                  format: 'uuid',
                  example: '917c8734-8470-4a3e-a18f-57c3f2ee6631',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
            ],
            responses: {
              '200': {
                description: 'Returns holdings for the account',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/AccountHoldingsAccount',
                    },
                  },
                },
              },
              '400': {
                description: 'Bad Request',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/400FailedRequestResponse',
                    },
                  },
                },
              },
              '403': {
                description: 'Forbidden',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/403FailedRequestResponse',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected Error',
              },
            },
          },
        },
        '/accounts': {
          get: {
            tags: ['Account Information'],
            summary: 'List accounts',
            operationId: 'AccountInformation_listUserAccounts',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
            ],
            responses: {
              '200': {
                description:
                  'A list of all Account objects for the authenticated user.',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Account',
                      },
                    },
                  },
                },
              },
              default: {
                description: 'Unexpected error.',
              },
            },
          },
        },
        '/accounts/{accountId}': {
          get: {
            tags: ['Account Information'],
            summary: 'Return details of a specific investment account',
            operationId: 'AccountInformation_getUserAccountDetails',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
              {
                in: 'path',
                name: 'accountId',
                required: true,
                description: 'The ID of the account to get detail of.',
                schema: {
                  type: 'string',
                  format: 'uuid',
                },
              },
            ],
            responses: {
              '200': {
                description: 'Details of a specific investment account',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/Account',
                    },
                  },
                },
              },
              default: {
                description: 'Unexpected error',
              },
            },
          },
          put: {
            tags: ['Account Information'],
            summary: 'Update details of an investment account',
            operationId: 'AccountInformation_updateUserAccount',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
              {
                in: 'path',
                name: 'accountId',
                required: true,
                description: 'The ID of the account to update.',
                schema: {
                  type: 'string',
                  format: 'uuid',
                },
              },
            ],
            responses: {
              '200': {
                description:
                  'Successfully updated details of an investment account',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Account',
                      },
                    },
                  },
                },
              },
              default: {
                description: 'Unexpected error',
              },
            },
          },
        },
        '/accounts/{accountId}/balances': {
          get: {
            tags: ['Account Information'],
            summary: 'List account balances',
            operationId: 'AccountInformation_getUserAccountBalance',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
              {
                in: 'path',
                name: 'accountId',
                required: true,
                description: 'The ID of the account get positions.',
                schema: {
                  type: 'string',
                  format: 'uuid',
                },
              },
            ],
            responses: {
              '200': {
                description: 'List of all balances in investment account',
                content: {
                  '*/*': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Balance',
                      },
                    },
                  },
                },
              },
              default: {
                description: 'Unexpected error',
              },
            },
          },
        },
        '/accounts/{accountId}/positions': {
          get: {
            tags: ['Account Information'],
            summary: 'List account positions',
            operationId: 'AccountInformation_getUserAccountPositions',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
              {
                in: 'path',
                name: 'accountId',
                required: true,
                description: 'The ID of the account get positions.',
                schema: {
                  type: 'string',
                  format: 'uuid',
                },
              },
            ],
            responses: {
              '200': {
                description: 'List all positions in investment account',
                content: {
                  '*/*': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Position',
                      },
                    },
                  },
                },
              },
              default: {
                description: 'Unexpected error',
              },
            },
          },
        },
        '/accounts/{accountId}/orders': {
          get: {
            tags: ['Account Information'],
            summary: 'Get history of orders placed in account',
            operationId: 'AccountInformation_getUserAccountOrders',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
              {
                in: 'query',
                name: 'state',
                description: 'defaults value is set to "all"',
                schema: {
                  type: 'string',
                  enum: ['all', 'open', 'executed'],
                },
              },
              {
                in: 'path',
                name: 'accountId',
                required: true,
                description: 'The ID of the account get positions.',
                schema: {
                  type: 'string',
                  format: 'uuid',
                },
              },
            ],
            responses: {
              '200': {
                description: 'List all orders in account',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/AccountOrderRecord',
                      },
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected error',
              },
            },
          },
        },
        '/accounts/{accountId}/quotes': {
          get: {
            tags: ['Trading'],
            summary: 'Get symbol quotes',
            operationId: 'Trading_getUserAccountQuotes',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
              {
                in: 'query',
                name: 'symbols',
                required: true,
                description:
                  'List of universal_symbol_id or tickers to get quotes for.',
                schema: {
                  type: 'string',
                },
              },
              {
                in: 'query',
                name: 'use_ticker',
                description: 'Should be set to True if providing tickers.',
                schema: {
                  type: 'boolean',
                },
              },
              {
                in: 'path',
                name: 'accountId',
                required: true,
                description: 'The ID of the account to get quotes.',
                schema: {
                  type: 'string',
                },
              },
            ],
            responses: {
              '200': {
                description: 'Returns quotes object with different prices',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/SymbolsQuotes',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected error',
              },
            },
          },
        },
        '/accounts/{accountId}/orders/cancel': {
          post: {
            tags: ['Trading'],
            summary: 'Cancel open order in account',
            operationId: 'Trading_cancelUserAccountOrder',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
              {
                in: 'path',
                name: 'accountId',
                required: true,
                description: 'The ID of the account get positions.',
                schema: {
                  type: 'string',
                  format: 'uuid',
                },
              },
            ],
            requestBody: {
              $ref: '#/components/requestBodies/CancelOrderRequestBody',
            },
            responses: {
              '200': {
                description: 'Order Record of canceled order',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/AccountOrderRecord',
                    },
                  },
                },
              },
              '400': {
                description:
                  'Unable to cancel open order. Please verify status in brokerage account',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/400FailedRequestResponse',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected error',
              },
            },
          },
        },
        '/accounts/{accountId}/symbols': {
          post: {
            tags: ['Reference Data'],
            summary: 'Search for symbols available in an account',
            operationId: 'ReferenceData_symbolSearchUserAccount',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
              {
                in: 'path',
                name: 'accountId',
                required: true,
                description: 'The ID of the account get positions.',
                schema: {
                  type: 'string',
                  format: 'uuid',
                },
              },
            ],
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/SymbolQuery',
                  },
                },
              },
            },
            responses: {
              '200': {
                description:
                  'of universal symbol supported by account based on substring sent it',
                content: {
                  '*/*': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/UniversalSymbol',
                      },
                    },
                  },
                },
              },
              default: {
                description: 'Unexpected error',
              },
            },
          },
        },
        '/accounts/{accountId}/options': {
          get: {
            tags: ['Options'],
            summary: 'Get the options holdings in the account',
            operationId: 'Options_listOptionHoldings',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
              {
                in: 'path',
                name: 'accountId',
                required: true,
                description: 'The ID of the account get positions.',
                schema: {
                  type: 'string',
                  format: 'uuid',
                },
              },
            ],
            responses: {
              '200': {
                description: 'The option holdings in the account',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/OptionsPosition',
                      },
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected error',
              },
            },
          },
        },
        '/accounts/{accountId}/optionsChain': {
          get: {
            tags: ['Options'],
            summary: 'Get the options chain',
            operationId: 'Options_getOptionsChain',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
              {
                in: 'path',
                name: 'accountId',
                required: true,
                description: 'The ID of the account get positions.',
                schema: {
                  type: 'string',
                  format: 'uuid',
                },
              },
              {
                in: 'query',
                name: 'symbol',
                required: true,
                description: 'Universal symbol ID if symbol',
                schema: {
                  type: 'string',
                  format: 'uuid',
                },
              },
            ],
            responses: {
              '200': {
                description:
                  'List of all Options available for the brokerage symbol',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/OptionChain',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected error',
              },
            },
          },
        },
        '/accounts/{accountId}/optionStrategy': {
          post: {
            tags: ['Options'],
            summary:
              'Creates an option strategy object that will be used to place an option strategy order',
            operationId: 'Options_getOptionStrategy',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
              {
                in: 'path',
                name: 'accountId',
                required: true,
                description: 'The ID of the account get positions.',
                schema: {
                  type: 'string',
                  format: 'uuid',
                },
              },
            ],
            requestBody: {
              $ref: '#/components/requestBodies/OptionStrategyRequestBody',
            },
            responses: {
              '200': {
                description: 'Order Quotes',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/StrategyQuotes',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected error',
              },
            },
          },
        },
        '/accounts/{accountId}/optionStrategy/{optionStrategyId}': {
          get: {
            tags: ['Options'],
            summary: 'Get latest market data of option strategy',
            operationId: 'Options_getOptionsStrategyQuote',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
              {
                in: 'path',
                name: 'accountId',
                required: true,
                description: 'The ID of the account get positions.',
                schema: {
                  type: 'string',
                  format: 'uuid',
                },
              },
              {
                in: 'path',
                required: true,
                name: 'optionStrategyId',
                description:
                  'Option strategy id obtained from response when creating option strategy object',
                schema: {
                  $ref: '#/components/schemas/Id',
                },
              },
            ],
            responses: {
              '200': {
                description: 'Order Quotes',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/StrategyQuotes',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected error',
              },
            },
          },
        },
        '/accounts/{accountId}/optionStrategy/{optionStrategyId}/execute': {
          post: {
            tags: ['Options'],
            summary: 'Place an option strategy order on the brokerage',
            operationId: 'Options_placeOptionStrategy',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
              {
                in: 'path',
                name: 'accountId',
                required: true,
                description: 'The ID of the account get positions.',
                schema: {
                  $ref: '#/components/schemas/Id',
                },
              },
              {
                in: 'path',
                name: 'optionStrategyId',
                required: true,
                description:
                  'Option strategy id obtained from response when creating option strategy object',
                schema: {
                  $ref: '#/components/schemas/Id',
                },
              },
            ],
            requestBody: {
              $ref: '#/components/requestBodies/OrderStrategyExecuteBody',
            },
            responses: {
              '200': {
                description: 'Status of strategy order placed',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/StrategyOrderRecord',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected error',
              },
            },
          },
        },
        '/authorizations': {
          get: {
            tags: ['Connections'],
            summary: 'List all brokerage authorizations for the user',
            operationId: 'Connections_listBrokerageAuthorizations',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
            ],
            responses: {
              '200': {
                description:
                  'A list of all Authorization objects for the authenticated user.',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/BrokerageAuthorization',
                      },
                    },
                  },
                },
              },
              default: {
                description: 'Unexpected error.',
              },
            },
          },
        },
        '/authorizations/{authorizationId}': {
          get: {
            tags: ['Connections'],
            summary: 'Get brokerage authorization details',
            operationId: 'Connections_detailBrokerageAuthorization',
            parameters: [
              {
                in: 'path',
                name: 'authorizationId',
                required: true,
                description: 'The ID of a brokerage authorization object.',
                schema: {
                  $ref: '#/components/schemas/Id',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
            ],
            responses: {
              '200': {
                description: 'Authorization object for the authenticated user.',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/BrokerageAuthorization',
                    },
                  },
                },
              },
              default: {
                description: 'Unexpected error.',
              },
            },
          },
          delete: {
            tags: ['Connections'],
            summary: 'Delete brokerage authorization',
            operationId: 'Connections_removeBrokerageAuthorization',
            parameters: [
              {
                in: 'path',
                name: 'authorizationId',
                required: true,
                description: 'The ID of the Authorization to delete.',
                schema: {
                  $ref: '#/components/schemas/Id',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
            ],
            responses: {
              '204': {
                description:
                  'Brokerage authorization object has been successfully deleted',
              },
              '400': {
                description:
                  'The specified authorizationId is invalid (not a UUID string).',
              },
              '404': {
                description: 'The specified authorizationId was not found.',
              },
              default: {
                description: 'Unexpected error.',
              },
            },
          },
        },
        '/sessionEvents': {
          get: {
            tags: ['Connections'],
            summary: 'List all session events for the partner',
            operationId: 'Connections_sessionEvents',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'PartnerClientId',
                schema: {
                  $ref: '#/components/schemas/ClientID',
                },
              },
              {
                in: 'query',
                required: false,
                name: 'userId',
                description:
                  'Optional comma seperated list of user IDs used to filter the request on specific users',
                schema: {
                  $ref: '#/components/schemas/AccountIDs',
                },
              },
              {
                in: 'query',
                required: false,
                name: 'sessionId',
                description:
                  'Optional comma seperated list of session IDs used to filter the request on specific users',
                schema: {
                  $ref: '#/components/schemas/AccountIDs',
                },
              },
            ],
            responses: {
              '200': {
                description: 'A list of all Session Events for the Partner.',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        anyOf: [
                          {
                            $ref: '#/components/schemas/SessionEvent',
                          },
                        ],
                      },
                    },
                  },
                },
              },
              default: {
                description: 'Unexpected error.',
              },
            },
          },
        },
        '/brokerages': {
          get: {
            tags: ['Reference Data'],
            summary: 'List brokerages',
            operationId: 'ReferenceData_listAllBrokerages',
            parameters: [],
            responses: {
              '200': {
                description: 'A list of all defined Brokerage objects.',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Brokerage',
                      },
                    },
                  },
                },
              },
              default: {
                description: 'Unexpected error.',
              },
            },
          },
        },
        '/brokerageAuthorizationTypes': {
          get: {
            tags: ['Reference Data'],
            summary: 'List of all brokerage authorization types',
            operationId: 'ReferenceData_listAllBrokerageAuthorizationType',
            parameters: [
              {
                in: 'query',
                required: false,
                name: 'brokerage',
                schema: {
                  type: 'string',
                  example: 'QUESTRADE,ALPACA',
                },
                description: 'Comma separated value of brokerage slugs',
              },
            ],
            responses: {
              '200': {
                description:
                  'A list of all defined Brokerage Authorization Type objects.',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/BrokerageAuthorizationTypeReadOnly',
                      },
                    },
                  },
                },
              },
              default: {
                description: 'Unexpected error.',
              },
            },
          },
        },
        '/currencies': {
          get: {
            tags: ['Reference Data'],
            summary: 'List currencies',
            operationId: 'ReferenceData_listAllCurrencies',
            parameters: [],
            responses: {
              '200': {
                description: 'A list of all supported currencies.',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Currency',
                      },
                    },
                  },
                },
              },
              default: {
                description: 'Unexpected error.',
              },
            },
          },
        },
        '/snapTrade/listUserErrors': {
          get: {
            tags: ['Error Logs'],
            summary: 'Retrieve error logs on behalf of your SnapTrade users',
            operationId: 'ErrorLogs_listUserErrors',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
            ],
            responses: {
              '200': {
                description:
                  'A list of all user errors for a particular user in the last 90 days.',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/UserErrorLog',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        '/currencies/rates': {
          get: {
            tags: ['Reference Data'],
            summary: 'List currency exchange rates',
            operationId: 'ReferenceData_listAllCurrenciesRates',
            parameters: [],
            responses: {
              '200': {
                description:
                  'A list of all exchange rates pairs for supported currencies',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/ExchangeRatePairs',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        '/currencies/rates/{currencyPair}': {
          get: {
            tags: ['Reference Data'],
            summary: 'Return the exchange rate of a currency pair',
            operationId: 'ReferenceData_getCurrencyExchangeRatePair',
            parameters: [
              {
                in: 'path',
                name: 'currencyPair',
                required: true,
                description:
                  'A currency pair based on currency code for example, {CAD-USD}',
                schema: {
                  type: 'string',
                },
              },
            ],
            responses: {
              '200': {
                description:
                  'A list of all exchange rates pairs for supported currencies',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/ExchangeRatePairs',
                    },
                  },
                },
              },
            },
          },
        },
        '/exchanges': {
          get: {
            tags: ['Reference Data'],
            summary: 'List exchanges',
            operationId: 'ReferenceData_getStockExchanges',
            parameters: [],
            responses: {
              '200': {
                description: 'A list of all supported stock exchanges',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Exchange',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        '/securityTypes': {
          get: {
            tags: ['Reference Data'],
            summary: 'List of all security types.',
            operationId: 'ReferenceData_getSecurityTypes',
            parameters: [],
            responses: {
              '200': {
                description: 'A list of all defined Security Type objects.',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/SecurityType',
                      },
                    },
                  },
                },
              },
              default: {
                description: 'Unexpected error.',
              },
            },
          },
        },
        '/symbols': {
          post: {
            tags: ['Reference Data'],
            summary: 'Search for symbols',
            operationId: 'ReferenceData_getSymbols',
            parameters: [],
            responses: {
              '200': {
                description:
                  'A list of UniversalSymbol objects which match the specified substring',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/UniversalSymbol',
                      },
                    },
                  },
                },
              },
              default: {
                description: 'Unexpected error.',
              },
            },
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/SymbolQuery',
                  },
                },
              },
            },
          },
        },
        '/symbols/{ticker}': {
          get: {
            tags: ['Reference Data'],
            summary: 'Get details of a symbol by the ticker',
            operationId: 'ReferenceData_getSymbolsByTicker',
            parameters: [
              {
                in: 'path',
                name: 'ticker',
                required: true,
                description: 'The ticker of the UniversalSymbol to get.',
                schema: {
                  type: 'string',
                },
              },
              {
                in: 'query',
                name: 'symbolId',
                required: false,
                description:
                  'OPTIONAL IN PATH Can be used instead of the ticker ; The ID of the UniversalSymbol to get.',
                schema: {
                  type: 'string',
                  format: 'uuid',
                },
              },
            ],
            responses: {
              '200': {
                description: 'Successfully gets a symbol',
                content: {
                  '*/*': {
                    schema: {
                      $ref: '#/components/schemas/UniversalSymbol',
                    },
                  },
                },
              },
              '404': {
                description: 'No symbol with the specified ticker found.',
              },
              default: {
                description: 'Unexpected error',
              },
            },
          },
        },
        '/trade/place': {
          post: {
            tags: ['Trading'],
            summary: 'Place a trade with NO validation.',
            operationId: 'Trading_placeForceOrder',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
            ],
            responses: {
              '200': {
                description: 'Trade sucessfully placed',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/AccountOrderRecord',
                    },
                  },
                },
              },
              '400': {
                description: 'Trade could not be placed',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/400FailedRequestResponse',
                    },
                  },
                },
              },
              '403': {
                description: 'User does not have permissions to place trades',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/403FailedRequestResponse',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected Error',
              },
            },
            requestBody: {
              $ref: '#/components/requestBodies/ManualTradeFormRequestBody',
            },
          },
        },
        '/trade/impact': {
          post: {
            tags: ['Trading'],
            summary: 'Check impact of trades on account.',
            operationId: 'Trading_getOrderImpact',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
            ],
            responses: {
              '200': {
                description:
                  "Return trade object and it's impact on the account",
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/ManualTradeAndImpact',
                    },
                  },
                },
              },
              '400': {
                description:
                  'Missing or wrong data format provided in request body',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/400FailedRequestResponse',
                    },
                  },
                },
              },
              '403': {
                description: 'User does not have permissions to place trades',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/403FailedRequestResponse',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected Error',
              },
            },
            requestBody: {
              $ref: '#/components/requestBodies/ManualTradeFormRequestBody',
            },
          },
        },
        '/trade/{tradeId}': {
          post: {
            tags: ['Trading'],
            summary: 'Place order',
            operationId: 'Trading_placeOrder',
            parameters: [
              {
                in: 'path',
                name: 'tradeId',
                required: true,
                description:
                  'The ID of trade object obtained from trade/impact endpoint',
                schema: {
                  type: 'string',
                  format: 'uuid',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
            ],
            responses: {
              '200': {
                description: 'Status of order placed',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/AccountOrderRecord',
                    },
                  },
                },
              },
              '400': {
                description: 'Failed to submit order to broker',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/400FailedRequestResponse',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected Error',
              },
            },
          },
        },
        '/trade/oco': {
          post: {
            tags: ['Trading'],
            summary: 'Place a OCO (One Cancels Other) order',
            operationId: 'Trading_placeOCOOrder',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
            ],
            responses: {
              '200': {
                description: 'Status of order placed',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/AccountOrderRecord',
                    },
                  },
                },
              },
              '400': {
                description: 'Failed to submit order to broker',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/400FailedRequestResponse',
                    },
                  },
                },
              },
              '500': {
                description: 'Unexpected Error',
              },
            },
            requestBody: {
              $ref: '#/components/requestBodies/OCORequestBody',
            },
          },
        },
        '/activities': {
          get: {
            tags: ['Transactions And Reporting'],
            summary: 'Get transaction history for a user',
            operationId: 'TransactionsAndReporting_getActivities',
            description:
              'Returns activities (transactions) for a user. Specifing start and end date is highly recommended for automatic calls for better performance',
            parameters: [
              {
                in: 'query',
                required: false,
                name: 'startDate',
                schema: {
                  $ref: '#/components/schemas/ReportingDate',
                },
              },
              {
                in: 'query',
                required: false,
                name: 'endDate',
                schema: {
                  $ref: '#/components/schemas/ReportingDate',
                },
              },
              {
                in: 'query',
                required: false,
                name: 'accounts',
                description:
                  'Optional comma seperated list of account IDs used to filter the request on specific accounts',
                schema: {
                  $ref: '#/components/schemas/AccountIDs',
                },
              },
              {
                in: 'query',
                required: false,
                name: 'brokerageAuthorizations',
                description:
                  'Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations',
                schema: {
                  $ref: '#/components/schemas/BrokerageAuthIDs',
                },
              },
              {
                in: 'query',
                required: false,
                name: 'type',
                description:
                  'Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT',
                schema: {
                  type: 'string',
                  example: 'DIVIDEND',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
            ],
            responses: {
              '200': {
                description: 'Successfully retrieved transaction history',
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/UniversalActivity',
                      },
                    },
                  },
                },
              },
              default: {
                description: 'Unexpected error',
              },
            },
          },
        },
        '/performance/custom': {
          get: {
            tags: ['Transactions And Reporting'],
            summary: 'Get performance information for a specific timeframe',
            operationId: 'TransactionsAndReporting_getReportingCustomRange',
            description:
              'Returns performance information (contributions, dividends, rate of return, etc) for a specific timeframe. Total Equity Timeframe and Rate of Returns are experimental and should not be trusted to be 100% accurate',
            parameters: [
              {
                in: 'query',
                required: true,
                name: 'startDate',
                schema: {
                  $ref: '#/components/schemas/ReportingDate',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'endDate',
                schema: {
                  $ref: '#/components/schemas/ReportingDate',
                },
              },
              {
                in: 'query',
                required: false,
                name: 'accounts',
                description:
                  'Optional comma seperated list of account IDs used to filter the request on specific accounts',
                schema: {
                  $ref: '#/components/schemas/AccountIDs',
                },
              },
              {
                in: 'query',
                required: false,
                name: 'detailed',
                description:
                  'Optional, increases frequency of data points for the total value and contribution charts if set to true',
                schema: {
                  type: 'boolean',
                  example: true,
                },
              },
              {
                in: 'query',
                required: false,
                name: 'frequency',
                description:
                  'Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly.',
                schema: {
                  $ref: '#/components/schemas/ReportingFrequency',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userId',
                schema: {
                  $ref: '#/components/schemas/UserID',
                },
              },
              {
                in: 'query',
                required: true,
                name: 'userSecret',
                schema: {
                  $ref: '#/components/schemas/UserSecret',
                },
              },
            ],
            responses: {
              '200': {
                description: 'Successfully retrieved performance data',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/PerformanceCustom',
                    },
                  },
                },
              },
              default: {
                description: 'Unexpected error',
              },
            },
          },
        },
        '/connectionAdded': {
          post: {
            tags: ['Webhooks'],
            operationId: 'Webhooks_connectionAdded',
            requestBody: {
              description: 'Information about a new connection in the system',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/WebhookBase',
                  },
                },
              },
            },
            responses: {
              '200': {
                description:
                  'Return a 200 status to indicate that the connection was successful',
              },
              '201': {
                description:
                  'Return a 201 status to indicate that the connection was successful',
              },
            },
          },
        },
        '/connectionDeleted': {
          post: {
            tags: ['Webhooks'],
            operationId: 'Webhooks_connectionDeleted',
            requestBody: {
              description: 'Information about the deleted connection',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/WebhookBase',
                  },
                },
              },
            },
            responses: {
              '200': {
                description:
                  'Return a 200 status to indicate that the connection was deleted successfully',
              },
              '201': {
                description:
                  'Return a 201 status to indicate that the connection was deleted',
              },
            },
          },
        },
        '/userRegistered': {
          post: {
            tags: ['Webhooks'],
            operationId: 'Webhooks_userRegistered',
            requestBody: {
              description: 'Information about the newly registered user',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/WebhookBase',
                  },
                },
              },
            },
            responses: {
              '200': {
                description:
                  'Return a 200 status to indicate that the user was registered successfully',
              },
              '201': {
                description:
                  'Return a 201 status to indicate that user was registered successfully',
              },
            },
          },
        },
        '/userDeleted': {
          post: {
            tags: ['Webhooks'],
            operationId: 'Webhooks_userDeleted',
            requestBody: {
              description: 'Information about the deleted user',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/WebhookBase',
                  },
                },
              },
            },
            responses: {
              '200': {
                description:
                  'Return a 200 status to indicate that the user was deleted successfully',
              },
              '201': {
                description:
                  'Return a 201 status to indicate that the connection was successful',
              },
            },
          },
        },
        '/accountAdded': {
          post: {
            tags: ['Webhooks'],
            operationId: 'Webhooks_accountAdded',
            requestBody: {
              description: 'Information about the newly added account',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/WebhookBase',
                  },
                },
              },
            },
            responses: {
              '200': {
                description:
                  'Return a 200 status to indicate that the account was added successfully',
              },
              '201': {
                description:
                  'Return a 201 status to indicate that the account was added successfull',
              },
            },
          },
        },
        '/accountDeleted': {
          post: {
            tags: ['Webhooks'],
            operationId: 'Webhooks_accountDeleted',
            requestBody: {
              description: 'Information about the deleted account',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/WebhookBase',
                  },
                },
              },
            },
            responses: {
              '200': {
                description:
                  'Return a 200 status to indicate that the account was deleted successfully',
              },
              '201': {
                description:
                  'Return a 201 status to indicate that the account was deleted successfully',
              },
            },
          },
        },
        '/transactionsUpdated': {
          post: {
            tags: ['Webhooks'],
            operationId: 'Webhooks_updatedTransactions',
            requestBody: {
              description:
                'Information about the account for which transactions have been updated',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/WebhookBase',
                  },
                },
              },
            },
            responses: {
              '200': {
                description:
                  'Return a 200 status to indicate that the update was successful',
              },
              '201': {
                description:
                  'Return a 201 status to indicate the update was successful',
              },
            },
          },
        },
      },
      components: {
        securitySchemes: {
          PartnerSignature: {
            type: 'apiKey',
            in: 'header',
            name: 'Signature',
          },
          PartnerClientId: {
            type: 'apiKey',
            in: 'query',
            name: 'clientId',
          },
          PartnerTimestamp: {
            type: 'apiKey',
            in: 'query',
            name: 'timestamp',
          },
        },
        requestBodies: {
          MockSignatureRequestBody: {
            description: 'Request body to signed. Include it under "content"',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    userId: 'snaptrade-user-123',
                    userSecret: 'CHRIS.P.BACON',
                  },
                },
              },
            },
          },
          RegisterUserRequestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/SnapTradeRegisterUserRequestBody',
                },
              },
            },
          },
          SnapTradeLoginUserRequestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/SnapTradeLoginUserRequestBody',
                },
              },
            },
          },
          LoginRequestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/UserIDandSecret',
                },
              },
            },
          },
          DeleteUserRequestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/UserIDandSecret',
                },
              },
            },
          },
          RedeemTokenRequestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/RedirectTokenandPin',
                },
              },
            },
          },
          PortfolioGroup: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/PortfolioGroup',
                },
              },
            },
          },
          TargetAsset: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/TargetAsset',
                },
              },
            },
          },
          ManualTradeFormRequestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ManualTradeForm',
                },
              },
            },
          },
          CancelOrderRequestBody: {
            description: 'The Order ID to be canceled',
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    brokerage_order_id: {
                      $ref: '#/components/schemas/Id',
                    },
                  },
                },
              },
            },
          },
          CreateSnapTradeParterAPICredentialsRequestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    brokerageAuthorizationTypeId: {
                      description:
                        'Brokerage Authorization Type ID from BrokerageAuthorizationType object',
                    },
                    brokerageAPIClientId: {
                      description:
                        'API Client ID from brokerage when registering app',
                    },
                    brokerageAPIClientSecret: {
                      description:
                        'API Client Secret from brokerage when registering app',
                    },
                    redirectURI: {
                      description:
                        'Redirect uri from brokerage when registering app',
                    },
                  },
                },
              },
            },
          },
          OCORequestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    first_trade_id: {
                      description:
                        'The ID of first trade object obtained from trade/impact endpoint',
                    },
                    second_trade_id: {
                      description:
                        'The ID of second trade object obtained from trade/impact endpoint',
                    },
                  },
                },
              },
            },
          },
          OptionStrategyRequestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['underlying_symbol_id', 'legs', 'strategy_type'],
                  properties: {
                    underlying_symbol_id: {
                      $ref: '#/components/schemas/Id',
                    },
                    legs: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/OptionLeg',
                      },
                    },
                    strategy_type: {
                      type: 'string',
                      enum: ['CUSTOM'],
                    },
                  },
                },
              },
            },
          },
          OrderStrategyExecuteBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['order_type', 'time_in_force', 'price'],
                  properties: {
                    order_type: {
                      type: 'string',
                      enum: ['Limit', 'Market', 'NetDebit', 'NetCredit'],
                    },
                    time_in_force: {
                      type: 'string',
                      enum: ['DAY', 'GTC'],
                    },
                    price: {
                      $ref: '#/components/schemas/Price',
                    },
                  },
                },
              },
            },
          },
          SnapTradeAPIDisclaimerAcceptRequestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    accepted: {
                      type: 'boolean',
                      description:
                        'A boolean that indicates whether this user has accepted the disclaimer or not.',
                    },
                  },
                },
              },
            },
          },
        },
        schemas: {
          '400FailedRequestResponse': {
            description: 'Example for failed request response',
            type: 'object',
            properties: {
              default_detail: {
                example: 'Unable to verify data sent',
              },
              default_code: {
                example: 1076,
              },
            },
          },
          '401FailedRequestResponse': {
            description: 'Example for failed request response',
            type: 'object',
            properties: {
              default_detail: {
                example: 'Unable to verify signature sent',
              },
              default_code: {
                example: 1076,
              },
            },
          },
          '403FailedRequestResponse': {
            description: 'Example for failed request response',
            type: 'object',
            properties: {
              default_detail: {
                example:
                  'User does not have permission to access this resource',
              },
              default_code: {
                example: 1066,
              },
            },
          },
          '404FailedRequestResponse': {
            description: 'Example for failed request response',
            type: 'object',
            properties: {
              default_detail: {
                example: 'The requested resource does not exist.',
              },
              default_code: {
                example: 1011,
              },
            },
          },
          CashRestriction: {
            description:
              'Cash restriction rules that apply to this account when undergoing portfolio rebalance calculations.',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              account: {
                $ref: '#/components/schemas/Id',
              },
              currency: {
                $ref: '#/components/schemas/Id',
              },
              type: {
                type: 'string',
                enum: ['ALLOCATE_MAX', 'RETAIN_MIN'],
              },
              amount: {
                type: 'number',
                example: 100,
              },
            },
          },
          AccountSyncStatus: {
            description: 'Status of account',
            properties: {
              transactions: {
                $ref: '#/components/schemas/TransactionsStatus',
              },
            },
          },
          TransactionsStatus: {
            description: 'Status of account transaction sync',
            properties: {
              initial_sync_completed: {
                type: 'boolean',
              },
              last_successful_sync: {
                $ref: '#/components/schemas/SyncStatusDate',
              },
            },
          },
          Account: {
            description: 'SnapTradeUser Investment Account',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              brokerage_authorization: {
                $ref: '#/components/schemas/Id',
              },
              portfolio_group: {
                $ref: '#/components/schemas/Id',
              },
              name: {
                type: 'string',
                example: 'Registered Retirement Savings Account',
              },
              number: {
                type: 'string',
                example: 'Q6542138443',
              },
              institution_name: {
                type: 'string',
                example: 'Alpaca',
              },
              created_date: {
                type: 'string',
                example: '2021-06-04T16:26:46.523Z',
              },
              meta: {
                type: 'object',
                example: {
                  type: 'Margin',
                  status: 'ACTIVE',
                  institution_name: 'Alpaca',
                },
              },
              cash_restrictions: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/CashRestriction',
                },
              },
              sync_status: {
                $ref: '#/components/schemas/AccountSyncStatus',
              },
            },
          },
          AccountSimple: {
            description: 'SnapTradeUser Investment Account',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              name: {
                type: 'string',
                example: 'Registered Retirement Savings Account',
              },
              number: {
                type: 'string',
                example: 'Q6542138443',
              },
              sync_status: {
                $ref: '#/components/schemas/AccountSyncStatus',
              },
            },
          },
          AccountIDs: {
            description: 'Comma seperated list of account IDs',
            type: 'string',
            example:
              '917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2',
          },
          BrokerageAuthIDs: {
            description: 'Comma seperated list of brokerage authorization IDs',
            type: 'string',
            example:
              '917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2',
          },
          AccountHoldings: {
            description: 'Account Holdings',
            type: 'object',
            properties: {
              account: {
                $ref: '#/components/schemas/SnapTradeHoldingsAccount',
              },
              balances: {
                type: 'array',
                nullable: true,
                items: {
                  $ref: '#/components/schemas/Balance',
                },
              },
              positions: {
                type: 'array',
                nullable: true,
                items: {
                  $ref: '#/components/schemas/Position',
                },
              },
              total_value: {
                $ref: '#/components/schemas/SnapTradeHoldingsTotalValue',
              },
            },
          },
          AccountHoldingsAccount: {
            description: 'Account Holdings with Account ID',
            type: 'object',
            properties: {
              account: {
                $ref: '#/components/schemas/SnapTradeHoldingsAccountAccountId',
              },
              balances: {
                type: 'array',
                nullable: true,
                items: {
                  $ref: '#/components/schemas/Balance',
                },
              },
              positions: {
                type: 'array',
                nullable: true,
                items: {
                  $ref: '#/components/schemas/Position',
                },
              },
              orders: {
                type: 'array',
                nullable: true,
                items: {
                  $ref: '#/components/schemas/AccountOrderRecord',
                },
              },
              total_value: {
                $ref: '#/components/schemas/SnapTradeHoldingsTotalValue',
              },
            },
          },
          AccountOrderRecord: {
            description: 'Record of order in brokerageaccount',
            type: 'object',
            properties: {
              brokerage_order_id: {
                description: 'Order id returned by brokerage',
                type: 'string',
              },
              status: {
                $ref: '#/components/schemas/AccountOrderRecordStatus',
              },
              symbol: {
                $ref: '#/components/schemas/Id',
              },
              universal_symbol: {
                $ref: '#/components/schemas/UniversalSymbol',
              },
              option_symbol: {
                $ref: '#/components/schemas/OptionsSymbol',
              },
              action: {
                $ref: '#/components/schemas/Action',
              },
              total_quantity: {
                $ref: '#/components/schemas/Units',
              },
              open_quantity: {
                $ref: '#/components/schemas/OpenUnits',
              },
              canceled_quantity: {
                $ref: '#/components/schemas/CancelledUnits',
              },
              filled_quantity: {
                $ref: '#/components/schemas/FilledUnits',
              },
              execution_price: {
                $ref: '#/components/schemas/Price',
              },
              limit_price: {
                $ref: '#/components/schemas/Price',
              },
              stop_price: {
                $ref: '#/components/schemas/StopPrice',
              },
              order_type: {
                $ref: '#/components/schemas/OrderType',
              },
              time_in_force: {
                $ref: '#/components/schemas/TimeInForce',
              },
              time_placed: {
                $ref: '#/components/schemas/Time',
              },
              time_updated: {
                $ref: '#/components/schemas/Time',
              },
              expiry_date: {
                $ref: '#/components/schemas/Time',
              },
            },
          },
          AccountOrderRecordStatus: {
            type: 'string',
            enum: [
              'NONE',
              'PENDING',
              'ACCEPTED',
              'FAILED',
              'REJECTED',
              'CANCELED',
              'PARTIAL_CANCELED',
              'CANCEL_PENDING',
              'EXECUTED',
              'PARTIAL',
              'REPLACE_PENDING',
              'REPLACED',
              'STOPPED',
              'SUSPENDED',
              'EXPIRED',
              'QUEUED',
              'TRIGGERED',
              'ACTIVATED',
              'PENDING_RISK_REVIEW',
              'CONTINGENT_ORDER',
            ],
          },
          OptionsPosition: {
            description: 'Option Holdings',
            type: 'object',
            properties: {
              symbol: {
                $ref: '#/components/schemas/BrokerageSymbol',
              },
              price: {
                $ref: '#/components/schemas/Price',
              },
              units: {
                type: 'number',
                example: 10,
              },
              currency: {
                nullable: true,
                allOf: [
                  {
                    $ref: '#/components/schemas/Currency',
                  },
                ],
              },
              average_purchase_price: {
                type: 'number',
                nullable: true,
                example: 108.3353,
                description: 'Average purchase price for this position',
              },
              open_pnl: {
                type: 'number',
                example: 0.44,
                nullable: true,
              },
              fractional_units: {
                description:
                  'Deprecated, use the units field for both fractional and integer units going forward',
                type: 'number',
                nullable: true,
                example: 1.44,
              },
            },
          },
          OptionsHoldings: {
            description: 'Option Holdings',
            type: 'object',
            properties: {
              id: {
                description: 'Options information',
                type: 'string',
                example: '11b55fd2-dc29-42ec-ac03-97b5cd757a4d',
              },
              symbol: {
                $ref: '#/components/schemas/Id',
              },
              option_symbol: {
                $ref: '#/components/schemas/OptionsSymbol',
              },
              price: {
                $ref: '#/components/schemas/Price',
              },
              currency: {
                $ref: '#/components/schemas/Currency',
              },
              average_purchase_price: {
                nullable: true,
                type: 'number',
                example: 108.3353,
                description: 'Average purchase price for this position',
              },
            },
          },
          StrategyImpact: {
            description: 'The strategy impact',
            type: 'object',
            properties: {
              estimatedCommissions: {
                type: 'number',
                example: 11.95,
              },
              buyingPowerEffect: {
                type: 'number',
                example: -156.3435,
              },
              buyingPowerResult: {
                type: 'number',
                example: 8800.0882,
              },
              maintExcessEffect: {
                type: 'number',
                example: -46.95,
              },
              maintExcessResult: {
                type: 'number',
                example: 2642.669129,
              },
              tradeValueCalculation: {
                type: 'string',
                example: '1 x 0.07 x 100 + 1 x 0.28 x 100 = DR 35.00 CAD',
              },
              legs: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    legId: {
                      type: 'integer',
                      format: 'int32',
                      example: 0,
                    },
                    symbol: {
                      type: 'string',
                      example: 'AC21Oct22C30.00.MX',
                    },
                    symbolId: {
                      type: 'integer',
                      format: 'int32',
                      example: 41790511,
                    },
                    legRatioQuantity: {
                      type: 'integer',
                      format: 'int32',
                      example: 1,
                    },
                    side: {
                      type: 'string',
                      example: 'BTO',
                    },
                    avgExecPrice: {
                      type: 'string',
                      format: 'nullable',
                    },
                    lastExecPrice: {
                      type: 'string',
                      format: 'nullable',
                    },
                  },
                },
              },
              side: {
                type: 'string',
                example: 'Buy',
              },
              effect: {
                type: 'string',
                example: 'Debit',
              },
              price: {
                type: 'number',
                example: 0.35,
              },
              strategy: {
                type: 'string',
                example: 'Strangle',
              },
            },
          },
          StrategyOrderQuotes: {
            description: 'The quotes for the strategy requested',
          },
          StrategyOrderPlace: {
            description: 'The reponse for a correctly placed order',
            type: 'object',
            properties: {
              orderId: {
                type: 'integer',
                format: 'int32',
                example: 1069605761,
              },
              orders: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'integer',
                      format: 'int32',
                      example: 1069605761,
                    },
                    symbol: {
                      type: 'string',
                      example: 'AC.TO',
                    },
                    symbolId: {
                      type: 'integer',
                      format: 'int32',
                      example: 7960447,
                    },
                    totalQuantity: {
                      type: 'integer',
                      format: 'int32',
                      example: 1,
                    },
                    openQuantity: {
                      type: 'integer',
                      format: 'int32',
                      example: 1,
                    },
                    filledQuantity: {
                      type: 'integer',
                      format: 'int32',
                      example: 0,
                    },
                    canceledQuantity: {
                      type: 'integer',
                      format: 'int32',
                      example: 0,
                    },
                    side: {
                      type: 'string',
                      example: 'Buy',
                    },
                    orderType: {
                      type: 'string',
                      example: 'Market',
                    },
                    limitPrice: {
                      type: 'string',
                      format: 'nullable',
                    },
                    stopPrice: {
                      type: 'string',
                      format: 'nullable',
                    },
                    isAllOrNone: {
                      type: 'boolean',
                    },
                    isAnonymous: {
                      type: 'boolean',
                    },
                    icebergQuantity: {
                      type: 'string',
                      format: 'nullable',
                    },
                    minQuantity: {
                      type: 'string',
                      format: 'nullable',
                    },
                    avgExecPrice: {
                      type: 'integer',
                      format: 'int32',
                      example: 0,
                    },
                    lastExecPrice: {
                      type: 'string',
                      format: 'nullable',
                    },
                    source: {
                      type: 'string',
                      example: 'TradingAPI',
                    },
                    timeInForce: {
                      type: 'string',
                      example: 'Day',
                    },
                    gtdDate: {
                      type: 'string',
                      format: 'nullable',
                    },
                    state: {
                      type: 'string',
                      example: 'Pending',
                    },
                    rejectionReason: {
                      type: 'string',
                      example: 'None',
                    },
                    chainId: {
                      type: 'integer',
                      format: 'int32',
                      example: 1069605761,
                    },
                    creationTime: {
                      type: 'string',
                      example: '2022-07-19T19:53:47.915Z',
                    },
                    updateTime: {
                      type: 'string',
                      example: '2022-07-19T19:53:47.939Z',
                    },
                    notes: {
                      type: 'string',
                      example: 'None',
                    },
                    primaryRoute: {
                      type: 'string',
                      example: 'AUTO',
                    },
                    secondaryRoute: {
                      type: 'string',
                      example: 'AUTO',
                    },
                    orderRoute: {
                      type: 'string',
                      example: 'MX',
                    },
                    venueHoldingOrder: {
                      type: 'string',
                      example: 'None',
                    },
                    comissionCharged: {
                      type: 'integer',
                      format: 'int32',
                      example: 0,
                    },
                    exchangeOrderId: {
                      type: 'string',
                      example: 'None',
                    },
                    isSignificantShareHolder: {
                      type: 'boolean',
                    },
                    isInsider: {
                      type: 'boolean',
                    },
                    isLimitOffsetInDollar: {
                      type: 'boolean',
                    },
                    userId: {
                      type: 'integer',
                      format: 'int32',
                      example: 514603,
                    },
                    placementCommission: {
                      type: 'string',
                      format: 'nullable',
                    },
                    legs: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          legId: {
                            type: 'integer',
                            format: 'int32',
                            example: 0,
                          },
                          symbol: {
                            type: 'string',
                            example: 'AC21Oct22C30.00.MX',
                          },
                          symbolId: {
                            type: 'integer',
                            format: 'int32',
                            example: 41790511,
                          },
                          legRatioQuantity: {
                            type: 'integer',
                            format: 'int32',
                            example: 1,
                          },
                          side: {
                            type: 'string',
                            example: 'BTO',
                          },
                          avgExecPrice: {
                            type: 'integer',
                            format: 'int32',
                            example: 0,
                          },
                          lastExecPrice: {
                            type: 'string',
                            format: 'nullable',
                          },
                        },
                      },
                    },
                    strategyType: {
                      type: 'string',
                      example: 'Strangle',
                    },
                    triggerStopPrice: {
                      type: 'string',
                      format: 'nullable',
                    },
                    orderGroupId: {
                      type: 'integer',
                      format: 'int32',
                      example: 0,
                    },
                    orderClass: {
                      type: 'string',
                      format: 'nullable',
                    },
                    isCrossZero: {
                      type: 'boolean',
                    },
                  },
                },
              },
            },
          },
          OptionStrategy: {
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              underlying_symbol_id: {
                $ref: '#/components/schemas/UniversalSymbol',
              },
              strategy_type: {
                type: 'string',
                example: 'BUTTERFLY',
              },
              number_of_legs: {
                type: 'number',
                example: 2,
              },
              legs: {
                type: 'array',
                items: {
                  properties: {
                    option_symbol_id: {
                      type: 'string',
                      example: 'AAPLC20221111',
                    },
                    index: {
                      type: 'number',
                      example: 1,
                    },
                    action: {
                      type: 'string',
                      example: 'BUY_TO_OPEN',
                    },
                    quantity: {
                      type: 'number',
                      example: 10,
                    },
                  },
                },
              },
            },
          },
          StrategyQuotes: {
            type: 'object',
            properties: {
              strategy: {
                $ref: '#/components/schemas/OptionStrategy',
              },
              open_price: {
                $ref: '#/components/schemas/Price',
              },
              bid_price: {
                $ref: '#/components/schemas/Price',
              },
              ask_price: {
                $ref: '#/components/schemas/Price',
              },
              volatility: {
                type: 'number',
                example: 0.141,
              },
              greek: {
                type: 'object',
                properties: {
                  delta: {
                    type: 'number',
                    example: 0.1,
                  },
                  gamma: {
                    type: 'number',
                    example: 0.1,
                  },
                  theta: {
                    type: 'number',
                    example: 0.1,
                  },
                  vega: {
                    type: 'number',
                    example: 0.1,
                  },
                  rho: {
                    type: 'number',
                    example: 0.1,
                  },
                },
              },
            },
          },
          StrategyOrderRecord: {
            description: 'Strategy order record',
            type: 'object',
            properties: {
              strategy: {
                $ref: '#/components/schemas/OptionStrategy',
              },
              status: {
                type: 'string',
                enum: [
                  'PENDING',
                  'ACCEPTED',
                  'FAILED',
                  'REJECTED',
                  'CANCELED',
                  'PARTIAL_CANCELED',
                  'CANCEL_PENDING',
                  'EXECUTED',
                  'PARTIAL',
                  'REPLACE_PENDING',
                  'REPLACED',
                  'STOPPED',
                  'SUSPENDED',
                  'EXPIRED',
                  'QUEUED',
                  'TRIGGERED',
                  'ACTIVATED',
                  'PENDING_RISK_REVIEW',
                  'CONTINGENT_ORDER',
                ],
              },
              filled_quantity: {
                type: 'number',
                example: 10,
              },
              open_quantity: {
                type: 'number',
                example: 10,
              },
              closed_quantity: {
                type: 'number',
                example: 10,
              },
              order_type: {
                type: 'string',
                enum: ['Limit', 'Market', 'NetDebit', 'NetCredit'],
              },
              time_in_force: {
                type: 'string',
                enum: ['DAY', 'GTC'],
              },
              limit_price: {
                $ref: '#/components/schemas/Price',
              },
              execution_price: {
                $ref: '#/components/schemas/Price',
              },
              time_placed: {
                $ref: '#/components/schemas/Time',
              },
              time_updated: {
                $ref: '#/components/schemas/Time',
              },
            },
          },
          SnapTradeHoldingsAccount: {
            description: 'SnapTradeUser Investment Account',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              brokerage_authorization: {
                $ref: '#/components/schemas/BrokerageAuthorization',
              },
              portfolio_group: {
                $ref: '#/components/schemas/Id',
              },
              name: {
                type: 'string',
                example: 'Registered Retirement Savings Account',
                nullable: true,
              },
              number: {
                type: 'string',
                example: 'Q6542138443',
              },
              institution_name: {
                type: 'string',
                example: 'Alpaca',
              },
              sync_status: {
                $ref: '#/components/schemas/AccountSyncStatus',
              },
              meta: {
                type: 'object',
                example: {
                  type: 'Margin',
                  status: 'ACTIVE',
                  institution_name: 'Alpaca',
                },
              },
            },
          },
          SnapTradeHoldingsAccountAccountId: {
            description: 'Holdings with account ID',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              brokerage_authorization: {
                format: 'uuid',
                type: 'string',
                example: '87b24961-b51e-4db8-9226-f198f6518a89',
              },
              portfolio_group: {
                $ref: '#/components/schemas/Id',
              },
              name: {
                type: 'string',
                example: 'Registered Retirement Savings Account',
                nullable: true,
              },
              number: {
                type: 'string',
                example: 'Q6542138443',
              },
              institution_name: {
                type: 'string',
                example: 'Alpaca',
              },
              meta: {
                type: 'object',
                example: {
                  type: 'Margin',
                  status: 'ACTIVE',
                  institution_name: 'Alpaca',
                },
              },
              cash_restrictions: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/CashRestriction',
                },
              },
              created_date: {
                $ref: '#/components/schemas/Time',
              },
            },
          },
          SnapTradeHoldingsTotalValue: {
            description: 'Summed value of account positions and cash balances',
            type: 'object',
            properties: {
              value: {
                type: 'number',
                example: 32600.71,
              },
              currency: {
                type: 'string',
                example: 'USD',
              },
            },
          },
          Balance: {
            description: 'Account Balance',
            type: 'object',
            properties: {
              currency: {
                $ref: '#/components/schemas/Currency',
              },
              cash: {
                type: 'number',
                example: 300.71,
                nullable: true,
              },
            },
          },
          ConsumerKey: {
            description: 'Shared key used to sign requests',
            type: 'string',
            example: 'UxrFb4cHdRWlmJKNuJjA6hoaN8uVa6jPGFVUl2UKHuKmurCnaU',
          },
          Currency: {
            description: 'Currency',
            type: 'object',
            properties: {
              id: {
                type: 'string',
                format: 'uuid',
                example: '87b24961-b51e-4db8-9226-f198f6518a89',
              },
              code: {
                type: 'string',
                example: 'USD',
              },
              name: {
                type: 'string',
                example: 'US Dollar',
              },
            },
          },
          Exchange: {
            description: 'Stock Exchange',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              code: {
                type: 'string',
                example: 'TSX',
              },
              mic_code: {
                type: 'string',
                example: 'XTSE',
              },
              name: {
                type: 'string',
                example: 'Toronto Stock Exchange',
              },
              timezone: {
                type: 'string',
                example: 'America/New_York',
              },
              start_time: {
                type: 'string',
                example: '09:30:00',
              },
              close_time: {
                type: 'string',
                example: 57600,
              },
              suffix: {
                type: 'string',
                example: '.TO',
                nullable: true,
              },
            },
          },
          USExchange: {
            description: 'US Stock Exchange',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              code: {
                type: 'string',
                example: 'ARCX',
              },
              mic_code: {
                type: 'string',
                example: 'ARCA',
              },
              name: {
                type: 'string',
                example: 'NYSE ARCA',
              },
              timezone: {
                type: 'string',
                example: 'America/New_York',
              },
              start_time: {
                type: 'string',
                example: '09:30:00',
              },
              close_time: {
                type: 'string',
                example: 57600,
              },
              suffix: {
                type: 'string',
                example: 'None',
                nullable: true,
              },
              allows_cryptocurrency_symbols: {
                type: 'boolean',
                example: false,
              },
            },
          },
          JWT: {
            description:
              'JWT Token. Used to acess resources in private endpoints available only through the Passiv app',
            type: 'object',
            properties: {
              token: {
                type: 'string',
                format: 'jwt',
                example:
                  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImZSbUdsbWFyU1dtZDY5RDkyeGZWbVdCWUxCS0x0QiIsImV4cCI6MTU0MDA1NTMxOSwiZW1haWwiOiJ3b29kQHN5bmNocm92ZXJnZS5jb20iLCJvcmlnX2lhdCI6MTUzNzM3NjkxOX0.ZSn85i3kSBvEP5wuhWOE8_w903N1G1AfiVlD3fmri78',
              },
            },
          },
          LoginRedirectURI: {
            description: 'Redirect uri upon successful login',
            type: 'object',
            properties: {
              redirectURI: {
                example:
                  'https://app.snaptrade.com/snapTrade/redeemToken?token=this$token1does2ntactu4allyexist==&clientId=example',
              },
              sessionId: {
                type: 'string',
              },
            },
          },
          MockSignatureResponse: {
            description: 'Mock Signature Response',
            type: 'object',
            properties: {
              mockConsumerKey: {
                $ref: '#/components/schemas/ConsumerKey',
              },
              signedContent: {
                $ref: '#/components/schemas/SignedContent',
              },
              signature: {
                $ref: '#/components/schemas/Signature',
              },
            },
          },
          ClientID: {
            description:
              'SnapTrade Client ID (generated and provided to partner by SnapTrade)',
            type: 'string',
            example: 'SNAPTRADETEST',
          },
          UserID: {
            description: 'SnapTrade User ID',
            type: 'string',
            example: 'John.doe@snaptrade.com',
          },
          UserSecret: {
            description:
              'SnapTrade User Secret (generated when registering user)',
            type: 'string',
            example: 'USERSECRET123',
          },
          PerformanceCustom: {
            description: 'Performance Custom Response Object',
            type: 'object',
            properties: {
              totalEquityTimeframe: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/PastValue',
                },
              },
              contributions: {
                $ref: '#/components/schemas/NetContributions',
              },
              contributionTimeframe: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/PastValue',
                },
              },
              contributionTimeframeCumulative: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/PastValue',
                },
              },
              withdrawalTimeframe: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/PastValue',
                },
              },
              contributionStreak: {
                type: 'number',
                example: 5,
                description:
                  'Current streak of cosecutive months where contributions were made',
                nullable: true,
              },
              contributionMonthsContributed: {
                type: 'number',
                example: 10,
                description:
                  'Number of months in the timeframe with contributions',
                nullable: true,
              },
              contributionTotalMonths: {
                type: 'number',
                example: 13,
                description: 'Total months in timeframe',
                nullable: true,
              },
              dividends: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/NetDividend',
                },
              },
              dividendIncome: {
                type: 'number',
                description: 'Total dividends received over the timeframe',
                example: 135.97,
                nullable: true,
              },
              monthlyDividends: {
                type: 'number',
                description:
                  'Average dividends received per month over the timeframe',
                example: 26.37,
                nullable: true,
              },
              badTickers: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'MAW105',
                  nullable: true,
                },
                description:
                  'list of tickers which may not be supported or may not have accurate price data',
              },
              dividendTimeline: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/MonthlyDividends',
                },
              },
              commissions: {
                type: 'number',
                example: 3.26,
                description: 'commissions incurred during the timeframe',
                nullable: true,
              },
              forexFees: {
                type: 'number',
                example: 5.26,
                description: 'forex fees incurred during the timeframe',
                nullable: true,
              },
              fees: {
                type: 'number',
                example: 2.72,
                description: 'other fees incurred during the timeframe',
                nullable: true,
              },
              rateOfReturn: {
                type: 'number',
                example: 0.082312367452,
                description:
                  'The return rate over the timeframe. Annualized if timeframe is longer than 1 year',
                nullable: true,
              },
              returnRateTimeframe: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/SubPeriodReturnRate',
                },
              },
              detailedMode: {
                type: 'boolean',
                description:
                  'Whether the user has detailed mode enabled (more frequent data points for totalEquity and contribution timeframes)',
              },
            },
          },
          SubPeriodReturnRate: {
            type: 'object',
            properties: {
              periodStart: {
                $ref: '#/components/schemas/ReportingDate',
              },
              periodEnd: {
                $ref: '#/components/schemas/ReportingDate',
              },
              rateOfReturn: {
                type: 'number',
                example: 0.012312367452,
                description: 'The return rate for the given period',
                nullable: true,
              },
            },
          },
          DividendAtDate: {
            type: 'object',
            properties: {
              symbol: {
                type: 'string',
                example: 'AAPL',
                description:
                  'The ticker of the symbol that the dividend came from',
                nullable: true,
              },
              amount: {
                type: 'number',
                example: 6.82,
                description: 'The amount received from the dividend',
                nullable: true,
              },
              currency: {
                type: 'string',
                example: 'CAD',
                description: 'The currency of the amount',
              },
            },
          },
          PartnerData: {
            description: 'SnapTrade Partner metadata',
            type: 'object',
            properties: {
              redirect_uri: {
                type: 'string',
                description:
                  'URI to redirect user back to after user is done adding brokerage connections',
                example: 'https://example.com/oauth/snaptrade',
              },
              allowed_brokerages: {
                type: 'array',
                description: 'Brokerages that can be accessed by partners',
                items: {
                  $ref: '#/components/schemas/Brokerage',
                },
              },
              name: {
                type: 'string',
                description: 'Name of Snaptrade Partner',
                example: 'Wealthy Chimpmunk',
              },
              slug: {
                type: 'string',
                description: 'Slug of Snaptrade Partner',
                example: 'WEALTHYCHIPMUNK',
              },
              logo_url: {
                type: 'string',
                description: "URL to partner's logo",
                example: 'https://example.com/logo.png',
              },
              pin_required: {
                type: 'boolean',
                description:
                  'Shows if pin is required by users to access connection page',
                example: false,
              },
              can_access_trades: {
                type: 'boolean',
                description:
                  'Shows if users of Snaptrade partners can access trade endpoints',
                example: true,
              },
              can_access_holdings: {
                type: 'boolean',
                description:
                  'Shows if Snaptrade partners can get user holdings data',
                example: true,
              },
              can_access_account_history: {
                type: 'boolean',
                description:
                  'Shows if Snaptrade partners can get users account history data',
                example: true,
              },
              can_access_reference_data: {
                type: 'boolean',
                description:
                  'Shows if Snaptrade partners can get users holdings data',
                example: true,
              },
              can_access_portfolio_management: {
                type: 'boolean',
                description:
                  'Shows if users Snaptrade partners can access portfolio group management features',
                example: true,
              },
              can_access_orders: {
                type: 'boolean',
                description:
                  'Shows if Snaptrade partners can get users account order history',
                example: true,
              },
            },
          },
          Position: {
            description: 'Account Position',
            type: 'object',
            properties: {
              symbol: {
                $ref: '#/components/schemas/PositionSymbol',
              },
              units: {
                type: 'number',
                example: 40,
                nullable: true,
              },
              price: {
                type: 'number',
                example: 113.15,
                description: 'Last known market price for the symbol',
                nullable: true,
              },
              open_pnl: {
                type: 'number',
                example: 0.44,
                nullable: true,
              },
              fractional_units: {
                description:
                  'Deprecated, use the units field for both fractional and integer units going forward',
                type: 'number',
                nullable: true,
                example: 1.44,
              },
              average_purchase_price: {
                type: 'number',
                nullable: true,
                example: 108.3353,
                description:
                  'Average purchase price for this position. Either returned by the underlying broker or calculated using historical transactions.',
              },
            },
          },
          RedirectTokenandPin: {
            description: 'Response when register user is successful',
            type: 'object',
            properties: {
              token: {
                type: 'string',
                example:
                  'myDAIBCP/EYqSmMByhMRB65aMa%2BdYhu2xRsGQe0sDd9SgZXMbdRh3eBaTh/bLViVGQoil6p9ytUUVhkqWalejOqCNVkXXTk/iNPTPaFCeh9%2B',
              },
              pin: {
                type: 'string',
                example: 'usERdeFiP@1in9',
              },
            },
          },
          Signature: {
            description:
              'Steps to generate a signature\n  * Prepare signed content (see SignedContent schema)\n  * Sign content prepared above with HMAC-SHA256 using the UTF-8 encoding\n  * Return base64 encoding of sign content along with headers\n Note: Use the shared consumer key provided by SnapTrade to signed the request\nExample python code\n```\nimport hmac\nimport json\nfrom base64 import b64encode\nfrom hashlib import sha256\nfrom urllib.parse import urlencode\nconsumer_key = "UxrFb4cHdRWlmJKNuJjA6hoaN8uVa6jPGFVUl2UKHuKmurCnaU".encode()\nrequest_data = {\'userId\': \'snaptrade-user-123\', \'userSecret\': \'CHRIS.P.BACON\'}\nrequest_path = "/api/v1/snapTrade/mockSignature"\nrequest_query = "clientId=SNAPTRADETEST&timestamp=1635790389"\nsig_object = {"content": request_data, "path": request_path, "query": request_query}\nsig_content = json.dumps(sig_object, separators=(",", ":"), sort_keys=True)\nsig_digest = hmac.new(consumer_key, sig_content.encode(), sha256).digest()\nsignature = b64encode(sig_digest).decode()\n```\n',
            type: 'string',
            example: 'QJPQgW0Y8mWbG9Whw/fhCYofIgSo/UAo2AIc1bBPMnY=',
          },
          SignedContent: {
            description:
              'Signed content requires 3 key-value pairs\n* content -> Content included in request body, set to null if no content is included. Sort keys in content alphabetically\n* path -> Url path of request submitted\n* query -> Query params included in requests\nAfter preparing the key-value pairs, sort them alphabetically and convert them\ninto a string.\nNote:\nRemove any extra whitespace characters and delimiters from the signed content.\nFor example, some JSON rendering engines will produce output like this:\n  -- `{"blue": "moon", "hello": "world"}`\nTo produce the correct signature, the JSON should be processed to look like this:\n  -- `{"blue":"moon","hello":"world"}`\n',
            type: 'string',
            example:
              '{"content":{"userId":"snaptrade-user-123","userSecret":"CHRIS.P.BACON"},"path":"/api/v1/snapTrade/mockSignature","query":"clientId=SNAPTRADETEST&timestamp=1635790389"}',
          },
          SnapTradeRegisterUserRequestBody: {
            description:
              'Data required to register a user via SnapTrade Partner',
            type: 'object',
            properties: {
              userId: {
                $ref: '#/components/schemas/SnapTradeUserID',
              },
              rsaPublicKey: {
                $ref: '#/components/schemas/rsaPublicKey',
              },
            },
          },
          SnapTradeLoginUserRequestBody: {
            description: 'Data to login a user via SnapTrade Partner',
            type: 'object',
            properties: {
              broker: {
                type: 'string',
                example: 'ALPACA',
              },
              immediateRedirect: {
                type: 'boolean',
                example: true,
              },
              customRedirect: {
                type: 'string',
                example: 'https://snaptrade.com',
              },
              reconnect: {
                type: 'string',
                example: '8b5f262d-4bb9-365d-888a-202bd3b15fa1',
              },
              connectionType: {
                type: 'string',
                enum: ['read', 'trade'],
              },
            },
          },
          SnapTradeUserID: {
            description:
              "SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as it's unique to a user",
            type: 'string',
            example: 'snaptrade-user-123',
          },
          SnapTradeUserSecret: {
            description:
              'SnapTrade User Secret randomly generated by SnapTrade. This should be considered priviledged information and if compromised, you should delete and re-create this SnapTrade user.',
            type: 'string',
            example: 'h81@cx1lkalablakwjaltkejraj11=',
          },
          Symbol: {
            description: 'Symbol',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              symbol: {
                type: 'string',
                example: 'VAB.TO',
              },
              raw_symbol: {
                type: 'string',
                example: 'VAB',
              },
              name: {
                type: 'string',
                example: 'Vanguard Canadian Aggregate Bond Index ETF',
              },
              currency: {
                $ref: '#/components/schemas/Currency',
              },
              exchange: {
                $ref: '#/components/schemas/Exchange',
              },
              type: {
                $ref: '#/components/schemas/SecurityType',
              },
            },
          },
          Timestamp: {
            externalDocs: {
              url: 'https://en.wikipedia.org/wiki/Unix_time',
            },
            description: 'Unix Epoch time',
            type: 'integer',
            example: 1635790389,
          },
          UserIDandSecret: {
            description: 'Response when register user is successful',
            type: 'object',
            properties: {
              userId: {
                $ref: '#/components/schemas/SnapTradeUserID',
              },
              userSecret: {
                $ref: '#/components/schemas/SnapTradeUserSecret',
              },
            },
          },
          UserList: {
            description: 'List of registered SnapTrade users',
            type: 'array',
            items: {
              type: 'string',
            },
            example: ['user1', 'user2', 'user3'],
          },
          DeleteUserResponse: {
            description: 'Response when delete user is successful',
            type: 'object',
            properties: {
              status: {
                type: 'string',
                example: 'deleted',
                description: 'Delete status',
              },
              userId: {
                $ref: '#/components/schemas/SnapTradeUserID',
              },
            },
          },
          BrokerageAuthorizationType: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                enum: ['read', 'trade'],
              },
            },
          },
          BrokerageAuthorizationTypeReadOnly: {
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              type: {
                type: 'string',
                enum: ['read', 'trade'],
              },
              auth_type: {
                type: 'string',
                enum: ['OAUTH', 'SCRAPE', 'UNOFFICIAL_API', 'TOKEN'],
              },
              brokerage: {
                type: 'object',
                properties: {
                  id: {
                    $ref: '#/components/schemas/Id',
                  },
                  name: {
                    type: 'string',
                    example: 'Questrade',
                    description: 'Name of Brokerage',
                  },
                  slug: {
                    type: 'string',
                    example: 'QUESTRADE',
                    description:
                      'Slug of Brokerage. It is usually the name of the brokerage in capital letters',
                  },
                },
              },
            },
          },
          Brokerage: {
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              name: {
                type: 'string',
                example: 'Questrade',
              },
              display_name: {
                type: 'string',
                example: 'Questrade',
              },
              description: {
                type: 'string',
                example:
                  "Questrade is an online brokerage firm and wealth management firm based in Canada. It is Canada's largest discount broker.",
              },
              aws_s3_logo_url: {
                type: 'string',
                format: 'url',
                example: 'https://www.snaptrade.com/questrade.logo',
              },
              slug: {
                type: 'string',
                example: 'QUESTRADE',
              },
              url: {
                type: 'string',
                format: 'url',
                example: 'https://www.questrade.com/',
              },
              enabled: {
                type: 'boolean',
                example: true,
              },
              maintenance_mode: {
                type: 'boolean',
                example: true,
              },
              allows_fractional_units: {
                type: 'boolean',
                nullable: true,
                example: true,
              },
              allows_trading: {
                type: 'boolean',
                nullable: true,
                example: true,
              },
              has_reporting: {
                type: 'boolean',
                nullable: true,
                example: true,
              },
              is_real_time_connection: {
                type: 'boolean',
                example: true,
              },
              allows_trading_through_snaptrade_api: {
                type: 'boolean',
                nullable: true,
                example: true,
              },
              is_scraping_integration: {
                type: 'boolean',
                example: true,
              },
              default_currency: {
                $ref: '#/components/schemas/Id',
              },
              brokerage_type: {
                $ref: '#/components/schemas/BrokerageType',
              },
              exchanges: {
                description: 'List of exchange ID supported by brokerage',
                type: 'array',
                items: {},
                example: [
                  '2bcd7cc3-e922-4976-bce1-9858296801c3',
                  '4bcd8cc3-c122-4974-dc21-1858296801f4',
                ],
              },
            },
          },
          BrokerageAuthorization: {
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              created_date: {
                $ref: '#/components/schemas/Time',
              },
              updated_date: {
                $ref: '#/components/schemas/Time',
              },
              brokerage: {
                $ref: '#/components/schemas/Brokerage',
              },
              name: {
                description: 'Connection Name',
                type: 'string',
                example: 'Connection-1',
              },
              type: {
                type: 'string',
                example: 'trade',
              },
              disabled: {
                type: 'boolean',
                example: false,
              },
              disabled_date: {
                description: 'Disabled date',
                type: 'string',
                nullable: true,
                example: '2022-01-21T20:11:19.217Z',
              },
              meta: {
                description: 'Additional data about brokerage authorization',
                type: 'object',
                example: {
                  identifier: 123456,
                },
              },
            },
          },
          SessionEvent: {
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              session_event_type: {
                type: 'string',
                enum: [
                  'CONNECTION_FAILED',
                  'DISCLAIMER_ACCEPTED',
                  'BROKERAGE_CONNECTION_INITIATED',
                  'BROKERAGE_AUTHENTICATION',
                  'MFA_AUTHORIZATION',
                  'CONNECTION_SUCCESSFUL',
                  'PARTNER_REDIRECT',
                ],
              },
              session_id: {
                $ref: '#/components/schemas/Id',
              },
              user_id: {
                $ref: '#/components/schemas/SnapTradeUserID',
              },
              created_date: {
                $ref: '#/components/schemas/Time',
              },
              brokerage_status_code: {
                type: 'integer',
                nullable: true,
                example: 400,
              },
              brokerage_authorization_id: {
                $ref: '#/components/schemas/Id',
              },
            },
          },
          BrokerageSymbol: {
            description: 'Brokerage symbol',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              symbol: {
                allOf: [
                  {
                    $ref: '#/components/schemas/UniversalSymbol',
                  },
                ],
                nullable: true,
              },
              brokerage_authorization: {
                $ref: '#/components/schemas/BrokerageAuthorization',
              },
              description: {
                type: 'string',
                example: 'VANGUARD CDN AGGREGATE BOND INDEX ETF',
              },
              allows_fractional_units: {
                type: 'boolean',
                example: true,
                nullable: true,
              },
              option_symbol: {
                allOf: [
                  {
                    $ref: '#/components/schemas/OptionsSymbol',
                  },
                ],
                nullable: true,
              },
            },
          },
          PositionSymbol: {
            description: 'Symbol returned in position object',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              description: {
                type: 'string',
                example: 'VANGUARD CDN AGGREGATE BOND INDEX ETF',
              },
              symbol: {
                $ref: '#/components/schemas/UniversalSymbol',
              },
              local_id: {
                type: 'string',
                example: '3291231',
                nullable: true,
              },
              is_quotable: {
                type: 'boolean',
                example: true,
              },
              is_tradable: {
                type: 'boolean',
                example: true,
              },
            },
          },
          CalculatedTrade: {
            description: 'of trades to make to rebalance portfolio',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              trades: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/Trade',
                },
              },
            },
          },
          OptionChain: {
            description: 'chain of options',
            type: 'array',
            items: {
              type: 'object',
              properties: {
                expiryDate: {
                  type: 'string',
                  example: '2022-07-08T04:00:00.000Z',
                },
                description: {
                  type: 'string',
                  example: 'APPLE INC',
                },
                listingExchange: {
                  type: 'string',
                  example: 'OPRA',
                },
                optionExerciseType: {
                  type: 'string',
                  example: 'American',
                },
                chainPerRoot: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      optionRoot: {
                        type: 'string',
                        example: 'AAPL',
                      },
                      chainPerStrikePrice: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            strikePrice: {
                              type: 'integer',
                              format: 'int32',
                              example: 70,
                              nullable: true,
                            },
                            callSymbolId: {
                              type: 'integer',
                              format: 'int32',
                              example: 42816081,
                              nullable: true,
                            },
                            putSymbolId: {
                              type: 'integer',
                              format: 'int32',
                              example: 42816129,
                              nullable: true,
                            },
                          },
                        },
                      },
                      multiplier: {
                        type: 'integer',
                        format: 'int32',
                        example: 100,
                      },
                    },
                  },
                },
              },
            },
          },
          Email: {
            type: 'string',
            format: 'email',
            example: 'ops@snaptrade.com',
          },
          ExchangeRatePairs: {
            description: 'The exchange rate of a pair of currencies',
            type: 'object',
            properties: {
              src: {
                $ref: '#/components/schemas/Currency',
              },
              dst: {
                $ref: '#/components/schemas/Currency',
              },
              exchange_rate: {
                type: 'number',
                example: 1.32,
              },
            },
          },
          ExcludedAsset: {
            description: 'An excluded asset in a portfolio group',
            type: 'object',
            properties: {
              symbol: {
                $ref: '#/components/schemas/UniversalSymbol',
              },
            },
          },
          Id: {
            type: 'string',
            format: 'uuid',
            example: '2bcd7cc3-e922-4976-bce1-9858296801c3',
          },
          ModelAssetClass: {
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              name: {
                type: 'string',
                example: 'Bonds',
              },
            },
          },
          ModelAssetClassDetails: {
            type: 'object',
            properties: {
              model_asset_class: {
                $ref: '#/components/schemas/ModelAssetClass',
              },
              model_asset_class_target: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/ModelAssetClassTarget',
                },
              },
            },
          },
          ModelAssetClassTarget: {
            type: 'object',
            properties: {
              symbol: {
                $ref: '#/components/schemas/UniversalSymbol',
              },
            },
          },
          ModelPortfolio: {
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              name: {
                type: 'string',
                example: 'SnapTrade 5x Aggressive Growth Fund',
              },
              model_type: {
                description:
                  'Enum definitions -> [-1: Unassigned, 0: Security Model Portfolio, 1: Asset Class Portfolio]',
                type: 'integer',
                enum: [-1, 0, 1],
                default: -1,
              },
            },
          },
          ModelPortfolioAssetClass: {
            type: 'object',
            properties: {
              model_asset_class: {
                $ref: '#/components/schemas/ModelAssetClass',
              },
              percent: {
                type: 'integer',
                minimum: 0,
                maximum: 100,
                example: 100,
              },
            },
          },
          ModelPortfolioDetails: {
            type: 'object',
            properties: {
              model_portfolio: {
                $ref: '#/components/schemas/ModelPortfolio',
              },
              model_portfolio_security: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/ModelPortfolioSecurity',
                },
              },
              model_portfolio_asset_class: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/ModelPortfolioAssetClass',
                },
              },
            },
          },
          ModelPortfolioSecurity: {
            type: 'object',
            properties: {
              symbol: {
                $ref: '#/components/schemas/UniversalSymbol',
              },
              percent: {
                type: 'integer',
                minimum: 0,
                maximum: 100,
                example: 100,
              },
            },
          },
          MonthlyDividends: {
            type: 'object',
            properties: {
              date: {
                $ref: '#/components/schemas/ReportingDate',
              },
              dividends: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/DividendAtDate',
                },
              },
            },
          },
          NetContributions: {
            type: 'object',
            properties: {
              date: {
                $ref: '#/components/schemas/ReportingDate',
              },
              contributions: {
                type: 'number',
                example: 524.74,
                nullable: true,
              },
              currency: {
                type: 'string',
                example: 'CAD',
              },
            },
          },
          NetDividend: {
            description:
              'representing total dividends received during a timeframe',
            type: 'object',
            properties: {
              symbol: {
                $ref: '#/components/schemas/UniversalSymbol',
              },
              amount: {
                type: 'number',
                example: 165.05,
                nullable: true,
              },
              currency: {
                type: 'string',
                example: 'USD',
              },
            },
          },
          PastValue: {
            type: 'object',
            properties: {
              date: {
                $ref: '#/components/schemas/ReportingDate',
              },
              value: {
                type: 'number',
                example: 52.74,
              },
              currency: {
                type: 'string',
                example: 'CAD',
              },
            },
          },
          Percent: {
            type: 'number',
            minimum: 0,
            maximum: 100,
            example: 90,
          },
          PortfolioGroup: {
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              name: {
                type: 'string',
                example: 'Combined Retirement Portfolio',
              },
            },
          },
          PortfolioGroupInfo: {
            description:
              'Summary of all relevant information about a portfolio group.',
            type: 'object',
            properties: {
              symbols: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/UniversalSymbol',
                },
              },
              quotable_symbols: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/UniversalSymbol',
                },
              },
              balances: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/Balance',
                },
              },
              positions: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/Position',
                },
              },
              target_positions: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/TargetAsset',
                },
              },
              ideal_positions: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/Position',
                },
              },
              excluded_positions: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/ExcludedAsset',
                },
              },
              calculated_trades: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/CalculatedTrade',
                },
              },
              brokerage_authorizations: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/BrokerageAuthorization',
                },
              },
              accuracy: {
                type: 'number',
                example: 0.962,
              },
              settings: {
                $ref: '#/components/schemas/PortfolioGroupSettings',
              },
            },
          },
          PortfolioGroupPosition: {
            description: 'Details of a security held',
            type: 'object',
            properties: {
              symbol: {
                $ref: '#/components/schemas/UniversalSymbol',
              },
              price: {
                type: 'number',
                example: 24.81,
                description: 'Last known market price for the symbol',
                nullable: true,
              },
              units: {
                type: 'integer',
                example: 15,
              },
            },
          },
          PortfolioGroupSettings: {
            type: 'object',
            properties: {
              buyOnly: {
                type: 'boolean',
                example: true,
              },
              cash_optimizer: {
                type: 'boolean',
                example: true,
              },
              notifyFrequency: {
                type: 'string',
                example: '7 00:00:00',
              },
              driftThreshold: {
                $ref: '#/components/schemas/Percent',
              },
              preferred_currency: {
                $ref: '#/components/schemas/Currency',
              },
            },
          },
          ReportingDate: {
            description:
              'Date used to specify timeframe for a reporting call (in YYYY-MM-DD format)',
            type: 'string',
            example: '2022-01-24',
            format: 'date',
          },
          ReportingFrequency: {
            description:
              'Optional frequency for the rate of return chart (defaults to monthly). Possible values are weekly, monthly, quarterly, yearly.',
            type: 'string',
            example: 'monthly',
          },
          Status: {
            description: 'Status of API',
            type: 'object',
            properties: {
              version: {
                type: 'integer',
                example: 151,
              },
              timestamp: {
                type: 'string',
                example: '2022-11-04T01:47:00.377Z',
              },
              online: {
                type: 'boolean',
                example: true,
              },
            },
          },
          SymbolQuery: {
            description: 'Symbol query for searching for symbols',
            type: 'object',
            properties: {
              substring: {
                type: 'string',
                example: 'apple',
              },
            },
          },
          SyncStatusDate: {
            description: 'Date in YYYY-MM-DD format or null',
            type: 'string',
            example: '2022-01-24',
            format: 'date',
            nullable: true,
          },
          TargetAsset: {
            description: 'Target percentage of a certain asset',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              symbol: {
                $ref: '#/components/schemas/UniversalSymbol',
              },
              percent: {
                $ref: '#/components/schemas/Percent',
              },
              is_supported: {
                type: 'boolean',
                example: true,
              },
              is_excluded: {
                type: 'boolean',
                example: true,
              },
              meta: {
                type: 'object',
                nullable: true,
              },
            },
          },
          TargetAssetList: {
            description: 'Target percentage of a certain asset',
            type: 'array',
            items: {
              $ref: '#/components/schemas/TargetAsset',
            },
          },
          Trade: {
            description: 'A trade object',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              account: {
                $ref: '#/components/schemas/Account',
              },
              symbol: {
                $ref: '#/components/schemas/BrokerageSymbol',
              },
              universal_symbol: {
                $ref: '#/components/schemas/UniversalSymbol',
              },
              action: {
                type: 'string',
                enum: ['BUY', 'SELL'],
                example: 'BUY',
              },
              units: {
                type: 'integer',
                example: 6,
              },
              price: {
                type: 'number',
                example: 24.81,
              },
              sequence: {
                type: 'integer',
                example: 1,
              },
            },
          },
          TradeExecutionStatus: {
            description: 'Execution status of a trade',
            type: 'object',
            properties: {
              symbol: {
                $ref: '#/components/schemas/BrokerageSymbol',
              },
              universal_symbol: {
                $ref: '#/components/schemas/UniversalSymbol',
              },
              trade: {
                $ref: '#/components/schemas/Trade',
              },
              state: {
                type: 'string',
                description: 'Execution state of a trade',
                enum: [
                  'Executed',
                  'Canceled',
                  'Rejected',
                  'Failed',
                  'Not Executed',
                ],
                example: 'Executed',
              },
              filled_units: {
                type: 'integer',
                description: 'Number of filled units',
                example: 3,
              },
              action: {
                type: 'string',
                description: 'Action of executed trade',
                enum: ['BUY', 'SELL'],
                example: 'SELL',
              },
              price: {
                type: 'number',
                description: 'Price of execution',
                example: 23.44,
              },
              commissions: {
                type: 'number',
                description: 'Fees paid from executing trade',
                example: 23.44,
              },
              meta: {
                type: 'object',
                description: 'Other misc. data',
                example: {
                  canceledUnits: 2,
                },
              },
            },
          },
          TradeImpact: {
            description: 'Impact of a group of trade',
            type: 'object',
            properties: {
              account: {
                $ref: '#/components/schemas/Account',
              },
              currency: {
                $ref: '#/components/schemas/Currency',
              },
              remaining_cash: {
                type: 'number',
                description: 'Remaining balance after executing all trades',
                example: 1.01,
              },
              estimated_commissions: {
                type: 'number',
                description:
                  'Total estimated commissions across all trades to make',
                example: 10.05,
              },
              forex_fees: {
                type: 'number',
                description: 'Estimated forex fees to pay to excute trades',
                example: 2.01,
              },
            },
          },
          ManualTrade: {
            description: 'A manual trade object',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              account: {
                type: 'string',
                example: '2bcd7cc3-e922-4976-bce1-9855556801c3',
              },
              order_type: {
                $ref: '#/components/schemas/OrderType',
              },
              time_in_force: {
                $ref: '#/components/schemas/TimeInForce',
              },
              symbol: {
                $ref: '#/components/schemas/ManualTradeSymbol',
              },
              action: {
                $ref: '#/components/schemas/Action',
              },
              units: {
                $ref: '#/components/schemas/Units',
              },
              price: {
                $ref: '#/components/schemas/Price',
              },
            },
          },
          ManualTradeSymbol: {
            description: 'Manual trade symbol object',
            type: 'object',
            properties: {
              brokerage_symbol_id: {
                $ref: '#/components/schemas/Id',
              },
              universal_symbol_id: {
                $ref: '#/components/schemas/Id',
              },
              currency: {
                $ref: '#/components/schemas/Currency',
              },
              local_id: {
                type: 'string',
                example: '1048101',
              },
              description: {
                type: 'string',
                example: 'Metaverse Global ETF',
                nullable: true,
              },
              symbol: {
                type: 'string',
                example: 'MVGP.U.TO',
              },
            },
          },
          ManualTradeBalance: {
            description: 'Balance',
            type: 'object',
            properties: {
              account: {
                $ref: '#/components/schemas/Account',
              },
              currency: {
                $ref: '#/components/schemas/Currency',
              },
              cash: {
                $ref: '#/components/schemas/Cash',
              },
            },
          },
          ManualTradeAndImpact: {
            description: 'Manual Trade and Impact object',
            type: 'object',
            properties: {
              trade: {
                $ref: '#/components/schemas/ManualTrade',
              },
              trade_impacts: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/ManualTrade',
                },
              },
              combined_remaining_balance: {
                $ref: '#/components/schemas/ManualTradeBalance',
              },
            },
          },
          SymbolsQuotes: {
            description: 'Symbols and Tickers Quotes object',
            type: 'array',
            items: {
              properties: {
                symbol: {
                  $ref: '#/components/schemas/UniversalSymbol',
                },
                bid_price: {
                  type: 'number',
                  example: 8.43,
                },
                ask_price: {
                  type: 'number',
                  example: 8.43,
                },
                last_trade_price: {
                  type: 'number',
                  example: 8.74,
                },
                bid_size: {
                  type: 'number',
                  example: 260,
                },
                ask_size: {
                  type: 'number',
                  example: 344,
                },
              },
            },
          },
          ManualTradeForm: {
            description: 'Manual Trade Form',
            type: 'object',
            properties: {
              account_id: {
                $ref: '#/components/schemas/Id',
              },
              action: {
                $ref: '#/components/schemas/Action',
              },
              order_type: {
                $ref: '#/components/schemas/OrderType',
              },
              price: {
                $ref: '#/components/schemas/Price',
              },
              stop: {
                $ref: '#/components/schemas/StopPrice',
              },
              time_in_force: {
                $ref: '#/components/schemas/TimeInForce',
              },
              units: {
                $ref: '#/components/schemas/Units',
              },
              universal_symbol_id: {
                $ref: '#/components/schemas/Id',
              },
            },
          },
          Cash: {
            description: 'Cash',
            type: 'number',
            example: 1.11,
            nullable: true,
          },
          OrderType: {
            description: 'Order Type',
            type: 'string',
            enum: ['Limit', 'Market', 'StopLimit', 'StopLoss'],
          },
          SnapTradeAPIDisclaimerAcceptStatus: {
            description:
              'Status of user acceptance of SnapTrade API disclaimer',
            type: 'object',
            properties: {
              accepted: {
                type: 'boolean',
              },
              timestamp: {
                type: 'string',
                example: '2022-01-21T20:11:19.217Z',
              },
            },
          },
          TimeInForce: {
            description:
              'Trade time in force:\n  * FOK - Fill Or Kill\n  * Day - Day\n  * GTC - Good Til Canceled\n',
            type: 'string',
            enum: ['Day', 'FOK', 'GTC'],
          },
          Action: {
            description: 'Trade Action',
            type: 'string',
            enum: ['BUY', 'SELL'],
          },
          Units: {
            description: 'Trade Units',
            type: 'number',
          },
          OpenUnits: {
            description: 'Trade Units',
            type: 'number',
            nullable: true,
          },
          CancelledUnits: {
            description: 'Trade Units',
            type: 'number',
            nullable: true,
          },
          FilledUnits: {
            description: 'Trade Units',
            type: 'number',
            nullable: true,
          },
          Price: {
            description: 'Trade Price if limit or stop limit order',
            type: 'number',
            nullable: true,
            example: 31.33,
          },
          StopPrice: {
            description:
              'Stop Price. If stop loss or stop limit order, the price to trigger the stop',
            type: 'number',
            example: 31.33,
            nullable: true,
          },
          UniversalActivity: {
            description: 'A transaction or activity from an institution',
            type: 'object',
            properties: {
              id: {
                type: 'string',
                example: '2f7dc9b3-5c33-4668-3440-2b31e056ebe6',
              },
              account: {
                $ref: '#/components/schemas/AccountSimple',
              },
              amount: {
                type: 'number',
                example: 263.82,
                nullable: true,
              },
              currency: {
                $ref: '#/components/schemas/Currency',
              },
              description: {
                type: 'string',
                example:
                  'WALT DISNEY UNIT DIST ON 21 SHS REC 12/31/21 PAY 01/06/22',
              },
              fee: {
                type: 'number',
                example: 0,
              },
              fx_rate: {
                type: 'number',
                example: 1.032,
                nullable: true,
                description:
                  'The forex conversion rate involved in the transaction if provided by the brokerage',
              },
              institution: {
                type: 'string',
                example: 'SnapTrade Investr',
              },
              option_type: {
                type: 'string',
                example: 'BUY_TO_OPEN',
                description:
                  "If an option transaction, then it's type (BUY_TO_OPEN, SELL_TO_CLOSE, etc), otherwise empty string",
              },
              price: {
                type: 'number',
                example: 0.4,
              },
              settlement_date: {
                type: 'string',
                example: '2022-01-06T05:00:00.000Z',
              },
              external_reference_id: {
                type: 'string',
                nullable: true,
                description:
                  'Reference ID from brokerage used to identify related transactions. For example if an order comprises of several transactions (buy, fee, fx), they can be grouped if they share the same external_reference_id',
                example: '2f7dc9b3-5c33-4668-3440-2b31e056ebe6',
              },
              symbol: {
                $ref: '#/components/schemas/Symbol',
              },
              option_symbol: {
                $ref: '#/components/schemas/OptionsSymbol',
              },
              trade_date: {
                type: 'string',
                example: '2022-01-06T05:00:00.000Z',
                nullable: true,
              },
              type: {
                type: 'string',
                description:
                  'Potential values include (but are not limited to) - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT',
              },
              units: {
                type: 'number',
                description: 'Usually but not necessarily an integer',
                example: 5,
              },
            },
          },
          UniversalSymbol: {
            description: 'Universal symbol',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              symbol: {
                type: 'string',
                example: 'VAB.TO',
              },
              raw_symbol: {
                type: 'string',
                example: 'VAB',
              },
              description: {
                type: 'string',
                example: 'VANGUARD CDN AGGREGATE BOND INDEX ETF',
                nullable: true,
              },
              currency: {
                $ref: '#/components/schemas/Currency',
              },
              exchange: {
                $ref: '#/components/schemas/Exchange',
              },
              type: {
                $ref: '#/components/schemas/SecurityType',
              },
              currencies: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/Currency',
                },
              },
            },
          },
          UniversalSymbolTicker: {
            description: 'Universal symbol',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              symbol: {
                type: 'string',
                example: 'VAB.TO',
              },
              raw_symbol: {
                type: 'string',
                example: 'VAB',
              },
              description: {
                type: 'string',
                example: 'VANGUARD CDN AGGREGATE BOND INDEX ETF',
              },
              currency: {
                $ref: '#/components/schemas/Currency',
              },
              exchange: {
                $ref: '#/components/schemas/Exchange',
              },
              type: {
                $ref: '#/components/schemas/SecurityType',
              },
              currencies: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/Currency',
                },
              },
            },
          },
          UnderlyingSymbol: {
            description: 'Underlying Symbol',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              symbol: {
                type: 'string',
                example: 'SPY',
              },
              description: {
                type: 'string',
                example: 'SPDR S&P 500 ETF Trust',
                nullable: true,
              },
              currency: {
                $ref: '#/components/schemas/Currency',
              },
              exchange: {
                $ref: '#/components/schemas/USExchange',
              },
              type: {
                $ref: '#/components/schemas/SecurityType',
              },
              currencies: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/Currency',
                },
              },
            },
          },
          OptionsSymbol: {
            description: 'Options Symbol',
            type: 'object',
            required: [
              'id ticker option_type strike_price expiration_date underlying_symbol',
            ],
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              ticker: {
                type: 'string',
                example: 'SPY 220819P00200000',
              },
              option_type: {
                type: 'string',
                enum: ['CALL', 'PUT'],
                example: 'CALL',
              },
              strike_price: {
                type: 'number',
                example: 200,
              },
              expiration_date: {
                type: 'string',
                format: 'datetime',
                example: '2017-07-17T15:13:07.177712+00:00',
              },
              is_mini_option: {
                type: 'boolean',
                example: false,
              },
              underlying_symbol: {
                $ref: '#/components/schemas/UnderlyingSymbol',
              },
              local_id: {
                type: 'string',
                example: '40817960',
              },
              exchange_id: {
                type: 'string',
                format: 'uuid',
              },
            },
          },
          OptionLeg: {
            description: 'Option Leg',
            type: 'object',
            properties: {
              action: {
                type: 'string',
                enum: [
                  'BUY_TO_OPEN',
                  'BUY_TO_CLOSE',
                  'SELL_TO_OPEN',
                  'SELL_TO_CLOSE',
                ],
              },
              option_symbol_id: {
                type: 'string',
                description:
                  'Obtained from calling options chain endpoint (option_id)',
                example: 'SPY220819P00200000',
              },
              quantity: {
                type: 'number',
                example: 1,
              },
            },
          },
          SecurityType: {
            description: 'Security Type',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              code: {
                type: 'string',
                example: 'cs',
              },
              description: {
                type: 'string',
                example: 'Common Stock',
              },
              is_supported: {
                type: 'boolean',
                example: true,
              },
            },
          },
          SnapTradePartnerAPICredential: {
            description: 'SnapTrade Partner brokerage api credentials',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              brokerage_api_client_id: {
                type: 'string',
                description: "client id of snaptrade's partner brokerage app",
              },
              redirect_uri: {
                type: 'string',
                example: 'https://www.example.com/oauth',
                description:
                  "Redirect uri for snaptrade's partner brokerage app",
              },
              brokerage_authorization_type: {
                $ref: '#/components/schemas/BrokerageAuthorizationTypeReadOnly',
              },
            },
          },
          UserSettings: {
            description: 'User account settings',
            type: 'object',
            properties: {
              email: {
                $ref: '#/components/schemas/Email',
              },
              name: {
                type: 'string',
                example: 'James Bond',
              },
              receive_cash_notification: {
                type: 'boolean',
                example: true,
              },
              receive_drift_notification: {
                type: 'boolean',
                example: true,
              },
              user_trial_activated: {
                type: 'boolean',
                example: true,
              },
              activated_trial_date: {
                type: 'string',
                format: 'dateTime',
                example: '2017-07-17T15:13:07.177712+00:00',
              },
              demo: {
                type: 'boolean',
                example: false,
              },
              api_enabled: {
                type: 'boolean',
                example: false,
              },
              drift_threshold: {
                type: 'number',
                example: 95,
              },
              preferred_currency: {
                $ref: '#/components/schemas/Currency',
              },
            },
          },
          Time: {
            description: 'Time',
            type: 'string',
            example: '2022-01-21T20:11:19.217Z',
          },
          BrokerageType: {
            description: 'Type of brokerage',
            type: 'object',
            properties: {
              id: {
                $ref: '#/components/schemas/Id',
              },
              name: {
                type: 'string',
                example: 'Traditional Brokerage',
              },
            },
          },
          WebhookBase: {
            description: 'The base webhook content',
            type: 'object',
            properties: {
              webookId: {
                type: 'string',
                example: '06fe1fd7-fc50-43a7-b564-8a2c5f3bab44',
              },
              clientId: {
                type: 'string',
                example: 'WEALTHYCHIPMUNK',
              },
              eventTimestamp: {
                type: 'string',
                example: '2022-01-21T20:11:19.217Z',
              },
              userId: {
                type: 'string',
                example: 'external_user@test.com',
              },
            },
          },
          UserErrorLog: {
            description: 'An API error log for a specific SnapTrade user.',
            type: 'object',
            properties: {
              requestedAt: {
                type: 'string',
                example: '2022-01-21T20:11:19.217Z',
              },
              response: {
                type: 'string',
              },
              statusCode: {
                type: 'number',
                example: 200,
              },
              queryParams: {
                type: 'string',
              },
              httpMethod: {
                type: 'string',
                example: 'POST',
              },
              endpoint: {
                type: 'string',
                example: 'api/v1/snapTrade',
              },
            },
          },
          rsaPublicKey: {
            description: 'Open SSH RSA public key',
            type: 'string',
            example:
              'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAAgQC7vbqajDw4o6gJy8UtmIbkcpnkO3Kwc4qsEnSZp/TR+fQi62F79RHWmwKOtFmwteURgLbj7D/WGuNLGOfa/2vse3G2eHnHl5CB8ruRX9fBl/KgwCVr2JaEuUm66bBQeP5XeBotdR4cvX38uPYivCDdPjJ1QWPdspTBKcxeFbccDw==',
          },
          encryptedResponse: {
            description:
              'This response consists of 2 different components that must be decrypted to obtain the decrypted message\n\n* Decrypting the encryptedSharedKey\n\n  The encrypted shared key is a shared key that was randomly generated by SnapTrade and encrypted using the users SSH public key provided when registering the user\n  It is needed to decrypt the message in step 2.\n\n  To decrypt the shared key, the user should have access to their SSH private key stored locally in their device\n\n  An example Python code on how to decrypt the shared key is shown below\n\n  ```\n  def decrypt_rsa_message(self, encrypted_message):\n      from Crypto.Cipher import PKCS1_OAEP\n      from Crypto.PublicKey import RSA\n      from base64 import b64decode\n\n      f = open(\'private.pem\', \'r\')\n      private_key = RSA.import_key(f.read())\n      cipher = PKCS1_OAEP.new(private_key)\n\n      return cipher.decrypt(b64decode(encrypted_message.encode())).decode()\n  ```\n\n* Decrypting the encryptedMessageData\n\n   The data meant to be returned by an endpoint can be obtained by decrypting the encrypted message\n\n   An encrypted message is a message that is encrypted using AES - MODE OCB with the shared key obtained in step one\n\n  An example code to decrypt the encrypted message is shown below\n\n  ```\n  def decrypt_aes_message(self, shared_key, encrypted_message):\n      from Crypto.Cipher import AES\n      from base64 import b64decode\n\n      encrypted_msg = b64decode(encrypted_message["encryptedMessage"].encode())\n      tag = b64decode(encrypted_message["tag"].encode())\n      nonce = b64decode(encrypted_message["nonce"].encode())\n      cipher = AES.new(shared_key.encode(), AES.MODE_OCB, nonce=nonce)\n\n      return cipher.decrypt_and_verify(encrypted_msg, tag).decode()\n  ```\n',
            type: 'object',
            additionalProperties: false,
            properties: {
              encryptedSharedKey: {
                type: 'string',
                example: '5UEaY9QGzcNTr8y2jGDUI79jY1OdfK9x',
              },
              encryptedMessageData: {
                type: 'object',
                properties: {
                  encryptedMessage: {
                    type: 'string',
                    example: '9Xy05vqZOfp0OpW5fLAaDw==',
                  },
                  tag: {
                    type: 'string',
                    example: 'mWZPkpQh5ktbcz6N7cTRmQ==',
                  },
                  nonce: {
                    type: 'string',
                    example: 'None',
                  },
                },
              },
            },
          },
        },
      },
    } as any,
    errors: [
      {
        message:
          'Detected more than 3 words in required property item: "id ticker option_type strike_price expiration_date underlying_symbol". This possibly due to invalid YAML list syntax.',
        path: [
          'paths',
          '/accounts/{accountId}/holdings',
          'get',
          'responses',
          '200',
          'content',
          'application/json',
          'schema',
          'properties',
          'orders',
          'items',
          'properties',
          'option_symbol',
          'required',
          '0',
        ],
        severity: DiagnosticSeverity.Warning,
      },
      {
        message:
          'Detected more than 3 words in required property item: "id ticker option_type strike_price expiration_date underlying_symbol". This possibly due to invalid YAML list syntax.',
        path: [
          'paths',
          '/accounts/{accountId}/orders',
          'get',
          'responses',
          '200',
          'content',
          'application/json',
          'schema',
          'items',
          'properties',
          'option_symbol',
          'required',
          '0',
        ],
        severity: DiagnosticSeverity.Warning,
      },
      {
        message:
          'Detected more than 3 words in required property item: "id ticker option_type strike_price expiration_date underlying_symbol". This possibly due to invalid YAML list syntax.',
        path: [
          'paths',
          '/accounts/{accountId}/orders/cancel',
          'post',
          'responses',
          '200',
          'content',
          'application/json',
          'schema',
          'properties',
          'option_symbol',
          'required',
          '0',
        ],
        severity: DiagnosticSeverity.Warning,
      },
      {
        message:
          'Detected more than 3 words in required property item: "id ticker option_type strike_price expiration_date underlying_symbol". This possibly due to invalid YAML list syntax.',
        path: [
          'paths',
          '/accounts/{accountId}/options',
          'get',
          'responses',
          '200',
          'content',
          'application/json',
          'schema',
          'items',
          'properties',
          'symbol',
          'properties',
          'option_symbol',
          'allOf',
          '0',
          'required',
          '0',
        ],
        severity: DiagnosticSeverity.Warning,
      },
      {
        message:
          'Detected more than 3 words in required property item: "id ticker option_type strike_price expiration_date underlying_symbol". This possibly due to invalid YAML list syntax.',
        path: [
          'paths',
          '/trade/place',
          'post',
          'responses',
          '200',
          'content',
          'application/json',
          'schema',
          'properties',
          'option_symbol',
          'required',
          '0',
        ],
        severity: DiagnosticSeverity.Warning,
      },
      {
        message:
          'Detected more than 3 words in required property item: "id ticker option_type strike_price expiration_date underlying_symbol". This possibly due to invalid YAML list syntax.',
        path: [
          'paths',
          '/trade/{tradeId}',
          'post',
          'responses',
          '200',
          'content',
          'application/json',
          'schema',
          'properties',
          'option_symbol',
          'required',
          '0',
        ],
        severity: DiagnosticSeverity.Warning,
      },
      {
        message:
          'Detected more than 3 words in required property item: "id ticker option_type strike_price expiration_date underlying_symbol". This possibly due to invalid YAML list syntax.',
        path: [
          'paths',
          '/trade/oco',
          'post',
          'responses',
          '200',
          'content',
          'application/json',
          'schema',
          'properties',
          'option_symbol',
          'required',
          '0',
        ],
        severity: DiagnosticSeverity.Warning,
      },
      {
        message:
          'Detected more than 3 words in required property item: "id ticker option_type strike_price expiration_date underlying_symbol". This possibly due to invalid YAML list syntax.',
        path: [
          'paths',
          '/activities',
          'get',
          'responses',
          '200',
          'content',
          'application/json',
          'schema',
          'items',
          'properties',
          'option_symbol',
          'required',
          '0',
        ],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
])