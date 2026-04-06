// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import Index from "./pages/Index.tsx";
// import NotFound from "./pages/NotFound.tsx";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index       from "./pages/Index";
import About       from "./pages/About";
import Works       from "./pages/Works";
import Publications from "./pages/Publications";
import Philosophy  from "./pages/Philosophy";
import Career      from "./pages/Career";
import Awards      from "./pages/Awards";
import Gallery     from "./pages/Gallery";
import Events      from "./pages/Events";
import Media       from "./pages/Media";
import Blog        from "./pages/Blog";
import Contact     from "./pages/Contact";
import NotFound    from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/"            element={<Index />} />
        <Route path="/about"       element={<About />} />
        <Route path="/works"       element={<Works />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/philosophy"  element={<Philosophy />} />
        <Route path="/career"      element={<Career />} />
        <Route path="/awards"      element={<Awards />} />
        <Route path="/gallery"     element={<Gallery />} />
        <Route path="/events"      element={<Events />} />
        <Route path="/media"       element={<Media />} />
        <Route path="/blog"        element={<Blog />} />
        <Route path="/contact"     element={<Contact />} />
        <Route path="*"            element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;