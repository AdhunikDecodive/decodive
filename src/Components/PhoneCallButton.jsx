
const PhoneCallButton = () => {
  const phoneNumber = "9355588595";

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
   
<>
<button onClick={handlePhoneCall} 
     className="align-middle select-none  mr-3 font-bold text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border-[#EB595E] border  text-[#EB595E] shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-6/12 "
      type="button">
       Call Us Now </button>
  
</>
  
  );
};

export default PhoneCallButton;
