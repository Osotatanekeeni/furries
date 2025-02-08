import { useState } from 'react'
import Logo from "../assets/Images/Logo.svg";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlinePerson } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='flex items-center justify-between p-4 px-16 text-white' style={{ fontFamily: "Urbanist"}}>
        {/* Hamburger Menu */}
        <div className='sm:hidden' onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      {/* Logo */}
      <div className='flex w-full flex-col items-center justify-between rounded-b-xl border-b-0 p-4 sm:flex-row sm:border-b-2'>
      <div>
        <img src={Logo} alt='Logo' className='h-8' />
      </div>

      {/* Navlinks */}
      <ul className={`space-x-0 p-2 sm:flex sm:space-x-8 sm:p-0  ${isOpen ? 'block' : 'hidden'} text-left sm:block`}>
        <li><a  href='/shop'>Shop</a></li>
        <li><a  href='/about-us'>About Us</a></li>
        <li><a href='/faq'>FAQ</a></li>
        <li><a href='/contact-us'>Contact Us</a></li>
        <li><a href='/my-account'>My Account</a></li>
      </ul>

      {/* Icons */}
      <div className='hidden space-x-8 sm:flex'>
        <a href='/search'><IoMdSearch /></a>
        <a href='/cart'><MdOutlineShoppingCart /></a>
        <a href='/wishlist'><FaRegHeart /></a>
        <a href='/profile'><MdOutlinePerson /></a>
      </div>
      </div>
    </nav>
  )
}

export default Navigation