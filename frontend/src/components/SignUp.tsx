import React from 'react'

const SignUp = () => {
  return (
    <div className=''>
        <h1 className='text-3xl block text-center font-semibold'>Sign up</h1>
        <hr className='mt-3 '/>

        <div className='mt-3'>
          <label htmlFor="email" className='block text-base mb-2'>Email</label>
          <input type="email" id='email'  className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='enter email'/>
        </div>

        <div className='mt-3'>
          <label htmlFor="username" className='block text-base mb-2'>username</label>
          <input type="text" id='username'  className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='enter username'/>
        </div>

        <div className='mt-3'>
          <label htmlFor="password" className='block text-base mb-2'>password</label>
          <input type="passwotd" id='password'  className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='enter password'/>
        </div>

        <div className='mt-3'>
          <label htmlFor="confirm-password" className='block text-base mb-2'>Confirm password</label>
          <input type="password" id='confirm-password'  className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='enter password'/>
        </div>


        <div className='mt-4 flex justify-between items-center'>
          <div>
            <input type="checkbox" />
            <label>Remember me ?</label>
          </div>

          <div>
            <a href='#' className='text-indigo-800 font-semibold'>Have an account ?</a>
          </div>
        </div>

        


        <div className='mt-5'>
          <button className='border-2 border-blue-700 bg-blue-600 text-white py-1 px-5 w-full rounded-md hover:bg-transparent hover:text-black font-semibold' type='submit'>Sign Up</button>

        </div>

      </div>
  )
}

export default SignUp