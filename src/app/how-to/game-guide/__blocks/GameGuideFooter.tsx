import content from '@/app/data/content.json';

const GameGuideFooter = () => {
  return (
    <footer className="game-guide-footer flex flex-col items-center mt-12 md:mt-24 justify-center p-4 md:p-6 text-2xl md:text-5xl text-center">
      <p className="mb-4 md:mb-6">{content.gameguide['gameguide.footer']}</p>
    </footer>
  );
};

export default GameGuideFooter;
