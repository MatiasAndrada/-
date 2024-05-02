/* empty css                        */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent, e as renderTransition } from './astro/server_CY5Ge0ZJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_B7-cSiVA.mjs';
import { $ as $$SectionPage } from './SectionPage_CsYTRzGl.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_DomdrVpG.mjs';
/* empty css                         */
/* empty css                         */
import { f as getLaunches } from './api_DCrssyL_.mjs';

const $$Astro$2 = createAstro();
const $$LaunchCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LaunchCard;
  const { id, name, img, launch_date_utc, launch_success } = Astro2.props;
  const formattedDate = launch_date_utc ? new Date(launch_date_utc).toLocaleDateString() : "No date";
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-3p6dibxh> <a${addAttribute(`/launches/${id}`, "href")} class="card-link" data-astro-cid-3p6dibxh> <div class="mt-16" data-astro-cid-3p6dibxh> ${renderComponent($$result, "Image", $$Image, { "height": 300, "width": 300, "class": "card-image", "src": img, "alt": `Logo del lanzamiento ${name}`, "data-astro-cid-3p6dibxh": true, "data-astro-transition-scope": renderTransition($$result, "qpywh3yj", "", `img-launch-${id}`) })} </div> <div class="card-content" data-astro-cid-3p6dibxh> <div class="info" data-astro-cid-3p6dibxh> <h2 class="text-white text-md md:text-xl" data-astro-cid-3p6dibxh>${name}</h2> <p class="text-sm md:text-md text-center" data-astro-cid-3p6dibxh>${formattedDate}</p> </div> <div class="status" data-astro-cid-3p6dibxh> ${launch_success ? renderTemplate`<p class="success" data-astro-cid-3p6dibxh>Success</p>` : renderTemplate`<p class="failure" data-astro-cid-3p6dibxh>Failure</p>`} </div> </div> </a> </li> `;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/components/cards/LaunchCard.astro", "self");

const $$Astro$1 = createAstro();
const $$LaunchList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LaunchList;
  const { docs: list, page, totalPages } = await getLaunches();
  return renderTemplate`${maybeRenderHead()}<div class="mt-4"> <h3 class="text-lg text-white text-center my-1">
Loaded pages: ${page} / ${totalPages} </h3> <div class="w-full px-8 flex flex-col flex-wrap gap-8 sm:flex-row justify-evenly items-center"> ${list.map((rocket) => renderTemplate`${renderComponent($$result, "LaunchCard", $$LaunchCard, { "key": rocket.id, "id": rocket.id, "img": rocket.links.patch.small, "name": rocket.name, "launch_date_utc": rocket.date_utc, "launch_success": rocket.success })}`)} </div> </div>`;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/components/list/LaunchList.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Launches" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionPage", $$SectionPage, { "title": "Launches", "description": "Here you can find all the launches.", "gradientColor": "blue" })} ${renderComponent($$result2, "LaunchList", $$LaunchList, {})} ` })}`;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/launches/index.astro", void 0);

const $$file = "C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/launches/index.astro";
const $$url = "/launches";

export { $$Index as default, $$file as file, $$url as url };
