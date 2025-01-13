export function ContactMe() {
  return (
    <form>
      <div className="formSubsection">
        <label className="formLabel">Name</label>
        <div className="formInputSec">
          <input
            className="formInput"
            id="contact-name"
            name="contact-name"
            type="text"
          />
        </div>
      </div>

      <div className="formSubsection">
        <label className="formLabel">Email</label>
        <div className="formInputSec">
          <input
            className="formInput"
            id="contact-email"
            name="contact-email"
            type="text"
          />
        </div>
      </div>

      <div className="formSubsection">
        <label className="formLabel">Message</label>
        <div className="formInputSec">
          <input
            className="formInput form-input-message"
            id="contact-message"
            name="contact-message"
            type="text"
          />
        </div>
      </div>

      <div className="formSubsection">
        <button className="btn-contact">Send message</button>
      </div>
    </form>
  );
}
