/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro_c490a007.mjs';
import 'html-escaper';
import 'clsx';
import { g as getLaunches, $ as $$BackButton, a as $$Layout } from './_id__69ca02b6.mjs';
/* empty css                            */import 'react/jsx-runtime';
import 'react';
/* empty css                          */
const $$Astro$4 = createAstro();
const $$NextPageButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$NextPageButton;
  const { page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a rel="noopener noreferrer" class="w-fit bg-gradient text-white font-bold hover:scale-105 py-2 px-4 rounded-full"${addAttribute(page, "href")} data-astro-cid-htfk2gst>next page</a>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/components/buttons/NextPageButton.astro", void 0);

const $$Astro$3 = createAstro();
const $$PrevPageButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PrevPageButton;
  const { page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="w-fit bg-gradient text-white font-bold hover:scale-105 py-2 px-4 rounded-full"${addAttribute(page, "href")} data-astro-cid-hptews6x>Prev page</a>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/components/buttons/PrevPageButton.astro", void 0);

const $$Astro$2 = createAstro();
const $$LaunchCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LaunchCard;
  const { id, name, img, launch_date_utc, launch_success } = Astro2.props;
  console.log("\u{1F987} ~ file: LaunchCard.astro:13 ~ img:", img);
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-3p6dibxh><a${addAttribute(`/launches/${id}`, "href")} class="card-link" data-astro-cid-3p6dibxh><img class="card-image"${addAttribute(img, "src")}${addAttribute(name, "alt")} data-astro-cid-3p6dibxh><div class="card-content" data-astro-cid-3p6dibxh><div class="info" data-astro-cid-3p6dibxh><h2 class="text-accent text-md md:text-xl" data-astro-cid-3p6dibxh>${name}</h2><p class="text-sm md:text-md text-center" data-astro-cid-3p6dibxh>${launch_date_utc ? new Date(launch_date_utc).toLocaleDateString() : "No date"}</p></div><div class="status" data-astro-cid-3p6dibxh>${launch_success ? renderTemplate`<p class="success" data-astro-cid-3p6dibxh>Success</p>` : renderTemplate`<p class="failure" data-astro-cid-3p6dibxh>Failure</p>`}</div></div></a></li>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/components/cards/LaunchCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$LauncheList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LauncheList;
  const { list } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="launch-list" data-astro-cid-cqcqsrpr>${list.map((rocket) => renderTemplate`${renderComponent($$result, "LaunchCard", $$LaunchCard, { "id": rocket.id, "img": rocket.links.patch.small, "name": rocket.name, "launch_date_utc": rocket.date_utc, "launch_success": rocket.success, "data-astro-cid-cqcqsrpr": true })}`)}</ul>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/components/list/LauncheList.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths({ paginate }) {
  const launches = await getLaunches();
  return paginate(launches, { pageSize: 8 });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Launches", "data-astro-cid-kkde7dkx": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="bg-gradient py-8" data-astro-cid-kkde7dkx><div class="container w-2/3 mx-auto text-start" data-astro-cid-kkde7dkx>${renderComponent($$result2, "BackButton", $$BackButton, { "data-astro-cid-kkde7dkx": true })}<h1 class="mt-4 text-4xl font-bold text-white" data-astro-cid-kkde7dkx>Launches</h1><p class="mt-4 first-letter:text-lg text-slate-300" data-astro-cid-kkde7dkx>
Here you can find all the launches.
</p><h2 class="mt-2 text-white text-md " data-astro-cid-kkde7dkx>Page ${page.currentPage}</h2></div></div><div class="mt-4" data-astro-cid-kkde7dkx>${renderComponent($$result2, "LauncheList", $$LauncheList, { "list": page.data, "data-astro-cid-kkde7dkx": true })}</div><div class="flex justify-evenly mb-20" data-astro-cid-kkde7dkx>${renderComponent($$result2, "PrevPageButton", $$PrevPageButton, { "page": page.url.prev, "data-astro-cid-kkde7dkx": true })}${renderComponent($$result2, "NextPageButton", $$NextPageButton, { "page": page.url.next, "data-astro-cid-kkde7dkx": true })}</div>` })}`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/launches/[page].astro", void 0);

const $$file = "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/launches/[page].astro";
const $$url = "/launches/[page]";

export { $$page as default, $$file as file, getStaticPaths, $$url as url };
