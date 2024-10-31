import { Outlet,
        Link,
        NavLink,
        useLoaderData,
        Form,
        redirect,
        useNavigation,
        useSubmit,
    } from "react-router-dom";
import { getPages, createPage } from "../pages";

import { useEffect } from "react";

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
          <h1>React Router Pages</h1>
          <div>
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
            <Form method="post">
                <button type="submit">New</button>
            </Form>
          </div>
          <nav>
            {pages.length ? (
                <ul>
                {pages.map((page) => (
                    <li key={page.id}>
                    <NavLink
                    to={`pages/${page.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                    >
                        <Link to={`pages/${page.id}`}>
                            {page.first || page.last ? (
                            <>
                                {page.first} {page.last}
                            </>
                            ) : (
                            <i>No Name</i>
                            )}{" "}
                            {page.favorite && <span>★</span>}
                        </Link>
                    </NavLink>
                    </li>
                ))}
                </ul>
            ) : (
                <p>
                <i>No pages</i>
                </p>
            )}
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