// Images: First tries local /public/biscuits/{id}.jpg
// Falls back to Unsplash Source API for placeholder biscuit images
// For production, replace with your own sourced images

const getImagePath = (id, searchTerm) => {
  // Use Unsplash Source API as a fallback - provides real food photos
  // These will be random cookie/biscuit images, not specific biscuits
  const unsplashFallback = `https://source.unsplash.com/400x400/?${encodeURIComponent(searchTerm)},biscuit`;
  return unsplashFallback;
};

export const BISCUITS = [
  {
    id: 'digestive',
    name: 'Digestive',
    manufacturer: 'McVitie\'s',
    category: 'Plain',
    dietary: ['Vegetarian'],
    image: getImagePath('digestive', 'digestive,cookie,round'),
  },
  {
    id: 'chocolate-digestive',
    name: 'Chocolate Digestive',
    manufacturer: 'McVitie\'s',
    category: 'Chocolate',
    dietary: ['Vegetarian'],
    image: getImagePath('chocolate-digestive', 'chocolate,cookie'),
  },
  {
    id: 'hobnob',
    name: 'Hobnob',
    manufacturer: 'McVitie\'s',
    category: 'Oat',
    dietary: ['Vegetarian', 'Vegan'],
    image: getImagePath('hobnob', 'oat,cookie'),
  },
  {
    id: 'chocolate-hobnob',
    name: 'Chocolate Hobnob',
    manufacturer: 'McVitie\'s',
    category: 'Chocolate',
    dietary: ['Vegetarian'],
    image: getImagePath('chocolate-hobnob', 'chocolate,oat,cookie'),
  },
  {
    id: 'rich-tea',
    name: 'Rich Tea',
    manufacturer: 'McVitie\'s',
    category: 'Plain',
    dietary: ['Vegetarian'],
    image: getImagePath('rich-tea', 'tea,biscuit,plain'),
  },
  {
    id: 'bourbon',
    name: 'Bourbon',
    manufacturer: 'Various',
    category: 'Sandwich',
    dietary: ['Vegetarian', 'Vegan'],
    image: getImagePath('bourbon', 'chocolate,sandwich,cookie'),
  },
  {
    id: 'custard-cream',
    name: 'Custard Cream',
    manufacturer: 'Various',
    category: 'Sandwich',
    dietary: ['Vegetarian'],
    image: getImagePath('custard-cream', 'cream,sandwich,cookie'),
  },
  {
    id: 'jammie-dodger',
    name: 'Jammie Dodger',
    manufacturer: 'Burton\'s',
    category: 'Jam',
    dietary: ['Vegetarian', 'Vegan'],
    image: getImagePath('jammie-dodger', 'jam,cookie,red'),
  },
  {
    id: 'jaffa-cake',
    name: 'Jaffa Cake',
    manufacturer: 'McVitie\'s',
    category: 'Chocolate',
    dietary: ['Vegetarian'],
    image: getImagePath('jaffa-cake', 'orange,chocolate,cake'),
  },
  {
    id: 'shortbread',
    name: 'Shortbread',
    manufacturer: 'Walker\'s',
    category: 'Shortbread',
    dietary: ['Vegetarian'],
    image: getImagePath('shortbread', 'shortbread,butter,cookie'),
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
    manufacturer: 'McVitie\'s',
    category: 'Spiced',
    dietary: ['Vegetarian', 'Vegan'],
    image: getImagePath('ginger-nut', 'ginger,cookie,spice'),
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
    manufacturer: 'Fox\'s',
    category: 'Iced',
    dietary: ['Vegetarian'],
    image: getImagePath('party-ring', 'iced,colorful,cookie'),
  },
  {
    id: 'garibaldi',
    name: 'Garibaldi',
    manufacturer: 'Various',
    category: 'Fruit',
    dietary: ['Vegetarian', 'Vegan'],
    image: getImagePath('garibaldi', 'raisin,fruit,cookie'),
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
    image: getImagePath('lotus-biscoff', 'speculoos,caramel,cookie'),
  },
  {
    id: 'kit-kat',
    name: 'Kit Kat',
    manufacturer: 'Nestlé',
    category: 'Wafer',
    dietary: ['Vegetarian'],
    image: getImagePath('kit-kat', 'kitkat,chocolate,wafer'),
  },
  {
    id: 'penguin',
    name: 'Penguin',
    manufacturer: 'McVitie\'s',
    category: 'Chocolate',
    dietary: ['Vegetarian'],
    image: getImagePath('penguin', 'chocolate,bar,cookie'),
  },
  {
    id: 'club',
    name: 'Club',
    manufacturer: 'McVitie\'s',
    category: 'Chocolate',
    dietary: ['Vegetarian'],
    image: getImagePath('club', 'chocolate,biscuit,bar'),
  },
  {
    id: 'tunnocks-teacake',
    name: 'Tunnock\'s Teacake',
    manufacturer: 'Tunnock\'s',
    category: 'Teacake',
    dietary: ['Vegetarian'],
    image: getImagePath('tunnocks-teacake', 'teacake,marshmallow,chocolate'),
  },
  {
    id: 'tunnocks-caramel-wafer',
    name: 'Tunnock\'s Caramel Wafer',
    manufacturer: 'Tunnock\'s',
    category: 'Wafer',
    dietary: ['Vegetarian'],
    image: getImagePath('tunnocks-caramel-wafer', 'caramel,wafer,chocolate'),
  },
  {
    id: 'viscount',
    name: 'Viscount',
    manufacturer: 'Burton\'s',
    category: 'Chocolate',
    dietary: ['Vegetarian'],
    image: getImagePath('viscount', 'mint,chocolate,biscuit'),
  },
  {
    id: 'wagon-wheel',
    name: 'Wagon Wheel',
    manufacturer: 'Burton\'s',
    category: 'Chocolate',
    dietary: ['Vegetarian'],
    image: getImagePath('wagon-wheel', 'marshmallow,chocolate,round'),
  },
  {
    id: 'iced-gem',
    name: 'Iced Gem',
    manufacturer: 'Jacob\'s',
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
    image: getImagePath('oreo', 'oreo,cookie'),
  },
  {
    id: 'maryland-cookie',
    name: 'Maryland Cookie',
    manufacturer: 'Burton\'s',
    category: 'Chocolate Chip',
    dietary: ['Vegetarian'],
    image: getImagePath('maryland-cookie', 'chocolate,chip,cookie'),
  },
  {
    id: 'foxs-crunch-cream',
    name: 'Fox\'s Crunch Cream',
    manufacturer: 'Fox\'s',
    category: 'Sandwich',
    dietary: ['Vegetarian'],
    image: getImagePath('foxs-crunch-cream', 'cream,sandwich,cookie'),
  },
  {
    id: 'caramel-digestive',
    name: 'Caramel Digestive',
    manufacturer: 'McVitie\'s',
    category: 'Chocolate',
    dietary: ['Vegetarian'],
    image: getImagePath('caramel-digestive', 'caramel,chocolate,cookie'),
  },
];

export const getAllBiscuitNames = () => BISCUITS.map(b => b.name);

export const getBiscuitByName = (name) => 
  BISCUITS.find(b => b.name.toLowerCase() === name.toLowerCase());

export const getDailyBiscuit = () => {
  const today = new Date();
  const startDate = new Date('2024-01-01');
  const daysSinceStart = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  const index = daysSinceStart % BISCUITS.length;
  return BISCUITS[index];
};

export const getTimeUntilNextBiscuit = () => {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  return tomorrow - now;
};
