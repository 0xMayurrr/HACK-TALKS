import { useState, useRef, FormEvent } from "react";
import { CheckCircle2, Award, Users, Briefcase, HeartHandshake, Zap, Download, QrCode } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import html2canvas from "html2canvas";
import Layout from "@/components/Layout";
import DoodleShapes from "@/components/DoodleShapes";

const benefits = [
  { icon: Award, text: "Certificate of participation" },
  { icon: Users, text: "Networking opportunities" },
  { icon: HeartHandshake, text: "Lifetime access to community" },
  { icon: Briefcase, text: "Career guidance session" },
];

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby83ztO36qJQVXHddyNL6x0moXiQJlA0QqJXMaXYPzE_jGPFmTk3r9p9zdDI3nh-GL0LA/exec";

type TicketData = {
  fullName: string;
  email: string;
  phone: string;
  rollNo: string;
  year: string;
  department: string;
  ticketId: string;
};

const Ticket = ({ data, ticketRef }: { data: TicketData; ticketRef: React.RefObject<HTMLDivElement> }) => (
  <div
    ref={ticketRef}
    style={{ fontFamily: "'Segoe UI', sans-serif", width: "420px", background: "#fff", borderRadius: "24px", overflow: "hidden", boxShadow: "0 25px 60px rgba(0,0,0,0.18)" }}
  >
    {/* Header */}
    <div style={{ background: "linear-gradient(135deg, #1a0533 0%, #3b0764 50%, #1a0533 100%)", padding: "28px 32px", color: "#fff", position: "relative", overflow: "hidden" }}>
      {/* Decorative circles */}
      <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
      <div style={{ position: "absolute", bottom: "-20px", left: "-20px", width: "80px", height: "80px", borderRadius: "50%", background: "rgba(250,204,21,0.08)" }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontSize: "10px", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontFamily: "'Orbitron', sans-serif" }}>HACK-TALKS</span>
          </div>
          <div style={{ fontSize: "28px", fontWeight: 900, letterSpacing: "-0.5px", lineHeight: 1 }}>EVENT PASS</div>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "#facc15", marginTop: "6px", letterSpacing: "0.15em", textTransform: "uppercase" }}>February 17, 2026</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <span style={{ background: "#facc15", color: "#1a0533", fontSize: "9px", fontWeight: 900, padding: "4px 10px", borderRadius: "999px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Free Entry</span>
          <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", marginTop: "8px", fontFamily: "monospace", fontWeight: 700 }}>{data.ticketId}</div>
        </div>
      </div>
    </div>

    {/* Tear line */}
    <div style={{ display: "flex", alignItems: "center", background: "#fff" }}>
      <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#1a0533", marginLeft: "-10px", flexShrink: 0 }} />
      <div style={{ flex: 1, borderTop: "2px dashed #e5e7eb" }} />
      <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#1a0533", marginRight: "-10px", flexShrink: 0 }} />
    </div>

    {/* Body */}
    <div style={{ padding: "24px 32px", display: "flex", gap: "24px", alignItems: "center", background: "#fff" }}>
      {/* Info */}
      <div style={{ flex: 1 }}>
        <div style={{ marginBottom: "16px" }}>
          <div style={{ fontSize: "8px", fontWeight: 900, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "3px" }}>Attendee</div>
          <div style={{ fontSize: "20px", fontWeight: 900, color: "#111827", lineHeight: 1.1 }}>{data.fullName}</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
          <div>
            <div style={{ fontSize: "8px", fontWeight: 900, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "2px" }}>Roll No</div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#1f2937" }}>{data.rollNo}</div>
          </div>
          <div>
            <div style={{ fontSize: "8px", fontWeight: 900, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "2px" }}>Year</div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#1f2937" }}>{data.year}</div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: "8px", fontWeight: 900, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "2px" }}>Department</div>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#1f2937" }}>{data.department}</div>
        </div>
      </div>

      {/* Vertical dashed divider */}
      <div style={{ width: "1px", height: "110px", borderLeft: "2px dashed #e5e7eb", flexShrink: 0 }} />

      {/* QR */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", flexShrink: 0 }}>
        <QRCodeSVG
          value={JSON.stringify({ name: data.fullName, rollNo: data.rollNo, ticketId: data.ticketId, event: "HACK-TALKS 2026", date: "Feb 17, 2026" })}
          size={100}
          fgColor="#1a0533"
          bgColor="#ffffff"
        />
        <div style={{ fontSize: "8px", color: "#9ca3af", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em" }}>Scan to verify</div>
      </div>
    </div>

    {/* Bottom accent bar */}
    <div style={{ height: "6px", background: "linear-gradient(to right, #facc15, #7c3aed, #facc15)" }} />
  </div>
);

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [ticket, setTicket] = useState<TicketData | null>(null);
  const [error, setError] = useState("");
  const ticketRef = useRef<HTMLDivElement>(null);

  const generateTicketId = () =>
    "HT-" + Math.random().toString(36).substring(2, 7).toUpperCase() + "-2026";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;

    if (!data.terms) {
      setError("Please agree to the terms and conditions.");
      setLoading(false);
      return;
    }

    try {
      const ticketId = generateTicketId();
      if (SCRIPT_URL) {
        await fetch(SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            rollNo: data.rollNo,
            year: data.year,
            department: data.department,
            experience: data.experience || "None",
            expectations: data.expectations || "",
            newsletter: data.newsletter === "yes" ? "Yes" : "No",
            ticketId,
            registeredAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          }),
        });
      }
      setTicket({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        rollNo: data.rollNo,
        year: data.year,
        department: data.department,
        ticketId,
      });
      (e.target as HTMLFormElement).reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const downloadTicket = async () => {
    if (!ticketRef.current) return;
    const canvas = await html2canvas(ticketRef.current, { scale: 3, backgroundColor: "#ffffff", useCORS: true });
    const link = document.createElement("a");
    link.download = `HACK-TALKS-Ticket-${ticket?.ticketId}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <Layout>
      {(() => {
        document.title = "Register — HACK-TALKS";
        return null;
      })()}

      {/* Hero */}
      <section className="relative py-24 gradient-hero overflow-hidden text-center">
        <DoodleShapes />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-label mx-auto">
              <Zap className="w-4 h-4" />
              Registration
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground mt-3">
              Secure Your <span className="accent-underline">Spot</span>
            </h1>
            <p className="text-base md:text-lg mt-3 text-muted-foreground">Limited seats available — Register now!</p>
            <div className="inline-flex items-center gap-2 mt-5 px-5 py-2 rounded-full bg-destructive/8 border border-destructive/20 text-destructive text-sm font-semibold">
              🔥 Only a few spots remaining!
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form / Ticket Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {ticket ? (
              <motion.div
                key="ticket"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-6 max-w-lg mx-auto text-center"
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="font-heading text-2xl font-extrabold text-foreground">You're Registered! 🎉</h2>
                  <p className="text-muted-foreground text-sm">Here's your event pass. Show the QR at the venue.</p>
                </div>

                <Ticket data={ticket} ticketRef={ticketRef} />

                <div className="flex gap-3 mt-2">
                  <button
                    onClick={downloadTicket}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:opacity-90 transition-all shadow-lg"
                  >
                    <Download className="w-4 h-4" /> Download Ticket
                  </button>
                  <button
                    onClick={() => setTicket(null)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-bold text-sm hover:bg-muted transition-all"
                  >
                    Register Another
                  </button>
                </div>

                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <QrCode className="w-3.5 h-3.5" /> Scan the QR code at the venue entrance to verify your ticket
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto"
              >
                {/* Benefits sidebar */}
                <div className="lg:col-span-2 bg-primary rounded-2xl p-8 text-white relative overflow-hidden">
                  <DoodleShapes />
                  <div className="relative z-10">
                    <h3 className="font-heading text-2xl font-bold mb-6">What You Get</h3>
                    <div className="space-y-4">
                      {benefits.map((b) => (
                        <div key={b.text} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                            <b.icon className="w-4 h-4 text-secondary" />
                          </div>
                          <span className="text-sm font-medium text-white/90">{b.text}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 p-4 rounded-xl bg-white/10 backdrop-blur text-center">
                      <p className="font-heading text-lg font-bold">💰 Completely FREE!</p>
                      <p className="text-white/60 text-xs mt-1">No hidden charges</p>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="lg:col-span-3">
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 border border-border shadow-lg shadow-purple/5 space-y-5">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-1">Registration Form</h3>

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
                        <label className="text-sm font-semibold text-foreground">Roll Number *</label>
                        <input name="rollNo" required className="input-workshop mt-1" placeholder="e.g. 22CS001" />
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
                        <label className="text-sm font-semibold text-foreground">Department *</label>
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

                    <button type="submit" disabled={loading} className="btn-primary-workshop w-full disabled:opacity-60">
                      {loading ? (
                        <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      ) : (
                        "Register for HACK-TALKS →"
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
