import { useState, useEffect } from 'react';
import { Thermometer, AlertCircle } from 'lucide-react';

export function DynamicWeatherHeader() {
  const [temperature, setTemperature] = useState(95);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Simulate temperature (in production, fetch from weather API)
    const temp = Math.floor(Math.random() * 30) + 75; // 75-105°F
    setTemperature(temp);

    if (temp >= 90) {
      setMessage("Don't let your AC fail you. Same-day service available!");
    } else if (temp <= 32) {
      setMessage("Keep your home warm. Emergency heating service available!");
    } else {
      setMessage("Schedule your seasonal maintenance today!");
    }
  }, []);

  const isExtreme = temperature >= 90 || temperature <= 32;

  return (
    <div 
      className={`w-full py-3 px-4 text-center text-sm transition-colors ${
        isExtreme 
          ? 'bg-red-600 text-white' 
          : 'bg-blue-600 text-white'
      }`}
    >
      <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto">
        {isExtreme ? (
          <AlertCircle className="w-4 h-4 animate-pulse" />
        ) : (
          <Thermometer className="w-4 h-4" />
        )}
        <span className="font-medium">
          It's {temperature}°F today—{message}
        </span>
      </div>
    </div>
  );
}
