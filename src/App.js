
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Projects from './Projects.js';
import About from './pages/About.js';
import WorkExperience from './pages/WorkExperience'; 
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import Media from 'react-media';
import { Grid } from '@material-ui/core';
import { StayPrimaryLandscape } from '@material-ui/icons';

// make each of these their own component with nested menu items that animate open on select
// elements of array will be their own react componenets 

// data arrays for the nav
const defaultSelect = "welcome to wasif";
const sections = ['projects', 'experience', 'interests', 'resume'];
const projects = ['webdev', 'machine learning', 'c/cpp'];
const experiences = ['internships', 'freelancing', 'leadership'];
const interests = ['tech', 'extras'];
const resumes = ['webdev', 'machine learning', 'c/cpp'];

const tabs = [defaultSelect, 'projects', 'experience', 'interests', 'resume'];
const projInd = sections.indexOf('projects');
const expInd = sections.indexOf('experience');
const intInd = sections.indexOf('interests');
const resInd = sections.indexOf('resume');


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
        className={projInd === props.highlighted ? 'active' : null}
      >  projects
      </div>

      <div
        className='collapsible'
        ref={projRef}
        style={'projects' === props.selected
          ? {
            height: projRef.current.scrollHeight + 'px',
            opacity: 1
          } :
          {
            height: "0px",
            opacity: 0
          }


        }
      >

        {projects.map((project, i) => (
          <div
            className={i === props.curs ? 'active subitem' : 'subitem'}
          >  {project}
          </div>
        ))}


      </div>

    </>
  )
}


function SubExperience(props) {
  const expRef = useRef();
  return (
    <>
      <div
        className={expInd === props.highlighted ? 'active' : null}
      > experience
      </div>

      <div
        className='collapsible'
        ref={expRef}
        style={'experience' === props.selected
          ? {
            height: expRef.current.scrollHeight + 'px',
            opacity: 1
          } :
          {
            height: "0px",
            opacity: 0
          }
        }



      >

        {experiences.map((experience, i) => (
          <div
            className={i === props.curs ? 'active subitem' : 'subitem'}
          >  {experience}
          </div>
        ))}


      </div>

    </>
  )
}

function SubInterests(props) {
  const inRef = useRef();
  return (
    <>
      <div
        className={intInd === props.highlighted ? 'active' : null}
      >  interests
      </div>

      <div
        className='collapsible'
        ref={inRef}
        style={'interests' === props.selected
          ? {
            height: inRef.current.scrollHeight + 'px',
            opacity: 1
          } :
          {
            height: "0px"
          }


        }
      >
        {interests.map((interest, i) => (
          <div
            className={i === props.curs ? 'active subitem' : 'subitem'}

          >  {interest}
          </div>
        ))}


      </div>



    </>
  )
}
function SubResume(props) {
  const resRef = useRef();
  return (
    <>
      <div
        className={resInd === props.highlighted ? 'active' : null}
      >  resume
      </div>

      <div
        className='collapsible'
        ref={resRef}
        style={'resume' === props.selected
          ? {
            height: resRef.current.scrollHeight + 'px',
            opacity: 1
          } :
          {
            height: "0px"
          }


        }
      >
        {resumes.map((resume, i) => (
          <div
            className={i === props.curs ? 'active subitem' : 'subitem'}
          > {resume}
          </div>
        ))}

      </div>
    </>
  )
}



function App() {

  useEffect(() => {
    var colors = [
      '#F5007A', '#ff2626', '#26ccff', '#e6a900'
    ];

    var sec_colors = [
      '#220011', '#3d0000', '#001c33', '#032700', '#473400'
    ];

    const random_index = Math.floor(Math.random() * colors.length);
    // selecting random color
    var random_color = colors[random_index];
    var random_color2 = sec_colors[random_index];


    document.documentElement.style.setProperty(
      `--primary-color`,
      random_color
    )
    document.documentElement.style.setProperty(
      `--secondary-color`,
      random_color2
    )
  }, []);

  const [highlighted, setHighlighted] = useState(0);
  const [selected, setSelected] = useState(defaultSelect);
  const [projCurs, setProjCurs] = useState(0);
  const [expCurs, setExpCurs] = useState(0);
  const [inCurs, setInCurs] = useState(0);
  const [resCurs, setResCurs] = useState(0);
  const [explorerIsOpen, toggleExplorer] = useState(false);
  const [mobileMenuIsOpen, toggleMobileMenu] = useState(false); 

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

  function handleExplore() {
    toggleExplorer(!explorerIsOpen);
  }

  useKey("KeyT", handleExplore);
  useKey("KeyW", handleUp);
  useKey("Enter", handleEnter);
  useKey("KeyS", handleDown);
  useKey("KeyX", handleX);


  return (

    <div className="App">
      <div className={explorerIsOpen ? "nav opennav" : "nav"} id='naver'>
        <h2> wasifz9 </h2>

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



      </div>
      <div className="content">
        <Media query={{ maxWidth: 620 }}>
          <div className = 'mobileNav'>
          <div class = 'header'> 
            <h2 onClick={() => {toggleMobileMenu(!mobileMenuIsOpen)}}> 
              menu  
            </h2>  
          </div>

          <div className = {mobileMenuIsOpen ? 'mobile-nav-overlay open' : 'mobile-nav-overlay' }>
            <div className = { mobileMenuIsOpen ? 'close-icon' : 'hide'}>
              <h1 className = 'h1-mobile-title'
                  onClick={() => {toggleMobileMenu(!mobileMenuIsOpen)}}
              > 
                X
              </h1>
            </div>
            {
              tabs.map((tab, i) => (
                <h1
                  className = 'h1-mobile-title'
                  onClick={() => {
                    setSelected(tab);
                    i === 0 ? setHighlighted(0) : setHighlighted(i - 1);
                    toggleMobileMenu(!mobileMenuIsOpen);
                  }}>
                  {tab}
                </h1>
              ))
            }
          </div>
          </div>

        </Media>

        <Media query={{ minWidth: 620 }}>
          <div className="tabs">
            {
              tabs.map((tab, i) => (
                <div className={selected === tab ? 'tab activetab' : 'tab'}
                  onClick={() => {
                    setSelected(tab);
                    i === 0 ? setHighlighted(0) : setHighlighted(i - 1);
                  }}>
                  {tab}
                </div>
              ))
            }
          </div>
        </Media>



        
        {selected === defaultSelect && <About />}
        {selected === 'experience'&& <WorkExperience />}
      </div>

      <div className="footer">
        <div class = "footer-section"> <GitHubIcon fontSize='small'> </GitHubIcon> <MailIcon fontSize='small'> </MailIcon></div>
        <Media query={{ minWidth: 620 }}>
          <div class = 'footer-section'><p> For keyboard enthusiasts: use 't' to toggle the explorer then use 'w' and 's' to move up and down and 'x' to go back.</p></div>
        </Media>
        <div class = 'footer-section'><p> welcometowasif.xyz:v1.0</p></div>
      </div>
    </div>
  );
}

export default App;
