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
        expRules: "Publicá tu experiencia con respeto y cordialidad hacia las profesionales y la comunidad.",
        expAuthorPh: "Tu nombre o apodo...",
        expTextPh: "Escribí tu reseña o experiencia aquí...",
        btnSubmitExp: "Publicar Experiencia",
        floatingCta: "¿Querés Publicar?",
        footer: "<strong>DESCARGO DE RESPONSABILIDAD LEGAL:</strong> MasajistasPrivé.com funciona únicamente como un soporte publicitario digital independiente."
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
        expRules: "Publish your experience with respect and cordiality towards the professionals.",
        expAuthorPh: "Your name or nickname...",
        expTextPh: "Write your review or experience here...",
        btnSubmitExp: "Publish Experience",
        floatingCta: "Want to Advertise?",
        footer: "<strong>LEGAL DISCLAIMER:</strong> MasajistasPrivé.com acts solely as an independent digital advertising medium."
    }
};

function quickExit() {
    window.location.replace('https://www.google.com');
}

function initApp() {
    if (localStorage.getItem('prive_age_verified') === 'true') {
        const ageGate = document.getElementById('age-gate');
        if (ageGate) ageGate.remove();
    }

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
}

document.addEventListener('DOMContentLoaded', initApp);

function acceptAge() {
    localStorage.setItem('prive_age_verified', 'true');
    const ageGate = document.getElementById('age-gate');
    if (ageGate) {
        ageGate.remove();
    } else {
        location.reload();
    }
}

let currentImages = [];
const profilesData = {
    jennyfer: { id: 'jennyfer', name: 'Jennyfer', neighborhood: 'Tribunales', modality: { es: 'Consultorio propio', en: 'Private office' }, schedule: { es: 'Lunes a Viernes de 08 a 19hs', en: 'Monday to Friday' }, bio: { es: 'Atención profesional y personalizada.', en: 'Professional attention.' }, equipment: { es: 'Ducha, aire acondicionado.', en: 'Shower, AC.' }, services: { es: 'Masajes profesionales.', en: 'Professional massages.' }, payments: { es: 'Efectivo, transferencia.', en: 'Cash, transfer.' }, booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' }, phone: '5491124078332', images: ['./jennyfer1.jpg', './jennyfer2.jpg', './jennyfer3.jpg', './jennyfer4.jpg'] },
    deby: { id: 'deby', name: 'Deby', neighborhood: 'Caballito', modality: { es: 'Gabinete propio', en: 'Private studio' }, schedule: { es: 'Lunes a Domingos', en: 'Monday to Sunday' }, bio: { es: 'Atención personalizada.', en: 'Personalized attention.' }, equipment: { es: 'Camilla, ducha.', en: 'Table, shower.' }, services: { es: 'Masajes relajantes.', en: 'Relaxing massages.' }, payments: { es: 'Efectivo.', en: 'Cash.' }, booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' }, phone: '5491176540982', images: ['./deby1.jpg', './deby2.jpg', './deby3.jpg', './deby4.jpg'] },
    prada: { id: 'prada', name: 'Prada', neighborhood: 'Tribunales', modality: { es: 'Departamento reservado', en: 'Reserved apartment' }, schedule: { es: 'Lunes a Sábados', en: 'Monday to Saturdays' }, bio: { es: 'Atención en departamento reservado.', en: 'Attention in reserved apartment.' }, equipment: { es: 'Camilla, tatami, ducha.', en: 'Table, tatami, shower.' }, services: { es: 'Masajes californianos y sensitivos.', en: 'Californian and sensitive massages.' }, payments: { es: 'Efectivo, transferencia.', en: 'Cash, transfer.' }, booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' }, phone: '5491135796465', images: ['./prada1.jpg', './prada2.jpg', './prada3.jpg', './prada4.jpg'] },
    lupita: { id: 'lupita', name: 'Lupita', neighborhood: 'Tribunales', modality: { es: 'Dpto propio / Hoteles', en: 'Private apt / Hotels' }, schedule: { es: 'Lunes a Sábados', en: 'Monday to Saturdays' }, bio: { es: 'Atención en departamento propio y hoteles.', en: 'Attention in private apartment and hotels.' }, equipment: { es: 'Camilla, tatami, ducha.', en: 'Table, tatami, shower.' }, services: { es: 'Masajes descontracturantes y relajantes.', en: 'Deep tissue and relaxing massages.' }, payments: { es: 'Efectivo, transferencia.', en: 'Cash, transfer.' }, booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' }, phone: '5491128816913', images: ['./lupita1.jpg', './lupita2.jpg', './lupita3.jpg', './lupita4.jpg'] },
    sol: { id: 'sol', name: 'Sol', neighborhood: 'Tribunales', modality: { es: 'Departamento propio', en: 'Private apartment' }, schedule: { es: 'Consultar horarios', en: 'Check schedules' }, bio: { es: 'Atención exclusiva y personalizada.', en: 'Exclusive and personalized attention.' }, equipment: { es: 'Gabinete privado climatizado, duchas.', en: 'Air-conditioned private studio, showers.' }, services: { es: 'Masajes descontracturantes y relajantes.', en: 'Deep tissue and relaxing massages.' }, payments: { es: 'Efectivo, transferencia.', en: 'Cash, transfer.' }, booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' }, phone: '5491161621255', images: ['./sol1.jpg', './sol2.jpg', './sol3.jpg', './sol4.jpg'] },
    matias: { id: 'matias', name: 'Matias', neighborhood: 'Recoleta', modality: { es: 'Gabinete / Camilla', en: 'Studio / Table' }, schedule: { es: 'Lunes a Domingos', en: 'Monday to Sundays' }, bio: { es: 'Masajes profesionales para relajarte.', en: 'Professional massages to relax.' }, equipment: { es: 'Camilla, ambiente climatizado.', en: 'Table, air-conditioned environment.' }, services: { es: 'Masajes descontracturantes y relajantes.', en: 'Deep tissue and relaxing massages.' }, payments: { es: 'Efectivo, transferencia.', en: 'Cash, transfer.' }, booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' }, phone: '5491121808338', images: ['./matias1.jpg', './matias2.jpg', './matias3.jpg', './matias4.jpg'] },
    daniela: { id: 'daniela', name: 'Daniela', neighborhood: 'Microcentro', modality: { es: 'Gabinete propio', en: 'Private studio' }, schedule: { es: 'Lunes a Sábados', en: 'Monday to Saturdays' }, bio: { es: 'Atención profesional en Microcentro.', en: 'Professional attention in Microcentro.' }, equipment: { es: 'Gabinete propio, ducha.', en: 'Private studio, shower.' }, services: { es: 'Masajes relajantes y descontracturantes.', en: 'Relaxing and deep tissue massages.' }, payments: { es: 'Efectivo, transferencia.', en: 'Cash, transfer.' }, booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' }, phone: '5491124983744', images: ['./daniela1.jpg', './daniela2.jpg', './daniela3.jpg', './daniela4.jpg'] },
    zaira: { id: 'zaira', name: 'Zaira', neighborhood: 'Caballito', modality: { es: 'Gabinete propio', en: 'Private studio' }, schedule: { es: 'Lunes a Domingos', en: 'Monday to Sunday' }, bio: { es: 'Atención personalizada en Caballito.', en: 'Personalized attention in Caballito.' }, equipment: { es: 'Gabinete propio, ducha.', en: 'Private studio, shower.' }, services: { es: 'Masajes descontracturantes y relajantes.', en: 'Deep tissue and relaxing massages.' }, payments: { es: 'Efectivo, transferencia.', en: 'Cash, transfer.' }, booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' }, phone: '5491168480866', images: ['./zaira1.jpg', './zaira2.jpg', './zaira3.jpg', './zaira4.jpg'] },
    donatella: { id: 'donatella', name: 'Donatella', neighborhood: 'CABA', modality: { es: 'Dpto propio', en: 'Private apt' }, schedule: { es: 'Lunes a Sábados', en: 'Monday to Saturdays' }, bio: { es: 'Atención personalizada en departamento.', en: 'Personalized attention in apartment.' }, equipment: { es: 'Ducha, camilla, tatami.', en: 'Shower, table, tatami.' }, services: { es: 'Masajes descontracturantes y relajantes.', en: 'Deep tissue and relaxing massages.' }, payments: { es: 'Efectivo, transferencia.', en: 'Cash, transfer.' }, booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' }, phone: '5491127562124', images: ['./donatella1.jpg', './donatella2.jpg', './donatella3.jpg', './donatella4.jpg'] },
    mariela: { id: 'mariela', name: 'Mariela', neighborhood: 'Congreso / Balvanera', modality: { es: 'Departamento propio', en: 'Private apartment' }, schedule: { es: 'Lunes a Sábados', en: 'Monday to Saturdays' }, bio: { es: 'Momento para aliviar tensiones.', en: 'Moment to relieve tensions.' }, equipment: { es: 'Camilla, piedras calientes.', en: 'Table, hot stones.' }, services: { es: 'Masajes terapéuticos.', en: 'Therapeutic massages.' }, payments: { es: 'Efectivo, transferencia.', en: 'Cash, transfer.' }, booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' }, phone: '5491149461581', images: ['./mariela1.jpg', './mariela2.jpg', './mariela3.jpg', './mariela4.jpg'] },
    mia: { id: 'mia', name: 'Mia', neighborhood: 'Congreso', modality: { es: 'Atención privada', en: 'Private attention' }, schedule: { es: 'Lunes a Sábados', en: 'Monday to Saturdays' }, bio: { es: 'Masajes sensuales y relax.', en: 'Sensual massages and relax.' }, equipment: { es: 'Ambiente privado.', en: 'Private environment.' }, services: { es: 'Masajes sensuales.', en: 'Sensual massages.' }, payments: { es: 'Efectivo, transferencia.', en: 'Cash, transfer.' }, booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' }, phone: '5491130065404', images: ['./mia1.jpg', './mia2.jpg', './mia3.jpg', './mia4.jpg'] },
    celeste: { id: 'celeste', name: 'Celeste', neighborhood: 'Congreso', modality: { es: 'Gabinete / Domicilio', en: 'Studio / Home visit' }, schedule: { es: 'Lunes a Viernes', en: 'Monday to Friday' }, bio: { es: 'Atención personalizada en gabinete.', en: 'Personalized attention in studio.' }, equipment: { es: 'Gabinete privado.', en: 'Private studio.' }, services: { es: 'Masajes relajantes.', en: 'Relaxing massages.' }, payments: { es: 'Efectivo, transferencia.', en: 'Cash, transfer.' }, booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' }, phone: '5491157597174', images: ['./celeste1.jpg', './celeste2.jpg', './celeste3.jpg', './celeste4.jpg'] }
};

function openProfileById(id) {
    const p = profilesData[id];
    if (!p) return;
    window.currentOpenProfileId = id;
    currentImages = p.images;
    document.getElementById('modal-name').innerText = p.name + ' (' + p.neighborhood + ')';
    const tagVerified = document.getElementById('modal-verified-tag');
    if (tagVerified) tagVerified.innerText = translations[currentLang].verifiedTag;
    const modEl = document.getElementById('modal-modality');
    if (modEl) modEl.innerText = p.modality[currentLang] + ' - ' + p.neighborhood;
    const bioEl = document.getElementById('modal-bio');
    if (bioEl) bioEl.innerText = p.bio[currentLang];
    const schEl = document.getElementById('modal-schedule');
    if (schEl) schEl.innerText = p.schedule[currentLang];
    const eqEl = document.getElementById('modal-equipment');
    if (eqEl) eqEl.innerText = p.equipment[currentLang];
    const servEl = document.getElementById('modal-services');
    if (servEl) servEl.innerText = p.services[currentLang];
    const payEl = document.getElementById('modal-payments');
    if (payEl) payEl.innerText = p.payments[currentLang];
    const bookEl = document.getElementById('modal-booking');
    if (bookEl) bookEl.innerText = p.booking[currentLang];
    const wspMsg = encodeURIComponent(`¡Hola ${p.name}! Te vi en Masajistas Privé y quería consultar por un turno.`);
    const callBtn = document.getElementById('modal-call-btn');
    if (callBtn) callBtn.href = `tel:+${p.phone}`;
    const waBtn = document.getElementById('modal-wa-btn');
    if (waBtn) waBtn.href = `https://wa.me/${p.phone}?text=${wspMsg}`;
    const container = document.getElementById('modal-gallery-container');
    if (container) {
        container.innerHTML = '';
        p.images.forEach((imgSrc, index) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'img-wrapper';
            wrapper.onclick = () => openLightbox(index);
            const img = document.createElement('img');
            img.src = imgSrc;
            img.className = 'main-photo';
            wrapper.appendChild(img);
            container.appendChild(wrapper);
        });
    }
    document.getElementById('profile-modal').classList.remove('hidden');
}

function closeProfile() {
    document.getElementById('profile-modal').classList.add('hidden');
    window.currentOpenProfileId = null;
}

function openLightbox(startIndex) {
    const slider = document.getElementById('lightbox-slider');
    if (!slider) return;
    slider.innerHTML = '';
    currentImages.forEach(imgSrc => {
        const slide = document.createElement('div');
        slide.className = 'lightbox-slide';
        const img = document.createElement('img');
        img.src = imgSrc;
        slide.appendChild(img);
        slider.appendChild(slide);
    });
    document.getElementById('lightbox').classList.remove('hidden');
    slider.scrollLeft = startIndex * window.innerWidth;
}

function closeLightbox() {
    document.getElementById('lightbox').classList.add('hidden');
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

function updateActiveTab(btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}
