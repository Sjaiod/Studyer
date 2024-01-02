
import Nav from "./components/Nav";
import About from "./sections/About";
import Home from "./sections/Home";
import { deviceWidth,deviceHeight } from "./styles";
import Title from "./components/Title";
import Services from "./sections/Services";
import SlidingComponent from "./components/SlidingComponent";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
<div  className="">
<Nav/>
<Home/>
<Title title="ABOUT"/>
<About/>
<Title title="SERVICES"/>
<Services/>
<Title title="CONTACT"/>
<Contact/>
<Footer/>
</div>
  )
}