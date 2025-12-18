# Mode Landing Page - Production Version

Professional Next.js 14 landing page for Mode AI MVP Studio with TypeScript, Tailwind CSS, and optimized for performance and SEO.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router + SSG)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **Fonts:** Space Grotesk (headings) + Inter (body) via Google Fonts
- **Components:** Custom glass morphism components
- **Deploy:** Optimized for Vercel

## 📦 Quick Start

### Installation

```bash
cd mode-landing
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

### Static Export (for hosting anywhere)

```bash
npm run build
```

The static site will be in the `out/` directory.

## 📁 Project Structure

```
mode-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx             # Main landing page
│   │   └── globals.css          # Global styles and utilities
│   ├── components/
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── glass-card.tsx
│   │   │   ├── pill.tsx
│   │   │   ├── button.tsx
│   │   │   └── section-header.tsx
│   │   └── sections/            # Page sections
│   │       ├── navbar.tsx
│   │       ├── hero.tsx
│   │       ├── metrics-strip.tsx
│   │       ├── benefit-cards.tsx
│   │       ├── process-timeline.tsx
│   │       ├── work-showcase.tsx
│   │       ├── pricing.tsx
│   │       ├── testimonials.tsx
│   │       ├── faqs.tsx
│   │       ├── final-cta.tsx
│   │       └── footer.tsx
│   └── lib/
│       └── utils.ts             # Utility functions (cn helper)
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── next.config.mjs              # Next.js configuration
```

## 🎨 Design System

### Colors
```typescript
background: "#050509"   // Main dark background
surface: "#0B0B11"      // Secondary surface
textPrimary: "#FFFFFF"  // Main text
textMuted: "#A2A2B3"    // Muted text
accentFrom: "#FF2D92"   // Gradient start (pink)
accentTo: "#FF8A3C"     // Gradient end (orange)
```

### Typography
- **Headings:** Space Grotesk (geometric sans-serif)
- **Body:** Inter (neutral sans-serif)

### Components

#### GlassCard
Glass morphism card with gradient background and backdrop blur:
```tsx
<GlassCard className="...">Content</GlassCard>
```

#### Pill
Small label/badge component:
```tsx
<Pill>Label</Pill>
```

#### Button
Primary and secondary button variants:
```tsx
<Button href="#cta">Primary CTA</Button>
<Button href="#link" variant="secondary">Secondary</Button>
```

#### SectionHeader
Consistent section headers with eyebrow text:
```tsx
<SectionHeader
  eyebrow="Optional eyebrow"
  title="Main Title"
/>
```

## 📊 Content Management

All content is in the components. To update:

1. Navigate to the relevant section in `src/components/sections/`
2. Edit the content directly in the component
3. The content follows the structure from `docs/mode-landing-spec.json`

## 🔧 Configuration

### Tailwind Config
Custom theme values in `tailwind.config.ts`:
- Extended color palette
- Custom font families
- Border radius presets
- Backdrop blur utilities

### Next.js Config
Configured for static export in `next.config.mjs`:
```javascript
output: 'export',  // Generates static HTML
images: { unoptimized: true }  // For static hosting
```

### TypeScript
Strict mode enabled with path aliases:
- `@/*` maps to `src/*`

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Deploy to Netlify

```bash
npm run build
netlify deploy --dir=out --prod
```

### Deploy to any static host

```bash
npm run build
```

Upload the `out/` directory to any static hosting (GitHub Pages, AWS S3, etc.)

## 🎯 Performance Optimizations

- ✅ Static Site Generation (SSG) for instant loading
- ✅ Automatic font optimization via next/font
- ✅ CSS purging with Tailwind JIT
- ✅ Responsive images (when added)
- ✅ Minimal JavaScript (only for interactions)
- ✅ Scroll-smooth navigation

## 🔍 SEO

Configured in `src/app/layout.tsx`:
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card metadata
- Robots.txt directives
- Semantic HTML structure

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint: `md:` at 768px
- All grids collapse to single column on mobile
- Touch-friendly interactive elements
- Tested on iOS and Android

## ⚡ Interactive Features

### Navbar
- Sticky positioning with backdrop blur on scroll
- Smooth anchor link navigation
- Hover states on all links

### FAQ Accordion
- Click to expand/collapse
- Only one item open at a time
- Smooth transitions

### Contact Form
- Client-side HTML5 validation
- Console logging (replace with API call)
- Success message on submit

## 🔮 Next Steps

### Recommended Enhancements

1. **Form Handling**
   ```bash
   npm install react-hook-form zod
   ```
   Add validation with React Hook Form + Zod

2. **Email Integration**
   ```bash
   npm install resend
   ```
   Send form submissions via Resend

3. **Animations**
   ```bash
   npm install framer-motion
   ```
   Add smooth scroll animations

4. **Analytics**
   - Add Google Analytics 4
   - Or use Vercel Analytics
   - Or privacy-friendly Plausible

5. **CMS Integration**
   - Sanity.io for content management
   - Or Contentful
   - Or Notion API

## 🐛 Troubleshooting

### Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
```bash
npm run lint
```

### Build fails
Check `next.config.mjs` and ensure all imports are correct

## 📝 License

Private project for Mode Studio.

## 📧 Contact

For questions or support:
- Email: hello@modemvp.studio
- Content Spec: `../docs/mode-landing-spec.json`

---

**Built with** Next.js 14 • TypeScript • Tailwind CSS
**Deployed on** Vercel
**Version:** 1.0.0
