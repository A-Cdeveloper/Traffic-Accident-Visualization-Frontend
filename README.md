# Traffic Accident Vlasotince (2020-2025)

Frontend application for visualizing traffic accident data for Vlasotince municipality. The application displays traffic accidents on an interactive map and provides filtering capabilities by accident type, category, and time interval.

## 📋 Description

This project is a React frontend application that enables users to:

*   View traffic accidents on an interactive map for Vlasotince municipality
*   Filter accidents by type (materijalna, povredjeni, poginuli) - dynamically loaded from API
*   Filter accidents by category (jedno-vozilo, bez-skretanja, skretanje-prelazak, parkirana, pesaci) - dynamically loaded from API
*   Filter accidents by time interval (date range: 2020-01-01 to today)
*   View accident statistics in the info panel (total count, counts by category and type)
*   Shareable filter URLs - filter state is synced with URL parameters
*   Visualize accident data from 2020-2025
*   Automatic initial date filter (2025-01-01 to today) on first load
*   Colored pin markers on map - each category has its own color
*   Centralized Loading component for all React Query requests
*   Access monthly updated data

**Data Coverage:**

*   Time period: 2020-2025
*   Municipality: Vlasotince only
*   Update frequency: Monthly updates

**Data Source:**  
This application uses official open data from the Republic of Serbia's open data portal [data.gov.rs](https://data.gov.rs/sr/datasets/podatsi-o-saobratshajnim-nezgodama-po-politsijskim-upravama-i-opshtinama/). The data is published by the Ministry of Internal Affairs (MUP) and contains traffic accident statistics for all police stations and municipalities in Serbia.

**Backend API:**  
This application is built on top of the [Traffic-Accident-Visualization-API](https://github.com/A-Cdeveloper/Traffic-Accident-Visualization-API) which provides the data endpoints and filtering capabilities.

## 🚀 Tech Stack

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
*   **Husky** - Git hooks for code quality
*   **ESLint** - Code linting with jsx-a11y plugin

## 📦 Installation

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

## ⚙️ Configuration

### Environment Variables

Create a `.env` file with the following variables:

```
# Backend API URL
VITE_API_URL=http://localhost:3000

# Development port (optional)
VITE_PORT=5173
```

## 📜 Available Commands

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
```

## 📁 Project Structure

```
frontend/
├── public/                    # Static files
├── src/
│   ├── assets/               # Images, fonts, etc.
│   ├── components/           # React components
│   │   ├── common/          # Shared components
│   │   ├── layout/         # Layout components (Header, SideBar, Footer)
│   │   └── ui/             # shadcn/ui components
│   ├── features/           # Feature-based modules
│   │   ├── accidents/      # Accident data feature
│   │   │   ├── api/       # API functions
│   │   │   └── hooks/     # React Query hooks
│   │   ├── filter/        # Filter feature
│   │   │   ├── api/       # Filter API functions
│   │   │   └── hooks/     # Filter hooks
│   │   └── infopanel/     # Info panel feature
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions and configurations
│   ├── pages/              # Page components
│   ├── providers/          # React context providers
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions (dates, etc.)
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── .env                    # Environment variables (create)
├── .husky/                # Git hooks
├── components.json        # shadcn/ui configuration
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🎨 UI Components

The project uses [shadcn/ui](https://ui.shadcn.com/) components with "new-york" style. Components can be added using:

```
npx shadcn@latest add [component-name]
```

## 🛠️ Development

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

## 📝 Status

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

## 🔌 API Integration

This frontend application connects to the [Traffic-Accident-Visualization-API](https://github.com/A-Cdeveloper/Traffic-Accident-Visualization-API) backend service.

**API Endpoints:**

*   `GET /api/accidents` - Retrieves traffic accident data filtered by police station (pstation), date range, accident type, and categories
*   `GET /api/metadata` - Retrieves available filter options (accident types and categories)

**Filtering Options:**

*   **Police Station:** Vlasotince (pstation parameter, hardcoded)
*   **Date Range:** startDate and endDate (ISO format: YYYY-MM-DD)
    *   Minimum date: 2020-01-01
    *   Maximum date: Today
    *   Validation: startDate must be before endDate
*   **Accident Type:** materijalna, povredjeni, poginuli (dynamically loaded from API)
*   **Categories:** jedno-vozilo, bez-skretanja, skretanje-prelazak, parkirana, pesaci (dynamically loaded from API)
    *   Format: Comma-separated values (e.g., `categories=jedno-vozilo,pesaci`)

**Features:**

*   URL state management with `nuqs` - filter values are synced with URL parameters
*   React Query caching - data is cached and automatically refetched when filters change
*   Date validation - prevents invalid date ranges and out-of-range dates
*   Dynamic filter options - accident types and categories are loaded from API
*   Automatic initial filter - sets filter for 2025 (2025-01-01 to today) on first load
*   Colored pin markers on map - each category has its own color
*   Centralized Loading component - used for all React Query loading states
*   Category color indicators - colored circles next to category checkboxes in filter form

For detailed API documentation, see the [API repository](https://github.com/A-Cdeveloper/Traffic-Accident-Visualization-API).

## 🔗 Related Projects

*   [Traffic-Accident-Visualization-API](https://github.com/A-Cdeveloper/Traffic-Accident-Visualization-API) - Backend API server that provides traffic accident data

## 📄 License

This project is part of an open source initiative for analyzing traffic accidents in the Republic of Serbia.

## 🤝 Contributing

Contributions are welcome! Please open an issue or pull request for any suggestions or changes.

---

## 📊 Data Source

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