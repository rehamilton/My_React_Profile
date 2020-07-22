import React from "react";



function PortfolioItem(props) {

    console.log("props" , props);
    console.log(props.repo)

    return(
        <div className="col-md-12 col-sm-12" align = "center">    
            <a href={props.repo.link} target="_blank">
                <div className="portfolio-link">
                    <img 
                        src={props.repo.image}
                        alt= {props.repo.name}
                        className="img-fluid portfolio-img"                            
                    />
                    <h4 className="link-text">{props.repo.name}</h4>
                </div> 
            </a>                                                    
        </div>
    )

}

export default PortfolioItem