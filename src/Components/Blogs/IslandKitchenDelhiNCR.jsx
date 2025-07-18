 

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
    "Transform Your Home: The Allure of Island Kitchen Designs in Delhi NCR",
  subheadline:
    <>
        <div>
           <strong>
         Imagine a kitchen that's not just a place to cook, but the vibrant, social heart of your home </strong> . For homeowners in Delhi and Gurugram seeking the ultimate blend of functionality, luxury, and communal living, an island kitchen design is the quintessential choice. At Adhunik Decodive, we specialize in creating stunning island modular kitchens that redefine your culinary space, making it a hub for family gatherings, entertaining, and efficient meal preparation.



           <p>
   This comprehensive guide will explore the undeniable appeal and practical brilliance of island kitchen designs, helping you envision how this versatile layout can elevate your living experience.


           </p>

        </div>
    </>,
  ctaText: "Explore Our Philosophy",
  image:
    "https://res.cloudinary.com/dq14b7xie/image/upload/v1746786097/17_ehg08d_ofewr0.webp",
};

 
const benefits = [
  {
    icon: <FaExpandAlt className="text-3xl text-orange-600" />,
    title: "Understanding the Investment: Island Modular Kitchen Costs in Delhi & Gurugram",
    description:
        <>
        <div>
        <p className=" text-sm pb-3">
 The cost of an island modular kitchen in Delhi and Gurugram varies based on several factors, ensuring options for various budgets:

</p>
          <ul>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
       Island Size & Complexity : {" "}
              </strong>{" "}
 A larger island with more features (sink, hob, power outlets) will naturally cost more.



 </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
            Material Selection :{" "}
              </strong>{" "}
  Premium finishes like acrylic and PU, and higher-grade countertop materials, will influence the price.



 </li>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
            Internal Fittings & Accessories : {" "}
              </strong>{" "}
 Specialized pull-outs, soft-close hardware, and unique organizational solutions add to the investment.



 </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
           Appliances :{" "}
              </strong>{" "}
 Whether appliances are integrated into the island or purchased separately.


 </li>

             

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
           Overall Kitchen Layout :   {" "}
              </strong>{" "}
The island's cost is part of the larger kitchen design project.


 </li>
 
          </ul>
          <div className=" text-sm pt-3">
   Adhunik Decodive is committed to transparent pricing. Our team provides detailed quotations, breaking down every component, so you can make informed decisions that align with your vision and budget.

          </div>
        </div>
      </>

  },
  {
    icon: <FaBoxOpen className="text-3xl text-orange-600" />,
    title: "Why Choose Adhunik Decodive for Your Island Modular Kitchen?",
    description:

          <>
        <div>
        <div className=" text-sm pb-3">
      At Adhunik Decodive, we are passionate about designing kitchens that are not just functional but truly become the vibrant heart of your home. Our expertise in island kitchen designs ensures:



        </div>

          <ul>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
        Inspired Designs :{" "}
              </strong>{" "}
 We combine innovative design principles with a deep understanding of your needs to create a truly bespoke island kitchen.


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
Dedicated Support : {" "}
              </strong>{" "}
 Our commitment extends beyond installation; we're here to ensure your complete satisfaction.


 </li>

           
         
          </ul>
           
        </div>
      </>

  },
 

 
];

const signatureDesigns = [
  {
    icon: <FaUtensils className="text-3xl text-orange-600" />,
    title: "The Ultimate Social Hub",
    description: (
      
      <>
        <div>
          <p className=" text-sm pb-3">

     An island transforms your kitchen into a natural gathering spot. It's perfect for casual breakfasts, homework sessions, or guests to mingle while you cook, fostering connection and conversation.


          </p>
         
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Enhanced Functionality & Workflow",
    description: (
      <>
        <div>
          <span className=" text-sm">

Islands can house sinks, cooktops, dishwashers, or simply serve as additional prep space, making the "work triangle" incredibly efficient. They are especially beneficial in larger kitchens, breaking up vast areas.



          </span>
           
        </div>
      </>
    ),
  },

  {
    icon: <FaChair className="text-3xl text-orange-600" />,
    title: " Abundant Counter & Storage Space ",
    description: (
      <>
        <div>
          <p className=" text-sm">
Beyond being a prep area, islands offer significant additional countertop real estate. They also provide valuable storage through drawers, cabinets, and open shelving, keeping your kitchen organized and clutter-free.

 </p>
      
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Versatility in Design",
    description: (

      <span>
        <div>
            <p className=" text-sm">
 Islands can be tailored to incorporate various features – a breakfast bar, a wine rack, a built-in microwave, or even a bookshelf – making them incredibly adaptable to your specific needs.

 </p>
         
        </div>
      </span>

    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Visual Appeal",
    description: (
      <>
        <div>
            <p className=" text-sm">

 An island often acts as a visual anchor in an open-concept living space, adding a touch of grandeur and sophisticated design.

 </p>
       
        </div>
      </>
    ),
  },
];

const signatureDesigns2 = [
  {
    icon: <FaUtensils className="text-3xl text-orange-600" />,
    title: "Space Requirements",
    description: (
      
      <>
        <div>
          <p className=" text-sm pb-3">
Island kitchens generally require ample space to allow for comfortable passage around all sides (ideally at least 3.5 to 4 feet clearance). This ensures ease of movement and opening of cabinets.



 </p>
         
        </div>
      </>
    ),
  },

  {
    icon: <FaChair className="text-3xl text-orange-600" />,
    title: "Lighting",
    description: (
      <>
        <div>
          <p className=" text-sm">
 Proper lighting is crucial. Pendant lights above the island add aesthetic appeal and task lighting, while recessed lighting ensures overall illumination.

 </p>
      
        </div>
      </>
    ),
  },
  
  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Island Functionality",
    description: (
      <>
        <div>
          <span className=" text-sm">

 Decide the primary purpose of your island:



          </span>

              <ul>
     

             
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
   Prep Island : {" "}
              </strong>{" "}
 Primarily for chopping and food preparation, offering uninterrupted counter space.



 </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
            Cooking Island : {" "}
              </strong>{" "}
 Incorporates a hob/cooktop with an overhead chimney, becoming the central cooking zone.



 </li>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
            Sink Island : {" "}
              </strong>{" "}
 Features a main or secondary sink, ideal for washing vegetables or dishes.



 </li>

            
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
           Breakfast Bar/Seating Island : {" "}
              </strong>{" "}
 Designed with an overhang for stools, creating a casual dining area.


 </li>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
          Multi-functional Island : {" "}
              </strong>{" "}
 A combination of the above, balancing different uses.


 </li>

            
          </ul>
           
        </div>
      </>
    ),
  },

  
 

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Material & Finish Excellence for Delhi's Ambiance",
    description: (
    <>
        <div>
        
          <ul>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
             Carcass :{" "}
              </strong>{" "}
  We recommend high-grade BWP (Boiling Water Proof) Plywood for its superior strength and moisture resistance, ensuring your island withstands daily use in Delhi's climate.



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
 A highly durable and cost-effective option with a vast array of colours and textures for the island base
 </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
    Acrylic :

{" "}
              </strong>{" "}
   For a high-gloss, sleek, and luxurious modern look that makes a statement.

 </li>

       
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
   PU (Polyurethane) Paint :

{" "}
              </strong>{" "}
  A premium, uniform finish (matte or gloss) for a seamless, elegant appearance.

 </li>

       
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
   Veneer :

{" "}
              </strong>{" "}
 For the natural warmth and sophistication of real wood.



 </li>

       
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
  Countertops :

{" "}
              </strong>{" "}
Opt for durable Granite, elegant Quartz, or the seamless beauty of Corian, considering both the island's function and overall kitchen aesthetic.


 </li>

       

           


          </ul>
        </div>
      </>


    ),
  },
  
   {
    icon: <FaChair className="text-3xl text-orange-600" />,
    title: "Storage Integration",
    description: (
      <>
        <div>
          <p className=" text-sm">
 Maximizing storage within the island itself is key. Think deep drawers for pots, open shelving for cookbooks, or specialized compartments for cutlery.


 </p>
      
        </div>
      </>
    ),
  },
 

];

const signatureDesigns3 = [
  {
    icon: <FaUtensils className="text-3xl text-orange-600" />,
    title: "Modern & Sleek",
    description: (
      
      <>
        <div>
          <p className=" text-sm pb-3">
 A minimalist island with a waterfall countertop (where the material flows down the sides), handleless cabinets, and integrated lighting.

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
 An island with traditional paneling, a contrasting countertop, and decorative legs, offering a timeless appeal.


          </span>
           
        </div>
      </>
    ),
  },

  {
    icon: <FaChair className="text-3xl text-orange-600" />,
    title: "Industrial Chic",
    description: (
      <>
        <div>
          <p className=" text-sm">
 Combining raw materials like concrete or reclaimed wood with metal accents for a contemporary, edgy look.

 </p>
      
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Multi-Tiered Island",
    description: (
      <span>
        <div>
            <p className=" text-sm">
 An island with different height levels for cooking, prep, and seating, adding dynamic visual interest.


 </p>
         
 
        </div>
      </span>
    ),
  },
  
];

export default function IslandKitchenDelhiNCR() {
  return (
    <>

<Helmet>
    <title>Island Kitchen Design Delhi NCR | Adhunik Decodive Experts</title>
    <meta name="description" content="Elevate your Delhi & Gurugram home with a stunning island kitchen design. Discover modern layouts, versatile functionality, and transparent costs. Get your free consultation from Adhunik Decodive." />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
    <link rel="canonical" href="https://adhunikdecodive.com/blogs/island-kitchen-design-delhi-ncr" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>

    <meta property="og:title" content="Island Kitchen Design Delhi NCR | Adhunik Decodive Experts" />
    <meta property="og:description" content="Elevate your Delhi & Gurugram home with a stunning island kitchen design. Discover modern layouts, versatile functionality, and transparent costs. Get your free consultation from Adhunik Decodive." />
    <meta property="og:url" content="https://adhunikdecodive.com/blogs/island-kitchen-design-delhi-ncr"></meta>
    <meta property="og:site_name" content="Adhunik Decodive - Interior Design Experts" />
    <meta property="og:locale" content="en_IN"></meta>
    <meta property="og:type" content="article"></meta>
    <meta property="og:image" content="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786097/17_ehg08d_ofewr0.webp" />

    <meta name="twitter:card" content="summary_large_image"></meta>
    <meta name="twitter:title" content="Island Kitchen Design Delhi NCR | Adhunik Decodive Experts" />
    <meta name="twitter:description" content="Elevate your Delhi & Gurugram home with a stunning island kitchen design. Discover modern layouts, versatile functionality, and transparent costs. Get your free consultation from Adhunik Decodive." />
    <meta name="twitter:image" content="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786097/17_ehg08d_ofewr0.webp" />
    <meta name="twitter:site" content="@AdhunikDecodive"></meta>
    <meta name="twitter:creator" content="@AdhunikDecodive"></meta>

    <meta name="keywords" content="island kitchen design Delhi, modern island kitchens Gurugram, kitchen island ideas, versatile kitchen island, modular kitchen cost Delhi, Adhunik Decodive island kitchens, custom kitchen island, kitchen design Delhi NCR, open concept kitchen island, luxury kitchen island" />

 
   
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
Why the Island Kitchen is a Modern Home's Centrepiece

                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
    An island kitchen incorporates a freestanding counter space, often centrally located, offering functionality from all sides. This dynamic layout is immensely popular for several compelling reasons :



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

Key Design Considerations for Your Island Modular Kitchen

                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">

Designing an island kitchen requires careful thought to ensure it functions as beautifully as it looks. Adhunik Decodive's experts meticulously consider:


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
Style Inspirations for Your Island Kitchen by Adhunik Decodive

                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
     An island kitchen is a canvas for style, reflecting your home's personality:


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
The Vastu Connection : Harmonizing Your Island Kitchen

                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p className=" md:text-xl  text-gray-600 max-w-3xl mx-auto">
 For homes in Delhi NCR, integrating Vastu Shastra principles is often a key consideration. While islands are a modern concept, their placement and the elements on them can be aligned with Vastu for positive energy flow. Our design experts can guide you in incorporating these aspects seamlessly.


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
Ready to elevate your home with a stunning island kitchen?

  </h2>
              <p className="text-sm text-gray-700 mb-4">
  Let Adhunik Decodive be your trusted partner in crafting a culinary and social space that perfectly suits your Delhi or Gurugram home.

              </p>
              <p className="text-sm text-gray-700 mb-4">
Explore Adhunik Decodive's Portfolio of Exquisite Island Kitchens!              </p>

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
