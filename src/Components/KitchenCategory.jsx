
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
import { Cloudinary } from "@cloudinary/url-gen";
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
      imageUrl: 'Kitchen/LsKitchen/18_11zon_yw3p2v',
      title: "L-shaped kitchen",
      description:
        "Two-tone L-shaped cabinetry in crisp white&bold blue with a modern contrast. Warm wood accents and sleek quartz countertops for cool sophistication",
      link: "/LShapeKitchen",
    },
    {
      id: 2,
      imageUrl: 'Kitchen/all_category/2_bl3cxj',
      title: "Island kitchen",
      description:
        "A central island, meticulously crafted from white marble, for center stage. With outshining modularity built-in appliances & overhanging countertop ",
      link: "/IshapeKitchen",
      unique: true,
    },
    {
      id: 3,
      imageUrl: 'Kitchen/all_category/3_ays5ku',
      title: "Parallel kitchen",
      description:
        "Modern parallel layout with dark charcoal cabinets and light marble countertops for a dramatic look feels both striking and stylish",
      link: "/PShapeKitchen",
    },
    {
      id: 4,
      imageUrl: 'Kitchen/SsKitchen/s10_rwlkau',
      title: "Straight kitchen",
      description:
        "Straight-laminate kitchen for timeless elegance.Warm cherry cabinets bring richness, while off-white countertops offer a bright balance",
      link: "/SshapeKitchen",
    },
    {
      id: 5,
      imageUrl: 'Kitchen/PsKitchen/13_y2rqnd',
      title: "Parallel Kitchen",
      description:
        "Parallel Kitchen Design with crisp white cabinets and warm hardwood floors. Countertops and cabinets on two opposing walls  for a timeless elegance",
      link: "/PShapeKitchen",
    },
    {
      id: 6,
      imageUrl: 'Kitchen/all_category/6_bcp1bw',
      title: "U-shaped kitchen",
      description:
        "Light wood cabinets with white quartz counters.U-Shaped Kitchen with Peninsula for extra space & separation",
      link: "/UShapeKitchen",
    },
    // Add more card objects as needed
  ];
  const LcardData = [
    {
      id: 1,
      imageUrl:
        'Kitchen/LsKitchen/1_a8rmpg',
      title: "",
      description:
        "Contemporary  kitchen layout with Warm wood cabinets of polished finish contrast with crisp white quartz countertops. A mosaic tile  with gray-cream shades",
    },
    {
      id: 2,
      imageUrl:
        'Kitchen/LsKitchen/2_clubfh',
      title: "",
      description:
        "A polished L-shaped kitchen stuns with teal blue acrylic cabinets and black accents. A slide-out drawer with clean-lines,hidden pattern enhances its modern look.",
    },
    {
      id: 3,
      imageUrl:
        'Kitchen/LsKitchen/3_z9eejg',
      title: "",
      description:
        "A space-saving  layout with crisp white cabinets for a bright & airy feel. The dark countertops,and stainless steel appliances add a sleek touch & contrast",
    },
    {
      id: 4,
      imageUrl:
        'Kitchen/LsKitchen/4_qbnmsq',
      title: "",
      description:
        "A modern L-shaped layout with white cabinets and dark quartz countertops. Counter space utilization, particularly by incorporating appliances",
    },
    {
      id: 5,
      imageUrl:
        'Kitchen/LsKitchen/5_t7kwot',
      title: "",
      description:
        "Sleek  L-shaped kitchen wow with unique pendants and recessed lights, creating a dramatic atmosphere. A touch of elegance with warm wood tones",
      unique: true,
    },
    {
      id: 6,
      imageUrl:
        'Kitchen/LsKitchen/17_btpbi0',
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
        'Kitchen/UsKitchen/2_cvjbul',
      title: "",
      description:
        "U-shaped kitchen stuns with vibrant parrot green cabinets wrap around three walls with light countertops, for ample storage and a refreshingly modern look",
    },
    {
      id: 2,
      imageUrl:
        'Kitchen/UsKitchen/1_xo3ogy',
      title: "",
      description:
        "U-shaped  layout with two-toned cabinet scheme, cobalt blue lower cabinets with crisp white upper cabinets laminate with a suede finish and granite countertops",
      unique: true,
    },
    {
      id: 3,
      imageUrl:
        'Kitchen/UsKitchen/15_atmb4u',
      title: "",
      description:
        "A  U-shaped kitchen layout with bright yellow cabinets and crisp white. Maximizes counter space and keeps appliances neatly tucked away on opposing walls",
    },
    {
      id: 4,
      imageUrl:
        'Kitchen/UsKitchen/3_vfdzhh',
      title: "",
      description:
        "White shaker U-Shaped kitchen layout  cabinet with light wood countertops.For a touch of elegance, a white tile backsplash adorns the wall",
    },
    {
      id: 5,
      imageUrl:
        'Kitchen/UsKitchen/20_vjns2y',
      title: "",
      description:
        "  Craftsman style with sunny yellow lower cabinets & gray upper cabinets. Light-colored wood countertops with the warm tones of the cabinets",
    },
    {
      id: 6,
      imageUrl:
        'Kitchen/UsKitchen/4_hcgvmg',
      title: "",
      description:
        "Stunning U-shaped kitchen boasts sleek blue cabinetry with polished chrome hardware. Gleaming appliances and light countertops for sleek and contemporary look",
    },
    // Add more card objects as needed
  ];
  const PcardData = [
    {
      id: 1,
      imageUrl:
        'Kitchen/PsKitchen/16_jlg0cm',
      title: "",
      description:
        "Light and airy kitchen featuring parallel cabinets in a warm wood tone light brown or beige.Space-saving. Ideal for maximizing efficiency in modern kitchens",
    },
    {
      id: 2,
      imageUrl:
        'Kitchen/PsKitchen/17_ck20i4',
      title: "",
      description:
        "Stylish modern kitchen with parallel layout. Dark charcoal cabinets and light marble countertops with stunning contrast.Efficient, space-saving design",
    },
    {
      id: 3,
      imageUrl:
        'Kitchen/PsKitchen/18_alwx6j',
      title: "",
      description:
        "A Modern parallel kitchen layout with Light gray, wood veneer cabinets complemented by a white quartz or laminate countertop.Ideal for contemporary kitchens",
    },
    {
      id: 4,
      imageUrl:
        'Kitchen/PsKitchen/19_prpcpk',
      title: "",
      description:
        "Parallel kitchen layout with wooden cabinets in a medium brown shade and a white countertop.Classic and timeless combination with Brown cabinets",
    },
    {
      id: 5,
      imageUrl:
        'Kitchen/PsKitchen/20_ujsafg',
      title: "",
      description:
        "Parallel kitchen layout with rich wood lower cabinets & crisp upper cabinets for a serene look. white countertops for a clean, sophisticated finish",
    },
    {
      id: 6,
      imageUrl:
        'Kitchen/PsKitchen/10_tqherx',
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
        'Kitchen/IsKitchen/1_gwru0z',
      title: "",
      description:
        "A central island, clad in stylish gray cabinets  with wood laminate paired with gleaming white quartz countertops  and functionality in this versatile layout",
    },
    {
      id: 2,
      imageUrl:
        'Kitchen/IsKitchen/2_dy9uog',
      title: "",
      description:
        "The Alluring Island Kitchen with Stunning focal point of  warm wood veneer base. Indulge in the luxurious elegance of a white marble countertop",
    },
    {
      id: 3,
      imageUrl:
        'Kitchen/IsKitchen/3_urmpb8',
      title: "",
      description:
        "A stunning island kitchen features crisp white wood cabinets, a warm wood island base for contrast, and elegant white marble countertops illuminated with modern lighting.",
    },
    {
      id: 4,
      imageUrl:
        'Kitchen/IsKitchen/4_gj8dho',
      title: "",
      description:
        "Island layout with two-tone design. Light gray painted cabinets with warm wood stain of the island base injects a touch of contrast and warmth into the space",
    },
    {
      id: 5,
      imageUrl:
        'Kitchen/IsKitchen/5_os01yr',
      title: "",
      description:
        "A  kitchen with stunning white marble. Perimeter walls boast integrated appliances for a streamlined aesthetic, while a practical island overhang for casual dining",
    },
    {
      id: 6,
      imageUrl:
        'Kitchen/IsKitchen/6_zu1n5s',
      title: "",
      description:
        "  Light gray laminated cabinet,a warm wood stain island base boosts real wood veneer or high-grade laminate with white marble countertop",
    },
    // Add more card objects as needed
  ];
  const ScardData = [
    {
      id: 1,
      imageUrl:
        'Kitchen/SsKitchen/10_x0dvfn',
      title: "",
      description:
        "Kitchen stuns with a mix of vibrant green cabinets for a shot of energy, balanced by crisp white acrylic cabinets that enhance the feeling of openness and light",
    },
    {
      id: 2,
      imageUrl:
        'Kitchen/SsKitchen/8_wwmq4q',
      title: "",
      description:
        "Straight kitchen with two-toned acrylic cabinets & Crisp white uppers enhance brightness, while warm wood grain lowers bring a touch of earthy elegance",
    },
    {
      id: 3,
      imageUrl:
        'Kitchen/SsKitchen/3_m85k1r',
      title: "",
      description:
        "A Straight kitchen layout characterized by dark wood cabinetry. The wood boasts a rich, dark stain or paint finish, lending a sense of sophistication  to the space.",
    },
    {
      id: 4,
      imageUrl:
        'Kitchen/SsKitchen/4_us52tt',
      title: "",
      description:
        " Straight kitchen two-toned cabinetry with warm wood grain lower units for a touch of nature, paired with crisp white upper cabinets for brightness and a timeless look",
    },
    {
      id: 5,
      imageUrl:
        'Kitchen/SsKitchen/5_hlvvao',
      title: "",
      description:
        "Classic and Elegant Straight kitchen layout with timeless elegance.Warm cherry cabinets bring richness, while off-white countertops offer a bright balance",
    },
    {
      id: 6,
      imageUrl:
        'Kitchen/SsKitchen/16_ezwbao',
      title: "",
      description:
        " Straight modular kitchen stuns. Ash grey cabinets base, light gleams off the matte finish, and a pop of green backsplash adds a touch of personality",
    },
    // Add more card objects as needed
  ];


  const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Top Modular Kitchen Designs in Gurugram | L-Shape, U-Shape & More – Adhunik Decodive",
    "description": "Discover top modular kitchen designs in Gurugram with Adhunik Decodive. Explore L-shape, U-shape, Parallel, Island, and Straight kitchen layouts designed for luxury and efficiency. Get a free consultation today!",
    "url": "https://adhunikdecodive.com/KitchenCategory",
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
            "url": "https://adhunikdecodive.com/LShapeKitchen"
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
        "url": "https://res.cloudinary.com/dwhmfz63n/image/upload/v1/landingPage/ylzbgsu0sw6qgh5yj544?_a=DAJAUVWIZAA0"
      }
    }
  };




  return (
    <>
    

     <Helmet>


 
<title>Top Modular Kitchen Designs in Gurugram | L-Shape, U-Shape & More – Adhunik Decodive</title>

<meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Discover top modular kitchen designs in Gurugram with Adhunik Decodive. Explore L-shape, U-shape, Parallel, Island, and Straight kitchen layouts designed for luxury and efficiency. Get a free consultation today!" />

<meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
<link rel="canonical" href="https://adhunikdecodive.com/KitchenCategory" data-react-helmet="true" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
<meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>

<meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Top Modular Kitchen Designs in Gurugram | L-Shape, U-Shape, Parallel & More – Adhunik Decodive" />
<meta data-n-head="ssr" data-hid="keywords" name="keywords" content="modular kitchen designs, L-shape kitchen, U-shape kitchen, parallel kitchen, island kitchen, straight kitchen, best modular kitchen in Gurugram, modern kitchen layouts, custom kitchen designs, kitchen renovation Gurugram, Adhunik Decodive kitchen interiors" />
<meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
<meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
<meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
<link data-n-head="ssr" rel="preconnect" href="http://cdn12.lemnisk.co"></link>

<meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Upgrade your kitchen with Adhunik Decodive's modular kitchen designs in Gurugram. From L-shape and U-shape to Parallel, Island, and Straight layouts, we craft modern, space-efficient, and stylish kitchens tailored to your needs. Book a free consultation today!" />

<meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/modular-kitchen"></meta>
<meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Modular Kitchen Experts" />
<meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Top Modular Kitchen Designs in Gurugram | L-Shape, U-Shape & More – Adhunik Decodive" />
<meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Explore the latest modular kitchen designs in Gurugram by Adhunik Decodive. From space-saving L-shape and U-shape kitchens to stylish Island and Parallel layouts, we offer customized solutions for modern homes. Get your dream kitchen today!" />
<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>



</Helmet>

      <ModalNew isOpen={openModal} onClose={toggleModal} />
      <PopUp />
      <div className="w-auto  bg-white p-5">
        <div className="h-full w-full ">


          <div className="row flex relative ">

            {/* <video
                            muted
                            autoPlay
                            loop preload="auto" playsInline
                            src={video}
                            className=" relative   h-[86vh]  md:h-[45vh] w-full object-cover rounded-lg"
                        ></video> */}


            <AdvancedVideo
              muted
              autoPlay
              loop preload="auto" playsInline
              cldVid={cld.video('Videos/kt_o3m1q9').quality('auto')}
              alt="interior l-shape category for design with oven and appliances" className="   relative   h-[86vh]  md:h-[45vh] w-full object-cover rounded-lg "
            />

            
            <div className="w-full  h-full p-9 bottom-0 flex-col justify-center md:justify-between  flex md:flex-row  md:text-center  items-center mx-auto  absolute">

              <p className=" h-full  text-gray-700 text-4xl flex-col flex my-auto justify-center items-center">
                Step into Your Ideal Kitchen
                <br />
                <span className=" text-[22px]">Explore Our Designs Today!</span>
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
                  cldImg={cld.image('Kitchen/all_category/3_ays5ku')}
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
                        cldImg={cld.image(card.imageUrl)}
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

          </Tabs.Item>

          <Tabs.Item
            title={

              <div onClick={onClickBad} className="group relative cursor-pointer justify-center  transition-shadow   items-center w-auto max-w-xs">

                <AdvancedImage
                  cldImg={cld.image('Kitchen/LsKitchen/9_kvomih')}
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
                    <Link to="/LShapeKitchen">
                      <AdvancedImage
                        cldImg={cld.image(card.imageUrl)}
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

          </Tabs.Item>

          <Tabs.Item
            title={
              <div onClick={onClickBad} className="  group relative cursor-pointer justify-center  transition-shadow   items-center w-auto max-w-xs">

                <AdvancedImage
                  cldImg={cld.image('Kitchen/UsKitchen/20_vjns2y')}
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
                        cldImg={cld.image(card.imageUrl)}
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
          </Tabs.Item>

          <Tabs.Item
            title={
              <div onClick={onClickBad} className="group relative cursor-pointer justify-center  transition-shadow   items-center w-auto max-w-xs">

                <AdvancedImage
                  cldImg={cld.image('Kitchen/PsKitchen/15_ov7ml3')}
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
                        cldImg={cld.image(card.imageUrl)}
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
          </Tabs.Item>

          <Tabs.Item
            title={
              <div onClick={onClickBad} className=" group relative cursor-pointer justify-center  transition-shadow   items-center w-auto max-w-xs">
                <AdvancedImage
                  cldImg={cld.image('Kitchen/IsKitchen/16_s1fkxv')}
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
                        cldImg={cld.image(card.imageUrl)}
                        alt= {card.description}
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
          </Tabs.Item>

          <Tabs.Item
            title={
              <div onClick={onClickBad} className="  group relative cursor-pointer justify-center  transition-shadow   items-center w-auto max-w-xs">

                <AdvancedImage
                  cldImg={cld.image('Kitchen/SsKitchen/2_xdjj6e')}
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
                        cldImg={cld.image(card.imageUrl)}
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
          </Tabs.Item>
        </Tabs>




      </div>


    
    </>
  );
}

export default KitchenCategory;
