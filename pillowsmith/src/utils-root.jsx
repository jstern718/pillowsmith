import { redirect } from "react-router-dom";
import { getPages, createPage } from "./pages.js"


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