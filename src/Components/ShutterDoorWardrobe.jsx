
import "./LShapeKitchen.css"
import { Helmet } from "react-helmet-async";



import ModalNew from './ModalNew';
import { useState } from "react";
import PhoneCallButton from "./PhoneCallButton";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

function ShutterDoorWardrobe() {


    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
      };


    const PcardData = [
        {
            id: 1,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787134/7_a47fb9_ndcqfx.webp',
            title: '',
            description:
                ' Shutter  wardrobes with shades of green and white hue made of wooden dresser with three drawers.',
        },
        {
            id: 2,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788426/8_hxhlwq_unvxvc.webp',
            title: '',
            description:
                'A shutter  wardrobe with a handleless design with a matte finish and reaches the ceiling for maximum storage space.',
        },
        {
            id: 3,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787143/10_swso5e_uvw4yx.webp',
            title: '',
            description:
                'A contemporary two white, shutter  wardrobes with gold-toned pulls a shelf unit for showcasing decorative objects.',
        },
        {
            id: 4,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788436/11_enjzqn_xine4q.webp',
            title: '',
            description:
                'A clean and contemporary shutter  wardrobes design with a neutral gray color and black handles',
        },
        {
            id: 5,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787150/12_nlhxz5_zyzbyw.webp',
            title: '',
            description:
                'Simple shutter  wardrobes with yellow and gray colored wood and silver handles.',
        },
        {
            id: 6,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788446/14_meldw6_vkxhcm.webp',
            title: '',
            description:
                'The off-white shutter  wardrobes with drawers and a mirror made up of wood with a glossy finish.',
        },
        {
            id: 7,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788450/15_n8tldp_mjxl9v.webp',
            title: '',
            description:
                'The built-in shutter  wardrobes with a smooth, laminate green finish with a contemporary, minimalist design.',
        },

        // Add more card objects as needed
    ];

    const P2cardData = [
        {
            id: 1,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787163/16_y6ttql_xy6lim.webp',
            title: '',
            description:
                'Wooden shutter  wardrobes design with chevron pattern and offer ample storage space creating geometric aesthetic.',
        },
        {
            id: 2,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787166/17_dsisju_zxsonf.webp',
            title: '',
            description:
                'shutter  wardrobes with a lacquered finish forest green color and integrated pulls with a polished gold finish, with touch of sophistication. ',
        },
        {
            id: 3,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787118/2door_anczh8_ejew4y.webp',
            title: '',
            description:
                'A pair of contemporary, shutter door wooden wardrobes with a natural wood finish reinforces the modern, minimalist aesthetic.',
        },
        {
            id: 4,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788478/19_uhtobz_ygevi4.webp',
            title: '',
            description:
                'White shutter  wardrobes with a chevron pattern. Made for durability with high-quality laminated board and pvc edges. Gold metal handles add a touch of style.',
        },
        {
            id: 5,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787112/2_DOOR_iygeqp_geugi6.webp',
            title: '',
            description:
                'Pair of built-in shutter  wardrobes with a white laminate finish and wooden panel with ample storage capacity.',
        },
        {
            id: 6,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788247/21_mhqbgn_coobjp.webp',
            title: '',
            description:
                'Wooden shutter  wardrobe with a glossy finish offering a sleek and contemporary aesthetic look',
        },
        {
            id: 7,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788443/13_pdrznd_bukmze.webp',
            title: '',
            description:
                ' Shutter  wardrobes with shades of green and white hue made of wooden dresser with three drawers.',
        },
    ];

    const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });

    return (
        <>



<Helmet>

        <title>Top Shutter Wardrobe Designs in Gurugram | Adhunik Decodive</title>

        <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Discover the best shutter wardrobe designs in Gurugram with Adhunik Decodive. Stylish, space-efficient, and customized wardrobe solutions for modern homes. Free consultation!" />

        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        
  <link rel="canonical" href="https://adhunikdecodive.com/shutter-door-wardrobe" data-react-helmet="true"/>
        <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
        <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Top Shutter Wardrobe Designs in Gurugram | Space-Saving & Stylish – Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="shutter wardrobe designs, best wardrobe designs Gurugram, modern wardrobes Gurugram, custom wardrobes Gurugram, space-saving wardrobe solutions, wardrobe interior designers Gurugram, wardrobe renovation Gurugram, luxury wardrobe designs Gurugram, Adhunik Decodive wardrobes, stylish wardrobes Gurugram" />
        <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
        <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
        <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
        <link data-n-head="ssr" rel="preconnect" href="http://cdn12.lemnisk.co"></link>
        <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Discover the best shutter wardrobe designs in Gurugram with Adhunik Decodive. Stylish, space-efficient, and customized wardrobe solutions for modern homes. Free consultation!" />

        <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/shutter-wardrobe"></meta>
        <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Wardrobe Design Experts" />
        <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Top Shutter Wardrobe Designs in Gurugram | Space-Saving & Stylish – Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Discover the best shutter wardrobe designs in Gurugram with Adhunik Decodive. Stylish, space-efficient, and customized wardrobe solutions for modern homes. Free consultation!" />

        {/* <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> */}

      </Helmet>

<ModalNew  isOpen={openModal} onClose={toggleModal}  />
    
            <div className="w-full bg-white p-3 md:p-5 svg4 "  >


            <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <p className="text-5xl font-semibold p-3 md:p-9">
            Shutter  Wardrobe Designs
            </p>
          </div>
        </div>
               

                <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
            <p className="text-1xl md:w-[70%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
            Living spaces deserve to be both stylish and functional. But when overflowing closets leave you feeling like you're wrestling with an avalanche of clothes, it's time to upgrade your storage game. Enter the world of shutter  wardrobes – where organization meets elegance with more functionality. But functionality isn't the only story. Adhunik Deco offers a stunning selection of shutter  wardrobes, designed to complement any décor. Explore the design and discover a variety of finishes, materials, and styles to find the perfect match for your unique space. Whether you crave a sleek and modern aesthetic or a touch of classic elegance, there's a shutter  wardrobe waiting to transform your bedroom into a haven of organized style
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

export default ShutterDoorWardrobe