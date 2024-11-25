export function About({ }: {  }) {
    return (
        <div id="aboutSection" className="about bg-sky-400/100 items-center">
            <h1 className="about-header text-3xl font-bold text-center px-8">
                <span className="bg-[#DFC5FE] px-2"> about me </span>
            </h1>
            <div className="about-text px-8">
                <p className="about-para">
                    I'm an agile expert and software engineer that is passionate about learning and becoming a better version of myself. 
                    I strive to be curious, empathetic, and helpful to those around me.
                </p>
                <p className="about-para">
                    When I'm not self-aggrandizing, I am also a musician that loves to play a wide variety of instruments, 
                    although I would only consider myself good at about two of them. I listen to music every day, 
                    <span className="italic"> try</span> to read everyday, and wish I could see more movies than I currently am.
                </p>
                <p>
                    Lastly, I have a wonderful pair of pets, a dog and a cat, that I share with my family, whom I also love and care for dearly.
                </p>
            </div>
        </div>
    );
}
  
export default About;