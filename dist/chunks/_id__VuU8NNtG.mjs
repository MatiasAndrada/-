/* empty css                        */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from './astro/server_CY5Ge0ZJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_B7-cSiVA.mjs';
import { $ as $$SectionPage } from './SectionPage_CsYTRzGl.mjs';
import { $ as $$Link } from './Link_CrCVp1gZ.mjs';
import { S as Status } from './api-capsule_eiJeSjDn.mjs';
import { g as getCapsuleById } from './api_DCrssyL_.mjs';
import { g as getStaticRoutesForCapsules } from './getStaticRoutes_CJOeImYv.mjs';

const $$Astro$1 = createAstro();
const $$CapsuleDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CapsuleDetails;
  const { capsule } = Astro2.props;
  const getStatusColor = (status) => {
    switch (status) {
      case status === Status.Active:
        return "text-green-500";
      case "destroyed" === Status.Destroyed:
        return "text-red-500";
      case status === Status.Retired:
        return "text-yellow-500";
      case status === Status.Unknown:
        return "text-orange-500";
      default:
        return "text-slate-200";
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `capsule ${capsule?.serial}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4 border border-t-0 border-gray-300 rounded-md shadow-md bg-dark text-white"> <div class="min-w-full flex flex-col sm:flex-row items-center gap-6 justify-around my-4"> <div class="md:ml-6 text-center sm:text-start"> <h3 class="text-xl md:text-2xl text-center font-semibold mb-2">
Information:
</h3> <ul class="list-disc text-center list-inside"> <li>
Status:${" "} <span${addAttribute(`font-semibold ${getStatusColor(capsule.status)}`, "class")}> ${capsule.status} </span> </li> <li>
Last update :${" "} <span${addAttribute(`text-slate-200`, "class")}> ${capsule.last_update || "N/A"} </span> </li> <li>
Reuse Count:${" "} <span${addAttribute(`text-slate-200`, "class")}> ${capsule.reuse_count} </span> </li> <li>
Water landings:${" "} <span${addAttribute(`text-slate-200`, "class")}> ${capsule.water_landings} </span> </li> <li>
land langing:${" "} <span${addAttribute(`text-slate-200`, "class")}> ${capsule.land_landings} </span> </li> <li class="text-center">
Launches:${" "} <span${addAttribute(`text-slate-200`, "class")}> ${capsule.launches.map ? capsule.launches.map((launch) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "to": `/launches/${launch}`, "self": true }, { "default": ($$result3) => renderTemplate`${launch}` })}`) : "N/A"} </span> </li> </ul> </div> </div> </div> ` })}`;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/components/details/CapsuleDetails.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  return await getStaticRoutesForCapsules();
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let capsule = await getCapsuleById(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Capsule ${capsule?.serial}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionPage", $$SectionPage, { "title": `Capsule Detail`, "accentTitle": capsule?.serial, "toBack": "/capsules", "gradientColor": "deep-purple" })} ${maybeRenderHead()}<div class="container mx-auto"> ${renderComponent($$result2, "CapsuleDetails", $$CapsuleDetails, { "capsule": capsule })} </div> ` })}`;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/capsules/[id].astro", void 0);

const $$file = "C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/capsules/[id].astro";
const $$url = "/capsules/[id]";

export { $$id as default, $$file as file, getStaticPaths, $$url as url };
