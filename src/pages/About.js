import React, {Component} from 'react';
import './About.css';

class About extends React.Component {    
    render () {
        return (

            <div className = 'everythingelse'>
                <div className = "home">
                    <h1>welcome to wasif</h1>
                    <p className = "info" style = {{margin: 10 + 'px' }}> Hey! I'm a computer engineering student at the University of Toronto graduating in April 2022, and therefore, looking for an internship/full-time role for  <span className = 'highlighted'> Summer 2022! </span> <br/> I'm interested in the fields of distributed/operating systems, machine learning and full-stack development.
                    <br/> </p>
                    <div className = "actions">
                   

                    </div>
                 </div>
                <div className = 'everything'>
                    <div className = 'column'> 
                        <div className = 'bio'>
                            <p className = 'selected1'> 
                                Who am I?
                            </p>
                            <p className = "info">
                                Open minded, big-picture thinker. I'm obsessed with solving problems across all fields and topics. I love looking at everyday tasks and finding out how to do them better. 
                                <br/> <br/> 
                            </p>
                            <div className = 'interests'> 
                            <p className = 'selected1'> 
                                Interests
                            </p>
                            <p className = "info">
                                I'm pretty interested in a wide variety of things; it depends on the day really. I'm an ex-gamer, can't get enough music and I am committed to getting my chess ELO over, hmm, 1800? I also love fitness/sports (especially basketball) and aspire to master the piano... eventually. 
                                <br/> <br/>

                            </p>
                        </div>
                        </div>
                    </div>

                    <div className = 'column'>
                        <div className = 'toolbox'>
                            <p className = 'selected1'> 
                                Tool Box
                            </p>



                            <p className = 'subtitle'> 
                            dev ops
                            </p>

                            <p className = "info">
                                jenkins <br/>
                                docker <br/>
                                kubernetes <br/>
                                linux <br/>
                            </p>

                            <p className = 'subtitle'> 
                            machine learning
                            </p>

                            <p className = "info">
                                numpy <br/>
                                tensorflow <br/>
                                pytorch <br/>
                                opencv <br/>
                            </p>

                            <p className = 'subtitle'> 
                            web dev
                            </p>

                            <p className = "info">
                                react <br/>
                                node <br/>
                                HTML/CSS <br/>
                            </p>
                        </div> 
                    </div>
                    <div className = 'column'>
                        <div className = 'interests'> 
                            <p className = 'selected1'> 
                                Languages
                            </p>
                            <p className = "info">
                                <span className = 'subselected'> C </span>: Operating Systems <br/> <br/>
                                <span className = 'subselected'> C++ </span> : Google Maps Clone + Coursework <br/> <br/>
                                <span className = 'subselected'> Python </span> : Distracted Driving Detection + Coursework  <br/> <br/>
                                <span className = 'subselected'> Javascript </span> : Freelance + Sidework <br/><br/>
                            </p>
                            <p className = 'selected1'> 
                                Resume                          
                            </p>

                            <a href="https://drive.google.com/file/d/1W8kjIKZ4GcFGpfpmepcE039akZ_PWsDP/view?usp=sharing" class="button2">Open</a>
                        </div>
                    </div>
                </div>
                <div className = 'bottomBox'>
                    <div className = 'column'>
                        <p className = 'selected1' style = {{textAlign:'left'}}> 
                                        Get in Touch
                        </p>
                        <a href="mailto:wasif.zulkernine@mail.utoronto.ca"  class="button2" style = {{width: 300 + 'px'}}>Let's Chat!</a>
                    </div>
                </div>
            </div>
        );
      }    
}
    

export default About;
    