# Portfolio

Static site (HTML/CSS/JS, no build step) for a Game Designer / Technical Designer portfolio. Deployable directly via GitHub Pages.

## Structure

```
index.html            Home — intro + featured project cards
skills.html            Skills overview, grouped by discipline
cv.html                 CV page, links to cv/rene-hill-cv.pdf
contact.html          Contact links
projects/
  home-sweet-home.html
  seateam.html
  blizz.html
  moshpit.html
assets/
  css/style.css         Global styles (variables, nav, cards, buttons)
  css/case-study.css    Case-study-only layout (quick facts, prose, media slots)
  js/main.js            Mobile nav toggle + active-link highlighting
  img/projects/         Project thumbnails / in-page images
  img/icons/
cv/
  rene-hill-cv.pdf       ← add your real CV here (see cv/README.txt)
```

Every page repeats the same header/nav/footer markup (no templating engine). To change nav links or footer content site-wide, find/replace across the HTML files, or introduce a build step later if that becomes painful.

## Replace before publishing

Name, email, LinkedIn, itch.io, and all four project case studies are filled in already.
See `TODO.md` for the exact list of what's still left (mostly the Skills page, the CV PDF
file itself, and a couple of bio/intro sentences).

## Local preview

Any static file server works, e.g.:

```
npx serve .
```

or just open `index.html` directly in a browser (all paths are relative).

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo.
2. Repo Settings → Pages → Source: deploy from branch (`main`, root `/`).
3. Site will be live at `https://<username>.github.io/<repo-name>/`.

Since all links are relative, the site works whether it's served from a project subpath (`/repo-name/`) or a root/custom domain — no path changes needed either way.
