import './App.css';
import Navbar from "./components/Navbar";
import { WeatherCard } from './components/WeatherCard';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [lat, setLat] = useState(23.0225);
  const [lon, setLon] = useState(72.5714);
  const apikey = '221c6b9f007e7cdbbd0b7526969e435f';

  // Fetch weather data for a given latitude and longitude
  async function getWeatherData(lat, lon) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
      );
      if (!response.ok) throw new Error('Error fetching weather data');
      return response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // Fetch city coordinates using Nominatim API
  async function getCityCoordinates(cityName) {
    try {
      const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apikey}
`);
      if (!response.ok) throw new Error('City not found');

      const data = await response.json();
      if (data.length === 0) throw new Error('City not found');

      return { lat: data[0].lat, lon: data[0].lon };
    } catch (error) {
      console.error("Error fetching city coordinates:", error);
      return null;
    }
  }

  // Fetch nearby cities using Overpass API
  async function findNearbyCities(lat, lon, radius = 50) {
    const overpassQuery = `
      [out:json];
      node[place=city](around:${radius * 1000},${lat},${lon});
      out body;
    `;
    
    try {
      const response = await fetch('https://overpass-api.de/api/interpreter', {
        method: 'POST',
        body: overpassQuery,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

      if (!response.ok) throw new Error("Failed to fetch nearby cities");

      const data = await response.json();
      return data.elements.map(city => ({
        name: city.tags.name,
        lat: city.lat,
        lon: city.lon
      }));
    } catch (error) {
      console.error("Error fetching nearby cities:", error);
      return [];
    }
  }

  // Fetch weather data for nearby cities
  async function getNearbyCitiesWeather(cityName) {
    try {
      const coordinates = await getCityCoordinates(cityName);
      if (!coordinates) return;

      setLat(coordinates.lat);
      setLon(coordinates.lon);

      const nearbyCities = await findNearbyCities(coordinates.lat, coordinates.lon);
      const weatherDataArray = [];

      for (const city of nearbyCities) {
        const weather = await getWeatherData(city.lat, city.lon);
        if (weather) {
          weatherDataArray.push({
            name: city.name,
            weather: weather
          });
        }
      }
      setData(weatherDataArray);
    } catch (error) {
      console.error("Error fetching nearby city weather:", error);
    }
  }

  // Fetch weather for default location on first render
  useEffect(() => {
    
    getNearbyCitiesWeather('Ahmedabad');
    console.log(data);
  }, []);

  return (
    <div className='w-dvw h-dvh  overflow-auto flex flex-col  gap-1 text-white bg-gradient-to-br from-neutral-800 via-stone-950 to-neutral-800'>
      <Navbar />
      <section className='w-full flex justify-center py-6 px-6 md:px-52'>
        <input
          type='text'
          placeholder='Search Location!'
          className='h-full w-full outline-none text-black text-sm rounded-full border-zinc-500 border-2 placeholder:text-center placeholder:text-zinc-600 active:font-bold font-semibold placeholder:font-semibold py-4 md:w-1/2 px-20'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          className="border-2 border-zinc-400 rounded-md text-white px-4 py-2 rounded-full ml-3"
          onClick={() => getNearbyCitiesWeather(search)}
        >
          Search
        </button>
      </section>
      <WeatherCard data={data.slice(0,3)} />
    </div>
  );
}

export default App;
