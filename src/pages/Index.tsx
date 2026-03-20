import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import SkillsSection from "@/components/portfolio/SkillsSection";
import WhatICanWorkOnSection from "@/components/portfolio/WhatICanWorkOnSection";
import EducationSection from "@/components/portfolio/EducationSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import TimelineWorkHistory from "@/components/portfolio/TimelineWorkHistory";
import Footer from "@/components/portfolio/Footer";
import ScrollToTop from "@/components/portfolio/ScrollToTop";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-y-auto scroll-smooth">
      <Header />
      <Hero />
      <div className="px-6 md:px-10 max-w-6xl mx-auto pb-16">
        <div id="work-on">
          <WhatICanWorkOnSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="education">
          <EducationSection />
        </div>
        <div id="certifications">
          <CertificationsSection />
        </div>
      </div>
      <div className="px-6 md:px-10 max-w-6xl mx-auto pb-24">
        <TimelineWorkHistory />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
