import Footer from "./Footer"
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
            'WardRobe/2DW/7_a47fb9',
            title: '',
            description:
                ' Shutter  wardrobes with shades of green and white hue made of wooden dresser with three drawers.',
        },
        {
            id: 2,
            imageUrl:
            'WardRobe/2DW/8_hxhlwq',
            title: '',
            description:
                'A shutter  wardrobe with a handleless design with a matte finish and reaches the ceiling for maximum storage space.',
        },
        {
            id: 3,
            imageUrl:
            'WardRobe/2DW/10_swso5e',
            title: '',
            description:
                'A contemporary two white, shutter  wardrobes with gold-toned pulls a shelf unit for showcasing decorative objects.',
        },
        {
            id: 4,
            imageUrl:
            'WardRobe/2DW/11_enjzqn',
            title: '',
            description:
                'A clean and contemporary shutter  wardrobes design with a neutral gray color and black handles',
        },
        {
            id: 5,
            imageUrl:
            'WardRobe/2DW/12_nlhxz5',
            title: '',
            description:
                'Simple shutter  wardrobes with yellow and gray colored wood and silver handles.',
        },
        {
            id: 6,
            imageUrl:
            'WardRobe/2DW/14_meldw6',
            title: '',
            description:
                'The off-white shutter  wardrobes with drawers and a mirror made up of wood with a glossy finish.',
        },
        {
            id: 7,
            imageUrl:
            'WardRobe/2DW/15_n8tldp',
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
            'WardRobe/2DW/16_y6ttql',
            title: '',
            description:
                'Wooden shutter  wardrobes design with chevron pattern and offer ample storage space creating geometric aesthetic.',
        },
        {
            id: 2,
            imageUrl:
            'WardRobe/2DW/17_dsisju',
            title: '',
            description:
                'shutter  wardrobes with a lacquered finish forest green color and integrated pulls with a polished gold finish, with touch of sophistication. ',
        },
        {
            id: 3,
            imageUrl:
            'WardRobe/2DW/2door_anczh8',
            title: '',
            description:
                'A pair of contemporary, shutter door wooden wardrobes with a natural wood finish reinforces the modern, minimalist aesthetic.',
        },
        {
            id: 4,
            imageUrl:
            'WardRobe/2DW/19_uhtobz',
            title: '',
            description:
                'White shutter  wardrobes with a chevron pattern. Made for durability with high-quality laminated board and pvc edges. Gold metal handles add a touch of style.',
        },
        {
            id: 5,
            imageUrl:
            'WardRobe/2DW/2_DOOR_iygeqp',
            title: '',
            description:
                'Pair of built-in shutter  wardrobes with a white laminate finish and wooden panel with ample storage capacity.',
        },
        {
            id: 6,
            imageUrl:
            'WardRobe/2DW/21_mhqbgn',
            title: '',
            description:
                'Wooden shutter  wardrobe with a glossy finish offering a sleek and contemporary aesthetic look',
        },
        {
            id: 7,
            imageUrl:
            'WardRobe/2DW/13_pdrznd',
            title: '',
            description:
                ' Shutter  wardrobes with shades of green and white hue made of wooden dresser with three drawers.',
        },
    ];

    const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });

    return (
        <>


         <Helmet>
  <title>2-Door Wardrobe</title>


  <link rel="canonical" href="https://adhunikdecodive.com/ShutterDoorWardrobe" data-react-helmet="true"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>

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

            <Footer />
        </>
        
    )
}

export default ShutterDoorWardrobe