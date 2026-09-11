
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
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.innerText = currentLang === 'es' ? '🇪🇸' : '🇬🇧';
  const t = translations[currentLang];

  safeSet('meta-title', t.metaTitle, 'innerText');
  safeSet('txt-exit', t.exit, 'innerText');
  safeSet('txt-search-btn', t.searchBtn, 'innerText');
  safeSet('txt-drawer-title', t.drawerTitle, 'innerText');
  safeSet('txt-lbl-name', t.lblName, 'innerText');
  safeSet('drawer-search-name', t.lblNamePh, 'placeholder');
  safeSet('txt-lbl-zone', t.lblZone, 'innerText');
  safeSet('opt-all-zones', t.optAllZones, 'innerText');
  safeSet('txt-lbl-cat', t.lblCat, 'innerText');
  safeSet('opt-all-cats', t.optAllCats, 'innerText');
  safeSet('opt-cat-sens', t.optCatSens, 'innerText');
  safeSet('opt-cat-terap', t.optCatTerap, 'innerText');
  safeSet('opt-cat-masc', t.optCatMasc, 'innerText');
  safeSet('opt-cat-fant', t.optCatFant, 'innerText');
  safeSet('txt-btn-results', t.btnResults, 'innerText');

  safeSet('txt-age-title', t.ageTitle, 'innerText');
  safeSet('txt-age-desc', t.ageDesc, 'innerHTML');
  safeSet('txt-age-enter', t.ageEnter, 'innerText');
  safeSet('txt-age-exit', t.ageExit, 'innerText');

  safeSet('tab-all', t.tabAll, 'innerText');
  safeSet('tab-sens', t.tabSens, 'innerText');
  safeSet('tab-terap', t.tabTerap, 'innerText');
  safeSet('tab-masc', t.tabMasc, 'innerText');
  safeSet('tab-fant', t.tabFant, 'innerText');
  safeSet('tab-forum', t.tabForum, 'innerText');

  safeSet('txt-cat-sens-title', t.catSensTitle, 'innerText');
  safeSet('txt-cat-terap-title', t.catTerapTitle, 'innerText');
  safeSet('txt-cat-masc-title', t.catMascTitle, 'innerText');
  safeSet('txt-cat-fant-title', t.catFantTitle, 'innerText');

  safeSet('txt-banner-title', t.bannerTitle, 'innerText');
  safeSet('txt-banner-desc', t.bannerDesc, 'innerText');
  safeSet('txt-banner-btn', t.bannerBtn, 'innerText');

  safeSet('txt-card-sp-1', t.cardSp1, 'innerText');
  safeSet('txt-card-sp-2', t.cardSp2, 'innerText');
  safeSet('txt-card-sp-3', t.cardSp3, 'innerText');
  safeSet('txt-card-free-1', t.cardFree1, 'innerText');
  safeSet('txt-card-free-2', t.cardFree2, 'innerText');
  safeSet('txt-card-pub-1', t.cardPub1, 'innerText');
  safeSet('txt-card-pub-2', t.cardPub2, 'innerText');
  safeSet('txt-card-pub-3', t.cardPub3, 'innerText');
  safeSet('txt-card-fan-1', t.cardFan1, 'innerText');
  safeSet('txt-card-fan-2', t.cardFan2, 'innerText');
  safeSet('txt-card-fan-3', t.cardFan3, 'innerText');
  safeSet('txt-card-fan-4', t.cardFan4, 'innerText');
  safeSet('txt-card-fan-5', t.cardFan5, 'innerText');
  safeSet('txt-card-fan-6', t.cardFan6, 'innerText');

  safeSet('txt-forum-title', t.forumTitle, 'innerText');
  safeSet('txt-forum-sub', t.forumSub, 'innerText');
  safeSet('txt-forum-rules', t.forumRules, 'innerHTML');
  safeSet('txt-no-threads', t.noThreads, 'innerText');
  safeSet('txt-new-thread-title', t.newThreadTitle, 'innerText');
  safeSet('forum-title-input', t.newThreadPh, 'placeholder');
  safeSet('opt-f-rec', t.optFRec, 'innerText');
  safeSet('opt-f-tec', t.optFTec, 'innerText');
  safeSet('opt-f-gen', t.optFGen, 'innerText');
  safeSet('forum-body-input', t.newThreadBodyPh, 'placeholder');
  safeSet('txt-btn-create-thread', t.btnCreateThread, 'innerText');

  safeSet('txt-trust-title', t.trustTitle, 'innerText');
  safeSet('txt-trust-user-h', t.trustUserH, 'innerText');
  safeSet('txt-trust-user-list', t.trustUserList, 'innerHTML');
  safeSet('txt-trust-proto-h', t.trustProtoH, 'innerText');
  safeSet('txt-trust-proto-p', t.trustProtoP, 'innerHTML');

  safeSet('modal-verified-tag', t.verifiedTag, 'innerText');
  safeSet('lbl-mod', t.lblMod, 'innerText');
  safeSet('lbl-bio', t.lblBio, 'innerText');
  safeSet('lbl-sch', t.lblSch, 'innerText');
  safeSet('lbl-eq', t.lblEq, 'innerText');
  safeSet('lbl-serv', t.lblServ, 'innerText');
  safeSet('lbl-pay', t.lblPay, 'innerText');
  safeSet('lbl-book', t.lblBook, 'innerText');
  safeSet('modal-call-btn', t.btnCall, 'innerText');
  safeSet('modal-wa-btn', t.btnWa, 'innerText');

  safeSet('txt-exp-title', t.expTitle, 'innerText');
  safeSet('txt-exp-rules', t.expRules, 'innerText');
  safeSet('new-exp-author', t.expAuthorPh, 'placeholder');
  safeSet('new-exp-text', t.expTextPh, 'placeholder');
  safeSet('txt-btn-submit-exp', t.btnSubmitExp, 'innerText');
  safeSet('txt-floating-cta', t.floatingCta, 'innerText');
  safeSet('txt-footer', t.footer, 'innerHTML');

  const modal = document.getElementById('profile-modal');
  if (modal && !modal.classList.contains('hidden') && window.currentOpenProfileId) {
    openProfileById(window.currentOpenProfileId);
  }
}

function safeSet(id, value, property) {
  const el = document.getElementById(id);
  if (el) {
    el[property] = value;
  }
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

// Función integral que se ejecuta al cargar: baraja perfiles Y comprueba el cartel +18
function initApp() {
  // 1. Barajar perfiles de manera independiente en cada categoría
  const categoryContents = document.querySelectorAll('.category-content');
  categoryContents.forEach(content => {
    const grid = content.querySelector('.grid-2');
    if (!grid) return;
    
    const cards = Array.from(grid.children);
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      grid.appendChild(cards[j]);
    }
  });

  // 2. Control del cartel de +18 con memoria (localStorage)
  const ageGate = document.getElementById('age-gate');
  if (ageGate) {
    if (localStorage.getItem('prive_age_verified') === 'true') {
      ageGate.classList.add('hidden');
    }
  }
}

document.addEventListener('DOMContentLoaded', initApp);

// Función modificada para guardar que ya aceptó la edad
function acceptAge() {
  localStorage.setItem('prive_age_verified', 'true');
  const ageGate = document.getElementById('age-gate');
  if (ageGate) {
    ageGate.classList.add('hidden');
  }
}

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
    modality: { es: 'Consultorio propio', en: 'Private office' },
    schedule: { es: 'Lunes a Viernes de 08 a 19hs (Sábados y Domingos previa reserva con seña)', en: 'Monday to Friday from 08 to 19hs (Saturdays and Sundays prior reservation with deposit)' },
    bio: { es: 'Atención profesional y personalizada en consultorio privado equipado en la zona de Tribunales.', en: 'Professional and personalized attention in a private office equipped in the Tribunales area.' },
    equipment: { es: 'Ducha, aire acondicionado, gabinete cosmetológico, gabinete SPA, frigobar.', en: 'Shower, air conditioning, cosmetological office, SPA office, minibar.' },
    services: { es: 'Masajes profesionales, depilación láser, cosmetología facial y corporal.', en: 'Professional massages, laser hair removal, facial and body cosmetology.' },
    payments: { es: 'Efectivo, transferencia (Tarjetas de crédito y débito tienen 15% de recargo).', en: 'Cash, transfer (Credit and debit cards have a 15% surcharge).' },
    booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' },
    phone: '5491124078332',
    images: ['./jennyfer1.jpg', './jennyfer2.jpg', './jennyfer3.jpg', './jennyfer4.jpg']
  },
  deby: {
    id: 'deby',
    name: 'Deby',
    neighborhood: 'Caballito',
    modality: { es: 'Gabinete propio', en: 'Private studio' },
    schedule: { es: 'Lunes a Domingos de 08 a 00 hs', en: 'Monday to Sunday from 08 to 00 hs' },
    bio: { es: 'Atención personalizada en gabinete propio en el barrio de Caballito.', en: 'Personalized attention in a private studio in the Caballito neighborhood.' },
    equipment: { es: 'Camilla, ducha, ambiente climatizado.', en: 'Massage table, shower, air-conditioned environment.' },
    services: { es: 'Masajes relajante, sensual, sensitivo, prostático, descontracturante.', en: 'Relaxing, sensual, sensitive, prostatic, deep tissue massages.' },
    payments: { es: 'Efectivo (Mercado Pago con recargo)', en: 'Cash (Mercado Pago with surcharge)' },
    booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' },
    phone: '5491176540982',
    images: ['./deby1.jpg', './deby2.jpg', './deby3.jpg', './deby4.jpg']
  },
  prada: {
    id: 'prada',
    name: 'Prada',
    neighborhood: 'Tribunales',
    modality: { es: 'Departamento reservado', en: 'Reserved apartment' },
    schedule: { es: 'Lunes a Sábados de 09 a 21 hs', en: 'Monday to Saturdays from 09 to 21 hs' },
    bio: { es: 'Atención personalizada en departamento reservado en la zona de Tribunales.', en: 'Personalized attention in a reserved apartment in the Tribunales area.' },
    equipment: { es: 'Camilla, tatami, aire acondicionado, servicio de ducha, frigobar sin cargo.', en: 'Massage table, tatami, air conditioning, shower service, free minibar.' },
    services: { es: 'Masajes californianos, sensitivos y descontracturantes.', en: 'Californian, sensitive and deep tissue massages.' },
    payments: { es: 'Efectivo, transferencia bancaria, Mercado Pago, Prex.', en: 'Cash, bank transfer, Mercado Pago, Prex.' },
    booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' },
    phone: '5491135796465',
    images: ['./prada1.jpg', './prada2.jpg', './prada3.jpg', './prada4.jpg']
  },
  lupita: {
    id: 'lupita',
    name: 'Lupita',
    neighborhood: 'Tribunales',
    modality: { es: 'Dpto propio / Hoteles', en: 'Private apt / Hotels' },
    schedule: { es: 'Lunes a Sábados de 09 a 20 hs', en: 'Monday to Saturdays from 09 to 20 hs' },
    bio: { es: 'Atención en departamento propio en Tribunales, hoteles y servicio virtual.', en: 'Attention in private apartment in Tribunales, hotels and virtual service.' },
    equipment: { es: 'Camilla, tatami, servicio de ducha, aire acondicionado y frigobar.', en: 'Massage table, tatami, shower service, air conditioning and minibar.' },
    services: { es: 'Masajes descontracturantes, relajantes, bodymassage y servicio virtual.', en: 'Deep tissue, relaxing massages, body massage and virtual service.' },
    payments: { es: 'Efectivo, transferencia bancaria y Mercado Pago.', en: 'Cash, bank transfer and Mercado Pago.' },
    booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' },
    phone: '5491128816913',
    images: ['./lupita1.jpg', './lupita2.jpg', './lupita3.jpg', './lupita4.jpg']
  },
  sol: {
    id: 'sol',
    name: 'Sol',
    neighborhood: 'Tribunales',
    modality: { es: 'Departamento propio', en: 'Private apartment' },
    schedule: { es: 'Consultar horarios disponibles vía WhatsApp', en: 'Check available schedules via WhatsApp' },
    bio: { es: 'Atención exclusiva y personalizada en departamento propio en la zona de Tribunales. Un ambiente privado y confortable para desconectarte del estrés.', en: 'Exclusive and personalized attention in a private apartment in the Tribunales area. A private and comfortable environment to disconnect from stress.' },
    equipment: { es: 'Gabinete privado climatizado, duchas, excelente ambientación.', en: 'Air-conditioned private studio, showers, excellent ambiance.' },
    services: { es: 'Masajes descontracturantes, relajantes y sensitivos.', en: 'Deep tissue, relaxing and sensitive massages.' },
    payments: { es: 'Efectivo, transferencia bancaria, Mercado Pago y USD.', en: 'Cash, bank transfer, Mercado Pago and USD.' },
    booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' },
    phone: '5491161621255',
    images: ['./sol1.jpg', './sol2.jpg', './sol3.jpg', './sol4.jpg']
  },
  matias: {
    id: 'matias',
    name: 'Matias',
    neighborhood: 'Recoleta',
    modality: { es: 'Gabinete / Camilla', en: 'Studio / Table' },
    schedule: { es: 'Lunes a Domingos de 11 a 22 hs', en: 'Monday to Sundays from 11 to 22 hs' },
    bio: { es: 'Masajes profesionales para relajarte y renovar tu energía. Sesiones sobre camilla con cremas neutras en un ambiente cálido, tranquilo y climatizado.', en: 'Professional massages to relax and renew your energy. Sessions on a table with neutral creams in a warm, quiet and air-conditioned environment.' },
    equipment: { es: 'Camilla, ambiente cálido y climatizado, cremas neutras.', en: 'Massage table, warm and air-conditioned environment, neutral creams.' },
    services: { es: 'Masajes descontracturantes, relajantes, naturistas, sensitivos y reflexología.', en: 'Deep tissue, relaxing, naturist, sensitive massages and reflexology.' },
    payments: { es: 'Efectivo y transferencia bancaria.', en: 'Cash and bank transfer.' },
    booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' },
    phone: '5491121808338',
    images: ['./matias1.jpg', './matias2.jpg', './matias3.jpg', './matias4.jpg']
  },
  daniela: {
    id: 'daniela',
    name: 'Daniela',
    neighborhood: 'Microcentro',
    modality: { es: 'Gabinete propio', en: 'Private studio' },
    schedule: { es: 'Lunes a Sábados de 11 a 19 hs', en: 'Monday to Saturdays from 11 to 19 hs' },
    bio: { es: 'Atención profesional y personalizada en gabinete privado en Microcentro. Sesiones pensadas para renovar tu energía.', en: 'Professional and personalized attention in a private studio in Microcentro. Sessions designed to renew your energy.' },
    equipment: { es: 'Gabinete propio, servicio de ducha, ambiente climatizado.', en: 'Private studio, shower service, air-conditioned environment.' },
    services: { es: 'Masajes relajantes, descontracturantes y deportivos.', en: 'Relaxing, deep tissue and sports massages.' },
    payments: { es: 'Efectivo y transferencia bancaria.', en: 'Cash and bank transfer.' },
    booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' },
    phone: '5491124983744',
    images: ['./daniela1.jpg', './daniela2.jpg', './daniela3.jpg', './daniela4.jpg']
  },
  zaira: {
    id: 'zaira',
    name: 'Zaira',
    neighborhood: 'Caballito',
    modality: { es: 'Gabinete propio', en: 'Private studio' },
    schedule: { es: 'Lunes a Domingos de 10 a 20 hs', en: 'Monday to Sundays from 10 to 20 hs' },
    bio: { es: 'Atención personalizada en ambiente privado en el barrio de Caballito. Terapeutas con experiencia en diversas técnicas corporales.', en: 'Personalized attention in a private environment in the Caballito neighborhood. Therapists with experience in various body techniques.' },
    equipment: { es: 'Gabinete propio, servicio de ducha, ambiente climatizado.', en: 'Private studio, shower service, air-conditioned environment.' },
    services: { es: 'Masajes descontracturantes, relajantes, deportivos, ayurveda y terapia tailandesa.', en: 'Deep tissue, relaxing, sports, ayurveda and Thai therapy massages.' },
    payments: { es: 'Efectivo y transferencia bancaria.', en: 'Cash and bank transfer.' },
    booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' },
    phone: '5491168480866',
    images: ['./zaira1.jpg', './zaira2.jpg', './zaira3.jpg', './zaira4.jpg']
  },
  donatella: {
    id: 'donatella',
    name: 'Donatella',
    neighborhood: 'CABA',
    modality: { es: 'Dpto propio', en: 'Private apt' },
    schedule: { es: 'Lunes a Sábados de 11 a 20 hs', en: 'Monday to Saturdays from 11 to 20 hs' },
    bio: { es: 'Atención personalizada en departamento propio. Un espacio súper cómodo y tranquilo para relajarte por completo.', en: 'Personalized attention in a private apartment. A super comfortable and quiet space to relax completely.' },
    equipment: { es: 'Ducha, aire acondicionado, camilla y tatami.', en: 'Shower, air conditioning, massage table and tatami.' },
    services: { es: 'Masajes descontracturantes, relajantes y sensitivos.', en: 'Deep tissue, relaxing and sensitive massages.' },
    payments: { es: 'Efectivo y transferencia.', en: 'Cash and transfer.' },
    booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' },
    phone: '5491127562124',
    images: ['./donatella1.jpg', './donatella2.jpg', './donatella3.jpg', './donatella4.jpg']
  },
  mariela: {
    id: 'mariela',
    name: 'Mariela',
    neighborhood: 'Congreso / Balvanera',
    modality: { es: 'Departamento propio', en: 'Private apartment' },
    schedule: { es: 'Lunes a Sábados de 10 a 21 hs (Domingos consultar)', en: 'Monday to Saturdays from 10 to 21 hs (Sundays inquire)' },
    bio: { es: 'Regalate un momento para aliviar tensiones, relajar el cuerpo y renovar tu energía. Un espacio pensado para que te sientas mejor desde el primer momento.', en: 'Treat yourself to a moment to relieve tensions, relax the body and renew your energy. A space designed to make you feel better from the first moment.' },
    equipment: { es: 'Camilla, piedras calientes, almohadillas térmicas y aparatología complementaria.', en: 'Massage table, hot stones, thermal pads and complementary equipment.' },
    services: { es: 'Masajes terapéuticos y descontracturantes.', en: 'Therapeutic and deep tissue massages.' },
    payments: { es: 'Efectivo y transferencia.', en: 'Cash and transfer.' },
    booking: { es: 'Reserva previa por WhatsApp (Solo WhatsApp)', en: 'Prior reservation via WhatsApp (WhatsApp only)' },
    phone: '5491149461581',
    images: ['./mariela1.jpg', './mariela2.jpg', './mariela3.jpg', './mariela4.jpg']
  },
  mia: {
    id: 'mia',
    name: 'Mia',
    neighborhood: 'Congreso',
    modality: { es: 'Atención privada', en: 'Private attention' },
    schedule: { es: 'Lunes a Sábados de 12 a 18 hs', en: 'Monday to Saturdays from 12 to 18 hs' },
    bio: { es: 'Mi servicio es de masajes sensuales, buscando tu relajación plena y relax. Un momento de paz y desconexión.', en: 'My service is sensual massages, seeking your full relaxation and unwind. A moment of peace and disconnection.' },
    equipment: { es: 'Ambiente privado y confortable.', en: 'Private and comfortable environment.' },
    services: { es: 'Masajes sensuales y relajación plena.', en: 'Sensual massages and full relaxation.' },
    payments: { es: 'Efectivo y transferencia.', en: 'Cash and transfer.' },
    booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' },
    phone: '5491130065404',
    images: ['./mia1.jpg', './mia2.jpg', './mia3.jpg', './mia4.jpg']
  },
  celeste: {
    id: 'celeste',
    name: 'Celeste',
    neighborhood: 'Congreso',
    modality: { es: 'Gabinete / Domicilio', en: 'Studio / Home visit' },
    schedule: { es: 'Lunes a Viernes de 10 a 17 hs', en: 'Monday to Friday from 10 to 17 hs' },
    bio: { es: 'Atención personalizada en gabinete y domicilios en la zona de Congreso.', en: 'Personalized attention in studio and home visits in the Congreso area.' },
    equipment: { es: 'Gabinete privado, ambiente climatizado.', en: 'Private studio, air-conditioned environment.' },
    services: { es: 'Masajes relajantes y descontracturantes.', en: 'Relaxing and deep tissue massages.' },
    payments: { es: 'Efectivo y transferencia.', en: 'Cash and transfer.' },
    booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' },
    phone: '5491157597174',
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

  window.currentOpenProfileId = id;
  
  const modal = document.getElementById('profile-modal');
  if (modal) {
    modal.scrollTop = 0;
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

  }

  if (history.pushState) {
    history.pushState({ profile: id }, null, '#' + id);
  } else {
    window.location.hash = id;
  }

  currentImages = p.images;
  document.getElementById('modal-name').innerText = p.name + ' (' + p.neighborhood + ')';
  
  const tagVerified = document.getElementById('modal-verified-tag');
  tagVerified.innerText = translations[currentLang].verifiedTag;

  document.getElementById('modal-modality').innerText = p.modality[currentLang] + ' - ' + p.neighborhood;
  document.getElementById('modal-bio').innerText = p.bio[currentLang];
  document.getElementById('modal-schedule').innerText = p.schedule[currentLang];
  document.getElementById('modal-equipment').innerText = p.equipment[currentLang];
  document.getElementById('modal-services').innerText = p.services[currentLang];
  document.getElementById('modal-payments').innerText = p.payments[currentLang];
  document.getElementById('modal-booking').innerText = p.booking[currentLang];

  const wspMsg = encodeURIComponent(`¡Hola ${p.name}! Te vi en Masajistas Privé y quería consultar por un turno.`);
  document.getElementById('modal-call-btn').href = `tel:+${p.phone}`;
  document.getElementById('modal-wa-btn').href = `https://wa.me/${p.phone}?text=${wspMsg}`;

  const container = document.getElementById('modal-gallery-container');
  container.innerHTML = '';
  container.scrollLeft = 0;
  setTimeout(() => {
    container.scrollLeft = 0;
  }, 50);

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
  const modal = document.getElementById('profile-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.scrollTop = 0;
    setTimeout(() => { modal.scrollTop = 0; }, 10);
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}



function closeProfile() {
  document.getElementById('profile-modal').classList.add('hidden');
  window.currentOpenProfileId = null;
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
  
  let targetSec = document.getElementById(sectionId);
  if (targetSec) {
    targetSec.classList.remove('hidden');
    let parentBlock = targetSec.closest('.category-block');
    if (parentBlock) parentBlock.classList.remove('hidden');
    let icon = document.getElementById('icon-' + sectionId);
    if (icon) icon.innerText = '▼';
  }
}

function updateActiveTab(activeBtn) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (activeBtn) activeBtn.classList.add('active');
}
