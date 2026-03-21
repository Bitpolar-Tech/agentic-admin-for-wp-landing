# Agentic Admin for WP

## Your Private AI Admin for WordPress

The first AI-powered site assistant that runs **entirely in your browser**. No cloud. No API keys. No data ever leaves your device.

Ask questions in plain English. Get intelligent diagnostics, maintenance, and security — powered by a local AI that reasons, adapts, and acts.

---

## Why Agentic Admin for WP?

### Your Data Stays Yours
The AI model runs directly in your browser using WebGPU. Zero data transmission to external servers. Zero third-party dependencies. GDPR compliant by design — because there's nothing to comply with when no data ever leaves.

### Zero Cost AI
No GPU servers. No per-request fees. No monthly subscriptions. The AI runs on your own hardware. A capability that would cost $1,000+/month with cloud AI services costs you nothing.

### One-Click Setup
Install the plugin. Open the page. The model downloads once (~1.2 GB) and stays cached. No API keys to configure, no accounts to create, no external services to connect.

### Actually Intelligent
This isn't a scripted chatbot. Agentic Admin for WP uses a ReAct reasoning loop — the AI observes your site, reasons about what it finds, and adapts its approach step by step. Say "my site feels slow" and watch it diagnose the actual cause.

---

## 30+ Built-In Abilities

### Diagnostics
- **Site Health Check** — comprehensive WordPress health status at a glance
- **Error Log Reader** — read and search your debug.log with keyword and severity filters
- **Update Checker** — scan for pending WordPress, plugin, and theme updates
- **Disk Usage** — check wp-content storage consumption
- **OPcache Status** — inspect PHP opcode cache configuration
- **Backup Verification** — confirm your backup plugin is active and recent

### Maintenance
- **Cache Flush** — clear WordPress object cache instantly
- **Database Optimization** — optimize MySQL/MariaDB tables and reclaim space
- **Transient Cleanup** — purge expired or all transients
- **Revision Cleanup** — remove old post revisions (with preview before delete)
- **Rewrite Flush** — regenerate permalink rewrite rules

### Security
- **Security Scan** — audit debug mode, file permissions, and common vulnerabilities
- **Core Checksum Verification** — detect tampered WordPress core files
- **Plugin Checksum Verification** — verify plugin file integrity against WordPress.org
- **Database Malware Scan** — detect injected scripts, base64 payloads, eval calls, rogue cron jobs, suspicious admin accounts, and SEO spam
- **Read-Only SQL Queries** — run SELECT queries safely against your database

### Site Management
- **Plugin Manager** — list, activate, and deactivate plugins by name
- **Theme Browser** — view all installed themes and their status
- **User Directory** — list users with roles and capabilities
- **Content Browser** — browse posts by type, status, and author
- **Comment Statistics** — get discussion metrics at a glance
- **Cron Inspector** — view scheduled events with overdue detection

### Content & Files
- **File Editor** — edit WordPress files with automatic backup before changes
- **Web Search** — search documentation and troubleshooting guides without leaving WordPress
- **Block Browser** — explore available Gutenberg blocks

---

## Pre-Built Workflows

Complex operations, one command.

| Workflow | What It Does | Try Saying |
|----------|-------------|------------|
| **Site Cleanup** | Flush cache, optimize database, check health | "run a full cleanup" |
| **Performance Check** | Health diagnostics + error log review | "check my site performance" |
| **Plugin Audit** | List all plugins + cross-reference with site health | "audit my plugins" |
| **Database Maintenance** | Optimize tables + flush cache | "optimize the database" |
| **Security Audit** | Verify core files, plugin files, and scan database for compromise | "am I hacked?" |

Each workflow runs multiple abilities in sequence, with conditional steps that adapt based on what each step discovers.

---

## How It Works

```
You type: "Something is wrong with my site"
    |
    v
Message Router analyzes your intent
    |
    v
ReAct Agent starts reasoning:
    |
    +-- Step 1: "Let me check site health first"
    |   Result: Database is 2.5 GB, no cache configured
    |
    +-- Step 2: "Large database — let me optimize it"
    |   Result: Optimized 15 tables, freed 125 MB
    |
    +-- Step 3: "Let me check for errors too"
    |   Result: No critical errors in debug.log
    |
    v
AI summarizes: "Your database was bloated at 2.5 GB.
I optimized 15 tables and freed 125 MB. No errors
found. Consider setting up object caching."
```

The AI decides what to do based on what it discovers — not from a fixed script.

---

## Powered by Local AI

### Qwen 3 1.7B (Default)
- ~1.2 GB download (one-time, cached)
- 2-3 second response times
- Native function calling
- 93% end-to-end accuracy on WordPress tasks

### Qwen 2.5 7B (Optional)
- ~4.5 GB download
- 32K token context window
- Enhanced multi-step reasoning
- 96% end-to-end accuracy

### Service Worker Persistence
The model stays loaded in GPU memory across page navigations. Navigate from Posts to Settings to Plugins — the AI is instantly available on every page. No reloading, no waiting.

---

## Thinking Out Loud

Watch the AI reason in real time. Thinking blocks stream live in the chat, showing you exactly how the AI arrives at its decisions. Full transparency into the reasoning process — no black box.

When the intent is clear ("flush the cache"), thinking is automatically skipped for faster execution.

---

## Built on WordPress Standards

Agentic Admin for WP is built on the **WordPress Abilities API** introduced in WordPress 6.9. It's not a parallel system bolted onto WordPress — it's a native integration.

- WPCS 3.x compliant PHP
- WordPress ESLint + Prettier JavaScript
- REST API endpoints following WordPress conventions
- Compatible with WordPress multisite

### Extensible by Design

Third-party plugins can register their own abilities:

```php
register_agentic_ability( 'my-plugin/my-ability', array(
    'label'       => 'My Custom Ability',
    'description' => 'Does something useful',
    'callback'    => 'my_ability_callback',
    'input_schema' => array( /* ... */ ),
) );
```

The AI automatically discovers and can invoke any registered ability. No router changes, no manifest updates — just register and go.

---

## Safe by Default

- **Confirmation required** for all destructive actions (deactivating plugins, deleting revisions, editing files)
- **Automatic backups** before file modifications
- **Read-only database queries** — only SELECT, SHOW, and DESCRIBE allowed
- **10-iteration safety limit** on reasoning loops
- **Repeated call detection** prevents the AI from getting stuck

---

## Works Without WebGPU Too

No compatible GPU? No problem. Configure an external OpenAI-compatible provider as a fallback. Or connect to a local Ollama instance on your network. The plugin adapts to your setup.

---

## Compare

| | Agentic Admin for WP | Cloud AI Assistants | WP-CLI Scripts |
|---|---|---|---|
| **Privacy** | 100% local | Data sent to cloud | Local but no reasoning |
| **Cost** | Free | $20+/month | Free but manual |
| **Setup** | One click | API keys, accounts | Terminal knowledge |
| **Reasoning** | Adaptive (ReAct) | Yes | None (rigid scripts) |
| **WordPress Native** | Abilities API | Generic | CLI only |
| **Extensible** | Plugin API | No | Limited |
| **Multi-Step** | Automatic workflows | Manual prompting | Manual scripting |
| **Accessible From** | Any admin page | Separate app | Terminal |

---

## Requirements

- WordPress 6.9+
- PHP 8.2+
- Modern browser with WebGPU (Chrome 113+, Edge 113+)
- Pretty permalinks enabled

---

## Try It Now

Launch a live demo instantly in WordPress Playground — no installation required:

[Open in WordPress Playground](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/pluginslab/wp-agentic-admin/main/.playground/blueprint.json)

---

## Get Started

1. Upload and activate the plugin
2. Click **Agentic Admin for WP** in the admin menu
3. Wait for the one-time model download
4. Type your first question: *"check my site health"*

That's it. Your private AI admin is ready.

---

## Open Source

GPL-2.0-or-later. View the source, contribute, or extend it.

[GitHub Repository](https://github.com/pluginslab/wp-agentic-admin)
