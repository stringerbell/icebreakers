import './App.css';
import useIceBreakers from "./Icebreakers";
import {useEffect, useState} from "react";

function App() {
    let [category, setCategory] = useState("christian");
    const icebreakers = useIceBreakers()
    const [ib, setIB] = useState("")
    const [hidden, setHidden] = useState(false)
    useEffect(() => {
        icebreakers.shuffle()
        setIB(icebreakers.next(category))
    }, [])

    const onClick = () => {
        setHidden(true)
        setTimeout(() => {
            setIB(icebreakers.next(category))
            setHidden(false)
        }, 1000)
    }

    const onChange = (target) => {
        setCategory(target.value)
        setIB(icebreakers.next(target.value))
        icebreakers.shuffle()
    }
    return (
        <div className="App p-4">
            <select id="categories" value={category} onChange={({target}) => onChange(target)}
                    className={'bg-transparent text-gray-200 text-4xl'}>
                <option value="christian">Christian</option>
                <option value="shame">Shame</option>
                <option value="celebrities">Celebrities</option>
            </select>
            <div className={'justify-center grid align-middle text-center'}>
                <div className={'my-12 max-w-xl'}>
                    <p className={`text-5xl text-gray-200 transition duration-700 ease-in-out ${hidden && 'text-opacity-0'}`}>{ib.text}</p>
                </div>
                <button onClick={onClick}
                        className={'px-6 bg-red-500 h-14 rounded-2xl text-4xl text-gray-200 shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50'}>Next
                </button>
            </div>
        </div>
    );
}

export default App;
