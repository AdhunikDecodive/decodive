import { Link } from "react-router-dom";
import { AdvancedImage } from "@cloudinary/react";
import { Helmet } from "react-helmet-async";

 const blogs = [
  // {
  //   id: 1,
  //   slug: "home-decor-ideas-compact-living",
  //   title: "Home Decor Ideas for Compact Living",
  //   description: "How to maximize comfort and style in your cozy home. Discover space-saving decor tricks and statement pieces that bring personality and function to your life!",
  //   image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746784144/home_decor1_ph7toz_jdmedf.webp",
  //   author: "Jonathan Reinink",
  //   date: "Aug 18",
  //   tag: "Trending",
  //   tags: ["#DIYHomeDecor", "#InteriorDesign"],
  //   readTime: "4 min read"
  //   ,
  //    href:"/"
  // },
  // {
  //   id: 2,
  //   slug: "modular-kitchen-designs-2024",
  //   title: "Spice Up Your Kitchen: Trendy Modular Designs to Try in 2024",
  //   description: "Spice things up with Adhunik DecoDive's 2024 trends! We're talking smart storage, multifunctional islands, bold colors, and eco-friendly materials. Let's design your dream kitchen together.",
  //   image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1747811360/ssd_t9jpex_xljukf.webp",
  //   author: "Alex Johnson",
  //   date: "Sep 5",
  //   tag: "Featured",
  //   tags: ["#modularkitchen", "#interiordesign", "#kitchendesign"],
  //   readTime: "6 min read"
  //   ,
  //    href:"/"
  // },
  // {
  //   id: 3,
  //   slug: "wardrobe-design-ideas-indian-homes",
  //   title: "Stunning Wardrobe Design Ideas for Indian Homes",
  //   description: "From space-saving sliders to luxurious walk-in options, our wardrobes seamlessly blend modern trends with timeless Indian aesthetics. The perfect wardrobe solution for your Indian home with Adhunik Deco Dive’s stylish designs.",
  //   image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1747811360/sd_etqleb_1_myputd.webp",
  //   author: "Maria Garcia",
  //   date: "Jul 22",
  //   tag: "Top",
  //   tags: ["#wardrobestylist", "#interiordesigner"],
  //   readTime: "5 min read"
  //   ,
  //    href:"/"
  // },
  // {
  //   id: 4,
  //   slug: "bar-counter-design-ideas-2024",
  //   title: "Bar Counter Design Ideas to Replicate in Your Home In 2024",
  //   description: "Whether you’re dreaming of a cozy corner for cocktails or a stylish entertainment space, our designs blend functionality with elegance. From sleek minimalist bars to luxurious statement pieces.",
  //   image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746784143/home_bar_rmncdx_sg9fx1.webp",
  //   author: "John Doe",
  //   date: "Nov 15",
  //   tag: "Popular",
  //   tags: ["#bardesign", "#interiordesign"],
  //   readTime: "5 min read"
  //   ,
  //    href:"/"
  // },
  // {
  //   id: 5,
  //   slug: "minimalist-interior-design-style",
  //   title: "Minimalist Interior Design Style",
  //   description: "Discover the beauty of minimalist interior design with Adhunik DecoDive. Focused on simplicity and functionality, this style creates serene, uncluttered spaces with clean lines and neutral colors.",
  //   image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746783432/ab6_omdoa9_sb4lfm.webp",
  //   author: "Jane Smith",
  //   date: "Oct 3",
  //   tag: "New",
  //   tags: ["#minimaldesign", "#interiordesign"],
  //   readTime: "4 min read"
  //   ,
  //    href:"/"
  // },
  // {
  //   id: 6,
  //   slug: "sculptural-pendant-lights-trend",
  //   title: "The Artistic Trend of Sculptural Pendant Lights in Home Decor",
  //   description: "Brighten up your home with the stunning sculptural pendant lights from Adhunik DecoDive. With a blend of modern aesthetics and retro charm, these lights add sophistication and creativity to your home. Ready to elevate your décor?",
  //   image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746784146/The_Artistic_Trend_of_Sculptural_Pendant_Lights_in_Home_Decor_cf90yr_ugykea.webp",
  //   author: "Emily White",
  //   date: "Dec 27",
  //   tag: "Trending",
  //   tags: ["#pendantlights", "#interiordesign"],
  //   readTime: "5 min read"
    
  //   ,
  //    href:"/"
  // },
  // {
  //   id: 7,
  //   slug: "your-furniture-reflects-you",
  //   title: "Your Furniture Reflects You",
  //   description: "Your furniture is more than just decor—it's a reflection of your identity and the vibe of your space, be it your cozy home or sleek office. At Adhunik DecoDive, we offer a diverse range of Commercial and Domestic furniture that speaks volumes about your individuality and lifestyle.",
  //   image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746784142/furniture_1_kbt4gm_majvly.webp",
  //   author: "Emily White",
  //   date: "Dec 27",
  //   tag: "Trending",
  //   tags: ["#furniture", "#interiordesign"],
  //   readTime: "4 min read",
  //   href:"/"
  // },
  {
    id: 1,
    slug: "your-furniture-reflects-you",
    title: "The Ultimate Guide to Luxury Modular Kitchen in Gurugram ...",
    description: "The kitchen is more than just a place to cook; it's the vibrant heart of your home, a space for culinary creativity, family gatherings...",
    image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1748841832/1_th2zgt.webp",
    author: "Modular Kitchen Design",
    date: "June 2025",
    tag: "Trending",
    tags: ["#furniture", "#interiordesign"],
    readTime: " ",
    href:"/blogs/luxury-modular-kitchen-design-gurugram"
  },

{
    id: 2,
    slug: "luxury-modular-wardrobes-delhi-gurugram",
    title: "Luxury Modular Wardrobes: Adhunik Decodive Delhi & Gurugram",
    description: "Elevate your Delhi & Gurugram home with Adhunik Decodive's luxury modular wardrobes. Discover modern designs, smart storage, and custom solutions. Request a consultation!",
    image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1748241098/14_higzua.webp",
    author: "Modular Wardrobe Design",
    date: "July 2025",
    tag: "New",
    tags: ["#wardrobes", "#interiordesign", "#homedecor"],
    readTime: "4 min read",
    href:"/blogs/modular-wardrobes"
  }
,

{
    id: 3,
    slug: "l-shape-modular-kitchen-design-delhi-ncr",
    title: "Modular L-Shape Kitchen Design Delhi NCR | Adhunik Decodive Guide",
    description: "Discover the perfect L-shape modular kitchen for your Delhi or Gurugram home. Explore modern designs, smart storage, and transparent costs. Get your free consultation from Adhunik Decodive.",
    image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1746786199/3_z9eejg_rhhask.webp",
    author: "Modular  L-Shape Kitchen Expert",
    date: "July 2025",
    tag: "Popular",
    tags: ["#modularkitchen", "#lshapekitchen", "#delhincr"],
    readTime: "5 min read",
    href: "/blogs/l-shape-modular-kitchen-design-delhi-ncr"
}
,

{
    id: 4,
    slug: "best-interior-designer-haridwar",
    title: "Best Interior Designer in Haridwar | Adhunik Decodive",
    description: "Discover top-tier interior design in Haridwar with Adhunik Decodive. Specializing in luxury homes, modular kitchens & custom wardrobes.",
    image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Interior Design Studio",
    date: "July 2025", 
    tag: "Featured",
    tags: ["#interiordesign", "#haridwar", "#homedecor"],
    readTime: "4 min read",
    href: "/blogs/interior-designer-in-haridwar"
}

];


const MultipleBlogsPage = () => {
  return (
    <>

      <Helmet>
        <title>Latest Interior Design Trends & Tips | Adhunik Decodive Blog</title>
        <meta name="description" content="Stay updated with the latest interior design trends, tips, and inspirations. Explore expert insights, decor ideas, and furniture solutions by Adhunik Decodive." />
        <meta name="keywords" content="interior design blog, home decor ideas, furniture trends, modern interiors, space-saving solutions, luxury interior tips" />
        <meta property="og:title" content="Latest Interior Design Trends & Tips | Adhunik Decodive Blog" />
        <meta property="og:description" content="Stay updated with the latest interior design trends, tips, and inspirations. Explore expert insights, decor ideas, and furniture solutions by Adhunik Decodive." />
      </Helmet>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">  Blogs</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Dive into expert advice, modern styles, and timeless decor inspiration for your dream space.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
            
    
              <Link to={blog.href} className="block group">
                <div className="relative h-60 overflow-hidden">
                  <AdvancedImage
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-yellow-400 text-xs font-semibold uppercase px-3 py-1 rounded-full text-gray-800 shadow-sm">
                    {blog.tag}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-yellow-500 transition-colors mb-2">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.description}</p>

                  <div className="flex flex-wrap gap-2 text-xs mb-4">
                    {blog.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <AdvancedImage
                        src={blog.image}
                        alt={blog.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{blog.author}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Load More */}
      
      </div>
    </>
  );
};

export default MultipleBlogsPage;
