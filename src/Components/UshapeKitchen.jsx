
import "./LShapeKitchen.css"
import { useState } from "react";
import PhoneCallButton from "./PhoneCallButton";
import ModalNew from "./ModalNew"; 
import { AdvancedImage } from '@cloudinary/react';
import { Helmet } from "react-helmet-async";
import { Layout, Zap, Triangle, Box, Users, Phone, MessageSquare, ArrowRight, Gem, Leaf, Cpu, Star, ClipboardList, CheckCircle, MapPin } from 'lucide-react';


import { ChevronDown,  } from 'lucide-react';



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
            <button className="inline-flex items-center px-8 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-300 shadow-md hover:shadow-lg">
              Get Your Custom Design
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
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
            <button className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-orange-600 transition-colors">
              <MessageSquare className="w-5 h-5" />
              Free Consultation
            </button>
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
            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg">
              BOOK YOUR FREE CONSULTATION TODAY
              <MessageSquare className="w-5 h-5" />
            </button>
            <a 
              href="tel:9355588595" 
              className="flex items-center justify-center gap-2 px-8 py-3 border border-orange-600 text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call: 9355588595
            </a>
          </div>
        </div>
      </div>
    </section>


        </>
    )
}

export default UshapeKitchen