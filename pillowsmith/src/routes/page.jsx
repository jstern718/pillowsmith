import { Form, useLoaderData, useFetcher } from "react-router-dom";

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