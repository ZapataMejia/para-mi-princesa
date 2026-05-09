export interface LetterImage {
  src: string;
  alt: string;
  blur?: number;
  caption?: string;
}

export interface Letter {
  day: number;
  date: string;
  unlockAt?: string;
  slug: string;
  title: string;
  emoji: string;
  preview: string;
  greeting: string;
  petNames: string;
  opener: string;
  body: string[];
  marginNote?: string;
  closing: string;
  signoffLine: string;
  clue?: string;
  image?: LetterImage;
  isBirthday?: boolean;
  isSurprise?: boolean;
  dayLabel?: string;
}

export const NOMBRE = "Esmeralda";
export const APODO = "Pollito";
export const FIRMA = "Tu Santi";
export const BIRTHDAY_DATE = "2026-05-10";
export const TARGET_DATE_ISO = "2026-05-10T00:00:00-05:00";

export function daysUntilBirthday(fromDate: string): number {
  const [y1, m1, d1] = fromDate.split("-").map(Number);
  const [y2, m2, d2] = BIRTHDAY_DATE.split("-").map(Number);
  const a = Date.UTC(y1!, (m1 ?? 1) - 1, d1 ?? 1);
  const b = Date.UTC(y2!, (m2 ?? 1) - 1, d2 ?? 1);
  return Math.round((b - a) / (1000 * 60 * 60 * 24));
}

export const letters: Letter[] = [
  {
    day: 1,
    date: "2026-04-28",
    slug: "dia-1",
    title: "Empieza la cuenta regresiva",
    emoji: "👑",
    preview:
      "Hoy abro la primera cartita de muchas. Una cada día hasta tu cumpleaños.",
    greeting: "Mi Amor!!",
    petNames: "Mi Vida linda!!, Mi Reina, Mi Tesoro",
    opener: "¿Cómo estás Mi Tesoro?",
    body: [
      "No te quiero emocionar, pero te tengo una *sorpresa*. Voy a escribirte una cartita cada día hasta tu cumpleaños.",
      "*Cada mañana* abres una nueva. Hoy empieza la magia, Pollito.",
    ],
    marginNote: "“Gracias por llegar a mi vida”",
    closing: "*Te Amo más* que a mi propia vida, gracias por enamorarme día tras día.",
    signoffLine: "Te Amo Hoy y Siempre",
  },
  {
    day: 2,
    date: "2026-04-29",
    slug: "dia-2",
    title: "El día que te conocí",
    emoji: "🌷",
    preview: "Ese día cambió todo, aunque yo no lo sabía todavía.",
    greeting: "Mi Amor!!",
    petNames: "Mi Vida, Mi Princesa",
    opener: "¿Cómo amaneció hoy mi *cosita linda*?",
    body: [
      "Hay días que cambian todo sin avisar. *El día que te conocí* fue uno de esos.",
      "No sabía que me estaba cruzando con la persona que iba a hacerme tan feliz. Y míranos hoy, *contando los días* para celebrarte.",
    ],
    marginNote: "“Eres el mejor encuentro de mi vida”",
    closing: "Gracias por *dejarme conocerte*, por confiar, por quererme.",
    signoffLine: "Te Amo Hoy y Siempre",
  },
  {
    day: 3,
    date: "2026-04-30",
    slug: "dia-3",
    title: "Tu sonrisa, mi lugar favorito",
    emoji: "🌸",
    preview: "Si tuviera que escoger un solo lugar para vivir, sería tu sonrisa.",
    greeting: "Mi Tesoro!!",
    petNames: "Mi Reina, Mi Pollito hermoso",
    opener: "¿Sabes cuál es mi *lugar favorito*?",
    body: [
      "Es *tu sonrisa*. Esa que se te escapa, esa que arruga un poquito la nariz, esa es mi parte favorita del universo.",
      "Voy a hacer lo posible por ser yo el motivo de muchísimas más sonrisas tuyas. *Las quiero coleccionar todas.*",
    ],
    marginNote: "“Sigue sonriendo, princesa”",
    closing: "*Te Amo más* que a mi propia vida.",
    signoffLine: "Te Amo Hoy y Siempre",
  },
  {
    day: 4,
    date: "2026-05-01",
    slug: "dia-4",
    title: "Razones por las que te amo (parte 1)",
    emoji: "💖",
    preview: "Hice una lista. Sé que es cursi. Te amo demasiado.",
    greeting: "Mi Amor!!",
    petNames: "Mi Vida linda, Mi Reina",
    opener: "Hoy tengo una *lista* para ti.",
    body: [
      "Te amo porque eres *dulce* sin esforzarte. Porque tu manera de cuidar a la gente es bonita y silenciosa.",
      "Te amo porque eres *detallista*, porque te acuerdas de las cosas pequeñas. Porque cuando estás cansada te pones más tierna y eso me derrite.",
      "Esto apenas empieza, *hay otra parte* más adelante.",
    ],
    marginNote: "“Eres mi razón favorita”",
    closing: "*Te Amo más* que a mi propia vida.",
    signoffLine: "Te Amo Hoy y Siempre",
  },
  {
    day: 5,
    date: "2026-05-02",
    slug: "dia-5",
    title: "Tu fortaleza, mi admiración",
    emoji: "🦢",
    preview: "Hay algo de ti que no siempre te digo en voz alta.",
    greeting: "Mi Princesa!!",
    petNames: "Mi Reina, Mi Tesoro",
    opener: "¿Sabes algo, Pollito?",
    body: [
      "*Te admiro.* Has pasado por cosas difíciles, te has caído, te has levantado. Y lo has hecho con una elegancia que nadie te enseñó.",
      "Eso es de *princesas de las de verdad*: las que aguantan tormentas con la corona puesta. Cuando dudes de ti, léeme: yo te veo desde afuera y veo a una *mujer increíble*.",
    ],
    marginNote: "“Tienes en mí a alguien que cree en ti”",
    closing: "*Te Amo más* que a mi propia vida, mi reina valiente.",
    signoffLine: "Te Amo Hoy y Siempre",
  },
  {
    day: 6,
    date: "2026-05-03",
    slug: "dia-6",
    title: "Nuestros pequeños rituales",
    emoji: "☕",
    preview: "Esas cositas que solo nosotros entendemos.",
    greeting: "Mi Amor!!",
    petNames: "Mi Compañera, Mi Cómplice",
    opener: "¿Te has dado cuenta?",
    body: [
      "Hay cositas que *solo tú y yo* entendemos. El chiste interno, la manera en que me llamas, el gesto que te hago cuando estoy nervioso.",
      "Esas cositas son *nuestras*, son sagradas, son nuestro idioma. Quiero seguir construyendo muchas más contigo, *todas las que se nos ocurran*.",
    ],
    marginNote: "“Mi cómplice favorita”",
    closing: "*Te Amo más* que a mi propia vida.",
    signoffLine: "Te Amo Hoy y Siempre",
  },
  {
    day: 7,
    date: "2026-05-04",
    slug: "dia-7",
    title: "Por qué eres mi princesa",
    emoji: "👸",
    preview: "No te digo princesa por decir. Lo eres en serio.",
    greeting: "Mi Princesa!!",
    petNames: "Mi Reina, Mi Esmeralda",
    opener: "Te lo voy a decir bien clarito.",
    body: [
      "Cuando te digo *princesa* no es de juego. Cuando entras a un lugar todo se siente más bonito. Tienes esa *elegancia natural* que no se aprende.",
      "Eres mi princesa porque mereces que te traten con suavidad, con respeto, con admiración. Porque mereces *atardeceres, flores, abrazos largos, cartas como esta*.",
    ],
    marginNote: "“Tu caballero de planta”",
    closing: "*Te Amo más* que a mi propia vida.",
    signoffLine: "Te Amo Hoy y Siempre",
  },
  {
    day: 8,
    date: "2026-05-05",
    slug: "dia-8",
    title: "Sueños que tengo contigo",
    emoji: "✨",
    preview: "Los sueños se sienten más posibles cuando los pienso contigo.",
    greeting: "Mi Vida!!",
    petNames: "Mi Tesoro, Mi futuro favorito",
    opener: "¿Quieres saber un secretito?",
    body: [
      "Cuando me pongo a soñar despierto, *estás en todos los planes*. Viajes, lugares, casa, mañanas tomando café, sábados sin afán.",
      "Quiero un futuro donde *los dos nos celebremos*. No tengas miedo con la palabra futuro. Yo no tengo prisa, solo tengo *claridad*: contigo, los planes se sienten bonitos.",
    ],
    marginNote: "“Soñando contigo siempre”",
    closing: "*Te Amo más* que a mi propia vida.",
    signoffLine: "Te Amo Hoy y Siempre",
  },
  {
    day: 9,
    date: "2026-05-06",
    slug: "dia-9",
    title: "Las cosas chiquitas que adoro de ti",
    emoji: "🍓",
    preview: "Las pequeñas, las que casi nadie ve.",
    greeting: "Mi Amor!!",
    petNames: "Mi Pollito hermoso",
    opener: "Voy a contarte un *secretito*.",
    body: [
      "Adoro cómo te concentras. Adoro cómo te emocionas con detalles bonitos que los demás ven solo por encima.",
      "Adoro tus *manitos*, tus dedos, cómo se sienten cuando te tomo de la mano. Adoro cuando te quedas callada *pensando algo* y me dejas adivinar qué es.",
      "*Mil cositas más*. Cada día descubro una nueva.",
    ],
    marginNote: "“Coleccionando detallitos tuyos”",
    closing: "*Te Amo más* que a mi propia vida.",
    signoffLine: "Te Amo Hoy y Siempre",
  },
  {
    day: 10,
    date: "2026-05-07",
    slug: "dia-10",
    title: "Promesas que te hago",
    emoji: "💍",
    preview: "No para impresionarte. Promesas que de verdad puedo cumplir.",
    greeting: "Mi Reina!!",
    petNames: "Mi Vida, Mi Tesoro",
    opener: "Hoy te hago *promesas de verdad*.",
    body: [
      "Te prometo *escucharte* cuando estés mal sin tratar de arreglar todo de una. Te prometo *decirte la verdad*, aunque a veces duela.",
      "Te prometo *cuidarte*. Respetar tus tiempos. Seguir conquistándote aunque ya estemos juntos.",
      "Te prometo *elegirte todos los días*. Hoy, mañana, y cuando ya nada de esto sea novedad.",
    ],
    marginNote: "“Con mi palabra, princesa”",
    closing: "*Te Amo más* que a mi propia vida.",
    signoffLine: "Te Amo Hoy y Siempre",
  },
  {
    day: 11,
    date: "2026-05-08",
    slug: "dia-11",
    title: "Razones por las que te amo (parte 2)",
    emoji: "🩷",
    preview: "La continuación. Una sola lista no cabía.",
    greeting: "Mi Amor!!",
    petNames: "Mi Vida linda, Mi Reina",
    opener: "*Parte dos* de la lista de mi corazón.",
    body: [
      "Te amo porque me haces sentir *en casa*. Porque sabes pedir perdón y sabes recibirlo.",
      "Te amo porque eres *valiente*, aunque tú no te creas valiente. Porque haces que las cosas normales se sientan especiales.",
      "Aunque ya te lo he dicho mil veces, *sigo sintiendo lo mismo* cada vez que lo digo.",
    ],
    marginNote: "“Más enamorado cada día”",
    closing: "*Te Amo más* que a mi propia vida.",
    signoffLine: "Te Amo Hoy y Siempre",
  },
  {
    day: 12,
    date: "2026-05-09",
    slug: "dia-12",
    title: "La víspera, mi corazón late fuerte",
    emoji: "🎀",
    preview: "Mañana es el día. No me cabe la emoción en el pecho.",
    greeting: "Mi Princesa!!",
    petNames: "Mi Reina, Mi Pollito",
    opener: "*Mañana* es tu día.",
    body: [
      "He esperado este día durante doce cartas. Y hoy estoy más *emocionado* que nunca.",
      "Quiero que mañana te sientas la *persona más amada* del planeta. Esta noche duerme rico, sueña bonito, sueña conmigo.",
      "*Mañana, todo es para ti.*",
    ],
    marginNote: "“Con el corazón saltando”",
    closing: "*Te Amo más* que a mi propia vida.",
    signoffLine: "Te Amo Hoy y Siempre",
  },
  {
    day: 13,
    date: "2026-05-09",
    unlockAt: "2026-05-09T14:00:00-05:00",
    slug: "pista-regalos",
    title: "Una pistica de tus regalos",
    emoji: "🎁",
    preview: "Una sorpresita adelantada, abre a las 2 de la tarde.",
    greeting: "Mi Amor!!",
    petNames: "Mi Reina, Mi Tesoro, Mi Pollito",
    opener: "*Gracias por esperar tantos días*, mi vida.",
    body: [
      "Hoy a las *2 de la tarde* te tengo una sorpresita adelantada.",
      "Aquí abajo hay una *pequeña pistica* de los regalos que te tengo, *muy borrosita*. No vale acercarse mucho a la pantalla, princesa 👀",
      "Adivina qué hay… *muy prontito* lo verás todo bien clarito.",
    ],
    marginNote: "“Casi, casi es tu día”",
    closing: "*Te Amo más* que a mi propia vida, mi Pollito.",
    signoffLine: "Te Amo Hoy y Siempre",
    image: {
      src: "/img/regalos-pista.png",
      alt: "Una pista borrosa de tus regalos, princesa",
      blur: 42,
      caption: "shhh… *no se vale espiar mucho*",
    },
    isSurprise: true,
    dayLabel: "Sorpresa",
  },
  {
    day: 14,
    date: "2026-05-10",
    slug: "feliz-cumpleanos",
    title: "FELIZ CUMPLEAÑOS, MI PRINCESA POLLITO",
    emoji: "🎂",
    preview: "Llegó el día. Hoy se celebra a la persona más bonita que conozco.",
    greeting: "FELIZ CUMPLEAÑOS!!",
    petNames: "Mi Reina, Mi Esmeralda, Mi Pollito",
    opener: "*¡Llegó tu día, mi vida!*",
    body: [
      "Mi amor, *ya celebramos tu fiesta*. La hicimos con muchísimo amor, con cada detallito pensado para ti. No sé si en este momento todavía estemos celebrando, pero *espero que este 10 de mayo sea único y perfecto para ti*… tan perfecto como lo fue para mí.",
      "Hoy hace años nació la *persona más linda del universo*: tú.",
      "Gracias por *existir*, gracias por *elegirme*, gracias por cada beso, cada risa, cada noche de hablar de tonterías hasta el sueño.",
      "Te deseo un año lleno de cosas hermosas. Que se te cumplan tus sueños grandes y los chiquitos también. Que estés *sana, en paz, feliz*.",
      "*Hoy el reino entero está de fiesta por ti.*",
    ],
    marginNote: "“Tuyo, hoy y todos los días”",
    closing: "*Te Amo más* que a mi propia vida.",
    signoffLine: "Te Amo Hoy y Siempre",
    isBirthday: true,
  },
];

export function getLetterBySlug(slug: string): Letter | undefined {
  return letters.find((l) => l.slug === slug);
}

export function parseHighlights(text: string): string {
  return text.replace(/\*([^*]+)\*/g, '<span class="highlight">$1</span>');
}
