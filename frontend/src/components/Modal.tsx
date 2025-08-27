import React, {useState} from 'react'

import SearchBar from './SearchBar'

const Modal = ({opening}) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(opening);
    }

    const handleClose = () => {
      setOpen(false);
    }

  return (
    <div className='relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96'>
      <span onClick={handleClose}>X</span>
      <SearchBar />
    </div>
  )
}

export default Modal