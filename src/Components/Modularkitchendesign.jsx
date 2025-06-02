import { Link } from 'react-router-dom';
import { Sparkles, Layers3, Ruler, LayoutGrid, ShieldCheck } from 'lucide-react';
  import { LucideLayoutGrid, LucideLayers, LucideList, LucidePackageSearch, LucideSparkles, LucideBanknote } from "lucide-react";
import {
 
  LucideHammer,
  LucideBrush,
  LucideMonitorSmartphone,
  LucideCheckCircle,
  LucideUserCheck,
  LucideTrophy,
  LucideClipboardList,
  LucideShieldCheck,
  LucidePhone,
  LucideMail,
  LucideGlobe,
} from "lucide-react";


  import {
  Award,
  Users,
  CheckCircle2,
  LayoutList,
  Heart,
} from "lucide-react";
import { Helmet } from 'react-helmet-async';
 
 

export default function ModularKitchenDesign() {


  const reasons = [
    {
      title: "Proven Excellence",
      content:
        "With 10+ years of experience and 500+ successfully completed projects, our track record speaks for itself. We have a deep understanding of what it takes to deliver luxury interiors in Gurugram.",
      icon: Award,
    },
    {
      title: "Exceptional Client Testimonials",
      content: (
        <>
          Our clients' satisfaction is our greatest reward.
          <blockquote className="italic mt-3 text-orange-900 border-l-4 border-orange-600 pl-4">
            “Adhunik Decodive transformed our kitchen into the most beautiful and
            functional space we could have imagined. The attention to detail and
            personalized service were truly exceptional!” –  DLF Phase
            5, Gurugram
          </blockquote>
          <blockquote className="italic mt-3 text-orange-900 border-l-4 border-orange-600 pl-4">
            “Our new modular kitchen by Adhunik Decodive is the envy of all our
            friends. It's not just stunning but incredibly practical. Highly
            recommend for Gurugram homes!” –  Golf Course Road,
            Gurugram
          </blockquote>
        </>
      ),
      icon: Users,
    },
    {
      title: "Industry Recognition",
      content:
        'We are proud recipients of the India Business Awards 2025 for "Best Interior Design Company – Delhi NCR," a testament to our commitment to quality and innovation.',
      icon: CheckCircle2,
    },
    {
      title: "Seamless Project Management",
      content:
        "From initial consultation to final handover, we ensure a stress-free experience, adhering to timelines and budgets without compromising on quality.",
      icon: LayoutList,
    },
    {
      title: "Dedicated Post-Installation Support",
      content:
        "Our commitment doesn't end with installation. We provide comprehensive after-sales support to ensure your kitchen remains perfect for years to come.",
      icon: Heart,
    },
  ];

const materialHighlights = [
  {
    title: "Carcass",
    icon: LucideHammer,
    description:
      "We predominantly use BWR (Boiling Water Resistant) Plywood, IS:710 grade, ensuring maximum durability and resistance to moisture and termites, crucial for kitchen environments.",
  },
  {
    title: "Acrylic",
    icon: LucideBrush,
    description:
      "Offers a mirror-like, high-gloss finish, providing a modern, luxurious look with excellent durability and scratch resistance.",
  },
  {
    title: "Lacquered Glass",
    icon: LucideBrush,
    description:
      "Known for its vibrant colors, sleek finish, and ease of cleaning, creating a contemporary and sophisticated appearance.",
  },
  {
    title: "Premium Laminates",
    icon: LucideLayers,
    description:
      "Available in an extensive range of colors, textures (wood grain, stone, fabric), and finishes, offering durability and versatility.",
  },
  {
    title: "PU Paint",
    icon: LucideBrush,
    description:
      "Allows for limitless color customization and a smooth, seamless finish, ideal for a truly bespoke look.",
  },
  {
    title: "Natural Veneer",
    icon: LucideSparkles,
    description:
      "Offers the timeless beauty and warmth of real wood, adding a touch of classic luxury.",
  },
  {
    title: "Hardware & Accessories",
    icon: LucidePackageSearch,
    description:
      "We integrate cutting-edge hardware from Hafele, Hettich, and Blum for soft-close hinges, full-extension drawers, and innovative corner solutions, ensuring silent operation and maximum functionality.",
  },
  {
    title: "Countertops",
    icon: LucideLayoutGrid,
    description:
      "Choose from exquisite options like Natural Granite, Premium Quartz (engineered stone for durability and low maintenance), or Corian (seamless finish, customizable shapes).",
  },
  {
    title: "Integrated Appliances & Smart Features",
    icon: LucideMonitorSmartphone,
    description:
      "We seamlessly integrate high-end built-in ovens, hobs, dishwashers, and smart kitchen solutions to enhance convenience and elevate your culinary experience.",
  },
];

  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-orange-500" />,
      title: "Unrivaled Personalization",
      description:
        "Every modular kitchen we design is a bespoke creation, meticulously tailored to your exact space dimensions, family's lifestyle, and aesthetic preferences. From specific storage needs to unique finishes, your kitchen truly reflects you."
    },
    {
      icon: <LayoutGrid className="w-8 h-8 text-orange-500" />,
      title: "Maximized Space & Intuitive Storage",
      description:
        "Gurugram apartments and villas often demand smart space utilization. Modular designs offer intelligent solutions like magic corners, tall units, pantry pull-outs, and integrated appliances, ensuring every inch is utilized efficiently and ergonomically."
    },
    {
      icon: <Ruler className="w-8 h-8 text-orange-500" />,
      title: "Flawless Functionality & Ergonomics",
      description:
        "Designed with the user in mind, modular kitchens streamline workflow. Everything is within easy reach, minimizing effort and maximizing cooking pleasure, making your culinary journey effortless."
    },
    {
      icon: <Layers3 className="w-8 h-8 text-orange-500" />,
      title: "Stunning Aesthetics & Endless Style Choices",
      description:
        "Whether your taste leans towards minimalist, contemporary, classic, or a fusion, modular kitchens offer an expansive palette of colors, textures, and finishes. The sleek lines and clean aesthetics add a touch of modern sophistication to any Gurugram home."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
      title: "Enduring Quality & Low Maintenance",
      description:
        "Built from high-grade materials and precision-engineered, Adhunik Decodive's modular kitchens are designed for durability and ease of cleaning, standing the test of time and maintaining their pristine look for years."
    }
  ];

 const data = [
  {
    title: "The Bespoke Design Journey: Collaborative & Immersive",
    icon: <Sparkles className="text-orange-500 w-8 h-8" />,
    image: " https://res.cloudinary.com/dq14b7xie/image/upload/v1748841833/2_duljpc.webp",
    points: [
      
      "Phase 1 : Vision & Understanding: We begin with an in-depth consultation right at your Gurugram home. Our expert designers spend time understanding your family's lifestyle, culinary habits, design inspirations, and functional requirements. We consider everything, from your daily routines to your entertaining needs.",
      "Phase 2 :  3D Conceptualization & Refinement: Your vision comes to life through realistic 3D designs. We provide detailed visualizations, allowing you to walk through your future kitchen, make informed decisions, and refine every detail. This iterative process ensures your complete satisfaction before manufacturing begins.",
      "Phase 3 : Precision Craftsmanship & Seamless Installation: Once the design is perfected, our skilled artisans and experienced installation teams take over. We ensure minimal disruption to your home, adhering to strict timelines and delivering an impeccable finish."
    ]
  },
  {
    title: "Uncompromising Quality & Global Standards: Our Manufacturing/Sourcing Edge",
    icon: <ShieldCheck className="text-orange-500 w-8 h-8" />,
    image: " https://res.cloudinary.com/dq14b7xie/image/upload/v1748841833/3_agojk4.webp",
    points: [
      "Proprietary Processes & Strategic Partnerships: We employ advanced manufacturing techniques and maintain rigorous quality control at every stage. For specific components, we forge exclusive collaborations with leading international manufacturers.",
      "Premium Materials & Branded Fittings: We use only the highest-grade materials to ensure durability and aesthetic appeal. This includes IS:710 Marine Grade BWR Plywood (Boiling Water Resistant) for its superior moisture resistance and strength. For hardware, we exclusively utilize fittings from renowned international brands like Hafele, Hettich, and Blum, ensuring smooth, soft-close operation, high load-bearing capacity, and anti-corrosion properties.",
      "10-Year Warranty: We stand by the quality of our craftsmanship and materials, offering a comprehensive 10-year warranty on our modular kitchen components, providing you with complete peace of mind."
    ]
  },
  {
    title: "Localized Expertise for Gurugram Homes",
    icon: <LayoutGrid className="text-orange-500 w-8 h-8" />,
    image: "https://res.cloudinary.com/dq14b7xie/image/upload/v1748841834/5_xsmdxz.webp",
    points: [
      "Our deep understanding of Gurugram's unique architectural styles and lifestyle trends allows us to create designs that are not just beautiful but perfectly suited to your local environment. We optimize layouts for common apartment structures, consider specific climate challenges, and reflect the city's evolving design preferences."
    ]
  }
];


const kitchenLayouts = [
  {
    title: "L-Shaped Kitchen",
    icon: LucideLayoutGrid,
    description:
      "Ideal for open-plan living spaces and medium-sized Gurugram apartments, offering ample counter space and storage, often with a seamless connection to dining areas.",
  },
  {
    title: "U-Shaped Kitchen",
    icon: LucideLayers,
    description:
      "Perfect for larger homes or those seeking maximum storage and countertop space. It provides a highly efficient \"work triangle\" and is a popular choice for spacious villas in Gurugram.",
  },
  {
    title: "Parallel or Gallery Kitchen",
    icon: LucideList,
    description:
      "Best suited for compact Gurugram apartments, this layout makes efficient use of narrow spaces, providing two parallel countertops and excellent workflow.",
  },
  {
    title: "Straight Line Kitchen",
    icon: LucidePackageSearch,
    description:
      "An excellent choice for studio apartments or homes where space is at a premium, offering a sleek, minimalist aesthetic while maintaining core functionality.",
  },
  {
    title: "Island Kitchen",
    icon: LucideSparkles,
    description:
      "The epitome of luxury and social living. A central island provides additional counter space, storage, and often serves as a breakfast bar or informal dining area, making it a highly sought-after feature in premium Gurugram homes.",
  },
  {
    title: "G-Shaped Kitchen",
    icon: LucideLayoutGrid,
    description:
      "An extension of the U-shaped layout, providing an additional peninsula for extra counter space or seating, perfect for larger families or avid entertainers.",
  },
];

const costFactors = [
  {
    title: "Size and Layout Complexity",
    icon: LucideLayoutGrid,
    description:
      "Larger kitchens or more intricate designs with custom curves and unique elements will naturally have a higher cost.",
  },
  {
    title: "Material Selection",
    icon: LucideLayers,
    description:
      "The choice between high-gloss Acrylic, sophisticated Lacquered Glass, premium Laminates, durable PU Paint, or elegant Natural Veneer for shutters, along with countertop materials like Quartz, Granite, or Corian, significantly impacts the budget.",
  },
  {
    title: "Hardware & Accessories",
    icon: LucidePackageSearch,
    description:
      "Advanced storage solutions (e.g., automated pull-outs, soft-close mechanisms, corner carousels, pantry units) and smart kitchen integrations contribute to the overall cost but offer unparalleled convenience.",
  },
  {
    title: "Appliances & Features",
    icon: LucideSparkles,
    description:
      "Integrated high-end appliances (built-in ovens, dishwashers, hobs), specialized lighting concepts (under-cabinet, accent lighting), and unique backsplash designs also play a role.",
  },
  {
    title: "Level of Customization",
    icon: LucideBanknote,
    description:
      "Truly bespoke elements, unique cabinetry, or highly personalized design features will reflect in the overall cost.",
  },
];


  return (


<>
  <Helmet>

        <title>Luxury Modular Kitchen Design in Gurugram | Adhunik Decodive
</title>

        <meta data-react-helmet="true" data-n-head="ssr" data-rh="true" data-hid="description" name="description" content="Discover bespoke luxury modular kitchens in Gurugram with Adhunik Decodive. Explore premium designs, quality materials, and expert craftsmanship for your dream culinary space." />

        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
        
   
        <meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta data-n-head="ssr" data-hid="http-equiv" httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data"></meta>
        
      
      </Helmet>

    <div className="font-sans text-gray-800 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-orange-700 via-white to-orange-700">
        <img
          src="https://res.cloudinary.com/dq14b7xie/image/upload/v1748841834/5_xsmdxz.webp"
          alt="Luxury Modular Kitchen"
          className="absolute w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="flex justify-center mb-8">
            <img
              src="https://res.cloudinary.com/dq14b7xie/image/upload/v1747811688/Adhunik_DecoDive_Logo_povt7l.webp"
              alt="Adhunik Decodive Logo"
              className="w-44 h-auto filter drop-shadow-lg"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
Adhunik Decodive: The Ultimate Guide to Luxury Modular Kitchen Design in Gurugram – Crafting Your Bespoke Culinary Oasis
          </h1>
          <div className="h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent w-3/4 mx-auto my-6"></div>
          <p className="text-xl text-gray-700">
            Crafting Your Bespoke Culinary Oasis
          </p>
        </div>
      </header>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-gray-700 mb-6">
          The kitchen is more than just a place to cook; it's the vibrant heart of your home, a space for culinary creativity, family gatherings, and memorable moments. For the discerning homeowner in Gurugram, where contemporary living meets sophisticated aesthetics, a modular kitchen isn't just a trend—it's a necessity. It’s an investment in unparalleled style, functionality, and lasting value.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          At Adhunik Decodive, we understand this aspiration. As Gurugram's leading luxury interior design firm, we specialize in transforming ordinary kitchens into extraordinary culinary sanctuaries. With over 10 years of expertise and a legacy of 500+ successful projects, we are renowned for crafting bespoke modular kitchens that blend cutting-edge functionality with timeless elegance, uniquely tailored for Gurugram's modern homes.
        </p>
        <p className="text-lg text-gray-700">
          This ultimate guide will take you through everything you need to know about designing a luxury modular kitchen in Gurugram, showcasing how Adhunik Decodive ensures your culinary space is nothing short of a masterpiece.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center relative pb-2 after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:h-1 after:bg-orange-400">
          The Essence of a Luxury Modular Kitchen: A Fusion of Art & Engineering
        </h2>

        <p className="text-lg text-gray-700 py-6 text-center" >
          Gone are the days of rigid, fixed kitchens. Modular kitchens represent a revolution in home design, offering a flexible, efficient, and aesthetically superior alternative. At Adhunik Decodive, we see them as a perfect blend of design artistry and precision engineering.

        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-orange-400 hover:-translate-y-2"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>


  <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        <h2 className="text-4xl   font-bold text-center text-orange-600"> The Adhunik Decodive Masterpiece: Our Unique Approach to Luxury Modular Kitchens in Gurugram
</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          What sets an Adhunik Decodive modular kitchen apart? It's our unwavering commitment to luxury, precision,
          and a truly bespoke client experience. We don't just design kitchens; we craft culinary experiences.
        </p>
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-10 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            <div className="lg:w-1/2">
              <img
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center gap-4">
                {item.icon}
                <h3 className="text-2xl font-semibold text-orange-700">{item.title}</h3>
              </div>
              <ul className="list-disc list-outside ps-4 space-y-4 text-gray-800">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>


      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-orange-500 via-white to-orange-500 text-gray-900 py-20 px-6 rounded-xl overflow-hidden mb-16">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Kitchen?</h2>
          <div className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent w-3/4 mx-auto my-8"></div>
          <p className="text-xl mb-8">
            Schedule a free design consultation with our Gurugram experts today and take the first
            step toward your dream culinary space.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-400 hover:bg-orange-500  font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>



       <div className="bg-gradient-to-br from-orange-50  to-orange-100 py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-800 mb-4">Decoding Design: Popular Luxury Modular Kitchen Layouts for Gurugram Homes</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          The right layout is crucial for functionality and flow. Adhunik Decodive excels at optimizing these popular configurations for Gurugram's diverse residences:
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {kitchenLayouts.map(({ title, description, icon: Icon }, idx) => (
          <div
            key={idx}
            className="flex items-start gap-5 bg-white shadow-lg p-6 rounded-2xl border-l-4 border-orange-500"
          >
            <div className="bg-orange-100 p-3 rounded-full">
              <Icon className="w-6 h-6 text-orange-800" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-900 mb-1">{title}</h3>
              <p className="text-gray-700 text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20 mb-12">
        <h2 className="text-4xl font-bold text-orange-800 mb-4">The Investment in Luxury: Understanding Modular Kitchen Costs in Gurugram</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          A luxury modular kitchen is a significant enhancement to your home and a smart investment. While specific costs vary based on your unique design choices, Adhunik Decodive believes in complete transparency. Here are the key factors influencing the investment:
        </p>

      
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {costFactors.map(({ title, description, icon: Icon }, idx) => (
          <div
            key={idx}
            className="flex items-start gap-5 bg-white shadow-lg p-6 rounded-2xl border-l-4 border-orange-500"
          >
            <div className="bg-orange-100 p-3 rounded-full">
              <Icon className="w-6 h-6 text-orange-800" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-900 mb-1">{title}</h3>
              <p className="text-gray-700 text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>

        <p className="text-lg text-gray-700 max-w-7xl py-6  px-2 mx-auto">At Adhunik Decodive, we ensure unparalleled value through superior materials, expert craftsmanship, and a design that truly elevates your lifestyle. For a personalized consultation and a precise cost estimate tailored to your dream luxury modular kitchen in Gurugram, contact our design experts today! We provide detailed, shock-free quotations, ensuring you understand every aspect of your investment.
</p>


    </div>



      <div className="bg-gradient-to-br from-orange-50 to-orange-100 py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-800 mb-4">
          Curating Perfection: Materials, Finishes & Smart Innovations
        </h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          The selection of materials and finishes is paramount to achieving a luxury aesthetic and ensuring durability. Adhunik Decodive prides itself on offering a curated selection of the finest options:
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {materialHighlights.map(({ title, description, icon: Icon }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-start hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="bg-orange-100 p-3 rounded-full mb-4">
              <Icon className="text-orange-700 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-orange-900 mb-2">{title}</h3>
            <p className="text-gray-700 text-sm">{description}</p>
          </div>
        ))}
      </div>


       <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50 rounded-lg shadow-lg">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Image */}
       

        {/* Right: Content */}
        <div className="w-full   text-gray-900">
          <h2 className="text-4xl font-extrabold text-orange-700 mb-8 drop-shadow-md">
            Why Adhunik Decodive is Gurugram's Benchmark for Luxury Kitchens
          </h2>

          <p className="mb-10 text-lg leading-relaxed tracking-wide">
            Choosing Adhunik Decodive means partnering with a team dedicated to
            excellence, integrity, and your complete satisfaction.
          </p>

          <ul className="space-y-10">
            {reasons.map(({ title, content, icon: Icon }, idx) => (
              <li key={idx} className="flex gap-5 items-start">
                <div className="flex-shrink-0 bg-orange-600 p-4 rounded-xl text-white shadow-lg">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-orange-700 mb-3">
                    {title}
                  </h3>
                  <div className="text-lg leading-relaxed">{content}</div>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="text-3xl font-semibold text-orange-700 mt-16 mb-6 drop-shadow-md">
            Conclusion: Begin Your Bespoke Culinary Journey with Adhunik Decodive Today
          </h3>

          <p className="text-lg mb-6 leading-relaxed tracking-wide">
            Your kitchen is a reflection of your lifestyle and aspirations. With
            Adhunik Decodive, you're not just getting a modular kitchen; you're
            investing in a bespoke culinary oasis—a space that blends luxury,
            functionality, and your unique personality. We are Gurugram's premier
            choice for discerning homeowners seeking an unparalleled design and
            build experience.
          </p>

          <p className="text-lg font-semibold text-orange-700 tracking-wide">
            Ready to transform your kitchen into a luxurious, functional masterpiece
            that truly reflects your style and elevates your Gurugram home?
          </p>

          <p className="mt-6 text-orange-800  hover:text-orange-900 font-medium tracking-wide">
            Explore our exquisite Luxury Modular Kitchen Portfolio for Gurugram Residences to spark your inspiration! Modular Kitchen Designs
          </p>
        </div>
      </div>
    </section>

      <div className="mt-24 grid md:grid-cols-2 items-center gap-12">
        <div>
          <img
            src="https://res.cloudinary.com/dq14b7xie/image/upload/v1748841834/4_let778.webp"
            alt="Kitchen Consultation"
            className="rounded-3xl shadow-lg w-full"
          />
        </div>
        <div className="bg-white border border-orange-200 rounded-3xl shadow-xl p-10">
          <h2 className="text-4xl font-bold text-orange-800 mb-6">
Connect with our expert designers for a complimentary, personalized modular kitchen design consultation in Gurugram!
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Your kitchen is a reflection of your lifestyle and aspirations. With Adhunik Decodive, you're investing in a bespoke culinary oasis. Connect with us today!
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
                <div className="text-orange-800 font-semibold">www.adhunikdecodive.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
</>
  );
}
