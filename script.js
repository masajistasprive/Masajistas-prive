let currentLang = 'es';

const translations = {
  es: {
    metaTitle: "Masajistas Privé | Portal Exclusivo de Masajes en Buenos Aires",
    exit: "Salir",
    searchBtn: "Buscar",
    drawerTitle: "Buscador & Filtros",
    lblName: "Buscar por Nombre o Servicio",
    lblNamePh: "Escribí un nombre o técnica...",
    lblZone: "Filtrar por Zona / Barrio",
    optAllZones: "Todos los Barrios",
    lblCat: "Seleccionar Categoría",
    optAllCats: "Todas las Categorías",
    optCatSens: "Sensuales",
    optCatTerap: "Terapéuticas",
    optCatMasc: "Masculinos",
    optCatFant: "Fantasías",
    btnResults: "Ver Resultados",
    ageTitle: "Este es un sitio para adultos",
    ageDesc: "Este sitio contiene material para adultos. Al ingresar declarás que tenés al menos 18 años y aceptás nuestros términos y condiciones.<br><br><strong>Aviso:</strong> Las masajistas anunciantes no tienen ningún vínculo laboral con este portal; somos únicamente un soporte publicitario.",
    ageEnter: "ENTRAR (+18)",
    ageExit: "SALIR",
    featured: "Profesionales Destacadas:",
    tabAll: "Todas",
    tabSens: "Sensuales",
    tabTerap: "Terapéuticas",
    tabMasc: "Masculinos",
    tabFant: "Fantasías",
    tabForum: "💬 Foro",
    catSensTitle: "Masajistas Sensuales",
    catTerapTitle: "Masajistas Terapéuticas",
    catMascTitle: "Masajistas Masculinos",
    catFantTitle: "Fantasías",
    bannerTitle: "Publicitá tu espacio aquí",
    bannerDesc: "Alquiler de gabinetes equipados o incorporación a la nómina de profesionales. ¡Publicación 100% gratuita hasta el 30/09!",
    bannerBtn: "Consultar Ahora",
    cardSp1: "Espacio Disponible",
    cardSp2: "Publicación gratis hasta el 30/09",
    cardSp3: "Anunciarme",
    cardFree1: "Espacio Libre",
    cardFree2: "Anunciarme",
    cardPub1: "Publicá Tu Anuncio",
    cardPub2: "100% sin cargo hasta el 30/09",
    cardPub3: "Anunciarme",
    cardFan1: "Espacio Disponible",
    cardFan2: "Publicá tus sesiones especiales",
    cardFan3: "Anunciarme",
    cardFan4: "Publicá Tu Anuncio",
    cardFan5: "Perfil con verificación transparente",
    cardFan6: "Anunciarme",
    forumTitle: "💬 Foro & Comunidad Privé",
    forumSub: "Espacio de Debate",
    forumRules: "<strong>Normas del Foro:</strong> Mantené el respeto y la cordialidad. Se prohíbe divulgar datos personales privados, spam directo o contenido ofensivo. Las opiniones pertenecen exclusivamente a los usuarios.",
    noThreads: "Aún no hay temas creados en la comunidad. ¡Sé el primero en iniciar un debate!",
    newThreadTitle: "Crear un nuevo tema de debate",
    newThreadPh: "Título del tema o pregunta...",
    optFRec: "Recomendaciones de Zonas / Gabinetes",
    optFTec: "Consultas sobre Técnicas de Masajes",
    optFGen: "Debate General & Experiencias",
    newThreadBodyPh: "Escribí tu consulta o aporte a la comunidad...",
    btnCreateThread: "Publicar Tema",
    trustTitle: "🛡️ Compromiso de Calidad & Seguridad",
    trustUserH: "Guía para Usuarios",
    trustUserList: "<li>Coordinación transparente y directa vía WhatsApp sin intermediarios.</li><li>Respeto mutuo y trato cordial durante la atención en gabinete.</li><li>Cancelaciones con aviso previo para optimizar la agenda de las profesionales.</li>",
    trustProtoH: "Protocolo de Verificación",
    trustProtoP: "El sello <strong>✓ Privé Verificado</strong> garantiza la autenticidad del material fotográfico mediante validación previa de identidad, protegiendo a los usuarios contra perfiles falsos.",
    verifiedTag: "✓ Sello Oficial Privé Verificado",
    lblMod: "Modalidad / Zona",
    lblBio: "Descripción",
    lblSch: "Días y Horarios",
    lblEq: "Equipamiento y Servicios",
    lblServ: "Técnicas de Masaje",
    lblPay: "Medios de Pago",
    lblBook: "Modalidad de Turnos",
    btnCall: "📞 Contactar Telefónicamente",
    btnWa: "💬 Contactar por WhatsApp",
    expTitle: "Casilla de Experiencias",
    expRules: "Publicá tu experiencia con respeto y cordialidad hacia las profesionales y la comunidad. Comentarios ofensivos serán eliminados.",
    expAuthorPh: "Tu nombre o apodo...",
    expTextPh: "Escribí tu reseña o experiencia aquí...",
    btnSubmitExp: "Publicar Experiencia",
    floatingCta: "¿Querés Publicar?",
    footer: "<strong>DESCARGO DE RESPONSABILIDAD LEGAL:</strong> MasajistasPrivé.com funciona únicamente como un soporte publicitario digital independiente. El sitio no emplea, representa ni intermedia en la contratación de los anunciantes listados. Toda la información suministrada en los avisos es de exclusiva responsabilidad de cada anunciante. MasajistasPrivé.com se deslinda de cualquier responsabilidad legal respecto a la veracidad de los anuncios o el desarrollo de los servicios prestados por terceros."
  },
  en: {
    metaTitle: "Masajistas Privé | Exclusive Massage Portal in Buenos Aires",
    exit: "Exit",
    searchBtn: "Search",
    drawerTitle: "Search & Filters",
    lblName: "Search by Name or Service",
    lblNamePh: "Type a name or technique...",
    lblZone: "Filter by Zone / Neighborhood",
    optAllZones: "All Neighborhoods",
    lblCat: "Select Category",
    optAllCats: "All Categories",
    optCatSens: "Sensual",
    optCatTerap: "Therapeutic",
    optCatMasc: "Male",
    optCatFant: "Fantasies",
    btnResults: "View Results",
    ageTitle: "This is an adult site",
    ageDesc: "This portal contains adult material. By entering, you confirm you are at least 18 years old and accept our terms of service.<br><br><strong>Notice:</strong> Advertising masseuses have no employment relationship with this portal; we are solely an advertising medium.",
    ageEnter: "ENTER (+18)",
    ageExit: "EXIT",
    featured: "Featured Professionals:",
    tabAll: "All",
    tabSens: "Sensual",
    tabTerap: "Therapeutic",
    tabMasc: "Male",
    tabFant: "Fantasies",
    tabForum: "💬 Forum",
    catSensTitle: "Sensual Masseuses",
    catTerapTitle: "Therapeutic Masseuses",
    catMascTitle: "Male Masseurs",
    catFantTitle: "Fantasies",
    bannerTitle: "Advertise your space here",
    bannerDesc: "Rental of equipped studios or joining the exclusive roster of professionals. 100% free publication until 09/30!",
    bannerBtn: "Inquire Now",
    cardSp1: "Available Space",
    cardSp2: "Free publication until 09/30",
    cardSp3: "Advertise",
    cardFree1: "Free Space",
    cardFree2: "Advertise",
    cardPub1: "Publish Your Ad",
    cardPub2: "100% free until 09/30",
    cardPub3: "Advertise",
    cardFan1: "Available Space",
    cardFan2: "Publish your special sessions",
    cardFan3: "Advertise",
    cardFan4: "Publish Your Ad",
    cardFan5: "Profile with transparent verification",
    cardFan6: "Advertise",
    forumTitle: "💬 Privé Community Forum",
    forumSub: "Discussion Space",
    forumRules: "<strong>Forum Rules:</strong> Maintain respect and cordiality. Disseminating private personal data, direct spam, or offensive content is prohibited. Opinions belong exclusively to the users.",
    noThreads: "No threads created in the community yet. Be the first to start a discussion!",
    newThreadTitle: "Create a new discussion topic",
    newThreadPh: "Topic title or question...",
    optFRec: "Zone / Studio Recommendations",
    optFTec: "Massage Technique Inquiries",
    optFGen: "General Debate & Experiences",
    newThreadBodyPh: "Write your inquiry or contribution to the community...",
    btnCreateThread: "Publish Topic",
    trustTitle: "🛡️ Quality & Security Commitment",
    trustUserH: "User Guide",
    trustUserList: "<li>Transparent and direct coordination via WhatsApp without intermediaries.</li><li>Mutual respect and cordial treatment during studio appointments.</li><li>Cancellations with prior notice to optimize professionals' schedules.</li>",
    trustProtoH: "Verification Protocol",
    trustProtoP: "The <strong>✓ Verified Privé</strong> seal guarantees the authenticity of photographic material through prior identity validation, protecting users against fake profiles.",
    verifiedTag: "✓ Official Privé Verified Seal",
    lblMod: "Modality / Zone",
    lblBio: "Description",
    lblSch: "Days & Hours",
    lblEq: "Equipment & Amenities",
    lblServ: "Massage Techniques",
    lblPay: "Payment Methods",
    lblBook: "Booking Modality",
    btnCall: "📞 Contact via Phone",
    btnWa: "💬 Contact via WhatsApp",
    expTitle: "Experiences Box",
    expRules: "Publish your experience with respect and cordiality towards the professionals and the community. Offensive comments will be removed.",
    expAuthorPh: "Your name or nickname...",
    expTextPh: "Write your review or experience here...",
    btnSubmitExp: "Publish Experience",
    floatingCta: "Want to Advertise?",
    footer: "<strong>LEGAL DISCLAIMER:</strong> MasajistasPrivé.com acts solely as an independent digital advertising medium. The site does not employ, represent, or mediate in hiring listed advertisers. All information provided in ads is the exclusive responsibility of each advertiser. MasajistasPrivé.com disclaims any legal responsibility regarding the veracity of ads or services provided by third parties."
  }
};

function toggleLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  document.getElementById('lang-btn').innerText = currentLang === 'es' ? 'EN' : 'ES';
  const t = translations[currentLang];

  document.getElementById('meta-title').innerText = t.metaTitle;
  document.getElementById('txt-exit').innerText = t.exit;
  document.getElementById('txt-search-btn').innerText = t.searchBtn;
  document.getElementById('txt-drawer-title').innerText = t.drawerTitle;
  document.getElementById('txt-lbl-name').innerText = t.lblName;
  document.getElementById('drawer-search-name').placeholder = t.lblNamePh;
  document.getElementById('txt-lbl-zone').innerText = t.lblZone;
  document.getElementById('opt-all-zones').innerText = t.optAllZones;
  document.getElementById('txt-lbl-cat').innerText = t.lblCat;
  document.getElementById('opt-all-cats').innerText = t.optAllCats;
  document.getElementById('opt-cat-sens').innerText = t.optCatSens;
  document.getElementById('opt-cat-terap').innerText = t.optCatTerap;
  document.getElementById('opt-cat-masc').innerText = t.optCatMasc;
  document.getElementById('opt-cat-fant').innerText = t.optCatFant;
  document.getElementById('txt-btn-results').innerText = t.btnResults;

  document.getElementById('txt-age-title').innerText = t.ageTitle;
  document.getElementById('txt-age-desc').innerHTML = t.ageDesc;
  document.getElementById('txt-age-enter').innerText = t.ageEnter;
  document.getElementById('txt-age-exit').innerText = t.ageExit;

  document.getElementById('txt-featured').innerText = t.featured;
  document.getElementById('tab-all').innerText = t.tabAll;
  document.getElementById('tab-sens').innerText = t.tabSens;
  document.getElementById('tab-terap').innerText = t.tabTerap;
  document.getElementById('tab-masc').innerText = t.tabMasc;
  document.getElementById('tab-fant').innerText = t.tabFant;
  document.getElementById('tab-forum').innerText = t.tabForum;

  document.getElementById('txt-cat-sens-title').innerText = t.catSensTitle;
  document.getElementById('txt-cat-terap-title').innerText = t.catTerapTitle;
  document.getElementById('txt-cat-masc-title').innerText = t.catMascTitle;
  document.getElementById('txt-cat-fant-title').innerText = t.catFantTitle;

  document.getElementById('txt-banner-title').innerText = t.bannerTitle;
  document.getElementById('txt-banner-desc').innerText = t.bannerDesc;
  document.getElementById('txt-banner-btn').innerText = t.bannerBtn;

  document.getElementById('txt-card-sp-1').innerText = t.cardSp1;
  document.getElementById('txt-card-sp-2').innerText = t.cardSp2;
  document.getElementById('txt-card-sp-3').innerText = t.cardSp3;
  document.getElementById('txt-card-free-1').innerText = t.cardFree1;
  document.getElementById('txt-card-free-2').innerText = t.cardFree2;
  document.getElementById('txt-card-pub-1').innerText = t.cardPub1;
  document.getElementById('txt-card-pub-2').innerText = t.cardPub2;
  document.getElementById('txt-card-pub-3').innerText = t.cardPub3;
  document.getElementById('txt-card-fan-1').innerText = t.cardFan1;
  document.getElementById('txt-card-fan-2').innerText = t.cardFan2;
  document.getElementById('txt-card-fan-3').innerText = t.cardFan3;
  document.getElementById('txt-card-fan-4').innerText = t.cardFan4;
  document.getElementById('txt-card-fan-5').innerText = t.cardFan5;
  document.getElementById('txt-card-fan-6').innerText = t.cardFan6;

  document.getElementById('txt-forum-title').innerText = t.forumTitle;
  document.getElementById('txt-forum-sub').innerText = t.forumSub;
  document.getElementById('txt-forum-rules').innerHTML = t.forumRules;
  const noTh = document.getElementById('txt-no-threads');
  if(noTh) noTh.innerText = t.noThreads;
  document.getElementById('txt-new-thread-title').innerText = t.newThreadTitle;
  document.getElementById('forum-title-input').placeholder = t.newThreadPh;
  document.getElementById('opt-f-rec').innerText = t.optFRec;
  document.getElementById('opt-f-tec').innerText = t.optFTec;
  document.getElementById('opt-f-gen').innerText = t.optFGen;
  document.getElementById('forum-body-input').placeholder = t.newThreadBodyPh;
  document.getElementById('txt-btn-create-thread').innerText = t.btnCreateThread;

  document.getElementById('txt-trust-title').innerText = t.trustTitle;
  document.getElementById('txt-trust-user-h').innerText = t.trustUserH;
  document.getElementById('txt-trust-user-list').innerHTML = t.trustUserList;
  document.getElementById('txt-trust-proto-h').innerText = t.trustProtoH;
  document.getElementById('txt-trust-proto-p').innerHTML = t.trustProtoP;

  document.getElementById('modal-verified-tag').innerText = t.verifiedTag;
  document.getElementById('lbl-mod').innerText = t.lblMod;
  document.getElementById('lbl-bio').innerText = t.lblBio;
  document.getElementById('lbl-sch').innerText = t.lblSch;
  document.getElementById('lbl-eq').innerText = t.lblEq;
  document.getElementById('lbl-serv').innerText = t.lblServ;
  document.getElementById('lbl-pay').innerText = t.lblPay;
  document.getElementById('lbl-book').innerText = t.lblBook;
  document.getElementById('modal-call-btn').innerText = t.btnCall;
  document.getElementById('modal-wa-btn').innerText = t.btnWa;

  document.getElementById('txt-exp-title').innerText = t.expTitle;
  document.getElementById('txt-exp-rules').innerText = t.expRules;
  document.getElementById('new-exp-author').placeholder = t.expAuthorPh;
  document.getElementById('new-exp-text').placeholder = t.expTextPh;
  document.getElementById('txt-btn-submit-exp').innerText = t.btnSubmitExp;
  document.getElementById('txt-floating-cta').innerText = t.floatingCta;
  document.getElementById('txt-footer').innerHTML = t.footer;
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('data:text/javascript;base64,c2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsIChldmVudCkgPT4ge30pOw==')
      .catch(() => {});
  });
}

document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
  if (e.keyCode === 123 || 
     (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) ||
     (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83))) {
    e.preventDefault();
    return false;
  }
});

function cleanInput(str) {
  return str.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}

let currentImages = [];

const profilesData = {
  jennyfer: {
    id: 'jennyfer',
    name: 'Jennyfer',
    neighborhood: 'Tribunales',
    modality: 'Consultorio propio',
    schedule: 'Lunes a Viernes de 08 a 19hs (Sábados y Domingos previa reserva con seña)',
    bio: 'Atención profesional y personalizada in consultorio privado equipado en la zona de Tribunales.',
    equipment: 'Ducha, aire acondicionado, gabinete cosmetológico, gabinete SPA, frigobar.',
    services: 'Masajes profesionales, depilación láser, cosmetología facial y corporal.',
    payments: 'Efectivo, transferencia (Tarjetas de crédito y débito tienen 15% de recargo).',
    booking: 'Reserva previa por WhatsApp',
    phone: '5491124078332',
    isReal: true,
    images: ['./jennyfer1.jpg', './jennyfer2.jpg', './jennyfer3.jpg', './jennyfer4.jpg']
  },
  deby: {
    id: 'deby',
    name: 'Deby',
    neighborhood: 'Caballito',
    modality: 'Gabinete propio',
    schedule: 'Lunes a Domingos de 08 a 00 hs',
    bio: 'Atención personalizada en gabinete propio en el barrio de Caballito.',
    equipment: 'Camilla, ducha, ambiente climatizado.',
    services: 'Masajes relajante, sensual, sensitivo, prostático, descontracturante.',
    payments: 'Efectivo (Mercado Pago con recargo)',
    booking: 'Reserva previa por WhatsApp',
    phone: '5491176540982',
    isReal: true,
    images: ['./deby1.jpg', './deby2.jpg', './deby3.jpg', './deby4.jpg']
  },
  prada: {
    id: 'prada',
    name: 'Prada',
    neighborhood: 'Tribunales',
    modality: 'Departamento reservado',
    schedule: 'Lunes a Sábados de 09 a 21 hs',
    bio: 'Atención personalizada en departamento reservado en la zona de Tribunales.',
    equipment: 'Camilla, tatami, aire acondicionado, servicio de ducha, frigobar sin cargo.',
    services: 'Masajes californianos, sensitivos y descontracturantes.',
    payments: 'Efectivo, transferencia bancaria, Mercado Pago, Prex.',
    booking: 'Reserva previa por WhatsApp',
    phone: '5491135796465',
    isReal: true,
    images: ['./prada1.jpg', './prada2.jpg', './prada3.jpg', './prada4.jpg']
  },
  lupita: {
    id: 'lupita',
    name: 'Lupita',
    neighborhood: 'Tribunales',
    modality: 'Dpto propio / Hoteles',
    schedule: 'Lunes a Sábados de 09 a 20 hs',
    bio: 'Atención en departamento propio en Tribunales, hoteles y servicio virtual.',
    equipment: 'Camilla, tatami, servicio de ducha, aire acondicionado y frigobar.',
    services: 'Masajes descontracturantes, relajantes, bodymassage y servicio virtual.',
    payments: 'Efectivo, transferencia bancaria y Mercado Pago.',
    booking: 'Reserva previa por WhatsApp',
    phone: '5491128816913',
    isReal: true,
    images: ['./lupita1.jpg', './lupita2.jpg', './lupita3.jpg', './lupita4.jpg']
  },
  sol: {
    id: 'sol',
    name: 'Sol',
    neighborhood: 'Tribunales',
    modality: 'Departamento propio',
    schedule: 'Consultar horarios disponibles vía WhatsApp',
    bio: 'Atención exclusiva y personalizada en departamento propio en la zona de Tribunales. Un ambiente privado y confortable para desconectarte del estrés.',
    equipment: 'Gabinete privado climatizado, duchas, excelente ambientación.',
    services: 'Masajes descontracturantes, relajantes y sensitivos.',
    payments: 'Efectivo, transferencia bancaria, Mercado Pago y USD.',
    booking: 'Reserva previa por WhatsApp',
    phone: '5491161621255',
    isReal: true,
    images: ['./sol1.jpg', './sol2.jpg', './sol3.jpg', './sol4.jpg']
  },
  matias: {
    id: 'matias',
    name: 'Matias',
    neighborhood: 'Recoleta',
    modality: 'Gabinete / Camilla',
    schedule: 'Lunes a Domingos de 11 a 22 hs',
    bio: 'Masajes profesionales para relajarte y renovar tu energía. Sesiones sobre camilla con cremas neutras en un ambiente cálido, tranquilo y climatizado.',
    equipment: 'Camilla, ambiente cálido y climatizado, cremas neutras.',
    services: 'Masajes descontracturantes, relajantes, naturistas, sensitivos y reflexología.',
    payments: 'Efectivo y transferencia bancaria.',
    booking: 'Reserva previa por WhatsApp',
    phone: '5491121808338',
    isReal: true,
    images: ['./matias1.jpg', './matias2.jpg', './matias3.jpg', './matias4.jpg']
  },
  daniela: {
    id: 'daniela',
    name: 'Daniela',
    neighborhood: 'Microcentro',
    modality: 'Gabinete propio',
    schedule: 'Lunes a Sábados de 11 a 19 hs',
    bio: 'Atención profesional y personalizada en gabinete privado en Microcentro. Sesiones pensadas para renovar tu energía.',
    equipment: 'Gabinete propio, servicio de ducha, ambiente climatizado.',
    services: 'Masajes relajantes, descontracturantes y deportivos.',
    payments: 'Efectivo y transferencia bancaria.',
    booking: 'Reserva previa por WhatsApp',
    phone: '5491124983744',
    isReal: true,
    images: ['./daniela1.jpg', './daniela2.jpg', './daniela3.jpg', './daniela4.jpg']
  },
  zaira: {
    id: 'zaira',
    name: 'Zaira',
    neighborhood: 'Caballito',
    modality: 'Gabinete propio',
    schedule: 'Lunes a Domingos de 10 a 20 hs',
    bio: 'Atención personalizada en ambiente privado en el barrio de Caballito. Terapeutas con experiencia en diversas técnicas corporales.',
    equipment: 'Gabinete propio, servicio de ducha, ambiente climatizado.',
    services: 'Masajes descontracturantes, relajantes, deportivos, ayurveda y terapia tailandesa.',
    payments: 'Efectivo y transferencia bancaria.',
    booking: 'Reserva previa por WhatsApp',
    phone: '5491168480866',
    isReal: true,
    images: ['./zaira1.jpg', './zaira2.jpg', './zaira3.jpg', './zaira4.jpg']
  },
  donatella: {
    id: 'donatella',
    name: 'Donatella',
    neighborhood: 'CABA',
    modality: 'Dpto propio',
    schedule: 'Lunes a Sábados de 11 a 20 hs',
    bio: 'Atención personalizada en departamento propio. Un espacio súper cómodo y tranquilo para relajarte por completo.',
    equipment: 'Ducha, aire acondicionado, camilla y tatami.',
    services: 'Masajes descontracturantes, relajantes y sensitivos.',
    payments: 'Efectivo y transferencia.',
    booking: 'Reserva previa por WhatsApp',
    phone: '5491127562124',
    isReal: true,
    images: ['./donatella1.jpg', './donatella2.jpg', './donatella3.jpg', './donatella4.jpg']
  },
  mariela: {
    id: 'mariela',
    name: 'Mariela',
    neighborhood: 'Congreso / Balvanera',
    modality: 'Departamento propio',
    schedule: 'Lunes a Sábados de 10 a 21 hs (Domingos consultar)',
    bio: 'Regalate un momento para aliviar tensiones, relajar el cuerpo y renovar tu energía. Un espacio pensado para que te sientas mejor desde el primer momento.',
    equipment: 'Camilla, piedras calientes, almohadillas térmicas y aparatología complementaria.',
    services: 'Masajes terapéuticos y descontracturantes.',
    payments: 'Efectivo y transferencia.',
    booking: 'Reserva previa por WhatsApp (Solo WhatsApp)',
    phone: '5491149461581',
    isReal: true,
    images: ['./mariela1.jpg', './mariela2.jpg', './mariela3.jpg', './mariela4.jpg']
  },
  mia: {
    id: 'mia',
    name: 'Mia',
    neighborhood: 'Congreso',
    modality: 'Atención privada',
    schedule: 'Lunes a Sábados de 12 a 18 hs',
    bio: 'Mi servicio es de masajes sensuales, buscando tu relajación plena y relax. Un momento de paz y desconexión.',
    equipment: 'Ambiente privado y confortable.',
    services: 'Masajes sensuales y relajación plena.',
    payments: 'Efectivo y transferencia.',
    booking: 'Reserva previa por WhatsApp',
    phone: '5491130065404',
    isReal: true,
    images: ['./mia1.jpg', './mia2.jpg', './mia3.jpg', './mia4.jpg']
  },
  celeste: {
    id: 'celeste',
    name: 'Celeste',
    neighborhood: 'Congreso',
    modality: 'Gabinete / Domicilio',
    schedule: 'Lunes a Viernes de 10 a 17 hs',
    bio: 'Atención personalizada en gabinete y domicilios en la zona de Congreso.',
    equipment: 'Gabinete privado, ambiente climatizado.',
    services: 'Masajes relajantes y descontracturantes.',
    payments: 'Efectivo y transferencia.',
    booking: 'Reserva previa por WhatsApp',
    phone: '5491157597174',
    isReal: true,
    images: ['./celeste1.jpg', './celeste2.jpg', './celeste3.jpg', './celeste4.jpg']
  }
};

function quickExit() {
  window.location.replace('https://www.google.com');
}

function activarModoCamuflaje() {
  document.title = "Wikipedia, la enciclopedia libre";
  let metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute("content", "#ffffff");
  
  document.body.innerHTML = `
    <div style="background:#fff; min-height:100vh; padding:20px; font-family:sans-serif; color:#000; -webkit-user-select:text; user-select:text;">
      <h1 style="border-bottom:1px solid #ccc; padding-bottom:5px; font-size:24px;">Economía global</h1>
      <p style="font-size:14px; line-height:1.6; color:#333;">La economía global es el sistema de comercio e industria en todo el mundo. Comprende todas las actividades económicas de múltiples países que se entrelazan mediante intercambios internacionales...</p>
      <ul style="color:#0645ad; font-size:14px;"><li>Historia económica</li><li>Sistemas macroeconómicos</li></ul>
    </div>
  `;
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    activarModoCamuflaje();
  }
});

function toggleFilterDrawer() {
  const drawer = document.getElementById('filter-drawer');
  const isHidden = drawer.classList.contains('hidden');
  if (isHidden) {
    drawer.classList.remove('hidden');
    if (history.pushState) {
      history.pushState({ drawer: true }, null, '#search');
    }
  } else {
    drawer.classList.add('hidden');
    if (window.location.hash === '#search') {
      history.back();
    }
  }
}

function applyDrawerFilters() {
  const query = document.getElementById('drawer-search-name').value.toLowerCase();
  const selectedNeighborhood = document.getElementById('drawer-search-neighborhood').value.toLowerCase();
  const catQuery = document.getElementById('drawer-search-category').value;

  if (catQuery !== 'all') {
    showCategory(catQuery);
  } else {
    document.querySelectorAll('.category-block').forEach(cat => cat.classList.remove('hidden'));
    document.querySelectorAll('.category-content').forEach(sec => sec.classList.remove('hidden'));
  }

  const cards = document.querySelectorAll('.card-profile[data-name]');
  cards.forEach(card => {
    const name = card.getAttribute('data-name');
    const zone = card.getAttribute('data-zone');
    const matchesQuery = !query || name.includes(query) || zone.includes(query);
    const matchesNeighborhood = !selectedNeighborhood || zone === selectedNeighborhood;
    
    if (matchesQuery && matchesNeighborhood) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function openProfileById(id) {
  const p = profilesData[id];
  if (!p) return;

  if (history.pushState) {
    history.pushState({ profile: id }, null, '#' + id);
  } else {
    window.location.hash = id;
  }

  currentImages = p.images;
  document.getElementById('modal-name').innerText = p.name + ' (' + p.neighborhood + ')';
  
  const tagVerified = document.getElementById('modal-verified-tag');
  tagVerified.innerText = translations[currentLang].verifiedTag;

  document.getElementById('modal-modality').innerText = p.modality + ' - ' + p.neighborhood;
  document.getElementById('modal-bio').innerText = p.bio;
  document.getElementById('modal-schedule').innerText = p.schedule;
  document.getElementById('modal-equipment').innerText = p.equipment;
  document.getElementById('modal-services').innerText = p.services;
  document.getElementById('modal-payments').innerText = p.payments;
  document.getElementById('modal-booking').innerText = p.booking;

  const wspMsg = encodeURIComponent(`¡Hola ${p.name}! Te vi en Masajistas Privé y quería consultar por un turno.`);
  document.getElementById('modal-call-btn').href = `tel:+${p.phone}`;
  document.getElementById('modal-wa-btn').href = `https://wa.me/${p.phone}?text=${wspMsg}`;

  const container = document.getElementById('modal-gallery-container');
  container.innerHTML = '';
  
  p.images.forEach((imgSrc, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'img-wrapper';
    wrapper.onclick = () => openLightbox(index);
    
    const img = document.createElement('img');
    img.src = imgSrc;
    img.className = 'main-photo';
    
    const wm = document.createElement('div');
    wm.className = 'watermark-overlay';
    wm.innerHTML = '<img src="./logo.png" alt="Marca de agua" class="watermark-logo-img">';
    
    wrapper.appendChild(img);
    wrapper.appendChild(wm);
    container.appendChild(wrapper);
  });

  loadEmptyComments();
  document.getElementById('profile-modal').classList.remove('hidden');
}

function acceptAge() {
  document.getElementById('age-gate').classList.add('hidden');
}

function closeProfile() {
  document.getElementById('profile-modal').classList.add('hidden');
  if (window.location.hash && window.location.hash !== '#search') {
    history.back();
  }
}

window.addEventListener('popstate', function(event) {
  const modal = document.getElementById('profile-modal');
  const drawer = document.getElementById('filter-drawer');
  const lightbox = document.getElementById('lightbox');

  if (!lightbox.classList.contains('hidden')) {
    closeLightbox();
  } else if (!modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
  } else if (!drawer.classList.contains('hidden')) {
    drawer.classList.add('hidden');
  }
});

function openLightbox(startIndex) {
  const slider = document.getElementById('lightbox-slider');
  slider.innerHTML = '';

  currentImages.forEach(imgSrc => {
    const slide = document.createElement('div');
    slide.className = 'lightbox-slide';

    const img = document.createElement('img');
    img.src = imgSrc;

    const wm = document.createElement('div');
    wm.className = 'watermark-overlay';
    wm.innerHTML = '<img src="./logo.png" alt="Marca de agua" class="watermark-logo-img">';

    slide.appendChild(img);
    slide.appendChild(wm);
    slider.appendChild(slide);
  });

  document.getElementById('lightbox').classList.remove('hidden');
  slider.scrollLeft = startIndex * window.innerWidth;
}

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
}

function loadEmptyComments() {
  const list = document.getElementById('comments-list');
  list.innerHTML = `<span class="no-comments">${currentLang === 'es' ? 'Aquí figurarán las opiniones de los clientes.' : 'Client reviews will appear here.'}</span>`;
}

function addExperience() {
  const authorInput = document.getElementById('new-exp-author');
  const textInput = document.getElementById('new-exp-text');
  
  const author = cleanInput(authorInput.value.trim()) || 'Anónimo';
  const text = cleanInput(textInput.value.trim());

  if (!text) return;

  const list = document.getElementById('comments-list');
  
  const emptyMsg = list.querySelector('.no-comments');
  if (emptyMsg) emptyMsg.remove();

  const card = document.createElement('div');
  card.className = 'comment-card';
  card.innerHTML = `
    <div class="comment-header">
      <span class="comment-author">${author}</span>
      <span class="comment-date">${currentLang === 'es' ? 'Hoy' : 'Today'}</span>
    </div>
    <p class="comment-text">${text}</p>
  `;
  list.appendChild(card);
  authorInput.value = '';
  textInput.value = '';
}

function scrollToForum(btn) {
  if (btn) updateActiveTab(btn);
  const forum = document.getElementById('forum-container');
  if (forum) forum.scrollIntoView({ behavior: 'smooth' });
}

function likeThread(btn) {
  let parts = btn.innerText.split(' ');
  let count = parseInt(parts[1]) || 0;
  count++;
  btn.innerText = '👍 ' + count + (currentLang === 'es' ? ' Me gusta' : ' Likes');
}

function toggleThreadReplies(btn) {
  alert(currentLang === 'es' ? 'Función de respuestas: Podrás ver y responder hilos detallados en la versión en vivo.' : 'Replies feature: You will be able to view and reply to detailed threads in the live version.');
}

function createForumThread() {
  const rawTitle = document.getElementById('forum-title-input').value.trim();
  const category = cleanInput(document.getElementById('forum-category-select').value);
  const rawBody = document.getElementById('forum-body-input').value.trim();

  const title = cleanInput(rawTitle);
  const body = cleanInput(rawBody);

  if (!title || !body) {
    alert(currentLang === 'es' ? 'Por favor completa el título y el contenido del tema.' : 'Please complete the title and content of the topic.');
    return;
  }

  const container = document.getElementById('forum-threads-list');
  
  const emptyMsg = container.querySelector('.no-threads');
  if (emptyMsg) emptyMsg.remove();

  const threadCard = document.createElement('div');
  threadCard.className = 'forum-thread-card';
  threadCard.innerHTML = `
    <h4 class="forum-thread-title">${title}</h4>
    <div class="forum-thread-meta">
      <span>Por: <strong>Usuario_Privé</strong></span>
      <span>Categoría: <strong>${category}</strong></span>
      <span>${currentLang === 'es' ? 'Hace un instante' : 'Just now'}</span>
    </div>
    <p class="forum-thread-body">${body}</p>
    <div class="forum-actions">
      <button class="btn-forum-action" onclick="likeThread(this)">👍 0 ${currentLang === 'es' ? 'Me gusta' : 'Likes'}</button>
      <button class="btn-forum-action" onclick="toggleThreadReplies(this)">💬 0 ${currentLang === 'es' ? 'Respuestas' : 'Replies'}</button>
    </div>
  `;

  container.prepend(threadCard);
  document.getElementById('forum-title-input').value = '';
  document.getElementById('forum-body-input').value = '';
}

function toggleCategory(sectionId) {
  const sec = document.getElementById(sectionId);
  const icon = document.getElementById('icon-' + sectionId);
  if (sec.classList.contains('hidden')) {
    sec.classList.remove('hidden');
    if (icon) icon.innerText = '▼';
  } else {
    sec.classList.add('hidden');
    if (icon) icon.innerText = '▶';
  }
}

function showAllCategories(btn) {
  if (btn) updateActiveTab(btn);
  document.querySelectorAll('.category-block').forEach(cat => cat.classList.remove('hidden'));
  document.querySelectorAll('.category-content').forEach(sec => sec.classList.remove('hidden'));
  document.querySelectorAll('.toggle-icon').forEach(icon => icon.innerText = '▼');
}

function showCategory(sectionId, btn) {
  if (btn) updateActiveTab(btn);
  document.querySelectorAll('.category-block').forEach(cat => cat.classList.add('hidden'));
  
  const targetSec = document.getElementById(sectionId);
  if (targetSec) {
    targetSec.classList.remove('hidden');
    const parentBlock = targetSec.closest('.category-block');
    if (parentBlock) parentBlock.classList.remove('hidden');
    const icon = document.getElementById('icon-' + sectionId);
    if (icon) icon.innerText = '▼';
  }
}

function updateActiveTab(activeBtn) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (activeBtn) activeBtn.classList.add('active');
}
