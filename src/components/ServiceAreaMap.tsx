import { Card } from './ui/card';
import { MapPin, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

const serviceAreas = [
  { city: 'Santa Monica', zipCodes: ['90401', '90402', '90403'], color: 'bg-blue-500' },
  { city: 'Pasadena', zipCodes: ['91101', '91103', '91106'], color: 'bg-green-500' },
  { city: 'Long Beach', zipCodes: ['90802', '90806', '90815'], color: 'bg-purple-500' },
  { city: 'Glendale', zipCodes: ['91201', '91202', '91206'], color: 'bg-orange-500' },
];

export function ServiceAreaMap({ onBookService }: { onBookService: () => void }) {
  const [zipCode, setZipCode] = useState('');
  const [validationState, setValidationState] = useState<'idle' | 'available' | 'unavailable'>('idle');

  const checkServiceAvailability = () => {
    const zip = zipCode.trim();
    
    // Check if input is valid (5 digits)
    if (zip.length === 5 && /^\d{5}$/.test(zip)) {
      setValidationState('available');
    } else {
      setValidationState('unavailable');
    }
  };

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow digits
    setZipCode(value);
    setValidationState('idle'); // Reset state when user types
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Service Area
          </h2>
          <p className="text-lg text-gray-600">
            Proudly serving the entire metro area with 24/7 emergency service
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map Visualization */}
          <Card className="p-8 shadow-xl">
            <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg relative overflow-hidden">
              {/* Simplified Map Grid */}
              <div className="absolute inset-0 grid grid-cols-2 gap-4 p-8">
                {serviceAreas.map((area, index) => (
                  <div
                    key={index}
                    className={`${area.color} rounded-lg p-4 text-white flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer shadow-lg`}
                  >
                    <div>
                      <div className="font-bold text-lg mb-2">{area.city}</div>
                      <div className="text-xs opacity-90">
                        {area.zipCodes.join(', ')}
                      </div>
                    </div>
                    <MapPin className="w-6 h-6 self-end" />
                  </div>
                ))}
              </div>

              {/* Center Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap shadow-lg">
                    Main Office
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Interactive service area map • All zones available 24/7
              </p>
            </div>
          </Card>

          {/* Service Details */}
          <div className="space-y-6">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">24/7 Emergency Service</h3>
                  <p className="text-gray-600 text-sm">
                    We're available around the clock for emergency repairs. No extra charges for nights or weekends.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Same-Day Service</h3>
                  <p className="text-gray-600 text-sm">
                    Most service calls completed the same day. Our technicians are strategically located across all service areas.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Free Service Call</h3>
                  <p className="text-gray-600 text-sm">
                    No trip charges when you book a repair. Free estimates on all installations and replacements.
                  </p>
                </div>
              </div>
            </Card>

            {/* ZIP Code Checker */}
            <Card className={`p-6 shadow-xl transition-all duration-300 ${
              validationState === 'available' 
                ? 'bg-gradient-to-r from-green-600 to-green-700' 
                : validationState === 'unavailable'
                ? 'bg-gradient-to-r from-red-600 to-red-700'
                : 'bg-gradient-to-r from-blue-600 to-blue-700'
            } text-white`}>
              <h3 className="font-bold text-lg mb-3">Check Your ZIP Code</h3>
              
              {validationState === 'idle' && (
                <>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter ZIP code"
                      maxLength={5}
                      className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      value={zipCode}
                      onChange={handleZipChange}
                    />
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold" onClick={checkServiceAvailability}>
                      Check
                    </Button>
                  </div>
                  <p className="text-xs mt-3 text-blue-100">
                    Enter your ZIP code to confirm service availability
                  </p>
                </>
              )}

              {validationState === 'available' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-8 h-8 text-white" />
                    <div>
                      <p className="font-bold text-lg">Service Available!</p>
                      <p className="text-sm text-green-100">We service ZIP code {zipCode}</p>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-white hover:bg-gray-100 text-green-700 font-bold py-3"
                    onClick={onBookService}
                  >
                    Book Service Now →
                  </Button>
                  <button 
                    className="text-xs text-green-100 underline hover:text-white transition-colors"
                    onClick={() => setValidationState('idle')}
                  >
                    Check a different ZIP code
                  </button>
                </div>
              )}

              {validationState === 'unavailable' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-8 h-8 text-white" />
                    <div>
                      <p className="font-bold text-lg">Not Available Yet</p>
                      <p className="text-sm text-red-100">Service isn't available yet in this ZIP area</p>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-white hover:bg-gray-100 text-red-700 font-bold py-3"
                    onClick={() => setValidationState('idle')}
                  >
                    ← Try Another ZIP Code
                  </Button>
                  <p className="text-xs text-red-100">
                    We're expanding! Contact us at (555) 123-4567 to get notified
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}