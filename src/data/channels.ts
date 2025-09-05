export interface Channel {
    name: string;
    url: string;
    category: string;
    icon: string;
    description?: string;
  }
  
  export const channels: Channel[] = [
    // Películas
    { name: 'A3 CINE', url: 'http://177.253.232.83:9088/play/a02q/index.m3u8', category: 'peliculas', icon: '/src/assets/images/a3-cine-logo.svg', description: 'Canal de películas 24/7' },
    { name: 'Cine Canal', url: 'http://177.253.232.83:9088/play/a01s/index.m3u8', category: 'peliculas', icon: 'fas fa-film', description: 'Cine de calidad' },
    { name: 'Cine Familiar HD', url: 'http://177.253.232.83:9088/play/a01f/index.m3u8', category: 'peliculas', icon: 'fas fa-users', description: 'Películas para toda la familia' },
    { name: 'Cine Hispano HD', url: 'http://177.253.232.83:9088/play/a01e/index.m3u8', category: 'peliculas', icon: 'fas fa-film', description: 'Cine en español' },
    { name: 'Cine Latino', url: 'http://177.253.232.83:9088/play/a02p/index.m3u8', category: 'peliculas', icon: 'fas fa-film', description: 'Películas latinas' },
    { name: 'Cine Premium HD', url: 'http://177.253.232.83:9088/play/a01d/index.m3u8', category: 'peliculas', icon: 'fas fa-star', description: 'Cine premium' },
    { name: 'Multipremier', url: 'http://177.253.232.83:9088/play/a02l/index.m3u8', category: 'peliculas', icon: 'fas fa-star', description: 'Estrenos de películas' },
  
    // Infantil
    { name: 'Baby TV', url: 'http://177.253.232.83:9088/play/a01i/index.m3u8', category: 'infantil', icon: 'fas fa-baby', description: 'TV para bebés' },
    { name: 'Canal Infantil HD', url: 'http://177.253.232.83:9088/play/a01h/index.m3u8', category: 'infantil', icon: 'fas fa-child', description: 'Contenido infantil' },
    { name: 'Disney Channel', url: 'http://177.253.232.83:9088/play/a014/index.m3u8', category: 'infantil', icon: 'fas fa-magic', description: 'Disney Channel' },
    { name: 'Disney Junior', url: 'http://177.253.232.83:9088/play/a013/index.m3u8', category: 'infantil', icon: 'fas fa-magic', description: 'Disney Junior' },
    { name: 'Dreamworks Latam', url: 'http://177.253.232.83:9088/play/a012/index.m3u8', category: 'infantil', icon: 'fas fa-dragon', description: 'Dreamworks Latinoamérica' },
    { name: 'Discovery Kids', url: 'http://177.253.232.83:9088/play/a018/index.m3u8', category: 'infantil', icon: 'fas fa-child', description: 'Discovery Kids' },
    { name: 'Discovery Kits', url: 'http://177.253.232.83:9088/play/a017/index.m3u8', category: 'infantil', icon: 'fas fa-child', description: 'Discovery Kits' },
    { name: 'Nick Jr', url: 'http://177.253.232.83:9088/play/a00p/index.m3u8', category: 'infantil', icon: 'fas fa-child', description: 'Nick Jr' },
  
    // Nacional
    { name: 'CARACOL HD', url: 'http://177.253.232.83:9088/play/a01g/index.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'Caracol Televisión' },
    { name: 'RCN', url: 'http://177.253.232.83:9088/play/a00m/index.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'RCN Televisión' },
    { name: 'RCN 2', url: 'http://177.253.232.83:9088/play/a00l/index.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'RCN 2' },
    { name: 'SU Colombia', url: 'http://177.253.232.83:9088/play/a00g/index.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'Señal U Colombia' },
    { name: 'TELE MEDELLIN', url: 'http://177.253.232.83:9088/play/a00f/index.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'Telemedellín' },
    { name: 'TELEMEDELLIN IPTV', url: 'http://177.253.232.83:9088/play/a030/index.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'Telemedellín IPTV' },
    { name: 'Tele Yolombo', url: 'http://177.253.232.83:9088/play/a00d/index.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'Tele Yolombo' },
    { name: 'UC Colombia', url: 'http://177.253.232.83:9088/play/a008/index.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'UC Colombia' },
    { name: 'nuestra tele', url: 'http://177.253.232.83:9088/play/a02j/index.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'Nuestra Tele' },
  
    // Deportes
    { name: 'ESPN', url: 'http://177.253.232.83:9088/play/a011/index.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'ESPN' },
    { name: 'ESPN 2', url: 'http://177.253.232.83:9088/play/a010/index.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'ESPN 2' },
    { name: 'ESPN 4', url: 'http://177.253.232.83:9088/play/a00z/index.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'ESPN 4' },
    { name: 'ESPN 5', url: 'http://177.253.232.83:9088/play/a00y/index.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'ESPN 5' },
    { name: 'ESPN 6', url: 'http://177.253.232.83:9088/play/a00x/index.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'ESPN 6' },
    { name: 'ESPN 7', url: 'http://177.253.232.83:9088/play/a00w/index.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'ESPN 7' },
    { name: 'ESPN 8', url: 'http://177.253.232.83:9088/play/a00v/index.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'ESPN 8' },
    { name: 'TyC Sports', url: 'http://177.253.232.83:9088/play/a009/index.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'TyC Sports' },
    { name: 'WinSport Bk', url: 'http://177.253.232.83:9088/play/a01r/index.m3u8', category: 'deportes', icon: 'fas fa-basketball-ball', description: 'WinSport Baloncesto' },
    { name: 'WinSport Prin', url: 'http://177.253.232.83:9088/play/a01q/index.m3u8', category: 'deportes', icon: 'fas fa-trophy', description: 'WinSport Principal' },
    { name: 'WindSport 2 Remplazo', url: 'http://177.253.232.83:9088/play/a024/index.m3u8', category: 'deportes', icon: 'fas fa-trophy', description: 'WinSport 2' },
  
    // Entretenimiento
    { name: 'Discovery Channel', url: 'http://177.253.232.83:9088/play/a01a/index.m3u8', category: 'entretenimiento', icon: 'fas fa-compass', description: 'Discovery Channel' },
    { name: 'Discovery H&H', url: 'http://177.253.232.83:9088/play/a019/index.m3u8', category: 'entretenimiento', icon: 'fas fa-home', description: 'Discovery H&H' },
    { name: 'Discovery Theater', url: 'http://177.253.232.83:9088/play/a016/index.m3u8', category: 'entretenimiento', icon: 'fas fa-theater-masks', description: 'Discovery Theater' },
    { name: 'Discovery Turbo', url: 'http://177.253.232.83:9088/play/a015/index.m3u8', category: 'entretenimiento', icon: 'fas fa-car', description: 'Discovery Turbo' },
    { name: 'Comedy Central', url: 'http://177.253.232.83:9088/play/a01c/index.m3u8', category: 'entretenimiento', icon: 'fas fa-laugh', description: 'Comedy Central' },
    { name: 'DHE', url: 'http://177.253.232.83:9088/play/a01b/index.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'DHE' },
    { name: 'EI', url: 'http://177.253.232.83:9088/play/a02w/index.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'EI' },
    { name: 'FX', url: 'http://177.253.232.83:9088/play/a003/index.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'FX' },
    { name: 'Food', url: 'http://177.253.232.83:9088/play/a00t/index.m3u8', category: 'entretenimiento', icon: 'fas fa-utensils', description: 'Food Network' },
    { name: 'Global Media', url: 'http://177.253.232.83:9088/play/a00s/index.m3u8', category: 'entretenimiento', icon: 'fas fa-globe', description: 'Global Media' },
    { name: 'ID', url: 'http://177.253.232.83:9088/play/a00q/index.m3u8', category: 'entretenimiento', icon: 'fas fa-search', description: 'Investigation Discovery' },
    { name: 'FMH', url: 'http://177.253.232.83:9088/play/a02s/index.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'FMH' },
    { name: 'Paramount Network', url: 'http://177.253.232.83:9088/play/a00n/index.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'Paramount Network' },
    { name: 'Start Channel', url: 'http://177.253.232.83:9088/play/a00h/index.m3u8', category: 'entretenimiento', icon: 'fas fa-play', description: 'Start Channel' },
    { name: 'TLC', url: 'http://177.253.232.83:9088/play/a00a/index.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'TLC' },
    { name: 'Telemundo', url: 'http://177.253.232.83:9088/play/a02v/index.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'Telemundo' },
    { name: 'USA Latam', url: 'http://177.253.232.83:9088/play/a007/index.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'USA Latinoamérica' },
    { name: 'Venevision', url: 'http://177.253.232.83:9088/play/a006/index.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'Venevisión' },
  
    // Música
    { name: 'Mi Musica HD Popular', url: 'http://177.253.232.83:9088/play/a00i/index.m3u8', category: 'musica', icon: 'fas fa-music', description: 'Música Popular' },
    { name: 'MiMusica HD Reggaeton', url: 'http://177.253.232.83:9088/play/a001/index.m3u8', category: 'musica', icon: 'fas fa-music', description: 'Reggaeton' },
    { name: 'MiMusica HD Regional', url: 'http://177.253.232.83:9088/play/a00k/index.m3u8', category: 'musica', icon: 'fas fa-music', description: 'Música Regional' },
    { name: 'MiMusica HD Salsa', url: 'http://177.253.232.83:9088/play/a002/index.m3u8', category: 'musica', icon: 'fas fa-music', description: 'Salsa' },
    { name: 'Nick Music', url: 'http://177.253.232.83:9088/play/a00o/index.m3u8', category: 'musica', icon: 'fas fa-music', description: 'Nick Music' },
  
    // Noticias
    { name: 'DW - Envia', url: 'http://177.253.232.83:9088/play/a01z/index.m3u8', category: 'noticias', icon: 'fas fa-globe', description: 'Deutsche Welle' },
    { name: 'DW - Recibe', url: 'http://177.253.232.83:9088/play/a021/index.m3u8', category: 'noticias', icon: 'fas fa-globe', description: 'Deutsche Welle' },
  
    // Otros
    { name: 'test', url: 'http://177.253.232.83:9088/play/a02z/index.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'Canal de prueba' },
  ];
  
  export const categories = [
    { id: 'all', name: 'Todos los Canales', icon: 'fas fa-tv' },
    { id: 'peliculas', name: 'Películas', icon: 'fas fa-film' },
    { id: 'infantil', name: 'Infantil', icon: 'fas fa-child' },
    { id: 'nacional', name: 'Nacional', icon: 'fas fa-flag' },
    { id: 'deportes', name: 'Deportes', icon: 'fas fa-futbol' },
    { id: 'entretenimiento', name: 'Entretenimiento', icon: 'fas fa-tv' },
    { id: 'musica', name: 'Música', icon: 'fas fa-music' },
    { id: 'noticias', name: 'Noticias', icon: 'fas fa-newspaper' },
  ];
  
  export const getChannelsByCategory = (category: string) => {
    if (category === 'all') return channels;
    return channels.filter(channel => channel.category === category);
  };
  
  export const getFeaturedChannels = () => {
    return channels.slice(0, 12);
  };
  