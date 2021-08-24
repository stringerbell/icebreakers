import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import useIceBreakers from "./Icebreakers";

export default function Categories() {
    const {category: param} = useParams();
    const history = useHistory()
    const [category, setCategory] = useState(param);
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
        history.push(`/${target.value}`)
    }
    return (
        <div className="App p-4">
            <select id="categories" value={category} onChange={({target}) => onChange(target)}
                    className={'bg-transparent text-gray-200 text-4xl underline'}>
                <option value="christian">Christian</option>
                <option value="shame">Shame</option>
                <option value="celebrities">Celebrities</option>
                <option value="women">Women</option>
                <option value="JEFFREY-BEZOS">Jeffrey Bezos</option>
            </select>
            <div className={'justify-center grid align-middle text-center'}>
                <div className={'my-12 max-w-xl'}>
                    <p className={`text-5xl text-gray-200 transition duration-700 ease-in-out ${hidden && 'text-opacity-0'}`}>{ib.text}</p>
                </div>
                {ib.citation && <p className={'text-gray-200 transition duration-700 ease-in-out my-12'}
                                   dangerouslySetInnerHTML={{__html: ib.citation}}/>}
                <button onClick={onClick}
                        className={'px-6 bg-red-500 h-14 rounded-2xl text-4xl text-gray-200 shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50'}>Next
                </button>
            </div>
        </div>
    )
}
