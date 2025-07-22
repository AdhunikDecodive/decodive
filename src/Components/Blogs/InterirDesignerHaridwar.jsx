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
    "Transform Your Haridwar Home: Why Adhunik Decodive is Your Top Choice for Premier Interior Design Services",
  subheadline:
    "Are you envisioning a living space in Haridwar that truly resonates with your spirit, blending modern elegance with the serene charm of this sacred city? The search for the best interior designer in Haridwar ends here. Adhunik Decodive, driven by a passion for innovative design, exceptional quality, and profound client satisfaction, is your premier partner for transforming homes and commercial spaces across Haridwar. From the tranquil locales by the Ganges to the bustling modern residential areas, we meticulously blend global design trends with local sensibilities to craft interiors that are truly unique, deeply personal, and highly functional.",
  ctaText: "Explore Our Philosophy",
  image:
    "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    title: "Residential Interior Design in Haridwar ",
    description:
        <>
        <div>
        
          <ul>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
              Living Room Interior Design : {" "}
              </strong>{" "}
     Crafting inviting, comfortable, and sophisticated communal spaces that are ideal for relaxation, entertaining guests, and family interaction.
 </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
            Bedroom Interior Design :
              </strong>{" "}
        Designing serene and personalized sanctuaries that promote ultimate relaxation and comfort, often featuring our signature custom wardrobes for optimized storage and a clutter-free environment.

           </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
         Modular Kitchen Design in Haridwar :
              </strong>{" "}

        Creating highly efficient, hygienic, and aesthetically pleasing modular kitchens that are tailored to your culinary habits, available space, and preferred style. We focus on ergonomic layouts, smart storage solutions, and durable, easy-to-maintain materials that stand up to daily use.

            </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
         Dining Room & Pooja Room Design :
              </strong>{" "}
     Harmonizing spaces for shared meals and designing tranquil, spiritual sanctuaries that respect traditional values and foster a sense of peace.


            </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
         Children's Room Design :
              </strong>{" "}
   Developing vibrant, safe, functional, and stimulating environments that are adaptable and can grow with your child's evolving needs.


            </li>
            
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
        Bathroom Design :
              </strong>{" "}

  Transforming functional bathrooms into personal spas, focusing on smart layouts, premium fixtures, and a refreshing ambiance.


            </li>
            
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
     Full Home Interior Design :
              </strong>{" "}

 Offering comprehensive design and execution solutions for apartments, independent villas, and bungalows, ensuring a cohesive, luxurious, and functional aesthetic throughout the entire property.


            </li>


          </ul>
        </div>
      </>

  },
  {
    icon: <FaBoxOpen className="text-3xl text-orange-600" />,
    title: "Commercial Interior Design in Haridwar",
    description:

          <>
        <div>
        
          <ul>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
               Office Interior Design :{" "}
              </strong>{" "}
   Designing productive, collaborative, and inspiring workspaces that enhance employee well-being, efficiency, and reflect your corporate brand identity.

 </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
              Retail & Showroom Design :
              </strong>{" "}

    Crafting captivating and inviting commercial environments that optimize product display, enhance the customer journey, and are designed to boost sales.

           </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
        Restaurant & Cafe Interior Design :
              </strong>{" "}

     Developing unique, themed, and atmospheric dining spaces that provide an unforgettable experience for your patrons and encourage repeat visits.


            </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
          Hotel & Hospitality Design :
              </strong>{" "}
 Creating elegant, comfortable, and functional interiors for hotels, guesthouses, and resorts, ensuring a memorable and satisfying experience for every guest.


            </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
        Specialty Commercial Projects :
              </strong>{" "}
 Our expertise extends to designing interiors for clinics, educational institutions, salons, jewellery shops, optical showrooms, and other specialized commercial establishments, always focusing on their specific functional and aesthetic needs.


            </li>
            
         
          </ul>
        </div>
      </>

  },
  {
    icon: <FaUsers className="text-3xl text-orange-600" />,
    title: "The Professional Interior Design Difference: A Smart Investment in Your Space",
    description:
    <>
        <div>
        <p className=" text-sm pb-3">
          Why should you entrust your precious space to a professional interior designer in Haridwar when you might consider a DIY approach? The benefits of professional expertise are undeniable:

        </p>
          <ul>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
               Cost-Effectiveness :{" "}
              </strong>{" "}
  A professional designer can prevent costly mistakes, leverage industry connections for better material pricing, and optimize your budget more effectively, often saving you money in the long run.

 </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
             Time-Saving & Stress Reduction :
              </strong>{" "}

   We manage the entire project, from conceptualization to execution, handling vendors, logistics, and unforeseen challenges. This saves you invaluable time and significantly reduces stress.


           </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
       Expert Advice & Access to Trends :
              </strong>{" "}

 Benefit from our deep knowledge of current design trends, innovative materials, and advanced space utilization techniques that you might not be aware of.


            </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
          Maximizing Potential :
              </strong>{" "}
 We see possibilities and solutions you might miss, transforming your space into something truly extraordinary that not only meets your needs but also significantly adds to its market value.



            </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
    Seamless Execution & Timely Delivery :
              </strong>{" "}
 Our structured project management ensures meticulous coordination, rigorous quality control, and adherence to timelines, translating your vision into reality efficiently and effectively, without hassle.


            </li>
            
         
          </ul>
        </div>
      </>
  },

 
];

const signatureDesigns = [
  {
    icon: <FaUtensils className="text-3xl text-orange-600" />,
    title: "Unmatched Expertise in Custom Wardrobe Solutions",
    description: (
      
      <>
        <div>
          <p className=" text-sm pb-3">
           While our design prowess extends across all interior elements, our distinct specialization in custom wardrobe solutions in Haridwar truly sets us apart. We understand that effective storage is far more than just utility; it's about seamless integration, elegant display, and intelligent organization that simplifies your life. Our bespoke wardrobes are meticulously designed to :
          </p>
          <ul>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                Maximize Every Inch : {" "}
              </strong>{" "}
          We utilize clever design techniques, from floor-to-ceiling constructions to intelligent corner units, ensuring every available space in your Haridwar home is efficiently harnessed. This is particularly vital in modern living, where space optimization is key </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
             Personalize Style & Functionality :
              </strong>{" "}
          From luxurious walk-in closets that embody opulence to sleek, integrated wardrobes perfect for compact apartments, we customize every detail. This includes internal configurations (drawers, shelves, hanging rods, pull-outs), and a vast array of finishes (laminate, veneer, glass, mirrors, textured surfaces) to match your aesthetic and storage needs perfectly. </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
             Enhance Property Value :
              </strong>{" "}
             A well-designed, custom wardrobe is not just a functional asset; it's a premium feature that significantly boosts your property’s aesthetic appeal, functionality, and ultimately, its resale value in the competitive Haridwar real estate market.

            </li>

            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                {" "}
           Ensure Enduring Quality & Craftsmanship :
              </strong>{" "}
        We commit to using only premium materials sourced from reputable national and international suppliers. Our skilled artisans apply superior craftsmanship, guaranteeing a long-lasting, robust, and beautiful storage solution that withstands the rigors of daily use.


            </li>
          </ul>
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "A Truly Holistic & Client-Centric Approach ",
    description: (
      <>
        <div>
          <span className=" text-sm">
           We believe that the most successful designs are born from a deep understanding of our clients. Our process begins with an in-depth consultation where we attentively listen to your ideas, lifestyle, functional requirements, aesthetic preferences, budget, and project aspirations. We then meticulously translate these insights into tangible concepts through:

          </span>
            <ul>
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
                Detailed Mood Boards :{" "}
              </strong>{" "}
      To capture the desired atmosphere, color palettes, and material textures.
</li>

         
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
               Innovative 2D & 3D Visualizations :{" "}
              </strong>{" "}
 Allowing you to virtually walk through and experience your future space, make informed decisions, and ensure complete alignment with your vision before any physical work commences.
</li>

         
            <li className=" font-thin">
              <strong className=" font-bold text-orange-500">
            Transparent Communication :{" "}
              </strong>{" "}
 We maintain open, transparent, and continuous communication throughout the project lifecycle, ensuring you are involved and informed at every stage of the design and execution journey.

</li>

         
          </ul>
        </div>
      </>
    ),
  },

  {
    icon: <FaChair className="text-3xl text-orange-600" />,
    title: "  A Legacy of Excellence and Strategic Design Philosophy",
    description: (
      <>
        <div>
          <p className=" text-sm">
      With years of hands-on experience in the interior design industry, our highly skilled and creative team comprises experts dedicated to delivering unparalleled results. Every project is meticulously planned and executed, drawing on a strategic, data-informed approach to ensure not just aesthetic brilliance but also optimal practical functionality and a tangible return on your investment. This ensures that your transformation is not just a beautiful design endeavor but a truly smart investment.
 </p>
      
        </div>
      </>
    ),
  },

  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: "   Uncompromising Quality, Material Mastery, and Innovative Solutions",
    description: (
      <span>
        <div>
            <p className=" text-sm">
  At Adhunik Decodive, quality is the cornerstone of our operations. We meticulously select high-quality materials, finishes, and fixtures, ensuring every component contributes to the longevity, luxurious feel, and enduring beauty of your interiors. We are also committed to embracing innovation, seamlessly integrating smart home features, energy-efficient lighting designs, and eco-friendly materials where desired, making your home not just aesthetically pleasing but also technologically advanced and sustainable. Our designs blend modern aesthetics with practical, long-lasting solutions.

 </p>
         

          <span className=" text-lg">
            <strong className=" font-bold text-orange-500">
              {" "}
              Countertops :{" "}
            </strong>{" "}
            Choose from classic Granite, elegant Quartz, or seamless Corian,
            each offering distinct advantages in aesthetics and maintenance.
          </span>
        </div>
      </span>
    ),
  },
  {
    icon: <FaBoxes className="text-3xl text-orange-600" />,
    title: " Local Understanding with World-Class Execution",
    description: (
      <>
        <div>
            <p className=" text-sm">
 While our design philosophy draws from cutting-edge global trends and international standards, our implementation is deeply rooted in local context. We possess a profound understanding of Haridwar’s unique climate conditions, the availability of local resources, and the diverse blend of traditional and contemporary tastes prevalent here. This ensures that whether we're designing a serene meditation nook, a vibrant family living space, or an efficient commercial office, the final design perfectly complements its surroundings and resonates with the specific needs of the Haridwar community.

 </p>
       
        </div>
      </>
    ),
  },
];

export default function InterirDesignerHaridwar() {
  return (
    <>
      <Helmet>
        <title>Best Interior Designer in Haridwar | Adhunik Decodive</title>
        <meta
          data-react-helmet="true"
          data-n-head="ssr"
          data-rh="true"
          name="description"
          content="Discover top-tier interior design in Haridwar with Adhunik Decodive. Specializing in luxury homes, modular kitchens & custom wardrobes."
        />
        <meta
          data-n-head="ssr"
          data-hid="robots"
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        ></meta>
        <link
          rel="canonical"
          href="https://adhunikdecodive.com/blogs/interior-designer-in-haridwar"
          data-react-helmet="true"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          data-n-head="ssr"
          data-hid="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          data-n-head="ssr"
          data-hid="http-equiv"
          httpEquiv="Accept-CH"
          content="DPR, Viewport-Width, Width, Save-Data"
        ></meta>

        {/* Open Graph / Facebook */}
        <meta
          data-n-head="ssr"
          data-hid="og:title"
          property="og:title"
          content="Best Interior Designer in Haridwar | Adhunik Decodive"
        />
        <meta
          data-n-head="ssr"
          data-hid="og:description"
          property="og:description"
          content="Discover top-tier interior design in Haridwar with Adhunik Decodive. Specializing in luxury homes, modular kitchens & custom wardrobes."
        />
        <meta
          data-n-head="ssr"
          data-hid="og:type"
          property="og:type"
          content="article"
        ></meta>
        <meta
          data-n-head="ssr"
          data-hid="og:url"
          property="og:url"
          content="https://adhunikdecodive.com/blogs/interior-designer-in-haridwar"
        ></meta>
        <meta
          data-n-head="ssr"
          data-hid="og:image"
          property="og:image"
          content="https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></meta>
        <meta
          data-n-head="ssr"
          data-hid="og:site_name"
          property="og:site_name"
          content="Adhunik Decodive"
        />

        {/* Twitter */}
        <meta
          data-n-head="ssr"
          data-hid="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        ></meta>
        <meta
          data-n-head="ssr"
          data-hid="twitter:site"
          name="twitter:site"
          content="@YourTwitterHandle"
        ></meta>
        <meta
          data-n-head="ssr"
          data-hid="twitter:title"
          name="twitter:title"
          content="Best Interior Designer in Haridwar | Adhunik Decodive"
        />
        <meta
          data-n-head="ssr"
          data-hid="twitter:description"
          name="twitter:description"
          content="Discover top-tier interior design in Haridwar with Adhunik Decodive. Specializing in luxury homes, modular kitchens & custom wardrobes."
        />
        <meta
          data-n-head="ssr"
          data-hid="twitter:image"
          name="twitter:image"
          content="https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></meta>

        {/* Keywords */}
        <meta
          data-n-head="ssr"
          data-hid="keywords"
          name="keywords"
          content="interior designer Haridwar, best interior designer Haridwar, best interior designer in Haridwar, custom wardrobes Haridwar, modular kitchen Haridwar, residential interior design Haridwar, commercial interior design Haridwar, luxury interior design Haridwar, top interior designer in Haridwar, home renovation Haridwar, office interior design Haridwar"
        />

        {/* Favicon */}
        <link
          rel="icon"
          href="https://res.cloudinary.com/dq14b7xie/image/upload/v1747811688/Adhunik_DecoDive_Logo_povt7l.webp"
          type="image/x-icon"
          data-react-helmet="true"
        />
      </Helmet>

      <div className="bg-[#FDFCFB] font-manrope text-slate-800 overflow-x-hidden">
        <Fonts />

        <main className=" px-4 xl:px-24 ">
          <section className="w-full bg-orange-50/50">
            <div className="container mx-auto px-6 pt-16 md:pb-24 pb-7 md:pt-24  ">
              <div className="  flex  flex-col-reverse md:flex-row md:gap-12 items-center">
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
                  className="relative  w-full md:w-6/12 h-[90vh]   "
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src={heroContent.image}
                    alt="A luxurious, modern wardrobe in a stylish home"
                    className="w-full h-full object-contain object-center rounded-2xl "
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
                <h2 className=" text-2xl pb-5">
                  Navigating Haridwar's Unique Aesthetic with Expert Interior
                  Designers
                </h2>
                <p className=" font-playfair  text-sm text-slate-900 leading-snug">
                  Haridwar, a city steeped in spiritual heritage, rich culture,
                  and natural beauty, presents a unique canvas for interior
                  design. Homes and businesses here often seek a delicate
                  balance between contemporary comforts and elements that
                  respect the local traditions, climate, and spiritual ethos. At
                  Adhunik Decodive, our approach as top interior designers in
                  Haridwar is precisely this: to create interiors that are not
                  only visually stunning and highly functional but also
                  harmoniously integrated with the essence of Haridwar. Whether
                  it’s a modern apartment offering panoramic views or a
                  traditional villa nestled in a quiet neighborhood, our designs
                  are conceived to uplift, inspire, and reflect the very soul of
                  the space and its occupants.
                </p>
              </div>
            </div>
          </motion.section>

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
The Adhunik Decodive Advantage: Why We Stand Out Among Haridwar's Best
                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
                Choosing the right interior design company in Haridwar is a crucial decision, one that impacts your daily life and the long-term value of your property. Here’s what makes Adhunik Decodive the preferred partner for discerning homeowners and businesses seeking excellence:

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
Our Comprehensive Range of Interior Design Services for Haridwar Properties
                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
                <p className=" md:text-xl  text-gray-600 max-w-3xl mx-auto">
           Adhunik Decodive offers a full suite of specialized interior design services in Haridwar for both residential and commercial clients, ensuring every space reaches its fullest potential:

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
          <motion.section
            id="finishes"
            className="pb-8 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="font-playfair text-2xl md:text-6xl font-bold text-slate-900">
Your Haridwar Dream Space Awaits with Adhunik Decodive
                </h2>
               
                
             

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
                Ready to embark on your interior design journey in Haridwar?
              </h2>
              <p className="text-sm text-gray-700 mb-4">
              Contact Adhunik Decodive today for a personalized consultation. Let us transform your space into a masterpiece of comfort, style, and unparalleled functionality.

              </p>
              <p className="text-sm text-gray-700 mb-4">
            Adhunik Decodive – Crafting Inspirations, Building Dreams in Haridwar. 

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
