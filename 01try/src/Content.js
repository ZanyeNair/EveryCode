import {useState} from 'react';


function Content(){
    const [name, setName] = useState('Dave')
    const [count, setCount] = useState(0)
    function handleNameChamge(){
        const names = ["John", "my g", "Jane", "Kevin"];
        const int = Math.floor(Math.random() * names.length);
        setName(names[int]);
      }
    function handleCountChange(){
        setCount(count+1);
    }
    function handleClick(){
        console.log("You clicked it")
    }
    function handleClick2(name){
        console.log(name +  ' clicked it')
    }
    function handleClick3(e){
        console.log(e)
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
            <button onClick={(e) => handleClick3(e)}>Click me</button>
        </main>
    )
}

export default Content