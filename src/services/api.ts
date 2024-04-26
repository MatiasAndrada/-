import { type Launch, type LaunchesPages } from "../types/api/api-launches";
import { type Company } from "../types/api/api-company";
import { type Rocket } from "../types/api/api-rocket";
import { type Core } from "../types/api/api-core";
import { type Capsule } from "../types/api/api-capsule";

const BASE_URL = import.meta.env.PUBLIC_BASE_URL_API_SPACEX;


async function getCompany() {
  try {
    const res = await fetch(`${BASE_URL}/company`);
    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa.");
    }
    const company = (await res.json()) as Company;
    return company;

  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}
//puede tomar dos valores como argumento desc y asc
class LaunchQueryParams {
  order?: string = "asc";
  page?: number = 0;
  limit?: number = 200;
}

async function getLaunches(params: LaunchQueryParams = new LaunchQueryParams()) {
  try {
    const { order, limit, page } = params;

    const res = await fetch(`${BASE_URL}/launches/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: {
          "links.patch.small": { $ne: null },
          "links.patch.large": { $ne: null },
        },
        options: {
          sort: {
            flight_number: order,
          },
          pagination: true,
          page: page,
          limit: limit,
        },
      })
    });

    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa.");
    }

    const launches = (await res.json()) as LaunchesPages;
    return launches;

  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}




async function getLaunchById(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/launches/${id}`);
    if (!res.ok) {
    }
    const launch = (await res.json()) as Launch;
    return launch;

  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }

}

async function getNextLaunch() {
  try {
    const res = await fetch(`${BASE_URL}/launches/next`);
    if (!res.ok) {
    }
    const launch = (await res.json()) as Launch;
    return launch;

  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades

  }
}

async function getRockets() {
  try {
    const res = await fetch(`${BASE_URL}/rockets`);
    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa.");
    }
    const rockets = (await res.json()) as Rocket[];
    return rockets;

  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}
async function getRocketById(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/rockets/${id}`);
    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa.");
    }
    const rocket = (await res.json()) as Rocket;
    return rocket;

  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}
async function getCores() {
  try {
    const res = await fetch(`${BASE_URL}/cores`);
    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa.");
    }
    const cores = (await res.json()) as Core[];
    return cores;

  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}
async function getCoreById(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/cores/${id}`);
    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa.");
    }
    const core = (await res.json()) as Core;
    return core;

  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades

  }
}
async function getCapsules() {
  try {
    const res = await fetch(`${BASE_URL}/capsules`);
    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa.");
    }
    const capsules = (await res.json()) as Capsule[];
    return capsules;

  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}
async function getCapsuleById(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/capsules/${id}`);
    if (!res.ok) {
      throw new Error("La solicitud no fue exitosa.");
    }
    const capsule = (await res.json()) as Capsule;
    return capsule;

  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades

  }
}



export {
  getCompany,
  getLaunches,
  getNextLaunch,
  getLaunchById,
  getRockets,
  getRocketById,
  getCores,
  getCoreById,
  getCapsules,
  getCapsuleById,

};