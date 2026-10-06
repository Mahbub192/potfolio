# Mahbub Ali — Portfolio

Personal portfolio for Mahbub Ali, Software Engineer / Full-Stack Developer.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Edit your content

Most copy lives under `src/data/`:

| File | What to update |
|------|----------------|
| `profile.ts` | Name, headline, email, LinkedIn, GitHub, resume |
| `experience.ts` | Jobs and dates |
| `projects.ts` | Featured work |
| `contact.ts` | Contact copy + Formspree |
| `about.ts` / `skills.ts` / `education.ts` | Supporting sections |

### GitHub

Set `links.github` in `src/data/profile.ts`. Leave it as `""` to hide GitHub buttons.

### Contact form

Uses **FormSubmit** with the activated form id in `src/data/contact.ts` (`formsubmitId`).

1. Click **Activate Form** in the FormSubmit email (once).
2. Keep `formsubmitId` as the random string from that email (not your naked Gmail).
3. Submit the portfolio form again — messages should arrive in Inbox.

### SEO / domain

Update `siteUrl` in `src/data/profile.ts` and the canonical / Open Graph URLs in `index.html` to your real domain. Social preview image is `public/og-image.jpg`.

### Resume download

Resume source is `src/assets/resume/Mahbub_Ali_Resume.dat` (PDF bytes). Downloads save as `Mahbub_Ali_Resume.pdf`.
