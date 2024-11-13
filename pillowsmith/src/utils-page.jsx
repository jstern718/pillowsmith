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

