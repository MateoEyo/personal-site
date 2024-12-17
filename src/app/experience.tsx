export function Experience() {
    return (
    <div id="experience" className="sec">
      <h1 className="sec-header">
        <span className="experience-header"> experience </span>
      </h1>
      <div className="sec-text">
        <div className="sec-para">
          {/* Product Ownership part */}
          <p className="text-3xl pb-2">
            Education
          </p>
          <p>
            I have a Masters in Computer Science and certification of Cybersecurity from the University of Louisville and a Bachelors of Science in 
            Computer Science with a minor in Mathematics from the Univeristy of Kentucky.
          </p>
        </div>
        {/* QA part */}
        <div className="sec-para">
          <p className="text-3xl pb-2">
            Agile Methodologies
          </p>
          <p>
            I am currently a Senior Product Owner with a Scrum Master certification from <a href="https://scrum.org">Scrum.org</a> and I have spent
            10+ years developing Agile practices on teams to best deliver efficient and practical incremental progress toward large multi-team projects. 
          </p>
        </div>
        {/* Software Engineer part */}
        <div className="sec-para">
          <p className="text-3xl pb-2">
            Software Engineering
          </p>
          <p>
            I have used Python, Java, and C++ throughout my career to develop internal tools, write automation, and implement projects 
            in my college career. I am using this site as a way to teach myself more about Web Development with a focus in React development.
          </p>
        </div>
      </div>
    </div>
    );
  }
  
  export default Experience;