import React from "react";
import s from '../style/About.module.css';

const About = ()=>{

     return(
          <div className={s.container}>
               <p>This Single Page Application was created using the library React.js by: <a href="https://www.linkedin.com/in/bruno-amerio-58a217225/" target="blank">Bruno Amerio</a> in which techniques such as: </p>
               <ul>
                    <li> Consume an API</li>
                    <li> React Router Dom</li>
                    <li> Redux</li>
                    <li> React Hooks</li>
                    <li> Local Storage</li>
                    <li> Modularized Styles</li>
               </ul>
               <a href="https://github.com/BrunoAmerio/Weather-App" target="blank">Link to GitHub repository here</a>
          </div>
     )
}

export default About;