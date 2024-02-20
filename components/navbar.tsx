"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed z-10 w-full">
      <div className={`flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 backdrop-blur-lg bg-white bg-opacity-50 ${isOpen ? 'hidden md:flex' : ''}`}>
        <Link href="/" className="flex flex-row items-center">
          <Image src="/LogoNoBG.png" alt="Logo" height={40} width={40} /><span>Sprout Circle</span>
        </Link>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-3">
            <a href="/#about" className="hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium">About</a>
            <a href="/#team" className="hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium">Team</a>
            <a href="/#projects" className="hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium">Projects</a>
            <Link href="/contact" className="hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium">Contact</Link>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className={`backdrop-blur-lg bg-white bg-opacity-50 overflow-hidden absolute top-0 inset-x-0 transition transform origin-top-right md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex flex-row items-center" onClick={() => setIsOpen(!isOpen)}>
            <Image src="/LogoNoBG.png" alt="Logo" height={40} width={40} /><span>Sprout Circle</span>
          </Link>
          <div className="-mr-2">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="px-5 pb-3 space-y-1">
          <a href="/#about" onClick={() => setIsOpen(!isOpen)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</a>
          <a href="/#team" onClick={() => setIsOpen(!isOpen)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Team</a>
          <a href="/#projects" onClick={() => setIsOpen(!isOpen)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Projects</a>
          <Link href="/contact" onClick={() => setIsOpen(!isOpen)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</Link>
        </div>
      </div>
    </nav>
  );
}