import Nabbar from "./pComponent/nabbar";
import Slider from "./pComponent/slider";
import Content from "./pComponent/content";
import Footer from "./pComponent/Footer";
import TotalUser from "./pComponent/TotalUser";
import Instructor from "./pComponent/Instructor";
// import { Breadcrumb } from "@/components/ui/breadcrumb";
// import Swiper from "./pComponent/Swiper";

export default function Home() {
  return (
    <>
    <Nabbar/>
    {/* <Breadcrumb/> */}
    <Slider/>
    <Content/>
    <Instructor/>
    <TotalUser/>
    {/* <Swiper/> */}
    <Footer/>
    </>
  );
}
