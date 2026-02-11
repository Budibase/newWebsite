export interface DocsNavItem {
  label: string;
  href?: string;
  children?: DocsNavItem[];
  toggleOnly?: boolean;
  startCollapsed?: boolean;
}

export interface DocsNavGroup {
  title: string;
  items: DocsNavItem[];
}

export const docsNavData: DocsNavGroup[] = [
  {
    title: "Get started",
    items: [
      { label: "Welcome", href: "/docs/get-started/welcome" },
      { label: "Installation", href: "/docs/get-started/installation" },
      { label: "Models", href: "/docs/get-started/models" },
      { label: "Pricing", href: "/docs/get-started/pricing" },
    ],
  },
  {
    title: "Agent",
    items: [
      { label: "Overview", href: "#" },
      { label: "Modes", href: "#" },
      { label: "Review", href: "#" },
      { label: "Terminal", href: "#" },
      { label: "Browser", href: "#" },
      { label: "Security", href: "#" },
      {
        label: "Hooks",
        toggleOnly: true,
        children: [
          { label: "Overview", href: "#" },
          { label: "Third Party Hooks", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Automations",
    items: [
      { label: "Overview", href: "/docs/automations" },
      {
        label: "Triggers",
        toggleOnly: true,
        children: [
          { label: "Overview", href: "/docs/automations/triggers" },
          { label: "Cron", href: "/docs/automations/triggers/cron" },
          { label: "Row created", href: "/docs/automations/triggers/row-created" },
          { label: "Row updated", href: "/docs/automations/triggers/row-updated" },
          { label: "Row deleted", href: "/docs/automations/triggers/row-deleted" },
          { label: "Webhook", href: "/docs/automations/triggers/webhook" },
          {
            label: "Trigger filters",
            href: "/docs/automations/triggers/trigger-filters",
          },
        ],
      },
      {
        label: "Action steps",
        toggleOnly: true,
        children: [
          { label: "Overview", href: "/docs/automations/action-steps" },
          {
            label: "Trigger automation run",
            href: "/docs/automations/actions/trigger-automation",
          },
          { label: "Run query", href: "/docs/automations/actions/run-query" },
          {
            label: "Execute script",
            href: "/docs/automations/actions/execute-script",
          },
          { label: "Looping", href: "/docs/automations/actions/looping" },
          { label: "Delay", href: "/docs/automations/actions/delay" },
          { label: "Server log", href: "/docs/automations/actions/server-log" },
          { label: "OpenAI", href: "/docs/automations/actions/openai" },
          {
            label: "OpenAI assistant",
            href: "/docs/automations/actions/openai-assistant",
          },
          {
            label: "Classify text",
            href: "/docs/automations/actions/ai-classify-text",
          },
          {
            label: "Summarize text",
            href: "/docs/automations/actions/ai-summarize-text",
          },
          { label: "AI prompt", href: "/docs/automations/actions/ai-prompt" },
          {
            label: "Extract data",
            href: "/docs/automations/actions/ai-extract-data",
          },
          {
            label: "Sentiment analysis",
            href: "/docs/automations/actions/ai-sentiment-analysis",
          },
          { label: "Condition", href: "/docs/automations/actions/condition" },
          {
            label: "Query rows",
            href: "/docs/automations/actions/query-rows",
          },
          {
            label: "Define automation variables",
            href: "/docs/automations/actions/variables",
          },
          {
            label: "Outgoing webhook",
            href: "/docs/automations/actions/outgoing-webhook",
          },
          { label: "Slack", href: "/docs/automations/actions/slack" },
          { label: "Discord", href: "/docs/automations/actions/discord" },
          { label: "Send email", href: "/docs/automations/actions/send-email" },
          { label: "Make", href: "/docs/automations/actions/make" },
          { label: "n8n", href: "/docs/automations/actions/n8n" },
          { label: "Zapier", href: "/docs/automations/actions/zapier" },
        ],
      },
      { label: "Branching", href: "/docs/automations/branching" },
      {
        label: "Data CRUD actions",
        toggleOnly: true,
        children: [
          { label: "Overview", href: "/docs/automations/data-crud" },
          {
            label: "Create row",
            href: "/docs/automations/data-crud/create-row",
          },
          {
            label: "Update row",
            href: "/docs/automations/data-crud/update-row",
          },
          {
            label: "Delete row",
            href: "/docs/automations/data-crud/delete-row",
          },
        ],
      },
      { label: "Bindings", href: "/docs/automations/bindings" },
      {
        label: "Synchronous automations",
        href: "/docs/automations/synchronous-automations",
      },
      { label: "Testing", href: "/docs/automations/testing" },
      { label: "Email listener", href: "/docs/automations/email-listener" },
    ],
  },
  {
    title: "Platform",
    items: [
      {
        label: "Data",
        toggleOnly: true,
        startCollapsed: true,
        children: [
          { label: "Introduction to data", href: "/docs/data" },
          { label: "Dev/prod switcher", href: "/docs/data/dev-prod-switcher" },
          { label: "Views", href: "/docs/data/views" },
          { label: "Users table", href: "/docs/data/users-table" },
          { label: "Budibase DB", href: "/docs/data/budibasedb" },
          { label: "AI column", href: "/docs/data/budibasedb/ai-column" },
          { label: "Attachments", href: "/docs/data/budibasedb/attachments" },
          { label: "Barcode/QR", href: "/docs/data/budibasedb/barcodeqr" },
          {
            label: "Boolean / true-false",
            href: "/docs/data/budibasedb/boolean-truefalse",
          },
          { label: "Date and time", href: "/docs/data/budibasedb/datetime" },
          { label: "JSON", href: "/docs/data/budibasedb/json" },
          { label: "Multi-select", href: "/docs/data/budibasedb/multi-select" },
          { label: "Number", href: "/docs/data/budibasedb/number" },
          {
            label: "Relationships",
            href: "/docs/data/budibasedb/relationships",
          },
          { label: "Text", href: "/docs/data/budibasedb/text" },
          { label: "Users", href: "/docs/data/budibasedb/users-1" },
          { label: "Options", href: "/docs/data/budibasedb/options" },
          { label: "Data sources", href: "/docs/data/data-sources" },
          { label: "CouchDB", href: "/docs/data/data-sources/couchdb" },
          { label: "CSV import", href: "/docs/data/data-sources/csv-import" },
          { label: "DynamoDB", href: "/docs/data/data-sources/dynamodb" },
          {
            label: "Elasticsearch",
            href: "/docs/data/data-sources/elasticsearch",
          },
          { label: "Firestore", href: "/docs/data/data-sources/firestore" },
          {
            label: "Google Sheets",
            href: "/docs/data/data-sources/google-sheets",
          },
          { label: "MongoDB", href: "/docs/data/data-sources/mongodb" },
          {
            label: "MS SQL Server",
            href: "/docs/data/data-sources/ms-sql-server",
          },
          {
            label: "MySQL/MariaDB",
            href: "/docs/data/data-sources/mysql-mariadb",
          },
          { label: "Oracle", href: "/docs/data/data-sources/oracle" },
          { label: "PostgreSQL", href: "/docs/data/data-sources/postgresql" },
          { label: "Redis", href: "/docs/data/data-sources/redis" },
          { label: "S3", href: "/docs/data/data-sources/s3" },
          { label: "Snowflake", href: "/docs/data/data-sources/snowflake" },
          { label: "REST", href: "/docs/data/rest" },
          { label: "REST templates", href: "/docs/data/rest/rest-templates" },
          { label: "REST queries", href: "/docs/data/rest/rest-queries" },
          { label: "REST bindings", href: "/docs/data/rest/rest-bindings" },
          {
            label: "REST query import",
            href: "/docs/data/rest/rest-query-import",
          },
          {
            label: "REST authentication",
            href: "/docs/data/rest/rest-authentication",
          },
          { label: "REST variables", href: "/docs/data/rest/rest-variables" },
          {
            label: "REST pagination",
            href: "/docs/data/rest/rest-pagination",
          },
          { label: "REST OAuth2", href: "/docs/data/rest/rest-oauth2" },
          { label: "REST example", href: "/docs/data/rest/rest-example" },
          { label: "SQL datasource", href: "/docs/data/sql-datasource" },
          { label: "Transformers", href: "/docs/data/transformers" },
          {
            label: "Environment variables",
            href: "/docs/data/environment-variables",
          },
          { label: "PDF exporting", href: "/docs/data/pdf-exporting" },
          {
            label: "AI-powered table generation",
            href: "/docs/data/ai-powered-table-generation",
          },
        ],
      },
      {
        label: "Apps",
        toggleOnly: true,
        children: [
          { label: "Overview", href: "#" },
          { label: "Builder", href: "#" },
          { label: "Publishing", href: "#" },
        ],
      },
      {
        label: "API Explorer",
        toggleOnly: true,
        children: [
          { label: "Overview", href: "#" },
          { label: "Requests", href: "#" },
          { label: "Authentication", href: "#" },
        ],
      },
      {
        label: "Connections",
        toggleOnly: true,
        children: [
          { label: "Overview", href: "#" },
          { label: "Databases", href: "#" },
          { label: "REST APIs", href: "#" },
        ],
      },
    ],
  },
];
