# Rushi Butani - Portfolio Website

A modern, high-performance personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ **Next.js 14 App Router** - Latest Next.js features with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🔍 **SEO Optimized** - Meta tags, sitemap, and robots.txt for better search engine visibility
- ♿ **Accessible** - Semantic HTML and ARIA labels for accessibility
- 🎭 **TypeScript** - Type-safe code for better development experience
- 📦 **Static Site Generation (SSG)** - Pre-rendered pages for optimal performance
- 🎯 **Lighthouse 95+** - Optimized for performance, SEO, and accessibility

## 📄 Pages

This is a **single-page application (SPA)** with smooth scrolling between sections:

- **Home/Hero** - Introduction with profile image and CTAs
- **About** - Background, skills, and contact information
- **Experience** - Professional work history and achievements
- **Projects** - Portfolio of web development projects
- **Skills** - Technical skills, tools, and education
- **Contact** - Contact information and social media links

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts)
- **Animation:** Tailwind CSS animations
- **Deployment:** Static Export

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/rushibutani/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

This will generate a static export in the `out` folder, which can be deployed to any static hosting service.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Root layout with Header & Footer
│   │   ├── page.tsx           # Home page (single-page app)
│   │   ├── sitemap.ts         # Sitemap generation
│   │   ├── robots.ts          # Robots.txt generation
│   │   ├── manifest.ts        # PWA manifest
│   │   └── icon.svg           # Favicon
│   ├── components/            # Reusable React components
│   │   ├── layout/           # Layout components
│   │   │   ├── header.tsx    # Navigation header
│   │   │   ├── footer.tsx    # Footer component
│   │   │   └── social-links.tsx  # Social media links
│   │   └── ui/               # UI components
│   │       ├── badge.tsx     # Badge component
│   │       ├── button.tsx    # Button component
│   │       ├── card.tsx      # Card component
│   │       ├── icons.tsx     # SVG icon components
│   │       ├── link.tsx      # Link component
│   │       └── section.tsx   # Section component
│   ├── sections/             # Page sections
│   │   ├── hero.tsx         # Hero/landing section
│   │   ├── about.tsx        # About section
│   │   ├── experience.tsx   # Experience section
│   │   ├── projects.tsx     # Projects section
│   │   ├── skills.tsx       # Skills section
│   │   └── contact.tsx      # Contact section
│   ├── config/              # Configuration files
│   │   └── site.ts         # Site configuration and data
│   ├── styles/              # Global styles
│   │   └── globals.css     # Global CSS and Tailwind
│   └── types/               # TypeScript type definitions
│       └── index.ts        # Type definitions
├── public/                  # Static assets
│   ├── images/             # Project images and photos
│   └── RushiButani_Resume.pdf  # Resume PDF
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## 🎨 Customization

### Update Personal Information

Edit `src/config/site.ts` to update your personal information, experience, projects, and skills.

### Modify Styling

- **Colors:** Update the color palette in `tailwind.config.js`
- **Global Styles:** Modify `src/styles/globals.css` for global styling changes
- **Component Styles:** Individual component styles are in their respective files

### Add Images

Place your project images in `public/images/` and update the paths in `src/config/site.ts`.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### GitHub Pages

1. Build the project: `npm run build`
2. Deploy the `out` folder to GitHub Pages

## 📊 Performance

This portfolio is optimized for:

- **Performance:** Code splitting, image optimization, and static generation
- **SEO:** Meta tags, semantic HTML, and sitemap
- **Accessibility:** ARIA labels, keyboard navigation, and semantic markup
- **Mobile:** Responsive design with mobile-first approach

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **Email:** rushibutani@gmail.com
- **LinkedIn:** [linkedin.com/in/rushibutani](https://in.linkedin.com/in/rushibutani)
- **GitHub:** [github.com/rushibutani](https://github.com/rushibutani)
- **Twitter:** [@rushibutani\_](https://twitter.com/rushibutani_)

---

Built with ❤️ by Rushi Butani
