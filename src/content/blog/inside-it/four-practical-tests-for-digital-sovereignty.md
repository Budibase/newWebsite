---
title: "4 Practical Tests for Digital Sovereignty"
description: "In order to achieve digital sovereignty, we need a clear idea of what implementation actually looks like."
publishDate: "2026-07-01"
author: "Michael Shanks"
profilePic: "https://res.cloudinary.com/daog6scxm/image/upload/v1763733146/cms/mike-headshot.jpg"
socialImage: "https://res.cloudinary.com/daog6scxm/image/upload/v1784647224/cms/thought-leadership-posts/practical_tests_for_digital_sovereignty_r1n4gv.webp"
---

Digital sovereignty is one of those areas where tech people and policy people risk getting out of step with each other. Not because they want different things, but because they’re approaching the problem through different lenses.

A big part of the problem here is we’re often dealing with different levels of *abstraction*. So, it’s one thing to talk about digital sovereignty as a policy aim. It’s quite another to figure out what this means for which CRM you should buy.

To make things even more complicated, *sovereign* or *not sovereign* isn’t the yes/no question we might think it is. So, in practical terms, it can be difficult to know how to translate this into a concrete implementation strategy for a specific use case.

Which is what we’re talking about today.

## Digital sovereignty’s implementation problem

Digital sovereignty is a growing concern, and not just for the public sector. According to [research by Suse](https://www.suse.com/news/98-of-enterprises-prioritize-digital-sovereignty-with-more-than-half-taking-action/), 98% of enterprises want to prioritize digital sovereignty, but only around half are actually taking action. 

That’s a big implementation gap. So what gives?

One huge challenge here is that digital sovereignty is very, very multidimensional. It’s not one thing that we can buy or assign to a specific team. Sovereignty is not just about where our data is stored. It’s where the system runs, who can access it, what laws apply, what can we inspect, how does data move, and what migration to a replacement might look like.

So legal, security, architecture, procurement, risk, and technology teams can all be involved - but each may be looking at a different part of the problem.

The other big challenge is the level of analysis we want to look at this from. Yes, we might want to achieve digital sovereignty at an organizational level or across our operations in their entirety. But, for *immediate* implementation, it normally makes more sense to think smaller. This means prioritizing certain workflows and use cases where control and resilience are bigger priorities, rather than treating every workflow exactly the same way.

We’ll come back to this idea in a minute.

## You’re not going to start making your own hardware

First, it’s important to think about what we mean when we say that digital sovereignty isn’t really a clean binary thing. Digital sovereignty is basically an organization’s ability to retain control and independence over the systems, data, and infrastructure it uses - without being unacceptably constrained by external actors.

‘*Unacceptably*’ does a lot of heavy lifting here. Unless you start printing your own chips, you’re never going to remove external actors from the picture entirely. Well, maybe you could do that, but it’s unlikely you’d ever get anything else done.

So, there’s a question of what’s an acceptable level of sovereignty, but we also have to balance this with the practical realities.

If we accept that some dependence on external actors is probably inevitable, we get into asking who these actors are. For instance, are they based in a jurisdiction that aligns with our own regulatory needs? Is it an open-source project or a commercial vendor?

That leads us to…

## When is ‘sovereign’ ‘sovereign enough’?

We hinted at the idea that what’s an acceptable level of control and independence for one workflow might not be for another. For example, our requirements for a sensitive workflow like managing IT incidents will probably be quite different to our needs when managing employee holidays.

Most of the time, what’s an *acceptable* level of sovereignty really depends on our risk tolerance for a specific workflow. A workflow that handles sensitive data or that could lead to serious consequences if disrupted needs a higher level of control than a low-stakes internal process.

If we don’t recognize this, it’s easy to start thinking in all-or-nothing terms about digital sovereignty, and that’s where the implementation gap starts to come into play.

So, we need to decide what level of control the workflow actually warrants. That might mean stronger requirements around hosting location, provider access, auditability, portability, contractual protections, or the ability to keep operating if the relationship changes.

## How can we measure sovereignty?

To start putting this into practice, we need to understand how we can actually measure digital sovereignty. Otherwise, there’s really no way to know if we’ve achieved anything.

Helpfully, there are some established practices out there. For example, the [EU Cloud Sovereignty Framework](https://commission.europa.eu/news-and-media/news/sovereign-cloud-framework-explained-2026-06-01_en) provides a model for measuring sovereignty across multiple dimensions, including legal, operational, technical, security, and supply-chain considerations. We can actually use this to give ourselves a definitive score.

But, as we’ve said, the more important question is often around *acceptable* sovereignty for specific workflows. So, we might equally want to use frameworks like this as a blueprint for defining our own priorities, rather than adopting them wholesale.

The first step is understanding which dimensions of digital sovereignty matter most for our use case. These might include jurisdiction, provider access, hosting location, auditability, portability, operational continuity, interoperability, supply-chain exposure, or contractual exit rights.

From there, we need to turn each of these into something we can actually measure. So, “inspectable” should mean architecture, data flows, logs, or relevant code can be reviewed. “Portable” should mean data can be exported in a documented, usable format, etc.

Only then are we in a position to translate digital sovereignty into implementation requirements that we can actually use.

## Four practical tests: run, connect, inspect, exit

Still, no one likes to hear *‘well, you know, it depends…*’ 

So, even though the specific measurement criteria that we use and how we weight each of these can vary, it’s still important to understand the practical ways that we can judge whether a specific solution gives us the level of control that we need.

One useful way to think about this, without getting overly prescriptive, is in terms of four practical tests:

1. **Can we run it where we need to?** Whether this means within a particular jurisdiction or on our own hardware, the point is that specific solutions must satisfy our requirements, whether legal or in terms of control over the environment.
2. **Can we connect to the systems we rely on?** Sovereign systems have to work with our existing identity, monitoring, data, and other tooling without making the whole workflow dependent on keeping those same tools in place forever.
3. **Can we inspect how it works?** Open-source software can help here, but the wider requirement is evidence. We need enough visibility into architecture, data flows, access controls, and dependencies to verify how the solution behaves, not just how it is described by the vendor.
4. **Can we exit if we need to?** Leaving a provider is not just a contractual question. We need to know that we can take our data, preserve the records we need, understand what happens to backups and logs, and keep the workflow operating while we move to another vendor or environment.

Even though our granular requirements within each of these might vary, the categories give us a repeatable way to move from abstract sovereignty goals to real-world implementation decisions.

## Establishing defensible control

Ultimately, digital sovereignty isn’t about *complete independence*. It’s about establishing a level of control over our workflows that we can defend.

This means being able to explain why a particular level of sovereignty is appropriate, in terms of the risks we’re addressing and the evidence that supports our decisions. 

Ultimately, understanding the compromises we may have to make here - and why we’re making them - is what’s going to close the gap between ‘*sovereignty is a priority for us’* and *‘sovereignty is something we’re actively taking steps towards*’.

The goal is to move digital sovereignty from an abstract aspiration to specific requirements, informed by actual use cases. 

Which workflows matter most? What level of control do they need? What would show that a solution meets that? And where are we prepared to accept trade-offs?

You’re never going to eliminate every dependency. But you can make those dependencies deliberate, defensible, and appropriate for the workflows they support.