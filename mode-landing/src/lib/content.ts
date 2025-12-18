export const content = {
  site: {
    name: "Mode",
    description: "The partner for founders building products with AI",
  },
  navbar: {
    logo: {
      alt: "Mode logo",
    },
    links: [
      { label: "Work", href: "#work" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#cta" },
    ],
    primaryCta: {
      label: "Book a call",
      href: "#cta",
    },
  },
  hero: {
    badge: {
      text: ["Mode Studio", "•", "AI Product Partner"],
    },
    anxietyHook: "How do you ship an AI MVP when you're not technical?",
    headline: {
      massive: ["SHIP", "YOUR AI", "IN 14 DAYS"],
      traditional: {
        start: "Stop wasting months.",
        highlight: "Ship in 2 weeks.",
      },
    },
    subheadline: "While other founders spend 6 months and $100k+ on MVPs that never ship, you'll have real users testing your AI product in 14 days. Fixed €3,500. No hourly billing. No surprises.",
    primaryCta: {
      label: "Book Call",
      href: "#cta",
    },
    secondaryCta: {
      label: "View our work",
      href: "#work",
    },
    image: "/hero-abstract.png",
  },
  trustedBy: {
    eyebrow: "Backed by the best",
    title: "Trusted by founders from",
    logos: [
      { name: "Y Combinator", image: "/logos/yc.svg", tier: "accelerator" },
      { name: "Techstars", image: "/logos/techstars.svg", tier: "accelerator" },
      { name: "500 Global", image: "/logos/500global.svg", tier: "accelerator" },
      { name: "Antler", image: "/logos/antler.svg", tier: "accelerator" },
      { name: "Startup Lisboa", image: "/logos/startup-lisboa.svg", tier: "accelerator" },
    ],
  },
  comparison: {
    eyebrow: "Why choose Mode",
    title: "The smart way to build",
    features: [
      { name: "Time to market", traditional: "3-6 months", mode: "2 weeks" },
      { name: "Cost", traditional: "$50k - $100k+", mode: "Fixed €3.5k" },
      { name: "Risk", traditional: "High (Hourly billing)", mode: "Zero (Outcome based)" },
      { name: "Tech Stack", traditional: "Often outdated", mode: "Modern AI Stack" },
      { name: "Ownership", traditional: "Locked in contracts", mode: "100% Yours" },
    ],
  },
  whyMode: {
    eyebrow: "Why choose Mode",
    title: "Stop wasting time. Start shipping.",
    subtitle: "Most agencies drag projects for months. We deliver in 2 weeks.",
    heroStats: [
      {
        icon: "⚡",
        label: "Speed",
        mainNumber: "2 weeks",
        comparison: "vs 3-6 months",
        subtitle: "85% faster to market",
        gradient: "from-pink-500 to-orange-500",
      },
      {
        icon: "💰",
        label: "Cost",
        mainNumber: "€3,500",
        comparison: "vs $50k - $100k+",
        subtitle: "Save up to 95%",
        gradient: "from-indigo-500 to-purple-500",
      },
      {
        icon: "✓",
        label: "Ownership",
        mainNumber: "100%",
        comparison: "vs Locked contracts",
        subtitle: "You own everything",
        gradient: "from-green-500 to-emerald-600",
      },
    ],
    traditional: {
      title: "Traditional Agency",
      features: [
        { label: "Time to market", value: "3-6 months", negative: true },
        { label: "Cost", value: "$50k - $100k+", negative: true },
        { label: "Risk", value: "High (Hourly billing)", negative: true },
        { label: "Tech Stack", value: "Often outdated", negative: true },
        { label: "Ownership", value: "Locked in contracts", negative: true },
        { label: "Process", value: "Endless meetings", negative: true },
      ],
    },
    modeSprint: {
      title: "Mode Sprint",
      features: [
        { label: "Time to market", value: "2 weeks", negative: false },
        { label: "Cost", value: "Fixed €3,500", negative: false },
        { label: "Risk", value: "Zero (Outcome based)", negative: false },
        { label: "Tech Stack", value: "Modern AI Stack", negative: false },
        { label: "Ownership", value: "100% Yours", negative: false },
        { label: "Process", value: "Ship fast, learn faster", negative: false },
      ],
    },
    benefits: [
      {
        icon: "🚀",
        title: "Ship Fast",
        body: "Launch in 2 weeks, not 6 months. Get your product in front of real users and start learning immediately.",
      },
      {
        icon: "💎",
        title: "Fixed Price",
        body: "No surprise fees. No hourly billing. Pay €3,500 total and know exactly what you're getting.",
      },
      {
        icon: "🏆",
        title: "100% Yours",
        body: "Full code ownership from day one. No vendor lock-in. Take your product anywhere.",
      },
    ],
  },
  metricsStrip: {
    eyebrow: "Trusted by ambitious founders",
    items: [
      { label: "MVPs Shipped", value: "20+" },
      { label: "Capital Raised by Clients", value: "$12M+" },
      { label: "Average Time to Launch", value: "14 days" },
    ],
  },
  benefitCards: {
    eyebrow: "Our Philosophy",
    title: "Built for speed and scale",
    cards: [
      {
        title: "Strategic Clarity",
        body: "We don't just build. We help you define the right product to build. We cut through the noise to focus on high-impact features.",
      },
      {
        title: "Production-Grade AI",
        body: "Leveraging the latest models with sensible architecture. We build systems that are reliable, cost-effective, and ready for real users.",
      },
      {
        title: "Launch & Iterate",
        body: "Shipping is just the beginning. We set up the analytics and feedback loops you need to iterate fast based on real market data.",
      },
    ],
  },
  process: {
    eyebrow: "The Process",
    title: "From concept to code",
    steps: [
      {
        label: "Phase 1",
        title: "Discovery & Scope",
        text: "We deep dive into your vision, challenge assumptions, and define a sharp, shippable MVP scope.",
      },
      {
        label: "Phase 2",
        title: "Design & Architecture",
        text: "High-fidelity UI design paired with a robust technical architecture plan. We solve the hard problems first.",
      },
      {
        label: "Phase 3",
        title: "Build & Integrate",
        text: "Rapid development using modern stacks. We integrate AI models, databases, and auth systems seamlessly.",
      },
      {
        label: "Phase 4",
        title: "Launch & Handoff",
        text: "Rigorous testing, deployment, and a complete code handoff. You own everything we build.",
      },
    ],
  },
  workShowcase: {
    eyebrow: "Recent launches",
    title: "Real products. Real users. Real results.",
    cards: [
      {
        label: "No Divã Community Platform",
        summary: "Complete community platform with forum, video classes, shop, and admin console. Built in under 5 days. Serving thousands of active members.",
        tag: "Full-Stack Platform",
        image: "/work/no-diva.png",
        caseStudy: {
          challenge: "A mental health professional needed a comprehensive community platform to deliver video classes, manage a shop, facilitate discussions, and handle admin operations—all in one place.",
          solution: "Built a full-stack Next.js platform with integrated forum, video streaming, e-commerce shop, and admin console. Implemented user authentication, content management, and payment processing.",
          results: [
            "Thousands of active community members",
            "Complete platform delivered in under 5 days",
            "100+ video classes hosted and streamed",
            "Integrated shop with payment processing"
          ],
          tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Video Streaming"],
          timeline: "5 days",
        },
      },
      {
        label: "Adote Um Gatinho",
        summary: "Cat adoption platform for rescue NGO. 500+ successful adoptions facilitated. Smart filtering by age and special needs. Built with Next.js.",
        tag: "Social Impact",
        image: "/work/adote-um-gatinho.png",
        caseStudy: {
          challenge: "An animal rescue NGO needed a platform to showcase cats for adoption, with smart filtering by age, special needs, and location to increase successful matches.",
          solution: "Developed a responsive adoption platform with advanced filtering, detailed cat profiles, and a streamlined adoption request system. Integrated admin panel for easy content management.",
          results: [
            "500+ successful adoptions facilitated",
            "Smart filtering by age and special needs",
            "Mobile-responsive for on-the-go browsing",
            "Admin panel for easy updates"
          ],
          tech: ["Next.js", "React", "Tailwind CSS", "CMS Integration"],
          timeline: "2 weeks",
        },
      },
      {
        label: "Win Like A Löwe",
        summary: "Professional consultancy brand website. Production-ready in 2 weeks with modern stack and polished design.",
        tag: "Brand Website",
        image: "/work/win-like-a-lowe.png",
        caseStudy: {
          challenge: "A business consultancy needed a professional website that reflected their premium positioning and attracted high-value clients.",
          solution: "Created a polished, modern website with smooth animations, clear value proposition, and lead capture forms. Optimized for performance and SEO.",
          results: [
            "Production-ready in 2 weeks",
            "Modern, polished design",
            "Optimized for conversions",
            "Fast page load times"
          ],
          tech: ["Next.js", "Framer Motion", "Tailwind CSS", "SEO Optimization"],
          timeline: "2 weeks",
        },
      },
    ],
  },
  pricing: {
    eyebrow: "Engagement Models",
    title: "Flexible partnership options",
    plans: [
      {
        name: "Mode Protocol",
        price: "€3,500",
        summary: "Rapid design and build for a core product version.",
        features: [
          "Product strategy & scoping",
          "High-fidelity UI/UX design",
          "Full stack development",
          "AI integration",
          "Analytics setup",
        ],
        ctaLabel: "Book Sprint",
        highlight: false,
      },
      {
        name: "Product Partner",
        price: "€9,500",
        summary: "End-to-end partnership for complex AI products.",
        features: [
          "Everything in Mode Protocol",
          "Advanced AI agents & workflows",
          "Payment & subscription systems",
          "30 days post-launch support",
          "Weekly strategy sessions",
        ],
        ctaLabel: "Discuss Partnership",
        highlight: true,
      },
    ],
  },
  testimonials: {
    eyebrow: "What founders say",
    title: "Don't take our word for it",
    items: [
      {
        name: "Alex Chen, Founder @ Pulse Analytics (YC W24)",
        quote: "We had been stuck in 'strategy mode' for 4 months. Mode forced us to cut scope and ship something testable in 2 weeks. That MVP helped us raise €400k. Worth every euro.",
      },
      {
        name: "Sarah Miller, CEO @ CreatorOS",
        quote: "I'm non-technical and terrified of being ripped off. Mode showed me the codebase every 2 days, explained every decision, and delivered exactly on time. Now we have 800 paying users.",
      },
      {
        name: "James Wilson, Product Lead @ Workflow AI (Techstars '24)",
        quote: "Most agencies promise 'production-ready' but deliver prototypes. Mode shipped a real product—with error handling, monitoring, the works. Our first 100 users had zero technical issues.",
      },
    ],
  },
  faqs: {
    title: "Questions founders actually ask",
    items: [
      {
        question: "Why should I trust you with my idea?",
        answer: "Fair question. We've shipped 20+ MVPs—100% made it to production. Every client gets GitHub access from day 1, so you see every commit. We also sign NDAs before any discovery call. Your idea is safe.",
      },
      {
        question: "How long does a typical project take?",
        answer: "Most MVP builds are completed in 3-4 weeks. More complex partnerships can range from 6-8 weeks depending on scope.",
      },
      {
        question: "Do I own the code?",
        answer: "Yes, 100%. Upon completion and final payment, all intellectual property, code, and design assets are transferred to you.",
      },
      {
        question: "What tech stack do you use?",
        answer: "We use modern, scalable tools like Next.js, React, Tailwind CSS, Supabase, and Python for backend AI processing.",
      },
      {
        question: "Do you offer maintenance?",
        answer: "We offer post-launch support packages to handle updates, bug fixes, and minor feature additions as you scale.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Stop planning. Start shipping.",
    title: "Get your 14-day product plan—free",
    subtitle: "Tell us about your idea. We'll send you a detailed sprint plan within 24 hours—no obligation, no sales call required.",
    form: {
      fields: [
        { name: "name", label: "Your name", type: "text" },
        { name: "email", label: "Your email", type: "email" },
        { name: "company", label: "Your company (optional)", type: "text" },
        { name: "region", label: "Where are you based?", type: "select", options: ["Europe", "North America", "APAC", "Other"] },
        { name: "idea", label: "Describe your product idea in 2-3 sentences", type: "textarea" },
      ],
      submitLabel: "Get My Sprint Plan →",
      successMessage: "✅ Got it! We'll send your detailed sprint plan within 24 hours. Check your email (including spam) from hello@modemvp.studio.",
    },
  },
  team: {
    eyebrow: "Meet the team",
    title: "Built by founders, for founders",
    members: [
      {
        name: "Thiago Salvador",
        role: "Co-Founder & AI Specialist",
        bio: "10+ years building products | Ex-Startup Lisboa | AI Product Expert",
        image: "/team/thiago-salvador.jpg",
        linkedin: "https://www.linkedin.com/in/salvadorthiago/",
      },
      {
        name: "Annika Löwe",
        role: "Co-Founder & Business Development",
        bio: "Former YC Product Lead | 50+ founders helped | Launch specialist",
        image: "/team/annika-lowe.jpg",
        linkedin: "https://www.linkedin.com/in/annika-l%C3%B6we-618b1863/",
      },
    ],
  },
  about: {
    eyebrow: "About Mode",
    title: "Your partner in building AI products",
    paragraphs: [
      "Mode is a digital product studio that specializes in helping founders build AI-powered MVPs in record time. We combine strategic product thinking with cutting-edge AI technology to deliver production-grade products in just 2 weeks.",
      "Our team has worked with startups across Europe and North America, helping them validate ideas, raise capital, and launch products that users love. We believe in shipping fast, learning faster, and building the right product—not just any product.",
      "When you work with Mode, you're not just hiring developers. You're partnering with a team that cares about your success as much as you do.",
    ],
    stats: [
      { label: "Years of Experience", value: "10+" },
      { label: "Products Launched", value: "20+" },
      { label: "Success Rate", value: "100%" },
      { label: "Countries Served", value: "15+" },
    ],
  },
  footer: {
    leftText: "Mode is a digital product studio partnering with founders to build the next generation of AI companies.",
    contactEmail: "hello@modemvp.studio",
    socialLinks: [
      { name: "LinkedIn", url: "https://www.linkedin.com/company/mode-studio", icon: "linkedin" },
      { name: "Instagram", url: "https://www.instagram.com/mode.studio", icon: "instagram" },
    ],
    secondaryLinks: [
      { label: "Services", href: "#how-it-works" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "#faqs" },
    ],
    bottomNote: "© 2024 Mode Studio. All rights reserved.",
  },
};
