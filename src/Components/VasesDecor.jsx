
import "./LShapeKitchen.css"


import PhoneCallButton from "./PhoneCallButton";
import ModalNew from "./ModalNew";
import { useState } from "react";


import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { Helmet } from "react-helmet-async";




function VasesDecor() {

    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
      };


    const PcardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785315/7_c108lp_lv0uj9.webp',
            title: '',
            description:
                'Elegant Ceramic Face Vases, Modern White Flower Vases',
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785318/8_z0udwv_eogbdl.webp',
            title: '',
            description:
                'Elegant Nordic Minimalist Ceramic Flower Vase',
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785319/9_epzvhz_sfblti.webp',
            title: '',
            description:
                'Decorative Aluminum Vases with Hammered Texture for Modern Home Decor',
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785361/v2_kzicaq_lfot7s.webp ',
            title: '',
            description:
                'Minimalist Wooden Vase with Glass Test Tube',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785345/18_wzvia9_eeasnr.webp ',
            title: '',
            description:
                'Metal Geometric Vase with Luxurious Gold Finish',
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785325/12_ioia6a_ejkvoz.webp ',
            title: '',
            description:
                'Complementary Ceramic Vases in Matte Red and Orange',
        },
        {
            id: 7,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785347/19_rm7fvf_lvwjxu.webp ',
            title: '',
            description:
                'Ceramic Floor Vase Trio with Geometric Designs',
        },

        // Add more card objects as needed
    ];

    const P2cardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785349/20_tqqxlt_sslusy.webp ',
            title: '',
            description:
                'Chic White Pottery Farmhouse Vase',
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785351/21_chxhty_r43p2r.webp ',
            title: '',
            description:
                'White Ceramic Tall Floor Vase for Modern Floral Displays',
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785353/22_ufg45n_iegrcr.webp ',
            title: '',
            description:
                'White ceramic vase with a swirl design',
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785356/23_bmz9nf_cxyow2.webp ',
            title: '',
            description:
                'Green ceramic vase with a face pattern',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785358/24_p2w6me_yoswzc.webp ',
            title: '',
            description:
                'Textured ceramic vase with funnel neck.',
        },
        {
            id: 6,
            imageUrl:
                ' https://res.cloudinary.com/dq14b7xie/image/upload/v1746785305/2_sxzvmb_l5ksod.webp',
            title: '',
            description:
                'Frosted green glass vase for dried or artificial flowers.',
        },
        {
            id: 7,
            imageUrl:
                ' https://res.cloudinary.com/dq14b7xie/image/upload/v1746785307/3_qonkjh_voaubs.webp ',
            title: '',
            description:
                'Ceramic bud vases in a neutral beige tone',
        },
    ];

   
    return (
        <>



<Helmet>

<title>Top Vases Designs in Gurugram | Adhunik Decodive</title>

<meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Discover the best vase designs in Gurugram with Adhunik Decodive. Explore stylish, artistic, and modern vases to enhance your home decor. Free consultation!" />

<meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
<link rel="canonical" href="https://adhunikdecodive.com/vases" data-react-helmet="true"/>
<meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
<meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
<meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Top Vases Designs in Gurugram | Adhunik Decodive" />
<meta data-n-head="ssr" data-hid="keywords" name="keywords" content="vases designs, best vases in Gurugram, stylish home decor, decorative vases, modern vases designs, custom vases Gurugram, home decor accessories, Adhunik Decodive vases, artistic interior vases Gurugram" />
<meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
<meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
<meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>

<meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Discover the best vase designs in Gurugram with Adhunik Decodive. Explore stylish, artistic, and modern vases to enhance your home decor. Free consultation!" />

<meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/vases-designs"></meta>
<meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Home Decor Experts" />
<meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Top Vases Designs in Gurugram | Adhunik Decodive" />
<meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Discover the best vase designs in Gurugram with Adhunik Decodive. Explore stylish, artistic, and modern vases to enhance your home decor. Free consultation!" />

{/* <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> */}

</Helmet>


<ModalNew  isOpen={openModal} onClose={toggleModal}  />
      
            <div className="w-full bg-white p-3 md:p-5 svg8 "  >


            <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <p className="text-5xl font-semibold p-3 md:p-9">
            Vases Designs
            </p>
          </div>
        </div>
               

                <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
            <p className="text-1xl md:w-[70%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
            Adhunik Deco Dive brings the art of living to your fingertips, and that includes the finishing touches! Explore our collection of beautiful vases, designed to elevate your home and showcase your floral arrangements. Find the perfect table vase to grace your entryway console or centerpiece, or discover a striking floor vase to add a touch of grandeur to any corner. Whether you prefer a minimalist aesthetic or a burst of color and pattern, Adhunik Deco Dive has the ideal vase to complement your style.
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

export default VasesDecor