interface Revenu {
  id: number;
  image: string;
  price: string;
  title: string;
}

export const ravenu: Revenu[] = [
  {
    id: 1,
    image: '/assets/img/passport1.jpeg',
    title: 'Min price',
    price: '$1,200',
  },
  {
    id: 2,
    image: '/assets/img/avatar.png',
    title: 'Max price',
    price: '$2,320',
  },
];
