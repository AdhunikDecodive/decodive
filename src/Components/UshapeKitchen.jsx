import "./LShapeKitchen.css"
import { useState } from "react";
import PhoneCallButton from "./PhoneCallButton";
import ModalNew from "./ModalNew";
import { AdvancedImage } from '@cloudinary/react';
import { Helmet } from "react-helmet-async";
import { Layout, Zap, Triangle, Box, Users, Phone, MessageSquare, ArrowRight, Gem, Leaf, Cpu, Star, ClipboardList, CheckCircle, MapPin } from 'lucide-react';

import { motion } from 'framer-motion';

import { ChevronDown, } from 'lucide-react';

import {   Shield, Droplets,   Heart,   RulerIcon,  HammerIcon } from 'lucide-react';
import {      Settings,  } from 'lucide-react';

import {

  CheckCircle2,
  HardHat,
  ShieldCheck,
  DollarSign,
  Package,
  ArrowRightIcon

} from 'lucide-react';


  
function UshapeKitchen() {

    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    const PcardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786513/1_xo3ogy_ift7ja.webp',
            title: '',
            description:
                'U-shaped layout in a luxurious blue and silver palette. Spacious blue cabinets ensure ample storage,organized countertop appliance placement',
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786516/2_cvjbul_qszv7v.webp',
            title: '',
            description:
                'Parrot green laminated wooden cabinets contrast with quartz white countertops, for refreshing and  inviting U-shaped kitchen',
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786518/3_vfdzhh_anemkr.webp',
            title: '',
            description:
                'Vintage U-shaped kitchen features white lacquered wood cabinets for a bright and airy feel, complemented by a warm wooden countertop',
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786522/4_hcgvmg_svghy5.webp',
            title: '',
            description:
                'Modern U-shaped kitchen with its sleek blue laminated cabinets and crisp white quartz countertops. perfectly suited for contemporary kitchen design',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786536/5_rw6gcq_ckfl9u.webp',
            title: '',
            description:
                'Stunning U-shaped kitchen in European style with blue marine plywood cabinets with crisp white countertops. Perfect for a contemporary kitchen',
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786539/6_gprga6_roh71y.webp',
            title: '',
            description:
                'U-shaped kitchens shine with olive green laminate cabinets. Durable, affordable, and easy to clean, they complement various styles with a natural touch.',
        },
        {
            id: 7,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786543/7_yvnznr_egvemj.webp',
            title: '',
            description:
                'U-shaped kitchen layout features modern, matte-finished wooden cabinets, for practicality and sleek design in a compact space',
        },

        // Add more card objects as needed
    ];


    const P2cardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786546/8_avclus_mg44dp.webp',
            title: '',
            description:
                'Modern U-shaped kitchen with refined aesthetics. Brushed stainless steel cabinets add a classy touch',
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786549/9_rphhw6_z0xo6n.webp',
            title: '',
            description:
                'U-shaped kitchen layout, painted wood cabinets with glossy bright orange hue infuses modern flair, Matte black finish for modern elegance',
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786552/10_up3jjf_uqh9kj.webp',
            title: '',
            description:
                'U-shaped layout with white, high-gloss cabinetry.Crafted from durable materials like laminate, thermofoil, or MDF with a sleek lacquer finish',
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786555/11_nxzusj_dvicby.webp',
            title: '',
            description:
                'U-shaped kitchens boast laminated white cabinets with a high-gloss finish, prized for affordability, durability, and effortless maintenance',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786557/12_esesyq_qkv6nk.webp',
            title: '',
            description:
                'Light wood tone cabinets and white marble countertops define the efficient U-shaped kitchen layout. For more efficiency & defined space',
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786560/13_isfxez_d9eklw.webp',
            title: '',
            description:
                'High-gloss polyester creates sleek, modern cabinets in a vibrant orange U-shape.Paired with sleek stainless steel countertops',
        },
        {
            id: 7,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786563/14_k7z6qy_tzfvt7.webp',
            title: '',
            description:
                'Achieve a timeless kitchen with our U-shaped layout. Crafted from durable woodGray, wood cabinets while white quartz countertops bring a bright and airy feel.',
        },
    ];


    const content = {
        hero: {
            title: "Elevate Your Culinary Space: Bespoke U-Shaped Modular Kitchen Designs in Gurugram & Delhi NCR",
            description: "Experience unparalleled efficiency, luxurious aesthetics, and maximized storage, crafted by Adhunik Decodive – the leading interior designers in the heart of Delhi NCR."
        },
        efficiency: {
            title: "Unlock Unrivaled Efficiency with Adhunik Decodive's U-Shaped Kitchens",
            description: "The kitchen is the heart of your home, and in bustling Gurugram and Delhi NCR, optimizing every square inch without compromising on style is key. Adhunik Decodive specializes in U-shaped modular kitchen designs, renowned for their incredible functionality, ergonomic layout, and ability to transform your culinary experience.",
            details: "A U-shaped kitchen expertly utilizes three adjacent walls, creating a highly efficient \"work triangle\" between your refrigerator, sink, and cooking range. This intelligent layout minimizes movement, enhances productivity, and provides an abundance of continuous counter space – perfect for everything from gourmet meal preparation to casual family breakfasts."
        },
        benefits: {
            title: "Why Choose a U-Shaped Modular Kitchen for Your Gurugram/Delhi NCR Home?",
            items: [
                {
                    title: "Maximum Countertop & Storage Space",
                    description: "Enjoy an expansive work surface and an impressive volume of storage, ideal for families and those who love to cook and entertain.",
                    icon: <Layout className="w-6 h-6 text-orange-500" />
                },
                {
                    title: "Optimized Workflow",
                    description: "The natural U-shape creates a seamless flow, making cooking, cleaning, and organizing effortless.",
                    icon: <Zap className="w-6 h-6 text-orange-500" />
                },
                {
                    title: "Defined Work Zones",
                    description: "Clearly delineate areas for preparation, cooking, and washing, allowing multiple users to comfortably share the space.",
                    icon: <Triangle className="w-6 h-6 text-orange-500" />
                },
                {
                    title: "Versatility & Adaptability",
                    description: "Whether you have a compact apartment in Gurgaon or a spacious villa in Delhi, our U-shaped designs are tailored to fit your specific dimensions and lifestyle.",
                    icon: <Box className="w-6 h-6 text-orange-500" />
                },
                {
                    title: "Enhanced Social Interaction",
                    description: "With a smart layout, it's easier to interact with family and guests while cooking, turning your kitchen into a true social hub.",
                    icon: <Users className="w-6 h-6 text-orange-500" />
                }
            ]
        }
    };


    const content2 = {
        signature: {
            title: "Adhunik Decodive's Signature U-Shaped Kitchen Collection",
            description: "At Adhunik Decodive, we don't just design kitchens; we craft personalized culinary sanctuaries. Our U-shaped modular kitchens blend innovative design with superior craftsmanship, ensuring a space that's as beautiful as it is functional.",
            features: [
                {
                    title: "Tailored for Your Lifestyle",
                    description: "We believe every client is unique. Our designers work closely with you to understand your specific needs, preferences, and aesthetic vision, ensuring a kitchen that reflects your personality.",
                    icon: <Users className="w-6 h-6 text-orange-500" />
                },
                {
                    title: "Premium Materials & Finishes",
                    description: "Choose from an exquisite selection of high-quality materials, including high-gloss acrylics, elegant laminates, natural veneers, durable quartz, and luxurious granite countertops, all sourced to ensure longevity and aesthetic appeal.",
                    icon: <Gem className="w-6 h-6 text-orange-500" />
                },
                {
                    title: "Smart Storage Innovations",
                    description: "Maximize every corner with our intelligent storage solutions. From pull-out pantries and magic corners to specialized cutlery trays and integrated appliance garages, we ensure a clutter-free and organized kitchen.",
                    icon: <Box className="w-6 h-6 text-orange-500" />
                },
                {
                    title: "Ergonomic & Sustainable Design",
                    description: "Our designs prioritize your comfort and ease of use, incorporating ergonomic principles. We also offer options for eco-friendly materials and energy-efficient solutions, aligning with modern, sustainable living.",
                    icon: <Leaf className="w-6 h-6 text-orange-500" />
                },
                {
                    title: "Seamless Appliance Integration",
                    description: "We design your U-shaped kitchen to seamlessly integrate all your modern appliances, creating a sleek, streamlined, and highly functional space.",
                    icon: <Cpu className="w-6 h-6 text-orange-500" />
                }
            ]
        },
        whyChooseUs: {
            title: "Why Adhunik Decodive is Your Premier Choice for U-Shaped Kitchens in Delhi NCR",
            description: "As a leading interior design firm, Adhunik Decodive is dedicated to transforming homes into living masterpieces. Our approach is driven by a passion for data-informed strategies and a commitment to making a tangible impact on your living experience.",
            reasons: [
                {
                    title: "Expert Design & Execution",
                    description: "Our seasoned team of designers and skilled craftsmen, much like a meticulously assembled technical team, ensures every project is executed with precision and excellence, from concept to completion.",
                    icon: <Star className="w-6 h-6 text-orange-500" />
                },
                {
                    title: "Client-Centric Process",
                    description: "We engage with you through a clear, collaborative process: Initial Consultation: Understanding your vision and requirements. 3D Design & Visualization: Bringing your dream kitchen to life virtually. Material Selection: Guiding you through the best options. Flawless Installation: Our expert team ensures timely and perfect execution. Dedicated After-Sales Support: Our commitment extends beyond installation.",
                    icon: <ClipboardList className="w-6 h-6 text-orange-500" />
                },
                {
                    title: "Proven Track Record",
                    description: "With years of experience and a portfolio of successful projects across Gurugram and Delhi NCR, we have earned the trust of countless homeowners.",
                    icon: <CheckCircle className="w-6 h-6 text-orange-500" />
                },
                {
                    title: "Uncompromising Quality",
                    description: "We use only the highest quality materials and adhere to stringent quality checks, ensuring your U-shaped kitchen is built to last.",
                    icon: <Gem className="w-6 h-6 text-orange-500" />
                },
                {
                    title: "Local Expertise",
                    description: "Based in Gurugram and serving the entire Delhi NCR region, we understand local aesthetics, space challenges, and client expectations.",
                    icon: <MapPin className="w-6 h-6 text-orange-500" />
                }
            ]
        }
    };

    const projects = [
        {
            city: 'Delhi',
            img: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786579/20_vjns2y_fbty44.webp',
        },
        {
            city: 'Noida',
            img: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786557/12_esesyq_qkv6nk.webp',
        },
        {
            city: 'Gurugram',
            img: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786546/8_avclus_mg44dp.webp',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    const faqs = [
        {
            question: "Is a U-shaped modular kitchen suitable for small apartments in Gurugram?",
            answer: "While U-shaped kitchens offer maximum space, they are generally best suited for medium to large-sized kitchens. However, with smart design and compact appliance integration, they can be adapted for smaller spaces, though an L-shaped or parallel layout might be more efficient for very small areas."
        },
        {
            question: "What is the average cost of a U-shaped modular kitchen in Delhi NCR?",
            answer: "The cost varies significantly based on factors like materials chosen, finishes, accessories, hardware, and the overall size and complexity of the design. We offer options across various budget ranges and provide transparent, detailed quotes after understanding your requirements."
        },
        {
            question: "How long does it take to design and install a U-shaped modular kitchen?",
            answer: "The timeline depends on the complexity and customization. Typically, the design phase can take a few weeks, followed by manufacturing (3-4 weeks), and then installation (a few days to a week). We provide a clear project schedule during the consultation."
        },
        {
            question: "Can I customize the storage solutions in my U-shaped kitchen?",
            answer: "Absolutely! Customization is at the core of our modular kitchen offerings. You can choose from a wide array of storage accessories like pull-out baskets, corner solutions, tall units, and more to perfectly suit your needs."
        }
    ];


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

    return (
        <>

            <Helmet>
                <title>U-Shaped Modular Kitchen Designs in Gurugram & Delhi | Adhunik Decodive</title>
                <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" name="description" content="Maximize space and style with Adhunik Decodive's U-shaped modular kitchen designs in Gurugram, Delhi & NCR. Get expert solutions for efficient, modern kitchens. Book a free consultation!" />
                <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
                <link rel="canonical" href="https://adhunikdecodive.com/u-shaped-kitchen-designs" data-react-helmet="true" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
                <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
                <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="U-Shaped Modular Kitchen Designs in Gurugram & Delhi | Adhunik Decodive" />
                <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="U-shaped kitchen designs Gurugram, modular U-kitchen Delhi, U-shape kitchen interior NCR, corner kitchen solutions U-shape, modern U-kitchen design, custom U-kitchens, kitchen designers Gurugram, Adhunik Decodive kitchens" />
                <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
                <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
                <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary_large_image"></meta>
                <link data-n-head="ssr" rel="preconnect" href="https://cdn12.lemnisk.co"></link>
                <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Maximize space and style with Adhunik Decodive's U-shaped modular kitchen designs in Gurugram, Delhi & NCR. Get expert solutions for efficient, modern kitchens. Book a free consultation!" />
                <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/u-shaped-kitchen-designs"></meta>
                <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Interior Design Experts" />
                <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="U-Shaped Modular Kitchen Designs in Gurugram & Delhi | Adhunik Decodive" />
                <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Maximize space and style with Adhunik Decodive's U-shaped modular kitchen designs in Gurugram, Delhi & NCR. Get expert solutions for efficient, modern kitchens. Book a free consultation!" />

            </Helmet>


            <ModalNew isOpen={openModal} onClose={toggleModal} />


            <div className="w-full bg-white p-3 md:p-5  svg "  >

                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <p className="text-5xl font-semibold  p-3 md:p-9">U-shaped kitchen</p>
                    </div>
                </div>

                <div className="row justify-around flex">

                    <div className="w-[80%] flex">
                        <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
                        <p className="text-1xl md:w-full font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
                            Calling all culinary admirers! U-shaped kitchens are a dream for any home cook, presenting a huge workspace, abundance of storage, and aesthetically pleasing versatility that adapts to any area, whether it's a peaceful nook or a grand preparing meals arena. They are outstanding in terms of efficiency, with a well-defined flow between the refrigerator, sink, and stove that minimizes wasted steps. This increases storage capacity while maintaining style, allowing you to enjoy your meal in a beautiful and functional setting. However, the U-shaped kitchen is more than just efficient. These organizational havens showcase innovative features like hidden storage and large, slide-out drawers. These smart storage solutions make everything you need easily accessible, minimizing the hassle of digging through messy cabinets. What was the result? A clean, uncomplicated design that encourages tranquility and attention while cooking. This creative design maximizes storage space while maintaining flair, allowing you to enjoy cooking in a beautiful and useful setting. Imagine creating culinary wonders surrounded by sleek worktops, attractive cabinetry, and the efficient arrangement of a U-shaped kitchen - a genuine tribute to form and function. See for yourself in the images below how U-shaped kitchens come to life in their full grandeur!
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






            <section className="bg-white">

                <div className="relative bg-gradient-to-r from-orange-50 to-amber-50 py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                {content.hero.title}
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                {content.hero.description}
                            </p>
                            <a href="tel:9355588595" className="inline-flex items-center px-8 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-300 shadow-md hover:shadow-lg">
                                Get Your Custom Design
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                        <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="U-Shaped Modular Kitchen in Gurugram"

                                className="object-cover"

                            />
                        </div>
                    </div>
                </div>


                <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            {content.efficiency.title}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            {content.efficiency.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div>
                            <p className="text-lg text-gray-700 mb-6">
                                {content.efficiency.details}
                            </p>
                        </div>
                        <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1591924265219-1ea350ab7279?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Efficient Work Triangle in U-Shaped Kitchen"

                                className="object-cover"
                            />
                        </div>
                    </div>


                    <div className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                            {content.benefits.title}
                        </h2>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {content.benefits.items.map((benefit, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-orange-100 p-2 rounded-lg">
                                            {benefit.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                                    </div>
                                    <p className="text-gray-700">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="bg-orange-600 py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h3 className="text-3xl font-bold mb-6">
                            Ready to Transform Your Kitchen in Gurugram or Delhi NCR?
                        </h3>
                        <p className="text-xl text-orange-50 mb-8">
                            Our design experts will create your perfect U-shaped kitchen with premium materials and smart storage solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="tel:9355588595"
                                className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                Call Us Now
                            </a>
                            <a href="/support-form" className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-orange-600 transition-colors">
                                <MessageSquare className="w-5 h-5" />
                                Free Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-white">
                {/* Signature Collection Section */}
                <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {content2.signature.title}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            {content2.signature.description}
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
                        {content2.signature.features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-orange-100 p-2 rounded-lg">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                </div>
                                <p className="text-gray-700">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Why Choose Us Section */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                            {content2.whyChooseUs.title}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-10 text-center">
                            {content2.whyChooseUs.description}
                        </p>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {content2.whyChooseUs.reasons.map((reason, index) => (
                                <div key={index} className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
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

                {/* Gallery Section */}
                <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
                            Our U-Shaped Kitchen Transformations
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative rounded-xl overflow-hidden shadow-lg group"
                                >
                                    <img
                                        src={item.img}
                                        alt={`U-Shaped Kitchen Design in ${item.city}`}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0   to-transparent flex items-end p-6">
                                        <h3 className="text-xl font-bold text-white">Project in {item.city}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>


            </section>


            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* FAQ Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
                            Frequently Asked Questions (FAQ)
                        </h2>

                        <div className="max-w-4xl mx-auto space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                                >
                                    <button
                                        className="flex items-center justify-between w-full p-6 text-left"
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                                        <ChevronDown
                                            className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    {activeIndex === index && (
                                        <div className="px-6 pb-6 pt-0 text-gray-700">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-orange-50 rounded-xl p-8 md:p-12 text-center border border-orange-100">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Ready to design the U-shaped kitchen of your dreams in Gurugram or Delhi NCR?
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                            Our experts are here to guide you every step of the way. Let Adhunik Decodive help you unlock your kitchen's true potential.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="/support-form" className="flex items-center justify-center gap-2 px-8 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg">
                                BOOK YOUR FREE CONSULTATION TODAY
                                <MessageSquare className="w-5 h-5" />
                            </a>
                            <a
                                href="tel:9355588595"
                                className="flex items-center justify-center gap-2 px-8 py-3 border border-orange-600 text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                Call Us Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default UshapeKitchen