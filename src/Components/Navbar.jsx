import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dropdown, DropdownItem } from "flowbite-react";
import "react-lazy-load-image-component/src/effects/blur.css";

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
    { to: "/", text: "Home" },
    { to: "/AboutUs", text: "About Us" },

    {
      to: "#",
      text: "Home Appliances",
      dropdownItems: [
        { to: "/nero-chimney", text: "Nero Chimney" },
        { to: "/nadia-chimney", text: "Nadia Chimney" },
      ],
    },

    {
      to: "#",
      text: "Kitchen",
      dropdownItems: [
        { to: "/modular-kitchen-designs", text: "All Kitchen Categories" },
        { to: "/l-shape-modular-kitchen-design", text: "L-Shaped Kitchens" },
        { to: "/u-shape-modular-kitchen-design", text: "U-Shaped Kitchens" },
        { to: "/parallel-modular-kitchen-design", text: "Parallel Kitchens" },
        { to: "/kitchen-island-design", text: "Island Kitchens" },
        { to: "/straight-modular-kitchen", text: "Straight Kitchens" },
      ],
    },

    {
      to: "#",
      text: "Wardrobe",
      dropdownItems: [
        { to: "/wardrobes", text: "All Wardrobe Categories" },
        { to: "/shutter-door-wardrobe", text: "Shutter  Wardrobe" },
        { to: "/sliding-door-wardrobes", text: "Sliding  Wardrobe" },
        { to: "/Walk-in-door-wardrobes", text: "Walk in Wardrobe" },
      ],
    },
    {
      to: "#",
      text: "Furniture",
      dropdownItems: [
        { to: "/furniture-categories", text: "All Furniture Categories" },
        { to: "/domestic-furniture", text: "Domestic Furniture" },
        { to: "/commercial-furniture", text: "Commercial Furniture" },
      ],
    },
    {
      to: "#",
      text: "Home Decor",
      dropdownItems: [
        { to: "/home-decors", text: "Living Cabinets" },
        { to: "/mirrors", text: "Mirrors" },
        { to: "/wall-decor", text: "Wall Decor" },
        { to: "/vases", text: "Vases" },
        { to: "/clocks", text: "Clocks" },
        { to: "/wall-paintings", text: "Wall Painting" },
        { to: "/lamps", text: "Lamps" },
        { to: "/ceiling-lights", text: "Ceiling Lights" },
        { to: "/wall-lights", text: "Wall Lights" },
        { to: "/outdoor-lights", text: "Outdoor Lights" },
        { to: "/bedroom-lights", text: "Bedroom Lights" },
      ],
    },
    {
      to: "#",
      text: "Storage",
      dropdownItems: [
        { to: "/storage-furniture", text: "Living Cabinets" },
        { to: "/wall-mounted-pooja-mandir", text: " Pooja Shelves " },
        { to: "/tv-units", text: "TV units / Panels" },
        { to: "/bar-furniture", text: "Bar Counter" },
      ],
    },
    {
      to: "/blogs",
      text: "Blogs",
    },
    {
      to: "/support-form",
      text: "Contact us",
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navItems = [
    {
      to: "/",
      text: "Home",
      type: "link",
    },
    {
      to: "/AboutUs",
      text: "About Us",
      type: "link",
    },
    {
      text: "Home Appliances",
      type: "dropdown",
      items: [
        { to: "/nero-chimney", text: "Nero Chimney" },
        { to: "/nadia-chimney", text: "Nadia Chimney" },
      ],
    },
    {
      text: "Kitchen",
      type: "dropdown",
      items: [
        { to: "/modular-kitchen-designs", text: "All Kitchen Categories" },
        { to: "/l-shape-modular-kitchen-design", text: "L-Shaped Kitchens" },
        { to: "/u-shape-modular-kitchen-design", text: "U-Shaped Kitchens" },
        { to: "/parallel-modular-kitchen-design", text: "Parallel Kitchens" },
        { to: "/kitchen-island-design", text: "Island Kitchens" },
        { to: "/straight-modular-kitchen", text: "Straight Kitchens" },
      ],
    },
    {
      text: "Wardrobe",
      type: "dropdown",
      items: [
        { to: "/wardrobes", text: "All Wardrobe Categories" },
        { to: "/shutter-door-wardrobe", text: "Shutter Wardrobe" },
        { to: "/sliding-door-wardrobes", text: "Sliding Wardrobe" },
        { to: "/Walk-in-door-wardrobes", text: "Walk in Wardrobe" },
      ],
    },
    {
      text: "Furniture",
      type: "dropdown",
      items: [
        { to: "/furniture-categories", text: "All Furniture Categories" },
        { to: "/domestic-furniture", text: "Domestic Furniture" },
        { to: "/commercial-furniture", text: "Commercial Furniture" },
      ],
    },
    {
      text: "Home Decor",
      type: "dropdown",
      items: [
        { to: "/mirrors", text: "Mirrors" },
        { to: "/wall-decor", text: "Wall Decor" },
        { to: "/vases", text: "Vases" },
        { to: "/clocks", text: "Clocks" },
        { to: "/wall-paintings", text: "Wall Painting" },
        { to: "/lamps", text: "Lamps" },
        { to: "/ceiling-lights", text: "Ceiling Lights" },
        { to: "/wall-lights", text: "Wall Lights" },
        { to: "/bedroom-lights", text: "Bedroom Lights" },
        { to: "/outdoor-lights", text: "Outdoor Lights" },
      ],
    },
    {
      text: "Storage",
      type: "dropdown",
      items: [
        { to: "/storage-furniture", text: "Living Cabinets" },
        { to: "/wall-mounted-pooja-mandir", text: "Pooja Shelves" },
        { to: "/tv-units", text: "TV units / Panels" },
        { to: "/bar-furniture", text: "Bar Counter" },
        { to: "/basic-vastu-tips-for-home", text: "Vastu Tips" },
      ],
    },
    {
      to: "/blogs",
      text: "Blogs",
      type: "link",
    },
    {
      to: "/support-form",
      text: "Contact us",
      type: "link",
    },
  ];

  return (
    <nav
      className={` w-full z-50  transition-all duration-300 ${
        scrolled ? "bg-white shadow-md  " : " bg-white     "
      }`}
    >
      <div className=" md:mx-2 pe-2 md:px-4 py-2">

        <div className="row flex flex-row  justify-between md:justify-around">
          <div className="col flex justify-center items-center">
            <div className="  ">
              <div className=" ">
                <Link to="/" >
                  <img
                    alt="Adhunik DecoDive"
                    className="w-40"
                    src="https://res.cloudinary.com/dq14b7xie/image/upload/v1747811688/Adhunik_DecoDive_Logo_povt7l.webp"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col flex   flex-col">
            <div className="col">
              <div className="row text-right flex flex-row justify-end items-center">
                <div className="row flex flex-row md:flex-row justify-center items-center">
                  <div
                    className=" hidden lg:block col text-left text-[12px] ps-3  "
                    style={{ cursor: "pointer" }} // Optional styling for pointer and color
                  >
                    <a
                      href="/Commercial DecoDive Catelogue  2025.pdf"
                      download="Commercial-DecoDive-Catelogue-2025"
                      className={`relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group`}
                    >
                      <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-gray-200 opacity-[3%]"></span>
                      <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                      <span className="relative w-full text-left">
                        Commercial Catelogue
                      </span>
                      <span className="absolute inset-0  rounded-full"></span>
                    </a>
                  </div>

                  <hr className=" rotate-90 w-10  relative hidden lg:block " />

                  <div
                    className="col text-left text-[12px] ps-3 hidden lg:block"
                    style={{ cursor: "pointer" }} // Optional styling for pointer and color
                  >
                    <a
                      href="/Residential DecoDive Catelogue 2025.pdf" // The file path in the public folder
                      download="Residential-DecoDive-Catelogue-2025"
                      className={`relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group`}
                    >
                      <span className=" w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-gray-200 opacity-[3%]"></span>
                      <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                      <span className="relative w-full text-left">
                       Residential Catelogue  
                      </span>
                      <span className="absolute inset-0 rounded-full"></span>
                    </a>
                  </div>

                  <hr className=" rotate-90 w-10  relative hidden lg:block " />

                  <div className="col px-7 md:px-0 pt-4 md:pt-0 pb-2 md:pb-0">
                    <svg
                      onClick={() =>
                        (window.location.href =
                          "mailto:info@adhunikdecodive.com")
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>

                  <div
                    className="col text-left text-[12px] ps-3 hidden md:block"
                    onClick={() =>
                      (window.location.href =
                        "mailto:info@adhunikdecodive.com")
                    }
                    style={{ cursor: "pointer" }} // Optional styling for pointer and color
                  >
                    <p className="font-sans font-thin">Drop Us An Email</p>
                    <p>info@adhunikdecodive.com</p>
                  </div>

                  <hr className=" rotate-90 w-10  relative hidden md:block " />

                  <div className="col px-7 md:px-0  pt-4 md:pt-0 pb-2 md:pb-0 ">
                    <svg
                      onClick={() => (window.location.href = "tel:9355588595")}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </div>

                  <div
                    className="col text-left text-[12px] ps-2 hidden md:block"
                    onClick={() => (window.location.href = "tel:9355588595")}
                    style={{ cursor: "pointer" }} // Optional styling for pointer and color
                  >
                    <p className="font-sans font-thin">Toll-Free Number</p>
                    <p>9355588595</p>
                  </div>

                  <hr className=" rotate-90 w-10  relative hidden md:block" />
                </div>
              </div>

              <div className=" flex w-full  py-3 items-center rounded-full">
                <div className="flex-1 border-b border-gray-300"></div>
              </div>
            </div>

            <div className="hidden  lg:flex items-center space-x-1">
              <ul className="flex  md:text-[11px] lg:text-[15px] flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className=" media-style after:content-[''] after:block after:w-full after:h-[3px] after:bg-gradient-to-r after:from-orange-500 after:to-orange-700 after:scale-x-0 after:origin-left after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100"
                  >
                    {item.type === "link" ? (
                      <Link
                        to={item.to}
                        className="   block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0    md:p-0 md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        {item.text}
                      </Link>
                    ) : (
                      <Dropdown label={item.text} inline>
                        {item.text === "Home Decor" ? (
                          <>
                            <Link className="" to="/home-decors">
                              <div className="text-center justify-center flex">
                                <Dropdown.Item className="w-full">
                                  All Categories
                                </Dropdown.Item>
                              </div>
                            </Link>
                            <div className="row flex w-64">
                              <div className="w-6/12 flex">
                                <ul className="">
                                  {item.items
                                    .slice(0, 5)
                                    .map((subItem, subIndex) => (
                                      <Link key={subIndex} to={subItem.to}>
                                        <Dropdown.Item>
                                          {subItem.text}
                                        </Dropdown.Item>
                                      </Link>
                                    ))}
                                </ul>
                              </div>
                              <div className="w-6/12">
                                <ul>
                                  {item.items
                                    .slice(5)
                                    .map((subItem, subIndex) => (
                                      <Link key={subIndex} to={subItem.to}>
                                        <Dropdown.Item>
                                          {subItem.text}
                                        </Dropdown.Item>
                                      </Link>
                                    ))}
                                </ul>
                              </div>
                            </div>
                          </>
                        ) : (
                          item.items.map((subItem, subIndex) => (
                            <Link key={subIndex} to={subItem.to}>
                              <Dropdown.Item>{subItem.text}</Dropdown.Item>
                            </Link>
                          ))
                        )}
                      </Dropdown>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              className="mobile-menu-button"
              aria-label="Open mobile menu"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                // Close icon
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
      </div>

      {/* Mobile menu */}

      <div
        className={`mobile-menu lg:hidden ${
          isMobileMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"
        } ${scrolled ? " bg-transparent" : "bg-gray-100 text-black"}`}
      >
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
                      className={`w-4 h-4 ml-2 ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
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
