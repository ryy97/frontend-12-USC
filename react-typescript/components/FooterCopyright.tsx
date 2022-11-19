import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterCopyrightProps {
  footerLogo: string;
  spaceBottomClass: string;
  colorClass: string;
}

const FooterCopyright = ({
  footerLogo,
  spaceBottomClass,
  colorClass,
}: FooterCopyrightProps) => {
  return (
    <div
      className={`copyright ${spaceBottomClass ? spaceBottomClass : ""} ${
        colorClass ? colorClass : ""
      }`}
    >
      <div className="footer-logo">
        <Link href="/">
          <Image alt="" src={footerLogo} width={79} height={75} />
        </Link>
      </div>
      <p>
        © 2020{" "}
        <a href="//hasthemes.com" rel="noopener noreferrer" target="_blank">
          Wood By Nature
        </a>
        .<br /> All Rights Reserved
      </p>
    </div>
  );
};

export default FooterCopyright;
