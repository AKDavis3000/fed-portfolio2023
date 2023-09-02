import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <section className="contact_wrapper">
        <div className="c_grid-item1">
          <p className="cgi1_p1">Let&apos;s Connect</p>
          <div className="cgi1_line"></div>
        </div>
        <div className="c_grid-item2">
          <p className="cgi2_p1">
            <FaEnvelope className="cgi2_icons" />
            akilahkdavis@gmail.com
          </p>
          <div>
            <p>
              <FaLinkedin className="cgi2_icons" />
              <Link
                className="cgi2_links"
                href="www.linkedIn.com/akdavis3000">
                www.linkedIn.com/akdavis3000
              </Link>
            </p>
          </div>
          <div>
            <p>
              <FaGithub className="cgi2_icons" />
              <Link
                className="cgi2_links"
                href="https://github.com/AKDavis3000">
                github.com/AKDavis3000
              </Link>
            </p>
          </div>
        </div>
        <div className="c_grid-item3">
          <div className="cgi3_line"></div>
        </div>
        <div className="c_grid-item4">
          <form
            action=""
            className="cgi4_form">
            <label
              htmlFor=""
              className="cgi4_label">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              className="cgi4_input"
            />
            <label
              htmlFor=""
              className="cgi4_label">
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="cgi4_input"
            />
            <textarea
              className="cgi4_input textarea"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message..."></textarea>
            <button className="cgi4_btn">Submit</button>
          </form>
          <p className="thanks">Thank You!</p>
        </div>
      </section>
      <div className="home_footer">
        <div className="triangle"></div>
        <div className="home_block"></div>
      </div>
    </>
  );
}
