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
  { name: string; description: string; image?: string }
> = {
  rifleman: {
    name: 'Rifleman',
    description:
      'Basic ground unit with good range. Basic ground unit with good range. Basic ground unit with good range. Basic ground unit with good range. Basic ground unit with good range.',
    image: '/images/rifleman.webp',
  },
  medic: {
    name: 'Medic',
    description: 'Heals friendly units on the battlefield.',
    image: '/images/rifleman.webp',
  },
  mortar: {
    name: 'Mortar',
    description: 'Launches explosive shells from afar.',
    image: '/images/rifleman.webp',
  },
  roarer: {
    name: 'Roarer',
    description: 'Intimidates enemies and lowers morale.',
    image: '/images/rifleman.webp',
  },
  knight: {
    name: 'Knight',
    description: 'Heavy armor and powerful melee attacks.',
    image: '/images/rifleman.webp',
  },
  general: {
    name: 'General',
    description: 'Boosts the effectiveness of nearby troops.',
    image: '/images/rifleman.webp',
  },
  artillery: {
    name: 'Artillery',
    description: 'Long-range unit for heavy bombardment.',
    image: '/images/rifleman.webp',
  },
  tank: {
    name: 'Tank',
    description: 'High-durability unit with strong firepower.',
    image: '/images/rifleman.webp',
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
