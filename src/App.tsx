import { useState, useEffect } from 'react';
import { MENU_DATA, CATEGORIES, MenuItem } from './data/menu';
import Header from './components/Header';
import MenuItemCard from './components/MenuItemCard';
import ItemDetail from './components/ItemDetail';
import SplashScreen from './components/SplashScreen';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? MENU_DATA 
    : MENU_DATA.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onFinish={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative overflow-hidden">
        <Header />
        
        <main className="p-4 space-y-6 pb-20">
          {/* Category Tabs */}
          <Tabs defaultValue="All" onValueChange={setSelectedCategory} className="w-full">
            <ScrollArea className="w-full whitespace-nowrap">
              <TabsList className="bg-transparent h-auto p-0 gap-2">
                {CATEGORIES.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border/50 transition-all"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" className="hidden" />
            </ScrollArea>
          </Tabs>

          {/* Menu Grid */}
          <div className="grid grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <MenuItemCard 
                    item={item} 
                    onClick={setSelectedItem} 
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredItems.length === 0 && (
            <div className="py-20 text-center space-y-2">
              <p className="text-lg font-serif italic text-muted-foreground">Coming Soon...</p>
              <p className="text-xs uppercase tracking-widest opacity-50">We are brewing something special</p>
            </div>
          )}
        </main>

        {/* Detail View Overlay */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-50"
            >
              <ItemDetail 
                item={selectedItem} 
                onBack={() => setSelectedItem(null)} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
