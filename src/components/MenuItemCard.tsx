import { MenuItem } from '@/src/data/menu';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

interface MenuItemCardProps {
  item: MenuItem;
  onClick: (item: MenuItem) => void;
}

export default function MenuItemCard({ item, onClick }: MenuItemCardProps) {
  const baseUrl = import.meta.env.BASE_URL;
  const imageUrl = item.imageUrl.startsWith('http') 
    ? item.imageUrl 
    : `${baseUrl}${item.imageUrl.replace(/^\.\//, '')}`;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(item)}
      className="cursor-pointer group"
    >
      <Card className="overflow-hidden border-none shadow-none bg-transparent rounded-none">
        <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-secondary/10">
          <img
            src={imageUrl}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
        <CardContent className="px-1 py-3 text-center">
          <h3 className="font-sans text-sm font-bold leading-tight text-foreground mb-1 line-clamp-1">
            {item.name}
          </h3>
          <p className="font-bold text-sm text-primary">Rs. {item.price}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
