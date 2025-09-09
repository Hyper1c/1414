import type { Channel } from '../types/channel';
  
  export const channels: Channel[] = [
  // Canales Nacionales Principales - URLs HTTPS compatibles
  { name: 'Caracol TV', url: 'https://mdstrm.com/live-stream-playlist/574463697b9817cf0886fc17.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'Caracol Televisión' },
  { name: 'Canal 1', url: 'https://mdstrm.com/live-stream-playlist/5a5e1c2568b1910913db5fe2.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'Canal 1 Colombia' },
  { name: 'RCN', url: 'https://mdstrm.com/live-stream-playlist/58a36704896500b908cf1abe.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'RCN Televisión' },
  { name: 'Telepacifico', url: 'https://stream.logicideas.media/telepacifico-live/smil:live.smil/playlist.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'Telepacifico' },
  { name: 'Canal Capital', url: 'https://mdstrm.com/live-stream-playlist/57d01d6c28b5e2120b1d1c1e.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'Canal Capital' },
  { name: 'Señal Colombia', url: 'https://streaming.rtvc.gov.co/TV_Senal_Colombia_live/smil:live.smil/playlist.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'Señal Colombia' },
  { name: 'Canal Institucional', url: 'https://streaming.rtvc.gov.co/TV_CanalInstitucional_live/smil:live.smil/playlist.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'Canal Institucional' },
  { name: 'Canal Congreso', url: 'https://streaming.rtvc.gov.co/TV_CanalCongreso_live/smil:live.smil/playlist.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'Canal Congreso' },
  { name: 'Zoom TV', url: 'https://canalzoom.smoothcloud.co:3027/live/canalzoombr1live.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'Zoom TV' },
  { name: 'TRO', url: 'https://liveingesta118.cdnmedia.tv/telepacifico2live/smil:live.smil/playlist.m3u8', category: 'nacional', icon: 'fas fa-tv', description: 'TRO' },

  // Noticias - URLs HTTPS compatibles
  { name: 'DW Español', url: 'https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8', category: 'noticias', icon: 'fas fa-globe', description: 'Deutsche Welle Español' },
  { name: 'France 24 Español', url: 'https://static.france24.com/live/F24_ES_LO_HLS/live_web.m3u8', category: 'noticias', icon: 'fas fa-globe', description: 'France 24 Español' },
  { name: 'RT Español', url: 'https://rt-esp.rttv.com/live/rtesp/playlist.m3u8', category: 'noticias', icon: 'fas fa-globe', description: 'RT Español' },
  { name: 'CNN en Español', url: 'https://cnn-cnninternational-1-eu.rakuten.wurl.tv/playlist.m3u8', category: 'noticias', icon: 'fas fa-globe', description: 'CNN en Español' },
  { name: 'Euronews Español', url: 'https://rakuten-euronews-4-es.samsung.wurl.tv/playlist.m3u8', category: 'noticias', icon: 'fas fa-globe', description: 'Euronews Español' },
  
  // Canales Regionales - URLs HTTPS compatibles
  { name: 'Canal 2 Alpavisión', url: 'https://stmv1.voxtvhd.com.br/alpavision/alpavision/playlist.m3u8', category: 'regional', icon: 'fas fa-tv', description: 'Canal 2 Alpavisión Neiva' },
  { name: 'Canal 8 TV+', url: 'https://movil.ejeserver.com/live/canal8tv.m3u8', category: 'regional', icon: 'fas fa-tv', description: 'Canal 8 TV+' },
  { name: 'Canal Más TV', url: 'https://movil.ejeserver.com/live/teledoradahd.m3u8', category: 'regional', icon: 'fas fa-tv', description: 'Canal Más Televisión' },
  { name: 'Canal Nets', url: 'https://movil.ejeserver.com/live/nets.m3u8', category: 'regional', icon: 'fas fa-tv', description: 'Canal Nets' },
  { name: 'CNC Santander', url: 'https://movil.ejeserver.com/live/cncsantander.m3u8', category: 'regional', icon: 'fas fa-tv', description: 'CNC Santander de Quilichao' },
  { name: 'Tele San Jacinto', url: 'https://movil.ejeserver.com/live/telesanjacinto.m3u8', category: 'regional', icon: 'fas fa-tv', description: 'Tele San Jacinto' },
  { name: 'TV Peñol', url: 'https://stmv1.voxtvhd.com.br/tvpenol/tvpenol/playlist.m3u8', category: 'regional', icon: 'fas fa-tv', description: 'TV Peñol' },
  { name: 'TV San Jorge', url: 'https://asucap.com/livestream/asucap_envivo.m3u8', category: 'regional', icon: 'fas fa-tv', description: 'TV San Jorge' },
  { name: 'Suram TV', url: 'https://livetv.305streamhd.com:3111/live/suramtvlive.m3u8', category: 'regional', icon: 'fas fa-tv', description: 'Suram TV' },
  { name: 'Oasis TV', url: 'https://5e85d90130e77.streamlock.net/6020/6020/playlist.m3u8', category: 'regional', icon: 'fas fa-tv', description: 'Oasis TV' },
  { name: 'Cosmovision', url: 'https://videohls2.cosmovision.tv/hls/sd.m3u8', category: 'regional', icon: 'fas fa-tv', description: 'Cosmovision' },

  // Canales Religiosos - URLs HTTPS compatibles
  { name: 'Avivamiento TV', url: 'https://s1.abntelevision.com/avivamientoabr/stream/avivamientohd/avivamientohd/playlist.m3u8', category: 'religioso', icon: 'fas fa-cross', description: 'Avivamiento TV' },
  { name: 'Canal Telefamilia', url: 'https://stmv2.voxtvhd.com.br/telefamilia/telefamilia/playlist.m3u8', category: 'religioso', icon: 'fas fa-cross', description: 'Canal Telefamilia' },
  { name: 'CMB Television', url: 'https://catv.cmbcolombia.tv/bethesda/bethesda/playlist.m3u8', category: 'religioso', icon: 'fas fa-cross', description: 'CMB Television' },
  { name: 'Frecuencia F TV', url: 'https://tv.frecuenciaf.com/live/envivo.m3u8', category: 'religioso', icon: 'fas fa-cross', description: 'Frecuencia F TV' },
  { name: 'Tu Universo TV', url: 'https://5bf8041cb3fed.streamlock.net/TUUNIVERSOTV/TUUNIVERSOTV/playlist.m3u8', category: 'religioso', icon: 'fas fa-cross', description: 'Tu Universo TV' },
  { name: 'EWTN Español', url: 'https://cdn3.wowza.com/1/SmVrQmZCUXZhVDgz/b3J3MFJv/hls/live/playlist.m3u8', category: 'religioso', icon: 'fas fa-cross', description: 'EWTN Español' },

  // Canales de Música - URLs HTTPS compatibles
  { name: 'La Hermandad Salsera', url: 'https://streamlov.alsolnet.com/hermandadsalsera/live/playlist.m3u8', category: 'musica', icon: 'fas fa-music', description: 'La Hermandad Salsera' },
  { name: 'MasMusica FM', url: 'https://movil.ejeserver.com/live/masmusica.m3u8', category: 'musica', icon: 'fas fa-music', description: 'MasMusica FM' },
  { name: 'Salsa Gorda TV', url: 'https://www.televinterserver.com:19360/salsagordatv/salsagordatv.m3u8', category: 'musica', icon: 'fas fa-music', description: 'Salsa Gorda Television' },
  { name: 'Vallenato Internacional', url: 'https://59a564764e2b6.streamlock.net/vallenato/vallenatom/playlist.m3u8', category: 'musica', icon: 'fas fa-music', description: 'Vallenato Internacional' },
  { name: 'Ondambiental TV', url: 'https://stmv4.voxtvhd.com.br/ondastereo/ondastereo/playlist.m3u8', category: 'musica', icon: 'fas fa-music', description: 'Ondambiental TV' },
  { name: 'MTV Live HD', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS02/master.m3u8', category: 'musica', icon: 'fas fa-music', description: 'MTV Live HD' },
  { name: 'VH1 Classic', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS03/master.m3u8', category: 'musica', icon: 'fas fa-music', description: 'VH1 Classic' },

  // Canales de Entretenimiento - URLs HTTPS compatibles
  { name: 'Red+', url: 'https://inforedvos.lcdn.claro.net.co/Content/HLS_HLS_DIR/Live/channel(REDMASHDWEB)/master.m3u8', category: 'noticias', icon: 'fas fa-globe', description: 'Red+' },
  { name: 'Discovery Channel', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS07/master.m3u8', category: 'entretenimiento', icon: 'fas fa-compass', description: 'Discovery Channel' },
  { name: 'National Geographic', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS08/master.m3u8', category: 'entretenimiento', icon: 'fas fa-globe', description: 'National Geographic' },
  { name: 'History Channel', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS09/master.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'History Channel' },
  { name: 'Comedy Central', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS04/master.m3u8', category: 'entretenimiento', icon: 'fas fa-laugh', description: 'Comedy Central' },
  { name: 'Food Network', url: 'https://food-network-food-network-1-es.samsung.wurl.tv/playlist.m3u8', category: 'entretenimiento', icon: 'fas fa-utensils', description: 'Food Network' },
  { name: 'Animal Planet', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS10/master.m3u8', category: 'entretenimiento', icon: 'fas fa-paw', description: 'Animal Planet' },
  { name: 'Travel Channel', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS11/master.m3u8', category: 'entretenimiento', icon: 'fas fa-plane', description: 'Travel Channel' },
  { name: 'TLC', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS12/master.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'TLC' },
  { name: 'Telemundo', url: 'https://nbcu-telemundo-firetv.amagi.tv/playlist.m3u8', category: 'entretenimiento', icon: 'fas fa-tv', description: 'Telemundo' },

  // Canales de Deportes - URLs HTTPS compatibles
  { name: 'ESPN Deportes', url: 'https://espn-live.hls.ttvnw.net/v1/segment/CjAKDQgAEAEYASAAKAEwABIgMzM2NzM4NzAtNzc4Zi00YzI4LWI4YzMtNzU4ZjU4ZjU4ZjU4/0.ts', category: 'deportes', icon: 'fas fa-futbol', description: 'ESPN Deportes' },
  { name: 'Fox Sports', url: 'https://fox-sports-spanish-fox-sports-spanish-1-es.samsung.wurl.tv/playlist.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'Fox Sports' },
  { name: 'TyC Sports', url: 'https://d3055hobuue3je.cloudfront.net/out/v1/188a8f3baf914a35868453bd5d0b0fd2/index.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'TyC Sports' },
  { name: 'Claro Sports', url: 'https://claro-jw.cdn.vustreams.com/live/channel07/live.isml/live.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'Claro Sports' },
  { name: 'Win Sports', url: 'https://dtv-live-win-sports.clarovideo.net/Content/HLS_HLS_FK/Live/channel(WIN_SPORTS)/master.m3u8', category: 'deportes', icon: 'fas fa-trophy', description: 'Win Sports' },
  { name: 'Gol TV', url: 'https://goltv.clarovideo.net/Content/HLS_HLS_FK/Live/channel(GOLTV)/master.m3u8', category: 'deportes', icon: 'fas fa-futbol', description: 'Gol TV' },
  { name: 'NBA TV', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS13/master.m3u8', category: 'deportes', icon: 'fas fa-basketball-ball', description: 'NBA TV' },
  { name: 'MLB Network', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS14/master.m3u8', category: 'deportes', icon: 'fas fa-baseball-ball', description: 'MLB Network' },

  // Canales de Películas - URLs HTTPS compatibles
  { name: 'Cine Clásico', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS15/master.m3u8', category: 'peliculas', icon: 'fas fa-film', description: 'Películas clásicas 24/7' },
  { name: 'Cine Acción', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS16/master.m3u8', category: 'peliculas', icon: 'fas fa-film', description: 'Películas de acción' },
  { name: 'Cine Familiar', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS17/master.m3u8', category: 'peliculas', icon: 'fas fa-users', description: 'Películas familiares' },
  { name: 'Cine Terror', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS18/master.m3u8', category: 'peliculas', icon: 'fas fa-film', description: 'Películas de terror' },
  { name: 'Cine Comedia', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS19/master.m3u8', category: 'peliculas', icon: 'fas fa-laugh', description: 'Películas de comedia' },
  { name: 'Cine Drama', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS20/master.m3u8', category: 'peliculas', icon: 'fas fa-film', description: 'Películas dramáticas' },
  { name: 'Cine Español', url: 'https://rakuten-spanish-movies-1-es.samsung.wurl.tv/playlist.m3u8', category: 'peliculas', icon: 'fas fa-film', description: 'Cine en español' },

  // Canales Infantiles - URLs HTTPS compatibles
  { name: 'Baby TV', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS21/master.m3u8', category: 'infantil', icon: 'fas fa-baby', description: 'TV para bebés' },
  { name: 'Disney Channel', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS22/master.m3u8', category: 'infantil', icon: 'fas fa-magic', description: 'Disney Channel' },
  { name: 'Disney Junior', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS23/master.m3u8', category: 'infantil', icon: 'fas fa-magic', description: 'Disney Junior' },
  { name: 'Nickelodeon', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS24/master.m3u8', category: 'infantil', icon: 'fas fa-child', description: 'Nickelodeon' },
  { name: 'Nick Jr', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS25/master.m3u8', category: 'infantil', icon: 'fas fa-child', description: 'Nick Jr' },
  { name: 'Cartoon Network', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS26/master.m3u8', category: 'infantil', icon: 'fas fa-child', description: 'Cartoon Network' },
  { name: 'Discovery Kids', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS27/master.m3u8', category: 'infantil', icon: 'fas fa-child', description: 'Discovery Kids' },
  { name: 'Boomerang', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS28/master.m3u8', category: 'infantil', icon: 'fas fa-child', description: 'Boomerang' },
  // Canales Educativos - URLs HTTPS compatibles
  { name: 'Eduvision', url: 'https://stmv3.voxtvhd.com.br/conex2/conex2/playlist.m3u8', category: 'educacion', icon: 'fas fa-graduation-cap', description: 'Eduvision' },
  { name: 'National Geographic Kids', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS29/master.m3u8', category: 'educacion', icon: 'fas fa-graduation-cap', description: 'National Geographic Kids' },
  { name: 'History for Kids', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS30/master.m3u8', category: 'educacion', icon: 'fas fa-graduation-cap', description: 'History for Kids' },
  { name: 'Science Channel', url: 'https://pluto-live.plutotv.net/egress/chandler/pluto01/live/VIACBS31/master.m3u8', category: 'educacion', icon: 'fas fa-graduation-cap', description: 'Science Channel' },
  ];
  
  export const categories = [
    { id: 'all', name: 'Todos los Canales', icon: 'fas fa-tv' },
    { id: 'nacional', name: 'Nacional', icon: 'fas fa-flag' },
    { id: 'regional', name: 'Regional', icon: 'fas fa-map-marker-alt' },
    { id: 'religioso', name: 'Religioso', icon: 'fas fa-cross' },
    { id: 'musica', name: 'Música', icon: 'fas fa-music' },
    { id: 'noticias', name: 'Noticias', icon: 'fas fa-newspaper' },
    { id: 'deportes', name: 'Deportes', icon: 'fas fa-futbol' },
    { id: 'entretenimiento', name: 'Entretenimiento', icon: 'fas fa-tv' },
    { id: 'peliculas', name: 'Películas', icon: 'fas fa-film' },
    { id: 'infantil', name: 'Infantil', icon: 'fas fa-child' },
    { id: 'educacion', name: 'Educación', icon: 'fas fa-graduation-cap' },
  ];
  
  export const getChannelsByCategory = (category: string) => {
    if (category === 'all') return channels;
    return channels.filter(channel => channel.category === category);
  };
  
  export const getFeaturedChannels = () => {
    return channels.slice(0, 12);
  };
