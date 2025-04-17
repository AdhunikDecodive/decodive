import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import PhoneCallButton from "./PhoneCallButton";
import { useState } from "react";
import ModalNew from "./ModalNew";
import { Download } from "lucide-react";


export default function NeroChimney() {
    const images3 = [
        {
            original: "https://www.hindwareappliances.com/wp-content/uploads/2024/07/Serana-plus-75grey_600x600px-for-website3.jpg",
            thumbnail: "https://www.hindwareappliances.com/wp-content/uploads/2024/07/Serana-plus-75grey_600x600px-for-website3.jpg",
            originalAlt: "HVAC System Image",
            thumbnailAlt: "HVAC System Image",
        },
        {
            original: "https://www.hindwareappliances.com/wp-content/uploads/2024/07/Serana-plus-75grey_600x600px-for-website1.jpg",
            thumbnail: "https://www.hindwareappliances.com/wp-content/uploads/2024/07/Serana-plus-75grey_600x600px-for-website1.jpg",
            originalAlt: "HVAC System Image",
            thumbnailAlt: "HVAC System Image",
        },




    ];

    const features = [
        "Thermal Auto Clean Feature",
        "Max Suction – 1700 m³/hr Airflow",
        "Energy Efficient BLDC Motor",
        "Metallic Oil Collector",
        "Metallic Blower",
        "Filterless Technology",
        "Touch Control with Motion Sensor",
        "Energy Efficient LED Lamp",
        "Turbo Speed Option",
        "INCLINED Wall Mounted Chimney",
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
          subtitle: '1700 m3/hr',
        },
      ];
      

    const technicalDetails = [
        { label: "Maximum Suction", value: "1700 m3/hr" },
        { label: "Speed", value: "11" },
        { label: "Filter Type", value: "Filterless Technology" },
        { label: "Controls", value: "Touch Control & Motion Sensor" },
        { label: "Motion Sensor", value: "Yes" },
        { label: "Remote", value: "Yes" },
        { label: "Oil Collector cup", value: "Yes" },
        { label: "Motor Power (in W)", value: "190 W" },
        { label: "Dimensions (LxWxH) in mm", value: "747 X 433 X 560 mm" },
        { label: "Lamp", value: "Led Lamp - 2 X 1.5W" },
        { label: "Voltage", value: "220-240V/50Hz" },
        { label: "Warranty", value: "3 year Comprehensive, 12 Years on Motor" },
        {
            label: "Package Inclusions", value: "1 Cooker hood, 1 User Manual, Fixture materials, 1 Duct Holder, 1 Duct Pipe",
        },
    ];

    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    const firstTable = technicalDetails.slice(0, 7);
    const secondTable = technicalDetails.slice(7);

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
          ariaLabel: "Download User manuals document in new tab",
          link: "/pdfs/user-manual.pdf", // Path to your PDF
          filename: "User-Manual.pdf",
        },
        {
          title: "Product Specification Sheet",
          ariaLabel: "Download Product Specification Sheet document in new tab",
          link: "/pdfs/spec-sheet.pdf",
          filename: "Product-Specification.pdf",
        },
        {
          title: "Installation Instruction",
          ariaLabel: "Download Installation Instruction document in new tab",
          link: "/pdfs/installation-guide.pdf",
          filename: "Installation-Instruction.pdf",
        },
      ];
      

    return (
        <>
            <ModalNew isOpen={openModal} onClose={toggleModal} />


            <div className="row mt-12">
                <h1 className=" text-4xl md:text-5xl font-sans py-3 w-full text-center text-cyan-900 capitalize">
                    Nero Chimney
                </h1>

                <div className="row flex flex-row flex-wrap  justify-evenly items-center">

                    <div className=" w-full h-full md:w-5/12 my-5 mx-2  px-6  border-[1px] rounded-3xl  ">
                        <ImageGallery items={images3} className=" rounded-lg " alt="pics" />

                    </div>

                    <div className=" w-full h-full md:w-5/12 ">
                        <h2
                            className="font-manrope  text-3xl uppercase  font-extrabold  text-[#333333] mb-9 max-lg:text-center relative">

                            Serena Plus Grey 75 Chimney

                        </h2>
                        <div className=" text-center md:text-left  max-w-4xl mx-auto   px-5 md:p-6 bg-white shadow rounded-md">
                            <p className="text-lg font-semibold text-gray-600 mb-4">MRP: ₹70,990</p>

                            <h2 className="text-xl font-bold text-gray-700  mb-2">Key Features</h2>
                            <ul className="text-gray-700 space-y-2 mb-6">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-start  gap-2">
                                        <span className="text-blue-600 font-bold">{">"}</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

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
