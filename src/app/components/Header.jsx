import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.jpeg"
            alt="logo jurassic"
            width={40}
            height={40}
            className="header-logo"
          />
          <h1 className="text-2xl font-bold">TecnoShare Movies</h1>
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/peliculas" className="hover:text-gray-400">
              Peliculas
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
