# Launchlane — Startup Web Design Platform

Launchlane is a high-impact, conversion-focused web design agency platform built for early-stage and growing startups.

Built with **Next.js App Router, React, Framer Motion, and Tailwind CSS**, Launchlane delivers polished landing pages, transparent pricing structures, and dedicated light and dark mode experiences.

## Features

- **Dual Theme Support**
  - Dedicated light and dark mode implementations.
  - Includes homepage and pricing page variations.

- **Web3Forms Direct Submissions**
  - Contact and pricing modals connected to the Web3Forms API.
  - Client-side validation prevents blank or whitespace-only submissions.

- **Interactive UI Components**
  - Hardware-accelerated infinite marquee banners.
  - Interactive portfolio showcase with project details.
  - Clickable portfolio thumbnail galleries.
  - Animated FAQ accordion built with Framer Motion.
  - Modal forms with country code selection for:
    - Ghana
    - United States
    - United Kingdom
    - Nigeria
    - Kenya

- **Responsive Layout**
  - Mobile-first responsive header.
  - Backdrop-blur effects.
  - Animated drawer navigation.
  - Optimized layouts for mobile, tablet, and desktop screens.

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) | React framework using the App Router |
| [React](https://react.dev/) | UI library |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | UI animations |
| [Lucide React](https://lucide.dev/) | Icon library |
| [Web3Forms](https://web3forms.com/) | Form submission and email notifications |

## Project Structure

```text
launchlane/
├── app/
│   ├── page.js                 # Homepage and landing page
│   ├── layout.js               # Global root layout and font configuration
│   ├── globals.css             # Tailwind CSS and custom styles
│   └── pricing/
│       └── page.js             # Pricing and engagement plans page
├── public/
│   └── portfolio/              # Project preview images
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have **Node.js 18.x or higher** installed.

Verify your Node.js version:

```bash
node -v
```

### Installation

Navigate to the project directory and install the dependencies:

```bash
npm install
```

### Start the Development Server

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Web3Forms Configuration

The inquiry modal on the landing page and the plan-selection form on the pricing page submit lead notifications using the Web3Forms API.

To update the receiving email address, replace the `access_key` value inside the relevant `fetch()` calls:

```js
access_key: "YOUR_WEB3FORMS_ACCESS_KEY"
```

> **Security note:** For production applications, store API keys and other sensitive values in environment variables rather than committing them directly to the source code.

## Available Scripts

### Check Code Quality

```bash
npm run lint
```

### Build for Production

```bash
npm run build
```

### Run the Production Build

```bash
npm run start
```

## Deployment

### Deploy with Vercel

1. Push the repository to your GitHub account.
2. Log in to [Vercel](https://vercel.com/).
3. Select **Add New Project**.
4. Import your GitHub repository.
5. Vercel will automatically detect the Next.js configuration.
6. Click **Deploy**.

## License

© Launchlane. All rights reserved.