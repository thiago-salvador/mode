# Mode Project Documentation Index

**Last Updated:** 2024-12-02  
**Project Location:** `/Users/thiagosalvador/Documents/Apps/Mode/`

---

## Quick Links

| Document | Path | Purpose |
|----------|------|---------|
| Landing Page | [index.html](/Users/thiagosalvador/Documents/Apps/Mode/index.html) | Production landing page |
| README | [README.md](/Users/thiagosalvador/Documents/Apps/Mode/README.md) | Technical documentation |

---

## Specifications

| Document | Path | Description |
|----------|------|-------------|
| Landing Page Spec | [mode-landing-spec.json](./mode-landing-spec.json) | Source of truth for landing page content, theme, and structure |
| Available Tools | [available-tools-reference.md](./available-tools-reference.md) | Reference for development tools |

---

## Architecture Decision Records (ADR)

| ADR | Title | Status | Date |
|-----|-------|--------|------|
| [ADR-001](./adr/ADR-001-single-file-architecture.md) | Single-File HTML Architecture | Accepted | 2024-12-02 |

---

## Task History

Chronological record of all implementation tasks with full traceability.

| Date | Task | Status | Document |
|------|------|--------|----------|
| 2024-12-02 | Mode Landing Page Implementation | COMPLETED | [View Record](./task-history/2024-12-02_MODE-LANDING-PAGE-IMPLEMENTATION.md) |

---

## Project Structure

```
/Users/thiagosalvador/Documents/Apps/Mode/
├── index.html                    # Landing page (React + Tailwind)
├── README.md                     # Technical documentation
└── docs/
    ├── INDEX.md                  # This file
    ├── mode-landing-spec.json    # Content specification
    ├── available-tools-reference.md
    ├── adr/
    │   └── ADR-001-single-file-architecture.md
    └── task-history/
        └── 2024-12-02_MODE-LANDING-PAGE-IMPLEMENTATION.md
```

---

## Search Tags

Common search terms for this documentation:

- `#landing-page` - Landing page implementation
- `#react` - React components
- `#tailwind` - Tailwind CSS styling
- `#glass-morphism` - Visual design style
- `#single-file` - Architecture decision
- `#rollback` - Rollback procedures
- `#form` - Contact form implementation
- `#responsive` - Mobile-first design
- `#pricing` - Pricing section
- `#faq` - FAQ accordion

---

## Rollback Quick Reference

### Complete Landing Page Rollback
```bash
rm /Users/thiagosalvador/Documents/Apps/Mode/index.html
rm /Users/thiagosalvador/Documents/Apps/Mode/README.md
# JSON spec remains at docs/mode-landing-spec.json for regeneration
```

### Regeneration
Landing page can be regenerated from `docs/mode-landing-spec.json` at any time.

---

## Contact

- Project Email: hello@modemvp.studio
- Documentation maintained by: Development Team
