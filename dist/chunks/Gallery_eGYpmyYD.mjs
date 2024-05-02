import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_CY5Ge0ZJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const BASE_URL = "https://www.flickr.com/services/rest";
const API_KEY = "2caf610f8bf68b5c30b16caef30843a8";
async function getPhotos(query) {
  try {
    const res = await fetch(`${BASE_URL}/?method=flickr.photos.search&api_key=${API_KEY}&user_id=${query}&format=json&nojsoncallback=1`);
    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa.");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}
async function getPhotosUrl(query) {
  let searchParam = query ? query : "spaceX";
  const data = await getPhotos(searchParam);
  const photos = data.photos.photo;
  const photosUrl = photos.map((photo) => {
    const { farm, server, id, secret } = photo;
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
  });
  return photosUrl;
}

const $$Astro = createAstro();
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  const { images } = Astro2.props;
  let list;
  if (images) {
    list = images;
  } else {
    list = await getPhotosUrl();
  }
  return renderTemplate` ${maybeRenderHead()}<div class="flex flex-wrap justify-center items-center gap-5"> ${list.map((imageUrl, index) => renderTemplate`<div id="img-list"${addAttribute(`relative cursor-pointer overflow-hidden transform transition-transform duration-300 hover:scale-105	`, "class")}${addAttribute(`handleImageClick('${imageUrl}')`, "onclick")}> <img${addAttribute(imageUrl, "src")}${addAttribute(`Image rocket ${index + 1}`, "alt")} class="w-56 h-56 md:w-80 md:h-80 object-cover rounded-lg "> </div>`)} <div id="modal" class="hidden fixed top-0 left-0 w-full h-full justify-center items-center z-50 bg-black bg-opacity-60"> <div class="rounded-lg shadow-xl shadow-blue-950"> <img id="modal-img" alt="Selected" class="h-4/5 md:h-[60vh] rounded-lg"> </div> </div> </div>`;
}, "C:/Users/Asus/Desktop/codes/astro-spacex/src/components/gallery/Gallery.astro", void 0);

export { $$Gallery as $ };
