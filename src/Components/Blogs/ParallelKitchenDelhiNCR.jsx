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
    "The Smart Choice: Parallel Kitchen Designs for Efficient & Stylish Homes in Delhi NCR",
  subheadline:
    <>
        <div>
           <strong> Are you looking for a kitchen that masterfully balances efficiency, generous workspace, and a sleek, modern aesthetic ?</strong> For many urban homes in Delhi and Gurugram, the parallel (or galley) kitchen design offers an exceptionally functional and streamlined solution. At Adhunik Decodive, we specialize in crafting parallel modular kitchens that optimize every inch, transforming your cooking area into a highly efficient and visually appealing space.
           <p>
            This comprehensive guide will delve into the advantages of parallel kitchen designs, helping you discover if this smart layout is the perfect fit for your home.

           </p>

        </div>
    </>,
  ctaText: "Explore Our Philosophy",
  image:
    "https://res.cloudinary.com/dq14b7xie/image/upload/v1746786327/3_pptriy_tj3c7b.webp",
};

const finishes = [
  {
    name: "Modern Minimalism",
    description:
      "At Adhunik Decodive, our ultimate goal is to make a tangible impact on the organizations and homes we collaborate with. We are committed to helping you unlock your property's true potential, ensuring it not only meets but exceeds your expectations and stays ahead in the ever-evolving design landscape.",
  },
  {
    name: "Contemporary Chic",
    description:
      "Whether you're dreaming of a sophisticated modern minimalist apartment, a sprawling traditional Haridwar villa with contemporary accents, or the ultimate custom wardrobe solution that blends seamlessly into your lifestyle, Adhunik Decodive is your trusted partner for interior design excellence.",
  },
 
];

 
const benefits = [
  {
    icon: <FaExpandAlt className="text-3xl text-orange-600" />,
    title: "Incredibly stylish and reflective ",
    description:
        <>
        <div>
        
          <ul>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
             Sleek & Minimalist : {" "}
              </strong>{" "}
     Opt for handleless cabinets, a monochromatic palette, and integrated appliances for a clean, contemporary look that enhances the feeling of space.

 </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
         Vibrant & Modern :
              </strong>{" "}
    Introduce pops of color through backsplashes or cabinet accents, combined with sleek finishes for a lively, energetic kitchen.

           </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
        Rustic Charm :
              </strong>{" "}

        Incorporate wooden textures, open shelving, and industrial lighting for a cozy and inviting atmosphere.


            </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
        Open Parallel Kitchen :
              </strong>{" "}
    In some layouts, one side of the parallel kitchen can be an open counter, serving as a breakfast bar or seamlessly connecting to the dining/living area, making the space feel larger and more interactive.

            </li>

            


          </ul>
        </div>
      </>

  },
  {
    icon: <FaBoxOpen className="text-3xl text-orange-600" />,
    title: "Understanding the Investment: Parallel Modular Kitchen Costs in Delhi & Gurugram",
    description:

          <>
        <div>
        <div className=" text-sm pb-3">
            The cost of a parallel modular kitchen in Delhi and Gurugram varies based on several factors, ensuring options for various budgets :

        </div>
          <ul>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
              Kitchen Size :{" "}
              </strong>{" "}
  The overall length of the two parallel lines will impact material and labor costs.

 </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
            Material & Finish Choices :
              </strong>{" "}

   Premium materials like acrylic and PU finishes will be at a higher price point than laminates.


           </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
       Internal Accessories :
              </strong>{" "}

   The number and type of specialized pull-outs, soft-close hardware, and organizational units influence the final cost.


            </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
         Customization Level :
              </strong>{" "}
 Highly customized designs with unique features will reflect in the pricing.



            </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
       Appliance Integration : 
              </strong>{" "}
Whether you opt for integrated appliances or standard fit-ins.



            </li>
            
         
          </ul>
            <div className=" text-sm pb-3"> 
            Adhunik Decodive is committed to transparent pricing. Our team provides detailed quotations, breaking down every component, so you can make informed decisions that match your vision and budget.

          </div>
        </div>
      </>

  },
  {
    icon: <FaUsers className="text-3xl text-orange-600" />,
    title: "Why Choose Adhunik Decodive for Your Parallel Modular Kitchen?",
    description:
    <>
        <div>
        <p className=" text-sm pb-3">
       At Adhunik Decodive, we are passionate about creating kitchens that are not just functional but truly enhance your lifestyle. Our expertise in parallel kitchen designs ensures:

        </p>
          <ul>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
             Precision Craftsmanship :{" "}
              </strong>{" "}
 We bring years of experience and meticulous attention to detail to every project, guaranteeing a flawless finish and lasting quality.

 </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
         Tailored for Your Space :
              </strong>{" "}

 Every parallel kitchen we design is custom-built to your specific dimensions and preferences, maximizing efficiency and aesthetics.


           </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
      Premium Quality Materials :
              </strong>{" "}

 We source only the finest materials and utilize advanced manufacturing techniques, ensuring your kitchen is durable and beautiful for years to come.



            </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
         Seamless Project Execution : 
              </strong>{" "}
From the initial consultation and detailed 3D design to precision manufacturing and expert installation, our dedicated team ensures a smooth and stress-free process.


            </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
  Dedicated Support :
              </strong>{" "}
 Our commitment extends beyond installation, offering continued support to ensure your complete satisfaction.


            </li>
            
         
          </ul>
        </div>
      </>
  },

 
];

const signatureDesigns = [
  {
    icon: <FaUtensils className="text-3xl text-orange-600" />,
    title: "Unmatched Efficiency (The Perfect Galley)",
    description: (
      
      <>
        <div>
          <p className=" text-sm pb-3">
        The parallel layout naturally forms a narrow work triangle between the two opposing sides. This means everything is within easy reach, minimizing steps and making meal preparation incredibly efficient, especially for single cooks or small families.
          </p>
         
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "    Ample Counter Space ",
    description: (
      <>
        <div>
          <span className=" text-sm">
  Despite its often compact footprint, a parallel kitchen boasts two long, continuous stretches of counter space. This provides abundant room for prep work, small appliances, and even a breakfast bar if one side is kept open.


          </span>
           
        </div>
      </>
    ),
  },

  {
    icon: <FaChair className="text-3xl text-orange-600" />,
    title: "Generous Storage",
    description: (
      <>
        <div>
          <p className=" text-sm">
    With full-length cabinetry on both sides, a parallel kitchen offers significant storage capacity, allowing for organized placement of all your utensils, groceries, and appliances.

 </p>
      
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Clear Work Zones",
    description: (
      <span>
        <div>
            <p className=" text-sm">
  The layout allows for a clear separation of "wet" (sink, dishwasher) and "dry" (hob, prep area) zones, enhancing hygiene and workflow.

 </p>
         
 
        </div>
      </span>
    ),
  },
  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: " Ideal for Narrow Spaces ",
    description: (
      <>
        <div>
            <p className=" text-sm">
 This design is particularly well-suited for narrower kitchen areas where other layouts might feel cramped, making it a smart choice for many apartments and row houses in Delhi NCR.

 </p>
       
        </div>
      </>
    ),
  },
];

const signatureDesigns2 = [
  {
    icon: <FaUtensils className="text-3xl text-orange-600" />,
    title: "Aisle Width",
    description: (
      
      <>
        <div>
          <p className=" text-sm pb-3">
     Maintaining adequate space (ideally 3.5 to 4 feet) between the two parallel counters is crucial for comfortable movement, opening of drawers and doors, and allowing two people to work without obstruction.
 </p>
         
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Appliance Placement",
    description: (
      <>
        <div>
          <span className=" text-sm">
 Strategic positioning of the refrigerator, hob, oven, and sink on opposite or adjacent counters ensures an ergonomic flow and minimizes cross-traffic. For instance, the refrigerator and pantry can be on one side, while the sink and hob are on the other.


          </span>
           
        </div>
      </>
    ),
  },

  {
    icon: <FaChair className="text-3xl text-orange-600" />,
    title: " Lighting and Ventilation",
    description: (
      <>
        <div>
          <p className=" text-sm">
  Good lighting (task lighting under wall cabinets, ambient ceiling lights) is vital to illuminate both sides. A powerful chimney is paramount in parallel kitchens to effectively clear cooking fumes and maintain air quality.

 </p>
      
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "Storage Solutions",
    description: (
      <span>
        <div>
            <p className=" text-sm">
 Given the linear nature, smart storage solutions are key. Think tall units, pull-out pantries, deep drawers, and overhead cabinets with lift-up mechanisms to maximize every bit of vertical and horizontal space.

 </p>
         
 
        </div>
      </span>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: " Material & Finish Choices: Blending Aesthetics with Durability ",
    description: (
    <>
        <div>
        
          <ul>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
             Carcass :{" "}
              </strong>{" "}
      We recommend high-quality BWP (Boiling Water Proof) Plywood for its superior strength and moisture resistance, ensuring longevity in the Delhi climate.

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
     A highly durable and cost-effective choice with vast design options.

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
  
  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: " Storage Solutions ",
    description: (
    <>
        <div>
        
          <ul>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
          {" "}
              </strong>{" "}

    Given the linear nature, smart storage solutions are key. Think tall units, pull-out pantries, deep drawers, and overhead cabinets with lift-up mechanisms to maximize every bit of vertical and horizontal space.


 </li>
            
       

           


          </ul>
        </div>
      </>


    ),
  },

];


export default function ParallelKitchenDelhiNCR() {
  return (
    <>
   <Helmet>
    <title>Parallel Kitchen Design Delhi NCR | Adhunik Decodive Expert Guide</title>
    <meta name="description" content="Optimize your Delhi or Gurugram home with a smart parallel kitchen design. Discover efficient layouts, ample storage, and transparent costs. Get your free consultation from Adhunik Decodive." />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
    <link rel="canonical" href="https://adhunikdecodive.com/blogs/parallel-modular-kitchen-design-in-delhi-ncr" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>

    <meta property="og:title" content="Parallel Kitchen Design Delhi NCR | Adhunik Decodive Expert Guide" />
    <meta property="og:description" content="Optimize your Delhi or Gurugram home with a smart parallel kitchen design. Discover efficient layouts, ample storage, and transparent costs. Get your free consultation from Adhunik Decodive." />
    <meta property="og:url" content="https://adhunikdecodive.com/blogs/parallel-modular-kitchen-design-in-delhi-ncr"></meta>
    <meta property="og:site_name" content="Adhunik Decodive - Interior Design Experts" />
    <meta property="og:locale" content="en_IN"></meta>
    <meta property="og:type" content="article"></meta>
    <meta property="og:image" content="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786327/3_pptriy_tj3c7b.webp" />

    <meta name="twitter:card" content="summary_large_image"></meta>
    <meta name="twitter:title" content="Parallel Kitchen Design Delhi NCR | Adhunik Decodive Expert Guide" />
    <meta name="twitter:description" content="Optimize your Delhi or Gurugram home with a smart parallel kitchen design. Discover efficient layouts, ample storage, and transparent costs. Get your free consultation from Adhunik Decodive." />
    <meta name="twitter:image" content="https://res.cloudinary.com/dq14b7xie/image/upload/v1746786327/3_pptriy_tj3c7b.webp" />
    <meta name="twitter:site" content="@AdhunikDecodive"></meta>
    <meta name="twitter:creator" content="@AdhunikDecodive"></meta>

    <meta name="keywords" content="parallel kitchen design Delhi, galley kitchen Gurugram, efficient parallel kitchen, modern parallel kitchen ideas, parallel kitchen storage, modular kitchen cost Delhi NCR, Adhunik Decodive parallel kitchens, custom parallel kitchen, kitchen design Delhi, narrow kitchen solutions" />

   
</Helmet>


      <div className="bg-[#FDFCFB] font-manrope text-slate-800 overflow-x-hidden">
        <Fonts />

        <main className=" px-4 xl:px-24 ">
          <section className="w-full bg-orange-50/50">
            <div className="container mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
              <div className="  flex  flex-col-reverse md:flex-row gap-12 items-center">
                <motion.div
                  className="text-center  w-full md:w-6/12  lg:text-left"
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
                  className="relative  w-full h-full md:h-[60vh] md:w-6/12  rounded-2xl overflow-hidden shadow-2xl"
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
   Why Parallel Kitchens Are a Favorite for Modern Homes

                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
               The parallel kitchen layout features two single-line countertops and cabinets facing each other, creating a central aisle. This highly efficient "galley" style is gaining immense popularity for several compelling reasons:

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
  Key Design Considerations for Your Parallel Modular Kitchen

                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
            To harness the full potential of a parallel kitchen, thoughtful planning is essential. Adhunik Decodive's design experts meticulously consider:

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
Style Inspirations for Your Parallel Kitchen by Adhunik Decodive

                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p className=" md:text-xl  text-gray-600 max-w-3xl mx-auto">
         A parallel kitchen, while functional, can be incredibly stylish and reflective of your personal taste:

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
          Ready to transform your home with an efficient and elegant parallel kitchen?
  </h2>
              <p className="text-sm text-gray-700 mb-4">
           Let Adhunik Decodive be your trusted partner in crafting a culinary space that perfectly suits your Delhi or Gurugram home.

              </p>
              <p className="text-sm text-gray-700 mb-4">
      Explore Adhunik Decodive's Portfolio of Stunning Parallel Modular Kitchens!. 

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
