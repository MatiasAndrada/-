/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot, m as maybeRenderHead, F as Fragment } from '../astro_c490a007.mjs';
import 'html-escaper';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                          */
const $$Astro$a = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$9 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/rocket.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/layouts/Layout.astro", void 0);

const BASE_URL = ({}).PUBLIC_BASE_URL_API_SPACEX;
async function getCompany() {
  try {
    const res = await fetch(`${BASE_URL}/company`);
    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa.");
    }
    const company = await res.json();
    return company;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}
async function getLaunches() {
  try {
    const res = await fetch(`${BASE_URL}/launches/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: {
          //filtered launches isn't image.links.patch.small and large null
          "links.patch.small": { $ne: null },
          "links.patch.large": { $ne: null }
        },
        options: {
          sort: {
            flight_number: "desc"
          },
          limit: 1e3
        }
      })
    });
    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa.");
    }
    const { docs: launches } = await res.json();
    console.log("🦇 ~ file: api.ts:54 ~ getLaunches ~ launches:", launches);
    return launches;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}
async function getLaunchById(id) {
  try {
    const res = await fetch(`${BASE_URL}/launches/${id}`);
    if (!res.ok) {
    }
    const launch = await res.json();
    return launch;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}
async function getRockets() {
  try {
    const res = await fetch(`${BASE_URL}/rockets`);
    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa.");
    }
    const rockets = await res.json();
    return rockets;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}
async function getRocketById(id) {
  try {
    const res = await fetch(`${BASE_URL}/rockets/${id}`);
    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa.");
    }
    const rocket = await res.json();
    return rocket;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}
async function getCores() {
  try {
    const res = await fetch(`${BASE_URL}/cores`);
    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa.");
    }
    const cores = await res.json();
    return cores;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}
async function getCoreById(id) {
  try {
    const res = await fetch(`${BASE_URL}/cores/${id}`);
    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa.");
    }
    const core = await res.json();
    return core;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}
async function getCapsules() {
  try {
    const res = await fetch(`${BASE_URL}/capsules`);
    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa.");
    }
    const capsules = await res.json();
    return capsules;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}
async function getCapsuleById(id) {
  try {
    const res = await fetch(`${BASE_URL}/capsules/${id}`);
    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa.");
    }
    const capsule = await res.json();
    return capsule;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}

const $$Astro$8 = createAstro();
const $$BackButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BackButton;
  return renderTemplate`${maybeRenderHead()}<a href="/" class="bg-white text-blue-500 hover:bg-blue-200 mt-4 px-4 py-2 rounded-md shadow-md"><svg class="w-4 h-4 inline-block mr-2 transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
Go Back
</a>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/components/buttons/BackButton.astro", void 0);

const $$Astro$7 = createAstro();
const $$CapsuleDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CapsuleDetails;
  const { capsule } = Astro2.props;
  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "text-green-500";
      case "destroyed":
        return "text-red-500";
      case "retired":
        return "text-yellow-500";
      case "unknown":
        return "text-orange-500";
      default:
        return "text-slate-300";
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `capsule ${capsule?.serial}` }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="p-4 border border-gray-300 rounded-md shadow-md bg-dark text-slate-300"><h2 class="text-5xl text-center font-semibold ml-6 text-white">
capsule <span class="text-slate-300">${capsule.serial}</span></h2><div class="min-w-full flex flex-col sm:flex-row items-center gap-6 justify-around my-4"><div class="w-1/3 md:ml-6 text-center sm:text-start"><h3 class="text-xl md:text-2xl text-center font-semibold text-white mb-2">
Information:
</h3><ul class="text-slate-300 list-disc pl-4 text-center list-inside"><li>
Status:${" "}<span${addAttribute(`font-semibold ${getStatusColor(capsule.status)}`, "class")}>${capsule.status}</span></li><li>
Last update :${" "}<span${addAttribute(`text-white`, "class")}>${capsule.last_update || "N/A"}</span></li><li>
Reuse Count:${" "}<span${addAttribute(`text-white`, "class")}>${capsule.reuse_count}</span></li><li>
Water landings:${" "}<span${addAttribute(`text-white`, "class")}>${capsule.water_landings}</span></li><li>
land langing:${" "}<span${addAttribute(`text-white`, "class")}>${capsule.land_landings}</span></li><li class=" text-center">
Launches:${" "}<span${addAttribute(`text-white`, "class")}>${capsule.launches.map ? capsule.launches.map((launch) => renderTemplate`<a class="underline"${addAttribute(`/launches/${launch}`, "href")}>${launch}</a>`) : "N/A"}</span></li></ul></div></div></div>` })}`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/components/details/CapsuleDetails.astro", void 0);

async function getStaticRoutesForLaunches() {
  try {
    const launches = await getLaunches();
    const ids_launches = launches.map(
      (launch) => ({
        params: { id: launch.id.toString() }
      })
    );
    return ids_launches;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}
async function getStaticRoutesForRockets() {
  try {
    const rockets = await getRockets();
    const ids_rockets = rockets.map(
      (rocket) => ({
        params: { id: rocket.id.toString() }
      })
    );
    return ids_rockets;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}
async function getStaticRoutesForCores() {
  try {
    const cores = await getCores();
    const ids_cores = cores.map(
      (core) => ({
        params: { id: core.id.toString() }
      })
    );
    return ids_cores;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}
async function getStaticRoutesForCapsules() {
  try {
    const capsules = await getCapsules();
    const ids_capsules = capsules.map(
      (capsule) => ({
        params: { id: capsule.id.toString() }
      })
    );
    return ids_capsules;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}

const $$Astro$6 = createAstro();
async function getStaticPaths$3() {
  return await getStaticRoutesForCapsules();
}
const $$id$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$id$3;
  const { id } = Astro2.params;
  let capsule = await getCapsuleById(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Capsule ${capsule?.serial}` }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="fllex flex-col justify-center items-center px-4 py-8 text-slate-300"><div class="ml-6 mb-6">${renderComponent($$result2, "BackButton", $$BackButton, {})}</div>${renderComponent($$result2, "CapsuleDetails", $$CapsuleDetails, { "capsule": capsule })}</div>` })}`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/capsules/[id].astro", void 0);

const $$file$3 = "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/capsules/[id].astro";
const $$url$3 = "/capsules/[id]";

const _id_$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id$3,
	file: $$file$3,
	getStaticPaths: getStaticPaths$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

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

const $$Astro$5 = createAstro();
const $$LaunchDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LaunchDetails;
  const { launch } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": launch.name }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h2 class="text-5xl text-center md:text-start md:ml-6 font-semibold text-white">
Launch <span class="text-slate-300">${launch.name}</span></h2><div class="flex flex-col justify-around md:flex-row my-8 items-center"><div class="md:w-2/3"><h3 class="text-xl px-4 md:text-2xl md:px-8 text-center md:text-start font-semibold text-white">
Description:
<span class="text-base md:text-lg text-slate-300">${launch.details}</span></h3><div class="min-w-full flex sm:flex-row flex-wrap items-center gap-6 justify-around my-4"><div class="mt-2"><h3 class="text-xl md:text-2xl font-semibold text-white mb-2">
- Information:
</h3><ul class="list-disc text-white"><li class="text-lg font-semibold">
Flight number: <span class="text-slate-300">${launch.flight_number}</span></li><li class="text-lg font-semibold">
Flight date: <span class="text-slate-300">${new Date(launch?.date_utc).toLocaleDateString()}</span></li><li class="text-lg font-semibold">
Static fire: <span class="text-slate-300">${new Date(launch?.static_fire_date_utc).toLocaleDateString()}</span></li><li class="text-lg font-semibold">
Status: ${launch.success ? renderTemplate`<span class="text-green-500 font-bold">Exitoso</span>` : renderTemplate`<span class="text-red-500 font-bold">Fallido</span>`}</li></ul></div><div class="mt-2"><h3 class="text-xl md:text-2xl font-semibold text-white mb-2">
- Bibliography:
</h3><ul class="list-disc text-white"><li><a${addAttribute(launch.links.webcast, "href")} target="_blank" rel="noopener noreferrer" class="text-lg font-semibold underline">
Watch launch
</a></li><li><a${addAttribute(launch.links.article, "href")} target="_blank" rel="noopener noreferrer" class="text-lg font-semibold underline">
See article
</a></li><li><a${addAttribute(launch.links.wikipedia, "href")} target="_blank" rel="noopener noreferrer" class="text-lg font-semibold underline">
See wikipedia
</a></li></ul></div></div></div><div class="w-64 md:w-1/3"><img${addAttribute(launch.links.patch.large, "src")}${addAttribute(`Imagen del lanzamiento ${launch.name}`, "alt")} class="w-full h-auto"></div></div>` })}`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/components/details/LaunchDetails.astro", void 0);

const $$Astro$4 = createAstro();
const $$RocketDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$RocketDetails;
  let { rocket: Rocket } = Astro2.props;
  let {
    name,
    type,
    active,
    country,
    company,
    first_flight,
    success_rate_pct,
    description,
    height,
    diameter,
    mass,
    stages,
    boosters,
    cost_per_launch,
    first_stage,
    second_stage,
    engines,
    landing_legs,
    payload_weights,
    wikipedia
  } = Rocket;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Rocket details" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="p-4 border border-gray-300 rounded-md shadow-md bg-dark text-slate-300"><h2 class="text-5xl text-center md:text-start font-semibold ml-6 text-white">
Rocket <span class="text-slate-300">${name}</span></h2><div class="min-w-full flex flex-col sm:flex-row items-center gap-6 justify-around my-4"><div class="w-1/3 md:ml-6 text-center sm:text-start"><h3 class="text-xl md:text-2xl font-semibold text-white mb-2">
Information:
</h3><div class="text-white-400"><p class="text-base md:text-lg">
State:
${active ? renderTemplate`<span class="text-green-500  underline">Active</span>` : renderTemplate`<span class="text-red-500  underline">Inactive</span>`}</p><p class="text-base md:text-lg">Company: ${company}</p><p class="text-base md:text-lg">First Flight: ${first_flight}</p><p class="text-base md:text-lg">Country: ${country}</p>${success_rate_pct < 45 ? renderTemplate`<p class="text-base md:text-lg">
Success Rate:${" "}<span class="text-red-500">${success_rate_pct}%</span></p>` : success_rate_pct < 75 ? renderTemplate`<p class="text-base md:text-lg">
Success Rate:${" "}<span class="text-yellow-500">${success_rate_pct}%</span></p>` : renderTemplate`<p class="text-base md:text-lg">
Success Rate:${" "}<span class="text-green-500">${success_rate_pct}%</span></p>`}</div></div><!-- Columna de descripción --><div class="w-2/3 flex flex-col gap-5 items-center"><h3 class="text-xl md:text-2xl font-semibold text-white md:p-8">
Description:
<span class="text-base md:text-lg text-slate-300">${description}</span></h3><a${addAttribute(wikipedia, "href")} target="_blank" rel="noopener noreferrer"><button class="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
Wikipedia
</button></a></div></div><div class="min-w-full flex sm:flex-row flex-wrap items-center gap-6 justify-around my-4"><h3 class="text-xl md:text-2xl font-semibold text-white mb-2">
Details:
</h3><div class="mt-2"><h3 class="text-lg font-semibold text-white">- Rocket Details:</h3><ul class="list-disc pl-4 text-white"><li>
Height: <span class="text-slate-300">${height.meters} meters / ${height.feet} feet</span></li><li>
Diameter: <span class="text-slate-300">${diameter.meters} meters / ${diameter.feet} feet</span></li><li>
Mass: <span class="text-slate-300">${mass.kg} kg / ${mass.lb} lb</span></li><li>Stages: <span class="text-slate-300">${stages}</span></li><li>Boosters: <span class="text-slate-300">${boosters}</span></li><li>
Cost per Launch: <span class="text-slate-300">$${cost_per_launch}</span></li></ul></div><div class="mt-2"><h3 class="text-lg font-semibold text-white">- Engines:</h3><ul class="list-disc pl-4 text-white"><li>Type: <span class="text-slate-300">${engines.type}</span></li><li>
Version: <span class="text-slate-300">${engines.version}</span></li><li>Layout: <span class="text-slate-300">${engines.layout}</span></li><li>Thrust vacuum:</li><li>
Engine Loss Max: <span class="text-slate-300">${engines.engine_loss_max}</span></li><li>
Propellant 1: <span class="text-slate-300">${engines.propellant_1}</span></li><li>
Propellant 2: <span class="text-slate-300">${engines.propellant_2}</span></li><li>
Thrust to Weight: <span class="text-slate-300">${engines.thrust_to_weight}</span></li></ul></div><div class="mt-2"><h3 class="text-lg font-semibold text-white">- Payload Weights:</h3><ul class="list-disc pl-4 text-white">${payload_weights.map((payload, index) => renderTemplate`<li>${payload.name}:${" "}<span class="text-slate-300">${payload.kg} kg / ${payload.lb} lb
</span></li>`)}</ul></div>${landing_legs.number > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`<h3 class="text-lg font-semibold text-white mt-2">
- Landing Legs:
</h3><ul class="list-disc pl-4"><li>Number: ${landing_legs.number}</li><li>Material: ${landing_legs.material}</li></ul>` })}`}</div></div><div class="overflow-x-auto my-4 bg-slate-800 p-2 rounded-lg"><h3 class="text-2xl font-semibold text-white text-center px-4 py-2 my-3 bg-slate-900 rounded-lg">
First and Second Stage
</h3><div class="table-responsive"><table class="min-w-full border-collapse table-auto text-white"><thead><tr><th class="border-b-2 p-2 text-center">Stage</th><th class="border-b-2 p-2 text-center">Thrust vacuum kN/lbf</th><th class="border-b-2 p-2 text-center">Reusable</th><th class="border-b-2 p-2 text-center">Engines</th><th class="border-b-2 p-2 text-center">Fuel Amount Tons</th><th class="border-b-2 p-2 text-center">Burn Time Sec</th></tr></thead><tbody><tr><td class="border-b p-2 text-center">1</td><td class="border-b p-2 text-center">${first_stage.thrust_vacuum.kN} / ${first_stage.thrust_vacuum.lbf}</td><td class="border-b p-2 text-center">${first_stage.reusable ? renderTemplate`<span class="text-green-500 font-semibold">Yes</span>` : renderTemplate`<span class="text-red-500 font-semibold">No</span>`}</td><td class="border-b p-2 text-center">${first_stage.engines}</td><td class="border-b p-2 text-center">${first_stage.fuel_amount_tons} tons
</td><td class="border-b p-2 text-center">${first_stage.burn_time_sec} sec</td></tr><tr><td class="border-b p-2 text-center">2</td><td class="border-b p-2 text-center">${second_stage.thrust.kN} / ${second_stage.thrust.lbf}</td><td class="border-b p-2 text-center">${first_stage.reusable ? renderTemplate`<span class="text-green-500 font-semibold">Yes</span>` : renderTemplate`<span class="text-red-500 font-semibold">No</span>`}</td><td class="border-b p-2 text-center">${second_stage.engines}</td><td class="border-b p-2 text-center">${second_stage.fuel_amount_tons} tons
</td><td class="border-b p-2 text-center">${second_stage.burn_time_sec} sec</td></tr></tbody></table></div></div>` })}`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/components/details/RocketDetails.astro", void 0);

const $$Astro$3 = createAstro();
async function getStaticPaths$2() {
  return await getStaticRoutesForLaunches();
}
const $$id$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$id$2;
  const { id } = Astro2.params;
  let launch = null;
  let rocket = null;
  if (id) {
    launch = await getLaunchById(id);
    rocket = await getRocketById(launch.rocket);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Launch ${launch?.name}` }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col py-8 px-4"><div class="ml-6 mb-6">${renderComponent($$result2, "BackButton", $$BackButton, {})}</div>${renderComponent($$result2, "LaunchDetails", $$LaunchDetails, { "launch": launch })}${renderComponent($$result2, "RocketDetails", $$RocketDetails, { "rocket": rocket })}<h3 class="text-2xl font-semibold text-white ml-8 mb-4">
- Rocket gallery
</h3>${renderComponent($$result2, "Gallery", Gallery, { "images": rocket.flickr_images, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/matia/Desktop/codes/astro-spacex/src/components/gallery/Gallery", "client:component-export": "default" })}</div>` })}`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/launches/[id].astro", void 0);

const $$file$2 = "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/launches/[id].astro";
const $$url$2 = "/launches/[id]";

const _id_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id$2,
	file: $$file$2,
	getStaticPaths: getStaticPaths$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
function getStaticPaths$1() {
  return getStaticRoutesForRockets();
}
const $$id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$id$1;
  let { id } = Astro2.params;
  let rocket;
  if (id) {
    try {
      rocket = await getRocketById(id);
    } catch (e) {
      console.log(e);
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Launch ${rocket?.name}` }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col mx-4"><div class="mb-6">${renderComponent($$result2, "BackButton", $$BackButton, {})}</div>${renderComponent($$result2, "RocketDetails", $$RocketDetails, { "rocket": rocket })}<h3 class="text-2xl font-semibold text-white ml-8 mb-4">
- Rocket gallery
</h3><div class="mt-6">${renderComponent($$result2, "Gallery", Gallery, { "images": rocket?.flickr_images, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/matia/Desktop/codes/astro-spacex/src/components/gallery/Gallery", "client:component-export": "default" })}</div></div>` })}`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/rockets/[id].astro", void 0);

const $$file$1 = "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/rockets/[id].astro";
const $$url$1 = "/rockets/[id]";

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id$1,
	file: $$file$1,
	getStaticPaths: getStaticPaths$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$CoreDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CoreDetails;
  const { core } = Astro2.props;
  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "text-green-500";
      case "expended":
        return "text-red-500";
      case "inactive":
        return "text-yellow-300";
      case "lost":
        return "text-orange-500";
      default:
        return "text-slate-300";
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Core ${core?.serial}` }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="p-4 border border-gray-300 rounded-md shadow-md bg-dark text-slate-300"><h2 class="text-5xl text-center font-semibold ml-6 text-white">
Core <span class="text-slate-300">${core.serial}</span></h2><div class="min-w-full flex flex-col sm:flex-row items-start gap-6 justify-around my-4"><div class="w-full sm:w-1/3 text-center sm:text-start"><h3 class="text-xl md:text-2xl text-center font-semibold text-white mb-2">
Information:
</h3><ul class="text-slate-300 list-disc pl-4 text-center list-inside"><li>
Status:${" "}<span${addAttribute(`font-semibold ${getStatusColor(core.status)}`, "class")}>${core.status}</span></li><li>
Last Update:${" "}<span${addAttribute(`text-white`, "class")}>${core.last_update || "N/A"}</span></li><li>
Reuse Count:${" "}<span${addAttribute(`text-white`, "class")}>${core.reuse_count}</span></li><li>
Block:${" "}<span${addAttribute(`text-white`, "class")}>${core.block || "N/A"}</span></li></ul></div><div class="w-full sm:w-2/3 text-center sm:text-start"><h3 class="text-xl md:text-2xl text-center font-semibold text-white mb-2">
Additional Information:
</h3><ul class="text-slate-300 list-disc pl-4 text-center list-inside"><li>
Return to Launch Site Attempts:${" "}<span${addAttribute(`text-white`, "class")}>${core.rtls_attempts}</span></li><li>
Return to Launch Site Landings:${" "}<span${addAttribute(`text-white`, "class")}>${core.rtls_landings}</span></li><li>
Autonomous Spaceport Drone Ship Attempts:${" "}<span${addAttribute(`text-white`, "class")}>${core.asds_attempts}</span></li><li>
Autonomous Spaceport Drone Ship Landings:${" "}<span${addAttribute(`text-white`, "class")}>${core.asds_landings}</span></li><li>
Launches:${" "}<span${addAttribute(`text-white`, "class")}>${core.launches.map ? core.launches.map((launch) => renderTemplate`<a class="underline"${addAttribute(`/launches/${launch}`, "href")}>${launch}</a>`) : "N/A"}</span></li></ul></div></div></div>` })}`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/components/details/CoreDetails.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  return await getStaticRoutesForCores();
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let core = await getCoreById(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Core ${core?.serial}` }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="container mx-auto px-4 py-8 text-slate-300"><div class="ml-6 mb-6">${renderComponent($$result2, "BackButton", $$BackButton, {})}</div>${renderComponent($$result2, "CoreDetails", $$CoreDetails, { "core": core })}</div>` })}`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/cores/[id].astro", void 0);

const $$file = "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/cores/[id].astro";
const $$url = "/cores/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BackButton as $, Gallery as G, _id_$3 as _, $$Layout as a, getCompany as b, getCapsules as c, getRockets as d, getCores as e, _id_$2 as f, getLaunches as g, _id_$1 as h, _id_ as i };
