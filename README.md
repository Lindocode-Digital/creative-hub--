# 🎨 Creative Hub

![Home](https://raw.githubusercontent.com/Lindo-code/images/refs/heads/main/creative-hub/Screenshot_20250702_185849.png)

---

## 💭 Vision

**Creative Hub** is envisioned as a centralized, elegant platform for showcasing my creative work — built to be as intuitive to navigate as it is powerful to experience.

It’s more than just a portfolio: it’s a responsive, scalable solution that merges form and function. As development progresses, I plan to fully migrate my existing projects and digital presence into this unified space to improve accessibility, performance, and presentation across devices and users.

> 🔧 Modular, route-based architecture  
> 💡 Fully responsive and optimized for scalability  
> 📫 Includes integrated contact form and smooth scrolling sections

---

## 🚀 Features

- [x] 🧠 **Dynamic routing** with slug-based URLs

- [x] ⏳ **Lazy-loaded components** using `React.lazy` & `Suspense`

- [x] 🖼️ **Smooth background transitions** per project

- [x] 🧩 **Modular project pages**:

  - `Lazy Appz`: Stacked cards per category (web, games, mobile)
  - `PORTFOLIO`: Video intro, tech stack, testimonials, and contact
  - `Sdrow Vieli`: Carousel + tab-based layout

- [x] ✨ **GSAP-powered UI animations**

- [x] 💌 **Formspree contact integration**

- [x] 🎯 **Mobile-first design** with `useMediaQuery` via Material UI

## Updates

- [x] Make page refresh work

- [x] IOS (Safari) fix lack of pinning issue on scrolling

- [x] Moved website deployment to different platform

- [ ] Update Lazy Appz page:

  - Add tabs for page
  - Add content to the page

- [ ] Update Portfolio page links to reference Lazy Appz

- [ ] Update Sdrow Vieli page:

  - Add content relative to the page

- [ ] Make Fully Responsive:

  - Landscape mobile
  - Main page portrait mobile

---

## 📁 Project Structure

```
src/
├── App.jsx
├── components/
│ ├── shared/ # Reusable UI components
│ ├── projects/ # Project-specific views
│ └── icon_ticker/ # Icon and testimonial tickers
├── data/ # All project + UI content (JSON)
│ └── *.json
├── assets/ # Static files (images, slogans, video)
└── EmailForm.jsx
```

---

## 🌐 Routes

| Path           | View Component | Description                          |
| -------------- | -------------- | ------------------------------------ |
| `/`            | `App`          | Main card carousel and navigation    |
| `/lazy-appz`   | `LazyAppz`     | Stacked cards for various app types  |
| `/portfolio`   | `Portfolio`    | Full project showcase + contact form |
| `/sdrow-vieli` | `SdrowVieli`   | Slider and tabbed word experiment    |
| `*`            | `NotFound`     | 404 fallback                         |

Routing is dynamically matched using slugs generated from project titles.

---

## 📥 Installation

### 1. Clone the Repo

```
git clone https://github.com/your-username/creativehub.git
cd creativehub
```

### 2. Install dependencies

```
npm install
```

### 3. Start Development Server

```
npm run dev
```

_App will be served at: http://localhost:5173_

## 🧪 Contact Form Setup

CreativeHub uses [Formspree](https://formspree.io)

## 🙏 Acknowledgements

- React

- Vite

- Material UI

- GSAP

- Formspree

## 📜 License

MIT License
© 2025 Lindo Matabane
