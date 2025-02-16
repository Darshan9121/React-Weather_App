import React from 'react';
import {IconCloudCog} from "@tabler/icons-react";
import { IconTemperatureCelsius } from '@tabler/icons-react';
import { IconTemperatureFahrenheit } from '@tabler/icons-react';

const Navbar = () => {
  return (
    <div className=" w-full px-2 py-4  flex justify-between gap-2 items-center"> 
    <section className='flex flex-col  items-center'>
      <section className='relative flex items-center font-extrabold' >
      <IconCloudCog size={75} className='self-start'/>
        <p className='self-center text-2xl md:text-4xl '>WeatherMe</p>
         <p className='self-end   text-md'>Time</p>   
      </section>
      <section className=' flex '>
              <IconTemperatureCelsius  size={50}/>
              <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer"/>
          <div class="relative w-11 h-6 bg-gradient-to-r from-teal-700  to-black peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          
        </label>
              <IconTemperatureFahrenheit size={50}/>
              </section>
    </section>
     
      <ul className=' hidden md:visible  md:flex md:px-24  md:gap-10 md:text-xl'>
        <li className='font-semibold border-b-4 border-zinc-700'>Today</li>
        <li>Tomorrow</li>
        <li>Mothly Forecast</li>
      </ul>
    </div>
  )
}

export default Navbar