
import "./LShapeKitchen.css"
import { Helmet } from "react-helmet-async";

import ModalNew from './ModalNew';
import { useState } from "react";
import PhoneCallButton from "./PhoneCallButton";

import { AdvancedImage } from '@cloudinary/react';

import { motion } from "framer-motion";
import {
    FiStar,
    FiAward,
    FiArrowRight,
    FiClipboard,
    FiHeadphones,
    FiImage,
    FiCalendar,
    FiPhone,
} from 'react-icons/fi';
import {
    GiClothesline,

    GiMirrorMirror,
    GiStickFrame,
    GiWoodFrame,
} from 'react-icons/gi';
import {
    MdClosedCaption,
    MdDesignServices,
    MdLightbulbOutline,
} from 'react-icons/md';

import {
    FiSun,
    FiCheckCircle, FiTrendingUp,
    FiUsers, FiTruck, FiShield
} from 'react-icons/fi';


import { MdOutlineDesignServices, MdPrecisionManufacturing } from 'react-icons/md';
import { Ruler } from "lucide-react";
import { Link } from "react-router-dom";



function WalkDoorWardrobe() {



    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    };



    const PcardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241044/1_g2mb9b.webp',
            title: '',
            description:
                'A spacious walk-in closet with custom light wood cabinets and drawers. Center island for additional storage creating a well-organized look.',
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241045/2_j2baem.webp',
            title: '',
            description:
                ' walk-in closet with a cool blue paint finish with open compartments and a large mirror r a space-saving and functional design.',
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241048/3_nwyacp.webp',
            title: '',
            description:
                'A contemporary walk-in closet design with white closet doors and gold hardware for ample storage with built-in drawers, shelves. ',
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241051/4_mundsx.webp',
            title: '',
            description:
                'The walk-in closet with dark brown wooden shelves and drawers providing ample storage and sophisticated look.',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241054/5_avvmze.webp',
            title: '',
            description:
                'A well-organized walk-in closet with shelves, drawers likely made from a classic wood for durability and timeless style. For clean and sophisticated touch.',
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241057/6_z4knt4.webp',
            title: '',
            description:
                'A large walk-in closet with a light wood finish with plenty of shelves and drawers for storage for clean and airy aesthetic.',
        },
        {
            id: 7,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241060/7_ah0nhr.webp',
            title: '',
            description:
                'The walk-in closets with classic materials like cherry rich include a cozy vanity corner for a touch of glamour and trendy design.',
        },

        // Add more card objects as needed
    ];

    const P2cardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241079/8_qllqws.webp',
            title: '',
            description:
                'A large walk-in closet with sliding glass doors made of light colored woodgrain finish maintaining a sleek and modern aesthetic.',
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241082/9_z3u4pm.webp',
            title: '',
            description:
                'A minimalist Scandinavian walk-in closet with light wood tones, clean lines, and uncluttered storage, reflecting the Scandinavian design aesthetic.',
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241085/10_xguaxf.webp',
            title: '',
            description:
                ' spacious custom walk-in closets with white wood shelves, drawers and hanging light all in sleek finish.',
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241089/11_zcxi9a.webp',
            title: '',
            description:
                'A luxurious walk-in closet featuring a built-in dressing table with a mirror. A white wood finish offers sleek storage with drawers, shelves.',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241092/12_f83ibb.webp',
            title: '',
            description:
                '  Spacious and well-organized a white walk-in closet with shelves, drawers and hanging rails.',
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241095/13_cg3uyw.webp',
            title: '',
            description:
                'A contemporary walk-in closet made from high-grade wood. With a combination of drawers and shelves integrated with led light for visually appealing space.',
        },
        {
            id: 7,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241098/14_higzua.webp',
            title: '',
            description:
                'Luxurious walk-in wardrobe with sleek white wood finish for seamless blend of style and functionality.',
        },
    ];


    const wardrobeBenefits = [
        {
            icon: <MdClosedCaption className="w-6 h-6" />,
            title: "Maximized Storage Capacity",
            description: "Unlike standard wardrobes, walk-ins utilize every inch of available space, offering unparalleled capacity for extensive clothing collections, seasonal wear, and accessories."
        },
        {
            icon: <GiClothesline className="w-6 h-6" />,
            title: "Superior Organization & Accessibility",
            description: "With dedicated sections for every item—from hanging rails for gowns and suits to specialized drawers for jewelry and ties, and bespoke shoe racks—everything is visible and easily accessible."
        },
        {
            icon: <FiStar className="w-6 h-6" />,
            title: "Personalized Experience",
            description: "A walk-in closet is truly a bespoke creation. It's designed around your specific lifestyle, wardrobe size, and aesthetic preferences."
        },
        {
            icon: <FiAward className="w-6 h-6" />,
            title: "Adds Value & Appeal",
            description: "A well-designed walk-in wardrobe significantly enhances the luxury and functionality of your home, contributing to its overall appeal and potentially increasing property value."
        },
        {
            icon: <GiMirrorMirror className="w-6 h-6" />,
            title: "A Private Sanctuary",
            description: "More than just storage, a walk-in closet often serves as a private dressing room, offering a serene and personal space for grooming and styling."
        },
        {
            icon: <MdLightbulbOutline className="w-6 h-6" />,
            title: "Integrated Lighting & Features",
            description: "From internal LED strip lighting to motion-sensor illumination, full-length mirrors, and even integrated vanity units, walk-ins can incorporate features that elevate both utility and ambiance."
        }
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };



    const customizationOptions = [
        {
            icon: <Ruler className="w-6 h-6" />,
            title: "Layout & Zoning",
            description: "Design dedicated zones for formal wear, casual attire, shoes, handbags, and accessories. Options include U-shaped, L-shaped, or straight-line configurations to best fit your space"
        },
       
        {
            icon: <GiWoodFrame className="w-6 h-6" />,
            title: "Materials & Finishes",
            description: "Choose from premium laminates, luxurious veneers, sleek acrylic, sophisticated lacquered glass, or rich solid wood. Combine materials for a unique, high-end look."
        },
        {
            icon: <FiSun className="w-6 h-6" />,
            title: "Lighting Solutions",
            description: "Integrate internal LED lighting strips, spot lighting, or backlit panels to illuminate your wardrobe contents and enhance the luxurious feel"
        },
       {
  icon: <GiMirrorMirror className="w-6 h-6" />,
  title: "Integrated Features",
  description: "Consider incorporating thoughtful additions like a vanity mirror with comfortable seating, a dedicated dressing table, or an elegantly lit display area for showcasing prized accessories, perfumes, or designer pieces—blending convenience with luxury in daily routines."
},
{
  icon: <MdOutlineDesignServices className="w-6 h-6" />,
  title: "3D Visualization",
  description: "Experience your wardrobe before it's built with cutting-edge 3D design tools that allow you to visualize every shelf, drawer, and detail. Make confident choices by seeing layouts, colors, and space utilization in a realistic, interactive format."
}
,
         {
            icon: <GiClothesline className="w-6 h-6" />,
            title: "Specialized Storage",
            description: <>
                <ul className="list-disc pl-5">
  <li><strong>Hanging Rails:</strong> Double or single rails for varying garment lengths.</li>
  <li><strong>Drawers:</strong> Custom sizes with dividers for jewelry, lingerie, ties, and belts.</li>
  <li><strong>Shelving:</strong> Adjustable open shelves for folded clothes, sweaters, and display items.</li>
  <li><strong>Shoe Storage:</strong> Tiered racks, pull-out shelves, or dedicated cubbies for footwear collections.</li>
  <li><strong>Pull-Out Accessories:</strong> Trouser racks, laundry hampers, and ironing boards that discreetly tuck away.</li>
  <li><strong>Island Units:</strong> A central island provides additional storage, counter space, or even seating.</li>
</ul>

            </>
        },
    ];

    const advantages = [
        {
            icon: <MdPrecisionManufacturing className="w-6 h-6" />,
            title: "Precision & Craftsmanship",
            description: "Every component of your walk-in wardrobe is a testament to our meticulous attention to detail. We combine the finest materials with state-of-the-art European machinery and skilled craftsmanship, ensuring flawless finishes and enduring quality."
        },
        {
            icon: <FiTrendingUp className="w-6 h-6" />,
            title: "Strategic & Data-Driven Design",
            description: "Our design philosophy integrates a data-driven approach to create walk-in wardrobes that are not just beautiful but also optimally efficient. We analyze space utilization and design trends to ensure your wardrobe is a smart, high-impact investment, maximizing functionality and value for your home"
        },
        {
            icon: <FiUsers className="w-6 h-6" />,
            title: "Personalized Consultation & 3D Visualization",
            description: "Our expert designers work closely with you from the outset, understanding your lifestyle, precise space requirements, and aesthetic preferences. We then bring your vision to life with detailed 3D designs, allowing you to visualize and refine every aspect of your custom walk-in closet before it’s crafted."
        },
        {
            icon: <FiTruck className="w-6 h-6" />,
            title: "Seamless Installation Across North India",
            description: "Our dedicated and highly skilled installation team ensures a swift, clean, and professional assembly at your residence in Gurugram, Delhi, Noida, Faridabad, Ghaziabad, Haridwar, Dehradun, Roorkee, Muzaffarnagar, or Meerut. We guarantee a hassle-free experience from the initial concept to the final, perfect installation."
        },
        {
            icon: <FiShield className="w-6 h-6" />,
            title: "Uncompromising Quality & Comprehensive Warranty",
            description: "We stand by the longevity and performance of our walk-in wardrobes with robust warranties, providing you with complete peace of mind in your investment."
        }
    ];



    const designProcess = [
  {
    icon: <FiClipboard className="w-6 h-6" />,
    title: "Initial Consultation & Needs Assessment",
    description: "We begin with an in-depth discussion to understand your specific requirements, available space, lifestyle, and aesthetic vision for your dream walk-in closet",
    color: "from-red-200 to-orange-200"
  },
  {
    icon: <MdDesignServices className="w-6 h-6" />,
    title: "Design & 3D Rendering",
    description: "Our designers will craft preliminary layouts, followed by realistic 3D renderings that allow you to explore every detail and make adjustments, ensuring the design perfectly matches your expectations",
    color: "from-red-300 to-orange-300"
  },
  {
    icon: <GiStickFrame className="w-6 h-6" />,
    title: "Material & Finish Selection",
    description: "Choose from our premium range of materials, luxurious finishes, and high-quality accessories, with expert guidance to select options that align with your style and budget.",
    color: "from-red-200 to-orange-200"
  },
  {
    icon: <MdPrecisionManufacturing className="w-6 h-6" />,
    title: "Precision Manufacturing",
    description: "Once the design is finalized, your walk-in wardrobe components are meticulously crafted using advanced techniques and superior materials in our state-of-the-art facility.",
    color: "from-red-300 to-orange-300"
  },
  {
    icon: <FiTruck className="w-6 h-6" />,
    title: "Professional Installation",
    description: " Our experienced installation team ensures efficient and precise assembly at your location, followed by a thorough quality check to guarantee perfection.",
    color: "from-red-200 to-orange-200"
  },
  {
    icon: <FiHeadphones className="w-6 h-6" />,
    title: "Post-Installation Support",
    description: "Our commitment extends beyond installation. We provide excellent after-sales support to ensure your complete satisfaction and the long-term enjoyment of your Adhunik Decodive walk-in wardrobe.",
    color: "from-red-300 to-orange-300"
  }
];

 

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};


    return (

        <>

            <Helmet>
                <title>Walk-in Wardrobes & Closets | Gurugram, Delhi NCR | Adhunik Decodive</title>
                <meta name="description" content="Discover luxurious custom walk-in wardrobes & closets by Adhunik Decodive. Maximize organization & style in Gurugram, Delhi NCR, Dehradun, Haridwar, Meerut & more. Get a free consultation!" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
                <link rel="canonical" href="https://adhunikdecodive.com/walk-in-wardrobes" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>

                <meta property="og:title" content="Walk-in Wardrobes & Closets | Gurugram, Delhi NCR | Adhunik Decodive" />
                <meta property="og:description" content="Discover luxurious custom walk-in wardrobes & closets by Adhunik Decodive. Maximize organization & style in Gurugram, Delhi NCR, Dehradun, Haridwar, Meerut & more. Get a free consultation!" />
                <meta property="og:url" content="https://adhunikdecodive.com/walk-in-wardrobes"></meta>
                <meta property="og:site_name" content="Adhunik Decodive - Interior Design Experts" />
                <meta property="og:locale" content="en_IN"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:image" content="https://adhunikdecodive.com/images/walk-in-wardrobe-social-share.jpg" />
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:title" content="Walk-in Wardrobes & Closets | Gurugram, Delhi NCR | Adhunik Decodive" />
                <meta name="twitter:description" content="Discover luxurious custom walk-in wardrobes & closets by Adhunik Decodive. Maximize organization & style in Gurugram, Delhi NCR, Dehradun, Haridwar, Meerut & more. Get a free consultation!" />
                <meta name="twitter:image" content="https://adhunikdecodive.com/images/walk-in-wardrobe-social-share.jpg" />
                <meta name="keywords" content="walk-in wardrobes Gurugram, walk-in closets Delhi NCR, luxury wardrobes Dehradun, bespoke walk-in Haridwar, dressing rooms Meerut, organized closet Roorkee, premium walk-in Muzaffarnagar, Adhunik Decodive walk-in, custom closet design India" />



            </Helmet>

            <ModalNew isOpen={openModal} onClose={toggleModal} />


            <div className="w-full bg-white p-3 md:p-5 svg4 "  >


                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <p className="text-5xl font-semibold p-3 md:p-9">
                            Walk in Wardrobe Designs
                        </p>
                    </div>
                </div>


                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
                        <p className="text-1xl md:w-[70%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
                            Tired of the daily struggle against overflowing drawers and cramped hangers? Walk-in wardrobes are the ultimate game-changers, saying goodbye to the cluttered closet, you'll embrace a spacious sanctuary solely devoted to your wardrobe. Imagine stepping into a world of organized bliss, where every outfit choice feels effortless and inspiring. We'll unveil the key differences between walk-in wonders and traditional closets, showcasing how these personalized spaces can seriously boost your organization and elevate your daily fashion experience. Prepare to be wowed by a collection of stunning walk-in wardrobe designs that will have you itching to create your own stylish sanctuary. Embrace the freedom and joy of a walk-in wardrobe and take your closet to new heights of efficiency and style.
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
                                    <button onClick={toggleModal} className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
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
                                <button onClick={toggleModal} className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
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
                                    <button onClick={toggleModal} className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
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

            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
                {/* Background gradient elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                </div>

                {/* Header section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 relative "
                >
                    <div className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-white text-sm font-medium mb-6 shadow-lg">
                        <FiStar className="mr-2" />
                        Luxury Storage Solutions
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Walk-in Wardrobes: <span className="text-orange-600">The Epitome of Luxury & Organization</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                        by <span className="font-bold text-orange-700">Adhunik Decodive</span>
                    </p>
                    <motion.p
                        className="text-md text-justify  text-gray-700 max-w-5xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Imagine a dedicated space designed precisely for your entire collection—a place where every garment, accessory, and pair of shoes has its perfect spot. At Adhunik Decodive, we specialize in creating bespoke walk-in wardrobes that transform ordinary spaces into luxurious, highly organized sanctuaries. For discerning homeowners across Gurugram, Delhi NCR, Haridwar, Dehradun, Roorkee, Muzaffarnagar, and Meerut, our custom walk-in closets represent the ultimate statement in sophisticated living and efficient storage.
                    </motion.p>
                </motion.div>

                {/* Benefits section */}
                <div className="relative  ">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-center mb-16"
                    >
                        <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why a Walk-in Wardrobe is the <span className="text-orange-600">Ultimate Choice</span> for Your Home
                        </h3>
                        <p className="text-md text-gray-600 max-w-3xl mx-auto">
                            Walk-in wardrobes offer an unmatched blend of style, functionality, and personal indulgence
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {wardrobeBenefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className=" flex flex-col justify-center md:items-start items-center text-center  md:text-left bg-gradient-to-b from-white to-orange-50/50 p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="bg-gradient-to-r from-orange-100 to-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                                    {benefit.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                                <p className="text-gray-600">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-24 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl shadow-2xl overflow-hidden"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12 lg:p-16">
                            <h3 className="text-3xl text-center md:text-left font-bold text-white mb-4">Ready to Transform Your Space?</h3>
                            <p className="text-amber-100 text-center md:text-left  mb-8">
                                Schedule a consultation with our design experts to create your dream walk-in wardrobe.
                            </p>
                            <Link to="/support-form" className=" z-2 relative flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg shadow-md hover:bg-gray-50 transition-all cursor-pointer text-center md:text-left  group">
                                Book Free Consultation
                                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="hidden lg:block relative">
                            <img
                                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                                alt="Luxury wardrobe design"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-600/70 via-orange-500/30 to-transparent"></div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 overflow-hidden bg-gradient-to-b from-white to-amber-50/30">
                {/* Background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-300/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                </div>

                {/* Header section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.8 }}
                    className="text-center px-2 mb-20 relative "
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        <span className="text-orange-600">Bespoke Design</span> : Customization Options
                    </h2>
                    <motion.p
                        className="text-md  text-justify  text-gray-700 max-w-5xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        At Adhunik Decodive, your walk-in wardrobe is limited only by your imagination. We craft highly personalized solutions with an array of customization options to transform your space across Gurugram, Delhi NCR, Haridwar, Dehradun, Roorkee, Muzaffarnagar, and Meerut.
                    </motion.p>
                </motion.div>

                {/* Customization options */}
                <div className="relative  mb-28">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {customizationOptions.map((option, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center text-center md:text-left md:items-start  md:justify-start hover:-translate-y-2"
                            >
                                <div className="bg-gradient-to-r from-orange-100 to-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                                    {option.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h4>
                                <p className="text-gray-600">{option.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* The Adhunik Decodive Difference */}
                <div className="relative ">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-white text-sm font-medium mb-6 shadow-lg">
                            <FiCheckCircle className="mr-2" />
                            The Adhunik Decodive Difference
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Your Partner for <span className="text-orange-600">Luxury Walk-in Wardrobes</span>
                        </h3>
                        <p className="text-md text-justify px-4 text-gray-600 max-w-3xl mx-auto">
Choosing Adhunik Decodive means collaborating with experts who blend exquisite design with strategic functionality, ensuring a seamless experience for your walk-in wardrobe project across our service regions.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {advantages.map((advantage, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gradient-to-b from-white to-orange-50 p-6 rounded-xl shadow-md border border-orange-100 hover:shadow-lg transition-all"
                            >
                                <div className="bg-orange-100/50 p-3 rounded-lg w-12 h-12 flex items-center justify-center text-orange-600 mb-4">
                                    {advantage.icon}
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h4>
                                <p className="text-gray-600 text-sm">{advantage.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Full-width image showcase */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mt-24 rounded-3xl overflow-hidden shadow-2xl relative h-96 w-full"
                >
                    <img
                        src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
                        alt="Luxury walk-in wardrobe"
                        className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-12">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-2">Experience the Adhunik Decodive Standard</h3>
                            <p className="text-orange-100 mb-6 max-w-2xl">
                                Where precision engineering meets exquisite design to create your perfect wardrobe sanctuary
                            </p>
                            <Link to="/support-form" className=" w-fit flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg shadow-md transition-all group">
                                Schedule Showroom Visit
                                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>


             <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden bg-white">
    {/* Background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-300/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </div>

    {/* Header section */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      transition={{ duration: 0.8 }}
      className="text-center mb-20 relative "
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        Our <span className="text-orange-600">Walk-in Wardrobe</span> Design Process : From Concept to Creation
      </h2>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto">
Embarking on your journey to a perfect walk-in wardrobe with Adhunik Decodive is a structured and satisfying experience:
      </p>
    </motion.div>

    {/* Design process timeline */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative  mb-28"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {designProcess.map((step, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
            <div className={`relative bg-gradient-to-br ${step.color} p-8 rounded-2xl shadow-lg border border-orange-100 h-full transition-all duration-300 group-hover:-translate-y-2`}>
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-orange-600 shadow-sm">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="absolute bottom-3 right-6 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm text-white  font-bold  ">Step {index + 1}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Portfolio CTA */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative  mb-28"
    >
      <div className="bg-gradient-to-r from-orange-50 to-orange-50 rounded-3xl p-12 shadow-inner border border-orange-100">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-white text-sm font-medium mb-6 shadow-lg">
            <FiImage className="mr-2" />
            Portfolio Showcase
          </div>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Our <span className="text-orange-600">Walk-in Wardrobe</span> Portfolio
          </h3>
          <p className="text-md text-justify text-gray-600 mb-8 max-w-3xl mx-auto">
Ready to be inspired by the possibilities? Explore a curated collection of our recently completed walk-in wardrobe projects. See how Adhunik Decodive has transformed spaces into organized havens of luxury across Gurugram, Delhi NCR, Haridwar, Dehradun, Roorkee, Muzaffarnagar, and Meerut.
          </p>
          <Link to='/wardrobes' className="  w-fit px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-medium rounded-lg shadow-md transition-all text-sm flex items-center mx-auto group">
            View Our Gallery
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>

    {/* Consultation CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative "
    >
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-16">
            <h3 className="text-2xl text-center md:text-left md:text-3xl font-bold text-white mb-4">Ready to Design Your Ultimate Walk-in Wardrobe?</h3>
            <p className="text-orange-100   text-sm text-center md:text-left">
Unlock the full potential of your space and transform your home with the unparalleled luxury and organization of a custom walk-in wardrobe by Adhunik Decodive.
            </p>
            <p className="text-orange-100 mb-8 text-sm  text-center md:text-left">
Let our expert team help you design the ideal walk-in closet for your home. Schedule a no-obligation consultation now to begin your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to='/support-form' className="flex-1 flex items-center justify-center px-6 py-4 bg-white text-orange-600 font-medium rounded-lg shadow-md hover:bg-gray-50 transition-all group text-sm">
                <FiCalendar className="mr-2" />
                Free Design Consultation
              </Link>
              <a href="tel:9355588595" className="flex-1 flex items-center justify-center px-6 py-4 bg-transparent border-2 border-orange-300 text-white font-medium rounded-lg hover:bg-amber-500/20  text-sm transition-all group">
                <FiPhone className="mr-2" />
                Call Us Directly
              </a>
            </div>
          </div>
          <div className="hidden lg:block relative h-full min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Luxury walk-in wardrobe"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-600/70 via-orange-500/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <p className="text-orange-200 font-medium">Serving Across North India</p>
              <p className="text-sm text-orange-100">Gurugram | Delhi NCR | Haridwar | Dehradun | Roorkee | Muzaffarnagar | Meerut</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
        </>
    )
}

export default WalkDoorWardrobe