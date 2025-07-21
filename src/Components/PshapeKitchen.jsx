
import "./LShapeKitchen.css"

import PhoneCallButton from "./PhoneCallButton";
import { Link } from "react-router-dom";

import { useState } from "react";
import ModalNew from "./ModalNew";

import { AdvancedImage } from '@cloudinary/react';

import { Helmet } from "react-helmet-async";

import { FaCheck, FaRulerCombined, FaPeopleArrows, FaBoxOpen, FaPaintRoller, FaTrophy } from 'react-icons/fa';


import {
    FaPalette,
    FaLightbulb,
    FaRulerVertical,
    FaBoxes,
    FaHome,
   
    FaQuoteLeft
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

 

import {

    FaChevronDown,
    FaPhone,
    FaCalendarAlt,
    FaMapMarkerAlt
} from 'react-icons/fa';

 

import {   Shield, Droplets,   Heart,   RulerIcon,  HammerIcon, Leaf, Gem, Zap } from 'lucide-react';
import {      Settings,  } from 'lucide-react';

import {

  CheckCircle2,
  HardHat,
  ShieldCheck,
  DollarSign,
  Package,
  ArrowRightIcon

} from 'lucide-react';



const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="border-b border-gray-200 py-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
        >
            <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-xl font-semibold text-gray-800">{question}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <FaChevronDown className="text-orange-600" />
                </motion.div>
            </button>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <p className="pt-4 text-gray-600 leading-relaxed">{answer}</p>
            </motion.div>
        </motion.div>
    );
};





function PshapeKitchen() {

    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    const PcardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786322/1_s4ecvr_qfqfyy.webp',
            title: '',
            description:
                'Maximize counter space and storage in your compact kitchen with a light pink parallel layout with laminated wood, having  budget-friendly durability',
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786324/2_wpgmp2_xhunyy.webp',
            title: '',
            description:
                'Parallel kitchen with white cabinets and marble countertops. White cabinets brighten the space and marble adds a sophisticated touch',
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786327/3_pptriy_tj3c7b.webp',
            title: '',
            description:
                'All-white parallel kitchen with sleek white quartz countertops for a bright and airy feel, especially ideal for small spaces',
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786330/4_szl6o8_ir3ivr.webp',
            title: '',
            description:
                ' charming two-toned parallel kitchen with blue base cabinets, yellow uppers, and a light-colored marble countertop for a luxurious and balanced look',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786333/5_yepitp_xs9b2a.webp',
            title: '',
            description:
                ' Two-toned design with white upper cabinets and a woodgrain finish on the lower cabinets white quartz countertop  for efficient layout for modern living.',
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786335/6_sleifj_acbjri.webp',
            title: '',
            description:
                'Parallel layout Kitchens in deep purple color made of  Canply plywood with high-gloss Lucida laminates for a modern or Italian style',
        },
        {
            id: 7,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786338/7_su8r1f_tfdlab.webp',
            title: '',
            description:
                'Achieve a balanced look with a cool metallic blue accent against a crisp white upper cabinet. Ideal for compact spaces',
        },

        // Add more card objects as needed
    ];


    const P2cardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786341/8_xeibjp_anvf3l.webp',
            title: '',
            description:
                'A modern galley kitchen with light gray cabinets and marble countertops. Ideal for smaller spaces, feature a single countertop along one wall for maximum efficiency',
        },

        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786343/9_vfhxrq_cc93dg.webp',
            title: '',
            description:
                'Modern parallel kitchen with calming colors and green accents. perfect for  space-saving design in  small kitchens.',
        },

        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786346/10_tqherx_onfew6.webp',
            title: '',
            description:
                'A minimalistic design with parallel modular units in beige and brown tones. Textured finish and pendant lighting blends with the backdrops',
        },

        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786349/11_mdldal_rsy3lo.webp',
            title: '',
            description:
                'Green cabinets and white countertops in a modern kitchen create a stylish and airy ambiance, blending vibrant color with sleek sophistication',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786355/12_smaltd_zwupb7.webp',
            title: '',
            description:
                'Luxurious Parallel layout kitchen with  white marble and hanging lamps add a touch of modern elegance',
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786359/13_y2rqnd_vdpmgi.webp',
            title: '',
            description:
                'A contemporary parallel layout kitchen.White cabinets with hidden hardware maximize storage.Light brown counters add warmth. Ideal for long, narrow spaces',
        },
        {
            id: 7,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786361/14_x0uvuh_rorrcm.webp',
            title: '',
            description:
                '  Parallel kitchen with charcoal gray cabinets and light colored countertop surface for a modern and sophisticated look',
        },
    ];

    const benefits = [
        {
            icon: <FaRulerCombined className="text-3xl mb-4" />,
            title: "Optimal Space Utilization",
            description: "Perfectly designed to make the most of every inch, our parallel kitchens are incredibly effective for maximizing space in narrow or rectangular layouts. They provide extensive functional areas without compromising on style."
        },
        {
            icon: <FaCheck className="text-3xl mb-4" />,
            title: "Streamlined Workflow & The Efficient Work Triangle",
            description: "Experience unparalleled ease of movement with a natural and efficient path between your sink, stove, and refrigerator. This ergonomic design, a hallmark of our modular kitchen solutions in Delhi NCR, minimizes effort and maximizes productivity during meal preparation."
        },
        {
            icon: <FaPeopleArrows className="text-3xl mb-4" />,
            title: "Enhanced Dual Cook Space",
            description: "The intelligent layout of a parallel kitchen comfortably accommodates multiple users simultaneously. This makes it ideal for busy families or when entertaining guests, allowing for seamless collaborative cooking."
        },
        {
            icon: <FaBoxOpen className="text-3xl mb-4" />,
            title: "Abundant & Custom Storage Solutions",
            description: "With two expansive parallel walls, you gain extensive opportunities for smart, integrated storage. From pull-out pantries and tall units to custom drawers and corner solutions, our designs ensure your kitchen remains clutter-free and immaculately organized."
        },
        {
            icon: <FaPaintRoller className="text-3xl mb-4" />,
            title: "Versatile Design Possibilities",
            description: "Adhunik Decodive excels in adapting parallel kitchen interior designs to a myriad of styles. Whether you envision a sleek modern, a warm traditional, an industrial chic, or a vibrant contemporary kitchen, we bring your vision to life."
        },
        {
            icon: <FaTrophy className="text-3xl mb-4" />,
            title: "Award-Winning Quality",
            description: "Recognized with the India Business Awards 2025 for our excellence, we use only the highest quality, durable materials including BWP (Boiling Waterproof) Plywood for superior moisture resistance, and premium finishes like Acrylic, PU (Polyurethane), and Laminates."
        }
    ];


    const designIdeas = [
        {
            icon: <FaPalette className="text-3xl" />,
            title: "Modern Minimalist Parallel Kitchens",
            description: "Embrace 'less is more' with clean lines, handleless cabinets, and sophisticated neutral palettes (greys, whites, beiges) for a sleek, contemporary look."
        },
        {
            icon: <FaPalette className="text-3xl" />,
            title: "Vibrant & Expressive Layouts",
            description: "Inject personality with bold colour accents – think deep blues or emerald greens on cabinets or a striking backsplash."
        },
        {
            icon: <FaPalette className="text-3xl" />,
            title: "Timeless & Traditional Parallel Kitchens",
            description: "Opt for warm wood tones, classic paneling, and inviting elements that exude comfort and charm."
        },
        {
            icon: <FaLightbulb className="text-3xl" />,
            title: "Smart & Integrated Solutions",
            description: "From built-in smart appliances to innovative storage units that maximize every corner, we design for seamless integration and convenience."
        }
    ];

    const materialOptions = [
        {
            category: "Countertops",
            options: "Choose from luxurious Quartz, durable Granite, elegant Marble, or versatile Corian, ensuring a surface that's both beautiful and resilient."
        },
        {
            category: "Cabinetry",
            options: "Explore high-quality engineered wood with finishes like high-gloss Acrylic, matte PU, or versatile Laminates. Consider popular dual-tone cabinets for added visual interest."
        },
        {
            category: "Statement Backsplashes",
            options: "Elevate your kitchen with our handpicked statement backsplashes, ranging from intricate ceramic tiles and reflective glass to expansive quartz slabs or unique patterned designs, making your kitchen a true focal point."
        },
        {
            category: "Optimized Lighting",
            options: "We design layered lighting schemes – task lighting for prep areas, ambient lighting for overall illumination, and accent lighting to highlight design features – creating the perfect mood and functionality."
        }
    ];

    const functionalityFeatures = [
        {
            icon: <FaRulerVertical className="text-3xl" />,
            title: "Ergonomic Passage",
            description: "We ensure an ideal passage width (typically 3 to 4 feet) between counters, allowing for comfortable movement and efficient workflow even during peak activity."
        },
        {
            icon: <FaBoxes className="text-3xl" />,
            title: "Innovative Storage",
            description: "Discover how solutions like magic corners, tall pantry units, pull-out drawers with integrated organizers, and wall-mounted accessories keep everything accessible and neat."
        },
        {
            icon: <FaHome className="text-3xl" />,
            title: "Island Integration",
            description: "In wider spaces, a well-placed kitchen island can transform your parallel kitchen, providing additional prep space, extra storage, and a versatile breakfast bar or casual dining area."
        }
    ];

    const faqs = [
        {
            question: "What is the ideal distance between parallel counters?",
            answer: "For optimal comfort and efficiency, an ideal passage width of 3 to 4 feet (approximately 90-120 cm) between parallel countertops is recommended to allow for easy movement and opening of cabinets."
        },
        {
            question: "Can Adhunik Decorative create parallel kitchen designs for both small and large spaces?",
            answer: "Absolutely! Our parallel kitchen designs are incredibly versatile and can be customized to maximize efficiency and aesthetics in kitchens of all sizes, from compact urban apartments to spacious independent homes in Gurugram, Delhi, and NCR."
        },
        {
            question: "What materials do you use for parallel modular kitchens to ensure durability?",
            answer: "We prioritize high-quality, durable, and low-maintenance materials like BWP (Boiling Waterproof) Plywood for cabinet carcasses, and a range of finishes including scratch-resistant Acrylic, smooth PU, and robust Laminates. Our countertops include premium Quartz and Granite for long-lasting performance."
        },
        {
            question: "Do you provide 3D designs before starting the project?",
            answer: "Yes, a key part of our collaborative process involves providing detailed 2D and realistic 3D design visualizations. This ensures you can fully review and approve your parallel kitchen layout and aesthetics before manufacturing begins."
        },
        {
            question: "How long does it take to get a parallel modular kitchen installed by Adhunik Decorative?",
            answer: "The timeline varies based on complexity and customization, but our streamlined process ensures efficient project management from design finalization to expert installation. Our team provides clear timelines during your consultation."
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
                <title>Parallel Kitchen Design in Gurugram, Delhi & NCR | Adhunik Decodive</title>
                <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" name="description" content="Adhunik Decodive offers custom parallel kitchen designs in Gurugram, Delhi & NCR. Enjoy efficient layouts, smart storage, and modern aesthetics. Book a free consultation!" />
                <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
                <link rel="canonical" href="https://adhunikdecodive.com/parallel-kitchen-designs" data-react-helmet="true" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
                <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
                <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Parallel Kitchen Design in Gurugram, Delhi & NCR | Adhunik Decodive" />
                <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="parallel kitchen design Gurugram, modular parallel kitchen Delhi, parallel kitchen interior NCR, galley kitchen solutions, modern parallel kitchen design, custom parallel kitchens, kitchen designers Gurugram, Adhunik Decodive kitchens" />
                <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
                <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
                <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary_large_image"></meta>
                
                <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Adhunik Decodive offers custom parallel kitchen designs in Gurugram, Delhi & NCR. Enjoy efficient layouts, smart storage, and modern aesthetics. Book a free consultation!" />
                <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/parallel-kitchen-designs"></meta>
                <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Interior Design Experts" />
                <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Parallel Kitchen Design in Gurugram, Delhi & NCR | Adhunik Decodive" />
                <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Adhunik Decodive offers custom parallel kitchen designs in Gurugram, Delhi & NCR. Enjoy efficient layouts, smart storage, and modern aesthetics. Book a free consultation!" />




            </Helmet>


            <ModalNew isOpen={openModal} onClose={toggleModal} />

            <div className="w-full bg-white p-3 md:p-5 svg "  >

                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <p className="text-5xl font-semibold p-9">  Parallel Kitchen Designs</p>
                    </div>
                </div>

                <div className="row justify-around flex">

                    <div className="w-[80%] flex">
                        <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
                        <p className="text-1xl md:w-[70%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
                            Parallel kitchen layouts offer a sleek and efficient solution for larger kitchens. This design features two countertops running parallel to each other, maximizing workspace and storage. The separated cooking and cleaning zones create a smooth workflow, making it ideal for multiple cooks or busy households. The strategically placed refrigerator, sink, and stove form a compact golden zone, minimizing unnecessary movement during meal preparation. Parallel kitchens prioritize organization through discreet storage solutions like hidden drawers and sliding doors, ensuring all utensils and ingredients are readily accessible while maintaining a clean, modern aesthetic
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



            <section>
                <div className="bg-orange-50 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
                            Experience the Future of Kitchens
                        </h2>
                        <p className="text-xl text-orange-600 mb-8">
                            Parallel Designs by Adhunik Decodive
                        </p>

                    </div>
                </div>

                {/* Intro Section */}
                <div className="container mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img
                                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115"
                                alt="Parallel Kitchen Design"
                                className="rounded-lg shadow-lg w-full"
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <h2 className="text-3xl font-bold text-orange-800 mb-6">
                                Welcome to Adhunik Decodive
                            </h2>
                            <p className="text-gray-700 mb-6">
                                Your trusted partner for premium kitchen interior design in Gurugram, Delhi & NCR. If you're seeking a kitchen that perfectly balances intelligent space utilization with contemporary aesthetics, our parallel kitchen designs are your ideal solution. Often referred to as galley kitchens, these layouts feature two parallel walls equipped with countertops and cabinetry, creating a highly efficient and stylish culinary corridor.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Whether you have a compact apartment in South Delhi or a spacious villa in Gurugram, a modular parallel kitchen by Adhunik Decodive is meticulously crafted to transform your cooking space into a hub of efficiency and elegance.
                            </p>
                            <div className="bg-orange-100 border-l-4 border-orange-500 p-4">
                                <p className="text-orange-800 italic">
                                    At Adhunik Decodive, we blend unparalleled functionality with stunning aesthetics to create your dream kitchen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="bg-orange-800 text-white py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Why Choose a Parallel Kitchen for Your Gurugram or Delhi Home? Unmatched Benefits
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="bg-orange-700 p-6 rounded-lg hover:bg-orange-600 transition duration-300 h-full">
                                    <div className="text-center">
                                        {benefit.icon}
                                        <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                                        <p className="text-orange-100">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Design Philosophy */}
                <div className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-orange-800 text-center mb-12">
                        Adhunik Decodive Design Philosophy: Crafting Your Dream Kitchen in NCR
                    </h2>
                    <p className=" py-5">
                        At Adhunik Decorative, recognized with the India Business Awards 2025 for our excellence, our philosophy is simple: to blend unparalleled functionality with stunning aesthetics. With over 10 years of experience and a portfolio boasting 500+ delighted clients across Gurgaon, Delhi, and the wider NCR, our expertise in modular kitchen interior design is unmatched.

                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="border border-orange-200 rounded-lg p-6">

                            <h3 className="text-xl font-bold text-orange-700 mb-4">Local Expertise, Global Standards</h3>

                            <p className="text-gray-700">
                                As a leading kitchen designer in Gurugram, we understand the unique needs and preferences of homeowners in the region. We combine local insights with international design trends and premium materials.
                            </p>

                        </div>
                        <div className="border border-orange-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-orange-700 mb-4">Collaborative Design Process</h3>
                            <p className="text-gray-700">
                                Your vision is the cornerstone of our projects. We offer 2D and realistic 3D design visualizations to help you explore every detail and ensure the final output precisely matches your dream kitchen.
                            </p>
                        </div>
                        <div className="border border-orange-200 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-orange-700 mb-4">Uncompromising Quality & Durability</h3>
                            <p className="text-gray-700">
                                We are committed to using only the highest quality, durable materials for our parallel modular kitchens. This includes BWP (Boiling Waterproof) Plywood for superior moisture resistance, and premium finishes like Acrylic, PU (Polyurethane), and Laminates that are easy to clean, stain-resistant, and built to last. Our kitchens are crafted for longevity, reducing the need for frequent repairs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}

            </section>



            <section className="relative py-20 bg-gradient-to-b from-orange-50 to-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full">
                            DESIGN INSPIRATION
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Explore Design Ideas & Trends
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Your parallel kitchen in Delhi NCR can be a canvas for innovation. Adhunik Decorative brings you the latest trends and timeless styles.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {designIdeas.map((idea, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeIn}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="p-8 h-full flex flex-col">
                                    <div className="text-orange-600 mb-6 group-hover:text-orange-700 transition-colors">
                                        {idea.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{idea.title}</h3>
                                    <p className="text-gray-600 mb-6 flex-grow">{idea.description}</p>
                               
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Material Spotlight */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Material <span className="text-orange-600">Spotlight</span>
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {materialOptions.map((material, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeIn}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col md:flex-row gap-6"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                                        <FaQuoteLeft className="text-2xl" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{material.category}</h3>
                                    <p className="text-gray-600 leading-relaxed">{material.options}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Functionality Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full">
                            SMART ENGINEERING
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Maximizing Functionality & Ergonomics
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our parallel kitchen designs for Gurgaon homes are not just about looks; they are engineered for peak performance.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {functionalityFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeIn}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <div className="text-orange-600 mb-6">{feature.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            <section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            transition={{ duration: 0.6 }}
                            className="mb-16 text-center"
                        >
                            <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full">
                                BESPOKE DESIGN
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Customization & Personalization
                            </h2>
                            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                                Your Vision, Our Expertise
                            </p>
                        </motion.div>

                        <div className="flex flex-col lg:flex-row gap-12 items-center">
                            <motion.div
                                className="lg:w-1/2"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="bg-orange-50 rounded-xl p-8 shadow-inner">
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                                    <FaPalette className="text-lg" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Tailored Design Process</h3>
                                                <p className="text-gray-600">
                                                    At Adhunik Decorative, we believe your kitchen should be as unique as you are. Our team of expert designers works closely with you to tailor every aspect of your parallel modular kitchen in Delhi NCR to your specific needs, aesthetic preferences, and budget.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                                    <FaLightbulb className="text-lg" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Meticulous Craftsmanship</h3>
                                                <p className="text-gray-600">
                                                    From selecting the ideal finishes and materials to designing custom cabinet configurations, every detail is meticulously crafted to bring your dream kitchen to life.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="lg:w-1/2"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1674316425776-26dbf1a368eb?q=80&w=3125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Custom kitchen design"
                                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6 lg:px-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            transition={{ duration: 0.6 }}
                            className="mb-16 text-center"
                        >
                            <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full">
                                KNOWLEDGE BASE
                            </span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Frequently Asked Questions
                            </h2>
                            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
                        >
                            <div className="p-8">
                                {faqs.map((faq, index) => (
                                    <FAQItem
                                        key={index}
                                        question={faq.question}
                                        answer={faq.answer}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                    <div className="container mx-auto px-6 lg:px-12 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Design Your Dream Parallel Kitchen?
                            </h2>
                            <p className="text-xl mb-10 max-w-3xl mx-auto">
                                Let Adhunik Decorative transform your culinary space into a masterpiece of design and efficiency. With our commitment to quality, innovative solutions, and localized expertise, we are the premier choice for parallel kitchen interior design in Gurugram, Delhi, and NCR.
                            </p>

                            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                                <motion.a
                                href="tel:9355588595"
                                    whilehover={{ y: -5 }}
                                    className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
                                >
                                    <div className="flex items-center justify-center gap-3 mb-4">
                                        <FaPhone className="text-2xl" />
                                        <h3 className="text-xl font-semibold">Call Us</h3>
                                    </div>
                                    <p >9355588595</p>
                                </motion.a>

                                <Link
                                  to="/support-form"
                                    whilehover={{ y: -5 }}
                                    className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
                                >
                                    <div className="flex items-center justify-center gap-3 mb-4">
                                        <FaCalendarAlt className="text-2xl" />
                                        <h3 className="text-xl font-semibold">Book Consultation</h3>
                                    </div>
                                    <p>Schedule a free design session</p>
                                </Link>

                                <motion.a
                                href="https://maps.app.goo.gl/eFmHQELEBv2cXdrP8"
                                    whilehover={{ y: -5 }}
                                    className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
                                >
                                    <div className="flex items-center justify-center gap-3 mb-4">
                                        <FaMapMarkerAlt className="text-2xl" />
                                        <h3 className="text-xl font-semibold">Visit Showroom</h3>
                                    </div>
                                    <p>Gurugram </p>
                                </motion.a>
                            </div>

                            <Link 
                            to="/support-form"
                                whilehover={{ scale: 1.05 }}
                                whiletap={{ scale: 0.95 }}
                                className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-lg"
                            >
                                Contact Us for FREE 3D Design Preview
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </section>

        </>
    )
}

export default PshapeKitchen