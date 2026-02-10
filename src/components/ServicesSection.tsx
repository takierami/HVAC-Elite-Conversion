import { Card } from './ui/card';
import { Button } from './ui/button';
import { Wrench, Snowflake, Flame, Settings, Wind, Shield } from 'lucide-react';

interface ServicesSectionProps {
  onBookService: () => void;
}

const services = [
  {
    icon: Snowflake,
    title: 'Air Conditioning',
    description: 'Repair, installation, and maintenance for all AC systems. Keep cool all summer long.',
    features: ['Same-day repairs', 'Energy-efficient installs', 'Annual maintenance plans'],
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Flame,
    title: 'Heating Systems',
    description: 'Furnace and heat pump services. Stay warm and comfortable all winter.',
    features: ['Emergency repairs', 'System replacements', 'Efficiency upgrades'],
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: Settings,
    title: 'Maintenance Plans',
    description: 'Preventive maintenance to keep your system running efficiently year-round.',
    features: ['Bi-annual tune-ups', 'Priority scheduling', 'Extended warranties'],
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Wind,
    title: 'Indoor Air Quality',
    description: 'Air purification, humidifiers, and ventilation solutions for healthier air.',
    features: ['Air purifiers', 'Duct cleaning', 'UV light systems'],
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Wrench,
    title: 'Emergency Service',
    description: '24/7 emergency repairs when you need us most. No extra charges.',
    features: ['Available 24/7', 'Fast response', 'No overtime fees'],
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Shield,
    title: 'Warranties & Protection',
    description: 'Comprehensive warranties and service guarantees for peace of mind.',
    features: ['Parts warranty', '100% satisfaction', 'Price matching'],
    color: 'bg-indigo-100 text-indigo-600',
  },
];

export function ServicesSection({ onBookService }: ServicesSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete HVAC Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From emergency repairs to new installations, we've got you covered with expert service and transparent pricing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 group"
              >
                <div className={`w-14 h-14 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all"
                  onClick={onBookService}
                >
                  Learn More
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={onBookService}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8"
          >
            Schedule Your Service Today
          </Button>
        </div>
      </div>
    </section>
  );
}
