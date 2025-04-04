import "./LandingPage.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power2, Power4 } from "gsap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "./Footer";

import t2 from "../assets/Images/HomePage/t1.png";

import LocomotiveScroll from 'locomotive-scroll';

// import ReactGA from "react-ga4";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative } from "swiper/modules";
import { useEffect } from "react";


gsap.registerPlugin(useGSAP, ScrollTrigger);


const kitchenCategories = [
  { name: 'Kitchens', imgSrc: 'Kitchen/all_category/2_bl3cxj' },
  { name: 'Island Kitchen', imgSrc: 'Kitchen/LsKitchen/12_cc9sti' },
  { name: 'L-Shape Kitchen', imgSrc: 'Kitchen/all_category/6_bcp1bw' },
  { name: 'U-Shape Kitchen', imgSrc: 'Kitchen/LsKitchen/1_a8rmpg' },
  { name: 'Parallel Kitchen', imgSrc: 'Kitchen/LsKitchen/3_z9eejg' },
  { name: 'Island Kitchen', imgSrc: 'Kitchen/LsKitchen/4_qbnmsq' },
  { name: 'Straight Kitchens', imgSrc: 'Kitchen/LsKitchen/5_t7kwot' },
  { name: 'L-Shape Kitchen', imgSrc: 'Kitchen/LsKitchen/6_pkw7mo' },
  { name: 'U-Shape Kitchen', imgSrc: 'Kitchen/LsKitchen/8_ohp7fb' },
  { name: 'Parallel Kitchen', imgSrc: 'Kitchen/LsKitchen/9_kvomih' },
  { name: 'Island Kitchen', imgSrc: 'Kitchen/LsKitchen/12_cc9sti' },
];

const wardrobeCategories = [
  { name: 'Wardrobe', imgSrc: 'landingPage/nnpixsron965x7qgsrsy' },
  { name: '1-Door Wardrobe', imgSrc: 'WardRobe/3_qnzv0m' },
  { name: 'Sliding Wardrobe', imgSrc: 'WardRobe/1DW/4_nhn4qc' },
  { name: 'Sliding Wardrobe', imgSrc: 'WardRobe/9_u45uvt' },
  { name: 'Walk-in-Closet Wardrobe', imgSrc: 'WardRobe/11_vtroxl' },
  { name: 'Wardrobe', imgSrc: 'WardRobe/1DW/1_z6mffw' },
  { name: '1-Door Wardrobe', imgSrc: 'WardRobe/1DW/2_sizvmd' },
  { name: '2-Door Wardrobe', imgSrc: 'WardRobe/1DW/3_x61xru' },
  { name: 'Sliding Wardrobe', imgSrc: 'WardRobe/1DW/4_nhn4qc' },
];

const lightingCategories = [
  
  { name: 'Lamps And Lightings', imgSrc: 'HomeDecor/Ceiling_Light/3_dgj8x9' },
  
  { name: 'Ceiling Lights', imgSrc: 'landingPage/bhxzfd5szxwtg6fdskyw' },
  { name: 'Lighting', imgSrc: 'HomeDecor/RoomLights/12_iynrag' },
  { name: 'Ceiling Lights', imgSrc: 'HomeDecor/Wall_Light/19_ymupwm' },
  { name: 'Wall Lights', imgSrc: 'HomeDecor/Ceiling_Light/13_d14wqe' },
  { name: 'Outdoor Lights', imgSrc: 'landingPage/trc0hvgzaaq4gnbfbcde' },
  { name: 'Room Lights', imgSrc: 'HomeDecor/RoomLights/12_iynrag' },
  { name: 'Lamps', imgSrc: 'HomeDecor/Wall_Light/20_qcvhqq' },
  { name: 'Lighting', imgSrc: 'HomeDecor/Ceiling_Light/17_nnfcow' },
  { name: 'Ceiling Lights', imgSrc: 'landingPage/bhxzfd5szxwtg6fdskyw' },
];

const decorCategories = [
  
  { name: 'All Decors', imgSrc: 'HomeDecor/mrr/21_jhvm8s' },
  { name: 'Mirrors', imgSrc: 'HomeDecor/WallD/17_f5c53m' },

  { name: 'Clocks', imgSrc: 'HomeDecor/WallD/5_jzcfnw' },
  { name: 'Wall Paintings', imgSrc: 'HomeDecor/V/1_c7dty2' },
  { name: 'Clocks', imgSrc: 'HomeDecor/Wall_Painting/18_dpibm5' },
  { name: 'Wall Paintings', imgSrc: 'HomeDecor/mrr/18_unhqk1' },
  { name: 'All Decors', imgSrc: 'HomeDecor/WallD/4_t5ayax' },
  { name: 'Wall Decors', imgSrc: 'HomeDecor/V/21_chxhty' },
  { name: 'Mirrors', imgSrc: 'HomeDecor/Clocks/13_qnfczx' },
  { name: 'Wall Decors', imgSrc: 'landingPage/ygpwkcrwzccgni6mofiq' },
  { name: 'Vases', imgSrc: 'HomeDecor/mrr/5_qmqgz4' },
  { name: 'Clocks', imgSrc: 'HomeDecor/WallD/5_jzcfnw' },
  { name: 'Wall Paintings', imgSrc: 'HomeDecor/V/1_c7dty2' },
];

const furnitureCategories = [
  { name: 'TV units Designs', imgSrc: 'Others/TV/18_nrfdzt' },
  { name: 'Commercial Furniture', imgSrc: 'Furniture/CF/15_zrilzh' },
  { name: 'Pooja Room Designs', imgSrc: 'Others/PoojaRoom/13_x6vgns' },
  { name: 'Domestic Furniture', imgSrc: 'Furniture/DF/14_sgloqa' },
  { name: 'Commercial Furniture', imgSrc: 'Furniture/CF/4_kdfjtu' },
  { name: 'Bar Counter', imgSrc: 'Others/BarCounter/26_onevwv' },
  { name: 'TV Panels Designs', imgSrc: 'Others/TV/12_fayle0' },
  { name: 'Pooja Room Designs', imgSrc: 'Others/PoojaRoom/17_z1yl7f' },
  { name: 'Domestic Furniture', imgSrc: 'Furniture/DF/16_iev7yy' },
  { name: 'Commercial Furniture', imgSrc: 'Furniture/CF/15_zrilzh' },
];

import 'react-lazy-load-image-component/src/effects/blur.css';

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, AdvancedVideo } from '@cloudinary/react';
import PopUp from "./PopUp";
import { Helmet } from "react-helmet-async";



function LandingPage() {

  const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });

  useGSAP(() => {

    // gsap code here...
    gsap.set(".slidesm", {
      scale: 5,
    });
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1,
      },
    });
    tl.to(
      ".vdodiv",
      {
        clipPath: "circle(0% at 50% 50%)",
        ease: "power2",
      },
      "a"
    );

    tl.to(
      ".slidesm",
      {
        scale: 1,
        ease: Power2,
      },
      "a"
    );

    tl.to(
      ".lft",
      {
        xPercent: -30,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    );

    tl.to(
      ".rgt",
      {
        xPercent: 30,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    );
  });


  useEffect(() => {

    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('.scroll-container'),
      smooth: true, // Enable smooth scrolling
      smoothMobile: false, // Disable smooth scrolling on mobile devices for better performance
      scrollSpeed: 50,

    });

    // Clean up function to destroy Locomotive Scroll when the component unmounts
    return () => {
      locomotiveScroll.destroy();
    };
  }, []); // Empty dependency array ensures the effect runs only once


  const imageIds = [
    'Images/4_z536dw',
    'Kitchen/LsKitchen/12_cc9sti',
    'HomeDecor/V/21_chxhty',
    'HomeDecor/RoomLights/10_ahmy1m',
    'HomeDecor/OutdoorLight/13_uqhjvu',
    'HomeDecor/mrr/16_rcttg8',
    'HomeDecor/Lamps/12_qomfy8',
    'Others/PoojaRoom/13_x6vgns',
    'Others/BarCounter/28_j2djr6',
    // Add more image identifiers as needed
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Adhunik DecoDive",
    "image": "https://adhunikdecodive.com/logo.jpg",
    "description": "Top luxury interior designers in Gurugram, Haryana, specializing in bespoke home and office interiors. Rated 5.0 by 7 Google reviews.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "603, Reach My Tower, Sector 70",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.3909507",
      "longitude": "77.0294258"
    },
    "telephone": "+91-9289126052",
    "url": "https://adhunikdecodive.com/",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "7"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61560707765598",
      "https://www.instagram.com/adhunikdecodive/",
      "https://www.linkedin.com/in/adhunik-decodive-032347337/"
    ]
  };


 
  return (

    <>



      <PopUp />





      <Helmet>


        <title>Top Luxury Interior Designers in Gurugram | Adhunik Decodive</title>

        <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Adhunik Decodive: Gurugram's top interior design company for luxury home & office interiors. From concept to installation, we deliver bespoke, functional spaces. Free consultation!" />
 <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        <link rel="canonical" href="https://adhunikdecodive.com/" data-react-helmet="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
        <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Top Interior Designers in Gurugram | Premium Home & Office Interiors – Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="interior designers in Gurugram, best home interior designers Gurugram, office interiors Gurugram, luxury interiors Gurugram, commercial interior designers Gurugram, interior design company in Gurugram, top interior decorators in Gurugram, home renovation Gurugram, modern interiors Gurugram, custom interior solutions Gurugram, interior designers in Gurgaon, best interior design services Gurgaon" />
        <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
        <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
        <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
        <link data-n-head="ssr" rel="preconnect" href="http://cdn12.lemnisk.co"></link>
        <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Adhunik Decodive: Gurugram's top interior design company for luxury home & office interiors. From concept to installation, we deliver bespoke, functional spaces. Free consultation!" />

        <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/"></meta>
        <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Interior Design Experts" />
        <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Top Luxury Interior Designers in Gurugram | Premium Home & Office Interiors – Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Adhunik Decodive: Gurugram's top interior design company for luxury home & office interiors. From concept to installation, we deliver bespoke, functional spaces. Free consultation!" />



        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>




      </Helmet>



      <div className="main w-full font-['Rejouice-Headline'] ">


        <div className="home  section w-full h-screen relative  " >
          <div className="w-full sticky top-0 left-0">
            <div className="btmtext absolute bottom-[7%] z-[4] w-52 left-[3%]">
              <h2>
                Luxury <br />
                Interior Visionary
                <br />
                Minimalist & Aesthetic
              </h2>
            </div>


            <div
              style={{ clipPath: "circle(100% at 50% 50%)" }}
              className="  z-[3] vdodiv w-full h-screen absolute top-0 left-0 bg-black overflow-hidden"
            >

              <AdvancedVideo
                muted
                autoPlay
               loop
                  playsInline
                  poster="/landingpage.webp"
                  cldPoster="https://res.cloudinary.com/dwhmfz63n/image/upload/q_50/v1740047319/landingPage/mkcwo034pfiodziddr6z.webp"
                 cldVid={cld.video('Videos/aufauoxihn6ezjn1eipm').quality('auto:best')}
                width={1920}
                height={1080}
               alt=" High-definition video of a modern kitchen interior captured by a camera " 
               className=" object-cover  w-screen h-screen  "
               
              />

            </div>


            <div className="marqueesContainer w-full h-screen relative overflow-hidden">
              <div className="heading absolute top-[7%] left-1/2 -translate-x-1/2">
                <h2 className="text-xl font-regular w-60 text-center">
                  Bringing your Dreams to New Horizon.
                </h2>
              </div>

              <div className="slidesm w-[90%] scale-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="slidesm w-[90%] scale-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">


                  <div className="row lft -translate-x-1/4 w-full flex items-center gap-3 md:gap-6 mb-2 whitespace-nowrap">
                    {kitchenCategories.map((category, index) => (
                      <div key={index} className="elem flex items-center gap-2 md:gap-4">
                        <h2 className="font-semibold md:text-4xl">
                          {category.name}
                        </h2>
                        {category.imgSrc && (
                          <div className="imgdiv w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] overflow-hidden rounded-full">
                          <AdvancedImage
                          
  cldImg={cld
    .image(category.imgSrc)
    .quality('auto:best')
     // Serve WebP/AVIF if supported
  }
   sizes="50px"
  height={48} 
  width={48} 
  loading="lazy"
  className="object-cover h-12 w-12"
  alt={category.name}
  fetchpriority="high"
  decoding="async"
/>

                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="row rgt -translate-x-2/3 w-full flex items-center gap-3 md:gap-6 mb-2 whitespace-nowrap">
                    {wardrobeCategories.map((category, index) => (
                      <div key={index} className="elem flex items-center gap-2 md:gap-4">
                        <h2 className="font-semibold  md:text-4xl">
                          {category.name}
                        </h2>
                        {category.imgSrc && (
                          <div className="imgdiv w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] overflow-hidden rounded-full">
                          <AdvancedImage
  cldImg={cld
    .image(category.imgSrc) 
    .quality('auto:best') 
  }
  height={48} 
  width={48} 
   sizes="50px"
  loading="lazy"
  className="object-cover h-12 w-12"
  alt={category.name}
  fetchpriority="high"
  decoding="async"
/>

                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="row lft -translate-x-1/4 w-full flex items-center gap-3 md:gap-6 mb-2 whitespace-nowrap">
                    {lightingCategories.map((category, index) => (
                      <div key={index} className="elem flex items-center gap-2 md:gap-4">
                        <h2 className="font-semibold  md:text-4xl">
                          {category.name}
                        </h2>
                        {category.imgSrc && (
                          <div className="imgdiv w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] overflow-hidden rounded-full">
                          <AdvancedImage
  cldImg={cld
    .image(category.imgSrc)
     // Resize to match displayed size
    .quality('auto:best') // Optimizes compression
     // Uses WebP/AVIF when supported
  }
   sizes="50px"
  height={48} 
  width={48} 
  loading="lazy"
  className="object-cover h-12 w-12"
  alt={category.name}
  fetchpriority="high"
  decoding="async"
/>

                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="row rgt -translate-x-2/3 w-full flex items-center gap-3 md:gap-6 mb-2 whitespace-nowrap">
                    {decorCategories.map((category, index) => (
                      <div key={index} className="elem flex items-center gap-2 md:gap-4">
                        <h2 className="font-semibold  md:text-4xl">
                          {category.name}
                        </h2>
                        {category.imgSrc && (
                          <div className="imgdiv w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] overflow-hidden rounded-full">
                          <AdvancedImage
  cldImg={cld
    .image(category.imgSrc)
     // Resize to match displayed size
    .quality('auto:best') // Optimizes compression
     // Uses WebP/AVIF when supported
  }
   sizes="50px"
  height={40} 
  width={40} 
  loading="lazy"
  className="object-cover h-12 w-12"
  alt={category.name}
  fetchpriority="high"
  decoding="async"
/>

                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="row lft -translate-x-1/4 w-full flex items-center gap-3 md:gap-6 mt-2 whitespace-nowrap">
                    {furnitureCategories.map((category, index) => (
                      <div key={index} className="elem flex items-center gap-2 md:gap-4">
                        <h2 className="font-semibold  md:text-4xl">
                          {category.name}
                        </h2>
                        {category.imgSrc && (
                          <div className="imgdiv w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] overflow-hidden rounded-full">
                          <AdvancedImage
  cldImg={cld
    .image(category.imgSrc)
     // Resize to match displayed size
    .quality('auto:best') // Optimizes compression
     // Uses WebP/AVIF when supported
  }
  height={48} 
  width={48} 
  loading="lazy"
  className="object-cover h-12 w-12"
  alt={category.name}
  fetchpriority="high"
  decoding="async"
/>

                          </div>
                        )}
                      </div>
                    ))}
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="h-full flex flex-col md:flex-row text-center p-5  m-4">
          <div className="md:w-[40%]  w-auto">
            <div className="flex items-center justify-center  h-full ">
              <div>
                <div className="   ">
                  <div className=" w-auto">
                 

                      <AdvancedImage loading="lazy" className=" h-96 w-full" src="https://res.cloudinary.com/dwhmfz63n/image/upload/v1742812142/e2ob3hxm14wwavci7c8n.png" fetchpriority="high" decoding="async"
 width={800} 
 height={500} 
                        effect="blur" alt="Modular Kitchen Designs" />

                    

                 
                  </div>
           
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
            <h2 className=" text-[6vw]  md:text-4xl mb-3 hidden md:block">
              India Business Awards 2025 
            </h2>
            <p className=" text-justify md:text-center">
            Adhunik Decodive is honored to receive the India Business Awards 2025, recognizing our excellence in interior design and innovation. This prestigious award reaffirms our commitment to creating exceptional, functional, and luxurious spaces for our clients. We extend our gratitude to our team, partners, and customers for their continuous support in our journey towards design excellence.
            </p>
         
          </div>
        </div>


        <div className="w-full  h-full ">
          <div className="w-full h-full row flex flex-col md:flex-row mx-auto my-auto">
            <div
              className="lg:h-screen h-auto md:w-5/12 p-8 flex flex-col justify-center items-center"
              style={{
                backgroundImage: `url(${t2})`,
                backgroundSize: "fill",
                backgroundPosition: "center",
                filter: "brightness(1)",
              }}
            >
              <h1 className="font-semibold text-5xl text-center mb-9">
                Explore The <span className="text-[#9f9f9f]">Art</span> of Decor
              </h1>
              <h2 className=" mx-auto text-1xl  text-justify w-[90%]">
                From the heart of your home to bespoke wardrobes and curated furniture selections, We offers a holistic approach to interior design. Our extensive experience encompasses a wide range of aesthetics, from timeless elegance to contemporary minimalism, ensuring your vision is brought to life with meticulous attention…
              </h2>
              <div className="flex flex-col lg:flex-row justify-center mt-4">
                {/* Item 1 */}
                <div className="w-full lg:w-6/12 h-full flex items-center justify-center lg:justify-start mb-8 lg:mb-0">
                  <div className="w-[9vw] h-[9vw] md:w-[3vw] md:h-[3vw] flex-shrink-0 mr-4">

                    <AdvancedImage fetchpriority="high" decoding="async"
                      effect="blur"  sizes="50px" width={50} loading="lazy"
                      height={50} className="  w-full h-full object-cover text-black " alt="DURABILITY
Lasting 10 Years" cldImg={cld.image('Images/durability_aynv6g')} />

                  </div>
                  <div className="text-center lg:text-left">
                    <h2 className="text-2xl font-semibold">DURABILITY</h2>
                    <p className="text-sm">Lasting 10 Years</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="  w-full lg:w-10/12 h-full flex items-center justify-center lg:justify-start">
                  <div className="w-[9vw] h-[9vw] md:w-[3vw] md:h-[3vw] flex-shrink-0 mr-4 lg:ml-7">

                    <AdvancedImage loading="lazy" fetchpriority="high" decoding="async"
                      effect="blur" width={70}
                      height={70} className="  w-full h-full object-cover" alt="MODERN INTERIOR" cldImg={cld.image('Images/modern_t76wou')} />

                  </div>
                  <div className="text-center lg:text-left ">
                    <h2 className="text-2xl font-semibold">MODERN INTERIOR</h2>
                    <p className="text-sm">Exclusive 10 Year Warranty</p>
                  </div>

                </div>
              </div>
              <div className="card p-9 flex">
                <Link
                  to="/AboutUs"
                  className=" justify-start bg-[#163C48] text-white text-1xl px-7 py-3 rounded-sm mt-5    "
                >
                  About Us
                </Link>
              </div>
            </div>

            <div className=" h-[40vh] md:h-auto lg:h-screen md:w-7/12 z-0 ">
              <Swiper
                grabCursor={true}
                effect={"creative"}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: ["-20%", 0, -1],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                speed={2000}
                modules={[EffectCreative, Autoplay]}
                className="mySwiper3"
              >
                {imageIds.map((id, index) => (
                  <SwiperSlide key={index}>



                    <AdvancedImage
                      fetchpriority="high" decoding="async"
                      key={index}
                      width='100%'
                      height='100%'
                      className=" w-full  object-cover object-left"
                      effect="blur"
                      loading="lazy"
                      alt={`Image ${index + 1}`}
                      cldImg={cld.image(id)}
                    />
                  </SwiperSlide>

                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="w-full h-auto ">
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="w-full lg:w-5/12 p-4 lg:p-14 h-[40vh] hidden md:block md:h-screen">
              <div
                className=" mx-auto my-auto flex rounded_photo w-full h-full rounded-t-full border-double border-8 border-white"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(1)",
                }}
              >

              
                <div className="hidden md:flex row flex gap-10 relative content-end top-[89%] left-[15%] ">
                  <div className="w-6/12 h-10">
                    <div
                      className=" border  border-[#293C3C] h-[18vh] w-[10vw]  flex flex-col justify-center items-center  rounded-xl "
                      style={{
                        background:
                          "linear-gradient(177.9deg, rgba(200, 203, 226, 0.53) 3.6%, rgba(22, 60, 72, 0.72) 105.8%)",
                      }}
                    >

                      <AdvancedImage fetchpriority="high" decoding="async"
                        effect="blur" width={50} loading="lazy"
                        height={50} className=" h-11 w-11 mb-2" alt="Design inside imac using paint" cldImg={cld.image('Images/designk_ghb9u1')} />

                      <h2 className=" text-center text-[3vw] lg:text-3xl  text-white">
                        Design
                      </h2>
                    </div>
                  </div>

                  <div className="w-6/12 h-10">
                    <div
                      className=" border  border-white h-[18vh] w-[10vw]  flex flex-col items-centerflex justify-center items-center rounded-xl"
                      style={{
                        background:
                          "linear-gradient(177.9deg, rgba(200, 203, 226, 0.53) 3.6%, rgba(22, 60, 72, 0.72) 105.8%)",
                      }}
                    >

                      <AdvancedImage fetchpriority="high" decoding="async"
                        effect="blur" width={50} loading="lazy"
                        height={50} className=" h-11 w-11 mb-2" alt="Build product and step up" cldImg={cld.image('Images/build_nz2i8p')} />

                      <h2 className="  text-center text-[3vw] lg:text-3xl  text-white">
                        Build
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-7/12 h-full md:h-screen flex items-center justify-center">
              <div className="p-4 lg:p-10">
                <h2 className="text-4xl lg:text-5xl text-center mb-5">
                  Make Your Dream Space a Reality: <br /> Why Choose Us?
                </h2>

                {/* Features List */}
                <div className="space-y-6  w-full 2xl:w-[70%] xl:text-justify xl:mx-auto">
                  {/* Feature 1 */}

                  <div className="flex-col md:flex-row flex justify-center items-center">

                    <AdvancedImage fetchpriority="high" decoding="async"
                      effect="blur" width={70} loading="lazy"
                      height={70} className="h-12 w-12 " alt="Quality Design of home" cldImg={cld.image('Images/interior_vymssy')} />

                    <div className="  md:pl-5">
                      <h2 className="text-xl lg:text-2xl font-semibold text-center md:text-start">
                        Quality Design
                      </h2>
                      <p className="text-sm lg:text-base  text-gray-500">
                        We turn your vision and lifestyle into a beautiful space
                        you'll love, using premium materials and construction
                        methods.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex-col md:flex-row flex justify-center items-center">
                    <AdvancedImage fetchpriority="high" decoding="async"
                      effect="blur" width={70} loading="lazy"
                      height={70} className="h-12 w-12 " alt="Team of Experts , skilled designers bring expertise to every project" cldImg={cld.image('Images/design_xotkss_ssaaef')} />


                    <div className=" md:pl-5">
                      <h2 className="text-xl lg:text-2xl font-semibold text-center md:text-start">
                        Team of Experts
                      </h2>
                      <p className="text-sm lg:text-base text-gray-500">
                        Our passionate and skilled designers bring expertise to
                        every project, creating a space that reflects your
                        unique style and needs.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex-col md:flex-row flex justify-center  items-center">
                    <AdvancedImage fetchpriority="high" decoding="async"
                      effect="blur" width={70} loading="lazy"
                      height={70} className="h-12 w-12 " alt="Expect clear communication" cldImg={cld.image('Images/com_uonsax')} />
                    <div className="md:pl-5 ">
                      <h2 className="text-xl lg:text-2xl font-semibold text-center md:text-start">
                        Professional Service
                      </h2>
                      <p className="text-sm lg:text-base text-gray-500">
                        Expect clear communication, thorough planning, and
                        timely execution every step of the way. We stick to your
                        budget and make your space transformation hassle-free.
                      </p>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex-col md:flex-row flex justify-center  items-center">
                    <AdvancedImage fetchpriority="high" decoding="async"
                      effect="blur" width={70} loading="lazy"
                      height={70} className="h-12 w-12 " alt="On-time Delivery" cldImg={cld.image('Images/delivery_euogle')} />
                    <div className=" md:pl-5">
                      <h2 className="text-xl lg:text-2xl font-semibold text-center md:text-start">
                        On-time Delivery
                      </h2>
                      <p className="text-sm lg:text-base text-gray-500">
                        We promise on-time delivery within 6 weeks or less. Your
                        project is our priority, and we're committed to ensuring
                        timely completion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="w-full h-full p-4 bg-zinc-100 overflow-hidden relative ">
          <div className="w-full text-center">
            <p className="text-4xl">
              Discover the Process <br /> Unveiling in 3 Simple Steps <br />
            </p>
            <p className="text-[#702b4f] mt-3">
              Unlock The Process For Your Ideal All Interior Design
            </p>
          </div>

          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
            {/* First Step */}
            <div className="w-full p-9">
              <div className="border border-[#CDC7C5] relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                <div className="relative mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">

                  <AdvancedImage width={500}  loading="lazy"
  height={500} alt="make your interior style and space optimization using professional designers" cldImg={cld.image('landingPage/myh1ynmcgsmxmde8nwqy')} />



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
                  <AdvancedImage  width={500} loading="lazy"
  height={500}  alt="Revitalize your interior kitchen space." cldImg={cld.image('Images/meeting2_qa5a1w')} />


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

                  <AdvancedImage  width={500} loading="lazy"
  height={500}  alt="Get Professional Installation & Shop with Confidence" cldImg={cld.image('Images/meeting3_woteoo')} />

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

        <div className="h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">
          <div className="md:w-[40%]  w-auto">
            <div className="flex items-center justify-center  h-full ">
              <div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl   ">
                  <div className=" w-auto">
                    <div className=" w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">

                      <AdvancedImage loading="lazy" className="" cldImg={cld.image('landingPage/mkcwo034pfiodziddr6z')} fetchpriority="high" decoding="async"
 width={800} 
 height={500} 
                        effect="blur" alt="Modular Kitchen Designs" />

                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h2 className="font-dmserif text-3xl font-bold text-white">
                      Kitchen Designs
                    </h2>
                    <p className="mb-3 pt-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                      Style in Every Tile, Our Modular Kitchens Redefine your
                      Lifestyle
                    </p>
                    <Link
                      to="./KitchenCategory"
                      className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                    >
                      &#10147;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
            <h2 className=" text-[6vw]  md:text-4xl mb-3 hidden md:block">
              Modular Kitchen Designs
            </h2>
            <p className=" text-justify md:text-center">
              Discover the perfect heart for your perfect home, a place where
              laughter and delicious food weave their magic Our modular kitchens
              transform your culinary dreams into reality with a curated
              selection of styles, from minimalist havens to elaborate
              masterpieces. Each design is crafted for beauty and functionality,
              with innovative features and space-saving solutions to make
              cooking a joy. Plus personalize your own style to perfectly fit
              for your needs…
            </p>
            <div className="show_m mt-5">
              <Link
                to="./KitchenCategory"
                className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
              >
               &#10147;
              </Link>
            </div>
          </div>
        </div>

        <div className="h-full flex  flex-col-reverse md:flex-row text-center p-5 bg-[#F4F4F4] m-4">
          <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
            <h2 className="text-[6vw]  md:text-4xl mb-3 hidden md:block">
              Wardrobe Designs
            </h2>
            <p className=" text-justify md:text-center">
              Feeling overwhelmed by a bulging closet? Step into a world of
              serenity with our exquisite wardrobe collection. Each design
              seamlessly blends functionality and elegance, offering a
              harmonious marriage of style and storage. Imagine effortless
              mornings with everything perfectly organized, sparking joy every
              time you open the door. Say hello to the end of chaos and embrace
              stylish harmony.
            </p>
            <div className="show_m mt-5">
              <Link
                to="/Wardrobe"
                className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
              >
               &#10147;
              </Link>
            </div>
          </div>
          <div className="md:w-[40%]  w-auto">
            <div className="flex items-center justify-center h-full">
              <div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                  <div className=" h-full w-auto">
                    <div className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">

                      <AdvancedImage loading="lazy" cldImg={cld.image('Images/wr_qfshhd')}  width={500} 
  height={500}   alt="Wardrobe Designs" />

                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

                  <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h2 className="font-dmserif text-2xl md:text-3xl font-bold text-white">
                      Wardrobe Designs
                    </h2>
                    <p className="mb-3  italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-sm pt-2">
                      Wardrobes that Elevate,Year After Year
                    </p>
                    <Link
                      to="/Wardrobe"
                      className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                    >
                     &#10147;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">
          <div className="md:w-[40%]  w-auto">
            <div className="flex items-center justify-center h-full">
              <div>
                <div className="group relative  rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">

                  <div className=" h-full w-auto">
                    <div className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">

                    <AdvancedImage
  cldImg={cld
    .image('landingPage/ckhkwnh3brr4o0k0b1iv')
     // Resize image to 500x300px
    .quality('auto:best')
     // Uses WebP/AVIF if supported
  }
  width={500} 
  height={300} 
  loading="lazy"
  className="object-cover"
  alt="pink and grey sofa and wooden table with glass Furniture"
/>

                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h2 className="font-dmserif text-3xl font-bold text-white">
                      Furniture
                    </h2>
                    <p className="mb-3 text-sm pt-2 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Step Up Your Space, It's Time to Groove with Trendy
                      Furniture
                    </p>
                    <Link
                      to="/Furniture"
                      className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                    >
                      &#10147;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
            <h2 className="text-[6vw]   md:text-4xl mb-3 hidden md:block">
              Furniture
            </h2>
            <p className=" text-justify md:text-center">
              Enhance your workday environment with our curated selection of
              stylish and functional home office furniture. Explore our range of
              stylish and functional furniture that you'll love to craft your
              productivity oasis. Imagine ergonomic chairs, spacious desks, and
              sleek storage solutions – all designed to boost your focus and
              fuel your success.
            </p>
            <div className="show_m mt-5">
              <Link
                to="/Furniture"
                className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
              >
                &#10147;
              </Link>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col-reverse md:flex-row text-center p-5 bg-[#F4F4F4] m-4">
          <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
            <h2 className=" text-[6vw]  md:text-4xl mb-3 hidden md:block">Home Decor </h2>
            <p className=" text-justify md:text-center">
              Unleash the chic potential of your home with Adhunik DecoDive.
              Our curated collections of furniture, lighting, and décor embody
              the essence of modern design. From sleek lines to pops of color,
              discover pieces that spark joy and elevate your space. Craft a
              home that reflects your unique personality <br /> – effortlessly.
            </p>
            <div className="show_m mt-5">
              <Link
                to="/HomeDecor"
                className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
              >
               &#10147;
              </Link>
            </div>
          </div>
          <div className="md:w-[40%]  w-auto">
            <div className="flex items-center justify-center h-full">
              <div>
                <div className="group  rounded-xl relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className=" h-full w-auto">
                    <div className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">

                      <AdvancedImage loading="lazy" cldImg={cld.image('landingPage/dse47cfgiznpkyjfqcu8')} width={500} 
  height={500}  alt="Home Decor " />

                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h2 className="font-dmserif text-3xl font-bold text-white">
                      Home Decor
                    </h2>
                    <p className="mb-3  italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-sm pt-2">
                      Make Your Space Shine with Stunning Pieces that Inspire
                      You
                    </p>
                    <Link
                      to="/HomeDecor"
                      className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                    >
                      &#10147;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col md:flex-row text-center p-5 bg-[#F4F4F4] m-4">
          <div className="md:w-[40%]  w-auto">
            <div className="flex items-center justify-center h-full" >
              <div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30  rounded-xl">
                  <div className=" h-full w-auto">
                    <div className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">

                      <AdvancedImage  loading="lazy" cldImg={cld.image('Others/TV/2_k9vhdt')}  width={500} 
  height={500}  alt="TV Unit Panels" />


                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h2 className="font-dmserif text-3xl font-bold text-white">

                      TV Unit Panels
                    </h2>
                    <p className="mb-3  italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-sm pt-2">
                      Awaken the Style of Your Living Room with Sleek TV Panels
                    </p>
                    <Link
                      to="/OthersCategory"
                      className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                    >
                     &#10147;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[60%] w-auto h-full p-2 m-2 md:p-5 md:m-5 text-center">
            <h2 className="text-[6vw]  md:text-4xl mb-3  hidden md:block"> TV Unit Panels</h2>
            <p className=" text-justify md:text-center">

              Level up your living room's ambiance. Our TV unit panels aren't
              just furniture – they're a statement piece that sets the tone for
              your entire space.Whether you prefer a sleek modern look, a cozy
              rustic vibe, or something entirely unique, our diverse range of
              finishes and configurations allows you to tailor your TV zone to
              reflect your individual design vision. Let your living room speak
              volumes about your style and personality with our stunning TV unit
              options.
            </p>
            <div className="show_m mt-5">
              <Link
                to="/OthersCategory"
                className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
              >
                &#10147;
              </Link>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
}

export default LandingPage;
