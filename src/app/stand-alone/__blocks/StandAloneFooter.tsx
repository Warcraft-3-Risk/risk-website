import Image from 'next/image';

const StandAloneFooter = () => {
  return (
    <footer className="stand-alone-footer">
      <h2 className="stand-alone-footer-title">Join our efforts</h2>
      <div className="stand-alone-footer-following">
        <p>
          Support us now on Kickstarter and help bring Stand Alone to life — a
          new home for the RTS community, forged in strategy and fire.
        </p>
        {/* Icons section */}
      </div>
      <div className="standalone-icons">
        <div className="icon-item">
          <a
            href="https://www.patreon.com/posts/107482929?pr=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/patreon-gul.webp"
              alt="Icon 1"
              className="patreon-icon"
              width={32}
              height={32}
            />
          </a>
        </div>
        <div className="icon-item">
          <a
            href="https://www.patreon.com/posts/kickstarter-113889244"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/kickstarter-gul.webp"
              alt="Icon 2"
              className="kickstarter-icon"
              width={256}
              height={256}
            />
          </a>
        </div>
        <div className="icon-item">
          <a
            href="https://discord.gg/wc3risk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/Discord.svg"
              width={32}
              height={32}
              alt="Icon 3"
              className="discord-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default StandAloneFooter;
