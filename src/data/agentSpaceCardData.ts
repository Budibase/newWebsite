import { getCollection } from "astro:content";
import { coreAgentDetails } from "./agentSpaceCoreAgents";

export const agentSpaceDepartments = [
  { id: "all", label: "All" },
  { id: "it", label: "IT" },
  { id: "operations", label: "Operations" },
  { id: "hr", label: "HR" },
  { id: "sales", label: "Sales" },
  { id: "marketing", label: "Marketing" },
  { id: "finance", label: "Finance" },
  { id: "internal-tools", label: "Internal tools" },
] as const;

export type DepartmentId = (typeof agentSpaceDepartments)[number]["id"];
export type AgentCardDepartmentId = Exclude<DepartmentId, "all">;

export interface AgentCardItem {
  slug: string;
  name: string;
  departmentId: AgentCardDepartmentId;
  department: string;
  description: string;
  linkUrl: string;
}

const mapRoleToDepartmentId = (role: string): AgentCardDepartmentId => {
  const normalizedRole = role.toLowerCase();

  if (normalizedRole.includes("finance")) return "finance";
  if (normalizedRole.includes("marketing")) return "marketing";
  if (normalizedRole.includes("sales")) return "sales";
  if (normalizedRole.includes("hr")) return "hr";
  if (normalizedRole.includes("internal")) return "internal-tools";
  if (
    normalizedRole.includes("it") ||
    normalizedRole.includes("security") ||
    normalizedRole.includes("support")
  ) {
    return "it";
  }

  return "operations";
};

const getDepartmentLabel = (id: AgentCardDepartmentId) =>
  agentSpaceDepartments.find((department) => department.id === id)?.label ??
  "Operations";

const coreAgentCardMeta: Record<
  string,
  { departmentId: AgentCardDepartmentId; description: string }
> = {
  "company-guide": {
    departmentId: "operations",
    description:
      "Supports employees with internal questions and self-service requests.",
  },
  "it-triage-agent": {
    departmentId: "it",
    description:
      "Classifies IT requests and routes incidents to the right response queue.",
  },
  "executive-analysis-agent": {
    departmentId: "operations",
    description: "Summarizes business signals to support executive decision-making.",
  },
  "contract-analyser-agent": {
    departmentId: "finance",
    description:
      "Reviews contract terms and flags financial and compliance risk indicators.",
  },
  "employee-onboarding-agent": {
    departmentId: "hr",
    description:
      "Guides new hires through onboarding tasks and policy acknowledgements.",
  },
};

export async function getAgentSpaceCards(): Promise<AgentCardItem[]> {
  const coreAgents: AgentCardItem[] = coreAgentDetails.map((agent) => {
    const meta = coreAgentCardMeta[agent.slug];
    const departmentId = meta?.departmentId ?? "operations";

    return {
      slug: agent.slug,
      name: agent.title,
      departmentId,
      department: getDepartmentLabel(departmentId),
      description: meta?.description ?? agent.outcome,
      linkUrl: `/agent-space/${agent.slug}`,
    };
  });

  const workflowEntries = await getCollection("workflows");

  const workflowAgents: AgentCardItem[] = workflowEntries
    .map((entry) => {
      const departmentId = mapRoleToDepartmentId(entry.data.role);

      return {
        slug: entry.data.slug ?? entry.id,
        name: entry.data.title,
        departmentId,
        department: getDepartmentLabel(departmentId),
        description: entry.data.outcome,
        linkUrl: `/agent-space/${entry.data.slug ?? entry.id}`,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return [...coreAgents, ...workflowAgents];
}
