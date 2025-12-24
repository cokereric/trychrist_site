# TryChrist.com — GitHub Pages Site

This is a lightweight, modern static website for **Emmanuel Church of Jesus, AF**.

## Files
- `index.html` — single-page site with sections: Home, About, Ministries, Donate, Photos, Contact, Pastor
- `assets/css/style.css` — styling
- `assets/js/main.js` — mobile menu + contact form mailto
- `CNAME` — custom domain for GitHub Pages: TryChrist.com

## Deploy (GitHub Pages)
1. Create a GitHub repo (example: `trychrist-site`).
2. Upload the contents of this folder to the repo root.
3. In GitHub: **Settings → Pages**
   - Source: `Deploy from a branch`
   - Branch: `main` / `(root)`
4. Ensure the `CNAME` file exists in the root.
5. In **Settings → Pages**, set Custom Domain to: `TryChrist.com` (GitHub will verify).

## Point Namecheap DNS to GitHub Pages
At Namecheap → Domain List → Manage → Advanced DNS:

A Records for `@` (root):
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

CNAME for `www`:
- Host: `www`
- Value: `<your-github-username>.github.io`

Then enable **Enforce HTTPS** in GitHub Pages once it becomes available.
