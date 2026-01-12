# 🔗 Live Demo

👉 **https://escaliburcalibur.github.io/Portfolio-DavidBayon-Final/**

---

## 📖 Project Description

This project is a **personal portfolio website** for **David Bayon Mateo**, designed as a modern, editorial-style digital showcase. The site presents selected projects, case studies, and personal information through a minimal, fashion-oriented interface.

The portfolio is built as a **single-page application (SPA-like experience)** where content is dynamically shown and hidden without traditional page navigation. The focus is on clarity, rhythm, and visual storytelling, aligning with contemporary design and creative direction standards.

### Purpose

- Showcase creative and design work
- Present case studies in a structured, editorial format
- Offer an immersive, distraction-free browsing experience
- Provide a clear contact path via Instagram

---

## 🛠 Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom layout system with CSS variables
- **JavaScript (Vanilla)** — SPA logic, interactions
- **GSAP 3** — Animations
- **GSAP ScrollTrigger** — Scroll-based reveals & parallax
- **Tailwind CSS (CDN)** — Utility support
- **Bootstrap 5 (CDN)** — Minor layout utilities

No frameworks or build tools are required.

---

## ⚙️ Setup Instructions (Local Development)

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. **Navigate to the project folder**

   ```bash
   cd your-repo-name
   ```

3. **Open the project**

   Since this is a static site, you can:

   - Open `index.html` directly in your browser, or
   - Use a local server (recommended):

   ```bash
   npx serve
   ```

4. **View in browser**
   ```
   https://escaliburcalibur.github.io/Portfolio-DavidBayon-Final/
   ```

---

## 🎨 Customization Guide

### Change Projects

- Edit content inside:
  ```
  <section id="project-x" class="project">
  ```
- Update sidebar cards using `data-target="project-x"`

### Update Images

- Replace image URLs inside `<img>` tags
- Maintain aspect ratios for best layout results

### Dark / Light Mode

- Controlled via `body.dark` and `body.light`
- CSS variables allow easy color tuning in `:root`

### Add Scroll Animations

- Add the class `.reveal` for scroll-based reveals
- Add `.parallax` to images for parallax motion

### Contact Link

- Update Instagram username in:
  ```html
  <a href="https://www.instagram.com/YOUR_USERNAME"></a>
  ```

---

## 🖼 Screenshots / Demo

> _Replace the links below with real images or GIFs._

### Desktop View

![Desktop Screenshot](https://ik.imagekit.io/0ndcs9imt/Captura%20de%20pantalla%202026-01-12%20a%20las%2013.12.39.png)

### Mobile View

![Mobile Screenshot](https://ik.imagekit.io/0ndcs9imt/Captura%20de%20pantalla%202026-01-12%20a%20las%2013.12.39.png)

---

## 🙏 Credits & Acknowledgments

- **Design & Development:** David Bayon Mateo
- **Animations:** GSAP & ScrollTrigger by GreenSock
- **Inspiration:** Editorial design, fashion portfolios, contemporary creative studios

### Libraries & Tools

- GSAP — https://greensock.com/gsap/
- Tailwind CSS — https://tailwindcss.com/
- Bootstrap — https://getbootstrap.com/

---

## 📬 Contact

**Instagram:** https://www.instagram.com/YOUR_USERNAME

---

© 2026 David Bayon Mateo. All rights reserved.
