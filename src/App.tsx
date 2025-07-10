import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function NasaInfo() {
    return (
        <div className="nasa-card">
            <h1 className="nasa-title">National Aeronautics and Space Administration (NASA) Info</h1>
            <img className="nasa-logo" src="https://cdn.dribbble.com/users/3239867/screenshots/7572468/image.png" alt="nasa-logo"/>
            <p className="nasa-info">The National Aeronautics and Space Administration (NASA) is an independent agency of the US federal government responsible for the United States's civil space program, aeronautics research and space research. Established in 1958, it succeeded the National Advisory Committee for Aeronautics (NACA) to give the American space development effort a distinct civilian orientation, emphasizing peaceful applications in space science. It has since led most of America's space exploration programs, including Project Mercury, Project Gemini, the 1968–1972 Apollo program missions, the Skylab space station, and the Space Shuttle. Currently, NASA supports the International Space Station (ISS) along with the Commercial Crew Program and oversees the development of the Orion spacecraft and the Space Launch System for the lunar Artemis program.</p>
            <p className="nasa-info">NASA's science division is focused on better understanding Earth through the Earth Observing System; advancing heliophysics through the efforts of the Science Mission Directorate's Heliophysics Research Program; exploring bodies throughout the Solar System with advanced robotic spacecraft such as New Horizons and planetary rovers such as Perseverance; and researching astrophysics topics, such as the Big Bang, through the James Webb Space Telescope, the four Great Observatories, and associated programs. The Launch Services Program oversees launch operations for its uncrewed launches.</p>
        </div>
    );
}

function App() {
  //const [count, setCount] = useState(0)

  return (
      <NasaInfo/>
  )/*(
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/
}

export default App
