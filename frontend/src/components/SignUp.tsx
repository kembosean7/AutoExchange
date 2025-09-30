import React, { useState } from 'react'

const SignUp = () => {
  const [form, setForm] = useState({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
  });

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value});
  };  
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('')
    setSuccess('')

    if(form.password != form.confirmPassword){
      setError('Passwords do not match')
      return;
    }
  };
    


  return (
    <form className='' onSubmit={handleSubmit}>
      <h1 className='text-3xl block text-center font-semibold'>Sign up</h1>
      <hr className='mt-3 '/>


        <div className='mt-3'>
          <label htmlFor="email" className='block text-base mb-2'>Email</label>
          <input type="email" id='email'  className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter email ' required/>
        </div>

        <div className='mt-3'>
          <label htmlFor="firstName" className='block text-base mb-2'>First Name</label> 
          <input type="text" id='firstName'  className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter first name' required/>
        </div>

        <div className='mt-3'>
          <label htmlFor="LastName" className='block text-base mb-2'>Last Name</label> 
          <input type="text" id='lastName'  className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter last name ' required/>
        </div>

        <div className='mt-3'>
          <label htmlFor="password" className='block text-base mb-2'>password</label>
          <input type="password" id='password'  className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter password' required/>
        </div>

        <div className='mt-3'>
          <label htmlFor="confirm-password" className='block text-base mb-2'>Confirm password</label>
          <input type="password" id='confirm-password'  className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Confirm password' required/>
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

      </form>
      
  )
}


export default SignUp