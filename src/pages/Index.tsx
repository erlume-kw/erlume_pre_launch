import { useState, useEffect } from "react";
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
  const [isScrolling, setIsScrolling] = useState(false);

  // Smooth scroll utility
  const smoothScrollTo = (elementId: string, delay: number = 100) => {
    setIsScrolling(true);
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
      setTimeout(() => setIsScrolling(false), 1000);
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

  // Add scroll-based animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${isScrolling ? 'scroll-smooth' : ''}`}>
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
