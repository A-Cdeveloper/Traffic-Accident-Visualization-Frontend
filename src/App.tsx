import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      {/* Header */}
      <header className="w-full h-16 border-b border-border bg-card flex items-center px-4 shrink-0">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="mr-4 p-2 hover:bg-muted rounded-md transition-colors"
        >
          {isSidebarOpen ? "←" : "→"}
        </button>
        <h1 className="text-xl font-semibold">
          Traffic Accident Visualization
        </h1>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden">
        {/* Sidebar - Collapsible */}
        <aside
          className={`${
            isSidebarOpen ? "w-80" : "w-0"
          } border-r border-border bg-card transition-all duration-300 overflow-hidden shrink-0`}
        >
          <div className="h-full p-4">{/* Sidebar content */}</div>
        </aside>

        {/* Central Map Area */}
        <section className="flex-1 bg-background">
          <div className="h-full">{/* Map will go here */}</div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full h-12 border-t border-border bg-card flex items-center justify-center shrink-0">
        <p className="text-sm text-muted-foreground">
          © 2026 Traffic Accident Visualization
        </p>
      </footer>
    </div>
  );
}

export default App;
