import React from "react";
import "./style.css";

function PortfolioItem() {

    return(
        <div class="col-md-6 col-sm-12" id="word-guess">    
            <a href="https://rehamilton.github.io/One-Fine-Day/" target="_blank">
                <div class="portfolio-link">
                    <img 
                        src="./Assets/One_Fine_Day.PNG"
                        alt= "One Fine Day"
                        class="img-fluid portfolio-img"                            
                    />
                    <h4 class="link-text">One Fine Day</h4>
                </div> 
            </a>                                                    
        </div>
    )

}