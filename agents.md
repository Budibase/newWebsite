# Codex Instructions for the Budibase Marketing Website
This document defines how Codex should think, generate, and structure code for the Budibase marketing site.  
Codex must always follow these principles unless the user explicitly instructs otherwise.

---

# 1. Project Context
- The project is the **Budibase marketing website**.
- Built with **Astro**.
- Hosted as a static site with minimal client-side JS.
- The site’s goal is to:
  - Clearly communicate Budibase’s value.
  - Drive users to build agents and AI workflows.
  - Position Budibase as the fastest way to automate internal business processes.

---

# 2. Architectural Guidelines
Codex should adhere to the following architecture choices:

## 2.1. Astro First
- Prefer **Astro components (`.astro`)** over React/Svelte/Vue unless expressly required.
- Generate **server-first, minimal-JS** pages.
- Use **Astro’s content collections** for structured content whenever appropriate.

## 2.2. File Structure
Use a clean, predictable structure:
/src
/components
/layouts
/pages
/content
/assets
/styles
/public
agents.md
astro.config.mjs

## 2.3. Styling
- Use **CSS modules** or **global CSS** inside `/src/styles`.
- Keep styling simple and maintainable — no Tailwind unless instructed.
- Prefer **utility classes** only when helpful; avoid class proliferation.

## 2.4. Images + Assets
- Use Astro’s `<Image />` optimization when appropriate.
- Optimize SVGs and keep them in `/src/assets/icons`.

---

# 3. Content + Copy Guidelines
Codex should follow this writing style by default:

### Tone
- Confident, modern, and clear.
- Benefit-led, not feature-dump.
- Product-led growth mindset.

### Messaging priorities
Codex should emphasize:
1. **Budibase agents automate internal workflows instantly.**
2. **AI + data + automation in one platform.**
3. **Security, control, and enterprise readiness.**
4. **Budibase is the fastest way to build internal tools.**

### Writing rules
- Prefer short paragraphs.
- Use strong, functional headlines.
- Use bullets for clarity.
- Avoid jargon unless necessary.

---

# 4. Component Guidelines
Codex should generate components that are:

### Requirements
- **Reusable**
- **Stateless**
- **Accessible**
- **Semantic markup first**

### Examples
- `<Hero />`
- `<Features />`
- `<UseCases />`
- `<IntegrationsGrid />`
- `<CTA />`

Each component should:
- Accept props.
- Be isolated and clean.
- Avoid embedding large amounts of copy inside components — keep this in content collections when possible.

---

# 5. SEO + Performance Guidelines
Codex must follow:
- Semantic headings (`h1`, `h2`, `h3`)
- Proper `<title>` and `<meta>` tags per page
- Canonical URLs
- Lazy-loading large assets
- No unnecessary JavaScript

---

# 6. Do / Don’t Rules

### Do
- Generate clean Astro layouts and components.
- Keep logic simple and declarative.
- Use content collections for structured marketing content.
- Suggest small architecture improvements when helpful.

### Don’t
- Don’t introduce large frameworks unless asked.
- Don’t produce heavy SPA-style JS.
- Don’t create random directories.
- Don’t output React unless the user asks for it.

---

# 7. Codex Behavioral Instructions
Codex should:
- Prefer **Astro best practices** over general web patterns.
- Ask clarifying questions only when truly necessary.
- Provide improvements proactively when beneficial.
- Use concise code, minimal dependencies, and modern standards.
- Generate production-ready code, not pseudo-code.

---