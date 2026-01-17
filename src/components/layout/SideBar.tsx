import { useState, Activity } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import FilterForm from "@/features/filter/FilterForm";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <aside
      className={`${
        isSidebarOpen ? "w-65 md:w-80" : "w-0"
      } border-r border-border bg-card transition-all duration-300 overflow-visible shrink-0 relative`}
    >
      <Button
        variant="ghost"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute top-0 -right-[42px] z-10 p-2 hover:bg-muted  transition-colors bg-card border border-border rounded-none cursor-pointer"
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ? (
          <ChevronLeft className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </Button>
      <Activity mode={isSidebarOpen ? "visible" : "hidden"}>
        <div className="h-full overflow-hidden flex flex-col">
          <div className="flex-1 p-4"><FilterForm /></div>
          <Separator className="w-[90%]! mx-auto my-6" />
          <div className="flex-1 p-4">info box</div>
          </div>
      </Activity>
    </aside>
  );
};

export default SideBar;
