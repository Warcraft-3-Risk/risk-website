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
  { id: 'major', label: 'Major', iconClass: 'icon-major' },
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
      'Rifleman forms the backbone of your army, providing a solid, basic attack force. They are best used in large numbers and supported by other units such as Medics and Mortars. They are the main fighting force for land battles in the game. \n\nStrengths: \nHigh ranged DPS, long attack range, scales well in numbers. \n\nWeaknesses: \nLow health and armor, Vulnerable to fast or diving units, Positioning dependent.',
    image: '/images/icons/characters/rifleman.webp',
    imageClass: 'units-page-panel-rifleman-image',
  },
  medic: {
    name: 'Medic',
    description:
      'Medic is a support unit primarily used for healing. While it has a small amount of damage, its main role is to keep your other units alive during combat with its Heal ability. \n\nStrengths: \nHeals nearby friendly units, Great force multiplier in drawn-out fights, Increases overall army longevity. \n\nWeaknesses: \nNo offensive capabilities, Low health and defense, Relies heavily on protection and positioning',
    image: '/images/icons/characters/Medic-unit.webp',
    imageClass: 'units-page-panel-medic-image',
  },
  mortar: {
    name: 'Mortar',
    description:
      'The Mortar is a siege unit with a long range that deals splash damage, making it effective against groups of enemies. It can also attack the ground and target trees, creating alternative openings on the map. It is slower than other units and has no armor, making it vulnerable if caught out of position. \n\nStrengths: \nHigh area damage, Long range, Effective against buildings and grouped units. \n\nWeaknesses: \nSlow rate of fire, Vulnerable to fast units, Requires protection from front-line units.',
    image: '/images/icons/characters/Mortar-unit.webp',
    imageClass: 'units-page-panel-mortar-image',
  },
  roarer: {
    name: 'Roarer',
    description:
      'The Roarer is a Magic type unit. Its primary combat abilities are Roar, which increases the damage of nearby friendly units, and Dispel Magic. Along with its base damage, the Roar ability makes it a valuable support unit in battles. \n\nStrengths: \nDisruption ability, High mobility, Effective against clustered units. \n\nWeaknesses: \nLow damage output, Vulnerable to ranged units, Requires careful positioning to maximize impact.',
    image: '/images/icons/characters/Roarer-unit.webp',
    imageClass: 'units-page-panel-roarer-image',
  },
  knight: {
    name: 'Knight',
    description:
      'The Knight is a melee unit with high damage and health. The "Frenzy" ability increases both its attack speed and movement speed, making it a powerful unit for engaging enemies quickly and dealing substantial damage in close combat. \n\nStrengths: \nHigh health and armor, Good mobility, Versatile in most compositions. \n\nWeaknesses: \nModerate damage output, Vulnerable to ranged units, Requires support to maximize effectiveness.',
    image: '/images/icons/characters/Knight-unit.webp',
    imageClass: 'units-page-panel-knight-image',
  },
  general: {
    name: 'General',
    description:
      "The General is a powerful melee unit with high damage and health. It also possesses the 'Roar' and 'Frenzy' abilities, enhancing the damage of nearby units and increasing its own attack and movement speed. It is a costly but strong unit, best used in critical situations. \n\nStrengths: \nBuffs nearby units, Improves overall army performance, Can turn the tide of battle. \n\nWeaknesses: \nFragile and vulnerable, No offensive capabilities, Requires protection and positioning to maximize effectiveness.",
    image: '/images/icons/characters/General-unit.webp',
    imageClass: 'units-page-panel-general-image',
  },
  artillery: {
    name: 'Artillery',
    description:
      "The Artillery is a siege unit with a very long range, capable of dealing splash damage to enemies in a 170 range. It can also attack the ground and target trees, creating alternative openings on the map. It's defensively weak with no armor and slow movement speed, making it vulnerable if not properly protected. \n\nStrengths: \nHigh damage output, Long range, Effective against buildings and clustered units. \n\nWeaknesses: \nSlow setup time, Vulnerable to fast units, Requires protection from front-line units.",
    image: '/images/icons/characters/Artillery-unit.webp',
    imageClass: 'units-page-panel-artillery-image',
  },
  tank: {
    name: 'Tank',
    description:
      'The Tank is a high-cost, durable siege unit. Tt possesses significant hitpoints and regeneration, making it resilient in prolonged battles. With a moderate range of 500 and splash damage (90 Range), it excels at dealing sustained damage to clustered enemies. While powerful, Tanks are slower and cannot attack trees. Best used in mass and with support, they form a strong, albeit expensive, frontline force. Be sure to micro weak tanks back so they can heal. \n\nStrengths: \nHigh health and armor, Strong against most units, Can lead charges or anchor positions. \n\nWeaknesses: \nSlow movement speed, Vulnerable to anti-armor units, Requires support to maximize effectiveness.',
    image: '/images/icons/characters/Tank-unit.webp',
    imageClass: 'units-page-panel-tank-image',
  },
  marine: {
    name: 'Marine',
    description:
      'The Marine is the basic naval ground combat unit. It has standard damage, range, and speed. As the core of your naval ground forces, it is most effective when deployed in groups. \n\nStrengths: \nGood ranged damage, Versatile in land and sea, Effective against lightly armored targets. \n\nWeaknesses: \nLow health and armor, Vulnerable to fast or diving units, Positioning dependent.',
    image: '/images/icons/characters/marine-unit.webp',
    imageClass: 'units-page-panel-marine-image',
  },
  major: {
    name: 'Major',
    description:
      "The Major is a melee naval unit. It has high damage and hitpoints and the 'Frenzy' ability, which increases its attack and movement speed. It's ideal for aggressive pushes and engaging enemy ships at close range. \n\nStrengths: \nHigh damage output, Good mobility, Effective against most naval units. \n\nWeaknesses: \nVulnerable to ranged units, Requires support to maximize effectiveness, Limited range.",
    image: '/images/icons/characters/major-unit.webp',
    imageClass: 'units-page-panel-major-image',
  },
  admiral: {
    name: 'Admiral',
    description:
      'The Admiral is another melee naval unit, stronger than the Major. It boasts higher damage and hitpoints, and the "Beserk" ability. It is a powerful choice for leading naval assaults. \n\nStrengths: \nBuffs nearby sea units, Improves overall fleet performance, Can turn the tide of naval battles. \n\nWeaknesses: \nFragile and vulnerable, No offensive capabilities, Requires protection and positioning to maximize effectiveness.',
    image: '/images/icons/characters/admiral-unit.webp',
    imageClass: 'units-page-panel-admiral-image',
  },
  'transport-ship': {
    name: 'Transport Ship',
    description:
      "The Transport Ship is used for transporting land units across water. It has a capacity to load 10 units. It's lightly armored and fast, making it suitable for quickly moving troops but vulnerable to attacks. \n\nStrengths: \nEssential for amphibious assaults, Can carry multiple units, Useful for repositioning forces. \n\nWeaknesses: \nNo offensive capabilities, Highly vulnerable to enemy fire, Requires protection and positioning to maximize effectiveness.",
    image: '/images/icons/characters/TransportShip_icon.webp',
    imageClass: 'units-page-panel-transport-ship-image',
  },
  'armoured-transport-ship': {
    name: 'Armoured Transport Ship',
    description:
      'The Armoured Transport Ship is an upgraded version of the Transport Ship. It has significantly higher hitpoints and speed while still carrying 10 units. It offers better protection for transporting troops. \n\nStrengths: \nHigh durability, Can carry multiple units, Useful for amphibious assaults. \n\nWeaknesses: \nSlow movement speed, Limited offensive capabilities, Requires protection and positioning to maximize effectiveness.',
    image: '/images/icons/characters/Armoured_Transport_Ship_image.webp',
  },
  'warship-a': {
    name: 'Warship A',
    description:
      "Warship A is an early game naval unit with decent range and splash damage. It's useful for engaging early enemy ships or attacking clustered groups, but it is vulnerable later in the game. \n\nStrengths: \nHigh mobility, Fast attack speed, Effective against transports and light ships. \n\nWeaknesses: \nLow health and armor, Vulnerable to heavier ships, Requires support to maximize effectiveness.",
    image: '/images/icons/characters/rifleman.webp',
  },
  'warship-b': {
    name: 'Warship B',
    description:
      'Warship B is a strong naval unit with high damage and a shorter range. Its attacks cannot be dodged. It excels at chasing down and eliminating enemy ships, including vulnerable Battleships SS, thanks to its speed and damage. \n\nStrengths: \nBalanced stats, Effective against most naval units, Versatile in fleet compositions. \n\nWeaknesses: \nVulnerable to focused fire, Requires support to maximize effectiveness, Limited mobility compared to lighter ships.',
    image: '/images/icons/characters/rifleman.webp',
  },
  'battleship-ss': {
    name: 'Battleship SS',
    description:
      'The Battleship SS is the most powerful naval unit. It has very long range, high damage, and significant hitpoints with splash damage. It serves as the king of the seas in the late game, able to dominate naval battles. \n\nStrengths: \nHigh damage output, Long range, Effective against most naval units. \n\nWeaknesses: \nSlow movement speed, High cost, Vulnerable to focused fire and air attacks.',
    image: '/images/icons/characters/rifleman.webp',
  },
};
