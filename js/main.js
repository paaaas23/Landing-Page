/**
 * Kandasamy Tractor Services - Main Application Script
 * Vanilla JavaScript (ES6+), High Performance, Accessible
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // State Management
  // --------------------------------------------------------------------------
  const state = {
    currentLanguage: 'en', // 'en' or 'ta'
    currentSlide: 0,
    slideInterval: null,
    lightboxIndex: 0,
    hasCountedStats: false
  };

  // --------------------------------------------------------------------------
  // Translations Dictionary (English & தமிழ்)
  // --------------------------------------------------------------------------
  const TRANSLATIONS = {
    en: {
      preloaderText: "Starting Tractor Engines...",
      workingHoursShort: "Hours: <strong>6:00 AM - 7:00 PM</strong> (All 7 Days)",
      businessName: "Kandasamy Tractor Services",
      brandSubtitle: "Farm & Field Solutions",
      navServices: "Services",
      navHow: "How It Works",
      navWhy: "Why Us",
      navGallery: "Gallery",
      navReviews: "Reviews",
      navContact: "Contact",
      btnBookNav: "Book a Service",
      heroBadge: "🌾 Trusted by 150+ Local Farmers",
      heroHeadline: "Reliable Tractor Services for Every",
      heroHeadlineHighlight: "Farmer",
      heroSubtext: "Affordable rates, on-time field service, and 8+ years of trusted experience in Salem, Attur, Omalur & nearby villages. Well-maintained 50 HP machine with all agricultural attachments.",
      heroBtnBook: "Book a Service",
      heroBtnCall: "Call Now: 98765 43210",
      heroFeat1: "Fixed Hourly & Acre Rates",
      heroFeat2: "100% On-Time Field Arrival",
      heroFeat3: "50 HP Heavy-Duty Tractor",
      servicesTag: "Transparent Pricing",
      servicesTitle: "Our Tractor & Field Services",
      servicesDesc: "We provide all essential agricultural operations with modern attachments. Choose your service and get transparent hourly or acre-based pricing with no hidden charges.",
      howTag: "Simple 3-Step Process",
      howTitle: "How to Book Our Tractor",
      howDesc: "Getting your farmland ploughed or harvested is fast and hassle-free. Just 3 simple steps to get our tractor at your field.",
      step1Title: "Choose Service",
      step1Desc: "Select the attachment you need for your land (Ploughing, Rotavator, Seed Sowing, Harvesting, or Trolley Transport).",
      step2Title: "Contact Directly",
      step2Desc: "Call us directly, tap WhatsApp, or send your village name & preferred date through our quick 30-second booking form.",
      step3Title: "Service at Your Farm",
      step3Desc: "Our 50 HP tractor and skilled operator arrive promptly at your field. Review the work and pay fairly after completion.",
      statAcres: "Acres Ploughed & Served",
      statFarmers: "Happy Farmers",
      statExperience: "Years Experience",
      statServices: "Farm Attachments",
      whyTag: "Farmer First Advantage",
      whyTitle: "Why Farmers Trust Our Tractor",
      whyDesc: "We treat your field like our own. Our focus is delivering maximum crop yield preparation with dependable timing and fair rates.",
      adv1Title: "Fair & Transparent Rates",
      adv1Desc: "Fixed hourly and acre rates agreed beforehand. No surprise diesel charges or extra operator commissions.",
      adv2Title: "100% On-Time Arrival",
      adv2Desc: "Farm seasons can't wait for delayed machinery. When we confirm your booking slot, we show up on schedule.",
      adv3Title: "50 HP Well-Maintained",
      adv3Desc: "Powerful, regularly serviced tractor with sharp blades and greased hydraulics for zero in-field breakdowns.",
      adv4Title: "Native Field Operator",
      adv4Desc: "8+ years experienced native driver who understands local soil conditions, moisture levels, and boundary bund safety.",
      galleryTag: "Real Field Operations",
      galleryTitle: "Our Tractor at Work",
      galleryDesc: "Take a look at our machine and attachments operating in local farmland across various agricultural seasons. Click any photo to view in full size.",
      reviewsTag: "Farmer Testimonials",
      reviewsTitle: "What Fellow Farmers Say",
      reviewsDesc: "Direct feedback from farmers in Salem, Attur, and Omalur who hired our tractor services.",
      contactTag: "Book Online or Call Direct",
      contactTitle: "Book a Service for Your Land",
      contactDesc: "Fill out the quick booking form below, or call / WhatsApp us directly. We respond within minutes!",
      contactDirectTitle: "Direct Owner Contact",
      channelPhoneLabel: "Call Directly",
      channelPhoneNote: "Instant response • 6 AM to 7 PM",
      channelWaLabel: "WhatsApp Chat",
      channelWaNote: "Send farm location & photos",
      channelEmailLabel: "Email Address",
      channelHoursLabel: "Working Hours",
      channelHoursValue: "6:00 AM – 7:00 PM",
      channelHoursNote: "All 7 Days including Sundays",
      mapTitle: "📍 Operating Base: Salem, Tamil Nadu",
      mapBadge: "50 KM Radius",
      formTitle: "Fast 30-Second Booking Form",
      formSubtitle: "No advance payment needed. We will call you immediately to confirm the time slot.",
      formNameLabel: "Farmer Name",
      formPhoneLabel: "Phone Number",
      formVillageLabel: "Village / Town Name",
      formServiceLabel: "Service Needed",
      formServicePlaceholder: "-- Select a Farm Service --",
      formLandLabel: "Land Size (Acres)",
      formDateLabel: "Preferred Date",
      formMsgLabel: "Notes / Crop Details (Optional)",
      formSubmitBtn: "Confirm Booking Request",
      errName: "Please enter your name.",
      errPhone: "Please enter a valid 10-digit mobile number.",
      errVillage: "Please enter your village or town name.",
      errService: "Please select a service type.",
      errLand: "Please enter approximate acres (e.g. 2).",
      errDate: "Please choose a preferred service date.",
      successTitle: "Booking Request Received!",
      successWaBtn: "Send Details Instantly via WhatsApp",
      bookAnother: "Book Another Service",
      footerDesc: "Reliable agricultural machinery services for Salem and surrounding farming communities. Dedicated to fast, honest, and high-quality field preparation.",
      workingHoursBadgeTitle: "Working Hours:",
      workingHoursFull: "6:00 AM to 7:00 PM (Monday – Sunday)",
      footerQuickLinks: "Quick Links",
      footerOurServices: "Our Services",
      footerContactHeading: "Contact Details",
      footerAddress: "Main Road, Near Agri Cooperative Society, Salem, Tamil Nadu - 636001",
      mobileCallBtn: "Call Now",
      mobileWaBtn: "WhatsApp"
    },
    ta: {
      preloaderText: "டிராக்டர் இன்ஜின் தயாராகிறது...",
      workingHoursShort: "வேலை நேரம்: <strong>காலை 6:00 - இரவு 7:00</strong> (அனைத்து நாட்களும்)",
      businessName: "கந்தசாமி டிராக்டர் சர்வீஸ்",
      brandSubtitle: "விவசாய & களப்பணி சேவைகள்",
      navServices: "சேவைகள்",
      navHow: "எப்படி செயல்படுகிறது",
      navWhy: "ஏன் நாங்கள்",
      navGallery: "புகைப்படங்கள்",
      navReviews: "விமர்சனங்கள்",
      navContact: "தொடர்பு",
      btnBookNav: "முன்பதிவு செய்ய",
      heroBadge: "🌾 150+ உள்ளூர் விவசாயிகளின் நம்பிக்கை",
      heroHeadline: "ஒவ்வொரு விவசாயிக்கும் நம்பகமான டிராக்டர்",
      heroHeadlineHighlight: "சேவைகள்",
      heroSubtext: "சேலம், ஆத்தூர், ஓமலூர் மற்றும் சுற்றுவட்டார கிராமங்களில் 8+ ஆண்டுகால நம்பகமான சேவை. 50 HP நவீன டிராக்டருடன் நியாயமான கட்டணத்தில் துல்லியமான களப்பணி.",
      heroBtnBook: "முன்பதிவு செய்ய",
      heroBtnCall: "அழைக்க: 98765 43210",
      heroFeat1: "மணிநேரம் & ஏக்கர் முறை கட்டணம்",
      heroFeat2: "100% குறித்த நேரத்தில் வருகை",
      heroFeat3: "50 HP சக்திவாய்ந்த இயந்திரம்",
      servicesTag: "வெளிப்படையான கட்டண விபரம்",
      servicesTitle: "எங்களின் விவசாய சேவைகள் & கட்டணங்கள்",
      servicesDesc: "அனைத்து விதமான விவசாய பணிகளுக்கும் நவீன கருவிகளுடன் டிராக்டர் சேவை வழங்குகிறோம். மறைமுக செலவுகள் இன்றி வெளிப்படையான கட்டணம்.",
      howTag: "எளிய 3 படிமுறைகள்",
      howTitle: "டிராக்டரை முன்பதிவு செய்வது எப்படி?",
      howDesc: "உங்கள் வயலுக்கு டிராக்டர் வரவழைப்பது மிக சுலபம். 3 எளிய வழிகளில் உங்கள் பணியை தொடங்கலாம்.",
      step1Title: "சேவையை தேர்ந்தெடுக்கவும்",
      step1Desc: "உங்கள் நிலத்திற்கு தேவையான சேவையை (உழவு, ரோட்டவேட்டர், விதைப்பு, அறுவடை அல்லது டிராலி) தேர்வு செய்யுங்கள்.",
      step2Title: "நேரடியாக தொடர்பு கொள்ளவும்",
      step2Desc: "தொலைபேசி, வாட்ஸ்அப் அல்லது எங்கள் 30-வினாடி படிவத்தின் மூலம் உங்கள் ஊர் பெயர் தெரிவித்து உடனே தொடர்பு கொள்ளுங்கள்.",
      step3Title: "உங்கள் வயலில் விரைவு சேவை",
      step3Desc: "குறிப்பிட்ட நேரத்தில் எங்கள் 50 HP டிராக்டரும் ஓட்டுநரும் உங்கள் வயலுக்கு வந்து வேலையை முடிப்பர். பணி முடிந்ததும் கட்டணம் செலுத்தலாம்.",
      statAcres: "ஏக்கர் உழவு & களப்பணிகள்",
      statFarmers: "மகிழ்ச்சியான விவசாயிகள்",
      statExperience: "ஆண்டுகள் நேரடி அனுபவம்",
      statServices: "விவசாய கருவிகள் / சேவைகள்",
      whyTag: "விவசாயிகளுக்கு முன்னுரிமை",
      whyTitle: "விவசாயிகள் எங்களை நம்புவது ஏன்?",
      whyDesc: "உங்கள் நிலத்தை எங்கள் நிலமாக கருதி பணியாற்றுகிறோம். சரியான நேரம், சிறந்த உழவுத்தரம் மற்றும் நியாயமான கட்டணமே எங்கள் நோக்கம்.",
      adv1Title: "நியாயமான வெளிப்படையான கட்டணம்",
      adv1Desc: "முன்கூட்டியே பேசி உறுதிசெய்யப்படும் கட்டணம். டீசலுக்கோ அல்லது ஓட்டுநருக்கோ கூடுதல் மறைமுக செலவு ஏதுமில்லை.",
      adv2Title: "100% சரியான நேரத்திற்கு வருகை",
      adv2Desc: "விவசாயத்திற்கு காலம் மிகவும் முக்கியம். நேரம் உறுதி செய்யப்பட்டால் குறித்த நேரத்தில் உங்கள் வயலில் இருப்போம்.",
      adv3Title: "50 HP நன்கு பராமரிக்கப்பட்ட டிராக்டர்",
      adv3Desc: "கூர்மையான பிளேடுகள் மற்றும் ஹைட்ராலிக் அமைப்புகளுடன் வயலில் வேலை நிற்காமல் ஓடக்கூடிய வலுவான இயந்திரம்.",
      adv4Title: "அனுபவம் வாய்ந்த உள்ளூர் ஓட்டுநர்",
      adv4Desc: "மண் ஈரப்பதம், வரப்பு பாதுகாப்பு மற்றும் வயல் அமைப்பை நன்கு அறிந்த 8+ ஆண்டுகள் அனுபவமுள்ள ஓட்டுநர்.",
      galleryTag: "நேரடி களப்பணிகள்",
      galleryTitle: "வயலில் எங்கள் டிராக்டர்",
      galleryDesc: "பல்வேறு பயிர் பருவங்களில் எங்கள் டிராக்டர் கருவிகள் வயலில் இயங்கும் புகைப்படங்களை பாருங்கள். பெரிதாக்கி பார்க்க படத்தை தொடவும்.",
      reviewsTag: "விவசாயிகளின் கருத்துகள்",
      reviewsTitle: "எங்கள் விவசாய சகோதரர்களின் அனுபவம்",
      reviewsDesc: "சேலம், ஆத்தூர், ஓமலூர் விவசாயிகளின் நேரடி அனுபவ பகிர்வுகள்.",
      contactTag: "நேரடி அழைப்பு அல்லது ஆன்லைன் முன்பதிவு",
      contactTitle: "உங்கள் நிலத்திற்கான முன்பதிவு",
      contactDesc: "கீழே உள்ள படிவத்தை நிரப்பவும், அல்லது உடனே எங்களை அழைக்கவும் / வாட்ஸ்அப் செய்யவும். சில நிமிடங்களில் பதிலளிப்போம்!",
      contactDirectTitle: "உரிமையாளரின் நேரடி தொடர்பு",
      channelPhoneLabel: "நேரடி அழைப்பு",
      channelPhoneNote: "உடனடி பதில் • காலை 6 முதல் இரவு 7 வரை",
      channelWaLabel: "வாட்ஸ்அப் தகவல்",
      channelWaNote: "வயல் லொகேஷன் & விபரம் அனுப்ப",
      channelEmailLabel: "மின்னஞ்சல் முகவரி",
      channelHoursLabel: "வேலை நேரம்",
      channelHoursValue: "காலை 6:00 – இரவு 7:00",
      channelHoursNote: "ஞாயிறு உட்பட வாரத்தின் அனைத்து நாட்களும்",
      mapTitle: "📍 இயக்க மையம்: சேலம், தமிழ்நாடு",
      mapBadge: "50 கி.மீ சுற்றளவு",
      formTitle: "விரைவான 30-வினாடி முன்பதிவு",
      formSubtitle: "முன்பணம் எதுவும் செலுத்த தேவையில்லை. நேரத்தை உறுதி செய்ய நாங்கள் உடனே உங்களை தொடர்புகொள்வோம்.",
      formNameLabel: "விவசாயி பெயர்",
      formPhoneLabel: "கைபேசி எண்",
      formVillageLabel: "ஊர் / கிராமத்தின் பெயர்",
      formServiceLabel: "தேவையான சேவை",
      formServicePlaceholder: "-- விவசாய சேவையை தேர்வு செய்யவும் --",
      formLandLabel: "நிலத்தின் அளவு (ஏக்கர்)",
      formDateLabel: "தேவையான தேதி",
      formMsgLabel: "கூடுதல் குறிப்பு / பயிர் விபரம் (விரும்பினால்)",
      formSubmitBtn: "முன்பதிவை உறுதி செய்",
      errName: "தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.",
      errPhone: "10-இலக்க சரியான கைபேசி எண்ணை உள்ளிடவும்.",
      errVillage: "உங்கள் ஊர் அல்லது கிராம பெயரை உள்ளிடவும்.",
      errService: "சேவை வகையை தேர்வு செய்யவும்.",
      errLand: "நிலத்தின் அளவை உள்ளிடவும் (எ.கா. 2).",
      errDate: "தேவையான தேதியை தேர்வு செய்யவும்.",
      successTitle: "முன்பதிவு விபரம் பெறப்பட்டது!",
      successWaBtn: "விபரங்களை உடனே வாட்ஸ்அப்பில் அனுப்ப",
      bookAnother: "மற்றொரு முன்பதிவு செய்ய",
      footerDesc: "சேலம் மற்றும் சுற்றுவட்டார விவசாய பெருமக்களுக்கான நம்பகமான டிராக்டர் மற்றும் விவசாய இயந்திர சேவைகள்.",
      workingHoursBadgeTitle: "வேலை நேரம்:",
      workingHoursFull: "காலை 6:00 மணி முதல் இரவு 7:00 மணி வரை (திங்கள் - ஞாயிறு)",
      footerQuickLinks: "முக்கிய இணைப்புகள்",
      footerOurServices: "எங்கள் சேவைகள்",
      footerContactHeading: "தொடர்பு முகவரி",
      footerAddress: "மெயின் ரோடு, தொடக்க வேளாண்மை கூட்டுறவு சங்கம் அருகில், சேலம், தமிழ்நாடு - 636001",
      mobileCallBtn: "அழைக்க",
      mobileWaBtn: "வாட்ஸ்அப்"
    }
  };

  // --------------------------------------------------------------------------
  // DOM Elements Cache
  // --------------------------------------------------------------------------
  const DOM = {
    preloader: document.getElementById('preloader'),
    siteHeader: document.getElementById('siteHeader'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileDrawer: document.getElementById('mobileDrawer'),
    mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),
    langToggleBtn: document.getElementById('langToggleBtn'),
    langBtnText: document.getElementById('langBtnText'),
    servicesGrid: document.getElementById('servicesGrid'),
    galleryGrid: document.getElementById('galleryGrid'),
    testimonialTrack: document.getElementById('testimonialTrack'),
    sliderPrev: document.getElementById('sliderPrev'),
    sliderNext: document.getElementById('sliderNext'),
    sliderDots: document.getElementById('sliderDots'),
    lightboxModal: document.getElementById('lightboxModal'),
    lightboxImg: document.getElementById('lightboxImg'),
    lightboxCaption: document.getElementById('lightboxCaption'),
    lightboxCounter: document.getElementById('lightboxCounter'),
    lightboxClose: document.getElementById('lightboxClose'),
    lightboxPrev: document.getElementById('lightboxPrev'),
    lightboxNext: document.getElementById('lightboxNext'),
    bookingForm: document.getElementById('bookingForm'),
    serviceTypeSelect: document.getElementById('serviceType'),
    serviceDateField: document.getElementById('serviceDate'),
    formSuccessAlert: document.getElementById('formSuccessAlert'),
    successMessageText: document.getElementById('successMessageText'),
    waDirectSendBtn: document.getElementById('waDirectSendBtn'),
    resetBookingBtn: document.getElementById('resetBookingBtn'),
    currentYearSpan: document.getElementById('currentYear')
  };

  // --------------------------------------------------------------------------
  // Initialization
  // --------------------------------------------------------------------------
  function init() {
    initPreloader();
    initCurrentYear();
    initMinBookingDate();
    renderServices();
    renderGallery();
    renderTestimonials();
    initNavbarScroll();
    initMobileDrawer();
    initScrollReveal();
    initCounters();
    initLightbox();
    initTestimonialSlider();
    initBookingForm();
    initLanguageSwitcher();
    initRippleEffect();
  }

  // --------------------------------------------------------------------------
  // Preloader
  // --------------------------------------------------------------------------
  function initPreloader() {
    if (!DOM.preloader) return;
    
    // Hide preloader smoothly after page load or timeout
    const hidePreloader = () => {
      DOM.preloader.classList.add('fade-out');
      setTimeout(() => {
        if (DOM.preloader && DOM.preloader.parentNode) {
          DOM.preloader.parentNode.removeChild(DOM.preloader);
        }
      }, 500);
    };

    window.addEventListener('load', () => {
      setTimeout(hidePreloader, 400);
    });

    // Fallback safety timeout (2.5s maximum)
    setTimeout(hidePreloader, 2500);
  }

  function initCurrentYear() {
    if (DOM.currentYearSpan) {
      DOM.currentYearSpan.textContent = new Date().getFullYear();
    }
  }

  function initMinBookingDate() {
    if (DOM.serviceDateField) {
      const today = new Date().toISOString().split('T')[0];
      DOM.serviceDateField.min = today;
      DOM.serviceDateField.value = today;
    }
  }

  // --------------------------------------------------------------------------
  // Language Switcher (English <-> தமிழ்)
  // --------------------------------------------------------------------------
  function initLanguageSwitcher() {
    if (!DOM.langToggleBtn) return;

    DOM.langToggleBtn.addEventListener('click', () => {
      state.currentLanguage = state.currentLanguage === 'en' ? 'ta' : 'en';
      applyLanguage(state.currentLanguage);
    });
  }

  function applyLanguage(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

    // Update text for all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Update toggle button text
    if (DOM.langBtnText) {
      DOM.langBtnText.textContent = lang === 'en' ? 'தமிழ் (Tamil)' : 'English';
    }

    // Re-render dynamic components with translated values
    renderServices();
    renderGallery();
    renderTestimonials();
  }

  // --------------------------------------------------------------------------
  // Render Services Cards
  // --------------------------------------------------------------------------
  function renderServices() {
    if (!DOM.servicesGrid || !BUSINESS_DATA.services) return;

    const isTamil = state.currentLanguage === 'ta';
    const services = BUSINESS_DATA.services;

    DOM.servicesGrid.innerHTML = services.map((svc, index) => {
      const name = isTamil ? svc.nameTamil : svc.name;
      const rate = isTamil ? svc.rateTextTamil : svc.rateText;
      const desc = isTamil ? svc.shortDescTamil : svc.shortDesc;
      const features = isTamil ? svc.featuresTamil : svc.features;
      const bookBtnText = isTamil ? "இச்சேவையை முன்பதிவு செய்" : "Book This Service";

      const featuresHtml = features.map(f => `<div class="service-feat-item">${f}</div>`).join('');

      return `
        <article class="service-card reveal reveal-delay-${(index % 3) + 1}">
          <div class="service-card-top">
            <div class="service-icon-box">
              <img src="${svc.icon}" alt="${name} icon" width="48" height="48" loading="lazy">
            </div>
            <span class="service-badge">${svc.badge}</span>
          </div>

          <h3 class="service-title">${name}</h3>

          <div class="service-price-pill">
            <span class="service-price-amount">${rate}</span>
          </div>

          <p class="service-desc">${desc}</p>

          <div class="service-features">
            ${featuresHtml}
          </div>

          <button 
            type="button" 
            class="btn btn-outline-dark btn-block service-btn btn-ripple" 
            data-select-service="${svc.id}"
            aria-label="${bookBtnText} - ${name}"
          >
            <span>🚜</span>
            <span>${bookBtnText}</span>
          </button>
        </article>
      `;
    }).join('');

    // Attach click handlers to "Book This Service" buttons
    DOM.servicesGrid.querySelectorAll('[data-select-service]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const serviceId = e.currentTarget.getAttribute('data-select-service');
        selectServiceAndScrollToForm(serviceId);
      });
    });
  }

  function selectServiceAndScrollToForm(serviceId) {
    if (DOM.serviceTypeSelect) {
      DOM.serviceTypeSelect.value = serviceId;
      DOM.serviceTypeSelect.classList.remove('error');
    }

    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });

      // Highlight the select element briefly
      setTimeout(() => {
        if (DOM.serviceTypeSelect) {
          DOM.serviceTypeSelect.focus();
        }
      }, 600);
    }
  }

  // --------------------------------------------------------------------------
  // Render Gallery Cards
  // --------------------------------------------------------------------------
  function renderGallery() {
    if (!DOM.galleryGrid || !BUSINESS_DATA.gallery) return;

    const isTamil = state.currentLanguage === 'ta';
    const galleryItems = BUSINESS_DATA.gallery;

    DOM.galleryGrid.innerHTML = galleryItems.map((item, index) => {
      const title = isTamil ? item.titleTamil : item.title;
      const category = isTamil ? item.categoryTamil : item.category;
      const clickHint = isTamil ? "பெரிதாக்க தொடவும்" : "Tap to enlarge";

      return `
        <div class="gallery-card reveal reveal-delay-${(index % 3) + 1}" data-gallery-index="${index}" tabindex="0" role="button" aria-label="${title}">
          <img src="${item.image}" alt="${title}" class="gallery-thumb" loading="lazy">
          <div class="gallery-overlay">
            <span class="gallery-tag">${category}</span>
            <div class="gallery-title">${title}</div>
            <div class="gallery-click-hint">🔍 ${clickHint}</div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click events for lightbox opening
    DOM.galleryGrid.querySelectorAll('.gallery-card').forEach((card) => {
      card.addEventListener('click', () => {
        const index = parseInt(card.getAttribute('data-gallery-index'), 10);
        openLightbox(index);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const index = parseInt(card.getAttribute('data-gallery-index'), 10);
          openLightbox(index);
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // Lightbox Modal Functionality
  // --------------------------------------------------------------------------
  function initLightbox() {
    if (!DOM.lightboxModal) return;

    DOM.lightboxClose.addEventListener('click', closeLightbox);
    DOM.lightboxPrev.addEventListener('click', prevLightboxImage);
    DOM.lightboxNext.addEventListener('click', nextLightboxImage);

    // Close when clicking dark backdrop outside content
    DOM.lightboxModal.addEventListener('click', (e) => {
      if (e.target === DOM.lightboxModal) {
        closeLightbox();
      }
    });

    // Keyboard support: Escape to close, Arrows to navigate
    document.addEventListener('keydown', (e) => {
      if (!DOM.lightboxModal.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightboxImage();
      if (e.key === 'ArrowRight') nextLightboxImage();
    });
  }

  function openLightbox(index) {
    state.lightboxIndex = index;
    updateLightboxContent();
    DOM.lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    DOM.lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function prevLightboxImage() {
    const total = BUSINESS_DATA.gallery.length;
    state.lightboxIndex = (state.lightboxIndex - 1 + total) % total;
    updateLightboxContent();
  }

  function nextLightboxImage() {
    const total = BUSINESS_DATA.gallery.length;
    state.lightboxIndex = (state.lightboxIndex + 1) % total;
    updateLightboxContent();
  }

  function updateLightboxContent() {
    const isTamil = state.currentLanguage === 'ta';
    const item = BUSINESS_DATA.gallery[state.lightboxIndex];
    const total = BUSINESS_DATA.gallery.length;

    DOM.lightboxImg.src = item.image;
    DOM.lightboxImg.alt = isTamil ? item.titleTamil : item.title;
    DOM.lightboxCaption.textContent = isTamil ? `${item.titleTamil} - ${item.categoryTamil}` : `${item.title} - ${item.caption}`;
    DOM.lightboxCounter.textContent = `${state.lightboxIndex + 1} / ${total}`;
  }

  // --------------------------------------------------------------------------
  // Render Testimonials & Carousel Slider
  // --------------------------------------------------------------------------
  function renderTestimonials() {
    if (!DOM.testimonialTrack || !BUSINESS_DATA.testimonials) return;

    const isTamil = state.currentLanguage === 'ta';
    const testimonials = BUSINESS_DATA.testimonials;

    DOM.testimonialTrack.innerHTML = testimonials.map((t) => {
      const quote = isTamil ? t.quoteTamil : t.quote;
      const village = isTamil ? t.villageTamil : t.location;
      const stars = '★'.repeat(t.rating);

      return `
        <div class="testimonial-slide">
          <article class="testimonial-card">
            <div class="testimonial-quote-icon">“</div>
            <blockquote class="testimonial-text">${quote}</blockquote>
            <div class="testimonial-stars" aria-label="${t.rating} out of 5 stars">${stars}</div>
            <div class="testimonial-author-name">${t.name}</div>
            <div class="testimonial-meta">📍 ${village} • ${t.acres} (${t.service})</div>
          </article>
        </div>
      `;
    }).join('');

    renderSliderDots(testimonials.length);
    updateSliderPosition();
  }

  function renderSliderDots(count) {
    if (!DOM.sliderDots) return;

    DOM.sliderDots.innerHTML = Array.from({ length: count })
      .map((_, i) => `<button class="slider-dot ${i === state.currentSlide ? 'active' : ''}" data-slide-index="${i}" type="button" aria-label="Go to slide ${i + 1}"></button>`)
      .join('');

    DOM.sliderDots.querySelectorAll('.slider-dot').forEach((dot) => {
      dot.addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.getAttribute('data-slide-index'), 10);
        goToSlide(index);
      });
    });
  }

  function initTestimonialSlider() {
    if (!DOM.sliderPrev || !DOM.sliderNext) return;

    DOM.sliderPrev.addEventListener('click', () => {
      const total = BUSINESS_DATA.testimonials.length;
      goToSlide((state.currentSlide - 1 + total) % total);
    });

    DOM.sliderNext.addEventListener('click', () => {
      const total = BUSINESS_DATA.testimonials.length;
      goToSlide((state.currentSlide + 1) % total);
    });

    // Touch swipe support for mobile farmers
    let touchStartX = 0;
    let touchEndX = 0;

    DOM.testimonialTrack.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopSlideAutoPlay();
    }, { passive: true });

    DOM.testimonialTrack.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      startSlideAutoPlay();
    }, { passive: true });

    function handleSwipe() {
      const diff = touchStartX - touchEndX;
      const total = BUSINESS_DATA.testimonials.length;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          goToSlide((state.currentSlide + 1) % total);
        } else {
          goToSlide((state.currentSlide - 1 + total) % total);
        }
      }
    }

    startSlideAutoPlay();
  }

  function goToSlide(index) {
    state.currentSlide = index;
    updateSliderPosition();
  }

  function updateSliderPosition() {
    if (!DOM.testimonialTrack) return;
    DOM.testimonialTrack.style.transform = `translateX(-${state.currentSlide * 100}%)`;

    // Update active dot
    if (DOM.sliderDots) {
      DOM.sliderDots.querySelectorAll('.slider-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === state.currentSlide);
      });
    }
  }

  function startSlideAutoPlay() {
    stopSlideAutoPlay();
    state.slideInterval = setInterval(() => {
      const total = BUSINESS_DATA.testimonials.length;
      goToSlide((state.currentSlide + 1) % total);
    }, 6000);
  }

  function stopSlideAutoPlay() {
    if (state.slideInterval) {
      clearInterval(state.slideInterval);
      state.slideInterval = null;
    }
  }

  // --------------------------------------------------------------------------
  // Sticky Navbar on Scroll
  // --------------------------------------------------------------------------
  function initNavbarScroll() {
    if (!DOM.siteHeader) return;

    const handleScroll = () => {
      if (window.scrollY > 40) {
        DOM.siteHeader.classList.add('scrolled');
      } else {
        DOM.siteHeader.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // --------------------------------------------------------------------------
  // Mobile Hamburger Drawer
  // --------------------------------------------------------------------------
  function initMobileDrawer() {
    if (!DOM.mobileMenuBtn || !DOM.mobileDrawer) return;

    const toggleDrawer = () => {
      const isOpen = DOM.mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    };

    const openDrawer = () => {
      DOM.mobileDrawer.classList.add('open');
      DOM.mobileMenuBtn.setAttribute('aria-expanded', 'true');
      DOM.mobileDrawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      DOM.mobileDrawer.classList.remove('open');
      DOM.mobileMenuBtn.setAttribute('aria-expanded', 'false');
      DOM.mobileDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    DOM.mobileMenuBtn.addEventListener('click', toggleDrawer);

    // Close mobile drawer when any link is clicked
    DOM.mobileNavLinks.forEach((link) => {
      link.addEventListener('click', closeDrawer);
    });

    // Close when resizing to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992 && DOM.mobileDrawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  // --------------------------------------------------------------------------
  // Scroll Reveal Animations (IntersectionObserver)
  // --------------------------------------------------------------------------
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('active'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => observer.observe(el));
  }

  // --------------------------------------------------------------------------
  // Animated Counters
  // --------------------------------------------------------------------------
  function initCounters() {
    const counterElements = document.querySelectorAll('.counter');
    if (!counterElements.length) return;

    const animateCounters = () => {
      counterElements.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        const duration = 1600; // 1.6 seconds
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          // Easing: easeOutExpo
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentVal = Math.floor(easeProgress * target);

          counter.textContent = currentVal;

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            counter.textContent = target;
          }
        };

        requestAnimationFrame(updateCount);
      });
    };

    if (!('IntersectionObserver' in window)) {
      animateCounters();
      return;
    }

    const statsBanner = document.querySelector('.stats-banner');
    if (!statsBanner) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !state.hasCountedStats) {
          state.hasCountedStats = true;
          animateCounters();
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    observer.observe(statsBanner);
  }

  // --------------------------------------------------------------------------
  // Booking Form Validation & WhatsApp Handshake
  // --------------------------------------------------------------------------
  function initBookingForm() {
    if (!DOM.bookingForm) return;

    const fields = {
      name: document.getElementById('farmerName'),
      phone: document.getElementById('farmerPhone'),
      village: document.getElementById('farmerVillage'),
      service: document.getElementById('serviceType'),
      land: document.getElementById('landSize'),
      date: document.getElementById('serviceDate'),
      message: document.getElementById('farmerMessage')
    };

    // Remove error class upon typing/change
    Object.values(fields).forEach((input) => {
      if (!input) return;
      input.addEventListener('input', () => input.classList.remove('error'));
      input.addEventListener('change', () => input.classList.remove('error'));
    });

    DOM.bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      if (!fields.name.value.trim()) {
        fields.name.classList.add('error');
        isValid = false;
      }

      // Validate Phone (10 digits)
      const phoneRegex = /^[0-9]{10}$/;
      const cleanedPhone = fields.phone.value.replace(/[^0-9]/g, '');
      if (!phoneRegex.test(cleanedPhone)) {
        fields.phone.classList.add('error');
        isValid = false;
      }

      // Validate Village
      if (!fields.village.value.trim()) {
        fields.village.classList.add('error');
        isValid = false;
      }

      // Validate Service Type
      if (!fields.service.value) {
        fields.service.classList.add('error');
        isValid = false;
      }

      // Validate Land Size
      const landVal = parseFloat(fields.land.value);
      if (isNaN(landVal) || landVal <= 0) {
        fields.land.classList.add('error');
        isValid = false;
      }

      // Validate Date
      if (!fields.date.value) {
        fields.date.classList.add('error');
        isValid = false;
      }

      if (!isValid) {
        // Scroll to the first error element
        const firstError = DOM.bookingForm.querySelector('.form-control.error');
        if (firstError) {
          firstError.focus();
        }
        return;
      }

      // Successful Form Submission Handler
      handleSuccessfulBooking(fields);
    });

    if (DOM.resetBookingBtn) {
      DOM.resetBookingBtn.addEventListener('click', () => {
        DOM.bookingForm.reset();
        initMinBookingDate();
        DOM.formSuccessAlert.classList.remove('show');
        DOM.bookingForm.style.display = 'block';
      });
    }
  }

  function handleSuccessfulBooking(fields) {
    const isTamil = state.currentLanguage === 'ta';
    const bookingRef = 'TS-' + Math.floor(1000 + Math.random() * 9000);

    const bookingData = {
      refId: bookingRef,
      farmerName: fields.name.value.trim(),
      phone: fields.phone.value.trim(),
      village: fields.village.value.trim(),
      service: fields.service.options[fields.service.selectedIndex].text,
      serviceKey: fields.service.value,
      landAcres: fields.land.value.trim(),
      preferredDate: fields.date.value,
      notes: fields.message ? fields.message.value.trim() : ''
    };

    /* ========================================================================
       BACKEND / GOOGLE SHEETS / API INTEGRATION HOOK
       To store submissions in Google Sheets or backend database:
       
       fetch('YOUR_WEBHOOK_URL_HERE', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(bookingData)
       }).catch(err => console.log('Booking logged locally'));
       ======================================================================== */

    // Build pre-filled WhatsApp message
    const waText = 
`*New Tractor Booking Request*
--------------------------------
*Ref No:* ${bookingData.refId}
*Farmer Name:* ${bookingData.farmerName}
*Phone:* ${bookingData.phone}
*Village:* ${bookingData.village}
*Service:* ${bookingData.service}
*Land Size:* ${bookingData.landAcres} Acres
*Preferred Date:* ${bookingData.preferredDate}
${bookingData.notes ? `*Notes:* ${bookingData.notes}` : ''}
--------------------------------
Please confirm tractor arrival time.`;

    const encodedWaText = encodeURIComponent(waText);
    const waUrl = `https://wa.me/${BUSINESS_DATA.business.whatsappRaw}?text=${encodedWaText}`;

    if (DOM.waDirectSendBtn) {
      DOM.waDirectSendBtn.href = waUrl;
    }

    if (DOM.successMessageText) {
      DOM.successMessageText.innerHTML = isTamil
        ? `நன்றி <strong>${bookingData.farmerName}</strong>! உங்கள் முன்பதிவு எண் <strong>${bookingData.refId}</strong>. நாங்கள் விரைவில் உங்கள் கைபேசி எண் <strong>${bookingData.phone}</strong>-க்கு அழைக்கிறோம்.`
        : `Thank you <strong>${bookingData.farmerName}</strong>! Your booking reference is <strong>#${bookingData.refId}</strong>. We will call you shortly on <strong>${bookingData.phone}</strong>.`;
    }

    // Hide form and show success notification
    DOM.bookingForm.style.display = 'none';
    DOM.formSuccessAlert.classList.add('show');
    DOM.formSuccessAlert.scrollIntoView({ behavior: 'smooth' });
  }

  // --------------------------------------------------------------------------
  // Button Ripple Effect
  // --------------------------------------------------------------------------
  function initRippleEffect() {
    document.addEventListener('click', (e) => {
      const button = e.target.closest('.btn-ripple');
      if (!button) return;

      const circle = document.createElement('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      const rect = button.getBoundingClientRect();
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.classList.add('ripple');

      const existingRipple = button.querySelector('.ripple');
      if (existingRipple) {
        existingRipple.remove();
      }

      button.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, 600);
    });
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

