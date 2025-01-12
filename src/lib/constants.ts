export const SERVICES = [
  {
    id: 'ps5',
    name: 'PlayStation 5',
    price: 800,
    description: 'Игровая консоль последнего поколения',
  },
  { id: 'ps4', name: 'PlayStation 4', price: 600, description: 'Классическая игровая консоль' },
  { id: 'pc', name: 'Игровой ПК', price: 1000, description: 'Мощный компьютер для любых игр' },
  { id: 'vr', name: 'VR-шлем', price: 1200, description: 'Погружение в виртуальную реальность' },
] as const;
export const CONTACT_INFO = {
  phone: '+7 (999) 123-45-67',
  address: 'ул. Геймерская, 42',
  email: 'info@gameroom.ru',
  workingHours: '10:00 - 22:00',
} as const;
