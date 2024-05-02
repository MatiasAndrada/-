/* empty css                        */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from './astro/server_CY5Ge0ZJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_B7-cSiVA.mjs';
import { $ as $$SectionPage } from './SectionPage_CsYTRzGl.mjs';
import 'clsx';
/* empty css                         */
import { c as getCores } from './api_DCrssyL_.mjs';

const $$Astro$2 = createAstro();
const $$CoreCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CoreCard;
  const { id, serial, launchesCount, status } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-oo6o657t> <a${addAttribute(`/cores/${id}`, "href")} class="card-link" data-astro-cid-oo6o657t> <div class="info" data-astro-cid-oo6o657t> <h2 class="text-white" data-astro-cid-oo6o657t>${serial}</h2> <p class="text-slate-200" data-astro-cid-oo6o657t>Reused: ${launchesCount}</p> </div> <div class="status" data-astro-cid-oo6o657t> ${status ? renderTemplate`<p class="success" data-astro-cid-oo6o657t>Active</p>` : renderTemplate`<p class="failure" data-astro-cid-oo6o657t>Inactive</p>`} </div> </a> </li> `;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/components/cards/CoreCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$CoreList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CoreList;
  const list = await getCores();
  return renderTemplate`${maybeRenderHead()}<ul class="launch-list" data-astro-cid-fvdhlyb4> ${list.map((core) => renderTemplate`${renderComponent($$result, "CoreCard", $$CoreCard, { "id": core.id, "serial": core.serial, "status": core.status, "launchesCount": core.reuse_count, "data-astro-cid-fvdhlyb4": true })}`)} </ul> `;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/components/list/CoreList.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cores" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionPage", $$SectionPage, { "title": "Cores", "description": "Here you can find all the Cores.", "gradientColor": "green" })} ${renderComponent($$result2, "CoreList", $$CoreList, {})} ` })}`;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/cores/index.astro", void 0);

const $$file = "C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/cores/index.astro";
const $$url = "/cores";

export { $$Index as default, $$file as file, $$url as url };
