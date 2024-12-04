export function Contact() {
    return (
    <div className="resumeBasic bg-white">
      <h1 className="resumeBasic-header">
        <span className="bg-[#DFC5FE] px-2 pb-2"> contact </span>
      </h1>
      <div className="resumeBasic-text">
        <form>

          <div className="py-3">
            <label className="font-medium">
              Email
            </label>
            <div className="pt-2">
              <input 
                className="rounded-md pl-3 py-1 outline outline-1 -outline-offset-1 outline-gray-300" 
                id="contact-email" name="contact-email" type="text" placeholder="email@example.com" />
            </div>
          </div>

          <div className="py-3">
            <label className="font-medium">
              Subject Line
            </label>
            <div className="pt-2">
              <input 
                className="rounded-md pl-3 py-1 outline outline-1 -outline-offset-1 outline-gray-300" 
                id="contact-subject-line" name="contact-subject-line" type="text" placeholder="The subject of this email" />
            </div>
          </div>

          <div className="py-3">
            <label className="font-medium">
              Message
            </label>
            <div className="pt-2">
              <input 
                className="rounded-md pl-3 py-1 outline outline-1 -outline-offset-1 outline-gray-300 w-5/6" 
                id="contact-message" name="contact-message" type="text" placeholder="The message of this email" />
            </div>
          </div>

        </form>
      </div>
    </div>
    );
  }
  
  export default Contact;