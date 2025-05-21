
import "./LShapeKitchen.css";

import PhoneCallButton from "./PhoneCallButton";
import { useState } from "react";
import ModalNew from "./ModalNew";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

import { Helmet } from "react-helmet-async";





function LShapeKitchen() {

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
      setOpenModal(!openModal);
    };


  const PcardData = [
    {
      id: 1,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786210/7_akynan_g3twto.webp',
      title: "",
      description:
        "Two tone design light wood laminate cabinets with vibrant blue accents for a stylish, trendy look",
    },
    {
      id: 2,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786212/8_ohp7fb_bdvpnc.webp',
      title: "",
      description:
        "L-shaped kitchen in warm brown wood with white countertops offers bright, efficient workspace",
    },
    {
      id: 3,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786223/12_cc9sti_o2fy4a.webp',
      title: "",
      description:
        "Light gray color cabinets with a smooth surface and chrome pulls with white countertop for sleek look",
    },
    {
      id: 4,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786199/3_z9eejg_rhhask.webp',
      title: "",
      description:
        "Contemporary L-shaped kitchen with high-gloss acrylic cabinets radiates elegance and flair.",
    },
    {
      id: 5,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786220/11_p6lzqj_k57ct5.webp',
      title: "",
      description:
        "Warm wooden cabinets with horizontal wood grain, bronze pulls, dark stone countertops for cozy, stylish kitchen",
    },
    {
      id: 6,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786238/18_11zon_yw3p2v_vcy4l3.webp',
      title: "",
      description:
        "Contemporary L-shaped kitchen design, with sleek look. Light-colored wood with a grain pattern",
    },
    {
      id: 7,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786225/13_wsxklp_mjyndq.webp',
      title: "",
      description:
        "Modern L shaped Modular Kitchen Design with Gray Cabinets and Marble Countertop for sleek look ",
    },

    // Add more card objects as needed
  ];

  const P2cardData = [
    {
      id: 1,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786227/14_r5k0zx_ngl40s.webp',
      title: "",
      description:
        "Sleek white cabinets with crisp look L-layout kitchen and integrated appliances for a clean, spacious feel.",
    },
    {
      id: 2,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786230/15_vznwfm_daa7cl.webp',
      title: "",
      description:
        "L-shaped kitchens with Quartz or white granite for a sleek, modern look for a beautiful home efficient",
    },
    {
      id: 3,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786233/16_yhgis8_ngkwud.webp',
      title: "",
      description:
        "Light wood cabinets with warm glow. Modern aesthetic topped with cool white marble countertops",
    },
    {
      id: 4,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786235/17_btpbi0_aouwcb.webp',
      title: "",
      description:
        "Light gray wood cabinets, white veined counters and classic subway tiles create a warm and luxurious L-shaped space",
    },
    {
      id: 5,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786197/2_clubfh_xtysnw.webp',
      title: "",
      description:
        "L-shaped kitchen with two-toned crisp white upper cabinets and blue lowers add pop. Optimizes space, creates a modern look.",
    },
    {
      id: 6,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786240/19_q0s6nb_tw2upf.webp',
      title: "",
      description:
        "L-shaped kitchen with white cabinets and brown countertops. Classic combination .durable and affordable.",
    },
    {
      id: 7,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746786243/20_11zon_jcby5h_yfhlb4.webp',
      title: "",
      description:
        "L-shaped kitchen with white cabinets and brown countertops. Classic combination .durable and affordable",
    },
  ];

  const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });


  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "L-Shape Kitchen Designs in Gurugram | Stylish & Space-Saving Layouts – Adhunik Decodive",
    "description": "Discover the best L-shape modular kitchen designs in Gurugram with Adhunik Decodive. Designed for functionality and style, L-shaped kitchens maximize space and efficiency for modern homes.",
    "url": "https://adhunikdecodive.com/l-shape-modular-kitchen-design",
    "image": "https://res.cloudinary.com/dwhmfz63n/image/upload/v1/Kitchen/LsKitchen/3_z9eejg?_a=DAJAUVWIZAA0",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "CreativeWork",
            "name": "L-Shape Kitchen Design",
            "description": "Efficient and space-saving L-shaped modular kitchens, perfect for small to medium spaces. Customizable with high-quality finishes and smart storage solutions.",
            "image": "https://res.cloudinary.com/dwhmfz63n/image/upload/v1/Kitchen/LsKitchen/3_z9eejg?_a=DAJAUVWIZAA0",
            "url": "https://adhunikdecodive.com/l-shape-modular-kitchen-design"
          }
        }
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Adhunik Decodive",
      "logo": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/dq14b7xie/image/upload/v1747811688/Adhunik_DecoDive_Logo_povt7l.webp"
      }
    }
  };
  return (
    <>


     
    <Helmet>

<title>Best L-Shape Modular Kitchen Designs in Gurugram | Adhunik Decodive</title>

<meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Discover the best L-shape modular kitchen designs in Gurugram with Adhunik Decodive. Stylish, space-efficient, and customized kitchen solutions for modern homes. Get a free consultation today!" />

<meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
<link rel="canonical" href="https://adhunikdecodive.com/l-shape-kitchen" data-react-helmet="true" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
<meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>

<meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Best L-Shape Modular Kitchen Designs in Gurugram | Adhunik Decodive" />
<meta data-n-head="ssr" data-hid="keywords" name="keywords" content="L-shape kitchen, modular kitchen designs, best modular kitchen in Gurugram, modern kitchen layouts, custom kitchen designs, kitchen renovation Gurugram, space-saving kitchens, Adhunik Decodive kitchen interiors" />
<meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
<meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
<meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
<link data-n-head="ssr" rel="preconnect" href="http://cdn12.lemnisk.co"></link>

<meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Upgrade your kitchen with Adhunik Decodive's best L-shape modular kitchen designs in Gurugram. Crafted for efficiency, style, and modern aesthetics. Book a free consultation today!" />

<meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/l-shape-kitchen"></meta>
<meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Modular Kitchen Experts" />
<meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Best L-Shape Modular Kitchen Designs in Gurugram | Adhunik Decodive" />
<meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Explore space-efficient and stylish L-shape modular kitchen designs in Gurugram by Adhunik Decodive. Perfect for modern homes. Get a free consultation today!" />
<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

</Helmet>

<ModalNew  isOpen={openModal} onClose={toggleModal}  />
     

      <div className="w-full bg-white p-3 md:p-5 svg ">
        <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <p className="text-5xl font-semibold p-3 md:p-9">
              L-shaped kitchen
            </p>
          </div>
        </div>

        <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
            <p className="text-1xl md:w-[70%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
              With unlimited versatility, L-shaped kitchens can perfectly fit in
              any space. Designed for maximum functionality, the layout makes
              the three of the sink, range, and refrigerator form into an
              L-shaped work triangle. Now you can easily move between these
              areas while preparing meals. One of the advantages of L-shaped
              kitchens is space maximization. In addition to the units
              themselves, small touches can be added to keep everything
              organized and in its place. This includes clever features such as
              sliding drawers and pocket doors. You can keep utensils organized
              and groceries tidied and out of sight for a sleek, streamlined
              appearance. See for yourself in the images how L-shaped kitchens
              come to life in all their glory!
            </p>
          </div>
        </div>

        <div className=" w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {PcardData.map((card) => (
        <div
          key={card.id}
          className="max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
        >
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
            <h2 className="text-base font-medium text-blue-gray-900 mb-2">
              {card.title}
            </h2>
            <p className="text-sm text-gray-700 opacity-75 leading-normal mb-4">
              {card.description}
            </p>
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
            <div className="    pt-14">
              <div className="text-center p-5">
                <h1 className="text-base font-light text-blue-gray-900 mb-2">
                  {" "}
                  Kitchen Designs With
                </h1>
                <p className="text-2xl font-bold  leading-normal mb-4">
                  High Quality Materials
                </p>
                <p>
                  Starting <br /> <span className=" text-3xl">₹50,000</span>
                </p>
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
            <div
              key={card.id}
              className="max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
            >
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
                <h2 className="text-base font-medium text-blue-gray-900 mb-2">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-700 opacity-75 leading-normal mb-4">
                  {card.description}
                </p>
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
  );
}

export default LShapeKitchen;
