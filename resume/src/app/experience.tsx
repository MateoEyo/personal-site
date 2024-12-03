export function Experience() {
    return (
    <div className="resumeBasic bg-[#DFC5FE]">
      <h1 className="resumeBasic-header">
        <span className="bg-white px-2 pb-2"> experience </span>
      </h1>
      <div className="resumeBasic-text">
        <p className="resumeBasic-para">
          {/* Product Ownership part */}
          <p className="text-3xl pb-2">
            Education
          </p>
          <p>
            I have a Masters in Computer Science and certification of Cybersecurity from the University of Louisville and a Bachelors of Science in 
            Computer Science with a minor in Mathematics from the Univeristy of Kentucky.
          </p>
        </p>
        {/* QA part */}
        <p className="resumeBasic-para">
          <p className="text-3xl pb-2">
            Agile Methodologies
          </p>
          <p>
            I am currently a Senior Product Owner with a Scrum Master certification from <a href="https://scrum.org">Scrum.org</a> and I have spent
            10+ years developing Agile practices on teams to best deliver efficient and practical incremental progress toward large multi-team projects. 
          </p>
        </p>
        {/* Software Engineer part */}
        <p className="resumeBasic-para">
          <p className="text-3xl pb-2">
            Software Engineering
          </p>
          <p>
            I have used <span className="font-semibold">Python</span> to develop small applications that allows uers to transform data  
          </p>
        </p>
      </div>
    </div>
    );
  }
  
  export default Experience;