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
    "Smart Simplicity: Straight Kitchen Designs for Modern Delhi & Gurugram Homes",
  subheadline:
    <>
        <div>
           <strong>Is your home a haven of sleek design and efficient living ?</strong> For many contemporary apartments and compact spaces in Delhi and Gurugram, the straight (or single-wall) kitchen design is the epitome of smart simplicity. At Adhunik Decodive, we specialize in crafting sophisticated straight modular kitchens that prove functionality doesn't have to compromise on style, even in the most streamlined layouts.

           <p>
       This guide will unveil the understated elegance and remarkable efficiency of straight kitchen designs, helping you envision how this popular layout can transform your home.

           </p>

        </div>
    </>,
  ctaText: "Explore Our Philosophy",
  image:
    "https://res.cloudinary.com/dq14b7xie/image/upload/v1746786448/16_ezwbao_mftant.webp",
};

 

 
const benefits = [
  {
    icon: <FaExpandAlt className="text-3xl text-orange-600" />,
    title: "Understanding the Investment: Straight Modular Kitchen Costs in Delhi & Gurugram",
    description:
        <>
        <div>
        <p className=" text-sm pb-3">The cost of a straight modular kitchen in Delhi and Gurugram varies based on several factors, ensuring options for diverse budgets:
</p>
          <ul>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
               Length of the Kitchen : {" "}
              </strong>{" "}
 The primary determinant of material and labor costs.


 </li>

             
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
              Material & Finish Choices : {" "}
              </strong>{" "}
 Premium materials like acrylic and PU finishes will be at a higher price point than laminates.


 </li>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
              Internal Accessories : {" "}
              </strong>{" "}
 The number and type of specialized pull-outs, soft-close hardware, and organizational units influence the final cost.



 </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
             Customization Level : {" "}
              </strong>{" "}
 Bespoke designs with unique features will reflect in the pricing.


 </li>

             

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
            Appliance Integration : {" "}
              </strong>{" "}
 Whether appliances are integrated into the modular units or are freestanding.


 </li>

             

            


          </ul>
          <div className=" text-sm pt-3">
            Adhunik Decodive is committed to transparent pricing. Our team provides detailed quotations, breaking down every component, so you can make informed decisions that match your vision and budget.

          </div>
        </div>
      </>

  },
  {
    icon: <FaBoxOpen className="text-3xl text-orange-600" />,
    title: "Why Choose Adhunik Decodive for Your Straight Modular Kitchen?",
    description:

          <>
        <div>
        <div className=" text-sm pb-3">
          At Adhunik Decodive, we are passionate about designing kitchens that perfectly blend functionality with aesthetic appeal, no matter the layout. Our expertise in straight kitchen designs ensures :


        </div>
          <ul>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
            Intelligent Design :{" "}
              </strong>{" "}
  We create layouts that are not just beautiful but highly efficient, maximizing space and utility in your urban home.


 </li>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
         Precision Craftsmanship :{" "}
              </strong>{" "}
 We bring years of experience and meticulous attention to detail to every project, guaranteeing a flawless finish and lasting quality.


 </li>

           
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
    Premium Quality Materials :{" "}
              </strong>{" "}
 We source only the finest materials and utilize advanced manufacturing techniques, ensuring your kitchen is durable and beautiful for years to come.

 </li>

           
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
   Seamless Project Execution :{" "}
              </strong>{" "}
 From the initial consultation and detailed 3D design to professional manufacturing and expert installation, our dedicated team manages every step with efficiency and care.

 </li>

           
         
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
   Dedicated Support :{" "}
              </strong>{" "}
 Our commitment extends beyond installation; we're here to ensure your complete satisfaction.


 </li>

           
         
          </ul>
            <div className=" text-sm pb-3"> 
            Adhunik Decodive is committed to transparent pricing. Our team provides detailed quotations, breaking down every component, so you can make informed decisions that match your vision and budget.

          </div>
        </div>
      </>

  },
 

 
];

const signatureDesigns = [
  {
    icon: <FaUtensils className="text-3xl text-orange-600" />,
    title: "Ultimate Space Saver",
    description: (
      
      <>
        <div>
          <p className=" text-sm pb-3">
      Ideal for smaller homes, studio apartments, or open-concept layouts, the straight kitchen occupies minimal floor area, making the most of every square foot.
          </p>
         
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Streamlined Workflow",
    description: (
      <>
        <div>
          <span className=" text-sm">
 All key zones (sink, hob, refrigerator) are arranged in a single line, creating an incredibly efficient and accessible workflow. Everything you need is just a step or two away.

          </span>
           
        </div>
      </>
    ),
  },

  {
    icon: <FaChair className="text-3xl text-orange-600" />,
    title: "  Open & Expansive Feel",
    description: (
      <>
        <div>
          <p className=" text-sm">
 By keeping one side of the room free, a straight kitchen helps maintain an open and airy atmosphere, preventing the space from feeling cramped. It integrates seamlessly into living or dining areas.

 </p>
      
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Sleek Aesthetics",
    description: (
      <span>
        <div>
            <p className=" text-sm">
 The linear design naturally lends itself to minimalist and modern aesthetics, providing a clean, uncluttered look that enhances contemporary interiors.

 </p>
         
 
        </div>
      </span>
    ),
  },
  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: " Cost-Effective ",
    description: (
      <>
        <div>
            <p className=" text-sm">
 Often requiring fewer modules and less complex installation than multi-wall layouts, straight kitchens can be a more budget-friendly modular option.

 </p>
       
        </div>
      </>
    ),
  },
];

const signatureDesigns2 = [
  {
    icon: <FaUtensils className="text-3xl text-orange-600" />,
    title: " Optimal Flow",
    description: (
      
      <>
        <div>
          <p className=" text-sm pb-3">
    Even in a single line, thoughtful placement of the sink, hob, and refrigerator is crucial to ensure an ergonomic "work triangle" or a highly efficient "work line."

 </p>
         
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Vertical Storage",
    description: (
      <>
        <div>
          <span className=" text-sm">

 With only one wall for cabinetry, maximizing vertical space is paramount. We incorporate tall units, floor-to-ceiling cabinets, and smart overhead storage solutions to keep everything organized.



          </span>
           
        </div>
      </>
    ),
  },

  {
    icon: <FaChair className="text-3xl text-orange-600" />,
    title: "Appliance Integration",
    description: (
      <>
        <div>
          <p className=" text-sm">
 Seamlessly integrating built-in appliances (oven, microwave, dishwasher) and choosing slimline options for refrigerators and chimneys helps maintain the streamlined aesthetic and save precious counter space.

 </p>
      
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: " Lighting & Ventilation",
    description: (
      <span>
        <div>
            <p className=" text-sm">
 Excellent lighting (task lighting under wall cabinets, ambient ceiling lights) is vital to illuminate the entire workspace. A powerful, sleek chimney is essential to manage cooking fumes efficiently in a single-line layout.

 </p>
         
 
        </div>
      </span>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Material & Finish Choices: Durability Meets Delhi's Style",
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
     A premium, smooth, and seamless finish available in matte or gloss, offering a luxurious feel.


 </li>

       
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
   Veneer :

{" "}
              </strong>{" "}
 For homeowners who appreciate the natural warmth and beauty of real wood grains.


 </li>

       
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
  Countertops :

{" "}
              </strong>{" "}
 Popular choices like Granite, sophisticated Quartz, or the seamless elegance of Corian offer different aesthetic and maintenance profiles.



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
    title: "Minimalist & Urban",
    description: (
      
      <>
        <div>
          <p className=" text-sm pb-3">
      Clean lines, handleless cabinets, neutral color palettes (whites, grays, blacks), and integrated appliances create an ultra-modern, serene space.

          </p>
         
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Compact & Functional",
    description: (
      <>
        <div>
          <span className=" text-sm">
 Bright colors, smart accessories, and multi-functional elements to maximize utility in a smaller footprint.

          </span>
           
        </div>
      </>
    ),
  },

  {
    icon: <FaChair className="text-3xl text-orange-600" />,
    title: "Open Concept Integration",
    description: (
      <>
        <div>
          <p className=" text-sm">
 Designing the kitchen to seamlessly blend with the living or dining area, perhaps with a sleek breakfast counter extension that serves as a room divider.

 </p>
      
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Industrial Edge",
    description: (
      <span>
        <div>
            <p className=" text-sm">
  Exposed elements, metallic finishes, and open shelving for a contemporary, urban vibe.

 </p>
         
 
        </div>
      </span>
    ),
  },
  
];

export default function StraightKitchenDesignDelhi() {
  return (
    <>
 <Helmet>
    <title>Straight Kitchen Design Delhi | Adhunik Decodive Space Savers</title>
    <meta name="description" content="Discover efficient straight kitchen designs for your Delhi or Gurugram home. Maximize space with sleek layouts, smart storage, and transparent costs. Get your free consultation from Adhunik Decodive." />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
    <link rel="canonical" href="https://adhunikdecodive.com/blogs/straight-modular-kitchen-in-delhi" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>

    <meta property="og:title" content="Straight Kitchen Design Delhi | Adhunik Decodive Space Savers" />
    <meta property="og:description" content="Discover efficient straight kitchen designs for your Delhi or Gurugram home. Maximize space with sleek layouts, smart storage, and transparent costs. Get your free consultation from Adhunik Decodive." />
    <meta property="og:url" content="https://adhunikdecodive.com/blogs/straight-modular-kitchen-in-delhi"></meta>
    <meta property="og:site_name" content="Adhunik Decodive - Interior Design Experts" />
    <meta property="og:locale" content="en_IN"></meta>
    <meta property="og:type" content="article"></meta>
    <meta property="og:image" content="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786448/16_ezwbao_mftant.webp" />

    <meta name="twitter:card" content="summary_large_image"></meta>
    <meta name="twitter:title" content="Straight Kitchen Design Delhi | Adhunik Decodive Space Savers" />
    <meta name="twitter:description" content="Discover efficient straight kitchen designs for your Delhi or Gurugram home. Maximize space with sleek layouts, smart storage, and transparent costs. Get your free consultation from Adhunik Decodive." />
    <meta name="twitter:image" content="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786448/16_ezwbao_mftant.webp" />
    <meta name="twitter:site" content="@AdhunikDecodive"></meta>
    <meta name="twitter:creator" content="@AdhunikDecodive"></meta>

    <meta name="keywords" content="straight kitchen design Delhi, single wall kitchen Gurugram, efficient straight kitchen, modern straight kitchen ideas, compact kitchen design, modular kitchen cost Delhi, Adhunik Decodive straight kitchens, custom straight kitchen, kitchen design Delhi NCR, space-saving kitchen" />

    
</Helmet>



      <div className="bg-[#FDFCFB] font-manrope text-slate-800 overflow-x-hidden">
        <Fonts />

        <main>
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
                    className="w-full h-full object-fill object-center"
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
Why Straight Kitchens are a Modern Space Solution

                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
             The straight kitchen layout places all appliances, cabinetry, and countertops along a single wall. This linear configuration is a favorite for its clean lines and clever use of space:


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
Key Design Considerations for Your Straight Modular Kitchen

                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
     Designing an effective straight kitchen involves meticulous planning to maximize its potential. Adhunik Decodive's experts focus on:


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
Style Inspirations for Your Straight Kitchen by Adhunik Decodive

                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
          A straight kitchen, despite its simplicity, offers numerous stylistic possibilities :


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
The Vastu Connection: Harmonizing Your Straight Kitchen

                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p className=" md:text-xl  text-gray-600 max-w-3xl mx-auto">
      For homes in Delhi NCR, integrating Vastu Shastra principles is often an important consideration. A straight kitchen can be designed to align with Vastu guidelines for positive energy flow, particularly concerning the placement of the cooking hob, sink, and refrigerator along the single wall. Our design experts can guide you in incorporating these aspects seamlessly.

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
    Ready to simplify and style your home with an elegant straight kitchen ?

  </h2>
              <p className="text-sm text-gray-700 mb-4">
         Let Adhunik Decodive be your trusted partner in crafting a culinary space that perfectly suits your Delhi or Gurugram home.

              </p>
              <p className="text-sm text-gray-700 mb-4">
    Explore Adhunik Decodive's Portfolio of Efficient Straight Kitchens

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
