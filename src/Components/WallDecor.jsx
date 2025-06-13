



import "./LShapeKitchen.css"


import PhoneCallButton from "./PhoneCallButton";
import ModalNew from "./ModalNew";
import { useState } from "react";

 
import { AdvancedImage } from '@cloudinary/react';
import { Helmet } from "react-helmet-async";



function WallDecor() {

    
    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
      };


    const PcardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785548/7_b7vhhc_fmvlzf.webp',
            title: '',
            description:
                'Circular Seagrass Woven Mirror Wall Decor',
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785551/8_pritxx_t5x4qj.webp',
            title: '',
            description:
                'Chic Boho Dreamcatcher ',
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785553/9_rxvhon_jmckpx.webp',
            title: '',
            description:
                'Set of three gold metal ginkgo leaves',
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785555/10_xrusxb_d0uzhv.webp',
            title: '',
            description:
                'Contemporary Wall Art with Mirrors and Butterflies',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785557/11_ibyyhv_vxvoxv.webp',
            title: '',
            description:
                'Metal Branch Silhouette for Wall Décor',
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785559/12_di11ms_cuejrb.webp',
            title: '',
            description:
                'Gold Metal Wall Art Decor',
        },
        {
            id: 7,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785565/14_laylub_tyldgc.webp',
            title: '',
            description:
                'Charcoal & Copper Geometric Wall design ',
        },

       
    ];
    const P2cardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785535/1_xqauoo_vqphtm.webp',
            title: '',
            description:
                'Vibrant Floral Mural Wallpaper',
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785537/2_nikxdc_t2c1h0.webp',
            title: '',
            description:
                'Trio of Rustic Wooden Wall Hangings.',
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785567/15_nwrkzy_zqrmnj.webp',
            title: '',
            description:
                'Whimsical Wall sticker, cats on a Branch',
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785542/4_t5ayax_zyr6ib.webp',
            title: '',
            description:
                ' 3D effect with blue squares minimalist wall paper design ',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785568/16_gtxjsd_jbto10.webp',
            title: '',
            description:
                'A modern wooden wall shelf',
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785571/17_f5c53m_w4j235.webp',
            title: '',
            description:
                'Smaller, decorative wind chimes',
        },
        {
            id: 7,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785573/18_dnxjpe_urlwia.webp',
            title: '',
            description:
                'Wooden Art Wall Decor for Home',
        },
    ];

    return (
        <>


<Helmet>

<title>Top Wall Decor Designs in Gurugram | Adhunik Decodive</title>

<meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Discover the best wall decor designs in Gurugram with Adhunik Decodive. Explore stylish, artistic, and modern wall decor ideas to enhance your home interiors. Free consultation!" />

<meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>

<link rel="canonical" href="https://adhunikdecodive.com/wall-decor" data-react-helmet="true"/> 
<meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
<meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
<meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Top Wall Decor Designs in Gurugram | Adhunik Decodive" />
<meta data-n-head="ssr" data-hid="keywords" name="keywords" content="wall decor designs, best wall art in Gurugram, stylish home decor, decorative wall pieces, modern wall designs, custom wall decor Gurugram, home decor accessories, Adhunik Decodive wall decor, artistic interior designs Gurugram" />
<meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
<meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
<meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>

<meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Discover the best wall decor designs in Gurugram with Adhunik Decodive. Explore stylish, artistic, and modern wall decor ideas to enhance your home interiors. Free consultation!" />

<meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/wall-decor-designs"></meta>
<meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Home Decor Experts" />
<meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Top Wall Decor Designs in Gurugram | Adhunik Decodive" />
<meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Discover the best wall decor designs in Gurugram with Adhunik Decodive. Explore stylish, artistic, and modern wall decor ideas to enhance your home interiors. Free consultation!" />

{/* <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> */}

</Helmet>


<ModalNew  isOpen={openModal} onClose={toggleModal}  />
      
            <div className="w-full bg-white p-3 md:p-5 svg8 "  >


            <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <p className="text-5xl font-semibold p-3 md:p-9">
            Wall Decor Designs
            </p>
          </div>
        </div>
               

                <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
            <p className="text-1xl md:w-[70%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
            Wall decor is the magic touch your home craves! Explore a curated collection of stunning art, stylish frames, and captivating woven wonders to design your dream space. From modern museum vibes to a touch of bohemian flair, Adhunik Deco Dive has everything to transform your bare walls into a stunning display of you.  Find the perfect pieces to transform your bare walls into a haven of inspiration.
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
            src={card.imageUrl}  alt={card.description}
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

export default WallDecor