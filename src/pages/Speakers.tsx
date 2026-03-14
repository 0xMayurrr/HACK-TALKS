import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import DoodleShapes from "@/components/DoodleShapes";
import SectionReveal from "@/components/SectionReveal";
import { Link } from "react-router-dom";

const speakers = [
  { name: "[Speaker Name]", role: "Founder & CEO", tag: "Built 3 startups", bio: "Turned hackathon projects into successful companies with 50K+ users.", initials: "FC", color: "purple" },
  { name: "[Speaker Name]", role: "Technical Lead", tag: "Ex-Google Engineer", bio: "Led engineering teams at scale, mentored 100+ developers.", initials: "TL", color: "yellow" },
  { name: "[Speaker Name]", role: "Product Expert", tag: "Y Combinator Alum", bio: "Built products used by millions, expert in user-centered design.", initials: "PE", color: "purple" },
  { name: "[Speaker Name]", role: "Growth Strategist", tag: "10x Growth Hacker", bio: "Scaled startups from 0 to 1M users through creative marketing.", initials: "GS", color: "yellow" },
  { name: "[Speaker Name]", role: "Investor & Mentor", tag: "Angel Investor", bio: "Funded 20+ startups, helps founders navigate early stage.", initials: "IM", color: "purple" },
  { name: "[Speaker Name]", role: "UX Designer", tag: "Award Winner", bio: "Creates delightful experiences that users love and remember.", initials: "UX", color: "yellow" },
  { name: "[Speaker Name]", role: "Community Builder", tag: "Hackathon Organizer", bio: "Organized 50+ hackathons, connected thousands of builders.", initials: "CB", color: "purple" },
  { name: "[Speaker Name]", role: "Sales & Partnerships", tag: "Deal Maker", bio: "Closed multi-million dollar deals, expert in B2B sales.", initials: "SP", color: "yellow" },
];

const Speakers = () => (
  <Layout>
    {(() => {
      document.title = "Speakers – From Hackathon to Startup Workshop";
      return null;
    })()}

    {/* Hero */}
    <section className="relative py-24 gradient-hero overflow-hidden text-center">
      <DoodleShapes />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground">Meet Your Mentors 🎤</h1>
          <p className="text-lg md:text-xl mt-4 text-foreground/80 max-w-lg mx-auto">Learn from founders who've walked the path</p>
        </motion.div>
      </div>
    </section>

    {/* Grid */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {speakers.map((s, i) => (
            <SectionReveal key={i} delay={i * 0.07}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-sm card-hover border border-border">
                <div className="h-2" style={{ background: s.color === "purple" ? "hsl(var(--purple))" : "hsl(var(--yellow))" }} />
                <div className="p-6 text-center">
                  {/* Avatar */}
                  <div
                    className="w-20 h-20 rounded-full mx-auto flex items-center justify-center font-heading text-2xl font-bold text-primary-foreground"
                    style={{ background: s.color === "purple" ? "hsl(var(--purple))" : "hsl(var(--yellow-dark))" }}
                  >
                    {s.initials}
                  </div>
                  <h3 className="font-heading text-lg font-bold mt-4 text-foreground">{s.name}</h3>
                  <p className="text-muted-foreground text-sm">{s.role}</p>
                  <span
                    className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: s.color === "purple" ? "hsl(var(--purple) / 0.12)" : "hsl(var(--yellow) / 0.3)",
                      color: s.color === "purple" ? "hsl(var(--purple))" : "hsl(var(--yellow-dark))",
                    }}
                  >
                    {s.tag}
                  </span>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{s.bio}</p>
                  <a href="#" className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-3 hover:underline" aria-label={`LinkedIn of ${s.name}`}>
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 gradient-yellow relative overflow-hidden text-center">
      <DoodleShapes />
      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">Learn from the best 🔥</h2>
          <Link to="/register" className="btn-primary-workshop inline-block mt-6">Register Now – It's Free!</Link>
        </SectionReveal>
      </div>
    </section>
  </Layout>
);

export default Speakers;
