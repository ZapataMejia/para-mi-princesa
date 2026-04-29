export interface Letter {
  day: number;
  date: string; // formato "YYYY-MM-DD" (zona America/Bogota)
  slug: string;
  title: string;
  emoji: string;
  preview: string;
  body: string[];
  signoff?: string;
  isBirthday?: boolean;
}

export const NOMBRE = "Esmeralda";
export const APODO = "Pollito";
export const FIRMA = "Tu Santiago, que te ama con todo el alma";

export const letters: Letter[] = [
  {
    day: 1,
    date: "2026-04-28",
    slug: "dia-1",
    title: "Empieza la cuenta regresiva, Pollito",
    emoji: "👑",
    preview:
      "Hoy abro la primera carta de muchas. Cada día hasta tu cumpleaños te voy a recordar lo mucho que te amo.",
    body: [
      "Mi princesa Esmeralda, hoy empieza una cuenta regresiva muy especial: trece días para celebrar el día más bonito del año, el día en que llegaste al mundo y, sin saberlo, también a mi vida.",
      "Quise hacerte algo que pudieras abrir cada mañana, como abrir una cajita de regalo chiquitita: una carta cada día, hasta que llegue el diez de mayo y por fin te pueda decir feliz cumpleaños en persona, abrazándote y comiéndote a besos.",
      "No esperes nada perfecto. Espera algo hecho con todo mi amor, con paciencia, con detalles, pensando en ti en cada palabra. Porque eso eres tú para mí: el detalle más bonito de mi día.",
      "Pollito, prepárate, porque vienen doce sorpresitas más antes del gran día. Te amo más de lo que sabes decir mi corazón.",
    ],
    signoff: "Con mucho amor, hoy y siempre,",
  },
  {
    day: 2,
    date: "2026-04-29",
    slug: "dia-2",
    title: "El día que te conocí",
    emoji: "🌷",
    preview:
      "Hay días que cambian todo sin avisar. El día que te conocí fue uno de esos.",
    body: [
      "Hay momentos que uno no se da cuenta que son importantes hasta mucho después. El día que te conocí fue uno de esos. No sabía que me estaba cruzando con la persona que iba a hacerme tan feliz.",
      "Recuerdo tu mirada, tu risa tan tuya, esa forma de hablar que tienes y que enamora sin permiso. Recuerdo haber pensado en silencio: 'esta niña tiene algo distinto'. Y lo confirmo cada día.",
      "Desde ese día, mi vida se llenó de motivos para sonreír. Cada conversación, cada mirada, cada beso fue construyendo lo que tenemos hoy: algo bonito, real, nuestro.",
      "Pollito, gracias por dejarme conocerte, por dejarme acercarme, por confiar en mí. Eres el mejor encuentro de mi vida.",
    ],
    signoff: "Eternamente agradecido,",
  },
  {
    day: 3,
    date: "2026-04-30",
    slug: "dia-3",
    title: "Tu sonrisa, mi lugar favorito",
    emoji: "🌸",
    preview:
      "Si tuviera que escoger un solo lugar en el mundo para vivir para siempre, sería tu sonrisa.",
    body: [
      "He visto atardeceres, paisajes, mares, fotos lindas de lugares lejanos. Pero nada se compara con el momento en que sonríes. Tu sonrisa es ese lugar al que siempre quiero volver.",
      "Cuando estás triste y de repente algo te hace reír, ahí me derrites. Esa sonrisa tuya, esa que se te escapa, esa que arruga un poquito la nariz, esa es mi parte favorita del universo.",
      "Quiero que sepas que voy a hacer lo posible por ser yo el motivo de muchísimas más sonrisas tuyas. Las quiero coleccionar todas.",
      "Pollito, sigue sonriendo siempre. Tu sonrisa hace que todo valga la pena.",
    ],
    signoff: "Tu fan número uno,",
  },
  {
    day: 4,
    date: "2026-05-01",
    slug: "dia-4",
    title: "Razones por las que te amo (parte 1)",
    emoji: "💖",
    preview:
      "Hice una lista. Sé que es cursi. Pero te amo demasiado y necesitaba decírtelo.",
    body: [
      "Te amo porque eres dulce sin tener que esforzarte.",
      "Te amo porque tu manera de cuidar a la gente es bonita y silenciosa.",
      "Te amo porque eres detallista, porque te acuerdas de las cosas pequeñas.",
      "Te amo porque cuando estás cansada te pones más tierna y eso me derrite.",
      "Te amo porque tienes mil expresiones distintas y cada una me hace reír de otra forma.",
      "Te amo porque me haces sentir como un niño cuando estoy contigo.",
      "Te amo porque me retas a ser mejor sin pedírmelo.",
      "Te amo porque crees en mí cuando yo dudo.",
      "Pollito, esto apenas empieza. Hay otra parte más adelante.",
    ],
    signoff: "Amándote por todas estas razones (y muchas más),",
  },
  {
    day: 5,
    date: "2026-05-02",
    slug: "dia-5",
    title: "Tu fortaleza, mi admiración",
    emoji: "🦢",
    preview:
      "Creo que no te lo digo lo suficiente: te admiro.",
    body: [
      "Pollito, hay algo de ti que no siempre te digo en voz alta y hoy te lo quiero escribir: me impresiona lo fuerte que eres.",
      "Has pasado por cosas difíciles, has llorado, te has caído, te has levantado. Y lo has hecho con una elegancia que nadie te enseñó. Eso es de princesas, pero de las de verdad: las que aguantan tormentas con la corona puesta.",
      "Te admiro porque trabajas duro, porque persigues lo que quieres, porque no te rindes fácil. Te admiro porque sigues siendo dulce a pesar de todo lo que has vivido. Eso, mi amor, es lo más valiente que existe.",
      "Cuando dudes de ti, léeme: yo te veo desde afuera y veo a una mujer increíble. Tienes en mí a alguien que cree en ti hasta cuando tú no puedes.",
    ],
    signoff: "Tu admirador de toda la vida,",
  },
  {
    day: 6,
    date: "2026-05-03",
    slug: "dia-6",
    title: "Nuestros pequeños rituales",
    emoji: "☕",
    preview:
      "Esas cositas pequeñas que solo hacemos nosotros dos.",
    body: [
      "Hay algo mágico en las cosas que solo tú y yo entendemos. El chiste interno que nadie más capta. La manera en que me llamas. El gesto que te hago cuando estoy nervioso. Esas cositas chiquitas son nuestras, y son sagradas.",
      "Me encanta cuando me cuentas tu día con todos los detalles, hasta los más pequeños. Me encanta cuando ves algo y dices 'mira esto, te iba a gustar'. Me encanta cuando me mandas un audio de la nada solo para decirme que me amas.",
      "Esos pequeños rituales son lo que hace que lo nuestro se sienta tan en casa. No es solo amor: es complicidad, costumbre bonita, idioma propio.",
      "Quiero seguir construyendo cositas así contigo. Muchas. Todas las que se nos ocurran.",
    ],
    signoff: "Tu cómplice,",
  },
  {
    day: 7,
    date: "2026-05-04",
    slug: "dia-7",
    title: "Por qué eres mi princesa",
    emoji: "👸",
    preview:
      "No te digo princesa por decir. Te lo digo porque lo eres en serio.",
    body: [
      "Pollito, cuando te digo princesa no es de juego. Es porque cuando entras a un lugar, todo se siente más bonito. Es porque tienes esa elegancia natural que no se aprende.",
      "Eres mi princesa porque mereces que te traten con suavidad, con respeto, con admiración. Porque mereces atardeceres, flores, abrazos largos, canciones dedicadas, cartas como esta.",
      "Eres mi princesa porque te respeto profundamente. Porque admiro lo que eres. Porque tu reino, aunque sea chiquito, está lleno de cosas hermosas: tu casa, tu familia, tus amigos, tus sueños, y ahora me dejas estar aquí dentro también.",
      "Y aunque seas princesa, sé que también eres humana. Tienes días malos, dudas, miedos. Y por eso voy a estar aquí, en lo bueno, pero sobre todo en lo no tan bueno. Porque las princesas también necesitan a alguien que les sostenga la corona cuando se cansan.",
    ],
    signoff: "Tu caballero de planta,",
  },
  {
    day: 8,
    date: "2026-05-05",
    slug: "dia-8",
    title: "Sueños que tengo contigo",
    emoji: "✨",
    preview:
      "Los sueños se sienten más posibles cuando los pienso contigo.",
    body: [
      "Cuando me pongo a soñar despierto, cada vez más me doy cuenta de que estás en todos los planes. Viajes que quiero hacer, lugares que quiero conocer, casa, mascotas, mañanas tomando café, noches viendo películas, sábados sin afán.",
      "Quiero un futuro donde nos veamos cumpliendo cosas. Tú haciendo lo tuyo, yo haciendo lo mío, y los dos celebrándonos en el medio.",
      "Quiero sostenerte la mano cuando te pongas nerviosa. Quiero ser el primero en saber tus buenas noticias. Quiero verte vieja y seguirte diciendo Pollito.",
      "No te asustes con la palabra futuro. Yo no tengo prisa, solo tengo claridad: contigo, los planes se sienten bonitos.",
    ],
    signoff: "Soñando contigo,",
  },
  {
    day: 9,
    date: "2026-05-06",
    slug: "dia-9",
    title: "Las cosas chiquitas que adoro de ti",
    emoji: "🍓",
    preview:
      "No las grandes. Las chiquitas. Las que casi nadie ve.",
    body: [
      "Adoro cómo te concentras cuando estás haciendo algo importante.",
      "Adoro cómo te emocionas con los detalles bonitos que ven los demás solo por encima.",
      "Adoro tu olor cuando te acabas de bañar.",
      "Adoro cuando te ríes con ese tono más agudo que te sale cuando algo te causa mucha gracia.",
      "Adoro tus manitos. Tus dedos. La forma en que se sienten cuando te tomo de la mano.",
      "Adoro cuando me cuentas algo serio y te pones brava porque quieres que entienda.",
      "Adoro cuando te quedas callada y se te ve pensando en algo, y me dejas adivinar qué es.",
      "Adoro mil cosas chiquitas más, Pollito. Y cada día descubro una nueva.",
    ],
    signoff: "Coleccionando detallitos tuyos,",
  },
  {
    day: 10,
    date: "2026-05-07",
    slug: "dia-10",
    title: "Promesas que te hago",
    emoji: "💍",
    preview:
      "No promesas para impresionarte. Promesas que de verdad puedo cumplir.",
    body: [
      "Te prometo escucharte cuando estés mal, sin tratar de arreglar todo de una.",
      "Te prometo decirte la verdad, aunque me cueste, aunque a veces duela.",
      "Te prometo cuidarte. En lo grande y en lo chiquito. Cuando estés enferma, cuando estés cansada, cuando estés feliz.",
      "Te prometo respetar tus tiempos. Tus días buenos y los no tan buenos.",
      "Te prometo seguirte conquistando, aunque ya estemos juntos. Porque el amor también es eso: no soltar el detalle.",
      "Te prometo elegirte todos los días. Hoy, mañana, y cuando ya nada de esto sea novedad.",
      "Pollito, no te prometo perfección. Te prometo presencia y esfuerzo. Eso sí, todos los días.",
    ],
    signoff: "Con mi palabra,",
  },
  {
    day: 11,
    date: "2026-05-08",
    slug: "dia-11",
    title: "Razones por las que te amo (parte 2)",
    emoji: "🩷",
    preview:
      "La continuación. Porque una sola lista no cabía.",
    body: [
      "Te amo porque me haces sentir en casa.",
      "Te amo porque sabes pedir perdón y sabes recibirlo.",
      "Te amo porque eres cariñosa de las cariñosas.",
      "Te amo porque tienes ese mundo interior tan bonito y a veces me dejas entrar.",
      "Te amo porque te emocionas con cosas pequeñas y eso me parece lo más tierno del mundo.",
      "Te amo porque eres valiente, aunque tú no te creas valiente.",
      "Te amo porque haces que las cosas normales se sientan especiales.",
      "Te amo porque, aunque ya te lo he dicho mil veces, sigo sintiendo lo mismo cada vez que lo digo.",
      "Pollito, podría seguir hasta llenar mil cuadernos. Pero esto te lo voy a seguir diciendo en voz alta el resto de mi vida.",
    ],
    signoff: "Más enamorado cada día,",
  },
  {
    day: 12,
    date: "2026-05-09",
    slug: "dia-12",
    title: "La víspera, mi corazón late fuerte",
    emoji: "🎀",
    preview:
      "Mañana es el día. No me cabe la emoción en el pecho.",
    body: [
      "Pollito, mañana es tu día. Y aunque he tenido doce días para prepararlo todo, hoy estoy más emocionado que nunca.",
      "No sé bien por qué me emociona tanto tu cumpleaños. Quizás porque es la oportunidad de celebrarte sin pena, sin medirme, sin esconder lo mucho que te quiero. Es como un permiso oficial para ser exageradamente romántico contigo. Y yo lo voy a aprovechar.",
      "Quiero que mañana te sientas la persona más amada del planeta. Quiero que te despiertes sintiendo que el mundo se conspira para mimarte un día entero.",
      "Esta noche duerme rico, princesa. Sueña bonito. Sueña conmigo. Mañana, todo es para ti.",
    ],
    signoff: "Con el corazón saltando,",
  },
  {
    day: 13,
    date: "2026-05-10",
    slug: "feliz-cumpleanos",
    title: "FELIZ CUMPLEAÑOS, MI PRINCESA POLLITO",
    emoji: "🎂",
    preview:
      "Llegó el día. Hoy se celebra a la persona más bonita que conozco.",
    body: [
      "FELIZ CUMPLEAÑOS, AMOR DE MI VIDA.",
      "Hoy es tu día y quiero que el mundo entero lo sepa: hoy hace años nació la persona más linda del universo, mi Esmeralda, mi Pollito, mi princesa.",
      "Gracias por existir. Gracias por dejarme entrar en tu vida. Gracias por elegirme entre tantas personas. Gracias por cada beso, cada risa, cada noche de hablar de tonterías hasta el sueño.",
      "Te deseo un año lleno de cosas hermosas. Que se te cumplan tus sueños grandes y los chiquitos también. Que estés sana, en paz, feliz. Que sigas creyendo en ti tanto como yo creo en ti.",
      "Y te prometo, en este nuevo año tuyo de vida, estar para ti. Cada día. Sin condiciones.",
      "Te amo con todo lo que soy. Hoy y siempre.",
      "Feliz cumpleaños, mi princesa. Hoy el reino entero está de fiesta por ti.",
    ],
    signoff: "Tuyo, hoy y todos los días,",
    isBirthday: true,
  },
];

export function getLetterBySlug(slug: string): Letter | undefined {
  return letters.find((l) => l.slug === slug);
}

export const TARGET_DATE_ISO = "2026-05-10T00:00:00-05:00";
