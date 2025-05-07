
import { Tabs } from "flowbite-react";
import PhoneCallButton from "./PhoneCallButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Power2, Power4 } from 'gsap';
import ModalNew from './ModalNew';
import { useState } from "react";
import PopUp from "./PopUp";
import { Link } from "react-router-dom";


gsap.registerPlugin(useGSAP, ScrollTrigger);

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, AdvancedVideo } from '@cloudinary/react';
import { Helmet, } from "react-helmet-async";


function HomeDecor() {
    const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });

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
            imageUrl: 'HomeDecor/mrr/1_xlkabe',
            title: "Mirrors",
            description:
                "A decorative round mirror with a gleaming gold frame.",
            link: "/MirrorsDecor",
            unique: true,
        },
        {
            id: 2,
            imageUrl: 'HomeDecor/WallD/1_xqauoo',
            title: "Wall Decor",
            description:
                "mrribrant Floral Mural Wallpaper",
            link: "/WallDecor",
        },
        {
            id: 3,
            imageUrl: 'HomeDecor/V/8_z0udwv',
            title: "Vases Decor",
            description:
                " Floral blue ceramic vase.",
            link: "/VasesDecor",
        },
        {
            id: 4,
            imageUrl: 'HomeDecor/Lamps/4_lh44nt',
            title: "Lamps",
            description:
                "Modern wooden floor lamp",
            link: "/LampsDecor",
        },
        {
            id: 5,
            imageUrl: 'HomeDecor/Ceiling_Light/room_light_iy2jve',
            title: "Ceiling Lights",
            description:
                "Multi-tiered crystal droplet chandelier",
            link: "/CeilingLightsDecor",
        },
        {
            id: 6,
            imageUrl: 'HomeDecor/OutdoorLight/13_uqhjvu',
            title: "Out-Door Light",
            description:
                " Black and gold wall sconces",
            link: "/OutDoorLightDecor",
        },
        // Add more card objects as needed
    ];

    const LcardData = [
        {
            id: 1,
            imageUrl:
                'HomeDecor/mrr/5_qmqgz4',
            title: "Mirrors",
            description:
                "Large, circular wall mirror with a geometric frame in a luxurious gold finish.",
            link: "/MirrorsDecor",
        },
        {
            id: 2,
            imageUrl:
                'HomeDecor/WallD/4_t5ayax',
            title: "Wall Decor",
            description:
                " 3D effect with blue squares minimalist wallpaper design",
            link: "/WallDecor",
        },
        {
            id: 3,
            imageUrl:
                'HomeDecor/V/7_c108lp',
            title: "Vases Decor",
            description:
                "Elegant Ceramic Face Vasses, Modern White Flower Vasses",
            link: "/VasesDecor",
        },
        {
            id: 4,
            imageUrl:
                'HomeDecor/Lamps/l1_varb6b',
            title: "Lamp",
            description:
                "Oversized Pendulum Wall Clock.",
            link: "/LampsDecor",
        },
        {
            id: 5,
            imageUrl:
                'HomeDecor/Ceiling_Light/16_fp7xbh',
            title: "Ceiling Light",
            description:
                "Contemporary Canvas Floral Art for Living Room",
            link: "/CeilingLightsDecor",
        },
        {
            id: 6,
            imageUrl:
                'HomeDecor/RoomLights/13_fvv0ay',
            title: " Room Light",
            description:
                "Elegant Circular Mirror with Radiant Light Frame",
            link: "/RoomLightDecor",
        },
        // Add more card objects as needed
    ];

    const UcardData = [
        {
            id: 1,
            imageUrl:
                'HomeDecor/Lamps/5_bqhi9f',
            title: "Lamps",
            description:
                "Fabric minimalist table lamp",
            link: "/LampsDecor",
        },
        {
            id: 2,
            imageUrl:
                'HomeDecor/Ceiling_Light/6_f2iwqz',
            title: "Ceiling Light",
            description:
                "Multi-light pendant fixture with a crystal droplet design.",
            link: "/CeilingLightsDecor",
        },
        {
            id: 3,
            imageUrl:
                'HomeDecor/Wall_Light/21_r6rftv',
            title: "Wall Light",
            description:
                "Gold sconce with crystal ball",
            link: "/WallDecor",
        },
        {
            id: 4,
            imageUrl:
                'HomeDecor/OutdoorLight/12_bjvrbp',
            title: "Out-Door Light",
            description:
                "Minimalist rectangular exterior wall lights",
            link: "/OutDoorLightDecor",
        },
        {
            id: 5,
            imageUrl:
                'HomeDecor/RoomLights/14_hbzeay',
            title: "Room Light",
            description:
                "Wave-like black LED wall light",
            link: "/RoomLightDecor",
        },
        {
            id: 6,
            imageUrl:
                'HomeDecor/Lamps/6_up1l35',
            title: "Lamps",
            description:
                "Gold metal table lamp with white globe shade.",
            link: "/LampsDecor",
        },
        // Add more card objects as needed
    ];



    return (
        <>




            <Helmet>

                <title>Top Home Decor Trends & Accessories in Gurugram | Adhunik Decodive</title>

                <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Discover the best home decor trends and accessories in Gurugram with Adhunik Decodive. Explore stylish mirrors, lamps, lighting, and more to elevate your interiors. Free consultation!" />

                <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>

                <link rel="canonical" href="https://adhunikdecodive.com/HomeDecor" data-react-helmet="true" />
                <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
                <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
                <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Top Home Decor Trends & Accessories in Gurugram | Adhunik Decodive" />
                <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="home decor, best home decor accessories, stylish mirrors, lamps and lighting, modern home accessories, custom home decor Gurugram, home styling solutions, Adhunik Decodive home decor, elegant interior accessories Gurugram" />
                <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
                <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
                <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
                <link data-n-head="ssr" rel="preconnect" href="http://cdn12.lemnisk.co"></link>
                <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Discover the best home decor trends and accessories in Gurugram with Adhunik Decodive. Explore stylish mirrors, lamps, lighting, and more to elevate your interiors. Free consultation!" />

                <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/home-decor"></meta>
                <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Home Decor Experts" />
                <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Top Home Decor Trends & Accessories in Gurugram | Adhunik Decodive" />
                <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Discover the best home decor trends and accessories in Gurugram with Adhunik Decodive. Explore stylish mirrors, lamps, lighting, and more to elevate your interiors. Free consultation!" />

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
                       
                        <img
                            src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746610732/Home_decor_hbjmrl.webp"
                            alt="Home Decor Ideas Light Up Your Style" className="   relative   h-[86vh]  md:h-[55vh] w-full object-cover object-center  rounded-lg "
                        />
                        <div className="w-full  h-full p-9 bottom-0 flex-col justify-center md:justify-between  flex md:flex-row  md:text-center  items-center mx-auto  absolute">

                            <p className=" h-full  text-white text-4xl flex-col flex my-auto justify-center items-center">
                                
                            </p>

                         
                        </div>
                    </div>

                    <div className="w-full h-full md:p-9  text-justify md:text-center">
                        <p className="text-4xl text-center mt-2 md:mt-0">  Decor Designs</p>
                        <p className="text-gray-600 mt-3">
                            Our homes are more than just shelters; they're reflections of our personalities, sanctuaries of comfort, and canvases waiting to be brought to life. Enter the wonderful Adhunik DecoDive world of Adhunik DecoDive home decor, where possibilities are endless! Whether you crave a cozy, modern haven or a vibrant, bohemian retreat, the right touches can transform your space into a place you truly love.
                            This journey isn't just about furniture placement, though that plays a part. It's about weaving together the magic of light, art, and decorative elements to create a cohesive and inviting atmosphere. Imagine the warm glow of a well-placed lamp casting a soft light on a captivating wall painting. Picture a statement mirror reflecting the beauty of a unique vase filled with fresh blooms. These details, big and small, come together to tell your unique story.
                            So, are you ready to unleash your inner interior designer? We're here to guide you through the exciting world of home decor, exploring lighting options like lamps and fixtures, inspiring wall art ideas, and the decorative magic of mirrors and vases. Get ready to transform your space, one stylish touch at a time!

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
                                    cldImg={cld.image('HomeDecor/V/21_chxhty')}
                                    height={70}
                                    width={70}
                                    className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden" alt="All Decor Category"
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
                                                cldImg={cld.image(card.imageUrl)}
                                                alt={card.description}
                                                className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                                                style={card.unique ? { objectFit: 'fill', objectPosition: '100% 37%' } : {}}
                                            />

                                        </Link>

                                    </div>
                                    <div className="p-6   ">
                                        <div className=" w-full overflow-hidden">
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
                                    cldImg={cld.image('HomeDecor/mrr/13_szvre9')}
                                    height={70}
                                    width={70}
                                    className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden" alt=" Mirrors Category"
                                    decoding="async"
                                    effect="blur"

                                />

                                Mirrors Category
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

                                        <Link to={card.link}>

                                            <AdvancedImage
                                                cldImg={cld.image(card.imageUrl)}
                                                alt={card.description}
                                                className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                                                style={card.unique ? { objectFit: 'fill', objectPosition: '100% 37%' } : {}}
                                            />

                                        </Link>

                                    </div>
                                    <div className="p-6   ">
                                        <div className=" w-full overflow-hidden">
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
                                    cldImg={cld.image('HomeDecor/RoomLights/12_iynrag')}
                                    height={70}
                                    width={70}
                                    className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden" alt="Lamps and Lighting"
                                    decoding="async"
                                    effect="blur"

                                />
                                Lamps and Lighting
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

                                        <Link to={card.link}>


                                            <AdvancedImage
                                                cldImg={cld.image(card.imageUrl)}
                                                alt={card.description}
                                                className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                                                style={card.unique ? { objectFit: 'fill', objectPosition: '100% 37%' } : {}}
                                            />

                                        </Link>

                                    </div>
                                    <div className="p-6   ">
                                        <div className=" w-full overflow-hidden">
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
        
        </>

    )
}

export default HomeDecor