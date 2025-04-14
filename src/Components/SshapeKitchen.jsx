
import "./LShapeKitchen.css"

import { useState } from 'react'
import PhoneCallButton from "./PhoneCallButton";

import ModalNew from "./ModalNew";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { Helmet } from "react-helmet-async";





function SshapeKitchen() {


    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    const PcardData = [
        {
            id: 1,
            imageUrl:
            'Kitchen/SsKitchen/2_xdjj6e',
            title: '',
            description:
                'Modern straight kitchen highlighting the polished cabinets with sleek acrylic doors for a clean, contemporary look',
        },
        {
            id: 2,
            imageUrl:
            'Kitchen/SsKitchen/7_ktjxg5',
            title: '',
            description:
                'Straight modular kitchen design with a contemporary colour palette of crisp white countertops and cobalt blue cabinets',
        },
        {
            id: 3,
            imageUrl:
            'Kitchen/SsKitchen/10_x0dvfn',
            title: '',
            description:
                'Straight kitchen stuns with a mix of vibrant green cabinets for a shot of energy, balanced by crisp white acrylic cabinets',
        },
        {
            id: 4,
            imageUrl:
            'Kitchen/SsKitchen/11_fadufs',
            title: '',
            description:
                'Straight modern kitchen with green wooden cabinets with Glossy finish and white countertops for a spacious feel',
        },
        {
            id: 5,
            imageUrl:
            'Kitchen/SsKitchen/12_sw5dds',
            title: '',
            description:
                ' A modern straight kitchen with dark elegance with sleek acrylic doors for a polished look and countertops in quartz sophisticated space',
        },
        {
            id: 6,
            imageUrl:
            'Kitchen/SsKitchen/13_i5wzro',
            title: '',
            description:
                'Modern White and Green Straight Kitchen Design with Quartz Countertop with Laminate in suede finish',
        },
        {
            id: 7,
            imageUrl:
            'Kitchen/SsKitchen/14_qaiwym',
            title: '',
            description:
                'Modern straight kitchen with green cabinets and white countertops. Ideal for smaller spaces.',
        },

        // Add more card objects as needed
    ];

    const P2cardData = [
        {
            id: 1,
            imageUrl:
            'Kitchen/SsKitchen/15_rcpvkf',
            title: '',
            description:
                'Contemporary straight  kitchen with  high-gloss cobalt cabinetry with integrated pulls, and light-colored countertops',
        },
        {
            id: 2,
            imageUrl:
            'Kitchen/SsKitchen/16_ezwbao',
            title: '',
            description:
                'The modern kitchen features sleek, high-gloss cabinets in a light wood tone with integrated pulls. Light colored countertops for clean look',
        },
        {
            id: 3,
            imageUrl:
            'Kitchen/SsKitchen/17_orvojw',
            title: '',
            description:
                'Modern kitchen combines cool blue cabinets with warm wooden countertops  and open shelves  for a stylish contrast',
        },
        {
            id: 4,
            imageUrl:
            'Kitchen/SsKitchen/18_b1jkyt',
            title: '',
            description:
                'Gray flat-panel cabinets with chrome pulls and quartz countertops offer a bright workspace creating a sleek look for a modern kitchen',
        },
        {
            id: 5,
            imageUrl:
            'Kitchen/SsKitchen/19_ycdqv2',
            title: '',
            description:
                'Modern kitchen design with light blue color cabinets and countertops with integrated pulls add a modern touch for sleek and stylish look',
        },
        {
            id: 6,
            imageUrl:
            'Kitchen/SsKitchen/20_aukye8',
            title: '',
            description:
                'Modern kitchen with high-gloss cabinets and integrated pulls. Light countertops balance a sleek, sophisticated look',
        },
        {
            id: 7,
            imageUrl:
            'Kitchen/SsKitchen/21_tpw90d',
            title: '',
            description:
                'Flat-panel orange cabinets pop against dark countertops,with a glossy cream backsplash Chrome pulls complete the chic look',
        },
    ];

   

    const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });



    return (
        <>

           

<Helmet>

<title>Best Straight Modular Kitchen Designs in Gurugram | Adhunik Decodive</title>

<meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Discover the best Straight modular kitchen designs in Gurugram with Adhunik Decodive. Stylish, space-efficient, and customized kitchen solutions for modern homes. Get a free consultation today!" />

<meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
<meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
<meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>

<meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Best Straight Modular Kitchen Designs in Gurugram | Adhunik Decodive" />
<meta data-n-head="ssr" data-hid="keywords" name="keywords" content="Straight kitchen, modular kitchen designs, best modular kitchen in Gurugram, modern kitchen layouts, custom kitchen designs, kitchen renovation Gurugram, space-saving kitchens, Adhunik Decodive kitchen interiors" />
<meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
<meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
<meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
<link data-n-head="ssr" rel="preconnect" href="http://cdn12.lemnisk.co"></link>

<meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Upgrade your kitchen with Adhunik Decodive's best Straight modular kitchen designs in Gurugram. Crafted for efficiency, style, and modern aesthetics. Book a free consultation today!" />

<meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/straight-kitchen"></meta>
<meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Modular Kitchen Experts" />
<meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Best Straight Modular Kitchen Designs in Gurugram | Adhunik Decodive" />
<meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Explore space-efficient and stylish Straight modular kitchen designs in Gurugram by Adhunik Decodive. Perfect for modern homes. Get a free consultation today!" />
{/* <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> */}

</Helmet>

            <ModalNew isOpen={openModal} onClose={toggleModal} />



        

            <div className="w-full bg-white p-3 md:p-5 svg "  >

                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <p className="text-5xl font-semibold p-9">  Straight Kitchen Designs</p>
                    </div>
                </div>

                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
                        <p className="text-1xl md:w-[90%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
                            Maximize efficiency in tight spaces with a straight kitchen layout! This space-saving design, also known as a single-wall or in-line kitchen, features all your essential appliances, cabinets, and countertops neatly arranged along one wall. Ideal for studios, small apartments, or even secondary kitchens in larger homes, straight kitchens optimize limited square footage without sacrificing functionality. Imagine a streamlined workspace that allows for easy movement and a well-defined workflow, perfect for whipping up culinary creations. Straight kitchens boast clever features like sliding doors and hidden drawers to maximize storage and minimize clutter. This layout can even accommodate a dining table within the kitchen itself, fostering a more interactive cooking experience. So, embrace the simplicity and efficiency of a straight kitchen design – it might be the perfect recipe for your dream compact kitchen. Gain design inspiration from the gallery below, featuring a variety of high-end kitchens.
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

export default SshapeKitchen