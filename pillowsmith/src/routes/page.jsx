import { Form, useLoaderData, useFetcher } from "react-router-dom";
import { getPage, updatePage } from "../pages";

export async function loader({ params }) {
    const page = await getPage(params.pageId);
    if (!page) {
        throw new Response("", {
          status: 404,
          statusText: "Not Found",
        });
    }
        return { page };
}


export async function action({ request, params }) {
    const formData = await request.formData();
    return updatePage(params.pageId, {
      favorite: formData.get("favorite") === "true",
    });
  }

export default function Page() {
  const { page } = useLoaderData();

  return (
    <div id="page">
      <div>
        <img
          key={page.avatar}
          src={
            page.avatar ||
            `https://robohash.org/${page.id}.png?size=200x200`
          }
        />
      </div>

      <div>
        <h1>
          {page.first || page.last ? (
            <>
              {page.first} {page.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite page={page} />
        </h1>

        {page.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${page.twitter}`}
            >
              {page.twitter}
            </a>
          </p>
        )}

        {page.notes && <p>{page.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ page }) {
  const fetcher = useFetcher();

  const favorite = fetcher.formData
    ? fetcher.formData.get("favorite") === "true"
    : page.favorite;

  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}