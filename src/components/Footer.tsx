import { Rocket, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="gradient-purple text-primary-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-heading text-xl font-bold mb-4">
            <Rocket className="w-6 h-6" />
            Hackathon → Startup
          </div>
          <p className="text-primary-foreground/70 text-sm">
            Empowering the next generation of founders to turn ideas into reality.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-bold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">Home</Link>
            <Link to="/speakers" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">Speakers</Link>
            <Link to="/register" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">Register</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg font-bold mb-4">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@example.com</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 XXXXX XXXXX</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> [Venue TBA]</div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/50">
        © 2026 From Hackathon to Startup. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
