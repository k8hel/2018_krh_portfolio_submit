import React, { Component } from 'react';
import './contactpanel.css';




export default class ContactPanel extends React.Component {
    render() {

        return (
            <div class="maincontainer">
               
                 


                        <div className='contacttext'>
                            <h1> <small>Contact</small></h1>
                            Kaitlyn Helstrom <br />
                            406.570.3222<br />
                            krhelstrom@hotmail.com<br />
                            <div/>
                         <div className='skills'> <h1> <small>Skills</small></h1>
                                programming • graphic design • intuitive systems<br />
                                <br />
                                Front-End Development  | <br />
                                • HTML5 • CSS3 • JavaScript • Heroku for deployment <br />
                                React | Components • State • JSX • OOP <br />
                                Styling Frameworks | Bootstrap • Reactstrap <br />
                                <br />
                                Back-End Development  |<br />
                                • Node.js • Express server framework • Mongo<br />
                                • SQL • JWTs  • GitHub • RESTful APIs<br />
                                <br />
                                Mock-ups • Logo creation & refinement |<br />
                                InDesign • Photoshop • Bridge • Illustrator <br />
                                • vector graphics • Concise & informative UI systems<br />
                                <br />
                                </div>
                       <div className= 'statement'>
                            <h1>Hello.</h1>
                          
                                I’m a designer/ developer with a love for all things visual.  I love the
                                implementation of design in development & how it can be used to
                                streamline tasks & create systems that effectively solve problems.
                                Gaining a broad perspective and working through difficult problems
                                has been both challenging & gratifying.  I understand that a business
                                relies on established connections & relationships. I have found that
                                effective communication between group members & clients is a crucial
                                part of understanding your role &  meeting goals. I enjoy that
                                process and I am always open to sharing ideas & learning.
                           
                        </div>
        
                    <div className='section1'>
                        <h1>
                            <small>Experience</small>
                        </h1>
                        Branding & Identity |<br />
                        <br />
                            After discussing personality, goals, & values with
                            business, came up with visual concepts to match the
                            brand identity they were looking for. Set up site
                            and social media. Currently working on integrating
                            payment processing
                            <br />
                            <br />
                        Calendar Automation |<br />
                        <br />
                            Application for organizing event. Administration sets
                            up a custom form for Employees to to add event request.
                            Response from emailed form automatically populates an
                            organized spreadsheet for administrator spreadsheet for
                            review. Upon approval, event will automatically populate
                            the monthly event calendar.  React, Reactstrap, Google API,
                            jsx, Mongo.
                            <br />
                            <br/>
    
                        Text Message Automation |<br />
                        <br />
                        A single page web app that allowed a user to sign up 
                        & subscribe to local lunch specials. Once a user signed 
                        up, they could subscribe to receive sms messages each 
                        day/ week for the place(s) they subscribed to. The app also
                        allowed user to view the happy hour specials from Bozeman 
                        with the option to send a text reminder to phone number
                        on chosen day/ restaurant. 
                        dotenv, bcrypt, Express, jsonwebtoken, mongodb, Nodemon, Path, Twilio, 
                        
    
                         </div>
                </div>
            </div>
      
        );
    }
}
