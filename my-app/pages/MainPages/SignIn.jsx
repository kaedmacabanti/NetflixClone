import {SignInHeader, SignInBody, SignInFooter} from "../../components/SignInComponents";

const SignIn = () => {
  return (
    <div className='bg-netflix w-full '>
      <div className=' bg-black/[.4] h-full'>
        <SignInHeader/>
        <SignInBody/>
        <SignInFooter/>
      </div>
    </div>
  )
}

export default SignIn

