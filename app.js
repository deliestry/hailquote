const translations = {
  de: {
    appLanguage: "App-Sprache", newQuote: "Neues Angebot", saveDraft: "Entwurf speichern", draftSaved: "Der Entwurf wurde für den späteren Versand im Archiv gespeichert.", exportPdf: "Als PDF exportieren", archive: "Archiv", settings: "Firma", users: "Benutzer", userManagement: "Benutzerrechte", userManagementHint: "Rollen für angemeldete Benutzer festlegen", roleAdmin: "Administrator", roleEditor: "Bearbeiter", roleViewer: "Betrachter",
    eyebrow: "KALKULATION & ANGEBOT", title: "Hagelschaden sicher kalkulieren.",
    subtitle: "Schaden erfassen, Kosten berechnen und ein professionelles Kundenangebot erstellen.",
    autoSaved: "Lokal gespeichert", customer: "Kundendaten", customerHint: "Empfänger des Angebots",
    customerName: "Name / Firma", email: "E-Mail", phone: "Telefon", address: "Anschrift",
    vehicle: "Fahrzeug", vehicleHint: "Fahrzeug- und Auftragsdaten", brandModel: "Marke & Modell",
    plate: "Kennzeichen", vin: "FIN / VIN", mileage: "Kilometerstand", quoteNumber: "Angebotsnummer",
    quoteDate: "Angebotsdatum", damage: "Schadenserfassung", damageHint: "Dellen je Bauteil und Größe erfassen",
    part: "Bauteil", small: "Klein", medium: "Mittel", large: "Groß", panelTotal: "Summe",
    smallRate: "Preis kleine Delle", mediumRate: "Preis mittlere Delle", largeRate: "Preis große Delle",
    extras: "Zusatzkosten & Konditionen", extrasHint: "Montage, Material, Rabatt und Steuer",
    assembly: "Demontage / Montage", materials: "Material / Sonstiges", discount: "Rabatt", tax: "MwSt.",
    notes: "Hinweise / Leistungsbeschreibung", notesPlaceholder: "Lackschadenfreie Ausbeultechnik (PDR), vorbehaltlich einer Prüfung vor Ort.",
    offerLanguage: "Sprache des Angebots", validDays: "Gültigkeit in Tagen", calculation: "AKTUELLE KALKULATION",
    dentsRecorded: "Dellen erfasst", dentRepair: "Dellenreparatur", additionalCosts: "Zusatzkosten",
    discountValue: "Rabatt", net: "Netto", taxValue: "MwSt.", gross: "Gesamtbetrag",
    preview: "Angebot ansehen", privacy: "Ihre Daten verlassen dieses Gerät nicht.", close: "Schließen",
    printPdf: "Drucken / PDF", resetConfirm: "Möchten Sie wirklich ein neues Angebot beginnen?", selectCustomer: "Gespeicherten Kunden auswählen", newCustomer: "Neuer Kunde", saveCustomer: "Kunde speichern",
    companyProfile: "Firmenprofil", companyHint: "Erscheint auf jedem Angebot und PDF", companyName: "Firmenname", taxId: "Steuernummer / USt-ID", logo: "Firmenlogo", saveCompany: "Firmenprofil speichern",
    quoteArchive: "Angebotsarchiv", archiveHint: "Gespeicherte und exportierte Angebote", emptyArchive: "Noch keine Angebote archiviert.", loadQuote: "Bearbeiten", reviewQuote: "Prüfen", sendQuote: "An Kunden senden", deleteQuote: "Löschen", missingCustomerEmail: "Für dieses Angebot ist keine Kunden-E-Mail gespeichert.", sendSuccess: "Das Angebot wurde an den Kunden gesendet.", sendFailed: "Der E-Mail-Versand ist fehlgeschlagen:", savedNotice: "Gespeichert",
    quoteStatus: "Angebotsstatus", statusDraft: "Entwurf", statusSent: "Versendet", statusAccepted: "Angenommen", statusRejected: "Abgelehnt",
    vehicleColor: "Farbe", calculationModel: "Kalkulationsmodell", dentModel: "Preis je Delle", hourlyModel: "Arbeitszeit × Stundensatz", hourlyRate: "Stundenverrechnungssatz", partType: "Bauteiltyp", paint: "Lack", time: "Zeit", yes: "Ja", no: "Nein",
    dataManagement: "Datensicherung", exportBackup: "Backup exportieren", importBackup: "Backup importieren", clearData: "Lokale Daten löschen",
    invalidQuote: "Bitte mindestens Kundenname, Fahrzeug und Angebotsnummer ausfüllen.", importSuccess: "Backup wurde erfolgreich importiert.", importError: "Die Backup-Datei ist ungültig.", clearConfirm: "Alle lokalen Kunden, Angebote und Firmendaten unwiderruflich löschen?",
    cloud: "Cloud", cloudSync: "Cloud-Synchronisierung", cloudHint: "Gesicherte Synchronisierung mit Supabase", password: "Passwort", login: "Anmelden", logout: "Abmelden", uploadCloud: "Lokale Daten hochladen", downloadCloud: "Cloud-Daten laden", syncWarning: "Beim Hochladen werden Kunden- und Angebotsdaten in Ihrem Supabase-Projekt gespeichert.", cloudOffline: "Cloud-Verbindung ist nicht verfügbar.", cloudSignedOut: "Nicht angemeldet", cloudSignedIn: "Angemeldet als", cloudSaved: "Cloud-Daten wurden gespeichert.", cloudLoaded: "Cloud-Daten wurden geladen.", cloudEmpty: "Für dieses Konto sind noch keine Cloud-Daten vorhanden.", cloudPdfError: "Die PDF wurde lokal gespeichert, konnte aber nicht in den Cloud-Ordner Angebote hochgeladen werden:",
    testCloud: "Cloud-Verbindung testen", testRunning: "Cloud-Test läuft …", testConfigOk: "✓ Konfiguration erkannt", testAuthOk: "✓ Anmeldung aktiv", testTableOk: "✓ Tabelle app_state erreichbar", testWriteOk: "✓ Testdaten geschrieben", testReadOk: "✓ Testdaten gelesen", testCleanupOk: "✓ Testdaten entfernt", testSuccess: "Cloud-Login und Synchronisierung funktionieren.", testNoLogin: "Keine aktive Anmeldung. Bitte zuerst anmelden.", testFailed: "Cloud-Test fehlgeschlagen:",
    protectedAccess: "GESCHÜTZTER ZUGANG", loginTitle: "Bei HailQuote anmelden", loginHint: "Die Anwendung und Kundendaten sind nur für autorisierte Benutzer zugänglich.",
    parts: ["Motorhaube", "Dach", "Kofferraumdeckel", "Kotflügel vorne links", "Kotflügel vorne rechts", "Tür vorne links", "Tür vorne rechts", "Tür hinten links", "Tür hinten rechts", "Seitenteil links", "Seitenteil rechts"]
  },
  en: {
    appLanguage: "App language", newQuote: "New quote", saveDraft: "Save draft", draftSaved: "The draft was saved in the archive for later sending.", exportPdf: "Export PDF", archive: "Archive", settings: "Company", users: "Users", userManagement: "User permissions", userManagementHint: "Assign roles to signed-in users", roleAdmin: "Administrator", roleEditor: "Editor", roleViewer: "Viewer",
    eyebrow: "CALCULATION & QUOTE", title: "Calculate hail damage with confidence.",
    subtitle: "Record damage, calculate costs and create a professional customer quote.",
    autoSaved: "Saved locally", customer: "Customer details", customerHint: "Recipient of the quote",
    customerName: "Name / Company", email: "Email", phone: "Phone", address: "Address",
    vehicle: "Vehicle", vehicleHint: "Vehicle and order details", brandModel: "Make & model",
    plate: "License plate", vin: "VIN", mileage: "Mileage", quoteNumber: "Quote number",
    quoteDate: "Quote date", damage: "Damage assessment", damageHint: "Record dents by panel and size",
    part: "Panel", small: "Small", medium: "Medium", large: "Large", panelTotal: "Total",
    smallRate: "Price per small dent", mediumRate: "Price per medium dent", largeRate: "Price per large dent",
    extras: "Additional costs & terms", extrasHint: "Assembly, materials, discount and tax",
    assembly: "Disassembly / assembly", materials: "Materials / other", discount: "Discount", tax: "VAT",
    notes: "Notes / scope of work", notesPlaceholder: "Paintless dent repair (PDR), subject to an on-site inspection.",
    offerLanguage: "Quote language", validDays: "Valid for (days)", calculation: "CURRENT CALCULATION",
    dentsRecorded: "dents recorded", dentRepair: "Dent repair", additionalCosts: "Additional costs",
    discountValue: "Discount", net: "Net", taxValue: "VAT", gross: "Total amount",
    preview: "Preview quote", privacy: "Your data never leaves this device.", close: "Close",
    printPdf: "Print / PDF", resetConfirm: "Do you really want to start a new quote?", selectCustomer: "Select saved customer", newCustomer: "New customer", saveCustomer: "Save customer",
    companyProfile: "Company profile", companyHint: "Appears on every quote and PDF", companyName: "Company name", taxId: "Tax number / VAT ID", logo: "Company logo", saveCompany: "Save company profile",
    quoteArchive: "Quote archive", archiveHint: "Saved and exported quotations", emptyArchive: "No archived quotes yet.", loadQuote: "Edit", reviewQuote: "Review", sendQuote: "Send to customer", deleteQuote: "Delete", missingCustomerEmail: "No customer email is saved for this quote.", sendSuccess: "The quotation was sent to the customer.", sendFailed: "Email delivery failed:", savedNotice: "Saved",
    quoteStatus: "Quote status", statusDraft: "Draft", statusSent: "Sent", statusAccepted: "Accepted", statusRejected: "Rejected",
    vehicleColor: "Colour", calculationModel: "Calculation model", dentModel: "Price per dent", hourlyModel: "Labour time × hourly rate", hourlyRate: "Hourly rate", partType: "Part type", paint: "Paint", time: "Time", yes: "Yes", no: "No",
    dataManagement: "Data backup", exportBackup: "Export backup", importBackup: "Import backup", clearData: "Delete local data",
    invalidQuote: "Please enter at least customer name, vehicle and quote number.", importSuccess: "Backup imported successfully.", importError: "The backup file is invalid.", clearConfirm: "Permanently delete all local customers, quotes and company data?",
    cloud: "Cloud", cloudSync: "Cloud sync", cloudHint: "Secure synchronization with Supabase", password: "Password", login: "Sign in", logout: "Sign out", uploadCloud: "Upload local data", downloadCloud: "Load cloud data", syncWarning: "Uploading stores customer and quote data in your Supabase project.", cloudOffline: "Cloud connection is unavailable.", cloudSignedOut: "Not signed in", cloudSignedIn: "Signed in as", cloudSaved: "Cloud data saved.", cloudLoaded: "Cloud data loaded.", cloudEmpty: "No cloud data exists for this account yet.", cloudPdfError: "The PDF was saved locally but could not be uploaded to the Offers cloud folder:",
    testCloud: "Test cloud connection", testRunning: "Cloud test running …", testConfigOk: "✓ Configuration detected", testAuthOk: "✓ Login active", testTableOk: "✓ app_state table reachable", testWriteOk: "✓ Test data written", testReadOk: "✓ Test data read", testCleanupOk: "✓ Test data removed", testSuccess: "Cloud login and synchronization work.", testNoLogin: "No active login. Please sign in first.", testFailed: "Cloud test failed:",
    protectedAccess: "PROTECTED ACCESS", loginTitle: "Sign in to HailQuote", loginHint: "The application and customer data are accessible to authorized users only.",
    parts: ["Hood", "Roof", "Trunk lid", "Front left fender", "Front right fender", "Front left door", "Front right door", "Rear left door", "Rear right door", "Left quarter panel", "Right quarter panel"]
  },
  es: {
    appLanguage: "Idioma de la app", newQuote: "Nuevo presupuesto", saveDraft: "Guardar borrador", draftSaved: "El borrador se ha guardado en el archivo para enviarlo más tarde.", exportPdf: "Exportar PDF", archive: "Archivo", settings: "Empresa", users: "Usuarios", userManagement: "Permisos de usuario", userManagementHint: "Asignar roles a usuarios registrados", roleAdmin: "Administrador", roleEditor: "Editor", roleViewer: "Lector",
    eyebrow: "CÁLCULO Y PRESUPUESTO", title: "Calcula daños por granizo con precisión.",
    subtitle: "Registra los daños, calcula los costes y crea un presupuesto profesional.",
    autoSaved: "Guardado localmente", customer: "Datos del cliente", customerHint: "Destinatario del presupuesto",
    customerName: "Nombre / Empresa", email: "Correo electrónico", phone: "Teléfono", address: "Dirección",
    vehicle: "Vehículo", vehicleHint: "Datos del vehículo y del encargo", brandModel: "Marca y modelo",
    plate: "Matrícula", vin: "Bastidor / VIN", mileage: "Kilometraje", quoteNumber: "N.º de presupuesto",
    quoteDate: "Fecha", damage: "Registro de daños", damageHint: "Registra abolladuras por pieza y tamaño",
    part: "Pieza", small: "Pequeña", medium: "Mediana", large: "Grande", panelTotal: "Total",
    smallRate: "Precio abolladura pequeña", mediumRate: "Precio abolladura mediana", largeRate: "Precio abolladura grande",
    extras: "Costes adicionales y condiciones", extrasHint: "Montaje, material, descuento e impuestos",
    assembly: "Desmontaje / montaje", materials: "Material / otros", discount: "Descuento", tax: "IVA",
    notes: "Notas / descripción del servicio", notesPlaceholder: "Reparación de abolladuras sin pintura (PDR), sujeta a inspección presencial.",
    offerLanguage: "Idioma del presupuesto", validDays: "Validez en días", calculation: "CÁLCULO ACTUAL",
    dentsRecorded: "abolladuras registradas", dentRepair: "Reparación de abolladuras", additionalCosts: "Costes adicionales",
    discountValue: "Descuento", net: "Neto", taxValue: "IVA", gross: "Importe total",
    preview: "Ver presupuesto", privacy: "Tus datos no salen de este dispositivo.", close: "Cerrar",
    printPdf: "Imprimir / PDF", resetConfirm: "¿Deseas empezar un presupuesto nuevo?", selectCustomer: "Seleccionar cliente guardado", newCustomer: "Cliente nuevo", saveCustomer: "Guardar cliente",
    companyProfile: "Perfil de empresa", companyHint: "Aparece en cada presupuesto y PDF", companyName: "Nombre de empresa", taxId: "NIF / IVA", logo: "Logotipo", saveCompany: "Guardar perfil",
    quoteArchive: "Archivo de presupuestos", archiveHint: "Presupuestos guardados y exportados", emptyArchive: "Todavía no hay presupuestos archivados.", loadQuote: "Editar", reviewQuote: "Revisar", sendQuote: "Enviar al cliente", deleteQuote: "Eliminar", missingCustomerEmail: "Este presupuesto no tiene un correo electrónico del cliente guardado.", sendSuccess: "El presupuesto se ha enviado al cliente.", sendFailed: "Error al enviar el correo:", savedNotice: "Guardado",
    quoteStatus: "Estado", statusDraft: "Borrador", statusSent: "Enviado", statusAccepted: "Aceptado", statusRejected: "Rechazado",
    vehicleColor: "Color", calculationModel: "Modelo de cálculo", dentModel: "Precio por abolladura", hourlyModel: "Tiempo × tarifa por hora", hourlyRate: "Tarifa por hora", partType: "Tipo de pieza", paint: "Pintura", time: "Tiempo", yes: "Sí", no: "No",
    dataManagement: "Copia de seguridad", exportBackup: "Exportar copia", importBackup: "Importar copia", clearData: "Eliminar datos locales",
    invalidQuote: "Introduce al menos el cliente, el vehículo y el número de presupuesto.", importSuccess: "La copia se ha importado correctamente.", importError: "El archivo de copia no es válido.", clearConfirm: "¿Eliminar permanentemente todos los clientes, presupuestos y datos de empresa?",
    cloud: "Nube", cloudSync: "Sincronización en la nube", cloudHint: "Sincronización segura con Supabase", password: "Contraseña", login: "Iniciar sesión", logout: "Cerrar sesión", uploadCloud: "Subir datos locales", downloadCloud: "Cargar datos de la nube", syncWarning: "Al subir, los datos de clientes y presupuestos se guardan en tu proyecto Supabase.", cloudOffline: "La conexión con la nube no está disponible.", cloudSignedOut: "Sesión no iniciada", cloudSignedIn: "Sesión iniciada como", cloudSaved: "Datos guardados en la nube.", cloudLoaded: "Datos de la nube cargados.", cloudEmpty: "Todavía no hay datos para esta cuenta.", cloudPdfError: "El PDF se guardó localmente, pero no se pudo subir a la carpeta Ofertas de la nube:",
    testCloud: "Probar conexión", testRunning: "Prueba de nube en curso …", testConfigOk: "✓ Configuración detectada", testAuthOk: "✓ Sesión activa", testTableOk: "✓ Tabla app_state accesible", testWriteOk: "✓ Datos de prueba escritos", testReadOk: "✓ Datos de prueba leídos", testCleanupOk: "✓ Datos de prueba eliminados", testSuccess: "El acceso y la sincronización funcionan.", testNoLogin: "No hay una sesión activa. Inicia sesión primero.", testFailed: "La prueba ha fallado:",
    protectedAccess: "ACCESO PROTEGIDO", loginTitle: "Iniciar sesión en HailQuote", loginHint: "La aplicación y los datos de clientes solo son accesibles para usuarios autorizados.",
    parts: ["Capó", "Techo", "Portón del maletero", "Aleta delantera izquierda", "Aleta delantera derecha", "Puerta delantera izquierda", "Puerta delantera derecha", "Puerta trasera izquierda", "Puerta trasera derecha", "Panel lateral izquierdo", "Panel lateral derecho"]
  }
};

const offerText = {
  de: { quote: "Angebot", customer: "Kunde", vehicle: "Fahrzeug", description: "Leistung", quantity: "Anzahl", price: "Betrag", repair: "Dellenreparatur", assembly: "Demontage / Montage", materials: "Material / Sonstiges", subtotal: "Zwischensumme", discount: "Rabatt", net: "Nettobetrag", vat: "MwSt.", total: "Gesamtbetrag", valid: "Dieses Angebot ist {days} Tage ab Ausstellungsdatum gültig.", intro: "Vielen Dank für Ihre Anfrage. Gerne bieten wir Ihnen folgende Arbeiten zur Beseitigung des Hagelschadens an.", notes: "Hinweise", footer: "Dieses Angebot wurde digital erstellt und ist ohne Unterschrift gültig." },
  en: { quote: "Quotation", customer: "Customer", vehicle: "Vehicle", description: "Service", quantity: "Quantity", price: "Amount", repair: "Dent repair", assembly: "Disassembly / assembly", materials: "Materials / other", subtotal: "Subtotal", discount: "Discount", net: "Net amount", vat: "VAT", total: "Total amount", valid: "This quote is valid for {days} days from the date of issue.", intro: "Thank you for your inquiry. We are pleased to offer the following work to repair the hail damage.", notes: "Notes", footer: "This quotation was generated digitally and is valid without a signature." },
  es: { quote: "Presupuesto", customer: "Cliente", vehicle: "Vehículo", description: "Servicio", quantity: "Cantidad", price: "Importe", repair: "Reparación de abolladuras", assembly: "Desmontaje / montaje", materials: "Material / otros", subtotal: "Subtotal", discount: "Descuento", net: "Importe neto", vat: "IVA", total: "Importe total", valid: "Este presupuesto es válido durante {days} días desde su fecha de emisión.", intro: "Gracias por su consulta. Nos complace ofrecerle los siguientes trabajos para reparar los daños por granizo.", notes: "Notas", footer: "Este presupuesto ha sido generado digitalmente y es válido sin firma." }
};

const $ = (selector) => document.querySelector(selector);
const form = $("#quoteForm");
const rows = $("#damageRows");
const fields = ["smallRate", "mediumRate", "largeRate", "hourlyRate", "calculationMode", "assembly", "materials", "discount", "tax", "validDays", "quoteStatus"];
let uiLanguage = localStorage.getItem("hailquote.uiLanguage") || "de";
let cloudClient = null;
let currentUserRole = "viewer";
let cloudSyncTimer = null;
let cloudPollTimer = null;
let applyingCloudPayload = false;
let lastCloudUpdate = "";
const SHARED_STATE_ID = "00000000-0000-0000-0000-000000000001";
const SUPABASE_URL = "https://dblzvdderfcvuzrupbhj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_VC-HeJ7bgJFmm71mKXVHMg_VhUsMn1w";
const store = {
  get(key, fallback) { try { return JSON.parse(localStorage.getItem(`hailquote.${key}`)) ?? fallback; } catch (_) { return fallback; } },
  set(key, value) {
    localStorage.setItem(`hailquote.${key}`, JSON.stringify(value));
    if (key === "customers" && Array.isArray(value) && value.length) {
      localStorage.setItem("hailquote.customersBackup", JSON.stringify({
        savedAt: new Date().toISOString(),
        customers: value
      }));
    }
    if (!applyingCloudPayload) scheduleCloudUpload();
  },
  customers() {
    const customers = this.get("customers", []);
    if (customers.length) {
      if (!localStorage.getItem("hailquote.customersBackup")) {
        localStorage.setItem("hailquote.customersBackup", JSON.stringify({
          savedAt: new Date().toISOString(),
          customers
        }));
      }
      return customers;
    }
    return this.get("customersBackup", {}).customers || [];
  },
  company() { return this.get("company", { name: "HailQuote", address: "", email: "", phone: "", taxId: "", logo: "" }); },
  quotes() { return this.get("quotes", []); }
};

function cloudPayload() {
  return { version: 1, company: store.company(), customers: store.customers(), quotes: store.quotes(), sequence: store.get("sequence", 0), currentQuote: currentQuoteData() };
}

function initCloud() {
  if (!window.supabase?.createClient) { cloudClient = null; updateCloudState(); updateAuthGate(null); return; }
  cloudClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
  cloudClient.auth.onAuthStateChange((_event, session) => {
    updateCloudState();
    updateAuthGate(session?.user || null);
    if (session?.user) startAutomaticCloudSync();
    else stopAutomaticCloudSync();
  });
  cloudClient.auth.getSession().then(({ data }) => {
    updateAuthGate(data.session?.user || null);
    if (data.session?.user) startAutomaticCloudSync();
  });
  updateCloudState();
}

function updateAuthGate(user) {
  document.body.classList.toggle("auth-locked", !user);
  if (user) {
    $("#gateMessage").textContent = "";
    $("#gatePassword").value = "";
    loadCurrentUserRole();
  }
}

async function loadCurrentUserRole() {
  if (!cloudClient) return;
  const { data: auth } = await cloudClient.auth.getUser();
  if (!auth.user) return;
  const { data } = await cloudClient.from("app_user_roles").select("role").eq("user_id", auth.user.id).maybeSingle();
  currentUserRole = data?.role || "viewer";
  applyRolePermissions();
}

function applyRolePermissions() {
  const canEdit = currentUserRole === "admin" || currentUserRole === "editor";
  const isAdmin = currentUserRole === "admin";
  form.querySelectorAll("input, textarea, select, button").forEach(element => element.disabled = !canEdit);
  ["newQuote", "exportPdf", "saveDraft", "openSettings"].forEach(id => { const element = $(`#${id}`); if (element) element.disabled = !canEdit; });
  $("#openUsers").hidden = !isAdmin;
  document.body.classList.toggle("viewer-role", !canEdit);
}

async function renderUserRoles() {
  const { data, error } = await cloudClient.from("app_user_roles").select("user_id,email,role,updated_at").order("email");
  if (error) return alert(error.message);
  $("#userRoleList").innerHTML = data.map(user => `
    <div class="archive-item">
      <div><strong>${escapeHtml(user.email || user.user_id)}</strong><span>${escapeHtml(user.role)}</span></div>
      <select data-user-role="${escapeHtml(user.user_id)}">
        <option value="admin"${user.role === "admin" ? " selected" : ""}>${translations[uiLanguage].roleAdmin}</option>
        <option value="editor"${user.role === "editor" ? " selected" : ""}>${translations[uiLanguage].roleEditor}</option>
        <option value="viewer"${user.role === "viewer" ? " selected" : ""}>${translations[uiLanguage].roleViewer}</option>
      </select>
    </div>`).join("");
}

const legalTexts = {
  imprint: `
    <h2 id="legalTitle">Impressum</h2>
    <h3>Angaben zum Betreiber</h3>
    <p><strong>DELIESTRY, S.L.U.</strong><br>
    C/ Colón 4<br>
    46950 Valencia<br>
    Spanien</p>
    <h3>Vertretungsberechtigte</h3>
    <p><strong>Director:</strong> Emin Burzic<br>
    <strong>Administradora:</strong> Amanda Colinetti</p>
    <h3>Kontakt</h3>
    <p>E-Mail: <a href="mailto:service@deliestry.eu">service@deliestry.eu</a><br>
    Telefon: <a href="tel:+34658116486">+34 658 116 486</a></p>
    <h3>Steuer- und Zollangaben</h3>
    <p><strong>VAT / NIF:</strong> B44950608<br>
    <strong>EORI:</strong> ESB44950608</p>
    <h3>Registerangaben</h3>
    <p><strong>Registerprovinz:</strong> Valencia<br>
    <strong>Veröffentlichungsdatum:</strong> 26.04.2023<br>
    <strong>Ankündigungsnummer:</strong> 198189</p>
    <h3>Operativer Kontakt</h3>
    <p>Amanda Colinetti<br>DELIESTRY, S.L.U.</p>
    <p class="legal-note">Die Angaben wurden nach den vom Betreiber bereitgestellten Unternehmens- und Registerdaten erstellt. Eine abschließende rechtliche Prüfung wird empfohlen.</p>`,
  privacy: `
    <h2 id="legalTitle">Datenschutzhinweise</h2>
    <p>Die Anwendung verarbeitet Benutzer-, Kunden-, Fahrzeug- und Angebotsdaten zur Kalkulation von Hagelschäden und zur Erstellung von Angeboten.</p>
    <h3>Lokale Verarbeitung</h3>
    <p>Entwurfs-, Firmen- und Einstellungsdaten können im lokalen Speicher des verwendeten Browsers gespeichert werden.</p>
    <h3>Cloud-Verarbeitung</h3>
    <p>Bei Nutzung der Synchronisierung werden Daten im zugehörigen Supabase-Projekt gespeichert. Alle autorisierten, angemeldeten Benutzer dieser Geschäftsanwendung können den gemeinsamen aktuellen Datenbestand einsehen und bearbeiten.</p>
    <h3>Betroffenenrechte</h3>
    <p>Betroffene Personen können Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung verlangen. Operative Kontakt- und Löschprozesse sind durch den Betreiber festzulegen.</p>
    <p class="legal-note">Diese Kurzfassung ersetzt keine auf den tatsächlichen Geschäftsbetrieb abgestimmte Datenschutzerklärung.</p>`,
  terms: `
    <h2 id="legalTitle">Nutzungsbedingungen</h2>
    <p>Diese Anwendung ist eine proprietäre Geschäftsanwendung von DELIESTRY und ausschließlich für autorisierte Benutzer bestimmt.</p>
    <ul>
      <li>Zugangsdaten dürfen nicht an unberechtigte Dritte weitergegeben werden.</li>
      <li>Vervielfältigung, Veränderung, Weitergabe oder kommerzielle Verwertung der Software ohne schriftliche Zustimmung ist untersagt.</li>
      <li>Kalkulationen und Angebote sind fachlich zu prüfen. Die Anwendung ersetzt keine Fahrzeugbegutachtung vor Ort.</li>
      <li>Benutzer sind für die Richtigkeit eingegebener Daten und die rechtmäßige Verarbeitung personenbezogener Daten verantwortlich.</li>
    </ul>
    <p class="legal-note">Diese Bedingungen sind eine Vorlage und sollten vor Verwendung gegenüber Kunden oder Mitarbeitern rechtlich geprüft werden.</p>`
};

function openLegal(type) {
  $("#legalContent").innerHTML = legalTexts[type] || "";
  $("#legalDialog").hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLegal() {
  $("#legalDialog").hidden = true;
  document.body.style.overflow = "";
}

async function updateCloudState() {
  const state = $("#cloudState");
  if (!state) return;
  if (!cloudClient) { state.textContent = translations[uiLanguage].cloudOffline; return; }
  const { data } = await cloudClient.auth.getUser();
  state.textContent = data.user ? `${translations[uiLanguage].cloudSignedIn} ${data.user.email}` : translations[uiLanguage].cloudSignedOut;
}

async function cloudAuth(mode) {
  if (!cloudClient) return updateCloudState();
  const gateActive = document.body.classList.contains("auth-locked");
  const credentials = {
    email: gateActive ? $("#gateEmail").value : $("#cloudEmail").value,
    password: gateActive ? $("#gatePassword").value : $("#cloudPassword").value
  };
  const result = await cloudClient.auth.signInWithPassword(credentials);
  if (result.error) {
    if (gateActive) $("#gateMessage").textContent = result.error.message;
    else alert(result.error.message);
  } else {
    updateAuthGate(result.data.user);
    updateCloudState();
  }
}

async function uploadCloud() {
  if (!cloudClient) return updateCloudState();
  const { data: auth } = await cloudClient.auth.getUser();
  if (!auth.user) return updateCloudState();
  const updatedAt = new Date().toISOString();
  const { error } = await cloudClient.from("shared_app_state").upsert({ id: SHARED_STATE_ID, payload: cloudPayload(), updated_at: updatedAt, updated_by: auth.user.id }, { onConflict: "id" });
  if (!error) lastCloudUpdate = updatedAt;
  alert(error ? error.message : translations[uiLanguage].cloudSaved);
}

function applyCloudPayload(payload) {
  applyingCloudPayload = true;
  const localCustomers = store.customers();
  const cloudCustomers = Array.isArray(payload.customers) ? payload.customers : [];
  const mergedCustomers = new Map();
  [...localCustomers, ...cloudCustomers].forEach(customer => {
    const key = customer.id || customer.email?.toLowerCase() || customer.customerName;
    if (key) mergedCustomers.set(key, { ...(mergedCustomers.get(key) || {}), ...customer });
  });
  store.set("company", payload.company || {});
  store.set("customers", [...mergedCustomers.values()]);
  store.set("quotes", payload.quotes || []);
  store.set("sequence", +payload.sequence || 0);
  if (payload.currentQuote) applyQuoteData(payload.currentQuote);
  refreshCustomers();
  applyingCloudPayload = false;
}

async function downloadCloud(silent = false) {
  if (!cloudClient) return updateCloudState();
  const { data: auth } = await cloudClient.auth.getUser();
  if (!auth.user) return updateCloudState();
  const { data, error } = await cloudClient.from("shared_app_state").select("payload,updated_at").eq("id", SHARED_STATE_ID).maybeSingle();
  if (error) {
    if (!silent) alert(error.message);
    return null;
  }
  if (!data) {
    if (!silent) alert(translations[uiLanguage].cloudEmpty);
    return false;
  }
  if (data.updated_at && data.updated_at === lastCloudUpdate) return true;
  lastCloudUpdate = data.updated_at || "";
  applyCloudPayload(data.payload || {});
  if (!silent) alert(translations[uiLanguage].cloudLoaded);
  return true;
}

function scheduleCloudUpload() {
  if (!cloudClient || applyingCloudPayload) return;
  clearTimeout(cloudSyncTimer);
  cloudSyncTimer = setTimeout(() => automaticCloudUpload(), 1200);
}

async function automaticCloudUpload() {
  if (!cloudClient || applyingCloudPayload || document.body.classList.contains("auth-locked")) return;
  const { data: auth } = await cloudClient.auth.getUser();
  if (!auth.user) return;
  const updatedAt = new Date().toISOString();
  const { error } = await cloudClient.from("shared_app_state").upsert({
    id: SHARED_STATE_ID,
    payload: cloudPayload(),
    updated_at: updatedAt,
    updated_by: auth.user.id
  }, { onConflict: "id" });
  if (!error) lastCloudUpdate = updatedAt;
}

async function startAutomaticCloudSync() {
  stopAutomaticCloudSync();
  const cloudExists = await downloadCloud(true);
  if (cloudExists === false) await automaticCloudUpload();
  cloudPollTimer = setInterval(() => downloadCloud(true), 10000);
}

function stopAutomaticCloudSync() {
  clearTimeout(cloudSyncTimer);
  clearInterval(cloudPollTimer);
  cloudSyncTimer = null;
  cloudPollTimer = null;
}

async function testCloudConnection() {
  const result = $("#cloudTestResult");
  result.hidden = false;
  result.className = "cloud-test-result";
  result.textContent = translations[uiLanguage].testRunning;
  const steps = [];
  try {
    if (!cloudClient) throw new Error(translations[uiLanguage].cloudOffline);
    steps.push(translations[uiLanguage].testConfigOk);
    const { data: auth, error: authError } = await cloudClient.auth.getUser();
    if (authError) throw authError;
    if (!auth.user) throw new Error(translations[uiLanguage].testNoLogin);
    steps.push(translations[uiLanguage].testAuthOk);

    const { error: tableError } = await cloudClient.from("shared_app_state").select("id").eq("id", SHARED_STATE_ID).limit(1);
    if (tableError) throw tableError;
    steps.push(translations[uiLanguage].testTableOk);

    const marker = `hailquote-test-${Date.now()}`;
    const original = await cloudClient.from("shared_app_state").select("payload,updated_at,updated_by").eq("id", SHARED_STATE_ID).maybeSingle();
    if (original.error) throw original.error;
    const testPayload = { ...(original.data?.payload || cloudPayload()), __cloud_test: marker };
    const { error: writeError } = await cloudClient.from("shared_app_state").upsert({ id: SHARED_STATE_ID, payload: testPayload, updated_at: new Date().toISOString(), updated_by: auth.user.id }, { onConflict: "id" });
    if (writeError) throw writeError;
    steps.push(translations[uiLanguage].testWriteOk);

    const { data: readData, error: readError } = await cloudClient.from("shared_app_state").select("payload").eq("id", SHARED_STATE_ID).single();
    if (readError) throw readError;
    if (readData?.payload?.__cloud_test !== marker) throw new Error("Testwert stimmt nicht überein.");
    steps.push(translations[uiLanguage].testReadOk);

    const cleanup = original.data
      ? await cloudClient.from("shared_app_state").update({ payload: original.data.payload, updated_at: original.data.updated_at, updated_by: auth.user.id }).eq("id", SHARED_STATE_ID)
      : await cloudClient.from("shared_app_state").update({ payload: cloudPayload(), updated_at: new Date().toISOString(), updated_by: auth.user.id }).eq("id", SHARED_STATE_ID);
    if (cleanup.error) throw cleanup.error;
    steps.push(translations[uiLanguage].testCleanupOk);
    result.classList.add("success");
    result.textContent = `${steps.join("\n")}\n\n${translations[uiLanguage].testSuccess}`;
  } catch (error) {
    result.classList.add("error");
    result.textContent = `${steps.join("\n")}${steps.length ? "\n\n" : ""}${translations[uiLanguage].testFailed}\n${error.message || error}`;
  }
}

function money(value, language = uiLanguage) {
  return new Intl.NumberFormat(language === "en" ? "en-GB" : language, { style: "currency", currency: "EUR" }).format(value || 0);
}

function selectedOfferLanguage() {
  const language = $("#offerLanguage")?.value;
  return ["de", "en", "es"].includes(language) ? language : "de";
}

function defaultQuoteNumber() {
  const d = new Date();
  const sequence = store.get("sequence", 0) + 1;
  store.set("sequence", sequence);
  return `HQ-${d.getFullYear()}-${String(sequence).padStart(5, "0")}`;
}

function renderRows() {
  const old = [...rows.querySelectorAll("tr")].map(row => ({
    dents: [...row.querySelectorAll(".dent-input")].map(input => input.value),
    partType: row.querySelector(".part-type")?.value || "-",
    paint: row.querySelector(".paint-input")?.value || "no",
    hours: row.querySelector(".hours-input")?.value || "0"
  }));
  rows.innerHTML = translations[uiLanguage].parts.map((part, index) => `
    <tr data-part="${index}">
      <td>${part}</td>
      ${["small", "medium", "large"].map((size, i) => `<td><input class="dent-input" data-size="${size}" type="number" min="0" step="1" value="${old[index]?.dents[i] || 0}" aria-label="${part} ${translations[uiLanguage][size]}"></td>`).join("")}
      <td><select class="part-type"><option value="-">-</option><option value="aluminium">Alu</option><option value="steel">Steel</option></select></td>
      <td><select class="paint-input"><option value="no">${translations[uiLanguage].no}</option><option value="yes">${translations[uiLanguage].yes}</option></select></td>
      <td><input class="hours-input" type="number" min="0" step="0.05" value="${old[index]?.hours || 0}"></td>
      <td class="row-total">0,00 €</td>
    </tr>`).join("");
  rows.querySelectorAll("tr").forEach((row, i) => {
    row.querySelector(".part-type").value = old[i]?.partType || "-";
    row.querySelector(".paint-input").value = old[i]?.paint || "no";
  });
}

function calculate() {
  const rates = { small: +$("#smallRate").value || 0, medium: +$("#mediumRate").value || 0, large: +$("#largeRate").value || 0 };
  const hourly = $("#calculationMode").value === "hourly";
  document.body.classList.toggle("hourly-mode", hourly);
  let repair = 0, count = 0, totalHours = 0;
  rows.querySelectorAll("tr").forEach(row => {
    let dentTotal = 0;
    row.querySelectorAll(".dent-input").forEach(input => {
      const qty = Math.max(0, +input.value || 0);
      count += qty; dentTotal += qty * rates[input.dataset.size];
    });
    const hours = Math.max(0, +row.querySelector(".hours-input").value || 0);
    totalHours += hours;
    const rowTotal = hourly ? hours * (+$("#hourlyRate").value || 0) : dentTotal;
    row.querySelector(".row-total").textContent = money(rowTotal);
    repair += rowTotal;
  });
  const extras = (+$("#assembly").value || 0) + (+$("#materials").value || 0);
  const subtotal = repair + extras;
  const discountAmount = subtotal * Math.min(100, Math.max(0, +$("#discount").value || 0)) / 100;
  const net = subtotal - discountAmount;
  const taxAmount = net * Math.max(0, +$("#tax").value || 0) / 100;
  const gross = net + taxAmount;
  $("#dentCount").textContent = count;
  $("#repairTotal").textContent = money(repair);
  $("#extrasTotal").textContent = money(extras);
  $("#discountTotal").textContent = `− ${money(discountAmount)}`;
  $("#netTotal").textContent = money(net);
  $("#taxTotal").textContent = money(taxAmount);
  $("#grossTotal").textContent = money(gross);
  save();
  return { rates, repair, count, totalHours, extras, subtotal, discountAmount, net, taxAmount, gross, hourly };
}

function save() {
  const data = Object.fromEntries(new FormData(form));
  fields.forEach(id => data[id] = $(`#${id}`).value);
  data.offerLanguage = $("#offerLanguage").value;
  data.dents = [...document.querySelectorAll(".dent-input")].map(i => i.value);
  data.rowDetails = [...rows.querySelectorAll("tr")].map(row => ({ partType: row.querySelector(".part-type").value, paint: row.querySelector(".paint-input").value, hours: row.querySelector(".hours-input").value }));
  localStorage.setItem("hailquote.quote", JSON.stringify(data));
  scheduleCloudUpload();
}

function currentQuoteData() {
  const data = Object.fromEntries(new FormData(form));
  fields.forEach(id => data[id] = $(`#${id}`).value);
  data.offerLanguage = $("#offerLanguage").value;
  data.dents = [...document.querySelectorAll(".dent-input")].map(i => i.value);
  data.rowDetails = [...rows.querySelectorAll("tr")].map(row => ({ partType: row.querySelector(".part-type").value, paint: row.querySelector(".paint-input").value, hours: row.querySelector(".hours-input").value }));
  return data;
}

function applyQuoteData(data) {
  Object.entries(data || {}).forEach(([key, value]) => {
    if (key === "dents" || key === "rowDetails" || key === "offerLanguage") return;
    const el = form.elements[key] || document.getElementById(key);
    if (el) el.value = value;
  });
  $("#offerLanguage").value = data.offerLanguage || "de";
  document.querySelectorAll(".dent-input").forEach((input, i) => input.value = data.dents?.[i] || 0);
  rows.querySelectorAll("tr").forEach((row, i) => {
    row.querySelector(".part-type").value = data.rowDetails?.[i]?.partType || "-";
    row.querySelector(".paint-input").value = data.rowDetails?.[i]?.paint || "no";
    row.querySelector(".hours-input").value = data.rowDetails?.[i]?.hours || 0;
  });
  calculate();
}

function refreshCustomers() {
  const select = $("#customerSelect");
  const current = select.value;
  select.innerHTML = `<option value="">${translations[uiLanguage].newCustomer}</option>` +
    store.customers().map(c => `<option value="${escapeHtml(c.id)}">${escapeHtml(c.customerName)}</option>`).join("");
  select.value = current;
}

function saveCustomer() {
  const data = currentQuoteData();
  if (!data.customerName?.trim()) return form.elements.customerName.focus();
  const customers = store.customers();
  const existing = customers.find(c => c.id === $("#customerSelect").value);
  const customer = { id: existing?.id || crypto.randomUUID(), customerName: data.customerName, email: data.email, phone: data.phone, address: data.address };
  const next = existing ? customers.map(c => c.id === existing.id ? customer : c) : [...customers, customer];
  store.set("customers", next);
  refreshCustomers();
  updateCloudState();
  $("#customerSelect").value = customer.id;
}

function load() {
  let data;
  try { data = JSON.parse(localStorage.getItem("hailquote.quote")); } catch (_) {}
  if (!data) {
    form.elements.quoteDate.value = new Date().toISOString().slice(0, 10);
    form.elements.quoteNumber.value = defaultQuoteNumber();
    return;
  }
  Object.entries(data).forEach(([key, value]) => {
    if (key === "dents" || key === "rowDetails" || key === "offerLanguage") return;
    const el = form.elements[key] || document.getElementById(key);
    if (el) el.value = value;
  });
  $("#offerLanguage").value = data.offerLanguage || "de";
  document.querySelectorAll(".dent-input").forEach((input, i) => input.value = data.dents?.[i] || 0);
  rows.querySelectorAll("tr").forEach((row, i) => {
    row.querySelector(".part-type").value = data.rowDetails?.[i]?.partType || "-";
    row.querySelector(".paint-input").value = data.rowDetails?.[i]?.paint || "no";
    row.querySelector(".hours-input").value = data.rowDetails?.[i]?.hours || 0;
  });
}

function setLanguage(language) {
  uiLanguage = language;
  document.documentElement.lang = language;
  localStorage.setItem("hailquote.uiLanguage", language);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = translations[language][el.dataset.i18n];
    if (value) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => el.placeholder = translations[language][el.dataset.i18nPlaceholder]);
  renderRows();
  const stored = JSON.parse(localStorage.getItem("hailquote.quote") || "{}");
  document.querySelectorAll(".dent-input").forEach((input, i) => input.value = stored.dents?.[i] || 0);
  rows.querySelectorAll("tr").forEach((row, i) => {
    row.querySelector(".part-type").value = stored.rowDetails?.[i]?.partType || "-";
    row.querySelector(".paint-input").value = stored.rowDetails?.[i]?.paint || "no";
    row.querySelector(".hours-input").value = stored.rowDetails?.[i]?.hours || 0;
  });
  calculate();
  refreshCustomers();
  if (!document.body.classList.contains("auth-locked")) applyRolePermissions();
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
}

function buildOffer() {
  const totals = calculate();
  const lang = $("#offerLanguage").value;
  const t = offerText[lang];
  const data = Object.fromEntries(new FormData(form));
  const company = store.company();
  const lines = [];
  rows.querySelectorAll("tr").forEach((row, index) => {
    const inputs = [...row.querySelectorAll(".dent-input")];
    const qty = inputs.reduce((sum, input) => sum + (+input.value || 0), 0);
    const hours = +row.querySelector(".hours-input").value || 0;
    const amount = totals.hourly ? hours * (+$("#hourlyRate").value || 0) : inputs.reduce((sum, input) => sum + (+input.value || 0) * totals.rates[input.dataset.size], 0);
    if (qty || hours) lines.push(`<tr><td>${translations[lang].parts[index]} · ${row.querySelector(".part-type").value} · ${translations[lang].paint}: ${translations[lang][row.querySelector(".paint-input").value]}</td><td>${totals.hourly ? `${hours.toFixed(2)} h` : qty}</td><td>${money(amount, lang)}</td></tr>`);
  });
  if (+$("#assembly").value) lines.push(`<tr><td>${t.assembly}</td><td>1</td><td>${money(+$("#assembly").value, lang)}</td></tr>`);
  if (+$("#materials").value) lines.push(`<tr><td>${t.materials}</td><td>1</td><td>${money(+$("#materials").value, lang)}</td></tr>`);
  const date = data.quoteDate ? new Intl.DateTimeFormat(lang === "en" ? "en-GB" : lang).format(new Date(`${data.quoteDate}T12:00:00`)) : "";
  $("#offerSheet").innerHTML = `
    <header class="offer-header">
      <div>${company.logo ? `<img class="offer-company-logo" src="${company.logo}" alt="">` : `<div class="offer-logo">Hail<span>Quote</span></div>`}<strong>${escapeHtml(company.name)}</strong></div>
      <div class="offer-meta"><strong>${t.quote} ${escapeHtml(data.quoteNumber)}</strong><br>${date}<br>${escapeHtml(company.email)}<br>${escapeHtml(company.phone)}</div>
    </header>
    <div class="offer-addresses">
      <div><div class="offer-section-label">${t.customer}</div><strong>${escapeHtml(data.customerName) || "—"}</strong><br>${escapeHtml(data.address)}<br>${escapeHtml(data.email)}<br>${escapeHtml(data.phone)}</div>
      <div><div class="offer-section-label">${t.vehicle}</div><strong>${escapeHtml(data.brandModel) || "—"}</strong><br>${escapeHtml(data.vehicleColor)}<br>${escapeHtml(data.plate)}<br>VIN: ${escapeHtml(data.vin)}<br>${data.mileage ? `${escapeHtml(data.mileage)} km` : ""}${totals.hourly ? `<br>${translations[lang].hourlyRate}: ${money(+$("#hourlyRate").value, lang)}` : ""}</div>
    </div>
    <h2 id="offerTitle">${t.quote} – ${escapeHtml(data.brandModel) || t.repair}</h2>
    <p class="offer-lead">${t.intro}</p>
    <table class="offer-table"><thead><tr><th>${t.description}</th><th>${t.quantity}</th><th>${t.price}</th></tr></thead><tbody>${lines.join("") || `<tr><td>${t.repair}</td><td>0</td><td>${money(0, lang)}</td></tr>`}</tbody></table>
    <div class="offer-totals">
      <div><span>${t.subtotal}</span><strong>${money(totals.subtotal, lang)}</strong></div>
      ${totals.discountAmount ? `<div><span>${t.discount} (${escapeHtml($("#discount").value)}%)</span><strong>− ${money(totals.discountAmount, lang)}</strong></div>` : ""}
      <div><span>${t.net}</span><strong>${money(totals.net, lang)}</strong></div>
      <div><span>${t.vat} (${escapeHtml($("#tax").value)}%)</span><strong>${money(totals.taxAmount, lang)}</strong></div>
      <div class="offer-grand"><span>${t.total}</span><strong>${money(totals.gross, lang)}</strong></div>
    </div>
    ${data.notes ? `<div class="offer-notes"><strong>${t.notes}</strong><br>${escapeHtml(data.notes)}</div>` : ""}
    <footer class="offer-footer">${escapeHtml(company.name)} · ${escapeHtml(company.address)} · ${escapeHtml(company.taxId)}<br>${t.valid.replace("{days}", escapeHtml($("#validDays").value))}<br>${t.footer}</footer>`;
}

function validateQuote() {
  const required = [form.elements.customerName, form.elements.brandModel, form.elements.quoteNumber];
  const invalid = required.find(input => !input.value.trim());
  if (!invalid) return true;
  alert(translations[uiLanguage].invalidQuote);
  invalid.focus();
  invalid.scrollIntoView({ behavior: "smooth", block: "center" });
  return false;
}

function archiveCurrentQuote() {
  const data = currentQuoteData();
  const totals = calculate();
  const quotes = store.quotes();
  const record = { ...data, id: data.quoteNumber || crypto.randomUUID(), savedAt: new Date().toISOString(), gross: totals.gross, status: data.quoteStatus || "draft" };
  store.set("quotes", [record, ...quotes.filter(q => q.id !== record.id)].slice(0, 100));
  renderArchive();
}

function saveDraft() {
  const data = currentQuoteData();
  if (!data.quoteNumber?.trim()) {
    form.elements.quoteNumber.focus();
    return;
  }
  $("#quoteStatus").value = "draft";
  archiveCurrentQuote();
  alert(translations[uiLanguage].draftSaved);
}

function renderArchive() {
  const list = $("#archiveList");
  const quotes = store.quotes();
  list.innerHTML = quotes.length ? quotes.map(q => `
    <div class="archive-item">
      <div><strong>${escapeHtml(q.quoteNumber)} · ${escapeHtml(q.customerName || "—")}</strong><span>${escapeHtml(q.brandModel || "—")} · ${money(q.gross, q.offerLanguage)} · ${new Date(q.savedAt).toLocaleDateString()}</span><span class="status-badge">${translations[uiLanguage][`status${(q.status || "draft")[0].toUpperCase()}${(q.status || "draft").slice(1)}`]}</span></div>
      <div class="archive-actions">
        <button class="button button-secondary" data-load-quote="${escapeHtml(q.id)}">${translations[uiLanguage].loadQuote}</button>
        <button class="button button-secondary" data-review-quote="${escapeHtml(q.id)}">${translations[uiLanguage].reviewQuote}</button>
        <button class="button button-primary" data-send-quote="${escapeHtml(q.id)}">${translations[uiLanguage].sendQuote}</button>
        <button class="button button-secondary" data-delete-quote="${escapeHtml(q.id)}">${translations[uiLanguage].deleteQuote}</button>
      </div>
    </div>`).join("") : `<div class="archive-empty">${translations[uiLanguage].emptyArchive}</div>`;
}

function loadCompany() {
  const company = store.company();
  Object.entries(company).forEach(([key, value]) => {
    if (key !== "logo" && $("#companyForm").elements[key]) $("#companyForm").elements[key].value = value;
  });
  $("#logoPreview").src = company.logo || "";
}

function saveCompany() {
  const company = { ...store.company(), ...Object.fromEntries(new FormData($("#companyForm"))) };
  store.set("company", company);
  closeSimpleModal("settingsModal");
}

async function imageToDataUrl(url) {
  const response = await fetch(url);
  const blob = await response.blob();
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function uploadOfferPdf(pdf, data, lang) {
  if (!cloudClient) return null;
  const { data: auth } = await cloudClient.auth.getUser();
  if (!auth.user) return null;
  const baseName = String(data.quoteNumber || `Angebot-${Date.now()}`)
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const path = `${baseName}/${baseName}-${lang}.pdf`;
  const blob = pdf.output("blob");
  const { error } = await cloudClient.storage.from("angebote").upload(path, blob, {
    contentType: "application/pdf",
    upsert: true
  });
  if (error) alert(`${translations[uiLanguage].cloudPdfError}\n${error.message}`);
  return error ? null : path;
}

async function generateBudgetPdf(data, totals, lang, action = "save", previewWindow = null) {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({ unit: "mm", format: "a4" });
  const labels = {
    de: { title: "KOSTENVORANSCHLAG", to: "Angebot an:", car: "Fahrzeugdaten:", order: "Angebotsnummer:", date: "Datum:", rate: "Stundensatz:", number: "Nr.", parts: "Bauteile", small: "Klein", medium: "Mittel", large: "Groß", type: "Typ", paint: "Lack", time: "Zeit", quantity: "Anzahl", value: "Wert", subtotal: "Zwischensumme", discount: "Rabatt", disassembly: "Demontage", materials: "Material", vat: "MwSt.", amount: "Gesamtbetrag", yes: "Ja", no: "Nein" },
    en: { title: "BUDGET", to: "Budget to:", car: "Car information:", order: "Order number:", date: "Date:", rate: "Hourly rate:", number: "N°", parts: "Parts", small: "Small", medium: "Medium", large: "Large", type: "Part type", paint: "Paint", time: "Time", quantity: "Quantity", value: "Value", subtotal: "Subtotal", discount: "Discount", disassembly: "Disassembly", materials: "Materials", vat: "VAT", amount: "Amount", yes: "Yes", no: "No" },
    es: { title: "PRESUPUESTO", to: "Presupuesto para:", car: "Datos del vehículo:", order: "N.º presupuesto:", date: "Fecha:", rate: "Tarifa por hora:", number: "N.º", parts: "Piezas", small: "Pequeña", medium: "Mediana", large: "Grande", type: "Tipo", paint: "Pintura", time: "Tiempo", quantity: "Cantidad", value: "Importe", subtotal: "Subtotal", discount: "Descuento", disassembly: "Desmontaje", materials: "Material", vat: "IVA", amount: "Total", yes: "Sí", no: "No" }
  }[lang];
  const safe = value => String(value || "").replace(/€/g, "EUR").replace(/[–—]/g, "-").replace(/[^\x20-\xFF]/g, "");
  const euro = value => money(value, lang);
  const date = data.quoteDate ? new Intl.DateTimeFormat(lang === "en" ? "en-GB" : lang).format(new Date(`${data.quoteDate}T12:00:00`)) : "";

  try {
    const logo = await imageToDataUrl("assets/deliestry-logo.jpg");
    pdf.addImage(logo, "JPEG", 14, 13, 37, 16, undefined, "FAST");
  } catch (_) {}

  pdf.setTextColor(20); pdf.setFont("helvetica", "normal"); pdf.setFontSize(9);
  pdf.text(["Deliestry SL.", "pdr@deliestry.com", "+34 658 37 25 19", "Calle Colón 4 - Bj 46950", "España / València / Xirivella"], 96, 12, { align: "center", lineHeightFactor: 1.55 });
  pdf.setFont("helvetica", "bold"); pdf.setFontSize(17); pdf.text(labels.title, 194, 13, { align: "right" });
  pdf.setFont("helvetica", "normal"); pdf.setFontSize(9);
  pdf.text(labels.order, 137, 23); pdf.text(safe(data.quoteNumber), 194, 23, { align: "right" });
  pdf.text(labels.date, 137, 31); pdf.text(safe(date), 194, 31, { align: "right" });
  pdf.setDrawColor(60); pdf.setLineWidth(.25); pdf.line(134, 35, 194, 35);

  pdf.setFont("helvetica", "bold"); pdf.setFontSize(14);
  pdf.text(labels.to, 14, 53); pdf.text(labels.car, 78, 53);
  pdf.setFont("helvetica", "normal"); pdf.setFontSize(9);
  const customerLines = [data.customerName, data.email, data.phone, data.address].filter(Boolean).map(safe);
  const rateLine = totals.hourly
    ? `${labels.rate} ${euro(+data.hourlyRate || 0)}`
    : `${labels.small}: ${euro(totals.rates.small)} · ${labels.medium}: ${euro(totals.rates.medium)} · ${labels.large}: ${euro(totals.rates.large)}`;
  const carLines = [data.brandModel, data.vehicleColor, data.plate, data.vin ? `VIN: ${data.vin}` : "", rateLine].filter(Boolean).map(safe);
  pdf.text(customerLines, 14, 60, { lineHeightFactor: 1.65 });
  pdf.text(carLines, 78, 60, { lineHeightFactor: 1.65 });

  let y = 84;
  const cols = [14, 23, 65, 82, 99, 114, 133, 151, 171, 194];
  pdf.setFillColor(0); pdf.rect(10, y, 190, 8, "F");
  pdf.setTextColor(255); pdf.setFont("helvetica", "bold"); pdf.setFontSize(7);
  [labels.number, labels.parts, labels.small, labels.medium, labels.large, labels.type, labels.paint, totals.hourly ? labels.time : labels.quantity, labels.value].forEach((label, i) => {
    const x = i < 2 ? cols[i] : cols[i + 1];
    pdf.text(safe(label), x, y + 5.2, { align: i < 2 ? "left" : "right" });
  });
  y += 8;

  let displayNumber = 0;
  rows.querySelectorAll("tr").forEach((row, index) => {
    const dents = [...row.querySelectorAll(".dent-input")].map(input => +input.value || 0);
    const hours = +row.querySelector(".hours-input").value || 0;
    if (totals.hourly ? !hours : !dents.some(Boolean)) return;
    displayNumber++;
    if (displayNumber % 2 === 0) { pdf.setFillColor(225); pdf.rect(10, y, 190, 8, "F"); }
    const value = totals.hourly
      ? hours * (+data.hourlyRate || 0)
      : dents[0] * totals.rates.small + dents[1] * totals.rates.medium + dents[2] * totals.rates.large;
    pdf.setTextColor(20); pdf.setFont("helvetica", "normal"); pdf.setFontSize(7.5);
    pdf.text(String(index + 1), 14, y + 5.2);
    pdf.text(safe(translations[lang].parts[index]), 23, y + 5.2);
    pdf.text(dents[0] ? String(dents[0]) : "-", 82, y + 5.2, { align: "right" });
    pdf.text(dents[1] ? String(dents[1]) : "-", 99, y + 5.2, { align: "right" });
    pdf.text(dents[2] ? String(dents[2]) : "-", 114, y + 5.2, { align: "right" });
    pdf.text(safe(row.querySelector(".part-type").value), 133, y + 5.2, { align: "right" });
    pdf.text(row.querySelector(".paint-input").value === "yes" ? labels.yes : labels.no, 151, y + 5.2, { align: "right" });
    pdf.text(totals.hourly ? `${hours.toFixed(2)} h` : String(dents.reduce((sum, count) => sum + count, 0)), 171, y + 5.2, { align: "right" });
    pdf.text(safe(euro(value)), 194, y + 5.2, { align: "right" });
    y += 8;
  });

  y += 5;
  const summaryX = 130, valueX = 194;
  const lines = [
    [labels.subtotal, totals.hourly ? `${totals.totalHours.toFixed(2)} h` : String(totals.count), totals.repair],
    [labels.discount, "", -totals.discountAmount],
    [labels.disassembly, "", +data.assembly || 0],
    [labels.materials, "", +data.materials || 0],
    [`${labels.vat} ${(+data.tax || 0).toFixed(2)}%`, "", totals.taxAmount]
  ];
  pdf.setFontSize(8); pdf.setTextColor(25);
  lines.forEach(([label, hours, value]) => {
    pdf.text(safe(label), summaryX, y);
    if (hours) pdf.text(hours, 166, y, { align: "right" });
    pdf.text(safe(euro(value)), valueX, y, { align: "right" });
    y += 8;
  });
  pdf.setFillColor(80); pdf.rect(126, y - 2, 74, 9, "F");
  pdf.setTextColor(255); pdf.setFont("helvetica", "bold"); pdf.setFontSize(10);
  pdf.text(labels.amount, 130, y + 4); pdf.text(safe(euro(totals.gross)), 194, y + 4, { align: "right" });

  pdf.setTextColor(105); pdf.setFont("helvetica", "normal"); pdf.setFontSize(6.8);
  pdf.text("DELIESTRY, S.L.U. · VAT B44950608 · EORI ESB44950608 · service@deliestry.eu", 105, 286, { align: "center" });
  if (action === "preview") {
    const pdfUrl = pdf.output("bloburl");
    if (previewWindow) previewWindow.location.href = pdfUrl;
    else window.open(pdfUrl, "_blank");
  } else if (action === "send") {
    const path = await uploadOfferPdf(pdf, data, lang);
    if (!path) return;
    const { data: signed, error } = await cloudClient.storage.from("angebote").createSignedUrl(path, 60 * 60 * 24 * 7);
    if (error || !signed?.signedUrl) {
      alert(`${translations[uiLanguage].cloudPdfError}\n${error?.message || ""}`);
      return;
    }
    const { error: sendError } = await cloudClient.functions.invoke("super-endpoint", {
      body: {
        to: data.email,
        customerName: data.customerName,
        quoteNumber: data.quoteNumber,
        language: lang,
        signedUrl: signed.signedUrl
      }
    });
    if (sendError) alert(`${translations[uiLanguage].sendFailed}\n${sendError.message}`);
    else {
      alert(translations[uiLanguage].sendSuccess);
      return true;
    }
    return false;
  } else {
    pdf.save(`${safe(data.quoteNumber || "DELIESTRY-Budget")}.pdf`);
    archiveCurrentQuote();
    await uploadOfferPdf(pdf, data, lang);
  }
}

async function reviewArchivedQuote(quote) {
  applyQuoteData(quote);
  const previewWindow = window.open("about:blank", "_blank");
  await generateBudgetPdf(currentQuoteData(), calculate(), quote.offerLanguage || "de", "preview", previewWindow);
}

async function sendArchivedQuote(quote) {
  if (!quote.email) return alert(translations[uiLanguage].missingCustomerEmail);
  applyQuoteData(quote);
  const sent = await generateBudgetPdf(currentQuoteData(), calculate(), quote.offerLanguage || "de", "send");
  if (sent) {
    $("#quoteStatus").value = "sent";
    archiveCurrentQuote();
  }
}

async function generatePdf(language) {
  if (!validateQuote()) return;
  if (!window.jspdf?.jsPDF) return window.print();
  const lang = typeof language === "string" && ["de", "en", "es"].includes(language) ? language : selectedOfferLanguage();
  $("#offerLanguage").value = lang;
  const t = offerText[lang], data = currentQuoteData(), totals = calculate(), company = store.company();
  return generateBudgetPdf(data, totals, lang);
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({ unit: "mm", format: "a4" });
  const text = value => String(value || "")
    .replace(/€/g, "EUR")
    .replace(/[–—]/g, "-")
    .replace(/[^\x20-\xFF]/g, "");
  let y = 18;
  if (company.logo) { try { pdf.addImage(company.logo, undefined, 15, 12, 42, 18, undefined, "FAST"); y = 35; } catch (_) {} }
  pdf.setTextColor(19, 36, 58); pdf.setFontSize(20); pdf.setFont("helvetica", "bold"); pdf.text(text(company.name || "HailQuote"), 15, y);
  pdf.setFontSize(9); pdf.setFont("helvetica", "normal"); pdf.text([text(company.address), text(company.email), text(company.phone), text(company.taxId)].filter(Boolean), 195, 16, { align: "right" });
  y += 10; pdf.setDrawColor(19, 36, 58); pdf.setLineWidth(1.2); pdf.line(15, y, 195, y); y += 12;
  pdf.setFontSize(17); pdf.setFont("helvetica", "bold"); pdf.text(`${text(t.quote)} ${text(data.quoteNumber)}`, 15, y);
  pdf.setFontSize(9); pdf.setFont("helvetica", "normal"); pdf.text(text(data.quoteDate), 195, y, { align: "right" }); y += 10;
  pdf.setFont("helvetica", "bold"); pdf.text(text(t.customer), 15, y); pdf.text(text(t.vehicle), 110, y); y += 5;
  pdf.setFont("helvetica", "normal");
  pdf.text([text(data.customerName), text(data.address), text(data.email), text(data.phone)].filter(Boolean), 15, y);
  pdf.text([text(data.brandModel), text(data.vehicleColor), text(data.plate), `VIN: ${text(data.vin)}`, totals.hourly ? `${text(translations[lang].hourlyRate)}: ${text(money(+data.hourlyRate, lang))}` : "", data.mileage ? `${text(data.mileage)} km` : ""].filter(Boolean), 110, y);
  y += 25; pdf.setFillColor(19, 36, 58); pdf.rect(15, y, 180, 8, "F"); pdf.setTextColor(255); pdf.setFont("helvetica", "bold");
  if (totals.hourly) {
    pdf.setFontSize(7);
    pdf.text("#", 18, y + 5.4); pdf.text(text(translations[lang].part), 25, y + 5.4);
    pdf.text(text(translations[lang].small), 91, y + 5.4, { align: "right" });
    pdf.text(text(translations[lang].medium), 108, y + 5.4, { align: "right" });
    pdf.text(text(translations[lang].large), 124, y + 5.4, { align: "right" });
    pdf.text(text(translations[lang].paint), 145, y + 5.4, { align: "right" });
    pdf.text(text(translations[lang].time), 166, y + 5.4, { align: "right" });
    pdf.text(text(t.price), 192, y + 5.4, { align: "right" });
  } else {
    pdf.text(text(t.description), 18, y + 5.4); pdf.text(text(t.quantity), 155, y + 5.4, { align: "right" }); pdf.text(text(t.price), 192, y + 5.4, { align: "right" });
  }
  y += 13;
  pdf.setTextColor(23, 34, 53); pdf.setFont("helvetica", "normal");
  rows.querySelectorAll("tr").forEach((row, index) => {
    const inputs = [...row.querySelectorAll(".dent-input")], qty = inputs.reduce((s, i) => s + (+i.value || 0), 0);
    const hours = +row.querySelector(".hours-input").value || 0;
    if (!qty && !hours) return;
    const amount = totals.hourly ? hours * (+data.hourlyRate || 0) : inputs.reduce((s, i) => s + (+i.value || 0) * totals.rates[i.dataset.size], 0);
    if (totals.hourly) {
      pdf.setFillColor(index % 2 ? 235 : 255); pdf.rect(15, y - 4.5, 180, 7, "F");
      pdf.setFontSize(7); pdf.text(String(index + 1), 18, y); pdf.text(text(translations[lang].parts[index]), 25, y);
      pdf.text(String(+inputs[0].value || "-"), 91, y, { align: "right" });
      pdf.text(String(+inputs[1].value || "-"), 108, y, { align: "right" });
      pdf.text(String(+inputs[2].value || "-"), 124, y, { align: "right" });
      pdf.text(text(translations[lang][row.querySelector(".paint-input").value]), 145, y, { align: "right" });
      pdf.text(`${hours.toFixed(2)} h`, 166, y, { align: "right" });
      pdf.text(text(money(amount, lang)), 192, y, { align: "right" });
    } else {
      pdf.text(text(translations[lang].parts[index]), 18, y); pdf.text(String(qty), 155, y, { align: "right" }); pdf.text(text(money(amount, lang)), 192, y, { align: "right" });
    }
    y += 7;
  });
  [[t.assembly, +data.assembly], [t.materials, +data.materials]].forEach(([label, amount]) => { if (amount) { pdf.text(text(label), 18, y); pdf.text("1", 155, y, { align: "right" }); pdf.text(text(money(amount, lang)), 192, y, { align: "right" }); y += 7; } });
  y += 7; const totalLines = [[t.subtotal, totals.subtotal], [t.discount, -totals.discountAmount], [t.net, totals.net], [`${t.vat} (${data.tax}%)`, totals.taxAmount], [t.total, totals.gross]];
  totalLines.forEach(([label, amount], i) => { if (i === 4) { pdf.setFont("helvetica", "bold"); pdf.setFontSize(12); } pdf.text(text(label), 140, y, { align: "right" }); pdf.text(text(money(amount, lang)), 192, y, { align: "right" }); y += 7; });
  if (data.notes) { y += 8; pdf.setFontSize(9); pdf.setFont("helvetica", "bold"); pdf.text(text(t.notes), 15, y); y += 5; pdf.setFont("helvetica", "normal"); pdf.text(pdf.splitTextToSize(text(data.notes), 180), 15, y); }
  pdf.setFontSize(8); pdf.setTextColor(100); pdf.text(text(t.valid.replace("{days}", data.validDays)), 15, 282);
  pdf.save(`${text(data.quoteNumber || "HailQuote")}.pdf`);
  archiveCurrentQuote();
}

async function previewPdf() {
  if (!validateQuote()) return;
  if (!window.jspdf?.jsPDF) return openOffer();
  const lang = selectedOfferLanguage();
  const previewWindow = window.open("about:blank", "_blank");
  return generateBudgetPdf(currentQuoteData(), calculate(), lang, "preview", previewWindow);
}

function openSimpleModal(id) { $(`#${id}`).hidden = false; document.body.style.overflow = "hidden"; }
function closeSimpleModal(id) { $(`#${id}`).hidden = true; document.body.style.overflow = ""; }

function openOffer() {
  if (!validateQuote()) return;
  buildOffer();
  $("#offerModal").hidden = false;
  document.body.style.overflow = "hidden";
}

function closeOffer() {
  $("#offerModal").hidden = true;
  document.body.style.overflow = "";
}

renderRows();
load();
$("#uiLanguage").value = uiLanguage;
setLanguage(uiLanguage);

document.addEventListener("input", event => {
  if (event.target.matches("input, textarea, select")) calculate();
});
$("#uiLanguage").addEventListener("change", event => {
  const language = event.target.value;
  setLanguage(language);
  $("#offerLanguage").value = language;
  calculate();
});
$("#previewOffer").addEventListener("click", previewPdf);
$("#saveDraft").addEventListener("click", saveDraft);
$("#exportPdf").addEventListener("click", generatePdf);
$("#printOffer").addEventListener("click", generatePdf);
document.querySelectorAll("[data-pdf-language]").forEach(button => button.addEventListener("click", () => generatePdf(button.dataset.pdfLanguage)));
document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeOffer));
document.addEventListener("keydown", event => { if (event.key === "Escape") closeOffer(); });
$("#saveCustomer").addEventListener("click", saveCustomer);
$("#customerSelect").addEventListener("change", event => {
  const customer = store.customers().find(c => c.id === event.target.value);
  if (customer) Object.entries(customer).forEach(([key, value]) => { if (form.elements[key]) form.elements[key].value = value; });
  calculate();
});
$("#openSettings").addEventListener("click", () => { loadCompany(); openSimpleModal("settingsModal"); });
$("#openArchive").addEventListener("click", () => { renderArchive(); openSimpleModal("archiveModal"); });
document.querySelectorAll("[data-close-settings]").forEach(el => el.addEventListener("click", () => closeSimpleModal("settingsModal")));
document.querySelectorAll("[data-close-archive]").forEach(el => el.addEventListener("click", () => closeSimpleModal("archiveModal")));
$("#saveCompany").addEventListener("click", saveCompany);
$("#companyLogo").addEventListener("change", event => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => { const company = { ...store.company(), logo: reader.result }; store.set("company", company); $("#logoPreview").src = reader.result; };
  reader.readAsDataURL(file);
});
$("#archiveList").addEventListener("click", event => {
  const loadId = event.target.dataset.loadQuote;
  const reviewId = event.target.dataset.reviewQuote;
  const sendId = event.target.dataset.sendQuote;
  const deleteId = event.target.dataset.deleteQuote;
  if (loadId) { const quote = store.quotes().find(q => q.id === loadId); if (quote) applyQuoteData(quote); closeSimpleModal("archiveModal"); }
  if (reviewId) { const quote = store.quotes().find(q => q.id === reviewId); if (quote) reviewArchivedQuote(quote); }
  if (sendId) { const quote = store.quotes().find(q => q.id === sendId); if (quote) sendArchivedQuote(quote); }
  if (deleteId) { store.set("quotes", store.quotes().filter(q => q.id !== deleteId)); renderArchive(); }
});
$("#exportBackup").addEventListener("click", () => {
  const backup = {
    version: 1,
    exportedAt: new Date().toISOString(),
    company: store.company(),
    customers: store.customers(),
    quotes: store.quotes(),
    sequence: store.get("sequence", 0),
    currentQuote: currentQuoteData()
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `hailquote-backup-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
});
$("#importBackup").addEventListener("change", event => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const backup = JSON.parse(reader.result);
      if (backup.version !== 1 || !Array.isArray(backup.customers) || !Array.isArray(backup.quotes)) throw new Error();
      store.set("company", backup.company || {});
      store.set("customers", backup.customers);
      store.set("quotes", backup.quotes);
      store.set("sequence", +backup.sequence || 0);
      if (backup.currentQuote) applyQuoteData(backup.currentQuote);
      refreshCustomers();
      alert(translations[uiLanguage].importSuccess);
    } catch (_) { alert(translations[uiLanguage].importError); }
    event.target.value = "";
  };
  reader.readAsText(file);
});
$("#clearData").addEventListener("click", () => {
  if (!confirm(translations[uiLanguage].clearConfirm)) return;
  Object.keys(localStorage).filter(key => key.startsWith("hailquote.")).forEach(key => localStorage.removeItem(key));
  location.reload();
});
$("#openCloud").addEventListener("click", () => {
  updateCloudState();
  openSimpleModal("cloudModal");
});
$("#openUsers").addEventListener("click", async () => { await renderUserRoles(); openSimpleModal("usersModal"); });
document.querySelectorAll("[data-close-users]").forEach(element => element.addEventListener("click", () => closeSimpleModal("usersModal")));
$("#userRoleList").addEventListener("change", async event => {
  const userId = event.target.dataset.userRole;
  if (!userId || currentUserRole !== "admin") return;
  const { error } = await cloudClient.from("app_user_roles").update({ role: event.target.value, updated_at: new Date().toISOString() }).eq("user_id", userId);
  if (error) alert(error.message);
});
document.querySelectorAll("[data-close-cloud]").forEach(el => el.addEventListener("click", () => closeSimpleModal("cloudModal")));
$("#cloudLogin").addEventListener("click", () => cloudAuth("login"));
$("#cloudLogout").addEventListener("click", async () => {
  if (cloudClient) await cloudClient.auth.signOut();
  closeSimpleModal("cloudModal");
  updateAuthGate(null);
  updateCloudState();
});
$("#gateLogin").addEventListener("click", () => cloudAuth("login"));
$("#gatePassword").addEventListener("keydown", event => { if (event.key === "Enter") cloudAuth("login"); });
document.querySelectorAll("[data-legal]").forEach(button => button.addEventListener("click", () => openLegal(button.dataset.legal)));
document.querySelectorAll("[data-close-legal]").forEach(element => element.addEventListener("click", closeLegal));
$("#cloudUpload").addEventListener("click", uploadCloud);
$("#cloudDownload").addEventListener("click", downloadCloud);
$("#cloudTest").addEventListener("click", testCloudConnection);
$("#newQuote").addEventListener("click", () => {
  if (!confirm(translations[uiLanguage].resetConfirm)) return;
  localStorage.removeItem("hailquote.quote");
  form.reset();
  fields.forEach(id => {
    const defaults = { smallRate: 18, mediumRate: 32, largeRate: 55, hourlyRate: 120, calculationMode: "dent", assembly: 180, materials: 40, discount: 0, tax: 19, validDays: 14, quoteStatus: "draft" };
    $(`#${id}`).value = defaults[id];
  });
  form.elements.quoteDate.value = new Date().toISOString().slice(0, 10);
  form.elements.quoteNumber.value = defaultQuoteNumber();
  document.querySelectorAll(".dent-input").forEach(input => input.value = 0);
  document.querySelectorAll(".hours-input").forEach(input => input.value = 0);
  document.querySelectorAll(".part-type").forEach(input => input.value = "-");
  document.querySelectorAll(".paint-input").forEach(input => input.value = "no");
  calculate();
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("./service-worker.js").catch(() => {});
}
initCloud();
