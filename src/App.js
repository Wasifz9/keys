
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Projects from './Projects.js';

// make each of these their own component with nested menu items that animate open on select
// elements of array will be their own react componenets 
const sections = ['projects','experience', 'games', 'ideas', 'resume']

function useKey(key, callback){
  const cbRef = useRef(callback);

  useEffect (() => {
    cbRef.current = callback; 
  })

  useEffect (() => {
    function handle (event){
      if (event.code === key){
        cbRef.current(event);
      }
    }

    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle)

  }, [key]);

}


  function App() {

    const [highlighted, setHighlighted] = useState(0);
    const [selected, setSelected] = useState("use 'w' and 's' to navigate.");

    function handleUp(){
      if (highlighted === 0){
        setHighlighted(sections.length - 1)
      } else{
        setHighlighted(highlighted - 1);
      }
    }
    
    function handleDown (){
      if (highlighted === sections.length-1){
        setHighlighted(0)
      }else {
        setHighlighted(highlighted + 1);
      }
    }
    
    function handleEnter(){
      setSelected(sections[highlighted]);
    }
    
    useKey("KeyW", handleUp);
    useKey("Enter", handleEnter);
    useKey("KeyS", handleDown);
    
    return (
      
      <div className="App">
          <div className = "nav">
            <h1> Wasif Zulkernine </h1>
            <h2> > me </h2>
            <ul> 
              {sections.map((section, i)=> (
                <li 
                  key = {i}
                > 
                  <div 
                  className = {i === highlighted ? 'active' : null}
                  > > {section}
                </div> 

                
                </li>
              ))}
            </ul>
        </div>
        <div className = "content">
            <h1> {selected} </h1>
        </div>
      </div>
    );
}

export default App;
