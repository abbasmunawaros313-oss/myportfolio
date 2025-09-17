# Overview

This is a 3D developer portfolio website for Munawar Abbas, a Frontend Developer and Full Stack Engineer. The project is built with React, TypeScript, and modern web technologies, featuring an interactive 3D background, smooth animations, and a comprehensive showcase of skills and projects. The portfolio includes sections for hero introduction, about information, skills display, project gallery, and contact form, all designed with a dark, modern aesthetic using neon gradient themes.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Component-based architecture using functional components and hooks
- **Vite**: Modern build tool for fast development and optimized production builds
- **Wouter**: Lightweight client-side routing library
- **ShadCN UI Components**: Pre-built accessible UI components with Radix UI primitives
- **TailwindCSS**: Utility-first CSS framework with custom color variables and dark theme
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop

## State Management
- **React Query (TanStack Query)**: Server state management and caching for API calls
- **React Hooks**: Local component state management using useState, useEffect, and custom hooks
- **Context API**: Global state for UI components (Toast notifications, form handling)

## Styling and Animations
- **CSS Variables**: Custom color scheme with teal, purple, and blue gradient themes
- **Custom Fonts**: Inter for body text, Orbitron for headings, JetBrains Mono for code
- **Three.js Integration**: 3D particle system background with mouse interaction
- **GSAP and ScrollTrigger**: Advanced scroll-based animations and smooth transitions
- **Framer Motion Ready**: Architecture supports animation library integration

## Backend Architecture
- **Express.js**: Node.js web framework handling API routes and static file serving
- **TypeScript**: Full-stack type safety with shared types between client and server
- **File-based Routing**: Simple route registration system in `server/routes.ts`
- **Middleware Stack**: Request logging, JSON parsing, and error handling
- **Development Integration**: Vite development server integration with HMR support

## Data Storage Solutions
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL
- **Schema Definition**: Centralized database schema in `shared/schema.ts`
- **Migration System**: Database versioning with Drizzle Kit
- **In-Memory Storage**: Fallback storage implementation for development
- **PostgreSQL Ready**: Production database configuration via environment variables

## Authentication and Authorization
- **Session-based Architecture**: Foundation for user authentication system
- **User Schema**: Pre-defined user model with username/password fields
- **Secure Patterns**: Cookie-based sessions with security headers
- **Protected Routes**: Infrastructure for role-based access control

# External Dependencies

## Database and ORM
- **PostgreSQL**: Primary database (via Neon serverless)
- **Drizzle ORM**: Database toolkit and query builder
- **connect-pg-simple**: PostgreSQL session store for Express

## UI and Animation Libraries
- **Three.js**: 3D graphics and particle system rendering
- **GSAP**: Professional animation library with ScrollTrigger plugin
- **Radix UI**: Unstyled, accessible UI component primitives
- **Lucide React**: Modern icon library
- **Font Awesome**: Additional icon set for portfolio elements

## Development and Build Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer
- **TypeScript**: Static type checking across the entire stack

## Email and Communication
- **EmailJS**: Client-side email service integration for contact forms
- **SMTP Ready**: Backend architecture supports server-side email sending

## Deployment and Hosting
- **Vercel Ready**: Optimized build configuration for Vercel deployment
- **Static Asset Serving**: Express.js configured for production static file serving
- **Environment Configuration**: Proper environment variable handling for different stages

## Replit-specific Integrations
- **Runtime Error Overlay**: Development error handling for Replit environment
- **Cartographer**: Replit code navigation enhancement
- **Dev Banner**: Development environment indicators