export const unitStats: Record<
  string,
  {
    health: { value: number; icon: string };
    attack: { value: number; icon: string };
    armor: { value: number; icon: string };
  }
> = {
  rifleman: {
    health: { value: 200, icon: '/images/icons/skills/health-icon.webp' },
    attack: {
      value: 20,
      icon: '/images/icons/skills/rifleman-damage-icon.webp',
    },
    armor: { value: 0, icon: '/images/icons/skills/rifleman-armor-class.webp' },
  },
  medic: {
    health: { value: 250, icon: '/images/icons/skills/health-icon.webp' },
    attack: { value: 9, icon: '/images/icons/skills/medic-damage-type.webp' },
    armor: { value: 0, icon: '/images/icons/skills/medic-armor-type.webp' },
  },
  mortar: {
    health: { value: 350, icon: '/images/icons/skills/health-icon.webp' },
    attack: { value: 25, icon: '/images/icons/skills/mortar-damage-type.webp' },
    armor: { value: 0, icon: '/images/icons/skills/armor-heavy-icon.webp' },
  },
  roarer: {
    health: { value: 425, icon: '/images/icons/skills/health-icon.webp' },
    attack: { value: 31, icon: '/images/icons/skills/medic-damage-type.webp' },
    armor: { value: 0, icon: '/images/icons/skills/medic-armor-type.webp' },
  },
  knight: {
    health: { value: 900, icon: '/images/icons/skills/health-icon.webp' },
    attack: {
      value: 43,
      icon: '/images/icons/skills/attack-normal-icon.webp',
    },
    armor: { value: 0, icon: '/images/icons/skills/armor-heavy-icon.webp' },
  },
  general: {
    health: { value: 1300, icon: '/images/icons/skills/health-icon.webp' },
    attack: { value: 62, icon: '/images/icons/skills/attack-normal-icon.webp' },
    armor: { value: 0, icon: '/images/icons/skills/armor-heavy-icon.webp' },
  },
  artillery: {
    health: { value: 1000, icon: '/images/icons/skills/health-icon.webp' },
    attack: {
      value: 62,
      icon: '/images/icons/skills/rifleman-damage-icon.webp',
    },
    armor: { value: 0, icon: '/images/icons/skills/medic-armor-type.webp' },
  },
  tank: {
    health: { value: 2600, icon: '/images/icons/skills/health-icon.webp' },
    attack: { value: 64, icon: '/images/icons/skills/mortar-damage-type.webp' },
    armor: { value: 0, icon: '/images/icons/skills/armor-light-icon.webp' },
  },
  marine: {
    health: { value: 215, icon: '/images/icons/skills/health-icon.webp' },
    attack: {
      value: 14,
      icon: '/images/icons/skills/rifleman-damage-icon.webp',
    },
    armor: { value: 0, icon: '/images/icons/skills/armor-light-icon.webp' },
  },
  admiral: {
    health: { value: 900, icon: '/images/icons/skills/health-icon.webp' },
    attack: { value: 48, icon: '/images/icons/skills/attack-normal-icon.webp' },
    armor: { value: 0, icon: '/images/icons/skills/medic-armor-type.webp' },
  },
  'transport-ship': {
    health: { value: 300, icon: '/images/icons/skills/health-icon.webp' },
    attack: { value: 0, icon: '/images/icons/skills/medic-damage-type.webp' },
    armor: { value: 0, icon: '/images/icons/skills/armor-heavy-icon.webp' },
  },
  'armoured-transport-ship': {
    health: { value: 800, icon: '/images/icons/skills/health-icon.webp' },
    attack: { value: 0, icon: '/images/icons/skills/medic-damage-type.webp' },
    armor: { value: 0, icon: '/images/icons/skills/armor-heavy-icon.webp' },
  },
  'warship-a': {
    health: { value: 550, icon: '/images/icons/skills/health-icon.webp' },
    attack: { value: 38, icon: '/images/icons/skills/attack-normal-icon.webp' },
    armor: { value: 0, icon: '/images/icons/skills/armor-heavy-icon.webp' },
  },
  'warship-b': {
    health: { value: 2000, icon: '/images/icons/skills/health-icon.webp' },
    attack: { value: 98, icon: '/images/icons/skills/attack-normal-icon.webp' },
    armor: { value: 0, icon: '/images/icons/skills/armor-heavy-icon.webp' },
  },
  'battleship-ss': {
    health: { value: 5000, icon: '/images/icons/skills/health-icon.webp' },
    attack: {
      value: 138,
      icon: '/images/icons/skills/attack-normal-icon.webp',
    },
    armor: { value: 0, icon: '/images/icons/skills/armor-heavy-icon.webp' },
  },
};

export const unitSkills = {
  medic: [{ icon: '/images/icons/skills/medic-skill-icon.webp' }],
  mortar: [{ icon: '/images/icons/skills/AttackGround-icon.webp' }],
  roarer: [
    { icon: '/images/icons/skills/BattleRoar-icon.webp' },
    { icon: '/images/icons/skills/Dispelmagic-icon.webp' },
  ],
  knight: [{ icon: '/images/icons/skills/BloodLust-icon.webp' }],
  general: [
    { icon: '/images/icons/skills/BattleRoar-icon.webp' },
    { icon: '/images/icons/skills/BloodLust-icon.webp' },
  ],
  artillery: [{ icon: '/images/icons/skills/AttackGround-icon.webp' }],
};
