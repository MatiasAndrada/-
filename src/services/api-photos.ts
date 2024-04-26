const BASE_URL = import.meta.env.PUBLIC_BASE_URL_API_PHOTOS;
const API_KEY = import.meta.env.SECRET_API_PHOTOS_KEY;

async function getPhotos(query: string) {
  try {
    const res = await fetch(`${BASE_URL}/?method=flickr.photos.search&api_key=${API_KEY}&user_id=${query}&format=json&nojsoncallback=1`);
    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa.");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}

async function getPhotosUrl(query?: string) {
  let searchParam = query ? query : "spaceX";
  const data = await getPhotos(searchParam);
  const photos = data.photos.photo;
  const photosUrl = photos.map((photo: any) => {
    const { farm, server, id, secret } = photo;
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
  });
  return photosUrl;
}

export { getPhotos, getPhotosUrl };