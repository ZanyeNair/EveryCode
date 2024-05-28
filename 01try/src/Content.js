import {useState} from 'react';
import { FaTrashAlt } from 'react-icons/fa';


function Content(){

    const [image, setImage] = useState([
        {
            id: 1,
            pic: "images.jpeg",
            picX: "checkMark.jpeg",
        },
        {
            id: 2,
            pic: "images.jpeg",
        },
        {
            id: 3,
            pic: "images.jpeg",
        }

    ])


    const [guess, setGuess] = useState(0)
    
    function numberGuesses(){
        setGuess(guess + 1);
    }
    function makeBad(id){
        console.log("hello");
        const listImage = image.map((item) => item.id === id ? {...item, pic: item.picX} : item);
        setImage(listImage);
        setGuess(guess + 1);
    }

    return (
        <main>
            <h2>Number of Guesses: {guess}</h2>
           
            <button type = "button" class = "btn btn-primary rounded-pill px-3" onClick = {numberGuesses}>Add One Guess</button>
           
            <ul>
                {image.map((i) => (
                    <li className = "i" key = {i.id}>
                        <img src = {i.pic} alt = "Picture" onClick={() => makeBad(i.id)}/>
                        <p>{i.id}</p>
                    </li>
                ))}
            </ul>
            
        </main>
    )
}

export default Content