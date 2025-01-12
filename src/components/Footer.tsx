import { Separator } from '@/components/ui/separator';
export function Footer() {
  return (
    <footer className="bg-gamer-background py-8">
      <div className="container mx-auto">
        <Separator className="mb-8 bg-gamer-primary" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-gamer-primary">Game Room</h3>
            <p className="text-sm">Лучшая игровая комната в городе</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-gamer-secondary">Соцсети</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gamer-primary transition-colors">
                VK
              </a>
              <a href="#" className="hover:text-gamer-primary transition-colors">
                Telegram
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-gamer-accent">Помощь</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gamer-primary transition-colors">
                  Правила
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gamer-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-sm mt-8">© 2024 Game Room. Все права защищены.</p>
      </div>
    </footer>
  );
}
