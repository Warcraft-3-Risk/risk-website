//TODO Remove literals and refactor this accordingly to fit needs
import React, { useState } from 'react';

interface ForumRatingsProps {
  initialRating: 'like' | 'dislike' | null;
}

const ForumRatings: React.FC<ForumRatingsProps> = ({ initialRating }) => {
  const [rating, setRating] = useState<'like' | 'dislike' | null>(
    initialRating,
  );

  const handleLike = () => {
    setRating(rating === 'like' ? null : 'like');
  };

  const handleDislike = () => {
    setRating(rating === 'dislike' ? null : 'dislike');
  };

  return (
    <div className="flex items-center space-x-4 mt-4">
      <button
        className={`flex items-center space-x-1 px-3 py-1 rounded ${
          rating === 'like'
            ? 'bg-green-500 text-white'
            : 'bg-gray-200 text-gray-700'
        }`}
        onClick={handleLike}
      >
        👍 <span>Like</span>
      </button>
      <button
        className={`flex items-center space-x-1 px-3 py-1 rounded ${
          rating === 'dislike'
            ? 'bg-red-500 text-white'
            : 'bg-gray-200 text-gray-700'
        }`}
        onClick={handleDislike}
      >
        👎 <span>Dislike</span>
      </button>
    </div>
  );
};

export default ForumRatings;
