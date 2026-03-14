import { Linkedin, Zap, Star } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import DoodleShapes from "@/components/DoodleShapes";
import SectionReveal from "@/components/SectionReveal";
import { Link } from "react-router-dom";
import "@/styles/MentorCard.css";

const speakers = [
  { name: "Mayur P", role: "Lead Speaker", tag: "Innovation Ambassador", bio: "Innovating across Web3, AI & Product Development.", photo: "/Mayur.png", color: "purple", linkedin: "https://www.linkedin.com/in/mayurp03/" },
  { name: "Tamil T M", role: "Junior Speaker", tag: "DevOps & AI", bio: "DevOps guy, but passionate about building AI agents and training AI models with real-time data.", photo: "/Tamil .jpeg", color: "yellow", linkedin: "https://www.linkedin.com/in/tamil-tm-9103b1371/" },
  { name: "Manivannan S", role: "Innovative Guide", tag: "Startup Designer", bio: "Innovative guide for startups and leading designer of the product.", photo: "/mani.png", color: "purple", linkedin: "https://www.linkedin.com/in/manivannan-s-/" },
  { name: "Joshva I", role: "Junior Speaker", tag: "DevOps Enthusiast", bio: "DevOps enthusiast passionate about building scalable systems and automating infrastructure.", photo: "/joshva 44.jpeg", color: "yellow", linkedin: "https://www.linkedin.com/in/joshva-i-05a9a4373/" },
  { name: "Mohamed Irfan", role: "Technical Mentor", tag: "Blockchain & Social", bio: "Ideology entrepreneur through blockchain and socializing.", photo: "/irfan.png", color: "purple", linkedin: "https://www.linkedin.com/in/mhmdd-irfan-3a3229322/" },
  { name: "Kethciyal S", role: "Junior Speaker — Idea Pitcher", tag: "Cyber Security", bio: "Interested in cyber investigations, digital security, and solving problems through technology.", photo: "/ketchi.jpeg", color: "yellow", linkedin: "https://www.linkedin.com/in/kethciyal-s-30413a370/" },
  { name: "Safna M", role: "Junior Speaker — Idea Evaluation", tag: "Data Analytics", bio: "Curious in data analytics and learning the art of turning data into insights.", photo: "/Safna.jpeg", color: "purple", linkedin: "https://www.linkedin.com/in/safna-mubarak-a4756a2a5/" },
];

const Speakers = () => (
  <Layout>
    {(() => {
      document.title = "Speakers — HACK-TALKS";
      return null;
    })()}

    {/* Hero */}
    <section className="relative py-28 gradient-hero overflow-hidden text-center">
      <DoodleShapes />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="section-label mx-auto">
            <Zap className="w-4 h-4" />
            Our Speakers
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground mt-3">
            Meet Your <span className="accent-underline">Mentors</span>
          </h1>
          <p className="text-base md:text-lg mt-4 text-muted-foreground max-w-lg mx-auto">Learn from founders who've walked the path</p>
        </motion.div>
      </div>
    </section>

    {/* Grid Section */}
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-12 max-w-7xl mx-auto">
          {speakers.map((s, i) => (
            <SectionReveal key={i} delay={i * 0.05}>
              <div className="mentor-card-container">
                <div className="mentor-info-overlay">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg ${s.color === "purple" ? "bg-purple font-bold" : "bg-yellow font-bold"}`}>
                    <Zap className="w-5 h-5 fill-current" />
                  </div>
                </div>

                <ul className="mentor-card-socials">
                  <li className="mentor-card-social-item">
                    <a href={s.linkedin} target="_blank" rel="noopener noreferrer" className="mentor-card-social-link">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </li>
                </ul>

                <div className="mentor-card-img-wrapper">
                  <img
                    src={s.photo}
                    alt={s.name}
                    className="mentor-card-img"
                  />
                </div>

                <h2 className="mentor-card-name">{s.name}</h2>
              </div>
              <div className="mt-4 text-center max-w-[300px]">
                <p className="text-purple font-black text-xs uppercase tracking-widest mb-1">{s.role}</p>
                <p className="text-muted-foreground text-[10px] leading-relaxed">{s.bio}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonial preview */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <SectionReveal>
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-5 h-5 fill-yellow text-yellow" />
            ))}
          </div>
          <p className="text-lg text-foreground font-medium italic leading-relaxed">
            "HACK-TALKS completely changed how I think about building products. The speakers were incredible and the frameworks I learned helped me win my next hackathon!"
          </p>
          <div className="mt-5">
            <p className="font-heading font-bold text-foreground text-sm">Previous Attendee</p>
            <p className="text-muted-foreground text-xs">Engineering Student</p>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary relative overflow-hidden text-center">
      <DoodleShapes />
      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white">
            Learn from the <span className="text-handwritten text-secondary text-3xl md:text-5xl">best</span>
          </h2>
          <p className="text-white/70 mt-3 text-sm">Join hundreds of students at India's most impactful tech workshop</p>
          <Link to="/register" className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-xl font-bold text-base bg-white text-primary shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
            Register Now — It's Free →
          </Link>
        </SectionReveal>
      </div>
    </section>
  </Layout>
);

export default Speakers;
