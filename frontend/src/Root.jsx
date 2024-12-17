import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
const RootPage = () => {
    
  return (
    <div>
        <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootPage;
