import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <>
      <div className="title">
        <p className="portfolio_title">Portfolio</p>
        <div className="title_line"></div>
      </div>
      <section className="portfolio_wrapper">
        {/* one */}
        <div className="p_grid-items p_grid-item1">
          <div className="pgi1_line"></div>
        </div>
        {/* two */}
        <div className="p_grid">
          <div className="p_grid-items p_grid-item2">
            <Image
              src="/img/rm.png"
              alt="cat"
              width={200}
              height={200}
              className="portfolio_pics"
            />
            <div className="p_wrapper">
              <p className="pgi2_p1">
                <Link
                  href="rm-git-final-akdavis3000.vercel.app
                  "
                  className="portfolio_link">
                  Rick & Morty
                </Link>
              </p>
              <p className="pgi2_p2">
                I used the Rick & Morty API to create character cards that
                display some information about each character. I also added a
                picture for each character. For this app I used Next.js, React,
                and Sass.
              </p>
              <Link
                className="portfolio_link"
                href="https://github.com/AKDavis3000/rm-project.git">
                GitHub Files
              </Link>
            </div>
          </div>
          {/* three */}
          <div className="p_grid-items p_grid-item3">
            <Image
              src="/img/ted.png"
              alt="cat"
              width={300}
              height={200}
              className="portfolio_pics"
            />
            <div className="p_wrapper">
              <p className="pgi3_p1">
                <Link
                  className="portfolio_link"
                  href="ted-app-rho.vercel.app">
                  Teduhan
                </Link>
              </p>
              <p className="pgi3_p2">
                I utilized Next.js, React, and Sass to create this real estate
                website. The design came from Firman Jabbar and I was given
                permission to code it. I will provide the link to both my github
                account and the link to Firman&apos;s account on dribbble.com.
              </p>
              <Link
                className="portfolio_link"
                href="https://github.com/AKDavis3000/ted-app.git">
                GitHub files
              </Link>
              <br />
              <Link
                className="portfolio_link"
                href="https://dribbble.com/shots/19414991-teduhan-Property-Sale-Landing-Page?utm_source=Clipboard_Shot&utm_campaign=firmanjabbar&utm_content=teduhan%20%E2%80%93%20Property%20Sale%20Landing%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=firmanjabbar&utm_content=teduhan%20%E2%80%93%20Property%20Sale%20Landing%20Page&utm_medium=Social_Share">
                Firman Jabbar&apos;s account
              </Link>
            </div>
          </div>
          {/* four */}
          <div className="p_grid-items p_grid-item4">
            <Image
              src="/img/tt.png"
              alt="cat"
              width={300}
              height={200}
              className="portfolio_pics"
            />
            <div className="p_wrapper">
              <p className="pgi4_p1">
                <Link
                  href="turnedtable.vercel.app"
                  className="portfolio_link">
                  Turned Table
                </Link>
              </p>
              <p className="pgi4_p2">
                I created a landing page for a furniture website. For this site
                I also used Next.js, React, and Sass.
              </p>
              <Link
                className="portfolio_link"
                href="https://github.com/AKDavis3000/company-app.git">
                GitHub files
              </Link>
            </div>
          </div>
          {/* five */}
          <div className="p_grid-items p_grid-item5">
            <Image
              src="/img/scramble.png"
              alt="cat"
              width={300}
              height={200}
              className="portfolio_pics"
            />
            <div className="p_wrapper">
              <p className="pgi5_p1">
                <Link
                  className="portfolio_link"
                  href="">
                  Word Scramble
                </Link>
              </p>
              <p className="pgi5_p2">
                This game is just like Anagrams on iMessage Games. It&apos;s my
                favorite game which is why I decided to make a clone. For this I
                used Next.js, React, and Sass. You have to find as many words as
                you can in 1 minute.
                <span className="underline">
                  {' '}
                  This game is currently under construction but feel free to
                  view the code on my github which is linked below.
                </span>
              </p>
              <Link
                className="portfolio_link"
                href="https://github.com/AKDavis3000/word-scramble.git">
                Github files
              </Link>
            </div>
          </div>
        </div>
        {/* six */}
        <div className="p_grid-items p_grid-item6">
          <div className="pgi6_line"></div>
        </div>
      </section>

      <div className="portfolio_footer">
        <div className="triangle2"></div>
        <div className="portfolio_block"></div>
      </div>
    </>
  );
}
