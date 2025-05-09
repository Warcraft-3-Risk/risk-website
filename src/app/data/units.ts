export const landUnits = [
  { id: 'rifleman', label: 'Rifleman', iconClass: 'icon-rifleman' },
  { id: 'medic', label: 'Medic', iconClass: 'icon-medic' },
  { id: 'mortar', label: 'Mortar', iconClass: 'icon-mortar' },
  { id: 'roarer', label: 'Roarer', iconClass: 'icon-roarer' },
  { id: 'knight', label: 'Knight', iconClass: 'icon-knight' },
  { id: 'general', label: 'General', iconClass: 'icon-general' },
  { id: 'artillery', label: 'Artillery', iconClass: 'icon-artillery' },
  { id: 'tank', label: 'Tank', iconClass: 'icon-tank' },
];

export const seaUnits = [
  { id: 'transport-ship', label: 'TS', iconClass: 'icon-transport-ship' },
  {
    id: 'armoured-transport-ship',
    label: 'ATS',
    iconClass: 'icon-armoured-transport-ship',
  },
  { id: 'warship-a', label: 'Warship A', iconClass: 'icon-warship-a' },
  { id: 'warship-b', label: 'Warship B', iconClass: 'icon-warship-b' },
  {
    id: 'battleship-ss',
    label: 'Battleship SS',
    iconClass: 'icon-battleship-ss',
  },
];

export const unitDescriptions: Record<
  string,
  { name: string; description: string; image?: string; imageClass?: string }
> = {
  rifleman: {
    name: 'Rifleman',
    description:
      'The brave Dwarven Riflemen have faithfully protected their mountain kingdom of Khaz Modan for hundreds of years. Yet they have once again offered their weapons and skills to the Alliance of Lordaeron. Using the legendary Single-shot Blunderbuss Longrifles, Riflemen are excellent marksmen and can shoot both land based and airborne opponents. The rifleman stands out amongst other ranged units with his very short attack animation and instant damage. This allows an experienced player to micro them effectively.',
    image: '/images/rifleman.webp',
    imageClass: 'units-page-panel-rifleman-image',
  },
  medic: {
    name: 'Medic',
    description: 'Heals friendly units on the battlefield.',
    image: '/images/Medic-unit.webp',
    imageClass: 'units-page-panel-medic-image',
  },
  mortar: {
    name: 'Mortar',
    description: 'Launches explosive shells from afar.',
    image: '/images/Mortar-unit.webp',
    imageClass: 'units-page-panel-mortar-image',
  },
  roarer: {
    name: 'Roarer',
    description: 'Intimidates enemies and lowers morale.',
    image: '/images/Roarer-unit.webp',
    imageClass: 'units-page-panel-roarer-image',
  },
  knight: {
    name: 'Knight',
    description: 'Heavy armor and powerful melee attacks.',
    image: '/images/Knight-unit.webp',
    imageClass: 'units-page-panel-knight-image',
  },
  general: {
    name: 'General',
    description: 'Boosts the effectiveness of nearby troops.',
    image: '/images/General-unit.webp',
    imageClass: 'units-page-panel-general-image',
  },
  artillery: {
    name: 'Artillery',
    description: 'Long-range unit for heavy bombardment.',
    image: '/images/Artillery-unit.webp',
    imageClass: 'units-page-panel-artillery-image',
  },
  tank: {
    name: 'Tank',
    description: 'High-durability unit with strong firepower.',
    image: '/images/Tank-unit.webp',
    imageClass: 'units-page-panel-tank-image',
  },
  'transport-ship': {
    name: 'Transport Ship',
    description: 'Carries troops across water.',
    image: '/images/rifleman.webp',
  },
  'armoured-transport-ship': {
    name: 'Armoured Transport Ship',
    description: 'Heavily protected transport vessel.',
    image: '/images/rifleman.webp',
  },
  'warship-a': {
    name: 'Warship A',
    description: 'Versatile attack ship with moderate range.',
    image: '/images/rifleman.webp',
  },
  'warship-b': {
    name: 'Warship B',
    description: 'Advanced warship with strong firepower.',
    image: '/images/rifleman.webp',
  },
  'battleship-ss': {
    name: 'Battleship SS',
    description: 'Super-heavy ship with devastating weapons.',
    image: '/images/rifleman.webp',
  },
};

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
    armor: { value: 0, icon: '/images/icons/rifleman-damage-icon.webp' },
  },
  medic: {
    health: { value: 250, icon: '/images/icons/health-icon.webp' },
    attack: { value: '9 - 9', icon: '/images/icon-attack-sword.webp' },
    armor: { value: 0, icon: '/images/icon  armor-shield.webp' },
  },
  mortar: {
    health: { value: 350, icon: '/images/icons/health-icon.webp' },
    attack: { value: '25 - 25', icon: '/images/icon-attack-sword.webp' },
    armor: { value: 0, icon: '/images/icon  armor-shield.webp' },
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
  rifleman: [
    { icon: '/images/icons/rifleman-damage-icon.webp' },
    { icon: '/images/icons/rifleman-damage-icon.webp' },
  ],
  medic: [{ icon: '/images/icons/medic-skill-icon.webp' }],
};
