import React from 'react'


function About() {


    return(

        <div>   
 
        <div className="row">
            <div className="col-md-12 col-sm-12">
                <h1 className="text-center">ABOUT ME</h1>
                <hr />
            </div>
        </div>

        
        <div className="row">
            <div className="col">
                <p id="bio" className= "text-center">
                    I am a motivated finance professional, with highly developed skills in strategic management, financial analysis and process improvement with a  commitment to personal development. Looking to take to take these skills and combine them with a passion for programming and system development.  
                </p>  
                <br/>
                
                <a href="./Assets/CV_Roselyn_Hamilton.pdf" target="_blank">
                    <div className="text-center">
                        <p>View My CV Here</p>
                    </div>  
                </a>   
            </div>
        </div>

        </div>
        
    )
}

export default About