import Footer from "./Footer"
import "./LShapeKitchen.css"


import { useState } from 'react';
import ModalNew from './ModalNew';
import PhoneCallButton from "./PhoneCallButton";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { Helmet, HelmetProvider } from "react-helmet-async";





function Door1Wardrobe() {

    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
      };

    const PcardData = [
        {
            id: 1,
            imageUrl:
            'WardRobe/1DW/7_p8dnrj',
            title: '',
            description:
                'single-door, wooden wardrobe with two drawers for additional storage and a contemporary design aesthetic.',
        },
        {
            id: 2,
            imageUrl:
             'WardRobe/1DW/1_gxrpo1',
            title: '',
            description:
                'a minimalist design with a single, full-height door, with clean lines and white matte finish for a contemporary aesthetics',
        },
        {
            id: 3,
            imageUrl:
             'WardRobe/1DW/9_ygdsjx',
            title: '',
            description:
                'Metal black color single door wardrobes with space-efficient solutions for smaller bedrooms',
        },
        {
            id: 4,
            imageUrl:
             'WardRobe/1DW/10_vaq0uk',
            title: '',
            description:
                'A single-door wardrobe made from sheet metal with a visible horizontal shelf through the door grate. Commonly used for storing shoes, bags, or personal items.',
        },
        {
            id: 5,
            imageUrl:
             'WardRobe/1DW/21_shjgis',
            title: '',
            description:
                'a single-door wardrobe with a white finish and black handle. Designed to fit in the corner of a bedroom',
        },
        {
            id: 6,
            imageUrl:
             'WardRobe/1DW/14_ycnmgo',
            title: '',
            description:
                'simple and contemporary design, single-door wardrobe is made of wood and has a full-length mirror on the front.',
        },
        {
            id: 7,
            imageUrl:
             'WardRobe/1DW/12_nxa1v7',
            title: '',
            description:
                'a contemporary space-saving single-door wardrobe, ideal for smaller bedrooms or hallways with mirrors for modern interiors',
        },

        // Add more card objects as needed
    ];
    const P2cardData = [
        {
            id: 1,
            imageUrl:
             'WardRobe/1DW/15_b9gexm',
            title: '',
            description:
                'The single-door wardrobe with clean, white finish with a full-length mirror space-saving storage solution. ',
        },
        {
            id: 2,
            imageUrl:
             'WardRobe/1DW/17_xepq6o',
            title: '',
            description:
                'the single-door wooden wardrobe and a mirror on the front with a shelf on the side. Ideal for small rooms, offer hanging space and a mirrored front for a contemporary look.',
        },
        {
            id: 3,
            imageUrl:
             'WardRobe/1DW/1_z6mffw',
            title: '',
            description:
                'Habitat Camden single-door wardrobe made from a gray painted finish acacia wood. providing ample hanging and storage space.',
        },
        {
            id: 4,
            imageUrl:
             'WardRobe/1DW/2_sizvmd',
            title: '',
            description:
                'Single-door wardrobes, offering hanging rods and shelves for clothes storage behind a single, often wood-constructed door with a black handle.',
        },
        {
            id: 5,
            imageUrl:
             'WardRobe/1DW/single_q7nip2',
            title: '',
            description:
                'Space-saving wardrobe with a single, hinged blue door. Ideal for smaller rooms.',
        },
        {
            id: 6,
            imageUrl:
             'WardRobe/1DW/4_nhn4qc',
            title: '',
            description:
                'a single-door wardrobe from wood with a painted finish. With a mirror on the front door, adding functionality and creating the illusion of a more spacious room.',
        },
        {
            id: 7,
            imageUrl:
             'WardRobe/1DW/19_tdtjsf',
            title: '',
            description:
                'space-saving single-door wardrobe   having shelves for storing clothes, making it a functional storage solution for bedrooms.',
        },
    ];

    const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });


    return (
        <>

<HelmetProvider>

         <Helmet>
  <title>1-Door Wardrobe</title>


  <link rel="canonical" href="https://adhunikdecodive.com/Door1Wardrobe" data-react-helmet="true"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>

</Helmet>

            <div className="w-full bg-white p-3 md:p-5 svg4 "  >

            <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <p className="text-5xl font-semibold p-3 md:p-9">
            1-Door Wardrobe Designs
            </p>
          </div>
        </div>
               

                <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
            <p className="text-1xl md:w-[70%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
            Living spaces come in all shapes and sizes, and sometimes bulky furniture just crams everything in, making it feel even smaller. But that doesn't mean you have to sacrifice style or functionality! Dive into the world of single door wardrobes – a collection of space-saving wonders designed by Adhunik Deco Dive to maximize storage without overwhelming your room. Perfect for bedrooms, hallways, or even entryways, these compact wardrobes offer a surprising amount of versatility. We offer a variety of sleek and stylish designs, so you can find a wardrobe that complements your existing décor. Whether you're a minimalist seeking a clutter-free haven or simply need a touch of organized elegance, there's a single door wardrobe waiting to transform your space. Explore their lines and discover how much you can achieve with a single, stylish solution!
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
                           
                                    <ModalNew  isOpen={openModal} onClose={toggleModal}  />
      
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

export default Door1Wardrobe