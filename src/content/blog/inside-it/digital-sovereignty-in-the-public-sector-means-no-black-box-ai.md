---
title: "Digital Sovereignty in the Public Sector Means no Black Box AI"
description: "Sovereignty is impossible if we don't understand how AI systems behave and why."
publishDate: "2026-06-24"
author: "Michael Shanks"
profilePic: "https://res.cloudinary.com/daog6scxm/image/upload/v1763733146/cms/mike-headshot.jpg"
socialImage: "https://res.cloudinary.com/daog6scxm/image/upload/v1784647224/cms/thought-leadership-posts/Digital_Sovereignty_No_Black_Box_xu8xgn.webp"
---

For more and more public sector IT teams, squaring AI adoption with the drive for digital sovereignty is presenting a serious challenge. On the one hand, AI obviously offers huge transformational potential. On the other, it raises a whole raft of new governance and security questions, at a moment when many public bodies are prioritizing control, independence, and transparency.

Aligning these two facts is one of the biggest strategic challenges that government IT departments face today.

So, the question we need to ask is how we can take advantage of the value AI brings to public services without handing over control of our processes and data.

## Sovereignty is more than where data lives

To begin to answer that, a good jumping-off point is considering what digital sovereignty actually means in 2026. For a long time, digital sovereignty was largely tied up with *data residency*. That is, how and where our data is stored. This might be sufficient in a world of deterministic workflows, but AI agents complicate things. 

With [97% of OECD governments](https://www.globalgovernmentforum.com/oecd-warns-institutional-incoherence-undermining-members-digital-ambitions/) already using AI in some form, this is becoming an increasingly pressing issue.

The most obvious difficulty here is to do with transparency. So, with traditional, deterministic workflows, it’s generally much easier to understand where our logic is enforced and what data goes where. With AI agents, we might only really understand the instructions we’ve provided, without fully knowing *how* the model carries them out. 

This includes what happens when we give our data to LLMs.

On top of this, with AI-powered workflows, it’s not just our data we need to worry about. It’s the whole context that surrounds our data. This includes things like the workflow state, the prompt, retrieved documents, permissions, responses, approval steps, and the eventual outcome.

As such, AI is one of the key reasons that conversations around digital sovereignty have expanded from data residency towards more wholesale control and ownership over internal processes.

This makes treating AI systems as a black box a real problem for public sector teams.

## What do we mean by black box?

Okay, it’s tough to know exactly what an LLM is doing, but in the real world, the questions we need to ask ourselves will generally be a little more nuanced than this. In reality, we’re unlikely to fully understand how any model interprets instructions, weighs context, or generates responses.

Instead, the important thing is how opaque the system as a whole is. So, even if we can’t fully explain the inner workings of the model itself, we still need the tools to exercise control over everything around it. What data was made available? What documents were retrieved? What prompt or instruction was used? Which model processed the request? What recommendation was produced? 

There are a few important levers we can pull to achieve this. But as with any conversation around digital sovereignty, it's important not to think in absolutes. In other words, the important question is often ‘*what is an acceptable level of control for the process at hand and its associated risks*?’

For example, self-hosted and open-weight or open-source LLMs don’t fully remove the black-box issue from AI adoption, in the sense that they don’t magically make the model’s behavior fully explainable. What they do do is give organizations more control over the environment that the model operates within.

Most importantly, this gives public-sector teams more control over where their data and operational context go during inference. Prompts, retrieved documents, case details, and workflow context can be processed inside an environment the organisation governs, rather than being passed to an external model provider.

Similarly, human-in-the-loop is a key lever for controlling and governing agents, but the idea here isn’t to totally remove autonomy from AI systems. Instead, HITL places boundaries on this so that we can govern how the process as a whole works.

## AI creates a new kind of lock-in

Digital sovereignty has also always been closely tied to the idea of vendor lock-in. However, once again, the rise of AI changes the calculus here in a few important ways.

Importantly, when we become locked in to an AI provider, this isn’t just about the core capabilities, like inference or response generation. It can also mean being tied to the vendor’s tools for establishing control.

For public sector orgs, this is especially problematic for AI features within SaaS or COTS products. Things like model choice, prompt logic, approval flow, audit logging, or automation rules are often overly opinionated within individual SaaS platforms.

So, we risk being locked into the vendor’s control plane for AI. Things get truly messy when we’re dealing with this issue across multiple, disparate SaaS providers, creating big, unwieldy governance issues for public sector teams.

Of course, commercial issues have always been a big part of vendor lock-in too.

AI puts us in a unique position here, though. Basically, there’s a lot of uncertainty here - even more so than with other IT costs. Really, we don’t know what’s going to happen with the cost of serving AI models in the coming years, as commercial model providers start to shift their focus towards profitability.

So, this further solidifies open-source and self-hosting as key issues for digitally sovereign AI adoption.

## Trust and accountability can’t be outsourced

Away from strictly IT strategy-related issues, governments also face very different pressures compared to the private sector. In private enterprise, reputation still matters, but successful AI adoption is really a question of efficiency, cost reduction, and customer experience.

In the public sector, teams are held to a different set of standards. There still needs to be a business case for adopting solutions, obviously, but IT teams are also making decisions that affect rights, access to services, public money, safety, compliance, and trust in institutions. 

And [according to one survey](https://www.techradar.com/pro/trust-is-not-keeping-pace-with-technological-capability-new-study-finds-people-are-becoming-more-accepting-of-ai-but-dont-want-to-hand-over-full-control-just-yet), only 41% of respondents trust governments to handle their data with AI.

It’s generally not good enough for AI capabilities to simply be provided by reputable vendors. If an AI model makes a decision that affects real people, it’s still on the public body to explain how and why that happened.

This is perhaps the most glaring reason that black-box AI tools are such a poor fit for the public sector. Governments still need to be accountable for the outcomes of solutions they adopt, even if logic lives within the vendor’s product.

So it’s not just about whether a particular AI platform is up to the task. It’s about whether government agencies can stand behind the platform when challenged, and what this means for public trust.

## What can we actually do?

The drive towards AI adoption is not going to disappear. But neither is the drive towards digital sovereignty. 

Therefore, the question has to be, what can we *actually* do to align these two pressures? The key to answering this is recognizing that *control* doesn’t begin and end with what happens once our data reaches an AI model.

It’s also just not practical or realistic to think we can build everything from scratch, or that digital sovereignty means complete control and independence from any external vendor or platform.

Instead, we need to think about control in terms of the entire AI system, making decisions based on the specific risk profiles and requirements of individual processes.

This starts with model selection. For many public sector teams, this is much more than a question of which model works the best for the least credits. It’s about where that model runs and the boundaries it creates around sensitive data. Similarly, as digital sovereignty means avoiding overreliance on specific vendors, we also may wish to avoid platforms that lock us into specific proprietary models.

Self-hosted or privately deployed models will often be required for use cases where prompts, retrieved documents, case details, or workflow context can’t leave an environment the organisation controls.

We should think about data flows in the same way. It’s critical to understand how and where prompts, documents, case details, and context are processed. We need full transparency about when data leaves our environment, what information is passed to the model, and whether context is retained, logged, or reused.

Human-in-the-loop plays a crucial role too. That is, public sector bodies need to have effective control over the boundaries between AI and human actors within processes, including the tools that enforce approval steps and other guardrails.

Lastly, AI-powered workflows need clear paper trails. If AI contributes to a decision, IT teams need to be able to reconstruct and defend the steps that led to this. This includes knowing what data was used, what recommendation was made, who approved it, and what action was taken.

For public sector teams with aspirations towards digital sovereignty, a black-box approach to AI adoption is never going to work. But we don’t align AI adoption with digital sovereignty by pretending we can fully explain exactly how the model interprets instructions or generates responses.

Instead, the key is shifting our focus to the system that surrounds the model - and establishing control, transparency, and accountability across the process as a whole.