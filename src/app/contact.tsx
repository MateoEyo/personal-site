import { ContactMe } from "../components/forms/contact-me";

export function Contact() {
    return (
      <div id="contact" className="contact">
        <h1 className="contact-header">
          have a question?
        </h1>
        <div className="resumeBasic-text">
          <ContactMe />
        </div>
      </div>
    );
  }
  
  export default Contact;