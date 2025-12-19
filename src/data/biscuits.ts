import type { Biscuit } from '../types';


export const BISCUITS: Biscuit[] = [
  // === UNITED KINGDOM ===
  {
    id: 'digestive',
    name: 'Digestive',
    manufacturer: "McVitie's",
    category: 'Plain',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/e/e9/McVitie%27s_digestive_biscuit_-_01.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'chocolate-digestive',
    name: 'Chocolate Digestive',
    manufacturer: "McVitie's",
    category: 'Chocolate',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/9/93/McVitie%27s_chocolate_digestive_biscuit.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'hobnob',
    name: 'Hobnob',
    manufacturer: "McVitie's",
    category: 'Oat',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/9/95/Hobnobs.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'rich-tea',
    name: 'Rich Tea',
    manufacturer: "McVitie's",
    category: 'Plain',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/8/88/Rich_tea.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'bourbon',
    name: 'Bourbon',
    manufacturer: 'Unbranded',
    category: 'Sandwich',
    shape: 'Rectangular',
    images: ['https://upload.wikimedia.org/wikipedia/commons/0/0e/Bourbon_biscuit.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'custard-cream',
    name: 'Custard Cream',
    manufacturer: 'Unbranded',
    category: 'Sandwich',
    shape: 'Rectangular',
    images: ['https://upload.wikimedia.org/wikipedia/commons/f/ff/Custard_cream_biscuit.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'jammie-dodger',
    name: 'Jammie Dodger',
    manufacturer: "Burton's",
    category: 'Jam',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/0/03/Jamiedodger.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'jaffa-cake',
    name: 'Jaffa Cake',
    manufacturer: "McVitie's",
    category: 'Chocolate',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/2/26/JaffaCake.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'shortbread',
    name: 'Shortbread',
    manufacturer: "Walker's",
    category: 'Shortbread',
    shape: 'Finger',
    images: ['https://upload.wikimedia.org/wikipedia/commons/d/d4/Shortbread_fingers.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'pink-wafer',
    name: 'Pink Wafer',
    manufacturer: 'Rivington',
    category: 'Wafer',
    shape: 'Finger',
    images: ['https://upload.wikimedia.org/wikipedia/commons/c/ca/Pink_wafer_biscuit.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'nice',
    name: 'Nice',
    manufacturer: 'Unbranded',
    category: 'Plain',
    shape: 'Rectangular',
    images: ['https://upload.wikimedia.org/wikipedia/commons/b/b6/Nice_biscuits.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'ginger-nut',
    name: 'Ginger Nut',
    manufacturer: "McVitie's",
    category: 'Spiced',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/2/2e/Arnott%27s_Ginger_Nut_01.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'malted-milk',
    name: 'Malted Milk',
    manufacturer: 'Unbranded',
    category: 'Plain',
    shape: 'Rectangular',
    images: ['https://upload.wikimedia.org/wikipedia/commons/e/e1/Malted_milk_biscuit.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'party-ring',
    name: 'Party Ring',
    manufacturer: "Fox's",
    category: 'Iced',
    shape: 'Ring',
    images: ['https://upload.wikimedia.org/wikipedia/commons/4/48/Nottingham_MMB_11_Party_Rings.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'garibaldi',
    name: 'Garibaldi',
    manufacturer: 'Unbranded',
    category: 'Fruit',
    shape: 'Rectangular',
    images: ['https://upload.wikimedia.org/wikipedia/commons/f/fc/Garibaldi_biscuit.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'fig-roll',
    name: 'Fig Roll',
    manufacturer: 'Unbranded',
    category: 'Fruit',
    shape: 'Cylinder',
    images: ['https://upload.wikimedia.org/wikipedia/commons/f/ff/Fig_roll.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'kit-kat',
    name: 'Kit Kat',
    manufacturer: 'Nestlé',
    category: 'Wafer',
    shape: 'Finger',
    images: ['https://upload.wikimedia.org/wikipedia/commons/f/fc/Kit-Kat-Split.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'penguin',
    name: 'Penguin',
    manufacturer: "McVitie's",
    category: 'Chocolate',
    shape: 'Rectangular',
    images: ['https://upload.wikimedia.org/wikipedia/commons/f/fb/Penguin_biscuit.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'club',
    name: 'Club',
    manufacturer: "McVitie's",
    category: 'Chocolate',
    shape: 'Rectangular',
    images: ['https://upload.wikimedia.org/wikipedia/commons/4/4c/Club_biscuit.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'tunnocks-teacake',
    name: "Tunnock's Teacake",
    manufacturer: "Tunnock's",
    category: 'Teacake',
    shape: 'Dome',
    images: ['https://upload.wikimedia.org/wikipedia/commons/2/2a/Tunnocksteacake.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'tunnocks-caramel-wafer',
    name: "Tunnock's Caramel Wafer",
    manufacturer: "Tunnock's",
    category: 'Wafer',
    shape: 'Rectangular',
    images: ['https://upload.wikimedia.org/wikipedia/commons/f/f1/Tunnocks-Caramel-Wafer-Split.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'viscount',
    name: 'Viscount',
    manufacturer: "Burton's",
    category: 'Chocolate',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/7/77/Viscount_biscuit.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'wagon-wheel',
    name: 'Wagon Wheel',
    manufacturer: "Burton's",
    category: 'Chocolate',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/b/b3/Wagon_wheel.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'iced-gem',
    name: 'Iced Gem',
    manufacturer: "Jacob's",
    category: 'Iced',
    shape: 'Star',
    images: ['https://upload.wikimedia.org/wikipedia/commons/8/85/Iced_gems.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'maryland-cookie',
    name: 'Maryland Cookie',
    manufacturer: "Burton's",
    category: 'Chocolate Chip',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/0/0e/Maryland_cookies.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'foxs-crunch-cream',
    name: "Fox's Crunch Cream",
    manufacturer: "Fox's",
    category: 'Sandwich',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/8/8a/Fox%27s_Crunch_Creams.jpg'],
    origin: 'United Kingdom',
  },
  {
    id: 'caramel-digestive',
    name: 'Caramel Digestive',
    manufacturer: "McVitie's",
    category: 'Chocolate',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/c/c7/Caramel_digestive_biscuit.jpg'],
    origin: 'United Kingdom',
  },

  // === UNITED STATES ===
  {
    id: 'oreo',
    name: 'Oreo',
    manufacturer: 'Mondelez',
    category: 'Sandwich',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/3/3e/Oreo-Two-Cookies.jpg'],
    origin: 'United States',
  },
  {
    id: 'chips-ahoy',
    name: 'Chips Ahoy!',
    manufacturer: 'Mondelez',
    category: 'Chocolate Chip',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/c/ca/Chips_Ahoy%21_2_cookies.jpg'],
    origin: 'United States',
  },
  {
    id: 'graham-cracker',
    name: 'Graham Cracker',
    manufacturer: 'Unbranded',
    category: 'Plain',
    shape: 'Rectangular',
    images: ['https://upload.wikimedia.org/wikipedia/commons/1/14/Graham-Cracker-Stack.jpg'],
    origin: 'United States',
  },
  {
    id: 'nutter-butter',
    name: 'Nutter Butter',
    manufacturer: 'Mondelez',
    category: 'Sandwich',
    shape: 'Peanut',
    images: ['https://upload.wikimedia.org/wikipedia/commons/2/2d/Nutter_Butter_cookie.jpg'],
    origin: 'United States',
  },
  {
    id: 'fortune-cookie',
    name: 'Fortune Cookie',
    manufacturer: 'Unbranded',
    category: 'Plain',
    shape: 'Folded',
    images: ['https://upload.wikimedia.org/wikipedia/commons/3/32/Fortune_cookie.jpg'],
    origin: 'United States',
  },
  {
    id: 'snickerdoodle',
    name: 'Snickerdoodle',
    manufacturer: 'Unbranded',
    category: 'Spiced',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/1/10/Snickerdoodles.jpg'],
    origin: 'United States',
  },

  // === BELGIUM ===
  {
    id: 'lotus-biscoff',
    name: 'Lotus Biscoff',
    manufacturer: 'Lotus',
    category: 'Spiced',
    shape: 'Rectangular',
    images: ['https://upload.wikimedia.org/wikipedia/commons/e/e4/Lotus_Biscoff_Cookie.jpg'],
    origin: 'Belgium',
  },
  {
    id: 'speculaas',
    name: 'Speculaas',
    manufacturer: 'Unbranded',
    category: 'Spiced',
    shape: 'Figurine',
    images: ['https://upload.wikimedia.org/wikipedia/commons/d/d9/Speculaas.jpg'],
    origin: 'Belgium',
  },

  // === NETHERLANDS ===
  {
    id: 'stroopwafel',
    name: 'Stroopwafel',
    manufacturer: 'Unbranded',
    category: 'Wafer',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/9/9c/Stroopwafels_01.jpg'],
    origin: 'Netherlands',
  },

  // === AUSTRALIA ===
  {
    id: 'tim-tam',
    name: 'Tim Tam',
    manufacturer: "Arnott's",
    category: 'Chocolate',
    shape: 'Rectangular',
    images: ['https://upload.wikimedia.org/wikipedia/commons/2/21/Tim_Tam_2.jpg'],
    origin: 'Australia',
  },
  {
    id: 'anzac-biscuit',
    name: 'Anzac Biscuit',
    manufacturer: 'Unbranded',
    category: 'Oat',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/5/5d/Anzac_biscuits.jpg'],
    origin: 'Australia',
  },
  {
    id: 'kingston',
    name: 'Kingston',
    manufacturer: "Arnott's",
    category: 'Sandwich',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/1/1e/Kingston_biscuit.jpg'],
    origin: 'Australia',
  },
  {
    id: 'monte-carlo',
    name: 'Monte Carlo',
    manufacturer: "Arnott's",
    category: 'Sandwich',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/d/d9/Monte_Carlo_biscuit.jpg'],
    origin: 'Australia',
  },

  // === ITALY ===
  {
    id: 'biscotti',
    name: 'Biscotti',
    manufacturer: 'Unbranded',
    category: 'Plain',
    shape: 'Oblong',
    images: ['https://upload.wikimedia.org/wikipedia/commons/b/b4/Biscotti-pistachio.jpg'],
    origin: 'Italy',
  },
  {
    id: 'amaretti',
    name: 'Amaretti',
    manufacturer: 'Unbranded',
    category: 'Almond',
    shape: 'Dome',
    images: ['https://upload.wikimedia.org/wikipedia/commons/6/68/Amaretti.jpg'],
    origin: 'Italy',
  },
  {
    id: 'pizzelle',
    name: 'Pizzelle',
    manufacturer: 'Unbranded',
    category: 'Wafer',
    shape: 'Snowflake',
    images: ['https://upload.wikimedia.org/wikipedia/commons/7/7a/Pizzelle.jpg'],
    origin: 'Italy',
  },

  // === GERMANY ===
  {
    id: 'lebkuchen',
    name: 'Lebkuchen',
    manufacturer: 'Unbranded',
    category: 'Spiced',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/8/8b/Lebkuchen_Elisenlebkuchen.jpg'],
    origin: 'Germany',
  },
  {
    id: 'leibniz-keks',
    name: 'Leibniz-Keks',
    manufacturer: 'Bahlsen',
    category: 'Plain',
    shape: 'Rectangular',
    images: ['https://upload.wikimedia.org/wikipedia/commons/4/48/Leibniz-Keks.jpg'],
    origin: 'Germany',
  },
  {
    id: 'spritz-cookie',
    name: 'Spritz Cookie',
    manufacturer: 'Unbranded',
    category: 'Butter',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/8/86/Spritz_cookies.jpg'],
    origin: 'Germany',
  },
  {
    id: 'pfeffernusse',
    name: 'Pfeffernüsse',
    manufacturer: 'Unbranded',
    category: 'Spiced',
    shape: 'Ball',
    images: ['https://upload.wikimedia.org/wikipedia/commons/a/a2/Pfeffern%C3%BCsse-1.jpg'],
    origin: 'Germany',
  },

  // === FRANCE ===
  {
    id: 'petit-beurre',
    name: 'Petit-Beurre',
    manufacturer: 'LU',
    category: 'Butter',
    shape: 'Rectangular',
    images: ['https://upload.wikimedia.org/wikipedia/commons/2/25/Petit-Beurre.jpg'],
    origin: 'France',
  },
  {
    id: 'madeleine',
    name: 'Madeleine',
    manufacturer: 'Unbranded',
    category: 'Sponge',
    shape: 'Shell',
    images: ['https://upload.wikimedia.org/wikipedia/commons/e/e9/Madeleine.jpg'],
    origin: 'France',
  },
  {
    id: 'macaron',
    name: 'Macaron',
    manufacturer: 'Unbranded',
    category: 'Sandwich',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/8/86/French_macarons.jpg'],
    origin: 'France',
  },
  {
    id: 'palmier',
    name: 'Palmier',
    manufacturer: 'Unbranded',
    category: 'Puff Pastry',
    shape: 'Heart',
    images: ['https://upload.wikimedia.org/wikipedia/commons/9/9f/Palmier_%28Elephant_Ear%29_pastry.jpg'],
    origin: 'France',
  },

  // === AUSTRIA ===
  {
    id: 'linzer-cookie',
    name: 'Linzer Cookie',
    manufacturer: 'Unbranded',
    category: 'Jam',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/2/26/Linzer_augen.jpg'],
    origin: 'Austria',
  },
  {
    id: 'vanillekipferl',
    name: 'Vanillekipferl',
    manufacturer: 'Unbranded',
    category: 'Almond',
    shape: 'Crescent',
    images: ['https://upload.wikimedia.org/wikipedia/commons/f/f3/Vanillekipferl.jpg'],
    origin: 'Austria',
  },

  // === ARGENTINA ===
  {
    id: 'alfajor',
    name: 'Alfajor',
    manufacturer: 'Havanna',
    category: 'Sandwich',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/e/ef/Alfajores_Argentina.jpg'],
    origin: 'Argentina',
  },

  // === SPAIN ===
  {
    id: 'polvoron',
    name: 'Polvorón',
    manufacturer: 'Unbranded',
    category: 'Shortbread',
    shape: 'Oblong',
    images: ['https://upload.wikimedia.org/wikipedia/commons/4/4b/Polvorones.jpg'],
    origin: 'Spain',
  },
  {
    id: 'mantecado',
    name: 'Mantecado',
    manufacturer: 'Unbranded',
    category: 'Shortbread',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/0/08/Mantecados_01.jpg'],
    origin: 'Spain',
  },

  // === GREECE ===
  {
    id: 'kourabiedes',
    name: 'Kourabiedes',
    manufacturer: 'Unbranded',
    category: 'Butter',
    shape: 'Crescent',
    images: ['https://upload.wikimedia.org/wikipedia/commons/a/a9/Kourabiedes.jpg'],
    origin: 'Greece',
  },

  // === NORWAY ===
  {
    id: 'krumkake',
    name: 'Krumkake',
    manufacturer: 'Unbranded',
    category: 'Wafer',
    shape: 'Cone',
    images: ['https://upload.wikimedia.org/wikipedia/commons/9/9f/Krumkake.jpg'],
    origin: 'Norway',
  },

  // === SWEDEN ===
  {
    id: 'pepparkakor',
    name: 'Pepparkakor',
    manufacturer: 'Unbranded',
    category: 'Spiced',
    shape: 'Heart',
    images: ['https://upload.wikimedia.org/wikipedia/commons/a/a2/Pepparkakor_20051213.jpg'],
    origin: 'Sweden',
  },

  // === POLAND ===
  {
    id: 'piernik',
    name: 'Piernik',
    manufacturer: 'Unbranded',
    category: 'Spiced',
    shape: 'Heart',
    images: ['https://upload.wikimedia.org/wikipedia/commons/a/ae/Piernik-serca.jpg'],
    origin: 'Poland',
  },

  // === JAPAN ===
  {
    id: 'pocky',
    name: 'Pocky',
    manufacturer: 'Glico',
    category: 'Chocolate',
    shape: 'Stick',
    images: ['https://upload.wikimedia.org/wikipedia/commons/4/4d/Strawberry_Pocky.jpg'],
    origin: 'Japan',
  },

  // === SCOTLAND (distinct from UK) ===
  {
    id: 'scottish-oatcake',
    name: 'Scottish Oatcake',
    manufacturer: "Nairn's",
    category: 'Oat',
    shape: 'Round',
    images: [],
    origin: 'Scotland',
  },

  // === NEW ZEALAND ===
  {
    id: 'afghan-biscuit',
    name: 'Afghan Biscuit',
    manufacturer: 'Unbranded',
    category: 'Chocolate',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/b/b9/Afghan_biscuits.jpg'],
    origin: 'New Zealand',
  },

  // === MIDDLE EAST ===
  {
    id: 'maamoul',
    name: "Ma'amoul",
    manufacturer: 'Unbranded',
    category: 'Filled',
    shape: 'Moulded',
    images: ['https://upload.wikimedia.org/wikipedia/commons/4/41/Maamoul.jpg'],
    origin: 'Middle East',
  },

  // === INDIA ===
  {
    id: 'nankhatai',
    name: 'Nankhatai',
    manufacturer: 'Unbranded',
    category: 'Shortbread',
    shape: 'Round',
    images: ['https://upload.wikimedia.org/wikipedia/commons/d/de/Nankhatai.jpg'],
    origin: 'India',
  },
];

export const getAllBiscuitNames = (): string[] => getBiscuitsWithImages().map(b => b.name);

export const getBiscuitByName = (name: string): Biscuit | undefined =>
  getBiscuitsWithImages().find(b => b.name.toLowerCase() === name.toLowerCase());

const getBiscuitsWithImages = (): Biscuit[] => {
  return BISCUITS.filter(b => b.images[0]?.startsWith('https://upload.wikimedia.org'));
};

export const getDailyImageIndex = (imageCount: number): number => {
  const today = new Date();
  const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const hash = hashString(dateString + '-image');
  return hash % imageCount;
};

const hashString = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
};

export const getDailyBiscuit = (): Biscuit => {
  const today = new Date();
  const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const hash = hashString(dateString);
  
  const availableBiscuits = getBiscuitsWithImages();
  const index = hash % availableBiscuits.length;
  
  return availableBiscuits[index];
};

export const getTimeUntilNextBiscuit = (): number => {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  return tomorrow.getTime() - now.getTime();
};
