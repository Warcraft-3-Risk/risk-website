export const unitStats: Record<
  string,
  {
    health: { value: number; icon: string };
    attack: { value: string; icon: string };
    armor: { value: number; icon: string };
  }
> = {
  rifleman: {
    health: { value: 200, icon: '/images/icons/health-icon.webp' },
    attack: {
      value: '20 - 20',
      icon: '/images/icons/rifleman-damage-icon.webp',
    },
    armor: { value: 0, icon: '/images/icons/rifleman-armor-class.webp' },
  },
  medic: {
    health: { value: 250, icon: '/images/icons/health-icon.webp' },
    attack: { value: '9 - 9', icon: '/images/icons/medic-damage-type.webp' },
    armor: { value: 0, icon: '/images/icons/medic-armor-type.webp' },
  },
  mortar: {
    health: { value: 350, icon: '/images/icons/health-icon.webp' },
    attack: { value: '25 - 25', icon: '/images/icons/mortar-damage-type.webp' },
    armor: { value: 0, icon: '/images/icons/armor-heavy-icon.webp' },
  },
  roarer: {
    health: { value: 425, icon: '/images/icons/health-icon.webp' },
    attack: { value: '31 - 31', icon: '/images/icons/medic-damage-type.webp' },
    armor: { value: 0, icon: '/images/icons/medic-armor-type.webp' },
  },
  knight: {
    health: { value: 900, icon: '/images/icons/health-icon.webp' },
    attack: {
      value: '43 - 43',
      icon: '/images/icons/attack-normal-icon.webp',
    },
    armor: { value: 0, icon: '/images/icons/armor-heavy-icon.webp' },
  },
  general: {
    health: { value: 1300, icon: '/images/icons/health-icon.webp' },
    attack: { value: '62 - 62', icon: '/images/icons/attack-normal-icon.webp' },
    armor: { value: 0, icon: '/images/icons/armor-heavy-icon.webp' },
  },
  artillery: {
    health: { value: 1000, icon: '/images/icons/health-icon.webp' },
    attack: {
      value: '62 - 62',
      icon: '/images/icons/rifleman-damage-icon.webp',
    },
    armor: { value: 0, icon: '/images/icons/medic-armor-type.webp' },
  },
  tank: {
    health: { value: 2600, icon: '/images/icons/health-icon.webp' },
    attack: { value: '64 - 64', icon: '/images/icons/mortar-damage-type.webp' },
    armor: { value: 0, icon: '/images/icons/armor-light-icon.webp' },
  },
};

export const unitSkills = {
  medic: [{ icon: '/images/icons/medic-skill-icon.webp' }],
  mortar: [{ icon: '/images/icons/AttackGround-icon.webp' }],
  roarer: [
    { icon: '/images/icons/BattleRoar-icon.webp' },
    { icon: '/images/icons/DispelMagic-icon.webp' },
  ],
  knight: [{ icon: '/images/icons/BloodLust-icon.webp' }],
  general: [
    { icon: '/images/icons/BattleRoar-icon.webp' },
    { icon: '/images/icons/BloodLust-icon.webp' },
  ],
  artillery: [{ icon: '/images/icons/AttackGround-icon.webp' }],
};
