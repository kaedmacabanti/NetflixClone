import {HeaderMovie, MoviesComponents , Footer,} from "../../components/MoviesComponents";
import Navbar from "../../components/Navbar";
 
const Movies = () => {
  return (
    <div className='bg-homebackground'>
      <Navbar/>
      <HeaderMovie/>
      <MoviesComponents/>
      <Footer/>
    </div>
  )
}

export default Movies
 

