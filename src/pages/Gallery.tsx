import { useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, Rocket, Skull, Camera, TrendingUp, ExternalLink, Github, BookOpen, X, ChevronLeft, ChevronRight, Zap, Users, Code, Star, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import DoodleShapes from "@/components/DoodleShapes";
import SectionReveal from "@/components/SectionReveal";

/* ── Data ── */
const achievements = [
  {
    type: "hackathon",
    name: "SRM Hackathon 2025",
    award: "First Place",
    awardIcon: "🏆",
    project: "QuickBite - Food Delivery Optimizer",
    desc: "Built an AI tool to reduce food delivery times by 40%. Judges loved the real-world application.",
    tech: ["Python", "TensorFlow", "React"],
    image: "/gallery/hackathon-win.png",
    link: "#",
    linkLabel: "View Live Demo",
  },
  {
    type: "hackathon",
    name: "VIT Hackathon 2024",
    award: "Second Place",
    awardIcon: "🥈",
    project: "StudyBuddy - AI Study Planner",
    desc: "Helps students plan study schedules based on their learning patterns.",
    tech: ["Next.js", "OpenAI API", "MongoDB"],
    image: "/gallery/team-presenting.png",
    link: "#",
    linkLabel: "GitHub",
  },
  {
    type: "hackathon",
    name: "Amrita TechFest 2024",
    award: "Best Innovation Award",
    awardIcon: "🎯",
    project: "WasteWise - Smart Waste Management",
    desc: "IoT-based system to optimize waste collection routes in cities.",
    tech: ["IoT", "Arduino", "Flutter"],
    image: "/gallery/demo-booth.png",
    link: "#",
    linkLabel: "Case Study",
  },
  {
    type: "hackathon",
    name: "Anna University Hackathon 2024",
    award: "Top 10 Finalist",
    awardIcon: "🏅",
    project: "LocalConnect - Hyperlocal Marketplace",
    desc: "Didn't win but learned SO much about product-market fit.",
    tech: ["React Native", "Firebase"],
    image: "/gallery/late-night-coding.png",
    link: "#",
    linkLabel: "What We Learned",
  },
];

const startups = [
  {
    name: "TaskFlow",
    tagline: "Smart To-Do App for Students",
    subtitle: "Task management built for student life, not corporate workers",
    status: "Active",
    statusDetail: "10,000+ Downloads | 4.8★ Rating",
    origin: "Started at VIT Hackathon 2023. We built a basic version in 24 hours, students loved it, so we kept improving it. Now it's on Play Store and students from 50+ colleges use it daily.",
    impact: ["10K+ active users", "Featured in 5 college newsletters", "Helped students complete 100K+ tasks", "Completely free (no BS subscriptions)"],
    tech: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    image: "/gallery/hackathon-win.png",
    cta1: { label: "Try TaskFlow", link: "#" },
    cta2: { label: "Read Our Story", link: "#" },
  },
  {
    name: "CampusCart",
    tagline: "College Marketplace",
    subtitle: "Buy/sell/rent stuff within your campus",
    status: "Live in 8 Colleges",
    statusDetail: "2,000+ Transactions",
    origin: "Born from frustration — we needed to buy used books but couldn't find sellers. Built this at Anna Hackathon 2024, launched in our college first. Word spread, now 8 campuses use it.",
    impact: ["2K+ successful transactions", "Saved students ₹5L+ on books/electronics", "Zero commission (seriously, it's free)", "Growing organically through word-of-mouth"],
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    image: "/gallery/team-presenting.png",
    cta1: { label: "Join Your Campus", link: "#" },
    cta2: { label: "How We Built It", link: "#" },
  },
  {
    name: "CodePal",
    tagline: "Peer Programming Platform",
    subtitle: "Find coding partners for projects & hackathons",
    status: "Beta",
    statusDetail: "500+ Students Connected",
    origin: "We were always struggling to find teammates for hackathons. Built a simple matching platform in 48 hours. Still improving it based on user feedback.",
    impact: ["Matched 500+ students with coding partners", "Helped form 100+ hackathon teams", "Active in 15+ colleges", "Still learning what students need"],
    tech: ["React", "Firebase", "WebRTC"],
    image: "/gallery/demo-booth.png",
    cta1: { label: "Join Beta", link: "#" },
    cta2: { label: "Give Feedback", link: "#" },
  },
];

const failures = [
  {
    name: "SnapStudy",
    idea: "Photo-to-Notes Converter",
    icon: "📸",
    what: "Built it at SRM Hackathon. Demo worked perfectly. Launched to real users — server crashed immediately. Turns out 10 test users ≠ 1000 real users.",
    lessons: ["Test at scale before launching", "Free tier AWS isn't enough lol", "Infrastructure matters as much as features"],
    status: "Dead (but the code taught us a lot)",
  },
  {
    name: "FitTrack",
    idea: "College Gym Tracker",
    icon: "🗑️",
    what: "Spent 3 months building it. Perfect design, smooth UX. Launched it — nobody used it. Turns out students already use Google Sheets.",
    lessons: ["Build for a real problem, not one you assume", "Talk to users BEFORE building", "Sometimes the simple solution is enough"],
    status: "Retired with honors",
  },
  {
    name: "BunkManager",
    idea: "Attendance Calculator",
    icon: "😅",
    what: "Built in 24 hours. Teachers found out. Got called to principal's office. Had to shut it down.",
    lessons: ["Some ideas are too risky for college students lol", "Think about consequences before launching", "Still, the tech was solid"],
    status: "We don't talk about this one",
  },
];

const behindScenes = [
  { src: "/gallery/late-night-coding.png", caption: "3 AM: When the code finally works but you forget why" },
  { src: "/gallery/hackathon-win.png", caption: "Victory tastes like cold pizza" },
  { src: "/gallery/team-presenting.png", caption: "Debugging: A hackathon love story" },
  { src: "/gallery/demo-booth.png", caption: "Our natural habitat: Caffeine + Code" },
  { src: "/gallery/late-night-coding.png", caption: "When you fix one bug and three more appear" },
  { src: "/gallery/hackathon-win.png", caption: "The post-hackathon glow (aka sleep deprivation)" },
];

const stats = [
  { number: "15+", label: "Hackathons", icon: Trophy },
  { number: "5", label: "Startups Built", icon: Rocket },
  { number: "50+", label: "All-Nighters Pulled", icon: Code },
  { number: "10K+", label: "Users Reached", icon: Users },
  { number: "100+", label: "Students Helped", icon: Star },
  { number: "∞", label: "Cups of Coffee", icon: Zap },
];

const timeline = [
  { year: "2022", title: "First Hackathon", sub: "(We lost)", quote: "What's an API?" },
  { year: "2023", title: "First Win", sub: "(SRM 2023)", quote: "Wait, we won?" },
  { year: "2024", title: "First Startup", sub: "(TaskFlow Live)", quote: "People actually use this?" },
  { year: "2025", title: "Now Teaching Others!", sub: "", quote: "Let's help more students" },
];

const filters = ["All", "Hackathons", "Startups", "Failures", "Process"] as const;
type Filter = typeof filters[number];

/* ── Component ── */
const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);
  const [lbIndex, setLbIndex] = useState(0);

  const openLightbox = (idx: number) => {
    setLbIndex(idx);
    setLightbox(behindScenes[idx]);
  };
  const navLightbox = (dir: number) => {
    const next = (lbIndex + dir + behindScenes.length) % behindScenes.length;
    setLbIndex(next);
    setLightbox(behindScenes[next]);
  };

  const showSection = (section: string) => activeFilter === "All" || activeFilter === section;

  return (
    <Layout>
      {(() => {
        document.title = "Our Journey — HACK-TALKS";
        return null;
      })()}

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden" style={{ background: "linear-gradient(170deg, hsl(270 56% 30%) 0%, hsl(270 56% 45%) 40%, hsl(270 56% 53%) 100%)" }}>
        <DoodleShapes />
        {/* Yellow accent doodles */}
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full opacity-10" style={{ background: "hsl(var(--yellow))" }} />
        <div className="absolute bottom-20 left-16 w-20 h-20 rounded-full opacity-10" style={{ background: "hsl(var(--yellow))" }} />
        <svg className="absolute top-[15%] right-[20%] w-16 h-16 animate-float opacity-20" viewBox="0 0 50 50" fill="none">
          <path d="M25 2L30 20H48L34 30L38 48L25 38L12 48L16 30L2 20H20L25 2Z" fill="hsl(var(--yellow))" />
        </svg>
        <svg className="absolute bottom-[25%] left-[10%] w-24 h-12 animate-wiggle opacity-15" viewBox="0 0 80 40" fill="none">
          <path d="M5 20C15 5 25 35 35 20C45 5 55 35 65 20C75 5 80 20 80 20" stroke="hsl(var(--yellow))" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <div className="container mx-auto px-4 py-28 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-semibold border border-white/20 mb-6">
              All built by students 🚀
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight max-w-3xl mx-auto">
              Our Journey{" "}
              <span className="text-handwritten text-yellow block text-5xl sm:text-6xl lg:text-7xl mt-1">So Far</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              We've been to 15+ hackathons, built 5 actual products, and learned a TON through trial and error. Here's the proof that we're real students who actually do this stuff.
            </p>
            <p className="text-white/50 text-sm mt-3 italic">Not flexing — just showing you we've been where you are and made it work.</p>
          </motion.div>
        </div>
      </section>

      {/* ═══ SPONSOR BADGE ═══ */}
      <div className="bg-white border-b border-border/50 py-4">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <span className="text-muted-foreground text-sm font-medium">Sponsored by</span>
          <a href="https://trios-innovation-startup.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/trios innovation.png" alt="Trios Innovation" className="w-8 h-8 object-contain" />
            <span className="font-heading font-bold text-foreground text-sm">TRIOS INNOVATION</span>
          </a>
        </div>
      </div>

      {/* ═══ FILTER TABS ═══ */}
      <section className="py-8 bg-white sticky top-[60px] z-40 border-b border-border/50 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-2">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeFilter === f
                  ? "bg-primary text-white shadow-lg shadow-purple/20"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* ═══ SECTION 1: HACKATHON ACHIEVEMENTS ═══ */}
      <AnimatePresence>
        {showSection("Hackathons") && (
          <motion.section
            key="hackathons"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="py-20 bg-white overflow-hidden"
          >
            <div className="container mx-auto px-4">
              <SectionReveal>
                <div className="text-center mb-4">
                  <div className="section-label mx-auto"><Trophy className="w-4 h-4" /> Hackathon Wins</div>
                  <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mt-3">
                    Hackathon Wins &{" "}
                    <span className="text-handwritten text-primary text-4xl md:text-5xl">Achievements</span>
                  </h2>
                  <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
                    These are some of the hackathons we've participated in. We didn't win everything (definitely not). But every single one taught us something new.
                  </p>
                </div>
              </SectionReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
                {achievements.map((a, i) => (
                  <SectionReveal key={a.name} delay={i * 0.08}>
                    <div className="bg-white rounded-2xl border border-border overflow-hidden card-hover group h-full flex flex-col">
                      {/* Image */}
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={a.image}
                          alt={a.name}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <span>{a.awardIcon}</span> {a.award}
                        </div>
                      </div>
                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <p className="text-xs font-bold text-primary uppercase tracking-wider">{a.name}</p>
                        <h3 className="font-heading text-base font-bold text-foreground mt-1 leading-snug">{a.project}</h3>
                        <p className="text-muted-foreground text-sm mt-2 leading-relaxed flex-1">{a.desc}</p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {a.tech.map(t => (
                            <span key={t} className="px-2 py-0.5 rounded-md bg-purple/5 text-purple text-[10px] font-bold">{t}</span>
                          ))}
                        </div>
                        <a href={a.link} className="inline-flex items-center gap-1 text-primary text-sm font-bold mt-4 hover:gap-2 transition-all">
                          {a.linkLabel} <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ═══ SECTION 2: STARTUPS ═══ */}
      <AnimatePresence>
        {showSection("Startups") && (
          <motion.section
            key="startups"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="py-20 bg-muted/30 overflow-hidden"
          >
            <div className="container mx-auto px-4">
              <SectionReveal>
                <div className="text-center mb-4">
                  <div className="section-label mx-auto"><Rocket className="w-4 h-4" /> Our Startups</div>
                  <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mt-3">
                    From Hackathon to{" "}
                    <span className="text-handwritten text-primary text-4xl md:text-5xl">Real Products</span>
                  </h2>
                  <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
                    Not gonna lie — we didn't think any of our hackathon projects would turn into real startups. But when students kept asking for the app link, we thought "maybe we're onto something?"
                  </p>
                </div>
              </SectionReveal>
              <div className="space-y-8 mt-12 max-w-5xl mx-auto">
                {startups.map((s, i) => (
                  <SectionReveal key={s.name} delay={i * 0.1}>
                    <div className="bg-white rounded-2xl border border-border overflow-hidden card-hover group">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Image */}
                        <div className="relative overflow-hidden h-64 md:h-auto">
                          <img src={s.image} alt={s.name} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" loading="lazy" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r" />
                          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                            <span className="px-3 py-1 rounded-full bg-green-500/90 text-white text-xs font-bold">📊 {s.status}</span>
                          </div>
                        </div>
                        {/* Content */}
                        <div className="p-6 md:p-8 flex flex-col justify-center">
                          <h3 className="font-heading text-xl font-extrabold text-foreground">{s.name} — <span className="text-primary">{s.tagline}</span></h3>
                          <p className="text-muted-foreground text-sm italic mt-1">"{s.subtitle}"</p>
                          <p className="text-xs font-bold text-muted-foreground mt-2 uppercase tracking-wider">{s.statusDetail}</p>
                          <p className="text-muted-foreground text-sm mt-4 leading-relaxed">{s.origin}</p>
                          <div className="mt-4 space-y-1.5">
                            {s.impact.map(imp => (
                              <div key={imp} className="flex items-center gap-2 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                <span className="text-foreground font-medium">{imp}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-4">
                            {s.tech.map(t => (
                              <span key={t} className="px-2.5 py-1 rounded-lg bg-purple/5 text-purple text-xs font-bold">{t}</span>
                            ))}
                          </div>
                          <div className="flex gap-3 mt-5">
                            <a href={s.cta1.link} className="btn-primary-workshop !py-2 !px-5 !text-sm !rounded-lg">
                              {s.cta1.label} →
                            </a>
                            <a href={s.cta2.link} className="btn-secondary-workshop !py-2 !px-5 !text-sm !rounded-lg">
                              {s.cta2.label} →
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ═══ SECTION 3: FAILURES ═══ */}
      <AnimatePresence>
        {showSection("Failures") && (
          <motion.section
            key="failures"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="py-20 bg-white overflow-hidden"
          >
            <div className="container mx-auto px-4">
              <SectionReveal>
                <div className="text-center mb-4">
                  <div className="section-label mx-auto"><Skull className="w-4 h-4" /> The Graveyard</div>
                  <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mt-3">
                    Projects That{" "}
                    <span className="text-handwritten text-primary text-4xl md:text-5xl">Didn't Work</span>
                  </h2>
                  <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
                    Real talk: Most of what we built didn't work. Some projects crashed, some nobody used, and one got us in trouble with college admin (oops). But failures teach way more than wins.
                  </p>
                </div>
              </SectionReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
                {failures.map((f, i) => (
                  <SectionReveal key={f.name} delay={i * 0.1}>
                    <div className="bg-muted/40 rounded-2xl border border-border/60 p-6 card-hover h-full flex flex-col relative overflow-hidden">
                      {/* Faded bg icon */}
                      <div className="absolute top-4 right-4 text-5xl opacity-10">{f.icon}</div>
                      <div className="text-3xl mb-3">{f.icon}</div>
                      <h3 className="font-heading text-lg font-bold text-foreground">{f.name}</h3>
                      <p className="text-primary text-sm font-semibold">{f.idea}</p>
                      <div className="mt-4 flex-1">
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">What happened:</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{f.what}</p>
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-4 mb-1">What we learned:</p>
                        <ul className="space-y-1">
                          {f.lessons.map(l => (
                            <li key={l} className="flex items-start gap-2 text-sm text-foreground">
                              <span className="text-primary mt-0.5">•</span> {l}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4 pt-3 border-t border-border/50">
                        <span className="text-xs font-bold text-muted-foreground italic">Status: {f.status}</span>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ═══ SECTION 4: BEHIND THE SCENES ═══ */}
      <AnimatePresence>
        {showSection("Process") && (
          <motion.section
            key="process"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="py-20 bg-muted/30 overflow-hidden"
          >
            <div className="container mx-auto px-4">
              <SectionReveal>
                <div className="text-center mb-4">
                  <div className="section-label mx-auto"><Camera className="w-4 h-4" /> Behind The Scenes</div>
                  <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mt-3">
                    The Reality of{" "}
                    <span className="text-handwritten text-primary text-4xl md:text-5xl">Hackathons</span>
                  </h2>
                  <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
                    What it actually looks like when we're building stuff. Spoiler: it involves a lot of caffeine and questionable life choices.
                  </p>
                </div>
              </SectionReveal>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 max-w-5xl mx-auto">
                {behindScenes.map((photo, i) => (
                  <SectionReveal key={i} delay={i * 0.06}>
                    <div
                      className="group cursor-pointer"
                      onClick={() => openLightbox(i)}
                    >
                      <div className="bg-white p-3 rounded-xl shadow-md shadow-purple/5 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple/10 group-hover:-rotate-0"
                        style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
                      >
                        <div className="overflow-hidden rounded-lg">
                          <img
                            src={photo.src}
                            alt={photo.caption}
                            className="w-full h-40 md:h-52 object-cover transition-all duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                        <p className="text-handwritten text-center text-sm md:text-base text-muted-foreground mt-3 px-2 pb-1">{photo.caption}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ═══ LIGHTBOX ═══ */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-4 right-4 text-white/70 hover:text-white p-2" onClick={() => setLightbox(null)}>
              <X className="w-8 h-8" />
            </button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2" onClick={(e) => { e.stopPropagation(); navLightbox(-1); }}>
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2" onClick={(e) => { e.stopPropagation(); navLightbox(1); }}>
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.div
              key={lbIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.caption} className="w-full max-h-[75vh] object-contain rounded-2xl" />
              <p className="text-handwritten text-white text-center text-xl mt-4">{lightbox.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ SECTION 5: STATS ═══ */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <DoodleShapes />
        <div className="container mx-auto px-4 relative z-10">
          <SectionReveal>
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest border border-white/20 mb-4">
                <TrendingUp className="w-3.5 h-3.5 inline mr-1.5" /> By The Numbers
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white">
                Our Stats{" "}
                <span className="text-handwritten text-yellow text-4xl md:text-5xl">So Far</span>
              </h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {stats.map((s, i) => (
              <SectionReveal key={s.label} delay={i * 0.08}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-center border border-white/20 hover:bg-white/20 transition-all">
                  <s.icon className="w-6 h-6 text-yellow mx-auto mb-2" />
                  <div className="font-heading text-3xl font-black text-white">{s.number}</div>
                  <div className="text-white/60 text-xs font-bold uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="text-center mb-14">
              <div className="section-label mx-auto">📅 Our Timeline</div>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mt-3">
                The{" "}
                <span className="text-handwritten text-primary text-4xl md:text-5xl">Journey</span>
              </h2>
            </div>
          </SectionReveal>
          <div className="max-w-4xl mx-auto relative">
            {/* Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            <div className="space-y-8 md:space-y-0">
              {timeline.map((t, i) => (
                <SectionReveal key={t.year} delay={i * 0.12}>
                  <div className={`md:flex items-center gap-8 ${i % 2 === 0 ? "" : "md:flex-row-reverse"} mb-8`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-white rounded-2xl border border-border p-6 card-hover inline-block text-left">
                        <div className="font-heading text-2xl font-black text-primary">{t.year}</div>
                        <h3 className="font-heading text-lg font-bold text-foreground mt-1">{t.title}</h3>
                        {t.sub && <p className="text-muted-foreground text-sm">{t.sub}</p>}
                        <p className="text-handwritten text-muted-foreground text-base mt-2 italic">"{t.quote}"</p>
                      </div>
                    </div>
                    {/* Dot */}
                    <div className="hidden md:flex w-5 h-5 rounded-full bg-primary border-4 border-white shadow-lg shrink-0 relative z-10" />
                    <div className="flex-1" />
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(170deg, hsl(270 56% 48%) 0%, hsl(270 56% 38%) 100%)" }}>
        <DoodleShapes />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
          <SectionReveal>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-white leading-tight">
              Want to Build Your Own{" "}
              <span className="text-handwritten text-yellow block mt-2 text-5xl md:text-6xl">Success Story?</span>
            </h2>
            <p className="text-white/70 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
              This could be you in a year. Start by joining our workshop. It's free, it's real, and it might just change how you think about building stuff.
            </p>
            <Link to="/register" className="inline-flex items-center gap-2 mt-10 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl" style={{ background: "hsl(var(--yellow))", color: "hsl(var(--foreground))" }}>
              Register Now — It's Free →
            </Link>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
