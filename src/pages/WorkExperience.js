import React, {Component} from 'react';
import './WorkExperience.css';


class WorkExperience extends React.Component {

    render () {
        return (
            <div className = 'everything1'>
                            <div className = "home">
                    <h1>work experience</h1>
                    <p className = "info" style = {{margin: 10 + 'px' }}> 
                        All the experiences I owe for teaching me how to develop professionally... 
                    <br/> </p>
                    <div className = "actions">
                   

                    </div>
                 </div>
                   
                    <div className = 'section'>
                        <p className = 'subtitle'>
                            RBC Analytics and Innovation
                        </p>
                        <p className = 'jobtitle'>
                            full-stack engineer
                        </p>
                        <p className = 'subsubtitle'>
                            summer '21
                        </p>
                
                                    <p className ='info'>
                                        <li>Owned, designed and developed a custom full-stack (Vue, Python, Sqlite) monitoring application to report, visualize and log metrics and status of all sub-components of our main product, an internal machine learning-driven financial portfolio analytics application</li>
                                        <li>Built foundation of alert system (Slackbot) to interact with my application’s API to notify team and users of outages  </li>  
                                        <li>Facilitated Agile meetings as temporary Scrum Master – building story points, noting updates and enabling collaboration </li> 
                                        <li>Contributed to regular software maintenance and decisions about future direction and user retention strategies of team’s main application.</li>  
                                    </p>



                    </div>
              
                    <div className = 'section'>
                        <p className = 'subtitle'>
                            RBC Analytics and Innovation
                        </p>
                        <p className = 'jobtitle'>
                            devops engineer
                        </p>
                        <p className = 'subsubtitle'>
                            summer '20
                        </p>
                
                                    <p className ='info'>
                                        <li>Contributed to the migration of team’s main application from existing container orchestration platform, Docker Swarm, to Openshift</li>
                                        <li>Reduced size of enterprise gold base containers by 50-90% with multi-stage builds and custom configurations</li>  
                                        <li>Contributed to migration of existing pipelines from Cloudbees Jenkins to opensource Jenkins </li> 
                                        <li>Built Jenkins pipeline to operate with Vault secrets to ensure secure automation and secret management </li>  
                                        <li>Trained in AWS while documenting for new hires and preparing for full-scale migration</li>  
                                    </p>



                    </div>
       
                <div className = 'section'>
                <p className = 'subtitle'>
                    Government of Ontario
                </p>
                <p className = 'jobtitle'>
                    software developer/tester
                </p>
                <p className = 'subsubtitle'>
                    summer '19
                </p>
                            <p className ='info'>
                                        <li>Automated long-standing manual tests using
                                        Visual Basic and UFT.</li>
                                
                                    <li> Worked with SQL developers on database
                                        architecture.</li>
                                  
                                    <li>   Trained testers to adapt to the new
                                        automation tools to optimize their testing.</li>

                            </p>

                </div>      
     
                <div className = 'section'>                       
                <p className = 'subtitle'>
                    Government of Ontario
                </p>
                <p className = 'jobtitle'>
                    software tester
                </p>
                <p className = 'subsubtitle'>
                    summer '18
                </p>
                            <p className ='info'>
                            <li>Reviewed Design Specs with Business Analysts
                                        to communicate logic requirements to developers. </li>
                                 
                                    <li>Designed and executed tests on Curam interface
                                        and Cognos reports based on client- generated
                                        specifications.</li>
                                  
                                    <li> Sat in on board meetings where I took meeting
                                        minutes and was introduced to the inner
                                        workings of the ministry.</li>

                            </p>
        
                </div>
       
                <div className = 'section'>  
                <p className = 'subtitle'>
                    LeadMountain 
                </p>
                <p className = 'jobtitle'>
                    founder
                </p>
                <p className = 'subsubtitle'>
                summer '19 - current
                </p>

                            <p className ='info'>
                                    <li>Developing websites and online branding for
                                        small businesses.</li> 
                                    
                                    <li> Designing pamphlets/advertisements and
                                        various marketing media.</li> 

                                    <li> Helping create business strategy for
                                        companies to implement and promote
                                        growth. </li>              
                            </p>
                </div>    

                <div className = 'section'> 
                        
                <p className = 'subtitle'>
                    Kingston Impact
                </p>
                <p className = 'jobtitle'>
                    manager
                </p>
                <p className = 'subsubtitle'>
                2013-2017
                </p>
                            <p className ='info'>
                            <li>  Planned, supervised and lead practices</li> 
                                    
                                    <li> Managed junior coaching staff, custodial staff
                                        and parental concerns</li> 

                                    
                                    <li>    Marketed the league and attracted new
                                customers
                                        growth. </li> 
                            </p>
                </div>
   
                    <a href="mailto:wasif.zulkernine@mail.utoronto.ca"  className="button2" style = {{width: 250 + 'px'}}>Let's Chat!</a>
               
            </div>
        );
      }    
}
    

export default WorkExperience;

