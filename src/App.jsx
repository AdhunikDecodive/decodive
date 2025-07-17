import { Routes, Route } from "react-router-dom";
import "./App.css";


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
import NeroChimney from "./Components/NeroChimney";
import Modularkitchendesign from "./Components/Blogs/Modularkitchendesign";
import VastuBasicsTips from "./Components/VastuBasicsTips";
import FabiaChimney from "./Components/FabiaChimney";
import ModularWardrobes from "./Components/Blogs/ModularWardrobes";
import LshapeDelhiNcrBlog from "./Components/Blogs/LshapeDelhiNcrBlog";
import InterirDesignerHaridwar from "./Components/Blogs/InterirDesignerHaridwar";
import ParallelKitchenDelhiNCR from "./Components/Blogs/ParallelKitchenDelhiNCR";
import StraightKitchenDesignDelhi from "./Components/Blogs/StraightKitchenDesignDelhi";
import UModularKitchenDelhi from "./Components/Blogs/UModularKitchenDelhi";

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
        <Navbar />
      </Headroom>

      <WatsapButton phoneNumber="9289126052" />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/support-form" element={<ContactUs />} />
        <Route path="/modular-kitchen-designs" element={<KitchenCategory />} />
        <Route path="/l-shape-modular-kitchen-design" element={<LShapeKitchen />} />
        <Route path="/u-shape-modular-kitchen-design" element={<UshapeKitchen />} />
        <Route path="/parallel-modular-kitchen-design" element={<PshapeKitchen />} />
        <Route path="/kitchen-island-design" element={<IshapeKitchen />} />
        <Route path="/straight-modular-kitchen" element={<SshapeKitchen />} />
        <Route path="/wardrobes" element={<Wardrobe />} />

        <Route path="/shutter-door-wardrobe" element={<ShutterDoorWardrobe />} />
        <Route path="/sliding-door-wardrobes" element={<SlidingDoorWardrobe />} />
        <Route path="/Walk-in-door-wardrobes" element={<WalkDoorWardrobe />} />
        <Route path="/furniture-categories" element={<Furniture />} />
        <Route path="/domestic-furniture" element={<DomesticFurniture />} />
        <Route path="/commercial-furniture" element={<CommercialFurniture />} />
        <Route path="/home-decors" element={<HomeDecor />} />
        <Route path="/mirrors" element={<MirrorsDecor />} />
        <Route path="/wall-decor" element={<WallDecor />} />
        <Route path="/vases" element={<VasesDecor />} />
        <Route path="/clocks" element={<ClocksDecor />} />

        <Route path="/wall-paintings" element={<WallPaintingDecor />} />
        <Route path="/lamps" element={<LampsDecor />} />
        <Route path="/ceiling-lights" element={<CeilingLightsDecor />} />
        <Route path="/wall-lights" element={<WallLightDecor />} />
        <Route path="/outdoor-lights" element={<OutDoorLightDecor />} />
        <Route path="/bedroom-lights" element={<RoomLightDecor />} />
        <Route path="/storage-furniture" element={<OthersCategory />} />
        <Route path="/tv-units" element={<TVUnitPanels />} />
        <Route path="/wall-mounted-pooja-mandir" element={<PoojaRoom />} />
        <Route path="/thankyoupage" element={<ThankYouPage />} />
        <Route path="/bar-furniture" element={<BarCounter />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="*" element={<Error404 />} />

        <Route path="/blogs" element={<MultipleBlogsPage />} />
        <Route path="/blogs/:id" element={<BlogDetailPage />} />
        <Route path="/nero-chimney" element={<NeroChimney />} />
        <Route path="/fabia-chimney" element={<FabiaChimney />} />


        <Route path="/basic-vastu-tips-for-home" element={<VastuBasicsTips />} />
        <Route path="/basic-vastu-tips-for-home" element={<VastuBasicsTips />} />

        <Route path="/blogs/luxury-modular-kitchen-design-gurugram" element={<Modularkitchendesign />} />
        
        <Route path="/blogs/modular-wardrobes" element={<ModularWardrobes />} />
        <Route path="/blogs/l-shape-modular-kitchen-design-delhi-ncr" element={<LshapeDelhiNcrBlog />} />

        <Route path="/blogs/interior-designer-in-haridwar" element={<InterirDesignerHaridwar />} />

        <Route path="/blogs/parallel-modular-kitchen-design-in-delhi-ncr" element={<ParallelKitchenDelhiNCR />} />

        <Route path="/blogs/straight-modular-kitchen-in-delhi" element={<StraightKitchenDesignDelhi />} />

        <Route path="/blogs/u-shape-modular-kitchen-design-in-delhi" element={<UModularKitchenDelhi />} />


      </Routes>
    </>
  );
}

export default App;
