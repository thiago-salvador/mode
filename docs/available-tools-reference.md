# Mode Project - Available Tools Reference

## MCP Servers

### memory
**Purpose:** Knowledge graph for persistent memory across sessions
**Tools:**
- `create_entities` - Create entities in knowledge graph
- `create_relations` - Create relations between entities
- `add_observations` - Add observations to entities
- `delete_entities`, `delete_observations`, `delete_relations` - Remove from graph
- `read_graph` - Read entire knowledge graph
- `search_nodes` - Search for nodes by query
- `open_nodes` - Open specific nodes by name

**When to use:** Store project decisions, architecture patterns, important learnings, and context that should persist across sessions.

---

### filesystem
**Purpose:** Advanced file operations with filtering and batch processing
**Tools:**
- `read_text_file`, `read_media_file`, `read_multiple_files` - Read files
- `write_file` - Create/overwrite files
- `edit_file` - Line-based edits with git-style diff
- `create_directory` - Create directories
- `list_directory`, `list_directory_with_sizes` - List contents
- `directory_tree` - Recursive tree view as JSON
- `move_file` - Move/rename files
- `search_files` - Recursive pattern search
- `get_file_info` - File metadata
- `list_allowed_directories` - Show accessible directories

**When to use:** Batch file operations, complex directory traversal, when native tools need advanced filtering.

---

### serena
**Purpose:** Advanced code navigation and manipulation via Language Server Protocol
**Tools:**
- `list_dir`, `find_file` - File system navigation
- `search_for_pattern` - Search code patterns
- `get_symbols_overview` - Symbol table overview
- `find_symbol` - Find symbol definitions
- `find_referencing_symbols` - Find symbol references
- `replace_symbol_body` - Replace function/class bodies
- `insert_after_symbol`, `insert_before_symbol` - Insert code at symbols
- `replace_regex` - Regex-based replacements
- `restart_language_server` - Restart LSP
- `write_memory`, `read_memory`, `list_memories`, `delete_memory` - Serena's memory
- `onboarding`, `check_onboarding_performed` - Setup checks
- `think_about_*` - Reflection tools

**When to use:** Symbol-based refactoring, finding all references, precise code navigation, replacing function implementations.

---

### context7
**Purpose:** Fetch up-to-date documentation for libraries and frameworks
**Tools:**
- `resolve-library-id` - Find library by name
- `get-library-docs` - Get documentation

**When to use:** Before implementing features with external libraries, when unsure about API changes, to get current best practices.

---

### sequential-thinking
**Purpose:** Dynamic problem-solving through structured thought process
**Tools:**
- `sequentialthinking` - Multi-step reasoning with revision capabilities

**When to use:** Complex problems requiring multiple steps, planning with room for course correction, hypothesis generation and verification.

---

### ide
**Purpose:** VS Code integration for diagnostics and code execution
**Tools:**
- `getDiagnostics` - Get language diagnostics
- `executeCode` - Execute Python in Jupyter kernel

**When to use:** Check for TypeScript/linting errors, execute Python code in notebooks.

---

### everything
**Purpose:** Testing and demonstration MCP server
**Tools:** echo, add, longRunningOperation, printEnv, sampleLLM, getTinyImage, etc.

**When to use:** Testing MCP functionality, debugging server configuration.

---

## Specialized Agents

### Code Quality & Architecture

#### ios-architect
**When to use:** iOS architecture decisions, MVVM implementation, Core Data/SwiftData integration, project structure organization
**Proactive:** Use when adding iOS features or reviewing iOS code structure

#### code-quality-reviewer
**When to use:** Review code for quality, security, maintainability
**Proactive:** Use immediately after writing or modifying any code

#### systematic-debugger
**When to use:** Errors, crashes, test failures, unexpected behavior
**Proactive:** Use for any runtime exceptions, failed tests, or UI glitches

#### multi-perspective-analyzer
**When to use:** Comprehensive analysis from multiple expert viewpoints (factual, senior eng, security, consistency)
**Proactive:** Use for complex problems, system designs, technical decisions

#### database-performance-optimizer
**When to use:** Query optimization, index design, schema improvements, data-related performance bottlenecks
**Proactive:** Use when working with database-intensive features or detecting performance issues

---

### Development & Implementation

#### swift-ui-developer
**When to use:** SwiftUI views, reactive ViewModels with Combine, VisionKit scanning/OCR, accessibility compliance
**Use for:** Creating responsive interfaces, animations, state management, camera/scanner functionality

#### tdd-test-specialist
**When to use:** Create/review/maintain TDD tests for iOS Swift applications
**Proactive:** Use after implementing new features or modifying functionality

#### api-integrator
**When to use:** External API/database integration, networking layers, caching strategies, offline-first architectures
**Specialty:** Brazilian product databases, URLSession implementations

#### barcode-scanner-debugger
**When to use:** Issues with barcode identification, search, matching functionality
**Use for:** Fixing search logic, improving matching accuracy, handling OCR/camera errors

#### payment-integration-specialist
**When to use:** Payment processing, payment gateways (Stripe, PayPal, Square), checkout flows, subscriptions
**Proactive:** Use whenever payment/billing/subscription features are developed

---

### Planning & Strategy

#### Explore
**When to use:** Quickly find files by patterns, search code for keywords, answer codebase questions
**Thoroughness levels:** quick, medium, very thorough
**Proactive:** Use instead of Glob/Grep for open-ended codebase exploration

#### Plan
**When to use:** Design implementation plans for tasks
**Returns:** Step-by-step plans, critical files, architectural trade-offs

#### product-strategist
**When to use:** Strategic consultation, MVP scoping, feature prioritization, stakeholder alignment
**Perfect for:** Trade-offs, risks, roadmaps, product vision

#### task-master-pro
**When to use:** Transform PRDs into detailed task flows with dependencies
**Use for:** Orchestrating workflows, expanding tasks, tracking progress, automating workflows

#### task-orchestrator
**When to use:** Complex tasks requiring multiple steps/agents, breaking down large projects
**Use for:** Multi-faceted tasks, coordination between agents/MCPs

---

### Documentation & Content

#### memory-recorder
**When to use:** Create comprehensive documentation and audit trails for tasks/PRs/changes
**Proactive:** Use at beginning of significant work for traceability, debugging, rollbacks

#### ios-doc-generator
**When to use:** Create/update/synthesize iOS technical documentation (README, setup guides, contributing)
**Proactive:** Use when features/workflows change significantly

#### prd-writer
**When to use:** Create/review/refine Product Requirements Documents from ideas/briefings/feedback
**Use for:** Transforming vague concepts into comprehensive, actionable documentation

#### content-marketer
**When to use:** Marketing content, blog posts, social media, email newsletters, SEO content
**Proactive:** Use for product launches or social media mentions

#### ux-copy-assistant
**When to use:** Review/create/improve user-facing text in app interface
**Use for:** Alerts, titles, buttons, empty states, error messages, onboarding flows

---

### Project Organization

#### project-organizer
**When to use:** Analyze and reorganize project file structure
**Use after:** Significant development, before releases, when onboarding new team members

#### legacy-auditor
**When to use:** Comprehensive audit for obsolete code, duplications, dead code, unused modules, outdated dependencies
**Perfect for:** Pre-release cleanup, codebase maintenance

#### code-fix-applier
**When to use:** List of code issues from reviewers that need automatic fixing
**Use for:** Applying corrections from code review feedback systematically

---

### UI/UX Specialists

#### ui-layout-architect
**When to use:** Design/wireframe/implement professional UIs, ASCII wireframes, select UI libraries, establish design systems
**Perfect for:** Creating production-ready interfaces with accessibility and i18n

#### ui-front-implementer
**When to use:** Transform UI specs from ui-layout-architect into production code
**Use after:** Wireframes and design tokens are ready

#### frontend-ux-specialist
**When to use:** Frontend development, UI/UX decisions, performance optimization, accessibility improvements
**Use for:** Responsive layouts, interactive components, rendering optimization, WCAG compliance

---

### Specialized Utilities

#### claude-code-guide
**When to use:** Questions about Claude Code features, SDK architecture, how to use features
**Important:** Check for running/completed claude-code-guide agent to resume before spawning new one

#### prompt-optimization-expert
**When to use:** Create/refine/optimize prompts for LLMs, design system prompts, improve prompt performance
**Use for:** Prompt engineering patterns (few-shot, chain-of-thought, etc.)

---

## Skills

### algorithmic-art
**When to use:** Creating algorithmic/generative art using p5.js with seeded randomness

### brand-guidelines
**When to use:** Apply Anthropic's brand colors and typography to artifacts

### canvas-design
**When to use:** Create visual art in PNG/PDF using design philosophy (posters, art, designs)

### frontend-design
**When to use:** Create distinctive, production-grade frontend interfaces with high design quality

### internal-comms
**When to use:** Write internal communications (status reports, updates, newsletters, FAQs)

### mcp-builder
**When to use:** Creating MCP servers (Python FastMCP or Node/TypeScript MCP SDK)

### skill-creator
**When to use:** Create new skills or update existing skills

### slack-gif-creator
**When to use:** Create animated GIFs optimized for Slack

### theme-factory
**When to use:** Style artifacts with themes (10 pre-set themes or generate new ones)

### web-artifacts-builder
**When to use:** Create elaborate multi-component HTML artifacts with React, Tailwind, shadcn/ui

### webapp-testing
**When to use:** Test local web apps using Playwright (verify functionality, debug UI, screenshots)

---

## Tool Selection Priority

### For Codebase Exploration
1. **Task(Explore)** - Primary choice for open-ended exploration
2. **serena** - For symbol-based navigation and refactoring
3. **Glob/Grep** - Only for specific needle queries

### For Code Changes
1. **Edit** - Simple changes in known files
2. **serena** - Symbol-based refactoring across multiple files
3. **MultiEdit** - Multiple edits in multiple files

### For Documentation Lookup
1. **context7** - Up-to-date library documentation
2. **WebFetch** - General web documentation
3. **WebSearch** - When URL unknown

### For Planning
1. **EnterPlanMode** - Complex tasks with multiple approaches
2. **Task(Plan)** - Software architecture planning
3. **Task(product-strategist)** - Strategic product decisions
4. **TodoWrite** - Simple task tracking

### For Memory & Context
1. **memory** MCP - Persistent cross-session knowledge
2. **Task(memory-recorder)** - Audit trails for significant work
3. **serena memory tools** - Serena-specific context

---

## Token Economy Rules (CRITICAL)

1. **ALWAYS** parallelize independent tool calls in single message
2. **ALWAYS** filter/process data in code before returning to model
3. **ALWAYS** use Task(Explore) for codebase exploration instead of direct Glob/Grep
4. **NEVER** pass large raw data through context multiple times
5. **ALWAYS** use memory-recorder for significant decisions/progress
6. **ALWAYS** read context7 documentation before implementing features
7. **ALWAYS** limit sessions to single-feature work
8. **ALWAYS** execute explicit tests after completing tasks
9. **ALWAYS** orchestrate 3+ dependent tool calls in code blocks, not sequential calls
10. **NEVER** create simplified versions - always implement fully
