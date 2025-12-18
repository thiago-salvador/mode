# Mode Landing - Stack & Architecture Documentation

## 🎯 Technology Stack

### Core Framework
- **Next.js 14.2** - React framework with App Router
- **React 18.3** - UI library
- **TypeScript 5** - Type safety

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

### Utilities
- **clsx** - Conditional classNames
- **tailwind-merge** - Merge Tailwind classes without conflicts

### Fonts
- **Space Grotesk** - Headings (geometric sans-serif)
- **Inter** - Body text (neutral sans-serif)
- Loaded via `next/font/google` for optimal performance

## 📐 Architecture

### Static Site Generation (SSG)
```javascript
// next.config.mjs
output: 'export'  // Generates static HTML
```

Benefits:
- Lightning-fast page loads
- SEO-friendly
- Can be hosted anywhere (Vercel, Netlify, S3, GitHub Pages)
- No server required

### App Router Structure
```
src/app/
├── layout.tsx    # Root layout with metadata
├── page.tsx      # Home page (assembles all sections)
└── globals.css   # Global styles and utilities
```

### Component Organization
```
src/components/
├── ui/           # Reusable UI primitives
│   ├── glass-card.tsx
│   ├── pill.tsx
│   ├── button.tsx
│   └── section-header.tsx
└── sections/     # Page sections
    ├── navbar.tsx
    ├── hero.tsx
    ├── metrics-strip.tsx
    ├── benefit-cards.tsx
    ├── process-timeline.tsx
    ├── work-showcase.tsx
    ├── pricing.tsx
    ├── testimonials.tsx
    ├── faqs.tsx
    ├── final-cta.tsx
    └── footer.tsx
```

## 🎨 Design System

### Color Palette
```typescript
{
  background: "#050509",    // Main dark background
  surface: "#0B0B11",       // Secondary surface
  textPrimary: "#FFFFFF",   // Main text
  textMuted: "#A2A2B3",     // Muted/secondary text
  accentFrom: "#FF2D92",    // Gradient start (pink)
  accentTo: "#FF8A3C",      // Gradient end (orange)
}
```

### Typography Scale
- **H1:** 3.75rem (60px) - Hero title
- **H2:** 2.5-3rem (40-48px) - Section titles
- **H3:** 1.25-1.5rem (20-24px) - Card titles
- **Body:** 1rem (16px) - Paragraph text
- **Small:** 0.875rem (14px) - Meta text

### Spacing System
- **Section padding:** 5rem (80px) vertical
- **Card padding:** 1.75rem (28px)
- **Grid gap:** 1.5rem (24px)
- **Element gap:** 1rem (16px)

### Components

#### GlassCard
Glass morphism effect with:
- Gradient background (white 6% → 2%)
- 1px border (white 8% opacity)
- 18px backdrop blur
- 1.5rem border radius

#### Pill
Small label/tag:
- Fully rounded (999px)
- 5% white background
- Uppercase tracking
- 0.75rem font size

#### Button
Primary/Secondary variants:
- Primary: Gradient background (pink → orange)
- Secondary: Border + minimal background
- Hover: Slight lift and scale

## 🔍 SEO Configuration

### Metadata (layout.tsx)
```typescript
{
  title: "Mode - Ship your AI MVP in 2 weeks",
  description: "Mode designs and builds focused AI MVPs...",
  keywords: ["AI MVP", "MVP development", ...],
  openGraph: { ... },
  twitter: { ... },
  robots: { index: true, follow: true }
}
```

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Semantic section tags
- Accessible navigation
- Alt text for images (when added)

## ⚡ Performance Optimizations

### Build Output
```
Route (app)              Size     First Load JS
┌ ○ /                    17.5 kB         105 kB
```

### Techniques
1. **Static Generation** - Pre-rendered at build time
2. **Font Optimization** - next/font with display: swap
3. **CSS Purging** - Tailwind JIT removes unused styles
4. **Code Splitting** - Automatic via Next.js
5. **Minimal JS** - Only interactive components use JS

### Bundle Sizes
- Main bundle: 105 kB (gzipped)
- Page-specific: 17.5 kB
- Shared chunks: 87.4 kB

## 🚀 Deployment

### Recommended: Vercel
```bash
vercel
```

Automatic:
- Branch previews
- Production deployments
- CDN distribution
- Analytics

### Alternative: Netlify
```bash
npm run build
netlify deploy --dir=out --prod
```

### Alternative: Static Hosting
```bash
npm run build
# Upload 'out/' directory to:
# - AWS S3 + CloudFront
# - GitHub Pages
# - Cloudflare Pages
```

## 🔮 Future Enhancements

### Phase 1: Form Handling
```bash
npm install react-hook-form zod @hookform/resolvers
```

Replace console.log with actual form submission

### Phase 2: Email Integration
```bash
npm install resend
```

Send lead emails via Resend API

### Phase 3: Animations
```bash
npm install framer-motion
```

Add scroll-triggered animations

### Phase 4: Analytics
Options:
- **Vercel Analytics** - Built-in, privacy-friendly
- **Plausible** - Privacy-focused, GDPR compliant
- **Google Analytics 4** - Full-featured

### Phase 5: CMS
Options:
- **Sanity.io** - Headless CMS
- **Contentful** - Enterprise CMS
- **Notion API** - Simple content management

## 📊 Monitoring

### Lighthouse Targets
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Core Web Vitals
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

## 🛠️ Development Workflow

### Local Development
```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run lint       # Run ESLint
```

### Type Checking
```bash
npx tsc --noEmit   # Check types without emitting files
```

### Code Quality
- TypeScript strict mode enabled
- ESLint with Next.js config
- Automatic formatting via Prettier (recommended to add)

## 📝 Notes

### Why Static Export?
- **Performance**: Pre-rendered pages load instantly
- **Cost**: No server costs, just hosting
- **Reliability**: No backend to go down
- **Scaling**: CDN handles any traffic

### Why TypeScript?
- **Type Safety**: Catch errors at compile time
- **IntelliSense**: Better IDE autocomplete
- **Refactoring**: Safer code changes
- **Documentation**: Types serve as inline docs

### Why Tailwind?
- **Fast Development**: No context switching CSS ↔ HTML
- **Small Bundle**: Only used classes included
- **Consistency**: Design system in config
- **Responsive**: Mobile-first utilities

---

**Last Updated:** December 2024
**Version:** 1.0.0
**Maintained By:** Mode Studio Team
