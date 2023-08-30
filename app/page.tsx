import Image from 'next/image';
import './scss/styles.scss';
import Link from 'next/link';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaSass,
  FaReact,
  FaGithub,
} from 'react-icons/fa';

export default function Home() {
  return (
    <main className="home_wrapper">
      <p className="h_p1">Front End Developer</p>
      <div className="home_line"></div>
      <div className="shapes">
        <div className="shape1"></div>
        <div className="shape2"></div>
        <div className="shape3"></div>
        <div className="shape4"></div>
      </div>
      <p className="h_p2">
        Hi! My name is Akilah Davis. I am a front-end developer from Washington
        D.C. About two years ago, I chose to explore web development and found a
        passion for front-end development. I enjoy problem-solving and more
        specifically, thinking of creative solutions. I appreciate the
        meticulous work that is paramount to a functional web application. In
        addition to front-end development, I enjoy sewing, reading, attending
        concerts, art, museums, and more.
        <br />
      </p>
      <p className="h_p3">My technical skills include the following:</p>
      <div className="h_icons">
        <FaHtml5 className="fa fa-html" />
        <FaCss3 className="fa fa-css" />
        <FaJs className="fa fa-js" />
        <FaSass className="fa fa-sass" />
        <FaReact className="fa fa-react" />
        <FaGithub className="fa fa-github" />
      </div>
      <p className="h_p4">
        Click
        <Link
          href="/Portfolio"
          className="h_portfolio_link">
          here
        </Link>
        to view my portfolio.
      </p>
      <div className="home_footer">
        <div className="triangle"></div>
        <div className="home_base"></div>
      </div>
    </main>
  );
}
