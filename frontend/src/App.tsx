import "./index.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/HomePage";
import NotFound from "./pages/NotFound";

import LoginSignUp from "./pages/LoginSignUp";

const queryClient = new QueryClient();

// Placeholder component for unimplemented pages
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-white">
    <Navigation />
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-brand-dark mb-6">{title}</h1>
      <p className="text-brand-gray mb-8">
        This page is coming soon. Please continue exploring our homepage for
        now.
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Back to Home
      </a>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <Index />
              </>
            }
          />
          <Route
            path="/inventory"
            element={<PlaceholderPage title="Vehicle Inventory" />}
          />
          <Route path="/about" element={<PlaceholderPage title="About Us" />} />
          <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
          <Route
            path="/contact"
            element={<PlaceholderPage title="Contact Us" />}
          />
          <Route path="/login" element={<><Navigation/><LoginSignUp/></>}/>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
