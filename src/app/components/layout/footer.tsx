'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, ShieldCheck, FileText } from 'lucide-react';
import '@/core/SCSS/base/sections/s-footer-section.scss';
import '@/core/SCSS/base/layout/l-calendar.scss';
import Modal from './Modal';
import content from '@/app/data/content.json';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (title: string, content: React.ReactNode) => {
    setModalContent(
      <>
        <h2 className="modal-header">{title}</h2>
        <div className="footertext">{content}</div>
      </>,
    );
    setIsModalOpen(true);
  };

  const IconImage = ({ src, alt }: { src: string; alt: string }) => (
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
      className="footer__icon"
    />
  );
  const footerContent = content.footer;

  return (
    <footer className="footer py-12 px-6 w-full">
      <div className="mx-auto w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          <div className="footer__column space-y-3">
            <h4 className="text-lg font-semibold">{footerContent.title}</h4>
            <p className="footertext text-sm">{footerContent.description}</p>
          </div>
          <div className="footer__column">
            <h4 className="text-lg font-semibold mb-3">Links</h4>
            <ul className="text-sm space-y-2">
              <li
                className="cursor-pointer footer__link"
                onClick={() =>
                  openModal(
                    'Contact',
                    <>
                      <p>
                        You can reach the Risk Reforged team through the
                        following channels:
                      </p>
                      <ul>
                        <li>
                          <strong>Discord:</strong>{' '}
                          <a
                            href="https://discord.gg/wc3risk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#f9c701] hover:underline p-1"
                          >
                            Join our community
                          </a>
                        </li>
                      </ul>
                      <p>
                        We&apos;re happy to help with bug reports, suggestions,
                        or collaboration opportunities.
                      </p>
                    </>,
                  )
                }
              >
                <Mail /> Contact
              </li>
              <li
                className="cursor-pointer footer__link"
                onClick={() =>
                  openModal(
                    'Privacy Policy',
                    <>
                      <p>
                        <strong>Effective Date:</strong> May 7, 2025
                      </p>
                      <h3>
                        <strong>1. Information We Collect</strong>
                      </h3>
                      <p>
                        We do not collect personal data unless explicitly
                        provided by you (e.g., through email or Discord).
                      </p>
                      <h3>
                        <strong>2. Third-Party Services</strong>
                      </h3>
                      <p>
                        This site may link to external platforms (Discord,
                        Patreon, etc.). Please refer to their respective
                        policies for data handling.
                      </p>
                      <h3>
                        <strong>3. Cookies</strong>
                      </h3>
                      <p>
                        We may use essential cookies for basic functionality. We
                        do not use tracking cookies or analytics tools that
                        collect personally identifiable data.
                      </p>
                    </>,
                  )
                }
              >
                <ShieldCheck /> Privacy Policy
              </li>
              <li
                className="cursor-pointer footer__link"
                onClick={() =>
                  openModal(
                    'Terms of Service',
                    <>
                      <p>
                        <strong>Effective Date:</strong> May 7, 2025
                      </p>
                      <p>
                        Welcome to Risk Reforged. By accessing or using our
                        website or services, you agree to be bound by the
                        following Terms of Service.
                      </p>
                      <h3>1. Use of the Website</h3>
                      <p>
                        You agree to use the website only for lawful purposes.
                        Do not engage in any activity that could damage or
                        impair the site.
                      </p>
                      <h3>2. Intellectual Property</h3>
                      <p>
                        All content is the property of its respective creators.
                        Risk Reforged respects Blizzard Entertainment’s rights
                        and does not claim ownership over Warcraft III assets.
                      </p>
                    </>,
                  )
                }
              >
                <FileText /> Terms of Service
              </li>

              <li
                className="cursor-pointer footer__link"
                onClick={() =>
                  openModal(
                    'FAQ',
                    <>
                      <h3>
                        <strong>What is Risk Reforged?</strong>
                      </h3>
                      <p>
                        Risk Reforged is a community-driven project to maintain
                        and expand the Risk map genre within Warcraft III.
                      </p>
                      <h3>
                        <strong>How can I contribute?</strong>
                      </h3>
                      <p>
                        Join our
                        <a
                          href="https://discord.gg/wc3risk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#f9c701] hover:underline p-1"
                        >
                          Discord
                        </a>
                        to collaborate, test, and share ideas.
                      </p>
                      <h3>
                        <strong>
                          Is this project affiliated with Blizzard?
                        </strong>
                      </h3>
                      <p>
                        No. This is a fan-made project and is not affiliated
                        with or endorsed by Blizzard Entertainment.
                      </p>
                    </>,
                  )
                }
              >
                <FileText /> FAQ
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="text-lg font-semibold mb-3">Social</h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  href="https://discord.gg/wc3risk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  <IconImage src="/images/Discord.svg" alt="Discord" /> Discord
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.patreon.com/posts/107482929?pr=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  <IconImage src="/images/patreon-gul.webp" alt="Patreon" />{' '}
                  Patreon
                </Link>
              </li>
              <li>
                <Link
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
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
                  className="footer__link"
                >
                  <IconImage src="/images/twitch-gule.webp" alt="Twitch" />{' '}
                  Twitch
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__column footertext text-sm">
            <p>&copy; {year} Risk Reforged. All rights reserved.</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>{modalContent}</Modal>
      )}
    </footer>
  );
};

export default Footer;
