import Image from 'next/image';
import React from 'react';

interface UnitsStatsProps {
  unitId: string | null;
  statsData: Record<
    string,
    {
      health: { value: number; icon: string };
      attack: { value: string; icon: string };
      armor: { value: number; icon: string };
    }
  >;
  skillsData: Record<string, { icon: string }[]>;
}

const UnitsStats: React.FC<UnitsStatsProps> = ({
  unitId,
  statsData,
  skillsData,
}) => {
  if (!unitId || !statsData[unitId]) return null;

  const stats = statsData[unitId];
  const skills = skillsData[unitId] || [];

  return (
    <section className="units-page-stats">
      <div className="units-page-stats-block">
        <div className="units-page-stats-block-content">
          <h2 className="units-page-stats-block-title">Stats</h2>
          <ul className="units-page-stats-list">
            {Object.entries(stats).map(([key, { value, icon }]) => (
              <li key={key} className="units-page-stats-list-item">
                <Image src={icon} alt={key} width={48} height={48} />
                <div className="units-page-stats-list-text">
                  <span className="units-page-stats-list-label">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </span>
                  <span className="units-page-stats-list-value">{value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="units-page-stats-skills">
        <div className="units-page-stats-skills-content">
          <h2 className="units-page-stats-skills-title">Skills</h2>
          {skills && skills.length > 0 ? (
            <div className="skills-icons flex gap-2">
              {skills.map((skill, index) => (
                <Image
                  key={index}
                  src={skill.icon}
                  alt={`Skill ${index + 1}`}
                  width={48}
                  height={48}
                />
              ))}
            </div>
          ) : (
            <p className="units-page-stats-skills-fallback">
              This unit has no unique skills.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default UnitsStats;
