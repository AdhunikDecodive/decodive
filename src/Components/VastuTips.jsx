import Footer from "./Footer"
import "./LShapeKitchen.css"


// import { useState } from 'react';
// import ModalNew from './ModalNew';
// import PhoneCallButton from "./PhoneCallButton";

// import { Cloudinary } from "@cloudinary/url-gen";
// import { AdvancedImage } from '@cloudinary/react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";





function VastuTips() {

    // const [openModal, setOpenModal] = useState(false);

    // const toggleModal = () => {
    //     setOpenModal(!openModal);
    //   };

    // const PcardData = [
    //     {
    //         id: 1,
    //         imageUrl:
    //         'WardRobe/1DW/7_p8dnrj',
    //         title: '',
    //         description:
    //             'single-door, wooden wardrobe with two drawers for additional storage and a contemporary design aesthetic.',
    //     },
    //     {
    //         id: 2,
    //         imageUrl:
    //          'WardRobe/1DW/1_gxrpo1',
    //         title: '',
    //         description:
    //             'a minimalist design with a single, full-height door, with clean lines and white matte finish for a contemporary aesthetics',
    //     },
    //     {
    //         id: 3,
    //         imageUrl:
    //          'WardRobe/1DW/9_ygdsjx',
    //         title: '',
    //         description:
    //             'Metal black color single door wardrobes with space-efficient solutions for smaller bedrooms',
    //     },
    //     {
    //         id: 4,
    //         imageUrl:
    //          'WardRobe/1DW/10_vaq0uk',
    //         title: '',
    //         description:
    //             'A single-door wardrobe made from sheet metal with a visible horizontal shelf through the door grate. Commonly used for storing shoes, bags, or personal items.',
    //     },
    //     {
    //         id: 5,
    //         imageUrl:
    //          'WardRobe/1DW/21_shjgis',
    //         title: '',
    //         description:
    //             'a single-door wardrobe with a white finish and black handle. Designed to fit in the corner of a bedroom',
    //     },
    //     {
    //         id: 6,
    //         imageUrl:
    //          'WardRobe/1DW/14_ycnmgo',
    //         title: '',
    //         description:
    //             'simple and contemporary design, single-door wardrobe is made of wood and has a full-length mirror on the front.',
    //     },
    //     {
    //         id: 7,
    //         imageUrl:
    //          'WardRobe/1DW/12_nxa1v7',
    //         title: '',
    //         description:
    //             'a contemporary space-saving single-door wardrobe, ideal for smaller bedrooms or hallways with mirrors for modern interiors',
    //     },

    //     // Add more card objects as needed
    // ];
    // const P2cardData = [
    //     {
    //         id: 1,
    //         imageUrl:
    //          'WardRobe/1DW/15_b9gexm',
    //         title: '',
    //         description:
    //             'The single-door wardrobe with clean, white finish with a full-length mirror space-saving storage solution. ',
    //     },
    //     {
    //         id: 2,
    //         imageUrl:
    //          'WardRobe/1DW/17_xepq6o',
    //         title: '',
    //         description:
    //             'the single-door wooden wardrobe and a mirror on the front with a shelf on the side. Ideal for small rooms, offer hanging space and a mirrored front for a contemporary look.',
    //     },
    //     {
    //         id: 3,
    //         imageUrl:
    //          'WardRobe/1DW/1_z6mffw',
    //         title: '',
    //         description:
    //             'Habitat Camden single-door wardrobe made from a gray painted finish acacia wood. providing ample hanging and storage space.',
    //     },
    //     {
    //         id: 4,
    //         imageUrl:
    //          'WardRobe/1DW/2_sizvmd',
    //         title: '',
    //         description:
    //             'Single-door wardrobes, offering hanging rods and shelves for clothes storage behind a single, often wood-constructed door with a black handle.',
    //     },
    //     {
    //         id: 5,
    //         imageUrl:
    //          'WardRobe/1DW/single_q7nip2',
    //         title: '',
    //         description:
    //             'Space-saving wardrobe with a single, hinged blue door. Ideal for smaller rooms.',
    //     },
    //     {
    //         id: 6,
    //         imageUrl:
    //          'WardRobe/1DW/4_nhn4qc',
    //         title: '',
    //         description:
    //             'a single-door wardrobe from wood with a painted finish. With a mirror on the front door, adding functionality and creating the illusion of a more spacious room.',
    //     },
    //     {
    //         id: 7,
    //         imageUrl:
    //          'WardRobe/1DW/19_tdtjsf',
    //         title: '',
    //         description:
    //             'space-saving single-door wardrobe   having shelves for storing clothes, making it a functional storage solution for bedrooms.',
    //     },
    // ];

    // const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });


    return (
        <>



         <Helmet>
  <title>1-Door Wardrobe</title>


  <link rel="canonical" href="https://adhunikdecodive.com/VastuTips" data-react-helmet="true"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>

</Helmet>

            <div className="w-full bg-white p-3 md:p-5  "  >

            <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="blogSection pr-6 lg:pr-0">
              <h1 className="text-3xl font-bold mb-6">
                Most Simple Yet Useful Vastu Tips for the Perfect Interiors
              </h1>
              <p className="mb-4">
                A home always demands perfect energy to sustain a joyful and optimistic life...
              </p>
              
              {/* Table of Content */}
              <div className="bg-gray-200 p-4 rounded-md mb-6">
                <h3 className="text-xl font-semibold">Table of Content</h3>
                <ul className="list-disc pl-5">
                  <li><Link href="#p0" className="text-blue-500">Vastu Interior Design for Living Room</Link></li>
                  <li><Link href="#p1" className="text-blue-500">Vastu Interior Design for Bedroom</Link></li>
                  <li><Link href="#p2" className="text-blue-500">Vastu Interior Design for Kitchen</Link></li>
                  <li><Link href="#p3" className="text-blue-500">Vastu Interior Design for Bathroom</Link></li>
                  <li><Link href="#p4" className="text-blue-500">Vastu Interior Design for Puja Room</Link></li>
                </ul>
              </div>
              
              {/* Blog Images & Content */}
              <img id="p0" src="https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={800} height={450} alt="Vastu Interior Design for Living Room" className="w-full mb-4" />
              <h2 className="text-2xl font-bold mb-4">Vastu Interior Design for Living Room</h2>
              <p className="mb-4">Your living room is a significant gathering place, which should provide positive energy...</p>
              <ul className="list-disc pl-5">
                <li>Keep furniture in the south or west direction.</li>
                <li>Opt light colors for the walls.</li>
                <li>All electrical appliances must be retained in the south-east direction.</li>
              </ul>
              
              <img id="p1" src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={800} height={450} alt="Vastu Interior Design for Bedroom" className="w-full my-6" />
              <h3 className="text-2xl font-bold mb-4">Vastu Interior Design for Bedroom</h3>
              <p className="mb-4">Make your bedroom a loving and harmonious space...</p>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h5 className="text-xl font-semibold text-primary mb-4">Get In Touch</h5>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
                <input type="text" placeholder="Mobile" className="w-full p-2 border rounded" />
                <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
                <textarea rows="3" placeholder="Message" className="w-full p-2 border rounded"></textarea>
                <button className="bg-blue-500 text-white py-2 px-4 rounded">Submit Now</button>
              </form>
            </div>
            
            <div className="mt-6">
              <h5 className="text-xl font-semibold mb-4">Recent Posts</h5>
              <div className="space-y-4">
                <Link href="/blog/pros-and-cons-of-veneer" className="flex items-center space-x-4">
                  <img src="https://images.pexels.com/photos/21835273/pexels-photo-21835273/free-photo-of-sofa-with-pillows-and-blanket-next-to-coffee-table-with-laptop.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" width={80} height={80} alt="Pros and Cons of Veneer" className="rounded-lg" />
                  <div>
                    <p className="text-lg font-medium">Pros and Cons of Veneer in Interior Design</p>
                    <p className="text-sm text-gray-500">01 Feb 2024</p>
                  </div>
                </Link>
                <Link href="/blog/smart-home-tech" className="flex items-center space-x-4">
                  <img src="https://images.pexels.com/photos/21835273/pexels-photo-21835273/free-photo-of-sofa-with-pillows-and-blanket-next-to-coffee-table-with-laptop.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" width={80} height={80} alt="Smart Homes and Technology" className="rounded-lg" />
                  <div>
                    <p className="text-lg font-medium">Smart Homes and Technology</p>
                    <p className="text-sm text-gray-500">27 Jan 2024</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

            </div>

            <Footer />

</>
   
    )
}

export default VastuTips