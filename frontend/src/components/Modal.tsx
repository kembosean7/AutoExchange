import React, {useState} from 'react'

import SearchBar from './SearchBar'

interface props {
  open:boolean;
  cancelFn?: () => void;
  primaryFn?: () => void;
  closeIcon?: string;
  content?: React.ReactNode;
  titleContent?: React.ReactNode;
  className?: string;
}

const Modal: React.FC<props> = (props) => {

  const {open, cancelFn, primaryFn, closeIcon, titleContent, content} = props;

    const [open_, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    }

    const handleClose = () => {
      setOpen(false);
    }

  return (
    <>
      
      <div className='relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96'>
        <span onClick={handleClose}>X</span>
        <SearchBar />
      </div>
    </>
  )
}

export default Modal