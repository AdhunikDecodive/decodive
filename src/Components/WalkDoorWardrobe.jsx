
import "./LShapeKitchen.css"
import { Helmet } from "react-helmet-async";

import ModalNew from './ModalNew';
import { useState } from "react";
import PhoneCallButton from "./PhoneCallButton";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

function WalkDoorWardrobe() {



    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
      };



    const PcardData = [
        {
            id: 1,
            imageUrl:
            'WardRobe/WIW/wardrobe_rvezwk',
            title: '',
            description:
                'A spacious walk-in closet with custom light wood cabinets and drawers. Center island for additional storage creating a well-organized look.',
        },
        {
            id: 2,
            imageUrl:
            'WardRobe/WIW/walk-in_11zon_jdbhyk',
            title: '',
            description:
                ' walk-in closet with a cool blue paint finish with open compartments and a large mirror r a space-saving and functional design.',
        },
        {
            id: 3,
            imageUrl:
            'WardRobe/WIW/9_tuay7q',
            title: '',
            description:
                'A contemporary walk-in closet design with white closet doors and gold hardware for ample storage with built-in drawers, shelves. ',
        },
        {
            id: 4,
            imageUrl:
            'WardRobe/WIW/10_ziq668',
            title: '',
            description:
                'The walk-in closet with dark brown wooden shelves and drawers providing ample storage and sophisticated look.',
        },
        {
            id: 5,
            imageUrl:
            'WardRobe/WIW/walk-in_gez9bc',
            title: '',
            description:
                'A well-organized walk-in closet with shelves, drawers likely made from a classic wood for durability and timeless style. For clean and sophisticated touch.',
        },
        {
            id: 6,
            imageUrl:
            'WardRobe/WIW/w3_w0ncwb',
            title: '',
            description:
                'A large walk-in closet with a light wood finish with plenty of shelves and drawers for storage for clean and airy aesthetic.',
        },
        {
            id: 7,
            imageUrl:
            'WardRobe/WIW/14_ahh29z',
            title: '',
            description:
                'The walk-in closets with classic materials like cherry rich include a cozy vanity corner for a touch of glamour and trendy design.',
        },

        // Add more card objects as needed
    ];
    
    const P2cardData = [
        {
            id: 1,
            imageUrl:
            'WardRobe/WIW/15_a6t2ji',
            title: '',
            description:
                'A large walk-in closet with sliding glass doors made of light colored woodgrain finish maintaining a sleek and modern aesthetic.',
        },
        {
            id: 2,
            imageUrl:
            'WardRobe/WIW/16_cd866g',
            title: '',
            description:
                'A minimalist Scandinavian walk-in closet with light wood tones, clean lines, and uncluttered storage, reflecting the Scandinavian design aesthetic.',
        },
        {
            id: 3,
            imageUrl:
            'WardRobe/WIW/2_unk5jg',
            title: '',
            description:
                ' spacious custom walk-in closets with white wood shelves, drawers and hanging light all in sleek finish.',
        },
        {
            id: 4,
            imageUrl:
            'WardRobe/WIW/6_wvlx4a',
            title: '',
            description:
                'A luxurious walk-in closet featuring a built-in dressing table with a mirror. A white wood finish offers sleek storage with drawers, shelves.',
        },
        {
            id: 5,
            imageUrl:
            'WardRobe/WIW/5_bjt61c',
            title: '',
            description:
                '  Spacious and well-organized a white walk-in closet with shelves, drawers and hanging rails.',
        },
        {
            id: 6,
            imageUrl:
            'WardRobe/WIW/4_a2wzb4',
            title: '',
            description:
                'A contemporary walk-in closet made from high-grade wood. With a combination of drawers and shelves integrated with led light for visually appealing space.',
        },
        {
            id: 7,
            imageUrl:
            'WardRobe/WIW/3_kl8ik5',
            title: '',
            description:
                'Luxurious walk-in wardrobe with sleek white wood finish for seamless blend of style and functionality.',
        },
    ];
    const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });

    return (
        
        <>




<Helmet>

        <title>Top Walk-in Wardrobe Designs in Gurugram | Adhunik Decodive</title>
        <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Adhunik Decodive: Gurugram's top provider of walk-in wardrobe designs. From concept to installation, we create bespoke, functional, and luxurious wardrobes. Free consultation!" />

        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        <link rel="canonical" href="https://adhunikdecodive.com/WalkDoorWardrobe" data-react-helmet="true" />
        <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
        <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Top Walk-in Wardrobe Designs in Gurugram | Spacious & Stylish – Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="walk-in wardrobe designs, best wardrobe designs Gurugram, modern wardrobes Gurugram, custom walk-in wardrobes Gurugram, luxury wardrobe solutions, wardrobe interior designers Gurugram, wardrobe renovation Gurugram, stylish wardrobe designs Gurugram, Adhunik Decodive wardrobes, spacious wardrobes Gurugram" />
        <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
        <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
        <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
        <link data-n-head="ssr" rel="preconnect" href="http://cdn12.lemnisk.co"></link>
        <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Adhunik Decodive: Gurugram's top provider of walk-in wardrobe designs. From concept to installation, we create bespoke, functional, and luxurious wardrobes. Free consultation!" />

        <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/walk-in-wardrobe"></meta>
        <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Wardrobe Design Experts" />
        <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Top Walk-in Wardrobe Designs in Gurugram | Spacious & Stylish – Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Adhunik Decodive: Gurugram's top provider of walk-in wardrobe designs. From concept to installation, we create bespoke, functional, and luxurious wardrobes. Free consultation!" />

        {/* <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> */}

      </Helmet>

        <ModalNew  isOpen={openModal} onClose={toggleModal}  />
    

            <div className="w-full bg-white p-3 md:p-5 svg4 "  >


            <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <p className="text-5xl font-semibold p-3 md:p-9">
            Walk in Wardrobe Designs
            </p>
          </div>
        </div>
               

                <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
            <p className="text-1xl md:w-[70%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
            Tired of the daily struggle against overflowing drawers and cramped hangers? Walk-in wardrobes are the ultimate game-changers, saying goodbye to the cluttered closet, you'll embrace a spacious sanctuary solely devoted to your wardrobe. Imagine stepping into a world of organized bliss, where every outfit choice feels effortless and inspiring. We'll unveil the key differences between walk-in wonders and traditional closets, showcasing how these personalized spaces can seriously boost your organization and elevate your daily fashion experience. Prepare to be wowed by a collection of stunning walk-in wardrobe designs that will have you itching to create your own stylish sanctuary. Embrace the freedom and joy of a walk-in wardrobe and take your closet to new heights of efficiency and style.
            </p>
          </div>
        </div>


                



                <div className=" w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

                    {PcardData.map((card) => (
                        <div key={card.id} className="max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden">
                            <div className="relative h-80">
                            <AdvancedImage
              cldImg={cld.image(card.imageUrl)} // Assuming `imageUrl` contains the Cloudinary image identifier
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
              cldImg={cld.image(card.imageUrl)} // Assuming `imageUrl` contains the Cloudinary image identifier
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

export default WalkDoorWardrobe