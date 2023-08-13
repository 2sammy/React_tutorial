
import './App.css';

function App() {

  const title = "Welcome to my Awewsome blog"
  const likes = 50
  return (
    <div className="App">
      <div className='content'>
        <h1>{title}</h1>
        <p>Loved with {likes} times</p>
        <p>{"iam able to this"}</p>
        <p>{100} likes</p>
        <p>{["sammy", "rissh"]}</p>

      </div>
    </div>
  );
}

export default App;
