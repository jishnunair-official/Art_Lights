# Art Lights website

Website for **Art Lights**, a chandelier and decorative lighting showroom at
Sardar Griha Building, 39, Lohar Chawl, Kalbadevi, Mumbai 400002.

Live site: https://www.theartlights.com

## What is on the site

| Page | Address | Purpose |
| --- | --- | --- |
| Home | `/` | Introduction, product categories, customer reviews |
| Products | `/products/` | 49 products in 5 categories, with an enquiry popup (single or bulk order) |
| Contact us | `/contact/` | Address, phone, hours, enquiry form |
| About us | `/about/` | About the shop and its owner |
| Privacy policy, Terms of use | `/privacy/`, `/terms/` | Legal pages |

## How it is built

Plain HTML, CSS and JavaScript. There is no framework and no build step.
Every page is its own HTML file, so search engines can index each one.
Enquiry forms send to the shop inbox through [Formspree](https://formspree.io).
The site includes a sitemap, robots file, social preview tags and local business schema.

```
index.html            Home
products/index.html   Products
contact/index.html    Contact us
about/index.html      About us
privacy/  terms/      Legal pages
404.html              Page not found
styles.css            All styles
main.js               Product tabs, enquiry popup, form sending
images/               Site photos, logo and social preview image
images/products/      Product photos, named by code (CH-01.jpg, SB-01.jpg ...)
sitemap.xml  robots.txt  vercel.json
```

Product codes: CH chandeliers, SB stacked bead pendants, CL cluster pendants,
LN linear pendants, SP single pendants.

## Run it on your computer

```
python3 -m http.server 8000
```

Then open http://localhost:8000

## Common updates

- **Replace a product photo:** save the new image with the same file name in `images/products/`.
- **Change phone, hours or email:** these appear in the footer of every page, on the Contact page and in the schema block of `index.html` and `contact/index.html`. Search the project for the old value and replace it everywhere.
- **Change the enquiry inbox:** update the Formspree address in `main.js` and in the `action` of each form.

## Deployment

Deployed on Vercel from this repository. Every push to `main` redeploys the site.
Import the repository, set Framework Preset to **Other**, and leave the build command
and output directory empty.

The site address (https://www.theartlights.com) is used in canonical tags, social preview tags, schema,
`404.html`, `sitemap.xml` and `robots.txt`. If the address changes, update it in those files.

## Copyright

All content, photos and the Art Lights name and logo belong to Art Lights. All rights reserved.
