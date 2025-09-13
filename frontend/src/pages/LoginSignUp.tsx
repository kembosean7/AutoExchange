import React, {useState, useRef} from 'react';

import Login from '../components/Login';
import SiignUp from '../components/SignUp';

const LoginSignUp = () => {

    const [isLogin, setIsLogIn] = useState("login");
    const [activeTab, setActiveTab] = useState("login-tab");

  return (

    <div className='flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat ' 
            
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://api.builder.io/api/v1/image/assets/TEMP/7209a9ddb4485ca6445a72170e8fec52a55d636e?width=3840')`,
        }}
    >
      <div className='w-150 p-6 shadow-lg bg-white rounded-md border-2 '>

        {isLogin == "login" ? <Login/> : <SiignUp/>}

        <hr className='mt-3 '/>

        <div className='mt-6'>
          {/* Tabs */}
          <div className="flex justify-between border-b border-brand-lightgray mb-12">
            <button
              className={`pb-4 px-10 font-medium relative ${
                activeTab === "login-tab"
                  ? "text-brand-dark border-b-2 border-brand-blue"
                  : "text-brand-dark hover:text-brand-blue"
              }`}
              onClick={() => {setIsLogIn("login");
                setActiveTab("login-tab")
              }}
            >
              Log In
            </button>

            
            <button
              className={`pb-4 px-10 font-medium ${
                activeTab === "signup-tab"
                  ? "text-brand-dark border-b-2 border-brand-blue"
                  : "text-brand-dark hover:text-brand-blue"
              }`}
              onClick={() => {setIsLogIn("signup");
                setActiveTab("signup-tab")
              }}
            >
              Sign Up
            </button>

          </div>
        </div>


      </div>
    </div>
  )
}

export default LoginSignUp