import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

interface AdviceSlip {
  slip: {
    id: number;
    advice: string;
  };
}

const fetchAdvice = async (): Promise<AdviceSlip> => {
  const response = await fetch('https://api.adviceslip.com/advice');
  if (!response.ok) {
    throw new Error('Failed to fetch advice');
  }
  return response.json();
};

const QuotesSlider: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<string>('');

  const { data: adviceData, isLoading, error } = useQuery({
    queryKey: ['advice'],
    queryFn: fetchAdvice,
    refetchInterval: 30000, // Refetch every 30 seconds
    staleTime: 25000, // Consider data stale after 25 seconds
  });

  useEffect(() => {
    if (adviceData?.slip?.advice) {
      setCurrentQuote(adviceData.slip.advice);
    }
  }, [adviceData]);

  if (isLoading && !currentQuote) {
    return (
      <div className="w-full h-16 flex items-center justify-center">
        <div className="animate-pulse text-gray-500 dark:text-gray-400">
          Loading daily wisdom...
        </div>
      </div>
    );
  }

  if (error && !currentQuote) {
    return (
      <div className="w-full h-16 flex items-center justify-center">
        <div className="text-gray-500 dark:text-gray-400">
          "Eliminate the unnecessary." - Daily Wisdom
        </div>
      </div>
    );
  }

  if (!currentQuote) {
    return null;
  }

  return (
    <div className="w-full h-16 overflow-hidden relative bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
      <div className="absolute inset-0 flex items-center">
        <div className="text-sm text-gray-600 dark:text-gray-300 mb-1 absolute top-2 left-4 z-10">
          💭 Daily Wisdom
        </div>
        <div className="w-full overflow-hidden">
          <div 
            className="text-lg font-medium text-gray-800 dark:text-gray-100 whitespace-nowrap"
            style={{
              animation: `slideText 20s linear infinite`
            }}
          >
            "{currentQuote}"
          </div>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-600">
        <div 
          className="h-full bg-blue-500 dark:bg-blue-400"
          style={{
            animation: `progressBar 20s linear infinite`
          }}
        />
      </div>

      <style jsx>{`
        @keyframes slideText {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes progressBar {
          0% {
            width: 100%;
          }
          100% {
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
};

export default QuotesSlider;
