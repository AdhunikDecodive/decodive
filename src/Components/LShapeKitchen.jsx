
import "./LShapeKitchen.css";

import PhoneCallButton from "./PhoneCallButton";
import { useState } from "react";
import ModalNew from "./ModalNew";
import { AdvancedImage } from '@cloudinary/react';

import { Helmet } from "react-helmet-async";
import { Gem, Shield, Droplets,   Heart, Zap, RulerIcon, LucideRuler, HammerIcon } from 'lucide-react';
import {    CheckCircle, Settings, Users, TrendingUp,   Headphones } from 'lucide-react';

import {
  CheckCircle2,
  
  HardHat,
  ShieldCheck,
  Leaf,
  DollarSign,

  Package,
   
  ArrowRightIcon
} from 'lucide-react';

import { Layout, Triangle, Box, Move3D, } from 'lucide-react';

import { Lightbulb, Palette, } from 'lucide-react';


import { ClipboardList,     } from 'lucide-react';
import { Phone, MessageSquare, ChevronDown } from 'lucide-react';




function LShapeKitchen() {

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };


  const PcardData = [
    {
      id: 1,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786210/7_akynan_g3twto.webp',
      title: "",
      description:
        "Two tone design light wood laminate cabinets with vibrant blue accents for a stylish, trendy look",
    },
    {
      id: 2,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786212/8_ohp7fb_bdvpnc.webp',
      title: "",
      description:
        "L-shaped kitchen in warm brown wood with white countertops offers bright, efficient workspace",
    },
    {
      id: 3,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786223/12_cc9sti_o2fy4a.webp',
      title: "",
      description:
        "Light gray color cabinets with a smooth surface and chrome pulls with white countertop for sleek look",
    },
    {
      id: 4,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786199/3_z9eejg_rhhask.webp',
      title: "",
      description:
        "Contemporary L-shaped kitchen with high-gloss acrylic cabinets radiates elegance and flair.",
    },
    {
      id: 5,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786220/11_p6lzqj_k57ct5.webp',
      title: "",
      description:
        "Warm wooden cabinets with horizontal wood grain, bronze pulls, dark stone countertops for cozy, stylish kitchen",
    },
    {
      id: 6,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786238/18_11zon_yw3p2v_vcy4l3.webp',
      title: "",
      description:
        "Contemporary L-shaped kitchen design, with sleek look. Light-colored wood with a grain pattern",
    },
    {
      id: 7,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786225/13_wsxklp_mjyndq.webp',
      title: "",
      description:
        "Modern L shaped Modular Kitchen Design with Gray Cabinets and Marble Countertop for sleek look ",
    },

    // Add more card objects as needed
  ];

  const P2cardData = [
    {
      id: 1,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786227/14_r5k0zx_ngl40s.webp',
      title: "",
      description:
        "Sleek white cabinets with crisp look L-layout kitchen and integrated appliances for a clean, spacious feel.",
    },
    {
      id: 2,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786230/15_vznwfm_daa7cl.webp',
      title: "",
      description:
        "L-shaped kitchens with Quartz or white granite for a sleek, modern look for a beautiful home efficient",
    },
    {
      id: 3,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786233/16_yhgis8_ngkwud.webp',
      title: "",
      description:
        "Light wood cabinets with warm glow. Modern aesthetic topped with cool white marble countertops",
    },
    {
      id: 4,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786235/17_btpbi0_aouwcb.webp',
      title: "",
      description:
        "Light gray wood cabinets, white veined counters and classic subway tiles create a warm and luxurious L-shaped space",
    },
    {
      id: 5,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786197/2_clubfh_xtysnw.webp',
      title: "",
      description:
        "L-shaped kitchen with two-toned crisp white upper cabinets and blue lowers add pop. Optimizes space, creates a modern look.",
    },
    {
      id: 6,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786240/19_q0s6nb_tw2upf.webp',
      title: "",
      description:
        "L-shaped kitchen with white cabinets and brown countertops. Classic combination .durable and affordable.",
    },
    {
      id: 7,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786243/20_11zon_jcby5h_yfhlb4.webp',
      title: "",
      description:
        "L-shaped kitchen with white cabinets and brown countertops. Classic combination .durable and affordable",
    },
  ];



  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "L-Shape Kitchen Designs in Gurugram | Stylish & Space-Saving Layouts – Adhunik Decodive",
    "description": "Discover the best L-shape modular kitchen designs in Gurugram with Adhunik Decodive. Designed for functionality and style, L-shaped kitchens maximize space and efficiency for modern homes.",
    "url": "https://adhunikdecodive.com/l-shape-modular-kitchen-design",
    "image": "https://res.cloudinary.com/dwhmfz63n/image/upload/v1/Kitchen/LsKitchen/3_z9eejg?_a=DAJAUVWIZAA0",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "CreativeWork",
            "name": "L-Shape Kitchen Design",
            "description": "Efficient and space-saving L-shaped modular kitchens, perfect for small to medium spaces. Customizable with high-quality finishes and smart storage solutions.",
            "image": "https://res.cloudinary.com/dwhmfz63n/image/upload/v1/Kitchen/LsKitchen/3_z9eejg?_a=DAJAUVWIZAA0",
            "url": "https://adhunikdecodive.com/l-shape-modular-kitchen-design"
          }
        }
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Adhunik Decodive",
      "logo": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/dq14b7xie/image/upload/v1747811688/Adhunik_DecoDive_Logo_povt7l.webp"
      }
    }
  };

  const materials = [
    {
      id: 1,
      name: 'Engineered Wood',
      types: 'MDF, HDF-HMR, PB',
      description: 'Light-weight, affordable solution with extensive design options and superior screw retention',
      features: [
        { text: 'Lightweight yet durable', icon: <Package className="h-4 w-4" /> },
        { text: 'Cost-effective solution', icon: <DollarSign className="h-4 w-4" /> },
        { text: 'Wide design variety', icon: <Settings className="h-4 w-4" /> },
        { text: 'Strong screw retention', icon: <HammerIcon className="h-4 w-4" /> }
      ],
      image: 'https://images.unsplash.com/photo-1681752972950-6229ca099fbc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <HardHat className="text-orange-500" />
    },
    {
      id: 2,
      name: 'Plywood',
      types: 'MR, BWR, BWP',
      description: 'High-performance material offering structural integrity and environmental safety',
      features: [
        { text: 'Exceptional strength', icon: <ShieldCheck className="h-4 w-4" /> },
        { text: 'Termite resistant', icon: <Leaf className="h-4 w-4" /> },
        { text: 'Low emissions', icon: <Leaf className="h-4 w-4" /> },
        { text: 'Moisture resistant', icon: <ShieldCheck className="h-4 w-4" /> }
      ],
      image: 'https://images.unsplash.com/photo-1591189863345-9db058f9f8ec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbiUyMHdvb2RlbnxlbnwwfHwwfHx8MA%3D%3D',
      icon: <ShieldCheck className="text-orange-500" />
    },
    {
      id: 3,
      name: 'Particle Board',
      types: '',
      description: 'Economical choice with improved moisture resistance and smooth finishing surface',
      features: [
        { text: 'Budget friendly', icon: <DollarSign className="h-4 w-4" /> },
        { text: 'Moisture resistant', icon: <ShieldCheck className="h-4 w-4" /> },
        { text: 'Smooth laminates', icon: <Package className="h-4 w-4" /> },
        { text: 'Recyclable material', icon: <Leaf className="h-4 w-4" /> }
      ],
      image: 'https://images.unsplash.com/photo-1646006409274-9232106fc9d9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
      icon: <Package className="text-orange-500" />
    }
  ];


  const finishes = [
    {
      id: 1,
      name: 'Laminate',
      description: 'Durable and resistant to wear and tear, immune to stains, spills & scuffs',
      features: [
        'Highly scratch-resistant',
        'Wide variety of designs',
        'Easy to clean and maintain',
        'Budget-friendly option'
      ],
      image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bestFor: 'High-traffic kitchens'
    },
    {
      id: 2,
      name: 'Acrylic',
      description: 'Premium high-gloss finish that creates a seamless, modern look',
      features: [
        'Sleek contemporary appearance',
        'Non-toxic and eco-friendly',
        'Resistant to moisture',
        'Reflective surface brightens space'
      ],
      image: 'https://images.unsplash.com/photo-1571843439991-dd2b8e051966?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bestFor: 'Modern minimalist designs'
    },
    {
      id: 3,
      name: 'PU (Polyurethane)',
      description: 'Luxurious matte or glossy finish with exceptional durability',
      features: [
        'Scratch and impact resistant',
        'Easy to repair if damaged',
        'Resists yellowing over time',
        'Smooth tactile surface'
      ],
      image: 'https://plus.unsplash.com/premium_photo-1676321688609-bb955a90c8c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ',
      bestFor: 'High-end luxury kitchens'
    },
    {
      id: 4,
      name: 'PVC',
      description: 'Waterproof solution that withstands humidity and temperature changes',
      features: [
        'Completely waterproof',
        'Termite and borer proof',
        'Economical pricing',
        'Available in woodgrain patterns'
      ],
      image: 'https://images.unsplash.com/photo-1560185127-1902ccdc5094?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bestFor: 'Humid climates & budget projects'
    }
  ];

  const materials2 = [
    {
      id: 1,
      name: 'Granite',
      description: 'Natural stone offering timeless elegance and exceptional durability',
      features: [
        { text: 'Heat and scratch resistant', icon: <Shield className="w-4 h-4 text-orange-500" /> },
        { text: 'Unique natural patterns', icon: <Gem className="w-4 h-4 text-orange-500" /> },
        { text: 'Low maintenance', icon: <Heart className="w-4 h-4 text-orange-500" /> },
        { text: 'Long-lasting investment', icon: <Zap className="w-4 h-4 text-orange-500" /> }
      ],
      bestFor: 'Traditional & luxury kitchens'
    },
    {
      id: 2,
      name: 'Quartz',
      description: 'Engineered stone combining natural quartz with resins for superior performance',
      features: [
        { text: 'Non-porous (hygienic)', icon: <Droplets className="w-4 h-4 text-orange-500" /> },
        { text: '7/10 Mohs hardness scale', icon: <Gem className="w-4 h-4 text-orange-500" /> },
        { text: 'Consistent color patterns', icon: <RulerIcon className="w-4 h-4 text-orange-500" /> },
        { text: 'Stain resistant', icon: <Shield className="w-4 h-4 text-orange-500" /> }
      ],
      bestFor: 'Modern & busy kitchens'
    },
    {
      id: 3,
      name: 'Corian',
      description: 'Versatile solid surface material allowing seamless installations',
      features: [
        { text: 'Seamless jointing possible', icon: <RulerIcon className="w-4 h-4 text-orange-500" /> },
        { text: 'Repairable surface', icon: <Heart className="w-4 h-4 text-orange-500" /> },
        { text: 'Wide color selection', icon: <Droplets className="w-4 h-4 text-orange-500" /> },
        { text: 'Moderate heat resistance', icon: <Zap className="w-4 h-4 text-orange-500" /> }
      ],
      bestFor: 'Contemporary & curved designs'
    },
    {
      id: 4,
      name: 'Marble',
      description: 'Luxurious natural stone with distinctive veining patterns',
      features: [
        { text: 'Classic elegant appearance', icon: <Gem className="w-4 h-4 text-orange-500" /> },
        { text: 'Cool surface for baking', icon: <Zap className="w-4 h-4 text-orange-500" /> },
        { text: 'Increases home value', icon: <Heart className="w-4 h-4 text-orange-500" /> },
        { text: 'Requires periodic sealing', icon: <Droplets className="w-4 h-4 text-orange-500" /> }
      ],
      bestFor: 'High-end & classic kitchens'
    }
  ];


  const content = {
    hero: {
      title: "Transform Your Home with L-Shaped Modular Kitchens in Gurugram & Delhi",
      subtitle: "Discover the perfect blend of efficiency, style, and spaciousness with custom-designed L-shaped kitchens by Adhunik Decodive. Crafted for modern living in Gurugram, Delhi, and surrounding areas."
    },
    versatility: {
      title: "The Versatility of L-Shaped Kitchens – Designed for Your Lifestyle",
      description: "The L-shaped kitchen is a timeless layout, celebrated for its unparalleled versatility and ergonomic efficiency. At Adhunik Decodive, we harness the full potential of this design to create kitchens that are not just beautiful but incredibly functional for homes in Gurugram, Delhi, and beyond.",
      features: [
        {
          title: "Optimized Space Utilization",
          description: "Perfect for compact and open-plan homes, the L-shape effectively uses corner spaces, turning often-wasted areas into smart storage or display zones.",
          icon: <Layout className="text-orange-500" />
        },
        {
          title: "Efficient Work Triangle",
          description: "Our designs prioritize the 'golden triangle' concept, ensuring seamless movement between your hob, sink, and refrigerator for a truly ergonomic cooking experience.",
          icon: <Triangle className="text-orange-500" />
        },
        {
          title: "Flexible Layouts",
          description: "The open nature of an L-shaped kitchen allows for easy integration of a dining area, a central island, or a breakfast counter, adapting perfectly to your family's needs.",
          icon: <Move3D className="text-orange-500" />
        },
        {
          title: "Ample Storage & Counter Space",
          description: "With two adjoining walls providing extensive counter space and vertical storage opportunities, you'll have all the room you need for meal prep and kitchen essentials.",
          icon: <Box className="text-orange-500" />
        }
      ]
    },
    localBenefits: [
      {
        title: "Custom Measurements",
        description: "Precision-fit designs for Delhi homes",
        icon: <LucideRuler className="w-5 h-5 text-orange-600" />
      },
      {
        title: "Premium Materials",
        description: "Durable finishes for Gurugram lifestyles",
        icon: <Box className="w-5 h-5 text-orange-600" />
      },
      {
        title: "Ergonomic Designs",
        description: "Optimized for Indian cooking styles",
        icon: <Triangle className="w-5 h-5 text-orange-600" />
      }
    ]
  };


  const content2 = {
    philosophy: {
      title: "Adhunik Decodive's Design Philosophy for L-Shaped Kitchens",
      description: "At Adhunik Decodive, we believe every kitchen tells a story. Our team of expert designers combines innovative design principles with meticulous attention to detail to craft L-shaped kitchens that are a true reflection of your personality and lifestyle. We understand the local nuances of Gurugram and Delhi homes, ensuring designs that are both globally inspired and locally relevant.",
      process: [
        {
          title: "In-depth Consultation",
          description: "We start by understanding your vision, cooking habits, and aesthetic preferences.",
          icon: <Lightbulb className="w-6 h-6 text-orange-500" />
        },
        {
          title: "Personalized Design",
          description: "Our designers create custom L-shaped layouts, integrating smart storage solutions and ergonomic principles tailored just for you.",
          icon: <LucideRuler className="w-6 h-6 text-orange-500" />
        },
        {
          title: "Premium Material Selection",
          description: "We guide you through an exquisite range of high-quality materials and finishes to ensure durability and lasting beauty.",
          icon: <Palette className="w-6 h-6 text-orange-500" />
        },
        {
          title: "Expert Craftsmanship",
          description: "Our skilled technicians ensure flawless execution, bringing your dream kitchen to life with precision and care.",
          icon: <HammerIcon className="w-6 h-6 text-orange-500" />
        }
      ]
    },
    inspirations: {
      title: "Explore Our L-Shaped Kitchen Design Ideas & Inspirations",
      description: "Get inspired by our diverse portfolio of L-shaped kitchen designs. From sleek minimalist lines to warm traditional aesthetics, we have the expertise to bring any vision to life.",
      styles: [
        {
          name: "Modern & Contemporary L-Kitchens",
          description: "Discover handleless designs, high-gloss finishes, integrated appliances, and smart home technology for a seamless, futuristic look.",
          image: "/images/modern-kitchen.jpg"
        },
        {
          name: "Classic & Traditional L-Kitchens",
          description: "Explore designs featuring rich wood tones, intricate detailing, ornate hardware, and warm lighting for a timeless appeal.",
          image: "/images/traditional-kitchen.jpg"
        },
        {
          name: "Minimalist L-Kitchens",
          description: "Embrace clean lines, subtle textures, and a clutter-free environment that promotes tranquility and functionality.",
          image: "/images/minimalist-kitchen.jpg"
        },
        {
          name: "Industrial L-Kitchens",
          description: "Incorporate raw materials like exposed brick, concrete, and metal accents for an edgy, urban vibe.",
          image: "/images/industrial-kitchen.jpg"
        },
        {
          name: "Scandinavian L-Kitchens",
          description: "Light wood, white finishes, and practical, simplistic designs that bring a sense of calm and openness.",
          image: "/images/scandinavian-kitchen.jpg"
        }
      ]
    }
  };



   const content3 = {
    materials: {
      title: "Materials & Finishes: Quality That Lasts",
      description: "At Adhunik Decodive, we offer an extensive selection of premium materials and finishes to ensure your L-shaped kitchen is not only stunning but also resilient and easy to maintain.",
      categories: [
        {
          name: "Cabinetry",
          description: "Choose from marine ply, MDF, HDF, or solid wood, finished with options like Laminate, Acrylic, Membrane, PU (Polyurethane), or Veneer. Each offers unique aesthetics and durability.",
          icon: <Settings className="w-6 h-6 text-orange-500" />
        },
        {
          name: "Countertops",
          description: "Select from elegant Quartz, durable Granite, luxurious Marble, Solid Surface (Corian®), or contemporary Concrete.",
          icon: <CheckCircle className="w-6 h-6 text-orange-500" />
        },
        {
          name: "Hardware",
          description: "Experience smooth functionality with high-quality soft-close hinges, drawer systems, and innovative corner solutions from leading brands.",
          icon: <Shield className="w-6 h-6 text-orange-500" />
        },
        {
          name: "Backsplashes",
          description: "Personalize your kitchen with tiles, natural stone, glass, or composite panels.",
          icon: <ClipboardList className="w-6 h-6 text-orange-500" />
        }
      ]
    },
    trust: {
      title: "Why Adhunik Decodive is Your Trusted Partner in Gurugram & Delhi",
      description: "Choosing the right partner for your kitchen renovation is crucial. Adhunik Decodive stands out for its commitment to excellence and client satisfaction.",
      reasons: [
        {
          title: "Local Expertise",
          description: "We understand the specific design trends and space constraints common in Gurugram, Delhi, and surrounding areas. Our local presence ensures timely service and support.",
          icon: <Users className="w-6 h-6 text-orange-500" />
        },
        {
          title: "Customization at its Core",
          description: "Your kitchen is uniquely yours. We offer unparalleled customization, ensuring every element is tailored to your preferences.",
          icon: <Settings className="w-6 h-6 text-orange-500" />
        },
        {
          title: "Uncompromising Quality",
          description: "From conceptualization to installation, we adhere to the highest standards of quality, using only premium materials and employing skilled craftsmen.",
          icon: <CheckCircle className="w-6 h-6 text-orange-500" />
        },
        {
          title: "Strategic Design Approach",
          description: "Leveraging a deep understanding of market trends and data analysis, we devise strategies that maximize both aesthetics and functionality, ensuring your kitchen isn't just beautiful, but also a smart investment.",
          icon: <TrendingUp className="w-6 h-6 text-orange-500" />
        },
        {
          title: "Dedicated Project Management",
          description: "Our transparent process ensures a smooth, hassle-free experience from start to finish.",
          icon: <ClipboardList className="w-6 h-6 text-orange-500" />
        },
        {
          title: "Post-Installation Support",
          description: "Our relationship doesn't end with installation. We're here to ensure your complete satisfaction.",
          icon: <Headphones className="w-6 h-6 text-orange-500" />
        }
      ]
    }
  };


   const faqs = [
    {
      question: "What is the ideal size for an L-shaped kitchen?",
      answer: "L-shaped kitchens are versatile. While they work well in smaller spaces (e.g., 10x10 ft), they are also ideal for larger, open-plan areas where they can define the kitchen zone without walls. Our designers can optimize the layout for any space."
    },
    {
      question: "How do you utilize the corner space in an L-shaped kitchen?",
      answer: "We employ smart solutions like magic corners, LeMans units, carousel units, and diagonal cabinets to maximize storage and accessibility in corner areas."
    },
    {
      question: "What are the current trends in L-shaped kitchen designs?",
      answer: "Popular trends include dual-tone cabinetry, integrated smart appliances, open shelving combined with closed storage, minimalist designs, and the use of natural materials for a serene feel."
    },
    {
      question: "Can an L-shaped kitchen accommodate an island?",
      answer: "Absolutely! If space permits, an island can be a fantastic addition to an L-shaped kitchen, providing extra counter space, storage, and a casual dining area."
    },
    {
      question: "What materials do you recommend for an L-shaped kitchen countertop?",
      answer: "We recommend materials based on your usage, budget, and aesthetic preference. Quartz and granite are popular for their durability and low maintenance, while Corian offers seamless designs."
    }
  ];

  return (
    <>



    <Helmet>
    <title> L-Shaped Kitchen Designs in Gurugram & Delhi | Adhunik Decodive </title>
    <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" name="description" content="Maximize space and style with Adhunik Decodive's L-shaped modular kitchen designs in Gurugram, Delhi & NCR. Get expert solutions for efficient, modern kitchens. Book a free consultation!" />
    <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
    <link rel="canonical" href="https://adhunikdecodive.com/l-shape-modular-kitchen-design" data-react-helmet="true" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
    <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
    <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="L-Shaped Kitchen Designs in Gurugram & Delhi | Adhunik Decodive" />
    <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="L-shaped kitchen designs Gurugram, modular L-kitchen Delhi, L-shape kitchen interior NCR, corner kitchen solutions, modern L-kitchen design, custom L-kitchens, kitchen designers Gurugram, Adhunik Decodive kitchens" />
    <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
    <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
    <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary_large_image"></meta> 
    <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Maximize space and style with Adhunik Decodive's L-shaped modular kitchen designs in Gurugram, Delhi & NCR. Get expert solutions for efficient, modern kitchens. Book a free consultation!" />
    <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/l-shape-modular-kitchen-design"></meta>
    <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Interior Design Experts" />
    <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="L-Shaped Kitchen Designs in Gurugram & Delhi | Adhunik Decodive" />
    <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Maximize space and style with Adhunik Decodive's L-shaped modular kitchen designs in Gurugram, Delhi & NCR. Get expert solutions for efficient, modern kitchens. Book a free consultation!" />
    
</Helmet>

      <ModalNew isOpen={openModal} onClose={toggleModal} />


      <div className="w-full bg-white p-3 md:p-5 svg ">
        <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <p className="text-5xl  tracking-wide font-semibold p-3 md:p-9">
              L-shaped kitchen
            </p>
          </div>
        </div>

        <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
            <p className=" md:w-[70%] text-base font-medium text-blue-gray-900  tracking-wide  md:p-9  p-2 text-justify   rounded-lg mb-2">
              With unlimited versatility, L-shaped kitchens can perfectly fit in
              any space. Designed for maximum functionality, the layout makes
              the three of the sink, range, and refrigerator form into an
              L-shaped work triangle. Now you can easily move between these
              areas while preparing meals. One of the advantages of L-shaped
              kitchens is space maximization. In addition to the units
              themselves, small touches can be added to keep everything
              organized and in its place. This includes clever features such as
              sliding drawers and pocket doors. You can keep utensils organized
              and groceries tidied and out of sight for a sleek, streamlined
              appearance. See for yourself in the images how L-shaped kitchens
              come to life in all their glory!
            </p>
          </div>
        </div>

        <div className=" w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {PcardData.map((card) => (
            <div
              key={card.id}
              className="max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
            >
              <div className="relative h-80">
                <AdvancedImage
                  src={card.imageUrl}
                  alt={card.description}
                  decoding="async"
                  className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                  style={card.unique ? { objectFit: 'fill', objectPosition: '100% 37%' } : {}}
                />
              </div>

              <div className="p-6">
                <h2 className="text-base font-medium text-blue-gray-900 mb-2">
                  {card.title}
                </h2>
                <p className="text-sm  tracking-wide text-gray-700 opacity-75 leading-normal mb-4">
                  {card.description}
                </p>
                <div className="flex justify-between">
                  <PhoneCallButton />
                  <button onClick={toggleModal} className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"> Get Free Quote</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="  max-w-md w-full mx-auto my-auto h-[50vh]  text-white  bg-gradient-to-r from-[#41303e]  to-[#815379] bg-[ ,] shadow-md rounded-xl overflow-hidden">
            <div className="    pt-14">
              <div className="text-center p-5">
                <h1 className="text-base font-light text-blue-gray-900 mb-2">
                  {" "}
                  Kitchen Designs With
                </h1>
                <p className="text-2xl font-bold  leading-normal mb-4">
                  High Quality Materials
                </p>
                <p>
                  Starting <br /> <span className=" text-3xl">₹50,000</span>
                </p>
              </div>

              <div className="flex justify-center">

                <button onClick={toggleModal} className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-[110deg]   ease"></span>
                  <span className="relative text-white">Get Free Consultation</span>
                </button>
              </div>
            </div>
          </div>

          {P2cardData.map((card) => (
            <div
              key={card.id}
              className="max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
            >
              <div className="relative h-80">

                <AdvancedImage
                  src={card.imageUrl}
                  alt={card.description}
                  decoding="async"
                  className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                  style={card.unique ? { objectFit: 'fill', objectPosition: '100% 37%' } : {}}
                />
              </div>
              <div className="p-6">
                <h2 className="text-base font-medium text-blue-gray-900 mb-2">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-700 opacity-75 leading-normal mb-4">
                  {card.description}
                </p>
                <div className="flex justify-between">
                  <PhoneCallButton />
                  <button onClick={toggleModal} className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"> Get Free Quote</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <section className="bg-gradient-to-b from-orange-50 to-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with decorative elements */}
          <div className="text-center mb-16 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-300 rounded-full"></div>
            <p className="text-3xl font-bold text-gray-900  mb-4">
              <span className="block tracking-wide">Premium Kitchen Materials</span>
              <span className="block tracking-wide text-orange-600 mt-2">Engineered for Excellence</span>
            </p>
            <p className="mt-6 text-sm tracking-wide text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated selection of high-performance materials that combine durability,
              aesthetics, and sustainability for your dream kitchen.
            </p>
          </div>

          {/* Materials Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {materials.map((material) => (
              <div
                key={material.id}
                className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100"
              >
                {/* Image with overlay */}
                <div className="relative  w-full ">
                  <img
                    src={material.image}
                    alt={material.name}
                    className="object-cover    h-72  object-center"

                  />
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                    {material.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl  tracking-wider font-bold text-gray-900">{material.name}</h3>

                    {material.types && (
                      <span className="inline-flex tracking-wide items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        {material.types}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 tracking-wide text-gray-600">{material.description}</p>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-orange-600 uppercase tracking-wider flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Key Advantages
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {material.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 text-orange-500 mt-0.5">
                            {feature.icon}
                          </span>
                          <span className="text-gray-700 tracking-wide">{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>


                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <div className="inline-flex flex-col items-center">
              <p className="mb-6 text-lg text-gray-600 max-w-2xl">
                Ready to bring your dream kitchen to life? Our experts will guide you in selecting the perfect materials.
              </p>
              <a   href="tel:9355588595"  className="relative inline-flex items-center px-8 py-4 overflow-hidden text-white bg-orange-600 rounded-lg group hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-300/30">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative flex items-center gap-2 text-lg font-semibold">
                  <HardHat className="h-5 w-5" />
                  Get Your Custom Design Consultation
                  <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>



      <section>
        <div className="w-full h-full py-9 p-4 bg-zinc-100 overflow-hidden relative ">
          <div className="w-full text-center">
            <p className="text-3xl">
              The Simple 3-Step Journey  </p>
            <p className="text-[#702b4f] text-sm mt-3">
              Revealing the Path to Your Dream Interior            </p>
          </div>

          <div className="grid  gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
            {/* First Step */}
            <div className="w-full p-9">
              <div className="border border-[#CDC7C5] relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                <div className="relative mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">

                  <img loading="lazy"
                    alt="make your interior style and space optimization using professional designers" src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746616039/myh1ynmcgsmxmde8nwqy_ttfmha.webp" />



                </div>
                <div className="p-6 text-center">
                  <h3 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Show your style and space optimization
                  </h3>
                  <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                    Dream big for your space! Share your inspiration, goals, and
                    budget, and let us help you design a space you will adore.
                  </p>
                </div>

                <div className="p-6 pt-0">
                  <div className="text-center">
                    <h2 className="bg-black w-auto  px-12 py-2 rounded-full text-1xl text-white inline-block p-2">
                      STEP 1
                    </h2>
                  </div>
                </div>

              </div>
            </div>

            {/* Second Step */}
            <div className="w-full p-9">
              <div className="border border-[#CDC7C5] relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                <div className="relative mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img loading="lazy"
                    alt="Revitalize your interior kitchen space."
                    src={"https://res.cloudinary.com/dq14b7xie/image/upload/v1746785991/meeting2_qa5a1w_muck4u.avif"} />


                </div>
                <div className="p-6 text-center">
                  <h3 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Revitalize your space
                  </h3>
                  <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                    Your dedicated designer will collaborate with you
                    individually to transform your vision into reality,
                    delivering a comprehensive 3D rendering of your specific
                    space.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="text-center">
                    <h2 className="bg-black w-auto  px-12 py-2 rounded-full text-1xl text-white inline-block p-2">
                      STEP 2
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Step */}
            <div className="w-full p-9">
              <div className="border border-[#CDC7C5] relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                <div className="relative mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">

                  <img loading="lazy"
                    alt="Get Professional Installation & Shop with Confidence"
                    src={"https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww"} />

                </div>
                <div className="p-6 text-center">
                  <h3 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Get Professional Installation & Shop with Confidence
                  </h3>
                  <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                    Browse and purchase designs effortlessly in one simple
                    transaction & enjoy exclusive discounts.
                  </p>

                </div>
                <div className="p-6 pt-0">
                  <div className="text-center">
                    <h2 className="bg-black w-auto  px-12 py-2 rounded-full text-1xl text-white inline-block p-2">
                      STEP 3
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900  ">
              <span className="block">Upgrade Your Kitchen</span>
              <span className="block text-orange-600 mt-2">With Stunning Finishes</span>
            </h2>
            <p className="mt-6 text-sm text-gray-600 max-w-3xl mx-auto">
              Premium materials that give your kitchen design finesse and lasting beauty
            </p>
          </div>

          {/* Finishes Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {finishes.map((finish) => (
              <div
                key={finish.id}
                className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Image with overlay */}
                <div className="relative  w-full">
                  <img
                    src={finish.image}
                    alt={finish.name + " finish"}

                    className="object-cover object-center h-80 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {finish.bestFor}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{finish.name}</h3>
                  <p className="text-gray-600 mb-4">{finish.description}</p>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {finish.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="flex-shrink-0 h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>


                </div>
              </div>
            ))}
          </div>


        </div>
      </section>


      <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              <span className="block">Countertops & Backsplashes</span>
              <span className="block text-orange-600 mt-2">For Modular Kitchens</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Premium materials that combine functionality with stunning aesthetics
            </p>
          </div>

          {/* Materials Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {materials2.map((material) => (
              <div
                key={material.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon Header */}
                <div className="bg-orange-50 p-6 flex items-center gap-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Gem className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{material.name}</h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{material.description}</p>

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-orange-600 uppercase tracking-wider flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {material.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-orange-500 mt-0.5">
                            {feature.icon}
                          </span>
                          <span className="text-gray-700">{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-sm font-medium text-gray-500">Best for:</p>
                    <p className="text-orange-600 font-semibold">{material.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>




      <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {content.hero.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {content.hero.subtitle}
              </p>
              <a  href="tel:9355588595"  className="inline-flex items-center px-8 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-300 shadow-md hover:shadow-lg">
                Book Free Consultation
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="lg:w-1/2 relative  rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786017/3_ays5ku_oyprfj.webp"
                alt="L-Shaped Modular Kitchen in Gurugram"

                className="object-cover object-center"

              />
            </div>
          </div>

          {/* Versatility Section */}
          <div className="prose prose-lg max-w-none mb-20">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              {content.versatility.title}
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              {content.versatility.description}
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {content.versatility.features.map((feature, index) => (
                <div key={index} className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    {feature.icon}
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Local Benefits Section */}
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Adhunik Decodive for L-Shaped Kitchens in Gurugram & Delhi?
            </h3>
            <ul className="grid gap-6 md:grid-cols-3">
              {content.localBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-full">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>


        </div>
      </section>


      <section className="bg-white py-8  px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Design Philosophy Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {content2.philosophy.title}
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-4xl">
              {content2.philosophy.description}
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {content2.philosophy.process.map((step, index) => (
                <div key={index} className="bg-orange-50 p-6 rounded-xl border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Design Inspirations Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {content2.inspirations.title}
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-4xl">
              {content2.inspirations.description}
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {content2.inspirations.styles.map((style, index) => (
                <div key={index} className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">

                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{style.name}</h3>
                    <p className="text-gray-600">{style.description}</p>

                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>


       <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Materials Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {content3.materials.title}
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-4xl">
            {content3.materials.description}
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {content3.materials.categories.map((category, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                </div>
                <p className="text-gray-700">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted Partner Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {content3.trust.title}
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-4xl">
            {content3.trust.description}
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {content3.trust.reasons.map((reason, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{reason.title}</h3>
                </div>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

     
      </div>
    </section>



        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 md:p-12 text-center text-white mb-20 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Design Your Dream L-Shaped Kitchen?
          </h2>
          <p className="text-xl text-orange-50 max-w-3xl mx-auto mb-8">
            Whether you're in Gurugram, Delhi, or any nearby locality, our team is ready to bring your vision to life. Let Adhunik Decodive transform your kitchen into a space of comfort, efficiency, and beauty.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a 
              href="tel:9355588595" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <a href="/support-form" className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-orange-600 transition-colors">
              <MessageSquare className="w-5 h-5" />
              Free Consultation
            </a>
          </div>
          
        
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions (FAQs)
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-orange-500 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 pt-2 text-gray-700">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 bg-orange-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions About L-Shaped Kitchens?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Our kitchen design experts in Gurugram & Delhi are happy to help you with any queries.
          </p>
          <a 
            href="tel:9355588595" 
            className="inline-flex items-center px-8 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg"
          >
            <Phone className="mr-2 w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>
    </section>


    </>
  );
}

export default LShapeKitchen;
