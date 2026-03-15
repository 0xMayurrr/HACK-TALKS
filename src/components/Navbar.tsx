import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/speakers", label: "Speakers" },
    { to: "/gallery", label: "Our Journey" },
    { to: "/register", label: "Register" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between py-3.5 px-4">
        <Link to="/" className="flex items-center gap-2 font-heading text-xl font-extrabold text-foreground">
          <img src="/logo 2.png" alt="HACK-TALKS" className="w-14 h-14 object-contain" style={{ mixBlendMode: "multiply" }} />
          <span className="font-brand">HACK-<span className="text-primary">TALKS</span></span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-semibold text-sm transition-colors duration-200 ${
                pathname === l.to ? "text-primary" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/register" className="btn-primary-workshop !py-2.5 !px-6 !text-sm">
            Register Now →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-3 font-semibold text-base ${
                pathname === l.to ? "text-primary" : "text-foreground/60"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/register" onClick={() => setOpen(false)} className="btn-primary-workshop block text-center mt-2 !py-3 !text-sm">
            Register Now →
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
