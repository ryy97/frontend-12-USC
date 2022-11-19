import Link from "next/link";
import Image from "next/image";
import React from "react";

interface LogoProps {
  imageUrl: string;
  logoClass: string;
}

const Logo = ({ imageUrl, logoClass }: LogoProps) => {
  return (
    <div className={`${logoClass ? logoClass : ""}`}>
      <Link href="/">
        <Image alt="" src={imageUrl} width={39.5} height={37.5} />
      </Link>
    </div>
  );
};

export default Logo;
