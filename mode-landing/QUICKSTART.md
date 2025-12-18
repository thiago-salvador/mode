# Mode Landing - Quick Start Guide

## ⚡ Get Started in 2 Minutes

```bash
# Navigate to project
cd mode-landing

# Install dependencies (if not done already)
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (hot reload) |
| `npm run build` | Build for production (generates /out directory) |
| `npm start` | Start production server (requires build first) |
| `npm run lint` | Run ESLint to check code quality |

## 📂 Project Structure Overview

```
mode-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          → SEO & fonts
│   │   ├── page.tsx             → Main landing page
│   │   └── globals.css          → Global styles
│   ├── components/
│   │   ├── ui/                  → Reusable components
│   │   └── sections/            → Page sections
│   └── lib/
│       └── utils.ts             → Helper functions
├── public/                      → Static assets
└── out/                         → Production build (after npm run build)
```

## ✏️ Editing Content

### Update Hero Section
```typescript
// src/components/sections/hero.tsx
<h1>Ship your AI MVP in 2 weeks</h1>  // ← Edit here
```

### Update Pricing
```typescript
// src/components/sections/pricing.tsx
€4,500  // ← Edit prices
€9,500  // ← Edit prices
```

### Update Contact Email
```typescript
// src/components/sections/footer.tsx
hello@modemvp.studio  // ← Edit here
```

### Update Colors
```typescript
// tailwind.config.ts
colors: {
  background: "#050509",    // ← Edit here
  accentFrom: "#FF2D92",    // ← Edit here
  accentTo: "#FF8A3C",      // ← Edit here
}
```

## 🎨 Key Components

### GlassCard
```tsx
import { GlassCard } from "@/components/ui/glass-card";

<GlassCard>
  Your content here
</GlassCard>
```

### Button
```tsx
import { Button } from "@/components/ui/button";

<Button href="#cta">Primary CTA</Button>
<Button href="#link" variant="secondary">Secondary</Button>
```

### SectionHeader
```tsx
import { SectionHeader } from "@/components/ui/section-header";

<SectionHeader
  eyebrow="Optional eyebrow"
  title="Main Title"
/>
```

## 🚢 Deploying to Production

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Build & Deploy Anywhere
```bash
npm run build
# Upload the 'out/' directory to any static host
```

### Option 3: Netlify
```bash
npm run build
netlify deploy --dir=out --prod
```

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
npm run lint
# Fix any errors shown
npm run build
```

## 📚 More Info

- **Full Documentation:** See `README.md`
- **Stack Details:** See `STACK.md`
- **Content Spec:** See `../docs/mode-landing-spec.json`

## 🆘 Need Help?

- Check `README.md` for detailed information
- Contact: hello@modemvp.studio

---

**Built with:** Next.js 14 • TypeScript • Tailwind CSS
