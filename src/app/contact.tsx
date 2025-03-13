import { ContactMe } from '../components/forms/contact-me';

export function Contact() {
  return (
    <div id="contact" className="sec sec-flex contact">
      <h1 className="sec-header contact-header">have a question?</h1>
      <div className="sec-text">
        <ContactMe />
      </div>
    </div>
  );
}

export default Contact;
