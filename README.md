# HACK-TALKS 🚀

> **Where Hackathon Ideas Meet Real Innovation**

A student-focused workshop website built to help innovators turn their hackathon ideas into real startups. HACK-TALKS brings together real experiences, practical frameworks, and a community of builders.

---

## 🌐 Live Site

🔗 [https://hack-talks.vercel.app](https://hack-talks.vercel.app)

---

## 📌 About

HACK-TALKS is a **free one-day workshop** happening on **February 17, 2026**, designed for student innovators who want to:

- Learn from real hackathon experiences
- Understand how ideas evolve into prototypes and startups
- Build practical skills in ideation, pitching, and team building
- Connect with like-minded builders and innovators

---

## 🎤 Speakers

| Name | Role |
|------|------|
| Mayur P | Lead Speaker |
| Mohamed Irfan | Technical Mentor |
| Manivannan S | Innovative Guide |
| Tamil T M | Junior Speaker |
| Joshva I | Junior Speaker |
| Safna M | Junior Speaker — Idea Evaluation |
| Kethciyal S | Junior Speaker — Idea Pitcher |

---

## 📋 Workshop Agenda

1. **Why Hackathons Matter** — How hackathons help students learn faster and build real projects
2. **Our Journey & Experience** — Real stories from multiple hackathons
3. **Founder's Mindset** — The mindset needed to keep building and improving
4. **From Idea to Startup** — Step-by-step from problem to prototype to product
5. **Building Your Dream Team** — How to form the right team and collaborate
6. **The C.L.E.A.R Pitch Framework** — How to explain your idea clearly and confidently
7. **What You Should Do Next** — Practical steps after a hackathon

---

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS** — styling
- **Framer Motion** — animations
- **React Router DOM** — routing
- **qrcode.react** — QR code generation for event tickets
- **html2canvas** — ticket download as PNG
- **Google Apps Script** — registration data saved to Google Sheets
- **Lucide React** — icons
- **Orbitron** + **Plus Jakarta Sans** — fonts

---

## ✨ Features

- 🏠 **Homepage** — Event info, agenda, and why to attend
- 🎤 **Speakers Page** — Profile cards with photos, bios, roles and LinkedIn links
- 📝 **Registration Form** — Collects name, email, phone, roll number, year, department
- 🎫 **Event Ticket** — Auto-generated after registration with unique Ticket ID and QR code
- 📥 **Download Ticket** — Save ticket as high-res PNG
- 📊 **Google Sheets Integration** — Every registration auto-saved to a Google Sheet
- 📱 **Fully Responsive** — Works on mobile, tablet and desktop

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/idea-launchpad.git

# Navigate to project
cd idea-launchpad

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 📊 Google Sheets Setup

To enable registration data collection:

1. Create a Google Sheet named `HACK-TALKS Registrations` with these headers:

   `Full Name | Email | Phone | Roll No | Year | Department | Experience | Expectations | Newsletter | Ticket ID | Registered At`

2. Go to `Extensions → Apps Script` and paste:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.fullName, data.email, data.phone, data.rollNo,
      data.year, data.department, data.experience,
      data.expectations, data.newsletter, data.ticketId, data.registeredAt
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Deploy as **Web App** → Execute as: Me → Who has access: Anyone
4. Copy the Web App URL and paste it in `src/pages/Register.tsx` as `SCRIPT_URL`

---

## 📁 Project Structure

```
src/
├── assets/          # Static assets (hero image)
├── components/      # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── DoodleShapes.tsx
│   └── SectionReveal.tsx
├── pages/           # Page components
│   ├── Index.tsx    # Homepage
│   ├── Speakers.tsx # Speakers page
│   └── Register.tsx # Registration + Ticket
├── styles/          # CSS files
│   └── MentorCard.css
└── index.css        # Global styles
public/
├── logo 2.png       # Brand logo
├── icon.png         # Original icon
└── [speaker photos] # Speaker profile images
```

---

## 📄 License

© 2026 HACK-TALKS. All rights reserved.
