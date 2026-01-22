import { useState, useEffect, useRef, startTransition } from "react";
import ChevronLeft from "lucide-react/dist/esm/icons/chevron-left.js";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right.js";
import { Button } from "../ui/button";
import FilterForm from "@/features/filter/FilterForm";
import InfoPanel from "@/features/infopanel/InfoPanel";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const SideBar = () => {
  // Subscribe to derived boolean state - only re-renders when crossing breakpoint
  const isMobile = useMediaQuery('(max-width: 767px)')
  
  // Initialize sidebar as closed on mobile, open on desktop
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => !isMobile);
  
  // Track if this is the first render to avoid unnecessary update on mount
  const isFirstRenderRef = useRef(true);

  // Update sidebar state when screen size crosses breakpoint
  // Use startTransition per rule 5.7 (Use Transitions for Non-Urgent Updates)
  useEffect(() => {
    // Skip update on initial mount (state already initialized correctly)
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }
    
    // Mark as non-urgent update to avoid blocking UI (rule 5.7)
    startTransition(() => {
      setIsSidebarOpen(!isMobile);
    });
  }, [isMobile]);

  return (
    <aside
      data-testid="sidebar"
      className={`${
        isSidebarOpen ? "w-65 md:w-85" : "w-0"
      } absolute left-0 top-0 h-auto max-h-[75vh] border-r border-b border-border bg-card transition-all duration-300 overflow-visible z-99999999`}
    >
      <Button
        data-testid="sidebar-toggle"
        variant="ghost"
        onClick={() => setIsSidebarOpen(prev => !prev)}
        className="absolute top-0  -right-[42px] z-9999 p-2 hover:bg-muted  transition-colors bg-card border border-border rounded-none cursor-pointer"
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ? (
          <ChevronLeft className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </Button>
      {isSidebarOpen && (
        <div className="max-h-[75vh] overflow-y-auto flex flex-col py-4 space-y-10">
          <div className="px-6"><InfoPanel /></div>

          <div className="px-4"><FilterForm /></div>
        </div>
      )}
    </aside>
  );
};

export default SideBar;
