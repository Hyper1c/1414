export interface ContentItem {
  id: string;
  title: string;
  year: number;
  genre: string;
  image: string;
  type: 'movie' | 'series';
  rating?: number;
  synopsis?: string;
  duration?: string;
  cast?: string[];
  // URL de streaming opcional (HLS u otro)
  streamUrl?: string;
}

export const mockMovies: ContentItem[] = [
  {
    id: 'Nadie 2',
    title: 'Nadie 2',
    year: 2025,
    genre: 'Fantasía',
    image: 'https://image.tmdb.org/t/p/w200/aYPlrLJWjVkixwrJXA0f4V3D7Ab.jpg',
    type: 'movie',
    rating: 6.8,
    synopsis:
      'Cuatro años después de enfrentarse involuntariamente a la mafia rusa, Hutch sigue manteniendo con la organización criminal una deuda de 30 millones de dólares que trata de saldar poco a poco con una serie interminable de golpes contra matones internacionales. Pese a disfrutar como siempre de la faceta más trepidante y física de su «trabajo», Hutch y su esposa Becca se sienten agotados y distanciados. Para intentar remediarlo, deciden llevarse a sus hijos de escapada al mismo lugar al que Hutch iba de vacaciones con su hermano Harry cuando eran pequeños.',
    duration: 'Duración: 1h 29m',
    cast: ['Elenco principal'],
    streamUrl:
      'https://smoothpre.com/stream/UVesUHt5rVQ_xjUxsC2Etg/hjkrhuihghfvu/1757045470/31179084/index-f2-v1-a1.m3u8'
  },
  {
    id: '1',
    title: 'Película La hacienda: El regreso de los malditos (2025)',
    year: 2025,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/vXUfuM7tPvAL8HjjnsFO4yYbKUs.jpg',
    type: 'movie',
    rating: 7.0,
    synopsis: '"Un grupo de amigos regresa a su pueblo natal después de muchos años. El viaje es una excusa para rememorar viejos tiempos, pero se convierte en una pesadilla cuando desentierran sus recuerdos más oscuros.',
    duration: 'Duración: 1h 10m',
    cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
    streamUrl: 'https://861515134.tapecontent.net/radosgw/XYY4xGlbzwIDD0B/Tu5I54NmPHfIApACP-_zJmLfeGz9EccASRp1M7-HQkCgwbeD8hLywniNUBoQiE-5Pc9PmM-ICD768lXheJ1pNwel9kkEICPqPj9l77rT6pfzNdnK2thOahCkDRLcHDYEc0mfPKsG9tGnGiKWZv52mXu9BiOUmXwmD6riNip6LRycb-IU73KPMcet9tf825TmlW8JHPafhUOGn0u6qpdFNnHN_RDvk4mg6yG-nS_mJ43KttbJINyMOCDb_IQtlkvnbqNkdATm9dDDVUEa6bIAJPk2o1VVn0MU93m0wQ/La+Hacienda.mp4?stream=1'
  },
  {
    id: '2',
    title: 'Película ¿Y dónde está el policía? (2025)',
    year: 2025,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/y5BwdQlrFf9fEPDzXjdBEup5hcF.jpg',
    type: 'movie',
    rating: 8.7,
    synopsis: '"CSolo un hombre tiene las habilidades necesarias... ¡para liderar el Escuadrón de Policía y salvar el mundo!',
    duration: '2h 10min',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/9d1c474c6f4b43da8ea1bc3f9823239a/80526e2a77fd4a63bae51ca607ab5ecb-0333dbd09a2e8c5e1ee710206eae620b-ld.m3u8?hdnts=exp=1755712044_acl=/9d1c474c6f4b43da8ea1bc3f9823239a/*_hmac=3295fce0c5a2b6ccec7b7150edd43515c4d4854415eb9d1591822b951470e056'
  },
  {
    id: '3',
    title: 'Película Maa (2025)',
    year: 1972,
    genre: 'Película Maa (2025)',
    image: 'https://image.tmdb.org/t/p/w200/kc5n7LJUmvBsVxzAla1ONN8kouP.jpg',
    type: 'movie',
    rating: 9.2,
    synopsis: 'Una madre y su hija se encuentran con un demonio en un pueblo donde las niñas han estado desapareciendo.',
    duration: 'Duración: 2h 13m',
    cast: ['Letitia Wright', 'Angela Bassett', 'Tenoch Huerta'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/8035a583cca471efb4d85014c1ca0102/65974265e9544b9890bacd6ccee50e62-652dfdd118359d9f6f4070b275af4408-sd.m3u8?hdnts=exp=1755694678_acl=/8035a583cca471efb4d85014c1ca0102/*_hmac=4db616456ce89188dcdee48b9a5c1f0efe85fb59c3437e9aa8fd1dd1280fe290'
  },
  {
    id: '4',
    title: 'Película Hallow Road (2025)',
    year: 2021,
    genre: 'Superhéroes',
    image: 'https://image.tmdb.org/t/p/w200/dVsgV7ak6vR5xyXFggooJQinXBg.jpg',
    type: 'movie',
    rating: 7.3,
    synopsis: 'Dos padres reciben una angustiosa llamada nocturna de su hija adolescente, quien acaba de atropellar accidentalmente a un peatón. Se suben a su coche a toda prisa para llegar antes de que alguien más se tope con la escena. A medida que avanza la noche, revelaciones inquietantes amenazan con destrozar a la familia, mientras enseguida se dan cuenta de que podrían no ser los únicos conduciendo por Hallow Road.',
    duration: 'Duración: 1h 20m',
    cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/f0e536bf65fe71f0800b87c7361c0102/b1a83be851004a0ea2aaa99da1255e19-cac1c691bdae8e3f370454222ebe1f9c-sd.m3u8?hdnts=exp=1755710852_acl=/f0e536bf65fe71f0800b87c7361c0102/*_hmac=b17b41686a341c692fb39b25395190fd48e61e79f18e34ef3f2dc9e413a585eb'
  },
  {
    id: '5',
    title: 'Película Shadow of God (2025)',
    year: 2021,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/vi6LF8rTdU4DeYrXTtUBqG9gFnX.jpg',
    type: 'movie',
    rating: 8.0,
    synopsis: 'Mientras realiza un exorcismo no autorizado a su padre, un exorcista de élite sospecha que la entidad con la que está luchando podría ser un ser sagrado, tal vez incluso Dios.',
    duration: 'Duración: 1h 27m',
    cast: ['Timothée Chalamet', 'Rebecca Ferguson', 'Oscar Isaac'],
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
  },
  {
    id: '6',
    title: 'Película The Damned (2025)  ',
    year: 2022,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/23VdXxxHf9bWnmBWVB4rIsqDWuz.jpg',
    type: 'movie',
    rating: 7.8,
    synopsis: 'una viuda del siglo XIX que debe tomar una decisión imposible cuando un barco se hunde frente a la costa de su aislado puesto de pesca en medio de un invierno especialmente cruel. Con las provisiones escaseando, Eva y su unida comunidad deben elegir entre rescatar a la tripulación naufragada o priorizar su propia supervivencia. Enfrentados a las consecuencias de su decisión y atormentados por la culpa, los habitantes luchan con una creciente sensación de pavor y comienzan a creer que todos están siendo castigados por sus decisiones.',
    duration: 'Duración: 1h 29m',
    cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'],
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
  },
  {
    id: '7',
    title: 'Película Leyendas de los héroes Cóndor: Los valientes (2025)',
    year: 2025,
    genre: 'Fantasía',
    image: 'https://image.tmdb.org/t/p/w200/fAfbtF0OuHU5TnAU7w8qeO0cnr7.jpg',
    type: 'movie',
    rating: 6.8,
    synopsis:
      'Guo Jing abandonó su ciudad natal y adquirió un enorme poder en las artes marciales para cambiar su destino. Aunque era valorado por los maestros de kung fu que transmitieron las artes marciales sin parangón en el mundo "Manual de los Nueve Yin" y "Dieciocho Palmas Subyugadoras del Dragón", se formaron celos hacia él por parte de todos, convirtiéndose en el blanco de las críticas públicas. Guo Jing y Huang Rong cambiaron las tornas y protegieron la frontera de la dinastía Song del Sur en medio de la lluvia de flechas.',
    duration: 'Duración: 2h 27m',
    cast: ['Elenco principal'],
    streamUrl:
      'https://smoothpre.com/stream/UVesUHt5rVQ_xjUxsC2Etg/hjkrhuihghfvu/1757045470/31179084/index-f2-v1-a1.m3u8'
  },
  {
    id: '8',
    title: 'Película Screamboat La Masacre Del Ratón (2025)',
    year: 2025,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/jWgeW8ZW5gDQIPgFYZ24bt4pW6W.jpg',
    type: 'movie',
    rating: 7.0,
    synopsis: '"Un travieso ratón acecha a un grupo de neoyorquinos en un viaje nocturno en ferry, desatando un caos asesino en un viaje relajante. ¿Podrá la variopinta tripulación del barco encontrar la manera de detener a esta criatura asesina?',
    duration: 'Duración: 1h 42m',
    cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
    streamUrl: 'https://smoothpre.com/stream/qRbxeR_yWIDMVdXpr0ac1A/hjkrhuihghfvu/1757046905/31291401/index-f2-v1-a1.m3u8'
  },
  {
    id: '9',
    title: 'Película Molt lluny (2025)',
    year: 2025,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/oF3noXatzftfCltE0iEDnzU5WIi.jpg',
    type: 'movie',
    rating: 8.7,
    synopsis: '"Sergio, que ha viajado a Utrecht con su familia para asistir a un partido de fútbol, ​​sufre un ataque de pánico justo antes de tomar el vuelo de regreso a Barcelona.',
    duration: 'Duración: 1h 40m',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/9d1c474c6f4b43da8ea1bc3f9823239a/80526e2a77fd4a63bae51ca607ab5ecb-0333dbd09a2e8c5e1ee710206eae620b-ld.m3u8?hdnts=exp=1755712044_acl=/9d1c474c6f4b43da8ea1bc3f9823239a/*_hmac=3295fce0c5a2b6ccec7b7150edd43515c4d4854415eb9d1591822b951470e056'
  },
  {
    id: '10',
    title: 'Película El último encargo (2025)',
    year: 1972,
    genre: 'Película El último encargo (2025)',
    image: 'https://image.tmdb.org/t/p/w200/lbpyI9nwzSVDjS7OnE0uC41UciP.jpg',
    type: 'movie',
    rating: 9.2,
    synopsis: 'Una recolección de dinero da un giro inesperado cuando dos incompatibles conductores de un camión blindado, Russell y Travis, son emboscados por unos delincuentes dirigidos por Zoe, una maestra del engaño. Al desatarse el caos, este extraño dúo debe lidiar con el peligro, sus personalidades opuestas, y un muy mal día que cada vez se sale más de control.',
    duration: 'Duración: 1h 34m',
    cast: ['Letitia Wright', 'Angela Bassett', 'Tenoch Huerta'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/8035a583cca471efb4d85014c1ca0102/65974265e9544b9890bacd6ccee50e62-652dfdd118359d9f6f4070b275af4408-sd.m3u8?hdnts=exp=1755694678_acl=/8035a583cca471efb4d85014c1ca0102/*_hmac=4db616456ce89188dcdee48b9a5c1f0efe85fb59c3437e9aa8fd1dd1280fe290'
  },
  {
    id: '11',
    title: 'Película Hook (2025)',
    year: 2021,
    genre: 'Película Hook (2025)',
    image: 'https://image.tmdb.org/t/p/w200/64lztqd6GBGTyjxKxjnXYndBHVf.jpg',
    type: 'movie',
    rating: 7.3,
    synopsis: 'Impulsado por una droga alucinógena y un deseo de venganza, James Hook asesina a John Darling y pierde su mano a manos de Peter Pan. Dieciocho años después, Wendy, ahora casada con Peter, tiene una hija, Lily. Lily descubre que Hook es su padre biológico, lo que la lleva a un retiro de cumpleaños remoto. Hook escapa de la prisión y se embarca en una matanza, teniendo como blanco a Lily y sus amigos en la mansión.',
    duration: 'Duración: 1h 18m',
    cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/f0e536bf65fe71f0800b87c7361c0102/b1a83be851004a0ea2aaa99da1255e19-cac1c691bdae8e3f370454222ebe1f9c-sd.m3u8?hdnts=exp=1755710852_acl=/f0e536bf65fe71f0800b87c7361c0102/*_hmac=b17b41686a341c692fb39b25395190fd48e61e79f18e34ef3f2dc9e413a585eb'
  },
  {
    id: '12',
    title: 'Película Los tipos malos 2 (2025)',
    year: 2021,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/j0moebdCWDjjwS6bz1ohrsRp1Vp.jpg',
    type: 'movie',
    rating: 8.0,
    synopsis: 'En está ocasión, los malos luchan por encontrar confianza y aceptación en sus nuevas vidas como buenos, cuando un escuadrón de criminales compuesto exclusivamente por mujeres las saca de su retiro y las obliga a hacer "un último trabajo".',
    duration: 'Duración: 1h 44m',
    cast: ['Timothée Chalamel', 'Rebecca Ferguson', 'Oscar Isaac'],
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
  },
  {
    id: '13',
    title: 'Película Nudus (2024)',
    year: 2022,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/e3E3V7TJkB2znDC2LLJuy1Um45Z.jpg',
    type: 'movie',
    rating: 7.8,
    synopsis: 'Al despertar de un coma, una mujer se inquieta al descubrir todo lo que los doctores saben de ella, sin haberles dicho nada.',
    duration: 'Duración: 1h 34m',
    cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'],
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
  },
  {
    id: '14',
    title: 'Película Tiburones de cerca con Bertie Gregory (2025)',
    year: 2025,
    genre: 'Fantasía',
    image: 'https://image.tmdb.org/t/p/w200/8zcrI1L3UJdaz1q1rOwl7igbHLx.jpg',
    type: 'movie',
    rating: 6.8,
    synopsis:
      'Bertie se dirige a Sudáfrica para emprender su misión más audaz hasta la fecha. Estas aguas albergan a uno de los depredadores más temidos y famosos del océano, el gran tiburón blanco. Bertie se sumergirá en las aguas poco profundas sin jaula de protección para filmar a los imponentes tiburones mientras cazan focas. En sus dominios descubrirá los desafíos a los que se enfrentan en el siempre cambiante hábitat.',
    duration: 'Duración: 1h 29m',
    cast: ['Elenco principal'],
    streamUrl:
      'https://smoothpre.com/stream/UVesUHt5rVQ_xjUxsC2Etg/hjkrhuihghfvu/1757045470/31179084/index-f2-v1-a1.m3u8'
  },
  {
    id: '15',
    title: 'Película Superman (2025)',
    year: 2025,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/fvUJb08yatV2b3NUSwuYdQKYoFd.jpg',
    type: 'movie',
    rating: 7.0,
    synopsis: '"En sus primeros años, el joven reportero de Metrópolis y superhéroe se embarca en un viaje para reconciliar su herencia kryptoniana con su educación humana como Clark Kent.',
    duration: 'Duración: 2h 10m',
    cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
    streamUrl: 'https://smoothpre.com/stream/qRbxeR_yWIDMVdXpr0ac1A/hjkrhuihghfvu/1757046905/31291401/index-f2-v1-a1.m3u8'
  },
  {
    id: '16',
    title: 'Película ZOMBIES 4: El origen de los vampiros (2025)',
    year: 2025,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/6EHx7lOm1jvNTr6lqRxiqmnFFDt.jpg',
    type: 'movie',
    rating: 8.7,
    synopsis: '"Zed y Addison descubren los mundos enfrentados de Sunnyside y Shadyside en un viaje de verano por carretera, en el que se encuentran con monstruos.',
    duration: 'Duración: 1h 28m',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/9d1c474c6f4b43da8ea1bc3f9823239a/80526e2a77fd4a63bae51ca607ab5ecb-0333dbd09a2e8c5e1ee710206eae620b-ld.m3u8?hdnts=exp=1755712044_acl=/9d1c474c6f4b43da8ea1bc3f9823239a/*_hmac=3295fce0c5a2b6ccec7b7150edd43515c4d4854415eb9d1591822b951470e056'
  },
  {
    id: '17',
    title: 'Película Larga Distancia (2024)',
    year: 1972,
    genre: 'Película Larga Distancia (2024)',
    image: 'https://image.tmdb.org/t/p/w200/reDAdPDDZs5diNTef6UNuRwHomW.jpg',
    type: 'movie',
    rating: 9.2,
    synopsis: 'Tras un aterrizaje forzoso en un planeta alienígena, un minero de asteroides debe enfrentarse a los retos de su nuevo entorno, mientras atraviesa el duro terreno para llegar hasta la única superviviente: una mujer atrapada en su cápsula de escape.',
    duration: 'Duración: 1h 27m',
    cast: ['Letitia Wright', 'Angela Bassett', 'Tenoch Huerta'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/8035a583cca471efb4d85014c1ca0102/65974265e9544b9890bacd6ccee50e62-652dfdd118359d9f6f4070b275af4408-sd.m3u8?hdnts=exp=1755694678_acl=/8035a583cca471efb4d85014c1ca0102/*_hmac=4db616456ce89188dcdee48b9a5c1f0efe85fb59c3437e9aa8fd1dd1280fe290'
  },
  {
    id: '18',
    title: 'Película Elio (2025)',
    year: 2021,
    genre: 'Superhéroes',
    image: 'https://image.tmdb.org/t/p/w200/fGjwHlv8bCjZypi2bHbbSmyIGMV.jpg',
    type: 'movie',
    rating: 7.3,
    synopsis: 'Elio, un niño fanático del espacio con una imaginación activa, se encuentra en una desventura cósmica en la que debe formar nuevos vínculos con excéntricas formas de vida alienígenas, navegar por una crisis de proporciones intergalácticas y, de alguna manera, descubrir quién está realmente destinado a ser.',
    duration: 'Duración: 1h 39m',
    cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/f0e536bf65fe71f0800b87c7361c0102/b1a83be851004a0ea2aaa99da1255e19-cac1c691bdae8e3f370454222ebe1f9c-sd.m3u8?hdnts=exp=1755710852_acl=/f0e536bf65fe71f0800b87c7361c0102/*_hmac=b17b41686a341c692fb39b25395190fd48e61e79f18e34ef3f2dc9e413a585eb'
  },
  {
    id: '19',
    title: 'Película Infiltrada en el búnker (2025)',
    year: 2021,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/1hmZfIhKl84b4z40Vl9F06p4eWd.jpg',
    type: 'movie',
    rating: 8.0,
    synopsis: 'Esta es la historia de una investigadora encubierta que lo sacrificó todo y arriesgó su vida para mostrar al mundo la dura realidad que experimentó durante dos años en un laboratorio de experimentación con animales. Su investigación, a la que finalmente bautizó como "El Búnker", está capturada en cientos de horas de grabación con cámara oculta que revelan graves casos de maltrato animal. Infiltrada en el Búnker es un thriller que expone la infiltración más larga del mundo en un laboratorio farmacéutico y pone en perspectiva, a la vez que arroja luz sobre un debate social ineludible: el uso de animales en la experimentación científica.',
    duration: 'Duración: 1h 36m',
    cast: ['Timothée Chalamet', 'Rebecca Ferguson', 'Oscar Isaac'],
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
  },
  {
    id: '20',
    title: 'Película Exterminio: La evolución (2025)',
    year: 2022,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/cn4PNK6FQnaUDDqu1vhfqZAZd39.jpg',
    type: 'movie',
    rating: 7.8,
    synopsis: 'Casi tres décadas desde que el virus de la ira escapó de un laboratorio de armas biológicas. Uno de los supervivientes abandona la pequeña isla en una misión hacía el oscuro corazón del continente, descubriendo secretos, maravillas y horrores que han mutado no sólo a los infectados, sino también a otros supervivientes.',
    duration: 'Duración: 1h 55m',
    cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'],
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
  },
  {
    id: '21',
    title: 'Película La Profecia del Guerrero (2025)',
    year: 2025,
    genre: 'Fantasía',
    image: 'https://image.tmdb.org/t/p/w200/sV9vfQ6FneFt3x9FokKWAAqwWDq.jpg',
    type: 'movie',
    rating: 6.8,
    synopsis:
      'Un intrépido caballero se enfrenta a un reino mortal para salvar el alma de la Elegida. Enfrentándose a brujas, demonios y enemigos brutales, descubre que su regreso podría desatar el caos y condenar a la humanidad.',
    duration: 'Duración: 1h 43m',
    cast: ['Elenco principal'],
    streamUrl:
      'https://smoothpre.com/stream/UVesUHt5rVQ_xjUxsC2Etg/hjkrhuihghfvu/1757045470/31179084/index-f2-v1-a1.m3u8'
  },
  {
    id: '22',
    title: 'Película La hacienda: El regreso de los malditos (2025)',
    year: 2025,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/vXUfuM7tPvAL8HjjnsFO4yYbKUs.jpg',
    type: 'movie',
    rating: 7.0,
    synopsis: '"Un grupo de amigos regresa a su pueblo natal después de muchos años. El viaje es una excusa para rememorar viejos tiempos, pero se convierte en una pesadilla cuando desentierran sus recuerdos más oscuros.',
    duration: 'Duración: 1h 10m',
    cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
    streamUrl: 'https://smoothpre.com/stream/qRbxeR_yWIDMVdXpr0ac1A/hjkrhuihghfvu/1757046905/31291401/index-f2-v1-a1.m3u8'
  },
  {
    id: '23',
    title: 'Película ¿Y dónde está el policía? (2025)',
    year: 2025,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/y5BwdQlrFf9fEPDzXjdBEup5hcF.jpg',
    type: 'movie',
    rating: 8.7,
    synopsis: '"CSolo un hombre tiene las habilidades necesarias... ¡para liderar el Escuadrón de Policía y salvar el mundo!',
    duration: '2h 10min',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/9d1c474c6f4b43da8ea1bc3f9823239a/80526e2a77fd4a63bae51ca607ab5ecb-0333dbd09a2e8c5e1ee710206eae620b-ld.m3u8?hdnts=exp=1755712044_acl=/9d1c474c6f4b43da8ea1bc3f9823239a/*_hmac=3295fce0c5a2b6ccec7b7150edd43515c4d4854415eb9d1591822b951470e056'
  },
  {
    id: '24',
    title: 'Película Maa (2025)',
    year: 1972,
    genre: 'Película Maa (2025)',
    image: 'https://image.tmdb.org/t/p/w200/kc5n7LJUmvBsVxzAla1ONN8kouP.jpg',
    type: 'movie',
    rating: 9.2,
    synopsis: 'Una madre y su hija se encuentran con un demonio en un pueblo donde las niñas han estado desapareciendo.',
    duration: 'Duración: 2h 13m',
    cast: ['Letitia Wright', 'Angela Bassett', 'Tenoch Huerta'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/8035a583cca471efb4d85014c1ca0102/65974265e9544b9890bacd6ccee50e62-652dfdd118359d9f6f4070b275af4408-sd.m3u8?hdnts=exp=1755694678_acl=/8035a583cca471efb4d85014c1ca0102/*_hmac=4db616456ce89188dcdee48b9a5c1f0efe85fb59c3437e9aa8fd1dd1280fe290'
  },
  {
    id: '25',
    title: 'Película Hallow Road (2025)',
    year: 2021,
    genre: 'Superhéroes',
    image: 'https://image.tmdb.org/t/p/w200/dVsgV7ak6vR5xyXFggooJQinXBg.jpg',
    type: 'movie',
    rating: 7.3,
    synopsis: 'Dos padres reciben una angustiosa llamada nocturna de su hija adolescente, quien acaba de atropellar accidentalmente a un peatón. Se suben a su coche a toda prisa para llegar antes de que alguien más se tope con la escena. A medida que avanza la noche, revelaciones inquietantes amenazan con destrozar a la familia, mientras enseguida se dan cuenta de que podrían no ser los únicos conduciendo por Hallow Road.',
    duration: 'Duración: 1h 20m',
    cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/f0e536bf65fe71f0800b87c7361c0102/b1a83be851004a0ea2aaa99da1255e19-cac1c691bdae8e3f370454222ebe1f9c-sd.m3u8?hdnts=exp=1755710852_acl=/f0e536bf65fe71f0800b87c7361c0102/*_hmac=b17b41686a341c692fb39b25395190fd48e61e79f18e34ef3f2dc9e413a585eb'
  },
  {
    id: '26',
    title: 'Película Shadow of God (2025)',
    year: 2021,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/vi6LF8rTdU4DeYrXTtUBqG9gFnX.jpg',
    type: 'movie',
    rating: 8.0,
    synopsis: 'Mientras realiza un exorcismo no autorizado a su padre, un exorcista de élite sospecha que la entidad con la que está luchando podría ser un ser sagrado, tal vez incluso Dios.',
    duration: 'Duración: 1h 27m',
    cast: ['Timothée Chalamet', 'Rebecca Ferguson', 'Oscar Isaac'],
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
  },
  {
    id: '27',
    title: 'Película The Damned (2025)  ',
    year: 2022,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/23VdXxxHf9bWnmBWVB4rIsqDWuz.jpg',
    type: 'movie',
    rating: 7.8,
    synopsis: 'una viuda del siglo XIX que debe tomar una decisión imposible cuando un barco se hunde frente a la costa de su aislado puesto de pesca en medio de un invierno especialmente cruel. Con las provisiones escaseando, Eva y su unida comunidad deben elegir entre rescatar a la tripulación naufragada o priorizar su propia supervivencia. Enfrentados a las consecuencias de su decisión y atormentados por la culpa, los habitantes luchan con una creciente sensación de pavor y comienzan a creer que todos están siendo castigados por sus decisiones.',
    duration: 'Duración: 1h 29m',
    cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'],
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
  },
  {
    id: '28',
    title: 'Nadie 2',
    year: 2025,
    genre: 'Fantasía',
    image: 'https://image.tmdb.org/t/p/w200/aYPlrLJWjVkixwrJXA0f4V3D7Ab.jpg',
    type: 'movie',
    rating: 6.8,
    synopsis:
      'Cuatro años después de enfrentarse involuntariamente a la mafia rusa, Hutch sigue manteniendo con la organización criminal una deuda de 30 millones de dólares que trata de saldar poco a poco con una serie interminable de golpes contra matones internacionales. Pese a disfrutar como siempre de la faceta más trepidante y física de su «trabajo», Hutch y su esposa Becca se sienten agotados y distanciados. Para intentar remediarlo, deciden llevarse a sus hijos de escapada al mismo lugar al que Hutch iba de vacaciones con su hermano Harry cuando eran pequeños.',
    duration: 'Duración: 1h 29m',
    cast: ['Elenco principal'],
    streamUrl:
      'https://smoothpre.com/stream/UVesUHt5rVQ_xjUxsC2Etg/hjkrhuihghfvu/1757045470/31179084/index-f2-v1-a1.m3u8'
  },
  {
    id: '29',
    title: 'Película La hacienda: El regreso de los malditos (2025)',
    year: 2025,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/vXUfuM7tPvAL8HjjnsFO4yYbKUs.jpg',
    type: 'movie',
    rating: 7.0,
    synopsis: '"Un grupo de amigos regresa a su pueblo natal después de muchos años. El viaje es una excusa para rememorar viejos tiempos, pero se convierte en una pesadilla cuando desentierran sus recuerdos más oscuros.',
    duration: 'Duración: 1h 10m',
    cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
    streamUrl: 'https://smoothpre.com/stream/qRbxeR_yWIDMVdXpr0ac1A/hjkrhuihghfvu/1757046905/31291401/index-f2-v1-a1.m3u8'
  },
  {
    id: '30',
    title: 'Película ¿Y dónde está el policía? (2025)',
    year: 2025,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/y5BwdQlrFf9fEPDzXjdBEup5hcF.jpg',
    type: 'movie',
    rating: 8.7,
    synopsis: '"CSolo un hombre tiene las habilidades necesarias... ¡para liderar el Escuadrón de Policía y salvar el mundo!',
    duration: '2h 10min',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/9d1c474c6f4b43da8ea1bc3f9823239a/80526e2a77fd4a63bae51ca607ab5ecb-0333dbd09a2e8c5e1ee710206eae620b-ld.m3u8?hdnts=exp=1755712044_acl=/9d1c474c6f4b43da8ea1bc3f9823239a/*_hmac=3295fce0c5a2b6ccec7b7150edd43515c4d4854415eb9d1591822b951470e056'
  },
  {
    id: '31',
    title: 'Película Maa (2025)',
    year: 1972,
    genre: 'Película Maa (2025)',
    image: 'https://image.tmdb.org/t/p/w200/kc5n7LJUmvBsVxzAla1ONN8kouP.jpg',
    type: 'movie',
    rating: 9.2,
    synopsis: 'Una madre y su hija se encuentran con un demonio en un pueblo donde las niñas han estado desapareciendo.',
    duration: 'Duración: 2h 13m',
    cast: ['Letitia Wright', 'Angela Bassett', 'Tenoch Huerta'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/8035a583cca471efb4d85014c1ca0102/65974265e9544b9890bacd6ccee50e62-652dfdd118359d9f6f4070b275af4408-sd.m3u8?hdnts=exp=1755694678_acl=/8035a583cca471efb4d85014c1ca0102/*_hmac=4db616456ce89188dcdee48b9a5c1f0efe85fb59c3437e9aa8fd1dd1280fe290'
  },
  {
    id: '32',
    title: 'Película Hallow Road (2025)',
    year: 2021,
    genre: 'Superhéroes',
    image: 'https://image.tmdb.org/t/p/w200/dVsgV7ak6vR5xyXFggooJQinXBg.jpg',
    type: 'movie',
    rating: 7.3,
    synopsis: 'Dos padres reciben una angustiosa llamada nocturna de su hija adolescente, quien acaba de atropellar accidentalmente a un peatón. Se suben a su coche a toda prisa para llegar antes de que alguien más se tope con la escena. A medida que avanza la noche, revelaciones inquietantes amenazan con destrozar a la familia, mientras enseguida se dan cuenta de que podrían no ser los únicos conduciendo por Hallow Road.',
    duration: 'Duración: 1h 20m',
    cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch'],
    streamUrl: 'https://akm-cdn-play-web.onfilom.com/f0e536bf65fe71f0800b87c7361c0102/b1a83be851004a0ea2aaa99da1255e19-cac1c691bdae8e3f370454222ebe1f9c-sd.m3u8?hdnts=exp=1755710852_acl=/f0e536bf65fe71f0800b87c7361c0102/*_hmac=b17b41686a341c692fb39b25395190fd48e61e79f18e34ef3f2dc9e413a585eb'
  },
  {
    id: '33',
    title: 'Película Shadow of God (2025)',
    year: 2021,
    genre: 'Ciencia Ficción',
    image: 'https://image.tmdb.org/t/p/w200/vi6LF8rTdU4DeYrXTtUBqG9gFnX.jpg',
    type: 'movie',
    rating: 8.0,
    synopsis: 'Mientras realiza un exorcismo no autorizado a su padre, un exorcista de élite sospecha que la entidad con la que está luchando podría ser un ser sagrado, tal vez incluso Dios.',
    duration: 'Duración: 1h 27m',
    cast: ['Timothée Chalamet', 'Rebecca Ferguson', 'Oscar Isaac'],
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
  },
  {
    id: '34',
    title: 'Película The Damned (2025)  ',
    year: 2022,
    genre: 'Acción',
    image: 'https://image.tmdb.org/t/p/w200/23VdXxxHf9bWnmBWVB4rIsqDWuz.jpg',
    type: 'movie',
    rating: 7.8,
    synopsis: 'una viuda del siglo XIX que debe tomar una decisión imposible cuando un barco se hunde frente a la costa de su aislado puesto de pesca en medio de un invierno especialmente cruel. Con las provisiones escaseando, Eva y su unida comunidad deben elegir entre rescatar a la tripulación naufragada o priorizar su propia supervivencia. Enfrentados a las consecuencias de su decisión y atormentados por la culpa, los habitantes luchan con una creciente sensación de pavor y comienzan a creer que todos están siendo castigados por sus decisiones.',
    duration: 'Duración: 1h 29m',
    cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'],
    streamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
  }
];

export const mockSeries: ContentItem[] = [
  {
    id: 's1',
    title: 'Stranger Things',
    year: 2022,
    genre: 'Ciencia Ficción',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'series',
    rating: 8.7,
    synopsis: 'Cuando un niño desaparece, su madre, un jefe de policía y sus amigos deben enfrentar fuerzas terroríficas para recuperarlo.',
    duration: '4 temporadas',
    cast: ['Millie Bobby Brown', 'Finn Wolfhard', 'David Harbour']
  },
  {
    id: 's2',
    title: 'The Crown',
    year: 2022,
    genre: 'Drama',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'series',
    rating: 8.6,
    synopsis: 'Sigue la vida política y los romances de la Reina Isabel II y los eventos que dieron forma a la segunda mitad del siglo XX.',
    duration: '6 temporadas',
    cast: ['Imelda Staunton', 'Jonathan Pryce', 'Lesley Manville']
  },
  {
    id: 's3',
    title: 'Wednesday',
    year: 2022,
    genre: 'Comedia',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'series',
    rating: 8.1,
    synopsis: 'Sigue a Wednesday Addams mientras navega por sus años como estudiante en la Academia Nevermore, intentando dominar su habilidad psíquica emergente.',
    duration: '1 temporada',
    cast: ['Jenna Ortega', 'Emma Myers', 'Enid Sinclair']
  },
  {
    id: 's4',
    title: 'House of the Dragon',
    year: 2022,
    genre: 'Fantasía',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'series',
    rating: 8.5,
    synopsis: 'Una precuela de Game of Thrones que se centra en la casa Targaryen 200 años antes de los eventos de la serie original.',
    duration: '1 temporada',
    cast: ['Paddy Considine', 'Emma D\'Arcy', 'Matt Smith']
  }
];

export const mockKidsContent: ContentItem[] = [
  {
    id: 'k1',
    title: 'Encanto',
    year: 2021,
    genre: 'Animación',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'movie',
    rating: 7.2,
    synopsis: 'Una niña colombiana puede ser la última esperanza de su familia cuando descubre que la magia que rodea el Encanto está en peligro.',
    duration: '1h 42min',
    cast: ['Stephanie Beatriz', 'María Cecilia Botero', 'John Leguizamo']
  },
  {
    id: 'k2',
    title: 'Turning Red',
    year: 2022,
    genre: 'Animación',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'movie',
    rating: 7.0,
    synopsis: 'Una niña de 13 años se convierte en un panda rojo gigante cada vez que se emociona demasiado.',
    duration: '1h 40min',
    cast: ['Rosalie Chiang', 'Sandra Oh', 'Ava Morse']
  }
];

export const mockComedyContent: ContentItem[] = [
  {
    id: 'c1',
    title: 'The Good Place',
    year: 2020,
    genre: 'Comedia',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'series',
    rating: 8.2,
    synopsis: 'Una mujer lucha por ser una mejor persona después de descubrir que está en el "lugar bueno".',
    duration: '4 temporadas',
    cast: ['Kristen Bell', 'Ted Danson', 'William Jackson Harper']
  },
  {
    id: 'c2',
    title: 'Brooklyn Nine-Nine',
    year: 2021,
    genre: 'Comedia',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'series',
    rating: 8.4,
    synopsis: 'Comedia sobre un grupo de detectives en una comisaría de Brooklyn.',
    duration: '8 temporadas',
    cast: ['Andy Samberg', 'Stephanie Beatriz', 'Terry Crews']
  }
];