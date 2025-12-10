export interface Product {
  id: string
  title: string
  description: string
  fullDescription: string
  image: string
  category: string
  features: string[]
  specs: {
    label: string
    value: string
  }[]
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
  productCount: number
}

export const categories: Category[] = [
  {
    id: "hardness-testing",
    name: "Tablet Hardness Testers",
    description: "Precision instruments for measuring tablet hardness and breaking force with digital accuracy",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Tablet-Hardness-tester-HTDS-3P-1765309529716.jpg?width=800&height=800&resize=contain",
    productCount: 3
  },
  {
    id: "friability-testing",
    name: "Tablet Friability Testers",
    description: "Equipment for testing tablet durability and resistance to abrasion per USP standards",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Tablet-Friability-Tester-RFT-2P-1765309534626.jpg?width=800&height=800&resize=contain",
    productCount: 2
  },
  {
    id: "disintegration-testing",
    name: "Disintegration Testers",
    description: "Testing equipment for measuring tablet and suppository disintegration time",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    productCount: 4
  },
  {
    id: "dissolution-testing",
    name: "Dissolution Testers",
    description: "Advanced apparatus for pharmaceutical dissolution testing with multi-station capability",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Tablet-Dissolution-Tester-RLTDT-08LM-1765309530109.jpg?width=800&height=800&resize=contain",
    productCount: 2
  },
  {
    id: "powder-testing",
    name: "Powder Testing Instruments",
    description: "Comprehensive tools for powder characterization including sieve shakers and flow testers",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Tapped-density-apparatus-TD-2-1765309534777.jpg?width=800&height=800&resize=contain",
    productCount: 5
  },
  {
    id: "packaging-integrity",
    name: "Leak Test Apparatus",
    description: "Equipment for testing package seals and container integrity using bubble emission method",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Lacquer-Porosity-Tester-RLT-10BE-1765309534238.jpg?width=800&height=800&resize=contain",
    productCount: 3
  },
  {
    id: "analytical-instruments",
    name: "Analytical Instruments",
    description: "Antibiotic zone readers, melting point apparatus, and boiling point testers",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    productCount: 4
  }
]

export const products: Product[] = [
  // HARDNESS TESTING INSTRUMENTS
  {
    id: "rpht-1p",
    title: "Manual Hardness Tester RPHT-1P",
    description: "Reliable manual hardness tester for precise tablet breaking force measurement",
    fullDescription: "The Manual Hardness Tester RPHT-1P from Raise Lab Equipment is designed for accurate measurement of tablet hardness and breaking force. This robust instrument provides reliable results with its precision mechanism and easy-to-read display. Ideal for quality control laboratories in pharmaceutical manufacturing.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Tablet-Hardness-tester-HTDS-3P-1765309529716.jpg?width=800&height=800&resize=contain",
    category: "hardness-testing",
    features: [
      "Precision measurement of tablet breaking force",
      "Easy-to-read analog or digital display",
      "Durable construction for long-term use",
      "Simple manual operation",
      "Adjustable jaw design for various tablet sizes",
      "Compliant with USP, BP, EP, and IP standards",
      "Portable and compact design",
      "Low maintenance requirements"
    ],
    specs: [
      { label: "Measurement Range", value: "0-30 kg/cm²" },
      { label: "Accuracy", value: "±1%" },
      { label: "Display Type", value: "Analog/Digital" },
      { label: "Power Supply", value: "Manual operation" },
      { label: "Dimensions", value: "250 x 150 x 300 mm" },
      { label: "Weight", value: "5 kg" }
    ]
  },
  {
    id: "htds-1p",
    title: "Digital Tablet Hardness Tester HTDS-1P",
    description: "Digital tablet hardness tester with advanced features and precise measurements",
    fullDescription: "The Digital Tablet Hardness Tester HTDS-1P from Raise Lab Equipment combines precision engineering with modern digital technology. This instrument offers accurate hardness testing with digital display, data storage capabilities, and user-friendly interface. Perfect for pharmaceutical QC laboratories requiring reliable and repeatable results.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Tablet-Hardness-tester-HTDS-3P-1765309529716.jpg?width=800&height=800&resize=contain",
    category: "hardness-testing",
    features: [
      "Digital display with backlight",
      "Data storage and retrieval",
      "Statistical analysis functions",
      "Multiple unit display (kg, N, kP)",
      "Auto-detection of tablet thickness and diameter",
      "Peak hold function",
      "USB connectivity for data transfer",
      "GMP compliant design"
    ],
    specs: [
      { label: "Measurement Range", value: "0-200 N" },
      { label: "Accuracy", value: "±0.5%" },
      { label: "Display Resolution", value: "0.1 N" },
      { label: "Power Supply", value: "AC 220V, 50Hz" },
      { label: "Data Storage", value: "Up to 1000 readings" },
      { label: "Dimensions", value: "300 x 200 x 350 mm" }
    ]
  },
  {
    id: "htds-3p",
    title: "Multi-Station Hardness Tester HTDS-3P",
    description: "Advanced multi-station hardness tester for high-throughput testing",
    fullDescription: "The Multi-Station Hardness Tester HTDS-3P from Raise Lab Equipment is a sophisticated instrument designed for high-volume testing environments. With three testing stations, automated operations, and comprehensive data management, this system significantly increases laboratory productivity while maintaining exceptional accuracy.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Tablet-Hardness-tester-HTDS-3P-1765309529716.jpg?width=800&height=800&resize=contain",
    category: "hardness-testing",
    features: [
      "Three independent testing stations",
      "Automated sample loading",
      "Touchscreen interface",
      "Real-time data analysis",
      "Network connectivity",
      "Automated report generation",
      "Calibration reminder system",
      "21 CFR Part 11 compliant software"
    ],
    specs: [
      { label: "Testing Stations", value: "3 stations" },
      { label: "Measurement Range", value: "0-300 N" },
      { label: "Accuracy", value: "±0.3%" },
      { label: "Testing Speed", value: "Up to 180 tablets/hour" },
      { label: "Display", value: "10-inch touchscreen" },
      { label: "Power Supply", value: "AC 220V, 50/60Hz" }
    ]
  },
  // FRIABILITY TESTING INSTRUMENTS
  {
    id: "rft-1v",
    title: "Single Drum Friability Tester RFT-1V",
    description: "Single drum friability tester for standard tablet durability testing",
    fullDescription: "The Single Drum Friability Tester RFT-1V from Raise Lab Equipment features one testing drum for efficient testing of tablet formulations. This instrument accurately measures the resistance of tablets to abrasion and mechanical stress per USP <1216> standards.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Tablet-Friability-Tester-RFT-2P-1765309534626.jpg?width=800&height=800&resize=contain",
    category: "friability-testing",
    features: [
      "Single drum design for standard testing",
      "Precise rotation speed control at 25 rpm",
      "Digital timer with automatic stop",
      "Transparent acrylic drum for observation",
      "Programmable test cycles",
      "Noise-dampening operation",
      "Easy drum removal and cleaning",
      "Compliant with USP <1216>, EP <2.9.7>, JP <14>"
    ],
    specs: [
      { label: "Number of Drums", value: "1" },
      { label: "Drum Diameter", value: "283-291 mm" },
      { label: "Rotation Speed", value: "25 ± 1 rpm" },
      { label: "Timer Range", value: "1-999 minutes" },
      { label: "Power Supply", value: "AC 220V, 50Hz" },
      { label: "Dimensions", value: "400 x 250 x 350 mm" }
    ]
  },
  {
    id: "rft-2v",
    title: "Dual Drum Friability Tester RFT-2V",
    description: "Dual drum friability tester for comprehensive tablet durability testing",
    fullDescription: "The Dual Drum Friability Tester RFT-2V from Raise Lab Equipment features two independent testing drums for simultaneous testing of different formulations. This instrument accurately measures the resistance of tablets to abrasion and mechanical stress, ensuring product quality and stability.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Tablet-Friability-Tester-RFT-2P-1765309534626.jpg?width=800&height=800&resize=contain",
    category: "friability-testing",
    features: [
      "Dual drum design for parallel testing",
      "Precise rotation speed control",
      "Digital timer with automatic stop",
      "Transparent acrylic drums for observation",
      "Programmable test cycles",
      "Noise-dampening operation",
      "Easy drum removal and cleaning",
      "Compliant with USP, BP, EP, and IP standards"
    ],
    specs: [
      { label: "Number of Drums", value: "2" },
      { label: "Drum Diameter", value: "283-291 mm" },
      { label: "Rotation Speed", value: "25 ± 1 rpm" },
      { label: "Timer Range", value: "1-999 minutes" },
      { label: "Power Supply", value: "AC 220V, 50Hz" },
      { label: "Dimensions", value: "550 x 300 x 400 mm" }
    ]
  },
  // DISINTEGRATION TESTING INSTRUMENTS
  {
    id: "dt-4dd",
    title: "4-Station Disintegration Tester DT-4DD",
    description: "Four-station disintegration tester with digital temperature control",
    fullDescription: "The 4-Station Disintegration Tester DT-4DD from Raise Lab Equipment offers four independent testing stations with precise temperature control. This versatile instrument tests tablet disintegration time according to pharmacopoeia standards.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    category: "disintegration-testing",
    features: [
      "Four independent testing stations",
      "Digital temperature control and display",
      "Automatic basket oscillation",
      "Adjustable stroke length",
      "Built-in water bath",
      "Stainless steel construction",
      "Individual timing for each station",
      "Meets USP, BP, EP, and IP requirements"
    ],
    specs: [
      { label: "Test Stations", value: "4" },
      { label: "Temperature Range", value: "35-42°C" },
      { label: "Temperature Accuracy", value: "±0.5°C" },
      { label: "Stroke Length", value: "55 ± 2 mm" },
      { label: "Oscillation Rate", value: "30 ± 2 cycles/min" },
      { label: "Power Supply", value: "AC 220V, 50Hz" }
    ]
  },
  {
    id: "dt-2d",
    title: "2-Station Disintegration Tester DT-2D",
    description: "Compact two-station disintegration tester for routine testing",
    fullDescription: "The 2-Station Disintegration Tester DT-2D from Raise Lab Equipment is a compact and efficient instrument designed for routine disintegration testing. With two testing stations and user-friendly controls, it provides accurate results while maintaining a small laboratory footprint.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    category: "disintegration-testing",
    features: [
      "Two testing stations",
      "Compact design saves space",
      "Digital temperature controller",
      "Automatic stroke mechanism",
      "Easy-to-read LCD display",
      "Durable stainless steel basket",
      "Quick setup and operation",
      "Energy-efficient heating system"
    ],
    specs: [
      { label: "Test Stations", value: "2" },
      { label: "Temperature Range", value: "35-40°C" },
      { label: "Heating Time", value: "< 30 minutes" },
      { label: "Oscillation Frequency", value: "30 cycles/min" },
      { label: "Power Consumption", value: "800W" },
      { label: "Dimensions", value: "400 x 300 x 500 mm" }
    ]
  },
  {
    id: "adt-1d",
    title: "Automatic Disintegration Tester ADT-1D",
    description: "Fully automated disintegration tester with advanced features",
    fullDescription: "The Automatic Disintegration Tester ADT-1D from Raise Lab Equipment represents the latest in disintegration testing technology. Featuring fully automated operation, precise temperature control, and comprehensive data logging.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    category: "disintegration-testing",
    features: [
      "Fully automated operation",
      "Programmable test protocols",
      "Touchscreen interface",
      "Automatic endpoint detection",
      "Data logging and export",
      "Multi-language support",
      "Self-diagnostic functions",
      "Remote monitoring capability"
    ],
    specs: [
      { label: "Automation Level", value: "Fully automated" },
      { label: "Test Stations", value: "Single station" },
      { label: "Temperature Range", value: "20-45°C" },
      { label: "Temperature Precision", value: "±0.2°C" },
      { label: "Display", value: "7-inch touchscreen" },
      { label: "Data Storage", value: "10,000 test records" }
    ]
  },
  {
    id: "rsdt-3b",
    title: "Suppository Disintegration Tester RSDT-3B",
    description: "Specialized tester for suppository disintegration and melting time",
    fullDescription: "The Suppository Disintegration Tester RSDT-3B from Raise Lab Equipment is specifically designed for testing the disintegration and melting characteristics of suppositories.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    category: "disintegration-testing",
    features: [
      "Three testing positions",
      "Specialized suppository holders",
      "Precise temperature control",
      "Digital timer with alarm",
      "Clear viewing window",
      "Stainless steel water bath",
      "Easy cleaning and maintenance",
      "Pharmacopoeia compliant"
    ],
    specs: [
      { label: "Test Positions", value: "3" },
      { label: "Temperature Range", value: "35-39°C" },
      { label: "Temperature Stability", value: "±0.3°C" },
      { label: "Timer Range", value: "0-99 minutes" },
      { label: "Bath Capacity", value: "4 liters" },
      { label: "Power Supply", value: "AC 220V, 50Hz" }
    ]
  },
  // DISSOLUTION TESTING INSTRUMENTS
  {
    id: "rltdt-08lm",
    title: "8-Vessel Dissolution Tester RLTDT-08LM",
    description: "Eight-vessel dissolution tester with manual sampling capability",
    fullDescription: "The 8-Vessel Dissolution Tester RLTDT-08LM from Raise Lab Equipment is a robust eight-vessel system designed for comprehensive dissolution testing. With manual sampling and precise control of all test parameters.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Tablet-Dissolution-Tester-RLTDT-08LM-1765309530109.jpg?width=800&height=800&resize=contain",
    category: "dissolution-testing",
    features: [
      "Eight independent test vessels",
      "Paddle and basket apparatus (USP Type I & II)",
      "Digital temperature control for each vessel",
      "Variable speed stirring control",
      "Stainless steel water bath",
      "Manual sampling ports",
      "Precise motor speed control",
      "Compliant with USP, BP, EP standards"
    ],
    specs: [
      { label: "Number of Vessels", value: "8" },
      { label: "Vessel Volume", value: "1000 ml" },
      { label: "Temperature Range", value: "20-45°C" },
      { label: "Temperature Accuracy", value: "±0.3°C" },
      { label: "Stirring Speed", value: "25-200 rpm" },
      { label: "Speed Accuracy", value: "±2 rpm" }
    ]
  },
  {
    id: "rltdt-08sa",
    title: "Semi-Auto Dissolution Tester RLTDT-08SA",
    description: "Advanced eight-vessel dissolution tester with semi-automated sampling",
    fullDescription: "The Semi-Auto Dissolution Tester RLTDT-08SA from Raise Lab Equipment combines precision testing with semi-automated sampling capabilities for improved efficiency.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Tablet-Dissolution-Tester-RLTDT-08LM-1765309530109.jpg?width=800&height=800&resize=contain",
    category: "dissolution-testing",
    features: [
      "Semi-automated sampling system",
      "Programmable sampling intervals",
      "Automated filtration",
      "Touchscreen control interface",
      "Real-time monitoring",
      "Data export capabilities",
      "Multiple apparatus types support",
      "21 CFR Part 11 ready software"
    ],
    specs: [
      { label: "Number of Vessels", value: "8" },
      { label: "Sampling", value: "Semi-automated" },
      { label: "Temperature Control", value: "PID controlled" },
      { label: "Sampling Points", value: "1-99 programmable" },
      { label: "Display", value: "12-inch touchscreen" },
      { label: "Communication", value: "USB, Ethernet" }
    ]
  },
  // POWDER TESTING INSTRUMENTS
  {
    id: "td-2",
    title: "Tapped Density Apparatus TD-2",
    description: "Precision apparatus for measuring tapped density of powders",
    fullDescription: "The Tapped Density Apparatus TD-2 from Raise Lab Equipment is designed for accurate measurement of powder tapped density. Essential for powder characterization in pharmaceutical development.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Tapped-density-apparatus-TD-2-1765309534777.jpg?width=800&height=800&resize=contain",
    category: "powder-testing",
    features: [
      "Automatic tapping mechanism",
      "Digital tap counter",
      "Adjustable tapping frequency",
      "Two graduated cylinders capacity",
      "Precise drop height control",
      "Digital display",
      "Programmable tap cycles",
      "USP and Ph. Eur. compliant"
    ],
    specs: [
      { label: "Tapping Frequency", value: "100-300 taps/min" },
      { label: "Drop Height", value: "3 mm ± 0.2 mm" },
      { label: "Cylinder Capacity", value: "100/250 ml" },
      { label: "Counter Range", value: "0-9999 taps" },
      { label: "Power Supply", value: "AC 220V, 50Hz" },
      { label: "Dimensions", value: "300 x 250 x 500 mm" }
    ]
  },
  {
    id: "rss-1",
    title: "Electromagnetic Sieve Shaker RSS-1",
    description: "High-performance electromagnetic sieve shaker for particle size analysis",
    fullDescription: "The Electromagnetic Sieve Shaker RSS-1 from Raise Lab Equipment provides efficient particle size analysis through electromagnetic oscillation with heavy-duty base for stability.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Electro-Magnetic-Seive-Shaker-1-1765309534800.jpg?width=800&height=800&resize=contain",
    category: "powder-testing",
    features: [
      "Electromagnetic vibration technology",
      "Adjustable vibration amplitude",
      "Digital timer with auto-stop",
      "Accommodates standard sieves",
      "Low noise operation",
      "Heavy-duty base for stability",
      "Continuous or interval mode",
      "Easy sieve stack assembly"
    ],
    specs: [
      { label: "Sieve Diameter", value: "200 mm / 8 inch" },
      { label: "Amplitude Range", value: "0-2 mm" },
      { label: "Timer Range", value: "1-99 minutes" },
      { label: "Maximum Load", value: "3 kg" },
      { label: "Frequency", value: "50 Hz" },
      { label: "Power Consumption", value: "150W" }
    ]
  },
  {
    id: "rsv-1",
    title: "Scott Volumeter RSV-1",
    description: "Standard volumeter for measuring powder bulk density",
    fullDescription: "The Scott Volumeter RSV-1 from Raise Lab Equipment is a standardized instrument for measuring the apparent or bulk density of powders following the Scott method.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Scott-Volumeter-RSV-1-1765309529949.png?width=800&height=800&resize=contain",
    category: "powder-testing",
    features: [
      "Scott method standardized design",
      "Dual glass funnel system",
      "Graduated receiving cup",
      "Stainless steel frame",
      "Precise funnel positioning",
      "Easy powder flow observation",
      "Simple operation",
      "ASTM B329 compliant"
    ],
    specs: [
      { label: "Cup Volume", value: "1 cubic inch (16.39 ml)" },
      { label: "Funnel Type", value: "Dual glass funnel" },
      { label: "Frame Material", value: "Stainless steel" },
      { label: "Overall Height", value: "450 mm" },
      { label: "Base Dimensions", value: "200 x 200 mm" },
      { label: "Standard", value: "ASTM B329" }
    ]
  },
  {
    id: "rpf-1",
    title: "Powder Flow Tester RPF-1",
    description: "Comprehensive apparatus for testing powder flow properties",
    fullDescription: "The Powder Flow Tester RPF-1 from Raise Lab Equipment is designed to measure angle of repose and flow rate of powders. Critical for formulation development and manufacturing optimization.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Tapped-density-apparatus-TD-2-1765309534777.jpg?width=800&height=800&resize=contain",
    category: "powder-testing",
    features: [
      "Angle of repose measurement",
      "Flow rate determination",
      "Adjustable funnel height",
      "Graduated platform",
      "Stainless steel construction",
      "Multiple funnel sizes included",
      "Digital timer",
      "Portable design"
    ],
    specs: [
      { label: "Funnel Sizes", value: "10, 15, 25 mm orifice" },
      { label: "Height Adjustment", value: "50-200 mm" },
      { label: "Platform Diameter", value: "150 mm" },
      { label: "Timer Accuracy", value: "±0.1 seconds" },
      { label: "Material", value: "SS 316" },
      { label: "Weight", value: "2.5 kg" }
    ]
  },
  {
    id: "rgf-1",
    title: "Granule Friability Tester RGF-1",
    description: "Specialized tester for measuring granule strength and friability",
    fullDescription: "The Granule Friability Tester RGF-1 from Raise Lab Equipment is specifically designed to test the mechanical strength and friability of granules.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Electro-Magnetic-Seive-Shaker-1-1765309534800.jpg?width=800&height=800&resize=contain",
    category: "powder-testing",
    features: [
      "Rotating drum design",
      "Variable rotation speed",
      "Digital timer and counter",
      "Transparent drum for observation",
      "Easy drum removal",
      "Adjustable test duration",
      "Stainless steel construction",
      "Reproducible results"
    ],
    specs: [
      { label: "Drum Capacity", value: "1 liter" },
      { label: "Rotation Speed", value: "10-60 rpm" },
      { label: "Timer Range", value: "1-999 minutes" },
      { label: "Drum Material", value: "Acrylic/Stainless steel" },
      { label: "Power Supply", value: "AC 220V, 50Hz" },
      { label: "Dimensions", value: "400 x 300 x 350 mm" }
    ]
  },
  // PACKAGING INTEGRITY TESTING INSTRUMENTS
  {
    id: "rlt-1",
    title: "Leak Test Apparatus RLT-1",
    description: "Economical leak testing solution for packaging integrity",
    fullDescription: "The Leak Test Apparatus RLT-1 from Raise Lab Equipment offers an economical, fully calibrated solution for ensuring the integrity of various packaging using bubble emission method.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Lacquer-Porosity-Tester-RLT-10BE-1765309534238.jpg?width=800&height=800&resize=contain",
    category: "packaging-integrity",
    features: [
      "Bubble emission detection method",
      "Transparent observation tank",
      "Vacuum pressure control",
      "Digital pressure gauge",
      "Adjustable test duration",
      "Accommodates various container sizes",
      "Easy sample loading",
      "USP compliant testing"
    ],
    specs: [
      { label: "Test Method", value: "Bubble emission" },
      { label: "Vacuum Range", value: "0-0.1 MPa" },
      { label: "Tank Capacity", value: "15 liters" },
      { label: "Pressure Accuracy", value: "±0.01 MPa" },
      { label: "Timer Range", value: "0-99 minutes" },
      { label: "Power Supply", value: "AC 220V, 50Hz" }
    ]
  },
  {
    id: "rlt-2b",
    title: "Digital Leak Test Apparatus RLT-2B",
    description: "Advanced bubble emission test apparatus for ampoule and vial leak detection",
    fullDescription: "The Digital Leak Test Apparatus RLT-2B from Raise Lab Equipment uses the bubble emission method to detect leaks in sealed containers such as ampoules, vials, and bottles with digital controls.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Lacquer-Porosity-Tester-RLT-10BE-1765309534238.jpg?width=800&height=800&resize=contain",
    category: "packaging-integrity",
    features: [
      "Digital microprocessor control",
      "Transparent observation tank",
      "Precise vacuum pressure control",
      "Digital pressure gauge",
      "Multiple testing modes",
      "Built-in illumination",
      "Sample basket included",
      "Quick setup and operation"
    ],
    specs: [
      { label: "Test Method", value: "Bubble emission" },
      { label: "Vacuum Range", value: "0-0.08 MPa" },
      { label: "Tank Capacity", value: "20 liters" },
      { label: "Pressure Accuracy", value: "±0.01 MPa" },
      { label: "Display Type", value: "LED digital" },
      { label: "Power Supply", value: "AC 220V, 50Hz" }
    ]
  },
  {
    id: "rlt-10be",
    title: "Lacquer Porosity Tester RLT-10BE",
    description: "Specialized tester for detecting lacquer coating defects on metal containers",
    fullDescription: "The Lacquer Porosity Tester RLT-10BE from Raise Lab Equipment is designed to detect pinholes and porosity in lacquer coatings on metal containers using electrochemical principles.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Lacquer-Porosity-Tester-RLT-10BE-1765309534238.jpg?width=800&height=800&resize=contain",
    category: "packaging-integrity",
    features: [
      "Electrochemical detection method",
      "Adjustable test voltage",
      "Visual and audible alarms",
      "Conductive electrode probe",
      "Digital voltage display",
      "Suitable for various container sizes",
      "Non-destructive testing",
      "High sensitivity detection"
    ],
    specs: [
      { label: "Test Voltage", value: "0-10V DC" },
      { label: "Detection Sensitivity", value: "< 0.1 mm pinhole" },
      { label: "Display", value: "Digital LED" },
      { label: "Alarm Type", value: "Audio + Visual" },
      { label: "Electrode Type", value: "Flexible conductive" },
      { label: "Power Supply", value: "AC 220V, 50Hz" }
    ]
  },
  // ANALYTICAL INSTRUMENTS
  {
    id: "razr-1",
    title: "Antibiotic Zone Reader RAZR-1",
    description: "Digital zone reader for antibiotic susceptibility testing",
    fullDescription: "The Antibiotic Zone Reader RAZR-1 from Raise Lab Equipment provides accurate and consistent measurement of inhibition zones for antibiotic susceptibility testing.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    category: "analytical-instruments",
    features: [
      "Digital zone measurement",
      "High-resolution optics",
      "Automatic zone detection",
      "Data storage and export",
      "Multiple plate sizes supported",
      "User-friendly interface",
      "Calibration tools included",
      "Compliance with CLSI standards"
    ],
    specs: [
      { label: "Measurement Range", value: "6-50 mm" },
      { label: "Resolution", value: "0.1 mm" },
      { label: "Accuracy", value: "±0.2 mm" },
      { label: "Plate Sizes", value: "60, 90, 150 mm" },
      { label: "Data Storage", value: "5000 readings" },
      { label: "Power Supply", value: "AC 220V, 50Hz" }
    ]
  },
  {
    id: "rmp-1",
    title: "Melting Point Apparatus RMP-1",
    description: "Digital melting point apparatus for accurate determination",
    fullDescription: "The Melting Point Apparatus RMP-1 from Raise Lab Equipment provides accurate and reproducible melting point determination for pharmaceutical compounds.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    category: "analytical-instruments",
    features: [
      "Digital temperature control",
      "Programmable heating rates",
      "Dual sample capacity",
      "Clear observation window",
      "Automatic endpoint detection",
      "Data logging capability",
      "Pharmacopoeia compliant",
      "Easy sample loading"
    ],
    specs: [
      { label: "Temperature Range", value: "Room temp to 400°C" },
      { label: "Accuracy", value: "±0.3°C" },
      { label: "Heating Rate", value: "0.5-10°C/min" },
      { label: "Sample Capacity", value: "2 capillaries" },
      { label: "Display", value: "LCD digital" },
      { label: "Power Supply", value: "AC 220V, 50Hz" }
    ]
  },
  {
    id: "rbp-1",
    title: "Boiling Point Apparatus RBP-1",
    description: "Standard apparatus for boiling point determination",
    fullDescription: "The Boiling Point Apparatus RBP-1 from Raise Lab Equipment is designed for accurate boiling point determination of liquids and solvents per pharmacopoeia methods.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    category: "analytical-instruments",
    features: [
      "Digital temperature control",
      "Precision heating system",
      "Observation window",
      "Multiple sample capacity",
      "Programmable parameters",
      "Stainless steel construction",
      "Safety features included",
      "Standard compliant design"
    ],
    specs: [
      { label: "Temperature Range", value: "Room temp to 300°C" },
      { label: "Accuracy", value: "±0.5°C" },
      { label: "Heating Rate", value: "Adjustable" },
      { label: "Sample Size", value: "1-5 ml" },
      { label: "Display", value: "Digital LED" },
      { label: "Power Supply", value: "AC 220V, 50Hz" }
    ]
  },
  {
    id: "rpp-1",
    title: "Peristaltic Pump RPP-1",
    description: "Precision peristaltic pump for laboratory fluid transfer",
    fullDescription: "The Peristaltic Pump RPP-1 from Raise Lab Equipment provides precise and contamination-free fluid transfer for various laboratory applications.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    category: "analytical-instruments",
    features: [
      "Variable speed control",
      "Reversible flow direction",
      "Multiple tubing sizes",
      "Digital speed display",
      "Low pulsation design",
      "Easy tubing installation",
      "Compact footprint",
      "Long tubing life"
    ],
    specs: [
      { label: "Flow Rate", value: "0.1-2000 ml/min" },
      { label: "Speed Range", value: "1-600 rpm" },
      { label: "Tubing Sizes", value: "13-25 ID" },
      { label: "Channels", value: "1-4" },
      { label: "Accuracy", value: "±0.5%" },
      { label: "Power Supply", value: "AC 220V, 50Hz" }
    ]
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(p => p.category === categoryId)
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id)
}