import React from 'react';
import Footer from './Footer';

const cardData = [
  {
    id: 1,
    title: "Home Decor Ideas for Compact Living",
    description: "Living in a small space doesn't mean you have to compromise on style or comfort. With a few smart decor choices, you can make your home feel cozy and spacious. Explore Adhunik DecoDive’s range of home decor solutions to transform your small space into a stylish and functional haven. We help you maximize charm in your compact haven. Lighten things up with pale walls to create an illusion of space. Utilize vertical space with tall bookshelves and wall-mounted shelves. Mirrors bounce light, making your tiny haven feel bigger. Keep clutter at bay with stylish storage solutions and add a touch of life with greenery. Define zones with rugs and personalize with statement wall art, paintings, clocks, or unique lamps from Adhunik DecoDive. Don't forget vases filled with colorful blooms for a pop of personality! Embrace natural light and add ambiance with their lighting solutions. Remember, quality over quantity – choose a few statement pieces that reflect your style both functional and undeniably chic!",
    imgSrc: 'AboutUs/ab1_gjuxsw',
    author: "Jonathan Reinink",
    date: "Aug 18",
    tag: "Trending",
  },
  {
    id: 2,
    title: "Spice Up Your Kitchen: Trendy Modular Designs to Try in 2024",
    description: "Spice up your kitchen in 2024 with these hottest modular design trends from Adhunik DecoDive. Optimize space with smart storage solutions like pull-out drawers and corner units. Multi-functional kitchen islands with integrated appliances and seating create a central hub. Embrace eco-conscious style with sustainable materials. Open shelving adds an airy feel while showcasing your favorite décor. Don't be afraid of color! Bold cabinets, striking backsplashes, or two-toned kitchens add a personal touch. Finally, integrate smart appliances and technology for a seamless cooking experience. These trends are just a starting point – personalize your dream kitchen for ultimate functionality and style! Contact Adhunik DecoDive today and let's create your perfect culinary haven.",
    imgSrc: 'AboutUs/ab1_gjuxsw',
    author: "Alex Johnson",
    date: "Sep 5",
    tag: "Featured",
  },
  {
    id: 3,
    title: "Stunning Wardrobe Design Ideas for Indian Homes",
    description: "From space-saving sliders to luxurious walk-in wardrobes, Adhunik Deco Dive offers stunning wardrobe designs for Indian homes, blending modern trends with traditional aesthetics. Maximize storage with corner units and lofts, personalize with custom layouts and finishes, or add a touch of glamour with glass doors. These wardrobes are more than storage - they're an extension of your style.",
    imgSrc: 'AboutUs/ab1_gjuxsw',
    author: "Maria Garcia",
    date: "Jul 22",
    tag: "Top",
  },
  {
    id: 4,
    title: "Your Furniture Reflects You",
    description: "Your furniture reflects you, shaping the personality and ambiance of your space, whether it’s a cozy home or a sleek office. Adhunik DecoDive offers an exquisite range of Commercial and Domestic furniture that speaks volumes about your taste and lifestyle. From stylish sofas to functional desks, each piece is designed to complement your unique aesthetic. For domestic spaces, consider furniture that enhances comfort and reflects personal style, creating a welcoming and intimate atmosphere. In commercial settings, opt for furniture that combines professionalism with modern design, leaving a lasting impression on clients and employees alike. With Adhunik DecoDive, your furniture becomes a true reflection of who you are.",
    imgSrc: 'AboutUs/ab1_gjuxsw',
    author: "John Doe",
    date: "Nov 15",
    tag: "Popular",
  },
  {
    id: 5,
    title: "Bar Counter Design Ideas To Replicate In Your Home In 2024",
    description: "Revamp your home with stunning bar counter design ideas to replicate in 2024 by Adhunik DecoDive. Integrate sleek commercial and domestic furniture to create a modern, sophisticated vibe. Opt for minimalist designs with clean lines and neutral colors, or go bold with statement pieces and vibrant hues. Incorporate functional elements like built-in storage for glassware and bottles to keep your space organized. Enhance the atmosphere with under-counter lighting and stylish bar stools for comfort and style. These bar counter design ideas by Adhunik DecoDive will elevate your home entertaining experience, blending elegance with practicality.",
    imgSrc: 'AboutUs/ab1_gjuxsw',
    author: "Jane Smith",
    date: "Oct 3",
    tag: "New",
  },
  {
    id: 6,
    title: "Minimalist Interior Design Style.",
    description: "Embrace the elegance of the minimalist interior design style with Adhunik DecoDive. This design approach focuses on simplicity and functionality, creating serene and uncluttered spaces. Key elements include clean lines, neutral color palettes, and a less is more philosophy. Furniture and decor are carefully selected to ensure they serve a purpose while maintaining an airy feel. Incorporate multi-functional pieces to maximize space without sacrificing style. Minimalist design encourages natural light and open floor plans, enhancing the sense of spaciousness. By choosing quality over quantity, you can achieve a timeless and sophisticated look that reflects modern living.",
    imgSrc: 'AboutUs/ab1_gjuxsw',
    author: "Emily White",
    date: "Dec 27",
    tag: "Trending",
  },
  {
    id: 7,
    title: "The Artistic Trend of Sculptural Pendant Lights in Home Décor",
    description: "Sculptural pendant lights from Adhunik DecoDive redefine home decor, blending artistry with functionality. These lights aren't mere fixtures but exquisite pieces that illuminate and inspire. Picture entering a room where each pendant light hangs like a suspended sculpture, casting captivating shadows and setting a unique ambiance. Adhunik DecoDive embraces modern aesthetics with a touch of retro influence, celebrating creativity and individuality in interior design. Whether it's geometric shapes, organic curves, or abstract compositions, these lights add a distinct visual appeal to any space, making them essential for those seeking to elevate their home with style and sophistication.",
    imgSrc: 'AboutUs/ab1_gjuxsw',
    author: "Emily White",
    date: "Dec 27",
    tag: "Trending",
  },
];




function BlogPage() {
  return (
    <>


    <div className="container-fluid p-3 md:mt-9  ">
    <div className="flex flex-wrap  justify-center  items-center w-full h-full ">
        {cardData.map((card) => (
          <div key={card.id} className=" md:w-[60%] h-full  lg:flex m-4">
            <div
              className="h-48 lg:h-auto  lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: `url(${card.image})` }}
              title={card.title}
            ></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                 
                  {card.tag}
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">{card.title}</div>
                <p className="text-gray-700 text-justify">{card.description}</p>
              </div>
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={card.image}
                  alt={`Avatar of ${card.author}`}
                />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">{card.author}</p>
                  <p className="text-gray-600">{card.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      
  

      <Footer />
    </>
  );
}

export default BlogPage;
