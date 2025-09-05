import React, {useState, useRef} from 'react';

const LoginSignUp = () => {

    const [isLogin, setIsLogIn] = useState(false);


  return (
    <div className='flex justify-center place-items-center'>
        {/* card */}
        <div className='w-80 mt-20 h-80 shadow-md flex justify-center items-center'>

          {/* input */}
{/* 
          <input className='' /> 
          <input className='' type="email" name="" id="" />
          <input className='' type="password" name="" id="" /> */}



            {/* button login/signup */}
            <div className='flex justify-center items-center '>
                <button className='block mx-2 mt-4 bg-brand-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center w-auto'>Login</button>
                <button className='block mx-2 mt-4 bg-brand-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center w-auto'>Sign up</button>
            </div>
        </div>
    </div>
  )
}

export default LoginSignUp