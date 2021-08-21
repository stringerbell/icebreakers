import './App.css';
import useIceBreakers from "./Icebreakers";
import {useEffect, useState} from "react";

function App() {
    const icebreakers = useIceBreakers()
    const [ib, setIB] = useState("")
    const [hidden, setHidden] = useState(false)
    useEffect(() => {
        setIB(icebreakers.next())
    }, [])

    const onClick = () => {
        setHidden(true)
        setTimeout(() => {
            setIB(icebreakers.next())
            setHidden(false)
        }, 1000)
    }

    return (
        <div className="App">
            <div className={'justify-center grid align-middle text-center'}>
                <div className={'my-12 max-w-xl'}>
                    <p className={`text-5xl text-gray-200 transition duration-700 ease-in-out ${hidden && 'text-opacity-0'}`}>{ib.text}</p>
                </div>
                <button onClick={onClick} className={'px-6 bg-red-500 h-14 rounded-2xl text-4xl text-gray-200 shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50'}>Next</button>
            </div>
        </div>
    );
}

export default App;
