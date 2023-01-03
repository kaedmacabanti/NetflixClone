import Navbar from '../../components/a_Navbar'
import { HeaderMovieChoices, MoviesRows } from '../../components/MoviesComponents'
import Footer from '../../components/z_Footer'

const Movies = () => {
  return (
    <div className=' bg-homebackground'>
      <Navbar/>
      <HeaderMovieChoices/>
      <MoviesRows/>
      <Footer/>
    </div>
  )
}

export default Movies
