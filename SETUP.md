# Stuart.dev — Portfolio Setup

Built on [shubh73/devfolio](https://github.com/shubh73/devfolio) (MIT) — the same
template your friend's site uses.

## Still to do

1. **Email address** — `SOCIAL_LINKS` in `constants.js` still says `you@example.com`
2. **Experience tabs** — the "Company Name" and "Freelance" tabs are placeholders;
   fill in your real work history or delete them (the Stuart.dev tab is written
   from your actual repos)
3. **Site URL** — `METADATA.siteUrl`, `public/robots.txt`, `public/sitemap.xml`
   all assume `https://stuart-dev.netlify.app/`
4. **Social preview** — add a 1200×630 image at `public/social_preview.png`
5. **Favicon** — replace `public/favicons/favicon.png` and `public/icon-*.png`
6. **EmailJS keys** — see "Contact form" below, or the form's Send button won't work
7. **Twitter handle** — `METADATA.twitterHandle`, or remove it

## Project card images

Cards are 760×1013 (3:4 portrait) browser frames, each holding two stacked views
of the app. Stacking keeps every page near natural scale, so headlines and nav
stay readable at the ~270px the tilted tile actually renders — a single
cover-cropped screenshot zooms in far enough to slice headlines in half.

Sources, all real:

| Project | Captured from |
| --- | --- |
| DineFlow, Velora, Sear & Saffron, Gyra, EduManage | `docs/screenshots/` in each repo |
| Liza's Ribbon | the live deployment at `liza-g.vercel.app` |
| MOTIONA, Fire Zone, React Dashboard | the apps run locally and screenshotted |

Two caveats worth knowing. Fire Zone's hero renders as a grey block because the
image asset is missing from the repo, and its menu/rooms pages come up empty
without the Express backend and a seeded MongoDB — so its card uses the home page
only. React Dashboard shows its own "Backend API not detected" banner for the
same reason.

To replace a card, overwrite `public/projects/<imageKey>.webp`. Any size works
(the tile uses `object-fit: contain`), but portrait reads best — landscape images
sit short in the corner and leave the tile looking empty.

## Running it

```bash
npm install --legacy-peer-deps   # only needed once
npm run dev                      # http://localhost:3000
npm run build                    # production build
```

> `--legacy-peer-deps` is required because `react-reveal` still declares a React 16
> peer range. It works fine with React 18; npm just refuses without the flag.

## What to change

### 1. `constants.js` — 95% of the work

Every `// TODO` in that file is placeholder text. It controls:

| Constant        | Controls                                                  |
| --------------- | --------------------------------------------------------- |
| `METADATA`      | Page title, SEO description, keywords, social preview      |
| `TYPED_STRINGS` | The rotating typewriter line in the hero                   |
| `SOCIAL_LINKS`  | Icon row in the hero and footer                            |
| `SKILLS`        | The four icon groups in the Skills section                 |
| `PROJECTS`      | The horizontal-scrolling project cards                     |
| `WORK_CONTENTS` | The "Experience" tabs — one entry per company              |
| `GTAG`          | Google Analytics ID (leave `""` to disable)                |

### 2. Images

**Project cards** — three steps per project:

1. Drop a `.webp` (roughly 1000×760) into `public/projects/`
2. Import it and add it to `PROJECT_IMAGES` in `components/Projects/images.js`
3. Reference that key as `imageKey` in `constants.js`

**Skill icons** — each entry in `SKILLS` must match `public/skills/<name>.svg`.
Available: `antdesign, bootstrap, chakra-ui, css, cursor, expo, figma, firebase,
git, html, javascript, laravel, mongodb, mysql, nextjs, nodejs, php, react,
react-query, redux, sanity, sass, styledcomponents, tailwindcss, tanstack,
typescript, vite, webpack` (`php`, `laravel` and `bootstrap` were added for you).
Need another? Grab the SVG from [devicon](https://devicon.dev/) and drop it in.

**Tech icons on project cards** come from `public/projects/tech/<name>.svg`.

**Favicon / PWA icons** — replace `public/favicons/favicon.png` and the
`public/icon-*.png` files.

**Social preview** — add a 1200×630 image at `public/social_preview.png`.

### 3. Contact form

Copy `.env.local.example` to `.env.local` and fill in your own EmailJS keys.
Free tier at [emailjs.com](https://www.emailjs.com/) is plenty. The template must
use the variables `{{name}}`, `{{email}}`, `{{message}}`.

Without keys the site runs fine — only the Send button fails.

### 4. Before deploying

- `public/robots.txt` and `public/sitemap.xml` — replace `your-site.netlify.app`
- `public/manifest.json` — name / short_name / description
- `utils/log.js` — optional ASCII banner for the browser console
  ([generator](https://patorjk.com/software/taag/))

## Deploying

**Netlify** (same as your friend's): push to GitHub, then New site from Git.
Build command `npm run build`, publish directory `.next`, and install the
[Next.js Runtime plugin](https://github.com/netlify/next-runtime). Add the three
`NEXT_PUBLIC_*` env vars under Site settings → Environment variables.

**Vercel** is a one-click import with no configuration — the template's own site
is deployed there.

Set the install command to `npm install --legacy-peer-deps` on either host.

## Attribution

The template author asks that the footer credit line be preserved when forking.
It currently reads "Developed with ❤️ by {your name}" and is driven by
`METADATA.author`. Consider adding a small "Template by Shubh Porwal" link
alongside it.
