'use client';

import {
  landUnits,
  seaUnits,
  unitDescriptions,
} from '@/app/how-to/units-page/unit-info/units';
import {
  unitSkills,
  unitStats,
} from '@/app/how-to/units-page/unit-info/unitStats';
import '@/core/SCSS/base/layout/page/units-page/p-units-page-icons.scss';
import '@/core/SCSS/base/layout/page/units-page/p-units-page.scss';
import React, { useEffect, useRef, useState } from 'react';
import UnitsPanel from './UnitsPanel';
import UnitsStats from './UnitsStats';

const UnitsNavigation: React.FC = () => {
  const [activeType, setActiveType] = useState<'type1' | 'type2'>('type1');
  const [activeUnit, setActiveUnit] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const currentUnits = activeType === 'type1' ? landUnits : seaUnits;

  useEffect(() => {
    if (activeUnit && panelRef.current) {
      const offset = -100;
      const top =
        panelRef.current.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [activeUnit]);

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
                  className={`units-page-navigation-unitinfo ${activeUnit === unit.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveUnit(unit.id);
                  }}
                >
                  <span
                    className={`units-page-navigation-unitinfo-icon ${unit.iconClass}`}
                  />
                  {unit.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div ref={panelRef}>
        <UnitsPanel unitId={activeUnit} data={unitDescriptions} />
        <UnitsStats
          unitId={activeUnit}
          statsData={unitStats}
          skillsData={unitSkills}
        />
      </div>
    </>
  );
};

export default UnitsNavigation;
