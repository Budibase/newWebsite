---
author: "Ronan McQuillan"
publishDate: 2026-06-23
description: "Read our in-depth guide to implementing human-in-the-loop workflows."
profilePic: "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title: "What are Human-in-the-Loop Workflows?"

---

Human-in-the-loop is one of the biggest topics in the world of AI adoption right now. Businesses are realizing that, despite the transformational potential of AI agents, we can’t simply let them loose on our tools and data without human involvement.

So, HITL is a critical part of how we build agents that are actually viable within real-world workflows.

But unfortunately, there are some important misconceptions surrounding this. Notably, effective human-in-the-loop is about a lot more than tacking a manual approval step onto the end of a workflow.

Instead, it’s a bigger question about our broader workflow design, including the boundaries between what different kinds of actors are responsible for.

Today, we’re diving deep into this by covering:

- [What is a human-in-the-loop workflow?](#what-is-a-human-in-the-loop-workflow)
  - [Why do we need human-in-the-loop?](#why-do-we-need-human-in-the-loop)
  - [HITL challenges](#hitl-challenges)
- [How do HITL gates work?](#how-do-hitl-gates-work)
- [Types of human-in-the-loop gates](#types-of-human-in-the-loop-gates)
- [How to build a HITL workflow](#how-to-build-a-hitl-workflow)
  - [Workflow design decisions](#workflow-design-decisions)
  - [Technical implementation](#technical-implementation)

Let’s start with the basics.

## What is a human-in-the-loop workflow?

At the highest level, a human-in-the-loop workflow is an AI-powered workflow that involves a human user at some point. For example, as an approval step before an agent can trigger a specific action, or as a point of escalation.

We’ll return to some of the more granular forms this can take a little later. For now, the important thing to understand is that HITL essentially sets the boundaries between what an AI agent can do and what only a human can do.

Specific workflow steps like approvals and escalations are an important part of this, but the broader question is about how much autonomy we give AI agents within workflows.

To put it another way, HITL workflows are AI-powered workflows where the interactions between humans and agents are deliberately designed to manage risk, handle ambiguity, improve accuracy, and maintain accountability.

### Why do we need human-in-the-loop?

Knowing what human-in-the-loop is at a high level, it’s important to put this into context by thinking about why human involvement in AI-powered workflows is such a critical issue.

The core thing here is that AI has huge potential to transform and accelerate workflows, but this doesn’t eliminate the need for accountability, governance, or control. The goal of HITL is essentially to balance these two sets of concerns.

Basically, we might be comfortable letting AI agents do certain things, but not others.

In other words, it’s about bridging the gap between what AI can technically do - and what it should be able to do on its own. This works by giving us a structured way to introduce human judgement at points where agentic decision making may be unreliable, too risky, or provide insufficient accountability.

For example, we might allow an agent to summarize a customer issue and suggest a resolution path, but depending on the sensitivity and risk level of the issue itself, we might still need a human to review this before anything is actually actioned.

Therefore, HITL achieves a few key things, including preventing errors, managing risk, retaining accountability, and building trust in AI systems.

### HITL challenges

However, this is often easier in theory than it is in practice. While HITL guardrails can make AI workflows safer and more effective, they also introduce operational challenges of their own.

The first is figuring out the right amount of autonomy to give agents within specific workflows and tasks. As we said earlier, we’re essentially trying to find the right balance between efficiency and control.

So, if every agent decision requires review and approval, workflows can quickly get slow and expensive. But if we go too far the other way, we lose oversight and accountability. As such, workflow design is critical.

Specifically, we need to clearly define which tasks can be fully automated and, by extension, which decisions are too sensitive to rely only on machines.

Even within this, other major challenges include:

- **Context** - providing enough information for human decisions.
- **Bottlenecks** - preventing human reviews from slowing workflows.
- **Review** **fatigue** - avoiding excessive low-value approval requests.
- **Auditability** - maintaining a clear record of decisions and actions.
- **Exception** **handling** - managing edge cases and uncertain outcomes.
- **Accountability** - defining ownership for final decisions.
- **Continuous improvement** - using human feedback to improve AI performance.

The key to this is that HITL requirements are highly situational. That is, the actual controls we’ll need will vary greatly from one workflow to the next. 

But, at a very high level, the core challenge here is trying to balance the level of control and governance we need in individual cases with the additional workload that’s created by involving humans.

## How do HITL gates work?

To understand this better, we’ll need to dig into how HITL gates actually work. While there’s obviously a lot of variation to this in the real world, it’s still useful to think about the generic structure we can apply.

Essentially, a human-in-the-loop gate is made up of three parts:

1. **Trigger** - The business logic that causes an agent to loop in a human. 
2. **Interface** - The point of interaction for the human within the workflow.
3. **Outcome** - What happens when the human has made a decision.

The trigger is closely related to the boundary between human and agent responsibilities. Essentially, this is whatever logic we apply for the user to apply that a human’s attention is needed, whether this is based on categorization, the submitted information, confidence scoring, or some other factor.

The interface is typically either a dedicated admin screen or a chat UI, depending on our needs in the wider workflow. The key function of this is to provide the human user with the context they need to decide how to proceed.

For instance, in some cases, this might be a simple approval step for a pre-defined action, but in others, we might need to provide more information for human users to make an informed decision.

Lastly, the outcome is what ultimately happens after the human intervenes. Again, what this actually looks like can vary in practice. So, in well-defined cases, this might mean simply giving final approval to a pre-populated API request or triggering some other resolution action.

Alternatively, the human admin may need to make a more complex, less predictable decision. In these cases. Again, this is why providing the required context for individual HITL use cases is so critical.

![Human-in-the-loop workflows](https://res.cloudinary.com/daog6scxm/image/upload/v1782204822/cms/ai-agents/human-in-the-loop-workflows/hitl_2_uhz6gk.webp "Human-n-the-loop workflows")

## Types of human-in-the-loop gates

With a broad idea of how HITL gates work, we can move on to thinking about some of the more granular design patterns that are commonly used. Again, this is very situational, so it’s useful to think of these as falling into a few categories.

Some of the most common patterns here include:

- **Approvals** - requiring a human to approve or reject an AI-recommended action before the workflow continues.
- **Reviews** - asking a human to check, edit, or validate an AI-generated output.
- **Escalations** - routing cases to a human when an AI agent cannot proceed confidently.
- **Exceptions** - triggering human input when a case falls outside predefined rules or thresholds.
- **Confidence thresholds** - involving a human when an AI system’s confidence score is below a defined level.
- **Risk thresholds** - requiring review for high-value, sensitive, regulated, or customer-impacting actions.
- **Overrides** - allowing humans to change, block, or reverse an AI agent’s decision.
- **Feedback loops** - capturing human corrections or feedback to improve future AI performance.
- **Monitoring** - tracking AI actions, outputs, or decisions so humans can intervene when performance, risk, or behavior changes.

Now, there’s a fair degree of overlap here, so the key thing to understand is simply that these are the kinds of interventions that we may need a human to make and that HITL is often more complex than a singular approval step tacked onto the end of the workflow.

One useful way to think about this is in terms of how we would separate roles and responsibilities in a fully human-centric workflow, rather than as something that’s unique to AI agents.

So, in any multi-role workflow, we generally already distinguish between who gathers information, makes recommendations, approves decisions, carries out actions, or handles certain cases in a more nuanced manner than a blanket sign-off process.

The point is that HITL applies the same separation of responsibilities to workflows that include AI agents and so requires the same level of intentionality around ownership, permissions, review steps, and decision-making authority.

## How to build a HITL workflow

Understanding the theory behind human-in-the-loop workflows, we can start to outline the specific steps we need to follow to put this into practice. Since this is both an operational and a technical question, we’ll think about some of the key workflow design decisions first, before moving on to more functional issues.

### Workflow design decisions

We’ll start with the workflow design side. Before choosing specific tools, this is all about figuring out how the process itself should work, including where AI agents and human users fit into the picture.

The overarching goal here is to translate a task or business process into a clear workflow model. This includes defining the sequence of steps, the decision points, and the rules that move work from one step to the next, including whether agents, humans, or other systems are required at specific points.

The key steps involved in this are:

1. **Define the workflow scope** - decide which process, task, or decision the HITL workflow will apply to.
2. **Map the workflow stages** - break the process into its main steps, from the initial trigger through to the final outcome.
3. **Identify decision points** - determine where the workflow branches based on data, user input, AI outputs, or business rules.
4. **Define roles and ownership** - specify who or what is responsible for each stage, including users, teams, systems, and AI agents.
5. **Set routing rules** - decide how work should move between stages, including assignment logic, escalation paths, and fallback options.
6. **Define states and outcomes** - determine the statuses, actions, records, and end conditions the workflow needs to support.

Getting this right is a prerequisite for an effective human-in-the-loop workflow.

Once we know how the process should behave, we can start to make the technical decisions behind it, including how each HITL gate should be triggered, what data it needs, what actions reviewers should be able to take, and how each decision should update the workflow state.

### Technical implementation

With our workflow model in place, we can begin to figure out the specific tools we’ll use to manage this. In very high-level terms, this comes down to three broad sets of requirements.

First, there’s how we define the logic that brings humans into specific instances of a workflow.

First, we need a way to define the logic that loops humans into the workflow. This might mean triggering a review when an AI output falls below a confidence threshold, when a request exceeds a certain value, when required data is missing, or when a case matches a particular risk category. 

Secondly, there are the actual interfaces that humans will interact with. As we noted earlier, we might handle this in-chat for simple use cases such as approvals. 

For more complex cases, we may need custom interfaces such as review queues, approval dashboards, task forms, or admin screens for managing rules and thresholds. 

These interfaces should be tailored around the workflow, so users can see the relevant AI output, supporting data, case history, and available actions in one place. But we’ll obviously want to balance this with the development effort for creating custom interfaces for each HITL step within every single workflow.

Lastly, we need structured tools for managing what happens after an approval or other human decision is made. Naturally, what this looks like in practice depends on what kind of action we’re talking about.

So, if we’re approving a defined action that an agent has recommended, we may simply trigger a pre-populated API request or another deterministic automation directly from our admin UI, as a user action.

Alternatively, they may need to edit information or update the state of a record in more use-case-specific ways, depending on the type of workflow we’re dealing with.

This is why HITL workflows often require more than a standalone AI agent or a simple automation rule. We need a way to combine agents, business data, user permissions, approval logic, custom interfaces, and downstream automation in the same operational workflow.

## The complete open-source AI workflow toolkit

Budibase is the complete open-source workflow toolkit for building Apps, Agents, and Automations, using your own data, LLMs, and APIs.

Take a look at our [Agents overview](https://budibase.com/product/agents/) to learn more.