import { MenuItem } from '@/src/data/menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Play, Volume2, Thermometer, Droplets, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface ItemDetailProps {
  item: MenuItem;
  onBack: () => void;
}

export default function ItemDetail({ item, onBack }: ItemDetailProps) {
  const [view, setView] = useState<'video' | 'illustration'>('video');

  const speakName = () => {
    if (item.voiceUrl) {
      const audio = new Audio(item.voiceUrl);
      audio.play().catch(err => {
        console.error("Audio playback failed:", err);
        // Fallback to speech synthesis if audio file fails
        const utterance = new SpeechSynthesisUtterance(item.name);
        window.speechSynthesis.speak(utterance);
      });
    } else {
      const utterance = new SpeechSynthesisUtterance(item.name);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/50 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <Button variant="ghost" size="icon" onClick={onBack} className="rounded-full">
          <ArrowLeft size={24} />
        </Button>
        <h2 className="font-serif text-xl font-bold truncate px-4">{item.name}</h2>
        <Button variant="ghost" size="icon" onClick={speakName} className="rounded-full text-primary">
          <Volume2 size={24} />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto pb-24">
        {/* Visual Section */}
        <div className="relative aspect-[9/16] max-h-[70vh] w-full bg-black overflow-hidden">
          <AnimatePresence mode="wait">
            {view === 'video' ? (
              <motion.div
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full"
              >
                <video 
                  src={`/videos/${item.id}.mp4`} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ) : (
              <motion.div
                key="illustration"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full relative bg-white"
              >
                 <img 
                  src={`/${item.id}.png`} 
                  alt={`${item.name} Illustration`}
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    // Fallback to illustrations folder if root fails
                    (e.target as HTMLImageElement).src = `/illustrations/${item.id}.png`;
                  }}
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* View Toggle Slider */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-xl p-1 rounded-full flex gap-1 border border-white/30">
            <Button
              variant={view === 'video' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setView('video')}
              className={`rounded-full px-6 transition-all ${view === 'video' ? 'bg-white text-black hover:bg-white' : 'text-white hover:bg-white/10'}`}
            >
              Video
            </Button>
            <Button
              variant={view === 'illustration' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setView('illustration')}
              className={`rounded-full px-6 transition-all ${view === 'illustration' ? 'bg-white text-black hover:bg-white' : 'text-white hover:bg-white/10'}`}
            >
              Ingredients
            </Button>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-6 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold font-serif leading-tight">{item.name}</h1>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">Rs. {item.price}</p>
                {item.originalPrice && (
                  <p className="text-sm text-muted-foreground line-through">Rs. {item.originalPrice}</p>
                )}
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-muted/50 p-4 rounded-2xl flex flex-col items-center text-center gap-2">
              <Thermometer className="text-primary" size={20} />
              <div className="space-y-0.5">
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-50">Temp</p>
                <p className="text-sm font-semibold">{item.temperature}</p>
              </div>
            </div>
            <div className="bg-muted/50 p-4 rounded-2xl flex flex-col items-center text-center gap-2">
              <Droplets className="text-primary" size={20} />
              <div className="space-y-0.5">
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-50">Volume</p>
                <p className="text-sm font-semibold">{item.volume}</p>
              </div>
            </div>
            <div className="bg-muted/50 p-4 rounded-2xl flex flex-col items-center text-center gap-2">
              <Scale className="text-primary" size={20} />
              <div className="space-y-0.5">
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-50">Size</p>
                <p className="text-sm font-semibold">{item.size}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
