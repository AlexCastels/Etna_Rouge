import React, { useState } from 'react';
import './dialogNewsLetter.scss';
import heart from '../../public/assets/heart.png'


const DialogNewsLetter: React.FC = () => {

  const [open, setOpen] = useState<boolean>(true);

  setInterval(() => {
    setOpen(false)
   },
  3000)


  return (
    <dialog open={open}>
      <span>
        <h3> Welcome in our family </h3>
        <img src={heart} alt="img" />
      </span>
     
      
    </dialog>
  )
}

export default DialogNewsLetter