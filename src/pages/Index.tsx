import { Link } from "react-router-dom";
import { Lightbulb, Users, Target, Rocket, Brain, Presentation, ArrowRight, Calendar, Clock, MapPin, Ticket, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import DoodleShapes from "@/components/DoodleShapes";
import SectionReveal from "@/components/SectionReveal";
import heroImg from "@/assets/hero-doodle.png";

const agendaItems = [
  { icon: Lightbulb, title: "Why Hackathons Matter", desc: "Discover how hackathons ignite innovation and launch real companies." },
  { icon: Rocket, title: "Our Journey & Experience", desc: "Real stories from founders who started at a hackathon table." },
  { icon: Brain, title: "Founder's Mindset", desc: "Develop the grit, curiosity, and resilience every founder needs." },
  { icon: Target, title: "From Idea to Startup", desc: "A step-by-step framework to validate and launch your concept." },
  { icon: Users, title: "Building Your Dream Team", desc: "Find co-founders and build a team that actually ships." },
  { icon: Presentation, title: "The C.L.E.A.R Pitch Framework", desc: "Craft a pitch that captures attention and wins funding." },
  { icon: ArrowRight, title: "What You Should Do Next", desc: "Actionable next steps to keep your momentum going." },
];

const infoItems = [
  { icon: Calendar, label: "Date", value: "February 17, 2026" },
  { icon: Clock, label: "Time", value: "To Be Announced" },
  { icon: MapPin, label: "Venue", value: "To Be Announced" },
  { icon: Ticket, label: "Entry", value: "FREE (Limited Seats)" },
];

const reasons = [
  "Learn from founders who've been there",
  "Build real startup skills in one day",
  "Network with like-minded innovators",
  "Get practical frameworks you can use immediately",
];

const Index = () => (
  <Layout>
    {/* SEO */}
    {(() => {
      document.title = "From Hackathon to Startup – Turn Your Ideas into Reality";
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", "Join our free workshop on Feb 17, 2026 and learn how to turn hackathon projects into real startups. Limited seats!");
      return null;
    })()}

    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      <DoodleShapes />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-handwritten text-2xl md:text-3xl text-accent-foreground/80">✨ Workshop 2026</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mt-2 text-foreground">
              FROM HACKATHON<br />TO <span className="text-primary">STARTUP</span>
            </h1>
            <p className="text-lg md:text-xl mt-4 text-foreground/80 font-medium max-w-lg">
              Turn Your Ideas into Reality
            </p>
            <div className="inline-block mt-4 px-5 py-2 rounded-full bg-card shadow-md font-heading font-bold text-primary">
              📅 February 17, 2026
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/register" className="btn-primary-workshop">Register Now 🚀</Link>
              <Link to="/speakers" className="btn-secondary-workshop">Meet the Speakers</Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <img src={heroImg} alt="Rocket launching from laptop doodle" className="w-full max-w-md animate-float" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Agenda */}
    <section className="py-20 bg-background relative">
      <DoodleShapes />
      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-center text-foreground">
            What's Inside? <span className="text-handwritten text-secondary text-2xl md:text-3xl ml-2">📝 the good stuff</span>
          </h2>
        </SectionReveal>
        <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {agendaItems.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.08}>
              <div className="bg-card rounded-2xl p-6 shadow-sm card-hover border border-border flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: i % 2 === 0 ? 'hsl(var(--yellow) / 0.2)' : 'hsl(var(--purple) / 0.15)' }}>
                  <item.icon className="w-6 h-6" style={{ color: i % 2 === 0 ? 'hsl(var(--yellow-dark))' : 'hsl(var(--purple))' }} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Quick Info */}
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-center text-foreground mb-10">
            Quick Info ℹ️
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {infoItems.map((item, i) => (
            <SectionReveal key={item.label} delay={i * 0.1}>
              <div className="doodle-border bg-card p-5 text-center card-hover">
                <item.icon className="w-8 h-8 mx-auto text-primary mb-2" />
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</div>
                <div className="font-heading font-bold text-foreground mt-1 text-sm">{item.value}</div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Why Attend */}
    <section className="py-20 gradient-purple relative overflow-hidden">
      <DoodleShapes />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-primary-foreground">Why Attend? 🤔</h2>
        </SectionReveal>
        <div className="max-w-xl mx-auto mt-10 space-y-4">
          {reasons.map((r, i) => (
            <SectionReveal key={r} delay={i * 0.1}>
              <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur rounded-xl px-6 py-4">
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                <span className="text-primary-foreground font-medium text-left">{r}</span>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 gradient-yellow relative overflow-hidden">
      <DoodleShapes />
      <div className="container mx-auto px-4 text-center relative z-10">
        <SectionReveal>
          <p className="text-handwritten text-2xl text-foreground/70">don't miss out!</p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mt-2">
            Ready to Start Your Journey? 🚀
          </h2>
          <Link to="/register" className="btn-primary-workshop inline-block mt-8 text-xl">
            Register Now – It's Free!
          </Link>
        </SectionReveal>
      </div>
    </section>
  </Layout>
);

export default Index;
