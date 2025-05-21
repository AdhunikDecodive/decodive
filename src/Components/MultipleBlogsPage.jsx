// src/components/MultipleBlogsPage.js

import { Link } from "react-router-dom";
 
import { AdvancedImage } from "@cloudinary/react";
import { Helmet } from "react-helmet-async";

const blogs = [
  {

    id: 1,
    title: "Home Decor Ideas for Compact Living",
    description:" How to maximize comfort and style in your cozy home. Discover space-saving decor tricks and statement pieces that bring personality and function to your life! ",
    image:
      "https://res.cloudinary.com/dq14b7xie/image/upload/v1746784144/home_decor1_ph7toz_jdmedf.webp",
    author: "Jonathan Reinink",
    date: "Aug 18",
    tag: "Trending",
    tags: [ "#DIYHomeDecor #InteriorDesign"],
  },

  {
    id: 2,
    title: "Spice Up Your Kitchen: Trendy Modular Designs to Try in 2024",
    description:
      " Spice things up with Adhunik DecoDive's 2024 trends! We're talking smart storage, multifunctional islands, bold colors, and eco-friendly materials. Let's design your dream kitchen together.",
    image:
      "https://res.cloudinary.com/dq14b7xie/image/upload/v1747811360/ssd_t9jpex_xljukf.webp",
    author: "Alex Johnson",
    date: "Sep 5",
    tag: "Featured",
    tags: ["#modularkitchen #interiordesign #kitchendesign "],
  },


  {
    id: 3,
    title: "Stunning Wardrobe Design Ideas for Indian Homes",
    description:
      " From space-saving sliders to luxurious walk-in options, our wardrobes seamlessly blend modern trends with timeless Indian aesthetics. The perfect wardrobe solution for your Indian home with Adhunik Deco Dive’s stylish designs.",
    image:
      "https://res.cloudinary.com/dq14b7xie/image/upload/v1747811360/sd_etqleb_1_myputd.webp ",
    author: "Maria Garcia",
    date: "Jul 22",
    tag: "Top",
    tags: ["#wardrobestylist #interiordesigner"],
  },


  {
    id: 4,
    title: " Bar Counter Design Ideas to Replicate in Your Home In 2024",
    description:
      " Whether you’re dreaming of a cozy corner for cocktails or a stylish entertainment space, our designs blend functionality with elegance. From sleek minimalist bars to luxurious statement pieces ",
      image:
      "https://res.cloudinary.com/dq14b7xie/image/upload/v1746784143/home_bar_rmncdx_sg9fx1.webp",
    author: "John Doe",
    date: "Nov 15",
    tag: "Popular",
    tags: ["#bardesign #interiordesign"],
  },


  {
    id: 5,
    title: "Minimalist Interior Design Style.",
    description:
      "Discover the beauty of minimalist interior design with Adhunik DecoDive. Focused on simplicity and functionality, this style creates serene, uncluttered spaces with clean lines and neutral colors.",
      image:
      "https://res.cloudinary.com/dq14b7xie/image/upload/v1746783432/ab6_omdoa9_sb4lfm.webp",
    author: "Jane Smith",
    date: "Oct 3",
    tag: "New",
    tags: ["#minimaldesign  #interiordesign"],
  },


  {
    id: 6,
    title: "The Artistic Trend of Sculptural Pendant Lights in Home Decor",
    description:
      "Brighten up your home with the Stunning Sculptural pendant lights from Adhunik DecoDive. With a blend of modern aesthetics and retro charm, these lights add a touch of sophistication and creativity to your home. Ready to elevate your décor?",
      image:
      "https://res.cloudinary.com/dq14b7xie/image/upload/v1746784146/The_Artistic_Trend_of_Sculptural_Pendant_Lights_in_Home_Decor_cf90yr_ugykea.webp",
    author: "Emily White",
    date: "Dec 27",
    tag: "Trending",
    tags: ["#pendantlights #interiordesign"] ,
  },


  {
    id: 7,
    title: "Your Furniture Reflects You",
    description:
      "Your furniture is more than just decor—it's a reflection of your identity and the vibe of your space, be it your cozy home or sleek office. At Adhunik DecoDive, we offer a diverse range of Commercial and Domestic furniture that speaks volumes about your individuality and lifestyle.",
      image:
      "https://res.cloudinary.com/dq14b7xie/image/upload/v1746784142/furniture_1_kbt4gm_majvly.webp",
    author: "Emily White",
    date: "Dec 27",
    tag: "Trending",
    tags: ["#furniture #interiordesign "],
  },
];

const MultipleBlogsPage = () => {
 
  return (
    <>

<Helmet>

        <title>Latest Interior Design Trends & Tips | Adhunik Decodive Blog</title>

        <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Stay updated with the latest interior design trends, tips, and inspirations. Explore expert insights, decor ideas, and furniture solutions by Adhunik Decodive." />

        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        <link rel="canonical" href="https://adhunikdecodive.com/blogs" data-react-helmet="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
        <meta data-n-head="ssr" data-hid="og:title" property="og:title" content="Latest Interior Design Trends & Tips | Adhunik Decodive Blog" />
        <meta data-n-head="ssr" data-hid="keywords" name="keywords" content="interior design blog, home decor ideas, furniture trends, modern interiors, space-saving solutions, luxury interior tips, Adhunik Decodive blog, home improvement ideas, office decor tips, contemporary design insights" />
        <meta data-n-head="ssr" data-hid="og:locale" property="og:locale" content="en_IN"></meta>
        <meta data-n-head="ssr" data-hid="og:type" property="og:type" content="website"></meta>
        <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary"></meta>
        <link data-n-head="ssr" rel="preconnect" href="http://cdn12.lemnisk.co"></link>
        <meta data-n-head="ssr" data-hid="og:description" property="og:description" content="Stay updated with the latest interior design trends, tips, and inspirations. Explore expert insights, decor ideas, and furniture solutions by Adhunik Decodive." />

        <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://adhunikdecodive.com/blog"></meta>
        <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Adhunik Decodive - Interior Design Blog" />
        <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Latest Interior Design Trends & Tips | Adhunik Decodive Blog" />
        <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Stay updated with the latest interior design trends, tips, and inspirations. Explore expert insights, decor ideas, and furniture solutions by Adhunik Decodive." />

        {/* <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> */}

      </Helmet>
      
 
    <div className="container-fluid p-3 md:mt-9  ">
      <div className="flex flex-wrap  justify-center  items-center w-full h-full ">
        {blogs.map((blog) => (
        

          <div key={blog.id} className=" md:w-[70%] h-full  lg:flex m-4">
        <Link to={`/blogs/${blog.id}`} className="row flex flex-wrap">
           <div className=" w-12/12 lg:w-6/12">

          <AdvancedImage
                    decoding="async"
                    loading="lazy"
                    effect="blur"
                    className="  h-full w-full  object-cover object-center "
                    alt={blog.title}
                   src={blog.image}
                    >

                </AdvancedImage>

          </div>

          <div className=" w-12/12 lg:w-6/12  px-5 py-5">
          <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  {blog.tag}
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {blog.title}
                </div>
              
                <p className="text-gray-700 text-justify">{blog.description}</p>
               
              </div>

              <span className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 lowercase"
            >
            {blog.tags}

            
            </span>
            
              <div className="flex items-center">
              <AdvancedImage
                    decoding="async"
                    loading="lazy"
                    effect="blur"
                       className="w-10 h-10 rounded-full mr-4"
                    alt={blog.title}
                   src={blog.image}
                ></AdvancedImage>
               

               
                <div className="text-sm">
                 <p className="text-gray-600">{blog.date} / 2024</p>
                  <p className="text-gray-600">
              

                  </p>
                  
                </div>
              </div>
          </div>
       

        </Link>
       
            
          </div>
     
        ))}
      </div>
    </div>
   
    </>
  );
};

export default MultipleBlogsPage;
