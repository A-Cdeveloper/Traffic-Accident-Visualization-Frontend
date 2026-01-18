import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import FilterForm from "@/features/filter/FilterForm";
import InfoPanel from "@/features/infopanel/InfoPanel";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <aside
      className={`${
        isSidebarOpen ? "w-65 md:w-85" : "w-0"
      } border-r border-border bg-card transition-all duration-300 overflow-visible shrink-0 relative`}
    >
      <Button
        variant="ghost"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
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
        <div className="h-full overflow-y-auto flex flex-col py-4 space-y-10">
          <div className="px-4"><InfoPanel /></div>

          <div className="flex-1 px-4"><FilterForm /></div>
        </div>
      )}
    </aside>
  );
};

export default SideBar;
