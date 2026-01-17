import { Outlet } from "react-router";
import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";
import ErrorBoundary from "@/components/ErrorBoundary";

const AppLayout = () => {
  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      <Header />

      <main className="flex-1 flex overflow-hidden relative">
        <SideBar />

        <section className="flex-1 bg-background">
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
