# React_tutorial
- used npx create-react-app
- using react.strict mode means react does additional checks during development if there are errors to report
- create navbar file

const Navbar () => {
    return (
        <nav className = "navbar">
        <h1> welcome to my react blog</h1>
        <div className= "links">
        </div>
        </nav>

    )

}

export default Navbar;


react development tools


# lesson 16

import {useEffect, useState} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);
      const [name, setName] = useState('sanchez')

      const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id )
        setBlogs(newBlogs)

      }
      useEffect(() => {
        console.log('use effect ran');
        console.log(name)

      }, [name])

      
  return (
    <div className="home">
      <BlogList  blogs= {blogs} title = "All Blogs!" handleDelete= {handleDelete} />
      <button onClick={() => SVGAnimateTransformElement('manaoah')}>change name</button>
      <p>{ name }</p>
    </div>
  );
}
        
    
    
   

 
export default Home;
