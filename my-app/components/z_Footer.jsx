import React from 'react'

const Footer = () => {
    return (
      <footer className='bg-homebackground h-[13.25rem] px-[17rem] '>
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
  
          <div className='pt-5'>
            <span className='footertxt'>© 1997-2022 Netflix, Inc.</span>
            <span className='footertxt'> afvcks-ajf3m-39fmf-4kcd</span>
          </div>
  
        </footer>
    )
}
  

export default Footer
  