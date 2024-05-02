/* empty css                        */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from './astro/server_CY5Ge0ZJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_B7-cSiVA.mjs';
import { $ as $$SectionPage } from './SectionPage_CsYTRzGl.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_DomdrVpG.mjs';
/* empty css                         */
import { h as getRockets } from './api_DCrssyL_.mjs';

const $$Astro$2 = createAstro();
const $$RocketCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RocketCard;
  const { id, name, img, first_flight, active } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-isskyi2f> <a${addAttribute(`/rockets/${id}`, "href")} class="card-link" data-astro-cid-isskyi2f> ${renderComponent($$result, "Image", $$Image, { "class": "card-image", "src": img, "alt": name, "width": 468, "height": 351, "data-astro-cid-isskyi2f": true })} <h2 class="absolute top-3 left-3 text-xl p-3 rounded-lg mx-auto bg-black bg-opacity-40 text-white" data-astro-cid-isskyi2f> ${name} </h2> <p class="absolute top-3 right-3 text-sm p-3 rounded-lg mx-auto bg-black bg-opacity-40 text-white" data-astro-cid-isskyi2f> ${first_flight} </p> <div class="status" data-astro-cid-isskyi2f> ${active ? renderTemplate`<p class="success" data-astro-cid-isskyi2f>Active</p>` : renderTemplate`<p class="failure" data-astro-cid-isskyi2f>Inactive</p>`} </div> </a> </li> `;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/components/cards/RocketCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$RocketList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RocketList;
  const list = await getRockets();
  return renderTemplate`${maybeRenderHead()}<ul class="mt-4 launch-list flex gap-6 justify-evenly flex-wrap"> ${list.map((rocket) => renderTemplate`${renderComponent($$result, "RocketCard", $$RocketCard, { "id": rocket.id, "name": rocket.name, "img": rocket.flickr_images[0], "first_flight": rocket.first_flight, "active": rocket.active })}`)} </ul>`;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/components/list/RocketList.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Rockets" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionPage", $$SectionPage, { "title": "Rockets", "description": "Here you can find all the rockets.", "gradientColor": "orange" })} ${renderComponent($$result2, "RocketList", $$RocketList, {})} ` })}`;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/rockets/index.astro", void 0);

const $$file = "C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/rockets/index.astro";
const $$url = "/rockets";

export { $$Index as default, $$file as file, $$url as url };
