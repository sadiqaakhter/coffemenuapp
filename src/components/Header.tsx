import { Coffee } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center py-10 bg-background">
      <h1 className="text-4xl font-bold tracking-[-0.05em] text-foreground font-serif">BREWESTA</h1>
      <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mt-2">Visual Menu Experience</p>
    </header>
  );
}
