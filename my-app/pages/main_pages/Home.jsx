import Navbar from "../../components/a_Navbar";
import {HeaderMovie, HomeRows} from "../../components/HomeComponents";
import Footer from "../../components/z_Footer";

const HomePage = () => {
  return (
    <div className='bg-homebackground'>
      <Navbar/>
      <HeaderMovie/>
      <HomeRows/>
      <Footer/> 
    </div>
  )
}

export default HomePage
 

