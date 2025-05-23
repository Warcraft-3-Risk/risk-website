import content from '@/app/data/content.json';
import Image from 'next/image';
import React, { useEffect } from 'react';

const ModalContent = content.modals;

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="modal-background" onClick={onClose}></div>

      <div className="modal-container">
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        {children}
        <div className="discord-button">
          <p className="discord-text">{ModalContent['join']}</p>
          <a
            href="https://discord.com/invite/wc3risk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/Discord.svg"
              alt="Discord Logo"
              width={52}
              height={52}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
