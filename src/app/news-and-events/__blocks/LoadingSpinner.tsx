import content from '@/app/data/content.json';
const LoadingSpinner = () => (
  <div className="text-center text-gray-600 dark:text-gray-400">
    {content.newsandevents['newsandevents.loading']}
  </div>
);

export default LoadingSpinner;
