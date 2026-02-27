export interface CoreAgentDetail {
  slug: string;
  title: string;
  outcome: string;
  cta?: {
    label?: string;
    href?: string;
  };
  heroPrompt?: string;
  assetsUsed?: {
    tables?: string[];
    automations?: string[];
    tools?: string[];
    aiModel?: string[];
    apps?: string[];
  };
  overview: string[];
  capabilities: string[];
  humanReview: string[];
}

export const coreAgentDetails: CoreAgentDetail[] = [
  {
    slug: "company-guide",
    title: "Company guide",
    outcome:
      "Give employees fast, consistent answers on company policies, handbooks, and internal procedures.",
    overview: [
      "Company guide centralizes internal knowledge so employees can resolve routine questions without waiting on manual support.",
      "It reduces repetitive requests while keeping answers aligned with your latest policy and operational guidance.",
    ],
    capabilities: [
      "Answers policy and handbook questions in plain language.",
      "Surfaces relevant internal docs and process references.",
      "Supports self-service across HR and operations queries.",
    ],
    humanReview: [
      "Escalate ambiguous policy interpretations to an operations owner.",
      "Route exceptions and edge-case requests for manual follow-up.",
    ],
  },
  {
    slug: "it-triage-agent",
    title: "IT triage agent",
    outcome:
      "Classify incoming IT requests and route incidents to the right queue with clear urgency.",
    overview: [
      "IT triage agent standardizes ticket intake by identifying issue type, severity, and likely ownership from the first request.",
      "This helps IT teams reduce backlog noise and improve response times for high-impact issues.",
    ],
    capabilities: [
      "Classifies incidents and service requests by category.",
      "Identifies urgency signals and suggests priority.",
      "Routes tickets to the correct team queue.",
    ],
    humanReview: [
      "Approve escalations for critical incidents.",
      "Adjust routing when business context requires exceptions.",
    ],
  },
  {
    slug: "executive-analysis-agent",
    title: "Executive analysis agent",
    outcome:
      "Synthesize operational and business signals into concise briefings for leadership decisions.",
    overview: [
      "Executive analysis agent compiles KPIs, trends, and risk indicators into summaries tailored for decision-making.",
      "It helps leadership teams move from raw reporting to clear direction faster.",
    ],
    capabilities: [
      "Summarizes cross-functional metrics into brief updates.",
      "Highlights anomalies, risks, and trend shifts.",
      "Generates structured decision-ready summaries.",
    ],
    humanReview: [
      "Validate strategic recommendations before distribution.",
      "Confirm final narrative for high-stakes executive communication.",
    ],
  },
  {
    slug: "contract-analyser-agent",
    title: "Contract analyser agent",
    outcome:
      "Review contract language and flag financial, legal, and compliance risk indicators.",
    overview: [
      "Contract analyser agent accelerates review cycles by extracting key clauses and surfacing potential risk areas early.",
      "It supports finance and legal teams with faster first-pass analysis before final approval.",
    ],
    capabilities: [
      "Extracts renewal terms, obligations, and key dates.",
      "Flags risk signals in pricing, liability, and compliance sections.",
      "Summarizes contract exposure for reviewers.",
    ],
    humanReview: [
      "Require legal review for high-risk clause changes.",
      "Approve final contract decisions before execution.",
    ],
  },
  {
    slug: "employee-onboarding-agent",
    title: "Employee onboarding agent",
    outcome:
      "Guide new hires through onboarding tasks, access steps, and policy acknowledgements.",
    overview: [
      "Employee onboarding agent coordinates setup tasks across HR and IT so new hires can become productive quickly.",
      "It ensures each onboarding journey follows standard policy and process requirements.",
    ],
    capabilities: [
      "Builds onboarding task lists by role and team.",
      "Tracks completion of access and policy steps.",
      "Sends reminders for pending onboarding actions.",
    ],
    humanReview: [
      "Approve sensitive access and permission grants.",
      "Handle exceptions for non-standard onboarding paths.",
    ],
  },
];
