import React, { useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import emailjs from "@emailjs/browser";
import Address from "../../img/address.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";
const Contact = () => {
  const [thank, setThank] = useState(false);
  const { state } = useContext(ThemeContext);
  const theme = state.darkMode;
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0o7czhb",
        "template_fiu02yo",
        formRef.current,
        "tehTXiO25G4RIDYKy"
      )
      .then(
        (result) => {
          setThank(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    formRef.current[0].value = null;
    formRef.current[1].value = null;
    formRef.current[2].value = null;
    formRef.current[3].value = null;
  };
  return (
    <div className="c" id="Contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 - 901 583 7752
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              tarunu88@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Najafgarh, New Delhi - 110043
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b style={{ marginRight: "1rem" }}>Feel free to ask anything</b>
            Get in Touch.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: theme && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            /> <br />
            <input
              style={{ backgroundColor: theme && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            /> <br />
            <input
              style={{ backgroundColor: theme && "#333" }}
              type="email"
              placeholder="Email"
              name="user_email"
            /> 
            <textarea
              style={{ backgroundColor: theme && "#333" }}
              placeholder="Message"
              name="message"
              rows="5"
            ></textarea>
            <button disabled={thank}>Submit</button>
            {thank && "Thankyou..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
