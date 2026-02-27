# Workflow Playbooks content

This folder contains the workflow playbooks for `/agent-space`.

## Add a new workflow
1. Create a new markdown file in `src/content/workflows/`.
2. Name the file with the slug you want in the URL (for example, `holiday-approval.md`).
3. Include all required frontmatter fields:
   - `slug`, `title`, `outcome`
   - `setupTime`, `difficulty`
   - `tags`, `aiAssists`, `humansDecide`
   - `steps` (array of `{ title, description, humanDecision }`)
   - `integrations`, `faq` (array of `{ question, answer }`)
   - `lastUpdated` (ISO date)
4. Add 2–3 short paragraphs in the markdown body describing what the workflow solves.

## Routing
- The directory lives at `/agent-space`.
- Each playbook lives at `/agent-space/[slug]`.

## Update links
- Navigation should point to `/agent-space`.
- Any legacy `/learn/workflows` links should be updated to `/agent-space`.
