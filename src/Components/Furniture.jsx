import Footer from "./Footer";
import { Tabs } from "flowbite-react";
import { Helmet, HelmetProvider } from "react-helmet-async";


import PhoneCallButton from "./PhoneCallButton";

import ModalNew from './ModalNew';
import { useState } from "react";


import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Power2, Power4 } from 'gsap';

gsap.registerPlugin(useGSAP, ScrollTrigger);
import PopUp from "./PopUp";
import { Link } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, AdvancedVideo } from '@cloudinary/react';


function Furniture() {
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
    
    };


    const AllcardData = [
        {
            id: 1,
            imageUrl: 'Furniture/All_C/1_qzrdhs',
            title: "Commercial Furniture",
            description:
                "Scandinavian-style living room with a velvet terracotta sofa complemented by contemporary wooden furniture ",
                link: "/CommercialFurniture",
        },
        {
            id: 2,
            imageUrl: 'Furniture/All_C/2_uctj22',
            title: "Domestic Furniture",
            description:
                "Wooden desk paired with a fabric seat chair  with Light wooden corner cabinet keeps your stuff stashed away",
                link: "/DomesticFurniture",
        },
        {
            id: 3,
            imageUrl: 'Furniture/All_C/3_gff2vs',
            title: "Commercial Furniture",
            description:
                "Light-colored top modern office desk paired white, and chrome legs for a sleek and contemporary look.",
                link: "/CommercialFurniture",
        },
        {
            id: 4,
            imageUrl: 'Furniture/All_C/4_wnsujt',
            title: "Commercial Furniture",
            description:
                " Modern office  with light-colored cubicles  for a spacious feel, a sleek desk  for smooth workspace",
                link: "/CommercialFurniture",
        },
        {
            id: 5,
            imageUrl: 'Furniture/DF/1_bnakez',
            title: "Domestic Furniture",
            description:
                "Scandinavian Style Dining Table Set with Teak Wood, Rectangular,4 Seater",
                link: "/DomesticFurniture",
        },
        {
            id: 6,
            imageUrl: 'Furniture/All_C/5_hgz82b',
            title: "Commercial Furniture",
            description:
                "A round wooden dining table with four light colored chairs tucked underneath.",
                link: "/CommercialFurniture",
        },
      
        // Add more card objects as needed
    ];


    const LcardData = [
        {
            id: 1,
            imageUrl:
                'Furniture/DF/1_bnakez',
            title: "",
            description:
                "Scandinavian Style Dining Table Set with Teak Wood, Rectangular,4 Seater",
        },
        {
            id: 2,
            imageUrl:
                'Furniture/DF/2_lez4qg',
            title: "",
            description:
                "Sliding Door Shoe Racks Save Space in Your Closet, Hide Shoes for A Neater Look, And Keep them Dust-Free",
        },
        {
            id: 3,
            imageUrl:
                'Furniture/DF/4_twrrs9',
            title: "",
            description:
                "A sleek white desk chair with a comfortable fabric seat, charming wooden cupboard with blue and white hues.",
        },
        {
            id: 4,
            imageUrl:
                'Furniture/DF/3_vfxvxa',
            title: "",
            description:
                "A plush green armchair with rolled arms and a cushioned back with wooden coffee table.",
        },
        {
            id: 5,
            imageUrl:
                'Furniture/DF/5_x1zhcm',
            title: "",
            description:
                "Warm and inviting dining room with a  natural wood grain finish dining table and matched chairs.",
        },
        {
            id: 6,
            imageUrl:
                'Furniture/DF/17_cnqwqt',
            title: "",
            description:
                "The King-Size Bed with  Golden and Off-White Colors, Squeak-Resistant for great Comfort ",
        },
        // Add more card objects as needed
    ];


    const UcardData = [
        {
            id: 1,
            imageUrl:
                'Furniture/CF/4_kdfjtu',
            title: "",
            description:
                "Office workstation with individual laminated desks in a rectangular layout with high-contrast color scheme",
        },
        {
            id: 2,
            imageUrl:
                'Furniture/CF/7_pa6pkm',
            title: "",
            description:
                "Stylish office cabin furniture with premium wooden oak, paired with compact chairs for  for comfortable ",
        },
        {
            id: 3,
            imageUrl:
                'Furniture/CF/3_oou8h0',
            title: "",
            description:
                "A modern office interior with sleek charcoal gray desk's and the ergonomic supportive chair's designs",
        },
        {
            id: 4,
            imageUrl:
                'Furniture/CF/10_thtagy',
            title: "",
            description:
                "Light luxury slate desk, for a modern, minimalist design with sleek lines and a high-end finish for a stylish and functional workspace",
        },
        {
            id: 5,
            imageUrl:
                'Furniture/CF/5_iocwng',
            title: "",
            description:
                "Modern office desk with sleek, rounded in luxurious planked oak veneer with brushed champagne metal accents. Perfect for a professional workspace.",
        },
        {
            id: 6,
            imageUrl:
                'Furniture/CF/6_kq3nv7',
            title: "",
            description:
                "A modern home office with high-quality wooden furniture with a sleek design, including a bookcase, desk, and wall cabinet with led light.",
        },
        // Add more card objects as needed
    ];
 
    const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });
  


  return (
    <>





<Helmet>

        <title>Top Domestic & Commercial Furniture in Gurugram | Adhunik Decodive</title>
        <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Adhunik Decodive: Gurugram's top provider of domestic and commercial furniture. From concept to installation, we create bespoke, functional, and stylish furniture solutions. Free consultation!" />

        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        <link rel="canonical" href="https://adhunikdecodive.com/Furniture" data-react-helmet="true" />
        <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
        <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Top Domestic & Commercial Furniture in Gurugram | Stylish & Functional – Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="domestic furniture, commercial furniture, best furniture in Gurugram, modern furniture solutions, custom furniture Gurugram, office furniture Gurugram, home furniture Gurugram, luxury furniture solutions, Adhunik Decodive furniture, stylish furniture Gurugram" />
        <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
        <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
        <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
        <link data-n-head="ssr" rel="preconnect" href="http://cdn12.lemnisk.co"></link>
        <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Adhunik Decodive: Gurugram's top provider of domestic and commercial furniture. From concept to installation, we create bespoke, functional, and stylish furniture solutions. Free consultation!" />

        <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/furniture"></meta>
        <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Furniture Experts" />
        <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Top Domestic & Commercial Furniture in Gurugram | Stylish & Functional – Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Adhunik Decodive: Gurugram's top provider of domestic and commercial furniture. From concept to installation, we create bespoke, functional, and stylish furniture solutions. Free consultation!" />

        {/* <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> */}

      </Helmet>

  <PopUp/>
<ModalNew  isOpen={openModal} onClose={toggleModal}  />
    
    <div className="w-auto  bg-white p-5">
        <div className="h-full w-full ">
            <div className="video_container "></div>

            <div className="w-full h-full">
                <div className="video_card"></div>
            </div>

            <div className="row flex relative ">
                     

      <AdvancedVideo   muted
                autoPlay
                loop preload="auto" playsInline
                cldVid={cld.video('Videos/fr_kpmphm').quality('auto')}
                alt="Furniture for Every Style and Taste
Dive into Our Curated Collection!" className="   relative   h-[86vh]  md:h-[45vh] w-full object-cover rounded-lg "
              />

                        <div className="w-full  h-full p-9 bottom-0 flex-col justify-center md:justify-between  flex md:flex-row  md:text-center  items-center mx-auto  absolute">
                        <p className=" h-full  text-black text-4xl flex-col flex my-auto justify-center items-center">
                        Furniture for Every Style and Taste
                                <br />
                                <span className=" text-[22px]">Dive into Our Curated Collection!
</span>
                            </p>
                            <div className="w-fit border-cyan-500 border-[1px] rounded-lg text-center p-5 bg-[#fffffb]">
                                <p className="text-2xl">Furnitures</p>
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
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease   font-extrabold bg-[#8F664E]">   Book Free Consultation</span>
<span className="relative invisible font-extrabold">   Book Free Consultation</span>
</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-full md:p-9  text-justify md:text-center">
                        <h1 className="text-4xl text-center capitalize ">furniture Categories</h1>
                        <p className="text-gray-600 mt-3">
                        Imagine walking into an office that feels energizing, or a home that sparks pure joy. At Adhunik DecoDive, we believe furniture isn't just about filling a space; it's about creating an experience. That's why we offer a vast selection of <span className="   font-extrabold text-black">commercial</span>  and  <span className="   font-extrabold text-black">domestic furniture</span>, catering to all styles and budgets. We have a massive selection to fit any style and budget. Looking to splurge on a statement piece for your living room? We've got high-end Adhunik DecoDive designer furniture that'll turn heads. Need to furnish your new office without blowing the budget? We have practical and affordable options that are still stylish and built to last. So, whether you're an interior design aficionado or just starting out, we can help you find the perfect furniture to transform your space into something you love. Come explore our collection and unleash your inner decorator.

                        </p>

                    </div>
        </div>

        <Tabs
            aria-label="Tabs with underline"
            style="underline"
            className=" z-0  flex flex-wrap -mb-px text-sm font-medium text-center mt-7 mx-auto my-auto justify-center"
        >
            <Tabs.Item
                active
                title={
                    <div onClick={onClickBad} className=" group relative cursor-pointer justify-center  transition-shadow   items-center w-auto max-w-xs ">
                       
                       <AdvancedImage
              cldImg={cld.image('Furniture/All_C/1_qzrdhs')}
                height={70}
                width={70}
                className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden" alt=" All Furniture Categories"
                decoding="async"
                effect="blur"
              
              />
                          
                        All Categories
                    </div>
                }
            >
                <div className=" w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {AllcardData.map((card) => (
                        <div
                                    key={card.id}
                                    className="group relative cursor-pointer items-center justify-center  transition-shadow hover:shadow-xl hover:shadow-black/30 box max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
                                >
                                    <div className="relative h-80 overflow-hidden">
                                    <Link to={card.link}>
                                    <AdvancedImage
                cldImg={cld.image(card.imageUrl)}
                alt="card-image"
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
<span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease text-[14px]"> Get Free Quote</span>
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
              cldImg={cld.image('Furniture/DF/10_zmpqqz')}
                height={70}
                width={70}
                className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden" alt="Image Description"
                decoding="async"
                effect="blur"
              
              />
                     Domestic Furniture
                    </div>

                }
            >
                <div className=" w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {LcardData.map((card) => (
                        <div
                                    key={card.id}
                                    className="group relative cursor-pointer items-center justify-center  transition-shadow hover:shadow-xl hover:shadow-black/30 box max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
                                >
                                    <div className="relative h-80 overflow-hidden">
                                    <Link to='/DomesticFurniture'>
                                    <AdvancedImage
                cldImg={cld.image(card.imageUrl)}
                alt="card-image"
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
<span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease text-[14px]"> Get Free Quote</span>
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
              cldImg={cld.image('Furniture/CF/13_cbhjdm')}
                height={70}
                width={70}
                className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden" alt="Image Description"
                decoding="async"
                effect="blur"
              
              />
                           Commercial Furniture
                    </div>
                }
            >
                <div className=" w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {UcardData.map((card) => (
                        <div
                                    key={card.id}
                                    className="group relative cursor-pointer items-center justify-center  transition-shadow hover:shadow-xl hover:shadow-black/30 box max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
                                >
                                    <div className="relative h-80 overflow-hidden">
                                    <Link to='/CommercialFurniture'>
                                    <AdvancedImage
                cldImg={cld.image(card.imageUrl)}
                alt="card-image"
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
<span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease text-[14px]"> Get Free Quote</span>
</button>
                                        </div>
                                    </div>
                                </div>
                    ))}
                </div>
            </Tabs.Item>

         

        </Tabs>
    </div>
    <Footer />
</>

  )
}

export default Furniture