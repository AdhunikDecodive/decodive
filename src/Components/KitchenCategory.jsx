
import { Tabs } from "flowbite-react";



import { useState } from 'react';
import PhoneCallButton from "./PhoneCallButton";


import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';


// import { Power2, Power4 } from 'gsap';

gsap.registerPlugin(useGSAP, ScrollTrigger);

import PopUp from "./PopUp";
import ModalNew from "./ModalNew";
import { AdvancedImage, AdvancedVideo } from '@cloudinary/react';
import { Helmet } from "react-helmet-async";



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
      link: "/IshapeKitchen",
      unique: true,
    },
    {
      id: 3,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786017/3_ays5ku_oyprfj.webp',
      title: "Parallel kitchen",
      description:
        "Modern parallel layout with dark charcoal cabinets and light marble countertops for a dramatic look feels both striking and stylish",
      link: "/PShapeKitchen",
    },
    {
      id: 4,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1747202945/Straight_Kitchen_uaazsr.webp',
      title: "Straight kitchen",
      description:
        "Straight-laminate kitchen for timeless elegance.Warm cherry cabinets bring richness, while off-white countertops offer a bright balance",
      link: "/SshapeKitchen",
    },
    {
      id: 5,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786359/13_y2rqnd_vdpmgi.webp',
      title: "Parallel Kitchen",
      description:
        "Parallel Kitchen Design with crisp white cabinets and warm hardwood floors. Countertops and cabinets on two opposing walls  for a timeless elegance",
      link: "/PShapeKitchen",
    },
    {
      id: 6,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786022/6_bcp1bw_gi2khr.webp',
      title: "U-shaped kitchen",
      description:
        "Light wood cabinets with white quartz counters.U-Shaped Kitchen with Peninsula for extra space & separation",
      link: "/UShapeKitchen",
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
            "url": "https://adhunikdecodive.com/UShapeKitchen"
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
            "url": "https://adhunikdecodive.com/PshapeKitchen"
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
            "url": "https://adhunikdecodive.com/IshapeKitchen"
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
            "url": "https://adhunikdecodive.com/SshapeKitchen"
          }
        }
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Adhunik Decodive",
      "logo": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/dq14b7xie/image/upload/v1746616040/ylzbgsu0sw6qgh5yj544_k3wzci.webp"
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




  return (
    <>


      <Helmet>



        <title>Kitchen Interior Designers in Gurugram | Adhunik Decodive
        </title>

        <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Need stunning kitchen interiors in Gurugram? Adhunik Decodive creates practical designs for apartments, houses & villas. Get a Free Consultation Today!" />

        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        <link rel="canonical" href="https://adhunikdecodive.com/modular-kitchen-designs" data-react-helmet="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>

        <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Kitchen Interior Designers in Gurugram | Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="keywords" name="keywords" content=" modular kitchen designs, L-shape kitchen, U-shape kitchen, parallel kitchen, island kitchen, straight kitchen, best modular kitchen in Gurugram, modern kitchen layouts, custom kitchen designs, kitchen renovation Gurugram, Adhunik Decodive kitchen interiors" />
        <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
        <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
        <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
        <link data-n-head="ssr" rel="preconnect" href="http://cdn12.lemnisk.co"></link>

        <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Need stunning kitchen interiors in Gurugram? Adhunik Decodive creates practical designs for apartments, houses & villas. Get a Free Consultation Today!" />

        <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/modular-kitchen"></meta>
        <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Modular Kitchen Experts" />
        <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Kitchen Interior Designers in Gurugram | Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Need stunning kitchen interiors in Gurugram? Adhunik Decodive creates practical designs for apartments, houses & villas. Get a Free Consultation Today!" />
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
          aria-label="Tabs with underline"
          style="underline"
          className=" z-0  flex flex-wrap -mb-px text-sm font-medium text-center mt-7 mx-auto my-auto justify-center"
        >


          <Tabs.Item
            title={
              <div onClick={onClickBad} className="group relative cursor-pointer justify-center  transition-shadow   items-center w-auto max-w-xs">
                <AdvancedImage
                  src={'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786017/3_ays5ku_oyprfj.webp'}
                  height={70}
                  width={70}
                  className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden"

                  decoding="async"
                  effect="blur"

                />

                All Categories
              </div>

            }
          >
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {allCardData.map((card) => (
                <div
                  key={card.id}
                  className="group relative cursor-pointer items-center justify-center transition-shadow hover:shadow-xl hover:shadow-black/30 box max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Link to={card.link}>
                      <AdvancedImage
                        src={card.imageUrl}
                        alt={card.description}
                        className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                        style={card.unique ? { objectFit: 'fill', objectPosition: '100% 37%' } : {}}
                      />
                    </Link>
                  </div>
                  <div className="p-6">
                    <div className="lg:h-[17vh] w-full overflow-hidden">
                      <h2 className="text-base font-medium text-blue-gray-900 mb-2">
                        {card.title}
                      </h2>
                      <p className="text-sm text-gray-700 opacity-75 leading-normal mb-4">
                        {card.description}
                      </p>
                    </div>
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

          </Tabs.Item>

          <Tabs.Item
            title={

              <div onClick={onClickBad} className="group relative cursor-pointer justify-center  transition-shadow   items-center w-auto max-w-xs">

                <AdvancedImage
                  src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786214/9_kvomih_gi692x.webp"
                  height={70}
                  width={70}
                  className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden"
                  alt="   L-shape kitchen "
                  decoding="async"
                  effect="blur"

                />

                L-shape
              </div>

            }
          >
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {LcardData.map((card) => (
                <div
                  key={card.id}
                  className="group relative cursor-pointer items-center justify-center transition-shadow hover:shadow-xl hover:shadow-black/30 box max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Link to="/l-shape-modular-kitchen-design">
                      <AdvancedImage
                        src={card.imageUrl}
                        alt={card.description}
                        className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                        style={card.unique ? { objectFit: 'fill', objectPosition: '100% 37%' } : {}}
                      />
                    </Link>
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

          </Tabs.Item>

          <Tabs.Item
            title={
              <div onClick={onClickBad} className="  group relative cursor-pointer justify-center  transition-shadow   items-center w-auto max-w-xs">

                <AdvancedImage
                  src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786579/20_vjns2y_fbty44.webp"
                  height={70}
                  width={70}
                  className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden"
                  alt=" U-Shape kitchen "
                  decoding="async"
                  effect="blur"

                />

                U-Shape
              </div>
            }
          >
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {UcardData.map((card) => (
                <div
                  key={card.id}
                  className="group relative cursor-pointer items-center justify-center transition-shadow hover:shadow-xl hover:shadow-black/30 box max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Link to="/UShapeKitchen">
                      <AdvancedImage
                        src={card.imageUrl}
                        alt={card.description}
                        className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                        style={card.unique ? { objectFit: 'fill', objectPosition: '100% 37%' } : {}}
                      />
                    </Link>
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
          </Tabs.Item>

          <Tabs.Item
            title={
              <div onClick={onClickBad} className="group relative cursor-pointer justify-center  transition-shadow   items-center w-auto max-w-xs">

                <AdvancedImage
                  src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786370/15_ov7ml3_t7jmfy.webp"
                  height={70}
                  width={70}
                  className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden"
                  alt="Parallel kitchen interior"
                  decoding="async"
                  effect="blur"

                />


                Parallel
              </div>
            }
          >
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {PcardData.map((card) => (
                <div
                  key={card.id}
                  className="group relative cursor-pointer items-center justify-center transition-shadow hover:shadow-xl hover:shadow-black/30 box max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Link to="/PShapeKitchen">
                      <AdvancedImage
                        src={card.imageUrl}
                        alt={card.description}
                        className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                        style={card.unique ? { objectFit: 'fill', objectPosition: '100% 37%' } : {}}
                      />
                    </Link>
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
          </Tabs.Item>

          <Tabs.Item
            title={
              <div onClick={onClickBad} className=" group relative cursor-pointer justify-center  transition-shadow   items-center w-auto max-w-xs">
                <AdvancedImage
                  src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786095/16_s1fkxv_ouke2v.webp"
                  height={70}
                  width={70}
                  className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden"
                  alt="Island kitchen "
                  decoding="async"
                  effect="blur"

                />


                Island
              </div>
            }
          >
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {IScardData.map((card) => (
                <div
                  key={card.id}
                  className="group relative cursor-pointer items-center justify-center transition-shadow hover:shadow-xl hover:shadow-black/30 box max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Link to="/IshapeKitchen">
                      <AdvancedImage
                        src={card.imageUrl}
                        alt={card.description}
                        className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                        style={card.unique ? { objectFit: 'fill', objectPosition: '100% 37%' } : {}}
                      />
                    </Link>
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
          </Tabs.Item>

          <Tabs.Item
            title={
              <div onClick={onClickBad} className="  group relative cursor-pointer justify-center  transition-shadow   items-center w-auto max-w-xs">

                <AdvancedImage
                  src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786409/2_xdjj6e_t09yy6.webp"
                  height={70}
                  width={70}
                  className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden"
                  alt="Straight kitchen"
                  decoding="async"
                  effect="blur"

                />


                Straight
              </div>
            }
          >
            <div className="box w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {ScardData.map((card) => (
                <div
                  key={card.id}
                  className="group relative cursor-pointer items-center justify-center transition-shadow hover:shadow-xl hover:shadow-black/30 box max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Link to='/SshapeKitchen'>
                      <AdvancedImage
                        src={card.imageUrl}
                        alt={card.description}
                        className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                        style={card.unique ? { objectFit: 'fill', objectPosition: '100% 37%' } : {}}
                      />
                    </Link>
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
          </Tabs.Item>
        </Tabs>


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
