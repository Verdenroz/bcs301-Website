import React from "react";
import "../css/Contact.css";

function Contact() {
    return (
        <div className="contact-container">
            <h1 style={{ fontSize: "40px",width: "100%", textAlign: "center" }}>Contact Us</h1>
           
            <form className="form-group">
                <div>
                    <input type="text" id="name" name="name" placeholder="Your Name" />
                </div>
                <div>
                    <input type="text" id="subject" name="subject" placeholder="Subject" />
                </div>
                <div>
                    <textarea id="inquiry" name="inquiry" placeholder="Inquiry" rows="10" cols="40"></textarea>
                </div>
                <button type="submit">Submit</button>

            </form>
        </div>
    );
}

export default Contact;
