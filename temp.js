import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import { WeatherCard } from './components/WeatherCard';
import { useEffect, useState } from 'react';



function App() {
  const [data,setData]=useState({});
  const [search,setSearch]=useState("");
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (s) => {
        setLat(s.coords.latitude);
        setLon(s.coords.longitude);
        console.log("Updated Location:", s.coords.latitude, s.coords.longitude);
      },
      (error) => console.error("Error fetching location:", error)
    );
  }, []);
  
  // console.log(lati, lon); 
  const key = "523788c60a6c4e9983e84143252002";
  const getInfo = ()=>{
    let lati = null;
    let lon = null;
    navigator.geolocation.getCurrentPosition((s)=>{
      let lati = s.coords.latitude;
      let lon = s.coords.longitude;
      console.log(lati, lon); 
    })
    return [lati,lon];
  }
 
  
  function getDataByCurrentLocation() {
    if (lat === null || lon === null) {
      console.log("Waiting for location...");
      return;
    }
  
    console.log("Fetching weather data for:", lat, lon);
    
    fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${lat},${lon}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Weather Data:", data);
        setData(data);
      })
      .catch((error) => console.error("Error fetching weather:", error));
  }
  
  function getDataByLocation(location){
  
   
    fetch(`http://api.weatherapi.com/v1/current.json?key=523788c60a6c4e9983e84143252002&q=${location}`).then((data)=>{
 return data.json();
    
  
  }).then((data)=>{
      console.log(data);
      setData(data)
      

    });
  }

  const apiKey = "74f19dc0b0d2b3603b856aa61f653966";  // Replace with your actual API key


function findNearestCities(targetLat, targetLon, cities, count = 3) {
  const toRad = angle => (Math.PI / 180) * angle;
  const R = 6371; // Earth's radius in km
  const targetLatRad = toRad(targetLat);
  const minHeap = [];

  for (const city of cities) {
      const cityLatRad = toRad(city.lat);
      const dLat = cityLatRad - targetLatRad;
      const dLon = toRad(city.lon - targetLon);
      const a =
          Math.sin(dLat / 2) ** 2 +
          Math.cos(targetLatRad) * Math.cos(cityLatRad) *
          Math.sin(dLon / 2) ** 2;

      const distance = 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      if (minHeap.length < count) {
          minHeap.push({ ...city, distance });
          minHeap.sort((a, b) => a.distance - b.distance);
      } else if (distance < minHeap[minHeap.length - 1].distance) {
          minHeap.pop();
          minHeap.push({ ...city, distance });
          minHeap.sort((a, b) => a.distance - b.distance);
      }
  }

  return minHeap.map(city => ({
      name: city.name,
      lat: city.lat,
      lon: city.lon
  }));
}






const fetchCitiesAndFindNearest = async () => {
  try {
      if (!lat || !lon) return; 

      // 1️⃣ Fetch Current City from Reverse Geocoding
      const reverseGeocodeUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;
      const locationResponse = await fetch(reverseGeocodeUrl);
      const locationData = await locationResponse.json();
      if (!locationData.length) throw new Error("Location not found.");

      const cityName = locationData[0].name;
      console.log("Current City:", cityName);

      // 2️⃣ Fetch Indian Cities (Use a stored JSON if needed)
      const citiesResponse = await fetch(`https://example.com/indian-cities.json`); // Use a pre-filtered city list
      const citiesData = await citiesResponse.json();
      const cityList = citiesData.map(city => ({
          name: city.name,
          lat: city.coord.lat,
          lon: city.coord.lon
      }));

      // 3️⃣ Find Nearest Cities
      const nearestCities = findNearestCities(lat, lon, cityList, 3);
      console.log("Nearest Cities:", nearestCities);
  } catch (error) {
      console.error("Error fetching cities:", error);
  }
};


useEffect(() => {
    fetchCitiesAndFindNearest();
}, [lat, lon]); // Runs when lat/lon updates


// Runs only when coords update

   
    
 

 
  

  return (

  <div className=' w-dvw h-fit xl:h-dvh flex flex-col overflow-hidden gap-1 text-white bg-gradient-to-br from-neutral-800 via-stone-950 to-neutral-800 '>

    <Navbar/>
    

    <section className=' w-full flex   justify-center py-6  px-6 md:px-52'>

   
      <input type='text' placeholder='Search Loacation!' className='h-full w-full outline-none  text-black text-sm rounded-full border-zinc-500 border-2 placeholder:text-center placeholder:text-zinc-600 active:font-bold font-semibold placeholder:font-semibold py-4 md:w-1/2 px-20' onChange={(e)=>setSearch(e.target.value)} value={search} />
        <button onClick={()=>{
          getDataByLocation(search);
        }}>Search</button>
    </section>
    <WeatherCard data={data} />
  </div>
  );
}

export default App;
