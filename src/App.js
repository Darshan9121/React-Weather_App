import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import { WeatherCard } from './components/WeatherCard';



function App() {
  return (
  <div className=' w-full h-full flex flex-col  gap-1 text-white bg-gradient-to-br from-neutral-800 via-stone-950 to-neutral-800 '>
    <Navbar/>
    <section className=' w-full flex   justify-center py-6  px-6 md:px-52'>

   
      <input type='text' placeholder='Search Loacation!' className='h-full w-full outline-none  text-black text-sm rounded-full border-zinc-500 border-2 placeholder:text-center placeholder:text-zinc-600 active:font-bold font-semibold placeholder:font-semibold py-4 md:w-1/2 px-20'/>
    </section>
    <WeatherCard/>

  </div>
  );
}

export default App;
