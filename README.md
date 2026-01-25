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
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Header & Footer
│   ├── page.tsx           # Home page (single-page app)
│   ├── loading.tsx        # Loading component
│   ├── globals.css        # Global styles and Tailwind
│   ├── sitemap.ts         # Sitemap generation
│   ├── robots.ts          # Robots.txt generation
│   ├── manifest.ts        # PWA manifest
│   └── icon.svg           # Favicon
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero/landing section
│   ├── AboutSection.tsx   # About section
│   ├── ExperienceSection.tsx  # Experience section
│   ├── ProjectsSection.tsx    # Projects section
│   ├── SkillsSection.tsx      # Skills section
│   ├── ContactSection.tsx     # Contact section
│   ├── SocialLinks.tsx    # Social media links
│   └── Icons.tsx          # SVG icon components
├── lib/                   # Utility functions and data
│   └── data.ts           # Portfolio data and constants
├── public/               # Static assets
│   ├── images/          # Project images and photos
│   ├── favicon.svg      # Favicon
│   └── RushiButani_Resume.pdf  # Resume PDF
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## 🎨 Customization

### Update Personal Information

Edit `lib/data.ts` to update your personal information, experience, projects, and skills.

### Modify Styling

- **Colors:** Update the color palette in `tailwind.config.js`
- **Global Styles:** Modify `app/globals.css` for global styling changes
- **Component Styles:** Individual component styles are in their respective files

### Add Images

Place your project images in `public/images/` and update the paths in `lib/data.ts`.

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
