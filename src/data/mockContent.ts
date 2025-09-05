export interface ContentItem {
  id: string;
  title: string;
  year: number;
  genre: string;
  image: string;
  type: 'movie' | 'series';
  rating?: number;
  duration?: string;
  synopsis?: string;
  cast?: string[];
}

export const mockMovies: ContentItem[] = [
  {
    id: '1',
    title: 'Acción Extrema',
    year: 2023,
    genre: 'Acción',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'movie',
    rating: 8.5,
    duration: '2h 15min',
    synopsis: 'Una película llena de acción y aventuras que te mantendrá al borde de tu asiento.',
    cast: ['Actor Principal', 'Actriz Secundaria', 'Actor de Reparto']
  },
  {
    id: '2',
    title: 'Drama Familiar',
    year: 2022,
    genre: 'Drama',
    image: 'https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'movie',
    rating: 7.8,
    duration: '1h 45min',
    synopsis: 'Una conmovedora historia sobre los lazos familiares y la superación personal.',
    cast: ['Protagonista Drama', 'Actor Veterano', 'Actriz Joven']
  },
  {
    id: '3',
    title: 'Comedia Romántica',
    year: 2023,
    genre: 'Romance',
    image: 'https://images.pexels.com/photos/7991581/pexels-photo-7991581.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'movie',
    rating: 7.2,
    duration: '1h 30min',
    synopsis: 'Una divertida comedia romántica que te hará reír y suspirar.',
    cast: ['Actor Cómico', 'Actriz Romántica', 'Mejor Amigo']
  },
  {
    id: '4',
    title: 'Thriller Psicológico',
    year: 2023,
    genre: 'Thriller',
    image: 'https://images.pexels.com/photos/7991582/pexels-photo-7991582.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'movie',
    rating: 8.9,
    duration: '2h 5min',
    synopsis: 'Un thriller psicológico que desafiará tu mente y te mantendrá adivinando.',
    cast: ['Actor Principal', 'Antagonista', 'Detective']
  }
];

export const mockSeries: ContentItem[] = [
  {
    id: '5',
    title: 'Serie de Misterio',
    year: 2023,
    genre: 'Misterio',
    image: 'https://images.pexels.com/photos/7991583/pexels-photo-7991583.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'series',
    rating: 9.1,
    duration: '8 episodios',
    synopsis: 'Una serie de misterio que te mantendrá enganchado episodio tras episodio.',
    cast: ['Detective Principal', 'Sospechoso', 'Testigo Clave']
  },
  {
    id: '6',
    title: 'Drama Histórico',
    year: 2022,
    genre: 'Drama',
    image: 'https://images.pexels.com/photos/7991584/pexels-photo-7991584.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'series',
    rating: 8.7,
    duration: '10 episodios',
    synopsis: 'Una épica serie histórica que recrea eventos importantes del pasado.',
    cast: ['Rey', 'Reina', 'Consejero Real']
  },
  {
    id: '7',
    title: 'Ciencia Ficción',
    year: 2023,
    genre: 'Sci-Fi',
    image: 'https://images.pexels.com/photos/7991585/pexels-photo-7991585.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'series',
    rating: 8.3,
    duration: '12 episodios',
    synopsis: 'Una serie de ciencia ficción que explora el futuro de la humanidad.',
    cast: ['Capitán Espacial', 'Científica', 'Androide']
  }
];

export const mockKidsContent: ContentItem[] = [
  {
    id: '8',
    title: 'Aventuras Animadas',
    year: 2023,
    genre: 'Animación',
    image: 'https://images.pexels.com/photos/7991586/pexels-photo-7991586.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'series',
    rating: 8.0,
    duration: '20 episodios',
    synopsis: 'Divertidas aventuras animadas para toda la familia.',
    cast: ['Héroe Animado', 'Mascota Fiel', 'Villano Cómico']
  },
  {
    id: '9',
    title: 'Película Familiar',
    year: 2022,
    genre: 'Familiar',
    image: 'https://images.pexels.com/photos/7991587/pexels-photo-7991587.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'movie',
    rating: 7.5,
    duration: '1h 20min',
    synopsis: 'Una película perfecta para disfrutar en familia.',
    cast: ['Niño Protagonista', 'Padre', 'Madre']
  },
  {
    id: '10',
    title: 'Cuentos Mágicos',
    year: 2023,
    genre: 'Fantasía',
    image: 'https://images.pexels.com/photos/7991588/pexels-photo-7991588.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'series',
    rating: 8.2,
    duration: '15 episodios',
    synopsis: 'Cuentos mágicos llenos de aventura y diversión para los más pequeños.',
    cast: ['Hada Madrina', 'Príncipe', 'Princesa']
  }
];

export const mockComedyContent: ContentItem[] = [
  {
    id: '11',
    title: 'Comedia Stand-up',
    year: 2023,
    genre: 'Comedia',
    image: 'https://images.pexels.com/photos/7991589/pexels-photo-7991589.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'movie',
    rating: 7.9,
    duration: '1h 15min',
    synopsis: 'El mejor stand-up comedy del año que te hará reír sin parar.',
    cast: ['Comediante Principal']
  },
  {
    id: '12',
    title: 'Sitcom Clásica',
    year: 2022,
    genre: 'Comedia',
    image: 'https://images.pexels.com/photos/7991590/pexels-photo-7991590.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'series',
    rating: 8.4,
    duration: '22 episodios',
    synopsis: 'Una sitcom clásica que nunca pasa de moda.',
    cast: ['Protagonista Cómico', 'Vecino Excéntrico', 'Mejor Amiga']
  },
  {
    id: '13',
    title: 'Parodia Musical',
    year: 2023,
    genre: 'Musical',
    image: 'https://images.pexels.com/photos/7991591/pexels-photo-7991591.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'movie',
    rating: 7.6,
    duration: '1h 40min',
    synopsis: 'Una divertida parodia musical que combina humor y música.',
    cast: ['Cantante Principal', 'Bailarín', 'Director Musical']
  }
];