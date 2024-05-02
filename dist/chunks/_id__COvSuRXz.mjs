/* empty css                        */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from './astro/server_CY5Ge0ZJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_B7-cSiVA.mjs';
import { $ as $$SectionPage } from './SectionPage_CsYTRzGl.mjs';
import { $ as $$Link } from './Link_CrCVp1gZ.mjs';
import { b as getCoreById } from './api_DCrssyL_.mjs';
import { a as getStaticRoutesForCores } from './getStaticRoutes_CJOeImYv.mjs';

var Status = /* @__PURE__ */ ((Status2) => {
  Status2["Active"] = "active";
  Status2["Expended"] = "expended";
  Status2["Inactive"] = "inactive";
  Status2["Lost"] = "lost";
  return Status2;
})(Status || {});

const $$Astro$1 = createAstro();
const $$CoreDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CoreDetails;
  const { core } = Astro2.props;
  const getStatusColor = (status) => {
    if (status === Status.Active) {
      return "text-green-500";
    } else if (status === Status.Expended) {
      return "text-red-500";
    } else if (status === Status.Inactive) {
      return "text-yellow-300";
    } else if (status === Status.Lost) {
      return "text-orange-500";
    } else {
      return "text-slate-200";
    }
  };
  return renderTemplate`${maybeRenderHead()}<div class="p-4 border border-t-0 border-gray-300 rounded-md shadow-md bg-dark text-white"> <div class="min-w-full flex flex-col sm:flex-row items-start gap-6 justify-around my-4"> <div class="w-full sm:w-1/3 text-center sm:text-start"> <h3 class="text-xl md:text-2xl text-center font-semibold text-white mb-2">
Information:
</h3> <ul class="list-disc pl-4 text-center list-inside"> <li>
Status:${" "} <span${addAttribute(`font-semibold ${getStatusColor(core.status)}`, "class")}> ${core.status} </span> </li> <li>
Last Update:${" "} <span${addAttribute(`text-slate-200`, "class")}> ${core.last_update || "N/A"} </span> </li> <li>
Reuse Count:${" "} <span${addAttribute(`text-slate-200`, "class")}> ${core.reuse_count} </span> </li> <li>
Block:${" "} <span${addAttribute(`text-slate-200`, "class")}> ${core.block || "N/A"} </span> </li> </ul> </div> <div class="w-full sm:w-2/3 text-center sm:text-start"> <h3 class="text-xl md:text-2xl text-center font-semibold mb-2">
Additional Information:
</h3> <ul class="list-disc pl-4 text-center list-inside"> <li>
Return to Launch Site Attempts:${" "} <span${addAttribute(`text-slate-200`, "class")}> ${core.rtls_attempts} </span> </li> <li>
Return to Launch Site Landings:${" "} <span${addAttribute(`text-slate-200`, "class")}> ${core.rtls_landings} </span> </li> <li>
Autonomous Spaceport Drone Ship Attempts:${" "} <span${addAttribute(`text-slate-200`, "class")}> ${core.asds_attempts} </span> </li> <li>
Autonomous Spaceport Drone Ship Landings:${" "} <span${addAttribute(`text-slate-200`, "class")}> ${core.asds_landings} </span> </li>
Launches:${" "} <span${addAttribute(`text-slate-200`, "class")}> ${core.launches.map ? core.launches.map((launch) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "to": `/launches/${launch}`, "self": true }, { "default": ($$result2) => renderTemplate`${launch}` })}`) : "N/A"} </span> </ul> </div> </div> </div>`;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/components/details/CoreDetails.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  return await getStaticRoutesForCores();
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let core = await getCoreById(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Core ${core?.serial}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionPage", $$SectionPage, { "title": "Core Detail", "accentTitle": core?.serial, "toBack": "/cores", "gradientColor": "lime" })} ${maybeRenderHead()}<div class="container mx-auto"> ${renderComponent($$result2, "CoreDetails", $$CoreDetails, { "core": core })} </div> ` })}`;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/cores/[id].astro", void 0);

const $$file = "C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/cores/[id].astro";
const $$url = "/cores/[id]";

export { $$id as default, $$file as file, getStaticPaths, $$url as url };
