import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./animation.css";
import Navbar from "./components/navbar.js";
import Header from "./components/header.js";
import About from "./components/about";
import TechStack from "./components/techstack";
import Toproject from "./components/topProject";

import Footer from "./components/footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    setTimeout(function () {
      AOS.refresh();
    }, 500);
  }, []);
  return (
    <div id="top">
      <Navbar />
      <Header />

      <div id="about" data-aos={"fade-left"} style={{ height: "15vh" }}>
        <div className="stack-header">
          <p className="highlight">To Know</p>
          <h2 className="head">About me</h2>
        </div>
      </div>
      <About />

      <div id="tech" style={{ height: "15vh" }}></div>
      <TechStack />

      <div id="projects" style={{ height: "15vh" }}></div>
      <div>
        <div className="stack-header" data-aos={"zoom-in"}>
          <p className="highlight">My projects</p>
          <h2 className="head">Top Project</h2>
        </div>
        <div className="top_right mt" data-aos={"zoom-in-down"}>
          <Toproject
            projectdata={"Max Fashion Clone"}
            description={
              "Max Fashion is the largest fashion brand in the Middle East, North Africa, South East Asia & India. Features: Social Sign-in/Sign-up All products pages Slider at home page Filters on product page.Tech Stack: HTML | CSS | Javascript. Areas of responsibility: Built authentication and integrated it with the frontend Focus on functionality part Designed and developed user-friendly websites. A collaborative project built by a team of 4 executed in 4 days. Built with * HTML * CSS * Javascript * DOM"
            }
            techStack={[
              // "tech/html5.svg", "tech/css3.svg", "tech/js.svg"
              "tech/html_img.png",
              "tech/css.png",
              "tech/js.jpg",
            ]}
            imges={["max1.png", "max2.png", "max3.png"]}
            links={[
              "https://gracious-brattain-5ae9f0.netlify.app/",
              "https://github.com/nitinkadam70/TeamMax.git",
              // "https://player.vimeo.com/video/689858253?h=1744dc5262",
            ]}
          />
        </div>
        <div className="top_left" data-aos={"zoom-in-up"}>
          <Toproject
            projectdata={"LinkedIn Learning Clone"}
            description={
              "LinkedIn Learning is an American online learning provider. It provides video courses taught by industry experts in software, creative, and business skills. It is a subsidiary of LinkedIn. Tech Stack: HTML, CSS, JavasScript, Module Components"
            }
            techStack={[
              "tech/html_img.png",
              "tech/css.png",
              "tech/js.jpg",
              // "tech/express.png",
              // "tech/node.webp",
              // "tech/mongo.png",
              // "tech/postman.png",
            ]}
            imges={["land.png", "sign.png", "sups.png",]}
            links={[
              "https://projectlynda.netlify.app/",
              "https://github.com/ribhar/LinkedinLearning",
              // "https://player.vimeo.com/video/689858338?h=1e538fdf27",
            ]}
          />
        </div>

        
        {/* <div
          className="stack-header"
          style={{ marginBottom: "45px" }}
          data-aos={"fade-right"}
        >
          <p className="highlight">Mini Project's</p>
        </div>
        <div className="project_div">
          <Projects />
        </div> */}
      </div>
      <div id="contact" style={{ height: "15vh" }}></div>
      <Footer />
    </div>
  );
}

export default App;
