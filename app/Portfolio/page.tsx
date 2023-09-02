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
              src="/img/cat.jpg"
              alt="cat"
              width={300}
              height={200}
            />
            <p className="pgi2_p1">Name Here</p>
            <p className="pgi2_p2">Description here</p>
            <Link href="/"> github link goes here</Link>
          </div>
          {/* three */}
          <div className="p_grid-items p_grid-item3">
            <Image
              src="/img/cat.jpg"
              alt="cat"
              width={300}
              height={200}
            />
            <p className="pgi3_p1">Name Here</p>
            <p className="pgi3_p2">description</p>
            <Link href="/"> github link goes here</Link>
          </div>
          {/* four */}
          <div className="p_grid-items p_grid-item4">
            <Image
              src="/img/cat.jpg"
              alt="cat"
              width={300}
              height={200}
            />
            <p className="pgi4_p1">Name Here</p>
            <p className="pgi4_p2">description</p>
            <Link href="/"> github link goes here</Link>
          </div>
          {/* five */}
          <div className="p_grid-items p_grid-item5">
            <Image
              src="/img/cat.jpg"
              alt="cat"
              width={300}
              height={200}
            />
            <p className="pgi5_p1">Name Here</p>
            <p className="pgi5_p2">description</p>
            <Link href="/"> github link goes here</Link>
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
