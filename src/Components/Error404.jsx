
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

import { Link } from "react-router-dom";



function Error404() {
  const cld = new Cloudinary({ cloud: { cloudName: 'dwhmfz63n' } });
  return (
    <>

<div className=''>

  <div className="row">
    
<div className="w-full h-full justify-center items-center flex">

<AdvancedImage 
fetchpriority="high" 
decoding="async"
                     
                      effect="blur" 
                    className="  object-cover   h-[70vh] w-fit  "
                     alt="Thank You page"
                   src="https://res.cloudinary.com/dq14b7xie/image/upload/v1748678441/error_kr9m7v.webp"
                     />

                  

</div>
<div className="row justify-center flex items-center flex-col  pb-16">
  <p className=' text-3xl  font-bold  text-[#E11D47] '>
  404 Not Found </p>
  <p className=' font-bold text-4xl'>
Whoops! That page doesn’t exist.
<br />
<p className=' text-[18px] text-center'>Here are some helpful links instead:</p>

</p>
<Link to='/' className=' bg-[#2463EB] px-14 py-2 m-4 rounded-lg text-white text-2xl'  >
Back to Homepage
</Link>

</div>

  </div>
</div>

    </>
  )
}

export default Error404