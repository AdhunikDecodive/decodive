import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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
        { src: 'https://www.hindwareappliances.com/wp-content/uploads/2024/06/BLDC-motor.png', alt: 'pics', width: 120, height: 120 },
        { src: 'https://www.hindwareappliances.com/wp-content/uploads/2024/06/BLDC-motor.png', alt: 'pics', width: 120, height: 120 },
        { src: 'https://www.hindwareappliances.com/wp-content/uploads/2024/06/BLDC-motor.png', alt: 'pics', width: 120, height: 120 },
        { src: 'https://www.hindwareappliances.com/wp-content/uploads/2024/06/BLDC-motor.png', alt: 'pics', width: 120, height: 120 },
        { src: 'https://www.hindwareappliances.com/wp-content/uploads/2019/04/THERMAL-AUTO-CLEAN.png', alt: 'pics', width: 150, height: 150 }, // Custom size
        { src: 'https://www.hindwareappliances.com/wp-content/uploads/2018/06/Metal-Blower.png', alt: 'pics', width: 220, height: 220 }, // Custom size
        { src: 'https://www.hindwareappliances.com/wp-content/uploads/2018/06/Metal-Blower.png', alt: 'pics', width: 220, height: 220 }, // Custom size
        { src: 'https://www.hindwareappliances.com/wp-content/uploads/2019/09/motion-senser-1.png', alt: 'pics', width: 120, height: 120 },
        { src: 'https://www.hindwareappliances.com/wp-content/uploads/2019/09/motion-senser-1.png', alt: 'pics', width: 120, height: 120 },
        { src: 'https://www.hindwareappliances.com/wp-content/uploads/2019/09/motion-senser-1.png', alt: 'pics', width: 120, height: 120 },
    
      ];
    return (
        <>

            <div className="row mt-12">
                <h1 className=" text-4xl md:text-5xl font-sans py-3 w-full text-center text-cyan-900 capitalize">
                    Nero Chimney
                </h1>

                <div className="row flex flex-row flex-wrap-reverse  justify-evenly items-center">

                    <div className=" w-full h-full md:w-5/12 my-5  ">
                        <ImageGallery items={images3} className=" rounded-lg " alt="pics" />

                    </div>

                    <div className=" w-full h-full md:w-5/12 ">
                        <h2
                            className="font-manrope  text-3xl uppercase  font-extrabold  text-[#333333] mb-9 max-lg:text-center relative">

                            Serena Plus Grey 75 Chimney

                        </h2>
                        <div className="  max-w-4xl mx-auto p-6 bg-white shadow rounded-md">
                            <p className="text-lg font-semibold text-gray-600 mb-4">MRP: ₹70,990</p>

                            <h2 className="text-xl font-semibold text-gray-700 mb-2">Key Features</h2>
                            <ul className="text-gray-700 space-y-2 mb-6">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-blue-600 font-bold">{">"}</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700">Also Available:</h3>
                            </div>

                            <a href="/contact" className=" mr-2">
                                <h2 className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                                    Enquire Now
                                </h2>
                            </a>
                            <a href="/contact">
                                <h2 className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                                    Call Now
                                </h2>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row  hidden md:block">

<section className=' pt-4 '>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mb-4 text-center">
      <h2 className="text-4xl   text-center font-medium">Features</h2>
    </div>

    <div className="   grid justify-center gap-14  sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-5 ">
      {images6.map((image, index) => (
        <div key={index} className="flex items-center  justify-center ">
          <img src={image.src} width={image.width} height={image.height} alt={image.alt} loading='lazy' />
        <p>Energy Efficient BLDC Motor</p>
        </div>
      ))}
    </div>

  </div>
</section>

</div>
            </div>

        </>
    )
}
