// Case study content. Every claim traces to a repo, a published article, or the thesis.

export interface CaseStudy {
  slug: string;
  title: string;
  context: string;
  summary: string;
  decisions: string[];
  tradeoffs: string;
  outcome: string;
  lesson: string;
  stack: string[];
  readMore?: { label: string; href: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "intake-pipeline-rebuild",
    title: "Rebuilding a Fragile Pipeline Without Breaking the Report It Produced",
    context: "Law Offices of Jacob Emrani · 2026 · 596 commits",
    summary:
      "The intake reporting pipeline worked. That was the problem — it worked well enough that the whole intake team had come to depend on it, while running as 2,000 lines of pandas across five modules on a single Windows laptop under Task Scheduler, with a hardcoded OneDrive path. It wasn't broken. It was fragile in ways that only surfaced under pressure.",
    decisions: [
      "Diagnosed the real failure mode before touching anything: a CallRail timeout at 2 AM produced an 8 AM report built on stale data, silently. There was no alerting, no run history, and no way to know the pipeline had run except remoting into the machine and reading a log file.",
      "Replaced the layers one at a time rather than rewriting — dlt for ingestion (~800 lines of pagination, retry, upsert and cursor logic down to ~140 per source), dbt for the ~500 lines of business logic trapped in a single pandas file, Dagster for scheduling that understands dependencies.",
      "Kept writing the domain transformations by hand. Phone normalization, duration parsing, column mapping, and timezone tagging stayed manual because no tool can infer business rules — the plumbing was what dlt absorbed, and the line between the two was drawn deliberately.",
      "Made freshness a gate rather than a hope: the report only fires when the mart was rebuilt after the latest raw load, and only if that raw data is under two hours old. A stale report is worse than a late one, because nobody can tell it's stale.",
      "Held the output byte-identical. Same three sheets, same column names, same formatting — because a migration that changes the deliverable forces every consumer to re-verify their own work, and that cost lands on people who never asked for the migration.",
    ],
    tradeoffs:
      "Four moving systems replaced one script, which is more infrastructure to understand and more surface to operate. Accepted because the old single point of failure was a laptop lid, and because dependency-aware orchestration is the only way to stop a half-failed run from producing a confident, wrong report.",
    outcome:
      "Three sources on 30-minute incremental schedules with run-key deduplication, a medallion lakehouse across four Postgres schemas, four report windows a day, SNS alerting on any failure, and startup validation that fails fast with the full list of missing config rather than dying halfway through a run.",
    lesson:
      "The hardest part of replacing a working system is that its fragility is invisible to everyone except the person maintaining it. You cannot get budget for 'it might break' — you get it by naming the specific silent failure and showing what it already cost.",
    stack: ["Python", "dlt", "dbt", "Dagster", "PostgreSQL", "Terraform", "AWS ECS Fargate", "Streamlit", "GitHub Actions"],
    readMore: {
      label: "I wrote this up in detail on Medium",
      href: "https://medium.com/@msomali/migrating-a-manual-python-pipeline-to-dbt-dagster-without-breaking-reports-8ec9ca5be0d8",
    },
  },
  {
    slug: "rag-in-a-regulated-workflow",
    title: "Shipping RAG Into a Regulated Workflow — the Demo Was the Easy Part",
    context: "Law Offices of Jacob Emrani · 2026 · 41K LOC, 25 tables",
    summary:
      "Before any meaningful action on a case file, somebody has to reload the entire matter into their head — notes, emails, tasks, contacts, medical records. At a real caseload that re-ingestion is the single largest consumer of professional time, and it isn't analysis. It's re-absorbing information that was already written down once. The ask was a one-glance brief that a regulated practice would trust against live client data.",
    decisions: [
      "Kept the sync path completely LLM-free. Document text is extracted with pdfplumber and format-specific parsers, so syncing a thousand matters costs nothing in inference — the model is only invoked where a model is actually required.",
      "Chose pgvector inside the existing Postgres over a dedicated vector database. One system to operate, no incremental SaaS cost, and the migration path to a purpose-built ANN index stays open if scale ever demands it. The decision was made reversible on purpose.",
      "Made milestone summaries deterministic and append-only. The 2/3/6-month reviews anchor their data window to the case creation date rather than to 'now', so regenerating a prior milestone reproduces exactly what the team was looking at then — auditable retrospection instead of a moving target.",
      "Selected model tier per workload rather than globally: the premium model for on-demand briefs, the mini tier for milestone batches and chat. Nobody pays premium prices for routine output.",
      "Built authorization as a proxy over the source system's live access matrix with a TTL cache, instead of maintaining a second permissions model. The tool can never grant access the system of record wouldn't — there is no second ACL to drift.",
      "Treated the audit log as a product feature, not compliance overhead. Every generate, chat, sync and login is recorded with token counts, latency and cost attribution — which is what actually made leadership comfortable pointing an LLM at client files.",
    ],
    tradeoffs:
      "A second, more sophisticated typed knowledge-base pipeline was built to completion and then paused, because it could not yet be shown to beat the simpler path on a golden-case evaluation. Shipping the less clever version was the right call: an unmeasured improvement in a regulated system is a liability, not a feature.",
    outcome:
      "A structured six-section brief in roughly twenty seconds against a review that previously ran to tens of minutes, plus case-scoped Q&A that refuses to answer outside its retrieved context. Cost per brief, per chat turn and per milestone cycle is directly observable in the audit rollup — the unit economics are measured, not asserted.",
    lesson:
      "Guardrails, determinism, and an audit trail are not what make an AI demo impressive. They are the entire difference between a demo and something a regulated team will connect to live client data. The model was never the hard part.",
    stack: ["Python", "FastAPI", "SQLAlchemy 2.0", "PostgreSQL", "pgvector", "OpenAI", "MSAL / MS Graph", "APScheduler", "Pytest"],
  },
  {
    slug: "yolo-traffic-comparison",
    title: "Which YOLO for Real Traffic? Three Models, Three Experiments, No Single Winner",
    context: "M.Sc. thesis · University of North Florida · 2024",
    summary:
      "Off-the-shelf YOLO benchmarks are run on clean, balanced datasets. Urban traffic footage is neither — it has dense vehicle classes, wildly varying light, and weather that degrades exactly when detection matters most. The question wasn't which model scores highest on paper, but which one a city should actually deploy.",
    decisions: [
      "Built the dataset from real FDOT traffic CCTV across six I-295 corridor locations in Jacksonville rather than a public benchmark, so the failure modes under test were the ones a deployment would actually hit.",
      "Escalated the difficulty in three deliberate stages — baseline, then spatial and structural augmentation, then combined environmental variability — so a model's degradation curve was visible rather than a single aggregate score.",
      "Ran every configuration under both AdamW and SGD, because optimizer choice turned out to interact with architecture strongly enough that reporting one would have produced a misleading ranking.",
      "Reported mAP@50, mAP@50-95, recall and F1 separately instead of collapsing to one headline metric — precision and recall diverge sharply between these models, and which one matters depends on whether a missed vehicle or a false detection is the costlier error.",
    ],
    tradeoffs:
      "Real CCTV footage cost significant preprocessing effort and constrained dataset size relative to a public benchmark, and the three-experiment structure multiplied training runs considerably. Both were accepted to keep the conclusion transferable to an actual deployment rather than to a leaderboard.",
    outcome:
      "No single winner, which is the finding. YOLOv8 held the best precision under constrained compute, YOLOv9 the best recall, and YOLOv10 the best F1 once lighting and weather degraded — with YOLOv9 taking mAP@50-95, indicating robustness across IoU thresholds. The contribution is a defensible basis for choosing per deployment.",
    lesson:
      "A comparative study that produces a single winner usually hasn't tested hard enough. The useful output was a decision rule tied to deployment constraints, not a ranking.",
    stack: ["PyTorch", "YOLOv8 / v9 / v10", "Python", "Computer Vision", "Model Evaluation"],
    readMore: { label: "Full thesis on UNF Digital Commons", href: "https://digitalcommons.unf.edu/etd/1305/" },
  },
];
