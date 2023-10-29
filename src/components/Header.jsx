"use client";
import Image from "next/image";
import companyLogo from "../../public/ahead-logo.png";
import { CloseRounded, MenuRounded } from "@mui/icons-material";
import { useState } from "react";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="fixed w-full px-5 py-3 bg-white shadow-md z-10">
      <div className="flex items-center justify-around">
        <div className="flex-auto">
          <Image
            className="mr-5"
            src={companyLogo}
            height={'1rem'}
            width={'1rem'}
            alt='logo'
          />
        </div>
        <div className="min-[786px]:hidden">
          {menuOpen ?
            <CloseRounded className="text-4xl" onClick={handleMenu} />
            : <MenuRounded className="text-4xl" onClick={handleMenu} />
          }
        </div>
        <div className={`${menuOpen ? 'flex' : 'hidden'} top-[91px] gap-5 px-7 pb-7 max-[786px]:w-full min-[786px]:p-0 shadow-md min-[786px]:shadow-none bg-white absolute flex-col min-[786px]:flex-row min-[786px]:static min-[786px]:flex min-[786px]:flex-auto min-[786px]:justify-between min-[786px]:items-center`}>
          <nav className="flex gap-3 min-[786px]:gap-6 flex-col text-center min-[786px]:items-center min-[786px]:flex-row text-slate-600">
            <a className="text-md rounded-3xl font-medium hover:text-slate-900 max-[786px]:hover:shadow-md max-[786px]:p-2" href="#">Emotions</a>
            <a className="text-md rounded-3xl font-medium hover:text-slate-900 max-[786px]:hover:shadow-md max-[786px]:p-2" href="#">Manifesto</a>
            <a className="text-md rounded-3xl font-medium hover:text-slate-900 max-[786px]:hover:shadow-md max-[786px]:p-2" href="#">Self-awareness test</a>
            <a className="text-md rounded-3xl font-medium hover:text-slate-900 max-[786px]:hover:shadow-md max-[786px]:p-2" href="#">Work With Us</a>
          </nav>
          <button className="px-4 py-3 bg-black text-white text-sm font-bold rounded-3xl border-black border-x border-y hover:bg-white hover:text-black hover:transition-all duration-500 active:opacity-40">Download app</button>
        </div>
      </div>
    </header>
  );
}

export default Header;