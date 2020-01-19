import React from 'react'

const About = () => {
    return (
        <div>
            <h3>This web site is created during a react online learning</h3>
            <div style={{textAlign:'left'}}>
            <p>I used for this responsive website:</p>
            
                <ul>
                    <li>Sass : syntactically awesome style sheets</li>
                    <li>React-Router-dom : navigation between pages </li>
                    <li>Bootstrap : for styles </li>
                    <li>Axios/Fetch : making asynchronous rest call</li>
                    <li>React hooks : allowing to add state and other React features to function components</li>
                    <li>Back-end: is a spring boot webflux application using an embeded mongodb database.</li>
                    <li>Heroku: container based cloud Platform as a Service (Paas) </li>
                </ul>
            
            </div>
        </div>
    )
}

export default About
