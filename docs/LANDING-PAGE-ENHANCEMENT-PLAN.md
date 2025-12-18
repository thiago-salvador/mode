# 🚀 Mode Landing Page Enhancement Plan

**Created:** 2025-12-08
**Purpose:** Comprehensive implementation plan for landing page improvements
**Goal:** Increase conversions, build trust, and drive organic traffic

---

## 📊 Implementation Priority Matrix

| Priority | Task | Impact | Effort | Timeline |
|----------|------|--------|--------|----------|
| 🔴 HIGH | Calendly Integration | Very High | Low | 2 hours |
| 🔴 HIGH | Guarantee Badge | High | Low | 2 hours |
| 🔴 HIGH | Scarcity Signals | High | Medium | 3 hours |
| 🔴 HIGH | Trusted By Logos | Very High | Low | 2 hours |
| 🟡 MEDIUM | Clickable Case Studies | Medium | High | 8 hours |
| 🟡 MEDIUM | Live Chat Widget | Medium | Low | 1 hour |
| 🟡 MEDIUM | Lead Magnet | High | High | 12 hours |
| 🟡 MEDIUM | Team/Founder Section | Medium | Medium | 4 hours |
| 🟢 LOW | Comparison Table | Low | Medium | 4 hours |
| 🟢 LOW | Process Transparency | Low | Medium | 6 hours |
| 🟢 LOW | Exit Intent Popup | Medium | Medium | 4 hours |
| ⚙️ TECH | Mobile Hero | Medium | Medium | 6 hours |
| ⚙️ TECH | SEO Blog Articles | High | Very High | 20+ hours |

**Total Estimated Time:** ~74 hours (2-3 weeks full-time)

---

# 🔴 HIGH PRIORITY TASKS

## Task 1: Integrate Calendly/Cal.com for Direct Booking

**Impact:** Very High - Removes friction, increases bookings by 50-70%
**Effort:** Low - 2 hours
**Status:** Not Started

### Subtasks:

#### 1.1 Choose Booking Platform
- [ ] Research Calendly vs Cal.com vs Savvycal
- [ ] Compare pricing (Calendly: $10/mo, Cal.com: Free)
- [ ] Check GDPR compliance for EU clients
- [ ] Decision: **Cal.com (open-source, free, self-hosted option)**

#### 1.2 Set Up Calendar
- [ ] Create Cal.com account
- [ ] Configure availability (timezone: Lisbon UTC+0)
- [ ] Set event type: "Mode MVP Sprint - Discovery Call"
- [ ] Duration: 30 minutes
- [ ] Buffer time: 15 minutes between calls
- [ ] Add booking questions:
  - [ ] "What's your product idea in 2-3 sentences?"
  - [ ] "What's your timeline?"
  - [ ] "Budget confirmed? (€3,500 or €9,500)"

#### 1.3 Integrate into Website
- [ ] Install Cal.com embed script in layout
- [ ] Create reusable `<CalendarButton>` component
- [ ] Replace "Book Call" CTAs with calendar widget
- [ ] Locations to update:
  - [ ] Hero section primary CTA
  - [ ] Navbar CTA
  - [ ] Pricing section CTAs
  - [ ] Final CTA section
- [ ] Add fallback for users with JS disabled

#### 1.4 Test & Optimize
- [ ] Test booking flow end-to-end
- [ ] Configure confirmation emails
- [ ] Add calendar invite (Google Calendar)
- [ ] Set up reminder emails (24h + 1h before)
- [ ] Add Zoom/Google Meet link auto-generation
- [ ] Track analytics: BookingInitiated, BookingCompleted events

**Acceptance Criteria:**
- ✅ Users can book a call in 3 clicks or less
- ✅ Confirmation email sent immediately
- ✅ Calendar invite includes Zoom link
- ✅ All CTAs use calendar widget
- ✅ Mobile responsive

**Files to Create/Edit:**
- `/src/components/ui/calendar-button.tsx`
- `/src/components/sections/hero.tsx`
- `/src/components/sections/navbar.tsx`
- `/src/components/sections/pricing.tsx`
- `/src/components/sections/final-cta.tsx`

---

## Task 2: Create "Trusted By" Section with Logos

**Impact:** Very High - Instant credibility boost
**Effort:** Low - 2 hours
**Status:** Not Started

### Subtasks:

#### 2.1 Gather Logo Assets
- [ ] Request logos from past clients (if permission granted)
- [ ] Alternative: Use accelerator/partner logos:
  - [ ] Y Combinator (if applicable)
  - [ ] Techstars (if applicable)
  - [ ] Product Hunt
  - [ ] GitHub
  - [ ] Vercel
  - [ ] Anthropic (Claude partner badge)
- [ ] Download high-res SVG or PNG logos
- [ ] Create grayscale versions for consistency
- [ ] Optimize for web (compress to <50KB each)

#### 2.2 Design Logo Strip
- [ ] Create mockup in Figma
- [ ] Layout: Single row, 6-8 logos, horizontal scroll on mobile
- [ ] Spacing: Equal padding between logos
- [ ] Colors: Grayscale (hover → color)
- [ ] Background: Light gray or white

#### 2.3 Implement Component
- [ ] Create `/src/components/sections/trusted-by.tsx`
- [ ] Use Next.js `<Image>` for optimization
- [ ] Add hover effect: grayscale → color
- [ ] Implement auto-scrolling animation (optional)
- [ ] Make responsive (stack or scroll on mobile)

#### 2.4 Add to Page
- [ ] Insert after MetricsStrip section
- [ ] Or inside Hero section below CTAs
- [ ] Or in About section
- [ ] Update page.tsx imports

**Acceptance Criteria:**
- ✅ 6-8 recognizable logos displayed
- ✅ Consistent grayscale styling
- ✅ Smooth hover color transition
- ✅ Mobile responsive
- ✅ Fast loading (<2s)

**Files to Create/Edit:**
- `/src/components/sections/trusted-by.tsx`
- `/src/lib/content.ts` (add trustedBy section)
- `/src/app/page.tsx`
- `/public/logos/[company-name].svg`

**Content Template:**
```typescript
trustedBy: {
  eyebrow: "Trusted by",
  title: "Building products for founders from",
  logos: [
    { name: "Y Combinator", image: "/logos/yc.svg", url: "https://ycombinator.com" },
    { name: "Techstars", image: "/logos/techstars.svg", url: "https://techstars.com" },
    // ... more logos
  ]
}
```

---

## Task 3: Add Prominent Guarantee Badge

**Impact:** High - Removes purchase anxiety
**Effort:** Low - 2 hours
**Status:** Not Started

### Subtasks:

#### 3.1 Design Guarantee Badge
- [ ] Create badge mockup in Figma
- [ ] Style options:
  - [ ] Option A: Circular seal with checkmark
  - [ ] Option B: Shield with "100%" text
  - [ ] Option C: Banner ribbon
- [ ] Colors: Green (trust) or Brand gradient
- [ ] Size: 80px-120px diameter
- [ ] Include icon: ✓ or 🛡️

#### 3.2 Write Guarantee Copy
- [ ] Main badge text: "100% Delivery Guarantee"
- [ ] Subtext: "Ship in 14 days or you don't pay"
- [ ] Detailed guarantee (for tooltip/modal):
  ```
  Our Guarantee:

  ✓ We deliver a working product in 14 days, or you pay nothing
  ✓ 100% of our clients ship to production
  ✓ Full code ownership from day 1
  ✓ 2 weeks free bug fixes after delivery

  No fine print. No excuses. We bet on your success.
  ```

#### 3.3 Implement Badge Component
- [ ] Create `/src/components/ui/guarantee-badge.tsx`
- [ ] Props: `variant`, `size`, `showTooltip`
- [ ] Add hover tooltip with detailed guarantee
- [ ] Implement pulse animation (subtle)
- [ ] Make it accessible (ARIA labels)

#### 3.4 Place Strategically
- [ ] Location 1: **Pricing section** (above plans)
- [ ] Location 2: **Hero section** (near CTA)
- [ ] Location 3: **Final CTA section**
- [ ] Test visibility with heatmap tools

#### 3.5 Add to Content
- [ ] Update FAQs with guarantee question (if not exists)
- [ ] Add guarantee to comparison table
- [ ] Mention in testimonials section header

**Acceptance Criteria:**
- ✅ Badge visible in 3+ locations
- ✅ Tooltip shows full guarantee details
- ✅ Matches brand aesthetic
- ✅ Mobile responsive
- ✅ Accessible (screen readers)

**Files to Create/Edit:**
- `/src/components/ui/guarantee-badge.tsx`
- `/src/components/sections/pricing.tsx`
- `/src/components/sections/hero.tsx`
- `/src/components/sections/final-cta.tsx`
- `/src/lib/content.ts`

---

## Task 4: Add Scarcity/Urgency Signals

**Impact:** High - Creates FOMO, increases conversions
**Effort:** Medium - 3 hours
**Status:** Not Started

### Subtasks:

#### 4.1 Define Scarcity Model
- [ ] Decide on constraint type:
  - [ ] Option A: Sprint slots per month (e.g., "3 slots left")
  - [ ] Option B: Next available start date (e.g., "Next sprint: Dec 16")
  - [ ] Option C: Current sprint capacity (e.g., "2/5 sprints filled")
- [ ] Decision: **Combination of B + C**

#### 4.2 Create Availability System
- [ ] Manual approach (update monthly):
  - [ ] Add to content.ts: `availability: { slotsLeft: 2, nextStart: "2025-01-06" }`
  - [ ] Update manually each month
- [ ] OR automated approach:
  - [ ] Integrate with Cal.com API
  - [ ] Fetch real-time availability
  - [ ] Cache for 1 hour

#### 4.3 Design Availability Banner
- [ ] Create floating banner component
- [ ] Position: Top of hero or sticky header
- [ ] Text: "⚡ Only 2 sprint slots available in January — Book now"
- [ ] Colors: Urgent (orange/red) but not alarming
- [ ] Add countdown timer (optional)

#### 4.4 Implement Components
- [ ] Create `/src/components/ui/availability-banner.tsx`
- [ ] Create `/src/components/ui/slots-counter.tsx`
- [ ] Add real-time counter (if using API)
- [ ] Add "Next available: [Date]" indicator

#### 4.5 Place Throughout Site
- [ ] Hero section (below headline)
- [ ] Pricing section (above plans)
- [ ] Final CTA (create urgency)
- [ ] Consider sticky top banner

#### 4.6 A/B Test Copy
- [ ] Version A: "Only X slots left"
- [ ] Version B: "Next sprint starts [Date]"
- [ ] Version C: "Limited availability — [X] spots remaining"
- [ ] Track which converts better

**Acceptance Criteria:**
- ✅ Availability displayed in 2+ locations
- ✅ Updates automatically or easy manual update
- ✅ Creates urgency without being pushy
- ✅ Mobile responsive
- ✅ Honest (never fake scarcity)

**Files to Create/Edit:**
- `/src/components/ui/availability-banner.tsx`
- `/src/components/ui/slots-counter.tsx`
- `/src/components/sections/hero.tsx`
- `/src/components/sections/pricing.tsx`
- `/src/lib/content.ts` (add availability data)

**Content Template:**
```typescript
availability: {
  slotsPerMonth: 5,
  slotsBooked: 3,
  nextAvailableDate: "2025-01-06",
  urgencyMessage: "Only {slotsLeft} sprint slots available in {month}",
  calendarUrl: "https://cal.com/mode/sprint"
}
```

---

# 🟡 MEDIUM PRIORITY TASKS

## Task 5: Make Work Showcase Cards Clickable with Case Studies

**Impact:** Medium - Adds depth, builds trust
**Effort:** High - 8 hours
**Status:** Not Started

### Subtasks:

#### 5.1 Gather Case Study Content
For each project (No Divã, Adote Um Gatinho, Win Like A Löwe):

- [ ] **No Divã:**
  - [ ] Challenge: What problem did the client have?
  - [ ] Solution: How Mode solved it
  - [ ] Results: Metrics (users, revenue, time saved)
  - [ ] Timeline: Actual days to ship
  - [ ] Tech stack: List technologies used
  - [ ] Client quote: Testimonial
  - [ ] Screenshots: 3-4 high-res images

- [ ] **Adote Um Gatinho:**
  - [ ] [Same structure as above]

- [ ] **Win Like A Löwe:**
  - [ ] [Same structure as above]

#### 5.2 Design Case Study Modal
- [ ] Create mockup in Figma
- [ ] Layout:
  ```
  [Close X]

  [Hero Image]

  [Project Title]
  [Tag: "Full-Stack Platform"]

  Challenge
  [Text block]

  Solution
  [Text block]

  Results
  • 500+ adoptions
  • Built in 5 days
  • $0 marketing spend

  Tech Stack
  [Next.js] [TypeScript] [Supabase]

  Timeline
  Day 1-2: Discovery
  Day 3-7: Build
  ...

  "Testimonial quote here"
  — Client Name, Title

  [View Live Site] [GitHub Repo]
  ```

#### 5.3 Implement Modal Component
- [ ] Create `/src/components/ui/case-study-modal.tsx`
- [ ] Use Radix UI Dialog or Headless UI
- [ ] Add smooth open/close animations
- [ ] Include image carousel for screenshots
- [ ] Make scrollable for long content
- [ ] Add keyboard navigation (ESC to close)
- [ ] Mobile responsive (full screen on mobile)

#### 5.4 Update Work Showcase Cards
- [ ] Make cards clickable (add cursor pointer)
- [ ] Add "View Case Study →" text on hover
- [ ] Connect to modal open handler
- [ ] Add loading state if fetching data

#### 5.5 Add to Content Structure
- [ ] Extend `workShowcase.cards` in content.ts:
  ```typescript
  cards: [
    {
      label: "No Divã Community Platform",
      summary: "...",
      tag: "Full-Stack Platform",
      image: "/work/no-diva.png",
      caseStudy: {
        challenge: "...",
        solution: "...",
        results: ["500+ adoptions", "Built in 5 days"],
        techStack: ["Next.js", "TypeScript", "Supabase"],
        timeline: [
          { phase: "Discovery", days: "1-2", description: "..." },
          // ...
        ],
        testimonial: {
          quote: "...",
          author: "Client Name",
          title: "CEO @ Company"
        },
        links: {
          live: "https://...",
          github: "https://..." // if public
        },
        screenshots: [
          "/work/no-diva-screen-1.png",
          "/work/no-diva-screen-2.png"
        ]
      }
    }
  ]
  ```

#### 5.6 Optimize Performance
- [ ] Lazy load modal content
- [ ] Compress screenshot images
- [ ] Implement image lazy loading
- [ ] Add loading skeleton

**Acceptance Criteria:**
- ✅ All 3 work cards are clickable
- ✅ Modal opens smoothly
- ✅ Case study has all sections
- ✅ Mobile responsive modal
- ✅ Keyboard accessible
- ✅ Images optimized (<500KB each)

**Files to Create/Edit:**
- `/src/components/ui/case-study-modal.tsx`
- `/src/components/sections/work-showcase.tsx`
- `/src/lib/content.ts` (extend workShowcase)
- `/public/work/[project]-screen-*.png`

---

## Task 6: Add Live Chat Widget

**Impact:** Medium - Answers questions in real-time
**Effort:** Low - 1 hour
**Status:** Not Started

### Subtasks:

#### 6.1 Choose Chat Platform
- [ ] Option A: **Crisp Chat** (Free tier, GDPR compliant)
- [ ] Option B: WhatsApp Business Button
- [ ] Option C: Intercom (Paid, expensive)
- [ ] Option D: Tawk.to (Free, open-source)
- [ ] Decision: **Crisp + WhatsApp button combo**

#### 6.2 Set Up Crisp Chat
- [ ] Create account at crisp.chat
- [ ] Configure widget appearance:
  - [ ] Position: Bottom right
  - [ ] Color: Match brand (pink/orange gradient)
  - [ ] Avatar: Mode logo
  - [ ] Welcome message: "Hi! Questions about your MVP? Ask away 👋"
- [ ] Set business hours (Lisbon timezone)
- [ ] Add auto-response for offline hours

#### 6.3 Integrate into Website
- [ ] Add Crisp script to layout.tsx (or use next-crisp package)
- [ ] Add to `<head>` or body:
  ```javascript
  window.$crisp=[];
  window.CRISP_WEBSITE_ID="YOUR_ID";
  (function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
  ```
- [ ] Test widget loads on all pages

#### 6.4 Add WhatsApp Button
- [ ] Get WhatsApp Business number
- [ ] Create `/src/components/ui/whatsapp-button.tsx`
- [ ] Add floating button (bottom left, opposite of Crisp)
- [ ] Link format: `https://wa.me/351XXXXXXXXX?text=Hi%20Mode%2C%20I%27d%20like%20to%20discuss%20my%20MVP`
- [ ] Icon: WhatsApp logo
- [ ] Pulse animation

#### 6.5 Configure Chatbot Flows
- [ ] Add common FAQ auto-responses:
  - [ ] "What's your pricing?" → Link to pricing section
  - [ ] "How long does it take?" → "14 days for MVP Sprint"
  - [ ] "Do you offer payment plans?" → Custom response
- [ ] Add CTA: "Book a call: [Calendly link]"

#### 6.6 GDPR Compliance
- [ ] Add chat disclaimer in privacy policy
- [ ] Add opt-in for cookie (Crisp uses cookies)
- [ ] Allow users to delete chat history

**Acceptance Criteria:**
- ✅ Chat widget loads on all pages
- ✅ WhatsApp button visible (alternative)
- ✅ Auto-responses work
- ✅ Mobile responsive
- ✅ GDPR compliant
- ✅ Doesn't slow down page load

**Files to Create/Edit:**
- `/src/app/layout.tsx` (add Crisp script)
- `/src/components/ui/whatsapp-button.tsx`
- `/src/app/page.tsx` (add WhatsApp button)

---

## Task 7: Create Free Lead Magnet

**Impact:** High - Builds email list, nurtures leads
**Effort:** High - 12 hours (content creation)
**Status:** Not Started

### Subtasks:

#### 7.1 Choose Lead Magnet Type
- [ ] Option A: **"14-Day MVP Planning Template"** (Notion or PDF)
- [ ] Option B: "Product Roadmap Framework" (Spreadsheet)
- [ ] Option C: "AI Product Tech Stack Guide" (PDF)
- [ ] Option D: "MVP Cost Calculator" (Interactive tool)
- [ ] Decision: **Option A + Option D combo**

#### 7.2 Create "14-Day MVP Planning Template"
- [ ] Create Notion template:
  - [ ] Week 1: Discovery & Scope
    - [ ] Day 1-2: Define core user flow
    - [ ] Day 3-4: Feature prioritization (Must/Should/Could/Won't)
    - [ ] Day 5: Design wireframes
  - [ ] Week 2: Build & Launch
    - [ ] Day 6-11: Development sprints
    - [ ] Day 12-13: Testing & bug fixes
    - [ ] Day 14: Deploy & handoff
  - [ ] Templates for:
    - [ ] User story mapping
    - [ ] Feature prioritization matrix
    - [ ] Daily standup notes
    - [ ] Launch checklist

- [ ] OR create PDF version (easier for users without Notion)
- [ ] Design in Canva or Figma
- [ ] Include Mode branding
- [ ] Add watermark: "modemvp.studio"

#### 7.3 Create "MVP Cost Calculator" (Optional)
- [ ] Build interactive calculator tool
- [ ] Inputs:
  - [ ] Number of user types (1-3)
  - [ ] Number of core features (3-10)
  - [ ] AI integration? (Yes/No)
  - [ ] Payment processing? (Yes/No)
  - [ ] Admin dashboard? (Yes/No)
- [ ] Output:
  - [ ] Estimated cost range
  - [ ] Estimated timeline
  - [ ] Recommended Mode package
- [ ] Tech: Simple React component or Google Sheet embed

#### 7.4 Set Up Email Capture
- [ ] Choose email service:
  - [ ] Option A: ConvertKit (Good for creators)
  - [ ] Option B: Mailchimp (Popular)
  - [ ] Option C: Loops.so (Modern, developer-friendly)
  - [ ] Decision: **Loops.so** or **ConvertKit**

- [ ] Create email sequence:
  - [ ] Email 1 (Immediate): Download link + welcome
  - [ ] Email 2 (Day 3): "How to scope your MVP" tips
  - [ ] Email 3 (Day 7): Case study
  - [ ] Email 4 (Day 14): "Ready to start? Book a call"

#### 7.5 Create Landing Page for Lead Magnet
- [ ] URL: `/free-mvp-template` or `/resources/mvp-planner`
- [ ] Page structure:
  - [ ] Headline: "Plan Your MVP in 14 Days (Free Template)"
  - [ ] Subheadline: "The exact framework we use to ship MVPs in 2 weeks"
  - [ ] What's included (bullet points)
  - [ ] Form: Name + Email
  - [ ] CTA: "Download Free Template"
  - [ ] Social proof: "Downloaded by 500+ founders"
  - [ ] Preview image/screenshot

#### 7.6 Create Form Component
- [ ] `/src/components/ui/lead-magnet-form.tsx`
- [ ] Integrate with Loops.so or ConvertKit API
- [ ] Client-side validation
- [ ] Success message + redirect to download
- [ ] Thank you page: `/thank-you?resource=mvp-template`

#### 7.7 Add CTAs Throughout Site
- [ ] Hero section: "Download Free MVP Template"
- [ ] Exit intent popup: "Before you go, get our free template"
- [ ] Blog sidebar: "Free Resource"
- [ ] Footer: "Resources" link

#### 7.8 Track Performance
- [ ] Set up analytics:
  - [ ] Form views
  - [ ] Form submissions
  - [ ] Download rate
  - [ ] Email open rate
- [ ] A/B test different headlines

**Acceptance Criteria:**
- ✅ High-quality template created
- ✅ Download page live
- ✅ Email automation set up
- ✅ Form captures emails correctly
- ✅ Thank you page delivers download
- ✅ CTAs placed in 3+ locations
- ✅ Analytics tracking works

**Files to Create/Edit:**
- `/src/app/free-mvp-template/page.tsx`
- `/src/app/thank-you/page.tsx`
- `/src/components/ui/lead-magnet-form.tsx`
- `/src/components/ui/exit-intent-popup.tsx` (Task 11)
- `/public/downloads/mvp-planning-template.pdf`
- `/src/lib/email-service.ts` (API integration)

---

## Task 8: Add Team/Founder Section with Photos

**Impact:** Medium - Builds personal connection
**Effort:** Medium - 4 hours
**Status:** Not Started

### Subtasks:

#### 8.1 Gather Content
- [ ] **Founder Photo:**
  - [ ] Professional headshot (or casual team photo)
  - [ ] High-res (at least 1000x1000px)
  - [ ] Good lighting, neutral background
  - [ ] Authentic expression (not overly formal)

- [ ] **Bio Content:**
  - [ ] Name: Thiago Salvador
  - [ ] Title: Founder & Lead Developer
  - [ ] Background:
    - [ ] Previous companies/roles (ex-Google, ex-startup, etc.)
    - [ ] Years of experience
    - [ ] Specialization (AI, full-stack, product)
  - [ ] Personal story (2-3 paragraphs):
    - [ ] Why you started Mode
    - [ ] Frustration with traditional agencies
    - [ ] Mission: Help founders ship fast

- [ ] **Team Members (if applicable):**
  - [ ] Names, roles, photos
  - [ ] LinkedIn links

#### 8.2 Write Founder Story
Example template:
```
## Who we are

I'm Thiago, founder of Mode. I've spent 10+ years building products for
startups and enterprises. I've seen too many founders spend 6 months and
$100k on MVPs that never launch.

In 2020, I spent $80k building an MVP that launched to crickets. The agency
said "trust the process." The process was broken.

So I built Mode—the agency I wish I'd hired. One that ships in 2 weeks, not
6 months. One that talks in plain English, not jargon. One that bets on your
success, not hourly billing.

Today, we've shipped 20+ MVPs. 100% made it to production. Our clients have
raised $12M+. That's the difference speed makes.

Let's build yours next.

— Thiago Salvador
Founder, Mode Studio
```

#### 8.3 Design Section Layout
- [ ] Option A: Split layout (photo left, text right)
- [ ] Option B: Center aligned (photo above text)
- [ ] Option C: Grid with team members
- [ ] Mockup in Figma

#### 8.4 Implement Component
- [ ] Create `/src/components/sections/founder-section.tsx`
- [ ] Use Next.js `<Image>` for photo optimization
- [ ] Add subtle animation on scroll
- [ ] Include social links:
  - [ ] LinkedIn
  - [ ] Twitter/X
  - [ ] GitHub
- [ ] Add "Book a call with Thiago" CTA

#### 8.5 Add to Page
- [ ] Place in About section (replace or enhance current text)
- [ ] Or create separate "Team" section
- [ ] Update page.tsx

#### 8.6 Enhance About Section
- [ ] Current about section is generic
- [ ] Replace with founder story
- [ ] Keep stats section
- [ ] Make more personal and authentic

**Acceptance Criteria:**
- ✅ Professional photo displayed
- ✅ Compelling founder story
- ✅ Social links work
- ✅ Scroll animations smooth
- ✅ Mobile responsive
- ✅ Builds emotional connection

**Files to Create/Edit:**
- `/src/components/sections/founder-section.tsx`
- `/src/components/sections/about.tsx` (replace content)
- `/src/lib/content.ts` (update about section)
- `/public/team/thiago.jpg`
- `/src/app/page.tsx`

**Content Template:**
```typescript
founder: {
  name: "Thiago Salvador",
  title: "Founder & Lead Developer",
  photo: "/team/thiago.jpg",
  story: [
    "I'm Thiago, founder of Mode...",
    "In 2020, I spent $80k building an MVP...",
    "So I built Mode—the agency I wish I'd hired..."
  ],
  credentials: [
    "10+ years in product development",
    "Shipped 20+ production MVPs",
    "Ex-[Company Name]",
    "Full-stack + AI specialist"
  ],
  social: {
    linkedin: "https://linkedin.com/in/thiagosalvador",
    twitter: "https://twitter.com/thiagosalvador",
    github: "https://github.com/thiagosalvador"
  }
}
```

---

# 🟢 NICE-TO-HAVE TASKS

## Task 10: Create Detailed Comparison Table

**Impact:** Low - Comprehensive but not critical
**Effort:** Medium - 4 hours
**Status:** Not Started

### Subtasks:

#### 10.1 Define Comparison Criteria
- [ ] Criteria list (8-10 rows):
  - [ ] Time to market
  - [ ] Total cost
  - [ ] Hourly rate
  - [ ] Risk/payment model
  - [ ] Code ownership
  - [ ] Tech stack modernity
  - [ ] Post-launch support
  - [ ] Scalability
  - [ ] Communication overhead
  - [ ] Flexibility for changes

#### 10.2 Research Competitors
- [ ] **Mode vs Upwork:**
  - [ ] Upwork: Variable quality, hourly billing, high communication overhead
  - [ ] Mode: Fixed price, vetted quality, streamlined process

- [ ] **Mode vs Traditional Agency:**
  - [ ] Agency: 3-6 months, $50k-$100k+, locked contracts
  - [ ] Mode: 2 weeks, €3.5k-€9.5k, full ownership

- [ ] **Mode vs In-House:**
  - [ ] In-house: $120k+ salary, benefits, slow hiring
  - [ ] Mode: Fixed project cost, immediate start

- [ ] **Mode vs No-Code Tools:**
  - [ ] No-code: Limited customization, vendor lock-in
  - [ ] Mode: Full custom code, 100% ownership

#### 10.3 Design Table
- [ ] Create mockup in Figma
- [ ] Columns: Mode | Upwork | Agency | In-house | No-Code
- [ ] Visual elements:
  - [ ] Checkmarks (✓) for pros
  - [ ] X marks (✗) for cons
  - [ ] Highlight Mode column (gradient border)
  - [ ] Sticky header on scroll

#### 10.4 Implement Component
- [ ] Create `/src/components/sections/detailed-comparison.tsx`
- [ ] Make responsive:
  - [ ] Desktop: Full table
  - [ ] Mobile: Swipeable carousel or accordion
- [ ] Add hover tooltips for more details

#### 10.5 Add to Content
- [ ] Create comparison data structure in content.ts:
  ```typescript
  detailedComparison: {
    title: "How Mode stacks up",
    subtitle: "See how we compare to alternatives",
    columns: [
      { name: "Mode", highlight: true },
      { name: "Upwork" },
      { name: "Traditional Agency" },
      { name: "In-House Dev" },
      { name: "No-Code" }
    ],
    rows: [
      {
        criteria: "Time to market",
        mode: "2 weeks",
        upwork: "2-4 months",
        agency: "3-6 months",
        inhouse: "3-6 months",
        nocode: "1-2 weeks"
      },
      // ... more rows
    ]
  }
  ```

#### 10.6 Place on Page
- [ ] Add after "Why Mode" section
- [ ] Or create separate "/comparison" page
- [ ] Add CTA: "Ready to start? Book a call"

**Acceptance Criteria:**
- ✅ 8-10 comparison criteria
- ✅ 4-5 competitor columns
- ✅ Mode column highlighted
- ✅ Mobile responsive
- ✅ Accurate data

**Files to Create/Edit:**
- `/src/components/sections/detailed-comparison.tsx`
- `/src/lib/content.ts` (add detailedComparison)
- `/src/app/page.tsx`

---

## Task 11: Add Process Transparency

**Impact:** Low - Nice credibility boost
**Effort:** Medium - 6 hours
**Status:** Not Started

### Subtasks:

#### 11.1 Gather Sample Deliverables
- [ ] **Sample Figma File:**
  - [ ] Create mockup or use real project
  - [ ] Make read-only public link
  - [ ] Annotate with comments
  - [ ] Show design system, components, flows

- [ ] **Sample GitHub Repo:**
  - [ ] Create demo repo or anonymize client project
  - [ ] Well-structured code
  - [ ] README with setup instructions
  - [ ] Example of code quality

- [ ] **Sample Loom Videos:**
  - [ ] Kickoff call walkthrough (5 min)
  - [ ] Design review (3 min)
  - [ ] Code handoff explanation (5 min)

#### 11.2 Create "See Our Work" Section
- [ ] Design section with 3 cards:
  - [ ] Card 1: "Browse a Real Figma File"
    - [ ] Screenshot of Figma
    - [ ] Link to public file
    - [ ] Text: "See the quality of UI design we deliver"

  - [ ] Card 2: "Explore a Sample Codebase"
    - [ ] GitHub repo preview
    - [ ] Link to public repo
    - [ ] Text: "Review our code quality and documentation"

  - [ ] Card 3: "Watch Our Process"
    - [ ] Loom video thumbnail
    - [ ] Play button overlay
    - [ ] Text: "See how we communicate and deliver"

#### 11.3 Implement Component
- [ ] Create `/src/components/sections/process-transparency.tsx`
- [ ] Add external link icons
- [ ] Implement hover effects
- [ ] Add modal for video playback

#### 11.4 Add to Page
- [ ] Place after Process Timeline section
- [ ] Or in About section
- [ ] Add eyebrow: "Proof of quality"
- [ ] Add title: "See what you actually get"

**Acceptance Criteria:**
- ✅ 3 sample deliverables available
- ✅ Links work correctly
- ✅ Anonymized (no client secrets)
- ✅ High quality examples
- ✅ Mobile responsive

**Files to Create/Edit:**
- `/src/components/sections/process-transparency.tsx`
- `/src/lib/content.ts` (add transparency section)
- `/src/app/page.tsx`
- External: Figma file, GitHub repo, Loom videos

---

## Task 12: Implement Exit Intent Popup

**Impact:** Medium - Captures abandoning visitors
**Effort:** Medium - 4 hours
**Status:** Not Started

### Subtasks:

#### 12.1 Choose Exit Intent Library
- [ ] Option A: Custom implementation (detect mouse leaving viewport)
- [ ] Option B: Use library like `react-exit-intent`
- [ ] Decision: **Custom implementation** (more control)

#### 12.2 Design Popup
- [ ] Layout mockup in Figma
- [ ] Trigger: Mouse moves towards browser top (exit intent)
- [ ] Content:
  ```
  Wait! Before you go...

  Get a free project estimate in 24 hours

  [Your Name] _______
  [Your Email] _______
  [Your Idea (optional)] _______

  [Get Free Estimate]

  No commitment. Just a realistic timeline and quote.
  ```
- [ ] Design: Clean, not spammy
- [ ] Size: Medium modal (not full screen)
- [ ] Colors: Match brand

#### 12.3 Implement Exit Intent Detection
- [ ] Create `/src/hooks/use-exit-intent.ts`:
  ```typescript
  export function useExitIntent(onExit: () => void) {
    useEffect(() => {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0) {
          onExit();
        }
      };
      document.addEventListener('mouseleave', handleMouseLeave);
      return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [onExit]);
  }
  ```

#### 12.4 Create Popup Component
- [ ] Create `/src/components/ui/exit-intent-popup.tsx`
- [ ] Use Radix Dialog or Headless UI
- [ ] Add form with 3 fields
- [ ] Integrate with email service (Loops.so)
- [ ] Add close button (X)
- [ ] Prevent showing more than once per session
- [ ] Store in localStorage: `exitIntentShown: true`

#### 12.5 Configure Triggers
- [ ] Only show if:
  - [ ] User spent >30 seconds on site
  - [ ] User scrolled >50% of page
  - [ ] Not shown in current session
  - [ ] Not on mobile (annoying on mobile)

#### 12.6 Set Up Email Automation
- [ ] Auto-response email:
  ```
  Subject: Your free Mode estimate

  Hi [Name],

  Thanks for your interest! I'll personally review your project and send
  a detailed estimate within 24 hours.

  In the meantime, check out our case studies: [link]

  Questions? Just reply to this email.

  — Thiago
  Founder, Mode Studio
  ```

#### 12.7 A/B Test Offers
- [ ] Offer A: "Free project estimate"
- [ ] Offer B: "Download MVP template"
- [ ] Offer C: "Book a free 15-min consultation"
- [ ] Track conversion rates

**Acceptance Criteria:**
- ✅ Popup triggers on exit intent
- ✅ Only shows once per session
- ✅ Not shown on mobile
- ✅ Form submits correctly
- ✅ Email automation works
- ✅ Easy to close (not annoying)

**Files to Create/Edit:**
- `/src/hooks/use-exit-intent.ts`
- `/src/components/ui/exit-intent-popup.tsx`
- `/src/app/layout.tsx` (add popup globally)
- `/src/lib/email-service.ts`

---

# ⚙️ TECHNICAL IMPROVEMENTS

## Task 13: Create Mobile-Friendly Hero Experience

**Impact:** Medium - Better mobile UX
**Effort:** Medium - 6 hours
**Status:** Not Started

### Subtasks:

#### 13.1 Analyze Current Mobile Issue
- [ ] Current state: Hero images are `hidden lg:block`
- [ ] Result: Mobile users see only text, no visual appeal
- [ ] Goal: Show 1-2 project previews on mobile

#### 13.2 Design Mobile Hero
- [ ] Option A: **Static image stack**
  - [ ] Show 2-3 project cards (static, no animation)
  - [ ] Stacked vertically below text
  - [ ] Slightly overlapping for depth

- [ ] Option B: **Simple carousel**
  - [ ] Swipeable carousel
  - [ ] 3-4 project images
  - [ ] Auto-play optional

- [ ] Option C: **Bento grid**
  - [ ] 2x2 grid of project thumbnails
  - [ ] Compact, clean

- [ ] Decision: **Option A (static stack)** - performant, simple

#### 13.3 Create Mobile Component
- [ ] Create `/src/components/sections/hero-mobile-images.tsx`
- [ ] Show on screens <1024px
- [ ] Display 2-3 project cards:
  - [ ] Adote Um Gatinho
  - [ ] No Divã
  - [ ] Win Like A Löwe
- [ ] Add subtle shadow and border
- [ ] Stack vertically with overlap

#### 13.4 Optimize Images for Mobile
- [ ] Create mobile-optimized versions:
  - [ ] Max width: 600px
  - [ ] WebP format
  - [ ] Compressed <100KB each
- [ ] Use Next.js Image with responsive sizes

#### 13.5 Update Hero Component
- [ ] Add conditional rendering:
  ```tsx
  {/* Desktop: Animated masonry */}
  <div className="hidden lg:block">
    {/* Existing animated columns */}
  </div>

  {/* Mobile: Static stack */}
  <div className="lg:hidden">
    <HeroMobileImages />
  </div>
  ```

#### 13.6 Test Responsiveness
- [ ] Test on real devices:
  - [ ] iPhone (Safari)
  - [ ] Android (Chrome)
  - [ ] iPad (Safari)
- [ ] Test different screen sizes (375px - 768px)
- [ ] Verify performance (no lag)

**Acceptance Criteria:**
- ✅ Mobile users see visual content
- ✅ Performance not affected (<3s load)
- ✅ Images optimized for mobile
- ✅ Works on all mobile browsers
- ✅ Graceful degradation

**Files to Create/Edit:**
- `/src/components/sections/hero-mobile-images.tsx`
- `/src/components/sections/hero.tsx`
- `/public/hero/mobile/[project]-mobile.webp`

---

## Task 14: Write and Publish SEO Blog Articles

**Impact:** High - Drives organic traffic long-term
**Effort:** Very High - 20+ hours (ongoing)
**Status:** Not Started

### Subtasks:

#### 14.1 Set Up Blog Infrastructure
- [ ] Choose blog approach:
  - [ ] Option A: **Next.js MDX blog** (self-hosted)
  - [ ] Option B: Headless CMS (Contentful, Sanity)
  - [ ] Option C: External blog (Medium, Hashnode)
  - [ ] Decision: **MDX blog** (full control, SEO)

- [ ] Create blog structure:
  - [ ] `/src/app/blog/page.tsx` (blog index)
  - [ ] `/src/app/blog/[slug]/page.tsx` (article page)
  - [ ] `/src/content/blog/*.mdx` (article files)

- [ ] Install dependencies:
  ```bash
  npm install @next/mdx @mdx-js/loader @mdx-js/react
  npm install reading-time gray-matter
  ```

#### 14.2 Design Blog Layout
- [ ] Blog index page:
  - [ ] List of articles (cards)
  - [ ] Featured article at top
  - [ ] Categories/tags
  - [ ] Search functionality
  - [ ] RSS feed

- [ ] Article page:
  - [ ] Hero image
  - [ ] Title, date, reading time
  - [ ] Author bio
  - [ ] Table of contents
  - [ ] Related articles
  - [ ] CTA: "Ready to build? Book a call"

#### 14.3 SEO Optimization
- [ ] Add meta tags for each article
- [ ] Open Graph images (auto-generate)
- [ ] Schema.org markup (Article type)
- [ ] Internal linking strategy
- [ ] Sitemap.xml update

#### 14.4 Write Article 1: "How to Validate Your MVP in 2 Weeks"
- [ ] Target keyword: "MVP validation"
- [ ] Word count: 1,500-2,000 words
- [ ] Structure:
  - [ ] Introduction: Why speed matters
  - [ ] The problem with traditional validation
  - [ ] Week 1: Scope & design
  - [ ] Week 2: Build & test
  - [ ] Real example: [Client case study]
  - [ ] Conclusion + CTA
- [ ] Add images/screenshots
- [ ] Internal links to pricing, work showcase

#### 14.5 Write Article 2: "AI Development: In-House vs Agency vs Mode"
- [ ] Target keyword: "AI development agency"
- [ ] Word count: 2,000-2,500 words
- [ ] Structure:
  - [ ] Introduction: The AI development landscape
  - [ ] Option 1: In-house team (pros/cons, cost breakdown)
  - [ ] Option 2: Traditional agency (pros/cons, cost)
  - [ ] Option 3: Mode approach (pros/cons, cost)
  - [ ] Comparison table
  - [ ] When to choose each option
  - [ ] Conclusion + CTA
- [ ] Add comparison charts
- [ ] Internal links to comparison section, pricing

#### 14.6 Write Article 3: "Real Cost of Building an AI Product in 2025"
- [ ] Target keyword: "AI product development cost"
- [ ] Word count: 1,500-2,000 words
- [ ] Structure:
  - [ ] Introduction: Cost transparency problem
  - [ ] Cost breakdown:
    - [ ] Design: $X - $Y
    - [ ] Development: $X - $Y
    - [ ] AI integration: $X - $Y
    - [ ] Infrastructure: $X - $Y
    - [ ] Testing & QA: $X - $Y
  - [ ] Hidden costs people miss
  - [ ] How Mode pricing works (transparent)
  - [ ] Interactive calculator embed
  - [ ] Conclusion + CTA
- [ ] Add infographics
- [ ] Internal link to pricing, calculator

#### 14.7 Write Article 4: "From Idea to Production in 14 Days: No Divã Case Study"
- [ ] Target keyword: "MVP in 2 weeks"
- [ ] Word count: 1,500-2,000 words
- [ ] Structure:
  - [ ] Introduction: The challenge
  - [ ] Day-by-day breakdown:
    - [ ] Day 1-2: Discovery
    - [ ] Day 3-5: Design
    - [ ] Day 6-11: Development
    - [ ] Day 12-14: Testing & launch
  - [ ] Technical details (tech stack, architecture)
  - [ ] Results: Users, engagement, feedback
  - [ ] Lessons learned
  - [ ] Conclusion + CTA
- [ ] Add timeline graphic
- [ ] Screenshots from project
- [ ] Client testimonial

#### 14.8 Write Article 5: "Why Most MVPs Fail (and How to Avoid It)"
- [ ] Target keyword: "MVP failure reasons"
- [ ] Word count: 2,000-2,500 words
- [ ] Structure:
  - [ ] Introduction: 70% of MVPs fail
  - [ ] Reason 1: Building too much
  - [ ] Reason 2: Taking too long
  - [ ] Reason 3: Wrong tech stack
  - [ ] Reason 4: No user feedback loop
  - [ ] Reason 5: Poor scope definition
  - [ ] How Mode avoids these pitfalls
  - [ ] Success stories
  - [ ] Conclusion + CTA
- [ ] Add data/statistics
- [ ] Internal links throughout

#### 14.9 Promotion Strategy
- [ ] Share on social media:
  - [ ] LinkedIn (personal + company page)
  - [ ] Twitter/X
  - [ ] Hacker News (if relevant)
  - [ ] Reddit (r/startups, r/SaaS)
  - [ ] Indie Hackers

- [ ] Email newsletter:
  - [ ] Send to email list
  - [ ] Segment by interest

- [ ] Guest posting:
  - [ ] Pitch to startup blogs
  - [ ] Dev.to, Hashnode cross-posting

- [ ] Backlink building:
  - [ ] Reach out to sites that link to similar content
  - [ ] Offer to update their content with your link

#### 14.10 Analytics & Optimization
- [ ] Track metrics:
  - [ ] Page views
  - [ ] Time on page
  - [ ] Bounce rate
  - [ ] Conversions (clicks to pricing, bookings)
  - [ ] Backlinks acquired

- [ ] Optimize based on data:
  - [ ] Update underperforming articles
  - [ ] Add internal links to new articles
  - [ ] Refresh old content

**Acceptance Criteria:**
- ✅ Blog infrastructure set up
- ✅ 5 articles published (1,500-2,500 words each)
- ✅ SEO optimized (meta tags, schema, images)
- ✅ Mobile responsive
- ✅ Fast loading (<3s)
- ✅ Promoted on social media
- ✅ Driving organic traffic

**Files to Create/Edit:**
- `/src/app/blog/page.tsx`
- `/src/app/blog/[slug]/page.tsx`
- `/src/content/blog/*.mdx` (5 articles)
- `/src/components/blog/article-card.tsx`
- `/src/components/blog/article-layout.tsx`
- `/src/lib/blog-utils.ts` (MDX parsing, metadata)
- `next.config.mjs` (MDX support)

---

# 📈 Success Metrics

## How to Measure Success:

### Conversion Metrics:
- [ ] **Booking rate**: % of visitors who book a call
  - [ ] Baseline: ?%
  - [ ] Target: +30% increase

- [ ] **Email capture rate**: % of visitors who give email
  - [ ] Baseline: ?%
  - [ ] Target: 10-15% of total visitors

- [ ] **Time on site**: Average session duration
  - [ ] Baseline: ?min
  - [ ] Target: +50% increase

### Traffic Metrics:
- [ ] **Organic traffic**: Visitors from search
  - [ ] Baseline: ?/month
  - [ ] Target: 500+/month (in 3 months)

- [ ] **Direct traffic**: Returning visitors
  - [ ] Baseline: ?%
  - [ ] Target: 25%+ of total traffic

### Trust Metrics:
- [ ] **Bounce rate**: % leaving after one page
  - [ ] Baseline: ?%
  - [ ] Target: <50%

- [ ] **Scroll depth**: How far users scroll
  - [ ] Baseline: ?%
  - [ ] Target: 60%+ scroll to pricing

---

# 🗓️ Implementation Timeline

## Week 1: Quick Wins
- [ ] Day 1-2: Calendly integration
- [ ] Day 2-3: Guarantee badge
- [ ] Day 3-4: Scarcity signals
- [ ] Day 4-5: Trusted by logos

## Week 2: Engagement
- [ ] Day 6-7: Live chat widget
- [ ] Day 8-10: Case study modals
- [ ] Day 10-12: Lead magnet creation
- [ ] Day 13-14: Mobile hero

## Week 3: Polish
- [ ] Day 15-16: Team/founder section
- [ ] Day 17-18: Comparison table
- [ ] Day 19-20: Exit intent popup
- [ ] Day 21: Testing & QA

## Ongoing (Weeks 4-8):
- [ ] Week 4: Blog infrastructure + Article 1
- [ ] Week 5: Article 2 + 3
- [ ] Week 6: Article 4 + 5
- [ ] Week 7: Process transparency
- [ ] Week 8: Optimization & analytics review

---

# 🚦 Status Dashboard

## Task Status:
- 🔴 Not Started: 13 tasks
- 🟡 In Progress: 0 tasks
- 🟢 Completed: 0 tasks
- ⏸️ Blocked: 0 tasks

## Priority Distribution:
- High Priority: 4 tasks (31% of total)
- Medium Priority: 4 tasks (31% of total)
- Low Priority: 3 tasks (23% of total)
- Technical: 2 tasks (15% of total)

## Estimated Completion:
- Quick wins (Week 1): ~9 hours
- Medium tasks (Week 2): ~25 hours
- Polish (Week 3): ~14 hours
- Ongoing (Weeks 4-8): ~26 hours
- **Total: ~74 hours** (2-3 weeks full-time)

---

# ✅ Next Steps

1. **Review this document** and prioritize tasks
2. **Assign tasks** to team members (if applicable)
3. **Set up tracking** (Notion, Linear, GitHub Issues)
4. **Start with Week 1** quick wins
5. **Measure results** after each implementation
6. **Iterate** based on analytics

---

**Last Updated:** 2025-12-08
**Document Owner:** Thiago Salvador
**Status:** Ready for Implementation
