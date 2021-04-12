
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Projects from './Projects.js';
// make each of these their own component with nested menu items that animate open on select
// elements of array will be their own react componenets 

// data arrays for the nav
const defaultSelect = "welcome to wasif";
const sections = ['projects', 'experience', 'interests', 'resume'];
const projects = ['webdev', 'machine learning', 'c/cpp'];
const experiences = ['internships', 'freelancing', 'leadership'];
const interests = ['tech', 'extras'];
const resumes = ['webdev', 'machine learning', 'c/cpp'];


function useKey(key, callback) {
  const cbRef = useRef(callback);

  useEffect(() => {
    cbRef.current = callback;
  })

  useEffect(() => {
    function handle(event) {
      if (event.code === key) {
        cbRef.current(event);
      }
    }

    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle)

  }, [key]);

}

function SubProjects(props) {
  const projRef = useRef();

  return (
    <>
      <div
        className={0 === props.highlighted ? 'active' : null}
      > > projects
      </div>

      <div
        className='collapsible'
        ref={projRef}
        style={'projects' === props.selected
          ? {
            height: projRef.current.scrollHeight + 'px',
          } :
          {
            height: "0px"
          }


        }
      >
        <ul>
          {projects.map((project, i) => (
            <div
              className={i === props.curs ? 'active' : null}
            > > {project}
            </div>
          ))}

        </ul>
      </div>

    </>
  )
}


function SubExperience(props) {
  const expRef = useRef();
  return (
    <>
      <div
        className={1 === props.highlighted ? 'active' : null}
      > > experience
      </div> 

      <div
        className='collapsible'
        ref={expRef}
        style={'experience' === props.selected
          ? {
            height: expRef.current.scrollHeight + 'px',
          } :
          {
            height: "0px"
          }


        }
      >
        <ul>
          {experiences.map((experience, i) => (
            <div
              className={i === props.curs ? 'active' : null}
            > > {experience}
            </div>
          ))}

        </ul>
      </div>

    </>
  )
}

function SubInterests(props) {
  const inRef = useRef();
  return (
    <>
      <div
        className={2 === props.highlighted ? 'active' : null}
      > > interests
      </div>

      <div
        className='collapsible'
        ref={inRef}
        style={'interests' === props.selected
          ? {
            height: inRef.current.scrollHeight + 'px',
          } :
          {
            height: "0px"
          }


        }
      >
        <ul>
          {interests.map((interest, i) => (
            <div
              className={i === props.curs ? 'active' : null}
            > > {interest}
            </div>
          ))}

        </ul>
      </div>



    </>
  )
}
function SubResume(props) {
  const resRef = useRef(); 
  return (
    <>
      <div
        className={3 === props.highlighted ? 'active' : null}
      > > resume
      </div>

         <div
        className='collapsible'
        ref={resRef}
        style={'resume' === props.selected
          ? {
            height: resRef.current.scrollHeight + 'px',
          } :
          {
            height: "0px"
          }


        }
      >
        <ul>
          {resumes.map((resume, i) => (
            <div
              className={i === props.curs ? 'active' : null}
            > > {resume}
            </div>
          ))}

        </ul>
      </div>
    </>
  )
}
function App() {

  const [highlighted, setHighlighted] = useState(0);
  const [selected, setSelected] = useState(defaultSelect);
  const [projCurs, setProjCurs] = useState(0);
  const [expCurs, setExpCurs] = useState(0);
  const [inCurs, setInCurs] = useState(0);
  const [resCurs, setResCurs] = useState(0);


  function handleUp() {
    if (selected === defaultSelect) {
      if (highlighted === 0) {
        setHighlighted(sections.length - 1)
      } else {
        setHighlighted(highlighted - 1);
      }
    } else if (selected === 'projects') {
      if (projCurs === 0) {
        setProjCurs(projects.length - 1)
      } else {
        setProjCurs(projCurs - 1);
      }
    } else if (selected === 'experience') {
      if (expCurs === 0) {
        setExpCurs(experiences.length - 1)
      } else {
        setExpCurs(expCurs - 1);
      }
    } else if (selected === 'interests') {
      if (inCurs === 0) {
        setInCurs(interests.length - 1)
      } else {
        setInCurs(inCurs - 1);
      }
    } else if (selected === 'resume') {
      if (resCurs === 0) {
        setResCurs(resumes.length - 1)
      } else {
        setResCurs(resCurs - 1);
      }
    }
  }

  function handleDown() {
    if (selected === defaultSelect) {
      if (highlighted === sections.length - 1) {
        setHighlighted(0)
      } else {
        setHighlighted(highlighted + 1);
      }
    } else if (selected === 'projects') {
      if (projCurs === projects.length - 1) {
        setProjCurs(0)
      } else {
        setProjCurs(projCurs + 1);
      }
    } else if (selected === 'experience') {
      if (expCurs === experiences.length - 1) {
        setExpCurs(0);
      } else {
        setExpCurs(expCurs + 1);
      }
    } else if (selected === 'interests') {
      if (inCurs === interests.length - 1) {
        setInCurs(0);
      } else {
        setInCurs(inCurs + 1);
      }
    } else if (selected === 'resume') {
      if (resCurs === resumes.length - 1) {
        setResCurs(0);
      } else {
        setResCurs(resCurs + 1);
      }
    }

  }

  function handleEnter() {
    setSelected(sections[highlighted]);
  }

  function handleX() {
    setSelected(defaultSelect);
    setExpCurs(0);
    setInCurs(0); 
    setResCurs(0);
    setProjCurs(0);
  }

  useKey("KeyW", handleUp);
  useKey("Enter", handleEnter);
  useKey("KeyS", handleDown);
  useKey("KeyX", handleX);

  return (

    <div className="App">
      <div className="nav">
        <h1> wasif_zulkernine </h1>
        <h2> > me </h2>
        <ul>
          {/*sections.map((section, i)=> (
  
                  <div 
                  className = {i === highlighted ? 'active' : null}
                  > > {section}
                </div> 
   
              ))*/}
          <SubProjects
            selected={selected}
            highlighted={highlighted}
            curs={projCurs}
          >
          </SubProjects>
          <SubExperience
            selected={selected}
            highlighted={highlighted}
            curs={expCurs}
          >
          </SubExperience>
          <SubInterests
            selected={selected}
            highlighted={highlighted}
            curs={inCurs}
          >
          </SubInterests>
          <SubResume
            selected={selected}
            highlighted={highlighted}
            curs={resCurs}
          >
          </SubResume>


        </ul>
      </div>
      <div className="content">
        <h1> {selected} </h1>
        {selected === defaultSelect && <p> use 'w' and 's' to move up and down and 'x' to go back. </p>}
      </div>
    </div>
  );
}

export default App;
