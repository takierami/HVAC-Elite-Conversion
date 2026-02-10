import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Slider } from './ui/slider';
import { Calculator, TrendingDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PricingCalculatorProps {
  onGetQuote: () => void;
}

export function PricingCalculator({ onGetQuote }: PricingCalculatorProps) {
  const [serviceType, setServiceType] = useState('repair');
  const [systemAge, setSystemAge] = useState([5]);
  const [estimatedCost, setEstimatedCost] = useState({ min: 150, max: 350 });

  const calculatePrice = (service: string, age: number) => {
    let baseMin = 100;
    let baseMax = 250;

    switch (service) {
      case 'repair':
        baseMin = 150;
        baseMax = 350;
        break;
      case 'maintenance':
        baseMin = 89;
        baseMax = 149;
        break;
      case 'installation':
        baseMin = 3500;
        baseMax = 7500;
        break;
      case 'replacement':
        baseMin = 4000;
        baseMax = 8500;
        break;
    }

    // Adjust based on age
    const ageFactor = 1 + (age / 100);
    return {
      min: Math.round(baseMin * ageFactor),
      max: Math.round(baseMax * ageFactor),
    };
  };

  const handleServiceChange = (value: string) => {
    setServiceType(value);
    setEstimatedCost(calculatePrice(value, systemAge[0]));
  };

  const handleAgeChange = (value: number[]) => {
    setSystemAge(value);
    setEstimatedCost(calculatePrice(serviceType, value[0]));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Calculator className="w-4 h-4" />
            <span>Smart Pricing Calculator</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Estimate Your Service Cost
          </h2>
          <p className="text-lg text-gray-600">
            Get an instant estimate. Final pricing after free inspection.
          </p>
        </div>

        <Card className="p-8 shadow-xl">
          <div className="space-y-8">
            {/* Service Type Selection */}
            <div>
              <Label className="text-base font-semibold mb-4 block">
                What service do you need?
              </Label>
              <RadioGroup value={serviceType} onValueChange={handleServiceChange}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <RadioGroupItem value="repair" id="repair" className="peer sr-only" />
                    <Label
                      htmlFor="repair"
                      className="flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 hover:bg-gray-50 transition-all"
                    >
                      <span className="font-semibold">Repair</span>
                      <span className="text-xs text-gray-500">Fix existing issues</span>
                    </Label>
                  </div>
                  <div className="relative">
                    <RadioGroupItem value="maintenance" id="maintenance" className="peer sr-only" />
                    <Label
                      htmlFor="maintenance"
                      className="flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 hover:bg-gray-50 transition-all"
                    >
                      <span className="font-semibold">Maintenance</span>
                      <span className="text-xs text-gray-500">Tune-up & cleaning</span>
                    </Label>
                  </div>
                  <div className="relative">
                    <RadioGroupItem value="installation" id="installation" className="peer sr-only" />
                    <Label
                      htmlFor="installation"
                      className="flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 hover:bg-gray-50 transition-all"
                    >
                      <span className="font-semibold">Installation</span>
                      <span className="text-xs text-gray-500">New system</span>
                    </Label>
                  </div>
                  <div className="relative">
                    <RadioGroupItem value="replacement" id="replacement" className="peer sr-only" />
                    <Label
                      htmlFor="replacement"
                      className="flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 hover:bg-gray-50 transition-all"
                    >
                      <span className="font-semibold">Replacement</span>
                      <span className="text-xs text-gray-500">Replace old unit</span>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* System Age Slider */}
            {(serviceType === 'repair' || serviceType === 'maintenance') && (
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  System Age: {systemAge[0]} years
                </Label>
                <Slider
                  value={systemAge}
                  onValueChange={handleAgeChange}
                  max={25}
                  min={1}
                  step={1}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>1 year</span>
                  <span>25+ years</span>
                </div>
              </div>
            )}

            {/* Estimated Cost Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${serviceType}-${systemAge[0]}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-blue-900">
                    Estimated Cost Range
                  </span>
                  <TrendingDown className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-2">
                  ${estimatedCost.min} - ${estimatedCost.max}
                </div>
                <p className="text-sm text-blue-700">
                  *Final price determined after free inspection. No hidden fees.
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Button */}
            <Button 
              onClick={onGetQuote}
              size="lg" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6"
            >
              Get Accurate Quote - Free Inspection
            </Button>

            <div className="text-center text-sm text-gray-500">
              💡 Average response time: Under 2 hours
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
