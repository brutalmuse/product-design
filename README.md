# Brutal Muse — Product Design Portfolio

Shruthi's product design portfolio. Static HTML, no build step — every
page is self-contained and runs against the small runtime in `js/support.js`
(parses the `<x-dc>` template blocks and mounts each page's script).

## Structure

```
index.html            landing page
about.html            about page
js/
  support.js          page runtime (template parsing + mount)
  cursor-dot.js        custom cursor
  image-slot.js        drag-and-drop image placeholder component
  browser-window.jsx   browser-chrome mockup frame, used by case studies
pages/                 category indexes + case studies
assets/
  images/
  video/
  fonts/
```

## Local preview

No build step required — just serve the directory:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. (Opening `index.html` directly via
`file://` also works in most browsers.)

## Screen map

| Screen | File |
|---|---|
| Landing | `index.html` |
| About | `about.html` |
| Human-Centred Concepts (index) | `pages/human-centred-concepts.html` |
| Interactive Systems (index) | `pages/interactive-systems.html` |
| Emerging Intelligence (index) | `pages/emerging-intelligence.html` |
| Adaptive View for YouTube TV | `pages/adaptive-view-youtube-tv.html` |
| ThreadSpace | `pages/threadspace.html` |
| Feral Type | `pages/feral-type.html` |
| Fashiorama | `pages/fashiorama.html` |
| The Slow Garden | `pages/slow-garden.html` |
| Pomodoro (Focus Ritual) | `pages/pomodoro.html` |

## Deploy

Static site — point Netlify (or any static host) at this repo with publish
directory `/` and no build command.
