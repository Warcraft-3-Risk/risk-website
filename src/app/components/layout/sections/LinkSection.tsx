import Link from 'next/link';
import content from '@/app/data/content.json';
//TODO Use images of text when it is ready
const LinkSection = () => {
  return (
    <section className="flex flex-col items-center space-y-4">
      <h2 className="text-5xl font-bold text-black dark:text-white">
        {content.linksection['linksection.title']}
      </h2>
      <h4 className="text-2xl text-black dark:text-white">
        {content.linksection['linksection.text']}
      </h4>
      <div className="flex flex-row gap-5">
        <Link
          href="https://www.youtube.com/@riskreforged"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          YouTube
        </Link>
        <Link
          href="https://www.twitch.tv/riskreforged"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 hover:underline"
        >
          Twitch
        </Link>
        <Link
          href="https://discord.com/invite/wc3risk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:underline"
        >
          Discord
        </Link>
      </div>
    </section>
  );
};

export default LinkSection;
