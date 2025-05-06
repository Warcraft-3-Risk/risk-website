import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, ShieldCheck, FileText } from 'lucide-react';
import '@/core/SCSS/base/sections/s-footer-section.scss';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const IconImage = ({ src, alt }: { src: string; alt: string }) => (
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
      className="footer__icon"
    />
  );

  return (
    <footer className="footer py-12 px-6 w-full">
      <div className="mx-auto w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          <div className="footer space-y-3">
            <h4 className="text-lg font-semibold">Risk Reforged</h4>
            <p className="footertext text-sm">
              A community-driven Warcraft III project preserving and advancing
              custom maps.
            </p>
          </div>

          <div className="footer">
            <h4 className="text-lg font-semibold mb-3">Links</h4>
            <ul className="text-sm">
              <li>
                <Link
                  href="/contact"
                  className="hover:underline flex items-center gap-2"
                >
                  <Mail className="w-[30px] h-[30px]" /> Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:underline flex items-center gap-2"
                >
                  <ShieldCheck className="w-[30px] h-[30px]" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:underline flex items-center gap-2"
                >
                  <FileText className="w-[30px] h-[30px]" /> Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:underline flex items-center gap-2"
                >
                  <FileText className="w-[30px] h-[30px]" /> FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer">
            <h4 className="text-lg font-semibold mb-3">Social</h4>
            <ul className="litext text-sm">
              <li>
                <Link
                  href="https://discord.gg/wc3risk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-2"
                >
                  <IconImage src="/images/Discord.svg" alt="Discord" /> Discord
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.patreon.com/posts/107482929?pr=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-2"
                >
                  <IconImage src="/images/patreon-glue.webp" alt="Patreon" />{' '}
                  Patreon
                </Link>
              </li>
              <li>
                <Link
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-2"
                >
                  <IconImage
                    src="/images/Youtube_Symbol_gule.webp"
                    alt="YouTube"
                  />{' '}
                  YouTube
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitch.tv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-2"
                >
                  <IconImage src="/images/twitch-gule.webp" alt="Twitch" />{' '}
                  Twitch
                </Link>
              </li>
            </ul>
          </div>

          <div className="footertext md:col-span-1 flex flex-col justify-end text-sm">
            <p>&copy; {year} Risk Reforged. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
