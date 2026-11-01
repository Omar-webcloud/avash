# আভাস (Avash) — Open-Source Student Funding Platform

> **Tagline:** Your potential has no borders. | সীমানা পেরিয়ে তোমার মেধা।  
> **Document Reference:** [PRD.md](./PRD.md) (Version 1.0)  
> **License:** [AGPL-3.0](./LICENSE)

---

## 🌟 Overview

**আভাস (Avash)** is an open-source student funding and EdTech platform designed to connect talented Bangladeshi students with individuals and organizations willing to support their international higher education.

Avash bridges financial barriers — including standardized testing (IELTS/TOEFL/GRE), university application fees, credential evaluations (WES/Uni-Assist), visa fees (SEVIS/IHS), tuition deposits, and relocation — through:

1. **Human-Reviewed Verification:** 100% human authentication of transcripts, NID/passports, and official foreign university admission offers.
2. **Transparent Educational Escrow:** 0% platform commission on student fees. Zero informal personal wallets.
3. **Itemized Funding Campaigns:** Transparent expenses in Bangladeshi Taka (BDT) with milestone payouts and invoice verification.
4. **Organizational Scholarships:** Centralized grants and applicant evaluation for corporate CSR, foundations, and alumni trusts.
5. **Real-Time Progress Tracking:** Accountability feed from exam completions and visa interviews to campus arrivals.
6. **Bilingual UI:** Native support for English and Bangla (বাংলা).

---

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.x (Tested on Node.js v24)
- npm >= 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/weber/avash.git
cd avash

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧭 Interactive Demo Persona Switcher

Avash includes a sticky role switcher in the top banner allowing anyone reviewing the app to experience all 5 target roles instantly:

- 🎓 **Student (Nafis Ahmed):** BUET CSE grad admitted to Georgia Tech MS. Access the Student Portal to upload documents, launch campaigns, track funding, and publish milestone updates.
- 💖 **Individual Donor (Dr. Tahmidur Rahman):** Expatriate mentor. Browse campaigns, donate via simulated bKash/Nagad/Cards, and generate cryptographic digital receipts.
- 🏢 **Organization (BRAC Social Impact Initiatives):** Create STEM and Green Energy scholarships, evaluate applicant dossiers, and generate CSR impact reports.
- 🛡️ **Reviewer & Admin (Dr. Rubana Khan):** Inspect the verification queue, review official documents, approve/reject with audit notes, moderate campaigns, and view 100% reconciled transaction logs.

---

## 🏛️ Information Architecture & Routes

### Public Pages
- `/` — Homepage with pilot KPIs, urgent campaigns, and trust charter
- `/students` — Student Directory with country, degree, and admission status filters
- `/students/[slug]` — Comprehensive verified student profile & milestone timeline
- `/campaigns` — Campaign Directory with category filtering and sorting
- `/campaigns/[slug]` — Detailed campaign page with itemized expenses & direct checkout
- `/scholarships` — Institutional scholarship registry
- `/scholarships/[slug]` — Scholarship details & online application form
- `/how-it-works` — Illustrated journeys for Students, Donors, and Organizations
- `/about` — Vision, Mission, Core Principles, and Open-Source Manifesto
- `/transparency` — Anti-fraud safeguards, escrow protocol, and live audit ledger
- `/faq` — Frequently Asked Questions
- `/contact` — Inquiries & Dhaka community hub

### Student Portal
- `/student/dashboard` — Overview & metrics
- `/student/profile` — Biography & personal statement
- `/student/education` — Academic history & target universities
- `/student/achievements` — Honors, competitions, and publications
- `/student/documents` — Secure document upload vault
- `/student/verification` — Pipeline status & reviewer feedback
- `/student/campaigns` — Campaign management
- `/student/campaigns/new` — Interactive campaign creation wizard with itemized expenses
- `/student/funding` — Escrow receipts & payout records
- `/student/progress` — Post milestone updates with evidence
- `/student/notifications` — Notification center
- `/student/settings` — Account preferences & demo reset

### Donor Portal
- `/donor/dashboard` — Donor analytics & backed scholars
- `/donor/explore` — Browse urgent student campaigns
- `/donor/donations` — Contribution history & transaction hashes
- `/donor/saved` — Bookmarked candidates
- `/donor/receipts` — Official printable/downloadable digital receipts
- `/donor/following` — Followed scholars progress feed
- `/donor/settings` — Anonymous recognition & tax defaults

### Organization Hub
- `/organization/dashboard` — CSR programs overview
- `/organization/profile` — Entity profile
- `/organization/verification` — NGOAB registration & compliance
- `/organization/scholarships` — Manage scholarship listings
- `/organization/scholarships/new` — Program publishing wizard
- `/organization/applicants` — Applicant dossier evaluation & scoring
- `/organization/recipients` — Awarded scholars directory
- `/organization/reports` — CSR impact & audit statements
- `/organization/team` — Committee team management

### Admin & Reviewer Hub
- `/admin` — Pilot targets tracker & metrics overview (PRD Section 2.2)
- `/admin/verifications` — Human reviewer queue with document inspection & approval
- `/admin/campaigns` — Campaign moderation & suspension control
- `/admin/students` — Student directory
- `/admin/users` — Role-based access control (RBAC)
- `/admin/organizations` — Partner organization verification
- `/admin/scholarships` — Scholarship listings
- `/admin/donations` — Central escrow ledger
- `/admin/transactions` — Payment gateway reconciliation (bKash/Nagad/Card)
- `/admin/disbursements` — Direct vendor disbursement records
- `/admin/reports` — Analytics & pilot KPIs
- `/admin/audit-logs` — Cryptographic system audit trail
- `/admin/settings` — Governance parameters & factory reset

---

## ⚡ API Endpoints (`/api/v1/...`)

- `GET /api/v1/students` — Query student directory
- `GET /api/v1/students/:id` — Individual student profile
- `POST /api/v1/students/profile` — Update student profile
- `GET /api/v1/campaigns` — Query campaigns
- `GET /api/v1/campaigns/:id` — Campaign details
- `POST /api/v1/campaigns` — Submit campaign
- `GET /api/v1/donations` — Query all donations
- `POST /api/v1/donations` — Process donation
- `POST /api/v1/payments/webhook` — Gateway webhook reconciliation
- `GET /api/v1/scholarships` — Query scholarships
- `GET /api/v1/scholarships/:id` — Scholarship details
- `GET /api/v1/progress` — Progress milestones feed
- `GET /api/v1/admin/verifications` — Reviewer queue

---

## 🛡️ Trust, Safety & Privacy Principle

Open-source software does not mean publicizing sensitive personal information. The following data remains strictly private and encrypted:
- National identity documents (NID / Passport)
- Private financial statements
- Donor payment credentials
- Internal reviewer notes

---

## 📜 License

Released under the **GNU Affero General Public License v3.0 (AGPL-3.0)**. See [LICENSE](./LICENSE) for details.
