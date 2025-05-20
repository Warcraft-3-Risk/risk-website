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
      'Core ranged infantry with strong sustained damage at long range. Best used behind front-line units, Riflemen excel against lightly armored targets. Though fragile and immobile, they perform well in groups and can pressure enemy lines safely from a distance. \n\nStrengths: \nHigh ranged DPS, long attack range, scales well in numbers. \n\nWeaknesses: \nLow health and armor, Vulnerable to fast or diving units, Positioning dependent.',
    image: '/images/icons/characters/rifleman.webp',
    imageClass: 'units-page-panel-rifleman-image',
  },
  medic: {
    name: 'Medic',
    description:
      "Support unit specializing in healing nearby allies over time. Medics improve army durability and are most effective when paired with front-line units. While they can't attack and are vulnerable on their own, proper positioning keeps them alive and your forces sustained during prolonged battles. \n\nStrengths: \nHeals nearby friendly units, Great force multiplier in drawn-out fights, Increases overall army longevity. \n\nWeaknesses: \nNo offensive capabilities, Low health and defense, Relies heavily on protection and positioning",
    image: '/images/icons/characters/Medic-unit.webp',
    imageClass: 'units-page-panel-medic-image',
  },
  mortar: {
    name: 'Mortar',
    description:
      'Long-range siege unit that deals area-of-effect damage. Mortars are excellent at breaking enemy formations and damaging clustered units or defensive structures. They require protection and time to set up, but reward careful use with high impact. \n\nStrengths: \nHigh area damage, Long range, Effective against buildings and grouped units. \n\nWeaknesses: \nSlow rate of fire, Vulnerable to fast units, Requires protection from front-line units.',
    image: '/images/icons/characters/Mortar-unit.webp',
    imageClass: 'units-page-panel-mortar-image',
  },
  roarer: {
    name: 'Roarer',
    description:
      'Disruption unit that specializes in breaking enemy lines and scattering formations. Roarers have a short-range shockwave ability that interrupts enemy plans and creates openings. Best used aggressively to disrupt ranged backlines or support key pushes. \n\nStrengths: \nDisruption ability, High mobility, Effective against clustered units. \n\nWeaknesses: \nLow damage output, Vulnerable to ranged units, Requires careful positioning to maximize impact.',
    image: '/images/icons/characters/Roarer-unit.webp',
    imageClass: 'units-page-panel-roarer-image',
  },
  knight: {
    name: 'Knight',
    description:
      'Durable front-line melee unit with solid all-around stats. Knights are ideal for holding the line and soaking up damage while other units deal damage from behind. Their strong defenses and mobility make them reliable in most compositions. \n\nStrengths: \nHigh health and armor, Good mobility, Versatile in most compositions. \n\nWeaknesses: \nModerate damage output, Vulnerable to ranged units, Requires support to maximize effectiveness.',
    image: '/images/icons/characters/Knight-unit.webp',
    imageClass: 'units-page-panel-knight-image',
  },
  general: {
    name: 'General',
    description:
      "Support command unit that boosts nearby allies with passive auras. Generals improve army performance through stat buffs, but must be kept alive to maintain their effects. They don't fight well themselves and need to be positioned safely. \n\nStrengths: \nBuffs nearby units, Improves overall army performance, Can turn the tide of battle. \n\nWeaknesses: \nFragile and vulnerable, No offensive capabilities, Requires protection and positioning to maximize effectiveness.",
    image: '/images/icons/characters/General-unit.webp',
    imageClass: 'units-page-panel-general-image',
  },
  artillery: {
    name: 'Artillery',
    description:
      'High-damage siege unit with extreme range and splash damage. Artillery excels at demolishing structures and punishing static enemy positions. Its slow movement and setup time make it vulnerable if caught out of position. \n\nStrengths: \nHigh damage output, Long range, Effective against buildings and clustered units. \n\nWeaknesses: \nSlow setup time, Vulnerable to fast units, Requires protection from front-line units.',
    image: '/images/icons/characters/Artillery-unit.webp',
    imageClass: 'units-page-panel-artillery-image',
  },
  tank: {
    name: 'Tank',
    description:
      'Heavily armored vehicle designed to absorb damage and break through enemy lines. Tanks are slow but hard to kill, making them excellent at leading charges or anchoring key positions. Vulnerable to focused anti-armor attacks or swarming. \n\nStrengths: \nHigh health and armor, Strong against most units, Can lead charges or anchor positions. \n\nWeaknesses: \nSlow movement speed, Vulnerable to anti-armor units, Requires support to maximize effectiveness.',
    image: '/images/icons/characters/Tank-unit.webp',
    imageClass: 'units-page-panel-tank-image',
  },
  marine: {
    name: 'Marine',
    description:
      'Amphibious infantry unit with solid ranged damage and flexibility across land and sea. Marines are ideal for island assaults or mixed terrain battles, but fall short in durability compared to heavier land units. \n\nStrengths: \nGood ranged damage, Versatile in land and sea, Effective against lightly armored targets. \n\nWeaknesses: \nLow health and armor, Vulnerable to fast or diving units, Positioning dependent.',
    image: '/images/icons/characters/marine-unit.webp',
    imageClass: 'units-page-panel-marine-image',
  },
  admiral: {
    name: 'Admiral',
    description:
      'Naval command unit that provides buffs to nearby sea units. Admirals improve fleet coordination and effectiveness but are fragile and must be well-protected. Best used in the center of a formation to maximize coverage. \n\nStrengths: \nBuffs nearby sea units, Improves overall fleet performance, Can turn the tide of naval battles. \n\nWeaknesses: \nFragile and vulnerable, No offensive capabilities, Requires protection and positioning to maximize effectiveness.',
    image: '/images/icons/characters/admiral-unit.webp',
    imageClass: 'units-page-panel-admiral-image',
  },
  'transport-ship': {
    name: 'Transport Ship',
    description:
      'Basic naval transport used to carry units across bodies of water. It has no weapons and is highly vulnerable, requiring escort. Essential for amphibious strategies and repositioning land forces. \n\nStrengths: \nEssential for amphibious assaults, Can carry multiple units, Useful for repositioning forces. \n\nWeaknesses: \nNo offensive capabilities, Highly vulnerable to enemy fire, Requires protection and positioning to maximize effectiveness.',
    image: '/images/icons/characters/TransportShip_icon.webp',
    imageClass: 'units-page-panel-transport-ship-image',
  },
  'armoured-transport-ship': {
    name: 'Armoured Transport Ship',
    description:
      'Heavily reinforced transport capable of delivering troops under fire. It trades speed for survivability and is best used in contested zones where regular transports would be too vulnerable. \n\nStrengths: \nHigh durability, Can carry multiple units, Useful for amphibious assaults. \n\nWeaknesses: \nSlow movement speed, Limited offensive capabilities, Requires protection and positioning to maximize effectiveness.',
    image: '/images/icons/characters/Armoured_Transport_Ship_image.webp',
  },
  'warship-a': {
    name: 'Warship A',
    description:
      'Fast-attack naval unit designed to chase down transports and light ships. Warship A offers high mobility and rapid firepower but lacks the punch to deal with heavier naval threats. Best used for scouting, harassment, and flanking maneuvers. \n\nStrengths: \nHigh mobility, Fast attack speed, Effective against transports and light ships. \n\nWeaknesses: \nLow health and armor, Vulnerable to heavier ships, Requires support to maximize effectiveness.',
    image: '/images/icons/characters/rifleman.webp',
  },
  'warship-b': {
    name: 'Warship B',
    description:
      'Mid-tier combat ship with balanced firepower and durability. Warship B can handle a variety of naval threats and excels in fleet engagements. It forms the backbone of most naval forces due to its adaptability. \n\nStrengths: \nBalanced stats, Effective against most naval units, Versatile in fleet compositions. \n\nWeaknesses: \nVulnerable to focused fire, Requires support to maximize effectiveness, Limited mobility compared to lighter ships.',
    image: '/images/icons/characters/rifleman.webp',
  },
  'battleship-ss': {
    name: 'Battleship SS',
    description:
      'Heavy naval unit with devastating firepower and high durability. The Battleship SS dominates open-water engagements and is excellent at bombarding coastal positions. However, its high cost and slow movement make it a significant investment. \n\nStrengths: \nHigh damage output, Long range, Effective against most naval units. \n\nWeaknesses: \nSlow movement speed, High cost, Vulnerable to focused fire and air attacks.',
    image: '/images/icons/characters/rifleman.webp',
  },
};
