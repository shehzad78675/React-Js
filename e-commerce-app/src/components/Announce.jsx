import { Close } from '@mui/icons-material';
import React, { useState } from 'react'

function Announce() {
    const [announceStyle, setAnnounceStyle] = useState('bg-purple-600 text-white flex justify-center font-bold');
    const handleClose = () => {
        setAnnounceStyle(announceStyle + ' hidden')
    }
  return (
    <div className={announceStyle}>
        <h2>Hurry up it's 40% off now</h2>
        <Close className='cursor-pointer' onClick={handleClose}/>
    </div>
  )
}

export default Announce