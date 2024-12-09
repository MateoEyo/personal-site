import { ContactMe } from "../components/forms/contact-me";

export function Contact() {
    return (
      <div id = "contact" className="resumeBasic">
        <h1 className="resumeBasic-header">
          <span className="px-2 pb-2"> have a question? </span>
        </h1>
        <div className="resumeBasic-text">
          <ContactMe />
        </div>
      </div>
    );
  }
  
  export default Contact;