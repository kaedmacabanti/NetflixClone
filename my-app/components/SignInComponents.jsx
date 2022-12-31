import React from 'react' 
import logo from '../assets/netflix-logo.png'
import Image from 'next/image'
import Link from 'next/link'

export const SignInHeader = () =>{
  return(
      <header>
        <div className='h-[5.6rem] flex items-center bg-gradient-to-b from-black/[.8]'>
          <Image className="w-[200px] ml-[2.4rem]" src={logo} alt="Logo" />;
        </div>
      </header>
  )
} 

export const SignInBody = () => {
  return(
    <div className="w-full flex justify-center">
       <form action="" className="signInForm mb-[5.4rem]">
          <div className="h-[24rem]"> 
            <h1 className="signInText mb-[1.75rem]">Sign In</h1>
            <input className="inputBox mb-[1.1rem] text-white" type="text" placeholder="Email or phone number" />
            <input className="inputBox mb-3 text-white " type="password" placeholder="Password"/>
            <button className="signInBtn mt-[1.6rem] p-[.7rem]"> <Link href="/Movies">Sign In</Link></button> 
            
            <span className="flex justify-between my-2">
              <span>
                <input className=" " type="checkbox" />
                <label htmlFor="" className="text-textgray text-sm" > Remember me</label>
              </span>
            
              <a href="" className="text-textgray text-sm">Need help?</a>
            </span>
          </div>

          <div> 
            <span className="text-textgray">New to Netflix?</span>
            <a href="" className="text-white"> Sign up now</a> <br />
            <p className="text-textgray mt-4 text-sm leading-[4px]">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
              <a href="" className="text-textblue  leading-6"> Learn more.</a>
            </p>
          </div>
      </form>
    </div>
  )
} 

export const SignInFooter = () => {
  return(
    <footer className='h-[14rem] bg-black/[.8] '>
      <div className='mx-[16.1rem] py-[1.87rem]'>
        <a className="text-textgray" href="">Questions? Contact us.</a>
        <ul className=' my-[1.2rem] grid grid-cols-4 gap-2'>
          <li><a className="footerTxt"  href="">FAQ</a></li>
          <li><a className="footerTxt" href="">Help Center</a></li>
          <li><a className="footerTxt" href="">Terms of Use</a></li>
          <li><a className="footerTxt" href="">Privacy</a></li>
          <li><a className="footerTxt" href="">Cookie Preferences</a></li>
          <li><a className="footerTxt" href="">Corporate Information</a></li>
        </ul>
      </div>
  </footer>
  )
} 


 

