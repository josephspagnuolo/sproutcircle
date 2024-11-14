"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed z-10 w-full backdrop-blur-lg bg-white bg-opacity-50 transition-all ease-in-out duration-500">
      <div className={`flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 ${isOpen ? 'md:flex' : ''}`}>
        <Link href="/" onClick={() => setIsOpen(false)} className="flex flex-row items-center">
          <Image src="/LogoNoBG.png" alt="Logo" height={40} width={40} /><span>Sprout Circle</span>
        </Link>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-3">
            <a href="/#about" className="hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium">About</a>
            <a href="/#services" className="hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium">Services</a>
            <a href="/#projects" className="hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium">Projects</a>
            <a href="/#team" className="hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium">Team</a>
            <Link href="/contact" className="bg-[#799e29] hover:bg-[#556b2f] transition-colors px-4 py-2 rounded-md text-sm font-medium text-white">Contact</Link>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 active:bg-gray-700 active:text-white">
            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className={`overflow-hidden inset-x-0 transition-all ease-in-out duration-500 ${isOpen ? 'opacity-100 h-[236px]' : 'opacity-0 h-0'} origin-top-right md:hidden`}>
        <div className="px-5 pb-5 space-y-1">
          <a href="/#about" onClick={() => setIsOpen(false)} className="text-center block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</a>
          <a href="/#services" onClick={() => setIsOpen(false)} className="text-center block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Services</a>
          <a href="/#team" onClick={() => setIsOpen(false)} className="text-center block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Team</a>
          <a href="/#projects" onClick={() => setIsOpen(false)} className="text-center block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Projects</a>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-center block px-3 py-2 rounded-md text-base font-medium text-white bg-[#799e29] hover:bg-[#556b2f]">Contact</Link>
        </div>
      </div>
    </nav>
  );
}