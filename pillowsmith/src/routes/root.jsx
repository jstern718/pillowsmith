import { Outlet,
        NavLink,
        useLoaderData,
        Form,
        redirect,
        useNavigation,
        useSubmit,
    } from "react-router-dom";
import CatImageMobile from "../components/CatImageMobile";

import React, { useEffect, useState } from "react";

export default function Root() {
    const { pages, q } = useLoaderData();
    const navigation = useNavigation();
    const submit = useSubmit();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const searching =
        navigation.location &&
        new URLSearchParams(navigation.location.search).has(
            "q"
        );

    // useEffect(() => {
    //     document.getElementById("q").value = q;
    //   }, [q]);

    return (
      <>
        <div id="sidebar">
            <div className="form-div">
                {/* <Form id="search-form" role="search">
                    <input
                        id="q"
                        className={searching ? "loading" : ""}
                        aria-label="Search pages"
                        placeholder="Search"
                        type="search"
                        name="q"
                        defaultValue={q}
                        onChange={(event) => {
                            const isFirstSearch = q == null;
                            submit(event.currentTarget.form, {
                                replace: !isFirstSearch,
                            });
                        }}
                    />
                    <div
                        id="search-spinner"
                        aria-hidden
                        hidden={!searching}
                    />
                    <div
                        className="sr-only"
                        aria-live="polite"
                    >
                    </div>
                </Form> */}
                <h2 className="sidebarTitle">PILLOWSMITH</h2>
            </div>
            <nav>
                <div className="mobile-header">
                    <div className="hamburger-holder">
                        <div className="HAMBURGER-ICON space-y-2"
                                onClick={() => setIsNavOpen((prev) => !prev)}>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        </div>
                    </div>
                    <CatImageMobile />
                </div>

                <div className={isNavOpen ? "showMenuNav wide-open" : "hideMenuNav wide-open"}>
                    <div className="menu-div">
                        <div className="x-div absolute top-8 right-8"
                            onClick={() => setIsNavOpen(false)}>
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
                        <ul>
                            <li key="Home" className="hide1">
                                <NavLink
                                to={`/`}
                                className={({isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                    ? "pending"
                                    : ""
                                }
                                reloadDocument>
                                    Home
                                </NavLink>
                            </li>
                            <li key="MostPopular" className="hide1">
                                <NavLink
                                to={`pages/most-popular`}
                                className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                    ? "pending"
                                    : ""
                                }
                                reloadDocument>
                                    Popular Pillows
                                </NavLink>
                            </li>
                            <li key="Thin" className="hide1">
                                <NavLink
                                to={`pages/thin`}
                                className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                    ? "pending"
                                    : ""
                                }
                                reloadDocument>
                                    Low Profile Pillows
                                </NavLink>
                            </li>
                            <li key="CoolingPillows" className="hide1">
                                <NavLink
                                to={`pages/cooling`}
                                className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                    ? "pending"
                                    : ""
                                }
                                reloadDocument>
                                    Cooling Pillows
                                </NavLink>
                            </li>
                            <li key="MemoryFoam" className="hide1">
                                <NavLink
                                to={`pages/memory-foam`}
                                className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                    ? "pending"
                                    : ""
                                }
                                reloadDocument>
                                    Memory Foam Pillows
                                </NavLink>
                            </li>
                            <li key="MemoryFoam" className="hide1">
                                <NavLink
                                to={`pages/memory-foam`}
                                className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                    ? "pending"
                                    : ""
                                }
                                reloadDocument>
                                    Shreddded Memory Foam
                                </NavLink>
                            </li>
                            <li key="BestPillowcases" className="hide1">
                                <NavLink
                                to={`pages/best-pillowcases`}
                                className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                    ? "pending"
                                    : ""
                                }
                                reloadDocument>
                                    Pillowcases
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div id="detail"
            className={navigation.state === "loading" ? "loading" : ""}>
            <Outlet />
        </div>
      </>
    );
}