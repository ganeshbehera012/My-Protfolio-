import "../styles/about.css";
function About() {
  return (
    <div className="container" data-aos={"fade-right"}>
      <div className="container__image">
        <div className="container__info container__author">Hi There!,</div>
        <div className="container__info container__location">
          <p>
            I am <em></em>
            <a href="https://www.instagram.com/_.innocent__devil._/" className="link">
              Ganesh Behera
            </a>{" "}
            , Innovative Full-Stack Developer, Designer in a single package. Currently I
                            am
                            persuing my bachlors with good academics. I am proficient in HTML, CSS, JavaScript, Node-js,
                            Next-js, Rest Api, Frameworks which I often used Bootstrap, Tailwind-Css. With a
                            Good knowledge of React Js. As a web developer, I love to build websites and
            applications that serve the world and always look for new ways to
            enhance my knowledge and gain exposure to new technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
