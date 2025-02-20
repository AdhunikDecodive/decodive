import Footer from "./Footer"
import "./LShapeKitchen.css"

import { useState } from "react";
import PhoneCallButton from "./PhoneCallButton";
import ModalNew from "./ModalNew";


import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { Helmet } from "react-helmet-async";





function IshapeKitchen() {

    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    const PcardData = [
        {
            id: 1,
            imageUrl:
            'Kitchen/IsKitchen/7_11zon_olrgym',
            title: '',
            description:
                'Sleek & Stylish Island kitchen with painted wooden cabinets and a light-colored marble composite lower level',
        },
        {
            id: 2,
            imageUrl:
            'Kitchen/IsKitchen/4_gj8dho',
            title: '',
            description:
                'Island layout with two-tone light gray painted cabinets with warm wood stain of the island base injects a touch of contrast and warmth into the space',
        },
        {
            id: 3,
            imageUrl:
            'Kitchen/IsKitchen/2_dy9uog',
            title: '',
            description:
                'The Alluring Island Kitchen with a warm wood veneer base. Indulge in the luxurious elegance of a white marble countertop',
        },
        {
            id: 4,
            imageUrl:
            'Kitchen/IsKitchen/10_11zon_qxoi9s',
            title: '',
            description:
                'A Stylish Island-shaped layout with durable wood cabinets and  white countertops with kitchen appliances',
        },
        {
            id: 5,
            imageUrl:
            'Kitchen/IsKitchen/11_11zon_dbdfkk',
            title: '',
            description:
                'Island stuns with a vibrant blue lacquer finish on shaker cabinets and classic butcher block countertop with vintage charm',
        },
        {
            id: 6,
            imageUrl:
            'Kitchen/IsKitchen/12_lydklp',
            title: '',
            description:
                'An island kitchen with light gray laminated cabinet, and warm wood stain island base with wood veneer  and white marble countertop',
        },
        {
            id: 7,
            imageUrl:
            'Kitchen/IsKitchen/13_11zon_bracki',
            title: '',
            description:
                'Light wood cabinets with a dark granite countertop Island kitchen layout. With a warm and airy touch of practicality',
        },

        // Add more card objects as needed
    ];
    const P2cardData = [
        {
            id: 1,
            imageUrl:
            'Kitchen/IsKitchen/14_11zon_rz82xh',
            title: '',
            description:
                'Modern Island kitchen with glossy white cabinets and straightforward, effective layout in a minimalist design.with open shelving & closed cabinets',
        },
        {
            id: 2,
            imageUrl:
            'Kitchen/IsKitchen/15_11zon_ntaeor',
            title: '',
            description:
                'Modular Island Kitchen Design With An Accent Wall. Yellow and gray cabinets along with an accent wall make this kitchen look stylish and chic ',
        },
        {
            id: 3,
            imageUrl:
            'Kitchen/IsKitchen/16_s1fkxv',
            title: '',
            description:
                'The two-tiered island with  light woodgrain finish  and light countertop  brighten the space. Lower tier offers prep space, the upper tier creates  extra workspace',
        },
        {
            id: 4,
            imageUrl:
            'Kitchen/IsKitchen/17_ehg08d',
            title: '',
            description:
                'A central island kitchen with stunning white marble. With  integrated appliances for a streamlined aesthetic, and casual dining',
        },
        {
            id: 5,
            imageUrl:
            'Kitchen/IsKitchen/18_fxdhjn',
            title: '',
            description:
                'The spacious island modern kitchen with green hue cabinets and white  light countertop for beautiful contrast, with fresh and modern look',
        },
        {
            id: 6,
            imageUrl:
            'Kitchen/IsKitchen/19_v95a39',
            title: '',
            description:
                'Light wood island with warm contrast and white veined countertop, adding a touch of nature-inspired elegance to the kitchen. Offers both beauty and functionality',
        },
        {
            id: 7,
            imageUrl:
            'Kitchen/IsKitchen/20_11zon_kx4wzh',
            title: '',
            description:
                'Larger island with waterfall countertop in white marble  and light wood cabinets  offers a versatile choice for kitchen designers choice',
        },
    ];

    const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });

    return (



        <>
         <Helmet>
  <title>Island Kitchen Designs</title>


  <link rel="canonical" href="https://adhunikdecodive.com/IshapeKitchen" data-react-helmet="true"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>

</Helmet>
            <ModalNew isOpen={openModal} onClose={toggleModal} />





            <div className="w-full bg-white p-3 md:p-5 svg "  >

                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <p className="text-5xl font-semibold p-9">  Island Kitchen Designs</p>
                    </div>
                </div>

                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
                        <p className="text-1xl md:w-[90%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
                            Indulge in the allure of a luxurious kitchen experience. Picture yourself in the heart of your home, surrounded by sleek design and unparalleled functionality. If you've been dreaming of a culinary haven that combines style with efficiency, look no further than island kitchen layouts. This popular design incorporates a freestanding or built-in island in the center, creating a multifunctional haven for food prep, casual dining, and social gatherings. Just imagine having extra counter space for spreading out while you cook, additional storage for all your kitchen essentials, and even a breakfast bar tucked into the island itself. Island kitchens excel at maximizing functionality without sacrificing aesthetics. They often feature sleek, hidden storage solutions like sliding drawers and pocket doors, keeping your space organized and clutter-free. Immerse yourself in these kitchens layout into magnificent spaces.
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

            <Footer />
        </>
    )
}

export default IshapeKitchen