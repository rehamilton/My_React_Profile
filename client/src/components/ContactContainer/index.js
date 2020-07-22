import React from 'react';
import About from '../About/index'
import ContactMe from '../ContactMe/index'

function ContactContainer() {

    return(

        <div class="jumbotron contact" id="contact">
            <div class="container contact-container">
                <About />
                <ContactMe />
            </div>
        </div>  

    )
}

export default ContactContainer