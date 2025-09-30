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
    try {
      const res = await fetch('api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)

      });
      
      if(!res.ok){
        const data = await res.json();
        setError(data.message || 'Signup failed');
      }
      else{
        setSuccess('Signup successful!');
        setForm({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
      }
      
    } catch (error) {
      setError('Network error');
    }
  };
    


  return (
    <form className='' onSubmit={handleSubmit}>
      <h1 className='text-3xl block text-center font-semibold'>Sign up</h1>
      <hr className='mt-3 '/>

        <div className='mt-3'>
          <label htmlFor="firstName" className='block text-base mb-2'>First Name</label> 
          <input type="text" id='firstName' name='firstName' value={form.firstName} onChange={handleChange} className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter first name' required/>
        </div>

        <div className='mt-3'>
          <label htmlFor="lastName" className='block text-base mb-2'>Last Name</label> 
          <input type="text" id='lastName' name='lastName' value={form.lastName} onChange={handleChange}  className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter last name ' required/>
        </div>

        <div className='mt-3'>
          <label htmlFor="email" className='block text-base mb-2'>Email</label>
          <input type="email" id='email' name='email' value={form.email} onChange={handleChange} className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter email ' required/>
        </div>

        <div className='mt-3'>
          <label htmlFor="password" className='block text-base mb-2'>Password</label>
          <input type="password" id='password' name='password' value={form.password} onChange={handleChange} className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter password' required/>
        </div>

        <div className='mt-3'>
          <label htmlFor="confirm-password" className='block text-base mb-2'>Confirm password</label>
          <input type="password" id='confirm-password' name='confirmPassword' value={form.confirmPassword} onChange={handleChange} className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Confirm password' required/>
        </div>

      {error && <div className='mt-3 text-red-600'>{error}</div>}
      {success && <div className='mt-3 text-green-600'>{success}</div>}


      <div className='mt-4 flex justify-between items-center'>
        <div>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember"> Remember me?</label>
        </div>
        <div>
          <a href='#' className='text-indigo-800 font-semibold'>Have an account?</a>
        </div>
      </div>

      <div className='mt-5'>
        <button className='border-2 border-blue-700 bg-blue-600 text-white py-1 px-5 w-full rounded-md hover:bg-transparent hover:text-black font-semibold' type='submit'>Sign Up</button>
      </div>
    </form>
      
  )
}


export default SignUp