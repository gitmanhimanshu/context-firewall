# Context Firewall — AI Developer Infrastructure

> **AI Coding Agents Don't Need More Context. They Need Better Context.**

Context Firewall is a developer infrastructure middleware designed to solve the "Too Much Context" bottleneck in autonomous AI coding systems. By intelligently filtering noise, pruning dead execution traces, and distilling high-signal semantic representations, Context Firewall slashes 75% to 90% of token volume and API costs while eliminating hallucination triggers.

---

## ⚡ Architecture & Open Source Python Proxy

Context Firewall is powered by an open-source, local FastAPI reverse proxy engine:

🔗 **Proxy Repository**: [https://github.com/gitmanhimanshu/jev-context-firewall](https://github.com/gitmanhimanshu/jev-context-firewall)

```
[ AI IDE (Cursor / Trae / Cline) ]
                 │
                 ▼
[ Jev Context Firewall (127.0.0.1:8192) ]
  ├─ OpenJev 6D Cognitive Evaluation
  ├─ Causal Consensus Pruning
  ├─ Secret & PII Sanitizer
  └─ Live Dashboard Telemetry (:8192/dashboard)
                 │
                 ▼
[ Upstream LLMs (Anthropic Claude / OpenAI GPT-4o / Google Gemini) ]
  (75%–90% Tokens & Costs Saved)
```

### Quickstart Local Proxy

```bash
# Clone the open-source proxy
git clone https://github.com/gitmanhimanshu/jev-context-firewall.git
cd jev-context-firewall

# Install dependencies & run proxy
pip install -r requirements.txt
python main.py
```

- Local Proxy: `http://127.0.0.1:8192`
- Telemetry Dashboard: `http://127.0.0.1:8192/dashboard`

---

## 👨‍💻 Developer & Manager

- **Author & Maintainer:** **Himanshu Yadav**
- **GitHub:** [gitmanhimanshu](https://github.com/gitmanhimanshu)
- **LinkedIn:** [Himanshu Yadav](https://www.linkedin.com/in/himanshu-yadav-5ba28921b/)
- **Contact:** [himanshuyada70@gmail.com](mailto:himanshuyada70@gmail.com)
- **Ecosystem:** Creator of [Setu (Model Context Protocol)](https://setu.mimamsa.dev) and [jev-context-firewall](https://github.com/gitmanhimanshu/jev-context-firewall)

---

## 🛠 Frontend Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**

---

## 🚀 Running Frontend Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

---

## 🌐 Deployment

Live Website: [https://context-firewall.vercel.app/](https://context-firewall.vercel.app/)

Continuous deployment on **Vercel** via GitHub integration (`gitmanhimanshu/context-firewall`).
