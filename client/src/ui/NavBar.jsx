import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { RiCloseLine, RiMenu2Line } from 'react-icons/ri';
// import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Logo from './Logo';

// Navigation items
export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

const NavBar = () => {
  const [isHamburger, setIsHamburger] = useState(false);
  const pathname = useLocation()

  const toggler = () => {
    setIsHamburger(!isHamburger);
  };

  return (
    <div className="max-w-[100rem] w-full bg-white fixed top-0 z-50">
      {/* Main Navigation */}
      <div className="w-full md:px-4 shadow-xl">
        <div className="w-full h-18 flex justify-between items-center p-2 lg:px-3">
          {/* Logo */}
          <div className="flex">
            <Link href="/">
              <Logo
                className="text-black rounded-xl"
                src="/Logo2.jpg"
                alt="logo For Nav"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center pr-2 gap-6">
            <div className="text-black flex items-center gap-6">
              {navItems.map((item) => (
                <span key={item.path}>
                  <Link
                    href={item.path}
                    className={`hover:text-primary transition-colors ${
                      pathname === item.path
                        ? 'text-primary text-xl font-medium border-b-2 border-primary'
                        : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </span>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl shadow-lg transition"
            >
              <Link href="/bookappointment">Book a Slot</Link>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggler}>
              {isHamburger ? (
                <RiCloseLine className="text-cross text-xl cursor-pointer" />
              ) : (
                <RiMenu2Line className="text-primary text-xl cursor-pointer" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isHamburger && (
        <div className="fixed inset-0 z-0" onClick={toggler}>
          <div
            className="fixed top-10 right-0 w-full bg-white shadow-lg px-6"
            onClick={toggler}
          >
            <nav className="flex flex-col py-4 items-center justify-center gap-6">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} onClick={toggler}>
                  <span
                    className={`text-lg w-full flex px-4 justify-center items-center transition-colors py-2 ${
                      pathname === item.path
                        ? 'bg-arrow font-medium rounded-3xl'
                        : 'hover:bg-primaryDull hover:text-white rounded-3xl'
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
