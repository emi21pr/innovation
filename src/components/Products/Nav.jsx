import React from 'react'
import logo from "/images/logo.svg";
function Nav() {
    return (
        <nav className="py-5 pl-14 border-b justify-center items-center gap-14 flex w-full sticky top-0 bg-[#fcfcfc] z-50">
      <div className="items-center gap-10 flex">
        <a className="text-center text-sm nav-link" href="/">
          Inicio
        </a>
      </div>
      <a href="/">
        <img src={logo} alt="FlawlessLook Logo" />
      </a>
      <div className="items-center gap-10 flex">
        <a className="text-center text-sm nav-link" href="/collection-makeup">
          Colecciones
        </a>
      </div>
    </nav>
    )
}

export default Nav