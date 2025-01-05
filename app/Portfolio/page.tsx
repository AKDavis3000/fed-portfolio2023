import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Project from '../Components/Project';

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
          <Project
            src="/img/rm.png"
            alt="rick and morty website"
            siteHref="https://rm-phi.vercel.app/"
            siteName="Rick and Morty"
            siteDesc="I used the Rick & Morty API to create character cards that
                display some information about each character. I also added a
                picture for each character. "
            gitHref="https://github.com/AKDavis3000/rm-project.git"
          />

          {/* three */}
          <Project
            src="/img/ted.png"
            alt="teduhan app"
            siteHref="https://ted-app-rho.vercel.app/"
            siteName="Teduhan"
            siteDesc=" I utilized Next.js, React, and Sass to create this real estate
            website."
            gitHref="https://github.com/AKDavis3000/ted-app.git"
          />

          {/* four */}
          <Project
            src="/img/tt.png"
            alt="turned table website"
            siteHref="https://turnedtable.vercel.app/"
            siteName="Turned Table"
            siteDesc="I created a landing page for a furniture website. For this site
            I also used Next.js, React, and Sass."
            gitHref="https://github.com/AKDavis3000/company-app.git"
          />

          {/* five */}
          <Project
            src="/img/scramble.png"
            alt="word scramble"
            siteHref="https://word-scramble-eight.vercel.app/"
            siteName="Word Scramble"
            siteDesc="This game is similar to Anagrams on iMessage Games. You have to find as many words as
            you can in 1 minute. I am constantly working on improving this game as there are several errors."
            gitHref="https://github.com/AKDavis3000/word-scramble.git"
          />
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
