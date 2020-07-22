import React from 'react'



function Nav() {

    return (

        <nav className="navbar navbar-light flex-column flex-sm-row text-light border-bottom">
         
            <div className="header-container">
                
            </div>         
            
            <ul className="navbar-nav flex-row">                
                <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li className="divider"></li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">About Me</a>
                </li>
                <li className="divider"></li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.linkedin.com/in/roselyn-hamilton-acca-mipa-b8249287/" target="_blank">LinkedIn</a>
                </li>
                <li className="divider"></li>
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/rehamilton" target="_blank">Github</a>
                </li>
                <li className="divider"></li>
            </ul>        
        
        </nav>

    )
}

export default Nav