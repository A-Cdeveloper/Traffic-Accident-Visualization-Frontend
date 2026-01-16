# Traffic Accident Visualization Frontend

Frontend application for visualizing traffic accident data in the Republic of Serbia. The application uses data from an official API that collects and processes traffic accident statistics published by the Ministry of Internal Affairs (MUP).

## 📋 Description

This project is a React frontend application that enables users to:

- Search traffic accident data by municipalities
- Filter data by years
- Visualize data interactively
- Analyze trends and statistics

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

## 🔗 Related Projects

- [Traffic-Accident-Visualization-API](https://github.com/A-Cdeveloper/Traffic-Accident-Visualization-API) - Backend API server

## 📄 License

This project is part of an open source initiative for analyzing traffic accidents in the Republic of Serbia.

## 🤝 Contributing

Contributions are welcome! Please open an issue or pull request for any suggestions or changes.

---

**Note:** This project uses official open data from the Republic of Serbia for traffic accident analysis.
