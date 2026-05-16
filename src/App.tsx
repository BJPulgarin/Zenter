import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import BlogListPage from "@/pages/BlogListPage";
import BlogArticlePage from "@/pages/BlogArticlePage";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { SpecialtiesSection } from "@/sections/SpecialtiesSection";
import { WhyUsSection } from "@/sections/WhyUsSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { PortfolioSection } from "@/sections/PortfolioSection";
import { BlogSection } from "@/sections/BlogSection";
import { CTASection } from "@/sections/CTASection";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SpecialtiesSection />
        <WhyUsSection />
        <ProcessSection />
        <PortfolioSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={BlogListPage} />
      <Route path="/blog/:slug" component={BlogArticlePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
