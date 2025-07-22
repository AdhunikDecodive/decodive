 

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
    "Adhunik Decorative: Your Premier Destination for Bespoke Shutter Wardrobes in Delhi – Where Craftsmanship Meets Customization",
  subheadline:
    <>
        <div>
        <h1 className=" text-lg pb-3">Custom Shutter Wardrobes Delhi | Luxury Wardrobe Solutions | Adhunik Decorative</h1>
         In the bustling, ever-evolving landscape of Delhi, a home is more than just a dwelling; it's a personal sanctuary, a reflection of individual style, and a testament to refined living. Within this space, the wardrobe transcends its basic utility, emerging as a pivotal design statement—an intricate blend of aesthetic grandeur, intelligent functionality, and enduring quality. At <strong>Adhunik Decorative</strong>, we take pride in being the leading <strong>wardrobe manufacturer in Delhi</strong>, specializing in crafting exquisite <strong>shutter wardrobes</strong>. We transform this classic, time-honored choice into bespoke masterpieces that distinguish themselves sharply from generic modular units or mass-produced alternatives found in the market. If you are discerning, seeking truly <strong>luxury wardrobes in Delhi</strong> or unparalleled <strong>custom wardrobe solutions</strong>, your search culminates here.



        

        </div>
    </>,
  ctaText: "Explore Our Philosophy",
  image:
    "https://res.cloudinary.com/dq14b7xie/image/upload/v1748239644/14_uwgozu_ztg7tf.webp",
};

  

const signatureDesigns = [


 
  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: " Uncompromising Quality & Enduring Legacy: Built for Generations ",
    description: (
      <>
        <div>

        <h3>
     Best Quality Wardrobes Delhi | Durable Wardrobe Materials | Wardrobe Manufacturer Delhi  </h3>

          <span className=" text-sm">

Investing in an Adhunik Decorative wardrobe signifies a long-term investment in your home's beauty and functionality. Our unwavering commitment to supreme quality underpins every single detail of our creations:



          </span>
           

              <ul>
     

             
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
 Premium Materials :  {" "}
              </strong>{" "}
We exclusively utilize high-grade, moisture-resistant materials such as HDHMR (High-Density High Moisture Resistant) and BWR (Boiling Water Resistant) plywood. These robust materials are renowned for their exceptional durability, resilience against fluctuating temperatures, and resistance to moisture—a crucial factor for longevity in Delhi’s diverse climatic conditions.


 </li>

         
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
Precision Engineering & Craftsmanship :   {" "}
              </strong>{" "}
Each component of your wardrobe is produced with meticulous precision, leveraging state-of-the-art manufacturing techniques and the unparalleled skill of our artisans. Every piece undergoes rigorous, multi-point quality checks throughout the entire production process, ensuring structural integrity, flawless finishes, and enduring functionality. This dedication means your wardrobe is not just beautiful today, but built to last for generations. We proudly back our craftsmanship and materials with a comprehensive warranty, offering you complete peace of mind.

 </li>

  
         

            
          </ul>
 
       
        </div>

 
        
      </>
    ),
  },

 
  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Intelligent Interiors: Maximizing Every Inch with Smart, Organized Storage",
    description: (
      <>
        <div>

        <h3>
   Smart Wardrobe Storage Delhi | Organized Wardrobe Interiors | Wardrobe Solutions Delhi  </h3>

          <span className=" text-sm">

Drawing inspiration from the ingenious planning of the most luxurious walk-in closets and efficient modular wardrobe systems, our shutter wardrobes are meticulously planned from the inside out to offer optimal functionality and organization. We focus on creating smart wardrobe storage solutions that simplify your life:


          </span>
           

              <ul>
     

             
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
Configurable Ecosystems : {" "}
              </strong>{" "}
 Our interiors feature fully adjustable shelving, multiple hanging rods (including versatile pull-out and swinging rods for easy access), and dedicated compartments for every type of possession. This includes specialized sections for delicate ethnic wear like sarees, formal suits, a variety of footwear, and organized drawers for accessories, jewelry, and personal items.



 </li>

         
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
Seamless Integration :  {" "}
              </strong>{" "}
 Our expert wardrobe designers in Delhi excel at transforming challenging spaces. We ingeniously integrate the wardrobe around architectural nuances like concealed beams, irregular wall cavities, or uneven floors, ensuring that every single inch is meticulously utilized for intelligent, accessible storage. Say goodbye to wasted space and hello to perfectly organized wardrobe interiors.

 </li>

  
         

            
          </ul>
 
       
        </div>

 
        
      </>
    ),
  },

 
    {
    icon: <FaUtensils className="text-3xl text-orange-600" />,
    title: "Unmatched Accessibility & The Grand Panoramic View",
    description: (
      
      <>
        <div>
        <h3>
            Maximizing Wardrobe Space Delhi | Full Access Wardrobe Design
        </h3>
          <p className=" text-sm pb-3">

   Imagine a wardrobe that reveals your entire collection in one glance. This is the defining promise of an Adhunik Decorative shutter wardrobe. Unlike common sliding door wardrobes that perpetually conceal a portion of your belongings, our hinged designs open fully and effortlessly, providing an unhindered, panoramic vista of your entire wardrobe interior. This full-access wardrobe design isn't merely a convenience; it transforms the daily ritual of dressing. It simplifies organization, eliminates the need for endless rummaging, and allows you to easily survey and select every garment, accessory, and thoughtfully arranged item. It’s akin to having a personal, compact walk-in closet, perfectly optimized for the dynamic spaces of Delhi apartments, proving that even in compact areas, space-saving wardrobe solutions can be luxurious.


          </p>
         
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Enhanced Airflow & Garment Preservation – A Practical Luxury for Delhi's Climate",
    description: (
      <>
        <div>

        <h3>
   Ventilated Wardrobes Delhi | Odor-Free Wardrobe Solutions
 </h3>

          <span className=" text-sm">
A crucial, often overlooked, yet incredibly practical benefit, particularly vital in Delhi's often humid environment, is the superior ventilation offered by many of our shutter wardrobe designs, especially those featuring louvered elements. This promotes essential air circulation within the wardrobe, actively preventing moisture build-up, deterring musty odors, and ensuring your cherished garments remain fresh, well-preserved, and ready to wear season after season. It’s a subtle luxury that significantly extends the life and freshness of your clothing.

          </span>
           

      
       
        </div>

 
        
      </>
    ),
  },

   {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: " True Bespoke Design: Where Your Vision Becomes a Masterpiece ",
    description: (
      <>
        <div>
        
        <h3>
            Tailor-Made Wardrobes Delhi | Luxury Custom Wardrobe Delhi | Modern Wardrobe Designs Delhi
        </h3>

          <span className=" text-sm">

At Adhunik Decorative, the term "customization" means much more than merely selecting from a pre-defined catalog. We embark on a truly collaborative design journey with you, crafting tailor-made wardrobes in Delhi that are utterly unique, reflecting your personal style, functional needs, and the architectural nuances of your home. Our offerings are boundless:



          </span>
           

              <ul>
     

             
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
  Diverse Finishes :  {" "}
              </strong>{" "}
 Explore a rich palette of finishes, from the sleek sophistication of matte finish wardrobes and radiant high-gloss wardrobes that capture light beautifully, to the timeless warmth of natural wooden wardrobes in Delhi (available in exquisite walnut, oak, and other premium veneers). For a touch of opulence, we integrate modern accents like marble finishes, or even luxurious fluted leather and metallic-glass elements.


 </li>

         
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
 Personalized Door Styles :  {" "}
              </strong>{" "}
 Choose from clean, minimalist flush doors that create seamless walls, intricately routed patterns that add subtle texture, or elegantly designed louvered doors—a particularly thoughtful feature that promotes essential air circulation, especially beneficial in Delhi's climate.

 </li>

         
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
Curated Hardware : {" "}
              </strong>{" "}
 The right hardware completes the look. We offer a vast selection, from charming vintage-inspired knobs to cutting-edge integrated profiles and innovative handle-less push-to-open mechanisms, ensuring every detail resonates with your personal aesthetic and the overall modern wardrobe designs in Delhi.

 </li>

         

            
          </ul>
 
       
        </div>

  <div className=" pt-3 text-sm">
            Every Adhunik Decorative shutter wardrobe is a singular work of art, meticulously designed from scratch to align perfectly with your home's existing décor and your distinct taste, guaranteeing that no two pieces are ever truly identical.
          </div>
        
      </>
    ),
  },



];

const signatureDesigns2 = [
  {
    icon: <FaUtensils className="text-3xl text-orange-600" />,
    title: "Expert Design Consultation",
    description: (
      
      <>
        <div>
          <p className=" text-sm pb-3">
 Our seasoned wardrobe designers in Delhi provide personalized, in-depth consultations. We listen intently to your needs, lifestyle, and aesthetic preferences, guiding you through every decision—from material and finish selections to interior configurations that are perfectly tailored to your unique requirements.



 </p>
         
        </div>
      </>
    ),
  },

  {
    icon: <FaChair className="text-3xl text-orange-600" />,
    title: "Immersive 3D Visualization",
    description: (
      <>
        <div>
          <p className=" text-sm">
 Before any manufacturing begins, experience your dream wardrobe come to life with detailed, photorealistic 3D renderings. This crucial step ensures every aspect aligns perfectly with your vision, allowing for precise adjustments and complete peace of mind.

 </p>
      
        </div>
      </>
    ),
  },
  
  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Transparent Process & Timely Execution",
    description: (
      <>
        <div>
          <span className=" text-sm">

 From the initial design finalization to precise manufacturing in our advanced facility, overseen by rigorous quality checks, and culminating in professional, meticulous wardrobe installation in Delhi by our expert team, we guarantee a smooth and timely delivery. We are committed to minimizing common frustrations associated with large furniture projects.


          </span>
 
           
        </div>
      </>
    ),
  },

  
 

 
  
   {
    icon: <FaChair className="text-3xl text-orange-600" />,
    title: "Unwavering Customer Support",
    description: (
      <>
        <div>
          <p className=" text-sm">
Our relationship extends far beyond delivery. We provide comprehensive after-sales support and a robust warranty, affirming our dedication to your long-term satisfaction and the enduring quality of your investment. Adhunik Decorative stands proudly among the top wardrobe dealers in Delhi.


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


export default function ShutterWardrobesDelhi() {
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
                <div className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">

Why Adhunik Decorative's Shutter Wardrobes Redefine Delhi's Home Interiors

                </div>
                  <div className="w-24 h-1 bg-orange-500 mx-auto mb-8">
             </div>
                <h2 className=" pb-3 text-lg">        Hinged Wardrobe Benefits Delhi | Customized Wardrobe Designs Delhi | Space-Saving Wardrobe Solutions Delhi
               </h2>
              
                <p className="text-sm text-gray-600 max-w-3xl mx-auto">
   While the modern Delhi furniture market offers a myriad of storage options, including extensive modular wardrobes in Delhi with various sliding or openable configurations, our shutter wardrobes (also commonly known as hinged door wardrobes) present distinct, compelling advantages. At Adhunik Decorative, we don't just embrace these benefits; we meticulously enhance them through superior craftsmanship and innovative design, ensuring a storage solution that is both visually stunning and profoundly practical.



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
                <div className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">

The Adhunik Decorative Promise: A Seamless Journey to Your Dream Wardrobe in Delhi

                </div>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <h2 className="md:text-xl text-gray-600 max-w-3xl mx-auto">
 Best Wardrobe Designers Delhi | Wardrobe Installation Delhi | Top Wardrobe Dealers Delhi


                </h2>
              </motion.div>
 <p className=" pb-3">
                Choosing Adhunik Decorative signifies more than just acquiring a wardrobe; it means partnering with a team passionately dedicated to design excellence, superior quality, and your absolute satisfaction. We commit to a seamless, transparent, and rewarding journey :

              </p>
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
              <p className="text-md font-bold text-orange-800 mb-2">
Transform Your Delhi Home with a Bespoke Shutter Wardrobe by Adhunik Decorative

  </p>
              <h2 className="text-sm text-gray-700 mb-2">
   Modern Bedroom Wardrobe Delhi | Custom Furniture Delhi | Adhunik Decorative Contact

              </h2>
              <p className="text-sm text-gray-700 mb-4">
Elevate your living space with a modern bedroom wardrobe in Delhi that truly embodies your style, offers unmatched functionality, and promises lasting quality. If you seek a storage solution that is meticulously crafted, intelligently designed, and a testament to luxury living in Delhi, Adhunik Decorative's shutter wardrobes are your definitive choice. Discover the difference in true bespoke craftsmanship.


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
