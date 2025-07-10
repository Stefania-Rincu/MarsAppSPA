import {useEffect, useState} from 'react'
import './App.css'


const title: string = "National Aeronautics and Space Administration (NASA) Info"
const imgSrc: string = "https://cdn.dribbble.com/users/3239867/screenshots/7572468/image.png"
const p1: string = "The National Aeronautics and Space Administration (NASA) is an independent agency of the US federal government responsible for the United States's civil space program, aeronautics research and space research. Established in 1958, it succeeded the National Advisory Committee for Aeronautics (NACA) to give the American space development effort a distinct civilian orientation, emphasizing peaceful applications in space science. It has since led most of America's space exploration programs, including Project Mercury, Project Gemini, the 1968–1972 Apollo program missions, the Skylab space station, and the Space Shuttle. Currently, NASA supports the International Space Station (ISS) along with the Commercial Crew Program and oversees the development of the Orion spacecraft and the Space Launch System for the lunar Artemis program.";
const p2: string = "NASA's science division is focused on better understanding Earth through the Earth Observing System; advancing heliophysics through the efforts of the Science Mission Directorate's Heliophysics Research Program; exploring bodies throughout the Solar System with advanced robotic spacecraft such as New Horizons and planetary rovers such as Perseverance; and researching astrophysics topics, such as the Big Bang, through the James Webb Space Telescope, the four Great Observatories, and associated programs. The Launch Services Program oversees launch operations for its uncrewed launches.";


interface InfoTemplateProps {
    title: string;
    imgSrc: string;
    p1: string;
    p2: string;
}


function InfoTemplate(props: InfoTemplateProps) {
    return (
        <div className="nasa-card">
            <h1 className="nasa-title">{props.title}</h1>
            <img className="nasa-logo" src={props.imgSrc} alt="nasa logo"/>
            <p className="nasa-info">{props.p1}</p>
            <p className="nasa-info">{props.p2}</p>
        </div>
    )
}


function NasaInfo() {
    return (
        <InfoTemplate title={title} imgSrc={imgSrc} p1={p1} p2={p2}/>
    );
}


/*function CountClicks() {
    const [clickCount, setClickCount] = useState(() => {
        const storedClicks = localStorage.getItem('clickCount');
        return storedClicks !== null ? parseInt(storedClicks) : 0;
    });

    useEffect(() => {
        localStorage.setItem('clickCount', clickCount.toString());
    }, [clickCount]);

    function countClick() {
        setClickCount(clickCount + 1);
    }

    return (
        <button onClick={countClick}>
            Click count: {clickCount}
        </button>
    );
}*/


function Component4({ clickCount }: { clickCount: number }) {
    return (
        <div>
            <p>Click count: {clickCount}</p>
        </div>
    );
}

function Component3({ clickCount }: { clickCount: number }) {
    return (
        <div>
            <Component4 clickCount={clickCount} />
            <p>Message</p>
        </div>
    );
}

function Component2({ incrementCount }: { incrementCount: () => void })
{
    return (
        <button onClick={incrementCount}>
            Click to increase counter
        </button>
    );
}

function Component1() {
    const [clickCount, setClickCount] = useState(() => {
        const storedClicks = localStorage.getItem('clickCount');
        return storedClicks !== null ? parseInt(storedClicks) : 0;
    });

    useEffect(() => {
        localStorage.setItem('clickCount', clickCount.toString());
    }, [clickCount]);

    function incrementCount() {
        setClickCount(clickCount + 1);
    }

    return (
        <div className="component-tree">
            <Component2 incrementCount={incrementCount} />
            <Component3 clickCount={clickCount} />
        </div>
    )
}


function App() {
    return (
        <>
            <NasaInfo/>
            {/* <CountClicks/> */}
            <Component1/>
        </>
    );
}

export default App
