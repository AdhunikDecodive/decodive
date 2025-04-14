
import "./LShapeKitchen.css"
import { useState } from "react";
import PhoneCallButton from "./PhoneCallButton";
import ModalNew from "./ModalNew";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { Helmet } from "react-helmet-async";





function UshapeKitchen() {

    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
      };

    const PcardData = [
        {
            id: 1,
            imageUrl:
                'Kitchen/UsKitchen/1_xo3ogy',
            title: '',
            description:
                'U-shaped layout in a luxurious blue and silver palette. Spacious blue cabinets ensure ample storage,organized countertop appliance placement',
        },
        {
            id: 2,
            imageUrl:
            'Kitchen/UsKitchen/2_cvjbul',
            title: '',
            description:
                'Parrot green laminated wooden cabinets contrast with quartz white countertops, for refreshing and  inviting U-shaped kitchen',
        },
        {
            id: 3,
            imageUrl:
            'Kitchen/UsKitchen/3_vfdzhh',
            title: '',
            description:
                'Vintage U-shaped kitchen features white lacquered wood cabinets for a bright and airy feel, complemented by a warm wooden countertop',
        },
        {
            id: 4,
            imageUrl:
            'Kitchen/UsKitchen/4_hcgvmg',
            title: '',
            description:
                'Modern U-shaped kitchen with its sleek blue laminated cabinets and crisp white quartz countertops. perfectly suited for contemporary kitchen design',
        },
        {
            id: 5,
            imageUrl:
            'Kitchen/UsKitchen/5_rw6gcq',
            title: '',
            description:
                'Stunning U-shaped kitchen in European style with blue marine plywood cabinets with crisp white countertops. Perfect for a contemporary kitchen',
        },
        {
            id: 6,
            imageUrl:
            'Kitchen/UsKitchen/6_gprga6',
            title: '',
            description:
                'U-shaped kitchens shine with olive green laminate cabinets. Durable, affordable, and easy to clean, they complement various styles with a natural touch.',
        },
        {
            id: 7,
            imageUrl:
            'Kitchen/UsKitchen/7_yvnznr',
            title: '',
            description:
                'U-shaped kitchen layout features modern, matte-finished wooden cabinets, for practicality and sleek design in a compact space',
        },

        // Add more card objects as needed
    ];
    const P2cardData = [
        {
            id: 1,
            imageUrl:
            'Kitchen/UsKitchen/8_avclus',
            title: '',
            description:
                'Modern U-shaped kitchen with refined aesthetics. Brushed stainless steel cabinets add a classy touch',
        },
        {
            id: 2,
            imageUrl:
            'Kitchen/UsKitchen/9_rphhw6',
            title: '',
            description:
                'U-shaped kitchen layout, painted wood cabinets with glossy bright orange hue infuses modern flair, Matte black finish for modern elegance',
        },
        {
            id: 3,
            imageUrl:
            'Kitchen/UsKitchen/10_up3jjf',
            title: '',
            description:
                'U-shaped layout with white, high-gloss cabinetry.Crafted from durable materials like laminate, thermofoil, or MDF with a sleek lacquer finish',
        },
        {
            id: 4,
            imageUrl:
            'Kitchen/UsKitchen/11_nxzusj',
            title: '',
            description:
                'U-shaped kitchens boast laminated white cabinets with a high-gloss finish, prized for affordability, durability, and effortless maintenance',
        },
        {
            id: 5,
            imageUrl:
            'Kitchen/UsKitchen/12_esesyq',
            title: '',
            description:
                'Light wood tone cabinets and white marble countertops define the efficient U-shaped kitchen layout. For more efficiency & defined space',
        },
        {
            id: 6,
            imageUrl:
            'Kitchen/UsKitchen/13_isfxez',
            title: '',
            description:
                'High-gloss polyester creates sleek, modern cabinets in a vibrant orange U-shape.Paired with sleek stainless steel countertops',
        },
        {
            id: 7,
            imageUrl:
            'Kitchen/UsKitchen/14_k7z6qy',
            title: '',
            description:
                'Achieve a timeless kitchen with our U-shaped layout. Crafted from durable woodGray, wood cabinets while white quartz countertops bring a bright and airy feel.',
        },
    ];

    const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Best U-Shape Kitchen Designs in Gurugram | Spacious & Functional Layouts – Adhunik Decodive",
        "description": "Explore the latest U-shape modular kitchen designs in Gurugram by Adhunik Decodive. Perfect for spacious layouts, these kitchens offer maximum storage, seamless workflow, and premium finishes.",
        "url": "https://adhunikdecodive.com/UShapeKitchen",
        "image": "https://res.cloudinary.com/dwhmfz63n/image/upload/v1/Kitchen/UsKitchen/6_gprga6?_a=DAJAUVWIZAA0",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "CreativeWork",
                "name": "U-Shape Kitchen Design",
                "description": "Spacious and highly functional U-shaped modular kitchens, designed for maximum storage, smooth workflow, and premium aesthetics.",
                "image": "https://res.cloudinary.com/dwhmfz63n/image/upload/v1/Kitchen/UsKitchen/6_gprga6?_a=DAJAUVWIZAA0",
                "url": "https://adhunikdecodive.com/UShapeKitchen"
              }
            }
          ]
        },
        "publisher": {
          "@type": "Organization",
          "name": "Adhunik Decodive",
          "logo": {
            "@type": "ImageObject",
            "url": "https://res.cloudinary.com/dwhmfz63n/image/upload/v1/landingPage/ylzbgsu0sw6qgh5yj544?_a=DAJAUVWIZAA0"
          }
        }
      };
    
    return (
        <>




    <Helmet>

<title>Best U-Shape Modular Kitchen Designs in Gurugram | Adhunik Decodive</title>

<meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Discover the best U-shape modular kitchen designs in Gurugram with Adhunik Decodive. Stylish, space-efficient, and customized kitchen solutions for modern homes. Get a free consultation today!" />

<meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
<link rel="canonical" href="https://adhunikdecodive.com/u-shape-kitchen" data-react-helmet="true" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
<meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>

<meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Best U-Shape Modular Kitchen Designs in Gurugram | Adhunik Decodive" />
<meta data-n-head="ssr" data-hid="keywords" name="keywords" content="U-shape kitchen, modular kitchen designs, best modular kitchen in Gurugram, modern kitchen layouts, custom kitchen designs, kitchen renovation Gurugram, space-saving kitchens, Adhunik Decodive kitchen interiors" />
<meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
<meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
<meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
<link data-n-head="ssr" rel="preconnect" href="http://cdn12.lemnisk.co"></link>

<meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Upgrade your kitchen with Adhunik Decodive's best U-shape modular kitchen designs in Gurugram. Crafted for efficiency, style, and modern aesthetics. Book a free consultation today!" />

<meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/u-shape-kitchen"></meta>
<meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Modular Kitchen Experts" />
<meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Best U-Shape Modular Kitchen Designs in Gurugram | Adhunik Decodive" />
<meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Explore space-efficient and stylish U-shape modular kitchen designs in Gurugram by Adhunik Decodive. Perfect for modern homes. Get a free consultation today!" />
<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

</Helmet>
    
<ModalNew  isOpen={openModal} onClose={toggleModal}  />
     



            <div className="w-full bg-white p-3 md:p-5  svg "  >

                <div className="row justify-around flex">
                    <div className="w-[80%] flex">
                        <p className="text-5xl font-semibold  p-3 md:p-9">U-shaped kitchen</p>
                    </div>
                </div>

                <div className="row justify-around flex">

                <div className="w-[80%] flex">
                        <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
                        <p className="text-1xl md:w-full font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
                        Calling all culinary admirers! U-shaped kitchens are a dream for any home cook, presenting a huge workspace, abundance of storage, and aesthetically pleasing versatility that adapts to any area, whether it's a peaceful nook or a grand preparing meals arena. They are outstanding in terms of efficiency, with a well-defined flow between the refrigerator, sink, and stove that minimizes wasted steps. This increases storage capacity while maintaining style, allowing you to enjoy your meal in a beautiful and functional setting. However, the U-shaped kitchen is more than just efficient. These organizational havens showcase innovative features like hidden storage and large, slide-out drawers. These smart storage solutions make everything you need easily accessible, minimizing the hassle of digging through messy cabinets. What was the result? A clean, uncomplicated design that encourages tranquility and attention while cooking. This creative design maximizes storage space while maintaining flair, allowing you to enjoy cooking in a beautiful and useful setting. Imagine creating culinary wonders surrounded by sleek worktops, attractive cabinetry, and the efficient arrangement of a U-shaped kitchen - a genuine tribute to form and function. See for yourself in the images below how U-shaped kitchens come to life in their full grandeur!
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
<span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"> Get Free Quote</span>
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
<span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"> Get Free Quote</span>
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

export default UshapeKitchen