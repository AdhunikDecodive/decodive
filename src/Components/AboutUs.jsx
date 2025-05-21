import { PiTargetLight } from "react-icons/pi";
import { TbDeviceVisionPro } from "react-icons/tb";
import { GrMicrofocus } from "react-icons/gr";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "./AboutUs.css";

import { Link } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { Helmet } from "react-helmet-async";

const slideData = [
  {
    name: "Shabnam Gupta",
    image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746783432/avatar_ltfwos_yhzcdy.webp",
    position: "Mumbai",
    testimonial:
      "Amazing! They totally listened to what I wanted for my living room and came up with a design that's both creative and works perfectly for me. They were super careful about all the little details and made sure the final product was exactly what I pictured.",
  },

  {
    name: "Ambrish Arora",
    image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746783432/avatar_ltfwos_yhzcdy.webp",
    position: "Chennai",
    testimonial:
      "Our kitchen was stuck in the past, and they completely transformed it. They made the whole renovation process enjoyable, which is practically unheard of! The whole team was professional, polite, and always on time.",
  },
  {
    name: "Tanya Gyani",
    image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746783432/woman_gphihr_q3qguw.webp",
    position: "New Delhi",
    testimonial:
      "An amazing job done by DecoDive. It feels modern and super inviting now. There were a couple of times during the project where communication wasn't perfect, but overall, we're really happy with how everything turned out.",
  },
  {
    name: "Manit Rastogi",
    image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746783432/avatar_ltfwos_yhzcdy.webp",
    position: "Varanasi",
    testimonial:
      "We love the kitchen! It was definitely the appropriate thing to do! The layout, flooring, and backsplash are fantastic. Thank you for your suggestions and great thoughts. It has been a true pleasure to deal with you. ",
  },
  {
    name: "Priya Rastogi",
    image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746783432/woman_gphihr_q3qguw.webp",
    position: "Agra",
    testimonial:
      "Stylish furniture for home and ergonomic chairs that made our office a haven, even after long hours.  The whole experience was great - they listened to our needs and budget, finding perfect pieces for every space.  Highly recommend!",
  },
  {
    name: "Akari Studio",
    image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746783432/avatar_ltfwos_yhzcdy.webp",
    position: "Shimla",
    testimonial:
      "Absolutely love the home decor pieces I picked up! They've completely elevated the look and feel of my living space. Each item adds its own unique touch, from the vibrant throw pillows to the elegant wall art.",
  },
  // Add more data objects for additional slides if needed
];



const blogs = [
  { 
    id: 1,
    imgSrc: 'https://res.cloudinary.com/dq14b7xie/image/upload/v1746784144/home_decor1_ph7toz_jdmedf.webp',
    title: <>Home Decor Ideas for Compact <br />  Living</> ,
    summary: " How to maximize comfort and style in your cozy home. Discover space-saving decor tricks and statement pieces that bring personality and function to your life!" ,
    tags: ["#DIYHomeDecor", "#InteriorDesign "],

  },

  {
     id: 2,
    imgSrc: "https://res.cloudinary.com/dq14b7xie/image/upload/v1747811360/ssd_t9jpex_xljukf.webp",
    title: "Spice Up Your Kitchen: Trendy Modular Designs to Try in 2024",
    summary: " Spice things up with Adhunik DecoDive's 2024 trends! We're talking smart storage, multifunctional islands, bold colors, and eco-friendly materials. Let's design your dream kitchen together. ",
    tags: ["#modularkitchen", "#interiordesign ", "#kitchendesign"],
    
  },
     
  { id: 3,
    imgSrc: "https://res.cloudinary.com/dq14b7xie/image/upload/v1747811360/sd_etqleb_1_myputd.webp",
     title: 
     "Stunning Wardrobe Design Ideas for Indian Homes",
     summary: "From space-saving sliders to luxurious walk-in options, our wardrobes seamlessly blend modern trends with timeless Indian aesthetics. The perfect wardrobe solution for your Indian home with Adhunik Deco Dive’s stylish designs." ,
     tags: ["#wardrobestylist ", "#interiordesigner "],
    },
];

function AboutUs() {
  const cld = new Cloudinary({ cloud: { cloudName: "dwhmfz63n" } });

  return (
    <>
    

 
      <Helmet>
        <title>About Us</title>

        <meta
          name="description"
          content="At Adhunik DecoDive that dream becomes reality. We're a passionate collective of designers, architects, and project managers united by a singular purpose: transforming houses into personalized havens."
          data-react-helmet="true"
        />

        <link
          rel="canonical"
          href="https://adhunikdecodive.com/AboutUs"
          data-react-helmet="true"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="w-full h-full">
        <div className="w-full h-full ">
         

          <div className="row2 ">
            <div className="w-full h-full flex-col flex lg:flex-row">
              <div className=" w-full  lg:w-6/12 h-full flex  ">
                <div className="w-full md:w-6/12 flex flex-col   h-full ">
                  <div className="w-12/12 h-full bg-red-900">
                    <img
                      decoding="async"
                      loading="lazy"
                     
                      className=" w-full h-full object-cover object-center"
                      alt="red leather modern chair in a beautiful space with a gold-plated lamp and black door "
                    src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746783432/ab5_dds6xk_mkconn.webp"
                    />
                  </div>
                  <div className="w-12/12 h-full bg-yellow-900">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="   w-full h-full object-cover object-center"
                      alt="Yellow modern chair in a beautiful space with a gold-plated lamp and black door"
                     src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746783432/ab6_omdoa9_sb4lfm.webp"
                    />
                  </div>
                </div>

                <div className="w-full md:w-6/12 h-auto">
                  <AdvancedImage
                    decoding="async"
                    loading="lazy"
                    effect="blur"
                    className=" w-full h-full object-cover object-center"
                    alt="orange  modern sofa in a beautiful space with a gold-plated lamp and black door"
                    src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746783431/ab7_qkbknf_dsfspf.webp"
                  />
                </div>
              </div>

              <div className="w-full  text-justify    lg:w-6/12 h-auto justify-center mx-auto flex items-center px-4 py-4 md:py-0  md:text-justify flex-col text-gray-700">
                <span className=" text-4xl  font-bold pt-4 lg:pt-0 text-gray-700 capitalize ">
                
                  our story
                </span>
             <p className="  px-4 py-4 ">   Have you ever dreamt of a space that speaks volumes about you, a
                sanctuary that Surpasses the ordinary and reflects the essence
                of your life? At Adhunik DecoDive, that dream becomes reality.
                We're a passionate collective of designers, architects, and
                project managers united by a singular purpose: transforming
                houses into personalized havens.
                <br /> 
                <br /> 
                Our story began with a simple belief – that living spaces have
                the power to become havens tailored to each individual. Felled
                by this conviction, we've grown into a collaborative family,
                where expertise and creativity flow seamlessly. This unique
                synergy allows us to deliver exceptional results, consistently
                exceeding expectations. We take a holistic approach to interior
                design, meticulously handling every aspect, from curating custom
                furniture to selecting the perfect finishing touches. Whether
                your taste leans towards timeless elegance or a modern, vibrant
                feel, we tailor our services to perfectly capture your vision.
                With years of experience under our belt, we create personalized
                solutions that resonate with your unique aesthetic.
                <br /> 
                <br /> 
                At the heart of Adhunik DecoDive lies a commitment to open
                communication and meticulous attention to detail. Collaborative
                by nature, we believe in fostering strong client relationships.
                Through open dialogue, we gain a deep understanding of your
                needs, aspirations, and lifestyle. This collaborative process
                builds trust and ensures that every project reflects your
                personality and is executed with the utmost precision.
                <br /> 
                The result? Stunning and functional spaces that not only meet
                your practical needs but also resonate with your soul. We don't
                just design homes. we craft sanctuaries you'll cherish for years
                to come.</p>
              </div>

            </div>
          </div>

          <div className="row3    h-full w-full p-5 justify-center items-center bg-[#EFEDE6] ">
            <div className="row justify-center flex flex-col items-center text-[#141414] py-9">
              <h1 className=" text-4xl font-thin">Our Value</h1>
              <p className=" px-4 py-4 md:w-[45%]  text-center">
                At Adhunik DecoDive, where your home your dreams, our values are
                the foundation of your dream space. We believe in collaboration,
                dedication, and integrity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pb-8">
              <div className=" bg-[#B49879] text-[#ffffff] p-14 text-center justify-center item-center rounded-lg ">
                <TbDeviceVisionPro className=" h-14 w-14  mx-auto my-auto" />

                <h1 className="  uppercase mb-4 text-[6vw] md:text-[2vw] ">
                  Our Vision
                </h1>
                <p className=" ">
                  At Adhunik DecoDive, we are passionate about translating your
                  design aspirations into enduring realities. We envision a
                  collaborative process where your vision becomes the
                  cornerstone of exceptional living spaces. Our unwavering
                  commitment to collaboration, dedication, and integrity ensures
                  a seamless journey in crafting a home that reflects your
                  unique values and endures for generations.
                </p>
              </div>

              <div className="bg-[#DBD4CB] p-14 text-center text-[#532C0C] justify-center item-center rounded-lg">
                <PiTargetLight className=" h-14 w-14 mx-auto my-auto" />
                <h1 className="  uppercase mb-4 text-[6vw] md:text-[2vw]">
                  Our Misson
                </h1>
                <p className=" ">
                  Our mission is to create exceptional residences that elevate
                  living beyond mere shelter. We meticulously design homes that
                  seamlessly integrate comfort, functionality, and modern
                  aesthetics, reflecting your unique aspirations. we seamlessly
                  blend comfort, function, and modern design to fulfill your
                  aspirations. Discerning clientele experience enduring value
                  through premium materials and cutting-edge construction.
                </p>
              </div>
              <div className="bg-[#DBD4CB] p-14 text-center text-[#532C0C]  justify-center item-center rounded-lg">
                <GrMicrofocus className=" h-14 w-14 mx-auto my-auto" />
                <h1 className="  uppercase mb-4 text-[6vw] md:text-[2vw]">
                  Our Moto
                </h1>
                <p className=" ">
                  We believe your home is a haven, a reflection of your taste
                  and a sanctuary for your loved ones. Our motto is to craft
                  exceptional living spaces that cater to your unique needs and
                  aspirations. We use innovation and quality to design dream
                  homes that elevate your lifestyle and create lasting memories.
                </p>
              </div>
            </div>
          </div>

          <div className="row h-full w-full px-5 py-5 bg-[#F3F4F6] ">
            <h1 className=" text-center capitalize text-3xl mb-3 text-gray-500">
              
              Customer reviews
            </h1>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              autoplay={{
                delay: 3500,
                speed: 2800,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                888: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[FreeMode, Pagination, Autoplay]}
              className="mySwiper z-0"
            >
              {slideData.map((slide, index) => (
                <SwiperSlide key={index} className="p-4 rounded-lg">
                  <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                      <div className="row h-14 w-14">
                        <img
                          decoding="async"
                          loading="lazy"
                         
                          className=" w-full h-full object-cover object-center"
                          alt={slide.name}
                          src={slide.image}
                        />
                      </div>
                      <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                          <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {slide.name}
                          </h5>
                          {/* Rating icons can be added dynamically */}
                          <div className="flex items-center gap-0 5 text-[#FBBF2C]">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-start block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                          {slide.position}
                        </p>
                      </div>
                    </div>
                    <div className="p-0 mb-6">
                      <p className="block font-sans text-base text-justify antialiased font-light leading-relaxed text-inherit">
                        {slide.testimonial}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="row">
            <div className="row flex relative  overflow-hidden">
              <img
                decoding="async"
                loading="lazy"
               src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746783433/footer4_mmwpiy_ttovln.webp"
                className="  relative object-fill h-[50vh] md:h-auto w-full"
                alt="Yellow leather sofa with glass lamp decoration "
                
              />

              <div className="w-full  h-full  md:p-9 bottom-0 flex-col justify-center md:justify-between  flex md:flex-row  md:text-center  items-center md:mx-auto  absolute  ">
                <div className=" items-center justify-center flex row flex-col w-full md:w-[40%]  backdrop-blur-lg md:backdrop-blur-sm bg-white/10  text-[#464646] p-4 rounded-lg  px-5 py-14">
                  <h1 className=" text-3xl md:text-[3vw]  pb-2 text-center  ">
                    Consultation now
                  </h1>
                  <p className=" h-full pb-3  md:text-[1vw] flex my-auto justify-left text-center items-center">
                    Let's engage in an inspiring conversation to unveil the
                    endless possibilities and intricacies of your dream project!
                  </p>

                  <Link
                    to="/contact"
                    className=" rounded h-full px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
                  >
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative"> Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 mb-5">
            <div className="w-full h-full">
              <div className="row justify-center flex flex-col mt-4 items-center text-[#141414] py-4">
                <h1 className=" text-center capitalize text-3xl  text-gray-500">
                  
               OUR   LATEST BLOGS
                </h1>
            
              </div>

              <div className="grid grid-cols-1 p-3 md:p-9 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-4">
  {blogs.map((blog) => (
    <Link to={`/blogs/${blog.id}`} key={blog.id}>
      <div className="h-full w-full rounded-xl overflow-hidden shadow-lg">

      
        <AdvancedImage
          decoding="async"
          loading="lazy"
          effect="blur"
          className="w-full"
          alt={blog.title}
          src={blog.imgSrc}
        ></AdvancedImage>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 capitalize text-center">
            {blog.title}
          </div>
          <p className="text-gray-700 text-base text-justify">
            {blog.summary}
          </p>
        </div>

        <div className="px-6 pt-4 pb-2 text-center">
         
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 lowercase"
            >
              {tag}
              
            </span>
          ))}
        </div>

      </div>
    </Link>
  ))}
</div>


              <div className="row h-full w-full justify-center items-center flex ">
                <Link
                to="/blogs"
                  className="relative mt-3 px-6 py-3 font-bold text-black group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#E4E7EB] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                  <span className="relative">View All Blogs</span>
                </Link>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      <div>
       

      
      </div>
     
      </>
    
  );
}

export default AboutUs;
