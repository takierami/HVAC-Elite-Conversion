import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, CheckCircle } from 'lucide-react';

const reviews = [
  { name: 'Sarah M.', rating: 5, text: 'Fast service, friendly technician!', location: 'Downtown' },
  { name: 'Michael R.', rating: 5, text: 'Fixed my AC in under an hour', location: 'Westside' },
  { name: 'Jennifer L.', rating: 5, text: 'Professional and affordable', location: 'Eastside' },
  { name: 'David K.', rating: 5, text: 'Best HVAC company in town!', location: 'Northside' },
  { name: 'Lisa P.', rating: 5, text: 'Same-day service as promised', location: 'Downtown' },
];

export function SocialProofOverlay() {
  const [currentReview, setCurrentReview] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const showReview = () => {
      setShow(true);
      setCurrentReview((prev) => (prev + 1) % reviews.length);
      
      setTimeout(() => {
        setShow(false);
      }, 5000);
    };

    // First show after 5 seconds
    const firstTimeout = setTimeout(showReview, 5000);
    
    // Then show every 12 seconds
    const interval = setInterval(showReview, 12000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  const review = reviews[currentReview];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50, x: -20 }}
          className="fixed bottom-6 left-6 z-50 max-w-sm"
        >
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 flex items-start gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-sm text-gray-900">
                  {review.name}
                </span>
                <span className="text-xs text-gray-500">• {review.location}</span>
              </div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">
                "{review.text}"
              </p>
              <div className="text-xs text-blue-600 font-medium mt-1">
                Verified Review
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
