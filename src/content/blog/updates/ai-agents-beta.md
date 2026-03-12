---
title: "Introducting Budibase Agents (Beta)"
description: "Today, we're proud to launch Budibase Agents into Beta."
publishDate: "2026-03-12"
author: "Michael Shanks"
profilePic: "https://res.cloudinary.com/daog6scxm/image/upload/v1763733146/cms/mike-headshot.jpg"

---

Today, we’re launching Budibase Agents into Beta, empowering our users to build custom agents with their own models, APIs, and data. With Agents, we’re solidifying Budibase’s position as the all-in-one open-source AI workflow toolkit.

## Introducing Budibase Agents

Budibase Agents enable you to securely connect LLMs to data and tools to create intelligent AI assistants.

Select any model, define agent behavior, and integrate AI into real-world workflows within a flexible, instruction-led interface.

{{< youtube id="WwIJp8y2ltY" >}}

Agents are available today. We’re excited for you to try them out. You can also provide feedback via [our GitHub](https://github.com/Budibase/budibase).

## The instruction-led agent toolkit

Each Budibase Workspace now includes an Agents tab, alongside your existing Data, APIs, Apps, and Automations. Here, we can define instructions for Agents in natural language, including configuring behavior and making tools and data available to our agents.

We can use the Chat preview to test and iterate over Agent behavior. Budibase Agents eliminate the boilerplate required to run AI workflows, providing a fast, maintainable experience for configuring agents that you can roll out with trust and confidence.

![AI Agents](https://res.cloudinary.com/daog6scxm/image/upload/v1773328119/cms/agents/Rectangle_2-2_b5ahgi.webp "AI Agents")

## Chat with agents, wherever work happens

Alongside Agents, we’ve added a pre-built Chat experience, along with a new `Chatbox` component to Budibase Apps. This provides a seamless experience for end-users to interact with agentic workflows, with the same authentication standards and screen-level RBAC we’d find in any other Budibase App.

Agents also support deployment via external chat tools, including Slack, Discord, and Teams, so you can leverage custom AI-powered assistants, wherever your team already works.

![Chat](https://res.cloudinary.com/daog6scxm/image/upload/v1772721039/cms/agents/Chat_zhr3di.webp "Chat")

## Connect to tools and data, securely

Budibase Agents can invoke tools and data sources from across your Workspace, including tables, API requests, integrated apps, knowledge sources, and Automations. Agents can only utilize the tools and data we explicitly grant them permissions for.

Budibase’s REST templates and built-in database actions make it quick and easy to configure agent tool calls. Simply select which tools your Agents can access, and define how they’re used within your instruction prompt. 

![Tools](https://res.cloudinary.com/daog6scxm/image/upload/v1770825652/cms/agents/Group_1_fafmcn.webp "Tools")

## Model agnostic, privacy-first

In security-focused teams, AI adoption is often blocked because mission-critical data can’t be shared with opaque public models and services, or even leave their internal environment.

Budibase Agents are fully model-agnostic, supporting any LLM with an OpenAI-compatible API, including locally hosted models. Select the right model for the task at hand, while retaining control over data residency within our self-hostable platform.
![Models](https://res.cloudinary.com/daog6scxm/image/upload/v1773314200/cms/agents/AI_Config_y6wld4.webp "Models")

## Build Agents alongside Apps and Automations

Agents are callable within Budibase Automations. We can pass data from previous Automation steps and triggers within the instructions field. We can also define output data schemas for downstream processing or utilizing responses in user-facing tools for human-in-the-loop workflows.

Since Budibase Automations can be invoked as tools by Agents, this approach enables us to build multi-agent workflows with high levels of control.

![Automations](https://res.cloudinary.com/daog6scxm/image/upload/v1769437599/cms/agents/Group_1-2_gkt7py.webp "Automations")

## Start building agentic workflows today

Our Agents Beta is an important step on Budibase’s journey to becoming the all-in-one open-source AI workflow toolkit. As of today, you can utilize Agents within both self-hosted and cloud versions of Budibase.

We can’t wait to hear what you think.