export const landUnits = [
  { id: 'rifleman', label: 'Riflemen', iconClass: 'icon-rifleman' },
  { id: 'medic', label: 'Medic', iconClass: 'icon-medic' },
  { id: 'mortar', label: 'Mortar', iconClass: 'icon-mortar' },
  { id: 'roarer', label: 'Roarer', iconClass: 'icon-roarer' },
  { id: 'knight', label: 'Knight', iconClass: 'icon-knight' },
  { id: 'general', label: 'General', iconClass: 'icon-general' },
  { id: 'artillery', label: 'Artillery', iconClass: 'icon-artillery' },
  { id: 'tank', label: 'Tank', iconClass: 'icon-tank' },
];

export const seaUnits = [
  { id: 'marine', label: 'Marine', iconClass: 'icon-marine' },
  { id: 'admiral', label: 'Admiral', iconClass: 'icon-admiral' },
  { id: 'transport-ship', label: 'TS', iconClass: 'icon-transport-ship' },
  {
    id: 'armoured-transport-ship',
    label: 'ATS',
    iconClass: 'icon-armoured-transport-ship',
  },
  { id: 'warship-a', label: 'WarshipA', iconClass: 'icon-warship-a' },
  { id: 'warship-b', label: 'WarshipB', iconClass: 'icon-warship-b' },
  {
    id: 'battleship-ss',
    label: 'BattleshipSS',
    iconClass: 'icon-battleship-ss',
  },
];

export const unitDescriptions: Record<
  string,
  { name: string; description: string; image?: string; imageClass?: string }
> = {
  rifleman: {
    name: 'Riflemen',
    description:
      'The brave Dwarven Riflemen have faithfully protected their mountain kingdom of Khaz Modan for hundreds of years. Yet they have once again offered their weapons and skills to the Alliance of Lordaeron. \n\nUsing the legendary Single-shot Blunderbuss Longrifles, Riflemen are excellent marksmen and can shoot both land based and airborne opponents.',
    image: '/images/icons/characters/rifleman.webp',
    imageClass: 'units-page-panel-rifleman-image',
  },
  medic: {
    name: 'Medic',
    description:
      'Priests can be a very important part of a Human army. While Healing and Dispel can be very useful many prefer Priests for their Inner Fire ability. Inner Fire can be an alternative to Orc Shaman Bloodlust and especially useful in team games. \n\nHealing can help return units to full health saving you the cost of replacing them. Dispel Magic is useful for countering powerful spells such as Bloodlust and Slow. Dispel Magic is also useful against Skeleton and other summoned units.',
    image: '/images/icons/characters/Medic-unit.webp',
    imageClass: 'units-page-panel-medic-image',
  },
  mortar: {
    name: 'Mortar',
    description:
      'Armed with their innovative exploding shells, the stalwart Mortar Teams of Ironforge are capable of blasting apart enemy ranks from long range. These fearless dwarves are masters of explosive devices and relish in pounding fortified enemy emplacements to dust. \n\nMortar Teams have the largest area of effect damage of all the siege units. Mortar Teams are good at killing buildings. Bring them along when you are assaulting an enemy town. Mortar Teams cannot attack air units.',
    image: '/images/icons/characters/Mortar-unit.webp',
    imageClass: 'units-page-panel-mortar-image',
  },
  roarer: {
    name: 'Roarer',
    description: 'Intimidates enemies and lowers morale.',
    image: '/images/icons/characters/Roarer-unit.webp',
    imageClass: 'units-page-panel-roarer-image',
  },
  knight: {
    name: 'Knight',
    description: 'Heavy armor and powerful melee attacks.',
    image: '/images/icons/characters/Knight-unit.webp',
    imageClass: 'units-page-panel-knight-image',
  },
  general: {
    name: 'General',
    description: 'Boosts the effectiveness of nearby troops.',
    image: '/images/icons/characters/General-unit.webp',
    imageClass: 'units-page-panel-general-image',
  },
  artillery: {
    name: 'Artillery',
    description: 'Long-range unit for heavy bombardment.',
    image: '/images/icons/characters/Artillery-unit.webp',
    imageClass: 'units-page-panel-artillery-image',
  },
  tank: {
    name: 'Tank',
    description: 'High-durability unit with strong firepower.',
    image: '/images/icons/characters/Tank-unit.webp',
    imageClass: 'units-page-panel-tank-image',
  },
  marine: {
    name: 'Marine',
    description: 'Versatile unit with both ranged and melee attacks.',
    image: '/images/icons/characters/marine-unit.webp',
    imageClass: 'units-page-panel-marine-image',
  },
  admiral: {
    name: 'Admiral',
    description: 'Leads naval forces with strategic advantage.',
    image: '/images/icons/characters/admiral-unit.webp',
    imageClass: 'units-page-panel-admiral-image',
  },
  'transport-ship': {
    name: 'Transport Ship',
    description: 'Carries troops across water.',
    image: '/images/icons/characters/TransportShip_icon.webp',
    imageClass: 'units-page-panel-transport-ship-image',
  },
  'armoured-transport-ship': {
    name: 'Armoured Transport Ship',
    description: 'Heavily protected transport vessel.',
    image: '/images/icons/characters/Armoured_Transport_Ship_image.webp',
  },
  'warship-a': {
    name: 'Warship A',
    description: 'Versatile attack ship with moderate range.',
    image: '/images/icons/characters/rifleman.webp',
  },
  'warship-b': {
    name: 'Warship B',
    description: 'Advanced warship with strong firepower.',
    image: '/images/icons/characters/rifleman.webp',
  },
  'battleship-ss': {
    name: 'Battleship SS',
    description: 'Super-heavy ship with devastating weapons.',
    image: '/images/icons/characters/rifleman.webp',
  },
};
