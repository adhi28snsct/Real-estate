# EstateFlow – System Architecture Guide (Agent File)

## Project Type
Frontend-only SaaS demo for Real Estate Lead Management.

## Objective
Build a clean, modern, professional SaaS-style UI suitable for real estate agencies in UAE.

This project prioritizes:
- UI polish
- Simplicity
- Demonstration readiness
- Clean architecture
- Easy future backend upgrade

---

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- No external UI libraries
- No backend (demo phase)

---

## Folder Structure

/app
  /login
  /dashboard
    /leads
/components
  Sidebar.tsx
  Topbar.tsx
  StatsCard.tsx
  LeadsTable.tsx
  AddLeadModal.tsx
/types
  lead.ts

---

## Data Handling Rules

- All data stored in local React state
- No API calls in demo phase
- No database integration
- Mock realistic UAE real estate data

---

## UI Guidelines

- Modern SaaS look
- Clean spacing (p-6, gap-6)
- Rounded-xl cards
- Soft shadows
- Subtle hover transitions
- Professional color palette
- Status badges with clear visual distinction

---

## Business Context

Target users:
- Small to mid real estate agencies
- Managing 10–200 monthly inquiries
- Currently using Excel or manual tracking

Core value proposition:
"Track and convert property inquiries efficiently."

---

## Upgrade Path (Future Version)

When upgrading to full stack:
- Add authentication
- Add persistent database
- Add multi-agent roles
- Add real follow-up reminders
- Add analytics dashboard
- Add export functionality

---

## Important

This is a validation product.
Do not over-engineer.
Keep architecture scalable but simple.
Prioritize demo-readiness and UI polish.