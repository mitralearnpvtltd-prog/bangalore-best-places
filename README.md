# TravelBites – P0 SEO pages (Phase 1, 17 pages)

Frontend only: React + Vite + React Router + React Helmet.

## Run in VS Code
1. Unzip and open the `travel-food-seo` folder in VS Code (File > Open Folder).
2. Open the terminal (Ctrl + `) and run:

       npm install
       npm run dev

3. Open http://localhost:5173/ and click through the pages.

## Build
    npm run build      # output goes to /dist
    npm run preview

## How it works
- `src/data/seoPages.js` holds all 17 rows (title, meta description, URL, intro).
- `src/pages/SeoPage.jsx` is the single template used by every page.
- `src/App.jsx` creates one route per row automatically.
- To add a page, add one object to `seoPages.js` and add its URL to `public/sitemap.xml`.

## Before going live
- Replace `https://yourdomain.com` in `src/components/SeoHead.jsx`, `public/robots.txt` and `public/sitemap.xml`.
- `public/_redirects` makes every URL work on refresh on Netlify (for Vercel, add a rewrite to index.html).
- Write a longer unique `intro` for each page (150+ words) to help ranking.
- Submit sitemap.xml in Google Search Console.
- For better indexing, pre-render the pages (vite-react-ssg) or move to Next.js later.
