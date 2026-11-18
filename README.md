# 🚜 Kandasamy Tractor Services - Landing Page

A modern, lightweight, fully responsive landing page built with semantic HTML5, CSS3, and vanilla JavaScript for a tractor rental and agricultural field service business. Designed specifically with Indian farmers in mind: high contrast, fast loading on mobile networks (2G/3G/4G), large easy-to-tap touch targets, bilingual English & தமிழ் support, and instant WhatsApp booking integration.

---

## 🌟 Key Features

1. **Agricultural Design & Color Palette**:
   - Primary Green: `#2E7D32` (lush crop fields)
   - Earth Brown: `#5D4037` (fertile ploughed soil)
   - Warm Yellow Accent: `#FBC02D` / `#FFA000` (golden harvest crops)
   - High contrast text (`#1C281C`) for outdoor readability in direct sunlight.
   - Clean Google Fonts typography: **Poppins** (headings) + **Inter** (body text).

2. **Mobile-First & Ultra Responsive**:
   - Tested across mobile (360px, 375px), tablet (768px), and desktop (1440px).
   - Fixed floating bottom action bar on mobile with large touch-friendly **Call Now** and **WhatsApp** buttons.
   - Mobile slide-in drawer with hamburger toggle.
   - Sticky navbar with background blur and elevation shadow on scroll.

3. **Complete Agricultural Sections**:
   - **Hero Section**: Full-screen tractor landscape, high-impact headline, trust badges, and quick CTA buttons.
   - **Animated Divider**: Moving tractor icon driving across the field divider.
   - **Services (6 Attachments)**: Ploughing (Rs.800/hr), Rotavator (Rs.1,000/hr), Seed Sowing (Rs.700/acre), Harvesting (Rs.1,500/acre), Trolley Transport (Rs.600/trip), and Land Levelling (Rs.900/hr). Each service has a "Book This Service" button that smoothly scrolls and pre-selects the dropdown in the booking form.
   - **How It Works**: 3-step farmer-friendly guide (Choose Service -> Contact Directly -> Service at Your Farm).
   - **Why Choose Us**: Animated statistical counters (500+ Acres, 150+ Happy Farmers, 8+ Years, 6 Attachments) with IntersectionObserver + 4 trust pillars.
   - **Photo Gallery with Lightbox**: Interactive grid of operations with modal preview, next/prev navigation, touch swipe, and keyboard controls (Escape, Left/Right arrows).
   - **Testimonials Slider**: Verified farmer reviews (Murugan from Salem, Selvi from Attur, Ravi from Omalur) with touch swipe, autoplay, and indicator dots.
   - **Booking & Contact Form**: Full validation (name, 10-digit mobile, village, service, acres, preferred date). Upon submission, generates a reference ID and creates a one-click **"Send Details via WhatsApp"** link pre-filled with all details!
   - **Bilingual English & தமிழ்**: Instant one-click language toggle in header.

4. **Performance & Accessibility**:
   - Zero framework dependencies (Pure Vanilla HTML/CSS/JS).
   - Crisp SVG illustrations and icons for instant offline-first rendering.
   - Respects `prefers-reduced-motion: reduce`.
   - Accessible ARIA labels and skip navigation link.

---

## 📁 Project Structure

```text
Landing Page/
├── index.html                   # Main HTML structure with semantic sections
├── css/
│   └── style.css                # Custom properties, layout, animations & media queries
├── js/
│   ├── data.js                  # Central configuration & sample data (Services, Reviews, Stats)
│   └── main.js                  # Interactive logic: i18n, slider, lightbox, counters, validation
├── assets/
│   ├── icons/                   # Custom agricultural SVG icons
│   │   ├── tractor.svg
│   │   ├── plough.svg
│   │   ├── rotavator.svg
│   │   ├── seed.svg
│   │   ├── harvester.svg
│   │   ├── trailer.svg
│   │   └── leveller.svg
│   └── images/                  # High-resolution SVG illustrations & gallery photos
│       ├── hero-bg.svg
│       ├── gallery-ploughing.svg
│       ├── gallery-rotavator.svg
│       ├── gallery-seedsowing.svg
│       ├── gallery-harvesting.svg
│       ├── gallery-trolley.svg
│       └── gallery-tractor-main.svg
└── README.md                    # Project documentation & editing guide
```

---

## 🚀 How to Run the Project

No build step or package installations required! You can run it in multiple ways:

### Option 1: Direct File Open
Simply double-click `index.html` in your file explorer to open it in Chrome, Edge, Safari, or Firefox.

### Option 2: Using Node.js (Recommended)
From the project folder, run:
```bash
npx serve .
# or
npx http-server .
```
Then open `http://localhost:3000` (or the port shown in your terminal).

### Option 3: VS Code Live Server
1. Open this folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and click **"Open with Live Server"**.

---

## ✏️ How to Edit Sample Data & Customize

All business information, service offerings, prices, and reviews are cleanly separated in `js/data.js`.

### 1. Change Father's Name & Business Details
Open `js/data.js` and edit the `business` object:
```javascript
business: {
  ownerName: "Your Father's Name",            // e.g. "Arunachalam"
  businessName: "Arunachalam Tractor Services",
  phone: "+91 98765 43210",                  // Formatted phone
  phoneRaw: "919876543210",                  // 10-12 digits without spaces for tel: links
  whatsapp: "+91 98765 43210",
  whatsappRaw: "919876543210",              // For WhatsApp direct links
  email: "tractor@example.com",
  address: "Your Village / Town Address, Tamil Nadu",
  workingHours: "6:00 AM to 7:00 PM, All 7 Days"
}
```

### 2. Update Service Pricing
In `js/data.js`, modify any service in the `services` array:
```javascript
{
  id: "ploughing",
  name: "Ploughing (Deep Tilth)",
  nameTamil: "ஆழ உழவு (Ploughing)",
  price: "Rs. 800",
  rateText: "Rs.800 per hour",
  rateTextTamil: "ரூ.800 / மணிநேரம்",
  // ...
}
```

### 3. Edit Farmer Testimonials
In `js/data.js`, customize reviews under `testimonials`:
```javascript
{
  id: 1,
  name: "Murugan",
  location: "Salem",
  quote: "Came on time and finished my 3 acres in one day. Very fair price.",
  quoteTamil: "சொன்ன நேரத்திற்கு சரியாக வந்து 3 ஏக்கர் வேலையையும் ஒரே நாளில் முடித்துக் கொடுத்தார்.",
  rating: 5,
  acres: "3 Acres Ploughed",
  service: "Ploughing"
}
```

---

## 🔗 How to Connect a Real Backend or Google Sheets

In `js/main.js`, locate the `handleSuccessfulBooking` function (around line 430). You can send the booking data directly to a Google Sheet using **Google Apps Script** or any webhook:

```javascript
// Send data to Google Sheets Webhook or backend API
fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
  method: 'POST',
  mode: 'no-cors',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(bookingData)
}).then(() => {
  console.log('Booking saved to Google Sheets');
});
```

The system also automatically formats and opens a direct **WhatsApp message** with the customer's exact details, so you never miss an inquiry even without a backend!

---

## 📱 Browser Compatibility
- Tested and compatible with Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, and mobile browsers on Android & iOS.
- Full responsive support down to 360px mobile viewports.

