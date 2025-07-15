
import "./LShapeKitchen.css"

import { useState } from 'react'
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
import {      Droplets,   Heart, Zap, RulerIcon,   HammerIcon } from 'lucide-react';
import {      Settings,  } from 'lucide-react';

import {
  CheckCircle2,
  
  HardHat,
  ShieldCheck,
  Leaf,
  DollarSign,

  Package,
   
  ArrowRightIcon
} from 'lucide-react';

 

function SshapeKitchen() {


    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    };


    const PcardData = [
        {
            id: 1,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786409/2_xdjj6e_t09yy6.webp',
            title: '',
            description:
                'Modern straight kitchen highlighting the polished cabinets with sleek acrylic doors for a clean, contemporary look',
        },
        {
            id: 2,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786424/7_ktjxg5_cce33e.webp',
            title: '',
            description:
                'Straight modular kitchen design with a contemporary colour palette of crisp white countertops and cobalt blue cabinets',
        },
        {
            id: 3,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786431/10_x0dvfn_lbfg1i.webp',
            title: '',
            description:
                'Straight kitchen stuns with a mix of vibrant green cabinets for a shot of energy, balanced by crisp white acrylic cabinets',
        },
        {
            id: 4,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786434/11_fadufs_zws2cr.webp',
            title: '',
            description:
                'Straight modern kitchen with green wooden cabinets with Glossy finish and white countertops for a spacious feel',
        },
        {
            id: 5,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786437/12_sw5dds_kn1gyj.webp',
            title: '',
            description:
                ' A modern straight kitchen with dark elegance with sleek acrylic doors for a polished look and countertops in quartz sophisticated space',
        },
        {
            id: 6,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786440/13_i5wzro_cb6lnm.webp',
            title: '',
            description:
                'Modern White and Green Straight Kitchen Design with Quartz Countertop with Laminate in suede finish',
        },
        {
            id: 7,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786443/14_qaiwym_tjeqq7.webp',
            title: '',
            description:
                'Modern straight kitchen with green cabinets and white countertops. Ideal for smaller spaces.',
        },

        
    ];



    const P2cardData = [
        {
            id: 1,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786446/15_rcpvkf_zkjntb.webp',
            title: '',
            description:
                'Contemporary straight  kitchen with  high-gloss cobalt cabinetry with integrated pulls, and light-colored countertops',
        },
        {
            id: 2,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786448/16_ezwbao_mftant.webp',
            title: '',
            description:
                'The modern kitchen features sleek, high-gloss cabinets in a light wood tone with integrated pulls. Light colored countertops for clean look',
        },
        {
            id: 3,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786452/17_orvojw_hvtnea.webp',
            title: '',
            description:
                'Modern kitchen combines cool blue cabinets with warm wooden countertops  and open shelves  for a stylish contrast',
        },
        {
            id: 4,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786454/18_b1jkyt_uzjtd1.webp',
            title: '',
            description:
                'Gray flat-panel cabinets with chrome pulls and quartz countertops offer a bright workspace creating a sleek look for a modern kitchen',
        },
        {
            id: 5,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786461/19_ycdqv2_e0c9p1.webp',
            title: '',
            description:
                'Modern kitchen design with light blue color cabinets and countertops with integrated pulls add a modern touch for sleek and stylish look',
        },
        {
            id: 6,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786464/20_aukye8_a8pn4t.webp',
            title: '',
            description:
                'Modern kitchen with high-gloss cabinets and integrated pulls. Light countertops balance a sleek, sophisticated look',
        },
        {
            id: 7,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786466/21_tpw90d_keolzj.webp',
            title: '',
            description:
                'Flat-panel orange cabinets pop against dark countertops,with a glossy cream backsplash Chrome pulls complete the chic look',
        },
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

    const benefits = [
        {
            icon: <FaExpandAlt className="text-3xl text-orange-600" />,
            title: "Optimal Space Utilization",
            description: "Designed to make the absolute best use of limited space, our straight kitchens consolidate all essential elements along a single wall. This maximizes floor area, making even the smallest kitchens feel open and uncluttered."
        },
        {
            icon: <FaBoxOpen className="text-3xl text-orange-600" />,
            title: "Streamlined Efficiency & Workflow",
            description: "The linear arrangement of the 'kitchen triangle' (sink, stove, refrigerator) ensures a highly ergonomic and efficient workflow. Everything you need is within easy reach, transforming cooking from a chore into a pleasure"
        },
        {
            icon: <FaUsers className="text-3xl text-orange-600" />,
            title: "Modern, Minimalist Aesthetics",
            description: "Embrace the beauty of simplicity with Adhunik Decodive's straight kitchen designs. Their clean lines, uncluttered surfaces, and sleek finishes create a sophisticated, contemporary look that complements any modern interior."
        },
        {
            icon: <FaProjectDiagram className="text-3xl text-orange-600" />,
            title: "Cost-Effective Solutions",
            description: "By utilizing fewer materials and a simpler layout, straight modular kitchens can be a more budget-friendly option without compromising on quality, durability, or style. Adhunik Decodive ensures you get maximum value for your investment."
        },
        {
            icon: <FaGem className="text-3xl text-orange-600" />,
            title: "Versatility & Adaptability",
            description: " Whether you envision a minimalist haven, a vibrant culinary space, or a smart, integrated kitchen, the straight layout offers immense flexibility for customization to reflect your unique taste."
        },
       
    ];


        const signatureDesigns = [
        {
            icon: <FaUtensils className="text-3xl text-orange-600" />,
            title: "Unmatched Customization & Design Flexibility",
            description: <>
<div>
<p className=" text-sm">
    Your vision is our blueprint. Choose from a wide array of options to personalize every detail:

</p>
    <ul>
        <li className=" font-thin">
<strong className=" font-bold text-orange-500">Diverse Color Themes :</strong> From serene neutrals like white, grey, and beige to bold accents like navy blue or emerald green, select the perfect palette to match your home's aesthetic.

        </li>

        <li className=" font-thin">
<strong className=" font-bold text-orange-500">Premium Finishes :</strong>  Explore our range of high-quality finishes including: 
        </li>



        <li className=" font-thin">

<strong className=" font-bold text-orange-500">Laminate :</strong>          Durable, resistant to wear and tear, and available in countless textures.

        </li>
        <li className=" font-thin">
<strong className=" font-bold text-orange-500">Acrylic :</strong>   Offers a high-gloss, mirror-like finish for a luxurious, contemporary look.

        </li>
        <li className=" font-thin">
<strong className=" font-bold text-orange-500"> PU (Polyurethane) :</strong>  Known for its hard-wearing, scratch-resistant, and smooth finish.

        </li>
        <li className=" font-thin">
<strong className=" font-bold text-orange-500">PVC (Polyvinyl Chloride) :</strong>  Impervious to water, highly durable, and economical.

        </li>

            <li className=" font-thin">
<strong className=" font-bold text-orange-500">High-Quality Materials : </strong>  We utilize superior-grade engineered wood (HDHMR, MDF, Particle Board) and plywood (MR, BWR, BWP) for longevity and stability.


        </li>

        <li className=" font-thin">
<strong className=" font-bold text-orange-500">Countertops & Backsplashes :</strong>   Select from elegant granite, versatile quartz, seamless Corian, and a variety of stunning backsplash tiles to add character and functionality.
 
        </li>





    </ul>
</div>
            </>,
        },


        {
            icon: <FaChair className="text-3xl text-orange-600" />,
            title: "Smart Storage Solutions for Every Need",
            description:
             <>
<div>
<p className=" text-sm">
Maximize utility with Adhunik Decodive's innovative storage features, ensuring a clutter-free and organized kitchen:

</p>
    <ul>

        <li className=" font-thin">
<strong className=" font-bold text-orange-500">Integrated Appliances : </strong>  Seamlessly blend refrigerators, ovens, and dishwashers into your cabinetry for a streamlined, cohesive look.



        </li>

        <li className=" font-thin">
<strong className=" font-bold text-orange-500"> Pull-out Units :</strong>  Smart pull-out pantries, corner units, and drawer organizers keep essentials accessible and tidy.

 
        </li>

        <li className=" font-thin">
<strong className=" font-bold text-orange-500"> Overhead & Base Cabinets :</strong>   Thoughtfully designed cabinetry to store everything from extra plates to large appliances.

 
        </li>

        <li className=" font-thin">
<strong className=" font-bold text-orange-500">  Open Shelving :</strong>  Incorporate stylish open shelves for display, adding personality and easy access to frequently used items.


 
        </li>

    </ul>
</div>
            </>,
        },


        {
            icon: <FaBoxes className="text-3xl text-orange-600" />,
            title: "Enhancing Functionality : Islands & Lighting",
            description: 
           <>
<div>
<p className=" text-sm">
Even a straight kitchen can benefit from strategic additions :

</p>
    <ul>

        <li className=" font-thin">
<strong className=" font-bold text-orange-500"> Kitchen Islands & Peninsulas : </strong>  For larger open-plan spaces, integrating a compact island or peninsula can significantly enhance counter space, provide an informal dining area, and add extra storage.


        </li>

        <li className=" font-thin">
<strong className=" font-bold text-orange-500">  Strategic Lighting :  </strong>Illuminate your culinary space with task lighting under cabinets, ambient recessed lights, and decorative pendant lights over an island or dining area to create the perfect ambiance.


 
        </li>

     

    </ul>
</div>
            </>,
        },
      
    ];

    const premiumMaterials = [
        {
            icon: <FaGem className="text-3xl text-orange-600" />,
            category: "Customer-Centric Approach",
            options: "We listen to your desires, providing tailored options that reflect how you want your home to look and function."
        },
        {
            icon: <FaBoxes className="text-3xl text-orange-600" />,
            category: "Trending & Timeless Designs",
            options: "Our skilled designers ensure your kitchen features the latest trends while maintaining timeless elegance and functionality, making you proud of your straight modular kitchen."
        },
        {
            icon: <FaUtensils className="text-3xl text-orange-600" />,
            category: "Quality & Affordability",
            options: "We provide top-quality products within an affordable range, utilizing innovative design tactics to maintain superior craftsmanship without compromise."
        },
       
    ];

    

 
    


    return (
        <>

           
<Helmet>
<title>Straight Kitchen Interior Design | Modern & Modular in Delhi | Adhunik Decodive</title>
<meta data-react-helmet="true" data-n-head="ssr" data-rh="true" name="description" content="Transform your home with Adhunik Decodive's sleek straight kitchen designs in Delhi. Explore space-saving modular solutions, premium finishes & expert craftsmanship for your dream kitchen. Get a free consultation!" />
<meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
<link rel="canonical" href="https://adhunikdecodive.com/straight-modular-kitchen" data-react-helmet="true" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
 
<meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
<meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
<meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Straight Kitchen Interior Design | Modern & Modular in Delhi | Adhunik Decodive" />
<meta data-n-head="ssr" data-hid="keywords" name="keywords" content="straight kitchen interior design Delhi, modular straight kitchen, one wall kitchen design, linear kitchen solutions, compact kitchen interior, small kitchen design, modern straight kitchen, Adhunik Decodive straight kitchens" />
<meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
<meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
<meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary_large_image"></meta>
 
<meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Transform your home with Adhunik Decodive's sleek straight kitchen designs in Delhi. Explore space-saving modular solutions, premium finishes & expert craftsmanship for your dream kitchen. Get a free consultation!" />
<meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/straight-modular-kitchen"></meta>
<meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Interior Design Experts" />
<meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Straight Kitchen Interior Design | Modern & Modular in Delhi | Adhunik Decodive" />
<meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Transform your home with Adhunik Decodive's sleek straight kitchen designs in Delhi. Explore space-saving modular solutions, premium finishes & expert craftsmanship for your dream kitchen. Get a free consultation!" />

</Helmet>


            <ModalNew isOpen={openModal} onClose={toggleModal} />



        

            <div className="w-full bg-white p-3 md:p-5 svg "  >

                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <p className="text-5xl font-semibold p-9">  Straight Kitchen Designs</p>
                    </div>
                </div>

                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
                        <p className="text-1xl md:w-[90%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
                            Maximize efficiency in tight spaces with a straight kitchen layout! This space-saving design, also known as a single-wall or in-line kitchen, features all your essential appliances, cabinets, and countertops neatly arranged along one wall. Ideal for studios, small apartments, or even secondary kitchens in larger homes, straight kitchens optimize limited square footage without sacrificing functionality. Imagine a streamlined workspace that allows for easy movement and a well-defined workflow, perfect for whipping up culinary creations. Straight kitchens boast clever features like sliding doors and hidden drawers to maximize storage and minimize clutter. This layout can even accommodate a dining table within the kitchen itself, fostering a more interactive cooking experience. So, embrace the simplicity and efficiency of a straight kitchen design – it might be the perfect recipe for your dream compact kitchen. Gain design inspiration from the gallery below, featuring a variety of high-end kitchens.
                        </p>
                    </div>
                </div>



                <div className=" w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

                    {PcardData.map((card) => (
                        <div key={card.id} className="max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden">
                            <div className="relative h-80">
                            <AdvancedImage
              src={card.imageUrl} // Assuming `imageUrl` contains the Cloudinary image identifier
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
<span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"> Get Free Quote</span>
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
Unlock the Potential of Your Space with Adhunik Decodive's Straight Kitchen Designs
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
                                Transform Your Home with a Modern Straight Kitchen Design
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                         Are you looking for a kitchen that perfectly blends modern aesthetics with unparalleled functionality, especially in a compact living area? Adhunik Decodive brings you Straight Kitchen Interior Design solutions that redefine efficiency and style. Also known as "One-Wall Kitchens" or "Linear Kitchens," this layout is the epitome of smart design, ideal for contemporary apartments, studio homes, and any space where every square inch counts.

                            </p>
                            <p className="text-lg text-gray-600">
At Adhunik Decodive, we understand that your kitchen is the heart of your home. Our straight modular kitchens are meticulously crafted to ensure a clean, airy, and supremely functional space, allowing for effortless movement and a joyous cooking experience.
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
Why Choose a Straight Modular Kitchen from Adhunik Decodive?
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
The enduring popularity of straight kitchen designs lies in their unique blend of benefits :
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
Adhunik Decodive : Crafting Your Dream Straight Kitchen
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
At Adhunik Decodive, we don't just design kitchens; we create personalized culinary spaces that resonate with your lifestyle. Our expertise in straight modular kitchen design allows us to offer :
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
Adhunik Decodive : Your Trusted Partner for Kitchen Transformations
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
Adhunik Decodive is committed to delivering exceptional results. We combine our expertise in digital marketing and business strategy with our passion for design to create kitchens that not only look stunning but also perform flawlessly.
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
             Ready to Design Your Perfect Straight Kitchen ?
            </h2>
            <p className="text-xl mb-10 max-w-4xl mx-auto">

Transform your home with a stylish and unique kitchen design that's both functional and beautiful.
Contact Adhunik Decodive today for a FREE consultation! Our experts in Delhi are ready to help you unlock the true potential of your space.            </p>
            
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

export default SshapeKitchen