 

 import {
  HeartHandshake,
  Gem,
  HandCoins,
  Brain,
  Building,
  Home,
  Briefcase,
} from "lucide-react";
import { CheckCircle } from "lucide-react";  
 

export default function VastuBasicsTips() {
 
const benefits = [
  {
    icon: <Brain className="w-6 h-6 text-orange-600" />,
    title: "Improved Physical & Mental Health",
    description:
      "By balancing the elements, Vastu Shastra can help reduce stress, improve sleep quality, and enhance overall well-being.",
  },
  {
    icon: <HandCoins className="w-6 h-6 text-orange-600" />,
    title: "Enhanced Financial Prosperity",
    description:
      "Proper Vastu can attract positive energy, leading to increased financial stability and success.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-orange-600" />,
    title: "Stronger Relationships",
    description:
      "Harmonious environments can foster positive relationships with family, friends, and colleagues.",
  },
  {
    icon: <Gem className="w-6 h-6 text-orange-600" />,
    title: "Spiritual Growth",
    description:
      "By aligning with the natural rhythms of the universe, Vastu helps individuals connect with their higher selves.",
  },
];

const applications = [
  {
    icon: <Home className="w-6 h-6 text-orange-600" />,
    title: "Home Design",
    description:
      "Optimize the placement of rooms, furniture, and decor to create a balanced and positive living space.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-orange-600" />,
    title: "Office Design",
    description:
      "Enhance productivity, creativity, and morale by designing workspaces aligned with Vastu principles.",
  },
  {
    icon: <Building className="w-6 h-6 text-orange-600" />,
    title: "Commercial Spaces",
    description:
      "Attract customers and boost sales by designing inviting, prosperous commercial environments.",
  },
];


const vastuData = [
  {
    title: "Vastu Tips for Living Room",
    image: "https://images.unsplash.com/photo-1630407761652-e14307f15b43?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tips: [
      { label: "Optimal Placement", detail: "Place the living room in the east or north for morning sunlight and positive vibrations." },
      { label: "Entrance Door", detail: "The door should be in the north or east." },
      { label: "Furniture Shape", detail: "Use square or rectangle-shaped furniture and avoid a heavy chandelier at the center." },
      { label: "Furniture Placement", detail: "Southern and western corners are suitable for furniture placement." },
      { label: "Electronics", detail: "Keep the telephone and electrical appliances (except TV) in the southeast." },
      { label: "Sofa Arrangement", detail: "Sofa placement is ideal in the south, avoiding L-shaped sofas." },
      { label: "TV Placement", detail: "TV can be placed in the east or north." },
      { label: "Storage", detail: "Showcase cum almirah can be in the southeast corner." },
      { label: "Decor Items", detail: "Stuffed animals should be in the southwest corner." },
      { label: "Cooling Appliances", detail: "Cooler or AC should be in the west or north." },
      { label: "Seating Arrangement", detail: "Head of the house should sit in the southwest facing east or northeast." },
      { label: "Guest Seating", detail: "Guests should sit in the northwest or southeast facing south or west." },
      { label: "Wall Decor", detail: "Display pictures of water bodies from north to east for good fortune." },
      { label: "Wall Colors & Table Shapes", detail: "Use light colours and square, rectangular, or round center tables." },
      { label: "Open Space", detail: "Ensure more open space in the northern and eastern corners." },
    ],
  },
  {
    title: "Vastu Tips for Kitchen",
    image: "https://images.unsplash.com/photo-1711873316332-acb6930211e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfDF8MHx8fDA%3D",
    tips: [
      { label: "Ideal Locations", detail: "Southeast or northwest corners are best." },
      { label: "Avoid", detail: "Do not place the kitchen in northeast, center, or southwest areas." },
      { label: "Cooking Platform", detail: "Should not touch the eastern or northern walls." },
      { label: "Cooking Direction", detail: "Face east while cooking." },
      { label: "Visibility", detail: "The stove should not be visible from outside." },
      { label: "Hob and Sink Distance", detail: "Keep maximum distance between hob and sink." },
      { label: "Sink Placement", detail: "Sink should be in the northeast, dishwasher in the northwest." },
      { label: "Drinking Water", detail: "Place in the northeast." },
      { label: "Windows", detail: "Big windows on east/north walls; small on west/south." },
      { label: "Water Flow", detail: "Ensure slope from southwest to northeast." },
      { label: "Cylinder Placement", detail: "In the southeast." },
      { label: "Refrigerator", detail: "Place in the southwest corner." },
      { label: "Exhaust Fans", detail: "Fit on eastern walls in the southeast." },
      { label: "Microwave Placement", detail: "In the southeast." },
      { label: "Cabinets & Storage", detail: "Use northeast for light storage; large storage units for clean appearance." },
    ],
  },
];

const vastuData2 = [
  {
    title: "Vastu Tips for Kid's Room",
    image: "https://images.unsplash.com/photo-1565031491910-e57fac031c41?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    textFirst: true, // Text first for Kid's Room
    tips: [
      { label: "Room Location", detail: "Children’s room should be in the northwest or west." },
      { label: "Bed Placement", detail: "Place the bed in the south, west, or northwest corner." },
      { label: "Furniture Safety", detail: "Avoid sharp-edged furniture." },
      { label: "Study Table Position", detail: "Study table should face east or north." },
      { label: "Wall Colors", detail: "Use light and soothing colours." },
      { label: "Decor & Ambience", detail: "Display images of nature and positivity." },
      { label: "Clutter-Free Space", detail: "Keep the room clean and clutter-free." },
      { label: "Avoid Beams", detail: "The bed should not be under a beam." },
      { label: "Bed Shape", detail: "Choose a regular-shaped bed." },
      { label: "Ventilation & Lighting", detail: "Ensure proper natural light and ventilation." },
    ],
  },
  {
    title: "Vastu Tips for Bedroom",
    image: "https://images.unsplash.com/photo-1594873604892-b599f847e859?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    textFirst: false, // Image first for Bedroom
    tips: [
      { label: "Master Bedroom", detail: "Should be in the southwest for stability; ideal for the head of the house." },
      { label: "Sleeping Direction", detail: "Sleep with the head pointing towards the south." },
      { label: "Room Suitability", detail: "Southwest is not suitable for children, guests, or servant rooms." },
      { label: "Ideal Head Position", detail: "Sleep with head towards south, east, or west—never north." },
      { label: "Avoid Beam Overhead", detail: "Avoid any beam crossing over the bed." },
      { label: "Bed Placement", detail: "Place bed on the south wall, or at least 4 feet from other walls." },
      { label: "Storage Placement", detail: "Heavy almirah should be on the south or west wall." },
      { label: "Bookshelf Location", detail: "Bookshelf can go in the west or southwest corner." },
      { label: "Bed Material", detail: "Use wood for bed construction, avoid wrought iron." },
      { label: "Room Shape", detail: "Square or rectangle bedrooms are ideal." },
      { label: "Door Functionality", detail: "Bedroom door should open at least 90 degrees." },
      { label: "Electronic Gadgets", detail: "Keep electronics away from the bed." },
      { label: "Mirror Placement", detail: "Avoid mirrors in front of the bed." },
      { label: "Bed Shape", detail: "Use a regular-shaped bed." },
      { label: "Clutter-Free Space", detail: "Do not store clutter under the bed." },
    ],
  },
];


const vastuColorTips = {
  title: "Vastu Tips for Colours",
  image: "https://images.unsplash.com/photo-1637711805966-c5181f89ddb6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  textFirst: true,
  tips: [
    { label: "Living Room", detail: "Use light colours like white, yellow, blue, or green for a peaceful living room in the southwest." },
    { label: "Kitchen", detail: "Soft pink and orange are suitable kitchen colours. Avoid black and red." },
    { label: "Bedroom", detail: "Light colours like pink, cream, or off-white are recommended for bedrooms in the southwest." },
    { label: "Kid’s Room", detail: "Opt for soft pastel shades to create a cheerful environment." },
    { label: "Washrooms", detail: "Light colours are preferable for a fresh and clean ambience." },
    { label: "Office Interiors", detail: "Choose light colours to promote a vibrant and positive atmosphere." },
  ],
};


  return (
    <>

   <header className="relative h-[600px] flex items-center justify-center bg-gradient-to-r   via-white  ">
        <img
          src="https://images.unsplash.com/photo-1687091599228-54c36ac204de?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Harnessing the Power of Harmony : A Guide to Vastu Shastra by Adhunik Decodive"
          className="absolute w-full h-full object-cover opacity-30"
        />
        <div className="relative text-center px-4 max-w-4xl">
           
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
      Harnessing the Power of Harmony : A Guide to Vastu Shastra by Adhunik Decodive

          </h1>
          <div className="h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent w-3/4 mx-auto my-6"></div>
          <p className=" text-sm  text-justify md:text-xl text-gray-700">
             At Adhunik Decodive, we understand that the spaces we inhabit greatly influence our well-being. That’s why we embrace <strong>Vastu Shastra</strong>, an ancient Indian science of architecture that guides us in creating spaces aligned with the five natural elements—earth, sky, fire, water, and air. These principles foster harmony and support health, prosperity, and happiness. Your comfort and well-being are always at the heart of what we do.
          </p>
        </div>
      </header>




<section className="bg-white px-4 md:px-12 py-6 md:py-12 flex  flex-col md:flex-row">

    <div className="rounded-xl w-full md:w-6/12 overflow-hidden  ">
    
              <img
                src="https://res.cloudinary.com/dq14b7xie/image/upload/v1746784142/ftzlyasmu4m9nxpnntot_uadp7m.webp"
                alt="Vastu Shastra by Adhunik Decodive"
                className="w-full h-auto object-cover"
               
                placeholder="blur"
              />
            </div>

  <div className=" w-full md:w-6/12 mx-auto px-4">
 

    {/* Key Benefits Section */}
    <h2 className="text-2xl py-2 md:text-left text-center font-semibold text-orange-700 mb-6">Key Benefits of Vastu Shastra</h2>
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      {benefits.map((item, idx) => (
        <div
          key={idx}
          className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
        >
          <div className="flex items-center gap-4 mb-2">
            {item.icon}
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          </div>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>

    {/* Applications Section */}
    <h2 className="text-2xl py-2 md:text-left text-center font-semibold text-orange-700 mb-6">Practical Applications of Vastu Shastra</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {applications.map((item, idx) => (
        <div
          key={idx}
          className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
        >
          <div className="flex items-center gap-4 mb-2">
            {item.icon}
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          </div>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


<section>
     <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 space-y-24">
        {vastuData.map((section, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-10 items-start ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-auto object-cover"
               
                placeholder="blur"
              />
            </div>

            {/* Tips Section */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl py-2 md:text-left text-center font-bold text-orange-700 mb-6">
                {section.title}
              </h2>
              <ul className="grid gap-4 text-gray-800">
                {section.tips.map((tip, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 bg-orange-50 px-4 py-3 rounded-md shadow-sm hover:shadow-md transition"
                  >
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className=" font-semibold">{tip.label} : <span className=" font-light text-sm">{tip.detail}</span></p>
                       
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
</section>


<section>
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 space-y-24">
        {vastuData2.map((section, index) => (
          <div  key={index}
            className={`  md:grid-cols-2 flex flex-col md:flex-row-reverse  gap-10 items-start  `}
          >
            {/* Image */}
            <div className=" w-full md:w-6/12 rounded-xl overflow-hidden shadow-lg">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-auto object-cover"
              
                placeholder="blur"
              />
            </div>

            {/* Tips Section */}
            <div className="flex w-full md:w-6/12 flex-col justify-center">
              <h2 className="text-3xl py-2 md:text-left text-center font-bold text-orange-700 mb-6">
                {section.title}
              </h2>
              <ul className="grid gap-4 text-gray-800">
                {section.tips.map((tip, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 bg-orange-50 px-4 py-3 rounded-md shadow-sm hover:shadow-md transition"
                  >
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className=" font-semibold">{tip.label} : <span className=" font-light text-sm">{tip.detail}</span></p>
                       
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
</section>

<section>
    <div
  className={` px-5 md:px-16 py-9 grid md:grid-cols-2 gap-10 items-start ${
    vastuColorTips.textFirst ? "md:flex-row" : "md:flex-row-reverse"
  }`}
>
  {/* Image */}
  <div className="rounded-xl overflow-hidden shadow-lg">
    <img
      src={vastuColorTips.image}
      alt={vastuColorTips.title}
      className="w-full h-auto object-cover"
 
      placeholder="blur"
    />
  </div>

  {/* Tips Section */}
  <div className="flex flex-col justify-center">
    <h2 className="text-3xl py-2 md:text-left text-center font-bold text-orange-700 mb-6">
      {vastuColorTips.title}
    </h2>
    <ul className="grid gap-4 text-gray-800">
      {vastuColorTips.tips.map((tip, idx) => (
        <li
          key={idx}
          className="flex items-start gap-3 bg-orange-50 px-4 py-3 rounded-md shadow-sm hover:shadow-md transition"
        >
          <CheckCircle className="w-5 h-5 text-orange-600 mt-1" />
          <div>
            <p className="font-semibold">{tip.label}</p>
            <p className="text-sm">{tip.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>

</section>
    </>
  )
}
