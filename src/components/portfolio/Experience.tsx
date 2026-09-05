import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    company: "Law Offices of Jacob Emrani",
    short: "Jacob Emrani",
    role: "Senior Data & AI Engineer",
    priorRole: "Data Engineer (Dec 2025 — Feb 2026)",
    period: "Dec 2025 — Present",
    location: "Los Angeles, CA",
    summary:
      "Hired as the firm's first dedicated data practitioner. I started with an empty cloud account and now own the platform end to end — ingestion, orchestration, the lakehouse, and every AI and BI product running on top of it.",
    points: [
      "Built the data platform from zero: PySpark, Dagster, dbt, and Kafka pipelines moving 15K+ records a day out of two CRMs, with 5+ external systems integrated through FastAPI services, landing in a medallion lakehouse on AWS S3 and RDS.",
      "Made that lakehouse the firm's single source of truth — speed-to-lead, call center performance, and case pipeline analytics, surfaced through Power BI and Streamlit dashboards that retired the manual spreadsheet reporting every department used to run on.",
      "Shipped an AI Case Summary Assistant over thousands of legal documents, turning file review that took attorneys hours into context-aware summaries they can read before a call.",
      "Built an AI intake dialer — an agent layer handling 500+ concurrent client inquiries end to end: engagement, lead qualification, callback recovery, and a clean handoff to a human the moment the conversation needs one.",
      "Trained and deployed a computer vision model at 92% accuracy that reads intake documents and triages case severity, removing a manual sorting step from the front door of the business.",
      "Built predictive marketing models that cut client acquisition cost by 35% and lifted lead conversion 28% through data-driven audience segmentation.",
      "Set the data quality standards, validation gates, and KPI definitions the platform is measured against — the same numbers leadership now uses for staffing, capacity planning, and budget decisions.",
    ],
    stack: [
      "PySpark",
      "Dagster",
      "dbt",
      "Kafka",
      "FastAPI",
      "AWS S3 / RDS",
      "GenAI Agents",
      "PyTorch",
      "Power BI",
      "Streamlit",
    ],
  },
  {
    company: "Upendo Kwanza Inc.",
    short: "Upendo Kwanza",
    role: "Data Analyst",
    period: "Jan 2025 — Dec 2025",
    location: "Jacksonville, FL · Nonprofit",
    summary:
      "A nonprofit running three student programs on spreadsheets and guesswork. I gave them a reporting stack and a portal, so staff could act on a student's situation while there was still time to change it.",
    points: [
      "Engineered automated Python and SQL ETL over 10K+ student records across three programs, cutting dashboard refresh from 4 hours to 45 minutes and eliminating the manual monthly reporting cycle — roughly 35 hours a month handed back to program staff.",
      "Built a Next.js and FastAPI analytics portal serving live engagement metrics to 200+ staff, letting program teams flag at-risk students 50% faster than the old review process.",
      "Established data quality checks that caught 95% of anomalies before they reached a report, which is what made leadership trust the numbers enough to act on them.",
      "Delivered Power BI dashboards tracking 15+ KPIs across engagement, program performance, and student outcomes — the reporting layer the organization now uses in funder conversations.",
    ],
    stack: ["Python", "SQL", "PostgreSQL", "FastAPI", "Next.js", "Power BI", "ETL"],
  },
  {
    company: "Community First Credit Union",
    short: "Community First CU",
    role: "IT Analyst / Programmer",
    period: "Jun 2024 — Oct 2024",
    location: "Jacksonville, FL · Internship",
    summary:
      "My first exposure to writing software where a bug is a compliance event. Everything I built here had to be auditable, accurate, and defensible in a regulated financial environment.",
    points: [
      "Built .NET applications processing 5,000+ daily loan transactions at 99.8% accuracy, improving loan approval speed by 30% across critical member-facing workflows.",
      "Wrote validation scripts that surfaced $150K+ in potential processing errors within four months — risk caught before it reached members or regulators.",
      "Automated 12 recurring SQL reports, removing 25 hours per week of manual extraction and freeing the analyst team for work that actually needed judgment.",
      "Deployed Power Automate workflows across three business units, cutting operational overhead by 40% and redirecting staff time toward member service.",
    ],
    stack: ["C# / .NET", "SQL Server", "T-SQL", "Power Automate", "Power BI"],
  },
  {
    company: "University of North Florida",
    short: "UNF",
    role: "Graduate Research Assistant",
    period: "Aug 2023 — Dec 2024",
    location: "Jacksonville, FL",
    summary:
      "Data engineering for a $3M multi-institution transportation research program — where the pipelines had to be reproducible enough that another university could rerun them and get the same answer.",
    points: [
      "Built PySpark and Airflow pipelines ingesting 250+ GB of traffic data from 5 research sites into a PostgreSQL warehouse serving 50+ concurrent analytical queries, cutting processing time by 60%.",
      "Developed YOLO computer vision models over 100K+ traffic images, producing vehicle classification and movement insights that fed directly into municipal planning decisions — and into published work on YOLOv8/v9/v10 improvements for traffic analysis.",
      "Built an automated ML evaluation framework that compressed experiment cycles from 8 hours to 90 minutes, letting the team test more ideas per week than the manual process ever allowed.",
      "Designed normalized schemas and automated reporting so analytical output stayed reproducible and shareable across partner institutions — a hard requirement for federally funded research.",
    ],
    stack: ["PySpark", "Airflow", "PostgreSQL", "PyTorch", "YOLO", "Python", "MLOps"],
  },
  {
    company: "Supernova Hub",
    short: "Supernova Hub",
    role: "Lead Frontend Software Engineer",
    period: "Jul 2022 — Apr 2024",
    location: "Milan, Italy · Remote",
    summary:
      "Where the engineering fundamentals came from: shipping real products to real users on a release cadence, and owning the delivery pipeline that made that cadence possible.",
    points: [
      "Delivered Flutter applications to 100K+ users across iOS and Android, introducing a modular architecture that improved app performance by 20% and made the codebase safe for several engineers to work in at once.",
      "Architected Azure DevOps CI/CD with Docker and Fastlane, cutting release cycles by 30% and turning deployment from an event into a routine across multiple concurrent product lines.",
      "Integrated real-time analytics and AI-driven features into shipped products, giving product teams the usage visibility they needed to make roadmap calls from data instead of opinion.",
      "Led the frontend team through code review and pair programming, raising the quality bar and measurably reducing defects across releases.",
      "Worked asynchronously with European clients across time zones — the written communication and documentation discipline that has carried into every role since.",
    ],
    stack: ["Dart / Flutter", "TypeScript", "Azure DevOps", "Docker", "Fastlane", "CI/CD"],
  },
  {
    company: "Zutrax Systems Limited",
    short: "Zutrax",
    role: "Senior Software Engineer",
    priorRole: "Software Developer (May 2016 — Dec 2019)",
    period: "May 2016 — Jul 2023",
    location: "Dar es Salaam, Tanzania",
    summary:
      "Seven years at a Tanzanian software company building for government and financial clients. This is where I learned what production means when the user base is a country and there is no rolling back a bad release quietly.",
    points: [
      "Built the backend for a national socio-economic databank with digital ID verification serving 5M+ citizens, improving system accuracy by 60% through REST API integration across government registries.",
      "Architected the migration from monolithic systems to microservices on Docker and Kubernetes, cutting deployment time by 50% and improving system reliability by 25%.",
      "Built ETL pipelines processing 1M+ records daily with automated compliance reporting, serving government platforms at 99.9% uptime — the constraint that taught me data quality is an operational concern, not a cleanup step.",
      "Designed Oracle and SQL Server data warehouses tuned to absorb 50GB+ of daily ingestion, and delivered web and mobile applications handling 50K+ daily requests at sub-200ms response times.",
      "Mentored the engineering team on AWS and Python practice, building reusable libraries that were adopted across five internal projects.",
      "Owned the full lifecycle — requirements through production deployment — for backend systems supporting 3M+ end users.",
    ],
    stack: ["Python", "T-SQL", "Oracle", "SQL Server", "Docker", "Kubernetes", "AWS", "GitHub Actions", "Microservices"],
  },
  {
    company: "I-TECH",
    short: "I-TECH",
    role: "ICT Consultant",
    period: "Apr 2017 — Sep 2020 · Nov 2021 — Jul 2023",
    location: "Dar es Salaam, Tanzania · Public health",
    summary:
      "Consulting for the International Training and Education Center for Health, across two engagements. The role where security and data governance stopped being abstract — the records in question were patients'.",
    points: [
      "Performed vulnerability assessments and penetration testing across health information systems, then implemented the controls that came out of the findings.",
      "Designed data collection tools and analysis systems for health information projects, with data integrity and access control treated as first-order requirements rather than later hardening.",
      "Ran security awareness training and maintained the information security policies applied across organizational systems.",
      "Managed Windows servers, network storage, and payment systems supporting international health programs.",
    ],
    stack: ["Security Assessment", "Penetration Testing", "Data Governance", "Windows Server", "Health Information Systems"],
  },
  {
    company: "Infosys IPS",
    short: "Infosys IPS",
    role: "Systems Engineer",
    period: "Aug 2015 — Aug 2016",
    location: "Dar es Salaam, Tanzania",
    summary:
      "Where it started. Frontline systems work — and the first time I made a manual process disappear instead of doing it faster.",
    points: [
      "Deployed WinPE server automation that took OS installation from 8 machines a day to 80 — a 10x throughput gain from removing one manual step, and the lesson I have been repeating ever since.",
      "Provided technical support and network troubleshooting across client systems, driving a measurable improvement in customer satisfaction through systematic optimization rather than one-off fixes.",
    ],
    stack: ["Windows Server", "WinPE", "Networking", "Systems Administration"],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id="experience" className="section-padding max-w-4xl mx-auto">
      <SectionHeading number="02" title="Where I've Worked" />

      <div className="flex flex-col md:flex-row gap-0 md:gap-8">
        {/* Tabs */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border shrink-0">
          {experiences.map((e, i) => (
            <button
              key={e.company}
              onClick={() => setActive(i)}
              className={`px-5 py-3 text-sm font-mono text-left whitespace-nowrap transition-all border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px ${active === i
                ? "text-primary border-primary bg-primary/5"
                : "text-muted-foreground border-transparent hover:text-foreground hover:bg-secondary/50"
                }`}
            >
              {e.short}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="pt-6 md:pt-0 min-w-0"
        >
          <h3 className="text-lg font-semibold text-foreground">
            {exp.role} <span className="text-primary">@ {exp.company}</span>
          </h3>
          <p className="font-mono text-xs text-muted-foreground mt-1.5">
            {exp.period} · {exp.location}
          </p>
          {exp.priorRole && (
            <p className="font-mono text-xs text-primary/80 mt-1">
              ↑ Promoted from {exp.priorRole}
            </p>
          )}

          <p className="mt-4 mb-5 text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-4">
            {exp.summary}
          </p>

          <ul className="space-y-3">
            {exp.points.map((p, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary mt-1.5 shrink-0">▹</span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {exp.stack.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-2 py-1 rounded border border-primary/20 bg-primary/5 text-primary/90"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
