
import "./LShapeKitchen.css"
import PhoneCallButton from "./PhoneCallButton";
import ModalNew from './ModalNew';
import { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { Helmet } from "react-helmet-async";





function CeilingLightsDecor() {

    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
      };

    const PcardData = [
        {
            id: 1,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784761/7_p66wzo_zdwi10.webp ',
            title: '',
            description:
                'Extra large golden chandelier with cascading crystals',
        },
        {
            id: 2,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784763/8_h7zbut_nbyifo.webp ',
            title: '',
            description:
                'Cascading crystal chandelier.',
        },
        {
            id: 3,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784764/9_wwebvk_oplvfv.webp',
            title: '',
            description:
                'Modern LED ceiling light with a leaf-shaped design',
        },
        {
            id: 4,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784765/10_jo8anp_lw5ylv.webp ',
            title: '',
            description:
                'Modern flower-shaped LED ceiling light',
        },
        {
            id: 5,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784767/11_yzkt1l_o5pag3.webp ',
            title: '',
            description:
                'Ultra-thin, geometric LED ceiling light',
        },
        {
            id: 6,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784768/12_vfbmhv_lcdqcd.webp ',
            title: '',
            description:
                'Crystal chandelier with cascading crystals',
        },
        {
            id: 7,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784771/14_t6l3fu_vodvhn.webp ',
            title: '',
            description:
                'Circular LED ceiling light with an interlocking geometric design',
        },

        // Add more card objects as needed
    ];
    const P2cardData = [
        {
            id: 1,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784772/15_gdxguy_wzfgbd.webp',
            title: '',
            description:
                'Modern black and white rectangular LED ceiling light',
        },
        {
            id: 2,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784775/16_q2khqy_nsiz1b.webp ',
            title: '',
            description:
                'White ceiling light with a swirl of cascading star shapes.',
        },
        {
            id: 3,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784776/17_nnfcow_nnkafu.webp ',
            title: '',
            description:
                'Unique circular ceiling light featuring a cut-out elephant design.',
        },
        {
            id: 4,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784756/1_fjdpzw_oq9r8a.webp',
            title: '',
            description:
                'Brass and glass semi-flush mount ceiling light.',
        },
        {
            id: 5,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784756/2_u4gjyb_pmhalh.webp ',
            title: '',
            description:
                'Modern starburst LED ceiling light',
        },
        {
            id: 6,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784769/13_d14wqe_avysz4.webp',
            title: '',
            description:
                'Multi-level false ceiling with recessed LED downlights.',
        },
        {
            id: 7,
            imageUrl:
            ' https://res.cloudinary.com/dq14b7xie/image/upload/v1746784773/16_fp7xbh_mmykri.webp ',
            title: '',
            description:
                'Large, gold chandelier with cascading crystals',
        },
    ];

    
    return (

        <>

<Helmet>

        <title>Top Ceiling Lights Designs in Gurugram | Adhunik Decodive</title>

        <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Discover the best ceiling light designs in Gurugram with Adhunik Decodive. Explore stylish, artistic, and modern ceiling lights to enhance your home decor. Free consultation!" />

        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        <link rel="canonical" href="https://adhunikdecodive.com/ceiling-lights" data-react-helmet="true"/>
        <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
        <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Top Ceiling Lights Designs in Gurugram | Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="ceiling lights designs, best ceiling lights in Gurugram, stylish home decor, decorative ceiling lights, modern lighting designs, custom ceiling lights Gurugram, home decor accessories, Adhunik Decodive ceiling lights, artistic interior lighting Gurugram" />
        <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
        <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
        <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
        
        <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Discover the best ceiling light designs in Gurugram with Adhunik Decodive. Explore stylish, artistic, and modern ceiling lights to enhance your home decor. Free consultation!" />

        <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/ceiling-lights-designs"></meta>
        <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Home Decor Experts" />
        <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Top Ceiling Lights Designs in Gurugram | Adhunik Decodive" />
        <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Discover the best ceiling light designs in Gurugram with Adhunik Decodive. Explore stylish, artistic, and modern ceiling lights to enhance your home decor. Free consultation!" />

       
      </Helmet>



<ModalNew  isOpen={openModal} onClose={toggleModal}  />
    
            <div className="w-full bg-white p-3 md:p-5 svg3 "  >


            <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <p className="text-5xl font-semibold p-3 md:p-9">
            Ceiling Lights   Designs
            </p>
          </div>
        </div>
               

                <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
            <p className="text-1xl md:w-[70%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
            Adorn your living space with the dazzling collection of ceiling lights at Adhunik Deco Dive. Whether you crave the timeless elegance of cascading crystal chandeliers that shimmer with captivating brilliance to the sleek lines of modern pendant lights that provide a touch of contemporary flair, we offer a stunning array of fixtures to suit your taste and complement your décor. Our ceiling lights are more than just illumination; they're focal points that will steal the show and leave a lasting impression. Whether you're seeking a touch of old-world charm or a modern statement piece, Adhunik Deco Dive has the perfect ceiling light to elevate your space.
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

export default CeilingLightsDecor