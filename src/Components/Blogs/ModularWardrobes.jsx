import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, Check, LucidePhone, LucideMail, LucideGlobe } from "lucide-react";
import { Link } from "react-router-dom";
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
    "Elevate Your Delhi & Gurugram Home  Discover Adhunik Decodive's Luxury Modular Wardrobes",
  subheadline:
    "In the bustling metropolises of Delhi and Gurugram, where every square foot counts, your home transcends being merely a shelter; it's a personal sanctuary, a meticulously curated reflection of your sophisticated lifestyle. As the landscape of urban living continues its dynamic evolution, so too does the demand for interiors that are not just visually captivating but also supremely functional. Within this context, the humble wardrobe, once a simple storage unit, has transformed into a pivotal element of modern home design. Traditional closets often fall short of these contemporary expectations, leading to cluttered spaces and aesthetic compromises. This is precisely where Adhunik Decodive enters the picture, transforming chaotic closets into elegant, impeccably organized havens with our exquisite range of luxury modular wardrobes.",
  ctaText: "Explore Our Philosophy",
  image:
    "https://res.cloudinary.com/dq14b7xie/image/upload/v1748241098/14_higzua.webp",
};

const trends = [
  {
    title: "Sleek Minimalism with Understated Grandeur",
    description:
      "The prevailing preference leans towards clean lines, uncluttered facades, and seamless integration into the room’s architecture. This is often achieved through handle-less designs, utilizing sophisticated push-to-open mechanisms or subtle G-profile handles that disappear into the cabinetry. This minimalist approach often incorporates cleverly concealed storage, contributing to a serene, expansive, and visually calming environment – a precious commodity in dense urban settings. The absence of external hardware creates a visual flow that makes spaces feel larger and more cohesive.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Integrated Lighting for Ambiance and Precision",
    description:
      "The days of dim, unlit wardrobes are long gone. LED strip lighting, strategically integrated within wardrobe compartments, along hanging rails, and even as backlighting for open shelves or glass-fronted sections, revolutionizes both functionality and aesthetics. It not only illuminates every corner, making item selection effortless, but also adds a dramatic, luxurious ambiance, transforming the act of choosing an outfit into an indulgent experience. Sensor-activated lights further enhance convenience and energy efficiency.",
    image:
      "https://res.cloudinary.com/dq14b7xie/image/upload/v1746787112/2_DOOR_iygeqp_geugi6.webp",
  },
  {
    title: "Personalized Aesthetics & Vastu Considerations",
    description:
      "Discerning homeowners in Delhi and Gurugram increasingly desire wardrobes that reflect their individual personality and lifestyle. This extends beyond material choices to bespoke internal configurations and sometimes, even subtle integration of cultural elements like Vastu Shastra principles for harmony and positive energy flow, particularly in bedroom layouts.",
    image:
      "https://res.cloudinary.com/dq14b7xie/image/upload/v1748239631/4_xeqbnl_etb0rh.webp",
  },
];

const finishes = [
  {
    name: "High-Gloss & Matte Surfaces",
    description:
      "High-gloss laminates or acrylics imbue a space with a reflective sheen, making it appear brighter and more spacious. They exude a vibrant, modern energy. Conversely, sophisticated matte finishes offer an understated elegance, a soft, tactile presence that absorbs light, providing a serene and refined look, often favored for creating a calming bedroom environment.",
  },
  {
    name: "Textured Veneers & Exotic Laminates",
    description:
      "These finishes bring the warmth and character of natural elements into the design. High-quality engineered veneers can mimic the exquisite grains of rare woods, while textured laminates can replicate the feel of linen, leather, or even raw concrete, adding a unique tactile dimension and visual interest that elevates the ordinary to the extraordinary.",
  },
  {
    name: "Glass & Metallic Accents",
    description:
      "The incorporation of glass, whether clear, frosted, or tinted (like bronze or grey smoke), framed by slim, elegant metallic profiles (such as champagne gold, brushed brass, or sleek matte black), adds an element of lightness and transparency. This allows for curated displays, lending a boutique-like feel to the wardrobe and seamlessly blending it with the rest of the room's decor.",
  },
  {
    name: "PU and Lacquer Finishes",
    description:
      "For the ultimate in bespoke luxury, polyurethane (PU) and lacquer finishes offer a truly customized color palette and an incredibly smooth, durable surface. They allow for an almost infinite array of colors, perfectly matching the wardrobe to the room's precise aesthetic.",
  },
];
const finishes2 = [
  {
    name: "Sliding Door Wardrobes :",
    description:
      "These ingenious configurations are designed to make the absolute most of often-underutilized corner spaces, converting them into highly efficient and accessible storage zones. They provide continuous storage that flows seamlessly, maximizing the volumetric capacity of the room.",
  },
  {
    name: "L-Shaped & Corner Wardrobes :",
    description:
      "These finishes bring the warmth and character of natural elements into the design. High-quality engineered veneers can mimic the exquisite grains of rare woods, while textured laminates can replicate the feel of linen, leather, or even raw concrete, adding a unique tactile dimension and visual interest that elevates the ordinary to the extraordinary.",
  },
  {
    name: "Walk-in Wardrobes :",
    description:
      "For those with the luxury of more expansive homes in Gurugram's sprawling residences or Delhi's exclusive neighborhoods, a walk-in closet designed by Adhunik Decodive represents the ultimate in luxury. These are more than just storage; they are dedicated dressing sanctuaries, offering ample space for organized display, comfortable movement, and often incorporating a vanity or seating area.",
  },
  
];

const heroContent2 = {
  headline: "Modular Functionality : Smart Storage Solutions for Urban Living",
  subheadline:
    "In the highly competitive and dynamically evolving urban landscape of Delhi and Gurugram, where every square foot represents a significant investment, the intelligent utilization of space is paramount. Modular wardrobes emerge as the ultimate answer to this urban challenge, offering unparalleled flexibility, adaptability, and intelligent storage solutions that traditional, fixed wardrobes simply cannot provide. They are inherently designed to adapt to your unique space and lifestyle, representing the perfect synergy of luxury and functionality.",

  image:
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
};



const finishes3 = [
  {
    name: "Adjustable Shelves and Hanging Rails :",
    description:
      "Providing the flexibility to reconfigure your wardrobe as your needs or wardrobe contents change.",
  },

  {
    name: "Pull-Out Systems :",
    description:
      " Specialized pull-out racks for trousers, ties, belts, and even delicate scarves keep items crease-free and easily viewable.",
  },
  
  {
    name: "Dedicated Compartments :",
    description:
      " Custom-designed inserts for jewelry, watches, eyewear, and other accessories ensure precious items are stored safely and are always at hand",
  },
  {
    name: "Integrated Shoe Racks :",
    description:
      "Ventilated and specialized shoe racks cater to various types of footwear, keeping them organized and preserving their condition.",
  },
  {
    name: "Built-in Laundry Hampers & Valet Rods :",
    description:
      " Adding layers of convenience to your daily routine.",
  },
  {
    name: "Soft-Close Mechanisms :",
    description:
      " For drawers and shutters, ensuring a quiet, smooth, and luxurious operation that speaks to the quality of the craftsmanship.",
  },

 
  {
    name: "Smart Wardrobe Features :",
    description:
      " For the tech-savvy, options like integrated dehumidifiers (especially beneficial in Delhi's monsoon season), automatic lighting, or even smart mirrors with integrated displays can be incorporated.",
  },

 
  
];


const finishes4 = [
  {
    name: "Customization Beyond Compare – A Tailored Fit :",
    description:
      "The fundamental advantage of modular design lies in its inherent capacity for complete customization. Adhunik Decodive excels at crafting wardrobes that flawlessly fit into irregular wall dimensions, accommodate challenging architectural features such as sloped ceilings, integrate around structural beams, or seamlessly incorporate themselves around existing windows or doorways. This truly bespoke approach ensures that absolutely no space is wasted, transforming awkward corners into highly functional storage areas – a critical advantage in compact urban residences.",
  },

 
 
  
];

const finishes5 = [
  {
    name: "A Bespoke Design Journey :",
    description:
      " Our process begins with a comprehensive initial consultation, where our experienced designers take the time to understand your lifestyle, aesthetic preferences, existing decor, and precise storage requirements. We then translate this vision into detailed 2D layouts and stunning 3D visualizations, allowing you to walk through your future wardrobe before it's even built. Material selection is a collaborative process, ensuring every detail aligns with your taste and budget.",
  },
  {
    name: "Uncompromising Quality & Meticulous Craftsmanship :",
    description:
      "  At Adhunik Decodive, quality is not just a promise; it's a foundation. We meticulously source and utilize only the highest grade materials, ranging from durable, moisture-resistant engineered wood to premium laminates, exquisite veneers, and robust international-standard hardware. Our state-of-the-art manufacturing facility employs precision techniques, ensuring that every Adhunik Decodive wardrobe is built to exact specifications and designed for exceptional longevity, capable of withstanding the specific climate challenges of the Delhi-NCR region, including humidity and dust.",
  },

 
  {
    name: "Deep Local Understanding & Expertise :",
    description:
      " Our strong, deep-rooted presence and extensive experience across Delhi and Gurugram provide us with an unparalleled understanding of local design preferences, typical space constraints in apartments and bungalows, and the lifestyle needs of residents in different neighborhoods. This crucial local expertise allows us to deliver solutions that are not just visually stunning, but also supremely practical, highly efficient, and perfectly aligned with the aspirations of the region.",
  },

 
  {
    name: "Seamless Project Execution & After-Sales Support :",
    description:
      " From the moment of conceptualization to the final, flawless installation, we manage the entire project with unwavering attention to detail and efficiency. Our skilled installation teams ensure a clean, precise fit and finish. Furthermore, our commitment extends beyond installation; Adhunik Decodive offers dedicated after-sales support, ensuring your complete satisfaction and the continued performance of your investment.",
  },

 
 
  
];


// --- Main App Component ---
export default function ModularWardrobes() {
  return (



  <>

<Helmet>
    <title>Luxury Modular Wardrobes: Adhunik Decodive Delhi & Gurugram</title>
    <meta name="description" content="Elevate your Delhi & Gurugram home with Adhunik Decodive's luxury modular wardrobes. Discover modern designs, smart storage, and custom solutions. Request a consultation!" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
    <link rel="canonical" href="https://adhunikdecodive.com/blogs/modular-wardrobes" /> 
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>

    <meta property="og:title" content="Luxury Modular Wardrobes: Adhunik Decodive Delhi & Gurugram" />
    <meta property="og:description" content="Elevate your Delhi & Gurugram home with Adhunik Decodive's luxury modular wardrobes. Discover modern designs, smart storage, and custom solutions. Request a consultation!" />
    <meta property="og:url" content="https://adhunikdecodive.com/blogs/modular-wardrobes"></meta>
    <meta property="og:site_name" content="Adhunik Decodive - Interior Design Experts" />
    <meta property="og:locale" content="en_IN"></meta>
    <meta property="og:type" content="article"></meta> 
    <meta property="og:image" content="https://res.cloudinary.com/dq14b7xie/image/upload/v1748241098/14_higzua.webp" /> 
    <meta name="twitter:card" content="summary_large_image"></meta>
    <meta name="twitter:title" content="Luxury Modular Wardrobes: Adhunik Decodive Delhi & Gurugram" />
    <meta name="twitter:description" content="Elevate your Delhi & Gurugram home with Adhunik Decodive's luxury modular wardrobes. Discover modern designs, smart storage, and custom solutions. Request a consultation!" />
    <meta name="twitter:image" content="https://res.cloudinary.com/dq14b7xie/image/upload/v1748241098/14_higzua.webp" /> 
    <meta name="twitter:site" content="@AdhunikDecodive"></meta>
     <meta name="twitter:creator" content="@AdhunikDecodive"></meta> 
     <meta name="keywords" content="luxury modular wardrobes Delhi, custom wardrobes Gurugram, modern wardrobe designs Delhi, smart storage solutions Gurugram, Adhunik Decodive wardrobes, designer wardrobes Delhi NCR, bespoke closets Gurugram, space-saving wardrobes Delhi, premium wardrobe solutions India" />
    
   
 
</Helmet>


      <div className="bg-[#FDFCFB] font-manrope text-slate-800 overflow-x-hidden">
      <Fonts />

      <main className=" xl:px-24">
        <section className="w-full bg-orange-50/50">
          <div className="container mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
            <div className=" flex  flex-col-reverse md:flex-row  gap-12 items-center">
              <motion.div
                className="text-center w-full md:w-6/12 lg:text-left"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.h1
                  className="font-playfair  text-3xl font-bold text-slate-900 leading-tight"
                  variants={fadeIn}
                >
                  {heroContent.headline}
                </motion.h1>
                <motion.p
                  className="mt-6 text-sm  pe-6 text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
                  variants={fadeIn}
                >
                  {heroContent.subheadline}
                </motion.p>
              </motion.div>

              <motion.div
                className="relative w-full md:w-6/12 rounded-2xl overflow-hidden shadow-2xl"
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
        <motion.section
          id="about"
          className="py-10 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className=" font-playfair  text-lg text-slate-900 leading-snug">
                At Adhunik Decodive, we possess a profound understanding of the
                aspirations and discerning tastes of homeowners across Delhi and
                Gurugram. We recognize your desire for designs that blend
                seamlessly with cutting-edge contemporary aesthetics while
                offering ingenious solutions for maximizing and optimizing
                space. Our bespoke wardrobe designs are meticulously crafted to
                not only elevate the visual appeal of your home but also to
                provide an unparalleled blend of opulence, efficiency, and
                customized utility. This post will delve into the latest trends
                shaping luxury wardrobe design in the region and demonstrate why
                Adhunik Decodive stands as the premier choice for tailored,
                high-end storage solutions.
              </h2>
            </div>
          </div>
        </motion.section>

        {/* Trends Zig-Zag Section */}
        <section
          id="trends"
          className="py-20 md:py-32 bg-[#FDFCFB] overflow-hidden"
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn}
            >
              <h2 className="font-playfair text-4xl font-bold text-slate-900">
                The Modern Aesthetic : What's Trending in Delhi & Gurugram
                Luxury Wardrobes
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-4xl mx-auto">
                The interior design landscape across Delhi and Gurugram is in a
                perpetual state of innovation, consistently pushing boundaries
                towards refined elegance and contemporary chic. There's a
                palpable shift towards modern aesthetics and luxurious finishes,
                with homeowners increasingly viewing wardrobes as integral
                design statements rather than mere storage.
              </p>
              <p className="mt-4 text-lg text-slate-600 max-w-4xl mx-auto">
                Here are the key trends currently defining the pinnacle of
                luxury wardrobes in Delhi and Gurugram :
              </p>
            </motion.div>

            <div className="space-y-24 md:space-y-32">
              {trends.map((trend, index) => (
                <motion.div
                  key={index}
                  className="grid md:grid-cols-2 gap-12 md:gap-24 items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={staggerContainer}
                >
                  <motion.div
                    className={`relative rounded-2xl overflow-hidden shadow-2xl   ${
                      index % 2 !== 0 ? "md:order-2" : ""
                    }`}
                    variants={fadeIn}
                  >
                    <img
                      src={trend.image}
                      alt={trend.title}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/800x600/e2e8f0/334155?text=Trend";
                      }}
                    />
                  </motion.div>
                  <motion.div
                    className={`text-left ${
                      index % 2 !== 0 ? "md:order-1" : ""
                    }`}
                    variants={fadeIn}
                  >
                    <span className="text-orange-600 font-semibold uppercase tracking-widest">
                      0{index + 1}
                    </span>
                    <h3 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900 my-4">
                      {trend.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {trend.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Finishes Section */}
        <motion.section
          id="finishes"
          className="py-20 md:py-32 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-6xl font-bold text-slate-900">
                Premium Finishes That Command Attention
              </h2>
              <p className="text-lg text-slate-600 mt-4 max-w-3xl mx-auto">
                The choice of material and finish is paramount in conveying
                luxury and dictating the overall mood of the space. We observe a
                strong inclination towards:
              </p>
            </div>
            <motion.div
              className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto"
              variants={staggerContainer}
            >
              {finishes.map((finish, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
                  variants={fadeIn}
                >
                  <h4 className="font-bold text-slate-800 text-xl mb-2">
                    {finish.name}
                  </h4>
                  <p className="text-slate-600">{finish.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <section className="w-full bg-orange-50/50">
          <div className="container mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
            <div className=" flex flex-col md:flex-row-reverse gap-12 items-center">
              <motion.div
                className="text-center lg:text-left"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.h1
                  className="font-playfair  text-3xl font-bold text-slate-900 leading-tight"
                  variants={fadeIn}
                >
                  {heroContent2.headline}
                </motion.h1>
                <motion.p
                  className="mt-6 text-sm  pe-6 text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
                  variants={fadeIn}
                >
                  {heroContent2.subheadline}
                </motion.p>
              </motion.div>
              <motion.div
                className="relative  rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={heroContent2.image}
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




   <motion.section
          id="finishes"
          className="py-10 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-6">
            
            <motion.div
              className="grid sm:grid-cols-1 gap-8 max-w-5xl mx-auto"
              variants={staggerContainer}
            >
              {finishes4.map((finish, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
                  variants={fadeIn}
                >
                  <h4 className="font-bold text-slate-800 text-xl mb-2">
                    {finish.name}
                  </h4>
                  <p className="text-slate-600">{finish.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>



        {/* Finishes Section */}
        <motion.section
          id="finishes"
          className="py-10 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl   font-bold text-slate-900">
                Optimizing Every Inch – Maximizing Space Efficiency :
              </h2>
            </div>
            <motion.div
              className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto"
              variants={staggerContainer}
            >
              {finishes2.map((finish, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
                  variants={fadeIn}
                >
                  <h4 className="font-bold text-slate-800 text-xl mb-2">
                    {finish.name}
                  </h4>
                  <p className="text-slate-600">{finish.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>


        
        <motion.section
          id="finishes"
          className="py-10  bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl   font-bold text-slate-900">
               Intelligent Interiors for Effortless Organization – A Place for Everything : 

              </h2> 
              <p className=" py-4">Our modular wardrobes go far beyond mere external aesthetics. They are meticulously engineered from the inside out for ultimate organization and intuitive accessibility, ensuring that finding what you need is always effortless. This includes:</p>
            </div>
            <motion.div
              className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto"
              variants={staggerContainer}
            >
              {finishes3.map((finish, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
                  variants={fadeIn}
                >
                  <h4 className="font-bold text-slate-800 text-xl mb-2">
                    {finish.name}
                  </h4>
                  <p className="text-slate-600">{finish.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>


        <motion.section
          id="finishes"
          className="py-10  bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl   font-bold text-slate-900">
The Adhunik Decodive Advantage: Your Partner in Luxury Wardrobe Design

              </h2> 
              <p className=" py-4">
Choosing Adhunik Decodive means embarking on a collaborative journey with experts who profoundly understand the nuances of designing for the sophisticated homes of Delhi and Gurugram. We don't merely manufacture wardrobes; we craft personalized storage experiences that seamlessly integrate into your daily life and dramatically elevate your home's interiors.
              </p>
            </div>
            <motion.div
              className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto"
              variants={staggerContainer}
            >
              {finishes5.map((finish, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
                  variants={fadeIn}
                >
                  <h4 className="font-bold text-slate-800 text-xl mb-2">
                    {finish.name}
                  </h4>
                  <p className="text-slate-600">{finish.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

  <div className="md:p-24 grid md:grid-cols-2 items-center gap-12">
        <div>
          <img
            src="https://res.cloudinary.com/dq14b7xie/image/upload/v1748841834/4_let778.webp"
            alt="Kitchen Consultation"
            className="rounded-3xl shadow-lg w-full"
          />
        </div>
        <div className="bg-white border border-orange-200 rounded-3xl shadow-xl p-10">
          <h2 className="text-md font-bold text-orange-800 mb-4">
An Investment in Lifestyle : Beyond Storage          </h2>
          <p className="text-sm text-gray-700 mb-4">
A luxury modular wardrobe from Adhunik Decodive is far more than just a place to store your clothes. It is a thoughtful investment in a more organized, serene, and sophisticated lifestyle. It reduces clutter, saves time, enhances the value of your property, and most importantly, brings a sense of calm and order to your personal space. Imagine beginning and ending your day in a beautifully organized, functional, and aesthetically pleasing environment – this is the promise Adhunik Decodive delivers.
          </p>
          <h2 className="text-md font-bold text-orange-800 mb-4">
Ready to Transform Your Space?
 
        </h2>
          <p className="text-sm text-gray-700 mb-4">
Don't let inefficient storage detract from the beauty and functionality of your Delhi or Gurugram home. It's time to reimagine your personal space with elegance, efficiency, and customized luxury.
          </p>
          <p className="text-sm text-gray-700 mb-4">
Request a consultation for custom wardrobes in Gurugram (and Delhi) with Adhunik Decodive today! Our team of expert designers and craftsmen is eager to partner with you, translate your unique vision into a stunning reality, and help you unlock the full potential of your home's interiors. Visit our website or call us to schedule your personalized consultation.
          </p>
          <div className="grid gap-6">
            <div className="flex items-center gap-3">
              <LucidePhone className="text-orange-700 w-6 h-6" />
              <div>
                <div className="font-medium text-gray-800">Call Us</div>
                <div className="text-orange-800 font-semibold">9355588595</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <LucideMail className="text-orange-700 w-6 h-6" />
              <div>
                <div className="font-medium text-gray-800">Email Us</div>
                <div className="text-orange-800 font-semibold">info@adhunikdecodive.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <LucideGlobe className="text-orange-700 w-6 h-6" />
              <div>
                <div className="font-medium text-gray-800">Visit Our Website</div>
                <div className="text-orange-800 font-semibold"><Link className=' text-orange-600' to='/'>www.adhunikdecodive.com</Link></div>
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
