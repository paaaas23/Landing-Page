/**
 * Tractor Services - Business Configuration & Sample Data
 * Easily edit this file to customize the business name, contact info, services, and pricing.
 */

const BUSINESS_DATA = {
  // Business Branding & Identity
  business: {
    ownerName: "Kandasamy", // Father's Name
    businessName: "Kandasamy Tractor Services",
    tagline: "Reliable Tractor Services for Every Farmer",
    taglineTamil: "ஒவ்வொரு விவசாயிக்கும் நம்பகமான டிராக்டர் சேவைகள்",
    subtext: "8+ Years of trusted service in Salem, Attur, Omalur & nearby villages. Fast, affordable & on-time field operations with modern tractor attachments.",
    subtextTamil: "சேலம், ஆத்தூர், ஓமலூர் மற்றும் சுற்றுவட்டார கிராமங்களில் 8+ ஆண்டுகால நம்பகமான சேவை. நியாயமான கட்டணத்தில் துல்லியமான களப்பணி.",
    phone: "+91 98765 43210",
    phoneRaw: "919876543210",
    whatsapp: "+91 98765 43210",
    whatsappRaw: "919876543210",
    email: "tractor@example.com",
    address: "Main Road, Near Agri Cooperative Society, Salem, Tamil Nadu - 636001",
    workingHours: "6:00 AM to 7:00 PM, All 7 Days",
    workingHoursTamil: "காலை 6:00 மணி முதல் இரவு 7:00 மணி வரை (வாரத்தின் அனைத்து நாட்களும்)",
    experienceYears: "8+",
    acresServed: "500+",
    farmersCount: "150+",
    servicesCount: "6"
  },

  // Services offered with pricing and attachment details
  services: [
    {
      id: "ploughing",
      name: "Ploughing (Deep Tilth)",
      nameTamil: "ஆழ உழவு (Ploughing)",
      icon: "assets/icons/plough.svg",
      price: "Rs. 800",
      rateText: "Rs.800 per hour",
      rateTextTamil: "ரூ.800 / மணிநேரம்",
      unit: "per hour",
      unitTamil: "மணிநேரம்",
      badge: "Popular",
      shortDesc: "Deep disc and mouldboard ploughing to turn soil, eradicate weed roots, and improve soil aeration.",
      shortDescTamil: "மண்ணை ஆழமாக கிளறி வேர்களை அழிக்கவும், மண்ணின் காற்றோட்டத்தை அதிகரிக்கவும் கூடிய ஆழ உழவு.",
      features: [
        "Heavy-duty disc plough",
        "Deep 12-16 inch root penetration",
        "Ideal for pre-monsoon field prep"
      ],
      featuresTamil: [
        "சக்திவாய்ந்த டிஸ்க் கலப்பை",
        "12-16 அங்குல ஆழமான உழவு",
        "பருவமழைக்கு முந்தைய நில தயாரிப்பு"
      ]
    },
    {
      id: "rotavator",
      name: "Rotavator / Tilling",
      nameTamil: "ரோட்டவேட்டர் / சுழல் உழவு",
      icon: "assets/icons/rotavator.svg",
      price: "Rs. 1,000",
      rateText: "Rs.1,000 per hour",
      rateTextTamil: "ரூ.1,000 / மணிநேரம்",
      unit: "per hour",
      unitTamil: "மணிநேரம்",
      badge: "High Demand",
      shortDesc: "High-speed rotary tilling to crush clods into fine, soft seedbed ready for immediate sowing.",
      shortDescTamil: "கட்டிகளை உடைத்து மண்ணை மிருதுவாக்கி உடனே விதைக்க ஏதுவான மிகச்சிறந்த சுழல் உழவு.",
      features: [
        "42-blade heavy rotor",
        "Fine pulverisation in single pass",
        "Saves 40% time & labour"
      ],
      featuresTamil: [
        "42 பிளேடு கொண்ட ரோட்டார்",
        "ஒரே சுற்றில் மென்மையான விதைப்படுகை",
        "40% நேரம் & கூலி மிச்சம்"
      ]
    },
    {
      id: "seed-sowing",
      name: "Seed Sowing & Bedding",
      nameTamil: "விதைத்தல் & பாத்தி அமைத்தல்",
      icon: "assets/icons/seed.svg",
      price: "Rs. 700",
      rateText: "Rs.700 per acre",
      rateTextTamil: "ரூ.700 / ஏக்கர்",
      unit: "per acre",
      unitTamil: "ஏக்கர்",
      badge: "Economical",
      shortDesc: "Uniform seed drilling and simultaneous ridge/furrow formation for maximum germination yield.",
      shortDescTamil: "சமச்சீர் இடைவெளியில் சீரான விதைப்பு மற்றும் பாத்தி அமைத்து அதிக முளைப்புத்திறன் தரும்.",
      features: [
        "Calibrated seed spacing",
        "Simultaneous bed formation",
        "Cuts seed wastage up to 30%"
      ],
      featuresTamil: [
        "சீரான விதை இடைவெளி",
        "பாத்தி மற்றும் பாசனக்கால் அமைப்பு",
        "விதை விரயம் 30% குறையும்"
      ]
    },
    {
      id: "harvesting",
      name: "Harvesting Assistance",
      nameTamil: "அறுவடை பணிகள் (Harvesting)",
      icon: "assets/icons/harvester.svg",
      price: "Rs. 1,500",
      rateText: "Rs.1,500 per acre",
      rateTextTamil: "ரூ.1,500 / ஏக்கர்",
      unit: "per acre",
      unitTamil: "ஏக்கர்",
      badge: "Fast & Clean",
      shortDesc: "Mechanised harvesting and crop gathering for paddy, groundnut, millets, and maize.",
      shortDescTamil: "நெல், நிலக்கடலை, சோளம் மற்றும் தானியங்களுக்கான விரைவான அறுவடை இயந்திர உதவி.",
      features: [
        "Minimal grain shattering loss",
        "Cleans up crop stubble fast",
        "Emergency same-day availability"
      ],
      featuresTamil: [
        "தானிய விரயம் இன்றி சுத்தமான அறுவடை",
        "அறுவடை தாள்களை விரைவாக நீக்குதல்",
        "அவசர தேவைக்கு உடனே கிடைக்கும்"
      ]
    },
    {
      id: "trolley-transport",
      name: "Trolley / Farm Transport",
      nameTamil: "டிராலி போக்குவரத்து (Trolley)",
      icon: "assets/icons/trailer.svg",
      price: "Rs. 600",
      rateText: "Rs.600 per trip",
      rateTextTamil: "ரூ.600 / ஒரு பயணம்",
      unit: "per trip",
      unitTamil: "பயணம்",
      badge: "Heavy Load",
      shortDesc: "Safe haulage of harvested yield, manure, fertilizers, sugarcane, and agri goods to mandis/yards.",
      shortDescTamil: "அறுவடை விளைபொருட்கள், உரம், கரும்பு மற்றும் விவசாய சரக்குகளை சந்தை மற்றும் கிடங்குகளுக்கு கொண்டு செல்ல.",
      features: [
        "Hydraulic tipping trailer",
        "Up to 5 tonnes load capacity",
        "Careful driving on narrow farm tracks"
      ],
      featuresTamil: [
        "ஹைட்ராலிக் டிப்பிங் டிராலி",
        "5 டன் வரை பாரம் தாங்கும் திறன்",
        "வயல் வரப்பு வழிகளிலும் பாதுகாப்பான ஓட்டல்"
      ]
    },
    {
      id: "land-levelling",
      name: "Land Levelling",
      nameTamil: "நிலம் சமன் செய்தல் (Levelling)",
      icon: "assets/icons/leveller.svg",
      price: "Rs. 900",
      rateText: "Rs.900 per hour",
      rateTextTamil: "ரூ.900 / மணிநேரம்",
      unit: "per hour",
      unitTamil: "மணிநேரம்",
      badge: "Water Saver",
      shortDesc: "Grading and smoothing field contours to ensure uniform irrigation water distribution.",
      shortDescTamil: "நிலத்தை ஒரே மட்டமாக சமன் செய்து பாசன நீர் சீராகவும் விரைவாகவும் பாய உதவி செய்கிறது.",
      features: [
        "Heavy scraper levelling blade",
        "Prevents water stagnation pockets",
        "Saves up to 25% irrigation water"
      ],
      featuresTamil: [
        "கனரக சமன்படுத்தும் பிளேடு",
        "தண்ணீர் தேங்கும் மேடு பள்ளங்கள் தவிர்ப்பு",
        "25% பாசன நீர் சேமிப்பு"
      ]
    }
  ],

  // 3-step workflow
  howItWorks: [
    {
      step: 1,
      title: "Choose Your Service",
      titleTamil: "சேவையை தேர்ந்தெடுக்கவும்",
      desc: "Select the attachment needed for your crop season (Ploughing, Rotavator, Sowing, Harvesting, or Trolley).",
      descTamil: "உங்கள் பயிர் சாகுபடிக்கு தேவையான சேவையை (உழவு, ரோட்டவேட்டர், விதைப்பு, அறுவடை அல்லது டிராலி) தேர்வு செய்யுங்கள்.",
      icon: "🚜"
    },
    {
      step: 2,
      title: "Contact Directly",
      titleTamil: "எங்களை தொடர்பு கொள்ளவும்",
      desc: "Call, WhatsApp us directly, or submit the simple 30-second booking form with your village name.",
      descTamil: "தொலைபேசி, வாட்ஸ்அப் அல்லது 30-வினாடி முன்பதிவு படிவம் வழியாக உங்கள் ஊர் பெயரை தெரிவித்து தொடர்பு கொள்ளுங்கள்.",
      icon: "📞"
    },
    {
      step: 3,
      title: "Service at Your Farm",
      titleTamil: "உங்கள் வயலில் துரித சேவை",
      desc: "Our well-maintained tractor and experienced operator arrive right at your farm on schedule.",
      descTamil: "குறிப்பிட்ட நேரத்தில் எங்கள் நவீன டிராக்டர் மற்றும் அனுபவமிக்க ஓட்டுநர் உங்கள் வயலுக்கே வந்து பணியை முடிப்பர்.",
      icon: "🌾"
    }
  ],

  // Why choose us stats
  stats: [
    {
      value: 500,
      suffix: "+",
      label: "Acres Served",
      labelTamil: "ஏக்கர் விளைநில பணிகள்",
      icon: "🌱"
    },
    {
      value: 150,
      suffix: "+",
      label: "Happy Farmers",
      labelTamil: "மகிழ்ச்சியான விவசாயிகள்",
      icon: "👨‍🌾"
    },
    {
      value: 8,
      suffix: "+",
      label: "Years Experience",
      labelTamil: "ஆண்டுகள் நேரடி அனுபவம்",
      icon: "⭐"
    },
    {
      value: 6,
      suffix: "",
      label: "Farm Services",
      labelTamil: "சிறப்பு விவசாய சேவைகள்",
      icon: "🚜"
    }
  ],

  // Why Choose Us Key Advantages
  advantages: [
    {
      title: "Fair & Transparent Rates",
      titleTamil: "நியாயமான வெளிப்படையான கட்டணம்",
      desc: "Fixed hourly and acre rates with no hidden fuel surcharges or surprise costs.",
      descTamil: "மறைமுக கட்டணங்கள் ஏதுமின்றி வெளிப்படையான மணிநேரம் / ஏக்கர் கட்டண முறை.",
      icon: "💰"
    },
    {
      title: "100% On-Time Arrival",
      titleTamil: "சரியான நேரத்திற்கு வருகை",
      desc: "We understand farming depends on seasons and weather. When we commit, we show up on time.",
      descTamil: "விவசாயத்திற்கு பருவ காலமும் நேரமும் முக்கியம் என்பதை உணர்ந்து குறித்த நேரத்தில் வருகிறோம்.",
      icon: "⏰"
    },
    {
      title: "50 HP Modern Tractor",
      titleTamil: "நவீன 50 HP சக்திவாய்ந்த டிராக்டர்",
      desc: "Heavy-duty, regularly serviced machine with latest hydraulic attachments for zero breakdowns.",
      descTamil: "வழக்கமான பராமரிப்புடன் புதிய கருவிகளுடன் பழுதில்லாமல் முழுத்திறனுடன் இயங்கும் இயந்திரம்.",
      icon: "⚙️"
    },
    {
      title: "Skilled Native Operator",
      titleTamil: "அனுபவம் வாய்ந்த உள்ளூர் ஓட்டுநர்",
      desc: "8+ years experienced driver who understands local soil types, slope grading, and crop safety.",
      descTamil: "உள்ளூர் மண் வகை, சரிவு மற்றும் பயிர் நுணுக்கங்களை நன்கு அறிந்த 8+ ஆண்டுகள் அனுபவமுள்ள ஓட்டுநர்.",
      icon: "🛡️"
    }
  ],

  // Gallery Items
  gallery: [
    {
      id: "gal-1",
      title: "Deep Furrow Ploughing",
      titleTamil: "ஆழ உழவு பணி",
      category: "Ploughing",
      categoryTamil: "உழவு",
      image: "assets/images/gallery-ploughing.svg",
      caption: "High-power disc ploughing preparing soil before paddy season in Salem."
    },
    {
      id: "gal-2",
      title: "Rotavator Soft Soil Bed",
      titleTamil: "ரோட்டவேட்டர் சுழல் உழவு",
      category: "Tilling",
      categoryTamil: "ரோட்டவேட்டர்",
      image: "assets/images/gallery-rotavator.svg",
      caption: "Single-pass rotavator pulverising soil into silky smooth nursery bed."
    },
    {
      id: "gal-3",
      title: "Uniform Seed Sowing",
      titleTamil: "சீரான விதைப்பு பணி",
      category: "Sowing",
      categoryTamil: "விதைத்தல்",
      image: "assets/images/gallery-seedsowing.svg",
      caption: "Precision seed drilling with calibrated distance in maize and millet fields."
    },
    {
      id: "gal-4",
      title: "Crop Harvesting in Action",
      titleTamil: "தானிய அறுவடை பணி",
      category: "Harvesting",
      categoryTamil: "அறுவடை",
      image: "assets/images/gallery-harvesting.svg",
      caption: "Rapid, clean crop gathering during peak harvest window without loss."
    },
    {
      id: "gal-5",
      title: "Farm Trolley Haulage",
      titleTamil: "டிராலி சரக்கு போக்குவரத்து",
      category: "Transport",
      categoryTamil: "போக்குவரத்து",
      image: "assets/images/gallery-trolley.svg",
      caption: "Safe produce transportation from farm boundary directly to local mandi."
    },
    {
      id: "gal-6",
      title: "Maintained 50 HP Tractor",
      titleTamil: "பராமரிக்கப்படும் 50 HP டிராக்டர்",
      category: "Equipment",
      categoryTamil: "இயந்திரம்",
      image: "assets/images/gallery-tractor-main.svg",
      caption: "Clean, serviced tractor engine and greased hydraulic hitch ready for work."
    }
  ],

  // Real Farmer Testimonials
  testimonials: [
    {
      id: 1,
      name: "Murugan",
      location: "Salem",
      villageTamil: "சேலம்",
      quote: "Came on time and finished my 3 acres in one day. Very fair price.",
      quoteTamil: "சொன்ன நேரத்திற்கு சரியாக வந்து 3 ஏக்கர் வேலையையும் ஒரே நாளில் முடித்துக் கொடுத்தார். மிகவும் நியாயமான கட்டணம்.",
      rating: 5,
      acres: "3 Acres Ploughed",
      service: "Ploughing"
    },
    {
      id: 2,
      name: "Selvi",
      location: "Attur",
      villageTamil: "ஆத்தூர்",
      quote: "Very helpful and polite. The rotavator work was excellent.",
      quoteTamil: "மிகவும் மரியாதையுடனும் அன்பாகவும் பழகினார். ரோட்டவேட்டர் வேலை மிக நேர்த்தியாகவும் மண்ணை மென்மையாகவும் செய்தது.",
      rating: 5,
      acres: "2.5 Acres Tilled",
      service: "Rotavator"
    },
    {
      id: 3,
      name: "Ravi",
      location: "Omalur",
      villageTamil: "ஓமலூர்",
      quote: "Booked on WhatsApp and got service the next morning.",
      quoteTamil: "வாட்ஸ்அப்பில் விவரங்களை அனுப்பினேன், அடுத்த நாள் காலையிலேயே வயலுக்கு வந்து வேலையைத் துவங்கி விட்டார்.",
      rating: 5,
      acres: "4 Acres Sowing",
      service: "Seed Sowing"
    },
    {
      id: 4,
      name: "Palanisamy",
      location: "Mecheri",
      villageTamil: "மேச்சேரி",
      quote: "The driver knows how to handle wet clay soil without getting stuck. Highly recommended for all farmers.",
      quoteTamil: "ஈர நிலத்திலும் டிராக்டர் மாட்டிக்கொள்ளாமல் லாவகமாக ஓட்டுகிறார். அனைத்து விவசாயிகளுக்கும் என் மனமார்ந்த பரிந்துரை.",
      rating: 5,
      acres: "5 Acres Levelling",
      service: "Land Levelling"
    }
  ]
};

// Freeze data to prevent accidental mutations
Object.freeze(BUSINESS_DATA);

