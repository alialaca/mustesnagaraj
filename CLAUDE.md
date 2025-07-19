# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MüstesnaGaraj is a Nuxt 3 static site application for a vintage, second-hand, and design sales events organizer. The company arranges deals with venues for specific dates, sets up tables, and rents them to sellers who then generate income from sales.

## Development Commands

### Package Management
- Uses `pnpm` as the package manager (v9.0.0+)
- Node.js v22.0.0+ required

### Common Commands
```bash
# Install dependencies
pnpm install

# Development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Generate static site
pnpm generate

# Preview production build
pnpm preview

# Deploy to production (CapRover)
pnpm run deploy
```

## Architecture

### Framework & Tech Stack
- **Nuxt 3** - Vue.js framework with SSR/SSG capabilities
- **Vue 3** - Frontend framework with Composition API
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type support (configured via tsconfig.json)
- **Static Site Generation** - Built as a static site using `nuxt generate`

### File Structure
```
├── components/          # Vue components
│   ├── EventCard.vue   # Event display component
│   └── ContactForm.vue # Contact form with EmailJS integration
├── composables/        # Vue composables
│   └── useEvents.js    # Event data management
├── data/              # JSON data files
│   └── events.json    # Event data source
├── layouts/           # Layout components
│   └── default.vue    # Main layout with navigation
├── pages/             # File-based routing
│   ├── index.vue      # Homepage
│   ├── etkinlikler.vue # Events listing
│   ├── etkinlik/[slug].vue # Event detail pages (SEO-friendly URLs)
│   ├── hakkimizda.vue # About page
│   ├── iletisim.vue   # Contact page
│   └── satisci-basvuru.vue # Vendor application
├── public/            # Static assets
│   ├── images/        # Event and UI images
│   ├── videos/        # Video assets (e.g., flea-market-aerial.mp4)
│   ├── favicon.ico    # Site favicon
│   ├── apple-touch-icon.png # Apple touch icon
│   └── robots.txt     # SEO robots file
└── assets/            # Processed assets
    ├── css/           # Stylesheets
    └── images/        # Images for processing
```

### Data Management
- **Event Data**: Stored in `data/events.json` containing:
  - Event details (title, description, dates, location)
  - Status (upcoming, completed, cancelled)
  - Table information (count, pricing, availability)
  - Categories and features
  - Application status for vendors

- **useEvents Composable**: Provides event filtering and formatting utilities:
  - `getUpcomingEvents()` - Future events with 'upcoming' status
  - `getCompletedEvents()` - Past/completed events
  - `getEventById(id)` - Single event retrieval by ID
  - `getEventBySlug(slug)` - Single event retrieval by SEO-friendly slug
  - `getEventsByCategory(category)` - Category-based filtering
  - `getEventsByStatus(status)` - Status-based filtering
  - `formatEventDate()` - Turkish locale date formatting
  - `formatEventDateShort()` - Short date format
  - `createSlug(title)` - Generate SEO-friendly slug from title

### Routing & Navigation
- File-based routing with Nuxt 3
- Dynamic routes for event details (`/etkinlik/[slug]`) - SEO-friendly URLs
- Navigation structure in `layouts/default.vue`
- Turkish language interface
- URL structure: `/etkinlik/event-title-slug` instead of `/etkinlik/1`

### Analytics & Tracking
- **Umami Analytics**: Privacy-friendly web analytics integrated via `nuxt.config.ts`
- **Route Tracking**: Automatic page view tracking implemented in `app.vue`
- **Event Tracking**: Custom event tracking for application button clicks in event detail pages
- **Contact Form Tracking**: Form submissions tracked with `contact-form-submit` event
- **Configuration**: Umami script loaded via header configuration with website ID
- **Privacy-Compliant**: GDPR-friendly analytics without requiring cookie consent

### Contact Form & Email Integration
- **EmailJS Integration**: Contact form uses EmailJS for email delivery without backend
- **ContactForm Component**: Reusable contact form component with validation and feedback
- **Environment Configuration**: EmailJS credentials managed via runtime config
- **Form Analytics**: Contact form submissions tracked via Umami analytics
- **User Experience**: Real-time feedback, loading states, and form validation

### Styling
- Tailwind CSS with responsive design
- Mobile-first approach
- Consistent color scheme (purple branding, gray backgrounds)
- Hover effects and transitions

## Key Features

### Event Display
- Hero section with featured content and video background
- Event cards with image, status, and details
- **Smart date formatting**: Single day events show one date, multi-day events show date ranges (e.g., "16-17 Ağustos 2025")
- Horizontal event listing on homepage
- Vertical event grid on dedicated events page
- Event detail pages with full information

### Event Status Management
- Three states: upcoming, completed, cancelled
- Color-coded status indicators
- Automatic date-based filtering
- Application status for vendor recruitment

### Responsive Design
- Mobile navigation menu
- Adaptive layouts for different screen sizes
- Optimized images and content flow

## Development Notes

### Turkish Localization
- Interface is in Turkish language
- Date formatting uses Turkish locale (`tr-TR`)
- Navigation and content labels are in Turkish

### Static Site Generation
- Built for deployment as static files using `pnpm generate`
- No server-side functionality required
- Images stored in public directory for direct access
- Deployed via Docker and CapRover using automated deployment script
- Output directory: `.output/public/`

### Event Data Structure
Each event in `events.json` contains:
- Basic info (id, title, slug, description, dates)
- **SEO-friendly slug** - Used for URL generation (e.g., "event-title-slug")
- Location with coordinates
- Status and application availability
- Table pricing and availability
- Categories and features array
- Organizer contact information

### SEO-Friendly URLs
- Events use slug-based URLs instead of numeric IDs
- Turkish characters are automatically converted (ç→c, ğ→g, ı→i, ö→o, ş→s, ü→u)
- Example: `/etkinlik/yerel-tasarimcilar-seramik-giyim-taki-aksesuar`
- EventCard component uses `event.slug` for navigation links
- Event detail pages retrieve events by slug using `getEventBySlug()`

### Analytics Implementation Details
- **Umami Script**: Loaded in `nuxt.config.ts` via head script configuration
- **Route Tracking**: `app.vue` watches route changes and calls `window.umami.track()`
- **Application Click Tracking**: Event detail pages (`/pages/etkinlik/[slug].vue`) track button clicks with:
  - Event name: `'form-click'`
  - Properties: `event_slug`, `event_id`
- **Contact Form Tracking**: ContactForm component tracks successful submissions with:
  - Event name: `'contact-form-submit'`
  - Properties: `subject`, `from_email`
- **Browser Compatibility**: Uses feature detection to check if `window.umami` exists
- **No Dependencies**: Pure JavaScript implementation without additional packages

### EmailJS Configuration
EmailJS integration requires the following environment variables:
- `EMAILJS_SERVICE_ID` - EmailJS service identifier
- `EMAILJS_TEMPLATE_ID` - Email template identifier
- `EMAILJS_PUBLIC_KEY` - EmailJS public key for client-side authentication

These are configured in `nuxt.config.ts` via `runtimeConfig.public` for client-side access.