# 🌿 AfyaMkononi Telecare Platform

![Build](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Tech](https://img.shields.io/badge/stack-React%20%2B%20TypeScript%20%2B%20Tailwind-blueviolet)

**AfyaMkononi** is a telemedicine application focused on **maternal and child healthcare**, offering remote consultation services, AI-powered symptom checks, and health education tools.

---

## 🚀 Project Overview

AfyaMkononi provides:

- Virtual access to healthcare specialists
- Smart symptom assessment
- Resourceful tools for maternal and child health management

---

## 🧩 Core Features

- 🎥 **Video Consultations** – Face-to-face remote appointments  
- 🧑‍⚕️ **Specialist Directory** – Browse certified maternal and child health professionals  
- 🗓️ **Easy Scheduling** – Book and manage appointments  
- 🤖 **AI Symptom Checker** – Powered by simulated Gemini AI  
- ⏰ **Real-time Clock** – Toggle between 12/24-hour formats  

---

## ⚙️ Tech Stack

| Category           | Tech                                                                 |
|-------------------|----------------------------------------------------------------------|
| Frontend          | [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/) |
| UI Components     | [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)             |
| Styling           | [Tailwind CSS](https://tailwindcss.com/)                             |
| Routing           | [React Router DOM](https://reactrouter.com/)                         |
| Forms             | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| Charts            | [Recharts](https://recharts.org/en-US/)                              |
| Icons             | [Lucide React](https://lucide.dev/)                                  |

---

## 📁 Project Structure

src/ ├── components/ │ ├── home/ # Homepage UI blocks │ ├── layout/ # Navbar, Footer │ ├── symptom-checker/ # AI checker components │ └── ui/ # shadcn/ui components ├── hooks/ # Custom React hooks ├── lib/ # Utility functions ├── pages/ # Routed page components └── main.tsx # Entry point

yaml
Copy
Edit

---

## 🧠 Key Components

### Layout
- `Navbar.tsx`: Top navigation
- `Footer.tsx`: Bottom site info

### Home
- `Hero.tsx`: Landing section
- `Features.tsx`: Platform highlights
- `AIFeature.tsx`: Symptom checker intro
- `Services.tsx`: Services provided
- `CTASection.tsx`: Call-to-action
- `AnalogClock.tsx`: Interactive clock

### Symptom Checker
- `SymptomChecker.tsx`: Entry page
- `SymptomInput.tsx`: Symptom input form
- `GeminiResponse.tsx`: Simulated AI process
- `AIResponse.tsx`: AI result display

---

## 📸 Project Preview

> *Coming soon!*  
> Add screenshots, GIFs, or mockup designs here for a visual overview.

---

## 🛠️ Getting Started

### ✅ Prerequisites

- Node.js (v14+)
- npm or yarn

### 💻 Setup

```bash
# 1. Clone the repo
git clone https://github.com/your-username/afyamkononi.git
cd afyamkononi

# 2. Install dependencies
npm install  # or yarn install

# 3. Start dev server
npm run dev  # or yarn dev
☁️ AWS Free Tier Deployment Guide
🪣 S3 Bucket
Go to S3 Console → Create bucket

Disable "Block All Public Access"

Enable Static Website Hosting

Set index.html as both index & error doc

Add public-read policy for the bucket

🌐 CloudFront
Create a distribution → Set S3 as origin

Configure HTTPS with ACM

Default root object: index.html

Redirect 404 to index.html

Enable GZIP compression

📡 Route 53 (Optional)
Register / use a domain

Create a Hosted Zone

Point A record to CloudFront distribution

🔁 Continuous Deployment
Use GitHub Actions or AWS CodePipeline

Auto-deploy build to S3

Invalidate CloudFront cache post-deploy

💰 Cost Management
Use AWS Budgets for usage alerts

Monitor Free Tier limits

Analyze spend via AWS Cost Explorer

🚧 Future Enhancements
Technical Additions
AWS Lambda + API Gateway for backend

Cognito for auth

DynamoDB / RDS integration

WebRTC for real-time video

Full mobile responsiveness

Feature Roadmap
Digital patient records

E-prescription system

Payment integration

Advanced appointment scheduling

Maternal-child health content library

Community support forums

♿ Accessibility & Compliance
✅ WCAG 2.1 compliance

🔒 HIPAA-ready architecture (future scope)

📜 GDPR user data compliance

⚡ Performance Tips
Lazy loading assets

Service Worker (PWA support)

Optimized images

Code splitting and caching

📄 License
MIT © [Your Name / Org]

🧡
"Because every mother and child deserves accessible, intelligent healthcare—right from the palm of their hand.”

