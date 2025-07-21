import "./LShapeKitchen.css"
import { Helmet } from "react-helmet-async";

import { useState } from "react";
import PhoneCallButton from "./PhoneCallButton";
import { Link } from "react-router-dom";

import ModalNew from './ModalNew';
import { AdvancedImage } from '@cloudinary/react';
import { ArrowRight, Wand2, PhoneCall } from 'lucide-react';


import { motion } from 'framer-motion';
import {
    FiCalendar,
    FiCheck,
    FiPhone,

} from 'react-icons/fi';

import {
    Gem,
    BarChart3,
    Users,
    LocateFixed,
    ShieldCheck,
    Image as ImageIcon,
    MessageSquare,
    ClipboardList,

    Construction,
    HeartHandshake,
} from 'lucide-react';


import {
    TbArrowsHorizontal,


    TbLayoutGrid,
    TbSettings,
    TbBulb,
    TbMapPin
} from 'react-icons/tb';
import { VscMirror } from "react-icons/vsc";

function SlidingDoorWardrobe() {


    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    const PcardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239635/7_1_bmnrhz_x5j1ov.webp',
            title: '',
            description:
                'With a sleek and contemporary finish sliding wardrobe. Mirrored doors add a touch of luxury and elegance, creating a feeling of spaciousness.',
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239636/8_wrsurk_pyhggk.webp',
            title: '',
            description:
                'Simple and elegant design sliding wardrobes made of white wood for a sleek, modern look.',
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239637/9_ya6jlf_wyf9ek.webp',
            title: '',
            description:
                'Contemporary two-door wardrobe with a champagne laminate finish and a suede finish on the shutters for space saving and ample storage.',
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239640/10_fnqni2_ahxaog.webp',
            title: '',
            description:
                'A sleek lacquered finish light gray sliding  wardrobe with minimalist handles offers clutter-free storage.',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239641/11_jteifh_igjgq6.webp',
            title: '',
            description:
                'a sleek sliding wardrobe featuring two mirrored doors, offering a minimalist aesthetic. Ideal for compact rooms, saving valuable space',
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239650/sw_vvrgby_rm4rr8.webp ',
            title: '',
            description:
                'With geometric pattern sliding wardrobes in teal blue shades with vertical lines of varying widths, and the cool teal shade adds a modern touch.',
        },
        {
            id: 7,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239644/14_uwgozu_ztg7tf.webp',
            title: '',
            description:
                " A sleek wooden finish sliding wardrobe design. Perfect for smaller rooms, it's a classic and practical choice.",
        },

        // Add more card objects as needed
    ];

    const P2cardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239645/15_ucg5gv_fisniw.webp',
            title: '',
            description:
                'Three-door contemporary wardrobe with dark gray, suede-finish laminate shutters.',
        },
        {
            id: 2,
            imageUrl:
                ' https://res.cloudinary.com/dq14b7xie/image/upload/v1748239648/16_wknork_ax1blg.webp ',
            title: '',
            description:
                'Coffee brown contemporary sliding  wardrobe with glossy laminate finish combines style and functionality.',
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239649/17_1_u32jdj_rjhaod.webp ',
            title: '',
            description:
                'the wardrobe has three sliding wooden doors with gold handles for a modern look. Sliding doors save space in bedrooms by eliminating the need for clearance to open',
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239633/6_h7y5hp_sb3kyu.webp ',
            title: '',
            description:
                'Sliding wardrobe design with a two-door, floor-to-ceiling panel configuration with a lacquered glass finish. And a black, metal trim.',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239632/5_sxergk_unqhfl.webp',
            title: '',
            description:
                'A contemporary sliding wardrobe design two sliding doors with alternating opaque white and sunshine yellow panels for a modern and colorful accent.',
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239631/4_xeqbnl_etb0rh.webp ',
            title: '',
            description:
                'The beige sliding wardrobe design with three doors made up of plywood with a polished finish adds a touch of sophistication.',
        },
        {
            id: 7,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239630/3_oqckqp_ac64iw.webp ',
            title: '',
            description:
                'Sliding wardrobe with geometric chevron design in cherry red on lacquered glass doors adding a touch of elegance and contemporary style.',
        },
    ];


    const heroContent = {
        title: "Sliding Wardrobes : Modern Design & Smart Space-Saving Solutions by Adhunik Decodive",
        description: "In the dynamic urban landscapes of Gurugram, Delhi NCR, and the growing cities of Haridwar, Dehradun, Roorkee, Muzaffarnagar, and Meerut, maximizing space without compromising on style is paramount. Sliding wardrobes from Adhunik Decodive offer the perfect solution, blending contemporary aesthetics with intelligent, space-saving functionality. If you're seeking a sleek, modern, and efficient storage system for your home, our custom sliding wardrobes are designed to impress."
    };

    // Why Choose Section Data
    const whyChooseContent = {
        title: "Why Choose Sliding Wardrobes for Your Home?",
        intro: "Sliding door wardrobes are a hallmark of modern interior design, offering distinct advantages for contemporary living:",
        benefits: [
            {
                icon: <TbArrowsHorizontal className="text-2xl" />,
                title: "Exceptional Space-Saving",
                description: "The primary benefit of sliding wardrobes is their ability to save significant floor space. Unlike traditional hinged doors that require clearance to open outwards, sliding doors glide horizontally along a track, making them ideal for smaller bedrooms, narrow hallways, or rooms with limited movement areas.",
                image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1748239649/17_1_u32jdj_rjhaod.webp"
            },
            {
                icon: <TbSettings className="text-2xl" />,
                title: "Smooth & Effortless Operation",
                description: "Engineered with high-quality channels and precision rollers, our sliding doors operate with remarkable smoothness and quietness. Many designs also incorporate soft-closing mechanisms for a premium, gentle close.",
                image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1748239645/15_ucg5gv_fisniw.webp"
            },
            {
                icon: <TbLayoutGrid className="text-2xl" />,
                title: "Design Versatility",
                description: "The expansive surface of sliding doors offers immense creative freedom. They can incorporate a variety of materials, including full-length mirrors, elegant glass panels, or striking combinations of different finishes, allowing for a truly unique and personalized statement.",
                image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1748239640/10_fnqni2_ahxaog.webp"
            },
            {
                icon: <VscMirror className="text-2xl" />,
                title: "Dust Protection",
                description: "The overlapping nature of sliding doors generally provides better protection against dust compared to open or hinged wardrobe systems, keeping your clothes and belongings cleaner.",
                image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1748239644/14_uwgozu_ztg7tf.webp"
            }
        ]
    };

    // Customization Options Data
    const customizationContent = {
        title: "Unleash Your Vision: Customization Options for Sliding Wardrobes",
        intro: "At Adhunik Decodive, every sliding wardrobe is a bespoke creation, tailored to your specific needs, style, and space.",
        options: [
            {
                icon: <VscMirror className="text-2xl" />,
                title: "Panel Materials & Finishes",
                image: "/images/panel-materials.jpg",
                features: [
                    "Laminates & Veneers: A wide range of colors, textures (wood grain, solid, high-gloss, matte) offering durability and versatile aesthetics.",
                    "Mirrored Panels: Visually expand your room, adding depth and serving as a convenient full-length dressing mirror.",
                    "Glass Panels (Lacquered, Frosted, Tinted): Introduce a touch of modern sophistication, allowing for light play while maintaining privacy.",
                    "Acrylic: For a high-gloss, vibrant, and contemporary look that is also highly durable.",
                    "Mixed Materials: Combine different materials on individual panels for a dynamic and personalized design statement."
                ]
            },
            {
                icon: <TbLayoutGrid className="text-2xl" />,
                title: "Internal Configurations",
                image: "/images/internal-config.jpg",
                features: [
                    "Maximize your storage efficiency with fully customizable interiors.",
                    "Options include adjustable shelves, multiple hanging rods (single or double), pull-out drawers with dividers, specialized trouser racks, shoe organizers, and accessory trays.",
                    "Our data-driven approach ensures an optimized layout for your specific needs."
                ]
            },
            {
                icon: <TbSettings className="text-2xl" />,
                title: "Track Systems & Mechanisms",
                image: "/images/track-systems.jpg",
                features: [
                    "Choose from top-hung systems for a floating look or bottom-rolling systems for robust support.",
                    "We ensure premium hardware for smooth, silent operation and offer integrated soft-closing technology."
                ]
            },

            {
                icon: <TbBulb className="text-2xl" />,
                title: "Integrated Lighting",
                image: "/images/wardrobe-lighting.jpg",
                features: [
                    "Enhance visibility and ambiance with internal LED lighting, motion-sensor lights, or accent lighting within your wardrobe."
                ]
            }
        ]
    };

    // Service Areas Data
    const serviceAreas = [
        "Gurugram", "Delhi", "Noida", "Faridabad",
        "Ghaziabad", "Haridwar", "Dehradun",
        "Roorkee", "Muzaffarnagar", "Meerut"
    ];


    const adhunikDifferenceData = [
        {
            icon: <Gem size={32} className="text-orange-500" />,
            title: 'Precision & Craftsmanship',
            description:
                'Every sliding wardrobe is a testament to our meticulous attention to detail. We combine the finest materials with state-of-the-art European machinery and skilled craftsmanship to deliver flawless finishes and enduring quality.',
        },
        {
            icon: <BarChart3 size={32} className="text-orange-500" />,
            title: 'Strategic & Data-Driven Design',
            description:
                'Our design philosophy integrates data analysis to create wardrobes that are not just beautiful but also optimally functional. We analyze space utilization and design trends to ensure your wardrobe is a smart, high-impact investment for your home.',
        },
        {
            icon: <Users size={32} className="text-orange-500" />,
            title: 'Personalized Consultation & 3D Visualization',
            description:
                'Our expert designers work closely with you, understanding your lifestyle and preferences. We then bring your vision to life with detailed 3D designs, allowing you to visualize and refine every aspect of your custom sliding wardrobe before it’s crafted.',
        },
        {
            icon: <LocateFixed size={32} className="text-orange-500" />,
            title: 'Seamless Installation Across North India',
            description:
                'Our dedicated and highly skilled installation team ensures a swift, clean, and professional assembly at your residence in Gurugram, Delhi, Noida, Faridabad, Ghaziabad, Haridwar, Dehradun, Roorkee, Muzaffarnagar, or Meerut. We guarantee a hassle-free experience from the initial concept to the final, perfect installation.',
        },
        {
            icon: <ShieldCheck size={32} className="text-orange-500" />,
            title: 'Uncompromising Quality & Comprehensive Warranty',
            description:
                'We stand by the longevity and performance of our sliding wardrobes with robust warranties, providing you with complete peace of mind.',
        },
    ];

    // --- Data for the "Design Process" section ---
    // Using a similar data structure for our process steps.
    const designProcessData = [
        {
            icon: <MessageSquare className="h-8 w-8 text-white" />,
            title: 'Initial Consultation',
            description:
                'We start by understanding your needs, space, and style preferences, either virtually or with a visit to your home.',
        },
        {
            icon: <ImageIcon className="h-8 w-8 text-white" />,
            title: 'Design & 3D Rendering',
            description:
                'Our designers create custom layouts and present realistic 3D visualizations, allowing you to review and approve the design.',
        },
        {
            icon: <ClipboardList className="h-8 w-8 text-white" />,
            title: 'Material & Finish Selection',
            description: 'Choose from our premium range of materials, finishes, and hardware with expert guidance.',
        },
        {
            icon: <Wand2 className="h-8 w-8 text-white" />,
            title: 'Precision Manufacturing',
            description: 'Your wardrobe is meticulously crafted using advanced techniques and quality materials.',
        },
        {
            icon: <Construction className="h-8 w-8 text-white" />,
            title: 'Professional Installation',
            description: 'Our skilled team ensures efficient and precise installation at your location.',
        },
        {
            icon: <HeartHandshake className="h-8 w-8 text-white" />,
            title: 'Post-Installation Support',
            description: 'We offer comprehensive after-sales support to ensure your continued satisfaction.',
        },
    ];

    const portfolioData = [
        {
            src: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239635/7_1_bmnrhz_x5j1ov.webp', // Replace with your image in the /public folder
            title: 'Modern Oak Finish',
            location: 'Gurugram, Haryana',
            alt: 'A modern sliding wardrobe with an oak wood finish.',
        },
        {
            src: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239637/9_ya6jlf_wyf9ek.webp', // Replace with your image
            title: 'Minimalist High-Gloss',
            location: 'Dehradun, Uttarakhand',
            alt: 'A minimalist high-gloss white sliding wardrobe.',
        },
        {
            src: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239650/sw_vvrgby_rm4rr8.webp', // Replace with your image
            title: 'Space-Saving Mirrored Doors',
            location: 'Noida, NCR',
            alt: 'A sliding wardrobe with large mirrored doors to save space.',
        },
    ];


    return (
        <>



            <Helmet>
                <title>Custom Sliding Wardrobes—Gurugram, Delhi NCR, Meerut | Adhunik Decodive</title>
                <meta name="description" content="Transform your home with custom sliding wardrobes from Adhunik Decodive. Modern designs, premium finishes & expert installation across Gurugram, Delhi NCR, Dehradun, Muzaffarnagar & more. Explore now!" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
                <link rel="canonical" href="https://adhunikdecodive.com/sliding-door-wardrobes" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>

                <meta property="og:title" content="Custom Sliding Wardrobes—Gurugram, Delhi NCR, Meerut | Adhunik Decodive" />
                <meta property="og:description" content="Transform your home with custom sliding wardrobes from Adhunik Decodive. Modern designs, premium finishes & expert installation across Gurugram, Delhi NCR, Dehradun, Muzaffarnagar & more. Explore now!" />
                <meta property="og:url" content="https://adhunikdecodive.com/sliding-door-wardrobes"></meta>
                <meta property="og:site_name" content="Adhunik Decodive - Interior Design Experts" />
                <meta property="og:locale" content="en_IN"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:image" content="https://res.cloudinary.com/dq14b7xie/image/upload/v1748239635/7_1_bmnrhz_x5j1ov.webp" />
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:title" content="Custom Sliding Wardrobes—Gurugram, Delhi NCR, Meerut | Adhunik Decodive" />
                <meta name="twitter:description" content="Transform your home with custom sliding wardrobes from Adhunik Decodive. Modern designs, premium finishes & expert installation across Gurugram, Delhi NCR, Dehradun, Muzaffarnagar & more. Explore now!" />
                <meta name="twitter:image" content="https://res.cloudinary.com/dq14b7xie/image/upload/v1748239635/7_1_bmnrhz_x5j1ov.webp" />
                <meta name="keywords" content="custom sliding wardrobes Gurugram, modern wardrobes Delhi NCR, space-saving wardrobes Dehradun, sleek wardrobe designs Meerut, modular sliding closets Roorkee, efficient storage Muzaffarnagar, Adhunik Decodive sliding, contemporary almirah, wooden wardrobes" />


            </Helmet>


            <ModalNew isOpen={openModal} onClose={toggleModal} />

            <div className="w-full bg-white p-3 md:p-5  svg4 "  >


                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <p className="text-5xl font-semibold p-3 md:p-9">
                            Sliding Wardrobe Designs
                        </p>
                    </div>
                </div>


                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
                        <p className="text-1xl md:w-[70%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
                            Revamp your bedroom effortlessly with our sleek sliding  wardrobe designs. To maximize the space and elevate your décor, these sleek storage solutions redefine the way you organize your wardrobe. Crafted with a range of premium finishes, including glass and mirrored panels, our wardrobes seamlessly blend form and function, allowing you to create a personalized, clutter-free haven. Customize your unit with adjustable shelves, drawers, and compartments to suit your unique needs. Say goodbye to the frustration of a cluttered closet and hello to a harmonious, visually stunning bedroom.
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

                        <div className="pt-14">

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


                <div className="bg-white">


                    {/* Hero Section */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative bg-gradient-to-r rounded-full mt-12 from-gray-900 to-gray-800 text-white py-28 px-4 overflow-hidden"
                    >
                        <div className=" flex p-2  flex-col  md:flex-row   text-center md:text-left gap-9 max-w-6xl mx-auto relative z-10">
                            <motion.h1
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl md:text-3xl font-bold mb-6 leading-tight"
                            >
                                {heroContent.title}
                            </motion.h1>
                            <motion.p
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-md  text-justify text-gray-300 max-w-3xl"
                            >
                                {heroContent.description}
                            </motion.p>
                        </div>
                        <div className="absolute inset-0 bg-[url('/images/sliding-hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
                    </motion.section>

                    {/* Why Choose Section */}
                   <section className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-4">
                        {whyChooseContent.title}
                    </h2>
                    <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
                        {whyChooseContent.intro}
                    </p>
                </motion.div>

                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {whyChooseContent.benefits.map((benefit, index) => (
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
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">{benefit.title}</h3>
                                </div>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                            
                            {/* Responsive Image Container */}
                            <div className="mt-auto aspect-video w-full relative">
                                <img
                                    src={benefit.image}
                                    alt={benefit.title}
                                   
                                   
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

                    {/* Customization Section */}
                    <section className="bg-gray-50 py-20 px-4">
                        <div className="max-w-6xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">{customizationContent.title}</h2>
                                <p className="text-gray-600 max-w-4xl mx-auto">{customizationContent.intro}</p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 gap-10">
                                {customizationContent.options.map((option, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-white rounded-xl overflow-hidden shadow-lg"
                                    >

                                        <div className="p-8">
                                            <div className="flex items-center gap-3 mb-4">
                                                {option.icon}
                                                <h3 className="text-xl font-bold text-gray-800">{option.title}</h3>
                                            </div>
                                            <ul className="space-y-3">
                                                {option.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <FiCheck className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                                                        <span className="text-gray-700">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Service Areas */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-7xl mx-auto md:py-2 px-4"
                    >
                        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-8 text-white">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="bg-white/20 p-4 rounded-full">
                                    <TbMapPin className="text-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl text-center md:text-left font-bold mb-2">Serving Across North India</h3>
                                    <p className="opacity-90 md:text-left text-center">
                                        {serviceAreas.join(" • ")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.section>


                    <main className="bg-gray-50 text-gray-800">
                        {/* Section 1: The Adhunik Decodive Difference */}
                        <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8">
                            <div className="container mx-auto">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">The Adhunik Decodive Difference</h2>
                                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                                        When you choose Adhunik Decodive for your sliding wardrobe, you're choosing unparalleled quality,
                                        strategic design, and a seamless experience across Gurugram, Delhi NCR, and beyond.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                                    {/* Image Placeholder */}
                                    <div className="lg:col-span-2 h-96 lg:h-full w-full rounded-lg overflow-hidden shadow-xl">
                                        <img
                                            src="https://i.pinimg.com/736x/a8/e3/ba/a8e3bac86f1909f42c7f587b7cdf484e.jpg" // <-- REPLACE WITH YOUR IMAGE
                                            alt="Modern sliding wardrobe by Adhunik Decodive"

                                            className="w-full h-full object-cover"

                                        />
                                    </div>

                                    {/* Features mapped from data array */}
                                    <div className="lg:col-span-3   grid grid-cols-1 gap-6">
                                        {adhunikDifferenceData.map((feature, index) => (
                                            <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                                <div className="flex-shrink-0 mr-4 bg-orange-100 p-3 rounded-full">
                                                    {feature.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold">{feature.title}</h3>
                                                    <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Our Sliding Wardrobe Design Process */}
                        <section className="    py-20 px-4 sm:px-6 lg:px-8">
                            <div className="container mx-auto">
                                <div className="text-center mb-16">
                                    <h2 className="text-2xl font-extrabold tracking-tight  ">Our Sliding Wardrobe Design Process: From Concept to Creation</h2>
                                    <p className="mt-4 text-md   max-w-3xl mx-auto">
                                        Your journey to a perfect sliding wardrobe with Adhunik Decodive is structured for clarity and satisfaction.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {designProcessData.map((step, index) => (
                                        <div key={index} className="flex flex-col   p-6 rounded-xl shadow-lg   transition-colors duration-300">
                                            <div className="flex items-center mb-4">
                                                <div className="bg-orange-500 p-3 rounded-full mr-4">
                                                    {step.icon}
                                                </div>
                                                <h3 className="text-xl font-bold  ">{step.title}</h3>
                                            </div>
                                            <p className=" ">{step.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </main>

                    <section className="bg-orange-50/50 py-16 lg:py-24">
                        <div className="container mx-auto px-4">
                            <div className="max-w-3xl mx-auto text-center mb-12">

                                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                                    Discover Our Sliding Wardrobe Portfolio
                                </h2>

                                <p className="mt-4 text-justify text-lg text-slate-600">
                                    Explore a curated collection of our recently completed sliding wardrobe projects. See how Adhunik Decodive has transformed homes with modern, space-saving, and custom-designed sliding wardrobes across Gurugram, Delhi NCR, Haridwar, Dehradun, Roorkee, Muzaffarnagar, and Meerut.
                                </p>

                            </div>

                            {/* --- Image Gallery Grid --- */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                                {portfolioData.map((item, index) => (
                                    <div key={index} className="group relative block w-full aspect-w-1 aspect-h-1 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                                            <h3 className="text-white text-xl font-bold">{item.title}</h3>
                                            <p className="text-orange-200/90 text-sm">{item.location}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center">
                                <a href="/wardrobes" className="inline-flex items-center justify-center bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300 transform hover:scale-105">
                                    View Our Sliding Wardrobe Gallery
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* === CTA SECTION === */}
                   

                       <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          className="relative "
                        >
                          <div className="bg-gradient-to-r  m-4 md:m-5 from-orange-600 to-amber-600 rounded-3xl shadow-2xl overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                              <div className="p-12 lg:p-16">
                                <h3 className="text-2xl text-center md:text-left md:text-3xl font-bold text-white mb-4">
                               Ready to Design Your Custom Sliding Wardrobe ?

                    </h3>
                                <p className="text-orange-100   text-sm text-center md:text-left">
                 Optimize your space and elevate your home with the sleek design and smart functionality of a custom sliding wardrobe by Adhunik Decodive.


                      </p>
                                <p className="text-orange-100 mb-8 text-sm  text-center md:text-left">
                    Let our expert team help you design the ideal sliding wardrobe for your home. Schedule a no-obligation consultation now to begin your journey.

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
                </div>






            </div>


        </>
    )
}

export default SlidingDoorWardrobe