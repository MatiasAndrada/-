/* empty css                        */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from './astro/server_CY5Ge0ZJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_B7-cSiVA.mjs';
import { $ as $$SectionPage } from './SectionPage_CsYTRzGl.mjs';
import 'clsx';
import { S as Status } from './api-capsule_eiJeSjDn.mjs';
/* empty css                         */
import { a as getCapsules } from './api_DCrssyL_.mjs';

const $$Astro$2 = createAstro();
const $$CapsuleCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CapsuleCard;
  const { id, serial, last_update, status } = Astro2.props;
  let statusClass = "bg-gray-500";
  if (status === Status.Active) {
    statusClass = "bg-green-500";
  } else if (status === Status.Destroyed) {
    statusClass = "bg-red-500";
  } else if (status === Status.Retired) {
    statusClass = "bg-gray-500";
  } else if (status === Status.Unknown) {
    statusClass = "bg-orange-500";
  }
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-j2hhhe3c> <a${addAttribute(`/capsules/${id}`, "href")} class="card-link" data-astro-cid-j2hhhe3c> <div data-astro-cid-j2hhhe3c> <h2 class="text-xl m-2 text-white" data-astro-cid-j2hhhe3c>${serial}</h2> <p class="text-lg ml-2 w-2/3 text-slate-200" data-astro-cid-j2hhhe3c>${last_update}</p> </div> <div class="status" data-astro-cid-j2hhhe3c> <p${addAttribute(`text-lg p-2 rounded-md text-white ${statusClass}`, "class")} data-astro-cid-j2hhhe3c> ${status} </p> </div> </a> </li> `;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/components/cards/CapsuleCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$CapsuleList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CapsuleList;
  const list = await getCapsules();
  return renderTemplate`${maybeRenderHead()}<ul class="launch-list" data-astro-cid-c7ak75lb> ${list.map((capsule) => renderTemplate`${renderComponent($$result, "CapsuleCard", $$CapsuleCard, { "id": capsule.id, "serial": capsule.serial, "status": capsule.status, "last_update": capsule.last_update, "data-astro-cid-c7ak75lb": true })}`)} </ul> `;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/components/list/CapsuleList.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Capsules" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionPage", $$SectionPage, { "title": "Capsules", "description": "Here you can find all the Capsules.", "gradientColor": "purple" })} ${renderComponent($$result2, "CapsuleList", $$CapsuleList, {})} ` })}`;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/capsules/index.astro", void 0);

const $$file = "C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/capsules/index.astro";
const $$url = "/capsules";

export { $$Index as default, $$file as file, $$url as url };
