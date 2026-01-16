# Traffic Accident Visualization Frontend

Frontend application for visualizing traffic accident data for Vlasotince municipality. The application displays traffic accidents on an interactive map and provides filtering capabilities by accident type, category, and time interval.

## 📋 Description

This project is a React frontend application that enables users to:

- View traffic accidents on an interactive map for Vlasotince municipality
- Filter accidents by type (materijalna, povredjeni, poginuli)
- Filter accidents by category (jedno-vozilo, bez-skretanja, sa-skretanjem, parkirana, pesaci)
- Filter accidents by time interval (date range)
- Visualize accident data from 2020-2025
- Access monthly updated data

**Data Coverage:**

- Time period: 2020-2025
- Municipality: Vlasotince only
- Update frequency: Monthly updates

**Data Source:**  
This application uses official open data from the Republic of Serbia's open data portal [data.gov.rs](https://data.gov.rs/sr/datasets/podatsi-o-saobratshajnim-nezgodama-po-politsijskim-upravama-i-opshtinama/). The data is published by the Ministry of Internal Affairs (MUP) and contains traffic accident statistics for all police stations and municipalities in Serbia.

**Backend API:**  
This application is built on top of the [Traffic-Accident-Visualization-API](https://github.com/A-Cdeveloper/Traffic-Accident-Visualization-API) which provides the data endpoints and filtering capabilities.

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - UI components
- **TanStack Query (React Query)** - Server state management
- **React Router** - Routing
- **Lucide React** - Icons

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm or yarn

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
```

## 📁 Project Structure

```
frontend/
├── public/              # Static files
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # React components
│   │   └── ui/         # shadcn/ui components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and configurations
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── .env                # Environment variables (create)
├── components.json     # shadcn/ui configuration
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
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

## 📝 Status

- ✅ Project setup (React + Vite + TypeScript)
- ✅ Tailwind CSS v4 configuration
- ✅ shadcn/ui setup
- ✅ React Query installed
- ✅ React Router installed
- ⏳ API integration (in progress)
- ⏳ UI components (in progress)
- ⏳ Data visualization (in progress)

## 🔌 API Integration

This frontend application connects to the [Traffic-Accident-Visualization-API](https://github.com/A-Cdeveloper/Traffic-Accident-Visualization-API) backend service.

**API Endpoint:**

- `GET /api/accidents` - Retrieves traffic accident data filtered by police station (pstation), date range, accident type, and categories

**Filtering Options:**

- **Police Station:** Vlasotince (pstation parameter)
- **Date Range:** startDate and endDate (ISO format: YYYY-MM-DD)
- **Accident Type:** materijalna, povredjeni, poginuli
- **Categories:** jedno-vozilo, bez-skretanja, sa-skretanjem, parkirana, pesaci

For detailed API documentation, see the [API repository](https://github.com/A-Cdeveloper/Traffic-Accident-Visualization-API).

## 🔗 Related Projects

- [Traffic-Accident-Visualization-API](https://github.com/A-Cdeveloper/Traffic-Accident-Visualization-API) - Backend API server that provides traffic accident data

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

- Unique accident ID
- Police station and municipality
- Date and time of the accident
- Geolocation coordinates (X, Y)
- Accident type (material damage, injuries, fatalities)
- Accident category
- Number of vehicles involved
- Status of participants (injured, deceased)
- Detailed accident description

All data is processed and made available through the [Traffic-Accident-Visualization-API](https://github.com/A-Cdeveloper/Traffic-Accident-Visualization-API) backend service.
