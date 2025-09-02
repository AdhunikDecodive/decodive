
import { Tabs } from "flowbite-react";



import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Power2, Power4 } from 'gsap';

gsap.registerPlugin(useGSAP, ScrollTrigger);
import ModalNew from './ModalNew';
import { useState } from "react";
import PopUp from "./PopUp";
import { Link } from "react-router-dom";
import PhoneCallButton from "./PhoneCallButton";
 
import { AdvancedImage } from '@cloudinary/react';
import { Helmet } from "react-helmet-async";


function OthersCategory() {
   

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
            imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786725/1_c5a6no_bfjfaw.webp',
            title: " Pooja Shelves ",
            description:
                "Modern pooja room design with a champagne-colored base unit and crescent acacia wall unit with open shelving and a beige damask wallpaper with a traditional pattern for a touch of elegance",
                link: "/wall-mounted-pooja-mandir",
        },
        {
            id: 2,
            imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786865/2_k9vhdt_hsp5ru.webp',
            title: "Tv Unit",
            description:
                "Modern tv unit panel feature a sleek design with clean lines made up of light-colored wood with a smooth finish, perfect for minimalist living spaces.",
                link: "/tv-units",
        },
        {
            id: 3,
            imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786654/25_mddd9x_hikpze.webp ',
            title: " Bar Counter",
            description:
                "A living room with a wine cellar built-in wooden wine cabinet with integrated glass doors Along tv unit design for visually appealing home bar area",
                link: "/bar-furniture",
        },
        {
            id: 4,
            imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786785/22_aaufkn_vhug1x.webp ',
            title: "Pooja Shelves ",
            description:
                "A contemporary pooja room design with traditional indian hues, a wooden altar, nestled with corner, light tile flooring, recessed lighting, and a modest shelf for essential supplies.",
                link: "/wall-mounted-pooja-mandir",
        },
        {
            id: 5,
            imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786937/10_i0mfw4_mggrig.webp',
            title: "Tv Unit",
            description:
                "Modern tv unit panel with wooden storage and drawers with cob light effect for sleek look.",
                link: "/tv-units",
        },
        {
            id: 6,
            imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786645/22_cfio7p_a3fote.webp',
            title: "Bar Counter",
            description:
                "Minimalist home bar featuring a sleek white counter with chrome accents integrated lighting, creating an elegant and functional entertaining space.",
                link: "/bar-furniture",
        },
        
    ];
    const LcardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786865/2_k9vhdt_hsp5ru.webp',
            title: "",
            description:
                "Modern tv unit panel feature a sleek design with clean lines made up of light-colored wood with a smooth finish, perfect for minimalist living spaces.",
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786863/1_xgz30d_iswhgi.webp',
            title: "",
            description:
                "Simple and modern tv unit design with a clean white finish wooden drawers for a streamlined look.",
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786868/3_ap56gs_gsxxca.webp ',
            title: "",
            description:
                "A minimalist white marble tv unit with a sleek marble slab atop a streamlined base that conceals storage space.  For clean and modern look for your living room.",
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786871/4_urzfhe_duk36a.webp ',
            title: "",
            description:
                "Streamlined tv wall panel design, crafted from a beautiful wood grain finish for a touch of sophistication.",
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786874/5_ffubr1_duxjln.webp ',
            title: "",
            description:
                "Modern tv unit panel with wooden storage and drawers with cob light effect for sleek look.",
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786877/6_pzqjjy_yp3jrs.webp',
            title: "",
            description:
                "A modern tv unit design with a low-profile marble cabinet beneath the mounted tv. The cabinet rests on a thin metal base, creating a minimalist look for the space.",
        },
        
    ];
    const UcardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786775/18_b1auhi_dqtuxp.webp ',
            title: "",
            description:
                "A wooden temple with antique brass bells and a walnut pu finish, and could be a beautiful addition to a pooja room.",
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786778/20_yg61hp_r5a8ik.webp ',
            title: "",
            description:
                "A traditional pooja room design floor-mounted mandir unit with a wooden panel along yellow painted wall creating a vibrant backdrop for the mandir unit",
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786781/21_ywlxu2_ph4evd.webp ',
            title: "",
            description:
                "A modern hindu pooja room featuring a central circular wooden temple. The mandir’s dark wood contrasts with the light walls, creating a visually striking focal point. ",
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786740/6_zkboih_h02lv3.webp',
            title: "",
            description:
                "Contemporary pooja room features a recessed niche with warm led lighting for simplicity and serenity",
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786788/23_j3g1en_jonip4.webp ',
            title: "",
            description:
                "The pooja room design features a modern wooden cabinet with drawers and a bell for a touch of elegance.",
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786728/2_gvgc2a_uidnzd.webp ',
            title: "",
            description:
                "Create serenity with a minimalist puja room. Neutral tones, soft light, Ganesha statue on sleek wood shelf. Space-saving peace.",
        },
         
    ];
    const BCcardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786586/1_ypw6mg_dih2r0.webp ',
            title: "",
            description:
                "A well-lit home bar featuring a long wooden counter with sitting arrangement along with pendant lights",
        },
        {
            id: 2,
            imageUrl:
                ' https://res.cloudinary.com/dq14b7xie/image/upload/v1746786589/2_jdseth_vkzyng.webp',
            title: "",
            description:
                "Modern home bar featuring a sleek white counter with chrome accents integrated lighting showcases a variety of colorful liquor bottles.",
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786592/3_ll43dy_ykeuj1.webp ',
            title: "",
            description:
                "A living room with a wine cellar built-in wooden wine cabinet with integrated glass doors Along tv unit design for visually appealing home bar area.",
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786654/25_mddd9x_hikpze.webp ',
            title: "",
            description:
                "Wooden bar counter with a single open drawer filled with liquor bottles",
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786597/5_xyzlmj_d6znir.webp',
            title: "",
            description:
                "Minimalist home bar featuring a sleek white counter with chrome accents integrated lighting, creating an elegant and functional entertaining space.",
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786600/6_swkjkd_vskhl7.webp',
            title: "",
            description:
                "Black, abstract-shaped bar counter with open shelves for storage. A sculptural light fixture hangs from the ceiling above the counter. Plush yellow bar stools with cushioned seats complete the modern look.",
        },
        // Add more card objects as needed
    ];
    
    return (
        <>
        



<Helmet>

        <title>Top Interior Design Categories in Gurugram | Adhunik Decodive</title>

        <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Explore the best interior design categories in Gurugram with Adhunik Decodive. Discover Spiritual Spaces, TV Units, Bar Counters, and more to enhance your home decor. Free consultation!" />

        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        <link rel="canonical" href="https://adhunikdecodive.com/storage-furniture" data-react-helmet="true"/>
        <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
        <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Top Interior Design Categories in Gurugram | Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="interior design categories, spiritual space designs, best TV units in Gurugram, stylish bar counters, modern home interiors, custom home solutions, Adhunik Decodive interiors, luxury home decor Gurugram" />
        <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
        <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
        <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
        
        <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Explore the best interior design categories in Gurugram with Adhunik Decodive. Discover Spiritual Spaces, TV Units, Bar Counters, and more to enhance your home decor. Free consultation!" />

        <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/all-categories"></meta>
        <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Interior Design Experts" />
        <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Top Interior Design Categories in Gurugram | Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Explore the best interior design categories in Gurugram with Adhunik Decodive. Discover Spiritual Spaces, TV Units, Bar Counters, and more to enhance your home decor. Free consultation!" />


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


                     <div className="box w-full h-full">
               
                               <img src="https://res.cloudinary.com/dq14b7xie/image/upload/v1756718329/Storage_mvo8jh.webp"
                  className='hidden md:block  h-full w-full  object-center object-cover'
                  alt="  Addressable Fire Alarm System"
                />

                <img
                src="https://res.cloudinary.com/dq14b7xie/image/upload/v1756718392/4_mt1fow.webp"
                  className='md:hidden  h-full w-full object-center object-cover'
                       alt="Addressable Fire Alarm System"
                />
                </div>



                        
                    </div>

                    <div className="w-full h-full md:p-9  text-justify md:text-center">
                        <p className="text-4xl text-center mt-2 md:mt-0">Living Cabinets


</p>
                        <p className="text-gray-600 mt-3">
                        Cultivate your own living space that describes your one-of-a-kind personality with our expansive collection of design elements. From serene Spiritual Space Designs that inspire spiritual reflection to modern bar counters perfect for entertaining, discover Adhunik DecoDive world of design possibilities. Find the perfect blend of functionality and elegance to suit your taste across every space. Design a pooja room that fosters peace and tranquility, select TV unit panels that become a stylish centerpiece for your living room, and elevate your entertaining game with a modern and functional bar counter that guarantees unforgettable gatherings. Dive into a universe of design possibilities and transform your dream house into a reality. Let your imagination be your guide as you explore our curated selection and discover the perfect pieces to reflect your taste across every space.
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
             src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786746/8_aspurm_xurm0u.webp"
                height={70}
                width={70}
                className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden" alt="All Storage Category "
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
                                    <div className="p-6   ">
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
              src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786750/9_yqhpue_vl6wu7.webp"
                height={70}
                width={70}
                className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden" alt="Spiritual Space Designs"
                decoding="async"
                effect="blur"
              
              />
                                Spiritual Space 

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

                                        <Link to='/wall-mounted-pooja-mandir'>


                                        <AdvancedImage

                src={card.imageUrl}
                alt= {card.description}
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
              src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786894/12_fayle0_yst2dd.webp"
                height={70}
                width={70}
                className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden" alt=" TV Unit / Panels "
                decoding="async"
                effect="blur"
              
              />
                                TV Unit / Panels
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

                                        <Link to='/tv-units'>


                                        <AdvancedImage
                src={card.imageUrl}
                alt={card.description}
                className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                style={card.unique ? { objectFit: 'fill', objectPosition: '100% 37%' } : {}}
              /> 

                                        </Link>

                                    </div>
                                    <div className="p-6   ">
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
             src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786648/23_mhqjyy_mrszjq.webp"
                height={70}
                width={70}
                className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden" alt="Bar Counter"
                decoding="async"
                effect="blur"
              
              />
                                Bar Counter
                            </div>
                        }
                    >
                        <div className=" w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                            {BCcardData.map((card) => (
                                <div
                                    key={card.id}
                                    className="group relative cursor-pointer items-center justify-center  transition-shadow hover:shadow-xl hover:shadow-black/30 box max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
                                >
                                    <div className="relative h-80 overflow-hidden">

                                        <Link to='/bar-furniture'>


                                        <AdvancedImage
                src={card.imageUrl}
                alt={card.description}
                className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                style={card.unique ? { objectFit: 'fill', objectPosition: '100% 37%' } : {}}
              /> 

                                        </Link>

                                    </div>
                                    <div className="p-6   ">
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

export default OthersCategory