import { Routes, Route } from "react-router-dom";
import "./App.css";

// import LandingPage from "./Components/LandingPage"
import Headroom from "react-headroom";
import LandingPage from "./Components/LandingPage";
import ContactUs from "./Components/ContactUs";
import KitchenCategory from "./Components/KitchenCategory";
import LShapeKitchen from "./Components/LShapeKitchen";
import UshapeKitchen from "./Components/UshapeKitchen";
import PshapeKitchen from "./Components/PshapeKitchen";
import IshapeKitchen from "./Components/IshapeKitchen";
import SshapeKitchen from "./Components/SshapeKitchen";
import Wardrobe from "./Components/Wardrobe";
import VastuTips from "./Components/VastuTips";
import ShutterDoorWardrobe from "./Components/ShutterDoorWardrobe";
import SlidingDoorWardrobe from "./Components/SlidingDoorWardrobe";
import WalkDoorWardrobe from "./Components/WalkDoorWardrobe";
import Furniture from "./Components/Furniture";
import DomesticFurniture from "./Components/DomesticFurniture";
import CommercialFurniture from "./Components/CommercialFurniture";
import HomeDecor from "./Components/HomeDecor";
import MirrorsDecor from "./Components/MirrorsDecor";
import WallDecor from "./Components/WallDecor";
import VasesDecor from "./Components/VasesDecor";
import WallPaintingDecor from "./Components/WallPaintingDecor";
import LampsDecor from "./Components/LampsDecor";
import CeilingLightsDecor from "./Components/CeilingLightsDecor";
import WallLightDecor from "./Components/WallLightDecor";
import OutDoorLightDecor from "./Components/OutDoorLightDecor";
import RoomLightDecor from "./Components/RoomLightDecor";
import OthersCategory from "./Components/OthersCategory";
import TVUnitPanels from "./Components/TVUnitPanels";
import PoojaRoom from "./Components/PoojaRoom";
import ThankYouPage from "./Components/ThankYouPage";

import ClocksDecor from "./Components/ ClocksDecor";

import BarCounter from "./Components/BarCounter";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import WatsapButton from "./Components/WatsapButton";

import ScrollToTop from "./Components/ScrollToTop";

import BlogPage from "./Components/BlogPage";

import Error404 from "./Components/Error404";
import MultipleBlogsPage from "./Components/MultipleBlogsPage";
import BlogDetailPage from "./Components/BlogDetailPage";

import ReactGA from "react-ga4";
import { useEffect } from "react";

const TRACKING_ID = "G-49QVDWX9V7";

function App() {




  useEffect(() => {

    ReactGA.initialize(TRACKING_ID);

    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: document.title,
    });
  }, [location]);


  return (
    <>
      <ScrollToTop />

      <Headroom>
        <Navbar/>
      </Headroom>

      <WatsapButton phoneNumber="9289126052" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/kitchencategory" element={<KitchenCategory />} />
        <Route path="/lshapekitchen" element={<LShapeKitchen />} />
        <Route path="/ushapekitchen" element={<UshapeKitchen />} />
        <Route path="/pshapekitchen" element={<PshapeKitchen />} />
        <Route path="/ishapekitchen" element={<IshapeKitchen />} />
        <Route path="/sshapekitchen" element={<SshapeKitchen />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/VastuTips" element={<VastuTips />} />
        <Route path="/ShutterDoorWardrobe" element={<ShutterDoorWardrobe />} />
        <Route path="/slidingdoorwardrobe" element={<SlidingDoorWardrobe />} />
        <Route path="/walkdoorwardrobe" element={<WalkDoorWardrobe />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/domesticfurniture" element={<DomesticFurniture />} />
        <Route path="/commercialfurniture" element={<CommercialFurniture />} />
        <Route path="/homedecor" element={<HomeDecor />} />
        <Route path="/mirrorsdecor" element={<MirrorsDecor />} />
        <Route path="/walldecor" element={<WallDecor />} />
        <Route path="/vasesdecor" element={<VasesDecor />} />
        <Route path="/clocksdecor" element={<ClocksDecor />} />
        <Route path="/wallpaintingdecor" element={<WallPaintingDecor />} />
        <Route path="/lampsdecor" element={<LampsDecor />} />
        <Route path="/ceilinglightsdecor" element={<CeilingLightsDecor />} />
        <Route path="/walllightdecor" element={<WallLightDecor />} />
        <Route path="/outdoorlightdecor" element={<OutDoorLightDecor />} />
        <Route path="/roomlightdecor" element={<RoomLightDecor />} />
        <Route path="/otherscategory" element={<OthersCategory />} />
        <Route path="/tvunitpanels" element={<TVUnitPanels />} />
        <Route path="/poojaroom" element={<PoojaRoom />} />
        <Route path="/thankyoupage" element={<ThankYouPage />} />
        <Route path="/barcounter" element={<BarCounter />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/blogs" element={<MultipleBlogsPage />} />
        <Route path="/blogs/:id" element={<BlogDetailPage />} />


      </Routes>
    </>
  );
}

export default App;
