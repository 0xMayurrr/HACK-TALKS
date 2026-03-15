import { Phone, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-white py-14">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 font-brand text-2xl mb-4">
            <img src="/logo 2.png" alt="HACK-TALKS" className="w-16 h-16 object-contain" style={{ mixBlendMode: "screen" }} />
            HACK-<span className="text-primary">TALKS</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Empowering the next generation of founders to turn ideas into reality through talks, workshops, and community.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-5 text-white/80">Quick Links</h4>
          <div className="flex flex-col gap-3">
            <Link to="/" className="text-white/50 hover:text-white transition-colors text-sm">Home</Link>
            <Link to="/speakers" className="text-white/50 hover:text-white transition-colors text-sm">Speakers</Link>
            <Link to="/gallery" className="text-white/50 hover:text-white transition-colors text-sm">Our Journey</Link>
            <Link to="/register" className="text-white/50 hover:text-white transition-colors text-sm">Register</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-5 text-white/80">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-white/50">
            <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-secondary" /> Kethciyal: +91 97870 33352</div>
            <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-secondary" /> Tamil: +91 85265 54673</div>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-5 text-white/80">Sponsored By</h4>
          <a href="https://trios-innovation-startup.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 group">
            <img src="/trios innovation.png" alt="Trios Innovation" className="w-10 h-10 object-contain" style={{ mixBlendMode: "screen" }} />
            <div>
              <span className="text-white font-bold text-sm group-hover:text-secondary transition-colors">TRIOS INNOVATION</span>
              <span className="flex items-center gap-1 text-white/40 text-xs mt-0.5"><ExternalLink className="w-3 h-3" />Visit Website</span>
            </div>
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/30">
        © 2026{" "}
        <a href="https://trios-innovation-startup.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
          Trios Innovation
        </a>
        . All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
