import image from "../../assets/image.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import seta from "../../assets/seta.png";
import seta3 from "../../assets/seta3.png";
import lamp from "../../assets/lamp.png";
import iconMusic from "../../assets/iconMusic.png";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import { Download } from "lucide-react";
import { Send } from "lucide-react";
import { House } from "lucide-react";
import { User } from "lucide-react";
import { Phone } from "lucide-react";
import "./style.css";

function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };
  return (
    <div className="page">
      <header>
        <nav className="nav">
          <a className="brand" href="#home" >
            <strong>SaulDesign</strong>
          </a>
          <ul className="nav-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="home" className="Home-body">
        <div className="text-content">
          <h1>
            CREATIVE UI <span id="DESIGNER">DESIGNER</span>
          </h1>
          <div className="button-group">
            <button className="button1">
              <strong>Hire me</strong>
            </button>
            <button className="button2">
              <strong>
                Download CV <Download className="icon-download" />
              </strong>
            </button>
          </div>
        </div>
        <div className="image">
          <img src={image} alt="Imagem página home" />
        </div>
      </section>

      <section id="about" className="About">
        <div className="text">
          <img src={iconMusic} alt="icon de música" className="icon-music" />
          <h2>
            About<span id="me">me</span>
            <img src={lamp} alt="icon lamp" className="icon-lamp" />
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit. Nunc vulputate libero et <br />
            velit interdum, ac aliquet odio mattis. Class <br />
            aptent taciti sociosqu ad litora torquent <br />
            per conubia nostra, per inceptos <br />
            himenaeos. Curabitur tempus urna at <br />
            turpis condimentum lobortis.... <strong>Read more</strong>
          </p>
          <img src={seta} alt="seta icon" className="icon-seta" />
        </div>
        <div className="image2">
          <img src={image2} alt="Imagem página sobre" />
        </div>
      </section>

      <section className="works">
        <div className="container-labels">
          <h2>
            My recent <span id="works">works</span>
          </h2>
          <div className="buttons">
            <button className="all">
              <strong>All</strong>
            </button>
            <button className="ui">
              <strong>UI</strong>
            </button>
            <button className="ux">
              <strong>UX</strong>
            </button>
            <button className="web-design">
              <strong>Web Design</strong>
            </button>
          </div>
        </div>
        <div className="background-work1">
          <img src={work1} className="imgB" alt="Primeiro projeto" />
        </div>
        <div className="background-work2">
          <img src={work2} className="imgC" alt="Segundo projeto" />
        </div>
        <div className="background-work3">
          <img src={work3} className="imgD" alt="Terceiro projeto" />
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-info">
          <div className="text">
            <h2>Got a project in</h2>
            <h2 id="mind">mind?</h2>
          </div>
          <img src={seta3} alt="seta icon" className="icon-seta3" />
          <img src={image3} className="image3" alt="Imagem página contato" />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="nameEmail">
            <div className="name">
              <label htmlFor="name">
                <strong>Your name</strong>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="email">
              <label htmlFor="email">
                <strong>Your email</strong>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <label htmlFor="message">
            <strong className="message">Your Message</strong>
          </label>
          <textarea
            name="message"
            id="message"
            rows="6"
            placeholder="Message"
            required
          />
          <button type="submit">
            <strong>
              Send Message <Send className="icon-send" />
            </strong>
          </button>
        </form>
      </section>

      <footer>
        <div className="roots">
          <a href="#home">
            <House className="house-icon" /> Home
          </a>
          <a href="#about">
            <User className="user-icon" /> About me
          </a>
          <a href="#contact">
            <Phone className="phone-icon" /> Contact
          </a>
        </div>
        <div class="social">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebook} className="icon-facebook" alt="Icon Facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={instagram}
              className="icon-instagram"
              alt="Icon Instagrem"
            />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitter} className="icon-twitter" alt="Icon Twitter" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img src={youtube} className="icon-youtube" alt="Icon Youtube" />
          </a>
        </div>
        <p>Terms of Service - Privacy Policy</p>
      </footer>
    </div>
  );
}

export default Home;
