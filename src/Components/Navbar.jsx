
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Dropdown, DropdownItem } from "flowbite-react";
import 'react-lazy-load-image-component/src/effects/blur.css';
 
function Navbar() {

   
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    // Function to toggle the mobile menu visibility

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Function to close the mobile menu and dropdown

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
    };

    // Function to toggle the dropdown

    const toggleDropdown = (dropdownIndex) => {
        setOpenDropdown(openDropdown === dropdownIndex ? null : dropdownIndex);
    };

    // Function to prevent event propagation

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const links = [
        { to: '/', text: 'Home' },
        { to: '/AboutUs', text: 'About Us' },


        {
            to: '#',
            text: 'Home Appliances',
            dropdownItems: [
                { to: '/nero-chimney', text: 'Nero Chimney' },
                { to: '/fabia-chimney', text: 'Fabia Chimney' },
            

            ],
        },

        {
            to: '#',
            text: 'Kitchen',
            dropdownItems: [
                { to: '/modular-kitchen-designs', text: 'All Kitchen Categories' },
                { to: '/l-shape-modular-kitchen-design', text: 'L-Shaped Kitchens' },
                { to: '/u-shape-modular-kitchen-design', text: 'U-Shaped Kitchens' },
                { to: '/parallel-modular-kitchen-design', text: 'Parallel Kitchens' },
                { to: '/kitchen-island-design', text: 'Island Kitchens' },
                { to: '/straight-modular-kitchen', text: 'Straight Kitchens' },

            ],
        },


        {
            to: '#',
            text: 'Wardrobe',
            dropdownItems: [
                { to: '/wardrobes', text: 'All Wardrobe Categories' },
                { to: '/shutter-door-wardrobe', text: 'Shutter  Wardrobe' },
                { to: '/sliding-door-wardrobes', text: 'Sliding  Wardrobe' },
                { to: '/Walk-in-door-wardrobes', text: 'Walk in Wardrobe' },

            ],
        },
        {
            to: '#',
            text: 'Furniture',
            dropdownItems: [
                { to: '/furniture-categories', text: 'All Furniture Categories' },
                { to: '/domestic-furniture', text: 'Domestic Furniture' },
                { to: '/commercial-furniture', text: 'Commercial Furniture' },

            ],
        },
        {
            to: '#',
            text: 'Home Decor',
            dropdownItems: [
                { to: '/home-decors', text: 'Living Cabinets' },
                { to: '/mirrors', text: 'Mirrors' },
                { to: '/wall-decor', text: 'Wall Decor' },
                { to: '/vases', text: 'Vases' },
                { to: '/clocks', text: 'Clocks' },
                { to: '/wall-paintings', text: 'Wall Painting' },
                { to: '/lamps', text: 'Lamps' },
                { to: '/ceiling-lights', text: 'Ceiling Lights' },
                { to: '/wall-lights', text: 'Wall Lights' },
                { to: '/outdoor-lights', text: 'Outdoor Lights' },
                { to: '/bedroom-lights', text: 'Bedroom Lights' },

            ],
        },
        {
            to: '#',
            text: 'Storage',
            dropdownItems: [
                { to: '/storage-furniture', text: 'Living Cabinets' },
                { to: '/wall-mounted-pooja-mandir', text: ' Pooja Shelves ' },
                { to: '/tv-units', text: 'TV units / Panels' },
                { to: '/bar-furniture', text: 'Bar Counter' },

            ],
        },
        {
            to: '/blogs',
            text: 'Blogs',
        },
        {
            to: '/support-form',
            text: 'Contact us',
        },
    ];




    return (

        <nav className="bg-gray-100 border-b-[1px]">
            <div className=" mx-2 px-4">
                <div className="flex justify-between">

                    <div className="flex space-x-4">
                        <div className="row flex  md:flex-col lg:flex-row ">
                            <Link to='/'>

                       

<img  alt="Adhunik DecoDive"   className="w-40"  src="https://res.cloudinary.com/dq14b7xie/image/upload/v1747811688/Adhunik_DecoDive_Logo_povt7l.webp"

   
  loading="lazy"    sizes="(max-width: 768px) 100vw, 400px"   
         />


                            </Link>
                           
                        </div>


                    </div>

                    <div className="hidden lg:flex items-center space-x-1">

                        <ul className="flex   md:text-[11px] lg:text-[15px] flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   ">
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/AboutUs"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    About Us
                                </Link>
                            </li>


                            <li>
                                <Dropdown
                                    label="Home Appliances"
                                    inline
                                >
                                    <Link to="/nero-chimney">
                                        <Dropdown.Item>
                                        Nero Chimney
                                        </Dropdown.Item>
                                    </Link>
                                    <Link to="/fabia-chimney">
                                        <Dropdown.Item>
                                      Fabia Chimney
                                        </Dropdown.Item>
                                    </Link>
                                
                                </Dropdown>
                            </li>


                            <li>
                                <Dropdown
                                    label="Kitchen"
                                    inline
                                >
                                    <Link to="/modular-kitchen-designs">
                                        <Dropdown.Item>
                                            All Kitchen Categories
                                        </Dropdown.Item>
                                    </Link>
                                    <Link to="./l-shape-modular-kitchen-design">
                                        <Dropdown.Item>
                                            L-Shaped Kitchens
                                        </Dropdown.Item>
                                    </Link>
                                    <Link to="./u-shape-modular-kitchen-design">
                                        <Dropdown.Item>
                                            U-Shaped Kitchens
                                        </Dropdown.Item>
                                    </Link>
                                    <Link to="/parallel-modular-kitchen-design">
                                        <Dropdown.Item>
                                            Parallel Kitchens
                                        </Dropdown.Item>
                                    </Link>
                                    <Link to="/kitchen-island-design">
                                        <Dropdown.Item>
                                            Island Kitchens
                                        </Dropdown.Item>
                                    </Link>
                                    <Link to="/straight-modular-kitchen">
                                        <Dropdown.Item>
                                            Straight Kitchens
                                        </Dropdown.Item>
                                    </Link>
                                </Dropdown>
                            </li>



                       







                            <li>
                                <Dropdown
                                    label="Wardrobe"
                                    inline
                                >
                                    <Link to="/wardrobes">
                                        <Dropdown.Item>
                                            All Wardrobe Categories
                                        </Dropdown.Item>
                                    </Link>
                                
                                    <Link to="/shutter-door-wardrobe">
                                        <Dropdown.Item>
                                            Shutter  Wardrobe
                                        </Dropdown.Item>
                                    </Link>
                                    <Link to="/sliding-door-wardrobes">
                                        <Dropdown.Item>
                                            Sliding  Wardrobe
                                        </Dropdown.Item>
                                    </Link>
                                    <Link to="/Walk-in-door-wardrobes">
                                        <Dropdown.Item>
                                            Walk in Wardrobe
                                        </Dropdown.Item>
                                    </Link>
                                </Dropdown>
                            </li>



                            <li>
                                <Dropdown
                                    label="Furniture"
                                    inline
                                >
                                    <Link to="/furniture-categories">
                                        <Dropdown.Item>
                                            All Furniture Categories
                                        </Dropdown.Item>
                                    </Link>
                                    <Link to="/domestic-furniture">
                                        <Dropdown.Item>
                                            Domestic Furniture
                                        </Dropdown.Item>
                                    </Link>
                                    <Link to="/commercial-furniture">
                                        <Dropdown.Item>
                                            Commercial Furniture
                                        </Dropdown.Item>
                                    </Link>
                                </Dropdown>
                            </li>


                            <li>
                            <Dropdown label="Home Decor" inline>
    <Link to="/home-decors">
        <div className="text-center justify-center flex">
            <Dropdown.Item className="w-full">
                All Categories
            </Dropdown.Item>
        </div>
    </Link>
    <div className="row flex w-64">
        <div className="w-6/12 flex">
            <ul>
                <Link to="/mirrors">
                    <Dropdown.Item>
                        Mirrors
                    </Dropdown.Item>
                </Link>
                <Link to="/wall-decor">
                    <Dropdown.Item>
                        Wall Decor
                    </Dropdown.Item>
                </Link>
                <Link to="/vases">
                    <Dropdown.Item>
                        Vases
                    </Dropdown.Item>
                </Link>
                <Link to="/clocks">
                    <Dropdown.Item>
                        Clocks
                    </Dropdown.Item>
                </Link>
                <Link to="/wall-paintings">
                    <Dropdown.Item>
                        Wall Painting
                    </Dropdown.Item>
                </Link>
            </ul>
        </div>
        <div className="w-6/12">
            <ul>
                <Link to="/lamps">
                    <Dropdown.Item>
                        Lamps
                    </Dropdown.Item>
                </Link>
                <Link to="/ceiling-lights">
                    <Dropdown.Item>
                        Ceiling Lights
                    </Dropdown.Item>
                </Link>
                <Link to="/wall-lights">
                    <Dropdown.Item>
                        Wall Lights
                    </Dropdown.Item>
                </Link>
                <Link to="/bedroom-lights">
                    <Dropdown.Item>
                         Bedroom Lights
                    </Dropdown.Item>
                </Link>
                <Link to="/outdoor-lights">
                    <Dropdown.Item>
                        Outdoor Lights
                    </Dropdown.Item>
                </Link>
            </ul>
        </div>
    </div>
</Dropdown>


</li>


                            


                            <li>
    <Dropdown
        label="Storage"
        inline
    >
        <Link to="/storage-furniture">
            <Dropdown.Item>
             Living Cabinets
            </Dropdown.Item>
        </Link>
        <Link to="/wall-mounted-pooja-mandir">
            <Dropdown.Item>
               Pooja Shelves
            </Dropdown.Item>
        </Link>
        <Link to="/tv-units">
            <Dropdown.Item>
                TV units / Panels
            </Dropdown.Item>
        </Link>
        <Link to="/bar-furniture">
            <Dropdown.Item >
                Bar Counter
            </Dropdown.Item>
        </Link>
        <Link to="/basic-vastu-tips-for-home">
            <Dropdown.Item >
            Vastu Tips
            </Dropdown.Item>
        </Link>
    </Dropdown>
</li>


                            <li>

                                <Link
                                    to="/blogs"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Blogs
                                </Link>


                            </li>
                            <li>

                                <Link
                                    to="/support-form"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Contact us
                                </Link>


                            </li>

                            

                        </ul>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button className="mobile-menu-button" aria-label="Open mobile menu" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? (
                                // Close icon
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Hamburger icon
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile menu */}



    


            <div className={`mobile-menu lg:hidden ${isMobileMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}`}>
                {links.map((link, index) => (
                    <div key={index} className=" mx-7  mb-2">
                        {link.dropdownItems ? (
                            <div>
                                <div
                                    className="flex border-b-2 items-center justify-between "
                                    onClick={() => toggleDropdown(index)}
                                >
                                    <Link
                                        to={link.to}
                                        className="block py-2 px-4 text-sm  hover:bg-gray-200"
                                        onClick={(e) => {
                                            if (openDropdown === index) {
                                                toggleDropdown(index);
                                            }
                                        }}
                                    >
                                        {link.text}
                                    </Link>

                                    <div className="transition-transform duration-300 transform ">

                                        <svg
                                            className={`w-4 h-4 ml-2 ${openDropdown === index ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>

                                    </div>
                                </div>
                                {openDropdown === index && (
                                    <div className="ml-2 ">
                                        {link.dropdownItems.map((dropdownItem, i) => (
                                            <Link
                                                key={i}
                                                to={dropdownItem.to}
                                                className="block py-2 px-4 text-sm hover:bg-gray-200"
                                                onClick={(e) => {
                                                    stopPropagation(e);
                                                    closeMobileMenu();
                                                }}
                                            >
                                                {dropdownItem.text}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                to={link.to}
                                className="block border-b-2 py-2 px-4 text-sm hover:bg-gray-200"
                                onClick={closeMobileMenu}
                            >
                                {link.text}
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </nav>



    );
}

export default Navbar;