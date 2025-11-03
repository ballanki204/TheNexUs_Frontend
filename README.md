# The NexUs

A modern, responsive business website built with React and Vite, showcasing services in software development, digital marketing, plant marketplace, and safety applications. The site features a clean UI using ShadCN UI components and Tailwind CSS for styling, with custom color themes for different sections (plant marketplace in earthy tones, safety app in professional blue tones).

## Features

- **Logo Animation**: Interactive logo that starts black and white, changes to colorful gradient on hover, with title sliding in from the right side.
- **Dynamic Header**: Logo and text shrink when scrolling down, with header height adjustment for better space utilization.
- **Homepage**: Hero section with key highlights and navigation (Contact form removed).
  - **Our Services**: Software Development and Digital Marketing.
  - **Our Products**: Plant Marketplace and Safety & HIRA App.
- **About Page**: Information about the company and its mission with themed platform cards (custom plant colors for Plant Marketplace, custom safety colors for Safety App) and interactive hover effects.
- **Software Services**: Detailed pages for industry-specific software solutions including:
  - Healthcare
  - Real Estate
  - Food & Restaurant
  - Trading & Financial
  - Education & E-Learning
  - Enterprise
  - IT & Cloud
  - Cybersecurity
  - AI & ML
- **Digital Marketing**: Services and strategies for online marketing.
- **Plant Marketplace**: Platform for buying and selling plants with custom earthy color theme (Primary: #5A8F6E, Secondary: #D7CCC8, Accent: #A1887F, Background: #F5F5F5, Text: #3E2723).
- **Safety App**: Application focused on safety features with custom professional blue color theme (Primary: #1976D2, Secondary: #90CAF9, Accent: #FFB300, Background: #F5F5F5, Text: #1A1A1A).
- **Contact Forms**: Interactive forms for booking consultancy and general inquiries.
- **Chatbot**: Integrated chatbot for user assistance with fixed input positioning at the bottom of the chat window.
- **Footer Navigation**: Clickable logo in footer redirects to home page with smooth scrolling.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Dark/Light Mode**: Theme switching capability.
- **Breadcrumb Navigation**: Dynamic breadcrumbs on all pages except home and booking consultancy.
- **Smooth Scrolling**: Automatic scroll to top when navigating to service pages from Software Solutions page, Job Listings page, and Application Form page.
- **Optimized Build**: Code-split chunks for better performance (vendor, UI, router, utils, icons).

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: JavaScript/TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: ShadCN UI (Radix UI primitives)
- **Routing**: React Router DOM
- **State Management**: React Hooks
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Charts**: Recharts
- **Notifications**: Sonner for toasts
- **Themes**: Next Themes for dark/light mode
- **Query Management**: TanStack React Query
- **Linting**: ESLint
- **Package Manager**: npm (with Bun lockfile support)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd the-nexus
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   Or if using Bun:

   ```bash
   bun install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   Or with Bun:

   ```bash
   bun run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (default Vite port).

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint for code linting
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # ShadCN UI components
│   └── ...             # Custom components (Header, Footer, etc.)
├── pages/              # Page components
│   └── software/       # Industry-specific software pages
├── hooks/              # Custom React hooks
│   ├── use-toast.ts    # Toast notification hook
│   ├── useScrollAnimation.ts  # Scroll animation hooks including useSmoothScrollToTop
│   └── ...
├── lib/                # Utility functions
├── assets/             # Static assets (images, icons)
└── ...
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## License

This project is licensed under the MIT License.
