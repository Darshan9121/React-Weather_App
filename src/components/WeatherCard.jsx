import React from 'react';
import { TimeWeatherCard } from './TimeWeatherCard';
import { IconMapPin } from '@tabler/icons-react';
import { IconTemperatureCelsius } from '@tabler/icons-react';
import { IconTemperature } from '@tabler/icons-react';
import {IconSnowflake} from '@tabler/icons-react';
import {IconChevronLeft} from '@tabler/icons-react';
import {IconChevronRight} from '@tabler/icons-react';


export const WeatherCard = () => {
  return (
    <div className=" w-fdw flex flex-col  items-center  gap-8 py-10 ">
      <div className='flex justify-center items-center gap-16 lg:gap-0'>

      <div class="invisible md:visible mx-8 p-2 font-semibold text-xl md:text-2xl dark:text-white border-2 border-neutral-600   border-2 bg-gradient-to-tl from-teal-500  flex flex-col gap-6 rounded-3xl md:w-full">
        <section className='w-full flex p-2 '>
          <section className='flex flex-col gap-28 justify-between w-1/2 '>
          <div className='flex '>
            <span>Ahmedabad</span>
            <IconMapPin/>
            
          </div>
            <p>Time</p>
          </section>
          <section className='flex justify-center items-center md:gap-6'>
          <IconTemperature size={60}/>
          <span className='text-6xl flex '>27<IconTemperatureCelsius size={40}/></span>
          <IconSnowflake size={60}/>
          </section>
        </section>
        
          <ul className='w-full text-sm flex  gap-2 justify-evenly p-6'>
            <li>Humidity:20</li>
            <li>Visibility:20</li>
            <li>Air Pressure:20</li>
            <li>Wind:20</li>
          </ul>
    </div>
        <IconChevronLeft className='invisible md:visible' size={200}/>
      <div class=" mx-8 p-2 font-semibold text-xl md:text-2xl dark:text-white border-2 border-neutral-600   border-2 bg-gradient-to-br from-fuchsia-600 to-black flex flex-col gap-6 rounded-3xl md:w-full">
        <section className='w-full flex p-2 '>
          <section className='flex flex-col gap-28 justify-between w-1/2 '>
          <div className='flex '>
            <span>Ahmedabad</span>
            <IconMapPin/>
            
          </div>
            <p>Time</p>
          </section>
          <section className='flex justify-center items-center md:gap-6'>
          <IconTemperature size={60}/>
          <span className='text-6xl flex '>27<IconTemperatureCelsius size={40}/></span>
          <IconSnowflake size={60}/>
          </section>
        </section>
        
          <ul className='w-full text-sm flex  gap-2 justify-evenly p-6'>
            <li>Humidity:20</li>
            <li>Visibility:20</li>
            <li>Air Pressure:20</li>
            <li>Wind:20</li>
          </ul>
    </div>

        <IconChevronRight  className='invisible md:visible' size={200} />
        <div class=" invisible lg:visible mx-8 p-2 font-semibold text-xl md:text-2xl dark:text-white border-2 border-neutral-600   border-2 bg-gradient-to-tl from-teal-500  flex flex-col gap-6 rounded-3xl md:w-full">
        <section className='w-full flex p-2 '>
          <section className='flex flex-col gap-28 justify-between w-1/2 '>
          <div className='flex '>
            <span>Ahmedabad</span>
            <IconMapPin/>
            
          </div>
            <p>Time</p>
          </section>
          <section className='flex justify-center items-center md:gap-6'>
          <IconTemperature size={60}/>
          <span className='text-6xl flex '>27<IconTemperatureCelsius size={40}/></span>
          <IconSnowflake size={60}/>
          </section>
        </section>
        
          <ul className='w-full text-sm flex  gap-2 justify-evenly p-6'>
            <li>Humidity:20</li>
            <li>Visibility:20</li>
            <li>Air Pressure:20</li>
            <li>Wind:20</li>
          </ul>
    </div>
      </div>
      
        
    <div>
        <TimeWeatherCard/>
    </div>
    </div>
  )
}
