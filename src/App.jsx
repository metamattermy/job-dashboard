import { useState } from "react";

const today = new Date().toLocaleDateString("en-MY", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

const CRITERIA = [
  { label: "Remote — floor RM8K FT, undisclosed ok, contract any salary", icon: "🌐" },
  { label: "Hybrid KL/PJ/Cyberjaya — floor RM10K (commute premium)", icon: "🏢" },
  { label: "Low friction — not more than full-time hours", icon: "🧘" },
  { label: "Mid-level IC — not chasing senior titles", icon: "🎯" },
  { label: "Broad scope: BA, product ops, CSM, automation, AI, ecommerce, writing", icon: "🔧" },
];

const LINKEDIN_SEARCHES = [
  { label: "Business Analyst · Hybrid · KL", url: "https://www.linkedin.com/jobs/search/?keywords=business+analyst&location=Kuala+Lumpur&f_WT=3", tag: "Hybrid" },
  { label: "Product Manager · Hybrid · KL", url: "https://www.linkedin.com/jobs/search/?keywords=product+manager&location=Kuala+Lumpur&f_WT=3", tag: "Hybrid" },
  { label: "Customer Success Manager · APAC · Remote", url: "https://www.linkedin.com/jobs/search/?keywords=customer+success+manager+APAC&location=Worldwide&f_WT=2", tag: "Remote" },
  { label: "Product Operations · Remote · Worldwide", url: "https://www.linkedin.com/jobs/search/?keywords=product+operations+manager&location=Worldwide&f_WT=2", tag: "Remote" },
  { label: "Implementation Specialist · Remote · APAC", url: "https://www.linkedin.com/jobs/search/?keywords=implementation+specialist+APAC&location=Worldwide&f_WT=2", tag: "Remote" },
  { label: "Jira Admin · Remote · Worldwide", url: "https://www.linkedin.com/jobs/jira-adminstrator-jobs-worldwide", tag: "Remote" },
  { label: "Automation Specialist · Remote · Worldwide", url: "https://www.linkedin.com/jobs/search/?keywords=automation+specialist&location=Worldwide&f_WT=2", tag: "Remote" },
  { label: "Revenue Operations · Remote · Worldwide", url: "https://www.linkedin.com/jobs/search/?keywords=revenue+operations+specialist&location=Worldwide&f_WT=2", tag: "Remote" },
  { label: "Technical Writer · Remote · MY", url: "https://www.linkedin.com/jobs/search/?keywords=technical+writer&location=Malaysia&f_WT=2", tag: "Remote" },
  { label: "Ecommerce Manager · Hybrid · KL", url: "https://www.linkedin.com/jobs/search/?keywords=ecommerce+manager&location=Kuala+Lumpur&f_WT=3", tag: "Hybrid" },
];

const PLATFORMS = [
  { name: "Himalayas", url: "https://himalayas.app/jobs/countries/malaysia", color: "#0284c7", note: "Best for APAC remote · CSM, BA, PM, ops" },
  { name: "We Work Remotely", url: "https://weworkremotely.com/", color: "#1db954", note: "High-quality remote only · filter by category" },
  { name: "Remotive", url: "https://remotive.com/remote-jobs/product", color: "#f97316", note: "165K+ vetted remote jobs" },
  { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/search/?location=Malaysia&f_WT=2", color: "#0077b5", note: "Remote + Hybrid · Malaysia" },
  { name: "Outlier.ai", url: "https://app.outlier.ai/en/expert/opportunities", color: "#7c3aed", note: "AI trainer · USD pay · weekly" },
  { name: "Arc.dev", url: "https://arc.dev/remote-jobs/workflow-automation", color: "#ea580c", note: "Remote automation / tech ops" },
  { name: "Atlassian Community Jobs", url: "https://community.atlassian.com/forums/Jobs-Careers/gh-p/JobsCareers", color: "#0052cc", note: "Jira/Confluence posts — check weekly" },
  { name: "WorkingNomads", url: "https://www.workingnomads.com/remote-product-owner-jobs", color: "#16a34a", note: "Remote PO / PM / Jira worldwide" },
  { name: "Jobstreet MY (Hybrid)", url: "https://my.jobstreet.com/jobs-in-kuala-lumpur?workarrangement=2", color: "#be185d", note: "Hybrid roles KL/PJ/Cyberjaya" },
  { name: "Hiredly (Hybrid KL)", url: "https://my.hiredly.com/jobs/hybrid", color: "#6c3fff", note: "MY startup hybrid roles" },
];

// ── REMOTE JOBS ──────────────────────────────────────────────
const REMOTE_JOBS = [
  // CUSTOMER SUCCESS
  {
    id: 1, title: "Customer Success Manager — EMEA & APAC", company: "Crisp (B2B SaaS · Chat platform)",
    type: "Full-time", salary: "USD 55,000–65,000/yr (~RM20–24K/mo)",
    posted: "Apr 2, 2026", source: "Remotive",
    applyUrl: "https://remotive.com/remote-jobs/customer-service/customer-success-manager-emea-apac-2088698",
    linkNote: "Opens verified Crisp listing on Remotive — APAC eligible, confirmed live Apr 2026",
    fit: 82, friction: "Low–Med", category: "Ops & Admin",
    tags: ["CSM", "APAC", "B2B SaaS", "Onboarding", "USD Pay", "Remote", "Customer Lifecycle"],
    pros: [
      "APAC-eligible — you qualify from Malaysia",
      "USD 55–65K salary band = RM20–24K/mo — well above your floor",
      "Startup phase — you help build the CSM playbook, not just execute one",
      "Your DKSH stakeholder management + Fetch TV client-facing work maps here",
      "B2B SaaS CSM is a widely transferable role type with strong remote market",
    ],
    cons: [
      "Requires prior CSM or account management experience — frame DKSH client coordination carefully",
      "EMEA + APAC timezone stretch — check if APAC hours only are acceptable",
      "Chat platform domain — not your background, but SaaS is learnable fast",
    ],
    highlight: true,
    note: "Strongest salary-to-fit ratio in the remote tab. USD 55–65K from Malaysia is rare. CSM at this level is stakeholder management + onboarding + retention — all skills you have. The 'build the playbook' framing suits your operational background well.",
  },
  {
    id: 2, title: "Customer Success Manager — APAC", company: "ApprovalMax (FinTech SaaS · AP Automation)",
    type: "Full-time", salary: "Est. AUD 80–120K/yr (~RM14–21K/mo)",
    posted: "Mar 13, 2026", source: "Himalayas",
    applyUrl: "https://www.remoteitjobs.app/job/approvalmax-customer-success-manager-apac",
    linkNote: "Opens ApprovalMax APAC CSM listing — APAC region eligible, posted Mar 2026",
    fit: 79, friction: "Low–Med", category: "Ops & Admin",
    tags: ["CSM", "APAC", "FinTech SaaS", "AP Automation", "Onboarding", "Remote", "Finance ops"],
    pros: [
      "APAC-specific role — timezone aligned to your working hours",
      "FinTech / finance ops domain — closer to your DKSH financial operations work",
      "18,000+ customers worldwide — established product, stable company",
      "AUD salary band clears RM floor significantly",
      "Coworking stipend + open vacation policy — genuinely good perks",
    ],
    cons: [
      "AUD salary band — confirm APAC geo rate vs AUD base (may be geo-adjusted down)",
      "Finance/accounting SaaS domain — some learning curve on AP workflow specifics",
      "Posted Mar — verify still open before applying",
    ],
    highlight: false,
    note: "Solid APAC-specific CSM role with a real product and legitimate company. Your DKSH ops + financial P&L work is credible background for an AP automation platform. Verify the geo-adjusted salary early in screening.",
  },
  // BA / PRODUCT OWNER
  {
    id: 3, title: "Business Analyst — HubSpot Product Owner", company: "GoGlobal (EOR / Global HR platform)",
    type: "Full-time", salary: "Undisclosed (global HR tech rates)",
    posted: "Apr 8, 2026", source: "We Work Remotely",
    applyUrl: "https://weworkremotely.com/remote-jobs/goglobal-business-analyst-hubspot-product-owner",
    linkNote: "Opens GoGlobal listing on We Work Remotely — posted Apr 8, verify APAC eligibility on apply",
    fit: 86, friction: "Low", category: "AI & Tech",
    tags: ["BA", "Product Owner", "HubSpot", "CRM", "Backlog", "Remote", "Agile", "PSPO"],
    pros: [
      "BA + Product Owner hybrid — your PSPO-I is directly relevant, rare credential for this role",
      "HubSpot CRM ownership — backlog management, user stories, acceptance criteria = your toolkit",
      "Stakeholder management + documentation + change management = DKSH daily work",
      "GoGlobal is a legitimate global EOR platform, not a scam",
      "Async-friendly by nature — global team, output-based",
    ],
    cons: [
      "Posted as UK remote — verify APAC/worldwide eligibility when applying",
      "HubSpot-specific — if no direct HubSpot experience, frame CRM-adjacent work carefully",
      "Salary undisclosed — ask early in process",
    ],
    highlight: true,
    note: "Near-perfect title match. BA + Product Owner dual role is exactly your PSPO-I positioning. Your Jira Org Admin + Confluence + requirements documentation work is the proof. Verify APAC eligibility immediately — if they accept worldwide, apply today.",
  },
  {
    id: 4, title: "Revenue Operations Specialist", company: "G-P (Globalization Partners)",
    type: "Full-time", salary: "Undisclosed — US MNC rates",
    posted: "May 7, 2026", source: "Indeed MY",
    applyUrl: "https://to.indeed.com/aachqcg2zsx8",
    linkNote: "Verified G-P listing on Indeed MY — posted this week, confirmed live",
    fit: 84, friction: "Low–Med", category: "Ops & Admin",
    tags: ["Revenue Ops", "Salesforce", "GTM", "Analytics", "Global SaaS", "Remote"],
    pros: [
      "G-P is a legitimate, fully remote-first global SaaS company",
      "RevOps = process docs, CRM hygiene, pipeline analytics — your DKSH BA scope",
      "US multinational pay bands even for APAC hires",
      "Fresh posting this week — low competition",
    ],
    cons: [
      "Salesforce CRM experience preferred — flag gap honestly",
      "Salary undisclosed — ask number early in first call",
    ],
    highlight: false,
    note: "Strong match. RevOps is the modern BA role — process, tools, data integrity. Your DKSH analytical work maps directly. Apply this week.",
  },
  // AUTOMATION
  {
    id: 5, title: "Workflow / Operations Automator", company: "Remote SaaS & startups · Global",
    type: "Contract", salary: "USD 1,500–3,000/mo (~RM7–14K)",
    posted: "Ongoing", source: "Arc.dev / We Work Remotely",
    applyUrl: "https://arc.dev/remote-jobs/workflow-automation",
    linkNote: "Opens Arc.dev workflow automation board — browse and filter by timezone",
    fit: 88, friction: "Low", category: "Automation",
    tags: ["Google Apps Script", "Zapier", "Make.com", "n8n", "API", "Telegram", "Build-once"],
    pros: [
      "Your GAS pipelines — Telegram bot, Axi P&L notifier, Shopee order notifier — are the portfolio",
      "Build-once, maintain-lightly = best effort-to-reward ratio of any role type",
      "Output-based and async by nature",
      "Companies pay premium for non-dev automation builders",
    ],
    cons: [
      "Need a short portfolio page showing live pipelines first — 1–2 hours of work",
      "Title varies — search 'no-code specialist', 'ops automator', 'systems integrator' too",
    ],
    highlight: true,
    note: "Your most underrated card. Frame it: 'I build and maintain live automated ops pipelines using Google Apps Script, Telegram Bot API, and Gmail parsing — without a dev team.' That's a real differentiator in this market.",
  },
  // IMPLEMENTATION / ONBOARDING
  {
    id: 6, title: "Product Onboarding Specialist — APAC", company: "Lodgify (SaaS · Vacation rental software)",
    type: "Full-time", salary: "Competitive (EUR/USD base + performance bonus)",
    posted: "Recent", source: "Himalayas",
    applyUrl: "https://himalayas.app/companies/lodgify/jobs/product-onboarding-specialist-apac",
    linkNote: "Opens Lodgify APAC onboarding specialist listing on Himalayas",
    fit: 80, friction: "Low", category: "Ops & Admin",
    tags: ["Onboarding", "SaaS", "APAC", "Product Training", "Customer Success", "Remote"],
    pros: [
      "APAC-specific role — timezone aligned",
      "Onboarding = structured, repeatable, output-based — fits low-friction goal",
      "Your Fetch TV client-facing background + product delivery experience maps well",
      "SaaS onboarding roles are async-friendly by design",
      "EUR/USD salary base — likely clears RM floor",
    ],
    cons: [
      "Hospitality/vacation rental domain — no background, but product ops is transferable",
      "Verify if APAC posting is still open — Himalayas listings can run long",
    ],
    highlight: false,
    note: "Implementation/onboarding roles are overlooked in your search. They're essentially structured client-facing product delivery — you guide customers through a product setup cycle. Your PSPO-I and client coordination background translates directly.",
  },
  // AI TRAINER
  {
    id: 7, title: "AI Content Trainer / Evaluator", company: "Outlier.ai",
    type: "Part-time / Freelance", salary: "USD 11–40/hr (~RM50–185/hr)",
    posted: "Open now", source: "Outlier.ai",
    applyUrl: "https://outlier.ai/languages/ms-my",
    linkNote: "Opens Outlier's official Malaysia application page — confirmed live, APAC eligible",
    fit: 85, friction: "Low", category: "AI & Tech",
    tags: ["AI Training", "English Writing", "Malay", "Flexible Hours", "USD Pay", "Weekly Pay"],
    pros: [
      "Work 5–40 hrs/week fully on your schedule",
      "Paid weekly — fastest cash flow of any role here",
      "Malaysia explicitly supported — eligible now",
      "8-day avg hiring process — fastest onboarding here",
    ],
    cons: [
      "USD 11/hr is the floor — business/ops domain earns higher, aim for writing/ops tasks",
      "Best stacked alongside another role, not standalone",
    ],
    highlight: true,
    note: "Apply today if not done. 15 min to apply, 8 days to onboard, paid within days. Apply for the English writing evaluator track specifically — that's the highest-earning domain for your background.",
  },
  // TECHNICAL WRITER
  {
    id: 8, title: "Senior Technical Writer", company: "CSG (US multinational)",
    type: "Full-time", salary: "Undisclosed — US MNC rates (est. RM12K+)",
    posted: "Feb 27, 2026", source: "Indeed MY",
    applyUrl: "https://to.indeed.com/aa6z76v72dcv",
    linkNote: "Opens CSG listing on Indeed MY — must live in Malaysia, email to confirm still open",
    fit: 78, friction: "Low", category: "Content & Social",
    tags: ["Technical Writing", "Confluence", "API Docs", "SaaS", "Remote MY", "Bali Retreats", "Async"],
    pros: [
      "100% remote, must live in Malaysia — you qualify directly",
      "US MNC pay bands — likely RM12K+",
      "Twice-yearly Bali retreats confirmed",
      "Your Confluence admin + documentation work is the portfolio",
    ],
    cons: [
      "API/JSON and basic Git preferred — stretch if not used directly",
      "Posted Feb — email to confirm still open before applying",
    ],
    highlight: false,
    note: "Your Confluence admin history is the portfolio. Don't self-filter on the API requirement. Email to verify still open first.",
  },
  // JIRA / ATLASSIAN
  {
    id: 9, title: "Jira / Atlassian Admin — Search Card", company: "Multiple · Global (APAC-open filter needed)",
    type: "Contract", salary: "USD 2,000–3,500/mo (~RM9–16K)",
    posted: "Ongoing", source: "WorkingNomads · Atlassian Community · We Work Remotely",
    applyUrl: "https://www.workingnomads.com/remote-jira-jobs",
    linkNote: "⚠️ Search card — no single live APAC listing at refresh. Check the 3 boards every Monday. Paste any APAC-open URL here — I'll vet and draft instantly.",
    fit: 88, friction: "Low", category: "AI & Tech",
    tags: ["Jira", "Confluence", "Atlassian Org Admin", "USD Pay", "Async", "APAC filter needed"],
    pros: [
      "Your Atlassian Org Admin + Confluence Admin credential is rare outside dev teams",
      "USD contract rates clear RM12K floor comfortably",
      "Task-based, async by nature — no standups",
    ],
    cons: [
      "No single live APAC-open listing at refresh — check boards every Monday",
      "Most postings target US/EU — filter explicitly for APAC or async",
    ],
    highlight: true,
    note: "Highest leverage remote play salary-wise. The market is deep but roles rotate. Check WorkingNomads, We Work Remotely, and Atlassian Community Jobs every Monday. Paste URLs here when you find something APAC-open.",
  },
  // PRODUCT OPS / SCRUM
  {
    id: 10, title: "Product Operations Manager — Remote", company: "Search card · Global B2B SaaS",
    type: "Full-time / Contract", salary: "USD 2,000–4,000/mo (varies by company)",
    posted: "Ongoing", source: "Remotive · We Work Remotely · Himalayas",
    applyUrl: "https://remotive.com/remote-jobs/product",
    linkNote: "Opens Remotive product jobs board — search 'product operations' or 'product ops' once there",
    fit: 84, friction: "Low", category: "AI & Tech",
    tags: ["Product Ops", "PSPO-I", "Backlog", "Process Design", "Remote", "B2B SaaS", "Agile"],
    pros: [
      "PSPO-I directly positions you for Product Owner / Product Ops hybrid roles",
      "Product Ops = process design, tooling, analytics, cross-functional coordination — your DKSH scope",
      "Deep remote market on Remotive and We Work Remotely — 100+ openings weekly",
      "Output-based and async-friendly by design",
    ],
    cons: [
      "Title varies: 'Product Ops', 'Product Operations Manager', 'Business Operations' — search all",
      "Many roles are US-company only — filter for worldwide/APAC after landing on board",
    ],
    highlight: false,
    note: "Search card for a rich category. Your PSPO-I + Jira admin + process documentation positions you well. Go to Remotive and search 'product operations' — filter for worldwide or APAC roles. Paste any promising URL here.",
  },
  // ECOMMERCE OPS
  {
    id: 11, title: "Ecommerce Seller Success / Partner Ops", company: "Marketplace platforms · SEA",
    type: "Full-time", salary: "RM 8,000–14,000",
    posted: "Ongoing", source: "LinkedIn",
    applyUrl: "https://www.linkedin.com/jobs/search/?keywords=seller+success+ecommerce&location=Malaysia&f_WT=2",
    linkNote: "Opens pre-filtered LinkedIn search — browse and filter for Remote-confirmed roles",
    fit: 82, friction: "Low–Med", category: "Ops & Admin",
    tags: ["Shopee", "Lazada", "TikTok Shop", "Platform-side", "SEA", "Active Seller"],
    pros: [
      "Active Shopee MY seller = insider credential almost no applicant has",
      "Platform-side pays better than brand-side for the same Shopee/Lazada knowledge",
      "Your seller operations experience is the pitch — you understand the pain points firsthand",
    ],
    cons: [
      "Internal Shopee/Lazada roles may require some KL presence — confirm WFH policy upfront",
    ],
    highlight: false,
    note: "Lead with: 'I'm an active Shopee SIP seller with live listings in Malaysia.' That one line differentiates you immediately from every other applicant.",
  },
  // REVENUE OPS SEARCH CARD
  {
    id: 12, title: "Operations Analyst / Revenue Ops Specialist", company: "Search card · Remote-first SaaS companies",
    type: "Full-time", salary: "USD 2,000–3,500/mo (geo-adjusted for APAC)",
    posted: "Ongoing", source: "Himalayas · Remotive · LinkedIn",
    applyUrl: "https://himalayas.app/jobs/countries/malaysia",
    linkNote: "Opens Himalayas jobs filtered for Malaysia — search 'operations analyst' or 'revenue operations' once there",
    fit: 83, friction: "Low–Med", category: "Ops & Admin",
    tags: ["Ops Analyst", "Revenue Ops", "Analytics", "Process Docs", "Remote", "SaaS", "APAC"],
    pros: [
      "Your DKSH BA/ops background = zero credential gap for ops analyst roles",
      "Himalayas is the best platform for finding remote roles that explicitly accept APAC hiring",
      "Ecommerce P&L, cost modelling, performance reporting = what these roles ask for",
    ],
    cons: [
      "Search required — no single listing, browse Himalayas for current openings",
      "Geo-adjusted salaries vary — confirm USD or local rate early",
    ],
    highlight: false,
    note: "Himalayas is the most underused platform in your search. It explicitly shows which roles accept Malaysia-based applicants. Go there and search 'operations analyst' — much cleaner signal than Indeed for remote roles at your level.",
  },
];

// ── HYBRID JOBS ──────────────────────────────────────────────
const HYBRID_JOBS = [
  {
    id: 201, title: "Frontend Business Analyst — Life Insurance", company: "Capco (Wipro company)",
    type: "Permanent", salary: "Est. RM10,000–13,000 (MNC consulting rates)",
    posted: "May 17, 2026", source: "LinkedIn / Indeed MY",
    applyUrl: "https://to.indeed.com/aat4hxffmhmz",
    linkNote: "Opens Capco BA listing on Indeed MY — same role you've been reviewing",
    location: "Mid Valley KL (The Gardens — building you've worked in)",
    fit: 85, friction: "Low–Med", category: "Ops & Admin",
    tags: ["Frontend BA", "Life Insurance", "UX Collaboration", "Jira", "Confluence", "PSPO-I", "Hybrid KL"],
    pros: [
      "Fetch TV design oversight (5 designers) maps directly to frontend BA + UX collaboration",
      "PSPO-I closes the Agile gap — rare credential for a BA candidate",
      "Jira + Confluence Org Admin = strongest possible tool credential",
      "You know the building — no commute surprise, no location risk",
    ],
    cons: [
      "Life insurance domain gap — prep BNM LIFE Framework + policy lifecycle before interview",
      "Capco KL performance reviews are coach-dependent — known cultural quirk",
      "Salary undisclosed — anchor RM12–13K, floor RM11K",
    ],
    highlight: true,
    note: "Best hybrid match. Your Fetch TV UX management + PSPO-I + Jira Org Admin is a rare combination. The insurance domain gap is bridgeable with 2 weeks of prep. Don't go below RM11K for this scope and location.",
  },
  {
    id: 202, title: "Sr Specialist, Business Support (OTC)", company: "Ansell",
    type: "Full-time", salary: "Undisclosed — MNC GBS rates (est. RM12–16K)",
    posted: "May 14, 2026", source: "Indeed MY",
    applyUrl: "https://to.indeed.com/aacjvplkh2tk",
    linkNote: "Opens verified Ansell listing on Indeed MY — Cyberjaya location confirmed",
    location: "Cyberjaya",
    fit: 82, friction: "Low–Med", category: "Ops & Admin",
    tags: ["Business Ops", "OTC Process", "APAC", "Agile", "Hybrid Cyberjaya", "MNC", "Power BI"],
    pros: [
      "Posted May 14 — freshest hybrid listing this refresh",
      "Process improvement + APAC ops + Agile delivery = your DKSH BA scope",
      "GBS/shared services pay bands typically RM12–16K",
      "Flexible and hybrid work model explicitly confirmed",
    ],
    cons: [
      "Cyberjaya location — longer commute from PJ depending on your area",
      "ERP (Oracle/SAP) preferred — flag if no direct experience",
    ],
    highlight: false,
    note: "Legitimate MNC, fresh listing. OTC process improvement is essentially BA work under a different label. ERP preference is not a blocker if you're strong on Agile and process side.",
  },
  {
    id: 203, title: "Business Analyst / Senior Business Analyst", company: "Robert Walters (FS client, KL)",
    type: "Permanent", salary: "From RM90,000/yr — negotiate to RM120K+",
    posted: "Apr 24, 2026", source: "Indeed MY",
    applyUrl: "https://to.indeed.com/aa8xc7fdlggz",
    linkNote: "Opens Robert Walters listing on Indeed — recruitment firm placing into FS client",
    location: "KL",
    fit: 79, friction: "Low–Med", category: "Ops & Admin",
    tags: ["BA", "Financial Services", "Agile", "Mandarin preferred", "Hybrid KL", "Flexible schedule"],
    pros: [
      "Robert Walters is a reputable global recruiter — real role, real FS client",
      "Flexible schedule + health insurance confirmed",
      "Agile 3yr preferred — your PSPO-I covers this",
      "Mandarin preferred — you have this, gives you edge",
    ],
    cons: [
      "Posted salary floor RM7.5K — push to RM10K+ minimum given your background",
      "Banking/insurance domain preferred — same gap as Capco",
      "Ask recruiter the actual client and salary band before applying",
    ],
    highlight: false,
    note: "Robert Walters roles typically place at MNCs that pay above posted minimums. The RM90K floor is a statutory posting requirement — negotiate to RM120K+ (RM10K/mo) given PSPO-I, design management, and Jira admin. Call the recruiter before applying.",
  },
  {
    id: 204, title: "AVP, Senior Business Analyst", company: "Citi (GBC KL)",
    type: "Full-time", salary: "Est. RM15–22K/mo (Citi GBC rates)",
    posted: "Apr 27, 2026", source: "Indeed MY",
    applyUrl: "https://to.indeed.com/aan9t9qfq9dr",
    linkNote: "Opens Citi listing on Indeed — Hybrid KL confirmed, GBC location",
    location: "KL (Citi GBC)",
    fit: 68, friction: "Med", category: "Ops & Admin",
    tags: ["Citi", "Senior BA", "Fund Services", "SDLC", "UAT", "Hybrid KL", "MNC", "Reach role"],
    pros: [
      "Citi GBC is one of the highest-paying hybrid employers in Malaysia",
      "AVP = RM15K+ realistic — significantly clears your floor",
      "SDLC, UAT, stakeholder management — your BA toolkit",
    ],
    cons: [
      "Requires 3+ years fund services: Transfer Agency, Fund Accounting — hard domain gap",
      "People management scope adds friction",
      "Stretch role — apply as a reach, not a primary bet",
    ],
    highlight: false,
    note: "Stretch role. Fund services domain is the hard gap. Citi GBC pays extremely well so worth a try — but go in knowing you're pitching against career fund ops specialists. Your PSPO-I + digital product angle is the differentiation.",
  },
  {
    id: 205, title: "Delivery Manager / Project Manager", company: "Quorum Software",
    type: "Full-time", salary: "Undisclosed — tech company rates",
    posted: "Apr 6, 2026", source: "Indeed MY",
    applyUrl: "https://to.indeed.com/aagqw7wx7h24",
    linkNote: "Opens Quorum Software listing on Indeed — The Gardens South Tower KL, hybrid confirmed",
    location: "The Gardens KL (South Tower)",
    fit: 72, friction: "Med", category: "Ops & Admin",
    tags: ["Project Manager", "Delivery", "Agile", "Waterfall", "SaaS", "Energy", "Hybrid KL"],
    pros: [
      "The Gardens — same building complex as Capco, commute you already know",
      "Agile + Waterfall PM scope — PSPO-I and project delivery applies",
      "SaaS company culture — better than consulting typically",
    ],
    cons: [
      "Energy/oil & gas domain — no background here",
      "Engineering degree preferred — you have Communications",
      "Concurrent project management = medium friction",
    ],
    highlight: false,
    note: "Same building as Capco. Energy domain is the gap but Quorum is a pure SaaS company — they care more about PM delivery methodology. Worth applying if you want PM track.",
  },
  {
    id: 206, title: "Ecommerce / Digital Operations Manager (Search card)", company: "MNCs & tech companies · Klang Valley",
    type: "Full-time", salary: "RM 10,000–18,000",
    posted: "Ongoing", source: "Jobstreet / LinkedIn / Hiredly",
    applyUrl: "https://my.jobstreet.com/jobs-in-kuala-lumpur?workarrangement=2",
    linkNote: "Opens Jobstreet hybrid KL listings — search 'ecommerce operations' or 'digital ops' once there",
    location: "KL / PJ / Subang",
    fit: 85, friction: "Low–Med", category: "Ops & Admin",
    tags: ["Shopee", "Lazada", "TikTok Shop", "Digital Ops", "Hybrid KL/PJ", "MNC", "Active seller"],
    pros: [
      "Your active Shopee seller status is an insider credential most applicants don't have",
      "KL/PJ MNCs — Shopee, Lazada, Zalora, Carsome, Agoda, PropertyGuru — all hire for this",
      "RM12–18K range realistic at MNC level for ecommerce ops manager scope",
    ],
    cons: [
      "Search required — no single verified listing, browse Jobstreet + LinkedIn",
      "Title varies: 'Ecommerce Manager', 'Digital Ops Manager', 'Marketplace Manager'",
      "Paste any specific URL here — I'll vet and draft instantly",
    ],
    highlight: false,
    note: "Deep category in KL/PJ. Your Shopee seller credential + DKSH ops background is a strong combination. Target tech-adjacent companies over traditional retail MNCs for better pay and culture.",
  },
];

const STATUS_COLORS = {
  "Not Applied": { bg: "#f1f5f9", text: "#64748b", border: "#cbd5e1" },
  "Applied":     { bg: "#dbeafe", text: "#1d4ed8", border: "#93c5fd" },
  "Screening":   { bg: "#ede9fe", text: "#6d28d9", border: "#c4b5fd" },
  "Interviewing":{ bg: "#fef3c7", text: "#92400e", border: "#fcd34d" },
  "Negotiating": { bg: "#cffafe", text: "#155e75", border: "#67e8f9" },
  "Offer":       { bg: "#dcfce7", text: "#15803d", border: "#86efac" },
  "Rejected":    { bg: "#fee2e2", text: "#b91c1c", border: "#fca5a5" },
  "Withdrawn":   { bg: "#f1f5f9", text: "#94a3b8", border: "#e2e8f0" },
};

const FRICTION_C = { "Low": "#16a34a", "Low–Med": "#65a30d", "Med": "#d97706", "High": "#dc2626" };
const CAT_COLORS = {
  "Ops & Admin":     { bg: "#dbeafe", text: "#1e40af" },
  "AI & Tech":       { bg: "#ede9fe", text: "#5b21b6" },
  "Automation":      { bg: "#dcfce7", text: "#15803d" },
  "Content & Social":{ bg: "#fce7f3", text: "#9d174d" },
};
const fitC  = (s) => s >= 85 ? "#15803d" : s >= 75 ? "#65a30d" : s >= 65 ? "#d97706" : "#dc2626";
const fitBg = (s) => s >= 85 ? "#dcfce7" : s >= 75 ? "#ecfccb" : s >= 65 ? "#fef3c7" : "#fee2e2";

const INIT_TRACKER = [
  { id: 301, title: "Benefit Operations Analyst – RIDIK",                              status: "Applied",     date: "Wed, 21 May 2026", notes: "Applied via Indeed · 3:45 PM · Resume submitted", source: "Indeed MY" },
  { id: 302, title: "Senior Product/Business Analyst – Gallius Shared Services",        status: "Applied",     date: "Wed, 21 May 2026", notes: "Applied via Indeed · 3:54 PM · Resume submitted", source: "Indeed MY" },
  { id: 303, title: "Frontend BA Life Insurance – Capco (Mid Valley KL)",              status: "Not Applied", date: today, notes: "85% fit · anchor RM12–13K · prep insurance domain first", source: "LinkedIn" },
  { id: 101, title: "CSM EMEA & APAC – Crisp (B2B SaaS)",                             status: "Not Applied", date: today, notes: "USD 55–65K · APAC eligible · verify timezone expectation", source: "Remotive" },
  { id: 102, title: "BA HubSpot Product Owner – GoGlobal",                             status: "Not Applied", date: today, notes: "86% fit · verify APAC eligibility first · PSPO-I differentiator", source: "We Work Remotely" },
  { id: 103, title: "Outlier AI Trainer – English/Malay Evaluator",                    status: "Not Applied", date: today, notes: "Apply at outlier.ai/languages/ms-my · weekly USD pay", source: "Outlier.ai" },
  { id: 104, title: "Workflow Automator Contract – Arc.dev",                           status: "Not Applied", date: today, notes: "Build 1-page GAS portfolio page first", source: "Arc.dev" },
  { id: 105, title: "Sr Specialist Business Support (OTC) – Ansell (Cyberjaya)",       status: "Not Applied", date: today, notes: "Fresh May 14 · MNC rates RM12–16K est.", source: "Indeed MY" },
];

const inp = { background: "#fff", border: "1px solid #d1d5db", borderRadius: 6, padding: "8px 12px", color: "#111827", fontSize: 12, fontFamily: "inherit", outline: "none" };

export default function JobDashboard() {
  const [tracker,   setTracker]   = useState(INIT_TRACKER);
  const [tab,       setTab]       = useState("today");
  const [expandedR, setExpandedR] = useState(1);
  const [expandedH, setExpandedH] = useState(201);
  const [showAdd,   setShowAdd]   = useState(false);
  const [newJob,    setNewJob]    = useState({ title: "", status: "Not Applied", source: "" });
  const [editNote,  setEditNote]  = useState(null);
  const [noteText,  setNoteText]  = useState("");

  const updateStatus = (id, s) => setTracker(t => t.map(j => j.id === id ? { ...j, status: s } : j));
  const saveNote = (id) => { setTracker(t => t.map(j => j.id === id ? { ...j, notes: noteText } : j)); setEditNote(null); };
  const addJob = () => {
    if (!newJob.title.trim()) return;
    setTracker(t => [...t, { id: Date.now(), ...newJob, date: today, notes: "" }]);
    setNewJob({ title: "", status: "Not Applied", source: "" });
    setShowAdd(false);
  };

  const stats = {
    total: tracker.length,
    active: tracker.filter(j => !["Not Applied","Rejected","Withdrawn"].includes(j.status)).length,
    interview: tracker.filter(j => j.status === "Interviewing").length,
    offer: tracker.filter(j => j.status === "Offer").length,
  };

  const NavTab = ({ k, label, badge }) => (
    <button onClick={() => setTab(k)} style={{
      background: tab === k ? "#fff" : "transparent", border: "none",
      borderBottom: tab === k ? "2px solid #4f46e5" : "2px solid transparent",
      cursor: "pointer", whiteSpace: "nowrap", padding: "12px 14px", fontSize: 12,
      fontFamily: "inherit", color: tab === k ? "#4f46e5" : "#6b7280", fontWeight: tab === k ? 600 : 400,
    }}>
      {label}{badge != null ? <span style={{ marginLeft: 4, background: "#e0e7ff", color: "#4f46e5", borderRadius: 20, padding: "1px 6px", fontSize: 10 }}>{badge}</span> : null}
    </button>
  );

  const JobCard = ({ job, expanded, setExpanded }) => (
    <div style={{
      background: "#fff", border: `1px solid ${job.highlight ? "#a5b4fc" : "#e5e7eb"}`,
      borderRadius: 12, overflow: "hidden",
      boxShadow: job.highlight ? "0 0 0 2px #e0e7ff" : "0 1px 3px rgba(0,0,0,.05)",
    }}>
      <div onClick={() => setExpanded(expanded === job.id ? null : job.id)}
        style={{ padding: "15px 18px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6, flexWrap: "wrap" }}>
            {job.highlight && <span style={{ fontSize: 10, background: "#4f46e5", color: "#fff", padding: "2px 9px", borderRadius: 20, fontWeight: 600 }}>⭐ TOP PICK</span>}
            <span style={{ fontSize: 10, background: CAT_COLORS[job.category]?.bg || "#f3f4f6", color: CAT_COLORS[job.category]?.text || "#374151", padding: "2px 9px", borderRadius: 20, fontWeight: 500 }}>{job.category}</span>
            {job.location && <span style={{ fontSize: 10, background: "#fef3c7", color: "#92400e", padding: "2px 9px", borderRadius: 20 }}>📍 {job.location}</span>}
            <span style={{ fontSize: 11, color: "#9ca3af" }}>{job.type} · {job.source} · {job.posted}</span>
          </div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 2 }}>{job.title}</div>
          <div style={{ fontSize: 13, color: "#6b7280" }}>{job.company}</div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ background: fitBg(job.fit), color: fitC(job.fit), borderRadius: 8, padding: "4px 10px", marginBottom: 4, display: "inline-block" }}>
            <span style={{ fontSize: 17, fontWeight: 700 }}>{job.fit}%</span>
            <span style={{ fontSize: 10, marginLeft: 3 }}>fit</span>
          </div>
          <div style={{ fontSize: 11, color: FRICTION_C[job.friction] || "#d97706", marginBottom: 3 }}>⚡ {job.friction}</div>
          <div style={{ fontSize: 11, color: "#374151", fontWeight: 500, maxWidth: 130, textAlign: "right" }}>{job.salary}</div>
        </div>
      </div>

      <div style={{ padding: "0 18px 12px", display: "flex", gap: 5, flexWrap: "wrap" }}>
        {job.tags.map(t => <span key={t} style={{ fontSize: 11, background: "#f3f4f6", color: "#374151", padding: "2px 9px", borderRadius: 20, border: "1px solid #e5e7eb" }}>{t}</span>)}
      </div>

      {expanded === job.id && (
        <div style={{ borderTop: "1px solid #f3f4f6", padding: "15px 18px", background: "#fafafa" }}>
          <div style={{ background: "#eef2ff", borderLeft: "3px solid #4f46e5", padding: "10px 14px", borderRadius: "0 8px 8px 0", marginBottom: 13, fontSize: 13, color: "#3730a3", lineHeight: 1.75 }}>
            {job.note}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 13, marginBottom: 14 }}>
            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, padding: 12 }}>
              <div style={{ fontSize: 10, color: "#15803d", letterSpacing: "0.1em", fontWeight: 600, marginBottom: 7 }}>WHY IT FITS</div>
              {job.pros.map((p, i) => <div key={i} style={{ fontSize: 12, color: "#166534", marginBottom: 5, display: "flex", gap: 7, lineHeight: 1.6 }}><span style={{ color: "#16a34a", flexShrink: 0 }}>✓</span>{p}</div>)}
            </div>
            <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 8, padding: 12 }}>
              <div style={{ fontSize: 10, color: "#c2410c", letterSpacing: "0.1em", fontWeight: 600, marginBottom: 7 }}>WATCH OUTS</div>
              {job.cons.map((c, i) => <div key={i} style={{ fontSize: 12, color: "#9a3412", marginBottom: 5, display: "flex", gap: 7, lineHeight: 1.6 }}><span style={{ color: "#ea580c", flexShrink: 0 }}>!</span>{c}</div>)}
            </div>
          </div>
          {job.linkNote && (
            <div style={{ background: "#f0f9ff", border: "1px solid #bae6fd", borderRadius: 7, padding: "7px 12px", marginBottom: 12, fontSize: 11, color: "#0369a1", display: "flex", gap: 6, alignItems: "flex-start", lineHeight: 1.6 }}>
              🔗 <span>{job.linkNote}</span>
            </div>
          )}
          <div style={{ display: "flex", gap: 9, flexWrap: "wrap" }}>
            <a href={job.applyUrl} target="_blank" rel="noopener noreferrer"
              style={{ background: "#4f46e5", color: "#fff", padding: "9px 18px", borderRadius: 8, textDecoration: "none", fontSize: 13, fontWeight: 600, fontFamily: "inherit" }}>
              Apply / Browse →
            </a>
            <button onClick={() => {
              const key = job.company.split("(")[0].trim().split("·")[0].trim();
              if (!tracker.find(t => t.title.includes(key))) {
                setTracker(t => [...t, { id: Date.now(), title: `${job.title} – ${key}`, status: "Not Applied", date: today, notes: job.location ? `Hybrid · ${job.location}` : "", source: job.source }]);
              }
              setTab("tracker");
            }} style={{ background: "#fff", border: "1px solid #a5b4fc", color: "#4f46e5", padding: "9px 18px", borderRadius: 8, fontSize: 13, cursor: "pointer", fontFamily: "inherit", fontWeight: 500 }}>
              Track This
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", color: "#111827", fontFamily: "'Inter','Segoe UI',sans-serif", fontSize: 14 }}>

      {/* HEADER */}
      <div style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)", padding: "18px 24px 14px", color: "#fff" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
          <div>
            <div style={{ fontSize: 10, opacity: .75, letterSpacing: "0.15em", marginBottom: 4, textTransform: "uppercase" }}>
              Remote + Hybrid KL · RM10K+ floor · {REMOTE_JOBS.length} remote · {HYBRID_JOBS.length} hybrid · {today}
            </div>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>Teng's Job Dashboard</h1>
            <div style={{ fontSize: 11, opacity: .65, marginTop: 3 }}>{tracker.filter(j=>j.status==="Applied").length} applied · {tracker.filter(j=>!["Not Applied","Rejected","Withdrawn"].includes(j.status)).length} active</div>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            {[["Pipeline", stats.total],["Active", stats.active],["Interviews", stats.interview],["Offers", stats.offer]].map(([l,v]) => (
              <div key={l} style={{ textAlign: "center", background: "rgba(255,255,255,0.2)", borderRadius: 10, padding: "7px 14px" }}>
                <div style={{ fontSize: 20, fontWeight: 700 }}>{v}</div>
                <div style={{ fontSize: 9, opacity: .8, letterSpacing: "0.08em" }}>{l.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TABS */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "0 24px", display: "flex", overflowX: "auto", boxShadow: "0 1px 3px rgba(0,0,0,.05)" }}>
        <NavTab k="today"    label="🌐 Remote Picks"   badge={REMOTE_JOBS.length} />
        <NavTab k="hybrid"   label="🏢 Hybrid KL/PJ"   badge={HYBRID_JOBS.length} />
        <NavTab k="tracker"  label="📌 Tracker"         badge={stats.total} />
        <NavTab k="linkedin" label="🔗 Platforms" />
        <NavTab k="criteria" label="🎯 My Criteria" />
        <NavTab k="strategy" label="🧭 Strategy" />
      </div>

      <div style={{ padding: "22px 24px", maxWidth: 920, margin: "0 auto" }}>

        {/* REMOTE TAB */}
        {tab === "today" && (
          <div>
            <div style={{ background: "#f0fdf4", border: "1px solid #86efac", borderRadius: 10, padding: "10px 14px", marginBottom: 14, fontSize: 13, color: "#15803d", display: "flex", gap: 8 }}>
              <span>🔄</span>
              <span><strong>Expanded search — 12 remote roles across 6 role types.</strong> Sources: Remotive, We Work Remotely, Himalayas, Arc.dev, Outlier, LinkedIn, Indeed MY. Two search cards (Jira Admin, Product Ops) for categories where roles rotate fast — paste any URL here to vet.</span>
            </div>
            <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 14 }}>
              {REMOTE_JOBS.length} roles · CSM · BA/PO · RevOps · Automation · Onboarding · AI Trainer · Tech Writer · Jira Admin · Product Ops · Ecommerce
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {REMOTE_JOBS.map(job => <JobCard key={job.id} job={job} expanded={expandedR} setExpanded={setExpandedR} />)}
            </div>
          </div>
        )}

        {/* HYBRID TAB */}
        {tab === "hybrid" && (
          <div>
            <div style={{ background: "#fef3c7", border: "1px solid #fcd34d", borderRadius: 10, padding: "10px 14px", marginBottom: 14, fontSize: 13, color: "#92400e" }}>
              🏢 <strong>Hybrid floor: RM10,000/mo minimum.</strong> All roles Klang Valley — KL, PJ, Cyberjaya. Commute premium applied.
            </div>
            <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 14 }}>
              {HYBRID_JOBS.length} hybrid roles · RM10K+ floor · Verified links where available
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {HYBRID_JOBS.map(job => <JobCard key={job.id} job={job} expanded={expandedH} setExpanded={setExpandedH} />)}
            </div>
          </div>
        )}

        {/* TRACKER */}
        {tab === "tracker" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <div style={{ fontSize: 13, color: "#6b7280" }}>{tracker.length} tracked · {tracker.filter(j=>j.status==="Applied").length} applied</div>
              <button onClick={() => setShowAdd(!showAdd)} style={{ background: "#4f46e5", color: "#fff", border: "none", padding: "8px 15px", borderRadius: 8, fontSize: 13, cursor: "pointer", fontFamily: "inherit", fontWeight: 600 }}>+ Add Job</button>
            </div>

            {showAdd && (
              <div style={{ background: "#fff", border: "1px solid #a5b4fc", borderRadius: 10, padding: 14, marginBottom: 14, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", boxShadow: "0 0 0 3px #e0e7ff" }}>
                <input value={newJob.title}  onChange={e=>setNewJob(j=>({...j,title:e.target.value}))}  placeholder="Job title – Company" style={{...inp,flex:"1 1 160px"}}/>
                <input value={newJob.source} onChange={e=>setNewJob(j=>({...j,source:e.target.value}))} placeholder="Source"             style={{...inp,flex:"0 1 120px"}}/>
                <select value={newJob.status} onChange={e=>setNewJob(j=>({...j,status:e.target.value}))} style={inp}>
                  {Object.keys(STATUS_COLORS).map(s=><option key={s}>{s}</option>)}
                </select>
                <button onClick={addJob} style={{ background: "#16a34a", color: "#fff", border: "none", padding: "9px 16px", borderRadius: 7, cursor: "pointer", fontSize: 13, fontFamily: "inherit", fontWeight: 700 }}>Add</button>
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {tracker.map(job => {
                const sc = STATUS_COLORS[job.status] || STATUS_COLORS["Not Applied"];
                return (
                  <div key={job.id} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, padding: "12px 15px", boxShadow: "0 1px 3px rgba(0,0,0,.04)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, flexWrap: "wrap" }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "#111827", marginBottom: 2 }}>{job.title}</div>
                        <div style={{ fontSize: 11, color: "#9ca3af" }}>{[job.source, job.date].filter(Boolean).join(" · ")}</div>
                      </div>
                      <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
                        <select value={job.status} onChange={e=>updateStatus(job.id,e.target.value)} style={{ background:sc.bg, border:`1px solid ${sc.border}`, color:sc.text, borderRadius:20, padding:"3px 10px", fontSize:11, fontFamily:"inherit", cursor:"pointer", fontWeight:500 }}>
                          {Object.keys(STATUS_COLORS).map(s=><option key={s} style={{background:"#fff",color:"#111827"}}>{s}</option>)}
                        </select>
                        <button onClick={()=>setTracker(t=>t.filter(j=>j.id!==job.id))} style={{ background:"none", border:"none", color:"#d1d5db", cursor:"pointer", fontSize:17, lineHeight:1 }}>×</button>
                      </div>
                    </div>
                    {editNote === job.id ? (
                      <div style={{ marginTop:8, display:"flex", gap:7 }}>
                        <input value={noteText} onChange={e=>setNoteText(e.target.value)} onKeyDown={e=>e.key==="Enter"&&saveNote(job.id)} placeholder="Add note..." style={{...inp,flex:1}} autoFocus/>
                        <button onClick={()=>saveNote(job.id)} style={{ background:"#4f46e5", color:"#fff", border:"none", padding:"7px 13px", borderRadius:6, cursor:"pointer", fontSize:11, fontFamily:"inherit" }}>Save</button>
                        <button onClick={()=>setEditNote(null)} style={{ background:"#f3f4f6", color:"#6b7280", border:"1px solid #e5e7eb", padding:"7px 11px", borderRadius:6, cursor:"pointer", fontSize:11, fontFamily:"inherit" }}>Cancel</button>
                      </div>
                    ) : (
                      <div style={{ marginTop:5, display:"flex", gap:7, alignItems:"center" }}>
                        {job.notes && <span style={{ fontSize:12, color:"#6b7280", background:"#f9fafb", border:"1px solid #e5e7eb", borderRadius:6, padding:"2px 8px" }}>{job.notes}</span>}
                        <button onClick={()=>{setEditNote(job.id);setNoteText(job.notes);}} style={{ background:"none", border:"none", color:"#9ca3af", cursor:"pointer", fontSize:11, fontFamily:"inherit", padding:0, textDecoration:"underline" }}>
                          {job.notes ? "edit note" : "+ note"}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop:18, background:"#fff", border:"1px solid #e5e7eb", borderRadius:12, padding:15, boxShadow:"0 1px 3px rgba(0,0,0,.04)" }}>
              <div style={{ fontSize:11, color:"#9ca3af", fontWeight:600, letterSpacing:"0.1em", marginBottom:12 }}>PIPELINE OVERVIEW</div>
              <div style={{ display:"flex", gap:5, flexWrap:"wrap" }}>
                {Object.entries(STATUS_COLORS).map(([status,sc]) => {
                  const count = tracker.filter(j=>j.status===status).length;
                  return (
                    <div key={status} style={{ flex:"1 1 55px", textAlign:"center", padding:"7px 3px", background:count>0?sc.bg:"#f9fafb", borderRadius:8, border:`1px solid ${count>0?sc.border:"#e5e7eb"}` }}>
                      <div style={{ fontSize:16, fontWeight:700, color:count>0?sc.text:"#d1d5db" }}>{count}</div>
                      <div style={{ fontSize:8, color:count>0?sc.text:"#d1d5db", lineHeight:1.3, marginTop:2, fontWeight:500 }}>{status.toUpperCase()}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* PLATFORMS */}
        {tab === "linkedin" && (
          <div>
            <div style={{ background:"#fef3c7", border:"1px solid #fcd34d", borderRadius:10, padding:13, marginBottom:18, fontSize:13, color:"#92400e" }}>
              ⚠️ LinkedIn blocks scraping. Click searches below to open in browser. Found a role? Paste URL here — I'll vet it and draft your application within the same message.
            </div>
            <div style={{ fontSize:11, color:"#9ca3af", fontWeight:600, letterSpacing:"0.1em", marginBottom:10 }}>LINKEDIN SEARCHES — REMOTE + HYBRID</div>
            <div style={{ display:"flex", flexDirection:"column", gap:7, marginBottom:22 }}>
              {LINKEDIN_SEARCHES.map((s,i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                  style={{ background:"#fff", border:"1px solid #e5e7eb", borderRadius:9, padding:"12px 15px", textDecoration:"none", display:"flex", justifyContent:"space-between", alignItems:"center", gap:10, boxShadow:"0 1px 3px rgba(0,0,0,.04)" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <span style={{ fontSize:9, background: s.tag==="Hybrid" ? "#fef3c7" : "#e0e7ff", color: s.tag==="Hybrid" ? "#92400e" : "#4f46e5", padding:"1px 7px", borderRadius:20, fontWeight:600 }}>{s.tag}</span>
                    <span style={{ fontSize:13, color:"#111827", fontFamily:"inherit" }}>{s.label}</span>
                  </div>
                  <span style={{ fontSize:12, color:"#4f46e5", flexShrink:0, fontWeight:600 }}>Open →</span>
                </a>
              ))}
            </div>
            <div style={{ fontSize:11, color:"#9ca3af", fontWeight:600, letterSpacing:"0.1em", marginBottom:10 }}>ALL PLATFORMS — EXPANDED</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
              {PLATFORMS.map((p,i) => (
                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
                  style={{ background:"#fff", border:"1px solid #e5e7eb", borderRadius:9, padding:"12px 14px", textDecoration:"none", display:"block", boxShadow:"0 1px 3px rgba(0,0,0,.04)" }}>
                  <div style={{ fontSize:13, fontWeight:700, color:p.color, marginBottom:3, fontFamily:"inherit" }}>{p.name}</div>
                  <div style={{ fontSize:11, color:"#9ca3af" }}>{p.note}</div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* CRITERIA */}
        {tab === "criteria" && (
          <div>
            <div style={{ background:"#fff", border:"1px solid #e5e7eb", borderRadius:12, padding:20, marginBottom:14, boxShadow:"0 1px 3px rgba(0,0,0,.04)" }}>
              <div style={{ fontSize:13, fontWeight:700, marginBottom:14 }}>Active Search Criteria</div>
              {CRITERIA.map((c,i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:12, padding:"10px 0", borderBottom:i<CRITERIA.length-1?"1px solid #f3f4f6":"none" }}>
                  <span style={{ fontSize:15 }}>{c.icon}</span>
                  <span style={{ fontSize:13, color:"#374151", flex:1 }}>{c.label}</span>
                  <span style={{ fontSize:11, color:"#16a34a", fontWeight:600 }}>✓</span>
                </div>
              ))}
            </div>
            <div style={{ background:"#fff", border:"1px solid #e5e7eb", borderRadius:12, padding:20, boxShadow:"0 1px 3px rgba(0,0,0,.04)" }}>
              <div style={{ fontSize:13, fontWeight:700, marginBottom:14 }}>Salary Floor Rules</div>
              {[
                ["Remote FT",         "≥ RM8K shown. Undisclosed always shown. USD contracts included."],
                ["Hybrid KL/PJ",      "≥ RM10K — commute premium applied. Non-negotiable."],
                ["Part-time/contract","Any salary — effort-to-reward evaluated separately."],
              ].map(([type,rule]) => (
                <div key={type} style={{ display:"flex", gap:14, fontSize:13, lineHeight:1.7, marginBottom:9, paddingBottom:9, borderBottom:"1px solid #f3f4f6" }}>
                  <span style={{ color:"#4f46e5", minWidth:160, flexShrink:0, fontWeight:500 }}>{type}</span>
                  <span style={{ color:"#6b7280" }}>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STRATEGY */}
        {tab === "strategy" && (
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {[
              { title:"🏆 Priority Stack This Week", bg:"#f0fdf4", border:"#bbf7d0", head:"#15803d", text:"#166534", items:[
                "1. Outlier AI Trainer — apply today if not done, weekly pay, fastest onboarding",
                "2. GoGlobal BA / Product Owner — verify APAC eligibility, then apply immediately (86% fit)",
                "3. Crisp CSM EMEA & APAC — USD 55–65K, APAC eligible, apply this week",
                "4. Capco Frontend BA (Life Insurance) — do insurance domain prep first, then apply",
                "5. Ansell Sr Specialist OTC (Cyberjaya) — fresh MNC listing, apply this week",
              ]},
              { title:"💡 Salary Anchoring by Track", bg:"#eff6ff", border:"#bfdbfe", head:"#1d4ed8", text:"#1e3a5f", items:[
                "Hybrid KL: anchor RM12–13K · floor RM11K · never disclose contract ending July",
                "Remote FT: anchor RM12–13K · floor RM10K · for USD roles ask USD 3K–3.5K/mo",
                "CSM roles: anchor USD 60–65K/yr · geo-adjusted APAC rate may be lower — confirm early",
                "BA/PO roles: PSPO-I + Jira Org Admin justifies top of band — don't undersell",
                "When asked salary: 'I'm targeting RM12–13K based on my experience and scope' — full stop",
              ]},
              { title:"🔍 Platforms You Should Be Checking Weekly", bg:"#fefce8", border:"#fde68a", head:"#92400e", text:"#78350f", items:[
                "Himalayas.app — best for remote roles explicitly open to APAC/Malaysia hiring",
                "Remotive.com — 165K+ vetted remote jobs, filter by Operations / Product / Customer Success",
                "We Work Remotely — high-quality remote only, filter by Business / Management category",
                "Atlassian Community Jobs — check every Monday for Jira/Confluence admin postings",
                "LinkedIn with f_WT=2 (remote) or f_WT=3 (hybrid) filter — paste URL patterns from Platforms tab",
              ]},
              { title:"🚨 Scam Checklist Before Any Application", bg:"#fff7ed", border:"#fed7aa", head:"#c2410c", text:"#7c2d12", items:[
                "Verify on SSM: mydata.ssm.com.my — no record = skip",
                "Work location 'TBC during interview' + relocation package = automatic no",
                "No LinkedIn / Glassdoor / Google footprint = skip",
                "Paste any suspicious URL here — I'll vet in 2 minutes",
              ]},
            ].map(s => (
              <div key={s.title} style={{ background:s.bg, border:`1px solid ${s.border}`, borderRadius:12, padding:18 }}>
                <div style={{ fontSize:14, fontWeight:700, color:s.head, marginBottom:12 }}>{s.title}</div>
                {s.items.map((item,i) => (
                  <div key={i} style={{ fontSize:13, color:s.text, marginBottom:8, display:"flex", gap:10, lineHeight:1.7 }}>
                    <span style={{ minWidth:14, flexShrink:0 }}>→</span>{item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ padding:"12px 24px", borderTop:"1px solid #e5e7eb", textAlign:"center", fontSize:11, color:"#9ca3af", background:"#fff" }}>
        Sources: Remotive · We Work Remotely · Himalayas · Arc.dev · Outlier.ai · Indeed MY · LinkedIn · Jobstreet · Hiredly · Atlassian Community · Refreshed {today}
      </div>
    </div>
  );
}
