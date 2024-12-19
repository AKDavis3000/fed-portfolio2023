import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Project({
  src,
  alt,
  siteHref,
  siteName,
  siteDesc,
  gitHref,
}) {
  return (
    <>
      <div className="p_grid-items">
        <Image
          src={src}
          alt={alt}
          width={200}
          height={200}
          className="portfolio_pics"
        />
      </div>
      <div className="p_wrapper">
        <p>
          <Link
            href={siteHref}
            className="portfolio_link">
            {siteName}
          </Link>
        </p>
        <p>{siteDesc}</p>
        <Link
          href={gitHref}
          className="portfolio_link">
          GitHub Files
        </Link>
      </div>
    </>
  );
}
