import { useEffect, useRef, useState } from "react";
import popimg from "../assets/Images/popimg.webp";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import emailjs from "@emailjs/browser";
function PopUp() {

  const notifye = () => toast.error(" Invalid Details ");
  const notifys = () => toast(" Message Sent ");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
  });
  const formRef = useRef(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Show the form after 5 seconds
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 40000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Limit the phone number input to 10 digits
    if (name === "phone" && value.length <= 10) {
      setFormData({ ...formData, [name]: value });
    } else {
      // Update other input fields directly
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let formValid = true;
    const newErrors = { ...errors };

    // Validation logic
    if (formData.name.trim() === "") {
      
      newErrors.name = "Name is required";
      formValid = false;
    }
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      formValid = false;
    }
    if (formData.phoneNumber.trim() === "") {
      newErrors.phoneNumber = "phone Number is required";
      formValid = false;
    }
    if (formData.message.trim() === "") {
      newErrors.message = "message is required";
      formValid = false;
    }

    // If form is not valid, set errors and prevent submission
    if (!formValid) {
      setErrors(newErrors);
      notifye();
      return;
    }

    // Form submission logic goes here
    console.log("Form submitted");

    notifys();
    emailjs.sendForm("service_ysubrsd", "template_1o6vx6w", formRef.current, {
      publicKey: "Iq_-ZmeI5PickXmHm",
    });
    handleClose(); // Close the form after submission
  };

  return (
    <>
        <ToastContainer />
      <div
        className={`z-10 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${
          showForm ? "" : "hidden"
        }`}
      >
        <div className="bg-white rounded shadow-lg">
          <div className="row h-full w-full flex justify-end">
            <button
              type="button"
              className="px-2 py-2 text-gray-600 hover:text-gray-800"
              onClick={handleClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            className="lg:p-9 p-3 rounded-sm"
            style={{
              backgroundImage: `url(${popimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(.9)",
            }}
          >
            <h2 className="font-semibold text-3xl py-4 text-center text-transparent bg-gradient-to-r from-white via-white to-white bg-clip-text">
              Designs for Every Budget
            </h2>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="px-4 py-5 lg:px-14 lg:py-5"
            ref={formRef}
          >
            <div className="relative z-0 w-full mb-5">
              <input
              id="Name"
                type="text"
                name="name"
                placeholder=" "
                value={formData.name}
                onChange={handleInputChange}
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 "
              />
              <label
                htmlFor="name"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-70 "
              >
                Name
              </label>
              <span className="text-sm text-red-600">{errors.name}</span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
              id="Email"
                type="email"
                name="email"
                placeholder=" "
                value={formData.email}
                onChange={handleInputChange}
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="email"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-700"
              >
                Email
              </label>
              <span className="text-sm text-red-600">{errors.email}</span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
              id="phoneNumber"
                type="number"
                name="phoneNumber"
                placeholder=" "
                value={formData.phoneNumber}
                onChange={handleInputChange}
                min="0"
                max="9999999999"
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="phone"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-700"
              >
                Phone
              </label>
              <span className="text-sm text-red-600">{errors.phone}</span>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="message"
                 id="message"
                placeholder=" "
                value={formData.message}
                onChange={handleInputChange}
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="message"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-700"
              >
                Message
              </label>
              <span className="text-sm text-red-600">{errors.message}</span>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopUp;
