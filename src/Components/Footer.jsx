import "./Footer.css"

import { Link } from "react-router-dom";
import {  Tooltip } from "flowbite-react";


const styles = {
    backgroundImage: "url('https://res.cloudinary.com/dwhmfz63n/image/upload/v1740637220/Images/footer2__amymnq.webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    filter: 'brightness(1)'
};
function Footer() {

    const handleMapClick = () => {
        // Replace with the actual latitude and longitude of the location

        const latitude = "28.407386810274993";
        const longitude = "76.99749184662686";
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

        // Open the map URL in a new tab
        window.open(mapUrl, '_blank');
    };

    const phoneNumber = "9355588595";

    const handlePhoneCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (

        <>

 <footer  className="bg-[#F3F3F3] text-center h-auto w-auto font-['Rejouice-Headline']   lg:text-left "
                style={styles} >

                <div className="mx-6 pt-8 pb-1 text-center md:text-left">
                    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                        <div className="">
                            <h1 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                                <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                                    </svg>
                                </span>
                                Adhunik DecoDive
                            </h1>
                            <p className="  text-justify">
                                Where Every Corner Unveils a Unique  Design Story
                                From cozy corners to custom closets, we bring your dream home to reality, embracing everything from classic  charm to modern simplicity
                            </p>
                        </div>

                        <div>
                            <h2 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                INFORMATIONS

                            </h2>

                            <p className="mb-4 flex items-center justify-center md:justify-start cursor-pointer" onClick={handleMapClick}>
                                <span className="me-3 h-5 w-5 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                        <path
                                            d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                    </svg>
                                </span>
                                #603 , Reach My Tower <br /> Sec-70, Gurugram-122001
                            </p>

                            <p className="mb-4 flex items-center justify-center md:justify-start cursor-pointer" onClick={handlePhoneCall}>
                                <span className="me-3 h-5 w-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd"
                                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </span>
                                {phoneNumber}
                            </p>

                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                        <path
                                            d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>
                                </span>
                                <a href="mailto:email@example.com">info@adhunikdecodive.com</a>
                            </p>

                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd"
                                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </span>
                                Mon-Sat: 09:30 AM - 6:00 PM
                            </p>

                        </div>

                        <div>
                            <h2 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                USEFUL LINKS
                            </h2>
                            <p className="mb-4">
                                <Link to="/KitchenCategory" className="link link--thebe" >
                                    Kitchen Designs</Link>
                            </p>
                            <p className="mb-4">
                                <Link to="/Wardrobe" className="link link--thebe">
                                    Wardrobe Designs</Link>
                            </p>
                            <p className="mb-4">
                                <Link to="/Furniture" className="link link--thebe">
                                    Furniture Designs</Link>
                            </p>
                            <p className="mb-4">
                                <Link to="/HomeDecor" className="link link--thebe">
                                    Home Decor Designs</Link>
                            </p>


                        </div>

                        <div className="  ">
                            <h2 className="mb-4 flex flex-row text-center md:justify-start  font-semibold uppercase justify-center ">
                                Stay Connected! Join Us On...
                            </h2>

                            <div className="row ">

                                <div className="w-full h-full">
                                    <div className="row flex  flex-wrap  md:justify-left md:justify-start justify-center gap-4 cursor-pointer">

                                        <Tooltip content="x" style="light" placement="bottom">
                                            <a href="https://x.com/Adhunikdecodive" className="w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden   group transition-all duration-300"
                                            aria-label="Visit our profile on X (formerly Twitter)"
                                            >
                                                <svg className="fill-black z-10 transition-all duration-300 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
                                                    <path d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z" fill=""></path>
                                                </svg>
                                                <div className="absolute top-full left-0 w-full h-full rounded-full bg-black z-0 transition-all duration-500 group-hover:top-0"></div>
                                                <span className=" hidden">x.com</span>
                                            </a>
                                        </Tooltip>


                                        <Tooltip content="pinterest" style="light" placement="bottom">
                                            <a href="https://in.pinterest.com/adhunikdecodive/" className="w-10 h-10 flex items-center justify-center rounded-full   group transition-all duration-300 relative overflow-hidden"
                                            aria-label="Visit our profile on pinterest (formerly pinterest)"
                                            >
                                                <svg className="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 71 72" fill="none">
                                                    <path d="M33.3501 13.0437C25.9186 13.893 18.5132 20.0479 18.2075 28.84C18.0154 34.2083 19.5044 38.2356 24.4951 39.3664C26.6608 35.4553 23.7965 34.5927 23.3511 31.7633C21.5216 20.1686 36.4153 12.2615 44.2093 20.3563C49.6018 25.9615 46.0519 43.206 37.3541 41.4136C29.0231 39.7017 41.4323 25.9749 34.7823 23.2796C29.3767 21.0894 26.5037 29.9798 29.0667 34.396C27.5647 41.9902 24.3292 49.1464 25.6391 58.6715C29.8876 55.5158 31.3198 49.4727 32.4943 43.1702C34.6295 44.4978 35.7691 45.8789 38.4937 46.0935C48.5407 46.8891 54.1515 35.8263 52.7805 25.6218C51.5623 16.5749 42.7422 11.971 33.3501 13.0437Z" fill=""></path>
                                                </svg>
                                                <div className="absolute top-full left-0 w-full h-full rounded-full bg-red-600 z-0 transition-all duration-500 group-hover:top-0"></div>
                                                <span className=" hidden">pinterest</span>
                                            </a>
                                        </Tooltip>

                                        <Tooltip content="instagram" style="light" placement="bottom">
                                            <a href="https://www.instagram.com/adhunikdecodive/?hl=en" className="w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden   group transition-all duration-500" 
                                             aria-label="Visit our profile on instagram (formerly instagram)"
                                            >
                                                <svg className="fill-gray-900 relative z-10 transition-all duration-500 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 51 51" fill="none">
                                                    <path d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808ZM36.1342 12.4346C36.1339 13.0279 36.3098 13.608 36.6394 14.1015C36.9691 14.595 37.4377 14.9797 37.9861 15.2069C38.5346 15.4342 39.1381 15.4939 39.7204 15.3784C40.3028 15.2628 40.8378 14.9773 41.2577 14.5579C41.6777 14.1385 41.9638 13.6041 42.0799 13.0222C42.1959 12.4403 42.1367 11.8371 41.9097 11.2888C41.6828 10.7406 41.2982 10.2719 40.8047 9.94202C40.3112 9.61218 39.7309 9.436 39.1372 9.43576H39.136C38.3402 9.43613 37.5771 9.75216 37.0142 10.3144C36.4514 10.8767 36.1349 11.6392 36.1342 12.4346ZM15.6765 46.1302C13.2377 46.0192 11.9121 45.6132 11.0311 45.2702C9.86323 44.8158 9.02993 44.2746 8.15381 43.4002C7.27768 42.5258 6.73536 41.6938 6.28269 40.5266C5.93928 39.6466 5.53304 38.3214 5.42217 35.884C5.3009 33.2488 5.27668 32.4572 5.27668 25.781C5.27668 19.1048 5.3029 18.3154 5.42217 15.678C5.53324 13.2406 5.94248 11.918 6.28269 11.0354C6.73736 9.86816 7.27888 9.03536 8.15381 8.15976C9.02873 7.28416 9.86123 6.74216 11.0311 6.28976C11.9117 5.94656 13.2377 5.54056 15.6765 5.42976C18.3133 5.30856 19.1054 5.28436 25.7826 5.28436C32.4598 5.28436 33.2527 5.31056 35.8916 5.42976C38.3305 5.54076 39.6539 5.94976 40.537 6.28976C41.7049 6.74216 42.5382 7.28536 43.4144 8.15976C44.2905 9.03416 44.8308 9.86816 45.2855 11.0354C45.6289 11.9154 46.0351 13.2406 46.146 15.678C46.2673 18.3154 46.2915 19.1048 46.2915 25.781C46.2915 32.4572 46.2673 33.2466 46.146 35.884C46.0349 38.3214 45.6267 39.6462 45.2855 40.5266C44.8308 41.6938 44.2893 42.5266 43.4144 43.4002C42.5394 44.2738 41.7049 44.8158 40.537 45.2702C39.6565 45.6134 38.3305 46.0194 35.8916 46.1302C33.2549 46.2514 32.4628 46.2756 25.7826 46.2756C19.1024 46.2756 18.3125 46.2514 15.6765 46.1302ZM15.4694 0.932162C12.8064 1.05336 10.9867 1.47536 9.39755 2.09336C7.75177 2.73156 6.35853 3.58776 4.9663 4.97696C3.57406 6.36616 2.71955 7.76076 2.08097 9.40556C1.46259 10.9948 1.04034 12.8124 0.919069 15.4738C0.795795 18.1394 0.767578 18.9916 0.767578 25.7808C0.767578 32.57 0.795795 33.4222 0.919069 36.0878C1.04034 38.7494 1.46259 40.5668 2.08097 42.156C2.71955 43.7998 3.57426 45.196 4.9663 46.5846C6.35833 47.9732 7.75177 48.8282 9.39755 49.4682C10.9897 50.0862 12.8064 50.5082 15.4694 50.6294C18.138 50.7506 18.9893 50.7808 25.7826 50.7808C32.5759 50.7808 33.4286 50.7526 36.0958 50.6294C38.759 50.5082 40.5774 50.0862 42.1676 49.4682C43.8124 48.8282 45.2066 47.9738 46.5989 46.5846C47.9911 45.1954 48.8438 43.7998 49.4842 42.156C50.1026 40.5668 50.5268 38.7492 50.6461 36.0878C50.7674 33.4202 50.7956 32.57 50.7956 25.7808C50.7956 18.9916 50.7674 18.1394 50.6461 15.4738C50.5248 12.8122 50.1026 10.9938 49.4842 9.40556C48.8438 7.76176 47.9889 6.36836 46.5989 4.97696C45.2088 3.58556 43.8124 2.73156 42.1696 2.09336C40.5775 1.47536 38.7588 1.05136 36.0978 0.932162C33.4306 0.810962 32.5779 0.780762 25.7846 0.780762C18.9913 0.780762 18.138 0.808962 15.4694 0.932162Z" fill=""></path>

                                                    <defs>
                                                        <radialGradient id="paint0_radial_7092_54404" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.41436 51.017) scale(65.31 65.2708)">
                                                            <stop offset="0.09" stopColor="#FA8F21"></stop>
                                                            <stop offset="0.78" stopColor="#D82D7E"></stop>
                                                        </radialGradient>
                                                        <radialGradient id="paint1_radial_7092_54404" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(31.1086 53.257) scale(51.4733 51.4424)">
                                                            <stop offset="0.64" stopColor="#8C3AAA" stopOpacity="0"></stop>
                                                            <stop offset="1" stopColor="#8C3AAA"></stop>
                                                        </radialGradient>
                                                    </defs>
                                                </svg>
                                                <div className="absolute top-full left-0 w-full h-full rounded-full bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500 z-0 transition-all duration-500 group-hover:top-0"></div>
                                                <span className=" hidden">instagram</span>
                                            </a>
                                        </Tooltip>


                                            <Tooltip content="facebook" style="light" placement="bottom">
                                                <a href="https://www.facebook.com/profile.php?id=61560707765598" className="w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full   group transition-all duration-300"
                                                 aria-label="Visit our profile on facebook (formerly facebook)"
                                                 >
                                                    <svg className="relative z-10 fill-gray-900 transition-all duration-300 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
                                                        <path d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z" fill=""></path>
                                                    </svg>
                                                    <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"></div>
                                                    <span className=" hidden">facebook</span>
                                                </a>
                                            </Tooltip>
                                            <Tooltip content="youtube" style="light" placement="bottom">
                                            <a href="https://www.youtube.com/@AdhunikDecoDive" aria-label="Adhunik DecoDive YouTube Channel" className="w-10 h-10 flex items-center relative overflow-hidden justify-center rounded-full   group transition-all duration-300">
                        <svg className="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 72 72" fill="none">
                          <path d="M61.1026 23.7185C60.5048 21.471 58.7363 19.6981 56.4863 19.0904C52.4181 18 36.0951 18 36.0951 18C36.0951 18 19.7805 18 15.7039 19.0904C13.4622 19.6897 11.6937 21.4627 11.0876 23.7185C10 27.7971 10 36.3124 10 36.3124C10 36.3124 10 44.8276 11.0876 48.9063C11.6854 51.1537 13.4539 52.9267 15.7039 53.5343C19.7805 54.6247 36.0951 54.6247 36.0951 54.6247C36.0951 54.6247 52.4181 54.6247 56.4863 53.5343C58.728 52.935 60.4965 51.162 61.1026 48.9063C62.1902 44.8276 62.1902 36.3124 62.1902 36.3124C62.1902 36.3124 62.1902 27.7971 61.1026 23.7185Z" fill=""></path>
                          <path className="fill-white transition-all duration-300 group-hover:fill-[#FF3000]" d="M30.8811 44.1617L44.4392 36.3124L30.8811 28.463V44.1617Z" fill="white"></path>
                        </svg>
                      <div className="absolute top-full left-0 w-full h-full rounded-full bg-[#FF3000] z-0 transition-all duration-500 group-hover:top-0"></div>
                      </a>
                                            </Tooltip>
                                  
                                            <Tooltip content="linkedin" style="light" placement="bottom">
                                            <a href="https://www.linkedin.com/in/adhunik-decodive-032347337/" className="w-10 h-10 flex items-center relative overflow-hidden justify-center rounded-full   group transition-all duration-300">
                  <svg className="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
                  <path d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z" fill=""></path>
                </svg>
                <div className="absolute top-full left-0 w-full h-full rounded-full bg-[#006699] z-0 transition-all duration-500 group-hover:top-0"></div>
                </a>

                </Tooltip>

                                 
                                            

                                        

                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-black/5 p-6 text-center">
                    <span>© 2025 Copyright:</span>
                    <Link className="font-semibold" to="/"> Adhunik DecoDive</Link>
                </div>
            </footer>

        </>
    )
}

export default Footer


