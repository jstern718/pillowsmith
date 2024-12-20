import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getPages(query) {
  await fakeNetwork(`getPages:${query}`);
  let pages = await localforage.getItem("Pages");
  if (!pages) pages = [];
  if (query) {
    pages = matchSorter(pages, query, { keys: ["first", "last"] });
  }
  return pages.sort(sortBy("last", "createdAt"));
}

export async function createPage() {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let page = { id, createdAt: Date.now() };
  let pages = await getPages();
  pages.unshift(page);
  await set(pages);
  return page;
}

export async function getPage(id) {
  await fakeNetwork(`page:${id}`);
  let pages = await localforage.getItem("Pages");
  let page = pages.find(page => page.id === id);
  return page ?? null;
}

export async function updatePage(id, updates) {
  await fakeNetwork();
  let pages = await localforage.getItem("Pages");
  let page = pages.find(page => page.id === id);
  if (!page) throw new Error("No page found for", id);
  Object.assign(page, updates);
  await set(Pages);
  return page;
}

export async function deletePage(id) {
  let pages = await localforage.getItem("Pages");
  let index = pages.findIndex(page => page.id === id);
  if (index > -1) {
    pages.splice(index, 1);
    await set(Pages);
    return true;
  }
  return false;
}

function set(pages) {
  return localforage.setItem("Pages", pages);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}