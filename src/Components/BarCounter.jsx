


import Footer from "./Footer"
import "./LShapeKitchen.css"


import PhoneCallButton from "./PhoneCallButton";


import ModalNew from './ModalNew';
import { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { Helmet, HelmetProvider } from "react-helmet-async";


function BarCounter() {

    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
      };

    const PcardData = [
        {
            id: 1,
            imageUrl:
                'Others/BarCounter/7_hw166m',
            title: '',
            description:
                'A Chilcomb Dusk Blue In-Frame Home Bar designed to fit under the stairs with blue cabinets with drawers and a wine fridge. Open shelves provide additional storage',
        },
        {
            id: 2,
            imageUrl:
                'Others/BarCounter/26_onevwv',
            title: '',
            description:
                'Home bar with light colored wood and moody lighting, creating a sophisticated and intimate atmosphere. Ideal for entertaining or relaxing with friends.',
        },
        {
            id: 3,
            imageUrl:
                'Others/BarCounter/9_r0f9hl',
            title: '',
            description:
                'Stylish and sleek home bar built-in wine cellar with glass doors. Warm wood accents balance the modern vibe, and hidden drawers stash barware for effortless entertaining.',
        },
        {
            id: 4,
            imageUrl:
                'Others/BarCounter/23_mhqjyy',
            title: '',
            description:
                'A sleek and functional home bar design with a wall-mounted wine rack. Efficiently stores wine bottles, with the integrated stemware holder keeps glasses within easy reach.',
        },
        {
            id: 5,
            imageUrl:
                'Others/BarCounter/11_uqjeec',
            title: '',
            description:
                ' A sleek home bar with a light wood countertop and a black metal frame for a modern look. Perfect for a contemporary home.',
        },
        {
            id: 6,
            imageUrl:
                'Others/BarCounter/12_ghhbyb',
            title: '',
            description:
                'Wooden breakfast bar with integrated storage. Light colored wooden top and drawers with bronze handles. ',
        },
        {
            id: 7,
            imageUrl:
                'Others/BarCounter/27_mcaqng',
            title: '',
            description:
                'Medium tone wood floor Home Bar with White Cabinets built-under wine cooler with a stainless steel frame for a sleek look.',
        },

        // Add more card objects as needed
    ];
    const P2cardData = [
        {
            id: 1,
            imageUrl:
                'Others/BarCounter/22_cfio7p',
            title: '',
            description:
                'The minimalist home bar design with built-in, a wine cooler and rack for efficient storage and display. Space-saving design creates a sophisticated entertaining area within the kitchen.',
        },
        {
            id: 2,
            imageUrl:
                'Others/BarCounter/16_qrtqjm',
            title: '',
            description:
                ' Modern home bar design with a dark wood finish and a mirrored backsplash with some bottles of liquor and glasses.',
        },
        {
            id: 3,
            imageUrl:
                'Others/BarCounter/18_fol33j',
            title: '',
            description:
                'A simple wooden countertop home bar design with a focus on functionality and for streamlined approach.',
        },
        {
            id: 4,
            imageUrl:
                'Others/BarCounter/19_rpgbxb',
            title: '',
            description:
                'A built-in home bar designed to maximize under-stair storage space with a polished marble countertop, complemented by classic white cabinetry with drawers.',
        },
        {
            id: 5,
            imageUrl:
                'Others/BarCounter/28_j2djr6',
            title: '',
            description:
                'Sophisticated built-in bar featuring a mirrored backsplash that creates a spacious feel. Classic wood shelves add warmth for extra functionality',
        },
        {
            id: 6,
            imageUrl:
                'Others/BarCounter/29_t0yfkn',
            title: '',
            description:
                'A contemporary wet bar with dark cabinetry and integrated wine storage creating a sleek and functional entertaining area.',
        },
        {
            id: 7,
            imageUrl:
                'Others/BarCounter/25_mddd9x',
            title: '',
            description:
                'A Chilcomb Dusk Blue In-Frame Home Bar designed to fit under the stairs with blue cabinets with drawers and a wine fridge. Open shelves provide additional storage',
        },
    ];
    const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });

    return (
        <>

<HelmetProvider>
    


<Helmet>
  <title>Bar-Counter</title>

 
  <link rel="canonical" href="https://adhunikdecodive.com/BarCounter" data-react-helmet="true"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>

</Helmet>

<ModalNew  isOpen={openModal} onClose={toggleModal}  />
    
            <div className="w-full bg-white p-3 md:p-5 svg6 "  >


            <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <p className="text-5xl font-semibold p-3 md:p-9">
            Bar Counters
            </p>
          </div>
        </div>
               

                <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
            <p className="text-1xl md:w-[70%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
            Introduce a touch of sophistication and a perfect spot for entertaining guests. A well-designed bar counter can be a great addition to any home, whether you use it for entertaining or simply enjoying a relaxing drink at the end of the day. We can offer tips on choosing the right size and style of bar counter for your home, as well as inspiration for decorating your bar area.
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

</HelmetProvider>
        </>
    )
}

export default BarCounter