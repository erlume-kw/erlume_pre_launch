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

  // Smooth scroll utility
  const smoothScrollTo = (elementId: string, delay: number = 100) => {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }, delay);
  };

  const handleGetStarted = () => {
    setCurrentStep('form');
    smoothScrollTo('estimator-form');
  };

  const handleCalculate = (details: BagDetails) => {
    setBagDetails(details);
    setCurrentStep('breakdown');
    smoothScrollTo('price-breakdown');
  };

  const handleStartSelling = () => {
    setCurrentStep('form');
    setBagDetails(null);
    smoothScrollTo('estimator-form');
  };

  return (
    <div>
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
