import React from 'react';
import Link from 'next/link';

export default function Links() {
  return (
    <div>
        <Link href="/"> <a> Home </a> </Link>
        <Link href="/details"> <a>Detail</a> </Link>
    </div>
  )
}
