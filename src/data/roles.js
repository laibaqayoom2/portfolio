export const ROLES = {
  aiml: {
    label: "AI/ML Dev",
    accent: "#5C3BFE",
    aR: "92,59,254",
    aL: "#EEEAFF",
    desc: "Building intelligent systems that learn, adapt, and solve real problems.",
    bio: "CS silver medalist with hands-on experience building end-to-end AI/ML systems — from custom-trained computer vision models (∼99.5% accuracy) to NLP pipelines and RESTful inference APIs deployed in production mobile and web environments.",
    stats: [
      { v: "99.5%", l: "Model Accuracy" },
      { v: "5+",    l: "ML Systems Built" },
      { v: "<100ms",l: "Inference Speed" },
    ],
    skills: [
      { cat: "AI / Machine Learning", items: ["PyTorch","TensorFlow","Hugging Face","YOLOv5/v8","OpenCV","spaCy","NLTK","Scikit-learn","RAG","LLMs","Embeddings"] },
      { cat: "Backend & APIs",        items: ["Python","Flask","FastAPI","Django","REST APIs","Firebase","MySQL"] },
      { cat: "Tools",                 items: ["Jupyter","Google Colab","Git","NumPy","Pandas","AWS EC2"] },
    ],
    defaultProjects: [
      {
        n: "Intellicarts — Smart Shopping System",
        d: "End-to-end retail AI: custom YOLOv5/v8 model at ~99.5% product recognition accuracy, Flask inference server, Firebase real-time sync, Flutter tablet + companion mobile app.",
        t: ["Python","YOLOv5/v8","Flutter","Firebase","Flask"],
        e: "🛒", link: "https://github.com/laibaqayoom2", thumbnail: "",
      },
      {
        n: "Conversational AI Chatbot (LLM)",
        d: "Transformer-based chatbot with intent classification, entity recognition, multi-session context handling, and real-time REST API — React + Tailwind frontend.",
        t: ["Hugging Face","spaCy","Flask","React","NLTK"],
        e: "🤖", link: "https://github.com/laibaqayoom2", thumbnail: "",
      },
      {
        n: "Movie Recommendation Engine",
        d: "Personalized recommendation system on MovieLens 100k using TF-IDF vectors and cosine similarity. Sub-500ms API response, RESTful endpoints.",
        t: ["Scikit-learn","Pandas","NumPy","Flask"],
        e: "🎬", link: "https://github.com/laibaqayoom2", thumbnail: "",
      },
      {
        n: "Sentiment Analysis API",
        d: "Real-time NLP pipeline with lexicon-based multi-class classification and confidence scoring. Optimised inference at <100ms response time.",
        t: ["NLTK","Python","Flask"],
        e: "📊", link: "https://github.com/laibaqayoom2", thumbnail: "",
      },
      {
        n: "Facial Recognition Attendance",
        d: "AI-powered attendance system using real-time facial recognition, Django backend, MySQL schema, and integrated ML model deployment.",
        t: ["Django","OpenCV","MySQL","Python"],
        e: "👁️", link: "https://github.com/laibaqayoom2", thumbnail: "",
      },
      {
        n: "Event Management Platform",
        d: "Full-stack Django platform with interactive calendar UI, event creation and tracking workflows, and automated ticket generation.",
        t: ["Django","JavaScript","MySQL"],
        e: "📅", link: "https://github.com/laibaqayoom2", thumbnail: "",
      },
    ],
  },

  design: {
    label: "Product Designer",
    accent: "#FF4800",
    aR: "255,72,0",
    aL: "#FFF1EC",
    desc: "Designing products people love — from wireframe to working site.",
    bio: "Product designer with a CS background. I own the full pipeline from Figma wireframes to live Webflow builds — with a track record of managing design teams and collaborating with US-based clients across 20+ shipped projects.",
    stats: [
      { v: "20+", l: "Sites Shipped" },
      { v: "50%", l: "Team Efficiency ↑" },
      { v: "1+",  l: "Years Experience" },
    ],
    skills: [
      { cat: "Design & Prototyping", items: ["Figma","Figma Make","Figma AI","Auto Layout","Wireframing","UI/UX Flows","Design Systems","Material Design","Ant Design"] },
      { cat: "Build & No-Code",      items: ["Webflow","Framer","WordPress","WooCommerce","HTML/CSS","React","JavaScript"] },
      { cat: "Visual & Creative",    items: ["Photoshop","Illustrator","Canva","Social Media","Brand Identity","Video Editing","Web Graphics"] },
    ],
    defaultProjects: [
      {
        n: "Noxora — AI SaaS Landing Page",
        d: "Dark-themed SaaS landing page for an AI-native workflow platform. Full design in Figma — hero, features, pricing tiers, and testimonials section.",
        t: ["Figma","SaaS Design","Dark UI"],
        e: "🖤", link: "https://www.figma.com/design/6uZQwjkaJ6J3hIexDnlUXS/", thumbnail: "/images/noxora.png",
        type: "Figma Design",
      },
      {
        n: "GXA — SaaS Landing Pages",
        d: "Multi-page Figma designs for a B2B IT/AI services company — homepage, service breakdowns, AI-readiness positioning, and CTA-focused conversion sections.",
        t: ["Figma","B2B SaaS","Landing Page"],
        e: "💻", link: "https://www.figma.com/design/6uZQwjkaJ6J3hIexDnlUXS/GXA--Copy-?node-id=2013-1932", thumbnail: "/images/saas-landing.png",
        type: "Figma Design",
      },
      {
        n: "Pakistan Property — Rental Page Redesign",
        d: "Full UX redesign of Pakistan Property's rental listing page in Figma. Improved search hierarchy, property card layout, trust signals, and mobile responsiveness.",
        t: ["Figma","UX Redesign","Real Estate"],
        e: "🏠", link: "https://www.figma.com/design/6uZQwjkaJ6J3hIexDnlUXS/GXA--Copy-?node-id=2032-727", thumbnail: "/images/pakistan-property.png",
        type: "Figma Design",
        caseStudy: "case-studies/pakistan-property-case-study.html",
      },
      {
        n: "Pulse Digital — Marketing Agency Site",
        d: "Full Webflow build for a digital marketing agency — CMS-powered case studies, team pages, service collections, awards section, and a multi-step contact flow.",
        t: ["Webflow","CMS","Marketing"],
        e: "📣", link: "https://pulsedigital.webflow.io/", thumbnail: "/images/pulse-digital.png",
        type: "Webflow Build",
      },
      {
        n: "Unmudl — EdTech Marketplace",
        d: "Landing and About pages for a nationwide Skills-to-Jobs® platform. Custom code, CMS-driven course and employer pages, web graphics, and animated sections.",
        t: ["Webflow","CMS","Custom Code","EdTech"],
        e: "🎓", link: "https://unmudl.com", thumbnail: "/images/unmudl.png",
        type: "Webflow Build",
      },
      {
        n: "Manufacturing DFW — Workforce Platform",
        d: "Full Webflow site for a Dallas-Fort Worth manufacturing workforce initiative — 3-path signup (job seekers, manufacturers, colleges), CMS employer pages, all graphics.",
        t: ["Webflow","CMS","UX"],
        e: "🏭", link: "https://manufacturingdfw.org", thumbnail: "/images/dfw.png",
        type: "Webflow Build",
      },
      {
        n: "Technician Economy Network",
        d: "Webflow sites for the Technician Economy initiative — 10+ CMS collections, 50+ dynamically generated state pages, partner forms, and research content hubs.",
        t: ["Webflow","CMS Architecture","50+ Pages"],
        e: "⚡", link: "https://techniciansoftomorrow.org", thumbnail: "/images/technician-economy.png",
        type: "Webflow Build",
      },
      {
        n: "Daaman FC — Football Academy",
        d: "WordPress site for Punjab's first female-owned football academy — event listings, membership tiers, gallery, camp registrations, and a live fixtures section.",
        t: ["WordPress","Sports","Events"],
        e: "⚽", link: "https://daaman.net/", thumbnail: "/images/daaman-fc.png",
        type: "WordPress Build",
      },
      {
        n: "Daaman International — Remote Jobs",
        d: "WordPress career platform connecting Pakistani talent with global employers — live job board, service pages, blog, and guided 3-step application flow.",
        t: ["WordPress","Job Board","Career"],
        e: "🌍", link: "https://daaman.net/", thumbnail: "/images/daaman-intl.png",
        type: "WordPress Build",
      },
      {
        n: "Scently — Perfume E-Commerce",
        d: "Custom WooCommerce theme for a Pakistani fragrance brand — shop by scent note, couple & corporate sets, bundle builder, tester packs, and sale countdowns.",
        t: ["WordPress","WooCommerce","E-Commerce"],
        e: "🌸", link: "https://scently.com.pk", thumbnail: "/images/scently.png",
        type: "WordPress Build",
      },
    ],
  },
};

export const MARQUEE_ITEMS = [
  "Figma","Webflow","Python","React","YOLO","Django","Flask","Framer",
  "TensorFlow","Photoshop","Flutter","Firebase","NLP","WordPress","PyTorch",
  "Illustrator","Hugging Face","OpenCV",
];

// ── TESTIMONIALS ────────────────────────────────────────────────────────────
// Replace placeholder text with real quotes from your clients.
// avatar: optional URL to a photo. If blank, initials are shown instead.
export const TESTIMONIALS = [
  {
    quote: "Add a testimonial from one of your Webflow or Daaman clients here. Even a short Slack message or email works — just ask them.",
    name: "Client Name",
    role: "Founder, Company",
    avatar: "",
    placeholder: true,
  },
  {
    quote: "Add a testimonial from a Figma or SaaS design client here.",
    name: "Client Name",
    role: "CEO, Company",
    avatar: "",
    placeholder: true,
  },
  {
    quote: "Add a testimonial from a WordPress or WooCommerce client here.",
    name: "Client Name",
    role: "Owner, Company",
    avatar: "",
    placeholder: true,
  },
];
