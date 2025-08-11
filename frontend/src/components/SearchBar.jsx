import React from 'react'

const SearchBar = () => {
  return (
    <form className='flex items-center max-w-lg mx-auto'>
      <label for="voice-search" className='sr-only'>Search</label>

      <div></div>
      <button type='submit' className='inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
        
      </button>

    </form>
  )
}

export default SearchBar