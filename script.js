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

let currentImages = [];
const profilesData = {
    jennyfer: { id: 'jennyfer', name: 'Jennyfer', neighborhood: 'Tribunales', modality: { es: 'Consultorio propio', en: 'Private office' }, schedule: { es: 'Lunes a Viernes de 08 a 19hs', en: 'Monday to Friday' }, bio: { es: 'Atención profesional y personalizada.', en: 'Professional attention.' }, equipment: { es: 'Ducha, aire acondicionado.', en: 'Shower, AC.' }, services: { es: 'Masajes profesionales.', en: 'Professional massages.' }, payments: { es: 'Efectivo, transferencia.', en: 'Cash, transfer.' }, booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' }, phone: '5491124078332', images: ['./jennyfer1.jpg', './jennyfer2.jpg', './jennyfer3.jpg', './jennyfer4.jpg'] },
    deby: { id: 'deby', name: 'Deby', neighborhood: 'Caballito', modality: { es: 'Gabinete propio', en: 'Private studio' }, schedule: { es: 'Lunes a Domingos', en: 'Monday to Sunday' }, bio: { es: 'Atención personalizada.', en: 'Personalized attention.' }, equipment: { es: 'Camilla, ducha.', en: 'Table, shower.' }, services: { es: 'Masajes relajantes.', en: 'Relaxing massages.' }, payments: { es: 'Efectivo.', en: 'Cash.' }, booking: { es: 'Reserva previa por WhatsApp', en: 'Prior reservation via WhatsApp' }, phone: '5491176540982', images: ['./deby1.jpg', './deby2.jpg', './deby3.jpg', './deby4.jpg'] }
};

function openProfileById(id) {
    const p = profilesData[id];
    if (!p) return;
    window.currentOpenProfileId = id;
    currentImages = p.images;
    document.getElementById('modal-name').innerText = p.name + ' (' + p.neighborhood + ')';
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
