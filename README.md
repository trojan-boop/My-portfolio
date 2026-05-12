# Anurag Ranjan — portfolio

Vite + React + TypeScript + React Three Fiber + Framer Motion.

## Local development

```bash
npm install
npm run dev
```

## Deploy to Vercel (from GitHub)

1. **Push this folder to GitHub**
   - Create a new empty repository on GitHub (no README/license if you will push existing files).
   - In this directory:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Import on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub.
   - **Add New… → Project** → import your repository.
   - Vercel should detect **Vite** automatically. Defaults:
     - **Build command:** `npm run build`
     - **Output directory:** `dist`
     - **Install command:** `npm install`
   - Click **Deploy**.

3. **After deploy**
   - Your site will get a URL like `https://your-repo.vercel.app`.
   - Future pushes to `main` trigger new deployments automatically.

If the build fails, ensure **Node.js 20+** is selected in Vercel → Project → Settings → General → Node.js Version.
