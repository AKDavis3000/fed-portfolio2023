'use client';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

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
            method="POST"
            action="ab9114eb741471e6584fa08474204dcb"
            className="cgi4_form">
            <label className="cgi4_label">Name</label>

            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="cgi4_input"
            />

            <label className="cgi4_label">Email</label>

            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="cgi4_input"
            />

            <textarea
              className="cgi4_input textarea"
              name="message"
              cols={30}
              rows={10}
              placeholder="Message..."></textarea>

            <input
              type="submit"
              value="Send"
              className="cgi4_btn"
            />
            <input
              type="hidden"
              name="_next"
              value="https://portfolio2023-six-sand.vercel.app/ThankYou"
            />
          </form>
        </div>
      </section>
      <div className="home_footer">
        <div className="triangle"></div>
        <div className="home_block"></div>
      </div>
    </>
  );
}
