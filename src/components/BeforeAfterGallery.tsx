import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'Furnace Installation',
    before: 'https://images.unsplash.com/photo-1581578017093-cd30a0f463d8?w=600&h=400&fit=crop',
    beforeQuery: 'old rusty furnace',
    after: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
    afterQuery: 'new modern furnace installation',
    description: 'Complete furnace replacement with high-efficiency model',
  },
  {
    id: 2,
    title: 'AC Unit Upgrade',
    before: 'https://images.unsplash.com/photo-1691766091689-4de76d325d0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBydXN0eSUyMG91dGRvb3IlMjBodmFjJTIwdW5pdHxlbnwxfHx8fDE3NzA2Njc0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    beforeQuery: 'old rusty outdoor hvac unit',
    after: 'https://images.unsplash.com/photo-1758798157512-f0a864c696c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBtb2Rlcm4lMjBodmFjJTIwb3V0ZG9vciUyMGNvbmRlbnNlcnxlbnwxfHx8fDE3NzA2Njc0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    afterQuery: 'new modern hvac outdoor condenser',
    description: 'Energy-efficient AC installation with smart thermostat',
  },
  {
    id: 3,
    title: 'Ductwork Cleaning',
    before: 'https://images.unsplash.com/photo-1757219525975-03b5984bc6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXJ0eSUyMGFpciUyMGR1Y3QlMjB2ZW50aWxhdGlvbnxlbnwxfHx8fDE3NzA2NjcyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    beforeQuery: 'dirty air duct ventilation',
    after: 'https://images.unsplash.com/photo-1757562593192-e15aa89e7876?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGFpciUyMGR1Y3QlMjB2ZW50aWxhdGlvbnxlbnwxfHx8fDE3NzA2NjcyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    afterQuery: 'clean air duct ventilation',
    description: 'Professional ductwork cleaning and sanitization',
  },
];

export function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setSliderPosition(50);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setSliderPosition(50);
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See The Difference
          </h2>
          <p className="text-lg text-gray-600">
            Real transformations from our certified technicians
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl">
          {/* Before/After Slider */}
          <div className="relative aspect-[16/10] bg-gray-900 overflow-hidden">
            {/* After Image (Background) */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src={currentProject.after}
                alt={`${currentProject.title} - After`}
                query={currentProject.afterQuery}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                After
              </div>
            </div>

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <ImageWithFallback
                src={currentProject.before}
                alt={`${currentProject.title} - Before`}
                query={currentProject.beforeQuery}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Before
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={(e) => {
                const startX = e.clientX;
                const startPosition = sliderPosition;

                const handleMouseMove = (e: MouseEvent) => {
                  const container = (e.target as HTMLElement).closest('.relative');
                  if (container) {
                    const rect = container.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const percentage = (x / rect.width) * 100;
                    setSliderPosition(Math.max(0, Math.min(100, percentage)));
                  }
                };

                const handleMouseUp = () => {
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };

                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                <ChevronLeft className="w-4 h-4 text-gray-700 absolute left-1" />
                <ChevronRight className="w-4 h-4 text-gray-700 absolute right-1" />
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="p-6 bg-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {currentProject.title}
                </h3>
                <p className="text-gray-600 mt-1">
                  {currentProject.description}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevious}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  className="rounded-full"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setSliderPosition(50);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}