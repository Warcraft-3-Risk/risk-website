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
    name: 'Riflemen',
    description:
      'The brave Dwarven Riflemen have faithfully protected their mountain kingdom of Khaz Modan for hundreds of years. Yet they have once again offered their weapons and skills to the Alliance of Lordaeron. \n\nUsing the legendary Single-shot Blunderbuss Longrifles, Riflemen are excellent marksmen and can shoot both land based and airborne opponents.',
    image: '/images/rifleman.webp',
    imageClass: 'units-page-panel-rifleman-image',
  },
  medic: {
    name: 'Medic',
    description:
      'Priests can be a very important part of a Human army. While Healing and Dispel can be very useful many prefer Priests for their Inner Fire ability. Inner Fire can be an alternative to Orc Shaman Bloodlust and especially useful in team games. \n\nHealing can help return units to full health saving you the cost of replacing them. Dispel Magic is useful for countering powerful spells such as Bloodlust and Slow. Dispel Magic is also useful against Skeleton and other summoned units.',
    image: '/images/Medic-unit.webp',
    imageClass: 'units-page-panel-medic-image',
  },
  mortar: {
    name: 'Mortar',
    description:
      'Armed with their innovative exploding shells, the stalwart Mortar Teams of Ironforge are capable of blasting apart enemy ranks from long range. These fearless dwarves are masters of explosive devices and relish in pounding fortified enemy emplacements to dust. \n\nMortar Teams have the largest area of effect damage of all the siege units. Mortar Teams are good at killing buildings. Bring them along when you are assaulting an enemy town. Mortar Teams cannot attack air units.',
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
    image: '/images/icons/TransportShip_icon.webp',
    imageClass: 'units-page-panel-transport-ship-image',
  },
  'armoured-transport-ship': {
    name: 'Armoured Transport Ship',
    description: 'Heavily protected transport vessel.',
    image: '/images/icons/Armoured_Transport_Ship_image.webp',
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
