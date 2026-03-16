---
author: "Ronan McQuillan"
publishDate: "2026-03-11"
description: "Learn how to build a custom AI agent to triage incoming emails."
profilePic: "https://res.cloudinary.com/daog6scxm/image/upload/v1639756662/cms/IMG_3081_ubvpag.jpg"
title: "How to Build an AI Email Triage Agent in 4 Steps"

---

Triaging incoming emails is a huge time sink for support teams. Determining the topic and importance of each email is a crucial step for deciding which inbox, colleague, or workflow it should be routed to.

Previously, this relied heavily on manual admin, often requiring human colleagues to read each incoming email, as it’s difficult to handle natural language with deterministic automations.

However, the rise of AI has completely changed this.

Today, we’re looking at how we can easily build an AI-powered email triage system using Budibase. Specifically, we’ll be covering:

- [What is AI email triage](#what-is-ai-email-triage)
- [How to build an email triage agent with Budibase](#how-to-build-an-email-triage-agent-with-budibase)
- [Configuring our data model](#1-configuring-our-data-model)
- [Setting up an email-received automation](#2-setting-up-an-email-received-automation)
- [Configuring agent behavior](#3-configuring-agent-behavior)
- [Calling the triage agent from our automation rule](#4-calling-the-triage-agent-from-our-automation-rule)

Let’s jump right in.

## What is AI email triage?

AI email triage means using LLM-powered reasoning to categorize and prioritize incoming emails automatically. This relies on natural language processing, which involves an AI model analyzing the subject, intent, sentiment, and other factors within a piece of text.

The model can then apply defined business logic against this to trigger downstream actions, such as routing the email to an appropriate inbox, sending an automated response, creating a support ticket, or simply marking it as junk.

When dealing with emails, we generally have a limited number of text fields to base this on, including the sender, subject, email body, and, optionally, any attachments.

AI email triage systems are typically triggered by a new email being received by the relevant inbox, using either IMAP or a webhook from the mailbox provider.

The required data is then passed to an LLM with a system prompt, including the required logic for categorizing and prioritizing submissions.

The goal is to provide an automated system that’s capable of making the same triage decisions that would otherwise require human intervention, in accordance with defined business logic.

## How to build an email triage agent with Budibase

Knowing what AI email triage is, we can move on to checking out how we can achieve this with Budibase Agents and Automations.

But first, it’s worth outlining what we’re building.

Our triage assistant will be initiated using a Budibase Automation, with the `Email Received` trigger, which connects to our mailbox via IMAP. When a new email is received in our inbox, we’ll first add it as a row in a BudibaseDB table called `Emails`.

We’ll then pass the relevant information to our agent, which includes logic for determining the `Category` and `Priority` of each email, as well as instructions for updating the relevant row to populate these, along with a field for its rationale.

If you haven’t already, sign up for Budibase to start building Agents and Automations.

{{< cta >}}

### 1. Configuring our data model

We’re starting with a new Budibase Workspace. This is a project where we can configure data and create Apps, Agents, or Automations that connect to this.

When we create our Workspace, we’ll be presented with the following screen, where we can start setting up our data layer.

![AI Email Triage](https://res.cloudinary.com/daog6scxm/image/upload/v1770830895/cms/ai-email-triage/AI_Email_Triage_1_xn0uot.webp "AI email triage")

As we said earlier, we’re using a single table in Budibase’s internal database, BudibaseDB. We have the option of creating this from scratch, but today we’re selecting the option to upload a CSV.

Specifically, we’re going to upload a file containing the following data:
```csv
From,Subject,Received At,Body,Category,Priority,Agent Rationale
example,App Crashes on Login,2026-01-26T16:21:05.000Z,The app crashes every time I try to log in on my iPhone. Reinstalling didn't help.,,,
bob@lead.com,Pricing for 50 seats,2026-01-22T10:42:00.000Z,Could you share pricing for around 50 user licenses and any volume discounts?,,,
hr@partner.org,Contract renewal discussion,2026-01-22T10:05:00.000Z,Our current agreement expires next month and we’d like to discuss renewal terms.,,,
invoices@vendor.com,Invoice #48392 overdue,2026-01-22T09:14:00.000Z,Please let us know when invoice 48392 will be settled. It is now 14 days overdue.,,,
noreply@bank.com,Suspicious account activity,2026-01-22T11:10:00.000Z,We detected unusual activity on your account. Please review immediately.,,,
```

We’ll call our table `Emails` and select the following data types for our columns:

- From - Text,
- Subject - Text,
- Received At - Date,
- Body - Long-Form Text,
- Category - Single Select,
- Priority - Single Select,
- Agent Rationale - Long-Form Text.

![Data](https://res.cloudinary.com/daog6scxm/image/upload/v1770830896/cms/ai-email-triage/AI_Email_Triage_2_c8rcnt.webp "Data")

Here’s how this looks in the Data section of our Workspace. Not that the `Category`, `Priority`, and `Agent Rationale` columns are empty, as we’ll be using our Agent to populate these for new rows later.

![Table](https://res.cloudinary.com/daog6scxm/image/upload/v1770830899/cms/ai-email-triage/AI_Email_Triage_3_xdfwo9.webp "Table")

The one additional change we’ll make to our data model is providing a `Default Value` for the `Received At` column, using the handlebars expression `{{ Date }}`. This will automatically populate a timestamp when a new row is created.

![Date](https://res.cloudinary.com/daog6scxm/image/upload/v1770830899/cms/ai-email-triage/AI_Email_Triage_4_yg2t9t.webp "Date")

And that’s our data model ready to go.

### 2. Setting up an email-received automation

Next, we need to create an Automation rule that’s capable of connecting to a mailbox and adding a new row to our database table when an email is received.

We’ll start by heading to the Automation section and adding a new automation. We’ll call this `Email Triage` and select the `Email Received` trigger.

![Automation](https://res.cloudinary.com/daog6scxm/image/upload/v1770830900/cms/ai-email-triage/AI_Email_Triage_5_krzarx.webp "Automation")

Here’s what this looks like in the Automation section. We simply need to populate our IMAP credentials on the right-hand side to start listening for emails.

![Trigger](https://res.cloudinary.com/daog6scxm/image/upload/v1770830902/cms/ai-email-triage/AI_Email_Triage_6_jdldnc.webp "Trigger")

When we receive a new email, we want to add the relevant information to the `Emails` table that we created in the previous section.

So, we’re going to add a `Create Row` action step after our trigger, setting the `Table` to `Emails`.

![Create Row](https://res.cloudinary.com/daog6scxm/image/upload/v1770830903/cms/ai-email-triage/AI_Email_Triage_7_wwzsyo.webp "Create Row")

We’ll then hit `Edit Fields`, selecting `Body`, `From`, and `Subject`.

![Edit Fields](https://res.cloudinary.com/daog6scxm/image/upload/v1770830905/cms/ai-email-triage/AI_Email_Triage_8_cvp6jr.webp "Edit Fields")

Next, we can hit the lightning bolt icon alongside the `Body` field to open the bindings drawer, where we can select `BodyText` under `Trigger Outputs`.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1770830905/cms/ai-email-triage/AI_Email_Triage_9_fvn3vc.webp "Bindings")

We’ll then repeat this process to bind our `From` and `Subject` fields to `{{ trigger.from }}` and `{{ trigger.subject }}` respectively.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1770830896/cms/ai-email-triage/AI_Email_Triage_10_q1vkky.webp "Bindings")

We can hit `Run Test` and add a dummy payload to confirm that this works.

![AI Email Triage](https://res.cloudinary.com/daog6scxm/image/upload/v1770830898/cms/ai-email-triage/AI_Email_Triage_11_g4qnnf.webp "AI Email Triage")

Back in the Data section, we can see that our row has been created successfully.

![Test Data](https://res.cloudinary.com/daog6scxm/image/upload/v1770830899/cms/ai-email-triage/AI_Email_Triage_12_b5h1wk.webp "Test Data")

### 3. Configuring agent behavior

Now we have a basic automation that receives emails and records them in a database table. The next thing we want to do is create an AI agent that’s capable of assessing emails, applying triage logic, and populating the remaining fields in our table for each new row.

We recently launched Budibase Agents into Beta, enabling us to create intelligent, model-agnostic assistants that can interact with our tools and data.

We’ll start by heading to the Agents section of our Workspace. Here, we’ll create a new Agent and call it `Email Triage`.

![Agent](https://res.cloudinary.com/daog6scxm/image/upload/v1770830899/cms/ai-email-triage/AI_Email_Triage_13_tgxmdc.webp "Agent")

Before we can start telling our Agent what to do, we need to select a model to power it. We’ll start by heading to the `AI Config` tab in the settings modal for our Workspace.

![Config](https://res.cloudinary.com/daog6scxm/image/upload/v1770830895/cms/ai-email-triage/Email_Triage_Agent_1_thpywo.webp "Config")

We’re inputting our credentials to connect to `z-ai/glm-4.7-flash` via OpenRouter.

![AI Email Triage Agent](https://res.cloudinary.com/daog6scxm/image/upload/v1770830895/cms/ai-email-triage/Email_Triage_Agent_2_qivtun.webp "AI Email Triage agent")

Then, we can select this from the `Model` dropdown in Agent editor.

![Model](https://res.cloudinary.com/daog6scxm/image/upload/v1770830895/cms/ai-email-triage/Email_Triage_Agent_3_jjyhep.webp "Model")

Now, we can start to configure Agent behavior in natural language using the `Instructions` field.  

We’ll start by giving our Agent context for what we want to achieve and defining the variables it will need to handle.

So, the start of our prompt will be:

```
You are an email triage classifier.
You will be given From, Subject, and Body. You will also be given a unique id for the corresponding row in the Emails table. Your task is to assign one Category, one Priority, and one Agent Rationale using the rules below.
Only use the allowed values. Do not invent new labels.
```

Here’s what this looks like in the instructions editor.

![Prompt](https://res.cloudinary.com/daog6scxm/image/upload/v1770830896/cms/ai-email-triage/Email_Triage_Agent_A1_w5bm3l.webp "Prompt")

We then need to add the logic for determining which Priority and Category to assign the Email. To do this, we’ll add the following to our existing instructions:

```
Allowed Category values (one word):
Billing, Support, Sales, Legal, Security, General
Category logic:
Billing → invoices, payments, refunds, billing errors, pricing disputes
Support → bugs, errors, outages, product issues, usage questions
Sales → pricing requests, demos, trials, buying intent
Legal → contracts, renewals, legal terms, compliance
Security → fraud, suspicious activity, breaches, account risk
General → anything else
Allowed Priority values:
Urgent, High, Normal, Low
Priority logic:
Urgent → security risk, blocked access, payment failure, system down, or explicit urgency
High → time-sensitive or escalated
Normal → default
Low → informational only
Constraints:
If Category = Security → Priority must be Urgent or High
If unsure → Category = General and Priority = Normal
Rationale rules:
Include a short, factual explanation (1–2 sentences max)
Reference concrete signals (keywords, tone, impact)
Do not restate the email verbatimAllowed Rationale values:
Brief explanation of why this category and priority were chosen. 
```

![Prompt](https://res.cloudinary.com/daog6scxm/image/upload/v1770830895/cms/ai-email-triage/Email_Triage_Agent_A2_qaf06u.webp "Prompt")

Lastly, we need to outline which tool it can use to actually update our target row. Budibase supports a wide range of external tool calls, but today we’re using our built-in actions within BudibaseDB.

We’ll add the following to our existing prompt to configure our Agent to update the relevant `Emails` row.

```
Output format (JSON only):
{
  "category": "Billing|Support|Sales|Legal|Security|General",
  "priority": "Urgent|High|Normal|Low",
  "rationale": "Brief explanation of why this category and priority were chosen."
}
Use this information to update the Category, Agent Rationale, and Priority fields of the relevant row in the Emails table based on its _id, using {{ budibase.Emails.get_row }}{{ budibase.Emails.update_row }}
```

![Tool Calls](https://res.cloudinary.com/daog6scxm/image/upload/v1770830895/cms/ai-email-triage/Email_Triage_Agent_A3_vfvfa1.webp "Tool Calls")

Lastly, we can use the data from an existing row in our Chat preview to confirm that our agent works as intended.

![Agent Test](https://res.cloudinary.com/daog6scxm/image/upload/v1770830895/cms/ai-email-triage/Email_Triage_Agent_A5_d946lq.webp "Agent Test")

And that’s our Agent ready to go.

### 4. Calling the triage agent from our automation rule

Now that we have our Agent in place, we can connect this to our existing Automation, so that it will be triggered each time a row is added to our Emails table.

Back in the Automations section, we’ll add an `Agent` step after our existing `Create Row` action.

![Agent Step](https://res.cloudinary.com/daog6scxm/image/upload/v1770830901/cms/ai-email-triage/AI_Email_Triage_B1_aqdppc.webp "Agent Step")

Then, we’ll select our `Email Triage` Agent under `Agent`.

![AI Email Triage Agent](https://res.cloudinary.com/daog6scxm/image/upload/v1770830902/cms/ai-email-triage/AI_Email_Triage_B2_g3efpn.webp "AI Email Triage Agent")

We can use the `Prompt` argument to pass inputs to our Agent. Remember, we set this up to expect four inputs - the `Body`, `Subject`, `From`, and `_id` fields from a row in our Emails database table.

We’re going to hit the lightning bolt icon to open the bindings drawer, before selecting `Row` under `Create Row Outputs`, providing all of the information we need in key/value pairs.

![Bindings](https://res.cloudinary.com/daog6scxm/image/upload/v1770830903/cms/ai-email-triage/AI_Email_Triage_B3_srtge7.webp "Bindings")

Once again, we’ll hit `Run Test` to confirm that this works, this time using more relevant `Body` and `Subject` values.

![Run Test](https://res.cloudinary.com/daog6scxm/image/upload/v1770830903/cms/ai-email-triage/AI_Email_Triage_B4_iqpcrz.webp "Run Test")

We can see our Agent’s output within the test data.

![Output](https://res.cloudinary.com/daog6scxm/image/upload/v1770830896/cms/ai-email-triage/AI_Email_Triage_B5_nmbclo.webp "Output")

And, back in the Data section, we can see that our row has been successfully populated with all values.

![Database](https://res.cloudinary.com/daog6scxm/image/upload/v1770830897/cms/ai-email-triage/AI_Email_Triage_B6_ukngwu.webp "Database")

And that’s our AI email triage system ready to go.

## The open-source AI workflow toolkit for privacy-first teams

Budibase is the open-source AI workflow toolkit for privacy-first teams. There’s never been an easier way to build Apps, Agents, and Automations by connecting all kinds of AI models to your own tools and data.

Check out our [features overview](https://budibase.com/product/) to learn more.