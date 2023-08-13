const Home = () => {
    const handleClick = (e) => {
        console.log('hello sam')
    }
    const handleClickAgain = (name, e) => {
        console.log('hello' + name, e.target);
    }
    return ( 
        <div className ="home">
            <h2> Homepage</h2>
            <button onClick = {handleClick}>Click Me</button>
            <button onClick= {(e) => handleClickAgain('sanchez') }>Click</button>
        </div>
     );
}
 
export default Home;