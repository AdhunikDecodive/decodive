import { Tabs } from "flowbite-react";



import PhoneCallButton from "./PhoneCallButton";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";
import { FiChevronRight } from 'react-icons/fi';
import { BiCabinet, BiSlideshow, BiWalk } from 'react-icons/bi';
import { motion } from 'framer-motion'; 

// import { Power2, Power4 } from 'gsap';

gsap.registerPlugin(useGSAP, ScrollTrigger);

import ModalNew from './ModalNew';
import { useState } from "react";
import PopUp from "./PopUp";
import { Link } from "react-router-dom";


import { AdvancedImage } from '@cloudinary/react';
import { FiSettings, FiLayers, FiHome, FiEye, FiShield } from 'react-icons/fi';
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { FiTrendingUp, FiMaximize2, FiMinimize2, FiGrid, FiImage, FiPhone } from 'react-icons/fi';
import { FaCity, FaRulerVertical, FaShoePrints } from 'react-icons/fa';
import { BookImage, PhoneCall, Wand2 } from "lucide-react";


function Wardrobe() {

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  useGSAP(() => {

    gsap.from(".box", {
      x: 360,
      stagger: .03,

    });


  });

  const onClickBad = () => {

  };

  const AllcardData = [
    {
      id: 1,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241098/14_higzua.webp',
      title: "Walk in Wardrobe ",
      description:
        "Compact Walk in Wardrobe with mirror front and side shelf. Ideal for small rooms, contemporary style.",
      link: "/Walk-in-door-wardrobes",
      unique: true,
    }
    ,
    {
      id: 2,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787140/9_pck731_agwpa6.webp',
      title: "Shutter Wardrobe",
      description:
        "A clean and contemporary double-door wardrobes design with a neutral gray color and black handles",
      link: "/shutter-door-wardrobe",
      unique: true,
    },
    {
      id: 3,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239652/wr8-1709018266-CXd5t_17_11zon_1_cg5n77_ixcpn0.webp',
      title: "Sliding  Wardrobe",
      description:
        "Contemporary wardrobe with three sliding doors with a white laminate finish for a sleek and modern design",
      link: "/sliding-door-wardrobes",
    },
    {
      id: 4,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241117/20_ohlmrl.webp',
      title: "Walk in Door Wardrobe",
      description: "Modern walk-in wardrobe with shelves, drawers, and hanging rods, accented with gray trim.",
      link: "/Walk-in-door-wardrobes",
    },
    {
      id: 5,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239641/11_jteifh_igjgq6.webp',
      title: "Sliding Wardrobe",
      description:
        "The Sliding Wardrobe with clean, white finish with a full-length mirror space-saving storage solution.",
      link: "/sliding-door-wardrobes",
      unique: true,
    },
    {
      id: 6,
      imageUrl: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787112/2_DOOR_iygeqp_geugi6.webp',
      title: "Shutter  Wardrobe ",
      description:
        "Simple Shutter  Wardrobe with yellow and gray colored wood and silver handles.",
      link: "/shutter-door-wardrobe",
    },

  ];

  const UcardData = [
    {
      id: 1,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788263/22_itwnc3_yxqtkc.webp',
      title: "",
      description:
        "The built-in 2- door wardrobes ,white laminate finish with concealed closures. Creating a streamlined and contemporary storage solution.",
      unique: true,
    },
    {
      id: 2,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788247/21_mhqbgn_coobjp.webp',
      title: "",
      description:
        "White Shutter wardrobes with stripes and concealed closures for a clean, modern look that complements the bedroom's style",
      unique: true,
    },
    {
      id: 3,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746788245/20_ynxzl7_su8usi.webp',
      title: "",
      description:
        "Stylish gray Shutter wardrobe with matte finish. Additional corner storage for versatility. Elevate your bedroom with practicality and sophistication",
      unique: true,
    },
    {
      id: 4,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787170/18_gx25rn_uin0fb.webp',
      title: "",
      description:
        " The white wardrobes with a circular motif embossed on the doors, creating a visually interesting element in the space. ",
      unique: true,
    },
    {
      id: 5,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787166/17_dsisju_zxsonf.webp',
      title: "",
      description:
        "The Shutter wardrobe  with a minimalist design with a wooden frame and a horizontal panel configuration.",
    },
    {
      id: 6,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1746787163/16_y6ttql_xy6lim.webp',
      title: "",
      description:
        "Modern Shutter wardrobe with a mirrored front offers stylish storage for clothes and belongings.",
    },
    // Add more card objects as needed
  ];

  const PcardData = [
    {
      id: 1,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239649/17_1_u32jdj_rjhaod.webp',
      title: "",
      description:
        "Sliding  wardrobes with two cherry red doors for smooth access to the interior and maintaining a clean and contemporary aesthetic",
      unique: true,

    },
    {
      id: 2,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239648/16_wknork_ax1blg.webp',
      title: "",
      description:
        "The sliding wardrobes with white laminate doors that span from floor to ceiling for a modern, minimalist look.",
    },
    {
      id: 3,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239645/15_ucg5gv_fisniw.webp',
      title: "",
      description:
        "Sliding wardrobe with geometric chevron design in cherry red on lacquered glass doors adding a touch of elegance and contemporary style.",
    },
    {
      id: 4,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239644/14_uwgozu_ztg7tf.webp',
      title: "",
      description:
        "The beige sliding wardrobe design with three doors made up of plywood with a polished finish adds a touch of sophistication.",
    },
    {
      id: 5,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239637/9_ya6jlf_wyf9ek.webp',
      title: "",
      description:
        "A contemporary sliding wardrobe design two sliding doors with alternating opaque white and sunshine yellow panels for a modern and colorful accent",
    },
    {
      id: 6,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1748239640/10_fnqni2_ahxaog.webp',
      title: "",
      description:
        " Sliding wardrobe design with a Shutter, floor-to-ceiling panel configuration with a lacquered glass finish. And a black, metal trim.",
    },
    // Add more card objects as needed
  ];

  const IScardData = [
    {
      id: 1,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241120/21_uewnvj.webp',
      title: "",
      description:
        "A large,custom walk-in closet with a central island that includes clothing storage and a bench offering a functional and stylish design element.",
    },
    {
      id: 2,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241113/19_o89g8u.webp',
      title: "",
      description:
        "A minimalist Scandinavian walk-in closet with light wood tones, clean lines, and uncluttered storage, reflecting the Scandinavian design aesthetic.",
    },
    {
      id: 3,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241110/18_wgcoc0.webp',
      title: "",
      description:
        "A contemporary walk-in closet made from high-grade wood. With a combination of drawers and shelves integrated with led light for visually appealing space.",
    },
    {
      id: 4,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241107/17_nexx5h.webp',
      title: "",
      description:
        "Spacious and well-organized a white walk-in closet with shelves, drawers and hanging rails.",
    },
    {
      id: 5,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241104/16_bz8ghu.webp',
      title: "",
      description:
        "Elegant walk-in closet with built-in dressing table, mirror, and white wood finish for chic storage.",
    },
    {
      id: 6,
      imageUrl:
        'https://res.cloudinary.com/dq14b7xie/image/upload/v1748241095/13_cg3uyw.webp',
      title: "",
      description:
        "Spacious custom walk-in closets with white wood shelves, drawers and hanging light all in sleek finish.",
    },
    // Add more card objects as needed
  ];

  const wardrobeTypes = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746787118/2door_anczh8_ejew4y.webp",
      icon: <BiCabinet className="text-2xl" />,
      title: " Shutter Wardrobes: Classic Elegance, Timeless Appeal",
      subtitle: "Classic Elegance, Timeless Appeal",
      description: "For those who appreciate enduring beauty and full accessibility, our shuttered (hinged) wardrobes offer classic charm with robust functionality. Ideal for larger rooms, they allow complete visibility of your wardrobe contents, making it easy to organize and access your belongings. Choose from a vast array of materials like premium laminates, natural veneers, high-gloss acrylic, sophisticated lacquered glass, or rich solid wood. Our designs encompass various shutter styles, handle options, and internal configurations, ensuring a perfect match for your home's décor, whether in the classic homes of Dehradun or modern residences in Gurugram.",
      features: [
        "Premium laminates, veneers, or solid wood",
        "Custom hinge mechanisms",
        "Tailored internal layouts",
        "Multiple handle and finish options"
      ],
      more: <>
        <Link to='/shutter-door-wardrobe'>
          Learn More About Shutter Wardrobes
        </Link>
      </>,
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dq14b7xie/image/upload/v1748239635/7_1_bmnrhz_x5j1ov.webp",
      icon: <BiSlideshow className="text-2xl" />,
      title: "Sliding Wardrobes: Modern, Space-Saving Solutions",
      subtitle: "Modern, Space-Saving Solutions",
      description: "Perfect for contemporary homes and compact spaces, our sliding wardrobes glide effortlessly, freeing up valuable floor space while delivering a sleek, minimalist look. Their innovative design is ideal for narrow passages or bedrooms where swing doors would be impractical, a common consideration in urban dwellings from Gurugram to Meerut. We offer a wide selection of panel materials, including elegant mirrored surfaces to visually expand your room, sophisticated lacquered glass, or classic wooden finishes. With smooth-glide mechanisms and soft-closing features, our sliding wardrobes offer both effortless functionality and cutting-edge style.",
      features: [
        "Mirrored or lacquered glass finishes",
        "Soft-closing runners",
        "Space-efficient design",
        "Custom panel materials"
      ],
      more: <>
        <Link to='/sliding-door-wardrobes'>
          Explore Our Sliding Wardrobes
        </Link>
      </>,

    },
    {
      id: 3,
      icon: <BiWalk className="text-2xl" />,

      img: "https://res.cloudinary.com/dq14b7xie/image/upload/v1748241082/9_z3u4pm.webp",
      title: "Walk-in Wardrobes: The Ultimate in Luxury & Organization",
      subtitle: "The Ultimate in Luxury & Organization",
      description: "Indulge in the epitome of personalized luxury with Adhunik Decodive's custom walk-in closets. Designed to be a private sanctuary, these offer unparalleled organization and bespoke features for your extensive collection. Our walk-in wardrobes are meticulously planned to include dedicated sections for clothing, footwear, accessories, and more, all within a beautifully illuminated and accessible space. From custom island units to integrated dressing tables and specialized display shelving, we create a truly tailored experience that enhances your daily routine and adds significant value to your home, from the spacious residences in Delhi NCR to the expansive bungalows in Haridwar.",
      features: [
        "Integrated lighting solutions",
        "Island units & dressing tables",
        "Bespoke organization systems",
        "Material and finish customization"
      ],
      more: <>
        <Link to='/Walk-in-door-wardrobes'>
          Discover Your Dream Walk-in Wardrobe
        </Link>
      </>,


    }
  ];

  const benefits = [
    {
      icon: <FiSettings className="text-2xl" />,
      title: "Precision Engineering & Unmatched Craftsmanship",
      description: "Every Adhunik Decodive wardrobe is a testament to superior craftsmanship. We utilize high-grade, durable materials, precision-cut with the latest European machinery, ensuring flawless finishes and lasting durability that withstand the demands of diverse environments across Gurugram, Delhi NCR, Haridwar, Dehradun, Roorkee, Muzaffarnagar, and Meerut."
    },
    {
      icon: <FiLayers className="text-2xl" />,
      title: "Data-Driven Design & Strategic Impact",
      description: "Our design process integrates informed insights into optimal space utilization, material performance, and emerging trends. This strategic approach ensures your wardrobe is not just beautiful, but a highly efficient, high-impact asset for your home, maximizing both functionality and your investment."
    },
    {
      icon: <FiHome className="text-2xl" />,
      title: "Personalized Consultation & 3D Visualization",
      description: "We believe in a truly collaborative process. Our expert designers offer personalized consultations, diligently understanding your lifestyle, precise space requirements, and aesthetic preferences. We then bring your vision to life with detailed 3D designs, allowing you to explore every detail and make adjustments."
    },
    {
      icon: <FiEye className="text-2xl" />,
      title: "Seamless Installation Across Our Service Areas",
      description: "Our dedicated, highly skilled installation team ensures a swift, clean, and professional assembly at your residence in Gurugram, Delhi, Noida, Faridabad, Ghaziabad, Haridwar, Dehradun, Roorkee, Muzaffarnagar, or Meerut. We handle every aspect, providing a hassle-free experience from the initial concept to the final, perfect installation."
    },
    {
      icon: <FiShield className="text-2xl" />,
      title: "Uncompromising Quality & Comprehensive Warranty",
      description: "We stand by the quality and longevity of our work. Adhunik Decodive wardrobes come with comprehensive warranties, giving you peace of mind and full assurance in your investment."
    },
    {
      icon: <FaCanadianMapleLeaf className="text-2xl" />,
      title: "Sustainable & Eco-Friendly Options",
      description: "Committed to a greener future, we offer a range of sustainable material choices, allowing you to make an environmentally conscious decision without compromising on style or quality."
    }
  ];

  const processSteps = [
    {
      title: "Initial Consultation & Needs Assessment",
      description: "We begin with a detailed discussion to understand your exact requirements, space constraints, and aesthetic preferences. This can be an online consultation or a visit to your home within our extensive service region."
    },
    {
      title: "Expert Design & 3D Visualization",
      description: "Our designers craft preliminary concepts, followed by realistic 3D renderings that allow you to visualize your custom wardrobe from every angle and refine details."
    },
    {
      title: "Material Selection & Customization",
      description: "Choose from our extensive range of premium materials, finishes, and accessories. Our experts guide you through selecting the perfect options that fit your style, functionality needs, and budget."
    },
    {
      title: "Precision Manufacturing",
      description: "Once finalized, your wardrobe is meticulously crafted in our state-of-the-art facility using advanced machinery and skilled artisans, ensuring unparalleled quality and precision."
    },
    {
      title: "Professional Installation & Quality Check",
      description: "Our experienced installation team ensures seamless and efficient assembly at your residence, followed by a thorough quality inspection to guarantee perfection."
    },
    {
      title: "Post-Installation Support",
      description: "Our commitment extends beyond installation. We provide excellent after-sales support to ensure your complete satisfaction and the long-term enjoyment of your Adhunik Decodive wardrobe."
    }
  ];

  const trends = [
    {
      icon: <FaRulerVertical className="text-2xl" />,
      title: "Maximizing Vertical Space",
      description: "With living spaces in cities like Gurugram and Delhi often compact, floor-to-ceiling wardrobes and smart loft storage are highly sought after to utilize every possible inch. This efficiency is increasingly valued in growing urban centers like Dehradun and Meerut as well."
    },
    {
      icon: <FiLayers className="text-2xl" />,
      title: "Integrated Solutions",
      description: "Modern designs often feature wardrobes with integrated dressing units, concealed drawers, and multi-functional accessories that serve more than one purpose, reflecting a desire for smart, consolidated living."
    },
    {
      icon: <FiMinimize2 className="text-2xl" />,
      title: "Sleek & Minimalist Finishes",
      description: "High-gloss, sophisticated matte, and subtle wood textures are popular, creating a seamless and uncluttered look that complements modern interiors across all regions."
    },
    {
      icon: <FiImage className="text-2xl" />,
      title: "Mirrored & Glass Accents",
      description: "Mirrored panels and elegant lacquered or frosted glass continue to be popular, adding depth, light, and a touch of sophistication to any space, from traditional homes in Haridwar to contemporary apartments in Noida."
    },
    {
      icon: <FaShoePrints className="text-2xl" />,
      title: "Smart Internal Organizers",
      description: "Increasing demand for specialized organizers like pull-out trouser racks, bespoke jewelry drawers, revolving shoe racks, and custom accessory compartments for ultimate organization."
    }
  ];

   const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };



  return (
    <>


      <Helmet>
      

        <title>Custom Wardrobes in Gurugram, Delhi NCR & Beyond | Adhunik Decodive</title>

        <meta name="description" content="Discover Adhunik Decodive's exquisite range of custom wardrobes. Serving Gurugram, Delhi NCR, Haridwar, Dehradun, Meerut & more, we craft personalized storage solutions for your home. Get a free consultation today!" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        <link rel="canonical" href="https://adhunikdecodive.com/wardrobes" /> <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>

        <meta property="og:title" content="Custom Wardrobes in Gurugram, Delhi NCR & Beyond | Adhunik Decodive" />
        <meta property="og:description" content="Discover Adhunik Decodive's exquisite range of custom wardrobes. Serving Gurugram, Delhi NCR, Haridwar, Dehradun, Meerut & more, we craft personalized storage solutions for your home. Get a free consultation today!" />
        <meta property="og:url" content="https://adhunikdecodive.com/wardrobes"></meta> <meta property="og:site_name" content="Adhunik Decodive - Interior Design Experts" />
        <meta property="og:locale" content="en_IN"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:image" content="https://adhunikdecodive.com/images/wardrobe-overview-social-share.jpg" />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="Custom Wardrobes in Gurugram, Delhi NCR & Beyond | Adhunik Decodive" />
        <meta name="twitter:description" content="Discover Adhunik Decodive's exquisite range of custom wardrobes. Serving Gurugram, Delhi NCR, Haridwar, Dehradun, Meerut & more, we craft personalized storage solutions for your home. Get a free consultation today!" />
        <meta name="twitter:image" content="https://adhunikdecodive.com/images/wardrobe-overview-social-share.jpg" />
        <meta name="keywords" content="custom wardrobes Gurugram, modular wardrobes Delhi NCR, sliding wardrobes Haridwar, walk-in closets Dehradun, wardrobe designs Meerut, bespoke wardrobes Roorkee, storage solutions Muzaffarnagar, modern wardrobe Delhi, Adhunik Decodive wardrobes, custom closet design India" />



      </Helmet>

      <PopUp />

      <ModalNew isOpen={openModal} onClose={toggleModal} />

      <div className="w-auto  bg-white p-5">
        <div className="h-full w-full ">
          <div className="video_container "></div>

          <div className="w-full h-full">
            <div className="video_card"></div>
          </div>

          <div className="row flex relative ">

            <img src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746610731/Wardrobe_category_bbbltk.webp"
              alt="Wardrobes that Reflects your Style Unveil Our Latest Design Collection!  "
              className="   relative   h-[86vh]  md:h-[55vh] w-full object-cover rounded-lg "
            />
            <div className="w-full  h-full p-9 bottom-0 flex-col justify-center md:justify-between  flex md:flex-row-reverse  md:text-center  items-center mx-auto  absolute">
              <p className=" h-full  text-white text-3xl flex-col flex my-auto justify-center items-center ">

              </p>

              <div className="w-fit border-cyan-500 border-[1px] rounded-lg text-center p-5 bg-[#fffffb]">

                <p className="text-2xl">Wardrobe Designs</p>
                <p className="bg-black w-fit mx-auto text-white p-1 relative rounded-full  mt-9">
                  Starting
                </p>

                <div className="w-full flex justify-around h-10vh mx-auto relative bottom-4">
                  <div className="line1 w-3/12 h-[1px] border border-black rounded-full">

                  </div>
                  <div className="line1 w-3/12 h-[1px] border border-black rounded-full">

                  </div>
                </div>

                <p className="text-2xl">₹50,000</p>
                <p className="text-xl">
                  <span className="bg-cyan-200 rounded-sm p-1">FREE</span>{" "}
                  Quotation
                </p>

                <button onClick={toggleModal} className=" mt-3 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#8F664E] rounded-full shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[#8F664E] duration-300 -translate-x-full bg-[#eae5e3] group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease   font-extrabold bg-[#8F664E]">   Book Free Consultation</span>
                  <span className="relative invisible font-extrabold">   Book Free Consultation</span>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full h-full md:p-9  text-justify md:text-center">
            <p className="text-4xl text-center mt-2 md:mt-0">Wardrobe Designs</p>
            <p className="text-gray-600 mt-3">
              Tired of boring storage solutions that stifle your style? Your wardrobe deserves to be an extension of you, a haven for favorite outfits that spark joy with every opening. We totally understand – leaving no decision in your way can be hard. That's exactly why our Adhunik DecoDive team has created and carefully selected the perfect space and personality-fit collection! Need classic organization? Our Single & Shutter wardrobes are perfect for any size room. Live in a compact space? Maximize every inch with our smooth-gliding Sliding Wardrobes. Craving the ultimate storage dream? Walk-In Wardrobes are your answer. But wait, there's more! Unleash your inner designer with our Modular Wardrobes. Imagine customizing shelves, drawers, and compartments to create the dream closet you've always wanted – functionality and style never looked so good!
            </p>

          </div>
        </div>

        <Tabs
          aria-label="Tabs with underline"
          style="underline"
          className=" z-0  flex flex-wrap -mb-px text-sm font-medium text-center mt-7 mx-auto my-auto justify-center"
        >
          <Tabs.Item
            active
            title={
              <div onClick={onClickBad} className=" group relative cursor-pointer justify-center  transition-shadow   items-center w-auto max-w-xs ">

                <AdvancedImage

                  src="https://res.cloudinary.com/dq14b7xie/image/upload/v1748239650/sw_vvrgby_rm4rr8.webp"
                  className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden" alt="All Wardrobe Designs Category "
                  decoding="async"
                  effect="blur"

                />


                All Category
              </div>
            }
          >
            <div className=" w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {AllcardData.map((card) => (
                <div
                  key={card.id}
                  className="group relative cursor-pointer items-center justify-center  transition-shadow hover:shadow-xl hover:shadow-black/30 box max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Link to={card.link}>

                      <AdvancedImage
                        src={card.imageUrl}
                        alt={card.description}
                        className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                        style={card.unique ? { objectFit: 'fill', objectPosition: '100% 37%' } : {}}
                      />


                    </Link>
                  </div>
                  <div className="p-6">
                    <h2 className="text-base font-medium text-blue-gray-900 mb-2">
                      {card.title}
                    </h2>
                    <p className="text-sm text-gray-700 opacity-75 leading-normal mb-4">
                      {card.description}
                    </p>
                    <div className="flex justify-between">
                      <PhoneCallButton />
                      <button onClick={toggleModal} className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"> Get Free Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tabs.Item>


          <Tabs.Item
            title={
              <div onClick={onClickBad} className="  group relative cursor-pointer justify-center  transition-shadow   items-center w-auto max-w-xs">

                <AdvancedImage
                  src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746787127/5_vlpb5h_ouesep.webp"
                  height={70}
                  width={70}
                  className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden" alt="Shutter Wardrobe"
                  decoding="async"
                  effect="blur"

                />


                Shutter Wardrobe
              </div>
            }
          >
            <div className=" w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {UcardData.map((card) => (
                <div
                  key={card.id}
                  className="group relative cursor-pointer items-center justify-center  transition-shadow hover:shadow-xl hover:shadow-black/30 box max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Link to='/shutter-door-wardrobe'>

                      <AdvancedImage
                        src={card.imageUrl}
                        alt={card.description}
                        className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                        style={card.unique ? { objectFit: 'fill', objectPosition: '100% 37%' } : {}}
                      />

                    </Link>
                  </div>
                  <div className="p-6">
                    <h2 className="text-base font-medium text-blue-gray-900 mb-2">
                      {card.title}
                    </h2>
                    <p className="text-sm text-gray-700 opacity-75 leading-normal mb-4">
                      {card.description}
                    </p>
                    <div className="flex justify-between">
                      <PhoneCallButton />
                      <button onClick={toggleModal} className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"> Get Free Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tabs.Item>

          <Tabs.Item
            title={
              <div onClick={onClickBad} className="group relative cursor-pointer justify-center  transition-shadow   items-center w-auto max-w-xs">

                <AdvancedImage
                  src="https://res.cloudinary.com/dq14b7xie/image/upload/v1748239629/2_eu0v3u_yxnhtx.webp"
                  height={70}
                  width={70}
                  className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden" alt="Sliding Wardrobe"
                  decoding="async"
                  effect="blur"

                />

                Sliding Wardrobe
              </div>
            }
          >
            <div className=" w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {PcardData.map((card) => (
                <div
                  key={card.id}
                  className="group relative cursor-pointer items-center justify-center  transition-shadow hover:shadow-xl hover:shadow-black/30 box max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Link to='/sliding-door-wardrobes'>
                      <AdvancedImage
                        src={card.imageUrl}
                        alt={card.description}
                        className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                        style={card.unique ? { objectFit: 'fill', objectPosition: '100% 37%' } : {}}
                      />
                    </Link>
                  </div>
                  <div className="p-6">
                    <h2 className="text-base font-medium text-blue-gray-900 mb-2">
                      {card.title}
                    </h2>
                    <p className="text-sm text-gray-700 opacity-75 leading-normal mb-4">
                      {card.description}
                    </p>
                    <div className="flex justify-between">
                      <PhoneCallButton />
                      <button onClick={toggleModal} className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"> Get Free Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tabs.Item>

          <Tabs.Item
            title={
              <div onClick={onClickBad} className=" group relative cursor-pointer justify-center  transition-shadow   items-center w-auto max-w-xs">

                <AdvancedImage
                  src="https://res.cloudinary.com/dq14b7xie/image/upload/v1748241101/15_zish43.webp"
                  height={70}
                  width={70}
                  className="h-24 w-24 rounded-full mx-auto my-auto object-cover mb-2 transition-transform duration-500 group-hover:scale-110  overflow-hidden" alt=" Walk in Wardrobe"
                  decoding="async"
                  effect="blur"
                />


                Walk in Wardrobe
              </div>
            }
          >
            <div className=" w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {IScardData.map((card) => (
                <div
                  key={card.id}
                  className="group relative cursor-pointer items-center justify-center  transition-shadow hover:shadow-xl hover:shadow-black/30 box max-w-md w-full bg-white shadow-md rounded-xl overflow-hidden"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Link to='/Walk-in-door-wardrobes'>
                      <AdvancedImage
                        src={card.imageUrl}
                        alt={card.description}
                        className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                        style={card.unique ? { objectFit: 'fill', objectPosition: '100% 37%' } : {}}
                      />
                    </Link>
                  </div>


                  <div className="p-6">
                    <h2 className="text-base font-medium text-blue-gray-900 mb-2">
                      {card.title}
                    </h2>
                    <p className="text-sm text-gray-700 opacity-75 leading-normal mb-4">
                      {card.description}
                    </p>
                    <div className="flex justify-between">
                      <PhoneCallButton />
                      <button onClick={toggleModal} className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease"> Get Free Quote</span>
                      </button>
                    </div>
                  </div>


                </div>
              ))}
            </div>
          </Tabs.Item>

        </Tabs>
      </div>


      <div className="bg-white">


        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-orange-600 to-amber-600 py-20 px-4 text-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl text-center  md:text-4xl font-bold mb-6 leading-tight">
              Your Dream Wardrobe Awaits : Custom Designs for Homes Across North India

            </h1>
            <p className="text-lg text-center max-w-6xl opacity-90">
              In the bustling urban centers of Gurugram and Delhi NCR, and extending to the serene landscapes of Dehradun, the spiritual hub of Haridwar, the academic town of Roorkee, and the vibrant cities of Muzaffarnagar and Meerut, every home deserves intelligent, beautiful storage. At Adhunik Decodive, we specialize in crafting bespoke wardrobe solutions that perfectly blend functionality, aesthetics, and the unique demands of modern Indian living.
            </p>

          </div>
        </section>

        {/* Value Proposition */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <p className="text-md text-gray-700 text-center italic">
              "We understand that off-the-shelf wardrobes often fall short, struggling to fit specific spaces or truly reflect your personal style. That's why we transform your vision into reality, designing and building custom wardrobes that maximize every inch of your space, enhance your interiors, and simplify your daily routine. With a deep understanding of local design trends and space considerations across our expanded service areas, including Gurugram, Delhi, Noida, Faridabad, Ghaziabad, Haridwar, Dehradun, Roorkee, Muzaffarnagar, and Meerut, we are your trusted partner for truly personalized storage solutions."
            </p>
          </div>
        </section>

        {/* Wardrobe Solutions */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Explore Adhunik Decodive's Range of Wardrobe Styles
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Adhunik Decodive offers a diverse collection of wardrobe designs, each meticulously crafted to meet different spatial needs and aesthetic preferences.
            </p>
          </div>

          <div className="space-y-20">

            {wardrobeTypes.map((wardrobe) => (
              <div key={wardrobe.id} className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-gray-100 rounded-xl aspect-[4/3] overflow-hidden">
                  {/* Image placeholder - replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                    <img src={wardrobe.img} className=" h-full w-full object-fill  object-center" alt="" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-500 text-white p-2 rounded-lg">
                      {wardrobe.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{wardrobe.title}</h3>
                      <p className="text-orange-500 text-sm font-medium">{wardrobe.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-600  text-sm mb-6">{wardrobe.description}</p>

                  <ul className="space-y-3 mb-8">
                    {wardrobe.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-500 mr-2 ">•</span>
                        <span className=" text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg text-sm">
                    {wardrobe.more}
                    <FiChevronRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>


      </div>

      <div className="bg-white">


        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Adhunik Decodive for Your Wardrobe?
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choosing Adhunik Decodive means partnering with experts who are committed to transforming your space with intelligent and beautiful storage solutions, wherever you are in our service region.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto py-20 px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-orange-300 transition-all">
                <div className="text-orange-500 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
              Your Bespoke Wardrobe Journey with Adhunik Decodive
            </h2>

            <div className="space-y-10">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6">
                  <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="max-w-7xl mx-auto py-16 px-4">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/20 p-4 rounded-full">
                <FaCity className="text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">We Serve Across North India</h3>
                <p className="opacity-90">
                  Gurugram • Delhi • Noida • Faridabad • Ghaziabad • Haridwar • Dehradun • Roorkee • Muzaffarnagar • Meerut
                </p>
              </div>
            </div>
          </div>
        </section>

 
      </div>


      <div className="bg-white">



        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 px-4 py-2 rounded-full mb-4 border border-orange-500/30">
              <FiTrendingUp className="text-orange-400" />
              <span className="text-orange-300 font-medium">Industry Trends</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Staying Ahead with Modern Wardrobe Trends Across North India
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              At Adhunik Decodive, we keep our finger on the pulse of evolving design aesthetics and functional needs in urban and semi-urban environments across our service areas.
            </p>
          </div>
        </section>

        {/* Trends Section */}
        <section className="max-w-7xl mx-auto py-20 px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trends.map((trend, index) => (
              <div key={index} className="group relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-orange-200">
                <div className="absolute -top-5 left-6 bg-orange-500 text-white p-3 rounded-lg group-hover:rotate-6 transition-transform">
                  {trend.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">{trend.title}</h3>
                <p className="text-gray-600">{trend.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Discover Our Latest Wardrobe Projects
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our portfolio showcases the diversity of our designs, the quality of our craftsmanship, and the functional beauty we've brought to homes across Gurugram, Delhi, Noida, Faridabad, Ghaziabad, Haridwar, Dehradun, Roorkee, Muzaffarnagar, and Meerut.
              </p>
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  id: 1,
                  image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746788450/15_n8tldp_mjxl9v.webp",
                  title: "Modern Shutter Wardrobe",
                  location: "Gurugram Residence"
                },
                {
                  id: 2,
                  image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1748239637/9_ya6jlf_wyf9ek.webp",
                  title: "Space-Saving Sliding Wardrobe",
                  location: "Delhi Apartment"
                },
                {
                  id: 3,
                  image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1748241098/14_higzua.webp",
                  title: "Luxury Walk-in Wardrobe",
                  location: "Noida Penthouse"
                },
                {
                  id: 4,
                  image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1748241095/13_cg3uyw.webp",
                  title: "Traditional Style Wardrobe",
                  location: "Haridwar Home"
                },
                {
                  id: 5,
                  image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1748239641/11_jteifh_igjgq6.webp",
                  title: "Smart Modular Wardrobe",
                  location: "Dehradun Villa"
                },
                {
                  id: 6,
                  image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1748239644/14_uwgozu_ztg7tf.webp",
                  title: "Compact Space Solution",
                  location: "Meerut Apartment"
                }
              ].map((project) => (
                <div key={project.id} className="aspect-square rounded-xl overflow-hidden relative group">
                  {/* Actual Image */}
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.location}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-lg">{project.title}</h3>
                      <div className="flex items-center mt-1 mb-2">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm text-gray-200">{project.location}</p>
                      </div>

                      <Link className="mt-3 text-sm bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors" to='/blogs/luxury-modular-kitchen-design-gurugram'>
                        View Project Details
                      </Link>

                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </section>

   


 <section className="min-h-screen px-4 md:px-12 py-12 bg-white">
      <div className=" flex  justify-center  items-center  gap-7 flex-col md:flex-row  min-h-screen">
        
        {/* Left Column: Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="  relative h-64 md:w-6/12 lg:h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww"
            alt="A beautiful custom shutter wardrobe in a luxury home"
           
            className="object-cover rounded-xl"
          />
         </motion.div>

        {/* Right Column: Content */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex bg-slate-50  p-8  items-center md:w-6/12 justify-center  "
        >
          <motion.div
            variants={containerVariants}
            className="max-w-md "
          >
            {/* --- Portfolio Section --- */}
            <div className="mb-10">
              <div className="mb-4 flex items-center gap-3 text-orange-600">
                <BookImage size={24} />

                <h2 className="text-sm font-bold uppercase tracking-widest">
                  Our Portfolio
                </h2>

              </div>

              <h3 className="text-3xl font-bold text-slate-900">
            Ready to Design Your Perfect Wardrobe?
              </h3>

              <p className="mt-4 text-slate-600">
                 Don't let clutter define your living space. Let Adhunik Decodive craft a wardrobe that truly understands your needs and elevates your home.
            </p>
            </div>
            
            
            <div>
            
              
              <div className="mt-8 space-y-4">
                <Link to='/support-form' className="flex w-full items-center justify-center gap-3 bg-orange-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-orange-700 hover:shadow-xl hover:shadow-orange-500/30 focus:outline-none focus:ring-4 focus:ring-orange-300 rounded-lg">
                  <Wand2 />
                  Request a Free Design Consultation
                </Link>
                 <p className="text-center text-sm text-slate-500">
                  Let our expert team help you design the ideal kitchen interior for your home. Schedule a no-obligation consultation now to begin your journey.
                </p>
              </div>

              <div className="mt-8 text-center">
                <p className="text-slate-500">Prefer to speak with us directly?</p>
                <a href="tel:9355588595" // <-- Add your phone number here
                   className="mt-1 inline-flex items-center gap-2 font-semibold text-orange-600 transition-colors hover:text-orange-800">
                  <PhoneCall size={16} />
                  Call Us Now
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>  

      </div>
    </>

  )
}

export default Wardrobe