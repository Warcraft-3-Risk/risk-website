import React from 'react';

import '@/core/SCSS/base/layout/page/p-units-page.scss';
import Image from 'next/image';

interface UnitPanelProps {
  unitId: string | null;
  data: Record<string, { name: string; description: string; image?: string }>;
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
        <p className="units-page-panel-description">{unit.description}</p>
      </div>
      <div className="units-page-panel-image-container">
        {unit.image && (
          // <div className="units-page-panel-image-wrapper">
          //   <svg className="units-page-panel-ring" viewBox="0 0 100 100">
          //     <circle
          //       cx="50"
          //       cy="50"
          //       r="50"
          //       stroke="#FFD700"
          //       strokeWidth="4"
          //       fill="none"
          //       strokeDasharray="75"
          //       strokeLinecap="round"
          //     />
          //   </svg>
          <Image
            src={unit.image}
            alt={unit.name}
            className="units-page-panel-image"
            width={250}
            height={250}
          />
          // </div>
        )}
      </div>
    </div>
  );
};

export default UnitsPanel;
