import { Tabs } from "flowbite-react";



import PhoneCallButton from "./PhoneCallButton";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";

// import { Power2, Power4 } from 'gsap';

gsap.registerPlugin(useGSAP, ScrollTrigger);

import ModalNew from './ModalNew';
import { useState } from "react";
import PopUp from "./PopUp";
import { Link } from "react-router-dom";

 
import { AdvancedImage } from '@cloudinary/react';

function Wardrobe() {

    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    useGSAP(() => {

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
            imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241098/14_higzua.webp',
            title: "Walk in Wardrobe ",
            description:
                "Compact Walk in Wardrobe with mirror front and side shelf. Ideal for small rooms, contemporary style.",
            link: "/Walk-in-door-wardrobes",
            unique: true,
        }
        ,
        {
            id: 2,
            imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787140/9_pck731_agwpa6.webp',
            title: "Shutter Wardrobe",
            description:
                "A clean and contemporary double-door wardrobes design with a neutral gray color and black handles",
            link: "/shutter-door-wardrobe",
            unique: true,
        },
        {
            id: 3,
            imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239652/wr8-1709018266-CXd5t_17_11zon_1_cg5n77_ixcpn0.webp',
            title: "Sliding  Wardrobe",
            description:
                "Contemporary wardrobe with three sliding doors with a white laminate finish for a sleek and modern design",
            link: "/sliding-door-wardrobes",
        },
        {
            id: 4,
            imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241117/20_ohlmrl.webp',
            title: "Walk in Door Wardrobe",
            description: "Modern walk-in wardrobe with shelves, drawers, and hanging rods, accented with gray trim.",
            link: "/Walk-in-door-wardrobes",
        },
        {
            id: 5,
            imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239641/11_jteifh_igjgq6.webp',
            title: "Sliding Wardrobe",
            description:
                "The Sliding Wardrobe with clean, white finish with a full-length mirror space-saving storage solution.",
            link: "/sliding-door-wardrobes",
            unique: true,
        },
        {
            id: 6,
            imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787112/2_DOOR_iygeqp_geugi6.webp',
            title: "Shutter  Wardrobe ",
            description:
                "Simple Shutter  Wardrobe with yellow and gray colored wood and silver handles.",
            link: "/shutter-door-wardrobe",
        },
        
    ]; 

    const UcardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788263/22_itwnc3_yxqtkc.webp',
            title: "",
            description:
                "The built-in 2- door wardrobes ,white laminate finish with concealed closures. Creating a streamlined and contemporary storage solution.",
            unique: true,
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788247/21_mhqbgn_coobjp.webp',
            title: "",
            description:
                "White Shutter wardrobes with stripes and concealed closures for a clean, modern look that complements the bedroom's style",
            unique: true,
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788245/20_ynxzl7_su8usi.webp',
            title: "",
            description:
                "Stylish gray Shutter wardrobe with matte finish. Additional corner storage for versatility. Elevate your bedroom with practicality and sophistication",
            unique: true,
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787170/18_gx25rn_uin0fb.webp',
            title: "",
            description:
                " The white wardrobes with a circular motif embossed on the doors, creating a visually interesting element in the space. ",
            unique: true,
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787166/17_dsisju_zxsonf.webp',
            title: "",
            description:
                "The Shutter wardrobe  with a minimalist design with a wooden frame and a horizontal panel configuration.",
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787163/16_y6ttql_xy6lim.webp',
            title: "",
            description:
                "Modern Shutter wardrobe with a mirrored front offers stylish storage for clothes and belongings.",
        },
        // Add more card objects as needed
    ]; 

    const PcardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239649/17_1_u32jdj_rjhaod.webp',
            title: "",
            description:
                "Sliding  wardrobes with two cherry red doors for smooth access to the interior and maintaining a clean and contemporary aesthetic",
            unique: true,

        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239648/16_wknork_ax1blg.webp',
            title: "",
            description:
                "The sliding wardrobes with white laminate doors that span from floor to ceiling for a modern, minimalist look.",
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239645/15_ucg5gv_fisniw.webp',
            title: "",
            description:
                "Sliding wardrobe with geometric chevron design in cherry red on lacquered glass doors adding a touch of elegance and contemporary style.",
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239644/14_uwgozu_ztg7tf.webp',
            title: "",
            description:
                "The beige sliding wardrobe design with three doors made up of plywood with a polished finish adds a touch of sophistication.",
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239637/9_ya6jlf_wyf9ek.webp',
            title: "",
            description:
                "A contemporary sliding wardrobe design two sliding doors with alternating opaque white and sunshine yellow panels for a modern and colorful accent",
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239640/10_fnqni2_ahxaog.webp',
            title: "",
            description:
                " Sliding wardrobe design with a Shutter, floor-to-ceiling panel configuration with a lacquered glass finish. And a black, metal trim.",
        },
        // Add more card objects as needed
    ];

    const IScardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241120/21_uewnvj.webp',
            title: "",
            description:
                "A large,custom walk-in closet with a central island that includes clothing storage and a bench offering a functional and stylish design element.",
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241113/19_o89g8u.webp',
            title: "",
            description:
                "A minimalist Scandinavian walk-in closet with light wood tones, clean lines, and uncluttered storage, reflecting the Scandinavian design aesthetic.",
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241110/18_wgcoc0.webp',
            title: "",
            description:
                "A contemporary walk-in closet made from high-grade wood. With a combination of drawers and shelves integrated with led light for visually appealing space.",
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241107/17_nexx5h.webp',
            title: "",
            description:
                "Spacious and well-organized a white walk-in closet with shelves, drawers and hanging rails.",
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241104/16_bz8ghu.webp',
            title: "",
            description:
                "Elegant walk-in closet with built-in dressing table, mirror, and white wood finish for chic storage.",
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241095/13_cg3uyw.webp',
            title: "",
            description:
                "Spacious custom walk-in closets with white wood shelves, drawers and hanging light all in sleek finish.",
        },
        // Add more card objects as needed
    ];

    



    return (
        <>




            <Helmet>

                <title>Best Wardrobe Designs in Gurugram | 1-Door, 2-Door, Sliding & Walk-in – Adhunik Decodive</title>

                <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Discover the best wardrobe designs in Gurugram with Adhunik Decodive. Explore 1-door, 2-door, sliding, and walk-in wardrobes customized for style and efficiency. Get a free consultation today!" />

                <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
                <link rel="canonical" href="https://adhunikdecodive.com/wardrobes" data-react-helmet="true" />
                <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
                <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>

                <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Best Wardrobe Designs in Gurugram | 1-Door, 2-Door, Sliding & Walk-in – Adhunik Decodive" />
                <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="wardrobe designs, Shutter Wardrobe, sliding wardrobe, walk-in wardrobe, best wardrobes in Gurugram, modern wardrobe layouts, custom wardrobe designs, wardrobe renovation Gurugram, Adhunik Decodive interiors" />
                <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
                <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
                <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
                

                <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Upgrade your home with Adhunik Decodive's best wardrobe designs in Gurugram. Choose from stylish 1-door, 2-door, sliding, and walk-in wardrobes tailored for modern homes. Book a free consultation today!" />

                <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/wardrobe-category">
                </meta>

                <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Wardrobe Experts" />
                <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Best Wardrobe Designs in Gurugram | 1-Door, 2-Door, Sliding & Walk-in – Adhunik Decodive" />
                <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Explore space-efficient and stylish wardrobe designs in Gurugram by Adhunik Decodive. From 1-door and 2-door to sliding and walk-in wardrobes, we craft modern storage solutions. Get a free consultation today!" />
                {/* <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> */}

            </Helmet>

            <PopUp />

            <ModalNew isOpen={openModal} onClose={toggleModal} />

            <div className="w-auto  bg-white p-5">
                <div className="h-full w-full ">
                    <div className="video_container "></div>

                    <div className="w-full h-full">
                        <div className="video_card"></div>
                    </div>

                    <div className="row flex relative ">

                        <img src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746610731/Wardrobe_category_bbbltk.webp"
                            alt="Wardrobes that Reflects your Style Unveil Our Latest Design Collection!  "
                            className="   relative   h-[86vh]  md:h-[55vh] w-full object-cover rounded-lg "
                        />
                        <div className="w-full  h-full p-9 bottom-0 flex-col justify-center md:justify-between  flex md:flex-row-reverse  md:text-center  items-center mx-auto  absolute">
                            <p className=" h-full  text-white text-3xl flex-col flex my-auto justify-center items-center ">

                            </p>

                            <div className="w-fit border-cyan-500 border-[1px] rounded-lg text-center p-5 bg-[#fffffb]">

                                <p className="text-2xl">Wardrobe Designs</p>
                                <p className="bg-black w-fit mx-auto text-white p-1 relative rounded-full  mt-9">
                                    Starting
                                </p>

                                <div className="w-full flex justify-around h-10vh mx-auto relative bottom-4">
                                    <div className="line1 w-3/12 h-[1px] border border-black rounded-full">

                                    </div>
                                    <div className="line1 w-3/12 h-[1px] border border-black rounded-full">

                                    </div>
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
                        <p className="text-4xl text-center mt-2 md:mt-0">Wardrobe Designs</p>
                        <p className="text-gray-600 mt-3">
                            Tired of boring storage solutions that stifle your style? Your wardrobe deserves to be an extension of you, a haven for favorite outfits that spark joy with every opening. We totally understand – leaving no decision in your way can be hard. That's exactly why our Adhunik DecoDive team has created and carefully selected the perfect space and personality-fit collection! Need classic organization? Our Single & Shutter wardrobes are perfect for any size room. Live in a compact space? Maximize every inch with our smooth-gliding Sliding Wardrobes. Craving the ultimate storage dream? Walk-In Wardrobes are your answer. But wait, there's more! Unleash your inner designer with our Modular Wardrobes. Imagine customizing shelves, drawers, and compartments to create the dream closet you've always wanted – functionality and style never looked so good!
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

                                  src="https://res.cloudinary.com/dq14b7xie/image/upload/v1748239650/sw_vvrgby_rm4rr8.webp"
                                    className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden" alt="All Wardrobe Designs Category "
                                    decoding="async"
                                    effect="blur"

                                />


                                All Category
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
                               src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746787127/5_vlpb5h_ouesep.webp"
                                    height={70}
                                    width={70}
                                    className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden" alt="Shutter Wardrobe"
                                    decoding="async"
                                    effect="blur"

                                />


                                Shutter Wardrobe
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
                                        <Link to='/shutter-door-wardrobe'>

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
                                  src="https://res.cloudinary.com/dq14b7xie/image/upload/v1748239629/2_eu0v3u_yxnhtx.webp" 
                                  height={70}
                                    width={70}
                                    className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden" alt="Sliding Wardrobe"
                                    decoding="async"
                                    effect="blur"

                                />

                                Sliding Wardrobe
                            </div>
                        }
                    >
                        <div className=" w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                            {PcardData.map((card) => (
                                <div
                                    key={card.id}
                                    className="group relative cursor-pointer items-center justify-center  transition-shadow hover:shadow-xl hover:shadow-black/30 box max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
                                >
                                    <div className="relative h-80 overflow-hidden">
                                        <Link to='/sliding-door-wardrobes'>
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
                                 src="https://res.cloudinary.com/dq14b7xie/image/upload/v1748241101/15_zish43.webp"
                                   height={70}
                                    width={70}
                                    className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden" alt=" Walk in Wardrobe"
                                    decoding="async"
                                    effect="blur"
                                />


                                Walk in Wardrobe
                            </div>
                        }
                    >
                        <div className=" w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                            {IScardData.map((card) => (
                                <div
                                    key={card.id}
                                    className="group relative cursor-pointer items-center justify-center  transition-shadow hover:shadow-xl hover:shadow-black/30 box max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
                                >
                                    <div className="relative h-80 overflow-hidden">
                                        <Link to='/Walk-in-door-wardrobes'>
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
            </div>

        </>

    )
}

export default Wardrobe