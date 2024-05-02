import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from './astro/server_CY5Ge0ZJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                        */

const $$Astro$1 = createAstro();
const $$BackButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BackButton;
  const { to } = Astro2.props;
  const backLink = to || "/";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(backLink, "href")} class="text-semibold bg-white text-blue-500 hover:bg-blue-200 mt-4 px-4 py-2 hover:px-5 rounded-md shadow-md transition-all duration-300 ease-in-out"> <span class="text-xl">←</span>
Go Back
</a> `;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/components/buttons/BackButton.astro", void 0);

const $$Astro = createAstro();
const $$SectionPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionPage;
  const { title, accentTitle, description, gradientColor, toBack } = Astro2.props;
  const formatedDescription = description ? description.slice(-1) !== "." ? `${description}.` : description : "No description provided";
  return renderTemplate`${maybeRenderHead()}<div class="py-8"${addAttribute(`background-image: var(--accent-${gradientColor}-black);`, "style")} data-astro-cid-jwwfkvat> <div class="container w-2/3 mx-auto text-start" data-astro-cid-jwwfkvat> ${renderComponent($$result, "BackButton", $$BackButton, { "to": toBack, "data-astro-cid-jwwfkvat": true })} <h1${addAttribute(`${accentTitle ? "text-slate-200 font-medium" : "text-white font-bold"} mt-4 text-4xl `, "class")} data-astro-cid-jwwfkvat> ${title} ${accentTitle && renderTemplate`<span class="text-6xl font-bold text-white" data-astro-cid-jwwfkvat> ${accentTitle} </span>`} </h1> <p class="mt-4 first-letter:text-lg text-slate-200" data-astro-cid-jwwfkvat> ${formatedDescription} </p> </div> </div> `;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/components/ui/SectionPage.astro", void 0);

export { $$SectionPage as $ };
