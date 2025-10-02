import React, {useState, useRef} from 'react';

const Login = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState("")
  const [success, setSucess] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) =>{
    e.preventDefault();
    setError('');
    setSucess('');
    setIsSubmitting(true);
  };
  


  return (

    <form className='' onSubmit={handleSubmit}>
        <h1 className='text-3xl block text-center font-semibold'>Login</h1>
        <hr className='mt-3 '/>    

          <div className='mt-3'>
            <label htmlFor="email" className='block text-base mb-2'>Email</label>
            <input type="text" id='email' name ='email' value={form.email} onChange={handleChange}  className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter email'/>
          </div>

          <div className='mt-3'>
            <label htmlFor="password" className='block text-base mb-2'>Password</label>
            <input type="passwotd" id='password' name='password' value={form.password} onChange={handleChange} className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter password'/>
          </div>

          {error && <div className='mt-3 text-red-600'>{error}</div>}
          {success && <div className='mt-3 text-green-600'>{success}</div>}

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

      </form>  
  );
}

export default Login