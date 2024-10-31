import React, { useState } from 'react';
import './App.css';
import pillowsmithImage from './assets/pillowsmith.jpg';

export default function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
        {/* <div className="flex items-center justify-between pb-6 -mt-3">
            <nav>
                <section className="MOBILE-MENU flex md:hidden">
                  <div className="flex bg-gray-200 -ml-10 pl-5 pr-20 border-solid border-1 border-gray-300 shadow-lg shadow-gray-600/65">
                    <div
                        className="HAMBURGER-ICON space-y-2 ml-5 mt-8"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>
                    <div>
                        <img src={pillowsmithImage} alt="pillowsmith image" className="ml-20 w-5/6"/>
                    </div>
                  </div>
                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                        className="absolute top-0 right-0 px-8 py-8"
                        onClick={() => setIsNavOpen(false)}
                        >
                        <svg
                            className="h-8 w-8 text-gray-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[250px]">
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <a href="/fluffiest">Our Recommendations</a>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <a href="/lowest">Most Popular</a>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <a href="/most-down">Best Pillowcases</a>
                        </li>
                        </ul>
                    </div>
                </section>
            </nav>

        </div>
        <style>{`
            .hideMenuNav {
                display: none;
            }
            .showMenuNav {
                display: block;
                position: absolute;
                width: 100%;
                height: 100vh;
                top: 0;
                left: 0;
                background: white;
                z-index: 10;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
            }
        `}</style> */}
    </>
  );
}




