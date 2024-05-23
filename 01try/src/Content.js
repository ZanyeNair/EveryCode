function Content(){
    function handleNameChamge(){
        const names = ["John", "Dave", "Jane", "Kevin"];
        const int = Math.floor(Math.random() * names.length);
        return names[int];
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
                Hello {handleNameChamge()}!
            </p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClick2('dave')}>Click me</button>
            <button onClick={(e) => handleClick3(e)}>Click me</button>
        </main>
    )
}

export default Content