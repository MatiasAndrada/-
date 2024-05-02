/* empty css                        */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from './astro/server_CY5Ge0ZJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_B7-cSiVA.mjs';
import { $ as $$SectionPage } from './SectionPage_CsYTRzGl.mjs';
import { $ as $$Gallery } from './Gallery_eGYpmyYD.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gallery" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionPage", $$SectionPage, { "title": "Gallery SpaceX", "description": "Here you can see images of different moments", "gradientColor": "red" })} ${maybeRenderHead()}<div class="mt-4"> ${renderComponent($$result2, "Gallery", $$Gallery, {})} </div> ` })}`;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/gallery/index.astro", void 0);

const $$file = "C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/gallery/index.astro";
const $$url = "/gallery";

export { $$Index as default, $$file as file, $$url as url };
