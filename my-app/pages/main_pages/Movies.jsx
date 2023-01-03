import Navbar from '../../components/a_Navbar'
import HeaderMovieChoices from '../../components/MoviesComponents'
import Footer from '../../components/z_Footer'

const Movies = () => {
  return (
    <div className=' bg-homebackground'>
      <Navbar/>
      <HeaderMovieChoices/>
      <Footer/>
    </div>
  )
}

export default Movies
