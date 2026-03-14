import { Link } from "react-router-dom";
import { Lightbulb, Users, Target, Rocket, Brain, Presentation, ArrowRight, Calendar, Clock, MapPin, Ticket, CheckCircle2, Star, Zap, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import DoodleShapes from "@/components/DoodleShapes";
import SectionReveal from "@/components/SectionReveal";
import heroImg from "@/assets/hero-doodle.png";

const agendaItems = [
  { icon: Lightbulb, title: "Why Hackathons Matter", desc: "Understand how hackathons help students learn faster, solve real problems, and build practical projects.", num: "01" },
  { icon: Rocket, title: "Our Journey & Experience", desc: "We share our hackathon journey — the wins, the failures, and the lessons we learned along the way.", num: "02" },
  { icon: Brain, title: "Founder's Mindset", desc: "Learn the mindset needed to keep building ideas, solving problems, and improving continuously.", num: "03" },
  { icon: Target, title: "From Idea to Startup", desc: "A simple step-by-step explanation of how ideas evolve from problems to prototypes and eventually products.", num: "04" },
  { icon: Users, title: "Building Your Dream Team", desc: "Understand how to form the right team, collaborate effectively, and build projects together.", num: "05" },
  { icon: Presentation, title: "The C.L.E.A.R Pitch Framework", desc: "Learn a simple structure to explain your idea clearly and confidently during hackathon presentations.", num: "06" },
  { icon: ArrowRight, title: "What You Should Do Next", desc: "Practical steps students can take after a hackathon to continue building and improving their ideas.", num: "07" },
];

const infoItems = [
  { icon: Calendar, label: "Date", value: "February 17, 2026" },
  { icon: Clock, label: "Time", value: "To Be Announced" },
  { icon: MapPin, label: "Venue", value: "To Be Announced" },
  { icon: Ticket, label: "Entry", value: "FREE (Limited Seats)" },
];

const features = [
  {
    title: "Learn From Real",
    highlight: "Experiences",
    desc: "Hear real stories from students who participated in multiple hackathons and built different projects. No theory — just real, actionable experience.",
    points: ["Real stories from multiple hackathons", "Wins and failures shared openly", "Lessons building under pressure"],
    align: "left" as const,
  },
  {
    title: "Build Practical",
    highlight: "Skills",
    desc: "Learn how to validate ideas, build prototypes quickly, and present your project effectively. Gain the tools you need to move beyond just code.",
    points: ["Idea validation frameworks", "Rapid prototyping lessons", "Effective presentation skills"],
    align: "right" as const,
  },
  {
    title: "Connect With",
    highlight: "Builders",
    desc: "Meet other students interested in technology, innovation, and building new ideas. The network you build here could be your future startup team.",
    points: ["Network with student innovators", "Connect with tech enthusiasts", "Collaborative environment"],
    align: "left" as const,
  },
];

const reasons = [
  { text: "Learn from real hackathon experiences", icon: TrendingUp },
  { text: "Understand how ideas turn into prototypes", icon: Zap },
  { text: "Meet students who love building projects", icon: Users },
  { text: "Gain practical insights you can apply immediately", icon: Award },
];

const Index = () => (
  <Layout>
    {(() => {
      document.title = "HACK-TALKS — Where Ideas Meet Innovation";
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", "HACK-TALKS — A student-focused workshop sharing lessons from hackathons to startups.");
      return null;
    })()}

    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      <DoodleShapes />
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label">
              <Zap className="w-4 h-4" />
              Event · February 17, 2026
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight text-foreground">
              From Hackathon Ideas to{" "}
              <span className="accent-underline">Real Projects</span>
            </h1>
            <p className="text-base md:text-lg mt-5 text-muted-foreground max-w-lg leading-relaxed">
              HACK-TALKS is a student-focused workshop where we share our hackathon journey, experiences, and practical lessons on turning ideas into real prototypes and startups.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/register" className="btn-primary-workshop">Register Now →</Link>
              <Link to="/speakers" className="btn-secondary-workshop">Meet the Speakers</Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-purple/10 to-yellow/10 rounded-3xl blur-2xl" />
              <img src={heroImg} alt="Innovation illustration" className="w-full max-w-md relative z-10 animate-float" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Introducing HACK-TALKS */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <SectionReveal>
          <div className="section-label mx-auto mb-4">Introducing HACK-TALKS</div>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            A workshop created for students who love building ideas and participating in hackathons.
          </h2>
          <div className="space-y-6 mt-8">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              During this session, we share our experiences from multiple hackathons — including what worked, what failed, and what we learned while building projects under pressure.
            </p>
            <p className="text-foreground font-bold text-lg max-w-2xl mx-auto border-l-4 border-purple pl-6 py-2 bg-purple/5">
              The goal of this workshop is simple: to help students understand how a simple idea from a hackathon can grow into a real product or even a startup.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Feature Sections - Alternating Layout */}
    {features.map((feature, featureIdx) => (
      <section key={feature.title} className={`py-20 ${featureIdx % 2 === 1 ? 'bg-muted/50' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className={`grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto ${feature.align === 'right' ? 'md:[direction:rtl]' : ''}`}>
              <div className={feature.align === 'right' ? 'md:[direction:ltr]' : ''}>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                  {feature.title}{" "}
                  <span className="text-handwritten text-primary text-3xl md:text-5xl">{feature.highlight}</span>
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">{feature.desc}</p>
                <ul className="mt-6 space-y-3">
                  {feature.points.map(point => (
                    <li key={point} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground text-sm font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${feature.align === 'right' ? 'md:[direction:ltr]' : ''}`}>
                <div className="bg-white rounded-2xl border border-border p-8 shadow-lg shadow-purple/5">
                  <div className="grid grid-cols-2 gap-4">
                    {agendaItems.slice(featureIdx * 2, featureIdx * 2 + 4).map((item, i) => (
                      <div key={item.title} className="p-4 rounded-xl bg-muted/60 text-center">
                        <item.icon className="w-6 h-6 mx-auto text-primary mb-2" />
                        <p className="text-[10px] font-bold text-foreground leading-tight">{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    ))}

    {/* Agenda - Full List */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="text-center mb-14">
            <div className="section-label mx-auto">📋 Workshop Agenda</div>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mt-3 uppercase tracking-tight">
              Why <span className="text-handwritten text-primary text-2xl lowercase">Hackathons</span> Matter
            </h2>
          </div>
        </SectionReveal>
        <div className="max-w-3xl mx-auto space-y-4">
          {agendaItems.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.06}>
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-border card-hover group">
                <div className="feature-number shrink-0 font-black">{item.num}</div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.desc}</p>
                </div>
                <item.icon className="w-5 h-5 text-muted-foreground/30 shrink-0 mt-1 group-hover:text-primary transition-colors" />
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Quick Info */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 border-y border-border/50 py-20 bg-white/50 backdrop-blur-sm">
        <SectionReveal>
          <div className="text-center mb-12">
            <div className="section-label mx-auto">ℹ️ Event Details</div>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mt-3">
              Quick Info
            </h2>
          </div>
        </SectionReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto px-4">
          {infoItems.map((item, j) => (
            <SectionReveal key={item.label} delay={j * 0.1}>
              <div className="bg-white rounded-2xl border border-border p-6 text-center card-hover overflow-hidden relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{item.label}</div>
                <div className="font-heading font-black text-foreground mt-2 text-sm">{item.value}</div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Why Attend */}
    <section className="py-24 bg-primary relative overflow-hidden">
      <DoodleShapes />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <SectionReveal>
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold mb-8 uppercase tracking-widest border border-white/20">
            Why Attend HACK-TALKS?
          </div>
        </SectionReveal>
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {reasons.map((r, i) => (
            <SectionReveal key={r.text} delay={i * 0.1}>
              <div className="flex items-center gap-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all text-left">
                <div className="w-12 h-12 rounded-xl bg-secondary/30 flex items-center justify-center shrink-0">
                  <r.icon className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-white font-bold text-sm leading-tight">{r.text}</span>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-32 bg-white relative overflow-hidden">
      <DoodleShapes />
      <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
        <SectionReveal>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground leading-tight">
            Stop Just Thinking About Ideas —{" "}
            <span className="text-handwritten text-primary block mt-2 text-4xl md:text-6xl lowercase">Start Building</span> Them
          </h2>
          <div className="mt-8 space-y-4">
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Join fellow student innovators at HACK-TALKS. It's a free workshop where we share real experiences, practical insights, and lessons from our hackathon journey.
            </p>
          </div>
          <Link to="/register" className="btn-primary-workshop inline-flex mt-12 text-lg py-5 px-12 rounded-2xl shadow-2xl shadow-purple/30">
            Register Now — It's Free →
          </Link>
        </SectionReveal>
      </div>
    </section>
  </Layout>
);

export default Index;
