import React, {useState} from 'react'

const LoginSignUp = () => {

    const [isLogin, setIsLogIn] = useState(false);


  return (
    <div>
        {/* card */}
        <div className='w-98 mt-20 h-60 shadow-md'>

            <div>
                <button>Login</button>
            </div>
        </div>
    </div>
  )
}

export default LoginSignUp