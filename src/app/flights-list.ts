import { Flight } from './flight';

export const Flights: Flight[] = [
  {from: 'Turkey', to: 'Istanbul', departure: new Date(2018, 12, 15), return: new Date(2018, 12, 18),
  adults: 5, children: 2, class: 'A' },

  {from: 'Turkey', to: 'Moscow', departure: new Date(2018, 12, 15), return: new Date(2018, 12, 22),
  adults: 10, children: 4, class: 'B' },

  {from: 'Turkey', to: 'Cairo', departure: new Date(2018, 12, 25), return: new Date(2018, 12, 29),
  adults: 10, children: 4, class: 'B' },

  {from: 'Russia', to: 'Istanbul', departure: new Date(2018, 12, 15), return: new Date(2018, 12, 25),
  adults: 10, children: 8, class: 'A' },

  {from: 'Russia', to: 'Moscow', departure: new Date(2018, 12, 15), return: new Date(2018, 12, 20),
  adults: 5, children: 8, class: 'C' },

  {from: 'Russia', to: 'Cairo', departure: new Date(2018, 12, 15), return: new Date(2018, 12, 18),
  adults: 15, children: 1, class: 'C' },

  {from: 'Egypt', to: 'Istanbul', departure: new Date(2018, 12, 15), return: new Date(2018, 12, 21),
  adults: 10, children: 1, class: 'A' },

  {from: 'Egypt', to: 'Moscow', departure: new Date(2018, 12, 16), return: new Date(2018, 12, 19),
  adults: 20, children: 4, class: 'B' },

  {from: 'Egypt', to: 'Cairo', departure: new Date(2018, 12, 15), return: new Date(2018, 12, 16),
  adults: 15, children: 2, class: 'C' }
];
