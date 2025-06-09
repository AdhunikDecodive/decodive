import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import PhoneCallButton from "./PhoneCallButton";
import { useState } from "react";
import ModalNew from "./ModalNew";
import { Download } from "lucide-react";


export default function FabiaChimney() {
  const images3 = [
    {
      original: "https://res.cloudinary.com/dq14b7xie/image/upload/v1749460588/Fabia_Chimney_wcobuy.webp",
      thumbnail: "https://res.cloudinary.com/dq14b7xie/image/upload/v1749460588/Fabia_Chimney_wcobuy.webp",
      originalAlt: "Adhunik DecoDive Nero ( 60 cm ) with BLDC motor | Filterless Autoclean Chimney with 10 year Warranty |BLACK | 1200m3/hr Suction Power",
      thumbnailAlt: "HVAC System Image",
    },
   



  ];

  const features = [
    "BLDC motor : highly efficient, saves up to 50% energy",
    "Thermal Auto Clean Feature",
    "Max Suction – 1200 m3/hr Airflow",
   "Build in Metallic Oil Collector",
   "Touch Control with Motion Sensor",
    "Metallic Blower",
    "Energy Efficient LED Lamp",
    "Turbo Speed Option",
    "Curved Glass Chimney",
    "Wall Mounted",
   
  ];

  const images6 = [
    {
      src: 'https://www.hindwareappliances.com/wp-content/uploads/2024/06/BLDC-motor.png',
      alt: 'BLDC Motor',
      width: 120,
      height: 120,
      title: 'Energy Efficient BLDC Motor',
      subtitle: 'Motor',
    },
    {
      src: 'https://www.hindwareappliances.com/wp-content/uploads/2019/04/THERMAL-AUTO-CLEAN.png',
      alt: 'Thermal Auto Clean',
      width: 120,
      height: 120,
      title: 'Thermal Auto Clean',
      subtitle: 'Cleaning System',
    },
    {
      src: 'https://www.hindwareappliances.com/wp-content/uploads/2018/06/Metal-Blower.png',
      alt: 'Metal Blower',
      width: 120,
      height: 120,
      title: 'Durable Metal Blower',
      subtitle: 'Blower',
    },
    {
      src: 'https://www.hindwareappliances.com/wp-content/uploads/2019/09/motion-senser-1.png',
      alt: 'Motion Sensor',
      width: 120,
      height: 120,
      title: 'Smart Motion Sensor',
      subtitle: 'Control',
    },
    {
      src: 'https://www.hindwareappliances.com/wp-content/uploads/2018/06/Energy-Efficient-Light.png',
      alt: 'Energy Efficient Light',
      width: 120,
      height: 120,
      title: 'LED Lighting',
      subtitle: 'Low Power Consumption',
    },
    {
      src: 'https://www.hindwareappliances.com/wp-content/uploads/2020/06/oil-collector.png',
      alt: 'Oil Collector',
      width: 120,
      height: 120,
      title: 'Oil Collector Cup',
      subtitle: 'Easy Maintenance',
    },
    {
      src: 'https://www.hindwareappliances.com/wp-content/uploads/2019/12/max-suction.png',
      alt: 'Max Suction',
      width: 120,
      height: 120,
      title: 'Maximum Suction Power',
      subtitle: '1200 m3/hr',
    },
  ];


  const technicalDetails = [
    { label: "Maximum Suction", value: "1200 m3/hr" },
    { label: "Chimney Type", value: "Curved Glass Chimney" },
    { label: "Mounted Type", value: "Wall Mounted" },

    { label: "Size", value: "  60cm (Suitable for 2-4 Burner Stove)" },
    { label: "Power Requirement", value: "220 Volts" },
    { label: "Filter Type", value: "Filterless" },
    { label: "Cleaning", value: "Auto cleaning with Metallic Oil collection tray for easy clean" },
    
    { label: "Control Type", value: "Touch Control with Motion Sensor" },
    { label: "Number of Speeds", value: "3" },
    { label: "Max noise level (dB)", value: "58" },
    { label: "Motor Type ", value: "BLDC" },
    {
      label: "Ducted" , value: "Ducting is mandatory."
    },
    {
      label: " Special Features", value : "2 LED Lamps"
    },
    {
      label : "Warranty by Adhunik ", value: "10 years on Motor and 2 years comprehensive"
    }
    ,
    {
 label:"Dimensions" , value : "42D*60W*50H in cm"
    },
    {
      label:"Brand" , value: "Adhunik DecoDive Nero "
    },
    {
      label:"Colour ", value : "Black"
    }
  


  ];

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const firstTable = technicalDetails.slice(0, 8);
  const secondTable = technicalDetails.slice(8);

  const renderTable = (data) => (
    <table className="w-full ">
      <thead className="bg-gray-100">
        <tr>
          <th className="text-left px-4 py-2 border-b border-green-300 text-white bg-green-400">Feature</th>
          <th className="text-left px-4 py-2 border-b">Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}

          >
            <td className="px-4 py-2 border-b border-green-300 font-medium bg-green-100 m-2 w-44  md:w-72">{item.label}</td>
            <td className="px-4 py-2 border-b">{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const documents = [
    {
      title: "User manuals",
      ariaLabel: "Download User manuals document",
      link: "/Adhunik-DecoDive-Chimney-user-mannual-and-terms-and-conditions-for-warranty.pdf" ,


      filename: "Adhunik-DecoDive-Chimney-user-mannual-and-terms-and-conditions-for-warranty.pdf" ,
    },

  ];


  return (
    <>
      <ModalNew isOpen={openModal} onClose={toggleModal} />


      <div className="row mt-12  ">
        <h1 className=" text-4xl md:text-5xl font-sans py-3 w-full text-center text-cyan-900 capitalize">
          Fabia Chimney
        </h1>

        <div className="row flex flex-row flex-wrap  justify-evenly items-start">

          <div className=" w-full h-full md:w-5/12 my-5 mx-2  px-6  border-[1px] rounded-3xl  ">
            <ImageGallery items={images3} className=" rounded-lg " alt="pics" />

          </div>

          <div className=" w-full h-full md:w-5/12 ">
            <h2
              className="font-manrope  text-3xl   font-extrabold  text-[#333333] mb-9 md:mb-0 max-lg:text-center relative p-4">

             Adhunik DecoDive Eco Model ( 60cm ) |
Filterless autoclean chimney with 10 years warranty |
BLACK | 1200 m3/hr Suction power

            </h2>

            <div className=" text-center md:text-left  max-w-4xl mx-auto   px-5 md:p-6 bg-white shadow rounded-md">
            
            <div className="row flex justify-around gap-9 ">
            <div className="col">
           <p className="text-lg font-semibold text-gray-600 mb-4 ">BLDC ( 60 cm ) <br /> MRP - ₹<span className=" line-through"> 11000</span> <br /> <strong className=" text-2xl" >₹ 8,500.00</strong>

</p>
           </div>

           <div className="col">
           <p className="text-2xl font-bold text-gray-700 pt-3  mb-2">Key Features</p>
              <ul className="text-gray-700 space-y-2 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start  gap-2">
                    <span className="text-blue-600 font-bold">{">"}</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
           </div>
            </div>
          

              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-700">Also Available:</h3>
              </div>

              <div className="flex ">
                <PhoneCallButton />
                <button onClick={toggleModal} className="relative px-5 py-3 overflow-hidden font-medium group-hover:bg-green-500 text-gray-700 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">





                  <span className="relative transition-colors duration-300 delay-200   group-hover:text-green-600 ease"> Get Free Quote</span>
                </button>
              </div>

            </div>
          </div>
        </div>



        <div className="row ">

          <section className='   py-14'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-4 text-center">
                <h2 className="text-4xl   text-center font-medium">Features</h2>
              </div>


              <div className="   grid justify-center gap-14  sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-5 ">
                {images6.map((image, index) => (
                  <div key={index} className="flex flex-col items-center  justify-center ">
                    <img src={image.src} width={image.width} height={image.height} alt={image.alt} loading='lazy' />
                    <p className="font-medium text-sm">{image.title}</p>
                    <p className="text-gray-500 text-xs">{image.subtitle}</p>
                  </div>
                ))}
              </div>

            </div>
          </section>

        </div>



        <section className='   md:px-14'>

          <div className="text-center pt-8">
            <h2 className="text-4xl   text-center font-medium">Technical Details</h2>
          </div>

          <div className="flex flex-col lg:flex-row  items-start justify-center px-4 py-8">
            <div className="w-full max-w-4xl ">{renderTable(firstTable)}</div>
            <div className="w-full max-w-4xl">{renderTable(secondTable)}</div>
          </div>
        </section>


        <section className="py-10 px-4 max-w-7xl mx-auto" data-testid="manual-documents-and-helpful-links">
          <div data-testid="section-component-wrapper">
            <div className="mb-6">
              <h2
                tabIndex={-1}
                data-testid="section-component-wrapper-headline"
                className="text-2xl font-semibold text-gray-800"
              >
                Manual and Documents
              </h2>
            </div>
            <div data-testid="section-component-wrapper-content">
              <div
                data-testid="document-list"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {documents.map((doc, index) => (
                  <a
                    key={index}
                    href={doc.link}
                    download={doc.filename}
                    aria-label={doc.ariaLabel}
                    className="flex items-center justify-between bg-white shadow border rounded-lg p-4 hover:shadow-md transition"
                    data-testid="document-list-link"
                  >
                    <h3 className="text-base font-medium text-gray-700">{doc.title}</h3>
                    <Download className="w-5 h-5 text-gray-600" />
                  </a>
                ))}

              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}
