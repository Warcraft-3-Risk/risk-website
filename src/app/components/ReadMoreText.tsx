import CTAButton from '@/app/components/ui/CTAButtons';
import React, { useEffect, useRef, useState } from 'react';

interface ReadMoreTextProps {
  text: string;
  maxHeight?: number;
}

const ReadMoreText: React.FC<ReadMoreTextProps> = ({
  text,
  maxHeight = 175,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      setIsOverflowing(textRef.current.scrollHeight > maxHeight);
    }
  }, [text, maxHeight]);

  return (
    <div className="relative">
      <div
        ref={textRef}
        className={`units-panel-transition overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? 'max-h-[1000px]' : 'max-h-[143px]'
        }`}
      >
        <div className="whitespace-pre-line">
          {text.split('\n\n').map((paragraph, pIdx) => (
            <p key={pIdx} className="mb-2">
              {paragraph.split('\n').map((line, lIdx, arr) => (
                <span key={lIdx}>
                  {line}
                  {lIdx < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>

      {!expanded && isOverflowing && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 75,
            background: 'linear-gradient(to top, #1b3449, transparent)',
            pointerEvents: 'none',
          }}
        />
      )}

      {isOverflowing && (
        <CTAButton
          variant="readmore"
          onClick={() => setExpanded(!expanded)}
          className=" relative z-10 mt-2"
        >
          {expanded ? 'Read less' : 'Read more'}
        </CTAButton>
      )}
    </div>
  );
};

export default ReadMoreText;
