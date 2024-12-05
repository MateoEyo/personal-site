import { ContactMe } from "../components/forms/contact-me";

export function Contact() {
    return (
      <div className="resumeBasic bg-white">
        <h1 className="resumeBasic-header">
          <span className="bg-[#DFC5FE] px-2 pb-2"> have a question? </span>
        </h1>
        <div className="resumeBasic-text">
          <ContactMe />
        </div>
      </div>
    );
  }
  
  export default Contact;