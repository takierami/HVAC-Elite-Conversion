import { Button } from './ui/button';
import { Phone, Clock, Award, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  onBookService: () => void;
}

export function HeroSection({ onBookService }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 lg:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <Award className="w-4 h-4" />
              <span>Licensed & Insured • 5000+ Happy Customers</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              HVAC Elite
              <span className="block text-yellow-400 mt-2">24/7 Service</span>
            </h1>

            <p className="text-xl text-blue-100 max-w-xl">
              Same-day heating & cooling solutions. Expert technicians, transparent pricing, and guaranteed satisfaction.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={onBookService}
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold text-lg px-8 py-6 rounded-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Book Service Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold text-lg px-8 py-6 rounded-lg transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                (555) 123-4567
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                <div className="text-sm font-semibold">Same Day</div>
                <div className="text-xs text-blue-200">Service</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                <div className="text-sm font-semibold">100% Guaranteed</div>
                <div className="text-xs text-blue-200">Workmanship</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                <div className="text-sm font-semibold">Licensed</div>
                <div className="text-xs text-blue-200">Professionals</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:block hidden">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&h=700&fit=crop"
                alt="HVAC Technician"
                query="hvac technician professional uniform"
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 p-6 rounded-xl shadow-2xl">
                <div className="text-4xl font-bold">4.9/5</div>
                <div className="text-sm text-gray-600">★★★★★</div>
                <div className="text-xs text-gray-500 mt-1">Based on 1,200+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
