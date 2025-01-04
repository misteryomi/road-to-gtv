'use client'
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Timer, Users, AlertCircle, Link } from 'lucide-react';
import { starter_pricing } from '@/lib/defaults';

const CountdownTimer = () => {
  // Set end date to 7 days from now
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 24,
    minutes: 60,
    seconds: 60
  });

  const [spotsLeft, setSpotsLeft] = useState(50);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newSeconds = prevTime.seconds - 1;
        if (newSeconds >= 0) return { ...prevTime, seconds: newSeconds };
        
        const newMinutes = prevTime.minutes - 1;
        if (newMinutes >= 0) return { ...prevTime, minutes: newMinutes, seconds: 59 };
        
        const newHours = prevTime.hours - 1;
        if (newHours >= 0) return { ...prevTime, hours: newHours, minutes: 59, seconds: 59 };
        
        const newDays = prevTime.days - 1;
        if (newDays >= 0) return { days: newDays, hours: 23, minutes: 59, seconds: 59 };
        
        clearInterval(timer);
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simulate random spot decreases
  useEffect(() => {
    const spotTimer = setInterval(() => {
      if (spotsLeft > 1) {
        const shouldDecrease = Math.random() < 0.3; // 30% chance to decrease
        if (shouldDecrease) {
          setSpotsLeft(prev => Math.max(1, prev - 1));
        }
      }
    }, 45000); // Check every 45 seconds

    return () => clearInterval(spotTimer);
  }, [spotsLeft]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
        <a href={starter_pricing}>
        <Card className="bg-black/95 border border-white/10 p-4 shadow-2xl backdrop-blur-sm">
        <div className="space-y-4">
          {/* Early Bird Offer */}
          <div className="flex items-center text-blue-400 mb-2">
            <AlertCircle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Get Early Bird Offer</span>
          </div>

          {/* Price */}
          <div className="text-center mb-4">
            <div className="text-2xl font-bold text-white">£299</div>
            <div className="text-sm text-gray-400 line-through">Regular £499</div>
          </div>

          {/* Time Left */}
          <div className="flex items-center space-x-2 text-gray-300">
            <Timer className="w-4 h-4 text-blue-400" />
            <div className="text-sm">
              Ends in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </div>
          </div>

          {/* Spots Left */}
          <div className="flex items-center space-x-2 text-gray-300">
            <Users className="w-4 h-4 text-blue-400" />
            <div className="text-sm">
              Only {spotsLeft} spots left
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/10 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(spotsLeft / 50) * 100}%` }}
            />
          </div>

          {spotsLeft <= 10 && (
            <div className="text-xs text-yellow-400 animate-pulse">
              ⚡ High demand: {spotsLeft} {spotsLeft === 1 ? 'spot' : 'spots'} remaining at this price
            </div>
          )}

        
        </div>
        </Card>
        </a>
      </div>
  );
};

export default CountdownTimer;