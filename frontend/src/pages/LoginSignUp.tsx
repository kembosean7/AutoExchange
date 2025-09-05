import React, {useState, useRef} from 'react';

const LoginSignUp = () => {

    const [isLogin, setIsLogIn] = useState(false);
    const [activeTab, setActiveTab] = useState("in-stock");


  return (

    <div className='flex justify-center items-center h-screen '>
      <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
        <h1 className='text-3xl block text-center font-semibold'>Login</h1>
        <hr className='mt-3 '/>

        <div className='mt-3'>
          <label htmlFor="username" className='block text-base mb-2'>username</label>
          <input type="text" id='username'  className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='enter username'/>
        </div>

        <div className='mt-3'>
          <label htmlFor="password" className='block text-base mb-2'>password</label>
          <input type="passwotd" id='password'  className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='enter password'/>
        </div>


        <div className='mt-4 flex justify-between items-center'>
          <div>
            <input type="checkbox" />
            <label>Remember me ?</label>
          </div>

          <div>
            <a href='#' className='text-indigo-800 font-semibold'>Forgot Password?</a>
          </div>
        </div>

        


        <div className='mt-5'>
          <button className='border-2 border-blue-700 bg-blue-600 text-white py-1 px-5 w-full rounded-md hover:bg-transparent hover:text-black font-semibold' type='submit'>Login</button>

        </div>

        <hr className='mt-3 '/>

        <div className='mt-6'>


          {/* Tabs */}
          <div className="flex justify-between border-b border-brand-lightgray mb-12">
            <button
              className={`pb-4 px-10 font-medium relative ${
                activeTab === "in-stock"
                  ? "text-brand-dark border-b-2 border-brand-blue"
                  : "text-brand-dark hover:text-brand-blue"
              }`}
              onClick={() => setActiveTab("in-stock")}
            >
              Log In
            </button>

            
            <button
              className={`pb-4 px-10 font-medium ${
                activeTab === "new-cars"
                  ? "text-brand-dark border-b-2 border-brand-blue"
                  : "text-brand-dark hover:text-brand-blue"
              }`}
              onClick={() => setActiveTab("new-cars")}
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