import React, { useState } from 'react';
import { TimeWeatherCard } from './TimeWeatherCard';
import { IconMapPin } from '@tabler/icons-react';
import { IconTemperatureCelsius } from '@tabler/icons-react';
import { IconTemperature } from '@tabler/icons-react';
import {IconSnowflake} from '@tabler/icons-react';
import {IconChevronLeft} from '@tabler/icons-react';
import {IconChevronRight} from '@tabler/icons-react';


export const WeatherCard = (props) => {
  const data = props.data;
  console.log("weatehr:",props.data);

 
  
  return (
    <div className=" w-full flex  flex-col items-start md:flex-row ">
      {/* <div className='lg:flex lg:items-center lg:visible w-full  w-full py-0'>  */}
               <IconChevronLeft className='invisible md:visible' size={100} />
       <div className='flex flex-col gap-3  w-full  items-center   lg:gap-0 lg:flex-row'>

      {
        data.length != 0?(
          data.map((item,index)=>{
            let name = item.name;
            let temp = item.weather.main.temp;
            let visibility = item.weather.visibility;
            let pressure = item.weather.main.pressure;
            let wind = item.weather.wind.speed; 
            let humidity = item.weather.main.humidity;
            console.log(name,temp,visibility,pressure, wind);
            if(Math.floor(data.length/2) == index){
               //not  normal return 
            return (
               <>
                 <div className=" font-semibold text-sm lg:text-xl md:text-xl dark:text-white border-2 border-neutral-600   border-2 bg-gradient-to-br from-fuchsia-600 to-black flex flex-col gap-6 rounded-3xl w-11/12 p-4">
                       <section className='w-full flex  '>
        <section className='flex flex-col gap-28 justify-between w-1/2 '>
        <div className='flex '>
          <span>{name}</span>
          <IconMapPin/>
          
        </div>
          <p>Time</p>
        </section>
        <section className='flex justify-center items-center md:gap-6'>
        <IconTemperature size={30}/>
        <span className='text-6xl flex '>{temp}<IconTemperatureCelsius size={30}/></span>
        <IconSnowflake size={30}/>
        </section>
      </section>
      
        <ul className='w-full text-sm flex  gap-2 justify-evenly px-1 py-4'>
          <li>Humidity:{humidity}</li>
          <li>Visibility:{visibility}</li>
          <li>Air Pressure:{pressure}</li>
          <li>Wind:{wind}</li>
        </ul>
  </div>
  </>
          )
            }
            else{
            // normal return 
            return (
            
                <div className=" mx-0 p-1 font-semibold text-md md:text-2xl dark:text-white border-2 border-neutral-600   border-2 bg-gradient-to-tl from-teal-500  to-black flex flex-col gap-6 rounded-3xl  w-11/12 md:w-2/6">
        <section className='w-full flex p-2 '>
          <section className='flex flex-col gap-28 justify-between w-1/2 '>
          <div className='flex '>
            <span>{name}</span>
            <IconMapPin/>
            
          </div>
            <p>Time</p>
          </section>
          <section className='flex justify-center items-center md:gap-6'>
          <IconTemperature size={30}/>
          <span className='text-6xl flex '>{temp}<IconTemperatureCelsius size={30}/></span>
          <IconSnowflake size={30}/>
          </section>
        </section>
        
          <ul className='w-full text-sm flex  gap-2 justify-evenly  px-0 py-4'>
            <li>Humidity:{humidity}</li>
            <li>Visibility:{visibility}</li>
            <li>Air Pressure:{pressure}</li>
            <li>Wind:{wind}</li>
          </ul>
         </div>
   
            )}
          })
          
    
        )
           
        
        :"no data"
      }
        
       
        </div>
      <IconChevronRight  className='invisible md:visible' size={100} />
      {/* </div> */}

        {/* <IconChevronLeft className='invisible md:visible' size={200}/>
      <div className=" mx-8 p-2 font-semibold text-xl md:text-2xl dark:text-white border-2 border-neutral-600   border-2 bg-gradient-to-br from-fuchsia-600 to-black flex flex-col gap-6 rounded-3xl md:w-full">
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
        <div className=" invisible lg:visible mx-8 p-2 font-semibold text-xl md:text-2xl dark:text-white border-2 border-neutral-600   border-2 bg-gradient-to-tl from-teal-500  flex flex-col gap-6 rounded-3xl md:w-full">
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
      
      
        
    <div>
        <TimeWeatherCard/>
    </div> */}
    </div>
   
  )
}
