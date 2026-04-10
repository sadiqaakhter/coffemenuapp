export interface Ingredient {
  name: string;
  color: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  size: string;
  description: string;
  ingredients: Ingredient[];
  imageUrl: string;
  illustrationUrl: string;
  videoUrl?: string;
  voiceUrl?: string;
  temperature: 'Hot' | 'Cold';
  volume: string;
}

export const MENU_DATA: MenuItem[] = [
  {
    id: 'mint-mocha-iced-latte',
    name: 'Cold Foam Mint Mocha Iced Latte',
    category: 'Iced Latte',
    price: 850,
    originalPrice: 1000,
    size: '12oz',
    volume: '350ml',
    temperature: 'Cold',
    description: 'A refreshing blend of mint, rich mocha, and smooth white latte, topped with our signature mocha cold foam.',
    ingredients: [
      { name: 'MOCHA COLD FOAM', color: '#a68a7a' },
      { name: 'COCOA DRINK with ICE', color: '#7c5c4c' },
      { name: 'MILK with ICE', color: '#f0f0f0' },
      { name: 'WHITE LATTE with ICE', color: '#e8dfd2' },
      { name: 'MINT BASE with ICE', color: '#82d694' },
    ],
    imageUrl: './mint-mocha-iced-latte.png',
    illustrationUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
    voiceUrl: './voice/mint-mocha-iced-latte.mp3',
  },
  {
    id: 'spanish-iced-latte',
    name: 'Spanish Iced Latte',
    category: 'Iced Latte',
    price: 723,
    size: '16oz',
    volume: '475ml',
    temperature: 'Cold',
    description: 'A creamy and sweet espresso-based drink made with condensed milk and fresh milk over ice.',
    ingredients: [
      { name: 'ESPRESSO', color: '#3d2b1f' },
      { name: 'CONDENSED MILK', color: '#fff5e6' },
      { name: 'FRESH MILK', color: '#ffffff' },
      { name: 'ICE', color: '#e0f7fa' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800',
    illustrationUrl: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'caramel-iced-latte',
    name: 'Caramel Iced Latte',
    category: 'Iced Latte',
    price: 650,
    size: '16oz',
    volume: '475ml',
    temperature: 'Cold',
    description: 'A smooth and sweet iced latte infused with rich caramel syrup.',
    ingredients: [
      { name: 'CARAMEL SYRUP', color: '#c68e17' },
      { name: 'ESPRESSO', color: '#3d2b1f' },
      { name: 'MILK', color: '#ffffff' },
      { name: 'ICE', color: '#e0f7fa' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
    illustrationUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'iced-mocha-latte',
    name: 'Iced Mocha Latte',
    category: 'Iced Latte',
    price: 800,
    size: '12oz',
    volume: '350ml',
    temperature: 'Cold',
    description: 'A rich and chocolatey espresso-based drink with chilled milk and mocha sauce.',
    ingredients: [
      { name: 'MOCHA SAUCE', color: '#3d2b1f' },
      { name: 'ESPRESSO', color: '#3d2b1f' },
      { name: 'MILK', color: '#ffffff' },
      { name: 'ICE', color: '#e0f7fa' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=800',
    illustrationUrl: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'plain-iced-latte',
    name: 'Plain Iced Latte',
    category: 'Iced Latte',
    price: 638,
    size: '12oz',
    volume: '350ml',
    temperature: 'Cold',
    description: 'A simple and classic iced latte made with rich espresso and chilled milk.',
    ingredients: [
      { name: 'MILK', color: '#ffffff' },
      { name: 'ESPRESSO', color: '#3d2b1f' },
      { name: 'ICE', color: '#e0f7fa' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=800',
    illustrationUrl: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=800',
  }
];

export const CATEGORIES = ['All', 'Iced Latte', 'Hot Coffee', 'Frappes', 'Tea'];
