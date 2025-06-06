/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Modal from '@/app/components/layout/Modal';
import content from '@/app/data/content.json';
import '@/core/SCSS/base/layout/l-calendar.scss';
import '@/core/SCSS/base/layout/l-footer.scss';
import { FileText, Library, Mail, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const footerContent = content.footer;
  const footerModals = content.footerModals;
  // this openModal function handles the opening of different modals based on the type passed to it.
  const openModal = (modalType: 'contact' | 'privacy' | 'terms' | 'faq') => {
    const modalData = footerModals[modalType];
    const modalTitle = modalData.title;
    const modalBody = modalData.content.map((item: any, index: number) => {
      if (item.type === 'link') {
        return (
          <p key={index}>
            <strong>{item.prefix}</strong>{' '}
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          </p>
        );
      }
      if (item.type === 'section') {
        return (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        );
      }
      if (item.type === 'paragraph') {
        return <p key={index}>{item.text}</p>;
      }
      return null;
    });

    setModalContent(
      <>
        <h2 className="modal-header">{modalTitle}</h2>
        <div className="footertext">{modalBody}</div>
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

  return (
    <footer className="footer py-12 px-6 w-full">
      <div className="mx-auto w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div className="footer__column">
            <h4 className="text-lg font-semibold mb-3">
              {footerContent['links.title']}
            </h4>
            <ul className="text-sm space-y-2">
              <li
                className="cursor-pointer footer__link"
                onClick={() => openModal('contact')}
              >
                <Mail /> {footerContent['links.contact']}
              </li>
              <li
                className="cursor-pointer footer__link"
                onClick={() => openModal('privacy')}
              >
                <ShieldCheck /> {footerContent['links.privacy']}
              </li>
              <li
                className="cursor-pointer footer__link"
                onClick={() => openModal('terms')}
              >
                <FileText /> {footerContent['links.terms']}
              </li>
              <li
                className="cursor-pointer footer__link"
                onClick={() => openModal('faq')}
              >
                <Library /> {footerContent['links.faq']}
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="text-lg font-semibold mb-3">
              {footerContent['social.title']}
            </h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  href="https://discord.gg/wc3risk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  <IconImage
                    src="/images/Discord.svg"
                    alt={footerContent['social.discord']}
                  />{' '}
                  {footerContent['social.discord']}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.patreon.com/posts/107482929?pr=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  <IconImage
                    src="/images/patreon-gul.webp"
                    alt={footerContent['social.patreon']}
                  />{' '}
                  {footerContent['social.patreon']}
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
                    src="/images/YouTube_Symbol_gule.webp"
                    alt={footerContent['social.youtube']}
                  />{' '}
                  {footerContent['social.youtube']}
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitch.tv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  <IconImage
                    src="/images/twitch-icon_gule.webp"
                    alt={footerContent['social.twitch']}
                  />{' '}
                  {footerContent['social.twitch']}
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__column footertext text-sm flex flex-col items-center md:items-start">
            <div className="mb-3">
              <Link href="/">
                <Image
                  src="/images/rr-logo.svg"
                  alt="Footer Logo"
                  width={360}
                  height={360}
                  className="footer__logo"
                />
              </Link>
            </div>
            <div className="footer__column space-y-3">
              <p className="footertext text-sm">{footerContent.description}</p>
            </div>
            <p>
              &copy; {year} {footerContent['copyright']}
            </p>
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
