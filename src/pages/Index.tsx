// // pages/Index.tsx
// import Layout from "@/components/Layout";
// import HeroSection from "@/components/HeroSection";
// import AboutSection from "@/components/AboutSection";
// import StatsSection from "@/components/StatsSection";
// import LiteraryWorksSection from "@/components/LiteraryWorksSection";
// import PublicationsSection from "@/components/PublicationsSection";
// import CareerSection from "@/components/CareerSection";
// import PhilosophySection from "@/components/PhilosophySection";
// import AwardsSection from "@/components/AwardsSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
// import GallerySection from "@/components/GallerySection";
// import EventsSection from "@/components/EventsSection";
// import MediaSection from "@/components/MediaSection";
// import BlogSection from "@/components/BlogSection";
// import ContactSection from "@/components/ContactSection";

// const Index = () => {
//   return (
//     <Layout>
//       <HeroSection />
//       <AboutSection />
//       <StatsSection />
//       <LiteraryWorksSection />
//       <PublicationsSection />
//       <PhilosophySection />
//       <CareerSection />
//       <AwardsSection />
//       <TestimonialsSection />
//       <GallerySection />
//       <EventsSection />
//       <MediaSection />
//       <BlogSection />
//       <ContactSection />
//     </Layout>
//   );
// };

// export default Index;









// pages/Index.tsx
// REMOVE these imports:
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import LiteraryWorksSection from "@/components/LiteraryWorksSection";
import PublicationsSection from "@/components/PublicationsSection";
import CareerSection from "@/components/CareerSection";
import PhilosophySection from "@/components/PhilosophySection";
import AwardsSection from "@/components/AwardsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import EventsSection from "@/components/EventsSection";
import MediaSection from "@/components/MediaSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      {/* REMOVE: <Header /> */}
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <LiteraryWorksSection />
      <PublicationsSection />
      <PhilosophySection />
      <CareerSection />
      <AwardsSection />
      <TestimonialsSection />
      <GallerySection />
      <EventsSection />
      <MediaSection />
      <BlogSection />
      <ContactSection />
      {/* REMOVE: <Footer /> */}
    </div>
  );
};

export default Index;