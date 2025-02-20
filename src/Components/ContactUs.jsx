import Footer from "./Footer";
import  { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import  { Suspense } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";



const Loading = () => (


  <div className="relative h-60 mb-4 flex justify-center items-center bg-gray-300 animate-pulse">
    <svg
      className="w-full h-full text-gray-200 dark:text-gray-600"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 18"
    >
      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
    </svg>
  </div>

);

function ContactUs() {

  const notifye = () => toast.error(" Invalid Details ");
  const notifys = () => toast(" Message Sent ");

  
  const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });

  const phoneNumber = "9355588595";

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const emailAddress = "info@adhunikdecodive.com";

  const handleEmailSend = () => {
    window.location.href = `mailto:${emailAddress}`;
  };



  const locationAddress = "Adhunik DecoDive 603, Reach My Tower, Sector 70, Haryana Gurugram-122001";

  const handleGetLocation = () => {
    // Constructing the Google Maps URL with the address
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationAddress)}`;
    // Opening the URL in a new tab
    window.open(mapsUrl, '_blank');
  };


  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    city: "",
    state: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const form = useRef();
  const history = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    // Basic validation rules
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (formData.phoneNumber.trim() === "") {
      newErrors.phoneNumber = "Phone Number is required";
    }
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (formData.city.trim() === "") {
      newErrors.city = "City is required";
    }
    if (formData.state.trim() === "") {
      newErrors.state = "State is required";
    }
    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Proceed with form submission
      // Your existing code for sending email goes here
      
      emailjs
        .sendForm("service_ysubrsd", "template_4fk2nea", form.current, {
          publicKey: "Iq_-ZmeI5PickXmHm",
        })
        .then(() => {
          notifys();
          console.log("SUCCESS!");
          history("/ThankYouPage");
          setTimeout(() => {
            history("/");
          }, 10000);
        })
        .catch((error) => {
          console.log("FAILED...", error);
        });
      console.log("Form validate");
    } else {
      // Form validation failed
      console.log("Form validation failed");
      notifye();
    }
  };

 


  



  return (
    <>

<HelmetProvider>

   <ToastContainer />

   <Helmet>
  <title>Contact Us</title>

  <meta name="description" content="For any inquiries or to get in touch with us, reach out to Adhunik DecoDive, We're here to assist you in creating your ideal living space." data-react-helmet="true"/>

  <link rel="canonical" href="https://adhunikdecodive.com/contact" data-react-helmet="true"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>

</Helmet>

      <div className="w-full  ">
        <div className=" w-full p-7   items-center justify-center ">
          <h1 className="text-5xl pt-4 text-center">Contact Us</h1>
        </div>
        <div className=" w-full ">
          <div className="text-center">
            <div className=" justify-around grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 group p-5 ">


              <div className="bg-slate-100 transition-transform hover:!blur-none group-hover:scale-[.85] hover:!scale-100 p-4 rounded-xl mix-blend-luminosity cursor-pointer">
                <div className="w-auto h-auto">
                  <svg
                    className="mx-auto my-auto w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </div>

                <h4 className="uppercase text-xl font-bold">Phone</h4>

                <p className="text-sm leading-7 my-3 font-light opacity-50">
                  {phoneNumber}
                </p>

                <button className="bg-btn_primary py-2.5 px-8 rounded-full hover:text-gray-400 " onClick={handlePhoneCall}>
                  Get in Touch
                </button>
              </div>

              <div className="p-4 rounded-xl transition-transform group-hover:scale-[.85] hover:!scale-100 hover:!blur-none mix-blend-luminosity bg-slate-100 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mx-auto my-auto w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>

                <h4 className="uppercase text-xl font-bold">E-mail</h4>

                <p className="text-sm leading-7 my-3 font-light opacity-50">
                  {emailAddress}
                </p>

                <button className="bg-btn_primary py-2.5 px-8 rounded-full hover:text-gray-400" onClick={handleEmailSend}>
                  Get in Touch
                </button>
              </div>

              <div className="bg-slate-100 transition-transform group-hover:scale-[.85] hover:!scale-100 hover:!blur-none p-4 rounded-xl mix-blend-luminosity cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mx-auto my-auto w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                <h4 className="uppercase text-xl font-bold">Location</h4>

                <p className="text-sm leading-7 my-3 font-light opacity-50">
                  {locationAddress}
                </p>

                <button className="bg-btn_primary py-2.5 px-8 rounded-full hover:text-gray-400" onClick={handleGetLocation}>
                  Get in Touch
                </button>
              </div>

              
            </div>
          </div>

          <div className=" w-full bg-[white] mt-5 flex flex-col md:flex-row justify-center mx-auto">
  

  <Suspense fallback={<Loading />}>
         <div className="h-auto w-full md:w-7/12 ">
        
          <AdvancedImage  decoding="async"
                  loading="lazy"     effect="blur" className=" h-auto w-full p-3 " alt="Talk To Our Design Expert." cldImg={cld.image('Images/1__mj5ckj')} />
        </div>
        </Suspense>

            <div className="h-auto w-auto lg:w-5/12  mt-5">

              <form
                className="w-auto m-3 md:m-7"
                onSubmit={sendEmail}
                ref={form}
              >
                <h1 className="text-4xl mb-7 capitalize">Talk to our design expert.</h1>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      placeholder="Enter Name"
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Enter Phone Number"
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500">{errors.phoneNumber}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email ID
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Enter Email ID"
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-city"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Gurugram"
                    />
                    {errors.city && (
                      <p className="text-red-500">{errors.city}</p>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-state"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Haryana"
                    />
                    {errors.state && (
                      <p className="text-red-500">{errors.state}</p>
                    )}
                  </div>
                </div>
                <div className="text-area mt-5">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write here..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                 
                  className="w-full button bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded mt-5"
                >
                  BOOK A CONSULTATION
                </button>
              </form>
              
            </div>
          </div>

          <div className="w-full h-full">
            <div className="google-maps-embed">
          
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.9375476430478!2d77.02749457543466!3d28.390954195010185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d236b8c98bf29%3A0x266dda9c259993e0!2sAdhunik%20DecoDive!5e0!3m2!1sen!2sin!4v1721627371749!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"
                className=" w-full h-[50vh]"
                style={{ border: 0 }}
                loading="lazy"
                title="Google Maps Embed"
            
            ></iframe>
            </div>
          </div>
        </div>
      </div>

      
    
    
      <Footer />

</HelmetProvider>
    </>
  );
}

export default ContactUs;
