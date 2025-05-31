

import "./LShapeKitchen.css"

import PhoneCallButton from "./PhoneCallButton";

 
import { AdvancedImage } from '@cloudinary/react';

import ModalNew from './ModalNew';
import { useState } from "react";
import { Helmet } from "react-helmet-async";


function OutDoorLightDecor() {

   
    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
      };

    const PcardData = [
        {
            id: 1,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785108/7_urecra_q7irb3.webp ',
            title: '',
            description:
                'Simple modern aesthetic outdoor lighting ',
        },
        {
            id: 2,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785104/1_msuj84_xtc9wt.webp',
            title: '',
            description:
                ' Black and white rectangular outdoor wall light',
        },
        {
            id: 3,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785112/9_g6uqpr_pv7w4i.webp ',
            title: '',
            description:
                'Vintage-style solar wall lights',
        },
        {
            id: 4,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785113/10_kekg3j_kx4bgd.webp',
            title: '',
            description:
                'A modern minimalist outdoor wall lamp',
        },
        {
            id: 5,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785117/12_bjvrbp_asiwdz.webp ',
            title: '',
            description:
                'Modern Up and Down Wall Lights.',
        },
        {
            id: 6,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785121/14_tknccw_zkaezr.webp',
            title: '',
            description:
                'Outdoor Lighting Gate Pillar Post Lighting collection',
        },
        {
            id: 7,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785123/15_kjs78t_oxppcl.webp ',
            title: '',
            description:
                'Fence with three illuminated white globes.',
        },

        // Add more card objects as needed
    ];


    const P2cardData = [
        {
            id: 1,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785128/18_qhzpnq_n5a6zr.webp ',
            title: '',
            description:
                'Pair of modern disc-shaped outdoor sconces with a petal effect.',
        },
        {
            id: 2,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785115/11_d8hqf7_llfwpj.webp ',
            title: '',
            description:
                'sleek and contemporary outdoor lamp',
        },
        {
            id: 3,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785105/4_m75v5c_i8t7u1.webp ',
            title: '',
            description:
                'modern cylindrical outdoor wall lights',
        },
        {
            id: 4,
            imageUrl:
            ' https://res.cloudinary.com/dq14b7xie/image/upload/v1746785119/13_uqhjvu_tfyzfx.webp',
            title: '',
            description:
                'Square LED Outdoor Wall Lights',
        },
        {
            id: 5,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785106/6_rmee7i_djlr5j.webp ',
            title: '',
            description:
                'white metal gate light',
        },
        {
            id: 6,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785125/16_ez6f0g_oexyl6.webp',
            title: '',
            description:
                'led square pillar light gate lamp',
        },
        {
            id: 7,
            imageUrl:
            'https://res.cloudinary.com/dq14b7xie/image/upload/v1746785126/17_gwk9lb_mrhap1.webp',
            title: '',
            description:
                'Black, modern solar fence post light',
        },
    ];

    return (
        <>
        

    

<Helmet>
<title>Outdoor Lights @Upto 70% Off | Buy Outdoor Light | Adhunik Decodive</title>

<meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Discover the best outdoor light designs in Gurugram with Adhunik Decodive. Explore stylish, artistic, and modern outdoor lighting solutions to enhance your exterior decor. Free consultation!" />

<meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
<link rel="canonical" href="https://adhunikdecodive.com/outdoor-lights" data-react-helmet="true"/>
<meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
<meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
<meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Top Outdoor Light Designs in Gurugram | Adhunik Decodive" />
<meta data-n-head="ssr" data-hid="keywords" name="keywords" content="outdoor light designs, best outdoor lights in Gurugram, stylish exterior decor, decorative outdoor lighting, modern lighting designs, custom outdoor lights Gurugram, home exterior accessories, Adhunik Decodive outdoor lights, artistic exterior lighting Gurugram" />
<meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
<meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
<meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
<link data-n-head="ssr" rel="preconnect" href="http://cdn12.lemnisk.co"></link>
<meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Discover the best outdoor light designs in Gurugram with Adhunik Decodive. Explore stylish, artistic, and modern outdoor lighting solutions to enhance your exterior decor. Free consultation!" />
<meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/outdoor-light-designs"></meta>
<meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Home Decor Experts" />
<meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Top Outdoor Light Designs in Gurugram | Adhunik Decodive" />
<meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Discover the best outdoor light designs in Gurugram with Adhunik Decodive. Explore stylish, artistic, and modern outdoor lighting solutions to enhance your exterior decor. Free consultation!" />

</Helmet>


<ModalNew  isOpen={openModal} onClose={toggleModal}  />
    
            <div className="w-full bg-white p-5 svg3 "  >

                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <p className="text-5xl font-semibold p-9">

                       Outdoor Lights

</p>
                    </div>
                </div>

                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <div className="border border-r-8 h-[50%] my-auto w-[10px] border-orange-600"></div>
                        <p className="text-1xl w-[75%] font-semibold p-9  rounded-lg mb-2">
                        Transform your outdoor space from functional to fabulous with Adhunik Deco Dive's stunning selection of outdoor lights! Whether you're seeking timeless elegance with classic gate lights or a touch of modern flair with sleek hanging fixtures, we offer a diverse range of styles to illuminate and elevate your home's exterior. From enhancing curb appeal and providing safety to creating a warm and inviting atmosphere for outdoor entertaining, Adhunik Deco Dive has the perfect outdoor lighting solution to bring your vision to life.
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

export default OutDoorLightDecor