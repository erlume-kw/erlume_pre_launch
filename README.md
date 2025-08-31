# Erlume - Luxury Bag Price Estimator

A modern React application for estimating luxury bag resale prices with support for English and Arabic languages.

## Project info

**URL**: https://lovable.dev/projects/f3984008-eebc-4574-a7c7-12fee7a9c4bc

## Features

- **Bilingual Support**: Full English and Arabic language support with RTL layout
- **Price Estimation**: Interactive form for luxury bag price estimation
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modern UI**: Built with shadcn/ui components
- **TypeScript**: Full type safety
- **Error Handling**: Comprehensive error boundaries and fallbacks

## Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **State Management**: React Context API
- **Routing**: React Router DOM
- **UI Components**: Radix UI primitives
- **Build Tool**: Vite

## Recent Bug Fixes

The following critical deployment issues have been resolved:

### ✅ Fixed Issues
1. **TypeScript Errors**: Removed empty interface declarations in UI components
2. **CSS Invalid Selectors**: Removed invalid `:contains()` pseudo-class selectors
3. **Import Issues**: Converted CommonJS `require()` to ES module imports
4. **Window Object Safety**: Added safety checks for `window.location.origin`
5. **Error Handling**: Added comprehensive ErrorBoundary component
6. **Build Optimization**: Added manual chunk splitting for better performance
7. **Deployment Support**: Added proper redirects for SPA routing

### ⚠️ Remaining Warnings
- Fast refresh warnings in UI components (non-critical, development-only)

## How to Edit This Code

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/f3984008-eebc-4574-a7c7-12fee7a9c4bc) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev

# Step 5: Build for production
npm run build

# Step 6: Run linting
npm run lint
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Deployment

### Automatic Deployment via Lovable

Simply open [Lovable](https://lovable.dev/projects/f3984008-eebc-4574-a7c7-12fee7a9c4bc) and click on Share -> Publish.

### Manual Deployment

The project includes configuration files for various deployment platforms:

- **Netlify**: Uses `public/_redirects` for SPA routing
- **Vercel**: Automatic detection of Vite project
- **GitHub Pages**: Configure base path in `vite.config.ts`

### Deployment Checklist

Before deploying, ensure:

1. ✅ All TypeScript errors are resolved
2. ✅ Build completes successfully (`npm run build`)
3. ✅ Linting passes (`npm run lint`)
4. ✅ Error boundaries are in place
5. ✅ SPA routing is configured
6. ✅ Environment variables are set (if needed)

## Custom Domain

Yes, you can connect a custom domain to your Lovable project!

1. Deploy your project via Lovable
2. In your domain provider, add a CNAME record pointing to your Lovable deployment URL
3. Configure the custom domain in your Lovable project settings

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── ...             # Custom components
├── contexts/           # React contexts (Language)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and translations
├── pages/              # Page components
└── assets/             # Static assets
```

## Language Support

The application supports:
- **English (LTR)**: Default language
- **Arabic (RTL)**: Full RTL layout support with proper text alignment

Language switching is handled through the `LanguageContext` and automatically applies RTL styling when Arabic is selected.

## Performance Optimizations

- Manual chunk splitting for vendor and UI libraries
- Lazy loading of components where appropriate
- Optimized images and assets
- CSS purging in production builds
- Error boundaries for graceful error handling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is private and proprietary to Erlume.
