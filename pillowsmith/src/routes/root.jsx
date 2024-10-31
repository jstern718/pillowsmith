import { Outlet,
        NavLink,
        useLoaderData,
        Form,
        redirect,
        useNavigation,
        useSubmit,
    } from "react-router-dom";
import { getPages, createPage } from "../pages";
import pillowsmithImage from "../assets/Pillowsmith.png"

import { useEffect } from "react";
import NavLinkWithColor from "../NavLinkWithColor";
import Nav from "../Nav";

let OurRecommendations = {};
const pageArray = [OurRecommendations]

export async function action() {
    const page = await createPage();
    return redirect(`/pages/${page.id}/edit`);
}

export async function loader({request}) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const pages = await getPages(q);
    return { pages, q };
}

export default function Root() {
    const { pages, q } = useLoaderData();
    const navigation = useNavigation();
    const submit = useSubmit();

    const searching =
        navigation.location &&
        new URLSearchParams(navigation.location.search).has(
            "q"
        );

    useEffect(() => {
        document.getElementById("q").value = q;
      }, [q]);

    return (
      <>
        <div id="sidebar">
          <div className="form-div">
            <Form id="search-form" role="search">
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
              ></div>
            </Form>
          </div>
          <nav>
                <div className="hamburger-holder">
                    <div className="HAMBURGER-ICON space-y-2"
                            onClick={() => setIsNavOpen((prev) => !prev)}>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>
                </div>
                <div className="image-div">
                    <img src={pillowsmithImage} alt="pillowsmith image" className="cat-image"/>
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
                        >
                            Home
                        </NavLink>
                    </li>
                    <li key="OurRecommendations" className="hide1">
                        <NavLink
                        to={`pages/our-recommendations`}
                        className={({isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                            ? "pending"
                            : ""
                        }
                        >
                            Our Recommendations
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
                        >
                            Best Pillowcases
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
                        >
                            Most Popular
                        </NavLink>
                    </li>
                    <li key="Blog" className="hide1">
                        <NavLink
                        to={`pages/blog`}
                        className={({isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                            ? "pending"
                            : ""
                        }
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>
          </nav>
        </div>
        <div
            id="detail"
            className={
                navigation.state === "loading" ? "loading" : ""
            }
        >
            <Outlet />
        </div>
      </>
    );
  }