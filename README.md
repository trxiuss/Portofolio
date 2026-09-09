<div align="center">

  # 🌐 Modern Responsive Portfolio Starter Template

  **A sleek, fast, and customizable personal portfolio template built with raw HTML5, CSS3, and Vanilla JavaScript.**

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

  [Live Demo](https://trxiuss.github.io/Portofolio) • [Key Features](#-features) • [Customization Guide](#%EF%B8%8F-customization-guide) • [Deployment](#-deployment-options)

</div>

---

## 📋 Overview

This repository provides a lightweight, dependency-free **Personal Portfolio Web Template**. Designed with clean code architecture and responsive layout principles, it serves as an ideal base for software developers, system administrators, web designers, or technical professionals who want to showcase their skills, hosting experience, and personal projects.

Since this repository is structured as a **template**, you can easily clone it, replace the placeholder text and images with your own details, and deploy it to your web hosting or GitHub Pages within minutes.

---

## ✨ Features

- 📱 **Fully Responsive Layout:** Seamlessly adapts to smartphones, tablets, laptops, and desktop screens.
- ⚡ **Zero External Dependencies:** Built entirely with standard HTML, CSS, and Vanilla JavaScript for maximum loading speed and security.
- 🛠️ **Infrastructure & Skill Badges:** Pre-configured sections to highlight technologies, server tools (e.g., cPanel, Cloudflare, Windows Server, PenDC, Comnet), and development skill sets.
- 🎨 **Clean & Modern UI:** Polished typography, elegant spacing, subtle hover effects, and accessible color schemes.
- 🚨 **Custom 404 Error Page:** Includes a pre-styled `404.html` page for handling missing links gracefully.
- 🔍 **SEO & Search Engine Ready:** Comes with a configurable `robots.txt` and semantic HTML markup.

---

## 📁 File Structure

```text
Portofolio/
├── 📄 index.html          # Main portfolio landing page
├── 📄 404.html            # Custom page-not-found error page
├── 📄 style.css           # Central stylesheet (layout, typography, components)
├── 📄 script.js          # Interactive scripts (navigation, interactions, animations)
├── 📄 robots.txt          # Search engine crawler configuration
└── 📁 assets/
    ├── 📁 icons/          # Favicon and UI iconography
    └── 📁 images/         # Profile pictures, brand logos, and project media
```

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone [https://github.com/trxiuss/Portofolio.git](https://github.com/trxiuss/Portofolio.git)
cd Portofolio
```

### 2. Run Locally

No build tools or node packages required! You can open the site directly:

- **Option A:** Double click `index.html` to open it in your web browser.
- **Option B (Recommended):** Use the **Live Server** extension in VS Code for live previewing upon saving changes.

---

## ⚙️ Customization Guide

Follow these simple steps to adapt this portfolio template for your personal use:

### 1. Personal Information (`index.html`)
Open `index.html` and update the following placeholders:
- **Title Tag:** Change `<title>Your Name - Portfolio</title>` in the `<head>` section.
- **Hero Section:** Update your display name, main title, and short bio introduction.
- **About Me:** Replace the background text with your actual skills, experience, and education.
- **Contact Info & Social Links:** Update your email address, LinkedIn, GitHub, and social media handles.

### 2. Media Assets (`/assets/`)
Replace the default media files in `assets/images/` with your own assets (keep file names the same or update paths in HTML/CSS):
- **Profile Image:** Replace `assets/images/profile.png` with your personal headshot or avatar.
- **Favicon:** Replace `assets/icons/favicon.jpg` with your own icon.
- **Tech/Brand Logos:** Swap out `cloudflare.png`, `cpanel.png`, `windows.png`, etc., with your preferred technology stack logos.

### 3. Styling & Colors (`style.css`)
Modify `style.css` to change the global color scheme, fonts, or element dimensions. Primary branding colors and font properties are organized at the top of the stylesheet.

### 4. Interactive Logic (`script.js`)
Edit `script.js` if you wish to adjust mobile navigation drawer toggles, scroll animations, or form submission behavior.

### 5. Search Engine Indexing (`robots.txt`)
By default, search engine crawling is restricted in `robots.txt`. If you want search engines to index your website, change `Disallow: /` to `Disallow:` or allow indexing:

```txt
User-agent: *
Disallow:
```

---

## 🌐 Deployment Options

### Deploying via GitHub Pages (Free)

1. Push your customized repository to your GitHub account.
2. Go to your repository on GitHub and click on **Settings**.
3. In the left sidebar, click on **Pages**.
4. Under **Build and deployment** -> **Branch**, select `main` (or `master`) branch and click **Save**.
5. Your site will be published at `https://your-username.github.io/repository-name/`.

### Alternative Hosting Options

This static website can also be deployed instantly on platforms such as:
- **Vercel:** Connect your GitHub repo and deploy in one click.
- **Netlify:** Drag & drop your project folder or link your Git repository.
- **Cloudflare Pages:** Import your GitHub project for global CDN hosting.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). You are free to modify, distribute, and use it for personal or commercial projects.

---

<div align="center">
  <sub>Built with ❤️ for developers and creators worldwide.</sub>
</div>
