
import "./LShapeKitchen.css"


import PhoneCallButton from "./PhoneCallButton";

import ModalNew from './ModalNew';
import { useState } from "react";
 
import { AdvancedImage } from '@cloudinary/react';
import { Helmet } from "react-helmet-async";



function TVUnitPanels() {

   
    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
      };

    const PcardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786880/7_vdlrb3_k6olv5.webp',
            title: '',
            description:
                'A rustic and sleek look Tv unit by combining the natural wood tones of the chevron pattern with the dark color of the shelf.',
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786883/8_xxp5rv_mdag8f.webp ',
            title: '',
            description:
                'A modern floating TV unit made of laminate wood. For a sleek, low-profile design mounts directly to the wall for a streamlined look.',
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786887/9_xq9mqu_hyvijm.webp ',
            title: '',
            description:
                'A wall-mounted flat Tv screen with sleek wooden shelves providing storage and display for decorative objects.',
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786937/10_i0mfw4_mggrig.webp',
            title: '',
            description:
                'Sleek and modern TV unit design with wall-mounted TV centered on a light-colored laminated wooden cabinet. With shelves and drawers on either side.',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786890/11_mlbkhz_f3ctos.webp',
            title: '',
            description:
                'A modern TV unit design with a mounted flat screen TV and a sleek white laminate floating media console with two drawers.',
                unique: true,
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786894/12_fayle0_yst2dd.webp',
            title: '',
            description:
                'Sleek TV panel design crafted from quality wood, with curved design along integrated LED light strip for modern touch.',
        },
        {
            id: 7,
            imageUrl:
                ' https://res.cloudinary.com/dq14b7xie/image/upload/v1746786899/14_tog8gm_hdq0vh.webp ',
            title: '',
            description:
                'Modern minimalist TV units incorporate lacquered wood with shades of gray with sleek and modern touch.',
        },

        // Add more card objects as needed
    ];
    
    const P2cardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786902/15_covy73_of1tzr.webp',
            title: '',
            description:
                'A luxury Tv unit design with a glass cabinet with an built-in LED light strip for a sleek, modern design.',
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786905/16_jbxf20_pwpwzc.webp',
            title: '',
            description:
                'Sleek and Chic TV Wall Panel Design with glossy finish along with vertical shelves for display ',
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786926/17_wpvk1l_gsiw2b.webp',
            title: '',
            description:
                'A modern and sleek POP design for TV Wall with dark color integrated with led light on shelf for contemporary feel.',
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786928/18_nrfdzt_mwidyc.webp',
            title: '',
            description:
                'Wooden Accents in sleek Bedroom TV Panel Designs integrated with led lights enriching its ambiance.  ',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786930/19_cvtj8u_r5om0n.webp',
            title: '',
            description:
                'A modern TV unit panel with a high-gloss laminate finish in Irish Cream and Crescent Acacia for a touch of warmth.',
        },
        {
            id: 6,
            imageUrl:
                ' https://res.cloudinary.com/dq14b7xie/image/upload/v1746786940/20_ft720z_acudb8.webp ',
            title: '',
            description:
                ' Modern Tv panel design with a shelf underneath made from light colored wood with a smooth finish.',
        },
        {
            id: 7,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786934/21_yi5nkc_kn3kxh.webp ',
            title: '',
            description:
                'A Modern rich brown wooden Tv unit within shelves and drawer for more organized and showcasing.',
        },
    ];

    return (
        <>





<Helmet>

        <title>Top TV Unit & Panel Designs in Gurugram | Adhunik Decodive</title>

        <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Discover the best TV unit and panel designs in Gurugram with Adhunik Decodive. Explore stylish, modern, and space-efficient TV unit solutions for your home. Free consultation!" />

        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        <link rel="canonical" href="https://adhunikdecodive.com/tv-units" data-react-helmet="true"/>
        <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
        <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Top TV Unit & Panel Designs in Gurugram | Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="TV unit designs, best TV panels in Gurugram, stylish TV cabinets, modern TV unit designs, custom TV panels Gurugram, space-saving TV units, Adhunik Decodive interiors, luxury TV unit solutions Gurugram" />
        <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
        <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
        <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
        
        <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Discover the best TV unit and panel designs in Gurugram with Adhunik Decodive. Explore stylish, modern, and space-efficient TV unit solutions for your home. Free consultation!" />

        <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/tv-unit-designs"></meta>
        <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Interior Design Experts" />
        <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Top TV Unit & Panel Designs in Gurugram | Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Discover the best TV unit and panel designs in Gurugram with Adhunik Decodive. Explore stylish, modern, and space-efficient TV unit solutions for your home. Free consultation!" />

       
      </Helmet>



<ModalNew  isOpen={openModal} onClose={toggleModal}  />
    
    
            <div className="w-full bg-white p-3 md:p-5 svg10 "  >


            <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <p className="text-5xl font-semibold p-3 md:p-9">
            TV Unit Panels Designs
            </p>
          </div>
        </div>
               

                <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
            <p className="text-1xl md:w-[70%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
            Tired of that boring TV stand? We design a designated space for your entertainment center. We offer a variety of options to suit any taste, from the clean lines and minimalist aesthetic of floating shelves to the warm ambiance of built-in units with integrated lighting that can elevate your living room's aesthetics. Discover the perfect balance of functionality and aesthetics with our customizable TV unit panels.
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
              style={card.unique ? { objectFit: 'cover', objectPosition: '100% 37%' } : {}}
            />
                            </div>
                            <div className="p-6">
                                <h2 className="text-base font-medium text-blue-gray-900 mb-2">{card.title}</h2>
                                <p className="text-sm text-gray-700 opacity-75 leading-normal mb-4">{card.description}</p>
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

                    <div className="  max-w-md w-full mx-auto my-auto h-[50vh]  text-white  bg-gradient-to-r from-[#41303e]  to-[#815379] bg-[ ,] shadow-md rounded-xl overflow-hidden">

                        <div className="pt-14">

                            <div className="text-center p-5">
                                <h1 className="text-base font-light text-blue-gray-900 mb-2"> Kitchen Designs With</h1>
                                <p className="text-2xl font-bold  leading-normal mb-4">High Quality Materials</p>
                                <p>Starting <br /> <span className=" text-3xl">₹50,000</span></p>
                            </div>

                            <div className="flex justify-center">
                            <button  onClick={toggleModal} className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
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


            </div>

          

</>
        
    )
}

export default TVUnitPanels