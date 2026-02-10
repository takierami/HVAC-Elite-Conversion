import { Card } from './ui/card';
import { Clock, DollarSign, Award, Users, ThumbsUp, Zap } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Most repairs completed the same day. Emergency service available 24/7.',
    stat: '95% same-day',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees. Upfront quotes before we start any work.',
    stat: '$0 surprises',
  },
  {
    icon: Award,
    title: 'Licensed Experts',
    description: 'All technicians are licensed, insured, and background-checked.',
    stat: '100% certified',
  },
  {
    icon: Users,
    title: '5000+ Happy Customers',
    description: 'Join thousands of satisfied homeowners who trust us.',
    stat: '4.9/5 rating',
  },
  {
    icon: ThumbsUp,
    title: '100% Satisfaction',
    description: 'We stand behind our work with comprehensive guarantees.',
    stat: 'Guaranteed',
  },
  {
    icon: Zap,
    title: 'Energy Efficiency',
    description: 'Expert advice on reducing your energy bills and carbon footprint.',
    stat: 'Save up to 30%',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            The HVAC Elite Difference
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Homeowners Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just another HVAC company—we're your trusted partner in home comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-300 bg-white relative overflow-hidden group"
              >
                {/* Background decoration */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">
                      {feature.stat}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">5000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">A+</div>
              <div className="text-sm text-gray-600">BBB Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
