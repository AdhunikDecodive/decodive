
import "./LShapeKitchen.css"

import ModalNew from './ModalNew';
import { useState } from "react";
import PhoneCallButton from "./PhoneCallButton";
 
import { AdvancedImage } from '@cloudinary/react';
import { Helmet } from "react-helmet-async";




function WallLightDecor() {

    const PcardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785395/7_a0xzy3_nsu4on.webp ',
            title: '',
            description:
                'A vibrant mosaic wall sconce',
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785398/8_os8oeb_in6pyc.webp ',
            title: '',
            description:
                'Flora wall light',
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785400/9_gabskw_jlxjif.webp ',
            title: '',
            description:
                'A globe sconce with a wood frame',
        },
        {
            id: 4,
            imageUrl:
                ' https://res.cloudinary.com/dq14b7xie/image/upload/v1746785402/10_nrxjai_zwwuyy.webp',
            title: '',
            description:
                'Modern metal wall sconce with two white glass globes.',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785405/11_ljgxnu_jxfus8.webp',
            title: '',
            description:
                'Copper sconces with white glass shades',
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785407/12_yb1bgy_gfwqvm.webp ',
            title: '',
            description:
                'White ceramic wall sconce',
        },
        {
            id: 7,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785409/13_l5el84_r9fcwv.webp ',
            title: '',
            description:
                'Mosaic glass wall sconce',
        },

       
    ];

    const P2cardData = [
        {
            id: 1,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785415/16_rri89t_xkokh9.webp ',
            title: '',
            description:
                'Elegant yellow round wall lamp',
        },
        {
            id: 2,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785417/17_gxbgcx_suzif6.webp ',
            title: '',
            description:
                'Stylish Nordic LED wall lamp',
        },
        {
            id: 3,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785419/18_i0cyyc_uzso8f.webp ',
            title: '',
            description:
                'Gold sconces with cascading crystals',
        },
        {
            id: 4,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785421/19_ymupwm_fycjwx.webp ',
            title: '',
            description:
                'A gold wall sconce with a clear, curved glass shade',
        },
        {
            id: 5,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785382/2_l11apq_zrzr2v.webp ',
            title: '',
            description:
                'Brass wall sconces with two white glass globes',
        },
        {
            id: 6,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785423/20_qcvhqq_zumimo.webp ',
            title: '',
            description:
                'Modern LED rectangular wall sconce with metal frame and acrylic shade',
        },
        {
            id: 7,
            imageUrl:
                'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785390/5_ppnhwy_sn2by6.webp',
            title: '',
            description:
                'A clear glass brass wall sconce',
        },
    ];

    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    };
   
    return (
        <>



            <Helmet>

                <title>Top Wall Light Designs in Gurugram | Adhunik Decodive</title>

                <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Discover the best wall light designs in Gurugram with Adhunik Decodive. Explore stylish, artistic, and modern wall lights to enhance your home decor. Free consultation!" />

                <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
                <link rel="canonical" href="https://adhunikdecodive.com/wall-lights" data-react-helmet="true" />

                <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
                <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
                <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Top Wall Light Designs in Gurugram | Adhunik Decodive" />
                <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="wall light designs, best wall lights in Gurugram, stylish home decor, decorative wall lights, modern lighting designs, custom wall lights Gurugram, home decor accessories, Adhunik Decodive wall lights, artistic interior lighting Gurugram" />
                <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
                <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
                <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
                <link data-n-head="ssr" rel="preconnect" href="http://cdn12.lemnisk.co"></link>
                <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Discover the best wall light designs in Gurugram with Adhunik Decodive. Explore stylish, artistic, and modern wall lights to enhance your home decor. Free consultation!" />

                <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/wall-light-designs"></meta>
                <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Home Decor Experts" />
                <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Top Wall Light Designs in Gurugram | Adhunik Decodive" />
                <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Discover the best wall light designs in Gurugram with Adhunik Decodive. Explore stylish, artistic, and modern wall lights to enhance your home decor. Free consultation!" />


            </Helmet>



            <ModalNew isOpen={openModal} onClose={toggleModal} />

            <div className="w-full bg-white p-5 svg3 "  >

                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <p className="text-5xl font-semibold p-9">
                            Wall Light  Designs
                        </p>
                    </div>
                </div>

                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <div className="border border-r-8 h-[50%] my-auto w-[10px] border-orange-600"></div>
                        <p className="text-1xl w-[75%] font-semibold p-9  rounded-lg mb-2">
                            Adorn your walls with the luminous touch of adhunik deco dive exquisite wall sconces and lamps.  These versatile fixtures transcend mere functionality, transforming your space into a haven of sophisticated style.  Whether your taste leans towards the timeless elegance of classic sconces or the crisp lines of modern minimalism, adhunik deco dive boasts a diverse collection to seamlessly integrate with your existing décor.  Beyond simply casting light, these wall accents weave a tapestry of warmth and invitation, drawing the eye to your treasured artwork or architectural details.  Embark on a journey through our expansive collection and discover the perfect wall lamps to elevate the ambiance and visual depth of every room in your home.
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
                                    <button onClick={toggleModal} className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
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
                                <button onClick={toggleModal} className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
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
                                    <button onClick={toggleModal} className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
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

export default WallLightDecor