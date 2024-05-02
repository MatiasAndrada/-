/* empty css                        */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, e as renderTransition } from './astro/server_CY5Ge0ZJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_B7-cSiVA.mjs';
import { $ as $$SectionPage } from './SectionPage_CsYTRzGl.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { d as getLaunchById, e as getRocketById } from './api_DCrssyL_.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_DomdrVpG.mjs';
import { $ as $$Link } from './Link_CrCVp1gZ.mjs';
/* empty css                         */
import { $ as $$RocketDetails } from './RocketDetails_COxn6Zck.mjs';
import { b as getStaticRoutesForLaunches } from './getStaticRoutes_CJOeImYv.mjs';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  useState([]);
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };
  const handleClosePreview = () => {
    setSelectedImage(null);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center items-center gap-4", children: [
    images.map((imageUrl, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `relative cursor-pointer overflow-hidden transform transition-transform duration-300 hover:scale-105	`,
        onClick: () => handleImageClick(imageUrl),
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: imageUrl,
            alt: `Image rocket ${index + 1}`,
            className: "w-56 h-56 md:w-80 md:h-80 object-cover rounded-lg "
          }
        )
      },
      index
    )),
    selectedImage && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-60",
        onClick: handleClosePreview,
        children: /* @__PURE__ */ jsx("div", { className: "rounded-lg shadow-xl shadow-blue-950", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: selectedImage,
            alt: "Selected",
            className: "h-4/5 md:h-[60vh] rounded-lg"
          }
        ) })
      }
    )
  ] });
};

const $$Astro$1 = createAstro();
const $$LaunchDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LaunchDetails;
  const { launch: launchProp, id } = Astro2.props;
  let launch = null;
  if (launchProp) {
    launch = launchProp;
  } else if (id) {
    launch = await getLaunchById(id);
  }
  const details = launch.details ? launch.details : "No description available";
  const formatedDetails = details.slice(-1) !== "." ? `${details}.` : details;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-between md:flex-row my-8 items-center"> <div class="md:w-2/3"> <h3 class="text-xl px-4 md:text-2xl md:px-8 text-center font-semibold text-white">
Description:
<span class="text-lg md:text-xl text-slate-200"> ${formatedDetails} </span> </h3> <div class="min-w-full flex sm:flex-row flex-wrap items-center gap-6 justify-around my-8"> <div class="mt-2"> <h3 class="text-xl md:text-2xl font-semibold text-white mb-2">
- Information:
</h3> <ul class="list-disc text-white"> <li class="text-lg font-semibold">
Flight number: <span class="text-slate-200">${launch.flight_number}</span> </li> <li class="text-lg font-semibold">
Flight date: <span class="text-slate-200">${new Date(launch?.date_utc).toLocaleDateString()}</span> </li> <li class="text-lg font-semibold">
Static fire: <span class="text-slate-200">${new Date(launch?.static_fire_date_utc).toLocaleDateString()}</span> </li> <li class="text-lg font-semibold">
Status: ${launch.success ? renderTemplate`<span class="text-green-500 font-bold">Exitoso</span>` : renderTemplate`<span class="text-red-500 font-bold">Fallido</span>`} </li> </ul> </div> <div class="mt-2"> <h3 class="text-xl md:text-2xl font-semibold text-white mb-2">
- Bibliography:
</h3> <ul class="list-disc text-white"> <li> ${renderComponent($$result, "Link", $$Link, { "to": launch.links.webcast }, { "default": ($$result2) => renderTemplate`Watch launch` })} </li> <li> ${renderComponent($$result, "Link", $$Link, { "to": launch.links.article }, { "default": ($$result2) => renderTemplate` See article ` })} </li> <li> ${renderComponent($$result, "Link", $$Link, { "to": launch.links.wikipedia }, { "default": ($$result2) => renderTemplate` See wikipedia ` })} </li> </ul> </div> </div> </div> <div class="w-64 md:w-1/3 p-12"> ${renderComponent($$result, "Image", $$Image, { "height": 500, "width": 500, "src": launch.links.patch.small, "alt": `Logo del lanzamiento ${launch.name}`, "class": "w-full h-auto", "data-astro-transition-scope": renderTransition($$result, "qznlgwa2", "", `img-launch-${launch.id}`) })} </div> </div>`;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/components/details/LaunchDetails.astro", "self");

const $$Astro = createAstro();
async function getStaticPaths() {
  return await getStaticRoutesForLaunches();
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let launch = null;
  let rocket = null;
  if (id) {
    launch = await getLaunchById(id);
    rocket = await getRocketById(launch.rocket);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Launch ${launch?.name}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionPage", $$SectionPage, { "title": "Launch details", "accentTitle": launch?.name, "toBack": "/launches", "gradientColor": "deep-blue" })} ${maybeRenderHead()}<div class="container mx-auto py-8 px-4 flex flex-col"> ${renderComponent($$result2, "LaunchDetails", $$LaunchDetails, { "launch": launch })} ${renderComponent($$result2, "RocketDetails", $$RocketDetails, { "rocket": rocket })} <h3 class="text-2xl font-semibold text-white ml-8 mb-4">
- Rocket gallery
</h3> ${renderComponent($$result2, "Gallery", Gallery, { "images": rocket.flickr_images, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Asus/Desktop/codes/astro-spacex/src/components/gallery/Gallery", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/launches/[id].astro", void 0);

const $$file = "C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/launches/[id].astro";
const $$url = "/launches/[id]";

export { $$id as default, $$file as file, getStaticPaths, $$url as url };
