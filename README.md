# Northern Colorado Tree Service — Concept Redesign

A Blueprint WebStudio prospect/demo redesign built with React + Vite and ready for GitHub + Vercel.

## 1. Put the project on your PC

Unzip this folder wherever you keep your website projects, then open a terminal in the project directory.

## 2. Install Node.js (if needed)

Use Node.js 20+.

Check your version:

```bash
node -v
npm -v
```

## 3. Install dependencies

```bash
npm install
```

## 4. Run it locally

```bash
npm run dev
```

Vite will print a local URL, usually:

```text
http://localhost:5173
```

## 5. Build-test before publishing

```bash
npm run build
```

## 6. Create a GitHub repository

Create an empty repository in GitHub, for example:

```text
northern-colorado-tree-service-demo
```

Then from this folder:

```bash
git init
git add .
git commit -m "Initial Northern Colorado Tree Service redesign"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/northern-colorado-tree-service-demo.git
git push -u origin main
```

## 7. Deploy with Vercel

1. Sign in to Vercel.
2. Click **Add New → Project**.
3. Import the GitHub repository.
4. Vercel should automatically detect **Vite**.
5. Keep the defaults and click **Deploy**.

Every future push to `main` will automatically redeploy.

## 8. Connect a Blueprint WebStudio subdomain

Example:

```text
noco-tree-service.blueprintwebstudio.com
```

In Vercel:

1. Open the deployed project.
2. Go to **Settings → Domains**.
3. Add `noco-tree-service.blueprintwebstudio.com`.
4. Vercel will show the DNS record it wants.

In Porkbun (where blueprintwebstudio.com DNS is managed):

1. Open **DNS Records** for `blueprintwebstudio.com`.
2. Add the CNAME record Vercel requests.
3. Typically the host/name will be `noco-tree-service` and the value will be Vercel's target.
4. Return to Vercel and wait for verification/SSL.

Use the exact DNS target Vercel displays rather than assuming a value.

## 9. Estimate form / Resend

The page works without Resend. If the API is not configured, submitting the form displays a demo message instead of failing visually.

When you want real email delivery, create these Environment Variables in **Vercel → Project → Settings → Environment Variables**:

```text
RESEND_API_KEY
CONTACT_TO_EMAIL
CONTACT_FROM_EMAIL
```

`CONTACT_FROM_EMAIL` must use a domain/address you have verified with Resend.

After adding variables, redeploy the project.

## 10. Important demo notes

- The hero/about photograph currently references a public image hosted by the existing Northern Colorado Tree Service website. For a final paid client site, obtain permission/ownership confirmation and move approved image files into this project rather than hotlinking them.
- Review copy in this concept is summarized/paraphrased demo copy, not presented as verbatim Google reviews.
- Business facts should be confirmed with the owner before production launch.
- The footer deliberately says **Concept redesign by Blueprint WebStudio** for prospect-demo use. Remove or revise that line for final delivery if desired.

## Main files

```text
src/App.jsx       Page content and React components
src/styles.css    Complete visual design/responsive CSS
api/contact.js    Optional Vercel/Resend estimate form endpoint
index.html        SEO metadata and Vite entry
vercel.json       Vercel project configuration
.env.example      Email environment-variable template
```
