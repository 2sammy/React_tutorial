import { useState } from "react"

const [name, setName] = useState("sam");
const [age, setAge] = useState(23)

const Home = () => {
    const handleClick = () => {
        setName('mano');
        setAge(32);

    }
    return ( 
        <div className="home">
            <h2>Home</h2>
            <button onClick={handleClick}>Click Me</button>
            <p>{name} is { age} old</p>

        </div>

     );
}
 
export default Home;