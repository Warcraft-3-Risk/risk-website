'use client';

import {
  landUnits,
  seaUnits,
  unitDescriptions,
  unitSkills,
  unitStats,
} from '@/app/data/units';
import '@/core/SCSS/base/layout/page/units-page/p-units-page-icons.scss';
import '@/core/SCSS/base/layout/page/units-page/p-units-page.scss';
import React, { useState } from 'react';
import UnitsPanel from './UnitsPanel';
import UnitsStats from './UnitsStats';

const UnitsNavigation: React.FC = () => {
  const [activeType, setActiveType] = useState<'type1' | 'type2'>('type1');
  const [activeUnit, setActiveUnit] = useState<string | null>(null);

  const currentUnits = activeType === 'type1' ? landUnits : seaUnits;

  return (
    <>
      <nav className="units-page-navigation">
        <div className="units-page-navigation-type">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#type1"
                className={`units-page-navigation-city ${activeType === 'type1' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveType('type1');
                  setActiveUnit(null);
                }}
              >
                <span className="units-page-navigation-city-icon" />
                City
              </a>
            </li>
            <li>
              <a
                href="#type2"
                className={`units-page-navigation-port ${activeType === 'type2' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveType('type2');
                  setActiveUnit(null);
                }}
              >
                <span className="units-page-navigation-port-icon" />
                Port
              </a>
            </li>
          </ul>
        </div>

        <div className="units-page-navigation-unit">
          <ul className="flex flex-wrap justify-center gap-4">
            {currentUnits.map((unit) => (
              <li key={unit.id}>
                <a
                  href={`#${unit.id}`}
                  className={`units-page-navigation-forest ${activeUnit === unit.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveUnit(unit.id);
                  }}
                >
                  <span
                    className={`units-page-navigation-forest-icon ${unit.iconClass}`}
                  />
                  {unit.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <UnitsPanel unitId={activeUnit} data={unitDescriptions} />
      <UnitsStats
        unitId={activeUnit}
        statsData={unitStats}
        skillsData={unitSkills}
      />
    </>
  );
};

export default UnitsNavigation;
