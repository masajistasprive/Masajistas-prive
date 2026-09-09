let currentLang = 'es';

function acceptAge() {
  const gate = document.getElementById('age-gate');
  if (gate) {
    gate.style.display = 'none';
    gate.remove();
  }
}

const profilesData = {
  jennyfer: { name: "Jennyfer", zone: "Tribunales", modality: "Consultorio propio", bio: "Atención personalizada y relax total.", schedule: "Lun a Sáb de 10 a 20hs", equipment: "Camilla profesional, aire acondicionado, ducha", services: "Descontracturantes, relajantes", payments: "Efectivo, Transferencia", booking: "Con turno previo por WhatsApp" },
  deby: { name: "Deby", zone: "Caballito", modality: "Gabinete propio", bio: "Masajes y estética en ambiente climatizado.", schedule: "Lun a Sáb de 12 a 21hs", equipment: "Gabinete privado, ducha caliente", services: "Sensuales, descontracturantes", payments: "Efectivo, Mercado Pago", booking: "Reserva anticipada" },
  prada: { name: "Prada", zone: "Tribunales", modality: "Dpto reservado", bio: "Máxima discreción y confort.", schedule: "Lun a Vie de 11 a 19hs", equipment: "Ambiente exclusivo", services: "Relajantes y terapéuticos", payments: "Efectivo", booking: "Coordinación directa" },
  lupita: { name: "Lupita", zone: "Tribunales", modality: "Dpto / Hoteles", bio: "Simpatía y profesionalismo.", schedule: "Todos los días", equipment: "Excelente nivel", services: "Sensuales", payments: "Efectivo", booking: "WhatsApp" },
  sol: { name: "Sol", zone: "Tribunales", modality: "Departamento propio", bio: "Un espacio pensando para tu relax.", schedule: "Consultar horarios", equipment: "Comodidades completas", services: "Masajes integrales", payments: "Efectivo", booking: "Turnos coordinados" },
  matias: { name: "Matias", zone: "Recoleta", modality: "Gabinete / Camilla", bio: "Masajes descontracturantes y deportivos.", schedule: "Lun a Sáb", equipment: "Camilla ergonómica", services: "Terapéuticos, deportivos", payments: "Efectivo, Transferencia", booking: "Previa reserva" },
  daniela: { name: "Daniela", zone: "Microcentro", modality: "Gabinete propio", bio: "Atención exclusiva en zona céntrica.", schedule: "Lun a Vie", equipment: "Gabinete equipado", services: "Relajantes", payments: "Efectivo", booking: "Por WhatsApp" },
  zaira: { name: "Zaira", zone: "Caballito", modality: "Gabinete propio", bio: "Paz y armonía.", schedule: "Consultar", equipment: "Privacidad", services: "Integrales", payments: "Efectivo", booking: "WhatsApp" },
  donatella: { name: "Donatella", zone: "CABA", modality: "Dpto propio", bio: "Atención dedicada.", schedule: "Consultar", equipment: "Confortable", services: "Sensuales", payments: "Efectivo", booking: "WhatsApp" },
  mariela: { name: "Mariela", zone: "Congreso / Balvanera", modality: "Departamento propio", bio: "Sesiones personalizadas.", schedule: "Consultar", equipment: "Excelente", services: "Terapéuticos", payments: "Efectivo", booking: "WhatsApp" },
  mia: { name: "Mia", zone: "Congreso", modality: "Atención privada", bio: "Confort y relax.", schedule: "Consultar", equipment: "Privado", services: "Sensuales", payments: "Efectivo", booking: "WhatsApp" },
  celeste: { name: "Celeste", zone: "Congreso", modality: "Gabinete / Domicilio", bio: "Profesional dedicada.", schedule: "Consultar", equipment: "Completo", services: "Relax", payments: "Efectivo", booking: "WhatsApp" }
};

function openProfileById(id) {
  const p = profilesData[id];
  if (!p) return;
  
  document.getElementById('modal-name').innerText = p.name;
  document.getElementById('modal-modality').innerText = p.modality + ' (' + p.zone + ')';
  document.getElementById('modal-bio').innerText = p.bio;
  document.getElementById('modal-schedule').innerText = p.schedule;
  document.getElementById('modal-equipment').innerText = p.equipment;
  document.getElementById('modal-services').innerText = p.services;
  document.getElementById('modal-payments').innerText = p.payments;
  document.getElementById('modal-booking').innerText = p.booking;
  
  document.getElementById('modal-wa-btn').href = "https://wa.me/5491157597174?text=Hola,%20vi%20el%20perfil%20de%20" + encodeURIComponent(p.name);
  
  const modal = document.getElementById('profile-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeProfile() {
  const modal = document.getElementById('profile-modal');
  if (modal) modal.classList.add('hidden');
}

function toggleFilterDrawer() {
  const drawer = document.getElementById('filter-drawer');
  if (drawer) drawer.classList.toggle('hidden');
}

function toggleCategory(categoryId) {
  const content = document.getElementById(categoryId);
  if (content) {
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  }
}

function showAllCategories(btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.category-content').forEach(c => c.style.display = 'block');
}

function showCategory(categoryId, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.category-content').forEach(c => c.style.display = 'none');
  const target = document.getElementById(categoryId);
  if (target) target.style.display = 'block';
}

function quickExit() {
  window.location.href = 'https://www.google.com';
}

function toggleLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.innerText = currentLang === 'es' ? 'EN' : 'ES';
}

