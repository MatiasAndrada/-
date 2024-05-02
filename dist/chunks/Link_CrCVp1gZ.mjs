import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderSlot } from './astro/server_CY5Ge0ZJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Link;
  const { to, self } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(to, "href")}${addAttribute(self ? "_self" : "_blank", "target")}${addAttribute(self ? "" : "noopener noreferrer", "rel")} class="text-white text-lg font-semibold transition-colors duration-300 hover:text-blue-500 underline"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/components/ui/Link.astro", void 0);

export { $$Link as $ };
