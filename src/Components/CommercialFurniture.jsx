
import "./LShapeKitchen.css"

import PhoneCallButton from "./PhoneCallButton";

import ModalNew from './ModalNew';
import { useState } from "react";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { Helmet  } from "react-helmet-async";



function CommercialFurniture() {

    const PcardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784268/7_pa6pkm_yf6jdd.webp',
            title: '',
            description:
                'Elegant and stylish, this white desk not only offers a generous work surface but also enhances the ambiance of any home office with its sophisticated design',
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784270/8_zsfvkp_axkhek.webp',
            title: '',
            description:
                'Stylish white office chair offers a clean look and ergonomic design for all-day comfort, perfect for any workspace',
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784270/9_iqc65x_ndjpfw.webp',
            title: '',
            description:
                'Ergonomic white office chair for easy mobility and leather upholstery for a sleek and professional look for your workspace',
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784271/10_thtagy_uqzjid.webp',
            title: '',
            description:
                'Light luxury slate desk, for a modern, minimalist design with sleek lines and a high-end finish for a stylish and functional workspace',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784273/11_cdo6zf_krmygr.webp',
            title: '',
            description:
                'Dark brown modern desks with wood veneer for warmth, solid laminated wood for elegance, sharp and focused workspace.',
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784275/12_febpmz_edvqtt.webp',
            title: '',
            description:
                'Modern office desk featuring a light-colored top complemented by sleek white and chrome legs, creating a contemporary and stylish aesthetic.',
        },
        {
            id: 7,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784274/14_yyca6x_ew2zrm.webp',
            title: '',
            description:
                'Ideal office chair with adjustable height and armrests and a dynamic chair back for superior support. Perfect for work from home/home office setups',
        },

        // Add more card objects as needed
    ];
    const P2cardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784275/15_zrilzh_ooc8tp.webp',
            title: '',
            description:
                'Luxurious european l-shaped office desk with ample storage and reception counter. Ideal for office workstations',
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784275/16_sdsm1z_xkzfcp.webp',
            title: '',
            description:
                'A modern office space with modular workstations with light-colored finishes on the desks and partitions contribute to a bright and airy feel, with  chairs',
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784263/2_vbboni_yksqgb.webp',
            title: '',
            description:
                'stylish office cabin furniture with premium wooden oak, paired with compact chairs for ergonomic comfort ideal for comfortable and efficient workspace',
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784266/6_kq3nv7_txxzms.webp',
            title: '',
            description:
                'A modern home office with high-quality wooden furniture with a sleek design, including a bookcase, desk, and wall cabinet with led light',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784266/5_iocwng_jqll8h.webp',
            title: '',
            description:
                'Luxurious modern office desk with sleek oak veneer and brushed  metal accents, perfect  professional workspace.',
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784262/1_ujohk6_lpdvsl.webp',
            title: '',
            description:
                'Office workstation with individual laminated desks in a rectangular layout with high-contrast color scheme ',
        },
        {
            id: 7,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784264/3_oou8h0_zvgwou.webp',
            title: '',
            description:
                'A modern office interior with sleek charcoal gray desk and the ergonomic supportive chair designs',
        },
    ];
    
    const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });


    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
      };


    return (
        <>
        
        

     

      


<Helmet>

        <title>Top Commercial Furniture in Gurugram | Adhunik Decodive</title>

        <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Adhunik Decodive: Gurugram's top provider of commercial furniture. From concept to installation, we create bespoke, functional, and stylish office and business furniture solutions. Free consultation!" />

        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        <link rel="canonical" href="https://adhunikdecodive.com/commercial-furniture" data-react-helmet="true" />
        <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
        <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Top Commercial Furniture in Gurugram | Stylish & Functional – Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="commercial furniture, best office furniture in Gurugram, modern business furniture, custom furniture Gurugram, luxury office furniture solutions, Adhunik Decodive furniture, stylish office furniture Gurugram, workspace furniture Gurugram, ergonomic furniture Gurugram" />
        <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
        <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
        <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
        
        <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Adhunik Decodive: Gurugram's top provider of commercial furniture. From concept to installation, we create bespoke, functional, and stylish office and business furniture solutions. Free consultation!" />

        <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/commercial-furniture"></meta>
        <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Furniture Experts" />
        <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Top Commercial Furniture in Gurugram | Stylish & Functional – Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Adhunik Decodive: Gurugram's top provider of commercial furniture. From concept to installation, we create bespoke, functional, and stylish office and business furniture solutions. Free consultation!" />

        {/* <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> */}

      </Helmet>


<ModalNew  isOpen={openModal} onClose={toggleModal}  />
    
            <div className="w-full bg-white p-3 md:p-5 svg7 "  >


            <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <p className="text-5xl font-semibold p-3 md:p-9">
            Commercial 
Furniture
            </p>
          </div>
        </div>
               

                <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
            <p className="text-1xl md:w-[70%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
            Step into the realm of commercial furniture where we curate a comprehensive selection designed to transform your workspace into a haven of comfort and productivity. From ergonomic office tables that boost productivity to comfortable chairs that keep your team energized, we have everything to outfit your business. Create a collaborative atmosphere with stylish sofas and workstations that inspire creativity and explore our collection and discover how our commercial furniture can elevate your workplace to new heights of comfort, functionality, and style.

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

export default CommercialFurniture