import React, {useState} from "react";
import PortfolioItem from '../PortfolioItem'
import repos from '../../repo'


function Portfolio(  ) {

    const [repo, setRepo] = useState(repos)

    console.log(repo);

    
  return (
      <div>
        <div className="jumbotron portfolio" id="portfolio">
            
            <div className="container portfolio-container">

                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-12 col-sm-12" id="content-container">  
                            
                                            
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <h1 className="text-center">PORTFOLIO</h1>
                                    <hr/>
                                </div>
                            </div>
                            {repo.map((repos) => (
                                <PortfolioItem 
                                key = {repos.name}
                                repo = {repos}
                                />
                            ))}                            
                        </div>
            
                    </div>
                </div>          
            </div>    
            
        </div>
    </div>
  )
}

export default Portfolio;