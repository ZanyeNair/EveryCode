import {useState} from 'react';
import { FaTrashAlt } from 'react-icons/fa';


function Content(){
    const [items, setItems] = useState([
        {
            id:1,
            checked: false,
            item: "One half pound bag of Cocoa Covered Almonds"
        },
        {
            id:2,
            checked: false,
            item: "Item 2"
        },
        {    
            id:3,
            checked: false,
            item: "Item 3"
        }
        
    ])
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

    return (
        <main>

            <ul>
                {items.map((item) => (
                    <li className = "item" key = {item.id}>
                        <input type="checkbox" checked={item.checked} />
                        <label>{item.item}</label>
                        <FaTrashAlt role="button" tabIndex = "0" />
                    </li>
                ))}
            </ul>
           
            {/* <p onDoubleClick = {handleClick}>
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