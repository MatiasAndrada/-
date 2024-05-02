/* empty css                        */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from './astro/server_CY5Ge0ZJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_B7-cSiVA.mjs';
import { $ as $$SectionPage } from './SectionPage_CsYTRzGl.mjs';
import { $ as $$Gallery } from './Gallery_eGYpmyYD.mjs';
import { e as getRocketById } from './api_DCrssyL_.mjs';
import { $ as $$RocketDetails } from './RocketDetails_COxn6Zck.mjs';
import { c as getStaticRoutesForRockets } from './getStaticRoutes_CJOeImYv.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  return getStaticRoutesForRockets();
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  let { id } = Astro2.params;
  let rocket;
  if (id) {
    try {
      rocket = await getRocketById(id);
    } catch (e) {
      console.log(e);
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Launch ${rocket?.name}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionPage", $$SectionPage, { "title": "Rocket Detail", "accentTitle": rocket?.name, "toBack": "/rockets", "gradientColor": "deep-orange" })} ${maybeRenderHead()}<div class="container mx-auto"> ${renderComponent($$result2, "RocketDetails", $$RocketDetails, { "rocket": rocket })} <h3 class="mb-4 text-2xl font-semibold text-white">- Rocket gallery</h3> ${renderComponent($$result2, "Gallery", $$Gallery, { "images": rocket?.flickr_images })} </div> ` })}`;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/rockets/[id].astro", void 0);

const $$file = "C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/rockets/[id].astro";
const $$url = "/rockets/[id]";

export { $$id as default, $$file as file, getStaticPaths, $$url as url };
