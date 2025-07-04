
import "./LShapeKitchen.css"
import { Helmet } from "react-helmet-async";


import { motion } from 'framer-motion';
import { ArrowRight, Wand2, PhoneCall, BookImage } from 'lucide-react';

import ModalNew from './ModalNew';
import { useState } from "react";
import PhoneCallButton from "./PhoneCallButton"; 
import {
    Maximize, Palette, Gem, Settings, Star,
    Layers3, PanelTop, Grip, Wrench, Lightbulb
} from 'lucide-react';
 
import { AdvancedImage } from '@cloudinary/react';
import {
  
  BarChart3,
  Users,
  LocateFixed,
  ShieldCheck,
  MessageSquare,
  ClipboardCheck,
   
   
  Construction,
  HeartHandshake
} from 'lucide-react';
import { Link } from "react-router-dom";


function ShutterDoorWardrobe() {


    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
      };


    const PcardData = [
        {
            id: 1,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787134/7_a47fb9_ndcqfx.webp',
            title: '',
            description:
                ' Shutter  wardrobes with shades of green and white hue made of wooden dresser with three drawers.',
        },
        {
            id: 2,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788426/8_hxhlwq_unvxvc.webp',
            title: '',
            description:
                'A shutter  wardrobe with a handleless design with a matte finish and reaches the ceiling for maximum storage space.',
        },
        {
            id: 3,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787143/10_swso5e_uvw4yx.webp',
            title: '',
            description:
                'A contemporary two white, shutter  wardrobes with gold-toned pulls a shelf unit for showcasing decorative objects.',
        },
        {
            id: 4,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788436/11_enjzqn_xine4q.webp',
            title: '',
            description:
                'A clean and contemporary shutter  wardrobes design with a neutral gray color and black handles',
        },
        {
            id: 5,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787150/12_nlhxz5_zyzbyw.webp',
            title: '',
            description:
                'Simple shutter  wardrobes with yellow and gray colored wood and silver handles.',
        },
        {
            id: 6,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788446/14_meldw6_vkxhcm.webp',
            title: '',
            description:
                'The off-white shutter  wardrobes with drawers and a mirror made up of wood with a glossy finish.',
        },
        {
            id: 7,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788450/15_n8tldp_mjxl9v.webp',
            title: '',
            description:
                'The built-in shutter  wardrobes with a smooth, laminate green finish with a contemporary, minimalist design.',
        },

        // Add more card objects as needed
    ];

    const P2cardData = [
        {
            id: 1,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787163/16_y6ttql_xy6lim.webp',
            title: '',
            description:
                'Wooden shutter  wardrobes design with chevron pattern and offer ample storage space creating geometric aesthetic.',
        },
        {
            id: 2,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787166/17_dsisju_zxsonf.webp',
            title: '',
            description:
                'shutter  wardrobes with a lacquered finish forest green color and integrated pulls with a polished gold finish, with touch of sophistication. ',
        },
        {
            id: 3,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787118/2door_anczh8_ejew4y.webp',
            title: '',
            description:
                'A pair of contemporary, shutter door wooden wardrobes with a natural wood finish reinforces the modern, minimalist aesthetic.',
        },
        {
            id: 4,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788478/19_uhtobz_ygevi4.webp',
            title: '',
            description:
                'White shutter  wardrobes with a chevron pattern. Made for durability with high-quality laminated board and pvc edges. Gold metal handles add a touch of style.',
        },
        {
            id: 5,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787112/2_DOOR_iygeqp_geugi6.webp',
            title: '',
            description:
                'Pair of built-in shutter  wardrobes with a white laminate finish and wooden panel with ample storage capacity.',
        },
        {
            id: 6,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788247/21_mhqbgn_coobjp.webp',
            title: '',
            description:
                'Wooden shutter  wardrobe with a glossy finish offering a sleek and contemporary aesthetic look',
        },
        {
            id: 7,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788443/13_pdrznd_bukmze.webp',
            title: '',
            description:
                ' Shutter  wardrobes with shades of green and white hue made of wooden dresser with three drawers.',
        },
    ];

   
    const whyChooseData = {
    title: "Why Choose Shutter Wardrobes for Your Home?",
    intro: "Shutter wardrobes, also known as hinged door wardrobes, are a perennial favourite for many compelling reasons:",
    benefits: [
        {
            icon: <Maximize size={24} />,
            title: "Full Accessibility",
            description: "Unlike sliding doors, hinged doors open wide, providing a complete and unobstructed view of your entire wardrobe interior. This makes organizing, accessing, and selecting your outfits incredibly easy and efficient.",
            image: "https://images.unsplash.com/photo-1611048268330-53de574cae3b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with relevant image
        },
        {
            icon: <Palette size={24} />,
            title: "Timeless Aesthetic",
            description: "Shutter wardrobes exude a classic charm that seamlessly integrates with various interior design styles, from traditional and colonial to contemporary and minimalist. Their versatility allows for a wide range of design expressions.",
            image: "https://images.unsplash.com/photo-1665827488607-2c8f6ed98a69?q=80&w=2167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with relevant image
        },
        {
            icon: <Gem size={24} />,
            title: "Robust Durability",
            description: "Known for their sturdy construction, shutter wardrobes often provide a sense of solidity and longevity. When crafted with high-quality materials and precision engineering, they are built to last.",
            image: "https://images.unsplash.com/photo-1631067128698-2f4f8ce87e28?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with relevant image
        },
        {
            icon: <Settings size={24} />,
            title: "Design Versatility",
            description: "The individual panels of shutter doors offer immense design flexibility. They can be adorned with various handles, decorative moldings, or unique paneling, allowing for a truly personalized look.",
            image: "https://images.unsplash.com/photo-1640357154220-9775b0f31dec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with relevant image
        },
        {
            icon: <Star size={24} />,
            title: "Integrated Features",
            description: "Hinged doors can incorporate internal hooks, tie racks, or even small mirrors on the inside, adding extra utility to your storage.",
            image: "https://images.unsplash.com/photo-1723258338919-96a200e87cab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with relevant image
        }
    ]
};

// --- DATA FOR "CUSTOMIZATION OPTIONS" SECTION ---
const customizationData = {
    title: "Unleash Your Style: Customization Options for Shutter Wardrobes",
    intro: "At Adhunik Decodive, we believe your wardrobe should be as unique as you are. Our shutter wardrobes are fully customizable to meet your exact aesthetic and functional requirements:",
    options: [
      
     
        {
            icon: <Grip size={24} />,
            title: "Handles & Hardware",
            description: "Select from a wide range of handles – sleek profiles, classic knobs, contemporary bar handles, or even handle-less push-to-open mechanisms for a seamless look. We ensure high-quality hinges for smooth and silent operation.",
        },
        {
            icon: <Wrench size={24} />,
            title: "Internal Configurations",
            description: "Design the perfect interior with adjustable shelves, multiple hanging rods (single or double), pull-out drawers with dividers, specialized trouser racks, shoe shelves, and accessory organizers. Our data-driven approach ensures an optimized layout for your specific needs.",
         },
        {
            icon: <Lightbulb size={24} />,
            title: "Integrated Lighting",
            description: "Enhance visibility and ambiance with internal LED lighting, motion-sensor lights, or accent lighting within your wardrobe.",
        },
           {
            icon: <PanelTop size={24} />,
            title: "Shutter Styles",
            description: "Choose from classic flush doors, elegant routed patterns, breathable louvred designs, or multi-panelled configurations.",
        },
          {
            icon: <Layers3 size={24} />,
            title: "Materials & Finishes",
            // Using an array for list items for clean rendering
            list: [
                "Laminates: A vast array of colors, textures (wood grain, solid, high-gloss, matte) offering durability and easy maintenance.",
                "Veneers: Achieve the natural beauty of real wood with options like Teak, Oak, Walnut, and various polishing techniques for a rich, luxurious feel.",
                "Acrylic: For a sleek, high-gloss, and vibrant look that is also highly durable and scratch-resistant.",
                "Lacquered Glass: Offers a sophisticated, reflective surface in a spectrum of colors, adding a contemporary touch.",
                "Solid Wood: The ultimate choice for timeless elegance, offering superior durability and the possibility of intricate carvings."
            ],
        },
    ]
};


// Generic Card component to avoid repetition
const FeatureCard = ({ item, index }) => (
    <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden"
    >
        <div className="p-6 lg:p-8">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-100 text-orange-600 p-3 rounded-full flex-shrink-0">
                    {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
            </div>
            {item.description && <p className="text-gray-600 px-2">{item.description}</p>}
            {item.list && (
                <ul className="space-y-2 mt-2 text-gray-600">
                    {item.list.map((point, i) => (
                        <li key={i} className="  flex items-start">
                           <span className="text-orange-500 font-bold mr-2 mt-1">&#8227;</span> 
                           <span>{point}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
     
    </motion.div>
);


const differenceData = [
  {
    icon: <Gem size={24} className="text-orange-600" />,
    title: 'Precision & Craftsmanship',
    description: 'Every shutter wardrobe is a testament to our meticulous attention to detail. We combine the finest materials with state-of-the-art European machinery and skilled craftsmanship to deliver flawless finishes and enduring quality.',
  },
  {
    icon: <BarChart3 size={24} className="text-orange-600" />,
    title: 'Strategic & Data-Driven Design',
    description: 'Our design philosophy integrates data analysis to create wardrobes that are not just beautiful but also optimally functional. We analyze space utilization and design trends to ensure your wardrobe is a smart, high-impact investment for your home.',
  },
  {
    icon: <Users size={24} className="text-orange-600" />,
    title: 'Personalized Consultation & 3D Visualization',
    description: 'Our expert designers work closely with you, understanding your lifestyle and preferences. We then bring your vision to life with detailed 3D designs, allowing you to visualize and refine every aspect of your custom shutter wardrobe before it\'s crafted.',
  },
  {
    icon: <LocateFixed size={24} className="text-orange-600" />,
    title: 'Seamless Installation Across North India',
    description: 'Our dedicated and highly skilled installation team ensures a swift, clean, and professional assembly at your residence in Gurugram, Delhi, Noida, Faridabad, Ghaziabad, Haridwar, Dehradun, Roorkee, Muzaffarnagar, or Meerut. We guarantee a hassle-free experience from the initial concept to the final, perfect installation.',
  },
  {
    icon: <ShieldCheck size={24} className="text-orange-600" />,
    title: 'Uncompromising Quality & Comprehensive Warranty',
    description: 'We stand by the longevity and performance of our shutter wardrobes with robust warranties, providing you with complete peace of mind.',
  },
];

// --- DATA FOR "OUR SHUTTER WARDROBE DESIGN PROCESS" ---
const processData = [
  {
    icon: <MessageSquare size={32} />,
    title: 'Initial Consultation',
    description: 'We start by understanding your needs, space, and style preferences, either virtually or with a visit to your home.',
  },
  {
    icon: <ClipboardCheck size={32} />,
    title: 'Design & 3D Rendering',
    description: 'Our designers create custom layouts and present realistic 3D visualizations, allowing you to review and approve the design.',
  },
  {
    icon: <Palette size={32} />,
    title: 'Material & Finish Selection',
    description: 'Choose from our premium range of materials, finishes, and hardware with expert guidance.',
  },
  {
    icon: <Wand2 size={32} />,
    title: 'Precision Manufacturing',
    description: 'Your wardrobe is meticulously crafted using advanced techniques and quality materials.',
  },
  {
    icon: <Construction size={32} />,
    title: 'Professional Installation',
    description: 'Our skilled team ensures efficient and precise installation at your location.',
  },
  {
    icon: <HeartHandshake size={32} />,
    title: 'Post-Installation Support',
    description: 'We offer comprehensive after-sales support to ensure your continued satisfaction.',
  },
];


 const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

    return (
        <>



<Helmet>
    <title>Shutter Wardrobes in Gurugram, Delhi NCR & North India | Adhunik Decodive</title>
    <meta name="description" content="Discover elegant shutter wardrobes by Adhunik Decodive. Offering classic designs, full accessibility & custom finishes in Gurugram, Delhi NCR, Dehradun, Haridwar, Meerut & more. Get a free consultation!" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
    <link rel="canonical" href="https://adhunikdecodive.com/shutter-door-wardrobe" /> 
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>

    <meta property="og:title" content="Shutter Wardrobes in Gurugram, Delhi NCR & North India | Adhunik Decodive" />
    <meta property="og:description" content="Discover elegant shutter wardrobes by Adhunik Decodive. Offering classic designs, full accessibility & custom finishes in Gurugram, Delhi NCR, Dehradun, Haridwar, Meerut & more. Get a free consultation!" />
    <meta property="og:url" content="https://adhunikdecodive.com/shutter-door-wardrobe"></meta>
    <meta property="og:site_name" content="Adhunik Decodive - Interior Design Experts" />
    <meta property="og:locale" content="en_IN"></meta>
    <meta property="og:type" content="website"></meta>
    <meta property="og:image" content="https://adhunikdecodive.com/images/shutter-wardrobe-social-share.jpg" />
    <meta name="twitter:card" content="summary_large_image"></meta>
    <meta name="twitter:title" content="Shutter Wardrobes in Gurugram, Delhi NCR & North India | Adhunik Decodive" />
    <meta name="twitter:description" content="Discover elegant shutter wardrobes by Adhunik Decodive. Offering classic designs, full accessibility & custom finishes in Gurugram, Delhi NCR, Dehradun, Haridwar, Meerut & more. Get a free consultation!" />
    <meta name="twitter:image" content="https://adhunikdecodive.com/images/shutter-wardrobe-social-share.jpg" />
    <meta name="keywords" content="shutter wardrobes Gurugram, hinged wardrobes Delhi NCR, classic wardrobe designs Haridwar, wooden shutter wardrobes Dehradun, custom almirah Meerut, traditional wardrobes Roorkee, full access wardrobes Muzaffarnagar, Adhunik Decodive shutter, bespoke hinged closets" />
    
   
    
</Helmet>


<ModalNew  isOpen={openModal} onClose={toggleModal}  />
    
            <div className="w-full bg-white p-3 md:p-5 svg4">


            <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <p className="text-5xl font-semibold p-3 md:p-9">
            Shutter  Wardrobe Designs
            </p>
          </div>
        </div>
               

                <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
            <p className="text-1xl md:w-[70%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
            Living spaces deserve to be both stylish and functional. But when overflowing closets leave you feeling like you're wrestling with an avalanche of clothes, it's time to upgrade your storage game. Enter the world of shutter  wardrobes – where organization meets elegance with more functionality. But functionality isn't the only story. Adhunik Deco offers a stunning selection of shutter  wardrobes, designed to complement any décor. Explore the design and discover a variety of finishes, materials, and styles to find the perfect match for your unique space. Whether you crave a sleek and modern aesthetic or a touch of classic elegance, there's a shutter  wardrobe waiting to transform your bedroom into a haven of organized style
            </p>
          </div>
        </div>
 
                <div className=" w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

                    {PcardData.map((card) => (
                        <div key={card.id} className="max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden">
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
                                <h2 className="text-base font-medium text-blue-gray-900 mb-2">{card.title}</h2>
                                <p className="text-sm text-gray-700 opacity-75 leading-normal mb-4">{card.description}</p>
                                <div className="flex justify-between">
                                        <PhoneCallButton />
                                     <button   onClick={toggleModal}  className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
<span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
<span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
<span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
<span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease text-[14px]"> Get Free Quote</span>
</button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="  max-w-md w-full mx-auto my-auto h-[50vh]  text-white  bg-gradient-to-r from-[#41303e]  to-[#815379] bg-[ ,] shadow-md rounded-xl overflow-hidden">

                        <div className=" pt-14">

                            <div className="text-center p-5">
                                <h1 className="text-base font-light text-blue-gray-900 mb-2"> Kitchen Designs With</h1>
                                <p className="text-2xl font-bold  leading-normal mb-4">High Quality Materials</p>
                                <p>Starting <br /> <span className=" text-3xl">₹50,000</span></p>
                            </div>

                            <div className="flex justify-center">
                            <button  onClick={toggleModal} className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
<span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
<span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-[110deg]   ease"></span>
<span className="relative text-white">Get Free Consultation</span>
</button>

                            </div>
                        </div>
                    </div>

                    {P2cardData.map((card) => (
                        <div key={card.id} className="max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden">
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
                                <h2 className="text-base font-medium text-blue-gray-900 mb-2">{card.title}</h2>
                                <p className="text-sm text-gray-700 opacity-75 leading-normal mb-4">{card.description}</p>
                                <div className="flex justify-between">
                                        <PhoneCallButton />
                                     <button   onClick={toggleModal}  className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
<span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
<span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
<span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
<span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease text-[14px]"> Get Free Quote</span>
</button>
                                </div>
                            </div>
                        </div>
                    ))}




                </div>


            </div>


<section className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                {/* Main Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-4">
                        Shutter Wardrobes: Timeless Elegance & Unmatched Accessibility
                    </h1>
                    <p className="text-gray-600 md:text-lg max-w-4xl mx-auto">
                        In homes across Gurugram, Delhi NCR, Haridwar, Dehradun, Roorkee, Muzaffarnagar, and Meerut, the classic appeal of shutter wardrobes remains a captivating presence. At Adhunik Decodive, we specialize in designing and crafting exquisite hinged wardrobes that offer a perfect blend of enduring style, robust durability, and unparalleled accessibility. If you appreciate traditional aesthetics combined with modern functionality, our custom shutter wardrobes are the ideal storage solution for your home.
                    </p>
                </motion.div>

                {/* --- Section 1: Why Choose --- */}
                <div className="mb-16 md:mb-24">
                     <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">{whyChooseData.title}</h2>
                     <p className="text-gray-600 md:text-lg max-w-3xl mx-auto text-center mb-10 md:mb-12">{whyChooseData.intro}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {whyChooseData.benefits.map((benefit, index) => (
                            <FeatureCard item={benefit} index={index} key={`why-${index}`} />
                        ))}
                    </div>
                </div>

                {/* --- Section 2: Customization --- */}
                <div>
                     <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">{customizationData.title}</h2>
                     <p className="text-gray-600 md:text-lg max-w-3xl mx-auto text-center mb-10 md:mb-12">{customizationData.intro}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {customizationData.options.map((option, index) => (
                            <FeatureCard item={option} index={index} key={`custom-${index}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>



 <section className="bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        
        {/* --- SECTION 1: THE ADHUNIK DECODIVE DIFFERENCE --- */}
        <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              The Adhunik Decodive Difference: Crafting Your Ideal Shutter Wardrobe
            </h2>
            <p className="text-gray-600 md:text-lg mb-8">
              When you choose Adhunik Decodive for your shutter wardrobe, you're choosing unparalleled quality, strategic design, and a seamless experience across Gurugram, Delhi NCR, and beyond.
            </p>
            <div className="space-y-6">
              {differenceData.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-orange-100 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Single Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 lg:mt-0"
          >
            <div className="aspect-w-3 aspect-h-4 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop" // Replace with your hero image
                alt="Beautifully crafted shutter wardrobe by Adhunik Decodive"
                
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* --- SECTION 2: OUR SHUTTER WARDROBE DESIGN PROCESS --- */}
        <div className="mt-24 lg:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Our Shutter Wardrobe Design Process
            </h2>
            <p className="text-gray-600 md:text-lg mt-4 max-w-3xl mx-auto">
              Your journey to a perfect shutter wardrobe with Adhunik Decodive is structured for clarity and satisfaction:
            </p>
          </motion.div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processData.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative"
              >
                <div className="absolute top-4 right-4 text-6xl font-extrabold text-gray-100 -z-1">
                  0{index + 1}
                </div>
                <div className="mb-4 inline-block bg-orange-600 text-white p-4 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>

            <section className="min-h-screen bg-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        
        {/* Left Column: Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative h-64 w-full lg:h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1614631446501-abcf76949eca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2FyZHJvYmV8ZW58MHx8MHx8fDA%3D"
            alt="A beautiful custom shutter wardrobe in a luxury home"
           
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:bg-gradient-to-r"></div>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center justify-center bg-slate-50"
        >
          <motion.div
            variants={containerVariants}
            className="max-w-md p-8 sm:p-12"
          >
            {/* --- Portfolio Section --- */}
            <div className="mb-10">
              <div className="mb-4 flex items-center gap-3 text-orange-600">
                <BookImage size={24} />
                <h2 className="text-sm font-bold uppercase tracking-widest">
                  Our Portfolio
                </h2>
              </div>
              <h3 className="text-3xl font-bold text-slate-900">
                Discover Our Shutter Wardrobe Portfolio
              </h3>
              <p className="mt-4 text-slate-600">
                Explore a curated collection of our recently completed shutter wardrobe projects. See how Adhunik Decodive has transformed homes with elegant, functional, and custom-designed hinged wardrobes across Gurugram, Delhi NCR, Haridwar, Dehradun, Roorkee, Muzaffarnagar, and Meerut.
              </p>
            </div>
            
            {/* --- Divider --- */}
            <hr className="my-10 border-slate-200" />
            
            {/* --- CTA Section --- */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Ready to Design Your Custom Shutter Wardrobe?
              </h3>
              <p className="mt-4 text-slate-600">
                Elevate your home with the classic charm and superior functionality of a custom shutter wardrobe by Adhunik Decodive.
              </p>
              
              <div className="mt-8 space-y-4">
                <Link to='/support-form' className="flex w-full items-center justify-center gap-3 bg-orange-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-orange-700 hover:shadow-xl hover:shadow-orange-500/30 focus:outline-none focus:ring-4 focus:ring-orange-300 rounded-lg">
                  <Wand2 />
                  Request a Free Design Consultation
                </Link>
                 <p className="text-center text-sm text-slate-500">
                  Let our expert team help you design the ideal shutter wardrobe for your home. Schedule a no-obligation consultation now to begin your journey.
                </p>
              </div>

              <div className="mt-8 text-center">
                <p className="text-slate-500">Prefer to speak with us directly?</p>
                <a href="tel:9355588595" // <-- Add your phone number here
                   className="mt-1 inline-flex items-center gap-2 font-semibold text-orange-600 transition-colors hover:text-orange-800">
                  <PhoneCall size={16} />
                  Call Us Now
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>  

            
        </>
        
    )
}

export default ShutterDoorWardrobe