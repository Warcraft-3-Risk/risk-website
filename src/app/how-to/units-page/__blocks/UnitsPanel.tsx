import '@/core/SCSS/base/layout/page/units-page/p-units-page-images.scss';
import '@/core/SCSS/base/layout/page/units-page/p-units-page.scss';
import Image from 'next/image';
import React from 'react';

interface UnitPanelProps {
  unitId: string | null;
  data: Record<
    string,
    { name: string; description: string; image?: string; imageClass?: string }
  >;
}

const UnitsPanel: React.FC<UnitPanelProps> = ({ unitId, data }) => {
  if (!unitId || !data[unitId]) {
    return (
      <div className="units-page-panel">
        <div className="units-page-panel-content">
          <h2 className="units-page-panel-title">Units</h2>
          <p className="units-page-panel-description">
            Select a unit to view detailed information.
          </p>
        </div>
      </div>
    );
  }

  const unit = data[unitId];

  return (
    <div className="units-page-panel">
      <div className="units-page-panel-content">
        <h1 className="units-page-panel-title">Meet the</h1>
        <h2 className="units-page-panel-title">{unit.name}</h2>

        <div className="units-page-panel-description">
          {unit.description.split('\n\n').map((paragraph, pIdx) => (
            <p key={pIdx}>
              {paragraph.split('\n').map((line, lIdx, arr) => (
                <React.Fragment key={lIdx}>
                  {line}
                  {lIdx < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          ))}
        </div>
      </div>

      <div className="units-page-panel-image-container">
        {unit.image && (
          <Image
            src={unit.image}
            alt={unit.name}
            className={unit.imageClass}
            width={300}
            height={300}
          />
        )}
      </div>
    </div>
  );
};

export default UnitsPanel;
