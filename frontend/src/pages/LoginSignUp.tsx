import React, {useState} from 'react';

const LoginSignUp = () => {

    const [isLogin, setIsLogIn] = useState(false);


  return (
    <div className='flex justify-center place-items-center'>
        {/* card */}
        <div className='w-80 mt-20 h-80 shadow-md flex justify-center items-center'>

            <div className='flex justify-center items-center gap-1'>
                <button className='block mx-3 mt-4 bg-brand-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center'>Login</button>
                <button className='block mx-3 mt-4 bg-brand-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center'>Sign up</button>
                {/* <Button>Login</Button> */}
            </div>
        </div>
    </div>
  )
}

export default LoginSignUp