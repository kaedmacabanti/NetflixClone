import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import request from "../pages/api/Request_Api";
import Image from 'next/image';

export const HeaderMovie = () => {
  const [movies, setMovies] = useState([])

  const movie = movies[Math.floor(Math.random()*movies.length)]

  useEffect(()=> {
    axios.get(request.requestPopular).then((response)=>(
      setMovies(response.data.results)
    ))
  },[]) 

  let backdrop_path = movie?.backdrop_path
  let original_title = movie?.original_title
  let overview = movie?.overview

  return (
    <div className="relative ">
          <div className=" "> 
            <Image className=" " src={'https://image.tmdb.org/t/p/original/'+backdrop_path} alt="" />
          </div> 
          <div className="absolute bottom-[19rem] left-[3.4rem] ]">
            <div className=" grid grid-cols-1">
              <label className="text-white text-[4rem] w-[36rem] drop-shadow-lg font-bold leading-[4.5rem] mb-[1rem] shadow-black" htmlFor="">{original_title}</label>
              <label className="text-white text-xl w-[36rem] mb-[2rem] drop-shadow-lg shadow-black hidden " htmlFor=" ">{overview}</label>
              <span>
                <button className="text-xl font-bold rounded bg-white hover:bg-white/70 text-black px-10 py-2 mr-4"> <i class="fa-solid fa-play"></i> Play</button>
                <button className="text-xl font-bold rounded bg-moreinfobtn/80 hover:bg-moreinfobtn/60 text-white px-7 py-2 mr-4 "><i class="fa-solid fa-circle-info"></i> More Info</button>
              </span> 
            </div> 

          </div>
            <div className="h-[170px] w-full absolute bottom-0 bg-gradient-to-t from-homebackground  ">
              <div className='h-full w-full bg-gradient-to-t from-homebackground'></div>
            </div> 
            <div className="h-[190px]  w-full absolute bottom-0 ">
              <MovieRow rowID="1" title="Up Coming" fetchURL={request.requestUpcoming} />      
            </div> 
      </div>
  )
}

const MovieContainer = ({item}) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  };
 
  return (
        < >  
          <div onClick={toggleModal}   className=" w-[228px] mx-[3.5px] h-[128px] inline-block cursor-pointer relative rounded overflow-hidden">
            <Image className="w-full h-full object-cover block" src={'https://image.tmdb.org/t/p/w500/'+item?.backdrop_path}    alt="" />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/40 opacity-0 hover:opacity-100'>
              <p className='m-2 text-white'>{item?.title}</p>
            </div>
          </div> 
        

          {modal && (
            <div  className=" w-screen h-screen fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-20     ">
              <div className=' z-20 mt-[30px]  h-[43rem] w-[53rem] overflow-hidden rounded-md bg-moviecontainerhover absolute'>
                <div className='h-[30rem]  '>
                  <i onClick={toggleModal}  class="fa-solid fa-x text-white text-[20px] bg-black/25 px-[14px] py-[12px] rounded-[50%] absolute right-8 top-6 hover:bg-black/50"></i>
                   
                  <Image src={'https://image.tmdb.org/t/p/w500/'+item?.backdrop_path}  className=" w-full object-cover" alt="" />
                  <div className='text-white h-[110px] w-full block absolute bottom-[208px] bg-gradient-to-t from-moviecontainerhover '></div>
                  <div className='ml-[3rem] text-white font-bold text-[45px] h-[110px] w-[500px] block absolute bottom-[290px]'>
                    {item?.title}
                  </div>
                  <div className='text-white h-[110px] w-full block absolute bottom-[208px] bg-gradient-to-t from-moviecontainerhover '>
                      <button className=" text-xl rounded bg-white text-black px-[36px] py-2 ml-12"> <i class="fa-solid fa-play"></i>Play</button>
                      <button className='ml-[10px]'><i class="fa-solid fa-plus border-[2px] border-gray-300 text-[20px] bg-black/25 px-[14px] py-[12px] rounded-[50%]"></i></button>
                      <button className='ml-[10px]'><i class="fa-solid fa-thumbs-up border-[2px] border-gray-300 text-[20px] bg-black/25 px-[14px] py-[12px] rounded-[50%]"></i></button>
                  </div>
                
                </div> 
                <div className='grid grid-cols-3 py-[24px] px-[48px] '>
      
                  <div className='col-span-2   pr-[28px]'>
                    <ul className='flex flex-row justify-start pb-[.8rem]'>
                      <li className='rating text-green-400  '> 97% Match </li>
                      <li className='age text-white  ml-[.5rem] border-2 px-1 text-sm'> 18+ </li>
                      <li className='length text-white  ml-[.5rem]'> 3 Seasons</li>
                      <li className='hd text-white ml-[.5rem] border-2 px-1  text-xs'> HD </li>
                    </ul>
                      <span className='text-white col-span-2 static w-[20px] whitespace-normal h-20 '>{item?.overview}</span>
                  </div>

                  <div className='col-span-1 mr-[0px]'>
                    <ul>
                      <li className='text-navtexthover text-sm pb-[.8rem]'>Release Date: <span className='text-white'>{item?.release_date}</span></li>
                      <li className='text-navtexthover text-sm pb-[.8rem]'>Genre: <span className='text-white'>{item?.genre_ids}</span></li>
                      <li className='text-navtexthover text-sm pb-[.8rem]'>Vote Count: <span className='text-white'>{item?.vote_count}</span></li>
                    </ul>
      
                  </div>
                </div>
              </div>
              <div  onClick={toggleModal}  className=' w-full h-full bg-black/40'>
              </div>
          </div>

          )}
      </ >
  )
}


export const MovieRow= ({title,fetchURL, rowID}) => {
    const [movies, setMovies] = useState([])

    useEffect(()=> {
      axios.get(fetchURL).then((response)=>(
        setMovies(response.data.results)
      ))
    },[fetchURL]) 
    console.log(movies)


    const sliderLeft = () => {
      var slider = document.getElementById('slider' +rowID);
      slider.scrollLeft = slider.scrollLeft - 500;
    }
    const sliderRight = () => {
      var slider = document.getElementById('slider'+rowID);
      slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
      <div className='w-screen'>
            <label htmlFor="" className='mx-[3.5px] px-[3.4rem] text-white text-[1.4rem]   font-bold   '>{title}</label><br /> 

        <div className='relative flex items-center group w-screen'>
              <i onClick={sliderLeft} class=" z-30 fa-solid fa-chevron-left absolute left-0 text-white  ml-[0rem]  text-[2rem] bg-black/60 py-[3.2rem] px-[1rem] opacity-0 hover:opacity-100 hidden group-hover:block"></i>
          <div id={'slider'+ rowID} className=' px-[3.4rem] w-screen   h-full overflow-x-scroll scrollbar-hide scroll whitespace-nowrap scroll-smooth  relative'>
            {movies.map((item, id)=>(
              <MovieContainer item={item} index = {id} />
            ))}
          </div> 
                <i onClick={sliderRight} class=" z-30 fa-solid fa-chevron-right absolute right-0 text-white mr-[1.2rem]  text-[2rem] bg-black/60 py-[3.2rem] px-[1rem] opacity-0 hover:opacity-100 hidden group-hover:block"></i>
          </div>
      </div>
    )

}

export const Footer = () => {
  return (
    <footer className='bg-homebackground h-[13.25rem] mt-[3rem] mx-[17rem] '>
        <div className='social-link'>
        <i class="fa-brands fa-facebook-f footericons"></i>
        <i class="fa-brands fa-instagram footericons"></i>
        <i class="fa-brands fa-twitter footericons"></i>
        <i class="fa-brands fa-youtube footericons"></i>
        </div>
        <div className=' '>
          <ul className='grid grid-cols-4 gap-y-2'>
            <li><a href="" className='footertxt'>Audio Description</a></li>
            <li><a href="" className='footertxt'>Help Center</a></li>
            <li><a href="" className='footertxt'>Gift Cards.</a></li>
            
            <li><a href="" className='footertxt'>Media Center</a></li>
            <li><a href="" className='footertxt'>Investor Relations</a></li>
            <li><a href="" className='footertxt'>Jobs</a></li>
            
            <li><a href="" className='footertxt'>Terms of Use</a></li>
            <li><a href="" className='footertxt'>Privacy</a></li>
            <li><a href="" className='footertxt'>Legal Notices</a></li>
            
            <li><a href="" className='footertxt'>Cookie Preferences.</a></li>
            <li><a href="" className='footertxt'>Corporate information</a></li>
            <li><a href="" className='footertxt'>Contact Us</a></li>
          </ul>
        </div>
      
        <button htmlFor="" className='footertxt p-2 mt-5 border'>Service Code</button>

        <div className='mt-5'>
          <span className='footertxt'>© 1997-2022 Netflix, Inc.</span>
          <span className='footertxt'> afvcks-ajf3m-39fmf-4kcd</span>
        </div>

      </footer>
  )
}


  
export const MoviesComponents = () => {

  return (
    <div className=' bg-homebackground h-full  '>

        <div className=''>
          <div className='grid gap-y-[2.5rem]  mb-[8.1rem] mt-[1.4rem]'>
            <MovieRow rowID="2" title="Popular" fetchURL={request.requestPopular} />
            <MovieRow rowID="3" title="Top Rated" fetchURL={request.requestTopRated} />
            <MovieRow rowID="4" title="Now Playing" fetchURL={request.requestNowPlaying} />
          </div>
        </div>
      
    </div>
  )
}

 
// {item?.title}
  // <br />
  // {item?.genre_ids[0]}
  // <br />
  // {item?.genre_ids[1]}
  // <br />
  // {item?.genre_ids[2]}
  // <br />
  // {"adult: "+item?.adult}


//   {hover && (
//     <div className=' h-[360px] w-[340px] rounded-[7px] overflow-hidden bg-moviecontainerhover absolute top-0'>
//     <img src={movieposter} className=" w-full h-70 object-cover" alt="" />
//     <div className=' grid grid-cols-2 p-4 mx-2'>
//       <ul className='flex flex-row justify-start'>
//         <li><i class="fa-solid fa-circle-play text-[2.5rem] text-navtextselected hover:text-navtexthover mr-2"></i></li>
//         <li><i class="hovericons fa-regular fa-plus font-bold mr-2 "></i></li>
//         <li><i class="hovericons fa-regular fa-thumbs-up mr-2"></i></li>
//       </ul>
//       <ul className='flex flex-row justify-end'>
//         <li><i class="hovericons fa-solid fa-chevron-down"></i></li>
//       </ul>
//     </div>

//     <div className='px-4'>
//       <ul className='flex flex-row justify-start'>
//         <li className='rating text-green-400  ml-[.5rem]'> 97% Match </li>
//         <li className='age text-white  ml-[.5rem] border-2 px-1 text-sm'> 18+ </li>
//         <li className='length text-white  ml-[.5rem]'> 3 Seasons</li>
//         <li className='hd text-white ml-[.5rem] border-2 px-1  text-xs'> HD </li>
//       </ul>
//       <ul className='flex flex-row justify-start'>
//         <li className='genre text-white ml-[.5rem]'> Robot &#8226; </li>
//         <li className='genre text-white ml-[.5rem]'> Exciting &#8226; </li>
//         <li className='genre text-white ml-[.5rem]'> Mystery </li>
//       </ul>
//     </div>
//   </div>
// )}
  