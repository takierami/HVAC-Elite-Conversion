import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { DynamicWeatherHeader } from './components/DynamicWeatherHeader';
import { LiveDispatchNotification } from './components/LiveDispatchNotification';
import { PricingCalculator } from './components/PricingCalculator';
import { BrandConfidenceBar } from './components/BrandConfidenceBar';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { ServiceAreaMap } from './components/ServiceAreaMap';
import { MultiStepForm } from './components/MultiStepForm';
import { SocialProofOverlay } from './components/SocialProofOverlay';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';

export default function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      
      {/* Dynamic Weather Header */}
      <DynamicWeatherHeader />
      
      {/* Live Dispatch Notifications */}
      <LiveDispatchNotification />
      
      {/* Hero Section */}
      <HeroSection onBookService={() => setShowForm(true)} />
      
      {/* Brand Confidence Bar */}
      <BrandConfidenceBar />
      
      {/* Services Section */}
      <ServicesSection onBookService={() => setShowForm(true)} />
      
      {/* Pricing Calculator */}
      <PricingCalculator onGetQuote={() => setShowForm(true)} />
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* Before/After Gallery */}
      <BeforeAfterGallery />
      
      {/* Service Area Map */}
      <ServiceAreaMap onBookService={() => setShowForm(true)} />
      
      {/* Social Proof Overlay */}
      <SocialProofOverlay />
      
      {/* Multi-Step Form Modal */}
      <MultiStepForm open={showForm} onClose={() => setShowForm(false)} />
      
      {/* Footer */}
      <Footer onBookService={() => setShowForm(true)} />
    </div>
  );
}