import { useState, useRef } from "react";
import { Label, Modal, TextInput } from "flowbite-react";
import PropTypes from 'prop-types';
import emailjs from "@emailjs/browser";
import "./LShapeKitchen.css";
import { AdvancedImage } from "@cloudinary/react";

import { Cloudinary } from "@cloudinary/url-gen";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ModalNew = ({ isOpen, onClose }) => {
  // const notifye = () => toast.error(" Invalid Details ");
  // const notifys = () => toast(" Message Sent ");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (name === "phoneNumber" && type === "number") {
      if (value.length <= 10) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs.sendForm("service_ysubrsd", "template_1o6vx6w", formRef.current, {
        publicKey: "Iq_-ZmeI5PickXmHm",
      })
        .then(() => {
          console.log("SUCCESS!");
          // notifys();
          onClose();
          setTimeout(() => {
            resetForm();
          }, 5000);
        })
        .catch((error) => {
          console.log("FAILED...", error);
          notifye();
        });
    } else {
      // notifye();
      alert("Please enter valid information.");
    }
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    return emailRegex.test(formData.email) && phoneRegex.test(formData.phoneNumber);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  const toggleModal = () => {
    onClose();
  };
  const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });



  return (
    <>

  
    <ToastContainer />
    <Modal
      show={isOpen}
      size="md"
      onClose={toggleModal}
      popup
      className="backdrop-blur-sm bg-white/2"
    >
      <Modal.Header className="border-r-[1px] border-l-[1px] border-t-[1px] rounded-t-lg border-[#b8b8b8]" />
      <div >

<div className="row overflow-hidden">
<AdvancedImage
              cldImg={cld.image('Images/popimg_uhm34x')}
             
                className="  absolute  h-40 w-full "   alt=" Unlock exciting offers by sharing your offers "
                decoding="async"
                effect="blur"
              
              />
               <h1 className="font-semibold text-3xl py-3 md:py-8 relative    text-center   text-white">
            Unlock exciting offers <br /> by sharing your offers
          </h1>
</div>
     
                 
    
      </div>
      <Modal.Body className=" overflow-hidden bg-white relative mt-6 pt-1 border-r-[1px] border-l-[1px] border-t-[1px] rounded-b-md border-[#b8b8b8]">
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="space-y-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Name" value="Name" />
              </div>
              <TextInput
                id="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Email" value="Email" />
              </div>
              <TextInput
                id="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
               id="phoneNumber"
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="appearance-none block w-full border border-[#D1D5DA] bg-[#F9FAFB] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                required
              />
            </div>
            <div className="text-area mt-5">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="capitalize w-full button text-white rounded-full hover:bg-black text-bla font-semibold hover:text-white py-2 px-4 border hover:border-transparent mt-5 bg-[#EB595E]"
            >
              Get Free Quote
            </button>
          </div>
          <p className="text-[12px] text-center text-gray-500 pt-1">
            By submitting this form, you agree to the <span className="text-red-600">privacy policy & terms and conditions</span>
          </p>
        </form>
      </Modal.Body>
    </Modal>
    </>
  );
};

ModalNew.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalNew;
