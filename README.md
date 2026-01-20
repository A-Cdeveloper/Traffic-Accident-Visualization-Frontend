# Traffic Accident Vlasotince

Frontend application for visualizing traffic accident data for Vlasotince municipality. The application displays traffic accidents on an interactive map and provides filtering capabilities by accident type, category, and time interval.

## Description

This project is a React frontend application that enables users to:

*   View traffic accidents on an interactive map for Vlasotince municipality
*   Filter accidents by type (materijalna, povredjeni, poginuli) - dynamically loaded from API
*   Filter accidents by category (jedno-vozilo, bez-skretanja, skretanje-prelazak, parkirana, pesaci) - dynamically loaded from API
*   Filter accidents by time interval (date range: 2020-01-01 to today)
*   View accident statistics in the info panel (total count, counts by category and type)
*   Shareable filter URLs - filter state is synced with URL parameters
*   Visualize accident data
*   Automatic initial date filter (2025-01-01 to today) on first load
*   Colored pin markers on map - each category has its own color
*   Centralized Loading component for all React Query requests
*   Access monthly updated data

**Data Coverage:**

*   Time period: Available historical data
*   Municipality: Vlasotince only
*   Update frequency: Monthly updates

**Data Source:**  
This application uses official open data from the Republic of Serbia's open data portal [data.gov.rs](https://data.gov.rs/sr/datasets/podatsi-o-saobratshajnim-nezgodama-po-politsijskim-upravama-i-opshtinama/). The data is published by the Ministry of Internal Affairs (MUP) and contains traffic accident statistics for all police stations and municipalities in Serbia.

**Backend API:**  
This application is built on top of the [Traffic-Accident-Visualization-API](https://github.com/A-Cdeveloper/Traffic-Accident-Visualization-API) which provides the data endpoints and filtering capabilities.

## Tech Stack

*   **React 19** - UI library
*   **TypeScript** - Type safety
*   **Vite** - Build tool and dev server
*   **Tailwind CSS v4** - Utility-first CSS framework
*   **shadcn/ui** - UI components
*   **TanStack Query (React Query)** - Server state management
*   **React Router** - Routing
*   **nuqs** - URL state management
*   **sonner** - Toast notifications
*   **Lucide React** - Icons
*   **Leaflet & React-Leaflet** - Interactive maps
*   **Cypress** - E2E testing framework
*   **Vitest** - Unit testing framework
*   **Husky** - Git hooks for code quality
*   **ESLint** - Code linting with jsx-a11y plugin

## Installation

### Prerequisites

*   Node.js 18+
*   npm or yarn

### Steps

1.  Clone the repository:

```
git clone https://github.com/A-Cdeveloper/Traffic-Accident-Visualization-Frontend.git
cd Traffic-Accident-Visualization-Frontend
```

1.  Install dependencies:

```
npm install
```

1.  Create `.env` file in the root directory:

```
VITE_API_URL=http://localhost:3000
```

1.  Start the development server:

```
npm run dev
```

The application will be available at `http://localhost:5173` (or the port Vite assigns).

## Configuration

### Environment Variables

Create a `.env` file with the following variables:

```
# Backend API URL
VITE_API_URL=http://localhost:3000

# Development port (optional)
VITE_PORT=5173
```

## Available Commands

```
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Linting
npm run lint

# Type checking
npm run type-check

# Unit tests
npm run test

# Unit tests with coverage
npm run test:coverage

# E2E tests (headless)
npm run cypress:run

# E2E tests (interactive)
npm run cypress:open
```

## Project Structure

```
frontend/
├── public/                    # Static files (favicons, etc.)
├── src/
│   ├── components/           # React components
│   │   ├── layout/          # Layout components (Header, SideBar, Footer, AppLayout, ThemeSwitch)
│   │   ├── ui/              # shadcn/ui components (button, select, checkbox, etc.)
│   │   ├── ErrorBoundary.tsx # Error boundary component
│   │   └── Loading.tsx       # Loading component
│   ├── features/            # Feature-based modules
│   │   ├── accidents/        # Accident data feature
│   │   │   ├── api/         # API functions (getAccidents.ts)
│   │   │   ├── hooks/       # React Query hooks (useAccidents.ts)
│   │   │   └── NoAccidentsFound.tsx
│   │   ├── filter/          # Filter feature
│   │   │   ├── api/         # API functions (getFilters.ts)
│   │   │   ├── components/  # Filter components (DateInput, CategoryCheckbox, AccidentTypeSelect)
│   │   │   ├── hooks/       # React Query hooks (useFilters.ts)
│   │   │   └── FilterForm.tsx
│   │   ├── infopanel/       # Info panel feature
│   │   │   ├── components/  # Info panel components (DateRangeSection, StatisticSection)
│   │   │   ├── utils/       # Utility functions (calculateAccidentStats.ts)
│   │   │   └── InfoPanel.tsx
│   │   └── map/             # Map feature
│   │       ├── components/  # Map components (Map, AccidentMarker, AccidentPopup, MapResizeHandler)
│   │       ├── utils/       # Utility functions (getMarkerIcon.ts)
│   │       ├── constants.ts # Map constants (center, zoom, colors)
│   │       └── MapWithSuspense.tsx
│   ├── hooks/               # Custom React hooks (useTheme.ts)
│   ├── lib/                 # Utility functions and configurations
│   │   ├── env.ts           # Environment variable validation
│   │   └── utils.ts         # Utility functions (cn, etc.)
│   ├── pages/               # Page components (HomePage, Impressum, Kontakt, NotFound, ErrorPage)
│   ├── providers/           # React context providers
│   │   ├── router/          # Router provider (AppRouterProvider, router config)
│   │   ├── tanstackquery/   # React Query provider (TanstackProvider)
│   │   └── index.tsx        # Main providers wrapper
│   ├── types/               # TypeScript type definitions (accedents.ts)
│   ├── utils/               # Utility functions (dates.ts)
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── cypress/                 # Cypress E2E tests
│   ├── e2e/                # E2E test files
│   │   ├── homepage-layout.cy.ts
│   │   ├── homepage-sidebar.cy.ts
│   │   ├── homepage-filters.cy.ts
│   │   └── homepage-map.cy.ts
│   ├── support/            # Cypress support files
│   └── fixtures/           # Test fixtures (if needed)
├── src/
│   └── test/               # Unit test utilities
│       ├── setup.ts       # Test setup
│       └── test-utils.ts  # Test utilities
├── .env                     # Environment variables (create)
├── .husky/                  # Git hooks
├── components.json          # shadcn/ui configuration
├── cypress.config.ts        # Cypress configuration
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## UI Components

The project uses [shadcn/ui](https://ui.shadcn.com/) components with "new-york" style. Components can be added using:

```
npx shadcn@latest add [component-name]
```

## Development

### React Compiler

The project uses React Compiler for optimization. More information: [React Compiler Documentation](https://react.dev/learn/react-compiler)

### Path Aliases

The project uses path aliases for easier imports:

```typescript
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
```

### TypeScript

Strict TypeScript mode is enabled. All files must be type-safe.

### Code Quality

The project uses several tools to ensure code quality:

*   **ESLint** - Code linting with jsx-a11y plugin for accessibility
*   **TypeScript** - Type checking with `npm run type-check`
*   **Husky** - Git hooks that run linting and type-checking before commits
*   **React Compiler** - Automatic optimization of React components

Pre-commit hooks automatically run:

*   `npm run lint` - Checks for linting errors
*   `npm run type-check` - Validates TypeScript types

### Accessibility (a11y)

The project follows WCAG accessibility standards:

*   All interactive elements have proper ARIA labels
*   Semantic HTML structure
*   Keyboard navigation support
*   Screen reader compatibility

## Testing

The project includes comprehensive test coverage using both unit tests and E2E tests.

### Unit Tests (Vitest)

Unit tests are located alongside the source code and use Vitest with React Testing Library:

*   **API Functions** - Testing API calls and error handling
*   **Custom Hooks** - Testing React hooks (useTheme, useFilters, useAccidents)
*   **Components** - Testing React components (FilterForm, InfoPanel)

Run unit tests:

```
npm run test              # Run tests in watch mode
npm run test:coverage     # Run tests with coverage report
```

### E2E Tests (Cypress)

E2E tests are organized by feature and cover the full user experience:

*   **homepage-layout.cy.ts** - Layout elements, loading states, error handling
*   **homepage-sidebar.cy.ts** - Sidebar toggle interactions
*   **homepage-filters.cy.ts** - Filter form interactions (dates, types, categories, submit/reset)
*   **homepage-map.cy.ts** - Map display, markers, and popups

Run E2E tests:

```
npm run cypress:run       # Run tests in headless mode
npm run cypress:open     # Open Cypress Test Runner (interactive)
```

**Test Organization:**  
Tests are split into separate files to enable parallel execution, reducing overall test time from ~2 minutes to ~30-60 seconds.

**Test Selectors:**  
Components use `data-testid` attributes for reliable test selectors, making tests more maintainable and less brittle.

### Performance Optimization

The application is optimized for fast loading and efficient resource usage:

**Bundle Optimization:**

*   **Lazy Loading** - All routes (HomePage, Impressum, Kontakt, NotFound) are lazy loaded
*   **Code Splitting** - Vendor code is separated into chunks for better caching:
    *   `react-vendor` - React core libraries (97.90 KB)
    *   `leaflet-vendor` - Leaflet libraries (154.45 KB, lazy loaded)
    *   `ui-vendor` - Radix UI components (82.24 KB)
    *   `query-vendor` - React Query (33.22 KB)
    *   `utils-vendor` - Utility libraries (97.26 KB)
*   **Leaflet Lazy Loading** - Map component and Leaflet libraries load only when needed
*   **Initial Bundle Size** - 189 KB gzipped (down from 223 KB, ~15% reduction)

**Benefits:**

*   Faster initial page load - only essential code is loaded upfront
*   Better browser caching - vendor chunks are cached separately
*   Parallel chunk loading - browser loads multiple chunks simultaneously
*   Reduced bandwidth - users only download what they need

## Status

*   ✅ Project setup (React + Vite + TypeScript)
*   ✅ Tailwind CSS v4 configuration
*   ✅ shadcn/ui setup
*   ✅ React Query installed and configured
*   ✅ React Router installed and configured
*   ✅ nuqs URL state management integrated
*   ✅ Sonner toast notifications integrated
*   ✅ ESLint with jsx-a11y plugin configured
*   ✅ Husky git hooks configured
*   ✅ API integration (accidents and metadata endpoints)
*   ✅ Filter form with date validation
*   ✅ Info panel with dynamic statistics
*   ✅ Map visualization with Leaflet
*   ✅ Colored pin markers by category
*   ✅ Loading component for React Query states
*   ✅ Automatic initial date filter (2025-01-01 to today)
*   ✅ Bundle optimization with lazy loading and code splitting
*   ✅ Environment variable validation
*   ✅ Unit tests with Vitest and React Testing Library
*   ✅ E2E tests with Cypress

## API Integration

This frontend application connects to the [Traffic-Accident-Visualization-API](https://github.com/A-Cdeveloper/Traffic-Accident-Visualization-API) backend service.

## Related Projects

*   [Traffic-Accident-Visualization-API](https://github.com/A-Cdeveloper/Traffic-Accident-Visualization-API) - Backend API server that provides traffic accident data

## License

This project is part of an open source initiative for analyzing traffic accidents in the Republic of Serbia.

## Contributing

Contributions are welcome! Please open an issue or pull request for any suggestions or changes.

---

## Data Source

This project uses **official open data** from the Republic of Serbia's open data portal:

**Source:** [Подаци о саобраћајним незгодама по ПОЛИЦИЈСКИМ УПРАВАМА и ОПШТИНАМА](https://data.gov.rs/sr/datasets/podatsi-o-saobratshajnim-nezgodama-po-politsijskim-upravama-i-opshtinama/)

**Publisher:** Ministry of Internal Affairs (MUP) - Republic of Serbia

**License:** Public Data (Јавни подаци)

**Update Frequency:** Monthly

The data is available in XLSX format and contains comprehensive information about traffic accidents including:

*   Unique accident ID
*   Police station and municipality
*   Date and time of the accident
*   Geolocation coordinates (X, Y)
*   Accident type (material damage, injuries, fatalities)
*   Accident category
*   Number of vehicles involved
*   Status of participants (injured, deceased)
*   Detailed accident description

All data is processed and made available through the [Traffic-Accident-Visualization-API](https://github.com/A-Cdeveloper/Traffic-Accident-Visualization-API) backend service.