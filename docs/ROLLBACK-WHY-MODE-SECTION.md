# 🔄 Rollback Guide - Why Mode Section Redesign

**Created:** 2025-12-08
**Purpose:** Instructions to revert the new "Why Mode" section back to the original Comparison section
**Backup Location:** `/src/components/sections/.backups/`

---

## 📸 Current State Snapshot (Before Changes)

### Files Modified
1. `/src/components/sections/comparison.tsx` → Will be replaced with `why-mode.tsx`
2. `/src/app/page.tsx` → Import statement changed
3. `/src/lib/content.ts` → New content added for Why Mode section

### Page Structure (Before)
```tsx
<Hero />
<MetricsStrip />
<BenefitCards />
<Comparison />          ← THIS WILL BE REPLACED
<ProcessTimeline />
<WorkShowcase />
<Pricing />
<Testimonials />
<About />
<FAQs />
<FinalCTA />
<Footer />
```

---

## 🔙 How to Rollback (Step-by-Step)

### Option A: Quick Rollback (Recommended)

1. **Restore the backup comparison component:**
   ```bash
   cd /Users/thiagosalvador/Documents/Apps/Mode/mode-landing
   cp src/components/sections/.backups/comparison.tsx.backup src/components/sections/comparison.tsx
   ```

2. **Update page.tsx to use Comparison instead of WhyMode:**
   ```bash
   # Edit src/app/page.tsx
   # Change the import from:
   # import { WhyMode } from "@/components/sections/why-mode";
   # Back to:
   # import { Comparison } from "@/components/sections/comparison";

   # And in the JSX, change:
   # <WhyMode />
   # Back to:
   # <Comparison />
   ```

3. **Remove the new why-mode component:**
   ```bash
   rm src/components/sections/why-mode.tsx
   ```

4. **Restart dev server:**
   ```bash
   npm run dev
   ```

### Option B: Manual Rollback

If backup file is missing, here's the original `comparison.tsx` code:

<details>
<summary>📄 Click to see original comparison.tsx code</summary>

```tsx
"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";
import { Check, X } from "lucide-react";
import { content } from "@/lib/content";

export function Comparison() {
    return (
        <section className="section-padding">
            <div className="max-w-5xl mx-auto container-padding">
                <FadeIn>
                    <SectionHeader
                        eyebrow={content.comparison.eyebrow}
                        title={content.comparison.title}
                        className="mb-16"
                    />
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Traditional Way */}
                    <FadeIn delay={0.1}>
                        <div className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50">
                            <h3 className="text-xl font-bold text-gray-400 mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                    <X className="w-4 h-4" />
                                </span>
                                Traditional Agency
                            </h3>
                            <div className="space-y-6">
                                {content.comparison.features.map((feature, i) => (
                                    <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                        <span className="text-gray-500 font-medium">{feature.name}</span>
                                        <span className="text-gray-600 font-semibold text-right">{feature.traditional}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Mode Way */}
                    <FadeIn delay={0.2}>
                        <GlassCard className="p-8 relative overflow-hidden ring-1 ring-accentFrom/20 shadow-2xl shadow-accentFrom/10">
                            <h3 className="text-2xl font-bold text-textPrimary mb-8 flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white shadow-lg shadow-accentFrom/30">
                                    <Check className="w-5 h-5" />
                                </span>
                                Mode Sprint
                            </h3>
                            <div className="space-y-6">
                                {content.comparison.features.map((feature, i) => (
                                    <div key={i} className="flex justify-between items-center border-b border-gray-100/50 pb-5 last:border-0 last:pb-0">
                                        <span className="text-textSecondary font-medium text-lg">{feature.name}</span>
                                        <span className="text-textPrimary font-bold text-right text-lg">{feature.mode}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
```

</details>

---

## 📝 Original content.ts (Comparison Section)

The original comparison content in `/src/lib/content.ts`:

```typescript
comparison: {
  eyebrow: "Why choose Mode",
  title: "The smart way to build",
  features: [
    { name: "Time to market", traditional: "3-6 months", mode: "2 weeks" },
    { name: "Cost", traditional: "$50k - $100k+", mode: "Fixed €8.5k" },
    { name: "Risk", traditional: "High (Hourly billing)", mode: "Zero (Outcome based)" },
    { name: "Tech Stack", traditional: "Often outdated", mode: "Modern AI Stack" },
    { name: "Ownership", traditional: "Locked in contracts", mode: "100% Yours" },
  ],
},
```

---

## ✅ Verification Checklist

After rollback, verify:

- [ ] Dev server starts without errors
- [ ] Comparison section appears on homepage
- [ ] Two-column layout (Traditional vs Mode)
- [ ] No console errors in browser
- [ ] All animations working (fade-ins)
- [ ] Mobile responsive layout works

---

## 🚨 What NOT to Delete

**Keep these files** - they're not part of the rollback:
- `docs/why-mode-section-wireframe.md` (design documentation)
- `docs/ROLLBACK-WHY-MODE-SECTION.md` (this file)
- `.backups/comparison.tsx.backup` (the backup itself!)

---

## 📞 Troubleshooting

### Issue: "Module not found" error
**Solution:** Make sure you updated the import in `page.tsx` back to:
```tsx
import { Comparison } from "@/components/sections/comparison";
```

### Issue: TypeScript errors
**Solution:** Run:
```bash
npm run lint
```

### Issue: Styles look wrong
**Solution:** Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

---

## 🔄 Rollback Commands (Copy-Paste Ready)

```bash
# Navigate to project
cd /Users/thiagosalvador/Documents/Apps/Mode/mode-landing

# Restore comparison component
cp src/components/sections/.backups/comparison.tsx.backup src/components/sections/comparison.tsx

# Remove new why-mode component (if exists)
rm -f src/components/sections/why-mode.tsx

# Clear Next.js cache
rm -rf .next

# Restart dev server
npm run dev
```

Then manually update `src/app/page.tsx`:
- Change import: `WhyMode` → `Comparison`
- Change JSX: `<WhyMode />` → `<Comparison />`

---

## 📊 Comparison: Before vs After

| Aspect | Original (Comparison) | New (Why Mode) |
|--------|----------------------|----------------|
| Component | `comparison.tsx` | `why-mode.tsx` |
| Layout | 2 columns | 3 rows + toggle |
| Animations | Basic fade-in | Advanced scroll triggers |
| Interactivity | None | Toggle + hover states |
| Visual Style | Minimal | Animated cards + gradients |

---

## 💾 Backup Location

**Full backup path:**
```
/Users/thiagosalvador/Documents/Apps/Mode/mode-landing/
  src/components/sections/.backups/comparison.tsx.backup
```

**Backup created:** 2025-12-08
**File size:** ~2.4 KB
**Git tracked:** No (in .gitignore via .backups/)

---

## ⏱️ Estimated Rollback Time

- **Quick rollback:** ~2 minutes
- **Manual rollback:** ~5 minutes
- **With testing:** ~10 minutes

---

**Questions?** Check the backup file or refer to the wireframe document for comparison.

---

## 🎯 Quick Reference

**To rollback NOW:**
1. Copy backup file over current comparison.tsx
2. Update page.tsx imports
3. Remove why-mode.tsx
4. Restart dev server

**To switch back to new design:**
1. Re-implement from `why-mode-section-wireframe.md`
2. Or keep why-mode.tsx and just change page.tsx import

---

**Last Updated:** 2025-12-08
**Tested:** ✅ Backup verified
**Safe to Rollback:** ✅ Yes
