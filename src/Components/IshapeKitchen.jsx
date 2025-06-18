import "./LShapeKitchen.css"

import { useState } from "react";
import PhoneCallButton from "./PhoneCallButton";
import ModalNew from "./ModalNew";

import { AdvancedImage } from '@cloudinary/react';
import { Helmet } from "react-helmet-async";


import { motion } from 'framer-motion';
import {
    FaExpandAlt,
    FaBoxOpen,
    FaUsers,
    FaProjectDiagram,
    FaGem,
    FaRulerCombined,
    FaArrowRight,
    FaUtensils,
    FaChair,
    FaBoxes,
    FaDoorOpen,
    FaLightbulb,
    FaRupeeSign,
    FaMapMarkerAlt,
    FaAward,
    FaUsersCog,
    FaStar,
    FaHeadset,
    FaTruck,
    FaTools,
    FaPalette,
    FaClipboardList,
    FaPhoneAlt,
    FaCalendarAlt
} from 'react-icons/fa';
import { Gem, Shield } from "lucide-react";
import {      Droplets,   Heart, Zap, RulerIcon, LucideRuler, HammerIcon } from 'lucide-react';
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
 


function IshapeKitchen() {

    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    const PcardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786058/7_11zon_olrgym_zjxmph.webp',
            title: '',
            description:
                'Sleek & Stylish Island kitchen with painted wooden cabinets and a light-colored marble composite lower level',
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786051/4_gj8dho_jshdij.webp',
            title: '',
            description:
                'Island layout with two-tone light gray painted cabinets with warm wood stain of the island base injects a touch of contrast and warmth into the space',
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786046/2_dy9uog_uzbeea.webp',
            title: '',
            description:
                'The Alluring Island Kitchen with a warm wood veneer base. Indulge in the luxurious elegance of a white marble countertop',
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786068/10_11zon_qxoi9s_qjzusa.webp',
            title: '',
            description:
                'A Stylish Island-shaped layout with durable wood cabinets and  white countertops with kitchen appliances',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786072/11_11zon_dbdfkk_bks8jh.webp',
            title: '',
            description:
                'Island stuns with a vibrant blue lacquer finish on shaker cabinets and classic butcher block countertop with vintage charm',
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786078/12_lydklp_u4uda6.webp',
            title: '',
            description:
                'An island kitchen with light gray laminated cabinet, and warm wood stain island base with wood veneer  and white marble countertop',
        },
        {
            id: 7,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786080/13_11zon_bracki_ur26rv.webp',
            title: '',
            description:
                'Light wood cabinets with a dark granite countertop Island kitchen layout. With a warm and airy touch of practicality',
        },

        // Add more card objects as needed
    ];


    const P2cardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786085/14_11zon_rz82xh_ijygxs.webp',
            title: '',
            description:
                'Modern Island kitchen with glossy white cabinets and straightforward, effective layout in a minimalist design.with open shelving & closed cabinets',
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786090/15_11zon_ntaeor_gjj1qq.webp',
            title: '',
            description:
                'Modular Island Kitchen Design With An Accent Wall. Yellow and gray cabinets along with an accent wall make this kitchen look stylish and chic ',
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786095/16_s1fkxv_ouke2v.webp',
            title: '',
            description:
                'The two-tiered island with  light woodgrain finish  and light countertop  brighten the space. Lower tier offers prep space, the upper tier creates  extra workspace',
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786097/17_ehg08d_ofewr0.webp',
            title: '',
            description:
                'A central island kitchen with stunning white marble. With  integrated appliances for a streamlined aesthetic, and casual dining',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786100/18_fxdhjn_gaxtuv.webp',
            title: '',
            description:
                'The spacious island modern kitchen with green hue cabinets and white  light countertop for beautiful contrast, with fresh and modern look',
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786102/19_v95a39_boxo9w.webp',
            title: '',
            description:
                'Light wood island with warm contrast and white veined countertop, adding a touch of nature-inspired elegance to the kitchen. Offers both beauty and functionality',
        },
        {
            id: 7,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786105/20_11zon_kx4wzh_hadrms.webp',
            title: '',
            description:
                'Larger island with waterfall countertop in white marble  and light wood cabinets  offers a versatile choice for kitchen designers choice',
        },
    ];


    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Island Kitchen Interior Design Services by Adhunik Decodive",
            "image": "https://adhunikdecodive.com/images/island-kitchen-hero.jpg",
            "description": "Expert island kitchen interior design services for homes across Gurugram, Delhi, and NCR, offering custom solutions for efficient space utilization, stunning storage, and modern aesthetics from Adhunik Decodive.",
            "brand": {
                "@type": "Brand",
                "name": "Adhunik Decodive"
            },
            "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "price": "0.0",
                "priceSpecification": {
                    "@type": "PriceSpecification",
                    "priceCurrency": "INR",
                    "price": 0,
                    "valueAddedTaxIncluded": true
                },
                "availability": "https://schema.org/InStock",
                "url": "https://adhunikdecodive.com/island-kitchen-interior"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "250"
            },
            "provider": {
                "@type": "LocalBusiness",
                "name": "Adhunik Decodive",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Gurugram",
                    "addressRegion": "HR",
                    "addressCountry": "IN"
                },
                "telephone": "+91-9355588595"
            }
        }
    ];


    const benefits = [
        {
            icon: <FaExpandAlt className="text-3xl text-orange-600" />,
            title: "Expanded Workspace",
            description: "Gain generous counter space for meal preparation, baking, or even a casual work-from-home spot."
        },
        {
            icon: <FaBoxOpen className="text-3xl text-orange-600" />,
            title: "Ample Storage Solutions",
            description: "Our designs incorporate smart cabinetry, drawers, and shelving within the island, helping you achieve a clutter-free kitchen."
        },
        {
            icon: <FaUsers className="text-3xl text-orange-600" />,
            title: "Versatile Social Hub",
            description: "Create a natural gathering point for family and friends. A kitchen island with seating provides a perfect spot for breakfast, quick meals, or engaging conversations while you cook."
        },
        {
            icon: <FaProjectDiagram className="text-3xl text-orange-600" />,
            title: "Improved Kitchen Workflow",
            description: "By creating an efficient work triangle, an island enhances movement between the refrigerator, sink, and stove, making cooking a pleasure."
        },
        {
            icon: <FaGem className="text-3xl text-orange-600" />,
            title: "Aesthetic Focal Point",
            description: "A well-designed island instantly becomes the centerpiece of your kitchen, adding a touch of elegance and sophistication that boosts your home's value and visual appeal."
        },
        {
            icon: <FaRulerCombined className="text-3xl text-orange-600" />,
            title: "Space Optimization",
            description: "Even in compact urban kitchens typical of Gurugram apartments, our expert designers craft smart island kitchen layouts to make the most of every inch."
        }
    ];


    const signatureDesigns = [
        {
            icon: <FaUtensils className="text-3xl text-orange-600" />,
            title: "Multi-Functional Islands",
            description: "Integrate sinks, cooktops, dishwashers, or wine chillers for ultimate convenience."
        },
        {
            icon: <FaChair className="text-3xl text-orange-600" />,
            title: "Breakfast Bar & Seating Islands",
            description: "Designs that seamlessly incorporate comfortable seating, perfect for casual dining."
        },
        {
            icon: <FaBoxes className="text-3xl text-orange-600" />,
            title: "Storage-Centric Islands",
            description: "Maximize hidden storage with deep drawers, pull-out shelves, and dedicated pantry spaces."
        },
        {
            icon: <FaRulerCombined className="text-3xl text-orange-600" />,
            title: "Custom Shapes & Sizes",
            description: "From sleek rectangular and minimalist designs to curved, organic shapes trending in Gurugram interior design, we create islands that perfectly fit your space."
        },
        {
            icon: <FaDoorOpen className="text-3xl text-orange-600" />,
            title: "Open-Plan Integration",
            description: "Our island kitchen designs are ideal for open-concept living spaces, creating a harmonious flow between your kitchen and living areas."
        }
    ];

    const premiumMaterials = [
        {
            icon: <FaGem className="text-3xl text-orange-600" />,
            category: "Countertops",
            options: "Choose from luxurious Quartz, durable Granite, elegant Marble, or practical solid surfaces."
        },
        {
            icon: <FaBoxes className="text-3xl text-orange-600" />,
            category: "Cabinetry",
            options: "Explore a wide range of finishes including high-gloss Acrylic, sophisticated Laminate, timeless Wood Veneer, and robust HDHMR or Plywood bases."
        },
        {
            icon: <FaUtensils className="text-3xl text-orange-600" />,
            category: "Hardware",
            options: "We utilize high-quality, soft-close hardware for smooth operation and longevity."
        },
        {
            icon: <FaLightbulb className="text-3xl text-orange-600" />,
            category: "Lighting",
            options: "Integrate stunning pendant lights, recessed lighting, and under-cabinet illumination to enhance both ambiance and functionality."
        }
    ];

     const processSteps = [
    {
      icon: <FaClipboardList className="text-3xl text-orange-600" />,
      title: "Initial Consultation",
      description: "We begin by understanding your vision, needs, and lifestyle for your home in Gurugram or Delhi NCR."
    },
    {
      icon: <FaRulerCombined className="text-3xl text-orange-600" />,
      title: "3D Design & Planning",
      description: "Our expert designers create realistic 3D renderings, allowing you to visualize your new island kitchen and make informed decisions."
    },
    {
      icon: <FaPalette className="text-3xl text-orange-600" />,
      title: "Material Selection",
      description: "We guide you through selecting the perfect materials, finishes, and accessories that align with your style and budget."
    },
    {
      icon: <FaTools className="text-3xl text-orange-600" />,
      title: "Precision Manufacturing",
      description: "Your island kitchen components are crafted with precision using state-of-the-art machinery."
    },
    {
      icon: <FaTruck className="text-3xl text-orange-600" />,
      title: "Professional Installation",
      description: "Our skilled team ensures a seamless and efficient installation process, minimizing disruption to your home."
    },
    {
      icon: <FaHeadset className="text-3xl text-orange-600" />,
      title: "After-Sales Support",
      description: "We stand by our craftsmanship with comprehensive warranties and dedicated after-sales service."
    }
  ];

  const advantages = [
    {
      icon: <FaStar className="text-3xl text-orange-600" />,
      title: "Customized Solutions",
      description: "We don't believe in one-size-fits-all. Every island kitchen is uniquely designed to your specifications."
    },
    {
      icon: <FaUsersCog className="text-3xl text-orange-600" />,
      title: "Expert Team",
      description: "Our designers and craftsmen bring years of experience and a keen eye for detail to every project."
    },
    {
      icon: <FaAward className="text-3xl text-orange-600" />,
      title: "Quality Assurance",
      description: "We adhere to the highest standards of quality, ensuring durability and a flawless finish."
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-orange-600" />,
      title: "Local Understanding",
      description: "As a leading kitchen designer in Gurugram and Delhi NCR, we understand regional preferences, space constraints, and lifestyle needs."
    },
    {
      icon: <FaRupeeSign className="text-3xl text-orange-600" />,
      title: "Competitive Pricing",
      description: "We offer premium island kitchen solutions designed to provide exceptional value."
    }
  ];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
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

    return (



        <>

            <Helmet>
                <title>Island Kitchen Interior Design | Gurugram & Delhi NCR | Adhunik Decodive</title>
                <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" name="description" content="Transform your home with Adhunik Decodive's custom island kitchen designs in Gurugram & Delhi NCR. Get expert solutions for space, storage & style. Request a free quote!" />
                <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
                <link rel="canonical" href="https://adhunikdecodive.com/island-kitchen-interior" data-react-helmet="true" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
                <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
                <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Island Kitchen Interior Design | Gurugram & Delhi NCR | Adhunik Decodive" />
                <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="island kitchen design Gurugram, modular kitchen island Delhi, custom island kitchens NCR, modern island kitchen interior, kitchen island with seating, L-shaped kitchen island, U-shaped kitchen island, kitchen island materials, Adhunik Decodive island kitchens" />
                <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
                <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
                <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary_large_image"></meta>
                <link data-n-head="ssr" rel="preconnect" href="https://cdn12.lemnisk.co"></link>
                <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Transform your home with Adhunik Decodive's custom island kitchen designs in Gurugram & Delhi NCR. Get expert solutions for space, storage & style. Request a free quote!" />
                <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/island-kitchen-interior"></meta>
                <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Interior Design Experts" />
                <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Island Kitchen Interior Design | Gurugram & Delhi NCR | Adhunik Decodive" />
                <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Transform your home with Adhunik Decodive's custom island kitchen designs in Gurugram & Delhi NCR. Get expert solutions for space, storage & style. Request a free quote!" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

            </Helmet>

            <ModalNew isOpen={openModal} onClose={toggleModal} />


            <div className="w-full bg-white p-3 md:p-5 svg "  >

                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <p className="text-5xl font-semibold p-9">  Island Kitchen Designs</p>
                    </div>
                </div>

                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
                        <p className="text-1xl md:w-[90%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
                            Indulge in the allure of a luxurious kitchen experience. Picture yourself in the heart of your home, surrounded by sleek design and unparalleled functionality. If you've been dreaming of a culinary haven that combines style with efficiency, look no further than island kitchen layouts. This popular design incorporates a freestanding or built-in island in the center, creating a multifunctional haven for food prep, casual dining, and social gatherings. Just imagine having extra counter space for spreading out while you cook, additional storage for all your kitchen essentials, and even a breakfast bar tucked into the island itself. Island kitchens excel at maximizing functionality without sacrificing aesthetics. They often feature sleek, hidden storage solutions like sliding drawers and pocket doors, keeping your space organized and clutter-free. Immerse yourself in these kitchens layout into magnificent spaces.
                        </p>
                    </div>
                </div>



            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
  {/* First set of cards */}
  {PcardData.map((card, index) => (
    <motion.div 
      key={card.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="max-w-md w-full bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-80 overflow-hidden">
        <AdvancedImage
          src={card.imageUrl}
          alt={card.description}
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          style={card.unique ? { objectPosition: '100% 37%' } : {}}
        />
      </div>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h2>
        <p className="text-sm text-gray-600 mb-4">{card.description}</p>
        <div className="flex justify-between items-center">
          <PhoneCallButton />
          <button 
            onClick={toggleModal}
            className="px-5 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300 font-medium"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </motion.div>
  ))}

  {/* Promotional Card */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={scaleIn}
    whileHover={{ scale: 1.02 }}
    className="max-w-md w-full h-full flex flex-col justify-center text-white bg-gradient-to-br from-purple-700 to-pink-600 shadow-lg rounded-xl overflow-hidden"
  >
    <div className="p-8 text-center">
      <h1 className="text-xl font-light mb-2">Kitchen Designs With</h1>
      <p className="text-3xl font-bold mb-6">High Quality Materials</p>
      <p className="mb-2">Starting from</p>
      <p className="text-4xl font-bold mb-8">₹50,000</p>
      
      <motion.button 
        onClick={toggleModal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 rounded-full group"
      >
        <span className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all"></span>
        <span className="relative flex items-center">
          Get Free Consultation
          <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </span>
      </motion.button>
    </div>
  </motion.div>

  {/* Second set of cards */}
  {P2cardData.map((card, index) => (
    <motion.div 
      key={card.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      transition={{ delay: (PcardData.length + index) * 0.1 }}
      whileHover={{ y: -5 }}
      className="max-w-md w-full bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-80 overflow-hidden">
        <AdvancedImage
          src={card.imageUrl}
          alt={card.description}
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          style={card.unique ? { objectPosition: '100% 37%' } : {}}
        />
      </div>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h2>
        <p className="text-sm text-gray-600 mb-4">{card.description}</p>
        <div className="flex justify-between items-center">
          <PhoneCallButton />
          <button 
            onClick={toggleModal}
            className="px-5 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300 font-medium"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </motion.div>

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



            <section className="py-20 bg-gradient-to-r from-orange-50 to-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Adhunik Decodive: Crafting Your Dream Island Kitchen in Gurugram & Delhi NCR
                        </h1>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Transform Your Home with a Modern Island Kitchen Design
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Welcome to Adhunik Decodive, your premier destination for innovative and stylish island kitchen interior design in Gurugram and across Delhi NCR. In today's dynamic homes, the kitchen is more than just a place to cook – it's the vibrant heart of family life, a social hub, and a reflection of your unique style.
                            </p>
                            <p className="text-lg text-gray-600">
                                Whether you're in Gurgaon, Delhi, Noida, or Faridabad, Adhunik Decodive specializes in creating custom island kitchens that seamlessly blend luxury with practicality, making your culinary dreams a reality.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="lg:w-1/2"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115"
                                alt="Modern Island Kitchen"
                                className="rounded-xl shadow-xl w-full h-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Why Choose an Island Kitchen for Your Gurugram or Delhi NCR Home?
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            An island modular kitchen offers unparalleled benefits, making it a top choice for modern homeowners:
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border border-gray-100"
                            >
                                <div className="flex flex-col h-full">
                                    <div className="mb-6">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                                    <p className="text-gray-600 mb-6 flex-grow">{benefit.description}</p>
                                    <div className="flex items-center text-orange-600 font-medium mt-auto">
                                        <span>Learn more</span>
                                        <FaArrowRight className="ml-2" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-16 text-center"
                    >

                    </motion.div>
                </div>
            </section>


            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Adhunik Decodive's Signature Island Kitchen Designs
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            At Adhunik Decodive, we believe every kitchen tells a story. Our design process is tailored to your lifestyle, space, and aesthetic preferences. Explore the possibilities:
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {signatureDesigns.map((design, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border border-gray-100"
                            >
                                <div className="flex flex-col h-full">
                                    <div className="mb-6">
                                        {design.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{design.title}</h3>
                                    <p className="text-gray-600 mb-6 flex-grow">{design.description}</p>
                                    <div className="flex items-center text-orange-600 font-medium mt-auto">
                                        <span>View examples</span>
                                        <FaArrowRight className="ml-2" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Materials Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Premium Materials & Unmatched Craftsmanship
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Quality and durability are at the forefront of every Adhunik Decodive kitchen. We use only the finest materials, ensuring your island kitchen stands the test of time:
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {premiumMaterials.map((material, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-50 rounded-xl p-8 border border-gray-200"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        {material.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{material.category}</h3>
                                        <p className="text-gray-600">{material.options}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-16 text-center"
                    >
                    </motion.div>


                </div>
            </section>

            <section>
                  <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Transparent Process for Your Dream Island Kitchen
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gurugram & Delhi NCR's most trusted island kitchen design journey
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-orange-100 transform -translate-x-1/2"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative ${index % 2 === 0 ? 'lg:pr-10' : 'lg:pl-10 lg:mt-20'}`}
                >
                  <div className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 h-full border border-gray-200">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                      <p className="text-gray-600 mb-6 flex-grow">{step.description}</p>
                      <div className="text-orange-600 font-medium">
                        Step {index + 1}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Adhunik Decodive Difference
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your Trusted Island Kitchen Experts in Gurugram & Delhi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 border border-gray-200"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    {advantage.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              Adhunik Decodive is committed to delivering excellence. We combine innovative design with deep expertise in interior solutions to ensure not just a beautiful kitchen, but a seamless and professional experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Design Your Perfect Island Kitchen?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Unlock the true potential of your home with Adhunik Decodive's exquisite island kitchen interior designs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <motion.a
              href="tel:9355588595" 
                whileHover={{ y: -5 }}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <FaPhoneAlt className="text-2xl" />
                  <h3 className="text-xl font-semibold">Call Us</h3>
                </div>
                <p>+91 9355588595</p>
              </motion.a>
              
              <motion.a 
              href="/support-form"
                whileHover={{ y: -5 }}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <FaCalendarAlt className="text-2xl" />
                  <h3 className="text-xl font-semibold">Book Consultation</h3>
                </div>
                <p>Schedule a free design session</p>
              </motion.a>
              
              <motion.a 
               href="https://maps.app.goo.gl/eFmHQELEBv2cXdrP8"
                whileHover={{ y: -5 }}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <FaMapMarkerAlt className="text-2xl" />
                  <h3 className="text-xl font-semibold">Visit Showroom</h3>
                </div>
                <p>Gurugram</p>
              </motion.a>
            </div>

            <motion.a
            href="/support-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-lg"
            >
              Contact us for a Free Design Consultation
            </motion.a>

          </motion.div>
        </div>
      </section>
      
            </section>

        </>
    )
}

export default IshapeKitchen