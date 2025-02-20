
import video2 from "../assets/Videos/phoneV.mp4";
function VideoComponent2() {
  return (
    <>
    <video
               muted
               autoPlay
               loop
               preload="auto"
               playsInline
               className="hidden md:block absolute  w-screen h-[full] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
               src={video2}
             ></video>
   </>
  )
}

export default VideoComponent2