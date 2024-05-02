import { f as getLaunches, h as getRockets, c as getCores, a as getCapsules } from './api_DCrssyL_.mjs';

async function getStaticRoutesForLaunches() {
  try {
    const { docs: launches } = await getLaunches({ limit: 1e3 });
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

export { getStaticRoutesForCores as a, getStaticRoutesForLaunches as b, getStaticRoutesForRockets as c, getStaticRoutesForCapsules as g };
