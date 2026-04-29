# Harsha S Mantrodi — Portfolio

> AI/ML & Cloud Engineer portfolio. Built with Next.js, Tailwind CSS, Framer Motion. Deployed on Vercel.

## Tech Stack
| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Hosting | Vercel |

## Project Structure
```
src/
├── app/
│   ├── layout.tsx         # Root layout, fonts, SEO metadata
│   ├── page.tsx           # Main page assembly
│   └── globals.css        # Global styles + Tailwind
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Sticky nav with active states
│   │   └── Footer.tsx     # Footer
│   ├── sections/
│   │   ├── Hero.tsx       # Animated hero + particle canvas
│   │   ├── About.tsx      # Bio + contact card
│   │   ├── Skills.tsx     # Animated skill bars + cards
│   │   ├── Projects.tsx   # Featured + other project cards
│   │   ├── Experience.tsx # Vertical timeline
│   │   ├── Certifications.tsx
│   │   ├── GitHub.tsx     # GitHub stats + repos
│   │   └── Contact.tsx    # Form + contact links
│   └── ui/
│       └── Section.tsx    # Reusable section wrapper
├── data/
│   └── portfolio.ts       # All content data (typed)
└── lib/
    └── utils.ts           # cn() utility
```

## Deploy to Vercel (3 steps)

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "initial"
git remote add origin https://github.com/HarshaMantrodi/portfolio.git
git push -u origin main

# 2. Import on Vercel
# → vercel.com/new → Import GitHub repo → Deploy

# 3. Done — live at harsha-mantrodi.vercel.app
```

## Local Development

```bash
npm install
npm run dev
# → localhost:3000
```

## Customization
All content lives in `src/data/portfolio.ts` — update your info there.
Colors live in `tailwind.config.js`.
