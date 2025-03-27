import React from 'react';
import { Progress } from '@/components/ui/progress';

const LoadingTransition = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 200);
    const timer2 = setTimeout(() => setProgress(100), 400);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="w-1/3 space-y-4">
        <Progress value={progress} className="w-full" />
      </div>
    </div>
  );
};

export default LoadingTransition;