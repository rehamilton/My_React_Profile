import React from 'react';
import About from '../About/index'
import ContactMe from '../ContactMe/index'

function ContactContainer() {

    return(

        <div className="jumbotron contact" id="contact">
            <div className="container contact-container">
                <About />
                <ContactMe />
            </div>
        </div>  

    )
}

export default ContactContainer