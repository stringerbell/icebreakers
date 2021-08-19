import './App.css';
import useIceBreakers from "./Icebreakers";

function Icebreaker({category, entries}) {
    return <div>
        <h1>{category} icebreakers</h1>
        <ul className={'grid-cols-2 grid grid-gap-2'}>
            {entries.map((({text}, i) => {
                return <div key={i} className={'p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4'}>
                    <li className={"text-gray-500"}>{text}</li>
                </div>
            }))}
        </ul>
    </div>;
}

function App() {
    const icebreakers = useIceBreakers()
    return (
        <div className="App">
            {
                icebreakers.map(({category, entries}) => {
                    return <Icebreaker category={category} entries={entries} key={category}/>
                })
            }
        </div>
    );
}

export default App;
