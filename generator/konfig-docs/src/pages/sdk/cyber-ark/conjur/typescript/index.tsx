import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function CyberArkConjurTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="cyber-ark-conjur-typescript-sdk"
      metaDescription={`CyberArk is the global leader in Identity Security. Centered on privileged access management, CyberArk provides the most comprehensive security offering for any identity – human or machine – across business applications, distributed workforces, hybrid cloud workloads and throughout the DevOps lifecycle. The world's leading organizations trust CyberArk to help secure their most critical assets.

For over a decade CyberArk has led the market in securing enterprises against cyber attacks that take cover behind insider privileges and attack critical enterprise assets. Today, only CyberArk is delivering a new category of targeted security solutions that help leaders stop reacting to cyber threats and get ahead of them, preventing attack escalation before irreparable business harm is done. At a time when auditors and regulators are recognizing that privileged accounts are the fast track for cyber attacks and demanding stronger protection, CyberArk's security solutions master high-stakes compliance and audit requirements while arming businesses to protect what matters most.

With offices and authorized partners worldwide, CyberArk is a vital security partner to more than 6,770 global businesses, including:

More than 50% of the Fortune 500
More than 35% of the Global 2000

CyberArk has offices in the U.S, Israel, U.K., Singapore, Australia, France, Germany, Italy, Japan, Netherlands and Turkey.`}
      company="CyberArk"
      serviceName="Conjur"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/cyberark/conjur/logo.png"
      companyKebabCase="cyber-ark"
      clientNameCamelCase="cyberArkConjur"
      homepage="cyberark.com"
      lastUpdated={new Date("2024-03-25T23:49:11.494Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/cyberark/conjur/favicon.png"
      // Missing contactUrl
      contactEmail="conj_maintainers@cyberark.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/cyberark/conjur/imagePreview.webp"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["security","identity_and_access_management","cybersecurity","information_security","privileged_account_security","advanced_threat_protection","insider_threat_protection","privileged_identity_management","privileged_session_management","ssh_key_management","highly_sensitive_information_management","information_security_software","devops_security","devsecops","identity_security","privileged_access_management"]}
      methods={[
  {
    "url": "/authn/{account}/login",
    "method": "getUserApiKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "authentication",
    "typeScriptTag": "authentication",
    "description": "Gets the API key of a user given the username and password\nvia HTTP Basic Authentication.\n",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Example of a Conjur API key"
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
    "url": "/authn-k8s/{service_id}/inject_client_cert",
    "method": "sendCsrForClientCertInjection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "authentication",
    "typeScriptTag": "authentication",
    "description": "For applications running in Kubernetes; sends Conjur a certificate\nsigning request (CSR) and requests a client certificate injected into\nthe application's Kubernetes pod.\n",
    "parameters": [
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "URL-Encoded authenticator service ID",
        "example": "prod%2fgke"
      },
      {
        "name": "hostIdPrefix",
        "schema": "string",
        "description": "Dot-separated policy tree, prefixed by `host.`, where the application identity is defined",
        "example": "host/conjur/authn-k8s/my-authenticator-id/apps"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "The injected certificate was accepted."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/authn-ldap/{service_id}/{account}/login",
    "method": "exchangeLdapCredentialsForApiKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "authentication",
    "typeScriptTag": "authentication",
    "description": "Gets the Conjur API key of a user given the LDAP username and\npassword via HTTP Basic Authentication.\n",
    "parameters": [
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "URL-Encoded authenticator service ID",
        "example": "prod%2fgke"
      },
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Example of a Conjur API key"
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
    "url": "/authn/{account}/{login}/authenticate",
    "method": "obtainAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "authentication",
    "typeScriptTag": "authentication",
    "description": "Gets a short-lived access token, which is required in the header\nof most subsequent API requests.\n",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "login",
        "schema": "string",
        "required": true,
        "description": "URL-encoded login name. For users, it’s the user ID. For hosts, the login name is `host/<host-id>`",
        "example": "admin"
      },
      {
        "name": "acceptEncoding",
        "schema": "string",
        "description": "Setting the Accept-Encoding header to base64 will return a pre-encoded access token",
        "default": "application/json"
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
    "url": "/authn-iam/{service_id}/{account}/{login}/authenticate",
    "method": "getShortLivedToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "authentication",
    "typeScriptTag": "authentication",
    "description": "Get a short-lived access token for applications running in AWS.",
    "parameters": [
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "URL-Encoded authenticator service ID",
        "example": "prod%2fgke"
      },
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "login",
        "schema": "string",
        "required": true,
        "description": "URL-encoded login name. For hosts, the login name is `host/<host-id>`",
        "example": "admin"
      },
      {
        "name": "acceptEncoding",
        "schema": "string",
        "description": "Setting the Accept-Encoding header to base64 will return a pre-encoded access token",
        "default": "application/json"
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
    "url": "/authn-azure/{service_id}/{account}/{login}/authenticate",
    "method": "azureAuthenticate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "authentication",
    "typeScriptTag": "authentication",
    "description": "Gets a short-lived access token for applications running in Azure.",
    "parameters": [
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "URL-Encoded authenticator service ID",
        "example": "prod%2fgke"
      },
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "login",
        "schema": "string",
        "required": true,
        "description": "URL-encoded login name. For users, it’s the user ID. For hosts, the login name is `host/<host-id>`",
        "example": "admin"
      },
      {
        "name": "acceptEncoding",
        "schema": "string",
        "description": "Setting the Accept-Encoding header to base64 will return a pre-encoded access token",
        "default": "application/json"
      },
      {
        "name": "jwt",
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
    "url": "/authn-gcp/{account}/authenticate",
    "method": "gcpAuthnAuthenticate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "authentication",
    "typeScriptTag": "authentication",
    "description": "Gets a short-lived access token for applications running in\nGoogle Cloud Platform.\n",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "dev"
      },
      {
        "name": "acceptEncoding",
        "schema": "string",
        "description": "Setting the Accept-Encoding header to base64 will return a pre-encoded access token"
      },
      {
        "name": "jwt",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Example of a Conjur API key"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/authn-k8s/{service_id}/{account}/{login}/authenticate",
    "method": "kubernetesAuthnAuthenticate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "authentication",
    "typeScriptTag": "authentication",
    "description": "Gets a short-lived access token for applications running in Kubernetes.",
    "parameters": [
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "URL-Encoded authenticator service ID",
        "example": "prod%2fgke"
      },
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "login",
        "schema": "string",
        "required": true,
        "description": "URL-encoded login name. For users, it’s the user ID. For hosts, the login name is `host/<host-id>`",
        "example": "admin"
      },
      {
        "name": "acceptEncoding",
        "schema": "string",
        "description": "Setting the Accept-Encoding header to base64 will return a pre-encoded access token",
        "default": "application/json"
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
    "url": "/authn-ldap/{service_id}/{account}/{login}/authenticate",
    "method": "ldapAuthenticate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "authentication",
    "typeScriptTag": "authentication",
    "description": "Gets a short-lived access token for users and hosts using their\nLDAP identity to access the Conjur API.\n",
    "parameters": [
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "URL-Encoded authenticator service ID",
        "example": "prod%2fgke"
      },
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "login",
        "schema": "string",
        "required": true,
        "description": "URL-encoded login name. For users, it’s the user ID. For hosts, the login name is `host/<host-id>`",
        "example": "admin"
      },
      {
        "name": "acceptEncoding",
        "schema": "string",
        "description": "Setting the Accept-Encoding header to base64 will return a pre-encoded access token",
        "default": "application/json"
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
    "url": "/authn-oidc/{service_id}/{account}/authenticate",
    "method": "oidcAuthenticate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "authentication",
    "typeScriptTag": "authentication",
    "description": "Gets a short-lived access token for applications using OpenID\nConnect (OIDC) to access the Conjur API.\n",
    "parameters": [
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "URL-Encoded authenticator service ID",
        "example": "prod%2fgke"
      },
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "id_token",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/authn-jwt/{service_id}/{account}/authenticate",
    "method": "jwtAuthenticate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "authentication",
    "typeScriptTag": "authentication",
    "description": "Gets a short-lived access token for applications using JSON Web Token (JWT)\nto access the Conjur API.\n",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "URL-Encoded authenticator service ID",
        "example": "prod%2fgke"
      },
      {
        "name": "jwt",
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
    "url": "/authn-jwt/{service_id}/{account}/{id}/authenticate",
    "method": "authenticateWithId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "authentication",
    "typeScriptTag": "authentication",
    "description": "Gets a short-lived access token for applications using JSON Web Token (JWT)\nto access the Conjur API. Covers the case of use of optional URL parameter \"ID\"\n",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Organization user id",
        "example": "SomeUserID"
      },
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "URL-Encoded authenticator service ID",
        "example": "prod%2fgke"
      },
      {
        "name": "jwt",
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
    "url": "/authn/{account}/password",
    "method": "changeUserPassword",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "authentication",
    "typeScriptTag": "authentication",
    "description": "Changes a user’s password.",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The password has been changed"
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
    "url": "/authn/{account}/api_key",
    "method": "rotateApiKey",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "authentication",
    "typeScriptTag": "authentication",
    "description": "Rotates a role's API key.",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "role",
        "schema": "string",
        "description": "(**Optional**) role specifier in `{kind}:{identifier}` format\n\n##### Permissions required\n\n`update` privilege on the role whose API key is being rotated.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Example of a Conjur API key"
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
    "url": "/{authenticator}/{account}",
    "method": "toggleAuthenticatorStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "authentication",
    "typeScriptTag": "authentication",
    "description": "Enables or disables authenticator defined without service_id.",
    "parameters": [
      {
        "name": "authenticator",
        "schema": "string",
        "required": true,
        "description": "The authenticator to update",
        "example": "authn-gcp"
      },
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "dev"
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The config was updated properly"
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
    "url": "/{authenticator}/{service_id}/{account}",
    "method": "toggleAuthenticatorInstanceStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "authentication",
    "typeScriptTag": "authentication",
    "description": "Enables or disables authenticator service instances.",
    "parameters": [
      {
        "name": "authenticator",
        "schema": "string",
        "required": true,
        "description": "The authenticator to update",
        "example": "authn-oidc"
      },
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "URL-Encoded authenticator service ID",
        "example": "prod%2fgke"
      },
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "dev"
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The config was updated properly"
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
    "url": "/whoami",
    "method": "getClientInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "status",
    "typeScriptTag": "status",
    "description": "Provides information about the client making an API request.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the client making a request"
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/{authenticator}/{service_id}/{account}/status",
    "method": "checkAuthenticatorConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "status",
    "typeScriptTag": "status",
    "description": "Details whether an authentication service has been configured properly",
    "parameters": [
      {
        "name": "authenticator",
        "schema": "string",
        "required": true,
        "description": "The type of authenticator",
        "example": "authn-oidc"
      },
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "URL-Encoded authenticator service ID",
        "example": "prod%2fgke"
      },
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "The organization account name",
        "example": "dev"
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
        "description": "The service was not found"
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      }
    ]
  },
  {
    "url": "/authn-gcp/{account}/status",
    "method": "checkAuthenticatorStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "status",
    "typeScriptTag": "status",
    "description": "Details whether an authentication service has been configured properly",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "The organization account name",
        "example": "dev"
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
        "description": "The service was not found"
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      }
    ]
  },
  {
    "url": "/authenticators",
    "method": "authenticatorDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "status",
    "typeScriptTag": "status",
    "description": "Details about which authenticators are on the Conjur Server",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/health",
    "method": "checkConjurHealth",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "status",
    "typeScriptTag": "status",
    "description": "Health info about conjur",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": "The tests failed"
      }
    ]
  },
  {
    "url": "/remote_health/{remote}",
    "method": "checkRemoteHealth",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "status",
    "typeScriptTag": "status",
    "description": "Health info about a given Conjur Enterprise server",
    "parameters": [
      {
        "name": "remote",
        "schema": "string",
        "required": true,
        "description": "The hostname of the remote to check",
        "example": "conjur.myorg.com"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": "The tests failed"
      }
    ]
  },
  {
    "url": "/info",
    "method": "conjurServerInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "status",
    "typeScriptTag": "status",
    "description": "Basic information about the Conjur Enterprise server",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/secrets/{account}/{kind}/{identifier}",
    "method": "getSecretValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "secrets",
    "typeScriptTag": "secrets",
    "description": "Fetches the value of a secret from the specified Secret.",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "kind",
        "schema": "string",
        "required": true,
        "description": "Type of resource - in almost all cases this should be `variable`",
        "example": "variable"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "URL-encoded variable ID",
        "example": "prod%2Faws%2Fdb-password"
      },
      {
        "name": "version",
        "schema": "integer",
        "description": "(**Optional**) Version you want to retrieve (Conjur keeps the last 20 versions of a secret)",
        "example": 1
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
      }
    ]
  },
  {
    "url": "/secrets/{account}/{kind}/{identifier}",
    "method": "createSecretValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "secrets",
    "typeScriptTag": "secrets",
    "description": "Creates a secret value within the specified variable.",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "kind",
        "schema": "string",
        "required": true,
        "description": "Type of resource - in almost all cases this should be `variable`",
        "example": "variable"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "URL-encoded variable ID",
        "example": "prod%2Faws%2Fdb-password"
      },
      {
        "name": "expirations",
        "schema": "string",
        "required": false,
        "description": "Tells the server to reset the variables expiration date"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The secret value was added successfully"
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
      }
    ]
  },
  {
    "url": "/secrets",
    "method": "getMultipleValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "secrets",
    "typeScriptTag": "secrets",
    "description": "Fetch multiple secrets",
    "parameters": [
      {
        "name": "variableIds",
        "schema": "string",
        "required": true,
        "description": "Comma-delimited, URL-encoded resource IDs of the variables.",
        "example": "myorg:variable:secret1,myorg:variable:secret1"
      },
      {
        "name": "acceptEncoding",
        "schema": "string",
        "description": "Set the encoding of the response object"
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
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/policies/{account}/policy/{identifier}",
    "method": "modifyPolicy",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "policies",
    "typeScriptTag": "policies",
    "description": "Modifies an existing Conjur policy.",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "ID of the policy to update",
        "example": "root"
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
      }
    ]
  },
  {
    "url": "/policies/{account}/policy/{identifier}",
    "method": "addDataToExistingPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "policies",
    "typeScriptTag": "policies",
    "description": "Adds data to the existing Conjur policy.",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "ID of the policy to update",
        "example": "root"
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
      }
    ]
  },
  {
    "url": "/policies/{account}/policy/{identifier}",
    "method": "putPolicyDocument",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "policies",
    "typeScriptTag": "policies",
    "description": "Loads or replaces a Conjur policy document.",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "ID of the policy to load (root if no root policy has been loaded yet)",
        "example": "root"
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
      }
    ]
  },
  {
    "url": "/roles/{account}/{kind}/{identifier}",
    "method": "deleteRoleMembership",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "roles",
    "typeScriptTag": "roles",
    "description": "Deletes an existing role membership",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "kind",
        "schema": "string",
        "required": true,
        "description": "Type of resource",
        "example": "user"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "ID of the role for which to get the information about",
        "example": "admin"
      },
      {
        "name": "members",
        "schema": "string",
        "required": true,
        "description": "Returns a list of the Role's members.",
        "example": "MEMBERS"
      },
      {
        "name": "member",
        "schema": "string",
        "required": true,
        "description": "The identifier of the Role to be added as a member.",
        "example": "MEMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Member was deleted from role successfully"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/roles/{account}/{kind}/{identifier}",
    "method": "getRoleInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "roles",
    "typeScriptTag": "roles",
    "description": "Get role information",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "kind",
        "schema": "string",
        "required": true,
        "description": "Type of resource",
        "example": "user"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "ID of the role for which to get the information about",
        "example": "admin"
      },
      {
        "name": "all",
        "schema": "string",
        "description": "Returns an array of Role IDs representing all role memberships, expanded recursively."
      },
      {
        "name": "memberships",
        "schema": "string",
        "description": "Returns all direct role memberships (members not expanded recursively)."
      },
      {
        "name": "members",
        "schema": "string",
        "description": "Returns a list of the Role's members."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "When listing members, start at this item number.",
        "example": 20
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "When listing members, return up to this many results.",
        "example": 10
      },
      {
        "name": "count",
        "schema": "boolean",
        "description": "When listing members, if `true`, return only the count of members.",
        "example": true
      },
      {
        "name": "search",
        "schema": "string",
        "description": "When listing members, the results will be narrowed to only those matching the provided string",
        "example": "user"
      },
      {
        "name": "graph",
        "schema": "string",
        "description": "If included in the query returns a graph view of the role",
        "example": ""
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/roles/{account}/{kind}/{identifier}",
    "method": "updateRoleMembership",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "roles",
    "typeScriptTag": "roles",
    "description": "Update or modify an existing role membership",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "kind",
        "schema": "string",
        "required": true,
        "description": "Type of resource",
        "example": "user"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "ID of the role for which to get the information about",
        "example": "admin"
      },
      {
        "name": "members",
        "schema": "string",
        "required": true,
        "description": "Returns a list of the Role's members.",
        "example": "MEMBERS"
      },
      {
        "name": "member",
        "schema": "string",
        "required": true,
        "description": "The identifier of the Role to be added as a member.",
        "example": "MEMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Member was added to role successfully"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/resources",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "resources",
    "typeScriptTag": "resources",
    "description": "Lists resources within an organization account.",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "description": "Organization account name",
        "example": "myorg"
      },
      {
        "name": "kind",
        "schema": "string",
        "description": "Type of resource",
        "example": "user"
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Filter resources based on this value by name",
        "example": "db"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "When listing resources, start at this item number.",
        "example": 20
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "When listing resources, return up to this many results.",
        "example": 10
      },
      {
        "name": "count",
        "schema": "boolean",
        "description": "When listing resources, if `true`, return only the count of the results.",
        "example": true
      },
      {
        "name": "role",
        "schema": "string",
        "description": "Retrieves the resources list for a different role if the authenticated role has access",
        "example": "myorg:host:host1"
      },
      {
        "name": "actingAs",
        "schema": "string",
        "description": "Retrieves the resources list for a different role if the authenticated role has access",
        "example": "myorg:host:host1"
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
      }
    ]
  },
  {
    "url": "/resources/{account}",
    "method": "listResources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "resources",
    "typeScriptTag": "resources",
    "description": "Lists resources within an organization account.",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "kind",
        "schema": "string",
        "description": "Type of resource",
        "example": "user"
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Filter resources based on this value by name",
        "example": "db"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "When listing resources, start at this item number.",
        "example": 20
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "When listing resources, return up to this many results.",
        "example": 10
      },
      {
        "name": "count",
        "schema": "boolean",
        "description": "When listing resources, if `true`, return only the count of the results.",
        "example": true
      },
      {
        "name": "role",
        "schema": "string",
        "description": "Retrieves the resources list for a different role if the authenticated role has access",
        "example": "myorg:host:host1"
      },
      {
        "name": "actingAs",
        "schema": "string",
        "description": "Retrieves the resources list for a different role if the authenticated role has access",
        "example": "myorg:host:host1"
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
      }
    ]
  },
  {
    "url": "/resources/{account}/{kind}",
    "method": "listResourcesForKind",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "resources",
    "typeScriptTag": "resources",
    "description": "Lists resources of the same kind within an organization account.",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "kind",
        "schema": "string",
        "required": true,
        "description": "Type of resource",
        "example": "user"
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Filter resources based on this value by name",
        "example": "db"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "When listing resources, start at this item number.",
        "example": 20
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "When listing resources, return up to this many results.",
        "example": 10
      },
      {
        "name": "count",
        "schema": "boolean",
        "description": "When listing resources, if `true`, return only the count of the results.",
        "example": true
      },
      {
        "name": "role",
        "schema": "string",
        "description": "Retrieves the resources list for a different role if the authenticated role has access",
        "example": "myorg:host:host1"
      },
      {
        "name": "actingAs",
        "schema": "string",
        "description": "Retrieves the resources list for a different role if the authenticated role has access",
        "example": "myorg:host:host1"
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
      }
    ]
  },
  {
    "url": "/resources/{account}/{kind}/{identifier}",
    "method": "showResourceDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "resources",
    "typeScriptTag": "resources",
    "description": "Shows a description of a single resource.",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "kind",
        "schema": "string",
        "required": true,
        "description": "Type of resource",
        "example": "user"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "ID of the resource for which to get the information about",
        "example": "conjur/authn-iam/test"
      },
      {
        "name": "permittedRoles",
        "schema": "boolean",
        "description": "Lists the roles which have the named privilege on a resource.",
        "example": true
      },
      {
        "name": "privilege",
        "schema": "string",
        "description": "Level of privilege to filter on. Can only be used in combination with `permitted_roles` or `check` parameter.",
        "example": "execute"
      },
      {
        "name": "check",
        "schema": "boolean",
        "description": "Check whether a role has a privilege on a resource.",
        "example": true
      },
      {
        "name": "role",
        "schema": "string",
        "description": "Role to check privilege on. Can only be used in combination with `check` parameter.",
        "example": "myorg:host:host1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Permissions check was successful"
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
      }
    ]
  },
  {
    "url": "/host_factory_tokens",
    "method": "createHostIdentityTokens",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "host factory",
    "typeScriptTag": "hostFactory",
    "description": "Creates one or more host identity tokens.",
    "parameters": [
      {
        "name": "expiration",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2017-08-04T22:27:20+00:00"
      },
      {
        "name": "host_factory",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "myorg:host_factory:hf-db"
      },
      {
        "name": "count",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 2
      },
      {
        "name": "cidr",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "127.0.0.1/32"
        ]
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/host_factory_tokens/{token}",
    "method": "revokeToken",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "host factory",
    "typeScriptTag": "hostFactory",
    "description": "Revokes a token, immediately disabling it.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "The host factory token to revoke",
        "example": "2c0vfj61pmah3efbgpcz2x9vzcy1ycskfkyqy0kgk1fv014880f4"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Token was successfully revoked"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/host_factories/hosts",
    "method": "createHost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "host factory",
    "typeScriptTag": "hostFactory",
    "description": "Creates a Host using the Host Factory.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my-new-host"
      },
      {
        "name": "annotations",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "description": "new db host",
          "puppet": "true"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Contains information about a created host"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/public_keys/{account}/{kind}/{identifier}",
    "method": "showAllForResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "public keys",
    "typeScriptTag": "publicKeys",
    "description": "Shows all public keys for a resource.",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "kind",
        "schema": "string",
        "required": true,
        "description": "Type of resource",
        "example": "user"
      },
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "ID of the resource for which to get the information about",
        "example": "admin"
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
    "url": "/ca/{account}/{service_id}/sign",
    "method": "getSignedCertificate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "certificate authority",
    "typeScriptTag": "certificateAuthority",
    "description": "Gets a signed certificate from the configured Certificate Authority service.",
    "parameters": [
      {
        "name": "account",
        "schema": "string",
        "required": true,
        "description": "Organization account name",
        "example": "default"
      },
      {
        "name": "serviceId",
        "schema": "string",
        "required": true,
        "description": "Name of the Certificate Authority service",
        "example": "ca-service"
      },
      {
        "name": "csr",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CSR"
      },
      {
        "name": "ttl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TTL"
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
        "description": "Either          \n- The authenticated role is not a Host role,\n- The authenticated Host does not have `sign` privilege for the CA service, or\n- The authenticated Host ID does not match the of the CSR Common Name (CN).\n"
      },
      {
        "statusCode": "404",
        "description": "CA Service with the given ID does not exist"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Conjur"
      apiBaseUrl="/"
      apiVersion="5.3.1"
      endpoints={36}
      sdkMethods={77}
      schemas={41}
      parameters={136}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/cyberark/conjur/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/cyberark/conjur/openapi.yaml"
      developerDocumentation="docs.cyberark.com"
    />
  );
}
  