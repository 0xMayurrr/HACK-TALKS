import { useState, FormEvent } from "react";
import { CheckCircle2, Award, BookOpen, Users, Briefcase, HeartHandshake, Wrench, PartyPopper } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import DoodleShapes from "@/components/DoodleShapes";

const benefits = [
  { icon: Award, text: "Certificate of participation" },
  { icon: BookOpen, text: "Workshop materials & resources" },
  { icon: Users, text: "Networking opportunities" },
  { icon: HeartHandshake, text: "Lifetime access to community" },
  { icon: Briefcase, text: "Career guidance session" },
  { icon: Wrench, text: "Startup toolkit" },
];

const SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd);

    if (!data.terms) {
      setError("Please agree to the terms and conditions.");
      setLoading(false);
      return;
    }

    try {
      if (SCRIPT_URL !== "YOUR_GOOGLE_APPS_SCRIPT_URL") {
        await fetch(SCRIPT_URL, { method: "POST", body: JSON.stringify(data) });
      }
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSuccess(false), 6000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {(() => {
        document.title = "Register – From Hackathon to Startup Workshop";
        return null;
      })()}

      {/* Hero */}
      <section className="relative py-20 gradient-hero overflow-hidden text-center">
        <DoodleShapes />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground">Secure Your Spot 🎟️</h1>
            <p className="text-lg md:text-xl mt-3 text-foreground/80">Limited seats available – Register now!</p>
            <div className="inline-block mt-4 px-5 py-2 rounded-full bg-card shadow font-heading font-bold text-destructive animate-wiggle">
              🔥 Only a few spots remaining!
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* Benefits sidebar */}
            <div className="lg:col-span-2 gradient-purple rounded-2xl p-8 text-primary-foreground relative overflow-hidden">
              <DoodleShapes />
              <div className="relative z-10">
                <h3 className="font-heading text-2xl font-bold mb-6">What You Get ✨</h3>
                <div className="space-y-4">
                  {benefits.map((b) => (
                    <div key={b.text} className="flex items-center gap-3">
                      <b.icon className="w-5 h-5 text-secondary shrink-0" />
                      <span className="text-sm font-medium">{b.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 rounded-xl bg-primary-foreground/10 backdrop-blur">
                  <p className="text-handwritten text-xl text-center">💰 Completely FREE!</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="bg-card rounded-2xl p-10 text-center border border-border shadow-sm mb-6"
                  >
                    <PartyPopper className="w-16 h-16 mx-auto text-secondary" />
                    <h3 className="font-heading text-2xl font-bold mt-4 text-foreground">Registration Successful! 🎉</h3>
                    <p className="text-muted-foreground mt-2">Check your email for confirmation.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm space-y-4">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Registration Form</h3>

                {error && <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm font-medium">{error}</div>}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-foreground">Full Name *</label>
                    <input name="fullName" required className="input-workshop mt-1" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground">Email Address *</label>
                    <input name="email" type="email" required className="input-workshop mt-1" placeholder="you@email.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-foreground">Phone Number *</label>
                    <input name="phone" type="tel" required className="input-workshop mt-1" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground">College/Institution *</label>
                    <input name="college" required className="input-workshop mt-1" placeholder="Your college" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-foreground">Year of Study *</label>
                    <select name="year" required className="input-workshop mt-1">
                      <option value="">Select year</option>
                      <option>1st Year</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>4th Year</option>
                      <option>Postgraduate</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground">Department/Major *</label>
                    <input name="department" required className="input-workshop mt-1" placeholder="e.g. Computer Science" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground">Previous Hackathon Experience</label>
                  <select name="experience" className="input-workshop mt-1">
                    <option value="None">None</option>
                    <option>1-2</option>
                    <option>3-5</option>
                    <option>5+</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground">What do you hope to gain? (optional)</label>
                  <textarea name="expectations" rows={3} className="input-workshop mt-1 resize-none" placeholder="Tell us what you're looking for..." />
                </div>

                <div className="space-y-2">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" name="newsletter" value="yes" className="mt-1 accent-primary w-4 h-4" />
                    <span className="text-sm text-foreground">I want to receive updates about future events</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" name="terms" value="yes" className="mt-1 accent-primary w-4 h-4" />
                    <span className="text-sm text-foreground">I agree to terms and conditions *</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary-workshop w-full !text-base disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    "🚀 Register for Workshop"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
