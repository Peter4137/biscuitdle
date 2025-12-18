import type { Biscuit } from '../types';

const getImagePath = (_id: string, searchTerm: string): string => {
  const unsplashFallback = `https://source.unsplash.com/400x400/?${encodeURIComponent(searchTerm)},biscuit`;
  return unsplashFallback;
};

export const BISCUITS: Biscuit[] = [
  {
    id: 'digestive',
    name: 'Digestive',
    manufacturer: "McVitie's",
    category: 'Plain',
    dietary: ['Vegetarian'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/McVitie%27s_digestive_biscuit_-_01.jpg',
  },
  {
    id: 'chocolate-digestive',
    name: 'Chocolate Digestive',
    manufacturer: "McVitie's",
    category: 'Chocolate',
    dietary: ['Vegetarian'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/McVitie%27s_chocolate_digestive_biscuit.jpg',
  },
  {
    id: 'hobnob',
    name: 'Hobnob',
    manufacturer: "McVitie's",
    category: 'Oat',
    dietary: ['Vegetarian', 'Vegan'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Hobnobs.jpg',
  },
  {
    id: 'chocolate-hobnob',
    name: 'Chocolate Hobnob',
    manufacturer: "McVitie's",
    category: 'Chocolate',
    dietary: ['Vegetarian'],
    image: getImagePath('chocolate-hobnob', 'chocolate,oat,cookie'),
  },
  {
    id: 'rich-tea',
    name: 'Rich Tea',
    manufacturer: "McVitie's",
    category: 'Plain',
    dietary: ['Vegetarian'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Rich_tea.jpg',
  },
  {
    id: 'bourbon',
    name: 'Bourbon',
    manufacturer: 'Various',
    category: 'Sandwich',
    dietary: ['Vegetarian', 'Vegan'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Bourbon_biscuit.jpg',
  },
  {
    id: 'custard-cream',
    name: 'Custard Cream',
    manufacturer: 'Various',
    category: 'Sandwich',
    dietary: ['Vegetarian'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Custard_cream_biscuit.jpg',
  },
  {
    id: 'jammie-dodger',
    name: 'Jammie Dodger',
    manufacturer: "Burton's",
    category: 'Jam',
    dietary: ['Vegetarian', 'Vegan'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Jamiedodger.jpg',
  },
  {
    id: 'jaffa-cake',
    name: 'Jaffa Cake',
    manufacturer: "McVitie's",
    category: 'Chocolate',
    dietary: ['Vegetarian'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/JaffaCake.jpg',
  },
  {
    id: 'shortbread',
    name: 'Shortbread',
    manufacturer: "Walker's",
    category: 'Shortbread',
    dietary: ['Vegetarian'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Shortbread_fingers.jpg',
  },
  {
    id: 'pink-wafer',
    name: 'Pink Wafer',
    manufacturer: 'Rivington',
    category: 'Wafer',
    dietary: ['Vegetarian'],
    image: getImagePath('pink-wafer', 'wafer,pink,cookie'),
  },
  {
    id: 'nice',
    name: 'Nice',
    manufacturer: 'Various',
    category: 'Plain',
    dietary: ['Vegetarian'],
    image: getImagePath('nice', 'sugar,cookie,coconut'),
  },
  {
    id: 'ginger-nut',
    name: 'Ginger Nut',
    manufacturer: "McVitie's",
    category: 'Spiced',
    dietary: ['Vegetarian', 'Vegan'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Arnott%27s_Ginger_Nut_01.jpg',
  },
  {
    id: 'malted-milk',
    name: 'Malted Milk',
    manufacturer: 'Various',
    category: 'Plain',
    dietary: ['Vegetarian'],
    image: getImagePath('malted-milk', 'malted,milk,cookie'),
  },
  {
    id: 'party-ring',
    name: 'Party Ring',
    manufacturer: "Fox's",
    category: 'Iced',
    dietary: ['Vegetarian'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Nottingham_MMB_11_Party_Rings.jpg',
  },
  {
    id: 'garibaldi',
    name: 'Garibaldi',
    manufacturer: 'Various',
    category: 'Fruit',
    dietary: ['Vegetarian', 'Vegan'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Garibaldi_biscuit.jpg',
  },
  {
    id: 'fig-roll',
    name: 'Fig Roll',
    manufacturer: 'Various',
    category: 'Fruit',
    dietary: ['Vegetarian', 'Vegan'],
    image: getImagePath('fig-roll', 'fig,fruit,cookie'),
  },
  {
    id: 'lotus-biscoff',
    name: 'Lotus Biscoff',
    manufacturer: 'Lotus',
    category: 'Spiced',
    dietary: ['Vegetarian', 'Vegan'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Lotus_Biscoff_Cookie.jpg',
  },
  {
    id: 'kit-kat',
    name: 'Kit Kat',
    manufacturer: 'Nestlé',
    category: 'Wafer',
    dietary: ['Vegetarian'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Kit-Kat-Split.jpg',
  },
  {
    id: 'penguin',
    name: 'Penguin',
    manufacturer: "McVitie's",
    category: 'Chocolate',
    dietary: ['Vegetarian'],
    image: getImagePath('penguin', 'chocolate,bar,cookie'),
  },
  {
    id: 'club',
    name: 'Club',
    manufacturer: "McVitie's",
    category: 'Chocolate',
    dietary: ['Vegetarian'],
    image: getImagePath('club', 'chocolate,biscuit,bar'),
  },
  {
    id: 'tunnocks-teacake',
    name: "Tunnock's Teacake",
    manufacturer: "Tunnock's",
    category: 'Teacake',
    dietary: ['Vegetarian'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Tunnocksteacake.jpg',
  },
  {
    id: 'tunnocks-caramel-wafer',
    name: "Tunnock's Caramel Wafer",
    manufacturer: "Tunnock's",
    category: 'Wafer',
    dietary: ['Vegetarian'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Tunnocks-Caramel-Wafer-Split.jpg',
  },
  {
    id: 'viscount',
    name: 'Viscount',
    manufacturer: "Burton's",
    category: 'Chocolate',
    dietary: ['Vegetarian'],
    image: getImagePath('viscount', 'mint,chocolate,biscuit'),
  },
  {
    id: 'wagon-wheel',
    name: 'Wagon Wheel',
    manufacturer: "Burton's",
    category: 'Chocolate',
    dietary: ['Vegetarian'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Wagon_wheel.jpg',
  },
  {
    id: 'iced-gem',
    name: 'Iced Gem',
    manufacturer: "Jacob's",
    category: 'Iced',
    dietary: ['Vegetarian'],
    image: getImagePath('iced-gem', 'iced,tiny,colorful,cookie'),
  },
  {
    id: 'oreo',
    name: 'Oreo',
    manufacturer: 'Mondelez',
    category: 'Sandwich',
    dietary: ['Vegetarian', 'Vegan'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Oreo-Two-Cookies.jpg',
  },
  {
    id: 'maryland-cookie',
    name: 'Maryland Cookie',
    manufacturer: "Burton's",
    category: 'Chocolate Chip',
    dietary: ['Vegetarian'],
    image: getImagePath('maryland-cookie', 'chocolate,chip,cookie'),
  },
  {
    id: 'foxs-crunch-cream',
    name: "Fox's Crunch Cream",
    manufacturer: "Fox's",
    category: 'Sandwich',
    dietary: ['Vegetarian'],
    image: getImagePath('foxs-crunch-cream', 'cream,sandwich,cookie'),
  },
  {
    id: 'caramel-digestive',
    name: 'Caramel Digestive',
    manufacturer: "McVitie's",
    category: 'Chocolate',
    dietary: ['Vegetarian'],
    image: getImagePath('caramel-digestive', 'caramel,chocolate,cookie'),
  },
];

export const getAllBiscuitNames = (): string[] => getBiscuitsWithImages().map(b => b.name);

export const getBiscuitByName = (name: string): Biscuit | undefined =>
  getBiscuitsWithImages().find(b => b.name.toLowerCase() === name.toLowerCase());

// Filter biscuits that have real Wikimedia Commons images
const getBiscuitsWithImages = (): Biscuit[] => {
  return BISCUITS.filter(b => b.image.startsWith('https://upload.wikimedia.org'));
};

// Generate a deterministic hash from a string
const hashString = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
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

