
import { Tabs } from "flowbite-react";



import { useState } from 'react';
import PhoneCallButton from "./PhoneCallButton";


import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion'; 

// import { Power2, Power4 } from 'gsap';

gsap.registerPlugin(useGSAP, ScrollTrigger);

import PopUp from "./PopUp";
import ModalNew from "./ModalNew";
import { AdvancedImage } from '@cloudinary/react';
import { Helmet } from "react-helmet-async";


  
import { Gem, Shield, Droplets,   Heart, Zap, RulerIcon, HammerIcon } from 'lucide-react';
import {   Settings,  } from 'lucide-react';

import {
  CheckCircle2,
  
  HardHat,
  ShieldCheck,
  Leaf,
  DollarSign,

  Package,
   
  ArrowRightIcon
  
} from 'lucide-react';
 


function KitchenCategory() {

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  useGSAP(() => {
    // gsap code here...

    gsap.from(".box", {
      x: 360,
      stagger: .03,

    });

  });

  const onClickBad = () => {
    // gsap.from(".box",
    //  {
    //     x: 100, 
    //     opacity: 0,
    //     stagger: 0.03, 
    //     ease: "power4.out", 
    //     duration: 1,
    // });
  };


  const allCardData = [
    {
      id: 1,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786238/18_11zon_yw3p2v_vcy4l3.webp',
      title: "L-shaped kitchen",
      description:
        "Two-tone L-shaped cabinetry in crisp white&bold blue with a modern contrast. Warm wood accents and sleek quartz countertops for cool sophistication",
      link: "/l-shape-modular-kitchen-design",
    },
    {
      id: 2,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786015/2_bl3cxj_sz6tvo.webp',
      title: "Island kitchen",
      description:
        "A central island, meticulously crafted from white marble, for center stage. With outshining modularity built-in appliances & overhanging countertop ",
      link: "/kitchen-island-design",
      unique: true,
    },
    {
      id: 3,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786017/3_ays5ku_oyprfj.webp',
      title: "Parallel kitchen",
      description:
        "Modern parallel layout with dark charcoal cabinets and light marble countertops for a dramatic look feels both striking and stylish",
      link: "/parallel-modular-kitchen-design",
    },
    {
      id: 4,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1747202945/Straight_Kitchen_uaazsr.webp',
      title: "Straight kitchen",
      description:
        "Straight-laminate kitchen for timeless elegance.Warm cherry cabinets bring richness, while off-white countertops offer a bright balance",
      link: "/straight-modular-kitchen",
    },
    {
      id: 5,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786359/13_y2rqnd_vdpmgi.webp',
      title: "Parallel Kitchen",
      description:
        "Parallel Kitchen Design with crisp white cabinets and warm hardwood floors. Countertops and cabinets on two opposing walls  for a timeless elegance",
      link: "/parallel-modular-kitchen-design",
    },
    {
      id: 6,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786022/6_bcp1bw_gi2khr.webp',
      title: "U-shaped kitchen",
      description:
        "Light wood cabinets with white quartz counters.U-Shaped Kitchen with Peninsula for extra space & separation",
      link: "/u-shape-modular-kitchen-design",
    },

  ];



  const LcardData = [
    {
      id: 1,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786194/1_a8rmpg_bqiwyd.webp',
      title: "",
      description:
        "Contemporary  kitchen layout with Warm wood cabinets of polished finish contrast with crisp white quartz countertops. A mosaic tile  with gray-cream shades",
    },
    {
      id: 2,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786197/2_clubfh_xtysnw.webp',
      title: "",
      description:
        "A polished L-shaped kitchen stuns with teal blue acrylic cabinets and black accents. A slide-out drawer with clean-lines,hidden pattern enhances its modern look.",
    },
    {
      id: 3,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786199/3_z9eejg_rhhask.webp',
      title: "",
      description:
        "A space-saving  layout with crisp white cabinets for a bright & airy feel. The dark countertops,and stainless steel appliances add a sleek touch & contrast",
    },
    {
      id: 4,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786202/4_qbnmsq_ou9rof.webp',
      title: "",
      description:
        "A modern L-shaped layout with white cabinets and dark quartz countertops. Counter space utilization, particularly by incorporating appliances",
    },
    {
      id: 5,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786204/5_t7kwot_i6vyb9.webp',
      title: "",
      description:
        "Sleek  L-shaped kitchen wow with unique pendants and recessed lights, creating a dramatic atmosphere. A touch of elegance with warm wood tones",
      unique: true,
    },
    {
      id: 6,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786235/17_btpbi0_aouwcb.webp',
      title: "",
      description:
        "Striking   features charcoal gray cabinetry with accents for a modern aesthetic. Crisp white granite or quartz countertops with balanced design",
    },
    // Add more card objects as needed
  ];


  const UcardData = [
    {
      id: 1,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786516/2_cvjbul_qszv7v.webp',
      title: "",
      description:
        "U-shaped kitchen stuns with vibrant parrot green cabinets wrap around three walls with light countertops, for ample storage and a refreshingly modern look",
    },

    {
      id: 2,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786513/1_xo3ogy_ift7ja.webp',
      title: "",
      description:
        "U-shaped  layout with two-toned cabinet scheme, cobalt blue lower cabinets with crisp white upper cabinets laminate with a suede finish and granite countertops",
      unique: true,
    },

    {
      id: 3,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786565/15_atmb4u_lzhsuz.webp',
      title: "",
      description:
        "A  U-shaped kitchen layout with bright yellow cabinets and crisp white. Maximizes counter space and keeps appliances neatly tucked away on opposing walls",
    },


    {
      id: 4,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786518/3_vfdzhh_anemkr.webp',
      title: "",
      description:
        "White shaker U-Shaped kitchen layout  cabinet with light wood countertops.For a touch of elegance, a white tile backsplash adorns the wall",
    },
    {
      id: 5,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786579/20_vjns2y_fbty44.webp',
      title: "",
      description:
        "  Craftsman style with sunny yellow lower cabinets & gray upper cabinets. Light-colored wood countertops with the warm tones of the cabinets",
    },
    {
      id: 6,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786522/4_hcgvmg_svghy5.webp',
      title: "",
      description:
        "Stunning U-shaped kitchen boasts sleek blue cabinetry with polished chrome hardware. Gleaming appliances and light countertops for sleek and contemporary look",
    },

  ];



  const PcardData = [
    {
      id: 1,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786373/16_jlg0cm_thcj0y.webp',
      title: "",
      description:
        "Light and airy kitchen featuring parallel cabinets in a warm wood tone light brown or beige.Space-saving. Ideal for maximizing efficiency in modern kitchens",
    },
    {
      id: 2,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786377/17_ck20i4_wcbopc.webp',
      title: "",
      description:
        "Stylish modern kitchen with parallel layout. Dark charcoal cabinets and light marble countertops with stunning contrast.Efficient, space-saving design",
    },
    {
      id: 3,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786379/18_alwx6j_gtq3oe.webp',
      title: "",
      description:
        "A Modern parallel kitchen layout with Light gray, wood veneer cabinets complemented by a white quartz or laminate countertop.Ideal for contemporary kitchens",
    },
    {
      id: 4,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786382/19_prpcpk_e2ygnr.webp',
      title: "",
      description:
        "Parallel kitchen layout with wooden cabinets in a medium brown shade and a white countertop.Classic and timeless combination with Brown cabinets",
    },
    {
      id: 5,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786386/20_ujsafg_hieqgh.webp',
      title: "",
      description:
        "Parallel kitchen layout with rich wood lower cabinets & crisp upper cabinets for a serene look. white countertops for a clean, sophisticated finish",
    },
    {
      id: 6,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786346/10_tqherx_onfew6.webp',
      title: "",
      description:
        "Parallel Kitchen Design with crisp white cabinets and warm hardwood floors. Countertops and cabinets on two opposing walls,for spacious layout",
    },
    // Add more card objects as needed
  ];



  const IScardData = [
    {
      id: 1,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786044/1_gwru0z_asn1tw.webp',
      title: "",
      description:
        "A central island, clad in stylish gray cabinets  with wood laminate paired with gleaming white quartz countertops  and functionality in this versatile layout",
    },
    {
      id: 2,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786046/2_dy9uog_uzbeea.webp',
      title: "",
      description:
        "The Alluring Island Kitchen with Stunning focal point of  warm wood veneer base. Indulge in the luxurious elegance of a white marble countertop",
    },
    {
      id: 3,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786048/3_urmpb8_f3iwoi.webp',
      title: "",
      description:
        "A stunning island kitchen features crisp white wood cabinets, a warm wood island base for contrast, and elegant white marble countertops illuminated with modern lighting.",
    },
    {
      id: 4,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786051/4_gj8dho_jshdij.webp',
      title: "",
      description:
        "Island layout with two-tone design. Light gray painted cabinets with warm wood stain of the island base injects a touch of contrast and warmth into the space",
    },

    {
      id: 5,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786053/5_os01yr_mbrxg1.webp',
      title: "",
      description:
        "A  kitchen with stunning white marble. Perimeter walls boast integrated appliances for a streamlined aesthetic, while a practical island overhang for casual dining",
    },

    {
      id: 6,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786056/6_zu1n5s_sezlkg.webp',
      title: "",
      description:
        "  Light gray laminated cabinet,a warm wood stain island base boosts real wood veneer or high-grade laminate with white marble countertop",
    },



  ];



  const ScardData = [
    {
      id: 1,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786431/10_x0dvfn_lbfg1i.webp',
      title: "",
      description:
        "Kitchen stuns with a mix of vibrant green cabinets for a shot of energy, balanced by crisp white acrylic cabinets that enhance the feeling of openness and light",
    },
    {
      id: 2,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786426/8_wwmq4q_kvshgk.webp',
      title: "",
      description:
        "Straight kitchen with two-toned acrylic cabinets & Crisp white uppers enhance brightness, while warm wood grain lowers bring a touch of earthy elegance",
    },
    {
      id: 3,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786412/3_m85k1r_yvlg7r.webp',
      title: "",
      description:
        "A Straight kitchen layout characterized by dark wood cabinetry. The wood boasts a rich, dark stain or paint finish, lending a sense of sophistication  to the space.",
    },
    {
      id: 4,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786415/4_us52tt_rtay53.webp',
      title: "",
      description:
        " Straight kitchen two-toned cabinetry with warm wood grain lower units for a touch of nature, paired with crisp white upper cabinets for brightness and a timeless look",
    },
    {
      id: 5,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786418/5_hlvvao_gk1ir8.webp',
      title: "",
      description:
        "Classic and Elegant Straight kitchen layout with timeless elegance.Warm cherry cabinets bring richness, while off-white countertops offer a bright balance",
    },
    {
      id: 6,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786448/16_ezwbao_mftant.webp',
      title: "",
      description:
        " Straight modular kitchen stuns. Ash grey cabinets base, light gleams off the matte finish, and a pop of green backsplash adds a touch of personality",
    },
    // Add more card objects as needed
  ];



  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Top Modular Kitchen Designs in Gurugram | L-Shape, U-Shape & More – Adhunik Decodive",
    "description": "Discover top modular kitchen designs in Gurugram with Adhunik Decodive. Explore L-shape, U-shape, Parallel, Island, and Straight kitchen layouts designed for luxury and efficiency. Get a free consultation today!",
    "url": "https://adhunikdecodive.com/modular-kitchen-designs",
    "image": "https://res.cloudinary.com/dwhmfz63n/image/upload/v1/Kitchen/all_category/2_bl3cxj?_a=DAJAUVWIZAA0",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "CreativeWork",
            "name": "L-Shape Kitchen Design",
            "description": "Efficient and space-saving L-shaped modular kitchens, perfect for small to medium spaces.",
            "image": "https://res.cloudinary.com/dwhmfz63n/image/upload/v1/Kitchen/LsKitchen/3_z9eejg?_a=DAJAUVWIZAA0",
            "url": "https://adhunikdecodive.com/l-shape-modular-kitchen-design"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "CreativeWork",
            "name": "U-Shape Kitchen Design",
            "description": "U-shaped modular kitchens offering abundant storage and a smooth workflow for serious cooks.",
            "image": "https://res.cloudinary.com/dwhmfz63n/image/upload/v1/Kitchen/UsKitchen/6_gprga6?_a=DAJAUVWIZAA0",
            "url": "https://adhunikdecodive.com/u-shape-modular-kitchen-design"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "CreativeWork",
            "name": "Parallel Kitchen Design",
            "description": "Parallel modular kitchens designed for efficient use of space and seamless functionality.",
            "image": "https://res.cloudinary.com/dwhmfz63n/image/upload/v1/Kitchen/PsKitchen/8_xeibjp?_a=DAJAUVWIZAA0",
            "url": "https://adhunikdecodive.com/parallel-modular-kitchen-design"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "CreativeWork",
            "name": "Island Kitchen Design",
            "description": "Island modular kitchens, perfect for entertaining and creating a central hub in your home.",
            "image": "https://res.cloudinary.com/dwhmfz63n/image/upload/v1/Kitchen/IsKitchen/13_11zon_bracki?_a=DAJAUVWIZAA0",
            "url": "https://adhunikdecodive.com/kitchen-island-design"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "CreativeWork",
            "name": "Straight Kitchen Design",
            "description": "Sleek and efficient straight-wall modular kitchens for compact spaces.",
            "image": "https://res.cloudinary.com/dwhmfz63n/image/upload/v1/Kitchen/SsKitchen/10_x0dvfn?_a=DAJAUVWIZAA0",
            "url": "https://adhunikdecodive.com/straight-modular-kitchen"
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



  const WhyPeople = [
    {
      title: "Designs That Fit Your Whole Gurugram Home –",
      description:
        "We don't just think about the kitchen by itself. We look at how it connects to the rest of your Gurugram home. We think about the colors, the way the space flows, and how it all feels together in your apartment, independent house, or villa.",
    },

    {
      title: "We Know Gurugram Homes Inside and Out –",
      description:
        "We've worked on many homes in Gurugram, so we understand the different styles and what people here like. We know how to design kitchen interiors that look great and work well in all kinds of Gurugram properties.",
    },

    {
      title: "Your Ideas Come First in Your Gurugram Kitchen –",
      description:
        "We want to create the kitchen interior you've always dreamed of in your Gurugram home. We listen carefully to your ideas and what you need, and then we design a kitchen that truly feels like yours, whether it's a small apartment kitchen or a large villa kitchen.",
    },

    {
      title: "Making the Most of Space in Gurugram Kitchens, Big or Small –",
      description:
        "Whether your Gurugram apartment kitchen is tiny or your villa kitchen is huge, we know how to use the space wisely. We come up with smart ways to store things, arrange your kitchen so it's easy to use, and make even small kitchens feel bigger and more organized in Gurugram .",
    },

    {
      title: "Good Quality Materials That Last in Gurugram's Weather –",
      description:
        "We use strong and beautiful materials for your kitchen interior in Gurugram. From the doors of your cabinets (whether you like a modern look for your apartment or a classic style for your house) to the countertops (like tough quartz or elegant marble), we choose things that will look great and last a long time in Gurugram's climate.",
    },

    {
      title: "Fitting in Your Appliances Perfectly in Your Gurugram Kitchen –",
      description:
        "Modern kitchens in Gurugram have lots of appliances. We plan carefully where each one will go in your kitchen interior so it looks good and works well. We think about things like where your chimney will go to keep the air clean (important in Gurugram), where your fridge and oven will fit, and where the plugs should be in your Gurugram home.",
    },


    {
      title: "The Right Light and Colors for Your Gurugram Kitchen –",
      description:
        "Light and color can change how your kitchen interior in Gurugram feels. We know how to use different kinds of lights to help you see when you're cooking and to make your kitchen feel warm and welcoming. We also help you pick colors that you'll love and that will look great in your Gurugram home.",
    },

    {
      title: "Smart Ideas for Modern Gurugram Kitchens –",
      description:
        " Technology is becoming more common in homes in Gurugram, and kitchens are no different. We can add smart appliances, lights that turn on automatically, and even voice-controlled helpers to your kitchen interior in Gurugram to make your life easier and more modern, whether you're in an apartment, house, or villa .",
    },

    {
      title: "Our Simple Steps to Your Dream Gurugram Kitchen –",
      description:
        "We have a clear and easy process to help you get the kitchen interior you want in Gurugram .",
    },



  ];


  const WhyPeople2 = [
    {
      title: "Talk to Us –",
      description:
        "We start by listening to your ideas and what you need for your Gurugram kitchen.",
    },


    {
      title: "Look at Your Space –",
      description:
        "We visit your Gurugram home to see your kitchen and take measurements.",
    },


    {
      title: "Plan the Design –",
      description:
        "We create ideas for your kitchen interior and how it will all fit together in your Gurugram home.",
    },


    {
      title: "Choose Materials -",
      description:
        " We show you all the beautiful and strong materials you can pick for your Gurugram kitchen.",
    },


    {
      title: "See It First (If You Want) -",
      description:
        " We can even create a 3D picture so you can see what your new Gurugram kitchen will look like before we start.",
    },


    {
      title: "Make the Detailed Plan -",
      description:
        " We create the final plans for building your kitchen interior in your Gurugram home.",
    },


    {
      title: "Build Your Kitchen -",
      description:
        " Our skilled team will carefully build and install your new Gurugram kitchen.",
    },


    {
      title: "The Final Look -",
      description:
        " We make sure everything is perfect before we show you your amazing new kitchen interior in your Gurugram home.",
    },




  ];

  const IdeasKitchen = [
    {
      title: "Modern and Simple for Gurugram Apartments –",
      description:
        "Clean lines, hidden handles on cabinets, and smart appliances to save space and look sleek in your Gurugram apartment.",
    },



    {
      title: "Warm and Cozy for Gurugram Houses –",
      description:
        "Using wood and classic styles to make a comfortable and welcoming kitchen interior in your Gurugram house.",
    },





    {
      title: "Fancy and Big for Gurugram Villas –",
      description:
        "High-end materials, big kitchen islands, and special areas for different tasks in your spacious Gurugram villa kitchen.",
    },



    {
      title: "Saving Space in Small Gurugram Homes –",
      description:
        "Clever ways to store things, furniture that does more than one thing, and using tall spaces to keep everything organized in smaller Gurugram kitchens.",
    },




    {
      title: "Open and Friendly Kitchens in Gurugram –",
      description:
        "Making your kitchen flow into your living or dining area so everyone can be together in your Gurugram home.",
    },






  ];


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

 

const tabVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

 

const tabIconVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 }
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

  return (
    <>


      <Helmet>
        <title>Kitchen Interior Designers in Gurugram & Delhi | Adhunik Decodive</title>
        <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" name="description" content="Need stunning kitchen interiors in Gurugram? Adhunik Decodive creates practical designs for apartments, houses & villas across Delhi & NCR. Get a Free Consultation Today!" />
        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        <link rel="canonical" href="https://adhunikdecodive.com/kitchen-interior" data-react-helmet="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
        <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Kitchen Interior Designers in Gurugram & Delhi | Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="kitchen interior Gurugram, kitchen designers Delhi, modular kitchen NCR, custom kitchen designs, modern kitchen interior, apartment kitchen design, villa kitchen interior, Adhunik Decodive kitchens" />
        <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
        <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
        <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary_large_image"></meta>
      
        <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Need stunning kitchen interiors in Gurugram? Adhunik Decodive creates practical designs for apartments, houses & villas across Delhi & NCR. Get a Free Consultation Today!" />
        <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/kitchen-interior"></meta>
        <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Interior Design Experts" />
        <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Kitchen Interior Designers in Gurugram & Delhi | Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Need stunning kitchen interiors in Gurugram? Adhunik Decodive creates practical designs for apartments, houses & villas across Delhi & NCR. Get a Free Consultation Today!" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <ModalNew isOpen={openModal} onClose={toggleModal} />
      <PopUp />


      <div className="w-auto  bg-white p-5">
        <div className="h-full w-full ">


          <div className="row flex relative">




            <img
              src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746610731/Kitchen_categories_dmvq28.webp"
              alt="interior l-shape category for design with oven and appliances" className="   relative   h-[86vh]  md:h-[45vh] w-full object-cover  object-center rounded-lg "
            />


            <div className="w-full  h-full p-9 bottom-0 flex-col justify-center md:justify-between  flex md:flex-row  md:text-center  items-center mx-auto  absolute">

              <p className=" h-full  text-gray-700 text-4xl flex-col flex my-auto justify-center items-center">

              </p>

              <div className="w-fit border-cyan-500 border-[1px] rounded-lg text-center p-5 bg-[#fffffb]">
                <p className="text-2xl">Modular Kitchen Styles</p>
                <p className="bg-black w-fit mx-auto text-white p-1 relative rounded-full  mt-9">
                  Starting
                </p>

                <div className="w-full flex justify-around h-10vh mx-auto relative bottom-4">
                  <div className="line1 w-3/12 h-[1px] border border-black rounded-full"></div>
                  <div className="line1 w-3/12 h-[1px] border border-black rounded-full"></div>
                </div>

                <p className="text-2xl">₹50,000</p>
                <p className="text-xl">
                  <span className="bg-cyan-200 rounded-sm p-1">FREE</span>{" "}
                  Quotation
                </p>


                <button onClick={toggleModal} className=" mt-3 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#8F664E] rounded-full shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[#8F664E] duration-300 -translate-x-full bg-[#eae5e3] group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease   font-extrabold bg-[#8F664E]">   Book Free Consultation</span>
                  <span className="relative invisible font-extrabold">   Book Free Consultation</span>
                </button>
              </div>
            </div>

          </div>


          <div className="w-full h-full md:p-9  text-justify md:text-center">


            <p className="text-4xl text-center">Modular Kitchen Designs</p>

            <p className="text-gray-600 mt-3">
              Unleash your inner chef and craft lasting memories in a kitchen designed for your culinary dreams. We offer a range of innovative modular kitchen solutions to suit any space and style. Our versatile kitchen layouts cater to a variety of needs. Tight on space? <span className="   font-extrabold text-black"> Straight-wall kitchens</span> provide a sleek and efficient solution. <span className="   font-extrabold text-black"> U-shaped</span>  and <span className="   font-extrabold text-black">parallel layouts</span> offer abundant storage and a smooth workflow for the serious cook. <span className="   font-extrabold text-black">L-shaped</span>  and <span className="   font-extrabold text-black">peninsula designs</span> create a cozy cooking area perfect for open floor plans, fostering connection and conversation And for the ultimate entertainer, an <span className="   font-extrabold text-black">island kitchen</span> transforms your space into a central hub, perfect for meal prep, socializing, and making memories.
              Our Adhunik DecoDive wide range of modular options allows you to customize your dream kitchen, finding the perfect fit for both your culinary style and your budget. Explore the various kitchen shapes and modular ranges, and discover how we can elevate your kitchen into the heart of your home.

            </p>

          </div>


        </div>

  

        <Tabs
      aria-label="Kitchen design tabs"
      style="underline"
      className="z-0 flex flex-wrap -mb-px text-center mt-7 mx-auto justify-center"
    >

       <Tabs.Item
        title={
          <motion.div 
            variants={tabVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onClick={onClickBad} 
            className="group relative cursor-pointer justify-center transition-all items-center w-auto max-w-xs"
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <AdvancedImage
                src={'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786017/3_ays5ku_oyprfj.webp'}
                height={70}
                width={70}
                className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-all duration-300 group-hover:shadow-lg overflow-hidden"
                decoding="async"
                effect="blur"
              />
            </motion.div>
            <span className="text-gray-700 group-hover:text-orange-600 transition-colors">All Categories</span>
          </motion.div>
        }
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {allCardData.map((card, index) => (
            <motion.div
              key={card.id}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer items-center justify-center transition-all hover:shadow-xl hover:shadow-black/10 max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
            >
              <div className="relative h-80 overflow-hidden">
                <Link to={card.link}>
                  <AdvancedImage
                    src={card.imageUrl}
                    alt={card.description}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={card.unique ? { objectPosition: '100% 37%' } : {}}
                  />
                </Link>
              </div>
              <div className="p-6">
                <div className="lg:h-[17vh] w-full overflow-hidden">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {card.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-normal mb-4">
                    {card.description}
                  </p>
                </div>
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
        </motion.div>
      </Tabs.Item>
      {/* L-Shape Tab */}
      <Tabs.Item
        title={
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onClickBad} 
            className="group relative cursor-pointer justify-center items-center w-auto max-w-xs px-4"
          >
            <motion.div 
              variants={tabIconVariants}
              whileHover="hover"
              whileTap="tap"
              className="mb-2"
            >
              <AdvancedImage
                src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786214/9_kvomih_gi692x.webp"
                height={96}
                width={96}
                className="h-24 w-24 rounded-full mx-auto object-cover shadow-md transition-all duration-300 overflow-hidden"
                alt="L-shape kitchen"
                decoding="async"
                effect="blur"
              />
            </motion.div>
            <span className="text-gray-700 group-hover:text-orange-600 transition-colors font-medium">
              L-shape
            </span>
          </motion.div>
        }
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-6"
        >
          {LcardData.map((card, index) => (
            <motion.div
              key={card.id}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative cursor-pointer bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-80 overflow-hidden">
                <Link to="/l-shape-modular-kitchen-design">
                  <AdvancedImage
                    src={card.imageUrl}
                    alt={card.description}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={card.unique ? { objectPosition: '100% 37%' } : {}}
                  />
                </Link>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {card.description}
                </p>
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
        </motion.div>
      </Tabs.Item>

      {/* U-Shape Tab */}
      <Tabs.Item
        title={
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={onClickBad} 
            className="group relative cursor-pointer justify-center items-center w-auto max-w-xs px-4"
          >
            <motion.div 
              variants={tabIconVariants}
              whileHover="hover"
              whileTap="tap"
              className="mb-2"
            >
              <AdvancedImage
                src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786579/20_vjns2y_fbty44.webp"
                height={96}
                width={96}
                className="h-24 w-24 rounded-full mx-auto object-cover shadow-md transition-all duration-300 overflow-hidden"
                alt="U-Shape kitchen"
                decoding="async"
                effect="blur"
              />
            </motion.div>
            <span className="text-gray-700 group-hover:text-orange-600 transition-colors font-medium">
              U-Shape
            </span>
          </motion.div>
        }
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-6"
        >
          {UcardData.map((card, index) => (
            <motion.div
              key={card.id}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative cursor-pointer bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-80 overflow-hidden">
                <Link to="/u-shape-modular-kitchen-design">
                  <AdvancedImage
                    src={card.imageUrl}
                    alt={card.description}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {card.description}
                </p>
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
        </motion.div>
      </Tabs.Item>

      {/* Parallel Tab */}
      <Tabs.Item
        title={
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={onClickBad} 
            className="group relative cursor-pointer justify-center items-center w-auto max-w-xs px-4"
          >
            <motion.div 
              variants={tabIconVariants}
              whileHover="hover"
              whileTap="tap"
              className="mb-2"
            >
              <AdvancedImage
                src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786370/15_ov7ml3_t7jmfy.webp"
                height={96}
                width={96}
                className="h-24 w-24 rounded-full mx-auto object-cover shadow-md transition-all duration-300 overflow-hidden"
                alt="Parallel kitchen"
                decoding="async"
                effect="blur"
              />
            </motion.div>
            <span className="text-gray-700 group-hover:text-orange-600 transition-colors font-medium">
              Parallel
            </span>
          </motion.div>
        }
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-6"
        >
          {PcardData.map((card, index) => (
            <motion.div
              key={card.id}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative cursor-pointer bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-80 overflow-hidden">
                <Link to="/parallel-modular-kitchen-design">
                  <AdvancedImage
                    src={card.imageUrl}
                    alt={card.description}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={card.unique ? { objectPosition: '100% 37%' } : {}}
                  />
                </Link>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {card.description}
                </p>
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
        </motion.div>
      </Tabs.Item>

      {/* Island Tab */}
      <Tabs.Item
        title={
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={onClickBad} 
            className="group relative cursor-pointer justify-center items-center w-auto max-w-xs px-4"
          >
            <motion.div 
              variants={tabIconVariants}
              whileHover="hover"
              whileTap="tap"
              className="mb-2"
            >
              <AdvancedImage
                src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786095/16_s1fkxv_ouke2v.webp"
                height={96}
                width={96}
                className="h-24 w-24 rounded-full mx-auto object-cover shadow-md transition-all duration-300 overflow-hidden"
                alt="Island kitchen"
                decoding="async"
                effect="blur"
              />
            </motion.div>
            <span className="text-gray-700 group-hover:text-orange-600 transition-colors font-medium">
              Island
            </span>
          </motion.div>
        }
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-6"
        >
          {IScardData.map((card, index) => (
            <motion.div
              key={card.id}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative cursor-pointer bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-80 overflow-hidden">
                <Link to="/kitchen-island-design">
                  <AdvancedImage
                    src={card.imageUrl}
                    alt={card.description}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {card.description}
                </p>
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
        </motion.div>
      </Tabs.Item>

      {/* Straight Tab */}
      <Tabs.Item
        title={
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={onClickBad} 
            className="group relative cursor-pointer justify-center items-center w-auto max-w-xs px-4"
          >
            <motion.div 
              variants={tabIconVariants}
              whileHover="hover"
              whileTap="tap"
              className="mb-2"
            >
              <AdvancedImage
                src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786409/2_xdjj6e_t09yy6.webp"
                height={96}
                width={96}
                className="h-24 w-24 rounded-full mx-auto object-cover shadow-md transition-all duration-300 overflow-hidden"
                alt="Straight kitchen"
                decoding="async"
                effect="blur"
              />
            </motion.div>
            <span className="text-gray-700 group-hover:text-orange-600 transition-colors font-medium">
              Straight
            </span>
          </motion.div>
        }
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-6"
        >
          {ScardData.map((card, index) => (
            <motion.div
              key={card.id}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative cursor-pointer bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-80 overflow-hidden">
                <Link to='/straight-modular-kitchen'>
                  <AdvancedImage
                    src={card.imageUrl}
                    alt={card.description}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {card.description}
                </p>
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
        </motion.div>
      </Tabs.Item>
    </Tabs>

       
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



        <div className="container mx-auto  py-9 text-gray-700">
          <section className="">
            <h2 className=" text-3xl text-center py-5" >
              Adhunik Decodive : Crafting Your Dream Kitchen Interiors in Gurgaon

            </h2>
            <p className=" py-2 text-justify">
              Welcome to Adhunik Decodive! We're experts in making amazing kitchen interiors for homes all over Gurugram. We know your kitchen is more than just a place to cook. It's where you spend time with family, try new recipes, and make memories. Our job is to design kitchen interiors that look fantastic and make your life easier, no matter what kind of home you have in Gurugram.
            </p>
            <p className=" py-2 text-justify">
              Whether you live in a modern apartment high up in the sky near Golf Course Road or Sohna Road, a big, comfortable independent house in areas like DLF Phase I-V or Sushant Lok, or a fancy villa in a newer part of Gurugram, we can create the perfect kitchen interior for you.
            </p>

            <h2 className=" text-3xl text-center  py-5" >
              Custom Kitchen Designs for your home in Gurugram

            </h2>
            <p className=" py-2 text-justify">
              You might have heard of modular kitchens, which are made of different parts that fit together. While those can be useful, we at Adhunik Decodive believe in creating kitchen interiors that are exactly right for you and your home in Gurugram. We take the time to understand how your kitchen space works, where the light comes in, and what you already have. Then, we design a kitchen interior that feels just right, whether you need a clever design for your apartment or a big, open kitchen for your villa.
            </p>
            <p className=" py-2 text-justify">
              We’re good at working with all kinds of residential space in Gurugram. If you live in an apartment where you need to save space, we can design smart and practical kitchen interiors. If you have a larger house or villa, we can create spacious and impressive kitchens with different areas for cooking, getting food ready, and even having guests. We don’t just put pieces together; we create a kitchen interior that truly fits your Gurugram home and your life.

            </p>

            <h2 className=" text-2xl md:text-3xl text-center  py-5">
              Why People in Gurugram Choose Adhunik Decodive for Their Kitchen Interiors :

            </h2>

            <ul className="list-disc text-justify md:text-left pl-5 space-y-4 text-gray-700">
              {WhyPeople.map((item, index) => (
                <li key={index} className=" font-thin py-2 text-gray-500 ">
                  <span className="font-extrabold text-gray-700" >{item.title}</span> {item.description}
                </li>
              ))}
            </ul>


            <ul className="   list-decimal py-3 list-inside text-justify md:text-left pl-5 space-y-4 text-gray-700">
              {WhyPeople2.map((item, index) => (
                <li key={index} className=" md:px-5 font-thin text-gray-500 ">
                  <span className="font-extrabold text-gray-700" >{item.title}</span> {item.description}
                </li>
              ))}
            </ul>


            <h2 className=" text-2xl md:text-3xl  text-center  py-5" >Ideas for Your Kitchen Interior in Your Gurugram Home :
            </h2>

            <ul className="   list-decimal py-3 list-inside text-justify md:text-left md:pl-5 space-y-4 text-gray-700">
              {IdeasKitchen.map((item, index) => (
                <li key={index} className=" md:px-5 font-thin text-gray-500 ">
                  <span className="font-extrabold text-gray-700" >{item.title}</span> {item.description}
                </li>
              ))}
            </ul>

            <div className="w-full md:p-6 rounded-xl">
              <div className="flex items-center justify-center h-full">
                <div className="w-full flex flex-col justify-start lg:items-start items-center gap-3">

                  {/* Divider with Heading */}
                  <div className="relative inline-flex py-2 items-center justify-center w-full mx-auto my-7 md:mb-0">
                    <hr className="w-[90%] h-px my-8 bg-gray-300 border-0" />
                    <h2 className="absolute px-2 md:px-3 text-gray-700 -translate-x-1/2 bg-white left-1/2 text-center text-[15px] md:text-2xl capitalize font-semibold ">
                      Ready to Get the Kitchen You've Always Wanted in Gurugram?
                    </h2>
                  </div>

                  {/* Paragraphs */}
                  <p className="  text-justify md:text-center  w-full">
                    At Adhunik Decodive, we're excited to help you create a kitchen interior in Gurugram that you'll love for years to come, no matter what kind of home you have. Contact us today for a friendly chat, and let's start planning your dream kitchen interior in Gurugram together!
                  </p>


                  {/* Button */}
                  <div className="w-full flex justify-center">
                    <a
                      href="tel:9355588595"
                      className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white"
                    >
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-52 group-hover:h-32 opacity-10"></span>
                      <span className="relative">Talk to our design expert.</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>




          </section>
        </div>



      </div>



    </>
  );
}

export default KitchenCategory;
