# Product Requirements Document (PRD)

# আভাস (Avash)
**Tagline:** Your potential has no borders.

**Product Type:** Open-source EdTech / Student Funding Platform  
**Initial Market:** Bangladesh  
**Primary Audience:** Talented Bangladeshi students seeking financial support to study abroad  
**Funding Model:** Individual donations, organizational sponsorships, and scholarships  
**Document Status:** Product proposal — Version 1.0

---

## 1. Executive Summary

### 1.1 Product Overview

**আভাস (Avash)** is an open-source student funding platform designed to connect talented Bangladeshi students with individuals and organizations willing to support their international education.

Many talented students in Bangladesh have the academic ability, ambition, and potential to study at international universities but face financial barriers. These barriers may include English proficiency tests, university application fees, document preparation, credential evaluation, tuition deposits, visa-related expenses, travel, and accommodation.

At the same time, individuals and organizations often want to support promising students but lack a centralized and trustworthy platform where they can discover verified candidates, understand their financial needs, contribute securely, and track the impact of their contributions.

Avash aims to bridge this gap through verified student profiles, transparent funding campaigns, scholarship opportunities, and progress tracking.

### 1.2 Problem Statement

Talented students face several challenges:

- Limited financial resources for international education.
- Difficulty finding trustworthy financial support.
- Lack of access to individual donors and institutional sponsors.
- High costs associated with international university applications.
- Limited visibility for students from financially disadvantaged backgrounds.

Potential donors and organizations face different challenges:

- Difficulty identifying genuine students.
- Limited access to verified academic information.
- Uncertainty about how donations are used.
- Lack of transparent progress and impact reports.

### 1.3 Vision

To build a trusted global community where financial limitations do not prevent talented Bangladeshi students from pursuing international educational opportunities.

### 1.4 Mission

To make international education more accessible by connecting deserving students with transparent, community-driven financial support.

---

## 2. Product Goals and Objectives

### 2.1 Primary Goals

1. Help talented Bangladeshi students receive financial support for international education.
2. Create a transparent system for student verification.
3. Allow individuals to support students through donations.
4. Enable organizations to create and manage scholarship programs.
5. Provide donors with clear information about how their contributions make an impact.
6. Build an open-source platform that developers and volunteers can contribute to.

### 2.2 Initial Success Metrics

These are proposed six-month pilot targets, not guaranteed outcomes.

| Metric | Target |
|---|---:|
| Registered students | 300 |
| Completed student profiles | 150 |
| Verified students | 100 |
| Registered donors | 100 |
| Partner organizations | 5 |
| Published campaigns | 50 |
| Students receiving funding | 20 |
| Students submitting progress reports | 80% |
| Transaction reconciliation | 100% |

---

## 3. Target Users

### 3.1 Students

Talented Bangladeshi students who want to pursue higher education abroad.

They may be:
- Preparing to apply to international universities.
- Already admitted to an international university.
- Awarded a partial scholarship but unable to cover the remaining costs.
- Looking for financial support for exams, applications, or other education-related expenses.

### 3.2 Individual Donors

People who want to support talented students.

Examples:
- Working professionals.
- University graduates.
- Bangladeshi expatriates.
- Philanthropists.
- Individuals interested in educational development.

### 3.3 Organizations

Organizations interested in supporting education through scholarships or sponsorships.

Examples:
- Companies.
- Foundations.
- NGOs.
- Educational institutions.
- Corporate social responsibility programs.

### 3.4 Administrators and Reviewers

Responsible for:
- Student verification.
- Document review.
- Campaign approval.
- Fraud prevention.
- Donation monitoring.
- Platform management.

---

## 4. Product Scope

### 4.1 Initial Scope

The initial platform will focus on:

- Bangladeshi students.
- International higher education opportunities.
- Individual donations.
- Organizational scholarships.
- Verified student profiles.
- Transparent funding campaigns.
- Student progress tracking.

### 4.2 Proposed Product Defaults

The following are recommended starting decisions and remain open for confirmation.

| Area | Proposed Default |
|---|---|
| Student eligibility | Prospective and already-admitted students |
| Destination | Worldwide |
| Funding needs | Small and large education-related expenses |
| Funding sources | Donations and scholarships |
| Donors | Individuals and organizations |
| Verification | Human-reviewed |
| Languages | English first, Bangla support planned |
| Platform | Responsive web application |
| Initial country | Bangladesh |

### 4.3 Non-Goals for MVP

The first version will not:

- Guarantee university admission or visas.
- Provide immigration or university admission consultancy.
- Offer loans or investment returns.
- Replace university application portals.
- Automatically rank students using AI.
- Support unrestricted peer-to-peer money transfers.
- Launch native Android or iOS applications.

---

## 5. Functional Requirements

### 5.1 Authentication and User Management

Users should be able to:

- Register using email.
- Verify their email address.
- Log in and log out.
- Reset forgotten passwords.
- Edit account information.
- Manage their sessions.
- Deactivate their accounts.

The platform will support role-based access control.

**User roles:**
- Student
- Individual Donor
- Organization
- Reviewer
- Administrator

### 5.2 Student Profiles

Students should be able to create detailed profiles.

**Personal information**
- Full name.
- Profile picture.
- Country and city.
- Short biography.
- Contact information.

**Educational information**
- Current institution.
- Previous education.
- Academic results.
- Intended degree.
- Preferred subject.
- Target country.
- Target universities.

**Achievements**
- Academic awards.
- Competition achievements.
- Research experience.
- Extracurricular activities.
- Volunteer experience.
- Relevant certifications.

**Study plans**
- Personal statement.
- Educational goals.
- Reasons for studying abroad.
- Intended career path.

**Financial information**
- Total estimated expenses.
- Available financial resources.
- Scholarship received, if applicable.
- Remaining funding requirement.

Students should be able to save profiles as drafts, edit them, and preview their public presentation.

Private information must never be exposed publicly without appropriate consent.

### 5.3 Student Verification

Trust is one of Avash's most important product features.

Students may submit:

- National identity evidence or passport evidence.
- Academic transcripts.
- English proficiency test results.
- University offer letters.
- Scholarship letters.
- Awards and certificates.
- Financial documents.
- References, where appropriate.

**Verification workflow:**

1. Student submits required documents.
2. Application enters the review queue.
3. Reviewer examines submitted evidence.
4. Reviewer approves, rejects, or requests additional information.
5. Student receives a notification.
6. Approved students receive verified status.

**Verification statuses:**

- Draft
- Submitted
- Under Review
- Additional Information Required
- Verified
- Rejected
- Appeal Pending
- Suspended

Important rules:

- Verification must be performed by authorized human reviewers.
- Donors must not have direct access to private verification documents.
- Verification status should be displayed publicly only when appropriate.
- Documents must be stored securely.
- Expired documents may require re-verification.

### 5.4 Funding Campaigns

Verified students should be able to create funding campaigns.

**Campaign information:**
- Campaign title.
- Introduction.
- Student profile.
- Target university.
- Destination country.
- Intended degree.
- Admission status.
- Funding goal in BDT.
- Expense breakdown.
- Supporting evidence.
- Campaign deadline.
- Funding milestones.
- Progress updates.

**Funding categories:**

- IELTS, TOEFL, and other examinations.
- University application fees.
- Academic document preparation.
- Credential evaluation.
- Tuition fees and deposits.
- Visa-related expenses.
- Travel expenses.
- Relocation and accommodation.
- Research and academic expenses.

**Campaign statuses:**

- Draft
- Submitted
- Under Review
- Approved
- Active
- Partially Funded
- Fully Funded
- Completed
- Suspended
- Cancelled

Only confirmed and reconciled contributions should count toward the campaign's funding progress.

### 5.5 Student Discovery

Donors should be able to discover students through a public directory.

**Filters:**
- Destination country.
- University.
- Degree level.
- Academic subject.
- Admission status.
- Funding category.
- Funding goal.
- Verification status.

**Sorting options:**
- Recently published.
- Deadline approaching.
- Funding progress.
- Recently updated.

Discovery must remain fair. Popularity, social media followers, and personal connections should not determine which students receive funding opportunities.

### 5.6 Donations

Individual donors should be able to:

- Browse student campaigns.
- View verified student information.
- Select a contribution amount.
- Review applicable fees.
- Complete a donation through an approved payment provider.
- Receive a digital receipt.
- View donation history.
- Choose anonymous public recognition.

**Donation statuses:**

- Initiated
- Pending
- Successful
- Failed
- Refunded
- Disputed

Anonymous recognition must not mean anonymous financial records. Avash must retain the information needed for legitimate financial records and compliance.

The system must prevent duplicate transaction processing and duplicate donation counting.

### 5.7 Scholarship Management

Organizations should be able to publish scholarship opportunities.

Each scholarship should contain:

- Scholarship name.
- Organization name.
- Description.
- Eligibility criteria.
- Available budget.
- Number of recipients.
- Eligible countries.
- Eligible degree levels.
- Eligible subjects.
- Application deadline.
- Required documents.
- Selection process.
- Funding conditions.

Students should be able to apply through the platform.

### 5.8 Organization Dashboard

Organizations should have access to a dedicated dashboard.

Features:

- Organization profile.
- Organization verification.
- Team management.
- Scholarship creation.
- Applicant management.
- Recipient selection.
- Funding allocation.
- Sponsorship history.
- Impact reports.

### 5.9 Student Progress Tracking

Students should be able to publish progress updates.

Possible milestones:

1. English proficiency exam registration.
2. English proficiency exam completion.
3. University application submission.
4. University admission.
5. Scholarship confirmation.
6. Funding completion.
7. Visa progress.
8. Travel preparation.
9. University enrollment.

Public updates should contain only information the student has consented to share.

### 5.10 Notifications

The platform should support:

- Email notifications.
- In-app notifications.

Examples:

- Verification approved.
- Additional documents requested.
- Campaign approved.
- Donation received.
- Scholarship application status changed.
- Funding milestone reached.
- New progress update.

SMS notifications may be considered in a later version.

### 5.11 Admin Dashboard

Administrators should be able to:

- Manage users.
- Review student verification applications.
- Approve or reject campaigns.
- Verify organizations.
- Manage scholarship listings.
- Monitor donations and transactions.
- Review refunds and disputes.
- Manage disbursement records.
- View reports and analytics.
- Review audit logs.
- Suspend suspicious accounts.

All important administrative actions should be recorded.

---

## 6. Main User Journeys

### 6.1 Student Journey

1. Student visits Avash.
2. Creates an account.
3. Completes their profile.
4. Submits verification documents.
5. Waits for human review.
6. Receives verification approval.
7. Creates a funding campaign.
8. Campaign is reviewed and published.
9. Donors contribute.
10. Student publishes progress updates.
11. Funding and milestones are tracked.

### 6.2 Donor Journey

1. Donor visits Avash.
2. Explores student profiles.
3. Reviews verification status and campaign details.
4. Chooses a student to support.
5. Selects a contribution amount.
6. Completes payment.
7. Receives a receipt.
8. Tracks the contribution and student progress.

### 6.3 Organization Journey

1. Organization creates an account.
2. Completes its organization profile.
3. Submits verification information.
4. Receives approval.
5. Creates a scholarship program.
6. Reviews applications.
7. Selects recipients.
8. Tracks funding and impact.

---

## 7. Information Architecture

### Public Pages

- `/` — Homepage
- `/students` — Student directory
- `/students/[slug]` — Student profile
- `/campaigns/[slug]` — Funding campaign
- `/scholarships` — Scholarship directory
- `/scholarships/[slug]` — Scholarship details
- `/how-it-works`
- `/about`
- `/transparency`
- `/faq`
- `/contact`

### Student Dashboard

- `/student/dashboard`
- `/student/profile`
- `/student/education`
- `/student/achievements`
- `/student/documents`
- `/student/verification`
- `/student/campaigns`
- `/student/campaigns/new`
- `/student/funding`
- `/student/progress`
- `/student/notifications`
- `/student/settings`

### Donor Dashboard

- `/donor/dashboard`
- `/donor/explore`
- `/donor/donations`
- `/donor/saved`
- `/donor/receipts`
- `/donor/following`
- `/donor/settings`

### Organization Dashboard

- `/organization/dashboard`
- `/organization/profile`
- `/organization/verification`
- `/organization/scholarships`
- `/organization/scholarships/new`
- `/organization/applicants`
- `/organization/recipients`
- `/organization/reports`
- `/organization/team`

### Admin Dashboard

- `/admin`
- `/admin/users`
- `/admin/students`
- `/admin/verifications`
- `/admin/campaigns`
- `/admin/organizations`
- `/admin/scholarships`
- `/admin/donations`
- `/admin/transactions`
- `/admin/disbursements`
- `/admin/reports`
- `/admin/audit-logs`
- `/admin/settings`

---

## 8. Technical Architecture

### 8.1 Recommended Technology Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Backend | Node.js + Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | Better Auth or another mature auth solution |
| Validation | Zod |
| File Storage | Private S3-compatible storage |
| Payments | Approved payment gateway |
| Email | Resend or equivalent |
| Testing | Vitest + Playwright |
| Frontend Hosting | Vercel |
| Backend Hosting | Suitable Node.js hosting |
| Version Control | GitHub |

### 8.2 Architecture Overview

Users interact with the Next.js application.

The frontend communicates with the Express API, which handles authentication, permissions, business logic, and database operations.

The backend integrates with:

- MongoDB.
- Private document storage.
- Payment gateway.
- Email notification service.

### 8.3 Proposed Monorepo Structure

```text
avash/
│
├── apps/
│   ├── web/
│   │   ├── app/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── types/
│   │
│   └── api/
│       └── src/
│           ├── config/
│           ├── modules/
│           │   ├── auth/
│           │   ├── users/
│           │   ├── students/
│           │   ├── organizations/
│           │   ├── verification/
│           │   ├── campaigns/
│           │   ├── scholarships/
│           │   ├── donations/
│           │   ├── payments/
│           │   ├── disbursements/
│           │   ├── progress/
│           │   └── notifications/
│           ├── middleware/
│           ├── services/
│           ├── utils/
│           └── server.ts
│
├── packages/
│   ├── shared/
│   ├── validation/
│   └── database/
│
├── docs/
├── README.md
├── LICENSE
└── package.json
```

### 8.4 Main Database Collections

- Users
- StudentProfiles
- Organizations
- Documents
- Verifications
- Campaigns
- Scholarships
- ScholarshipApplications
- Donations
- Transactions
- Disbursements
- ProgressUpdates
- Notifications
- AuditLogs

### 8.5 API Structure

All API endpoints should use versioning:

`/api/v1/`

Initial endpoint groups:

**Students**
- `GET /students`
- `GET /students/:id`
- `POST /students/profile`
- `PATCH /students/profile`

**Verification**
- `POST /students/documents`
- `POST /students/verification`
- `GET /students/verification`

**Campaigns**
- `POST /campaigns`
- `GET /campaigns`
- `GET /campaigns/:id`
- `PATCH /campaigns/:id`

**Donations**
- `POST /donations`
- `GET /donations/me`
- `POST /payments/webhook`

**Scholarships**
- `POST /scholarships`
- `GET /scholarships`
- `GET /scholarships/:id`
- `POST /scholarships/:id/applications`

**Progress**
- `POST /progress`
- `GET /progress/:studentId`

**Administration**
- `GET /admin/verifications`
- `PATCH /admin/verifications/:id`

Every protected endpoint must enforce server-side authorization, ownership checks, and input validation.

---

## 9. Non-Functional Requirements

### 9.1 Performance

- Fast page loading on mobile networks.
- Optimized images.
- Pagination for large directories.
- Efficient database queries.
- Appropriate caching.
- Good Core Web Vitals.

### 9.2 Security

- HTTPS.
- Secure authentication and session management.
- Role-based permissions.
- Private document storage.
- Time-limited signed document URLs.
- Rate limiting.
- Protection against common web vulnerabilities.
- Verified payment webhooks.
- Audit logs.
- Regular dependency updates.

### 9.3 Privacy

- Collect only necessary personal information.
- Obtain consent for public information.
- Keep sensitive documents private.
- Restrict reviewer access.
- Provide account deactivation and appropriate data-deletion processes.
- Apply appropriate retention policies.

### 9.4 Accessibility

- Keyboard navigation.
- Screen-reader support.
- Sufficient color contrast.
- Responsive layouts.
- Clear form labels and error messages.
- English and Bangla language support over time.

### 9.5 Reliability

- Regular database backups.
- Transaction reconciliation.
- Error monitoring.
- Structured logging.
- Recovery procedures.

---

## 10. Trust, Safety, and Compliance

Trust must be a core foundation of Avash.

Before accepting real public donations or distributing funds, the project must obtain appropriate legal and financial guidance.

Areas requiring review include:

- Legal structure for operating a fundraising platform.
- Applicable nonprofit and fundraising requirements.
- Payment provider and merchant requirements.
- Cross-border contributions.
- Foreign funding and fund-distribution rules.
- Tax obligations.
- Data protection and privacy.
- Consumer protection.
- Rules relating to minors.
- Donations intended for overseas education.

Avash should not use an individual's personal bank account as an informal public donation wallet.

### Fraud Prevention

Potential safeguards:

- Identity and academic document review.
- Admission evidence verification.
- Duplicate account detection.
- Campaign moderation.
- Payment reconciliation.
- Suspicious activity reporting.
- Reviewer audit logs.
- Appeal procedures.

### Fairness

Students should not be disadvantaged because they:

- Have fewer social media followers.
- Come from rural areas.
- Attend less prestigious institutions.
- Have limited online visibility.
- Cannot create highly polished campaign content.

---

## 11. Monetization and Sustainability

Avash should prioritize student benefit and public trust.

Potential sustainability models:

1. Corporate sponsorships.
2. Educational grants.
3. Institutional partnerships.
4. Voluntary platform contributions.
5. Transparent and legally approved platform fees.

Core student services should remain free.

Avash should never sell student personal information or charge students for verification badges.

---

## 12. MVP Development Roadmap

### Phase 1 — Foundation (Weeks 1–2)

- Project setup.
- Monorepo configuration.
- Database connection.
- Authentication.
- User roles.
- Public homepage.
- Basic UI system.

### Phase 2 — Student Portal (Weeks 3–4)

- Student dashboard.
- Student profiles.
- Education information.
- Achievements.
- Document submission.
- Private document storage.

### Phase 3 — Verification and Campaigns (Weeks 5–6)

- Verification workflow.
- Admin review dashboard.
- Campaign creation.
- Campaign moderation.
- Public student directory.
- Campaign discovery.

### Phase 4 — Donor Features (Weeks 7–8)

- Donor dashboard.
- Donation records.
- Payment integration, subject to approval.
- Receipts.
- Campaign progress.
- Student progress updates.

### Phase 5 — Organization Features (Weeks 9–10)

- Organization registration.
- Organization verification.
- Scholarship creation.
- Scholarship applications.
- Basic applicant management.

### Phase 6 — Testing and Pilot (Weeks 11–12)

- Security review.
- Functional testing.
- Responsive improvements.
- Documentation.
- Pilot preparation.
- Initial community onboarding.

**Note:** The 12-week estimate is a development planning target. Legal approvals, payment-provider onboarding, and operational partnerships may require additional time.

---

## 13. Acceptance Criteria

| Feature | Acceptance Criteria |
|---|---|
| Authentication | Users can register, log in, and reset passwords |
| Roles | Each user can access only permitted features |
| Student profile | Students can create and update profiles |
| Documents | Private documents are not publicly accessible |
| Verification | Reviewers can approve, reject, or request information |
| Campaigns | Students can submit campaigns for review |
| Discovery | Visitors can search and filter campaigns |
| Donations | Transactions are recorded accurately |
| Admin | Administrators can manage review queues |
| Progress | Students can publish progress updates |
| Security | Protected operations enforce authorization |
| Mobile | Core features work on mobile screens |
| Documentation | Developers can install and run the project |

---

## 14. Risks and Mitigation

| Risk | Mitigation |
|---|---|
| Fake student profiles | Human verification and document review |
| Donation fraud | Approved payment providers and reconciliation |
| Low donor participation | Community partnerships and transparent reporting |
| Legal uncertainty | Obtain qualified legal and financial advice |
| Data leaks | Private storage and strict access control |
| Unfair funding distribution | Transparent discovery and selection policies |
| Operational costs | Grants, sponsorships, and partnerships |
| Low student trust | Clear policies and accessible support |

---

## 15. Future Roadmap

### Version 1.1

- Complete organization scholarship management.
- English and Bangla interfaces.
- Improved student progress timelines.
- Donor following and saved profiles.
- Better impact reports.

### Version 1.2

- Corporate sponsorship dashboard.
- Milestone-based disbursement.
- Alumni community.
- Improved verification workflows.
- Scholarship matching.

### Version 2.0

- International donor support.
- University and foundation partnerships.
- Advanced impact analytics.
- Mobile applications.
- Volunteer network.
- More sophisticated funding allocation tools.

---

## 16. Open-Source Strategy

Avash will be developed as an open-source project.

### 16.1 GitHub Organization

Proposed organization name:

`avash`

Possible repositories:

- `platform`
- `documentation`
- `design-system`
- `community`

A monorepo is recommended for the initial development stage.

### 16.2 Contribution Guidelines

The project should include:

- README.
- Installation guide.
- Contribution guide.
- Code of Conduct.
- Issue templates.
- Pull request templates.
- Security reporting instructions.
- Development documentation.
- Architecture Decision Records.

### 16.3 License

**AGPL-3.0** is a proposed license because it requires modified network-accessible versions to provide their corresponding source code under its terms.

The final license should be selected after reviewing the project's governance and sustainability goals.

### 16.4 Open-Source Privacy Principle

The source code should be public.

The following must remain private:

- Student identity documents.
- Academic records.
- Financial documents.
- Donor financial information.
- Authentication secrets.
- Payment credentials.
- Private operational data.

Open-source software does not mean public user data.

---

## 17. Core Product Principles

Avash should follow these principles:

1. **Merit with opportunity:** Talent should not be limited by financial background.
2. **Evidence over claims:** Important student information must be verifiable.
3. **Transparency:** Funding activity and platform operations should be understandable.
4. **Privacy by default:** Sensitive information must remain protected.
5. **Accessibility:** The platform should work for students with different backgrounds and resources.
6. **Fair discovery:** Funding opportunities should not depend on popularity.
7. **Community ownership:** Developers, donors, organizations, and students should be able to contribute to the platform's growth.
8. **Honest expectations:** Avash must never guarantee admission, scholarships, or visas.

---

## 18. Outstanding Product Decisions

The following decisions should be finalized before implementation.

| Decision | Recommended Starting Point |
|---|---|
| Student eligibility | Prospective and admitted students |
| Destination countries | Worldwide |
| Initial funding categories | Exams, applications, tuition, and relocation |
| Funding methods | Donations and scholarships |
| Payment provider | Select after legal and operational review |
| Verification | Manual review |
| Languages | English first, Bangla planned |
| Disbursement | Approved, documented funding process |
| Initial launch | Small pilot in Bangladesh |
| License | AGPL-3.0, subject to confirmation |

---

## 19. Final Product Definition

**আভাস (Avash)** is an open-source platform that connects talented Bangladeshi students seeking international education funding with individuals and organizations willing to support their ambitions.

Through verified profiles, transparent funding campaigns, scholarship opportunities, and progress tracking, Avash aims to make educational support more accessible, accountable, and community-driven.

**Avash is not simply a donation website. It is a platform built to connect potential with opportunity.**

**Tagline: Your potential has no borders.**
