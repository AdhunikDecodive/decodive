import "./LShapeKitchen.css"

import PhoneCallButton from "./PhoneCallButton";

 
import { AdvancedImage } from '@cloudinary/react';


import ModalNew from './ModalNew';
import { useState } from "react";
import { Helmet } from "react-helmet-async";


function RoomLightDecor() {

   
    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
      };


      const PcardData = [
        {
            id: 1,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785272/7_kaxocz_brsgkp.webp',
            title: '',
            description:
                'Multiple-sphere pendant chandelier crafted from high-polished aluminum',
                unique:false,
        },
        {
            id: 2,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785275/8_l3wexx_hmlocd.webp',
            title: '',
            description:
                'Woven rattan pendant light',
        },
        {
            id: 3,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785298/19_abdvyr_wyni8k.webp',
            title: '',
            description:
                'A modern LED wall light with a spiraling design',
        },
        {
            id: 4,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785280/10_ahmy1m_f7vu8i.webp ',
            title: '',
            description:
                'A modern gold ring pendant lights with warm white LED.',
        },
        {
            id: 5,
            imageUrl:
            ' https://res.cloudinary.com/dq14b7xie/image/upload/v1746785287/13_fvv0ay_blszer.webp ',
            title: '',
            description:
                'A gold spiral LED pendant light.',
        },
        {
            id: 6,
            imageUrl:
            ' https://res.cloudinary.com/dq14b7xie/image/upload/v1746785292/16_oweppp_gwrmz0.webp ',
            title: '',
            description:
                'Minimalist chandelier with cascading aluminum rings',
        },
        {
            id: 7,
            imageUrl:
            ' https://res.cloudinary.com/dq14b7xie/image/upload/v1746785289/14_hbzeay_ylv4k0.webp',
            title: '',
            description:
                'Wave-like black LED wall light',
        },

        // Add more card objects as needed
    ];


    const P2cardData = [
        {
            id: 1,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785294/17_wu1wd1_uzcdbb.webp',
            title: '',
            description:
                'Gold LED chandelier with cascading crystals',
        },
        {
            id: 2,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785216/1_uyseab_juqqm2.webp ',
            title: '',
            description:
                'Golden swirl ceiling light with white bulbs',
        },
        {
            id: 3,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785218/2_tsipgg_jyyp3r.webp ',
            title: '',
            description:
                'Circular LED wall sconce with brushed gold metal',
        },
        {
            id: 4,
            imageUrl:
            ' https://res.cloudinary.com/dq14b7xie/image/upload/v1746785263/3_u76a7p_dxhfx3.webp ',
            title: '',
            description:
                'Black square pendant lamp with integrated warm white LED panels',
        },
        {
            id: 5,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785265/4_o1p3kg_yhidly.webp ',
            title: '',
            description:
                ': "Contemporary Nordic-style wall light ',
        },
        {
            id: 6,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785267/5_hqesjp_og5rdp.webp ',
            title: '',
            description:
                'Modern minimalist square LED wall sconces',
        },
        {
            id: 7,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785296/18_pnebod_d0oqvu.webp',
            title: '',
            description:
                'Contemporary two-tone ceiling light with interlocking black and white metal rings.',
        },
    ];

    return (
        <>

       


<Helmet>

        <title>Top Bedroom Lights Designs in Gurugram | Adhunik Decodive</title>

        <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Discover the best room light designs in Gurugram with Adhunik Decodive. Explore stylish, artistic, and modern lighting solutions to enhance your home decor. Free consultation!" />

        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        <link rel="canonical" href="https://adhunikdecodive.com/bedroom-lights" data-react-helmet="true"/>
        <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
        <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Top Room Light Designs in Gurugram | Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="room light designs, best Bedroom Lights
 in Gurugram, stylish home decor, decorative room lighting, modern lighting designs, custom Bedroom Lights
 Gurugram, home decor accessories, Adhunik Decodive Bedroom Lights
, artistic interior lighting Gurugram" />
        <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
        <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
        <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
        
        <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Discover the best room light designs in Gurugram with Adhunik Decodive. Explore stylish, artistic, and modern lighting solutions to enhance your home decor. Free consultation!" />

        <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/room-light-designs"></meta>
        <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Home Decor Experts" />
        <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Top Room Light Designs in Gurugram | Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Discover the best room light designs in Gurugram with Adhunik Decodive. Explore stylish, artistic, and modern lighting solutions to enhance your home decor. Free consultation!" />

      
      </Helmet>


<ModalNew  isOpen={openModal} onClose={toggleModal}  />
    
            <div className="w-full bg-white p-5 svg3 "  >

                <div className="row justify-around flex">
                    <div className=" w-full md:w-[80%] flex">
                        <p className="text-5xl font-semibold p-5 md:p-9">
                        Bedroom Lights Design
</p>
                    </div>
                </div>

                <div className="row justify-around flex">
                    <div className=" w-full md:w-[80%] flex">
                        <div className="border border-r-8 h-[50%] my-auto w-[10px] border-orange-600"></div>
                        <p className="text-1xl md:w-[75%] font-semibold md:p-9 p-5 text-justify md:text-left  rounded-lg mb-2">
                        Fill your home with the perfect ambience and enhance your space's unique style with Adhunik Deco Dive's diverse lighting collection. Whether you're searching for soft, calming bedroom lights or bright, functional kitchen lights, we have everything you need. Adhunik Deco Dive goes beyond basic illumination, offering a variety of decorative accents to transform your space. Browse our curated selection and discover the perfect lighting pieces to bring your design vision to life.

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

                    <div className="  max-w-md w-full mx-auto my-auto h-[50vh]  text-white  bg-gradient-to-r from-[#41303e]  to-[#815379] bg-[ ,] shadow-md rounded-xl overflow-hidden">

                        <div className=" pt-14">

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

export default RoomLightDecor