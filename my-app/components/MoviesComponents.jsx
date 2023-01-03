import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import request from "../pages/api/Request_Api";
 
 
const HeaderMovieChoices = () => {
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
    <div className="h-[34rem] pt-[6.2rem] mb-[3rem] mx-[3.8rem] grid grid-cols-2 gap-2 ">

      <div className="cont1 h-full bg-black grid grid-cols-1 grid-rows-3 gap-2">
          <div className='grid grid-cols-1 row-span-2'>
            <div className='col-span-2 bg-red-800'></div>
          </div>

          <div className='grid grid-cols-2'>  
            <div className='h-full bg-slate-100'></div>
            <div className='h-full bg-slate-900'></div>
          </div>
      </div>

      <div className="cont2 h-full bg-black grid grid-cols-1 grid-rows-3 gap-2">
        <div className='grid grid-cols-2 row-span-2'>
              <div className='col-span-1 bg-red-400'></div>
              <div className='col-span-1 bg-red-800'></div>
            </div>

            <div className='grid grid-cols-2'>  
              <div className='h-full bg-slate-100'></div>
              <div className='h-full bg-slate-900'></div>
            </div>
      </div>
    </div>
  )
}


export default HeaderMovieChoices

  