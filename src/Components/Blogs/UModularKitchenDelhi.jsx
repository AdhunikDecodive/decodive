import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Check,
  LucidePhone,
  LucideMail,
  LucideGlobe,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBoxes,
  FaBoxOpen,
  FaChair,
  FaExpandAlt,
  FaGem,
  FaProjectDiagram,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

// --- Google Fonts Import ---
const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Manrope:wght@400;700&display=swap');
  `}</style>
);

// --- Animation Variants ---
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// --- Data for Sections ---
const heroContent = {
  headline:
    "The Ultimate Guide to U-Shape Modular Kitchen Designs: Maximize Efficiency and Elegance in Your Delhi NCR Home",
  subheadline:
    <>
        <div>
           <strong>Dreaming of a kitchen that offers unparalleled efficiency, abundant storage, and a sophisticated aesthetic ?</strong> The U-shape modular kitchen design stands as a powerhouse of functionality and style, creating an immersive and highly practical cooking environment. For discerning homeowners in Delhi and Gurugram, a U-shape kitchen by Adhunik Decodive offers the perfect blend of luxury and utility, transforming your culinary space into the true heart of your home.


           <p>
     This comprehensive guide will explore the magic of U-shape modular kitchens, helping you understand why they might be the ideal choice for your home.

           </p>

        </div>
    </>,
  ctaText: "Explore Our Philosophy",
  image:
    "https://res.cloudinary.com/dq14b7xie/image/upload/v1746786546/8_avclus_mg44dp.webp",
};

 
const benefits = [
  {
    icon: <FaExpandAlt className="text-3xl text-orange-600" />,
    title: "Understanding the Investment: U-Shape Modular Kitchen Costs in Delhi & Gurugram",
    description:
        <>
        <div>
        <p className=" text-sm pb-3">
     The cost of a U-shape modular kitchen in Delhi and Gurugram is influenced by several factors, allowing for customization across various budgets:

</p>
          <ul>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
              Size and Scope : {" "}
              </strong>{" "}
 Larger kitchens with more modules and intricate designs will naturally cost more.


 </li>

             
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
            Material Selection :{" "}
              </strong>{" "}
 Premium finishes like acrylic or PU are generally more expensive than laminates. The choice of carcass material also plays a role.



 </li>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
            Internal Fittings & Accessories : {" "}
              </strong>{" "}
 High-end drawer systems, specialized pull-outs, and branded hardware add to the overall investment.



 </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
            Customization Level :{" "}
              </strong>{" "}
 Bespoke designs with unique requirements will reflect in the pricing.


 </li>

             

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
            Appliance Integration : {" "}
              </strong>{" "}
 Whether appliances are part of the modular setup or purchased separately.


 </li>

             

            


          </ul>
          <div className=" text-sm pt-3">
        At Adhunik Decodive, we are committed to transparent pricing. Our team will provide a detailed quotation, explaining every component, so you can make informed decisions that align with your vision and budget.

          </div>
        </div>
      </>

  },
  {
    icon: <FaBoxOpen className="text-3xl text-orange-600" />,
    title: "Why Adhunik Decodive is Your Partner for U-Shape Modular Kitchens",
    description:

          <>
        <div>
        <div className=" text-sm pb-3">
       At Adhunik Decodive, we transform kitchen dreams into tangible realities. Our commitment to design excellence and client satisfaction sets us apart:


        </div>
          <ul>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
         Expert Craftsmanship :{" "}
              </strong>{" "}
 We bring years of experience and precision to every U-shape kitchen project, ensuring impeccable quality and finish.


 </li>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
        Tailored Solutions :{" "}
              </strong>{" "}
 Every design is custom-built to your exact specifications, ensuring your kitchen truly reflects your lifestyle and maximizes your space.


 </li>

           
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
    Premium Quality Materials :{" "}
              </strong>{" "}
  We use only the highest quality materials and state-of-the-art manufacturing processes for durability and a luxurious feel.

 </li>

           
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
   Seamless Project Execution :{" "}
              </strong>{" "}
 From initial consultation and innovative 3D design to professional manufacturing and timely installation, our dedicated team manages every step with efficiency and care.


 </li>

           
         
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
 Post-Installation Support :{" "}
              </strong>{" "}
 Our dedication extends beyond installation; we're here to ensure your complete satisfaction with your new U-shape kitchen.


 </li>

           
         
          </ul>
           
        </div>
      </>

  },
 

 
];

const signatureDesigns = [
  {
    icon: <FaUtensils className="text-3xl text-orange-600" />,
    title: "Unrivaled Efficiency (The Perfect Work Triangle)",
    description: (
      
      <>
        <div>
          <p className=" text-sm pb-3">
     With appliances and work zones positioned along three walls, the U-shape creates the most compact and ergonomic "work triangle" – the path between your sink, hob, and refrigerator. This minimizes steps, making cooking and meal prep incredibly efficient.

          </p>
         
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Abundant Counter Space",
    description: (
      <>
        <div>
          <span className=" text-sm">
 The continuous run of countertops along three walls provides an expansive area for meal preparation, multiple cooks, or even a small breakfast bar extension.


          </span>
           
        </div>
      </>
    ),
  },

  {
    icon: <FaChair className="text-3xl text-orange-600" />,
    title: " Maximum Storage Capacity",
    description: (
      <>
        <div>
          <p className=" text-sm">
 Three walls of base and wall cabinets, along with dedicated pantry units, mean a U-shape kitchen offers the highest storage potential among all layouts. Say goodbye to clutter!

 </p>
      
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Defined Work Zones",
    description: (

      <span>
        <div>
            <p className=" text-sm">
 The layout naturally allows for distinct zones for prepping, cooking, and washing, ideal for busy households or those who love to entertain.

 </p>
         
        </div>
      </span>

    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: " Enclosed & Immersive Feel",
    description: (
      <>
        <div>
            <p className=" text-sm">

 While often spacious, the U-shape can create a wonderfully immersive cooking environment, perfect for those who enjoy spending time in the kitchen.

 </p>
       
        </div>
      </>
    ),
  },
];

const signatureDesigns2 = [
  {
    icon: <FaUtensils className="text-3xl text-orange-600" />,
    title: "Space Assessment & Dimensions",
    description: (
      
      <>
        <div>
          <p className=" text-sm pb-3">
 While highly efficient, U-shape kitchens generally require more width than L-shapes to ensure comfortable passage and opening of cabinet doors. We perform precise measurements and create 3D designs to optimize every dimension.


 </p>
         
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Corner Utilization",
    description: (
      <>
        <div>
          <span className=" text-sm">

 With two corners, maximizing storage here is critical. We integrate advanced corner solutions like:



          </span>

              <ul>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
             LeMans Corner Pull-Outs : {" "}
              </strong>{" "}
 Ingenious swinging shelves that bring contents out into the open.


 </li>

             
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
        Magic Corners : {" "}
              </strong>{" "}
 Pull-out units that utilize hidden space efficiently.



 </li>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
             Custom Pantry Units : {" "}
              </strong>{" "}
 Tall units designed specifically for dry storage, often at the end of a 'U' arm.



 </li>

            
          </ul>
           
        </div>
      </>
    ),
  },

  {
    icon: <FaChair className="text-3xl text-orange-600" />,
    title: "Appliance Harmony",
    description: (
      <>
        <div>
          <p className=" text-sm">
 Thoughtful placement of your refrigerator, hob, oven, microwave, and dishwasher within the U-layout ensures seamless integration and an uninterrupted workflow.

 </p>
      
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Lighting & Ventilation",
    description: (
      <span>
        <div>
            <p className=" text-sm">
 Strategic lighting (under-cabinet, recessed, pendant) illuminates work areas. A powerful chimney is essential to manage cooking fumes in a U-shaped space, ensuring comfort and cleanliness.


 </p>
         
 
        </div>
      </span>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Material & Finish Excellence for Delhi's Homes",
    description: (
    <>
        <div>
        
          <ul>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
             Carcass :{" "}
              </strong>{" "}
      We recommend high-quality BWP (Boiling Water Proof) Plywood for its superior strength and moisture resistance, crucial for longevity in Delhi's climate.


 </li>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
       Shutter Finishes -
{" "}
              </strong>{" "}
     

 </li>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
     Laminate : 

{" "}
              </strong>{" "}
   A highly durable and cost-effective choice with a vast array of colors and textures.
 </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
    Acrylic :

{" "}
              </strong>{" "}
     For a high-gloss, reflective, and ultra-modern look that brightens the space.

 </li>

       
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
   PU (Polyurethane) Paint :

{" "}
              </strong>{" "}
   A premium, uniform, and highly durable finish available in matte or gloss.

 </li>

       
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
   Veneer :

{" "}
              </strong>{" "}
 For the timeless elegance and warmth of natural wood.



 </li>

       
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
  Countertops :

{" "}
              </strong>{" "}
 Choose from durable Granite, elegant Quartz, or the seamless beauty of Corian, considering both aesthetics and your lifestyle.


 </li>

       

           


          </ul>
        </div>
      </>


    ),
  },
  
 

];

const signatureDesigns3 = [
  {
    icon: <FaUtensils className="text-3xl text-orange-600" />,
    title: " Contemporary & Minimalist",
    description: (
      
      <>
        <div>
          <p className=" text-sm pb-3">
 Clean lines, integrated appliances, muted tones, and sleek finishes create a sophisticated and uncluttered space.

          </p>
         
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Classic & Elegant",
    description: (
      <>
        <div>
          <span className=" text-sm">
 Incorporating traditional paneling, warm wood tones, and classic hardware for a timeless appeal.

          </span>
           
        </div>
      </>
    ),
  },

  {
    icon: <FaChair className="text-3xl text-orange-600" />,
    title: "Transitional",
    description: (
      <>
        <div>
          <p className=" text-sm">
 Blending elements of both traditional and modern design for a harmonious and versatile look.

 </p>
      
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: " U-Shape with a Central Island",
    description: (
      <span>
        <div>
            <p className=" text-sm">
 For larger kitchens, a central island within the U provides additional prep space, seating, or even a secondary sink, enhancing functionality and social interaction.

 </p>
         
 
        </div>
      </span>
    ),
  },
  
];

export default function UModularKitchenDelhi() {
  return (
    <>

<Helmet>
    <title>U-Shape Modular Kitchen Design Delhi | Adhunik Decodive Guide</title>
    <meta name="description" content="Discover the ultimate U-shape modular kitchen for your Delhi or Gurugram home. Explore efficient designs, abundant storage, and transparent costs. Get your free consultation from Adhunik Decodive." />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
    <link rel="canonical" href="https://adhunikdecodive.com/blogs/u-shape-modular-kitchen-design-in-delhi" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>

    <meta property="og:title" content="U-Shape Modular Kitchen Design Delhi | Adhunik Decodive Guide" />
    <meta property="og:description" content="Discover the ultimate U-shape modular kitchen for your Delhi or Gurugram home. Explore efficient designs, abundant storage, and transparent costs. Get your free consultation from Adhunik Decodive." />
    <meta property="og:url" content="https://adhunikdecodive.com/blogs/u-shape-modular-kitchen-design-in-delhi"></meta>
    <meta property="og:site_name" content="Adhunik Decodive - Interior Design Experts" />
    <meta property="og:locale" content="en_IN"></meta>
    <meta property="og:type" content="article"></meta>
    <meta property="og:image" content="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786546/8_avclus_mg44dp.webp" />

    <meta name="twitter:card" content="summary_large_image"></meta>
    <meta name="twitter:title" content="U-Shape Modular Kitchen Design Delhi | Adhunik Decodive Guide" />
    <meta name="twitter:description" content="Discover the ultimate U-shape modular kitchen for your Delhi or Gurugram home. Explore efficient designs, abundant storage, and transparent costs. Get your free consultation from Adhunik Decodive." />
    <meta name="twitter:image" content="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786546/8_avclus_mg44dp.webp" />
    <meta name="twitter:site" content="@AdhunikDecodive"></meta>
    <meta name="twitter:creator" content="@AdhunikDecodive"></meta>

    <meta name="keywords" content="U-shape modular kitchen Delhi, U kitchen design Gurugram, efficient U-shape kitchen, modern U kitchen ideas, U-shape kitchen storage, modular kitchen cost Delhi NCR, Adhunik Decodive U kitchens, custom U kitchen, kitchen design Delhi, ample storage kitchen" />

   
    
</Helmet>


      <div className="bg-[#FDFCFB] font-manrope text-slate-800 overflow-x-hidden">
        <Fonts />

        <main className=" px-4 xl:px-24 ">
          <section className="w-full bg-orange-50/50">
            <div className="container mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
              <div className="  flex  flex-col-reverse md:flex-row gap-12 items-center">
                <motion.div
                  className="text-center   w-full md:w-5/12  lg:text-left"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.h1
                    className="font-playfair  text-2xl md:text-3xl font-bold text-slate-900 leading-tight"
                    variants={fadeIn}
                  >
                    {heroContent.headline}
                  </motion.h1>
                  <motion.p
                    className="mt-6 text-sm  text-justify md:text-left pe-6 text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
                    variants={fadeIn}
                  >
                    {heroContent.subheadline}
                  </motion.p>
                </motion.div>

                <motion.div
                  className="relative  w-full md:w-7/12 h-full md:h-[60vh]  rounded-2xl overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src={heroContent.image}
                    alt="A luxurious, modern wardrobe in a stylish home"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/800x1000/e2e8f0/334155?text=Luxury+Interior";
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Introduction Section */}
 

          {/* Benefits Section */}

          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
Why the U-Shape is a Masterclass in Kitchen Design

                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
      The U-shaped kitchen layout, characterized by three walls of cabinetry and countertops, forms a natural 'U' shape. This configuration offers distinct advantages that make it a favorite for those seeking maximum utility:


                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {signatureDesigns.map((design, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border border-gray-100"
                  >
                    <div className="flex flex-col h-full">
                      <div className="mb-6">{design.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {design.title}
                      </h3>
                      <p className="text-gray-600 mb-6 flex-grow">
                        {design.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>


          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">

Key Design Considerations for Your U-Shape Modular Kitchen

                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">

Designing a U-shape kitchen requires careful planning to ensure its full potential is realized. Adhunik Decodive's experts meticulously consider:


                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {signatureDesigns2.map((design, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border border-gray-100"
                  >
                    <div className="flex flex-col h-full">
                      <div className="mb-6">{design.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {design.title}
                      </h3>
                      <p className="text-gray-600 mb-6 flex-grow">
                        {design.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>


  <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
Style Inspirations for Your U-Shape Kitchen by Adhunik Decodive

                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
       A U-shape kitchen can be designed to embody any aesthetic:


                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {signatureDesigns3.map((design, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border border-gray-100"
                  >
                    <div className="flex flex-col h-full">
                      <div className="mb-6">{design.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {design.title}
                      </h3>
                      <p className="text-gray-600 mb-6 flex-grow">
                        {design.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>



          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
Embracing Vastu in Your U-Shape Modular Kitchen

                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p className=" md:text-xl  text-gray-600 max-w-3xl mx-auto">
    For many in Delhi NCR, adhering to Vastu Shastra principles is important for home harmony. A U-shape kitchen can be designed with Vastu in mind, ensuring proper placement of the cooking range, sink, and refrigerator to promote positive energy flow. Our design experts can guide you in incorporating these elements seamlessly.


                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2   gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border border-gray-100"
                  >
                    <div className="flex flex-col h-full">
                      <div className="mb-6">{benefit.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 mb-6 flex-grow">
                        {benefit.description}
                      </p>
                     
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-16 text-center"
              ></motion.div>
            </div>
          </section>

     

          {/* Finishes Section */}


          <div className="md:p-24 grid md:grid-cols-2 items-center gap-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1704428381312-0579346a779c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
                alt="Kitchen Consultation"
                className="rounded-2xl shadow-lg w-full  object-center object-cover"
              />
            </div>
            <div className="bg-white border border-orange-200 rounded-3xl shadow-xl p-10">
              <h2 className="text-md font-bold text-orange-800 mb-4">
   Ready to design your ultimate U-shape modular kitchen?

  </h2>
              <p className="text-sm text-gray-700 mb-4">
        Let Adhunik Decodive help you create a space that’s not just a kitchen, but a statement of efficiency and elegance in your Delhi or Gurugram home.

              </p>
              <p className="text-sm text-gray-700 mb-4">
   View Adhunik Decodive's Portfolio of Stunning U-Shape Modular Kitchens!
              </p>

              <div className="grid gap-6">
                <div className="flex items-center gap-3">
                  <LucidePhone className="text-orange-700 w-6 h-6" />
                  <div>
                    <div className="font-medium text-gray-800">Call Us</div>
                    <div className="text-orange-800 font-semibold">
                      9355588595
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <LucideMail className="text-orange-700 w-6 h-6" />
                  <div>
                    <div className="font-medium text-gray-800">Email Us</div>
                    <div className="text-orange-800 font-semibold">
                      info@adhunikdecodive.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <LucideGlobe className="text-orange-700 w-6 h-6" />
                  <div>
                    <div className="font-medium text-gray-800">
                      Visit Our Website
                    </div>
                    <div className="text-orange-800 font-semibold">
                      <Link className=" text-orange-600" to="/">
                        www.adhunikdecodive.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
