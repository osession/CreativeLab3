//const Contact = () => {

import React from "react";
import portrait from './images/portrait.jpg';

  
class Contact extends React.Component {

render() {

return (
    <div className="contactPage">
    <div className="portrait">
    <img src={portrait} alt="Portrait" />
    </div>
    <div className="contactInfo">
    <h1>Contact Me</h1>
    <p>Phone: (123) 456-7890</p>
    <p>Email: yummy.recipes@gmail.com</p>
    <p>Instagram: yummyrecipes</p>
    </div>
    </div>);
  };

};
  
  export default Contact;