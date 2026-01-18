import { Outlet, useMatches } from "react-router";
import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import Loading from "../Loading";

const AppLayout = () => {
  const matches = useMatches();
  const hideSidebar = matches.some(match => match.pathname === "/impressum" || match.pathname === "/kontakt");

   return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      <Header />

      <main className="flex-1 flex overflow-hidden relative">
        {!hideSidebar && <SideBar />}

        <section className="flex-1 bg-background overflow-y-auto scroll-auto">
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
            <Outlet />
            </Suspense>
          </ErrorBoundary>
        </section>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
};

export default AppLayout;
