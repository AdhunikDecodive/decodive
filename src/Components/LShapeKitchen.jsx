import Footer from "./Footer";
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
      imageUrl: 'Kitchen/LsKitchen/7_akynan',
      title: "",
      description:
        "Two tone design light wood laminate cabinets with vibrant blue accents for a stylish, trendy look",
    },
    {
      id: 2,
      imageUrl: 'Kitchen/LsKitchen/8_ohp7fb',
      title: "",
      description:
        "L-shaped kitchen in warm brown wood with white countertops offers bright, efficient workspace",
    },
    {
      id: 3,
      imageUrl: 'Kitchen/LsKitchen/12_cc9sti',
      title: "",
      description:
        "Light gray color cabinets with a smooth surface and chrome pulls with white countertop for sleek look",
    },
    {
      id: 4,
      imageUrl: 'Kitchen/LsKitchen/3_z9eejg',
      title: "",
      description:
        "Contemporary L-shaped kitchen with high-gloss acrylic cabinets radiates elegance and flair.",
    },
    {
      id: 5,
      imageUrl: 'Kitchen/LsKitchen/11_p6lzqj',
      title: "",
      description:
        "Warm wooden cabinets with horizontal wood grain, bronze pulls, dark stone countertops for cozy, stylish kitchen",
    },
    {
      id: 6,
      imageUrl: 'Kitchen/LsKitchen/18_11zon_yw3p2v',
      title: "",
      description:
        "Contemporary L-shaped kitchen design, with sleek look. Light-colored wood with a grain pattern",
    },
    {
      id: 7,
      imageUrl: 'Kitchen/LsKitchen/13_wsxklp',
      title: "",
      description:
        "Modern L shaped Modular Kitchen Design with Gray Cabinets and Marble Countertop for sleek look ",
    },

    // Add more card objects as needed
  ];

  const P2cardData = [
    {
      id: 1,
      imageUrl: 'Kitchen/LsKitchen/14_r5k0zx',
      title: "",
      description:
        "Sleek white cabinets with crisp look L-layout kitchen and integrated appliances for a clean, spacious feel.",
    },
    {
      id: 2,
      imageUrl: 'Kitchen/LsKitchen/15_vznwfm',
      title: "",
      description:
        "L-shaped kitchens with Quartz or white granite for a sleek, modern look for a beautiful home efficient",
    },
    {
      id: 3,
      imageUrl: 'Kitchen/LsKitchen/16_yhgis8',
      title: "",
      description:
        "Light wood cabinets with warm glow. Modern aesthetic topped with cool white marble countertops",
    },
    {
      id: 4,
      imageUrl: 'Kitchen/LsKitchen/17_btpbi0',
      title: "",
      description:
        "Light gray wood cabinets, white veined counters and classic subway tiles create a warm and luxurious L-shaped space",
    },
    {
      id: 5,
      imageUrl: 'Kitchen/LsKitchen/2_clubfh',
      title: "",
      description:
        "L-shaped kitchen with two-toned crisp white upper cabinets and blue lowers add pop. Optimizes space, creates a modern look.",
    },
    {
      id: 6,
      imageUrl: 'Kitchen/LsKitchen/19_q0s6nb',
      title: "",
      description:
        "L-shaped kitchen with white cabinets and brown countertops. Classic combination .durable and affordable.",
    },
    {
      id: 7,
      imageUrl: 'Kitchen/LsKitchen/20_11zon_jcby5h',
      title: "",
      description:
        "L-shaped kitchen with white cabinets and brown countertops. Classic combination .durable and affordable",
    },
  ];

  const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });



  return (
    <>

 <Helmet>
  <title>L-shaped kitchen</title>


  <link rel="canonical" href="https://adhunikdecodive.com/LShapeKitchen" data-react-helmet="true"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>

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
              cldImg={cld.image(card.imageUrl)} // Assuming `imageUrl` contains the Cloudinary image identifier
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
              cldImg={cld.image(card.imageUrl)} // Assuming `imageUrl` contains the Cloudinary image identifier
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

      <Footer />
    </>
  );
}

export default LShapeKitchen;
