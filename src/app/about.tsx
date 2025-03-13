export function About() {
    return (
        <div id="about" className="sec">
            <h1 className="sec-header">
                <span className="about-header"> about me </span>
            </h1>
            <div className="sec-text">
                <p className="sec-para">
                    I am someone who wants to be a better person and find challenges that I can learn from. One way to do that is 
                    to learn how to make this website, which I did with <span className="text-blue">React</span>,
                    <span className="text-blue">NX</span>, and <span className="text-blue">Typescript</span>.
                </p>
                <p className="sec-para">
                    I was inspired by some incredible engineers in my life to build this website so I can catalogue my interests and projects. 
                    It might be a bit bare at the moment, but I hope to dive into more challenges and use this page as a landing pad for 
                    any and all projects that interest me.
                </p>
                <p>
                    Thanks for coming to my page, and please don't hesitate to send me an email via the email link at the bottom of this page.
                </p>
            </div>
        </div>
    );
}
  
export default About;