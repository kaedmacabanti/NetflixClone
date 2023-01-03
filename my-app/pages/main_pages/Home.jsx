import Navbar from "../../components/a_Navbar";
import {HeaderMovie, MoviesComponents} from "../../components/HomeComponents";
import Footer from "../../components/z_Footer";

const HomePage = () => {
  return (
    <div className='bg-homebackground'>
      <Navbar/>
      <HeaderMovie/>
      <MoviesComponents/>
      <Footer/> 
    </div>
  )
}

export default HomePage
 

