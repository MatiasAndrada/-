const BASE_URL = "https://api.spacexdata.com/latest";
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
class LaunchQueryParams {
  order = "asc";
  page = 0;
  limit = 200;
}
async function getLaunches(params = new LaunchQueryParams()) {
  try {
    const { order, limit, page } = params;
    const res = await fetch(`${BASE_URL}/launches/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: {
          "links.patch.small": { $ne: null },
          "links.patch.large": { $ne: null }
        },
        options: {
          sort: {
            flight_number: order
          },
          pagination: true,
          page,
          limit
        }
      })
    });
    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa.");
    }
    const launches = await res.json();
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

export { getCapsules as a, getCoreById as b, getCores as c, getLaunchById as d, getRocketById as e, getLaunches as f, getCapsuleById as g, getRockets as h, getCompany as i };
