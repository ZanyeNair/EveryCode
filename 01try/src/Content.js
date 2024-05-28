import {useState} from 'react';
import { FaTrashAlt } from 'react-icons/fa';


function Content(){

    // const [items, setItems] = useState([
    //     {
    //         id:1,
    //         checked: false,
    //         item: "One half pound bag of Cocoa Covered Almonds"
    //     },
    //     {
    //         id:2,
    //         checked: false,
    //         item: "Item 2"
    //     },
    //     {    
    //         id:3,
    //         checked: false,
    //         item: "Item 3"
    //     }
        
    // ])
    const [image, setImage] = useState([
        {
            id: 1,
            pic: "images.jpeg",
            picX: "images.jpeg",
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
    // const [count, setCount] = useState(0)
    // function handleNameChamge(){
    //     const names = ["John", "my g", "Jane", "Kevin"];
    //     const int = Math.floor(Math.random() * names.length);
    //     setName(names[int]);
    //   }
    // function handleCountChange(){
    //     setCount(count+1);
    // }
    // function handleClick(){
    //     console.log("You clicked it")
    // }
    // function handleClick2(name){
    //     console.log(name +  ' clicked it')
    // }
    // function handleClick3(e){
    //     console.log(e)
    // }
    function numberGuesses(){
        setGuess(guess + 1);
    }
    function makeBad(i){
        
    }
    function makeGood(id){
        console.log("hello");
    }

    return (
        <main>
           
            <p onDoubleClick = {handleClick}>
                Hello {name}!
                <br/>
                count: {count}
            </p>
            <button onClick={handleNameChamge}>Change Namee</button>
            <button onClick={handleCountChange}>Change Count</button>
            <button onClick={() => handleClick2('dave')}>Click me</button>
            <button onClick={(e) => handleClick3(e)}>Click me</button> */}
        </main>
    )
}

export default Content