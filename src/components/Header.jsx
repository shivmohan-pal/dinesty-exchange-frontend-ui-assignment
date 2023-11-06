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
            className="mr-5 w-10 sm:w-auto"
            src={companyLogo}
            height={'1rem'}
            width={'1rem'}
            alt='logo'
          />
        </div>
        <div className="tab:hidden">
          {menuOpen ?
            <CloseRounded className="text-4xl" onClick={handleMenu} />
            : <MenuRounded className="text-4xl" onClick={handleMenu} />
          }
        </div>
        <div className={`${menuOpen ? 'flex' : 'hidden'} top-[63px] sm:top-[91px] gap-5 px-7 pb-7 max-[786px]:w-full tab:p-0 shadow-md tab:shadow-none bg-white absolute flex-col tab:flex-row tab:static tab:flex tab:flex-auto tab:justify-between tab:items-center`}>
          <nav className="flex gap-3 tab:gap-6 flex-col text-center tab:items-center tab:flex-row text-slate-600" onClick={handleMenu}>
            <a className="text-md rounded-3xl font-medium hover:text-slate-900 max-[786px]:hover:shadow-md max-[786px]:p-2" href="#emotions">Emotions</a>
            <a className="text-md rounded-3xl font-medium hover:text-slate-900 max-[786px]:hover:shadow-md max-[786px]:p-2" href="#meet-app">Manifesto</a>
            <a className="text-md rounded-3xl font-medium hover:text-slate-900 max-[786px]:hover:shadow-md max-[786px]:p-2" href="#self-test">Self-awareness test</a>
            <a className="text-md rounded-3xl font-medium hover:text-slate-900 max-[786px]:hover:shadow-md max-[786px]:p-2" href="#vacancies">Work With Us</a>
          </nav>
          <button className="px-4 py-3 bg-black text-white text-sm font-bold rounded-3xl border-black border-x border-y hover:bg-white hover:text-black hover:transition-all duration-500 active:opacity-40">Download app</button>
        </div>
      </div>
    </header>
  );
}

export default Header;