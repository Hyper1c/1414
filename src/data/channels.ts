import { Channel, ChannelCategory } from '../types/channel';

export const channels: Channel[] = [
  {
    id: '1',
    name: 'Canal Demo',
    url: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
    logo: 'https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'movies',
    description: 'Canal de demostración',
    icon: 'fas fa-film',
    isFavorite: false
  },
  {
    id: '2',
    name: 'Kids Channel',
    url: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
    logo: 'https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'kids',
    description: 'Canal infantil',
    icon: 'fas fa-baby',
    isFavorite: false
  },
  {
    id: '3',
    name: 'Sports TV',
    url: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
    logo: 'https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'sports',
    description: 'Canal de deportes',
    icon: 'fas fa-futbol',
    isFavorite: false
  }
];

export const categories = [
  { id: 'all', name: 'Todos los Canales' },
  { id: 'movies', name: 'Películas' },
  { id: 'kids', name: 'Infantil' },
  { id: 'sports', name: 'Deportes' },
  { id: 'entertainment', name: 'Entretenimiento' },
  { id: 'music', name: 'Música' },
  { id: 'news', name: 'Noticias' }
];