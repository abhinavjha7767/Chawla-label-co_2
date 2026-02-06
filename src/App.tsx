import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Product pages
import HangTags from "./pages/products/HangTags";
import WovenLabels from "./pages/products/WovenLabels";
import Stickers from "./pages/products/Stickers";
import CareLabels from "./pages/products/CareLabels";

// Company pages
import About from "./pages/company/About";
import Sustainability from "./pages/company/Sustainability";
import Careers from "./pages/company/Careers";

// Support pages
import FAQ from "./pages/support/FAQ";
import Shipping from "./pages/support/Shipping";
import Returns from "./pages/support/Returns";

// Legal pages
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider defaultLanguage="English" storageKey="vite-ui-language">
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />

              {/* Product routes */}
              <Route path="/products/hang-tags" element={<HangTags />} />
              <Route path="/products/woven-labels" element={<WovenLabels />} />
              <Route path="/products/stickers" element={<Stickers />} />
              <Route path="/products/care-labels" element={<CareLabels />} />

              {/* Company routes */}
              <Route path="/about" element={<About />} />
              <Route path="/sustainability" element={<Sustainability />} />
              <Route path="/careers" element={<Careers />} />

              {/* Support routes */}
              <Route path="/faq" element={<FAQ />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/returns" element={<Returns />} />

              {/* Legal routes */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />

              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
