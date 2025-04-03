import React, { useState } from 'react';

interface ForumRatingsProps {
  initialRating: number;
}

const ForumRatings: React.FC<ForumRatingsProps> = ({ initialRating }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="flex items-center space-x-2 mt-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`cursor-pointer text-xl ${star <= rating ? 'text-yellow-400' : 'text-gray-400'}`}
          onClick={() => handleClick(star)}
        >
          ★
        </span>
      ))}
      <p className="ml-2 text-sm text-gray-500">{rating} out of 5 stars</p>
    </div>
  );
};

export default ForumRatings;
