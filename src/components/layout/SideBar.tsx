import { useState, Activity } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <aside
      className={`${
        isSidebarOpen ? "w-80" : "w-0"
      } border-r border-border bg-card transition-all duration-300 overflow-visible shrink-0 relative`}
    >
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute top-0 -right-8 z-10 p-2 hover:bg-muted  transition-colors bg-card border border-border rounded-none"
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ? (
          <ChevronLeft className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>
      <Activity mode={isSidebarOpen ? "visible" : "hidden"}>
        <div className="h-full p-4 overflow-hidden">Sidebar content</div>
      </Activity>
    </aside>
  );
};

export default SideBar;
