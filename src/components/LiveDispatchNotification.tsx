import { useEffect } from 'react';
import { toast } from 'sonner@2.0.3';
import { MapPin, Clock } from 'lucide-react';

const zipCodes = ['90210', '10001', '60601', '33101', '94102', '02101', '75201'];

export function LiveDispatchNotification() {
  useEffect(() => {
    const showDispatchNotification = () => {
      const randomZip = zipCodes[Math.floor(Math.random() * zipCodes.length)];
      const timeAgo = Math.floor(Math.random() * 15) + 1; // 1-15 minutes ago
      
      toast.success(
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <div className="font-semibold text-sm">Technician Dispatched</div>
            <div className="text-xs text-gray-600 mt-1 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>Service area: {randomZip}</span>
            </div>
            <div className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{timeAgo} min ago</span>
            </div>
          </div>
        </div>,
        {
          duration: 4000,
        }
      );
    };

    // Show first notification after 3 seconds
    const firstTimeout = setTimeout(showDispatchNotification, 3000);
    
    // Show subsequent notifications every 15-25 seconds
    const interval = setInterval(
      showDispatchNotification,
      Math.random() * 10000 + 15000
    );

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  return null;
}
