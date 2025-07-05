import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import logo from "@/assets/images/logo-light.png";
import { AlignRight, Eclipse, HandMetal, Sun, X } from 'lucide-react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  const handleNavClick = (section) => {
    setIsActive(section);
    closeMenu();
  };

  return (
    <>
      <nav className={`fixed w-full py-4 px-4 md:px-8 z-50 transition duration-500  ${isScroll ? 'bg-sky-600' : 'bg-gradient-to-tl from-sky-500 to-sky-700'}`}>
        <div className='container mx-auto flex items-center justify-between'>
          <a href='#top' className='flex items-center' onClick={() => setIsActive('home')}>
            <Image
              alt='Jemson Logo'
              src={logo}
              width={145}
              height={70}
              className='w-28 cursor-pointer mr-14'
            />
          </a>
          <ul className='hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3'>
            <li className={isActive === 'home' ? 'transform transition duration-500 scale-110' : 'transform transition duration-500 hover:scale-110'} onClick={() => setIsActive('home')}>
              <a className={isActive === 'home' ? 'font-montserrat text-amber-200' : 'font-montserrat text-white hover:text-amber-200'} href='#top'>Home</a>
            </li>
            <li className={isActive === 'about' ? 'transform transition duration-500 scale-110' : 'transform transition duration-500 hover:scale-110'} onClick={() => setIsActive('about')}>
              <a className={isActive === 'about' ? 'font-montserrat text-amber-200' : 'font-montserrat text-white hover:text-amber-200'} href='#about'>About Me</a>
            </li>
            <li className={isActive === 'work' ? 'transform transition duration-500 scale-110' : 'transform transition duration-500 hover:scale-110'} onClick={() => setIsActive('work')}>
              <a className={isActive === 'work' ? 'font-montserrat text-amber-200' : 'font-montserrat text-white hover:text-amber-200'} href='#work'>My Work</a>
            </li>
            <li className={isActive === 'contact' ? 'transform transition duration-500 scale-110' : 'transform transition duration-500 hover:scale-110'} onClick={() => setIsActive('contact')}>
              <a className={isActive === 'contact' ? 'font-montserrat text-amber-200' : 'font-montserrat text-white hover:text-amber-200'} href='#contact'>Contact me</a>
            </li>
          </ul>
          <div className='flex items-center gap-4'>
            <a className='hidden font-montserrat lg:flex items-center gap-3 px-8 py-1.75 border-2 border-orange-300 rounded-full ml-4 text-white hover:bg-orange-300 duration-200' href='#contact' onClick={() => setIsActive('contact')}>
              Say hello <HandMetal />
            </a>
            <button onClick={() => setIsDarkMode(prev => !prev)} className="cursor-pointer" aria-label="Toggle dark mode">
              {isDarkMode ? <Eclipse color='white' /> : <Sun color='white' />}
            </button>
            <button className='block md:hidden ml-3' onClick={openMenu} aria-label="Open menu">
              <AlignRight color='white' />
            </button>
          </div>
        </div>
        {/* Mobile Side Menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-sky-700 transition-transform duration-500 ${menuOpen ? 'right-0' : '-right-64'}`}
          style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(16rem)' }}
          aria-label="Mobile navigation"
        >
          <div className='cursor-pointer absolute right-6 top-6' onClick={closeMenu} aria-label="Close menu">
            <X color='white'/>
          </div>
          <li><a className='font-montserrat text-white' onClick={() => handleNavClick('home')} href='#top'>Home</a></li>
          <li><a className='font-montserrat text-white' onClick={() => handleNavClick('about')} href='#about'>About Me</a></li>
          <li><a className='font-montserrat text-white' onClick={() => handleNavClick('work')} href='#work'>My Work</a></li>
          <li><a className='font-montserrat text-white' onClick={() => handleNavClick('contact')} href='#contact'>Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar