import "./LShapeKitchen.css"
import { Helmet } from "react-helmet-async";

import { useState } from "react";
import PhoneCallButton from "./PhoneCallButton";


import ModalNew from './ModalNew'; 
import { AdvancedImage } from '@cloudinary/react';


function SlidingDoorWardrobe() {


    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
      };

    const PcardData = [
        {
            id: 1,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239635/7_1_bmnrhz_x5j1ov.webp',
            title: '',
            description:
                'With a sleek and contemporary finish sliding wardrobe. Mirrored doors add a touch of luxury and elegance, creating a feeling of spaciousness.',
        },
        {
            id: 2,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239636/8_wrsurk_pyhggk.webp',
            title: '',
            description:
                'Simple and elegant design sliding wardrobes made of white wood for a sleek, modern look.',
        },
        {
            id: 3,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239637/9_ya6jlf_wyf9ek.webp',
            title: '',
            description:
                'Contemporary two-door wardrobe with a champagne laminate finish and a suede finish on the shutters for space saving and ample storage.',
        },
        {
            id: 4,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239640/10_fnqni2_ahxaog.webp',
            title: '',
            description:
                'A sleek lacquered finish light gray sliding  wardrobe with minimalist handles offers clutter-free storage.',
        },
        {
            id: 5,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239641/11_jteifh_igjgq6.webp',
            title: '',
            description:
                'a sleek sliding wardrobe featuring two mirrored doors, offering a minimalist aesthetic. Ideal for compact rooms, saving valuable space',
        },
        {
            id: 6,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239650/sw_vvrgby_rm4rr8.webp ',
            title: '',
            description:
                'With geometric pattern sliding wardrobes in teal blue shades with vertical lines of varying widths, and the cool teal shade adds a modern touch.',
        },
        {
            id: 7,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239644/14_uwgozu_ztg7tf.webp',
            title: '',
            description:
               " A sleek wooden finish sliding wardrobe design. Perfect for smaller rooms, it's a classic and practical choice." ,
        },

        // Add more card objects as needed
    ];

    const P2cardData = [
        {
            id: 1,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239645/15_ucg5gv_fisniw.webp',
            title: '',
            description:
                'Three-door contemporary wardrobe with dark gray, suede-finish laminate shutters.',
        },
        {
            id: 2,
            imageUrl:
            ' https://res.cloudinary.com/dq14b7xie/image/upload/v1748239648/16_wknork_ax1blg.webp ',
            title: '',
            description:
                'Coffee brown contemporary sliding  wardrobe with glossy laminate finish combines style and functionality.',
        },
        {
            id: 3,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239649/17_1_u32jdj_rjhaod.webp ',
            title: '',
            description:
                'the wardrobe has three sliding wooden doors with gold handles for a modern look. Sliding doors save space in bedrooms by eliminating the need for clearance to open',
        },
        {
            id: 4,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239633/6_h7y5hp_sb3kyu.webp ',
            title: '',
            description:
                'Sliding wardrobe design with a two-door, floor-to-ceiling panel configuration with a lacquered glass finish. And a black, metal trim.',
        },
        {
            id: 5,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239632/5_sxergk_unqhfl.webp',
            title: '',
            description:
                'A contemporary sliding wardrobe design two sliding doors with alternating opaque white and sunshine yellow panels for a modern and colorful accent.',
        },
        {
            id: 6,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239631/4_xeqbnl_etb0rh.webp ',
            title: '',
            description:
                'The beige sliding wardrobe design with three doors made up of plywood with a polished finish adds a touch of sophistication.',
        },
        {
            id: 7,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239630/3_oqckqp_ac64iw.webp ',
            title: '',
            description:
                'Sliding wardrobe with geometric chevron design in cherry red on lacquered glass doors adding a touch of elegance and contemporary style.',
        },
    ];
    
   
    return (
        <>

     


<Helmet>

        <title>Top Sliding  Wardrobe Designs in Gurugram | Adhunik Decodive</title>
        <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Adhunik Decodive: Gurugram's top provider of sliding  wardrobe designs. From concept to installation, we create bespoke, functional, and space-saving wardrobes. Free consultation!" />

        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        <link rel="canonical" href="https://adhunikdecodive.com/sliding-door-wardrobes" data-react-helmet="true" />
        <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
        <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Top Sliding  Wardrobe Designs in Gurugram | Space-Saving & Stylish – Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="sliding  wardrobe designs, best wardrobe designs Gurugram, modern wardrobes Gurugram, custom sliding wardrobes Gurugram, space-saving wardrobe solutions, wardrobe interior designers Gurugram, wardrobe renovation Gurugram, luxury wardrobe designs Gurugram, Adhunik Decodive wardrobes, stylish wardrobes Gurugram" />
        <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
        <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
        <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
        
        <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Adhunik Decodive: Gurugram's top provider of sliding  wardrobe designs. From concept to installation, we create bespoke, functional, and space-saving wardrobes. Free consultation!" />
        <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/sliding-door-wardrobe"></meta>
        <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Wardrobe Design Experts" />
        <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Top Sliding  Wardrobe Designs in Gurugram | Space-Saving & Stylish – Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Adhunik Decodive: Gurugram's top provider of sliding  wardrobe designs. From concept to installation, we create bespoke, functional, and space-saving wardrobes. Free consultation!" />

        {/* <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> */}

      </Helmet>

<ModalNew  isOpen={openModal} onClose={toggleModal}  />
    
            <div className="w-full bg-white p-3 md:p-5  svg4 "  >


            <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <p className="text-5xl font-semibold p-3 md:p-9">
            Sliding Wardrobe Designs
            </p>
          </div>
        </div>
               

                <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
            <p className="text-1xl md:w-[70%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
            Revamp your bedroom effortlessly with our sleek sliding  wardrobe designs. To maximize the space and elevate your décor, these sleek storage solutions redefine the way you organize your wardrobe. Crafted with a range of premium finishes, including glass and mirrored panels, our wardrobes seamlessly blend form and function, allowing you to create a personalized, clutter-free haven. Customize your unit with adjustable shelves, drawers, and compartments to suit your unique needs. Say goodbye to the frustration of a cluttered closet and hello to a harmonious, visually stunning bedroom.
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

export default SlidingDoorWardrobe