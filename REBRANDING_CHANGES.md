# Automated Savings.ai Rebranding Changes

## Summary
This document outlines all the branding changes applied to rebrand Open WebUI to Automated Savings.ai.

## Logo & Visual Assets

### Replaced Files
All logo and favicon files have been replaced with Automated Savings.ai branding:

**Backend Static Files:**
- `backend/open_webui/static/favicon.svg` - Primary logo SVG
- `backend/open_webui/static/favicon.png` - 32x32 favicon
- `backend/open_webui/static/favicon-96x96.png` - 96x96 favicon
- `backend/open_webui/static/favicon-dark.png` - Dark mode favicon (white logo)
- `backend/open_webui/static/favicon.ico` - ICO format
- `backend/open_webui/static/apple-touch-icon.png` - 180x180 Apple touch icon
- `backend/open_webui/static/logo.png` - 256x256 logo
- `backend/open_webui/static/web-app-manifest-192x192.png` - PWA manifest icon
- `backend/open_webui/static/web-app-manifest-512x512.png` - PWA manifest icon

**Frontend Static Files:**
- `static/static/favicon.svg`
- `static/static/favicon.png`
- `static/static/favicon-96x96.png`
- `static/static/favicon-dark.png`
- `static/static/favicon.ico`
- `static/static/apple-touch-icon.png`
- `static/static/logo.png`
- `static/splash.png` - Splash screen logo (128x128)
- `static/splash-dark.png` - Dark mode splash screen logo (128x128)
- `static/web-app-manifest-192x192.png`
- `static/web-app-manifest-512x512.png`

## Color Palette Changes

### Primary Brand Colors
- **Sky Blue (Primary):** #66B3FF
- **Deep Navy (Background):** #0C1831 (replacing #171717)
- **Dark Navy (Secondary Background):** #14223D
- **Slate Gray:** #344256
- **Muted Gray (Text):** #9DA6AF
- **Light Gray:** #F5F5F5
- **Pale Blue (Accent):** #EFF6FF

### Secondary & Accent Colors
- **Bright Blue:** #3B82F6
- **Royal Blue (Hover):** #2563EB
- **Error Red:** #EF4444

### Files Modified

1. **src/app.html**
   - Updated theme-color meta tag: `#171717` → `#0C1831`
   - Updated all dark mode color references
   - Changed page title: "Open WebUI" → "Automated Savings.ai"

2. **tailwind.config.js**
   - Updated gray color scale to use Automated Savings.ai palette
   - Added primary color definitions (#66B3FF)
   - Added accent color definitions

3. **backend/open_webui/static/custom.css & static/static/custom.css**
   - Created comprehensive custom CSS with brand colors
   - Defined CSS custom properties for consistent theming
   - Applied primary brand color to buttons, links, focus states
   - Added custom scrollbar styling
   - Applied brand colors to UI elements (badges, tooltips, cards)

## Typography

The application already uses **Inter** font family, which matches the Automated Savings.ai branding requirements. No changes were needed for typography.

Font stack:
```css
font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

## Application Name & Metadata

### Updated Files

1. **package.json**
   - Changed name: `"open-webui"` → `"automatedsavings-ai"`

2. **backend/open_webui/static/site.webmanifest**
   - Updated name: "Open WebUI" → "Automated Savings.ai"
   - Updated short_name: "WebUI" → "AutoSavings"
   - Updated theme_color: "#ffffff" → "#0C1831"
   - Updated background_color: "#ffffff" → "#0C1831"

3. **static/manifest.json**
   - Populated with Automated Savings.ai branding
   - Applied consistent theming

4. **README.md**
   - Updated to reflect this is a branded fork
   - Added branding information section
   - Maintained attribution to Open WebUI project

## CSS Custom Properties

The custom.css file now includes these brand-specific CSS variables:

```css
:root {
  --primary-brand: #66B3FF;
  --primary-brand-hover: #2563EB;
  --primary-brand-light: rgba(102, 179, 255, 0.1);
  --bg-deep-navy: #0C1831;
  --bg-dark-navy: #14223D;
  --bg-slate: #344256;
  --text-primary: #FFFFFF;
  --text-muted: #9DA6AF;
  --text-light: #F5F5F5;
  --accent-blue: #3B82F6;
  --accent-royal: #2563EB;
  --accent-pale: #EFF6FF;
  --alert-error: #EF4444;
}
```

## Visual Consistency

All branding has been applied consistently across:
- Navigation and headers
- Buttons and interactive elements
- Links and hover states
- Focus indicators
- Form inputs
- Cards and containers
- Scrollbars
- Tooltips and badges
- Loading states and progress bars
- Splash screens
- PWA manifest

## Testing Notes

The changes preserve the original functionality while applying comprehensive visual branding. The application maintains:
- Light/dark mode capability
- Responsive design
- Accessibility standards (WCAG AA contrast ratios)
- Progressive Web App (PWA) features

## Attribution

This rebranding maintains proper attribution to the original Open WebUI project as required by the license. The project is clearly marked as a fork in the README with links to the original repository.
