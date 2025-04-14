
import "./LShapeKitchen.css"

import PhoneCallButton from "./PhoneCallButton";


import { useState } from "react";
import ModalNew from "./ModalNew";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

import { Helmet } from "react-helmet-async";





function PshapeKitchen() {

    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
      };

    const PcardData = [
        {
            id: 1,
            imageUrl:
            'Kitchen/PsKitchen/1_s4ecvr',
            title: '',
            description:
                'Maximize counter space and storage in your compact kitchen with a light pink parallel layout with laminated wood, having  budget-friendly durability',
        },
        {
            id: 2,
            imageUrl:
            'Kitchen/PsKitchen/2_wpgmp2',
            title: '',
            description:
                'Parallel kitchen with white cabinets and marble countertops. White cabinets brighten the space and marble adds a sophisticated touch',
        },
        {
            id: 3,
            imageUrl:
            'Kitchen/PsKitchen/3_pptriy',
            title: '',
            description:
                'All-white parallel kitchen with sleek white quartz countertops for a bright and airy feel, especially ideal for small spaces',
        },
        {
            id: 4,
            imageUrl:
            'Kitchen/PsKitchen/4_szl6o8',
            title: '',
            description:
                ' charming two-toned parallel kitchen with blue base cabinets, yellow uppers, and a light-colored marble countertop for a luxurious and balanced look',
        },
        {
            id: 5,
            imageUrl:
            'Kitchen/PsKitchen/5_yepitp',
            title: '',
            description:
                ' Two-toned design with white upper cabinets and a woodgrain finish on the lower cabinets white quartz countertop  for efficient layout for modern living.',
        },
        {
            id: 6,
            imageUrl:
            'Kitchen/PsKitchen/6_sleifj',
            title: '',
            description:
                'Parallel layout Kitchens in deep purple color made of  Canply plywood with high-gloss Lucida laminates for a modern or Italian style',
        },
        {
            id: 7,
            imageUrl:
            'Kitchen/PsKitchen/7_su8r1f',
            title: '',
            description:
                'Achieve a balanced look with a cool metallic blue accent against a crisp white upper cabinet. Ideal for compact spaces',
        },

        // Add more card objects as needed
    ];
    const P2cardData = [
        {
            id: 1,
            imageUrl:
            'Kitchen/PsKitchen/8_xeibjp',
            title: '',
            description:
                'A modern galley kitchen with light gray cabinets and marble countertops. Ideal for smaller spaces, feature a single countertop along one wall for maximum efficiency',
        },
        {
            id: 2,
            imageUrl:
            'Kitchen/PsKitchen/9_vfhxrq',
            title: '',
            description:
                'Modern parallel kitchen with calming colors and green accents. perfect for  space-saving design in  small kitchens.',
        },
        {
            id: 3,
            imageUrl:
            'Kitchen/PsKitchen/10_tqherx',
            title: '',
            description:
                'A minimalistic design with parallel modular units in beige and brown tones. Textured finish and pendant lighting blends with the backdrops',
        },
        {
            id: 4,
            imageUrl:
            'Kitchen/PsKitchen/11_mdldal',
            title: '',
            description:
                'Green cabinets and white countertops in a modern kitchen create a stylish and airy ambiance, blending vibrant color with sleek sophistication',
        },
        {
            id: 5,
            imageUrl:
            'Kitchen/PsKitchen/12_smaltd',
            title: '',
            description:
                'Luxurious Parallel layout kitchen with  white marble and hanging lamps add a touch of modern elegance',
        },
        {
            id: 6,
            imageUrl:
            'Kitchen/PsKitchen/13_y2rqnd',
            title: '',
            description:
                'A contemporary parallel layout kitchen.White cabinets with hidden hardware maximize storage.Light brown counters add warmth. Ideal for long, narrow spaces',
        },
        {
            id: 7,
            imageUrl:
            'Kitchen/PsKitchen/14_x0uvuh',
            title: '',
            description:
                '  Parallel kitchen with charcoal gray cabinets and light colored countertop surface for a modern and sophisticated look',
        },
    ];

    const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });


    return (
        <>




<Helmet>

<title>Best Parallel Modular Kitchen Designs in Gurugram | Adhunik Decodive</title>

<meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Discover the best Parallel modular kitchen designs in Gurugram with Adhunik Decodive. Stylish, space-efficient, and customized kitchen solutions for modern homes. Get a free consultation today!" />

<meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
<link rel="canonical" href="https://adhunikdecodive.com/PshapeKitchen" data-react-helmet="true" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
<meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>

<meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Best Parallel Modular Kitchen Designs in Gurugram | Adhunik Decodive" />
<meta data-n-head="ssr" data-hid="keywords" name="keywords" content="Parallel kitchen, modular kitchen designs, best modular kitchen in Gurugram, modern kitchen layouts, custom kitchen designs, kitchen renovation Gurugram, space-saving kitchens, Adhunik Decodive kitchen interiors" />
<meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
<meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
<meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
<link data-n-head="ssr" rel="preconnect" href="http://cdn12.lemnisk.co"></link>

<meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Upgrade your kitchen with Adhunik Decodive's best Parallel modular kitchen designs in Gurugram. Crafted for efficiency, style, and modern aesthetics. Book a free consultation today!" />

<meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/parallel-kitchen"></meta>
<meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Modular Kitchen Experts" />
<meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Best Parallel Modular Kitchen Designs in Gurugram | Adhunik Decodive" />
<meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Explore space-efficient and stylish Parallel modular kitchen designs in Gurugram by Adhunik Decodive. Perfect for modern homes. Get a free consultation today!" />

</Helmet>

<ModalNew  isOpen={openModal} onClose={toggleModal}  />
     
            
          


            <div className="w-full bg-white p-3 md:p-5 svg "  >

                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <p className="text-5xl font-semibold p-9">  Parallel Kitchen Designs</p>
                    </div>
                </div>

                <div className="row justify-around flex">

                    <div className="w-[80%] flex">
                        <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
                        <p className="text-1xl md:w-[70%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
                            Parallel kitchen layouts offer a sleek and efficient solution for larger kitchens. This design features two countertops running parallel to each other, maximizing workspace and storage. The separated cooking and cleaning zones create a smooth workflow, making it ideal for multiple cooks or busy households. The strategically placed refrigerator, sink, and stove form a compact golden zone, minimizing unnecessary movement during meal preparation. Parallel kitchens prioritize organization through discreet storage solutions like hidden drawers and sliding doors, ensuring all utensils and ingredients are readily accessible while maintaining a clean, modern aesthetic
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
<span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"> Get Free Quote</span>
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
<span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"> Get Free Quote</span>
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

export default PshapeKitchen