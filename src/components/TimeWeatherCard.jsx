import React from 'react';
import {IconTemperaturePlus} from "@tabler/icons-react";


export const TimeWeatherCard = () => {
  return (
    <div className='flex font-semibold justify-evenly gap-12 flex-wrap'>
      <div className=' bg-gradient-to-br from-fuchsia-600 to-black p-4 flex flex-col justify-center items-center rounded-lg border-2 border-black'>
        <p>19:00pm</p>
        <IconTemperaturePlus/>
        <p>29 &deg;</p>
      </div>
          <div className='bg-gradient-to-br from-fuchsia-500 to-black border-black p-4 flex flex-col justify-center items-center rounded-lg border-2'>
        <p>19:00pm</p>
        <IconTemperaturePlus/>
        <p>29 &deg;</p>
      </div>
          <div className=' bg-gradient-to-br from-fuchsia-400 to-black border-black p-4 flex flex-col justify-center items-center rounded-lg border-2'>
        <p>19:00pm</p>
        <IconTemperaturePlus/>
        <p>29 &deg;</p>
      </div>
      <div className=' bg-gradient-to-br from-fuchsia-600 to-black p-4 flex flex-col justify-center items-center rounded-lg border-2 border-black'>
        <p>19:00pm</p>
        <IconTemperaturePlus/>
        <p>29 &deg;</p>
      </div>
          <div className='bg-gradient-to-br from-fuchsia-500 to-black border-black p-4 flex flex-col justify-center items-center rounded-lg border-2'>
        <p>19:00pm</p>
        <IconTemperaturePlus/>
        <p>29 &deg;</p>
      </div>
          <div className=' bg-gradient-to-br from-fuchsia-400 to-black border-black p-4 flex flex-col justify-center items-center rounded-lg border-2'>
        <p>19:00pm</p>
        <IconTemperaturePlus/>
        <p>29 &deg;</p>
      </div>
    </div>
  )
}
