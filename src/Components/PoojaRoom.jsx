import Footer from "./Footer";
import "./LShapeKitchen.css";

import PhoneCallButton from "./PhoneCallButton";

import ModalNew from "./ModalNew";
import { useState } from "react";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { Helmet } from "react-helmet-async";

function TVUnitPanels() {
  const cld = new Cloudinary({ cloud: { cloudName: "dwhmfz63n" } });

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const PcardData = [
    {
      id: 1,
      imageUrl: "Others/PoojaRoom/7_jys5nh",
      title: "",
      description:
        "Modern spiritual space with lord Ganesha statue on wooden platform, complemented by floral wallpaper in calming yellow and orange hues and small LED lights for added ambiance. ",
    },
    {
      id: 2,
      imageUrl: "Others/PoojaRoom/8_aspurm",
      title: "",
      description:
        "Modern  Spiritual Space  with white walls and light wood furniture create a sense of serenity and a minimalist aesthetic. Geometric shelves flank the statue, displaying puja essentials.",
    },
    {
      id: 3,
      imageUrl: "Others/PoojaRoom/9_yqhpue",
      title: "",
      description:
        "Traditional  Spiritual Space  design with a krishna statue made up of a wooden mandir unit with a marble platform and gold accents. Decorative lighting and floral garlands adorn the mandir.",
    },
    {
      id: 4,
      imageUrl: "Others/PoojaRoom/10_mmj9ai",
      title: "",
      description:
        "Modern  Spiritual Space  with a ganesha statue on a white pedestal with multicolored mandala design",
    },
    {
      id: 5,
      imageUrl: "Others/PoojaRoom/11_dxgfcl",
      title: "",
      description:
        "Modern  Spiritual Space  with light colors, clean lines, and a krishna statue. Peacock feather pattern on back wall adds a touch of tradition.",
    },
    {
      id: 6,
      imageUrl: "Others/PoojaRoom/12_kbmynx",
      title: "",
      description:
        "Modern  Spiritual Space  with a conch shell door. The room features a white color palette with wooden accents.",
    },
    {
      id: 7,
      imageUrl: "Others/PoojaRoom/14_ofrqxh",
      title: "",
      description:
        "A modern hindu  Spiritual Space  featuring a central circular wooden temple. The mandir’s dark wood contrasts with the light walls, creating a visually striking focal point.",
    },

    // Add more card objects as needed
  ];
  const P2cardData = [
    {
      id: 1,
      imageUrl: "Others/PoojaRoom/16_keoh3t",
      title: "",
      description:
        "Modern  Spiritual Space  with a ganesha statue on a marble platform in front of a lotus flower wall mural and rich brown drawers",
    },
    {
      id: 2,
      imageUrl: "Others/PoojaRoom/18_b1auhi",
      title: "",
      description:
        "Modern  Spiritual Space  featuring a statue on a simple wooden table. The backdrop features a floral om symbol design in soft colors",
    },
    {
      id: 3,
      imageUrl: "Others/PoojaRoom/poojaroom_tv7huq",
      title: "",
      description:
        "A serene space with soft lighting, and neutral tones creates a calming atmosphere for prayer and meditation in contemporary homes.",
    },
    {
      id: 4,
      imageUrl: "Others/PoojaRoom/poojamandir_ktbnvo",
      title: "",
      description:
        "Elegant  Spiritual Space  design: golden statue on marble altar with sophisticated floral pattern. Traditional elements meet modern twist.",
    },
    {
      id: 5,
      imageUrl: "Others/PoojaRoom/20_yg61hp",
      title: "",
      description:
        "A wooden temple with antique brass bells and a walnut pu finish, and could be a beautiful addition to a  Spiritual Space .",
    },
    {
      id: 6,
      imageUrl: "Others/PoojaRoom/6_zkboih",
      title: "",
      description:
        "Contemporary  Spiritual Space  features a recessed niche with warm led lighting for simplicity and serenity.",
    },
    {
      id: 7,
      imageUrl: "Others/PoojaRoom/23_j3g1en",
      title: "",
      description:
        "The  Spiritual Space  design features a modern wooden cabinet with drawers and a bell for a touch of elegance.",
    },
  ];

  return (
    <>



<Helmet>
  <title>Spiritual Space Designs</title>

  
  <link rel="canonical" href="https://adhunikdecodive.com/PoojaRoom" data-react-helmet="true"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>

</Helmet>

      <ModalNew isOpen={openModal} onClose={toggleModal} />

      <div className="w-screen bg-white p-3 md:p-5 svg11 ">
        <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <p className="text-5xl font-semibold p-3 md:p-9">
              Spiritual Space Designs
            </p>
          </div>
        </div>

        <div className="row justify-around flex">
          <div className="w-[80%] flex">
            <div className="border border-r-4 md:border-r-8 h-[50%] my-auto w-[10px]  border-orange-600"></div>
            <p className="text-1xl md:w-[70%] font-semibold md:p-9  p-2 text-justify   rounded-lg mb-2">
              Spiritual Space design: create a serene and spiritual space for
              prayer and reflection. Spiritual Space s are a sacred space for
              many homeowners. Here we'll guide you through creating a beautiful
              and functional Spiritual Space . There are many design elements to
              consider, from calming color schemes to beautiful lighting and
              purposeful murti placement. Explore the design elements that will
              inspire your daily practice.
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
                  style={
                    card.unique
                      ? { objectFit: "fill", objectPosition: "100% 37%" }
                      : {}
                  }
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
<span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease text-[14px]"> Get Free Quote</span>
</button>
                </div>
              </div>
            </div>
          ))}

          <div className="  max-w-md w-full mx-auto my-auto h-[50vh]  text-white  bg-gradient-to-r from-[#41303e]  to-[#815379] bg-[ ,] shadow-md rounded-xl overflow-hidden">
            <div className=" pt-14">
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
                <button
                  onClick={toggleModal}
                  className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                >
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
                  style={
                    card.unique
                      ? { objectFit: "fill", objectPosition: "100% 37%" }
                      : {}
                  }
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
  );
}

export default TVUnitPanels;
