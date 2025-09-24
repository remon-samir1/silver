import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/silver-logo.png' width={40} height={43} alt='silver'/>
    </Link>
  );
}

export default Logo;
