import { motion } from 'motion/react';

const brands = [
  'Trane', 'Carrier', 'Rheem', 'Lennox', 'York', 
  'Goodman', 'American Standard', 'Bryant', 'Daikin', 'Mitsubishi'
];

export function BrandConfidenceBar() {
  return (
    <section className="bg-gray-50 py-12 overflow-hidden border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <h3 className="text-center text-sm font-semibold text-gray-600 uppercase tracking-wide">
          Trusted Brands We Service
        </h3>
      </div>
      
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        
        {/* Scrolling Ticker */}
        <div className="flex">
          <motion.div
            className="flex gap-12 pr-12"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] px-6 py-4 bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <span className="text-gray-700 font-semibold whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-6 text-center">
        <p className="text-sm text-gray-600">
          And many more! We service all major HVAC brands with certified technicians.
        </p>
      </div>
    </section>
  );
}
