import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="flex space-x-2">
        <div className="w-2 h-8 bg-yellow-500 animate-[bounce_0.6s_infinite]"></div>
        <div className="w-2 h-8 bg-yellow-500 animate-[bounce_0.6s_infinite_0.1s]"></div>
        <div className="w-2 h-8 bg-yellow-500 animate-[bounce_0.6s_infinite_0.2s]"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
