# Stuart.dev — Portfolio

Personal portfolio of **Shan Sai** (Stuart Shanthosh), Software Engineer and Web
Developer. Built with Next.js, Tailwind CSS, GSAP and Framer Motion.

- [LinkedIn](https://www.linkedin.com/in/shanthosh-saisangar14/)
- [GitHub](https://github.com/Stuart-Vision)

## Getting started

```bash
npm install --legacy-peer-deps
npm run dev          # http://localhost:3000
```

`--legacy-peer-deps` is required: `react-reveal` still declares a React 16 peer
range. It works fine with React 18 — npm just refuses to resolve without the flag.
If you use `bun`, plain `bun install` works, since bun doesn't enforce peer ranges.

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

To open it on a phone on the same WiFi, bind to all interfaces:

```bash
npx next dev -H 0.0.0.0
```

## Editing content

Everything on the page comes from [`constants.js`](./constants.js) — metadata,
hero typewriter lines, social links, skills, projects and the Experience tabs.
Anything marked `// TODO` is still a placeholder.

Images and setup steps are documented in [SETUP.md](./SETUP.md), including how the
project card screenshots were produced and how to replace one.

The contact form needs EmailJS keys — copy `.env.local.example` to `.env.local`.
Without them the site runs fine; only the Send button fails.

## Projects featured

| Project | What it is | Stack |
| --- | --- | --- |
| [Liza's Ribbon](https://liza-g.vercel.app) | Personalised gifting commerce with custom gift builder | Next.js 16, React 19, MongoDB, Cloudinary |
| [DineFlow POS](https://github.com/Stuart-Vision/dineflow-pos) | Multi-branch restaurant POS and management platform | Next.js 15, TypeScript, Mongoose, Zustand |
| [Velora](https://github.com/Stuart-Vision/Multivendor-ecommerce) | Multi-vendor marketplace with commission accounting | Next.js, TypeScript, MongoDB |
| [Sear & Saffron](https://github.com/Stuart-Vision/sear-saffron) | Restaurant ordering and table reservations | Next.js 15, Prisma, NextAuth, Stripe |
| [Gyra Real Estate](https://github.com/Stuart-Vision/Gyra-Real-Estate) | Property marketplace for agents and buyers | Next.js 16, React 19, MongoDB |
| [MOTIONA](https://github.com/Stuart-Vision/MOTIONA) | Editorial art platform with scroll-driven motion | Next.js, Framer Motion, Lenis |
| [EduManage](https://github.com/Stuart-Vision/eduman) | Student management system with role-based dashboards | Laravel 12, PHP 8.4, MySQL |
| [Fire Zone](https://github.com/Stuart-Vision/Fire_Zone) | Food ordering, room booking and events | MERN, Redux, MUI |
| [React Dashboard](https://github.com/Stuart-Vision/React-Dashboard) | Editable dashboard with Cloudinary uploads | React, Vite, Express, MongoDB |

## Deploying

**Vercel** — import the repo; no configuration needed.

**Netlify** — build command `npm run build`, publish directory `.next`, plus the
[Next.js Runtime plugin](https://github.com/netlify/next-runtime).

Set the install command to `npm install --legacy-peer-deps` on either, and add the
three `NEXT_PUBLIC_*` EmailJS variables. Before going live, update `siteUrl` in
`constants.js` along with `public/robots.txt` and `public/sitemap.xml`.

## Credits

Built on the [devfolio](https://github.com/shubh73/devfolio) template by
[Shubh Porwal](https://shubhporwal.me), used under the
[MIT licence](./LICENSE.md). The template's author asks that forks keep the footer
credit — please leave it in place.
