

import Footer from "./Footer"
import "./LShapeKitchen.css"

import ModalNew from './ModalNew';
import { useState } from "react";
import PhoneCallButton from "./PhoneCallButton";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { Helmet } from "react-helmet-async";



function DomesticFurniture() {

    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
      };

    const PcardData = [
        {
            id: 1,
            imageUrl:
                'Furniture/DF/7_fruzw1',
            title: '',
            description:
                'A Contemporary Wooden Shoe Cabinet with a Charcoal Grey Sliding Door, Designed for Ample Storage Space.',
        },
        {
            id: 2,
            imageUrl:
                'Furniture/DF/8_1_auv8w2',
            title: '',
            description:
                'Clean and organized living room workspace with white wooden cabinets and a warm-toned study table',
        },
        {
            id: 3,
            imageUrl:
                'Furniture/DF/9_dsenwc',
            title: '',
            description:
                'Beech Wood White Mdf Board Shoe Racks Easy to Installed Living Room Shoe Rack Cabinet For Hallway',
        },
        {
            id: 4,
            imageUrl:
                'Furniture/DF/10_zmpqqz',
            title: '',
            description:
                'A Wooden Desk with Wood With A Sleek Laminate Coating and Fabric Chair With a Cushion for Comfort and Smooth Workspace ',
        },
        {
            id: 5,
            imageUrl:
                'Furniture/DF/15_gksrdz',
            title: '',
            description:
                'An Off-White Wooden Corner Study Table Designed with an Integrated Bookshelf, Offering a Stylish and Space-Efficient.',
        },
        {
            id: 6,
            imageUrl:
                'Furniture/DF/11_j1yqvo',
            title: '',
            description:
                'A Modern Yellow Study Desk with a Rectangular Engineered Wood Top with White Wooden Base  Corner Study Table  ',
        },
        {
            id: 7,
            imageUrl:
                'Furniture/DF/12_kn608h',
            title: '',
            description:
                'A Beige, Three-Seater Fabric Sofa with Curved Edges and Rounded Corners for a Sophisticated Look.',
        },

        // Add more card objects as needed
    ];
    
    const P2cardData = [
        {
            id: 1,
            imageUrl:
                'Furniture/DF/14_sgloqa',
            title: '',
            description:
                'The Amaze L-Shape Sofa with a Teal Finished Solid Wood Frame and Comfy Soft Foam with Polyester Fabric.',
        },
        {
            id: 2,
            imageUrl:
                'Furniture/DF/13_qkuddd',
            title: '',
            description:
                'Off-White Queen Size Wooden Double Bed for Their Timeless Look, and more Durability',
        },
        {
            id: 3,
            imageUrl:
                'Furniture/DF/1_bnakez',
            title: '',
            description:
                'Scandinavian Style Dining Table Set with Teak Wood, Rectangular,4 Seater',
        },
        {
            id: 4,
            imageUrl:
                'Furniture/DF/2_lez4qg',
            title: '',
            description:
                'Sliding Door Shoe Racks Save Space in Your Closet, Hide Shoes for A Neater Look, And Keep them Dust-Free',
        },
        {
            id: 5,
            imageUrl:
                'Furniture/DF/19_grkpfl',
            title: '',
            description:
                'A Luxurious Single Bed with A Plush Velvet Material and Silver Frame for A Versatile Look In Bedroom',
        },
        {
            id: 6,
            imageUrl:
                'Furniture/DF/16_iev7yy',
            title: '',
            description:
                'Off-White Queen Size Wooden Double Bed for Their Timeless Look, and more Durability',
        },
        {
            id: 7,
            imageUrl:
                'Furniture/DF/18_sgmdox',
            title: '',
            description:
                'The King-Size Bed with Solid Cedar Pine with Light Pink Finish and a Light Pink Fabric Upholstered Headboard.',
        },
    ];

    const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });

    return (
        <>


        

<Helmet>

        <title>Top Domestic Furniture in Gurugram | Adhunik Decodive</title>

        <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Adhunik Decodive: Gurugram's top provider of domestic furniture. From concept to installation, we create bespoke, functional, and stylish home furniture solutions. Free consultation!" />

        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        <link rel="canonical" href="https://adhunikdecodive.com/DomesticFurniture" data-react-helmet="true" />
        <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
        <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Top Domestic Furniture in Gurugram | Stylish & Functional – Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="domestic furniture, best furniture in Gurugram, modern home furniture, custom furniture Gurugram, luxury home furniture solutions, Adhunik Decodive furniture, stylish home furniture Gurugram, bedroom furniture Gurugram, living room furniture Gurugram" />
        <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
        <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
        <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
        <link data-n-head="ssr" rel="preconnect" href="http://cdn12.lemnisk.co"></link>
        <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Adhunik Decodive: Gurugram's top provider of domestic furniture. From concept to installation, we create bespoke, functional, and stylish home furniture solutions. Free consultation!" />

        <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/domestic-furniture"></meta>
        <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Furniture Experts" />
        <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Top Domestic Furniture in Gurugram | Stylish & Functional – Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Adhunik Decodive: Gurugram's top provider of domestic furniture. From concept to installation, we create bespoke, functional, and stylish home furniture solutions. Free consultation!" />

        {/* <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> */}

      </Helmet>

<ModalNew  isOpen={openModal} onClose={toggleModal}  />
    
            <div className="w-full bg-white p-3 md:p-5 svg2 "  >



            <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <p className="text-5xl font-semibold p-3 md:p-9">
            Domestic 
            Furniture
            </p>
          </div>
        </div>
               

                <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
            <p className="text-1xl md:w-[70%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
            Furnish your dream home with everything you need! We offer a complete selection to furnish every corner, from the luxurious comfort of beds that promise restful nights to the sleek design of study tables that inspire productive mornings. Our furniture goes beyond functionality; it creates an atmosphere that reflects your style and fosters well-being. Imagine sinking into a plush sofa for movie nights or enjoying family meals around a beautiful dining table. Explore our collection, from functional shoe racks to statement pieces, and discover everything you need to unlock the full potential of your living space. Let's transform your house into a cherished haven
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

export default DomesticFurniture