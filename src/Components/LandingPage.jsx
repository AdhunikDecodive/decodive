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
  { name: 'Straight Kitchens', imgSrc: 'Kitchen/all_category/4_ylybrr' },
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
  { name: 'Wardrobe', imgSrc: 'WardRobe/8_sfbh73' },
  { name: '1-Door Wardrobe', imgSrc: 'WardRobe/3_qnzv0m' },
  { name: '2-Door Wardrobe', imgSrc: 'WardRobe/7_ivqmog' },
  { name: 'Sliding Wardrobe', imgSrc: 'WardRobe/9_u45uvt' },
  { name: 'Walk-in-Closet Wardrobe', imgSrc: 'WardRobe/11_vtroxl' },
  { name: 'Wardrobe', imgSrc: 'WardRobe/1DW/1_z6mffw' },
  { name: '1-Door Wardrobe', imgSrc: 'WardRobe/1DW/2_sizvmd' },
  { name: '2-Door Wardrobe', imgSrc: 'WardRobe/1DW/3_x61xru' },
  { name: 'Sliding Wardrobe', imgSrc: 'WardRobe/1DW/4_nhn4qc' },
];

const lightingCategories = [
  { name: 'Lamps And Lightings', imgSrc: 'HomeDecor/Ceiling_Light/3_dgj8x9' },
  { name: 'Lamps', imgSrc: 'HomeDecor/OutdoorLight/2_cth23n' },
  { name: 'Lighting', imgSrc: 'HomeDecor/RoomLights/12_iynrag' },
  { name: 'Ceiling Lights', imgSrc: 'HomeDecor/Wall_Light/19_ymupwm' },
  { name: 'Wall Lights', imgSrc: 'HomeDecor/Ceiling_Light/13_d14wqe' },
  { name: 'Outdoor Lights', imgSrc: 'HomeDecor/OutdoorLight/5_wth6ea' },
  { name: 'Room Lights', imgSrc: 'HomeDecor/RoomLights/12_iynrag' },
  { name: 'Lamps', imgSrc: 'HomeDecor/Wall_Light/20_qcvhqq' },
  { name: 'Lighting', imgSrc: 'HomeDecor/Ceiling_Light/17_nnfcow' },
  { name: 'Ceiling Lights', imgSrc: 'HomeDecor/OutdoorLight/3_wt1aml' },
];

const decorCategories = [
  { name: 'All Decors', imgSrc: 'HomeDecor/mrr/21_jhvm8s' },
  { name: 'Mirrors', imgSrc: 'HomeDecor/WallD/17_f5c53m' },
  { name: 'Wall Decors', imgSrc: 'HomeDecor/V/12_ioia6a' },
  { name: 'Vases', imgSrc: 'HomeDecor/Clocks/10_ots5ia' },
  { name: 'Clocks', imgSrc: 'HomeDecor/Wall_Painting/18_dpibm5' },
  { name: 'Wall Paintings', imgSrc: 'HomeDecor/mrr/18_unhqk1' },
  { name: 'All Decors', imgSrc: 'HomeDecor/WallD/4_t5ayax' },
  { name: 'Wall Decors', imgSrc: 'HomeDecor/V/21_chxhty' },
  { name: 'Mirrors', imgSrc: 'HomeDecor/Clocks/13_qnfczx' },
  { name: 'Wall Decors', imgSrc: 'HomeDecor/Wall_Painting/16_nyg8r3' },
  { name: 'Vases', imgSrc: 'HomeDecor/mrr/5_qmqgz4' },
  { name: 'Clocks', imgSrc: 'HomeDecor/WallD/5_jzcfnw' },
  { name: 'Wall Paintings', imgSrc: 'HomeDecor/V/1_c7dty2' },
];

const furnitureCategories = [
  { name: 'TV units Designs', imgSrc: 'Others/TV/18_nrfdzt' },
  { name: 'Bar Counter', imgSrc: 'Others/BarCounter/10_uoq6ay' },
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
import { Helmet, HelmetProvider } from "react-helmet-async";



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

  return (
    
    <>

  

      <PopUp />

    
      <HelmetProvider>

    
    
      <Helmet>
      
        <title> 
        Best Interior Design Company in Gurugram | Home Decoration
         </title>

        <meta 
        name="description"
         content="Adhunik DecoDive : Shop Furniture Online in India. Explore a wide range of ⭐Sofa Sets ⭐Study Tables ⭐Dining Tables at the best prices. ✔Guaranteed Quality." 
         data-react-helmet="true"
          />

        <link rel="canonical" href="https://adhunikdecodive.com/" data-react-helmet="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Helmet>

      </HelmetProvider>

      <div className="main w-full font-['Rejouice-Headline'] ">


        <div className="home  section w-full h-screen relative ">
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
                loop preload="auto" playsInline
                cldVid={cld.video('Videos/hp_jntt1i').quality('auto')}
                alt=" High-definition video of a modern kitchen interior captured by a camera " className="     object-cover  w-screen h-screen  "
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
                              cldImg={cld.image(category.imgSrc)}
                              height={70}
                              width={70}
                              className="object-cover h-12 w-12"
                              alt={category.name}
                              fetchpriority="high"
                              decoding="async"
                              effect="blur"
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
                              cldImg={cld.image(category.imgSrc)}
                              height={70}
                              width={70}
                              className="object-cover h-12 w-12"
                              alt={category.name}
                              fetchpriority="high"
                              decoding="async"
                              effect="blur"
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
                              cldImg={cld.image(category.imgSrc)}
                              height={70}
                              width={70}
                              className="object-cover h-12 w-12"
                              alt={category.name}
                              fetchpriority="high"
                              decoding="async"
                              effect="blur"
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
                              cldImg={cld.image(category.imgSrc)}
                              height={70}
                              width={70}
                              className="object-cover h-12 w-12"
                              alt={category.name}
                              fetchpriority="high"
                              decoding="async"
                              effect="blur"
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
                              cldImg={cld.image(category.imgSrc)}
                              height={70}
                              width={70}
                              className="object-cover h-12 w-12"
                              alt={category.name}
                              fetchpriority="high"
                              decoding="async"
                              effect="blur"
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
                      effect="blur" width={70}
                      height={70} className="  w-full h-full object-cover text-black " alt="DURABILITY
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

                    <AdvancedImage fetchpriority="high" decoding="async"
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

                {/* <AdvancedImage cldImg={cld.image('Images/1_tuzlzk')} /> */}
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
                        effect="blur" width={50}
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
                        effect="blur" width={50}
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
                      effect="blur" width={70}
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
                      effect="blur" width={70}
                      height={70} className="h-12 w-12 " alt="Team of Experts , skilled designers bring expertise to every project" cldImg={cld.image('Images/design_xotkss')} />


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
                      effect="blur" width={70}
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
                      effect="blur" width={70}
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

                  <AdvancedImage alt="make your interior style and space optimization using professional designers" cldImg={cld.image('Images/meeting_yeqqkz')} />

                

                </div>
                <div className="p-6 text-center">
                  <h3 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Show your style and space optimization.
                  </h3>
                  <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                    Dream big for your space! Share your inspiration, goals, and
                    budget, and let us help you design a space you'll adore.
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
                  <AdvancedImage alt="Revitalize your interior kitchen space." cldImg={cld.image('Images/meeting2_qa5a1w')} />

                
                </div>
                <div className="p-6 text-center">
                  <h3 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Revitalize your space.
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
               
                  <AdvancedImage   alt="Get Professional Installation & Shop with Confidence" cldImg={cld.image('Images/meeting3_woteoo')} />

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

                      <AdvancedImage className="    " cldImg={cld.image('Images/mdk_imd6b1')} fetchpriority="high" decoding="async"

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
                      Kitchen Category
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
                 Kitchen Category
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
                Wardrobe Designs
              </Link>
            </div>
          </div>
          <div className="md:w-[40%]  w-auto">
            <div className="flex items-center justify-center h-full">
              <div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                  <div className=" h-full w-auto">
                    <div className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">

                      <AdvancedImage cldImg={cld.image('Images/wr_qfshhd')} alt="Wardrobe Designs" />

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
                      Wardrobe Designs
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

                      <AdvancedImage cldImg={cld.image('Images/f_yov5sa')} alt="pink and grey sofa and wooden table with glass Furniture " />

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
                     Furniture
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
               Furniture
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
               Home Decor
              </Link>
            </div>
          </div>
          <div className="md:w-[40%]  w-auto">
            <div className="flex items-center justify-center h-full">
              <div>
                <div className="group  rounded-xl relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className=" h-full w-auto">
                    <div className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">

                      <AdvancedImage cldImg={cld.image('Images/hd_u5o0ci')} alt="Home Decor " />

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
                     Home Decor
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

                      <AdvancedImage cldImg={cld.image('Others/TV/2_k9vhdt')} alt="TV Unit Panels" />


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
                      TV Units
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
              Other Category
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
