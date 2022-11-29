import { Outlet } from "react-router-dom";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

import { Home } from "./components/Header/Home/home";
import { Navbar } from "./components/Header/Navbar/Navbar";
import {Portfoilo} from "./components/Portfolio/portfolio"




function App() {
  return <>

<Home/>
<Portfoilo/>
<About/>
<Contact/>
<Footer/>

  </>;
}

export default App;
