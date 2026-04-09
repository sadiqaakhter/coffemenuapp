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
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
    illustrationUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
    voiceUrl: './voice/mint-mocha-iced-latte.mp3',
  }
];

export const CATEGORIES = ['All', 'Iced Latte', 'Hot Coffee', 'Frappes', 'Tea'];
