import {useState} from 'react'

export default function Greeting() {
    const [changeText, setChangeText] = useState(false);

    function handleTextChange() {
        setChangeText(true);
    }

    return (
        <div>
            <h2>Hello World!</h2>
            {!changeText && <p>It's good to see you!</p>}
            {changeText && <p>Change!</p>}
            <button onClick={handleTextChange}>Change Text!</button>
        </div>
    )
}