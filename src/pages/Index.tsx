import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { EstimatorForm } from "@/components/EstimatorForm";
import { PriceBreakdown } from "@/components/PriceBreakdown";
import { HowItWorks } from "@/components/HowItWorks";
import { CallToAction } from "@/components/CallToAction";

interface BagDetails {
  brand: string;
  model: string;
  condition: string;
  color: string;
  size: string;
  originalPrice: number;
}

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'hero' | 'form' | 'breakdown'>('hero');
  const [bagDetails, setBagDetails] = useState<BagDetails | null>(null);

  const handleGetStarted = () => {
    setCurrentStep('form');
    // Smooth scroll to form
    setTimeout(() => {
      const formSection = document.getElementById('estimator-form');
      formSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleCalculate = (details: BagDetails) => {
    setBagDetails(details);
    setCurrentStep('breakdown');
    // Smooth scroll to breakdown
    setTimeout(() => {
      const breakdownSection = document.getElementById('price-breakdown');
      breakdownSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleStartSelling = () => {
    setCurrentStep('form');
    setBagDetails(null);
    // Smooth scroll to form
    setTimeout(() => {
      const formSection = document.getElementById('estimator-form');
      formSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Always visible */}
      <HeroSection onGetStarted={handleGetStarted} />
      
      {/* Estimator Form - Shows after getting started */}
      {(currentStep === 'form' || currentStep === 'breakdown') && (
        <div id="estimator-form">
          <EstimatorForm onCalculate={handleCalculate} />
        </div>
      )}
      
      {/* Price Breakdown - Shows after calculation */}
      {currentStep === 'breakdown' && bagDetails && (
        <div id="price-breakdown">
          <PriceBreakdown bagDetails={bagDetails} />
        </div>
      )}
      
      {/* How It Works - Always visible */}
      <HowItWorks />
      
      {/* Call to Action - Always visible */}
      <CallToAction onStartSelling={handleStartSelling} />
    </div>
  );
};

export default Index;
