import React from 'react';
import LogoFeelit from '../../images/logo_feelit.png';

function Navbar() {
    return (
      <nav className="bg-white shadow-sm p-3 fixed top-0 left-0 w-full">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-black font-bold">
              <img src={LogoFeelit} className="Logo h-10" alt="logo"/>
            </div>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="font-inter text-gray-800 hover:text-gray-300">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="font-inter text-gray-800 hover:text-gray-300">
                  Glossaire
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};
  
export default Navbar;
  