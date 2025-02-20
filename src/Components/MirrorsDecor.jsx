

import Footer from "./Footer"
import "./LShapeKitchen.css"


import PhoneCallButton from "./PhoneCallButton";
import { useState } from "react";
import ModalNew from "./ModalNew";


import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { Helmet } from "react-helmet-async";




function MirrorsDecor() {

    const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });


    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
      };

    const PcardData = [
        {
            id: 1,
            imageUrl:
            'HomeDecor/mrr/7_enraz1',
            title: '',
            description:
                'A decorative round mirror with a gleaming gold frame.',
        },
        {
            id: 2,
            imageUrl:
            'HomeDecor/mrr/18_unhqk1',
            title: '',
            description:
                'Rectangular Mirror with Contemporary Metal Frame',
        },
        {
            id: 3,
            imageUrl:
            'HomeDecor/mrr/19_pre7qv',
            title: '',
            description:
                'Leaf-Shaped Wooden Frame  Decorative Mirror',
        },
        {
            id: 4,
            imageUrl:
            'HomeDecor/mrr/20_x4ac8y',
            title: '',
            description:
                'Antiqued gold-finished irregular wall mirror',
        },
        {
            id: 5,
            imageUrl:
            'HomeDecor/mrr/6_q0sus8',
            title: '',
            description:
                'Elegant Circular Mirror with Radiant Light Frame',
        },
        {
            id: 6,
            imageUrl:
            'HomeDecor/mrr/shopping_2_dae6fv',
            title: '',
            description:
                'Sleek Full-Length Rectangular Mirror with Integrated Side Lighting',
        },
        {
            id: 7,
            imageUrl:
            'HomeDecor/mrr/21_jhvm8s',
            title: '',
            description:
                'A circular bathroom Vanity mirror with a gold-tone metal frame. ',
        },

        // Add more card objects as needed
    ];

    const P2cardData = [
        {
            id: 1,
            imageUrl:
            'HomeDecor/mrr/15_hzyhb2',
            title: '',
            description:
                'The circular mirror with a gilded frame, adding a touch of luxury to the space.',
        },
        {
            id: 2,
            imageUrl:
            'HomeDecor/mrr/16_rcttg8',
            title: '',
            description:
                'Large rectangular mirror with a metallic frame integrated with led light ',
        },
        {
            id: 3,
            imageUrl:
            'HomeDecor/mrr/17_vwphfe',
            title: '',
            description:
                'LED Black Framed Bathroom Vanity Mirror',
        },
        {
            id: 4,
            imageUrl:
            'HomeDecor/mrr/3_xzdipl',
            title: '',
            description:
                'Circular wall mirror with a natural wood frame.',
        },
        {
            id: 5,
            imageUrl:
            'HomeDecor/mrr/4_o9dpta',
            title: '',
            description:
                'Wall-mounted, circular mirror with integrated LED lighting',
        },
        {
            id: 6,
            imageUrl:
            'HomeDecor/mrr/5_qmqgz4',
            title: '',
            description:
                'Large, circular wall mirror with a geometric frame in a luxurious gold finish.',
        },
        {
            id: 7,
            imageUrl:
            'HomeDecor/mrr/2_lchv8n',
            title: '',
            description:
                'Round wall mirror with a natural rattan frame.',
        },
    ];

    return (
        <>


<Helmet>

  <title>Mirrors Decor</title>

 
  <link rel="canonical" href="https://adhunikdecodive.com/MirrorsDecor" data-react-helmet="true"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>

</Helmet>



<ModalNew  isOpen={openModal} onClose={toggleModal}  />
      
            <div className="w-full bg-white p-3 md:p-5 svg8 "  >


            <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <p className="text-5xl font-semibold p-3 md:p-9">
            Mirrors Designs
            </p>
          </div>
        </div>
               

                <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
            <p className="text-1xl md:w-[70%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
            Adorn your home with the perfect reflection – Adhunik Deco Dive offers a stunning selection of mirrors for every room! From sleek bathroom mirrors that brighten your morning routine to elegant bedroom mirrors that enhance your space, we have something for every style. Breathe new life into your living room with a statement mirror, or find the ideal full-length mirror to ensure you're always picture-perfect. Explore our collection and discover the mirror that reflects your unique style!
            </p>
          </div>
        </div>


               



                <div className=" w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

                    {PcardData.map((card) => (
                        <div key={card.id} className="max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden">
                        
                            <div className="relative h-80">
                            <div className="card h-full w-full">
                            <AdvancedImage
              cldImg={cld.image(card.imageUrl)} 
               alt={card.description}
              decoding="async"
              className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
              style={card.unique ? { objectFit: 'fill', objectPosition: '100% 37%' } : {}}
            />
                            </div>
                               
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

export default MirrorsDecor