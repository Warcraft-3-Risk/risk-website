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
    armor: { value: 0, icon: '/images/icons/rifleman-armor-class.webp' },
  },
  roarer: {
    health: { value: 425, icon: '/images/icons/health-icon.webp' },
    attack: { value: '31 - 31', icon: '/images/icon-attack-sword.webp' },
    armor: { value: 0, icon: '/images/icon  armor-shield.webp' },
  },
  knight: {
    health: { value: 900, icon: '/images/icons/health-icon.webp' },
    attack: { value: '43 - 43', icon: '/images/icon-attack-sword.webp' },
    armor: { value: 0, icon: '/images/icon  armor-shield.webp' },
  },
  general: {
    health: { value: 1300, icon: '/images/icons/health-icon.webp' },
    attack: { value: '62 - 62', icon: '/images/icon-attack-sword.webp' },
    armor: { value: 0, icon: '/images/icon  armor-shield.webp' },
  },
  artillery: {
    health: { value: 1000, icon: '/images/icons/health-icon.webp' },
    attack: { value: '62 - 62', icon: '/images/icon-attack-sword.webp' },
    armor: { value: 0, icon: '/images/icon  armor-shield.webp' },
  },
  tank: {
    health: { value: 2600, icon: '/images/icons/health-icon.webp' },
    attack: { value: '64 - 64', icon: '/images/icon-attack-sword.webp' },
    armor: { value: 0, icon: '/images/icon  armor-shield.webp' },
  },
};

export const unitSkills = {
  medic: [{ icon: '/images/icons/medic-skill-icon.webp' }],
};
