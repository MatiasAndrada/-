import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro/server_CY5Ge0ZJ.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"file:///C:/Users/Asus/Desktop/codes/astro-spacex/dist/capsules/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/capsules","isIndex":true,"type":"page","pattern":"^\\/capsules\\/?$","segments":[[{"content":"capsules","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/capsules/index.astro","pathname":"/capsules","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Asus/Desktop/codes/astro-spacex/dist/cores/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cores","isIndex":true,"type":"page","pattern":"^\\/cores\\/?$","segments":[[{"content":"cores","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cores/index.astro","pathname":"/cores","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Asus/Desktop/codes/astro-spacex/dist/gallery/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/gallery","isIndex":true,"type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery/index.astro","pathname":"/gallery","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Asus/Desktop/codes/astro-spacex/dist/launches/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/launches","isIndex":true,"type":"page","pattern":"^\\/launches\\/?$","segments":[[{"content":"launches","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/launches/index.astro","pathname":"/launches","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Asus/Desktop/codes/astro-spacex/dist/rockets/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rockets","isIndex":true,"type":"page","pattern":"^\\/rockets\\/?$","segments":[[{"content":"rockets","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rockets/index.astro","pathname":"/rockets","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Asus/Desktop/codes/astro-spacex/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Asus/Desktop/codes/astro-spacex/src/components/details/LaunchDetails.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/launches/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/launches/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Asus/Desktop/codes/astro-spacex/src/components/cards/LaunchCard.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Asus/Desktop/codes/astro-spacex/src/components/list/LaunchList.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/launches/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/launches/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/capsules/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/capsules/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/cores/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/cores/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/gallery/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/rockets/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/Asus/Desktop/codes/astro-spacex/src/pages/rockets/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/capsules/[id]@_@astro":"pages/capsules/_id_.astro.mjs","\u0000@astro-page:src/pages/capsules/index@_@astro":"pages/capsules.astro.mjs","\u0000@astro-page:src/pages/cores/[id]@_@astro":"pages/cores/_id_.astro.mjs","\u0000@astro-page:src/pages/cores/index@_@astro":"pages/cores.astro.mjs","\u0000@astro-page:src/pages/gallery/index@_@astro":"pages/gallery.astro.mjs","\u0000@astro-page:src/pages/launches/[id]@_@astro":"pages/launches/_id_.astro.mjs","\u0000@astro-page:src/pages/launches/index@_@astro":"pages/launches.astro.mjs","\u0000@astro-page:src/pages/rockets/[id]@_@astro":"pages/rockets/_id_.astro.mjs","\u0000@astro-page:src/pages/rockets/index@_@astro":"pages/rockets.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_PQVeqHgX.mjs","C:/Users/Asus/Desktop/codes/astro-spacex/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/src/pages/capsules/[id].astro":"chunks/_id__VuU8NNtG.mjs","/src/pages/capsules/index.astro":"chunks/index_BnsQwn8E.mjs","/src/pages/cores/[id].astro":"chunks/_id__COvSuRXz.mjs","/src/pages/cores/index.astro":"chunks/index_DmUR480O.mjs","/src/pages/gallery/index.astro":"chunks/index_BU46oKc2.mjs","/src/pages/launches/[id].astro":"chunks/_id__x3urZhNx.mjs","/src/pages/launches/index.astro":"chunks/index_CQDjcSDC.mjs","/src/pages/rockets/[id].astro":"chunks/_id__BVAD6zAS.mjs","/src/pages/rockets/index.astro":"chunks/index_2OtXJJqL.mjs","/src/pages/index.astro":"chunks/index_DgjgaA_e.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.ChCPFAyX.js","C:/Users/Asus/Desktop/codes/astro-spacex/src/components/gallery/Gallery":"_astro/Gallery.BZU7foQR.js","/astro/hoisted.js?q=1":"_astro/hoisted.MGRYCVo7.js","@astrojs/react/client.js":"_astro/client.DbokQZWz.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///C:/Users/Asus/Desktop/codes/astro-spacex/dist/capsules/index.html","/file:///C:/Users/Asus/Desktop/codes/astro-spacex/dist/cores/index.html","/file:///C:/Users/Asus/Desktop/codes/astro-spacex/dist/gallery/index.html","/file:///C:/Users/Asus/Desktop/codes/astro-spacex/dist/launches/index.html","/file:///C:/Users/Asus/Desktop/codes/astro-spacex/dist/rockets/index.html","/file:///C:/Users/Asus/Desktop/codes/astro-spacex/dist/index.html"],"buildFormat":"directory","checkOrigin":false});

export { manifest };
