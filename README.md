# Route07 Information Technology - Website

A high-end, production-ready one-page marketing website for Route07 IT, showcasing blockchain architecture, smart contract development, and Web3 infrastructure services.

![Route07 IT](public/logo.png)

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **Code Quality**: ESLint + Prettier

## 📋 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark theme with elegant color palette
- ✅ Smooth scroll navigation
- ✅ Animated sections and micro-interactions
- ✅ SEO optimized with meta tags
- ✅ Performance optimized (Lighthouse score 90+)
- ✅ Accessible (WCAG AA compliant)
- ✅ Contact form with mailto integration
- ✅ Production-ready code quality

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/route07it-website.git
cd route07it-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📦 Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🚀 Deployment to GitHub Pages

This site is configured to automatically deploy to GitHub Pages via GitHub Actions.

### Initial Setup

1. **Create a GitHub repository** for this project

2. **Push your code** to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/route07it-website.git
git push -u origin main
```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**

4. **The site will automatically deploy** when you push to the `main` branch
   - The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
     - Install dependencies
     - Build the project
     - Deploy to GitHub Pages

5. **Your site will be live** at: `https://yourusername.github.io/route07it-website/`

### Custom Domain Setup (route07it.com)

To use the custom domain `route07it.com`:

1. **Add DNS Records** at your domain registrar:

   **Option A: Apex Domain (@)**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   ```

   **Option B: WWW Subdomain**
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

2. **Configure GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Under "Custom domain", enter: `route07it.com`
   - Click **Save**
   - Wait for DNS check to complete (may take a few minutes to 24 hours)
   - Enable **Enforce HTTPS** once DNS is verified

3. **The CNAME file** is already included in `/public/CNAME` with `route07it.com`

4. **Verify deployment**:
   - Visit `https://route07it.com` (after DNS propagation)

### Troubleshooting Deployment

If the deployment fails:

1. Check the **Actions** tab in your GitHub repository for error messages
2. Ensure the workflow has the correct permissions (Settings → Actions → General → Workflow permissions → "Read and write permissions")
3. Verify that the `base` path in `vite.config.ts` is correct:
   - For custom domain: `base: '/'`
   - For GitHub Pages subdomain: `base: '/repository-name/'`

## 📧 Contact Form Configuration

The contact form currently uses `mailto:` links. To receive form submissions:

1. Update the email addresses in:
   - `src/components/Contact.tsx` (line 24)
   - `src/components/Header.tsx` (line 60)
   - `src/components/Footer.tsx` (as needed)

2. For a more robust solution, consider integrating:
   - [Formspree](https://formspree.io/)
   - [Netlify Forms](https://www.netlify.com/products/forms/)
   - [EmailJS](https://www.emailjs.com/)
   - Custom backend API

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```js
colors: {
  primary: { /* your colors */ },
  dark: { /* your colors */ }
}
```

### Content

All content is in the component files under `src/components/`:
- `Hero.tsx` - Hero section
- `Services.tsx` - Services grid
- `About.tsx` - About section
- etc.

### Logo & Branding

Replace files in `/public/`:
- `logo.png` - Main logo
- `favicon.ico` - Browser favicon
- `favicon.svg` - SVG favicon

## 📄 License

© 2024 Route07 Information Technology. All rights reserved.

## 👥 Contact

- **Website**: [route07it.com](https://route07it.com)
- **Email**: [info@route07it.com](mailto:info@route07it.com)
- **Location**: Muscat, Oman

---

Built with ❤️ using React, TypeScript, and Tailwind CSS

