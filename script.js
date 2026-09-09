function enterSite() {
  const modal = document.getElementById('age-modal') || document.querySelector('.age-modal') || document.querySelector('[class*="age"]');
  if (modal) {
    modal.style.display = 'none';
  } else {
    const btn = document.querySelector('.btn-age-enter');
    if (btn && btn.closest('div')) {
      btn.closest('div').style.display = 'none';
    }
  }
}

let currentLang = 'es';

const translations = {
  es: {
    metaTitle: "Masajistas Privé | Portal Exclusivo de Masajistas en Buenos Aires",
    exit: "Salir",
    searchBtn: "Buscar",
    drawerTitle: "Buscador & Filtros",
    lblName: "Buscar por Nombre o Servicio",
    lblNamePh: "Escribí un nombre o servicio...",
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
    ageDesc: "Este sitio contiene material para adultos. Al ingresar declarás que tenés al menos 18 años y aceptás nuestros términos y condiciones.",
    ageEnter: "ENTRAR (+18)",
    ageExit: "SALIR",
    featured: "Destacados",
    tabAll: "Todos",
    tabSens: "Sensuales",
    tabTerap: "Terapéuticas",
    tabMasc: "Masculinos",
    tabFant: "Fantasías",
    tabForum: "Comunidad",
    bannerTitle: "Espacio Publicitario Exclusivo",
    bannerDesc: "Destacá tu perfil o gabinete en las primeras posiciones del portal.",
    bannerBtn: "Anunciarme",
    cardSp1: "Destacado VIP",
    cardSp2: "Top Semanal",
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
    forumRules: "<strong>Normas del Foro:</strong> Mantene el respeto y la cordialidad.",
    noThreads: "Aún no hay temas creados en la comunidad.",
    newThreadTitle: "Crear un nuevo tema de debate",
    newThreadPh: "Título del tema o pregunta...",
    optFRec: "Recomendaciones de Zonas / Gabinetes",
    optFTec: "Consultas sobre Técnicas de Masajes",
    optFGen: "Debate General & Experiencias",
    newThreadBodyPh: "Escribí tu consulta o aporte a la comunidad...",
    btnCreateThread: "Publicar Tema",
    trustTitle: "🛡️ Compromiso de Calidad & Seguridad",
    trustUserH: "Guía para Usuarios",
    trustUserList: "<li>Coordinación transparente y directa vía WhatsApp</li>",
    trustProtoH: "Protocolo de Verificación",
    trustProtoP: "El sello <strong>✓ Privé Verificado</strong> certifica identidad.",
    verifiedTag: "✓ Sello Oficial Privé Verificado",
    lblMod: "Modalidad / Zona",
    lblBio: "Descripción",
    lblSch: "Días & Horarios",
    lblEq: "Equipamiento & Amenities",
    lblServ: "Massage Techniques",
    lblPay: "Payment Methods",
    lblBook: "Booking Modality",
    btnCall: "📞 Contactar Telefónicamente",
    btnWa: "💬 Contactar por WhatsApp",
    expTitle: "Casilla de Experiencias",
    expRules: "Publicá tu experiencia con respeto y cordialidad hacia las profesionales y la comunidad. Comentarios ofensivos serán eliminados.",
    expAuthorPh: "Tu nombre o apodo...",
    expTextPh: "Escribí tu reseña o experiencia aquí...",
    btnSubmitExp: "Publicar Experiencia",
    floatingCta: "¿Querés Anunciarte?",
    footer: "<strong>AVISO LEGAL:</strong> Las masajistas anunciantes..."
  },
  en: {
    metaTitle: "Masajistas Privé | Exclusive Massage Portal in Buenos Aires",
    exit: "Exit",
    searchBtn: "Search",
    drawerTitle: "Search & Filters",
    lblName: "Search by Name or Service",
    lblNamePh: "Type a name or service...",
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
    ageDesc: "This site contains adult material. By entering you declare that you are at least 18 years old and accept our terms and conditions.",
    ageEnter: "ENTER (+18)",
    ageExit: "EXIT",
    featured: "Featured",
    tabAll: "All",
    tabSens: "Sensual",
    tabTerap: "Therapeutic",
    tabMasc: "Male",
    tabFant: "Fantasies",
    tabForum: "Community",
    bannerTitle: "Exclusive Advertising Space",
    bannerDesc: "Highlight your profile or cabinet in the top positions of the portal.",
    bannerBtn: "Advertise with us",
    cardSp1: "VIP Featured",
    cardSp2: "Weekly Top",
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
    forumTitle: "💬 Privé Forum & Community",
    forumSub: "Debate Space",
    forumRules: "<strong>Forum Rules:</strong> Maintain respect and cordiality.",
    noThreads: "There are no topics created in the community yet.",
    newThreadTitle: "Create a new discussion topic",
    newThreadPh: "Topic title or question...",
    optFRec: "Zone / Cabinet Recommendations",
    optFTec: "Consultations on Massage Techniques",
    optFGen: "General Debate & Experiences",
    newThreadBodyPh: "Write your inquiry or contribution to the community...",
    btnCreateThread: "Publish Topic",
    trustTitle: "🛡️ Quality & Security Commitment",
    trustUserH: "User Guide",
    trustUserList: "<li>Transparent and direct coordination via WhatsApp</li>",
    trustProtoH: "Verification Protocol",
    trustProtoP: "The <strong>✓ Verified Privé</strong> seal certifies identity.",
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
    expRules: "Publish your experience with respect and cordiality towards the professionals and the community. Offensive comments will be deleted.",
    expAuthorPh: "Your name or nickname...",
    expTextPh: "Write your review or experience here...",
    btnSubmitExp: "Publish Experience",
    floatingCta: "Want to Advertise?",
    footer: "<strong>LEGAL DISCLAIMER:</strong> Advertised massage therapists..."
  }
};

function toggleLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.innerText = currentLang === 'es' ? 'EN' : 'ES';

  const t = translations[currentLang];
  if (!t) return;

  const safeSet = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
  };

  safeSet('meta-title', t.metaTitle);
  safeSet('txt-exit', t.exit);
  safeSet('txt-search-btn', t.searchBtn);
  safeSet('txt-drawer-title', t.drawerTitle);
  safeSet('txt-lbl-name', t.lblName);
  safeSet('drawer-search-name', t.lblNamePh);
  safeSet('txt-lbl-zone', t.lblZone);
  safeSet('opt-all-zones', t.optAllZones);
  safeSet('txt-lbl-cat', t.lblCat);
  safeSet('opt-all-cats', t.optAllCats);
  safeSet('opt-cat-sens', t.optCatSens);
  safeSet('opt-cat-terap', t.optCatTerap);
  safeSet('opt-cat-masc', t.optCatMasc);
  safeSet('opt-cat-fant', t.optCatFant);
  safeSet('btn-results', t.btnResults);
}

