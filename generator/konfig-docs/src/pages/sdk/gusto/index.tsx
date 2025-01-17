import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "App Integrations",
    "numberOfMethods": 100,
    "categories": [
      "payroll",
      "hr",
      "benefits",
      "human_resources",
      "health_insurance",
      "compliance"
    ],
    "index": "app-integrations/typescript",
    "language": "TypeScript",
    "link": "/sdk/gusto/app-integrations/typescript/",
    "developerDocumentation": "docs.gusto.com/app-integrations/docs/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gusto/app-integrations/openapi.yaml"
  },
  {
    "name": "App Integrations",
    "numberOfMethods": 100,
    "categories": [
      "payroll",
      "hr",
      "benefits",
      "human_resources",
      "health_insurance",
      "compliance"
    ],
    "index": "app-integrations/python",
    "language": "Python",
    "link": "/sdk/gusto/app-integrations/python/",
    "developerDocumentation": "docs.gusto.com/app-integrations/docs/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gusto/app-integrations/openapi.yaml"
  },
  {
    "name": "App Integrations",
    "numberOfMethods": 100,
    "categories": [
      "payroll",
      "hr",
      "benefits",
      "human_resources",
      "health_insurance",
      "compliance"
    ],
    "index": "app-integrations/java",
    "language": "Java",
    "link": "/sdk/gusto/app-integrations/java/",
    "developerDocumentation": "docs.gusto.com/app-integrations/docs/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gusto/app-integrations/openapi.yaml"
  },
  {
    "name": "Embedded Payroll",
    "numberOfMethods": 213,
    "categories": [
      "payroll",
      "hr",
      "benefits",
      "employee_engagement",
      "hr_platform",
      "hr_softwares",
      "hr_management_system",
      "human_resources"
    ],
    "index": "embedded-payroll/typescript",
    "language": "TypeScript",
    "link": "/sdk/gusto/embedded-payroll/typescript/",
    "developerDocumentation": "docs.gusto.com/embedded-payroll/docs/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gusto/embedded-payroll/openapi.yaml"
  },
  {
    "name": "Embedded Payroll",
    "numberOfMethods": 213,
    "categories": [
      "payroll",
      "hr",
      "benefits",
      "employee_engagement",
      "hr_platform",
      "hr_softwares",
      "hr_management_system",
      "human_resources"
    ],
    "index": "embedded-payroll/python",
    "language": "Python",
    "link": "/sdk/gusto/embedded-payroll/python/",
    "developerDocumentation": "docs.gusto.com/embedded-payroll/docs/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gusto/embedded-payroll/openapi.yaml"
  },
  {
    "name": "Embedded Payroll",
    "numberOfMethods": 213,
    "categories": [
      "payroll",
      "hr",
      "benefits",
      "employee_engagement",
      "hr_platform",
      "hr_softwares",
      "hr_management_system",
      "human_resources"
    ],
    "index": "embedded-payroll/java",
    "language": "Java",
    "link": "/sdk/gusto/embedded-payroll/java/",
    "developerDocumentation": "docs.gusto.com/embedded-payroll/docs/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gusto/embedded-payroll/openapi.yaml"
  }
];

export default function Gusto() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Gusto"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gusto/app-integrations/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gusto/app-integrations/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gusto/app-integrations/favicon.png"
      sdks={sdks}
      homepage="gusto.com"
      companyKebabCase="gusto"
      categories={allCategories}
      metaDescription={`Launched in 2011 as ZenPayroll, Gusto serves more than 300,000 businesses nationwide. Each year we process tens of billions of dollars of payroll and provide employee benefits—like health insurance and 401(k) accounts—while helping companies create incredible work places.

Through one refreshingly easy, integrated platform, we automate and simplify your payroll, benefits, and HR, all while providing expert support. You and your employees will get the peace of mind you need to do your best work.`}
    />
  )
}