
import { ElementData, Compounds, Note, Compound, WorkspaceElement } from './types';

export const allElements: ElementData[] = [
    { number: 1, symbol: 'H', name: 'Hydrogen', color: '#F9F9F9', category: 'nonmetal', frequency: 261.63 }, { number: 2, symbol: 'He', name: 'Helium', color: '#D4E8FF', category: 'noble', frequency: 269.63 }, { number: 3, symbol: 'Li', name: 'Lithium', color: '#E8C4C4', category: 'alkali', frequency: 277.63 }, { number: 4, symbol: 'Be', name: 'Beryllium', color: '#C4E8C4', category: 'alkaline', frequency: 285.63 }, { number: 5, symbol: 'B', name: 'Boron', color: '#F0E0C0', category: 'metalloid', frequency: 293.63 }, { number: 6, symbol: 'C', name: 'Carbon', color: '#5C5C5C', category: 'nonmetal', frequency: 301.63 }, { number: 7, symbol: 'N', name: 'Nitrogen', color: '#8C9EFF', category: 'nonmetal', frequency: 309.63 }, { number: 8, symbol: 'O', name: 'Oxygen', color: '#FF8A80', category: 'nonmetal', frequency: 317.63 }, { number: 9, symbol: 'F', name: 'Fluorine', color: '#B9FFB9', category: 'halogen', frequency: 325.63 }, { number: 10, symbol: 'Ne', name: 'Neon', color: '#FFD180', category: 'noble', frequency: 333.63 }, { number: 11, symbol: 'Na', name: 'Sodium', color: '#AA96DA', category: 'alkali', frequency: 341.63 }, { number: 12, symbol: 'Mg', name: 'Magnesium', color: '#8AFF8A', category: 'alkaline', frequency: 349.63 }, { number: 13, symbol: 'Al', name: 'Aluminum', color: '#C0C0C0', category: 'metal', frequency: 357.63 }, { number: 14, symbol: 'Si', name: 'Silicon', color: '#A0A0A0', category: 'metalloid', frequency: 365.63 }, { number: 15, symbol: 'P', name: 'Phosphorus', color: '#FF8080', category: 'nonmetal', frequency: 373.63 }, { number: 16, symbol: 'S', name: 'Sulfur', color: '#FFFF80', category: 'nonmetal', frequency: 381.63 }, { number: 17, symbol: 'Cl', name: 'Chlorine', color: '#80FF80', category: 'halogen', frequency: 389.63 }, { number: 18, symbol: 'Ar', name: 'Argon', color: '#FFB6C1', category: 'noble', frequency: 397.63 }, { number: 19, symbol: 'K', name: 'Potassium', color: '#E0B0FF', category: 'alkali', frequency: 405.63 }, { number: 20, symbol: 'Ca', name: 'Calcium', color: '#FFA07A', category: 'alkaline', frequency: 413.63 }, { number: 21, symbol: 'Sc', name: 'Scandium', color: '#E6E6E6', category: 'transition', frequency: 421.63 }, { number: 22, symbol: 'Ti', name: 'Titanium', color: '#BFC2C7', category: 'transition', frequency: 429.63 }, { number: 23, symbol: 'V', name: 'Vanadium', color: '#A6A6AB', category: 'transition', frequency: 437.63 }, { number: 24, symbol: 'Cr', name: 'Chromium', color: '#8A99C7', category: 'transition', frequency: 445.63 }, { number: 25, symbol: 'Mn', name: 'Manganese', color: '#9C7AC7', category: 'transition', frequency: 453.63 }, { number: 26, symbol: 'Fe', name: 'Iron', color: '#E06633', category: 'transition', frequency: 461.63 }, { number: 27, symbol: 'Co', name: 'Cobalt', color: '#F090A0', category: 'transition', frequency: 469.63 }, { number: 28, symbol: 'Ni', name: 'Nickel', color: '#B3D9B3', category: 'transition', frequency: 477.63 }, { number: 29, symbol: 'Cu', name: 'Copper', color: '#FFA040', category: 'transition', frequency: 485.63 }, { number: 30, symbol: 'Zn', 'name': 'Zinc', 'color': '#80C0C0', 'category': 'transition', frequency: 493.63 }, { number: 31, 'symbol': 'Ga', 'name': 'Gallium', 'color': '#C28F8F', 'category': 'metal', frequency: 501.63 }, { number: 32, 'symbol': 'Ge', 'name': 'Germanium', 'color': '#668F8F', 'category': 'metalloid', frequency: 509.63 }, { number: 33, 'symbol': 'As', 'name': 'Arsenic', 'color': '#BD80E0', 'category': 'metalloid', frequency: 517.63 }, { number: 34, 'symbol': 'Se', 'name': 'Selenium', 'color': '#FFA0A0', 'category': 'nonmetal', frequency: 525.63 }, { number: 35, 'symbol': 'Br', 'name': 'Bromine', 'color': '#A62929', 'category': 'halogen', frequency: 533.63 }, { number: 36, 'symbol': 'Kr', 'name': 'Krypton', 'color': '#B3D9FF', 'category': 'noble', frequency: 541.63 }, { number: 37, 'symbol': 'Rb', 'name': 'Rubidium', 'color': '#B32472', 'category': 'alkali', frequency: 549.63 }, { number: 38, 'symbol': 'Sr', 'name': 'Strontium', 'color': '#00FF00', 'category': 'alkaline', frequency: 557.63 }, { number: 39, 'symbol': 'Y', 'name': 'Yttrium', 'color': '#94FFFF', 'category': 'transition', frequency: 565.63 }, { number: 40, 'symbol': 'Zr', 'name': 'Zirconium', 'color': '#94E0E0', 'category': 'transition', frequency: 573.63 }, { number: 41, 'symbol': 'Nb', 'name': 'Niobium', 'color': '#73C2C9', 'category': 'transition', frequency: 581.63 }, { number: 42, 'symbol': 'Mo', 'name': 'Molybdenum', 'color': '#54B5B5', 'category': 'transition', frequency: 589.63 }, { number: 43, 'symbol': 'Tc', 'name': 'Technetium', 'color': '#3B9E9E', 'category': 'transition', frequency: 597.63 }, { number: 44, 'symbol': 'Ru', 'name': 'Ruthenium', 'color': '#248F8F', 'category': 'transition', frequency: 605.63 }, { number: 45, 'symbol': 'Rh', 'name': 'Rhodium', 'color': '#0A7D7D', 'category': 'transition', frequency: 613.63 }, { number: 46, 'symbol': 'Pd', 'name': 'Palladium', 'color': '#006969', 'category': 'transition', frequency: 621.63 }, { number: 47, 'symbol': 'Ag', 'name': 'Silver', 'color': '#C0C0C0', 'category': 'transition', frequency: 629.63 }, { number: 48, 'symbol': 'Cd', 'name': 'Cadmium', 'color': '#FFD700', 'category': 'transition', frequency: 637.63 }, { number: 49, 'symbol': 'In', 'name': 'Indium', 'color': '#A67573', 'category': 'metal', frequency: 645.63 }, { number: 50, 'symbol': 'Sn', 'name': 'Tin', 'color': '#668080', 'category': 'metal', frequency: 653.63 }, { number: 51, 'symbol': 'Sb', 'name': 'Antimony', 'color': '#9E63B5', 'category': 'metalloid', frequency: 661.63 }, { number: 52, 'symbol': 'Te', 'name': 'Tellurium', 'color': '#D47A00', 'category': 'metalloid', frequency: 669.63 }, { number: 53, 'symbol': 'I', 'name': 'Iodine', 'color': '#940094', 'category': 'halogen', frequency: 677.63 }, { number: 54, 'symbol': 'Xe', 'name': 'Xenon', 'color': '#4580FF', 'category': 'noble', frequency: 685.63 }, { number: 55, 'symbol': 'Cs', 'name': 'Cesium', 'color': '#57178F', 'category': 'alkali', frequency: 693.63 }, { number: 56, 'symbol': 'Ba', 'name': 'Barium', 'color': '#00C900', 'category': 'alkaline', frequency: 701.63 }, { number: 57, 'symbol': 'La', 'name': 'Lanthanum', 'color': '#70D4FF', 'category': 'lanthanide', frequency: 709.63 }, { number: 58, 'symbol': 'Ce', 'name': 'Cerium', 'color': '#FFFFC7', 'category': 'lanthanide', frequency: 717.63 }, { number: 59, 'symbol': 'Pr', 'name': 'Praseodymium', 'color': '#D9FFC7', 'category': 'lanthanide', frequency: 725.63 }, { number: 60, 'symbol': 'Nd', 'name': 'Neodymium', 'color': '#C7FFC7', 'category': 'lanthanide', frequency: 733.63 }, { number: 61, 'symbol': 'Pm', 'name': 'Promethium', 'color': '#A3FFC7', 'category': 'lanthanide', frequency: 741.63 }, { number: 62, 'symbol': 'Sm', 'name': 'Samarium', 'color': '#8FFFC7', 'category': 'lanthanide', frequency: 749.63 }, { number: 63, 'symbol': 'Eu', 'name': 'Europium', 'color': '#61FFC7', 'category': 'lanthanide', frequency: 757.63 }, { number: 64, 'symbol': 'Gd', 'name': 'Gadolinium', 'color': '#45FFC7', 'category': 'lanthanide', frequency: 765.63 }, { number: 65, 'symbol': 'Tb', 'name': 'Terbium', 'color': '#30FFC7', 'category': 'lanthanide', frequency: 773.63 }, { number: 66, 'symbol': 'Dy', 'name': 'Dysprosium', 'color': '#1FFFC7', 'category': 'lanthanide', frequency: 781.63 }, { number: 67, 'symbol': 'Ho', 'name': 'Holmium', 'color': '#00FF9C', 'category': 'lanthanide', frequency: 789.63 }, { number: 68, 'symbol': 'Er', 'name': 'Erbium', 'color': '#00E675', 'category': 'lanthanide', frequency: 797.63 }, { number: 69, 'symbol': 'Tm', 'name': 'Thulium', 'color': '#00D452', 'category': 'lanthanide', frequency: 805.63 }, { number: 70, 'symbol': 'Yb', 'name': 'Ytterbium', 'color': '#00BF38', 'category': 'lanthanide', frequency: 813.63 }, { number: 71, 'symbol': 'Lu', 'name': 'Lutetium', 'color': '#00AB24', 'category': 'lanthanide', frequency: 821.63 }, { number: 72, 'symbol': 'Hf', 'name': 'Hafnium', 'color': '#4DC2FF', 'category': 'transition', frequency: 829.63 }, { number: 73, 'symbol': 'Ta', 'name': 'Tantalum', 'color': '#4DA6FF', 'category': 'transition', frequency: 837.63 }, { number: 74, 'symbol': 'W', 'name': 'Tungsten', 'color': '#2194D6', 'category': 'transition', frequency: 845.63 }, { number: 75, 'symbol': 'Re', 'name': 'Rhenium', 'color': '#267DAB', 'category': 'transition', frequency: 853.63 }, { number: 76, 'symbol': 'Os', 'name': 'Osmium', 'color': '#266685', 'category': 'transition', frequency: 861.63 }, { number: 77, 'symbol': 'Ir', 'name': 'Iridium', 'color': '#175466', 'category': 'transition', frequency: 869.63 }, { number: 78, 'symbol': 'Pt', 'name': 'Platinum', 'color': '#D9D9D9', 'category': 'transition', frequency: 877.63 }, { number: 79, 'symbol': 'Au', 'name': 'Gold', 'color': '#FFD700', 'category': 'transition', frequency: 885.63 }, { number: 80, 'symbol': 'Hg', 'name': 'Mercury', 'color': '#B8B8B8', 'category': 'transition', frequency: 893.63 }, { number: 81, 'symbol': 'Tl', 'name': 'Thallium', 'color': '#A6544D', 'category': 'metal', frequency: 901.63 }, { number: 82, 'symbol': 'Pb', 'name': 'Lead', 'color': '#575961', 'category': 'metal', frequency: 909.63 }, { number: 83, 'symbol': 'Bi', 'name': 'Bismuth', 'color': '#9E4FB5', 'category': 'metal', frequency: 917.63 }, { number: 84, 'symbol': 'Po', 'name': 'Polonium', 'color': '#AB5C00', 'category': 'metalloid', frequency: 925.63 }, { number: 85, 'symbol': 'At', 'name': 'Astatine', 'color': '#754F45', 'category': 'halogen', frequency: 933.63 }, { number: 86, 'symbol': 'Rn', 'name': 'Radon', 'color': '#428296', 'category': 'noble', frequency: 941.63 }, { number: 87, 'symbol': 'Fr', 'name': 'Francium', 'color': '#420066', 'category': 'alkali', frequency: 949.63 }, { number: 88, 'symbol': 'Ra', 'name': 'Radium', 'color': '#007D00', 'category': 'alkaline', frequency: 957.63 }, { number: 89, 'symbol': 'Ac', 'name': 'Actinium', 'color': '#70ABFA', 'category': 'actinide', frequency: 965.63 }, { number: 90, 'symbol': 'Th', 'name': 'Thorium', 'color': '#00BAFF', 'category': 'actinide', frequency: 973.63 }, { number: 91, 'symbol': 'Pa', 'name': 'Protactinium', 'color': '#00A1FF', 'category': 'actinide', frequency: 981.63 }, { number: 92, 'symbol': 'U', 'name': 'Uranium', 'color': '#008FFF', 'category': 'actinide', frequency: 989.63 }, { number: 93, 'symbol': 'Np', 'name': 'Neptunium', 'color': '#0080FF', 'category': 'actinide', frequency: 997.63 }, { number: 94, 'symbol': 'Pu', 'name': 'Plutonium', 'color': '#006BFF', 'category': 'actinide', frequency: 1005.63 }, { number: 95, 'symbol': 'Am', 'name': 'Americium', 'color': '#545CF2', 'category': 'actinide', frequency: 1013.63 }, { number: 96, 'symbol': 'Cm', 'name': 'Curium', 'color': '#785CE3', 'category': 'actinide', frequency: 1021.63 }, { number: 97, 'symbol': 'Bk', 'name': 'Berkelium', 'color': '#8A4FE3', 'category': 'actinide', frequency: 1029.63 }, { number: 98, 'symbol': 'Cf', 'name': 'Californium', 'color': '#A136D4', 'category': 'actinide', frequency: 1037.63 }, { number: 99, 'symbol': 'Es', 'name': 'Einsteinium', 'color': '#B31FD4', 'category': 'actinide', frequency: 1045.63 }, { number: 100, 'symbol': 'Fm', 'name': 'Fermium', 'color': '#B31FBA', 'category': 'actinide', frequency: 1053.63 }, { number: 101, 'symbol': 'Md', 'name': 'Mendelevium', 'color': '#B30DA6', 'category': 'actinide', frequency: 1061.63 }, { number: 102, 'symbol': 'No', 'name': 'Nobelium', 'color': '#BD0D87', 'category': 'actinide', frequency: 1069.63 }, { number: 103, 'symbol': 'Lr', 'name': 'Lawrencium', 'color': '#C70066', 'category': 'actinide', frequency: 1077.63 }, { number: 104, 'symbol': 'Rf', 'name': 'Rutherfordium', 'color': '#CC0059', 'category': 'transition', frequency: 1085.63 }, { number: 105, 'symbol': 'Db', 'name': 'Dubnium', 'color': '#D1004F', 'category': 'transition', frequency: 1093.63 }, { number: 106, 'symbol': 'Sg', 'name': 'Seaborgium', 'color': '#D60045', 'category': 'transition', frequency: 1101.63 }, { number: 107, 'symbol': 'Bh', 'name': 'Bohrium', 'color': '#DB003B', 'category': 'transition', frequency: 1109.63 }, { number: 108, 'symbol': 'Hs', 'name': 'Hassium', 'color': '#E00032', 'category': 'transition', frequency: 1117.63 }, { number: 109, 'symbol': 'Mt', 'name': 'Meitnerium', 'color': '#E60029', 'category': 'transition', frequency: 1125.63 }, { number: 110, 'symbol': 'Ds', 'name': 'Darmstadtium', 'color': '#EB0024', 'category': 'transition', frequency: 1133.63 }, { number: 111, 'symbol': 'Rg', 'name': 'Roentgenium', 'color': '#F00020', 'category': 'transition', frequency: 1141.63 }, { number: 112, 'symbol': 'Cn', 'name': 'Copernicium', 'color': '#F5001D', 'category': 'transition', frequency: 1149.63 }, { number: 113, 'symbol': 'Nh', 'name': 'Nihonium', 'color': '#FA001A', 'category': 'metal', frequency: 1157.63 }, { number: 114, 'symbol': 'Fl', 'name': 'Flerovium', 'color': '#FF0017', 'category': 'metal', frequency: 1165.63 }, { number: 115, 'symbol': 'Mc', 'name': 'Moscovium', 'color': '#FF0014', 'category': 'metal', frequency: 1173.63 }, { number: 116, 'symbol': 'Lv', 'name': 'Livermorium', 'color': '#FF0011', 'category': 'metal', frequency: 1181.63 }, { number: 117, 'symbol': 'Ts', 'name': 'Tennessine', 'color': '#FF000E', 'category': 'halogen', frequency: 1189.63 }, { number: 118, 'symbol': 'Og', 'name': 'Oganesson', 'color': '#FF000B', 'category': 'noble', frequency: 1197.63 }
];

export const elementMap = new Map(allElements.map(el => [el.symbol, el]));

// A smaller subset of elements for the "Common" filter
export const commonElements = allElements.filter(el => [
    'H', 'C', 'N', 'O', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'K', 'Ca', 'Fe', 'Cu', 'Zn', 'I', 'Ag', 'Au', 'Pb'
].includes(el.symbol));


const initialCompoundData: { [key: string]: Omit<Compound, 'recipe'> } = {
    'H2': { name: 'Hydrogen Gas', formula: 'H₂', commonName: 'Hydrogen', structure: 'H—H', emoji: '💨', explanation: "The lightest gas, used in rocket fuel!" },
    'O2': { name: 'Oxygen Gas', formula: 'O₂', commonName: 'Oxygen', structure: 'O=O', emoji: '😮', explanation: "The air we breathe to live." },
    'N2': { name: 'Nitrogen Gas', formula: 'N₂', commonName: 'Nitrogen', structure: 'N≡N', emoji: '❄️', explanation: "Makes up most of our air. Liquid nitrogen is super cold!" },
    'H2O': { name: 'Water', formula: 'H₂O', commonName: 'Water', structure: 'H—O—H', emoji: '💧', explanation: "The most important liquid on Earth!" },
    'ClNa': { name: 'Sodium Chloride', formula: 'NaCl', commonName: 'Table Salt', structure: 'Na⁺ Cl⁻', emoji: '🧂', explanation: "The salt you sprinkle on your food." },
    'CO2': { name: 'Carbon Dioxide', formula: 'CO₂', commonName: 'Carbon Dioxide', structure: 'O=C=O', emoji: '🥤', explanation: "The fizzy bubbles in your soda!" },
    'CH4': { name: 'Methane', formula: 'CH₄', commonName: 'Natural Gas', structure: 'C(—H)₄', emoji: '🔥', explanation: "Used to heat homes and cook food." },
    'H3N': { name: 'Ammonia', formula: 'NH₃', commonName: 'Ammonia', structure: 'N(—H)₃', emoji: '🧼', explanation: "A powerful, smelly cleaning agent." },
    'HCl': { name: 'Hydrogen Chloride', formula: 'HCl', commonName: 'Hydrochloric Acid', structure: 'H—Cl', emoji: '🧪', explanation: "A strong acid found in your stomach to digest food!" },
    'H2O4S': { name: 'Sulfuric Acid', formula: 'H₂SO₄', commonName: 'Battery Acid', structure: 'HO—SO₂—OH', emoji: '🔋', explanation: "A very important chemical found in car batteries." },
    'CCaO3': { name: 'Calcium Carbonate', formula: 'CaCO₃', commonName: 'Chalk/Limestone', structure: 'Ca²⁺ CO₃²⁻', emoji: '📝', explanation: "The main ingredient in classroom chalk and seashells." },
    'C2H6O': { name: 'Ethanol', formula: 'C₂H₆O', commonName: 'Alcohol', structure: 'CH₃—CH₂—OH', emoji: '消毒', explanation: "The type of alcohol in hand sanitizers that kills germs." },
    'O2Si': { name: 'Silicon Dioxide', formula: 'SiO₂', commonName: 'Quartz/Sand', structure: 'Network', emoji: '⏳', explanation: "The main component of sand and glass!" },
    'KNO3': { name: 'Potassium Nitrate', formula: 'KNO₃', commonName: 'Saltpeter', structure: 'K⁺ NO₃⁻', emoji: '🎆', explanation: "A key ingredient in fireworks that helps them burn." },
    'C6H12O6': { name: 'Glucose', formula: 'C₆H₁₂O₆', commonName: 'Sugar', structure: 'Complex', emoji: '🍬', explanation: 'The simple sugar that provides energy to living things.' },
    'O3': { name: 'Ozone', formula: 'O₃', commonName: 'Ozone', structure: 'O=O⁺-O⁻', emoji: '🛡️', explanation: 'A special type of oxygen that protects Earth from harmful UV rays.' },
    'H2O2': { name: 'Hydrogen Peroxide', formula: 'H₂O₂', commonName: 'Hydrogen Peroxide', structure: 'H—O—O—H', emoji: '🩹', explanation: 'A mild antiseptic used on the skin to prevent infection of minor cuts.' },
    'N2O': { name: 'Dinitrogen Monoxide', formula: 'N₂O', commonName: 'Laughing Gas', structure: 'N≡N⁺-O⁻', emoji: '😂', explanation: 'A gas used by dentists that can make you feel giddy.' },
    'O2S': { name: 'Sulfur Dioxide', formula: 'SO₂', commonName: 'Sulfur Dioxide', structure: 'O=S=O', emoji: '🌋', explanation: 'A pungent gas produced by volcanoes and burning fossil fuels.' },
    'CO': { name: 'Carbon Monoxide', formula: 'CO', commonName: 'Carbon Monoxide', structure: 'C≡O', emoji: '💀', explanation: 'A dangerous, odorless gas produced by burning fuel.' },
    'C2H4O2': { name: 'Acetic Acid', formula: 'C₂H₄O₂', commonName: 'Vinegar', structure: 'CH₃COOH', emoji: '🥗', explanation: 'The main component of vinegar, giving it its sour taste.' },
    'CHNaO3': { name: 'Sodium Bicarbonate', formula: 'NaHCO₃', commonName: 'Baking Soda', structure: 'Na⁺ HCO₃⁻', emoji: '🍰', explanation: 'A salt that makes cakes and breads rise when baking.' },
    'Fe2O3': { name: 'Iron (III) Oxide', formula: 'Fe₂O₃', commonName: 'Rust', structure: 'Ionic Lattice', emoji: '🔩', explanation: 'The reddish-brown flaky coating on iron exposed to oxygen and moisture.' },
    'O2Ti': { name: 'Titanium Dioxide', formula: 'TiO₂', commonName: 'Titania', structure: 'Network', emoji: '☀️', explanation: 'A bright white pigment used in sunscreen, paint, and food coloring.' },
    'F2': { name: 'Fluorine Gas', formula: 'F₂', commonName: 'Fluorine', structure: 'F-F', emoji: '☣️', explanation: 'The most reactive of all elements, a pale yellow-green gas.' },
    'Cl2': { name: 'Chlorine Gas', formula: 'Cl₂', commonName: 'Chlorine', structure: 'Cl-Cl', emoji: '🏊', explanation: 'A toxic greenish-gas used to disinfect swimming pools.' },
    'Br2': { name: 'Bromine', formula: 'Br₂', commonName: 'Liquid Bromine', structure: 'Br-Br', emoji: '🟤', explanation: 'A dense, reddish-brown fuming liquid that is highly corrosive.' },
    'I2': { name: 'Iodine', formula: 'I₂', commonName: 'Iodine Solid', structure: 'I-I', emoji: '🟣', explanation: 'A purple-black solid that turns into a violet gas when heated.' },
    'HNaO': { name: 'Sodium Hydroxide', formula: 'NaOH', commonName: 'Lye / Caustic Soda', structure: 'Na⁺ OH⁻', emoji: '🧼', explanation: 'A strong base used to make soap, paper, and drain cleaner.' },
    'HKO': { name: 'Potassium Hydroxide', formula: 'KOH', commonName: 'Caustic Potash', structure: 'K⁺ OH⁻', emoji: '🧼', explanation: 'Used to make soft soap and in alkaline batteries.' },
    'CaH2O2': { name: 'Calcium Hydroxide', formula: 'Ca(OH)₂', commonName: 'Slaked Lime', structure: 'Ca²⁺ (OH⁻)₂', emoji: '🧱', explanation: 'An important ingredient in mortar, plaster, and cement.' },
    'H2MgO2': { name: 'Magnesium Hydroxide', formula: 'Mg(OH)₂', commonName: 'Milk of Magnesia', structure: 'Mg²⁺ (OH⁻)₂', emoji: '🍼', explanation: 'A common antacid to relieve indigestion and heartburn.' },
    'H3O4P': { name: 'Phosphoric Acid', formula: 'H₃PO₄', commonName: 'Orthophosphoric Acid', structure: 'P(O)(OH)₃', emoji: '🥤', explanation: 'The acid that gives cola its tangy taste!' },
    'HNO3': { name: 'Nitric Acid', formula: 'HNO₃', commonName: 'Aqua Fortis', structure: 'HO—NO₂', emoji: '💥', explanation: 'A highly corrosive acid used to make fertilizers and explosives.' },
    'HF': { name: 'Hydrogen Fluoride', formula: 'HF', commonName: 'Hydrofluoric Acid', structure: 'H-F', emoji: '💀', explanation: 'A highly corrosive liquid that can dissolve glass.' },
    'HBr': { name: 'Hydrogen Bromide', formula: 'HBr', commonName: 'Hydrobromic Acid', structure: 'H-Br', emoji: '🧪', explanation: 'A strong and pungent acid, similar to hydrochloric acid.' },
    'HI': { name: 'Hydrogen Iodide', formula: 'HI', commonName: 'Hydroiodic Acid', structure: 'H-I', emoji: '🧪', explanation: 'One of the strongest acids, used in chemical synthesis.' },
    'Al2O3': { name: 'Aluminum Oxide', formula: 'Al₂O₃', commonName: 'Alumina / Corundum', structure: 'Ionic Lattice', emoji: '💎', explanation: 'A very hard material that makes up rubies and sapphires.' },
    'CaO': { name: 'Calcium Oxide', formula: 'CaO', commonName: 'Quicklime', structure: 'Ca²⁺ O²⁻', emoji: '🔥', explanation: 'A white solid used in the production of steel and cement.' },
    'MgO': { name: 'Magnesium Oxide', formula: 'MgO', commonName: 'Magnesia', structure: 'Mg²⁺ O²⁻', emoji: '🏭', explanation: 'A white solid used in industrial processes and as a refractory material.' },
    'OZn': { name: 'Zinc Oxide', formula: 'ZnO', commonName: 'Zinc White', structure: 'Zn²⁺ O²⁻', emoji: '🧴', explanation: 'A white powder used in rubber manufacturing and as a sunscreen.' },
    'FeS': { name: 'Iron (II) Sulfide', formula: 'FeS', commonName: 'Iron Sulfide', structure: 'Fe²⁺ S²⁻', emoji: '✨', explanation: 'Also known as "Fool\'s Gold" because of its brass-yellow metallic luster.' },
};

const additionalCompoundData: { [key: string]: Omit<Compound, 'recipe'> } = {
    'H2S': { name: 'Hydrogen Sulfide', formula: 'H₂S', commonName: 'Rotten Egg Gas', structure: 'H-S-H', emoji: '🤢', explanation: 'A colorless, toxic gas with a characteristic foul odor of rotten eggs.' },
    'CS2': { name: 'Carbon Disulfide', formula: 'CS₂', commonName: 'Carbon Disulfide', structure: 'S=C=S', emoji: '⚗️', explanation: 'A volatile liquid used as a non-polar solvent in chemical synthesis.' },
    'C2H2': { name: 'Acetylene', formula: 'C₂H₂', commonName: 'Acetylene', structure: 'H-C≡C-H', emoji: '🔥', explanation: 'A colorless gas widely used as a fuel and a chemical building block.' },
    'O3S': { name: 'Sulfur Trioxide', formula: 'SO₃', commonName: 'Sulfur Trioxide', structure: 'O=S(=O)=O', emoji: '🏭', explanation: 'A key precursor to sulfuric acid, it reacts vigorously with water.' },
    'H4Si': { name: 'Silane', formula: 'SiH₄', commonName: 'Silane', structure: 'Si(—H)₄', emoji: '💥', explanation: 'The silicon analogue of methane, it is pyrophoric, meaning it can ignite in air.' },
    'H3P': { name: 'Phosphine', formula: 'PH₃', commonName: 'Phosphine', structure: 'P(—H)₃', emoji: '☠️', explanation: 'A colorless, flammable, very toxic gas. Smells like garlic or decaying fish.' },
    'B2H6': { name: 'Diborane', formula: 'B₂H₆', commonName: 'Diborane', structure: 'Complex', emoji: '🚀', explanation: 'A colorless, pyrophoric gas with a repulsively sweet odor. Used in rocket propellants.' },
    'KMnO4': { name: 'Potassium Permanganate', formula: 'KMnO₄', commonName: 'Potassium Permanganate', structure: 'K⁺ MnO₄⁻', emoji: '🟣', explanation: 'A strong oxidizing agent with a deep purple color, used as a disinfectant.' },
    'AgCl': { name: 'Silver Chloride', formula: 'AgCl', commonName: 'Silver Chloride', structure: 'Ag⁺ Cl⁻', emoji: '📷', explanation: 'A white crystalline solid, well known for its low solubility and use in photography.' },
    'AgBr': { name: 'Silver Bromide', formula: 'AgBr', commonName: 'Silver Bromide', structure: 'Ag⁺ Br⁻', emoji: '📸', explanation: 'A light-sensitive compound used in photographic films and plates.' },
    'AgI': { name: 'Silver Iodide', formula: 'AgI', commonName: 'Silver Iodide', structure: 'Ag⁺ I⁻', emoji: '🌧️', explanation: 'A bright yellow solid used for cloud seeding to induce rain.' },
    'ClCu': { name: 'Copper(I) Chloride', formula: 'CuCl', commonName: 'Cuprous Chloride', structure: 'Cu⁺ Cl⁻', emoji: '🟢', explanation: 'A white solid that is sparingly soluble in water, it can absorb carbon monoxide.' },
    'Cl2Cu': { name: 'Copper(II) Chloride', formula: 'CuCl₂', commonName: 'Cupric Chloride', structure: 'Cu²⁺ (Cl⁻)₂', emoji: '🔵', explanation: 'A light brown solid which slowly absorbs moisture to form a blue-green dihydrate.' },
    'FeCl2': { name: 'Iron(II) Chloride', formula: 'FeCl₂', commonName: 'Ferrous Chloride', structure: 'Fe²⁺ (Cl⁻)₂', emoji: '🧲', explanation: 'A paramagnetic solid with a high melting point, often seen with a greenish hue.' },
    'FeCl3': { name: 'Iron(III) Chloride', formula: 'FeCl₃', commonName: 'Ferric Chloride', structure: 'Fe³⁺ (Cl⁻)₃', emoji: '🩸', explanation: 'An orange-to-brown-black solid used in sewage treatment and drinking water production.' },
    'AlCl3': { name: 'Aluminum Chloride', formula: 'AlCl₃', commonName: 'Aluminum Chloride', structure: 'Al³⁺ (Cl⁻)₃', emoji: '⚗️', explanation: 'A major industrial catalyst, used in the production of everything from plastics to pharmaceuticals.' },
    'Cl2Mg': { name: 'Magnesium Chloride', formula: 'MgCl₂', commonName: 'Magnesium Chloride', structure: 'Mg²⁺ (Cl⁻)₂', emoji: '❄️', explanation: 'A salt that is a precursor to magnesium metal and used for de-icing roads.' },
    'BrK': { name: 'Potassium Bromide', formula: 'KBr', commonName: 'Potassium Bromide', structure: 'K⁺ Br⁻', emoji: '💊', explanation: 'A salt, widely used as an anticonvulsant and a sedative in the 19th and early 20th centuries.' },
    'IK': { name: 'Potassium Iodide', formula: 'KI', commonName: 'Potassium Iodide', structure: 'K⁺ I⁻', emoji: '🛡️', explanation: 'Used to treat hyperthyroidism and to protect the thyroid gland from radiation.' },
    'CaCl2': { name: 'Calcium Chloride', formula: 'CaCl₂', commonName: 'Calcium Chloride', structure: 'Ca²⁺ (Cl⁻)₂', emoji: '🧊', explanation: 'A salt used as a firming agent in canned vegetables and to prevent ice formation.' },
    'CaF2': { name: 'Calcium Fluoride', formula: 'CaF₂', commonName: 'Fluorite', structure: 'Ca²⁺ (F⁻)₂', emoji: '💎', explanation: 'A mineral that is the source of most of the world\'s fluorine. It can be found in a variety of colors.' },
    'FLi': { name: 'Lithium Fluoride', formula: 'LiF', commonName: 'Lithium Fluoride', structure: 'Li⁺ F⁻', emoji: '⚛️', explanation: 'A crystalline solid, transparent to ultraviolet radiation, used in specialty optics.' },
    'ClLi': { name: 'Lithium Chloride', formula: 'LiCl', commonName: 'Lithium Chloride', structure: 'Li⁺ Cl⁻', emoji: '🔴', explanation: 'A typical ionic compound, used to produce a dark red flame in fireworks.' },
    'Na2O': { name: 'Sodium Oxide', formula: 'Na₂O', commonName: 'Sodium Oxide', structure: '(Na⁺)₂ O²⁻', emoji: '⚱️', explanation: 'A key component in the manufacturing of glass and ceramics.' },
    'K2O': { name: 'Potassium Oxide', formula: 'K₂O', commonName: 'Potassium Oxide', structure: '(K⁺)₂ O²⁻', emoji: '肥料', explanation: 'A major component of fertilizers, providing a source of potassium for plants.' },
    'FeS2': { name: 'Iron Disulfide', formula: 'FeS₂', commonName: 'Pyrite / Fool\'s Gold', structure: 'Fe²⁺ (S₂)²⁻', emoji: '✨', explanation: 'Its metallic luster and pale brass-yellow hue give it a superficial resemblance to gold.' },
    'Cu2S': { name: 'Copper(I) Sulfide', formula: 'Cu₂S', commonName: 'Chalcocite', structure: '(Cu⁺)₂ S²⁻', emoji: '⛏️', explanation: 'An important copper ore mineral.' },
    'CuS': { name: 'Copper(II) Sulfide', formula: 'CuS', commonName: 'Covellite', structure: 'Cu²⁺ S²⁻', emoji: '🌌', explanation: 'A mineral known for its indigo-blue color and metallic luster.' },
    'Ag2S': { name: 'Silver Sulfide', formula: 'Ag₂S', commonName: 'Tarnish', structure: '(Ag⁺)₂ S²⁻', emoji: '🥄', explanation: 'The black substance that forms on silverware from atmospheric hydrogen sulfide.' },
    'OZnS': { name: 'Zinc Sulfide', formula: 'ZnS', commonName: 'Zincblende', structure: 'Zn²⁺ S²⁻', emoji: '💡', explanation: 'Used as a phosphor in things like TV screens and glow-in-the-dark paints.' },
    'CdS': { name: 'Cadmium Sulfide', formula: 'CdS', commonName: 'Cadmium Yellow', structure: 'Cd²⁺ S²⁻', emoji: '💛', explanation: 'A yellow solid used as a pigment in paints and plastics.' },
    'HgS': { name: 'Mercury(II) Sulfide', formula: 'HgS', commonName: 'Cinnabar / Vermilion', structure: 'Hg²⁺ S²⁻', emoji: '🔴', explanation: 'The bright red to brick-red mineral that is the most common source ore for mercury.' },
    'PbS': { name: 'Lead(II) Sulfide', formula: 'PbS', commonName: 'Galena', structure: 'Pb²⁺ S²⁻', emoji: '🔲', explanation: 'The main ore of lead and an important source of silver.' },
    'Na2O4S': { name: 'Sodium Sulfate', formula: 'Na₂SO₄', commonName: 'Glauber\'s Salt', structure: '(Na⁺)₂ SO₄²⁻', emoji: '🧼', explanation: 'A white crystalline solid used in the manufacturing of detergents.' },
    'K2O4S': { name: 'Potassium Sulfate', formula: 'K₂SO₄', commonName: 'Sulfate of Potash', structure: '(K⁺)₂ SO₄²⁻', emoji: '🌱', explanation: 'A premium potassium fertilizer, providing both potassium and sulfur.' },
    'MgO4S': { name: 'Magnesium Sulfate', formula: 'MgSO₄', commonName: 'Epsom Salt', structure: 'Mg²⁺ SO₄²⁻', emoji: '🛀', explanation: 'Used in bath salts to soothe sore muscles.' },
    'CaO4S': { name: 'Calcium Sulfate', formula: 'CaSO₄', commonName: 'Gypsum / Plaster', structure: 'Ca²⁺ SO₄²⁻', emoji: '깁스', explanation: 'A common mineral used to make plaster of Paris for casts and drywall.' },
    'BaO4S': { name: 'Barium Sulfate', formula: 'BaSO₄', commonName: 'Barite', structure: 'Ba²⁺ SO₄²⁻', emoji: '🩺', explanation: 'Used as a radiocontrast agent for X-ray imaging of the digestive system.' },
    'Al2O12S3': { name: 'Aluminum Sulfate', formula: 'Al₂(SO₄)₃', commonName: 'Alum', structure: '(Al³⁺)₂ (SO₄²⁻)₃', emoji: '💧', explanation: 'Used in water purification to cause impurities to clump together and settle out.' },
    'CuO4S': { name: 'Copper(II) Sulfate', formula: 'CuSO₄', commonName: 'Blue Vitriol', structure: 'Cu²⁺ SO₄²⁻', emoji: '🔷', explanation: 'A bright blue crystal used as a fungicide and in electroplating.' },
    'FeO4S': { name: 'Iron(II) Sulfate', formula: 'FeSO₄', commonName: 'Green Vitriol', structure: 'Fe²⁺ SO₄²⁻', emoji: '🟩', explanation: 'Used to treat iron-deficiency anemia and to make inks.' },
    'O4SZn': { name: 'Zinc Sulfate', formula: 'ZnSO₄', commonName: 'White Vitriol', structure: 'Zn²⁺ SO₄²⁻', emoji: '🤍', explanation: 'Used as a dietary supplement to treat zinc deficiency.' },
    'Ag2O4S': { name: 'Silver Sulfate', formula: 'Ag₂SO₄', commonName: 'Silver Sulfate', structure: '(Ag⁺)₂ SO₄²⁻', emoji: '🥈', explanation: 'A white crystalline compound used in silver plating.' },
    'NaNO3': { name: 'Sodium Nitrate', formula: 'NaNO₃', commonName: 'Chile Saltpeter', structure: 'Na⁺ NO₃⁻', emoji: '🥩', explanation: 'Used as a food preservative, especially in cured meats.' },
    'AgNO3': { name: 'Silver Nitrate', formula: 'AgNO₃', commonName: 'Lunar Caustic', structure: 'Ag⁺ NO₃⁻', emoji: '🖋️', explanation: 'A precursor to many other silver compounds, used in photography and as an antiseptic.' },
    'CNa2O3': { name: 'Sodium Carbonate', formula: 'Na₂CO₃', commonName: 'Washing Soda', structure: '(Na⁺)₂ CO₃²⁻', emoji: '🫧', explanation: 'Used in glass manufacture and as a water softener.' },
    'CK2O3': { name: 'Potassium Carbonate', formula: 'K₂CO₃', commonName: 'Potash', structure: '(K⁺)₂ CO₃²⁻', emoji: '🧼', explanation: 'Used in the production of soap and glass.' },
    'CMgO3': { name: 'Magnesium Carbonate', formula: 'MgCO₃', commonName: 'Magnesite', structure: 'Mg²⁺ CO₃²⁻', emoji: '🧗', explanation: 'Used by gymnasts and climbers to improve grip.' },
    'C3H8': { name: 'Propane', formula: 'C₃H₈', commonName: 'Propane', structure: 'CH₃-CH₂-CH₃', emoji: '🔥', explanation: 'A gas commonly used for outdoor grilling and home heating.' },
    'C4H10': { name: 'Butane', formula: 'C₄H₁₀', commonName: 'Butane', structure: 'CH₃-(CH₂)₂-CH₃', emoji: '🔥', explanation: 'A highly flammable gas used in lighters and portable stoves.' },
    'CH2O': { name: 'Formaldehyde', formula: 'CH₂O', commonName: 'Formaldehyde', structure: 'H-CHO', emoji: '🐸', explanation: 'Used as a preservative in labs and in the production of resins.' },
    'C2H4': { name: 'Ethene', formula: 'C₂H₄', commonName: 'Ethylene', structure: 'H₂C=CH₂', emoji: '🍌', explanation: 'A plant hormone that causes fruits to ripen.' },
    'C3H6': { name: 'Propene', formula: 'C₃H₆', commonName: 'Propylene', structure: 'CH₃-CH=CH₂', emoji: '📦', explanation: 'A key building block for making polypropylene plastic.' },
    'AuCl3': { name: 'Gold(III) Chloride', formula: 'AuCl₃', commonName: 'Auric Chloride', structure: 'Au³⁺ (Cl⁻)₃', emoji: '👑', explanation: 'A yellow crystalline solid, used as a catalyst in organic chemistry.' },
    'PtCl4': { name: 'Platinum(IV) Chloride', formula: 'PtCl₄', commonName: 'Platinic Chloride', structure: 'Pt⁴⁺ (Cl⁻)₄', emoji: '💍', explanation: 'A reddish-brown solid used in photography and electroplating.' },
    'O2Pb': { name: 'Lead(IV) Oxide', formula: 'PbO₂', commonName: 'Plattnerite', structure: 'Pb⁴⁺ (O²⁻)₂', emoji: '💣', explanation: 'A strong oxidizing agent used in the production of matches and explosives.' },
    'OPb': { name: 'Lead(II) Oxide', formula: 'PbO', commonName: 'Litharge', structure: 'Pb²⁺ O²⁻', emoji: '🏺', explanation: 'A yellow or reddish solid used in making glass, ceramics, and lead-acid batteries.' },
    'OSn': { name: 'Tin(II) Oxide', formula: 'SnO', commonName: 'Stannous Oxide', structure: 'Sn²⁺ O²⁻', emoji: '🥫', explanation: 'A blue-black solid used as a reducing agent and in the creation of other tin compounds.' },
    'O2Sn': { name: 'Tin(IV) Oxide', formula: 'SnO₂', commonName: 'Cassiterite', structure: 'Sn⁴⁺ (O²⁻)₂', emoji: '✨', explanation: 'The main ore of tin, used in electronics and to make opaque glass.' },
    'Cl2Pb': { name: 'Lead(II) Chloride', formula: 'PbCl₂', commonName: 'Cotunnite', structure: 'Pb²⁺ (Cl⁻)₂', emoji: '⬜', explanation: 'A white solid that is poorly soluble in water, it is a main precursor for organolead compounds.' },
    'Cl2Zn': { name: 'Zinc Chloride', formula: 'ZnCl₂', commonName: 'Zinc Chloride', structure: 'Zn²⁺ (Cl⁻)₂', emoji: '💨', explanation: 'A colorless or white solid used as a flux for soldering and in smoke bombs.' },
    'BCl3': { name: 'Boron Trichloride', formula: 'BCl₃', commonName: 'Boron Trichloride', structure: 'B(Cl)₃', emoji: '🧪', explanation: 'A colorless gas that is a starting material for the production of boron compounds.' },
    'BF3': { name: 'Boron Trifluoride', formula: 'BF₃', commonName: 'Boron Trifluoride', structure: 'B(F)₃', emoji: '🔬', explanation: 'A pungent colorless toxic gas used as a catalyst in organic synthesis.' },
    'PCl3': { name: 'Phosphorus Trichloride', formula: 'PCl₃', commonName: 'Phosphorus Trichloride', structure: 'P(Cl)₃', emoji: '⚗️', explanation: 'The most important phosphorus halide, used to make many other phosphorus compounds.' },
    'PCl5': { name: 'Phosphorus Pentachloride', formula: 'PCl₅', commonName: 'Phosphorus Pentachloride', structure: 'P(Cl)₅', emoji: '👨‍🔬', explanation: 'A water-sensitive solid used as a chlorinating agent in chemistry.' },
    'AsCl3': { name: 'Arsenic Trichloride', formula: 'AsCl₃', commonName: 'Butter of Arsenic', structure: 'As(Cl)₃', emoji: '☠️', explanation: 'An oily, colorless liquid that is a precursor to organoarsenic compounds.' },
    'SiCl4': { name: 'Silicon Tetrachloride', formula: 'SiCl₄', commonName: 'Tetrachlorosilane', structure: 'Si(Cl)₄', emoji: '🌫️', explanation: 'A colorless, fuming liquid that is an intermediate in the production of high purity silicon.' },
    'TiCl4': { name: 'Titanium Tetrachloride', formula: 'TiCl₄', commonName: 'Tickle', structure: 'Ti(Cl)₄', emoji: '☁️', explanation: 'A dense, colorless fuming liquid used to produce titanium metal and titanium dioxide pigment.' },
    'HCN': { name: 'Hydrogen Cyanide', formula: 'HCN', commonName: 'Prussic Acid', structure: 'H-C≡N', emoji: '💀', explanation: 'An extremely poisonous liquid with a faint, bitter almond-like odor.' },
    'KCN': { name: 'Potassium Cyanide', formula: 'KCN', commonName: 'Potassium Cyanide', structure: 'K⁺ CN⁻', emoji: '☠️', explanation: 'A highly toxic inorganic salt used in gold mining and electroplating.' },
    'C2H3NaO2': { name: 'Sodium Acetate', formula: 'NaC₂H₃O₂', commonName: 'Hot Ice', structure: 'Na⁺ CH₃COO⁻', emoji: '🧊', explanation: 'A salt that can produce a supersaturated solution which crystallizes instantly when disturbed.' },
    'CaC2': { name: 'Calcium Carbide', formula: 'CaC₂', commonName: 'Calcium Carbide', structure: 'Ca²⁺ (C≡C)²⁻', emoji: '💡', explanation: 'A solid chemical compound used for producing acetylene gas for lamps.' },
    'NNaO2': { name: 'Sodium Nitrite', formula: 'NaNO₂', commonName: 'Sodium Nitrite', structure: 'Na⁺ NO₂⁻', emoji: '🥓', explanation: 'A salt and an antioxidant that is used in curing meat like ham and bacon.' },
    'Na2O3S2': { name: 'Sodium Thiosulfate', formula: 'Na₂S₂O₃', commonName: 'Hypo / Fixer', structure: '(Na⁺)₂ S₂O₃²⁻', emoji: '📷', explanation: 'Used in photography to fix the image by dissolving unexposed silver bromide.' },
    'H2O3S': { name: 'Sulfurous Acid', formula: 'H₂SO₃', commonName: 'Sulfurous Acid', structure: 'H-SO₂-OH', emoji: '🧪', explanation: 'A weak, unstable acid formed when sulfur dioxide dissolves in water.' },
    'C2H2O4': { name: 'Oxalic Acid', formula: 'H₂C₂O₄', commonName: 'Oxalic Acid', structure: 'HOOC-COOH', emoji: '🍃', explanation: 'An organic acid found in many plants like rhubarb and spinach.' },
    'C6H8O7': { name: 'Citric Acid', formula: 'C₆H₈O₇', commonName: 'Citric Acid', structure: 'Complex', emoji: '🍋', explanation: 'A weak organic acid that gives lemons and limes their sour taste.' },
    'Li2O': { name: 'Lithium Oxide', formula: 'Li₂O', commonName: 'Lithium Oxide', structure: '(Li⁺)₂ O²⁻', emoji: '🔋', explanation: 'A white solid used in ceramics and to make lithium-ion battery components.' },
    'BeO': { name: 'Beryllium Oxide', formula: 'BeO', commonName: 'Beryllia', structure: 'Be²⁺ O²⁻', emoji: '⚛️', explanation: 'An excellent electrical insulator and heat conductor, used in high-performance electronics.' },
    'Al2S3': { name: 'Aluminum Sulfide', formula: 'Al₂S₃', commonName: 'Aluminum Sulfide', structure: '(Al³⁺)₂ (S²⁻)₃', emoji: '💨', explanation: 'A gray solid that reacts with water to produce hydrogen sulfide gas.' },
    'CaS': { name: 'Calcium Sulfide', formula: 'CaS', commonName: 'Calcium Sulfide', structure: 'Ca²⁺ S²⁻', emoji: '🌟', explanation: 'A key component in phosphorescent materials that glow in the dark.' },
    'MgS': { name: 'Magnesium Sulfide', formula: 'MgS', commonName: 'Magnesium Sulfide', structure: 'Mg²⁺ S²⁻', emoji: '🔥', explanation: 'A white crystalline material used in steel manufacturing.' },
    'Na2S': { name: 'Sodium Sulfide', formula: 'Na₂S', commonName: 'Sodium Sulfide', structure: '(Na⁺)₂ S²⁻', emoji: '🏭', explanation: 'A yellow solid used in the paper industry, water treatment, and textile manufacturing.' },
    'K2S': { name: 'Potassium Sulfide', formula: 'K₂S', commonName: 'Potassium Sulfide', structure: '(K⁺)₂ S²⁻', emoji: '💥', explanation: 'A red-brown solid used in fireworks to create a "glitter" effect.' },
    'P4S3': { name: 'Tetraphosphorus Trisulfide', formula: 'P₄S₃', commonName: 'Phosphorus Sesquisulfide', structure: 'Complex', emoji: '🔥', explanation: 'A yellow-green solid that was once used in "strike-anywhere" matches.' },
    'H2Se': { name: 'Hydrogen Selenide', formula: 'H₂Se', commonName: 'Hydrogen Selenide', structure: 'H-Se-H', emoji: '🤢', explanation: 'The most toxic selenium compound, an irritating gas with a smell like decayed horseradish.' },
    'H2Te': { name: 'Hydrogen Telluride', formula: 'H₂Te', commonName: 'Hydrogen Telluride', structure: 'H-Te-H', emoji: '🤮', explanation: 'An unstable, toxic gas with an odor similar to decaying garlic.' },
    'CCl4': { name: 'Carbon Tetrachloride', formula: 'CCl₄', commonName: 'Tetrachloromethane', structure: 'C(Cl)₄', emoji: '👨‍🔬', explanation: 'A toxic liquid formerly used in fire extinguishers and as a refrigerant.' },
    'CHCl3': { name: 'Chloroform', formula: 'CHCl₃', commonName: 'Chloroform', structure: 'CH(Cl)₃', emoji: '😴', explanation: 'A dense, sweet-smelling liquid, famously used as an early anesthetic.' },
    'CH4O': { name: 'Methanol', formula: 'CH₄O', commonName: 'Wood Alcohol', structure: 'CH₃-OH', emoji: '⚗️', explanation: 'A toxic alcohol used as a solvent, fuel, and antifreeze.' },
    'C3H6O': { name: 'Acetone', formula: 'C₃H₆O', commonName: 'Acetone', structure: 'CH₃-CO-CH₃', emoji: '💅', explanation: 'A common solvent used in nail polish remover.' },
    'C3H8O3': { name: 'Glycerol', formula: 'C₃H₈O₃', commonName: 'Glycerin', structure: 'C₃H₅(OH)₃', emoji: '🧴', explanation: 'A sweet-tasting, non-toxic liquid used in foods, soaps, and pharmaceuticals.' },
    'CH4N2O': { name: 'Urea', formula: 'CH₄N₂O', commonName: 'Urea', structure: 'CO(NH₂)₂', emoji: '🌱', explanation: 'The main nitrogen-containing substance in mammal urine; used as a fertilizer.' },
    'C6H6': { name: 'Benzene', formula: 'C₆H₆', commonName: 'Benzene', structure: 'Ring', emoji: '⌬', explanation: 'A fundamental aromatic hydrocarbon used to make plastics, resins, and nylon.' },
    'C7H8': { name: 'Toluene', formula: 'C₇H₈', commonName: 'Toluene', structure: 'C₆H₅CH₃', emoji: '✈️', explanation: 'A solvent used in paint thinners and to boost octane ratings in gasoline.' },
    'BaO': { name: 'Barium Oxide', formula: 'BaO', commonName: 'Baria', structure: 'Ba²⁺ O²⁻', emoji: '📺', explanation: 'Used to coat the cathodes of old cathode ray tubes (CRTs).' },
    'H2O2Sr': { name: 'Strontium Hydroxide', formula: 'Sr(OH)₂', commonName: 'Strontium Hydroxide', structure: 'Sr²⁺ (OH⁻)₂', emoji: '🍬', explanation: 'Used in sugar refining and as a stabilizer in plastics.' },
    'H3AlO3': { name: 'Aluminum Hydroxide', formula: 'Al(OH)₃', commonName: 'Antacid', structure: 'Al(OH)₃', emoji: '💊', explanation: 'A common component of antacids and used as a flame retardant.' },
    'H2O2Zn': { name: 'Zinc Hydroxide', formula: 'Zn(OH)₂', commonName: 'Zinc Hydroxide', structure: 'Zn(OH)₂', emoji: '🩹', explanation: 'Used in surgical dressings.' },
    'FeH2O2': { name: 'Iron(II) Hydroxide', formula: 'Fe(OH)₂', commonName: 'Green Rust', structure: 'Fe²⁺ (OH⁻)₂', emoji: '🟩', explanation: 'A greenish-white solid that is easily oxidized to form red rust.' },
    'FeH3O3': { name: 'Iron(III) Hydroxide', formula: 'Fe(OH)₃', commonName: 'Hydrated Rust', structure: 'Fe(OH)₃', emoji: '🟤', explanation: 'The primary component of rust, formed from the oxidation of iron.' },
    'H4N2': { name: 'Hydrazine', formula: 'N₂H₄', commonName: 'Hydrazine', structure: 'H₂N-NH₂', emoji: '🚀', explanation: 'A fuming, colorless liquid used as a rocket propellant.' },
    'N3Na': { name: 'Sodium Azide', formula: 'NaN₃', commonName: 'Sodium Azide', structure: 'Na⁺ N₃⁻', emoji: '🚗', explanation: 'The chemical used as the gas-forming agent in many car airbags.' },
    'BH3O3': { name: 'Boric Acid', formula: 'H₃BO₃', commonName: 'Boric Acid', structure: 'B(OH)₃', emoji: '🐜', explanation: 'A weak acid used as an antiseptic, insecticide, and flame retardant.' },
    'K2Cr2O7': { name: 'Potassium Dichromate', formula: 'K₂Cr₂O₇', commonName: 'Potassium Dichromate', structure: '(K⁺)₂ Cr₂O₇²⁻', emoji: '🔶', explanation: 'A potent, toxic, orange-colored oxidizing agent.' },
    'CKO3S': { name: 'Potassium Thiocyanate', formula: 'KSCN', commonName: 'Potassium Thiocyanate', structure: 'K⁺ SCN⁻', emoji: '🩸', explanation: 'A salt that reacts with iron to form a blood-red solution, used in film special effects.' },
    'ClKO3': { name: 'Potassium Chlorate', formula: 'KClO₃', commonName: 'Potassium Chlorate', structure: 'K⁺ ClO₃⁻', emoji: '💥', explanation: 'A powerful oxidizing agent used in fireworks, explosives, and as a disinfectant.' },
    'ClNaO': { name: 'Sodium Hypochlorite', formula: 'NaClO', commonName: 'Bleach', structure: 'Na⁺ ClO⁻', emoji: '🧴', explanation: 'The active ingredient in household bleach.' },
    'F4Xe': { name: 'Xenon Tetrafluoride', formula: 'XeF₄', commonName: 'Xenon Tetrafluoride', structure: 'XeF₄', emoji: '💎', explanation: 'One of the first discovered noble gas compounds, a dense, white crystalline solid.' },
    'C6H5Na3O7': { name: 'Sodium Citrate', formula: 'Na₃C₆H₅O₇', commonName: 'Sour Salt', structure: 'Complex', emoji: '🧀', explanation: 'Used as a food preservative and an emulsifier in cheesemaking.' },
    'C4H4O4Pb': { name: 'Lead(II) Acetate', formula: 'Pb(C₂H₃O₂)₂', commonName: 'Sugar of Lead', structure: 'Complex', emoji: '☠️', explanation: 'A toxic, sweet-tasting crystalline compound, historically used as a sweetener.' },
    'N2O4': { name: 'Dinitrogen Tetroxide', formula: 'N₂O₄', commonName: 'Nitrogen Tetroxide', structure: 'O₂N-NO₂', emoji: '🚀', explanation: 'An important component in rocket propellants, exists in equilibrium with nitrogen dioxide.' },
    'ClFO3': { name: 'Perchloryl Fluoride', formula: 'FClO₃', commonName: 'Perchloryl Fluoride', structure: 'F-ClO₃', emoji: '💥', explanation: 'A reactive gas that is a powerful oxidizing and fluorinating agent.' },
    'H4N2O3': { name: 'Ammonium Nitrate', formula: 'NH₄NO₃', commonName: 'Ammonium Nitrate', structure: 'NH₄⁺ NO₃⁻', emoji: '💣', explanation: 'A major component of fertilizers and explosives.' },
    'H8N2O4S': { name: 'Ammonium Sulfate', formula: '(NH₄)₂SO₄', commonName: 'Ammonium Sulfate', structure: '(NH₄⁺)₂ SO₄²⁻', emoji: '🌱', explanation: 'A common soil fertilizer.' },
    'AsH3': { name: 'Arsine', formula: 'AsH₃', commonName: 'Arsine', structure: 'As(—H)₃', emoji: '💀', explanation: 'An extremely toxic gas with a mild garlic-like odor, used in the semiconductor industry.' },
    'C2H5NO2': { name: 'Glycine', formula: 'C₂H₅NO₂', commonName: 'Glycine', structure: 'H₂NCH₂COOH', emoji: '🧬', explanation: 'The simplest amino acid, a building block of proteins in all life.' },
    'C3H7NO2': { name: 'Alanine', formula: 'C₃H₇NO₂', commonName: 'Alanine', structure: 'CH₃CH(NH₂)COOH', emoji: '🧬', explanation: 'A common amino acid used by the body to build proteins.' },
    'C5H10O5': { name: 'Deoxyribose', formula: 'C₅H₁₀O₅', commonName: 'Deoxyribose', structure: 'Complex', emoji: '🧬', explanation: 'The "D" in DNA; the sugar component of the backbone of our genetic material.' },
    'Na3O4P': { name: 'Sodium Phosphate', formula: 'Na₃PO₄', commonName: 'TSP', structure: '(Na⁺)₃ PO₄³⁻', emoji: '🧼', explanation: 'A powerful cleaning agent, stain remover, and degreaser.' },
    'Ca3O8P2': { name: 'Calcium Phosphate', formula: 'Ca₃(PO₄)₂', commonName: 'Bone Ash', structure: '(Ca²⁺)₃ (PO₄³⁻)₂', emoji: '🦴', explanation: 'The main mineral component of bones and teeth.' },
    'C12H22O11': { name: 'Sucrose', formula: 'C₁₂H₂₂O₁₁', commonName: 'Table Sugar', structure: 'Complex', emoji: '🍰', explanation: 'The common sugar we use in kitchens, made of glucose and fructose bonded together.' },
};

const evenMoreCompoundData: { [key: string]: Omit<Compound, 'recipe'> } = {
    'H8N2O3S': { name: 'Ammonium Sulfite', formula: '(NH₄)₂SO₃', commonName: 'Ammonium Sulfite', structure: '(NH₄⁺)₂ SO₃²⁻', emoji: '⚗️', explanation: 'Used as a food preservative and in photography.' },
    'CH3KO': { name: 'Potassium Methoxide', formula: 'CH₃KO', commonName: 'Potassium Methoxide', structure: 'K⁺ CH₃O⁻', emoji: '🔥', explanation: 'A strong base used in organic synthesis.' },
    'C2H5NaO': { name: 'Sodium Ethoxide', formula: 'NaC₂H₅O', commonName: 'Sodium Ethoxide', structure: 'Na⁺ C₂H₅O⁻', emoji: '🔥', explanation: 'A common base in organic chemistry, especially for Williamson ether synthesis.' },
    'C8H10': { name: 'Xylene', formula: 'C₈H₁₀', commonName: 'Xylene', structure: 'C₆H₄(CH₃)₂', emoji: '⌬', explanation: 'An important petrochemical solvent and precursor to polyester.' },
    'C3H4O2': { name: 'Propiolactone', formula: 'C₃H₄O₂', commonName: 'Propiolactone', structure: 'cyclic ester', emoji: '🧪', explanation: 'A disinfectant and sterilant, but is carcinogenic.' },
    'C4H6O2': { name: 'Vinyl Acetate', formula: 'C₄H₆O₂', commonName: 'Vinyl Acetate', structure: 'CH₃COOCH=CH₂', emoji: '🩹', explanation: 'The precursor to polyvinyl acetate (PVA), a major adhesive.' },
    'C2Cl2O2': { name: 'Oxalyl Chloride', formula: '(COCl)₂', commonName: 'Oxalyl Chloride', structure: '(COCl)₂', emoji: '☠️', explanation: 'A reagent in organic synthesis for oxidation and forming acid chlorides.' },
    'S2Cl2': { name: 'Disulfur Dichloride', formula: 'S₂Cl₂', commonName: 'Disulfur Dichloride', structure: 'Cl-S-S-Cl', emoji: '☣️', explanation: 'Used in the vulcanization of rubber.' },
    'ClF': { name: 'Chlorine Monofluoride', formula: 'ClF', commonName: 'Chlorine Monofluoride', structure: 'Cl-F', emoji: '💨', explanation: 'A powerful fluorinating agent.' },
    'ClF3': { name: 'Chlorine Trifluoride', formula: 'ClF₃', commonName: 'Chlorine Trifluoride', structure: 'ClF₃', emoji: '💥', explanation: 'Hypergolic with most materials, meaning it ignites on contact. Extremely reactive.' },
    'BrCl': { name: 'Bromine Chloride', formula: 'BrCl', commonName: 'Bromine Chloride', structure: 'Br-Cl', emoji: '🧪', explanation: 'A red-brown gas used as a disinfectant and in some industrial processes.' },
    'BrF3': { name: 'Bromine Trifluoride', formula: 'BrF₃', commonName: 'Bromine Trifluoride', structure: 'BrF₃', emoji: '💥', explanation: 'A powerful fluorinating agent, similar to ClF₃.' },
    'ICl': { name: 'Iodine Monochloride', formula: 'ICl', commonName: 'Iodine Monochloride', structure: 'I-Cl', emoji: '🔴', explanation: 'A red-brown compound used in organic synthesis.' },
    'IF5': { name: 'Iodine Pentafluoride', formula: 'IF₅', commonName: 'Iodine Pentafluoride', structure: 'IF₅', emoji: '🧪', explanation: 'A colorless liquid, another powerful fluorinating agent.' },
    'IF7': { name: 'Iodine Heptafluoride', formula: 'IF₇', commonName: 'Iodine Heptafluoride', structure: 'IF₇', emoji: '💨', explanation: 'A colorless gas used to prepare other iodine compounds.' },
    'O4S2Cl2': { name: 'Pyrosulfuryl Chloride', formula: 'S₂O₅Cl₂', commonName: 'Pyrosulfuryl Chloride', structure: 'ClSO₂OSO₂Cl', emoji: '⚗️', explanation: 'A strong chlorosulfonating agent.' },
    'CrO2Cl2': { name: 'Chromyl Chloride', formula: 'CrO₂Cl₂', commonName: 'Chromyl Chloride', structure: 'CrO₂Cl₂', emoji: '🔴', explanation: 'A deep red, fuming liquid used as an oxidizing agent.' },
    'O2VCl3': { name: 'Vanadyl Trichloride', formula: 'VOCl₃', commonName: 'Vanadyl Trichloride', structure: 'VOCl₃', emoji: '💛', explanation: 'A yellow liquid used as a catalyst in polymer production.' },
    'BBr3': { name: 'Boron Tribromide', formula: 'BBr₃', commonName: 'Boron Tribromide', structure: 'B(Br)₃', emoji: '🌫️', explanation: 'A colorless, fuming liquid used in organic synthesis.' },
    'BI3': { name: 'Boron Triiodide', formula: 'BI₃', commonName: 'Boron Triiodide', structure: 'B(I)₃', emoji: '💎', explanation: 'A white crystalline solid that is a powerful Lewis acid.' },
    'PBr3': { name: 'Phosphorus Tribromide', formula: 'PBr₃', commonName: 'Phosphorus Tribromide', structure: 'P(Br)₃', emoji: '⚗️', explanation: 'A colorless liquid used to convert alcohols to alkyl bromides.' },
    'PBr5': { name: 'Phosphorus Pentabromide', formula: 'PBr₅', commonName: 'Phosphorus Pentabromide', structure: 'P(Br)₅', emoji: '🟡', explanation: 'A reactive, yellow solid used as a brominating agent.' },
    'PI3': { name: 'Phosphorus Triiodide', formula: 'PI₃', commonName: 'Phosphorus Triiodide', structure: 'P(I)₃', emoji: '🔴', explanation: 'A red solid used to convert alcohols to alkyl iodides.' },
    'AsF3': { name: 'Arsenic Trifluoride', formula: 'AsF₃', commonName: 'Arsenic Trifluoride', structure: 'As(F)₃', emoji: '☠️', explanation: 'A colorless liquid used to make other fluorine compounds.' },
    'AsF5': { name: 'Arsenic Pentafluoride', formula: 'AsF₅', commonName: 'Arsenic Pentafluoride', structure: 'As(F)₅', emoji: '💨', explanation: 'A colorless gas and a strong Lewis acid.' },
    'SbCl3': { name: 'Antimony Trichloride', formula: 'SbCl₃', commonName: 'Antimony Trichloride', structure: 'Sb(Cl)₃', emoji: '⚗️', explanation: 'A soft, colorless solid used as a mordant in dyeing.' },
    'SbCl5': { name: 'Antimony Pentachloride', formula: 'SbCl₅', commonName: 'Antimony Pentachloride', structure: 'Sb(Cl)₅', emoji: '🌫️', explanation: 'A colorless oil, used as a chlorinating agent and catalyst.' },
    'SbF3': { name: 'Antimony Trifluoride', formula: 'SbF₃', commonName: 'Antimony Trifluoride', structure: 'Sb(F)₃', emoji: '💎', explanation: 'A white solid used to replace chlorine or bromine with fluorine.' },
    'SbF5': { name: 'Antimony Pentafluoride', formula: 'SbF₅', commonName: 'Antimony Pentafluoride', structure: 'Sb(F)₅', emoji: '🧪', explanation: 'A colorless, viscous liquid; forms superacids with HF.' },
    'GeCl4': { name: 'Germanium Tetrachloride', formula: 'GeCl₄', commonName: 'Germanium Tetrachloride', structure: 'Ge(Cl)₄', emoji: '🔬', explanation: 'A fuming liquid used to produce pure germanium and in fiber optics.' },
    'C2H3Cl': { name: 'Vinyl Chloride', formula: 'C₂H₃Cl', commonName: 'Vinyl Chloride', structure: 'CH₂=CHCl', emoji: '🔧', explanation: 'The monomer for polyvinyl chloride (PVC).' },
    'C2H3ClO': { name: 'Acetyl Chloride', formula: 'C₂H₃ClO', commonName: 'Acetyl Chloride', structure: 'CH₃COCl', emoji: '⚗️', explanation: 'A fuming, colorless liquid used as a reagent for acetylation.' },
    'C6H5ClO': { name: 'Benzoyl Chloride', formula: 'C₆H₅ClO', commonName: 'Benzoyl Chloride', structure: 'C₆H₅COCl', emoji: '👁️‍🗨️', explanation: 'An important chemical building block, used to make peroxides.' },
    'C3H6O2': { name: 'Methyl Acetate', formula: 'C₃H₆O₂', commonName: 'Methyl Acetate', structure: 'CH₃COOCH₃', emoji: '⚗️', explanation: 'A flammable liquid with a pleasant smell, used as a solvent.' },
    'C4H8O2': { name: 'Ethyl Acetate', formula: 'C₄H₈O₂', commonName: 'Ethyl Acetate', structure: 'CH₃COOCH₂CH₃', emoji: '💅', explanation: 'A common solvent, especially in nail polish removers.' },
    'C6H5NO2': { name: 'Nitrobenzene', formula: 'C₆H₅NO₂', commonName: 'Nitrobenzene', structure: 'C₆H₅NO₂', emoji: '👞', explanation: 'A pale yellow oil with an almond-like odor, used to make aniline.' },
    'C7H5N3O6': { name: 'Trinitrotoluene (TNT)', formula: 'C₇H₅N₃O₆', commonName: 'TNT', structure: 'TNT', emoji: '💥', explanation: 'A well-known explosive material.' },
    'C6H3N3O7': { name: 'Picric Acid', formula: 'C₆H₃N₃O₇', commonName: 'Picric Acid', structure: 'Picric Acid', emoji: '💥', explanation: 'An explosive compound, also used as an antiseptic and dye.' },
    'C3H5N3O9': { name: 'Nitroglycerin', formula: 'C₃H₅N₃O₉', commonName: 'Nitroglycerin', structure: 'Nitroglycerin', emoji: '💥', explanation: 'An explosive liquid used in dynamite and as a heart medication.' },
    'CH5N3': { name: 'Guanidine', formula: 'CH₅N₃', commonName: 'Guanidine', structure: 'C(NH₂)(NH)₂', emoji: '🧬', explanation: 'A crystalline solid, a precursor for plastics and explosives.' },
    'CHNO': { name: 'Fulminic Acid', formula: 'HCNO', commonName: 'Fulminic Acid', structure: 'H-C≡N-O', emoji: '💥', explanation: 'An explosive acid. Its salts (fulminates) are used as detonators.' },
    'H2N2O2': { name: 'Hyponitrous Acid', formula: 'H₂N₂O₂', commonName: 'Hyponitrous Acid', structure: 'HON=NOH', emoji: '🧪', explanation: 'A weak acid that decomposes into nitrous oxide and water.' },
    'H2O4Se': { name: 'Selenic Acid', formula: 'H₂SeO₄', commonName: 'Selenic Acid', structure: 'H₂SeO₄', emoji: '🧪', explanation: 'A strong acid, similar to sulfuric acid, but more oxidizing.' },
    'H2O3Se': { name: 'Selenous Acid', formula: 'H₂SeO₃', commonName: 'Selenous Acid', structure: 'H₂SeO₃', emoji: '⚗️', explanation: 'The primary oxyacid of selenium, used in steel coloring.' },
    'H6TeO6': { name: 'Telluric Acid', formula: 'H₆TeO₆', commonName: 'Telluric Acid', structure: 'Te(OH)₆', emoji: '💎', explanation: 'A white, crystalline solid, a weak acid.' },
    'HIO3': { name: 'Iodic Acid', formula: 'HIO₃', commonName: 'Iodic Acid', structure: 'HIO₃', emoji: '🧂', explanation: 'A white solid, one of the most stable oxoacids of the halogens.' },
    'HIO4': { name: 'Periodic Acid', formula: 'HIO₄', commonName: 'Periodic Acid', structure: 'HIO₄', emoji: '🧪', explanation: 'An oxidizing agent used in organic chemistry.' },
    'HBrO3': { name: 'Bromic Acid', formula: 'HBrO₃', commonName: 'Bromic Acid', structure: 'HBrO₃', emoji: '⚗️', explanation: 'A strong acid, exists only in aqueous solution.' },
    'HClO2': { name: 'Chlorous Acid', formula: 'HClO₂', commonName: 'Chlorous Acid', structure: 'HClO₂', emoji: '🧪', explanation: 'A weak acid, unstable and disproportionates.' },
    'HClO3': { name: 'Chloric Acid', formula: 'HClO₃', commonName: 'Chloric Acid', structure: 'HClO₃', emoji: '🧪', explanation: 'A strong acid and oxidizing agent.' },
    'HClO4': { name: 'Perchloric Acid', formula: 'HClO₄', commonName: 'Perchloric Acid', structure: 'HClO₄', emoji: '💥', explanation: 'A powerful oxidizing agent and one of the strongest acids.' },
    'H2CrO4': { name: 'Chromic Acid', formula: 'H₂CrO₄', commonName: 'Chromic Acid', structure: 'H₂CrO₄', emoji: '🔴', explanation: 'A strong and corrosive oxidizing agent.' },
    'H2Cr2O7': { name: 'Dichromic Acid', formula: 'H₂Cr₂O₇', commonName: 'Dichromic Acid', structure: 'H₂Cr₂O₇', emoji: '🔶', explanation: 'The acid form of dichromate.' },
    'HMnO4': { name: 'Permanganic Acid', formula: 'HMnO₄', commonName: 'Permanganic Acid', structure: 'HMnO₄', emoji: '🟣', explanation: 'A strong acid, the conjugate acid of permanganates.' },
    'BaCl2': { name: 'Barium Chloride', formula: 'BaCl₂', commonName: 'Barium Chloride', structure: 'Ba²⁺ (Cl⁻)₂', emoji: '💚', explanation: 'A toxic salt that imparts a yellow-green color to a flame.' },
    'BaH2O2': { name: 'Barium Hydroxide', formula: 'Ba(OH)₂', commonName: 'Barium Hydroxide', structure: 'Ba²⁺ (OH⁻)₂', emoji: '⚗️', explanation: 'A strong base used in analytical chemistry.' },
    'BaO2': { name: 'Barium Peroxide', formula: 'BaO₂', commonName: 'Barium Peroxide', structure: 'Ba²⁺ O₂²⁻', emoji: '🔥', explanation: 'Used in fireworks for green colors and as an oxidizing agent.' },
    'F2Sr': { name: 'Strontium Fluoride', formula: 'SrF₂', commonName: 'Strontium Fluoride', structure: 'Sr²⁺ (F⁻)₂', emoji: '💎', explanation: 'Used in optics for its transparency to UV and IR light.' },
    'O4SSr': { name: 'Strontium Sulfate', formula: 'SrSO₄', commonName: 'Celestine', structure: 'Sr²⁺ SO₄²⁻', emoji: '💎', explanation: 'The mineral celestine, a main source of strontium.' },
    'H2O2Pb': { name: 'Lead(II) Hydroxide', formula: 'Pb(OH)₂', commonName: 'Lead(II) Hydroxide', structure: 'Pb²⁺ (OH⁻)₂', emoji: '⬜', explanation: 'A white, amphoteric hydroxide.' },
    'BeCl2': { name: 'Beryllium Chloride', formula: 'BeCl₂', commonName: 'Beryllium Chloride', structure: 'BeCl₂', emoji: '🔬', explanation: 'A precursor for beryllium metal, it\'s sweet-tasting but highly toxic.' },
    'BeH2O2': { name: 'Beryllium Hydroxide', formula: 'Be(OH)₂', commonName: 'Beryllium Hydroxide', structure: 'Be(OH)₂', emoji: '🧪', explanation: 'An amphoteric hydroxide.' },
    'CdCl2': { name: 'Cadmium Chloride', formula: 'CdCl₂', commonName: 'Cadmium Chloride', structure: 'Cd²⁺ (Cl⁻)₂', emoji: '☠️', explanation: 'A colorless crystalline solid, used in electroplating.' },
    'CdI2': { name: 'Cadmium Iodide', formula: 'CdI₂', commonName: 'Cadmium Iodide', structure: 'Cd²⁺ (I⁻)₂', emoji: '💎', explanation: 'A crystalline compound with a distinctive crystal structure.' },
    'CdO4S': { name: 'Cadmium Sulfate', formula: 'CdSO₄', commonName: 'Cadmium Sulfate', structure: 'Cd²⁺ SO₄²⁻', emoji: '🎨', explanation: 'A white solid used in pigments and electroplating.' },
    'Cl2Hg': { name: 'Mercury(II) Chloride', formula: 'HgCl₂', commonName: 'Corrosive Sublimate', structure: 'HgCl₂', emoji: '☠️', explanation: 'A highly toxic compound, formerly used as a disinfectant.' },
    'Cl2Hg2': { name: 'Mercury(I) Chloride', formula: 'Hg₂Cl₂', commonName: 'Calomel', structure: 'Cl-Hg-Hg-Cl', emoji: '⬜', explanation: 'Formerly used in medicine as a laxative and diuretic, now known to be toxic.' },
    'I2Hg': { name: 'Mercury(II) Iodide', formula: 'HgI₂', commonName: 'Mercury(II) Iodide', structure: 'Hg²⁺ (I⁻)₂', emoji: '🔴', explanation: 'A red-orange solid that changes color to yellow when heated.' },
    'H2NiO2': { name: 'Nickel(II) Hydroxide', formula: 'Ni(OH)₂', commonName: 'Nickel(II) Hydroxide', structure: 'Ni²⁺ (OH⁻)₂', emoji: '🔋', explanation: 'A green solid used in rechargeable batteries (e.g. Ni-Cd, Ni-MH).' },
    'Cl2Ni': { name: 'Nickel(II) Chloride', formula: 'NiCl₂', commonName: 'Nickel(II) Chloride', structure: 'Ni²⁺ (Cl⁻)₂', emoji: '🟩', explanation: 'A yellow solid that absorbs moisture from the air to become green.' },
    'NiO4S': { name: 'Nickel(II) Sulfate', formula: 'NiSO₄', commonName: 'Nickel(II) Sulfate', structure: 'Ni²⁺ SO₄²⁻', emoji: '🔵', explanation: 'A blue crystalline solid used in electroplating and to make other nickel compounds.' },
    'Cl2Co': { name: 'Cobalt(II) Chloride', formula: 'CoCl₂', commonName: 'Cobalt(II) Chloride', structure: 'Co²⁺ (Cl⁻)₂', emoji: '💧', explanation: 'Blue when dry, but turns pink when hydrated. Used as a moisture indicator.' },
    'CoO4S': { name: 'Cobalt(II) Sulfate', formula: 'CoSO₄', commonName: 'Cobalt(II) Sulfate', structure: 'Co²⁺ SO₄²⁻', emoji: '🔴', explanation: 'A red crystalline solid used in pigments and batteries.' },
    'Cl2Mn': { name: 'Manganese(II) Chloride', formula: 'MnCl₂', commonName: 'Manganese(II) Chloride', structure: 'Mn²⁺ (Cl⁻)₂', emoji: '🩷', explanation: 'A pink salt used as a nutritional supplement and in dry cell batteries.' },
    'MnO2': { name: 'Manganese Dioxide', formula: 'MnO₂', commonName: 'Pyrolusite', structure: 'MnO₂', emoji: '🔋', explanation: 'A black-brown solid, the main component of alkaline battery cathodes.' },
    'MnO4S': { name: 'Manganese(II) Sulfate', formula: 'MnSO₄', commonName: 'Manganese(II) Sulfate', structure: 'Mn²⁺ SO₄²⁻', emoji: '🌱', explanation: 'A pale pink solid used as a fertilizer and food additive.' },
    'Cr2O3': { name: 'Chromium(III) Oxide', formula: 'Cr₂O₃', commonName: 'Chrome Green', structure: 'Cr₂O₃', emoji: '💚', explanation: 'A common green pigment used in paints, inks, and glasses.' },
    'CrO3': { name: 'Chromium Trioxide', formula: 'CrO₃', commonName: 'Chromic Anhydride', structure: 'CrO₃', emoji: '🔴', explanation: 'A powerful and toxic oxidizing agent used in chrome plating.' },
    'Cr2O12S3': { name: 'Chromium(III) Sulfate', formula: 'Cr₂(SO₄)₃', commonName: 'Chromium(III) Sulfate', structure: '(Cr³⁺)₂ (SO₄²⁻)₃', emoji: '🟩', explanation: 'A green or violet compound used in chrome plating and tanning leather.' },
    'C4H6O4Zn': { name: 'Zinc Acetate', formula: 'Zn(C₂H₃O₂)₂', commonName: 'Zinc Acetate', structure: 'Zn²⁺ (CH₃COO⁻)₂', emoji: '💊', explanation: 'Used as a dietary supplement and in lozenges for treating the common cold.' },
    'CO3Zn': { name: 'Zinc Carbonate', formula: 'ZnCO₃', commonName: 'Smithsonite', structure: 'Zn²⁺ CO₃²⁻', emoji: '💎', explanation: 'The mineral smithsonite, used in ointments and as a source of zinc.' },
    'OTi': { name: 'Titanium(II) Oxide', formula: 'TiO', commonName: 'Titanium Monoxide', structure: 'Ti²⁺ O²⁻', emoji: '🧪', explanation: 'A non-stoichiometric compound with a metallic luster.' },
    'O3Ti2': { name: 'Titanium(III) Oxide', formula: 'Ti₂O₃', commonName: 'Titanium Sesquioxide', structure: '(Ti³⁺)₂ (O²⁻)₃', emoji: '🧪', explanation: 'A purple solid with semiconducting properties.' },
    'C2H6OS': { name: 'Dimethyl Sulfoxide (DMSO)', formula: '(CH₃)₂SO', commonName: 'DMSO', structure: '(CH₃)₂SO', emoji: '🔬', explanation: 'A polar aprotic solvent that can penetrate skin, used in medicine delivery.' },
    'C2H6O2S': { name: 'Dimethyl Sulfone', formula: '(CH₃)₂SO₂', commonName: 'MSM', structure: '(CH₃)₂SO₂', emoji: '💊', explanation: 'A dietary supplement (MSM) used for joint health.' },
    'C4H4O': { name: 'Furan', formula: 'C₄H₄O', commonName: 'Furan', structure: 'Furan Ring', emoji: '⌬', explanation: 'An aromatic heterocyclic organic compound, a building block for other chemicals.' },
    'C4H4S': { name: 'Thiophene', formula: 'C₄H₄S', commonName: 'Thiophene', structure: 'Thiophene Ring', emoji: '⌬', explanation: 'A sulfur-containing heterocyclic compound used in dyes and pharmaceuticals.' },
    'C5H5N': { name: 'Pyridine', formula: 'C₅H₅N', commonName: 'Pyridine', structure: 'Pyridine Ring', emoji: '⌬', explanation: 'A basic heterocyclic organic compound with a distinctive, unpleasant fishy smell.' },
    'C4H5N': { name: 'Pyrrole', formula: 'C₄H₅N', commonName: 'Pyrrole', structure: 'Pyrrole Ring', emoji: '🧬', explanation: 'A component of more complex macrocycles like the porphyrins of heme and chlorophyll.' },
    'C5H4O2': { name: 'Furfural', formula: 'C₅H₄O₂', commonName: 'Furfural', structure: 'Furan with CHO', emoji: '🌾', explanation: 'An industrial chemical derived from agricultural byproducts like corncobs and sawdust.' },
    'C4H6': { name: 'Butadiene', formula: 'C₄H₆', commonName: 'Butadiene', structure: 'H₂C=CH-CH=CH₂', emoji: '🚗', explanation: 'A key monomer in the production of synthetic rubber for tires.' },
    'C5H8': { name: 'Isoprene', formula: 'C₅H₈', commonName: 'Isoprene', structure: 'Isoprene', emoji: '🌳', explanation: 'The monomer unit of natural rubber, produced by many plants and animals.' },
    'C10H8': { name: 'Naphthalene', formula: 'C₁₀H₈', commonName: 'Mothballs', structure: 'Two Fused Rings', emoji: '⌬', explanation: 'The main ingredient of traditional mothballs, has a strong, distinctive smell.' },
    'C14H10': { name: 'Anthracene', formula: 'C₁₄H₁₀', commonName: 'Anthracene', structure: 'Three Fused Rings', emoji: '⌬', explanation: 'A solid polycyclic aromatic hydrocarbon, used to make red dye alizarin.' },
    'C6H5NO': { name: 'Nitrosobenzene', formula: 'C₆H₅NO', commonName: 'Nitrosobenzene', structure: 'C₆H₅NO', emoji: '🧪', explanation: 'A green solid that exists in equilibrium with its colorless dimer.' },
    'C6H7N': { name: 'Aniline', formula: 'C₆H₇N', commonName: 'Aniline', structure: 'C₆H₅NH₂', emoji: '🎨', explanation: 'An important industrial chemical used to make dyes, drugs, and plastics.' },
    'C6H6O': { name: 'Phenol', formula: 'C₆H₅OH', commonName: 'Phenol', structure: 'C₆H₅OH', emoji: '消毒', explanation: 'An antiseptic and disinfectant, used in products like mouthwash and throat sprays.' },
    'C7H6O': { name: 'Benzaldehyde', formula: 'C₇H₆O', commonName: 'Benzaldehyde', structure: 'C₆H₅CHO', emoji: '🍒', explanation: 'The simplest aromatic aldehyde, it has a characteristic smell of almonds.' },
    'C7H6O2': { name: 'Benzoic Acid', formula: 'C₇H₆O₂', commonName: 'Benzoic Acid', structure: 'C₆H₅COOH', emoji: '🍓', explanation: 'A common food preservative, found naturally in cranberries and plums.' },
    'C8H8': { name: 'Styrene', formula: 'C₈H₈', commonName: 'Styrene', structure: 'C₆H₅CH=CH₂', emoji: '☕', explanation: 'The monomer used to produce polystyrene, found in disposable cups and insulation.' },
    'C8H8O': { name: 'Acetophenone', formula: 'C₈H₈O', commonName: 'Acetophenone', structure: 'C₆H₅COCH₃', emoji: '🍦', explanation: 'A component of fragrances that smell like cherry, jasmine, and strawberry.' },
    'C9H8O4': { name: 'Aspirin', formula: 'C₉H₈O₄', commonName: 'Aspirin', structure: 'Acetylsalicylic Acid', emoji: '💊', explanation: 'A common pain reliever, anti-inflammatory, and fever reducer.' },
    'C6H8O6': { name: 'Ascorbic Acid', formula: 'C₆H₈O₆', commonName: 'Vitamin C', structure: 'Vitamin C', emoji: '🍊', explanation: 'An essential nutrient involved in the repair of tissue and the immune system.' },
    'C18H36O2': { name: 'Stearic Acid', formula: 'C₁₈H₃₆O₂', commonName: 'Stearic Acid', structure: 'Fatty Acid', emoji: '🕯️', explanation: 'A saturated fatty acid found in animal fats, used in candles and soaps.' },
    'C18H34O2': { name: 'Oleic Acid', formula: 'C₁₈H₃₄O₂', commonName: 'Oleic Acid', structure: 'Fatty Acid', emoji: '🫒', explanation: 'An unsaturated fatty acid that is the main component of olive oil.' },
    'H2O4W': { name: 'Tungstic Acid', formula: 'H₂WO₄', commonName: 'Tungstic Acid', structure: 'H₂WO₄', emoji: '💡', explanation: 'An oxyacid of tungsten, used to make tungstates for light bulb filaments.' },
    'O3W': { name: 'Tungsten Trioxide', formula: 'WO₃', commonName: 'Tungsten Trioxide', structure: 'WO₃', emoji: '🪟', explanation: 'Used in electrochromic windows (\'smart glass\') which can change transparency.' },
    'MoS2': { name: 'Molybdenum Disulfide', formula: 'MoS₂', commonName: 'Molybdenite', structure: 'MoS₂', emoji: '⚙️', explanation: 'A dry lubricant with very low friction, similar to graphite.' },
    'MoO3': { name: 'Molybdenum Trioxide', formula: 'MoO₃', commonName: 'Molybdenum Trioxide', structure: 'MoO₃', emoji: '🏭', explanation: 'Used in agriculture as a fertilizer and in industrial catalysts.' },
    'V2O5': { name: 'Vanadium Pentoxide', formula: 'V₂O₅', commonName: 'Vanadium Pentoxide', structure: 'V₂O₅', emoji: '🏭', explanation: 'A key catalyst for producing sulfuric acid in the contact process.' },
    'P4O10': { name: 'Phosphorus Pentoxide', formula: 'P₄O₁₀', commonName: 'Diphosphorus Pentoxide', structure: 'P₄O₁₀ cage', emoji: '💧', explanation: 'A powerful desiccant (drying agent). Its common name comes from its empirical formula, P₂O₅.' },
    'U3O8': { name: 'Triuranium Octoxide', formula: 'U₃O₈', commonName: 'Yellowcake', structure: 'U₃O₈', emoji: '☢️', explanation: 'The form in which uranium is sold after being mined and milled.' },
    'O2U': { name: 'Uranium Dioxide', formula: 'UO₂', commonName: 'Uraninite', structure: 'UO₂', emoji: '☢️', explanation: 'The primary fuel for nuclear reactors, a black, radioactive crystalline powder.' },
    'F6U': { name: 'Uranium Hexafluoride', formula: 'UF₆', commonName: 'Hex', structure: 'UF₆', emoji: '☢️', explanation: 'A solid at room temperature but turns into a gas at low temperatures, used in uranium enrichment.' },
    'O2Pu': { name: 'Plutonium Dioxide', formula: 'PuO₂', commonName: 'Plutonium Dioxide', structure: 'PuO₂', emoji: '☢️', explanation: 'The primary fuel for RTGs (Radioisotope Thermoelectric Generators) for spacecraft.' },
    'O2Th': { name: 'Thorium Dioxide', formula: 'ThO₂', commonName: 'Thorianite', structure: 'ThO₂', emoji: '💡', explanation: 'Used in gas mantles which glow brightly with a white light when heated.' },
    'La2O3': { name: 'Lanthanum Oxide', formula: 'La₂O₃', commonName: 'Lanthanum Oxide', structure: '(La³⁺)₂ (O²⁻)₃', emoji: '🔭', explanation: 'Used to make high-quality optical lenses due to its high refractive index.' },
    'CeO2': { name: 'Cerium(IV) Oxide', formula: 'CeO₂', commonName: 'Ceria', structure: 'CeO₂', emoji: '🔬', explanation: 'Used as a polishing agent for glass and in catalytic converters.' },
    'Nd2O3': { name: 'Neodymium Oxide', formula: 'Nd₂O₃', commonName: 'Neodymium Oxide', structure: '(Nd³⁺)₂ (O²⁻)₃', emoji: '💎', explanation: 'Used to color glass a beautiful purple and to make powerful NdFeB magnets.' },
    'Co5Sm': { name: 'Samarium-Cobalt Magnet', formula: 'SmCo₅', commonName: 'Samarium-Cobalt Magnet', structure: 'SmCo₅', emoji: '🧲', explanation: 'A type of powerful permanent magnet resistant to high temperatures.' },
    'Fe3O4': { name: 'Iron(II,III) Oxide', formula: 'Fe₃O₄', commonName: 'Magnetite', structure: 'Magnetite', emoji: '🧲', explanation: 'A naturally magnetic mineral, the most magnetic of all minerals on Earth.' },
    'FeH2O5S': { name: 'Iron(II) Sulfate Monohydrate', formula: 'FeSO₄·H₂O', commonName: 'Szomolnokite', structure: 'Fe²⁺SO₄²⁻·H₂O', emoji: '🌱', explanation: 'A mineral form of iron sulfate, also used as a moss killer.' },
    'CH4S': { name: 'Methanethiol', formula: 'CH₃SH', commonName: 'Methyl Mercaptan', structure: 'CH₃-SH', emoji: '🦨', explanation: 'An odorous compound added to natural gas to make leaks detectable.' },
    'C2H6S': { name: 'Ethanethiol', formula: 'C₂H₅SH', commonName: 'Ethyl Mercaptan', structure: 'C₂H₅SH', emoji: '🦨', explanation: 'A strong-smelling liquid, also used as an odorant for liquefied petroleum gas.' },
    'C2H6S2': { name: 'Dimethyl Disulfide', formula: '(CH₃)₂S₂', commonName: 'Dimethyl Disulfide', structure: 'CH₃-S-S-CH₃', emoji: '🧄', explanation: 'A compound with a garlic-like odor, found in many foods.' },
    'C4H4N2': { name: 'Pyrazine', formula: 'C₄H₄N₂', commonName: 'Pyrazine', structure: 'Pyrazine Ring', emoji: '☕', explanation: 'An aromatic compound found in roasted coffee and baked goods, contributing to flavor.' },
    'C3H3N3': { name: 'Triazine', formula: 'C₃H₃N₃', commonName: 'Triazine', structure: 'Triazine Ring', emoji: '🌱', explanation: 'The core of many herbicides, such as atrazine and simazine.' },
    'C5H4N4': { name: 'Purine', formula: 'C₅H₄N₄', commonName: 'Purine', structure: 'Purine Rings', emoji: '🧬', explanation: 'The parent of a large class of molecules including adenine and guanine in DNA.' },
    'C4H5N3O': { name: 'Cytosine', formula: 'C₄H₅N₃O', commonName: 'Cytosine', structure: 'Cytosine', emoji: '🧬', explanation: 'One of the four main bases found in DNA and RNA.' },
    'C5H5N5': { name: 'Adenine', formula: 'C₅H₅N₅', commonName: 'Adenine', structure: 'Adenine', emoji: '🧬', explanation: 'One of the four main bases found in DNA and RNA, pairs with Thymine or Uracil.' },
    'C5H5N5O': { name: 'Guanine', formula: 'C₅H₅N₅O', commonName: 'Guanine', structure: 'Guanine', emoji: '🧬', explanation: 'One of the four main bases found in DNA and RNA, pairs with Cytosine.' },
    'C5H6N2O2': { name: 'Thymine', formula: 'C₅H₆N₂O₂', commonName: 'Thymine', structure: 'Thymine', emoji: '🧬', explanation: 'One of the four main bases in the nucleic acid of DNA.' },
    'C4H4N2O2': { name: 'Uracil', formula: 'C₄H₄N₂O₂', commonName: 'Uracil', structure: 'Uracil', emoji: '🧬', explanation: 'One of the four main bases in RNA, replacing Thymine.' },
    'C2Cl3NaO2': { name: 'Sodium Trichloroacetate', formula: 'CCl₃COONa', commonName: 'Sodium Trichloroacetate', structure: 'Na⁺ CCl₃COO⁻', emoji: '🌱', explanation: 'A herbicide used to control perennial grasses.' },
    'C3H3NaO3': { name: 'Sodium Pyruvate', formula: 'CH₃COCOONa', commonName: 'Sodium Pyruvate', structure: 'Na⁺ CH₃COCOO⁻', emoji: '🏃', explanation: 'The salt of a key intermediate in metabolic pathways like glycolysis.' },
    'C4H4KNaO6': { name: 'Sodium Potassium Tartrate', formula: 'KNaC₄H₄O₆', commonName: 'Rochelle Salt', structure: 'Rochelle Salt', emoji: '🥧', explanation: 'Used as a laxative and in the silvering of mirrors. It\'s a piezoelectric crystal.' },
    'ClKO4': { name: 'Potassium Perchlorate', formula: 'KClO₄', commonName: 'Potassium Perchlorate', structure: 'K⁺ ClO₄⁻', emoji: '🚀', explanation: 'An oxidizer used in fireworks, ammunition, and rocket propellants.' },
    'ClNaO2': { name: 'Sodium Chlorite', formula: 'NaClO₂', commonName: 'Sodium Chlorite', structure: 'Na⁺ ClO₂⁻', emoji: '📄', explanation: 'Used in bleaching textiles and paper pulp, producing chlorine dioxide.' },
    'ClNaO3': { name: 'Sodium Chlorate', formula: 'NaClO₃', commonName: 'Sodium Chlorate', structure: 'Na⁺ ClO₃⁻', emoji: '🌱', explanation: 'A non-selective herbicide, it is toxic to all green plant parts.' },
    'INaO3': { name: 'Sodium Iodate', formula: 'NaIO₃', commonName: 'Sodium Iodate', structure: 'Na⁺ IO₃⁻', emoji: '🧂', explanation: 'An oxidizing agent used in disinfectants and to iodize table salt.' },
    'INaO4': { name: 'Sodium Periodate', formula: 'NaIO₄', commonName: 'Sodium Periodate', structure: 'Na⁺ IO₄⁻', emoji: '🧪', explanation: 'Used in organic chemistry to cleave diols into aldehydes or ketones.' },
    'BrNaO3': { name: 'Sodium Bromate', formula: 'NaBrO₃', commonName: 'Sodium Bromate', structure: 'Na⁺ BrO₃⁻', emoji: '🔥', explanation: 'A strong oxidant used in some hair perms and as a brominating agent.' },
    'C3H7NO3': { name: 'Serine', formula: 'C₃H₇NO₃', commonName: 'Serine', structure: 'Serine', emoji: '🧬', explanation: 'An amino acid important in metabolism and the synthesis of other biomolecules.' },
    'C4H7NO4': { name: 'Aspartic Acid', formula: 'C₄H₇NO₄', commonName: 'Aspartic Acid', structure: 'Aspartic Acid', emoji: '🧬', explanation: 'A non-essential amino acid, it helps every cell in the body work.' },
    'C5H9NO4': { name: 'Glutamic Acid', formula: 'C₅H₉NO₄', commonName: 'Glutamic Acid', structure: 'Glutamic Acid', emoji: '😋', explanation: 'A key neurotransmitter and the basis for the flavor umami (monosodium glutamate, MSG).' },
    'C9H11NO2': { name: 'Phenylalanine', formula: 'C₉H₁₁NO₂', commonName: 'Phenylalanine', structure: 'Phenylalanine', emoji: '🧬', explanation: 'An essential amino acid used to make proteins and neurotransmitters.' },
    'C9H11NO3': { name: 'Tyrosine', formula: 'C₉H₁₁NO₃', commonName: 'Tyrosine', structure: 'Tyrosine', emoji: '🧬', explanation: 'An amino acid used to synthesize important neurotransmitters like dopamine and adrenaline.' },
    'C11H12N2O2': { name: 'Tryptophan', formula: 'C₁₁H₁₂N₂O₂', commonName: 'Tryptophan', structure: 'Tryptophan', emoji: '🦃', explanation: 'An essential amino acid, precursor to serotonin and melatonin.' },
    'C10H14N2': { name: 'Nicotine', formula: 'C₁₀H₁₄N₂', commonName: 'Nicotine', structure: 'Nicotine', emoji: '🚬', explanation: 'A potent stimulant alkaloid found in the nightshade family of plants (e.g., tobacco).' },
    'C8H10N4O2': { name: 'Caffeine', formula: 'C₈H₁₀N₄O₂', commonName: 'Caffeine', structure: 'Caffeine', emoji: '☕', explanation: 'The world\'s most widely consumed psychoactive drug, a stimulant found in coffee and tea.' },
    'C6FeK4N6': { name: 'Potassium Ferrocyanide', formula: 'K₄[Fe(CN)₆]', commonName: 'Yellow Prussiate of Potash', structure: 'K₄[Fe(CN)₆]', emoji: '🧂', explanation: 'An anti-caking agent for road salt and table salt.' },
    'C6FeK3N6': { name: 'Potassium Ferricyanide', formula: 'K₃[Fe(CN)₆]', commonName: 'Prussian Red', structure: 'K₃[Fe(CN)₆]', emoji: '🔵', explanation: 'Used in blueprint drawing and photography (cyanotype process).' },
    'C6H14': { name: 'Hexane', formula: 'C₆H₁₄', commonName: 'Hexane', structure: 'CH₃(CH₂)₄CH₃', emoji: '🔬', explanation: 'A nonpolar solvent used in laboratories and for extracting edible oils.' },
    'C7H16': { name: 'Heptane', formula: 'C₇H₁₆', commonName: 'Heptane', structure: 'CH₃(CH₂)₅CH₃', emoji: '⛽', explanation: 'A component of gasoline that defines the zero point of the octane rating scale.' },
    'C8H18': { name: 'Octane', formula: 'C₈H₁₈', commonName: 'Octane', structure: 'CH₃(CH₂)₆CH₃', emoji: '⛽', explanation: 'A major component of gasoline (petrol).' },
    'C5H12': { name: 'Pentane', formula: 'C₅H₁₂', commonName: 'Pentane', structure: 'CH₃(CH₂)₃CH₃', emoji: '🔥', explanation: 'A component of some fuels and a specialty solvent in the lab.' },
    'C6H12': { name: 'Cyclohexane', formula: 'C₆H₁₂', commonName: 'Cyclohexane', structure: 'Cyclohexane Ring', emoji: '⌬', explanation: 'A solvent and a raw material for the production of nylon and other polymers.' },
    'C5H10': { name: 'Cyclopentane', formula: 'C₅H₁₀', commonName: 'Cyclopentane', structure: 'Cyclopentane Ring', emoji: '🧪', explanation: 'Used in the manufacture of synthetic resins and rubber adhesives.' },
    'C2H4Br2': { name: '1,2-Dibromoethane', formula: 'C₂H₄Br₂', commonName: 'Ethylene Dibromide', structure: 'BrCH₂CH₂Br', emoji: '⛽', explanation: 'A former gasoline additive to scavenge lead from engines, now banned.' },
    'C2H4Cl2': { name: '1,2-Dichloroethane', formula: 'C₂H₄Cl₂', commonName: 'Ethylene Dichloride', structure: 'ClCH₂CH₂Cl', emoji: '⚗️', explanation: 'Used as an intermediate in the production of PVC plastic and as a solvent.' },
};

const allCompoundData = { ...initialCompoundData, ...additionalCompoundData, ...evenMoreCompoundData };


/**
 * Takes an array of workspace elements, counts the occurrences of each
 * element symbol, sorts them alphabetically, and returns a canonical
 * formula string. E.g., [O, H, H] -> "H2O".
 */
export const generateCanonicalFormula = (elements: WorkspaceElement[]): string => {
    const counts: { [symbol: string]: number } = {};
    for (const el of elements) {
        counts[el.symbol] = (counts[el.symbol] || 0) + 1;
    }
    return Object.keys(counts)
        .sort()
        .map(symbol => symbol + (counts[symbol] > 1 ? counts[symbol] : ''))
        .join('');
};

/**
 * Creates a "recipe" string from a canonical formula.
 * E.g., "H2O" -> "2 Hydrogen + 1 Oxygen".
 */
const createRecipeFromFormula = (formula: string): string => {
    // This regex now supports formulas like (NH4)2SO4
    const parts = formula.match(/([A-Z][a-z]?)(\d*)|(\()([A-Z][a-z]?\d*)+(\))(\d*)/g);
    if (!parts) return "Unknown recipe";

    const expandedElements: { [symbol: string]: number } = {};

    const elementSymbols = new Set(allElements.map(el => el.symbol));

    // A simple parser to handle parentheses
    let tempFormula = formula;
    const formulaStack = [];
    let currentMultiplier = 1;
    const multiplierStack = [1];

    // Simplified parsing logic
    const elementRegex = /([A-Z][a-z]?)(\d*)/g;
    let match;
    while ((match = elementRegex.exec(formula)) !== null) {
        const symbol = match[1];
        const count = match[2] ? parseInt(match[2], 10) : 1;
        if(elementSymbols.has(symbol)) {
            expandedElements[symbol] = (expandedElements[symbol] || 0) + count;
        }
    }


    return Object.entries(expandedElements)
        .sort(([symA], [symB]) => symA.localeCompare(symB))
        .map(([symbol, count]) => {
            const name = elementMap.get(symbol)?.name || 'Unknown';
            return `${count} ${name}`;
        })
        .join(' + ');
};

// Augment the initial compound data with a dynamically generated recipe.
export const initialCompounds: Compounds = Object.entries(allCompoundData)
    .reduce((acc, [key, compound]) => {
        acc[key] = {
            ...compound,
            recipe: createRecipeFromFormula(key),
        };
        return acc;
    }, {} as Compounds);

// Definitions for the element categories used in the filter buttons.
export const elementCategories: { [key: string]: string } = {
    all: 'All',
    common: 'Common',
    alkali: 'Alkali Metal',
    alkaline: 'Alkaline Earth',
    transition: 'Transition Metal',
    metal: 'Post-Transition Metal',
    lanthanide: 'Lanthanide',
    actinide: 'Actinide',
    metalloid: 'Metalloid',
    nonmetal: 'Nonmetal',
    halogen: 'Halogen',
    noble: 'Noble Gas',
};

// Short descriptions for each element category.
export const elementCategoryDefinitions = {
    all: 'All available elements in the periodic table.',
    common: 'Elements that are frequently used in basic chemical compounds.',
    alkali: 'Highly reactive metals in Group 1, like Sodium (Na). They have one electron in their outer shell.',
    alkaline: 'Reactive metals in Group 2, like Calcium (Ca). They are less reactive than alkali metals.',
    transition: 'The large block of metals in the middle of the periodic table, like Iron (Fe) and Copper (Cu).',
    metal: 'Good conductors of heat and electricity, often shiny and malleable. Includes post-transition metals.',
    lanthanide: 'Rare-earth metals from Period 6, often used in alloys and high-tech applications.',
    actinide: 'Radioactive metals from Period 7, including Uranium (U) and Plutonium (Pu). Most are synthetic.',
    metalloid: 'Elements with properties between metals and nonmetals, like Silicon (Si). Often semiconductors.',
    nonmetal: 'Elements that are not metals, like Carbon (C) and Oxygen (O). They are essential to life.',
    halogen: 'Highly reactive nonmetals in Group 17, like Chlorine (Cl). They readily form salts.',
    noble: 'Very unreactive gases in Group 18, like Helium (He) and Neon (Ne). They have full outer electron shells.',
};


// --- Audio Constants ---
// These were missing and are required for the audio hooks to function.
export const noteToFreq: { [key: string]: number } = {
    'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23, 'G4': 392.00, 'A4': 440.00, 'B4': 493.88,
    'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'F5': 698.46, 'G5': 783.99, 'A5': 880.00, 'B5': 987.77,
    'C3': 130.81, 'D3': 146.83, 'E3': 164.81, 'F3': 174.61, 'G3': 196.00, 'A3': 220.00, 'B3': 246.94,
};

export const melody: Note[] = [
    { note: 'E4', duration: 0.2 }, { note: 'B4', duration: 0.2 }, { note: 'G4', duration: 0.2 }, { note: 'B4', duration: 0.2 },
    { note: 'D5', duration: 0.2 }, { note: 'B4', duration: 0.2 }, { note: 'G4', duration: 0.2 }, { note: 'B4', duration: 0.2 },
    { note: 'C5', duration: 0.2 }, { note: 'A4', duration: 0.2 }, { note: 'F4', duration: 0.2 }, { note: 'A4', duration: 0.2 },
    { note: 'G4', duration: 0.4 }, { note: 'REST', duration: 0.2 }, { note: 'F4', duration: 0.2 }, { note: 'E4', duration: 0.4 }
];

export const bassline: Note[] = [
    { note: 'C3', duration: 1.6 },
    { note: 'G3', duration: 1.6 },
    { note: 'A3', duration: 1.6 },
    { note: 'F3', duration: 1.6 }
];