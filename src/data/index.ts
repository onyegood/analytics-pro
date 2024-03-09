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

export const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
export const values1 = [90, 100, 200, 200, 200];
export const values2 = [5, 20, 7, 10, 80];
