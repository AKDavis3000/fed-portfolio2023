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
import TechnicalSkills from './Components/TechnicalSkills';

export default function Home() {
  return (
    <>
      <main className="home_wrapper">
        <div className="h_grid-item1">
          <p className="h_p1">Front End Developer</p>
          <div className="hp1_line"></div>
        </div>

        <div className="h_grid-item2">
          <div className="vertical_line"></div>
        </div>

        <div className="shapes h_grid-item3">
          <div className="shape1"></div>
          <div className="shape2"></div>
          <div className="shape3"></div>
          <div className="shape4"></div>
          <div className="my_img_wrapper">
            <Image
              src="/img/Me-1.png"
              alt="Akilah Davis"
              width={235}
              height={270}
              className="my_img"
            />
          </div>
        </div>

        <div className="h_grid-item4">
          <p className="h_about">About Me</p>
          <div className="about_line"></div>
          <p className="h_p2">
            Hi! My name is Akilah Davis. I am a front-end developer from
            Washington D.C. About three years ago, I chose to explore web
            development and found a passion for front-end development. I
            appreciate the meticulous work that is paramount to a functional web
            application. In addition to front-end development, I enjoy sewing,
            reading, attending concerts, art, museums, and more.
            <br />
          </p>
          <p className="h_p3">
            In addition to an AWS Cloud Practitioner certification, my technical
            skills include the following:
          </p>

          <div className="h_icons">
            <TechnicalSkills
              icon={<FaHtml5 className="fa fa-html" />}
              text="HTML5"
            />
            <TechnicalSkills
              icon={<FaCss3 className="fa fa-css" />}
              text="CSS3"
            />
            <TechnicalSkills
              icon={<FaJs className="fa fa-js" />}
              text="JavaScript"
            />
            <TechnicalSkills
              icon={<FaSass className="fa fa-sass" />}
              text="Sass"
            />
            <TechnicalSkills
              icon={<FaReact className="fa fa-react" />}
              text="React"
            />
            <TechnicalSkills
              icon={<FaGithub className="fa fa-github" />}
              text="FaGithub"
            />
          </div>
          <p className="h_p4">
            Click
            <Link
              href="/Portfolio"
              className="h_portfolio_link">
              here
            </Link>
            to view my projects.
          </p>
          <p className="h_p5">
            Click
            <Link
              href="/Contact"
              className="h_contact_link">
              here
            </Link>
            to view contact me.
          </p>
        </div>
      </main>
      <div className="home_footer">
        <div className="triangle"></div>
        <div className="home_block"></div>
      </div>
    </>
  );
}
