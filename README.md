# Art Lights website

Static site (HTML, CSS, JS). No build step.

Deploy on Vercel: import the GitHub repo, Framework Preset = Other, leave build command
and output directory empty, then Deploy. vercel.json keeps URLs consistent (/products/).

Pages: / , /products/ , /contact/ , /about/ , /privacy/ , /terms/

The site address (https://YOUR-SITE-URL) is used in canonical tags, social preview tags, schema,
404.html, sitemap.xml and robots.txt. If the address changes, rebuild with the new one.

Enquiry forms post to Formspree (endpoint in main.js and in each form's action).
Product photos: images/products/ (CODE-NN.jpg, e.g. CH-01.jpg).
