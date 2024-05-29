import {useState} from 'react';


function Content(){

    const [chosen, setChosen] = useState("");

    const [image, setImage] = useState([
        {
            id: 1,
            name: "John Doe",
            pic: "images.jpeg",
            picX: "checkMark.jpeg",
        },
        {
            id: 2,
            pic: "images.jpeg",
            name: "John Doe",
        },
        {
            id: 3,
            pic: "images.jpeg",
            name: "John Doe",
        },
        {
            id: 4,
            pic: "images.jpeg",
            name: "John Doe",
        },
        {
            id: 5,
            pic: "images.jpeg",
            name: "John Doe",
        },
        {
            id: 6,
            pic: "images.jpeg",
            name: "John Doe",
        },
        {
            id: 6,
            pic: "images.jpeg",
            name: "John Doe",
        },
        {
            id: 7,
            pic: "images.jpeg",
            name: "John Doe",
        },
        {
            id: 8,
            pic: "images.jpeg",
            name: "John Doe",
        },
        {
            id: 9,
            pic: "images.jpeg",
            name: "John Doe",
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
            <input type = "text" value = {chosen} onChange = {e => setChosen(e.target.value)} placeholder = "Enter who you want to chose"></input>
           
            <button type = "button" class = "btn btn-primary" onClick = {numberGuesses}>Add One Guess</button>
            <p>{chosen}</p>
           
            <ul class="list-group list-group-numbered">
                {image.map((i) => (
                    <li class="list-group-item" className = "i" key = {i.id}>
                        <img src = {i.pic} class="rounded float-start" alt = "Picture" onClick={() => makeBad(i.id)}/>
                        <p>{i.name}</p>
                    </li>
                ))}
            </ul>
            
            
        </main>
    )
}

export default Content