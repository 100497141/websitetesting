# Jorge Rodal — portfolio V2

This version keeps the minimal Apple/editorial direction but makes the site more personal and portfolio-led.

## Replace photos

Put your real files inside `/assets/` using these exact names:

- `jorge-portrait.png`
- `the-bear-beneath.png`
- `the-wolf-she-paints.png`
- `society-of-fearless-grandmothers.png`
- `sonora.png`

You can also replace the image files with PNG/WebP; if you do, update the filename in `index.html`.

## Replace links

The project links are already placed in `index.html`. Search for `href=` next to each project and replace the URL when you have the final project page.

Current links:
- The Bear Beneath → media.jorgerodal.com/thebearbeneathpk
- The Wolf She Paints → Vimeo
- Society of Fearless Grandmothers → LinkedIn placeholder (replace this)
- Sonora UC3M → LinkedIn
- Microdrama research → media.jorgerodal.com/microdrama
- Footer LinkedIn → linkedin.com/in/jorgerodal

## Deploy on Cloudflare Pages

1. Upload this folder to GitHub.
2. Cloudflare → Workers & Pages → Create application → Pages → Connect to Git.
3. Select the GitHub repository.
4. Build command: leave empty.
5. Output directory: `/`
6. Add `jorgerodal.com` as a custom domain.

No paid hosting is required for this static site.


### About the temporary photo states
Until you add the real photography, the cards use intentionally designed editorial compositions rather than generic "image missing" boxes. Replace the files in `/assets/` whenever you are ready; the real images will automatically take over.


### Included real photography
This package already contains the seven uploaded PNGs:
- jorge-portrait.png
- the-bear-beneath.png
- the-wolf-she-paints.png
- society-of-fearless-grandmothers.png
- sonora.png
- consulate-new-york.png
- ucsb.png
