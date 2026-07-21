---
title: "Digital Sovereignty in the Public Sector Means no Black Box AI"
description: "Instead of treating human-in-the-loop as a check-box exercise, it's important to consider our wider workflow design."
publishDate: "2026-06-16"
author: "Michael Shanks"
profilePic: "https://res.cloudinary.com/daog6scxm/image/upload/v1763733146/cms/mike-headshot.jpg"
socialImage: "https://res.cloudinary.com/daog6scxm/image/upload/v1784647225/cms/thought-leadership-posts/HITL_is_too_Vague_dpaj3f.webp"
---

Human-in-the-loop is critical for making AI agents viable within real-world workflows. But there are a few serious mistakes that people make when thinking about this. Human-in-the-loop is quite a vague term. Basically, this just means that human users are involved at some point in an AI workflow.

The problem is when we treat human-in-the-loop as *one thing*. That is, when we assume we can apply the same controls and approval gates across different workflows, we lose a lot of the important nuance. Even more so when vendors sell inflexible approval buttons as ‘human-in-the-loop’ features.

Instead, it’s important to think of this in terms of *which* humans, *when*, and *why*.

## What’s the point of human-in-the-loop?

The core reason we need human-in-the-loop is to enforce defined roles and responsibilities for AI agents and human users within a workflow. So, if agents are able to take certain actions but only humans can take others, we need a structured way to manage this. Essentially, this is about providing the exact right amount of *autonomy* to agents for a given workflow.

But this can come in a few different forms. Some of the most common design patterns include:

- **Routing and escalation** - an agent can resolve certain requests automatically, but has to route anything else to a human user.
- **Approvals** - an agent must seek human approval before taking a particular action.
- **Recommendations** - the agent can only recommend and prepare resolution actions, but a human user is always responsible for actually triggering them.
- **Follow-ups** - the agent can generally act with autonomy, but can request additional information, preferences, or context from users where necessary.

The best way to think about this is not as a concept that’s unique to agentic workflows. Instead, the exact same principles apply when we have workflows that involve multiple human users.

So, just like workflows where different colleagues have different roles, building an effective human-in-the-loop workflow means providing the right levels of access, data exposure, and autonomy to different actors in order to balance reliability, security, efficiency, and other factors. 

We’re not curtailing agents’ autonomy. We’re simply providing them with the privileges that are suitable for their role in our workflow.

## How is human-in-the-loop sold?

Based on what we’ve just seen, with the exception of some back-end processes, most AI workflows will need some element of human-in-the-loop. And since there’s that demand, software vendors obviously want to say their product offers human-in-the-loop.

Unfortunately, what’s actually offered here can vary quite a bit. At one end of the spectrum, we can see HITL approval gates that are essentially pre-built within the platform’s native agents. The platform gives us a defined pattern - the agent completes a step, pauses, and waits for a human to approve, reject, or review the output.

Other platforms provide more flexibility, but even this can vary. Some give us configurable approval steps, routing rules, forms, queues, notifications, or escalation paths. Others provide lower-level building blocks, such as APIs, webhooks, workflow nodes, permissions, or custom interfaces, which teams can use to create their own HITL gates.

One approach is necessarily right, but when we’re assessing individual solutions, this difference introduces new considerations. Specifically, can we actually define the HITL controls we need for our workflows - and how much engineering effort will this take to configure?

## The one-size-fits-all approach doesn’t always fit

The trouble with packaging HITL as a singular *feature* is that it doesn’t tell potential buyers an awful lot about whether they can usefully implement human-in-the-loop within their actual workflows. 

When human-in-the-loop becomes a check-box exercise for vendors, we lose a lot of conceptual clarity.

Yes, an approval button at the end of an agentic workflow is human-in-the-loop in a technical sense. But this also falls somewhat short of what we talked about earlier in terms of defining clear roles and responsibilities for agents and human users within individual workflows.

Really, the risk is reducing the question to *‘is there a human involved somewhere in the workflow?’* instead of *‘can we involve the right humans at the right time?’*

## What should we be asking instead?

So, vendors telling us they offer human-in-the-loop isn’t necessarily enough. What is? 

The key thing here is that we need to think in terms of the actual workflow design. Just like how, with fully human-centric workflows, we wouldn’t simply start throwing together approval screens without understanding the logic behind them, we need to clearly define the roles, responsibilities, and boundaries within HITL workflows.

That means deciding what the agent is allowed to do on its own, where it needs human input, and what level of control the human should have when they step in.

For example, can the agent only read data, or can it also update records? Can it draft a response or send it? Can it recommend an action or trigger that action? Can it assign a task, close a case, approve a request, notify a customer, or change information in a system of record? 

This will look quite different from one workflow to the next. Naturally, the risks are much greater when we’re dealing with sensitive or mission-critical data, so we may want to outsource less responsibility to AI agents.

The same applies to human users. We need to decide who gets brought into the loop, at which point, and what they’re able to do.

It’s important to think about this in terms of how we can use agents as one of the tools available to us for managing our workflow, rather than thinking about HITL as something we can simply tack on to agents.

So, data access and permissions are crucial. Rather than asking whether a platform offers human-in-the-loop, we should ask whether it gives us the tools to model these workflow boundaries - what agents can do, what humans must control, who is responsible for each decision, and how authority changes depending on the risk involved.

## How do we design human-in-the-loop gates for real-world workflows?

Finally, once we understand the specifics of how we want to structure our HITL workflow, how do we actually go about putting this into practice?

In practical terms, we can think of a human-in-the-loop gate as consisting of three steps:

1. **A trigger** - the point at which the agent decides to loop in a human.
2. **An interface** - what the human interacts with, normally a dedicated admin UI or an existing chat tool.
3. **The outcome** - what happens after the human acts.

The best way to think about the trigger is in terms of the underlying business logic that determines that human intervention is needed. This could be a fixed step, or it could be conditional, like escalating based on the request type.

The goal of the interface is to provide the human user with the information they need to make a decision. So, a good review screen might include the agent’s recommendation, relevant source data, linked records, generated content, risk flags, previous activity, and any policies or rules that apply.

The outcomes define what happens after the human acts. This could be approval, rejection, escalation, or some other outcome. Each outcome should move the workflow forward in a defined way, rather than simply ending with a vague approval state. Often, this means triggering a deterministic automation or a pre-populated API request.

As such, effective HITL is a workflow design decision rather than a generic feature. We’re not just adding a pause button. We’re creating structured decision points that connect agent actions, human judgment, business rules, permissions, and downstream automation.