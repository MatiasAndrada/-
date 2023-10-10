/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, s as spreadAttributes } from '../astro_c490a007.mjs';
import 'html-escaper';
import 'clsx';
import { b as getCompany, a as $$Layout$1, c as getCapsules, $ as $$BackButton, G as Gallery, d as getRockets, e as getCores } from './_id__69ca02b6.mjs';
/* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           */
const $$Astro$4S = createAstro();
const $$NavigationItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4S, $$props, $$slots);
  Astro2.self = $$NavigationItem;
  const { name, path } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card text-white" data-astro-cid-a4bpkphp><a${addAttribute(path, "href")} class="glass-effect" data-astro-cid-a4bpkphp><h2 data-astro-cid-a4bpkphp>${name}<span class="icon" data-astro-cid-a4bpkphp>&rarr;</span></h2></a></li>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/components/navigation/NavigationItem.astro", void 0);

const navigation = [
  {
    name: "Launches",
    path: "/launches"
  },
  {
    name: "Rockets",
    path: "/rockets"
  },
  {
    name: "Cores",
    path: "/cores"
  },
  {
    name: "Capsules",
    path: "/capsules"
  }
  /*     {
          name: 'Dragons',
          path: '/dragons',
      },
      {
          name: 'Launchpads',
          path: '/launchpads',
      },
      {
          name: 'Missions',
          path: '/missions',
      },
      {
          name: 'Payloads',
          path: '/payloads',
      },
      {
          name: 'Roadster',
          path: '/roadster',
      },
      {
          name: 'Ships',
          path: '/ships',
      }, */
];

const $$Astro$4R = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4R, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<div class="filter-box col-span-3 my-6 mx-8 lg:mx-20 " data-astro-cid-cf5drfxn><p class="filter-text" data-astro-cid-cf5drfxn>Navigation:</p>${renderTemplate`<ul role="list" class="link-card-grid" data-astro-cid-cf5drfxn>${navigation.map((item) => renderTemplate`${renderComponent($$result, "ItemCard", $$NavigationItem, { ...item, "data-astro-cid-cf5drfxn": true })}`)}</ul>`}</div>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/components/navigation/Navigation.astro", void 0);

const $$Astro$4Q = createAstro();
const $$ActivityLog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4Q, $$props, $$slots);
  Astro2.self = $$ActivityLog;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Activity Log",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M0 1.5A.5.5 0 0 1 .5 1h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm0 3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-4 3A.5.5 0 0 1 .5 7h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm0 3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-4 3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ActivityLog.astro", void 0);

const $$Astro$4P = createAstro();
const $$AlignBaseline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4P, $$props, $$slots);
  Astro2.self = $$AlignBaseline;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Align Baseline",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M10.5 1.75a.5.5 0 0 1 .47.33l3 8.32a.5.5 0 1 1-.94.34l-.982-2.724H8.952L7.97 10.74a.5.5 0 0 1-.94-.339l3-8.32a.5.5 0 0 1 .47-.33Zm0 1.974 1.241 3.442H9.26L10.5 3.724ZM2.5 2.1c.22 0 .4.18.4.4v7.034l1.317-1.317a.4.4 0 0 1 .565.566l-2 2a.4.4 0 0 1-.565 0l-2-2a.4.4 0 1 1 .565-.566L2.1 9.534V2.5c0-.22.18-.4.4-.4ZM.1 13.5a.4.4 0 0 1 .4-.4h14a.4.4 0 1 1 0 .8H.5a.4.4 0 0 1-.4-.4Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/AlignBaseline.astro", void 0);

const $$Astro$4O = createAstro();
const $$AlignBottom = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4O, $$props, $$slots);
  Astro2.self = $$AlignBottom;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Align Bottom",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M9 3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11H1.5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H9V3Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/AlignBottom.astro", void 0);

const $$Astro$4N = createAstro();
const $$AlignCenterHorizontally = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4N, $$props, $$slots);
  Astro2.self = $$AlignCenterHorizontally;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Align Center Horizontally",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2 6a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h5v4.5a.5.5 0 0 0 1 0V9h5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H8V1.5a.5.5 0 0 0-1 0V6H2Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/AlignCenterHorizontally.astro", void 0);

const $$Astro$4M = createAstro();
const $$AlignCenterVertically = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4M, $$props, $$slots);
  Astro2.self = $$AlignCenterVertically;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Align Center Vertically",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7 1a1 1 0 0 0-1 1v5H1.5a.5.5 0 0 0 0 1H6v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8h4.5a.5.5 0 0 0 0-1H9V2a1 1 0 0 0-1-1H7Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/AlignCenterVertically.astro", void 0);

const $$Astro$4L = createAstro();
const $$AlignLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4L, $$props, $$slots);
  Astro2.self = $$AlignLeft;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Align Left",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M.5 1a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 1 0V9h11a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H1V1.5A.5.5 0 0 0 .5 1Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/AlignLeft.astro", void 0);

const $$Astro$4K = createAstro();
const $$AlignRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4K, $$props, $$slots);
  Astro2.self = $$AlignRight;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Align Right",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M14.5 1a.5.5 0 0 0-.5.5V6H3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h11v4.5a.5.5 0 1 0 1 0v-12a.5.5 0 0 0-.5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/AlignRight.astro", void 0);

const $$Astro$4J = createAstro();
const $$AlignTop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4J, $$props, $$slots);
  Astro2.self = $$AlignTop;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Align Top",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1.5 0a.5.5 0 0 0 0 1H6v11a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V1h4.5a.5.5 0 0 0 0-1h-12Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/AlignTop.astro", void 0);

const $$Astro$4I = createAstro();
const $$AllSides = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4I, $$props, $$slots);
  Astro2.self = $$AllSides;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "All Sides",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5.75 9.75 3h-4.5L7.5.75Zm0 13.5L9.75 12h-4.5l2.25 2.25Zm-4.5-9L.75 7.5 3 9.75v-4.5ZM14.25 7.5 12 5.25v4.5l2.25-2.25Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/AllSides.astro", void 0);

const $$Astro$4H = createAstro();
const $$Angle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4H, $$props, $$slots);
  Astro2.self = $$Angle;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Angle",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M8.891 2.194a.5.5 0 0 1 .115.697L2.474 12H13.5a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.406-.791l7.1-9.9a.5.5 0 0 1 .697-.115ZM11.1 6.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM10.4 4a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1.7 4.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1.3 1.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Angle.astro", void 0);

const $$Astro$4G = createAstro();
const $$Archive = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4G, $$props, $$slots);
  Astro2.self = $$Archive;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Archive",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.309 1a1 1 0 0 0-.894.553L1.053 4.276A.5.5 0 0 0 1 4.5V13a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.053-.224l-1.362-2.723A1 1 0 0 0 11.691 1H3.309Zm0 1H7v2H2.309l1-2ZM8 4V2h3.691l1 2H8Zm-.5 1H13v8H2V5h5.5Zm-2 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Archive.astro", void 0);

const $$Astro$4F = createAstro();
const $$ArrowBottomLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4F, $$props, $$slots);
  Astro2.self = $$ArrowBottomLeft;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Arrow Bottom Left",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M11.354 3.646a.5.5 0 0 1 0 .708L4.707 11H9a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 1 0v4.293l6.646-6.647a.5.5 0 0 1 .708 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ArrowBottomLeft.astro", void 0);

const $$Astro$4E = createAstro();
const $$ArrowBottomRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4E, $$props, $$slots);
  Astro2.self = $$ArrowBottomRight;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Arrow Bottom Right",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.646 3.646a.5.5 0 0 0 0 .708L10.293 11H6a.5.5 0 0 0 0 1h5.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v4.293L4.354 3.646a.5.5 0 0 0-.708 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ArrowBottomRight.astro", void 0);

const $$Astro$4D = createAstro();
const $$ArrowDown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4D, $$props, $$slots);
  Astro2.self = $$ArrowDown;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Arrow Down",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5 2a.5.5 0 0 1 .5.5v8.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L7 11.293V2.5a.5.5 0 0 1 .5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ArrowDown.astro", void 0);

const $$Astro$4C = createAstro();
const $$ArrowLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4C, $$props, $$slots);
  Astro2.self = $$ArrowLeft;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Arrow Left",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M6.854 3.146a.5.5 0 0 1 0 .708L3.707 7H12.5a.5.5 0 0 1 0 1H3.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ArrowLeft.astro", void 0);

const $$Astro$4B = createAstro();
const $$ArrowRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4B, $$props, $$slots);
  Astro2.self = $$ArrowRight;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Arrow Right",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M8.146 3.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8H2.5a.5.5 0 0 1 0-1h8.793L8.146 3.854a.5.5 0 0 1 0-.708Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ArrowRight.astro", void 0);

const $$Astro$4A = createAstro();
const $$ArrowTopLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4A, $$props, $$slots);
  Astro2.self = $$ArrowTopLeft;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Arrow Top Left",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M11.354 11.354a.5.5 0 0 0 0-.707L4.707 4H9a.5.5 0 0 0 0-1H3.5a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V4.707l6.646 6.647a.5.5 0 0 0 .708 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ArrowTopLeft.astro", void 0);

const $$Astro$4z = createAstro();
const $$ArrowTopRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4z, $$props, $$slots);
  Astro2.self = $$ArrowTopRight;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Arrow Top Right",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.646 11.354a.5.5 0 0 1 0-.707L10.293 4H6a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-1 0V4.707l-6.646 6.647a.5.5 0 0 1-.708 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ArrowTopRight.astro", void 0);

const $$Astro$4y = createAstro();
const $$ArrowUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4y, $$props, $$slots);
  Astro2.self = $$ArrowUp;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Arrow Up",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.146 2.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L8 3.707V12.5a.5.5 0 0 1-1 0V3.707L3.854 6.854a.5.5 0 1 1-.708-.708l4-4Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ArrowUp.astro", void 0);

const $$Astro$4x = createAstro();
const $$AspectRatio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4x, $$props, $$slots);
  Astro2.self = $$AspectRatio;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Aspect Ratio",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2.5 2h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5ZM1 2.5A1.5 1.5 0 0 1 2.5 1h10A1.5 1.5 0 0 1 14 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-10ZM7.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM8 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/AspectRatio.astro", void 0);

const $$Astro$4w = createAstro();
const $$Avatar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4w, $$props, $$slots);
  Astro2.self = $$Avatar;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Avatar",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M.877 7.5a6.623 6.623 0 1 1 13.246 0 6.623 6.623 0 0 1-13.246 0ZM7.5 1.827a5.673 5.673 0 0 0-4.193 9.494A4.971 4.971 0 0 1 7.5 9.025c1.762 0 3.31.916 4.193 2.296A5.673 5.673 0 0 0 7.5 1.827Zm3.482 10.152A4.023 4.023 0 0 0 7.5 9.975a4.023 4.023 0 0 0-3.482 2.004A5.648 5.648 0 0 0 7.5 13.173c1.312 0 2.52-.446 3.482-1.194ZM5.15 6.505a2.35 2.35 0 1 1 4.7 0 2.35 2.35 0 0 1-4.7 0Zm2.35-1.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Avatar.astro", void 0);

const $$Astro$4v = createAstro();
const $$Backpack = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4v, $$props, $$slots);
  Astro2.self = $$Backpack;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Backpack",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5 1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1h4a1 1 0 0 1 1 1v3c0 .889-.387 1.687-1 2.236V11.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 11.5V8.236A2.993 2.993 0 0 1 0 6V3a1 1 0 0 1 1-1h4V1Zm4 0v1H6V1h3ZM1 3h13v3a1.996 1.996 0 0 1-2 2H8v-.5a.5.5 0 0 0-1 0V8H3a1.996 1.996 0 0 1-2-2V3Zm6 6H3c-.35 0-.687-.06-1-.17v2.67a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8.83c-.313.11-.65.17-1 .17H8v.5a.5.5 0 0 1-1 0V9Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Backpack.astro", void 0);

const $$Astro$4u = createAstro();
const $$Badge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4u, $$props, $$slots);
  Astro2.self = $$Badge;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Badge",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.5 6h8a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 1 1 0-3ZM1 7.5A2.5 2.5 0 0 1 3.5 5h8a2.5 2.5 0 0 1 0 5h-8A2.5 2.5 0 0 1 1 7.5ZM4.5 7a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Badge.astro", void 0);

const $$Astro$4t = createAstro();
const $$BarChart = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4t, $$props, $$slots);
  Astro2.self = $$BarChart;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Bar Chart",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M11.5 1a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 .5-.5Zm-2 2a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0v-10a.5.5 0 0 1 .5-.5Zm4 0a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0v-10a.5.5 0 0 1 .5-.5Zm-8 1a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5Zm-4 1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5Zm6 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8a.5.5 0 0 1 .5-.5Zm-4 2a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 .5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/BarChart.astro", void 0);

const $$Astro$4s = createAstro();
const $$Bell = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4s, $$props, $$slots);
  Astro2.self = $$Bell;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Bell",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M8.601 1.25a1.1 1.1 0 0 1-.8 1.06A4.5 4.5 0 0 1 12 6.8v3.45c0 .806.033 1.457.724 1.803A.5.5 0 0 1 12.5 13H8.161a1 1 0 1 1-1.323 0H2.5a.5.5 0 0 1-.224-.947c.691-.346.724-.997.724-1.803V6.8a4.5 4.5 0 0 1 4.2-4.49 1.1 1.1 0 1 1 1.401-1.06ZM7.5 3.3A3.5 3.5 0 0 0 4 6.8v3.5c0 .446.001 1.108-.3 1.7h7.6c-.301-.592-.3-1.254-.3-1.7V6.8a3.5 3.5 0 0 0-3.5-3.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Bell.astro", void 0);

const $$Astro$4r = createAstro();
const $$BlendingMode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4r, $$props, $$slots);
  Astro2.self = $$BlendingMode;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Blending Mode",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3 9c0-2.5 1.5-4.75 4.5-7.5 3 2.75 4.5 5 4.5 7.5a4.5 4.5 0 1 1-9 0Zm7.952-.697c-1.279-.482-2.664.16-3.962.76-1.057.488-2.056.95-2.893.759A3.51 3.51 0 0 1 4 9c0-1.888 1.027-3.728 3.5-6.126 2.168 2.102 3.225 3.776 3.452 5.43Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/BlendingMode.astro", void 0);

const $$Astro$4q = createAstro();
const $$Bookmark = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4q, $$props, $$slots);
  Astro2.self = $$Bookmark;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Bookmark",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3 2.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.765.424L7.5 11.59l-3.735 2.334A.5.5 0 0 1 3 13.5v-11ZM4 3v9.598l2.97-1.856a1 1 0 0 1 1.06 0L11 12.598V3H4Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Bookmark.astro", void 0);

const $$Astro$4p = createAstro();
const $$BorderAll = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4p, $$props, $$slots);
  Astro2.self = $$BorderAll;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Border All",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M.25 1A.75.75 0 0 1 1 .25h13a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H1A.75.75 0 0 1 .25 14V1Zm1.5.75v11.5h11.5V1.75H1.75Z"></path><rect width="1" height="1" x="7" y="5" rx=".5"></rect><rect width="1" height="1" x="7" y="3" rx=".5"></rect><rect width="1" height="1" x="7" y="7" rx=".5"></rect><rect width="1" height="1" x="5" y="7" rx=".5"></rect><rect width="1" height="1" x="3" y="7" rx=".5"></rect><rect width="1" height="1" x="9" y="7" rx=".5"></rect><rect width="1" height="1" x="11" y="7" rx=".5"></rect><rect width="1" height="1" x="7" y="9" rx=".5"></rect><rect width="1" height="1" x="7" y="11" rx=".5"></rect></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/BorderAll.astro", void 0);

const $$Astro$4o = createAstro();
const $$BorderBottom = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4o, $$props, $$slots);
  Astro2.self = $$BorderBottom;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Border Bottom",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1 13.25h13v1.5H1v-1.5Z"></path><rect width="1" height="1" x="7" y="5" rx=".5"></rect><rect width="1" height="1" x="13" y="5" rx=".5"></rect><rect width="1" height="1" x="7" y="3" rx=".5"></rect><rect width="1" height="1" x="13" y="3" rx=".5"></rect><rect width="1" height="1" x="7" y="7" rx=".5"></rect><rect width="1" height="1" x="7" y="1" rx=".5"></rect><rect width="1" height="1" x="13" y="7" rx=".5"></rect><rect width="1" height="1" x="13" y="1" rx=".5"></rect><rect width="1" height="1" x="5" y="7" rx=".5"></rect><rect width="1" height="1" x="5" y="1" rx=".5"></rect><rect width="1" height="1" x="3" y="7" rx=".5"></rect><rect width="1" height="1" x="3" y="1" rx=".5"></rect><rect width="1" height="1" x="9" y="7" rx=".5"></rect><rect width="1" height="1" x="9" y="1" rx=".5"></rect><rect width="1" height="1" x="11" y="7" rx=".5"></rect><rect width="1" height="1" x="11" y="1" rx=".5"></rect><rect width="1" height="1" x="7" y="9" rx=".5"></rect><rect width="1" height="1" x="13" y="9" rx=".5"></rect><rect width="1" height="1" x="7" y="11" rx=".5"></rect><rect width="1" height="1" x="13" y="11" rx=".5"></rect><rect width="1" height="1" x="1" y="5" rx=".5"></rect><rect width="1" height="1" x="1" y="3" rx=".5"></rect><rect width="1" height="1" x="1" y="7" rx=".5"></rect><rect width="1" height="1" x="1" y="1" rx=".5"></rect><rect width="1" height="1" x="1" y="9" rx=".5"></rect><rect width="1" height="1" x="1" y="11" rx=".5"></rect></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/BorderBottom.astro", void 0);

const $$Astro$4n = createAstro();
const $$BorderDashed = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4n, $$props, $$slots);
  Astro2.self = $$BorderDashed;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Border Dashed",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M0 7.5A.5.5 0 0 1 .5 7H3a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5Zm5.75 0a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5ZM12 7a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1H12Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/BorderDashed.astro", void 0);

const $$Astro$4m = createAstro();
const $$BorderDotted = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4m, $$props, $$slots);
  Astro2.self = $$BorderDotted;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Border Dotted",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1.5 6.625a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Zm4 0a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Zm4 0a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Zm3.125.875a.875.875 0 1 1 1.75 0 .875.875 0 0 1-1.75 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/BorderDotted.astro", void 0);

const $$Astro$4l = createAstro();
const $$BorderLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4l, $$props, $$slots);
  Astro2.self = $$BorderLeft;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Border Left",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1.75 1v13H.25V1h1.5Z"></path><rect width="1" height="1" x="10" y="7" rx=".5" transform="rotate(90 10 7)"></rect><rect width="1" height="1" x="10" y="13" rx=".5" transform="rotate(90 10 13)"></rect><rect width="1" height="1" x="12" y="7" rx=".5" transform="rotate(90 12 7)"></rect><rect width="1" height="1" x="12" y="13" rx=".5" transform="rotate(90 12 13)"></rect><rect width="1" height="1" x="8" y="7" rx=".5" transform="rotate(90 8 7)"></rect><rect width="1" height="1" x="14" y="7" rx=".5" transform="rotate(90 14 7)"></rect><rect width="1" height="1" x="8" y="13" rx=".5" transform="rotate(90 8 13)"></rect><rect width="1" height="1" x="14" y="13" rx=".5" transform="rotate(90 14 13)"></rect><rect width="1" height="1" x="8" y="5" rx=".5" transform="rotate(90 8 5)"></rect><rect width="1" height="1" x="14" y="5" rx=".5" transform="rotate(90 14 5)"></rect><rect width="1" height="1" x="8" y="3" rx=".5" transform="rotate(90 8 3)"></rect><rect width="1" height="1" x="14" y="3" rx=".5" transform="rotate(90 14 3)"></rect><rect width="1" height="1" x="8" y="9" rx=".5" transform="rotate(90 8 9)"></rect><rect width="1" height="1" x="14" y="9" rx=".5" transform="rotate(90 14 9)"></rect><rect width="1" height="1" x="8" y="11" rx=".5" transform="rotate(90 8 11)"></rect><rect width="1" height="1" x="14" y="11" rx=".5" transform="rotate(90 14 11)"></rect><rect width="1" height="1" x="6" y="7" rx=".5" transform="rotate(90 6 7)"></rect><rect width="1" height="1" x="6" y="13" rx=".5" transform="rotate(90 6 13)"></rect><rect width="1" height="1" x="4" y="7" rx=".5" transform="rotate(90 4 7)"></rect><rect width="1" height="1" x="4" y="13" rx=".5" transform="rotate(90 4 13)"></rect><rect width="1" height="1" x="10" y="1" rx=".5" transform="rotate(90 10 1)"></rect><rect width="1" height="1" x="12" y="1" rx=".5" transform="rotate(90 12 1)"></rect><rect width="1" height="1" x="8" y="1" rx=".5" transform="rotate(90 8 1)"></rect><rect width="1" height="1" x="14" y="1" rx=".5" transform="rotate(90 14 1)"></rect><rect width="1" height="1" x="6" y="1" rx=".5" transform="rotate(90 6 1)"></rect><rect width="1" height="1" x="4" y="1" rx=".5" transform="rotate(90 4 1)"></rect></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/BorderLeft.astro", void 0);

const $$Astro$4k = createAstro();
const $$BorderNone = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4k, $$props, $$slots);
  Astro2.self = $$BorderNone;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Border None",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<rect width="1" height="1" x="7" y="5.025" rx=".5"></rect><rect width="1" height="1" x="13" y="5.025" rx=".5"></rect><rect width="1" height="1" x="7" y="3.025" rx=".5"></rect><rect width="1" height="1" x="13" y="3.025" rx=".5"></rect><rect width="1" height="1" x="7" y="7.025" rx=".5"></rect><rect width="1" height="1" x="7" y="13.025" rx=".5"></rect><rect width="1" height="1" x="7" y="1.025" rx=".5"></rect><rect width="1" height="1" x="13" y="7.025" rx=".5"></rect><rect width="1" height="1" x="13" y="13.025" rx=".5"></rect><rect width="1" height="1" x="13" y="1.025" rx=".5"></rect><rect width="1" height="1" x="5" y="7.025" rx=".5"></rect><rect width="1" height="1" x="5" y="13.025" rx=".5"></rect><rect width="1" height="1" x="5" y="1.025" rx=".5"></rect><rect width="1" height="1" x="3" y="7.025" rx=".5"></rect><rect width="1" height="1" x="3" y="13.025" rx=".5"></rect><rect width="1" height="1" x="3" y="1.025" rx=".5"></rect><rect width="1" height="1" x="9" y="7.025" rx=".5"></rect><rect width="1" height="1" x="9" y="13.025" rx=".5"></rect><rect width="1" height="1" x="9" y="1.025" rx=".5"></rect><rect width="1" height="1" x="11" y="7.025" rx=".5"></rect><rect width="1" height="1" x="11" y="13.025" rx=".5"></rect><rect width="1" height="1" x="11" y="1.025" rx=".5"></rect><rect width="1" height="1" x="7" y="9.025" rx=".5"></rect><rect width="1" height="1" x="13" y="9.025" rx=".5"></rect><rect width="1" height="1" x="7" y="11.025" rx=".5"></rect><rect width="1" height="1" x="13" y="11.025" rx=".5"></rect><rect width="1" height="1" x="1" y="5.025" rx=".5"></rect><rect width="1" height="1" x="1" y="3.025" rx=".5"></rect><rect width="1" height="1" x="1" y="7.025" rx=".5"></rect><rect width="1" height="1" x="1" y="13.025" rx=".5"></rect><rect width="1" height="1" x="1" y="1.025" rx=".5"></rect><rect width="1" height="1" x="1" y="9.025" rx=".5"></rect><rect width="1" height="1" x="1" y="11.025" rx=".5"></rect></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/BorderNone.astro", void 0);

const $$Astro$4j = createAstro();
const $$BorderRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4j, $$props, $$slots);
  Astro2.self = $$BorderRight;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Border Right",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M13.25 1v13h1.5V1h-1.5Z"></path><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 5 7)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 5 13)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 3 7)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 3 13)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 7)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 7)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 13)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 13)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 5)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 5)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 3)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 3)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 9)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 9)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 11)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 11)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 9 7)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 9 13)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 11 7)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 11 13)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 5 1)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 3 1)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 1)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 1)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 9 1)"></rect><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 11 1)"></rect></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/BorderRight.astro", void 0);

const $$Astro$4i = createAstro();
const $$BorderSolid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4i, $$props, $$slots);
  Astro2.self = $$BorderSolid;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Border Solid",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1.25 7.5a.5.5 0 0 1 .5-.5h11.5a.5.5 0 0 1 0 1H1.75a.5.5 0 0 1-.5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/BorderSolid.astro", void 0);

const $$Astro$4h = createAstro();
const $$BorderSplit = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4h, $$props, $$slots);
  Astro2.self = $$BorderSplit;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Border Split",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<rect width="1" height="1" x="7" y="5.025" rx=".5"></rect><rect width="1" height="1" x="7" y="3.025" rx=".5"></rect><rect width="1" height="1" x="7" y="7.025" rx=".5"></rect><rect width="1" height="1" x="7" y="13.025" rx=".5"></rect><rect width="1" height="1" x="7" y="1.025" rx=".5"></rect><rect width="1" height="1" x="13" y="7.025" rx=".5"></rect><rect width="1" height="1" x="5" y="7.025" rx=".5"></rect><rect width="1" height="1" x="3" y="7.025" rx=".5"></rect><rect width="1" height="1" x="9" y="7.025" rx=".5"></rect><rect width="1" height="1" x="11" y="7.025" rx=".5"></rect><rect width="1" height="1" x="7" y="9.025" rx=".5"></rect><rect width="1" height="1" x="7" y="11.025" rx=".5"></rect><rect width="1" height="1" x="1" y="7.025" rx=".5"></rect><path d="M1 1.5a.5.5 0 0 1 .5-.5H6v1H2v4H1V1.5ZM13 2H9V1h4.5a.5.5 0 0 1 .5.5V6h-1V2ZM1 13.5V9h1v4h4v1H1.5a.5.5 0 0 1-.5-.5Zm12-.5V9h1v4.5a.5.5 0 0 1-.5.5h-4v-1H13Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/BorderSplit.astro", void 0);

const $$Astro$4g = createAstro();
const $$BorderStyle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4g, $$props, $$slots);
  Astro2.self = $$BorderStyle;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Border Style",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12ZM1 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm0 4a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1.5.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1.5.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-7-4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm4.5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/BorderStyle.astro", void 0);

const $$Astro$4f = createAstro();
const $$BorderTop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4f, $$props, $$slots);
  Astro2.self = $$BorderTop;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Border Top",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M14 1.75H1V.25h13v1.5Z"></path><rect width="1" height="1" x="8" y="10" rx=".5" transform="rotate(-180 8 10)"></rect><rect width="1" height="1" x="2" y="10" rx=".5" transform="rotate(-180 2 10)"></rect><rect width="1" height="1" x="8" y="12" rx=".5" transform="rotate(-180 8 12)"></rect><rect width="1" height="1" x="2" y="12" rx=".5" transform="rotate(-180 2 12)"></rect><rect width="1" height="1" x="8" y="8" rx=".5" transform="rotate(-180 8 8)"></rect><rect width="1" height="1" x="8" y="14" rx=".5" transform="rotate(-180 8 14)"></rect><rect width="1" height="1" x="2" y="8" rx=".5" transform="rotate(-180 2 8)"></rect><rect width="1" height="1" x="2" y="14" rx=".5" transform="rotate(-180 2 14)"></rect><rect width="1" height="1" x="10" y="8" rx=".5" transform="rotate(-180 10 8)"></rect><rect width="1" height="1" x="10" y="14" rx=".5" transform="rotate(-180 10 14)"></rect><rect width="1" height="1" x="12" y="8" rx=".5" transform="rotate(-180 12 8)"></rect><rect width="1" height="1" x="12" y="14" rx=".5" transform="rotate(-180 12 14)"></rect><rect width="1" height="1" x="6" y="8" rx=".5" transform="rotate(-180 6 8)"></rect><rect width="1" height="1" x="6" y="14" rx=".5" transform="rotate(-180 6 14)"></rect><rect width="1" height="1" x="4" y="8" rx=".5" transform="rotate(-180 4 8)"></rect><rect width="1" height="1" x="4" y="14" rx=".5" transform="rotate(-180 4 14)"></rect><rect width="1" height="1" x="8" y="6" rx=".5" transform="rotate(-180 8 6)"></rect><rect width="1" height="1" x="2" y="6" rx=".5" transform="rotate(-180 2 6)"></rect><rect width="1" height="1" x="8" y="4" rx=".5" transform="rotate(-180 8 4)"></rect><rect width="1" height="1" x="2" y="4" rx=".5" transform="rotate(-180 2 4)"></rect><rect width="1" height="1" x="14" y="10" rx=".5" transform="rotate(-180 14 10)"></rect><rect width="1" height="1" x="14" y="12" rx=".5" transform="rotate(-180 14 12)"></rect><rect width="1" height="1" x="14" y="8" rx=".5" transform="rotate(-180 14 8)"></rect><rect width="1" height="1" x="14" y="14" rx=".5" transform="rotate(-180 14 14)"></rect><rect width="1" height="1" x="14" y="6" rx=".5" transform="rotate(-180 14 6)"></rect><rect width="1" height="1" x="14" y="4" rx=".5" transform="rotate(-180 14 4)"></rect></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/BorderTop.astro", void 0);

const $$Astro$4e = createAstro();
const $$BoxModel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4e, $$props, $$slots);
  Astro2.self = $$BoxModel;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Box Model",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2Zm0 1h11v11H2V2Zm2.5 2a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-6Zm.5 6V5h5v5H5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/BoxModel.astro", void 0);

const $$Astro$4d = createAstro();
const $$Box = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4d, $$props, $$slots);
  Astro2.self = $$Box;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Box",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M12.5 2h-10a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5Zm-10-1A1.5 1.5 0 0 0 1 2.5v10A1.5 1.5 0 0 0 2.5 14h10a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 12.5 1h-10Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Box.astro", void 0);

const $$Astro$4c = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4c, $$props, $$slots);
  Astro2.self = $$Button;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Button",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2 5h11a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1ZM0 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6Zm4.5.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm2.25.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm3.75-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Button.astro", void 0);

const $$Astro$4b = createAstro();
const $$Calendar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4b, $$props, $$slots);
  Astro2.self = $$Calendar;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Calendar",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.5 1a.5.5 0 0 1 .5.5V2h5v-.5a.5.5 0 0 1 1 0V2h1.5A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2H4v-.5a.5.5 0 0 1 .5-.5ZM10 3v.5a.5.5 0 0 0 1 0V3h1.5a.5.5 0 0 1 .5.5V5H2V3.5a.5.5 0 0 1 .5-.5H4v.5a.5.5 0 0 0 1 0V3h5ZM2 6v6.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V6H2Zm5 1.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM9.5 7a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1.5.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm.5 1.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM9 9.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM7.5 9a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM5 9.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM3.5 9a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM3 11.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1.5.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Calendar.astro", void 0);

const $$Astro$4a = createAstro();
const $$Camera = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4a, $$props, $$slots);
  Astro2.self = $$Camera;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Camera",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2 3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2ZM0 4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2 .25A.25.25 0 0 1 2.25 4h2.5a.25.25 0 0 1 .25.25v1.505a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25V4.25Zm10.101 3.334a2.601 2.601 0 1 1-5.202 0 2.601 2.601 0 0 1 5.202 0Zm1 0a3.601 3.601 0 1 1-7.202 0 3.601 3.601 0 0 1 7.202 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Camera.astro", void 0);

const $$Astro$49 = createAstro();
const $$CardStackMinus = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$49, $$props, $$slots);
  Astro2.self = $$CardStackMinus;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Card Stack Minus",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2.5 3a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-10ZM1 9.5a1.5 1.5 0 0 0 1 1.415v.585A1.5 1.5 0 0 0 3.5 13h8a1.5 1.5 0 0 0 1.5-1.5v-.585A1.5 1.5 0 0 0 14 9.5v-6A1.5 1.5 0 0 0 12.5 2h-10A1.5 1.5 0 0 0 1 3.5v6Zm11 2V11H3v.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5ZM5.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CardStackMinus.astro", void 0);

const $$Astro$48 = createAstro();
const $$CardStackPlus = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$48, $$props, $$slots);
  Astro2.self = $$CardStackPlus;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Card Stack Plus",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2 3.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-6Zm0 7.415A1.5 1.5 0 0 1 1 9.5v-6A1.5 1.5 0 0 1 2.5 2h10A1.5 1.5 0 0 1 14 3.5v6a1.5 1.5 0 0 1-1 1.415v.585a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 11.5v-.585ZM12 11v.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V11h9ZM5 6.5a.5.5 0 0 1 .5-.5H7V4.5a.5.5 0 0 1 1 0V6h1.5a.5.5 0 0 1 0 1H8v1.5a.5.5 0 0 1-1 0V7H5.5a.5.5 0 0 1-.5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CardStackPlus.astro", void 0);

const $$Astro$47 = createAstro();
const $$CardStack = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$47, $$props, $$slots);
  Astro2.self = $$CardStack;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Card Stack",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2 3.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-6Zm0 7.415A1.5 1.5 0 0 1 1 9.5v-6A1.5 1.5 0 0 1 2.5 2h10A1.5 1.5 0 0 1 14 3.5v6a1.5 1.5 0 0 1-1 1.415v.585a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 11.5v-.585ZM12 11v.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V11h9Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CardStack.astro", void 0);

const $$Astro$46 = createAstro();
const $$CaretDown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$46, $$props, $$slots);
  Astro2.self = $$CaretDown;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Caret Down",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.182 6.182a.45.45 0 0 1 .636 0L7.5 8.864l2.682-2.682a.45.45 0 0 1 .636.636l-3 3a.45.45 0 0 1-.636 0l-3-3a.45.45 0 0 1 0-.636Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CaretDown.astro", void 0);

const $$Astro$45 = createAstro();
const $$CaretLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$45, $$props, $$slots);
  Astro2.self = $$CaretLeft;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Caret Left",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M8.818 4.182a.45.45 0 0 1 0 .636L6.136 7.5l2.682 2.682a.45.45 0 1 1-.636.636l-3-3a.45.45 0 0 1 0-.636l3-3a.45.45 0 0 1 .636 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CaretLeft.astro", void 0);

const $$Astro$44 = createAstro();
const $$CaretRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$44, $$props, $$slots);
  Astro2.self = $$CaretRight;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Caret Right",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M6.182 4.182a.45.45 0 0 1 .636 0l3 3a.45.45 0 0 1 0 .636l-3 3a.45.45 0 1 1-.636-.636L8.864 7.5 6.182 4.818a.45.45 0 0 1 0-.636Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CaretRight.astro", void 0);

const $$Astro$43 = createAstro();
const $$CaretSort = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$43, $$props, $$slots);
  Astro2.self = $$CaretSort;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Caret Sort",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.932 5.432a.45.45 0 1 0 .636.636L7.5 4.136l1.932 1.932a.45.45 0 0 0 .636-.636l-2.25-2.25a.45.45 0 0 0-.636 0l-2.25 2.25Zm5.136 4.136a.45.45 0 0 0-.636-.636L7.5 10.864 5.568 8.932a.45.45 0 0 0-.636.636l2.25 2.25a.45.45 0 0 0 .636 0l2.25-2.25Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CaretSort.astro", void 0);

const $$Astro$42 = createAstro();
const $$CaretUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$42, $$props, $$slots);
  Astro2.self = $$CaretUp;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Caret Up",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.182 8.818a.45.45 0 0 1 0-.636l3-3a.45.45 0 0 1 .636 0l3 3a.45.45 0 0 1-.636.636L7.5 6.136 4.818 8.818a.45.45 0 0 1-.636 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CaretUp.astro", void 0);

const $$Astro$41 = createAstro();
const $$ChatBubble = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$41, $$props, $$slots);
  Astro2.self = $$ChatBubble;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Chat Bubble",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M12.5 3h-10A1.5 1.5 0 0 0 1 4.5v5A1.5 1.5 0 0 0 2.5 11h5a.5.5 0 0 1 .354.146L10 13.293V11.5a.5.5 0 0 1 .5-.5h2A1.5 1.5 0 0 0 14 9.5v-5A1.5 1.5 0 0 0 12.5 3Zm-10-1h10A2.5 2.5 0 0 1 15 4.5v5a2.5 2.5 0 0 1-2.5 2.5H11v2.5a.5.5 0 0 1-.854.354L7.293 12H2.5A2.5 2.5 0 0 1 0 9.5v-5A2.5 2.5 0 0 1 2.5 2Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ChatBubble.astro", void 0);

const $$Astro$40 = createAstro();
const $$CheckCircled = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$40, $$props, $$slots);
  Astro2.self = $$CheckCircled;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Check Circled",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877ZM1.827 7.5a5.673 5.673 0 1 1 11.346 0 5.673 5.673 0 0 1-11.346 0Zm8.332-1.962a.5.5 0 0 0-.818-.576L6.52 8.972 5.357 7.787a.5.5 0 0 0-.714.7L6.227 10.1a.5.5 0 0 0 .765-.062l3.167-4.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CheckCircled.astro", void 0);

const $$Astro$3$ = createAstro();
const $$Check = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3$, $$props, $$slots);
  Astro2.self = $$Check;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Check",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M11.467 3.727c.289.189.37.576.181.865l-4.25 6.5a.625.625 0 0 1-.944.12l-2.75-2.5a.625.625 0 0 1 .841-.925l2.208 2.007 3.849-5.886a.625.625 0 0 1 .865-.181Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Check.astro", void 0);

const $$Astro$3_ = createAstro();
const $$Checkbox = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3_, $$props, $$slots);
  Astro2.self = $$Checkbox;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Checkbox",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3 3h9v9H3V3ZM2 3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Zm8.35 2.511a.5.5 0 0 0-.825-.566L6.64 9.15l-1.443-1.74a.5.5 0 0 0-.77.638l1.866 2.25a.5.5 0 0 0 .797-.037l3.26-4.749Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Checkbox.astro", void 0);

const $$Astro$3Z = createAstro();
const $$ChevronDown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3Z, $$props, $$slots);
  Astro2.self = $$ChevronDown;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Chevron Down",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.135 6.158a.5.5 0 0 1 .707-.023L7.5 9.565l3.658-3.43a.5.5 0 0 1 .684.73l-4 3.75a.5.5 0 0 1-.684 0l-4-3.75a.5.5 0 0 1-.023-.707Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ChevronDown.astro", void 0);

const $$Astro$3Y = createAstro();
const $$ChevronLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3Y, $$props, $$slots);
  Astro2.self = $$ChevronLeft;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Chevron Left",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M8.842 3.135a.5.5 0 0 1 .023.707L5.435 7.5l3.43 3.658a.5.5 0 0 1-.73.684l-3.75-4a.5.5 0 0 1 0-.684l3.75-4a.5.5 0 0 1 .707-.023Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ChevronLeft.astro", void 0);

const $$Astro$3X = createAstro();
const $$ChevronRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3X, $$props, $$slots);
  Astro2.self = $$ChevronRight;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Chevron Right",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M6.158 3.135a.5.5 0 0 1 .707.023l3.75 4a.5.5 0 0 1 0 .684l-3.75 4a.5.5 0 1 1-.73-.684L9.566 7.5l-3.43-3.658a.5.5 0 0 1 .023-.707Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ChevronRight.astro", void 0);

const $$Astro$3W = createAstro();
const $$ChevronUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3W, $$props, $$slots);
  Astro2.self = $$ChevronUp;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Chevron Up",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.135 8.842a.5.5 0 0 0 .707.023L7.5 5.435l3.658 3.43a.5.5 0 0 0 .684-.73l-4-3.75a.5.5 0 0 0-.684 0l-4 3.75a.5.5 0 0 0-.023.707Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ChevronUp.astro", void 0);

const $$Astro$3V = createAstro();
const $$CircleBackslash = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3V, $$props, $$slots);
  Astro2.self = $$CircleBackslash;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Circle Backslash",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877ZM3.858 3.151a5.673 5.673 0 0 1 7.992 7.992L3.857 3.15Zm-.707.707a5.673 5.673 0 0 0 7.992 7.992L3.15 3.857Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CircleBackslash.astro", void 0);

const $$Astro$3U = createAstro();
const $$Circle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3U, $$props, $$slots);
  Astro2.self = $$Circle;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Circle",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M.877 7.5a6.623 6.623 0 1 1 13.246 0 6.623 6.623 0 0 1-13.246 0ZM7.5 1.827a5.673 5.673 0 1 0 0 11.346 5.673 5.673 0 0 0 0-11.346Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Circle.astro", void 0);

const $$Astro$3T = createAstro();
const $$ClipboardCopy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3T, $$props, $$slots);
  Astro2.self = $$ClipboardCopy;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Clipboard Copy",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5 2V1h5v1H5Zm-.25-2A.75.75 0 0 0 4 .75V1h-.5A1.5 1.5 0 0 0 2 2.5v10A1.5 1.5 0 0 0 3.5 14H7v-1H3.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5H4v.25c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75V2h.5a.5.5 0 0 1 .5.5V7h1V2.5A1.5 1.5 0 0 0 11.5 1H11V.75a.75.75 0 0 0-.75-.75h-5.5ZM9 8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm.5 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-.5 2.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-6-4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm.5 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM8.5 15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ClipboardCopy.astro", void 0);

const $$Astro$3S = createAstro();
const $$Clipboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3S, $$props, $$slots);
  Astro2.self = $$Clipboard;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Clipboard",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5 2V1h5v1H5Zm-.25-2A.75.75 0 0 0 4 .75V1h-.5A1.5 1.5 0 0 0 2 2.5v10A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 11.5 1H11V.75a.75.75 0 0 0-.75-.75h-5.5ZM11 2v.25a.75.75 0 0 1-.75.75h-5.5A.75.75 0 0 1 4 2.25V2h-.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H11Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Clipboard.astro", void 0);

const $$Astro$3R = createAstro();
const $$Clock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3R, $$props, $$slots);
  Astro2.self = $$Clock;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Clock",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877ZM1.827 7.5a5.673 5.673 0 1 1 11.346 0 5.673 5.673 0 0 1-11.346 0ZM8 4.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .146.354l2 2a.5.5 0 0 0 .708-.708L8 7.293V4.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Clock.astro", void 0);

const $$Astro$3Q = createAstro();
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3Q, $$props, $$slots);
  Astro2.self = $$Code;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Code",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M9.964 2.686a.5.5 0 1 0-.928-.372l-4 10a.5.5 0 1 0 .928.372l4-10Zm-6.11 2.46a.5.5 0 0 1 0 .708L2.207 7.5l1.647 1.646a.5.5 0 1 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708 0Zm7.292 0a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L12.793 7.5l-1.647-1.646a.5.5 0 0 1 0-.708Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Code.astro", void 0);

const $$Astro$3P = createAstro();
const $$CodeSandboxLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3P, $$props, $$slots);
  Astro2.self = $$CodeSandboxLogo;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "CodeSandbox Logo",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.711.797a.5.5 0 0 0-.422 0l-6 2.8A.5.5 0 0 0 1 4.05v6.9a.5.5 0 0 0 .289.453l6 2.8a.5.5 0 0 0 .422 0l6-2.8A.5.5 0 0 0 14 10.95v-6.9a.5.5 0 0 0-.289-.453l-6-2.8ZM7.5 3.157 5.98 2.51 7.5 1.8l1.52.71-1.52.646Zm.196 1.003 2.542-1.08 2.034.949L7.5 6.057 2.728 4.029l2.034-.95L7.304 4.16a.5.5 0 0 0 .392 0ZM8 6.93l5-2.124V7.93l-1.918.882a1 1 0 0 0-.582.908v2.078L8 12.965V6.93Zm3.5 4.402 1.5-.7V9.03l-1.5.69v1.612ZM7 6.93v6.034l-2.498-1.166V9.72a1 1 0 0 0-.582-.908L2 7.929V4.806L7 6.93Zm-5 3.7 1.502.702V9.72L2 9.03v1.602Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CodeSandboxLogo.astro", void 0);

const $$Astro$3O = createAstro();
const $$ColumnSpacing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3O, $$props, $$slots);
  Astro2.self = $$ColumnSpacing;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Column Spacing",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M8 1.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12ZM3.318 5.818a.45.45 0 1 0-.636-.636l-2 2a.45.45 0 0 0 0 .636l2 2a.45.45 0 1 0 .636-.636L2.086 7.95H5.5a.45.45 0 1 0 0-.9H2.086l1.232-1.232Zm9-.636a.45.45 0 1 0-.636.636l1.232 1.232H9.5a.45.45 0 0 0 0 .9h3.414l-1.232 1.232a.45.45 0 0 0 .636.636l2-2a.45.45 0 0 0 0-.636l-2-2Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ColumnSpacing.astro", void 0);

const $$Astro$3N = createAstro();
const $$Columns = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3N, $$props, $$slots);
  Astro2.self = $$Columns;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Columns",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2.15 14V1H.85v13h1.3Zm4 0V1h-1.3v13h1.3Zm4-13v13h-1.3V1h1.3Zm4 13V1h-1.3v13h1.3Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Columns.astro", void 0);

const $$Astro$3M = createAstro();
const $$Commit = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3M, $$props, $$slots);
  Astro2.self = $$Commit;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Commit",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M9.95 7.5a2.45 2.45 0 1 1-4.9 0 2.45 2.45 0 0 1 4.9 0Zm.913.5a3.4 3.4 0 0 1-6.726 0H.5a.5.5 0 0 1 0-1h3.637a3.4 3.4 0 0 1 6.726 0H14.5a.5.5 0 0 1 0 1h-3.637Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Commit.astro", void 0);

const $$Astro$3L = createAstro();
const $$Component1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3L, $$props, $$slots);
  Astro2.self = $$Component1;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Component 1",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.671 3.146a.5.5 0 0 0 0 .707l2.475 2.475a.5.5 0 0 0 .707 0l2.475-2.475a.5.5 0 0 0 0-.707L7.853.671a.5.5 0 0 0-.707 0L4.671 3.146ZM7.5 5.268 5.732 3.5 7.5 1.732 9.267 3.5 7.5 5.268ZM8.67 7.146a.5.5 0 0 0 0 .707l2.475 2.475a.5.5 0 0 0 .707 0l2.475-2.475a.5.5 0 0 0 0-.707l-2.475-2.475a.5.5 0 0 0-.707 0L8.671 7.146ZM11.5 9.268 9.732 7.5 11.5 5.732 13.268 7.5 11.5 9.268ZM4.67 11.853a.5.5 0 0 1 0-.707l2.475-2.475a.5.5 0 0 1 .707 0l2.475 2.475a.5.5 0 0 1 0 .707l-2.475 2.475a.5.5 0 0 1-.707 0l-2.475-2.474Zm1.061-.353L7.5 13.268 9.267 11.5 7.5 9.732 5.732 11.5ZM.672 7.146a.5.5 0 0 0 0 .708l2.474 2.474a.5.5 0 0 0 .707 0l2.475-2.474a.5.5 0 0 0 0-.708L3.853 4.672a.5.5 0 0 0-.707 0L.671 7.146ZM3.5 9.268 1.732 7.5 3.5 5.732 5.267 7.5 3.5 9.268Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Component1.astro", void 0);

const $$Astro$3K = createAstro();
const $$Component2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3K, $$props, $$slots);
  Astro2.self = $$Component2;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Component 2",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.88 1H11.12c.403 0 .735 0 1.006.022.281.023.54.072.782.196a2 2 0 0 1 .874.874c.124.243.173.501.196.782.022.27.022.603.022 1.005v7.241c0 .403 0 .735-.022 1.006-.023.281-.072.54-.196.782a2 2 0 0 1-.874.874c-.243.124-.501.173-.782.196-.27.022-.603.022-1.005.022H3.88c-.403 0-.735 0-1.006-.022-.281-.023-.54-.072-.782-.196a2 2 0 0 1-.874-.874c-.124-.243-.173-.501-.196-.782C1 11.856 1 11.523 1 11.12V3.88c0-.403 0-.735.022-1.006.023-.281.072-.54.196-.782a2 2 0 0 1 .874-.874c.243-.124.501-.173.782-.196C3.144 1 3.477 1 3.88 1Zm-.924 1.019c-.22.018-.332.05-.41.09a1 1 0 0 0-.437.437c-.04.078-.072.19-.09.41C2 3.18 2 3.472 2 3.9V7h5V2H3.9c-.428 0-.72 0-.944.019ZM7 8H2v3.1c0 .428 0 .72.019.944.018.22.05.332.09.41a1 1 0 0 0 .437.437c.078.04.19.072.41.09.225.019.516.019.944.019H7V8Zm1 0h5v3.1c0 .428 0 .72-.019.944-.018.22-.05.332-.09.41a1 1 0 0 1-.437.437c-.078.04-.19.072-.41.09-.225.019-.516.019-.944.019H8V8Zm5-1H8V2h3.1c.428 0 .72 0 .944.019.22.018.332.05.41.09a1 1 0 0 1 .437.437c.04.078.072.19.09.41.019.225.019.516.019.944V7Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Component2.astro", void 0);

const $$Astro$3J = createAstro();
const $$ComponentBoolean = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3J, $$props, $$slots);
  Astro2.self = $$ComponentBoolean;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Component Boolean",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.854 1.49a.5.5 0 0 0-.707 0L1.49 7.146a.5.5 0 0 0 0 .708l5.657 5.656a.5.5 0 0 0 .707 0l5.657-5.656a.5.5 0 0 0 0-.708L7.854 1.49ZM7.5 2.55 2.55 7.5l4.95 4.95v-9.9Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ComponentBoolean.astro", void 0);

const $$Astro$3I = createAstro();
const $$ComponentInstance = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3I, $$props, $$slots);
  Astro2.self = $$ComponentInstance;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Component Instance",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.146 1.49a.5.5 0 0 1 .708 0l5.657 5.656a.5.5 0 0 1 0 .708L7.854 13.51a.5.5 0 0 1-.708 0L1.49 7.854a.5.5 0 0 1 0-.708L7.146 1.49ZM7.5 2.55 2.55 7.5l4.95 4.95 4.95-4.95L7.5 2.55Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ComponentInstance.astro", void 0);

const $$Astro$3H = createAstro();
const $$ComponentNone = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3H, $$props, $$slots);
  Astro2.self = $$ComponentNone;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Component None",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.854 1.49a.5.5 0 0 0-.708 0L1.49 7.146a.5.5 0 0 0 0 .708l2.474 2.474-2.318 2.318a.5.5 0 0 0 .708.708l2.318-2.318 2.474 2.474a.5.5 0 0 0 .708 0l5.657-5.656a.5.5 0 0 0 0-.708l-2.475-2.474 2.318-2.318a.5.5 0 1 0-.708-.708l-2.318 2.318L7.854 1.49ZM9.62 4.672 7.5 2.55 2.55 7.5l2.122 2.121 4.95-4.95ZM5.38 10.328 7.5 12.45l4.95-4.95-2.121-2.121-4.95 4.95Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ComponentNone.astro", void 0);

const $$Astro$3G = createAstro();
const $$ComponentPlaceholder = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3G, $$props, $$slots);
  Astro2.self = $$ComponentPlaceholder;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Component Placeholder",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M12.803 7.146a.5.5 0 1 1 .707.708.5.5 0 0 1-.707-.708Zm-.707 1.415a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707Zm-1.414 1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707Zm-1.414 1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707ZM7.146 13.51a.5.5 0 1 1 .708-.707.5.5 0 0 1-.708.707Z"></path><path d="M2.904 8.56a.5.5 0 1 0 .707.708.5.5 0 0 0-.707-.707zm1.414 1.415a.5.5 0 1 0 .707.707.5.5 0 0 0-.707-.707zm1.414 1.414a.5.5 0 1 0 .707.707.5.5 0 0 0-.707-.707zM2.197 7.854a.5.5 0 0 0 .064-.63.506.506 0 0 0-.771-.078.5.5 0 0 0 .707.708zM3.61 5.732a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707zm1.414-1.414a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707zM6.44 2.904a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707zM7.854 1.49a.5.5 0 1 0-.708.707.5.5 0 0 0 .708-.707zm1.414 1.414a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707zm1.414 1.414a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707zm1.414 1.414a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ComponentPlaceholder.astro", void 0);

const $$Astro$3F = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3F, $$props, $$slots);
  Astro2.self = $$Container;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Container",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM5 13h5V2H5v11Zm-1 0a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v11Zm9.5-11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM2 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm11.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM2 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm11.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM2 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm11.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM2 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm11.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM2 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm11.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM2 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm11.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Container.astro", void 0);

const $$Astro$3E = createAstro();
const $$Cookie = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3E, $$props, $$slots);
  Astro2.self = $$Cookie;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Cookie",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M12.07 1.767c.41-.548-.61-1.313-1.02-.765-.412.548.609 1.313 1.02.765Zm-3.677-.689a7.53 7.53 0 0 0-3.809.631c-1.198.547-2.257 1.444-2.796 2.71-.412.968-.77 1.862-.787 3.025-.016 1.154.304 2.525 1.13 4.484.48 1.137 1.909 1.617 3.008 1.88 1.27.304 2.67.383 3.525.266.701-.096 1.48-.246 2.135-.777 1.099-.893 2.102-1.902 2.7-2.958.605-1.067.827-2.247.223-3.386-.16-.3-.406-.376-.68-.46-.105-.033-.213-.066-.321-.113-1.1-.478-1.756-1.03-1.807-1.351-.048-.3.008-.514.067-.737.032-.12.064-.243.082-.383.02-.172.018-.576-.363-.781-.295-.16-.484-.47-.66-.759-.043-.071-.085-.141-.128-.207-.286-.438-.704-1-1.52-1.084ZM4.999 2.62c-1.034.472-1.873 1.212-2.29 2.191-.41.964-.695 1.699-.708 2.648-.014.956.25 2.179 1.052 4.081.339.803 1.569 1.117 2.319 1.296 1.177.282 2.45.345 3.157.248.684-.093 1.217-.219 1.64-.562 1.06-.862 1.952-1.778 2.46-2.675.306-.539.885-2.143 0-2.459-1.875-.668-2.367-1.32-2.639-1.974-.18-.436-.161-.89-.033-1.334.02-.066.038-.131.076-.19a2.391 2.391 0 0 1-.518-.517c-.086-.114-.168-.251-.253-.393-.243-.408-.512-.859-.972-.906A6.531 6.531 0 0 0 5 2.619Zm8.21 1.156c.232-.548-.754-1.139-1.127-.673-.5.625.82 1.39 1.126.673Zm1.158-1.515c.6.015.788-1.144.205-1.31-.764-.219-.98 1.291-.205 1.31Zm-.081 2.831c.578.009.76-.709.197-.812-.738-.135-.946.8-.197.812Zm-7.378-.804c-.439.38-.856-.135-.928-.55-.112-.64.357-1.168.968-.825.485.272.319 1.063-.04 1.375ZM4.944 5.882c.464-.464-.35-1.312-.83-.83-.282.28-.106.602.122.83a.5.5 0 0 0 .708 0Zm2.032.838c.335.67 1.511.072 1.017-.572a.542.542 0 0 0-.373-.206c-.409-.046-.858.35-.644.778Zm.011 2.005c.153.394.523.594.931.438.355-.135.413-.766.253-1.089-.149-.299-.532-.396-.835-.28-.352.136-.48.593-.351.925l.002.006Zm3.4.116c.37-.184 1.074-.013 1.074.471 0 .4-.503.905-.899.97-.382.065-.858-.306-.797-.705.048-.312.356-.603.623-.736Zm-2.821 2.002a.523.523 0 0 0-.453.034h-.001c-.205.118-.4.367-.438.607-.085.52.457.64.852.615.68-.044.538-1.056.04-1.256Zm-2.687.05a.5.5 0 0 0 .203-.578c-.153-.518-.758-.602-1.117-.185a.5.5 0 0 0 .026.68l.003.004.003.004c.222.276.638.368.882.075Zm-1.833-3.08c.284.285.554.338.937.246.624-.15.154-1.816-.937-1.186-.338.195-.18.76 0 .94Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Cookie.astro", void 0);

const $$Astro$3D = createAstro();
const $$Copy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3D, $$props, $$slots);
  Astro2.self = $$Copy;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Copy",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1 9.5A1.5 1.5 0 0 0 2.5 11H4v-1H2.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V4H5.5A1.5 1.5 0 0 0 4 5.5v7A1.5 1.5 0 0 0 5.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 4H11V2.5A1.5 1.5 0 0 0 9.5 1h-7A1.5 1.5 0 0 0 1 2.5v7Zm4-4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-7Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Copy.astro", void 0);

const $$Astro$3C = createAstro();
const $$CornerBottomLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3C, $$props, $$slots);
  Astro2.self = $$CornerBottomLeft;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Corner Bottom Left",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M9.877 12H11.5a.5.5 0 0 0 0-1H9.9c-1.128 0-1.945 0-2.586-.053-.637-.052-1.057-.152-1.403-.329a3.5 3.5 0 0 1-1.53-1.529c-.176-.346-.276-.766-.328-1.403C4 7.045 4 6.228 4 5.1V3.5a.5.5 0 0 0-1 0v1.623c0 1.1 0 1.958.056 2.645.057.698.175 1.265.434 1.775a4.5 4.5 0 0 0 1.967 1.966c.51.26 1.077.378 1.775.435C7.92 12 8.776 12 9.877 12Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CornerBottomLeft.astro", void 0);

const $$Astro$3B = createAstro();
const $$CornerBottomRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3B, $$props, $$slots);
  Astro2.self = $$CornerBottomRight;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Corner Bottom Right",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5.123 12H3.5a.5.5 0 0 1 0-1h1.6c1.128 0 1.945 0 2.586-.053.637-.052 1.057-.152 1.403-.329a3.5 3.5 0 0 0 1.53-1.529c.176-.346.276-.766.328-1.403C11 7.045 11 6.228 11 5.1V3.5a.5.5 0 0 1 1 0v1.623c0 1.1 0 1.958-.056 2.645-.057.698-.175 1.265-.435 1.775a4.5 4.5 0 0 1-1.966 1.966c-.51.26-1.077.378-1.775.435C7.08 12 6.224 12 5.123 12Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CornerBottomRight.astro", void 0);

const $$Astro$3A = createAstro();
const $$CornerTopLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3A, $$props, $$slots);
  Astro2.self = $$CornerTopLeft;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Corner Top Left",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M9.877 3H11.5a.5.5 0 0 1 0 1H9.9c-1.128 0-1.945 0-2.586.053-.637.052-1.057.152-1.403.328a3.5 3.5 0 0 0-1.53 1.53c-.176.346-.276.766-.328 1.403C4 7.955 4 8.772 4 9.9v1.6a.5.5 0 0 1-1 0V9.877c0-1.1 0-1.958.056-2.645.057-.698.175-1.265.434-1.775A4.5 4.5 0 0 1 5.457 3.49c.51-.26 1.077-.377 1.775-.434C7.92 3 8.776 3 9.877 3Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CornerTopLeft.astro", void 0);

const $$Astro$3z = createAstro();
const $$CornerTopRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3z, $$props, $$slots);
  Astro2.self = $$CornerTopRight;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Corner Top Right",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5.123 3H3.5a.5.5 0 0 0 0 1h1.6c1.128 0 1.945 0 2.586.053.637.052 1.057.152 1.403.328a3.5 3.5 0 0 1 1.53 1.53c.176.346.276.766.328 1.403C11 7.955 11 8.772 11 9.9v1.6a.5.5 0 0 0 1 0V9.877c0-1.1 0-1.958-.056-2.645-.057-.698-.175-1.265-.435-1.775A4.5 4.5 0 0 0 9.543 3.49c-.51-.26-1.077-.377-1.775-.434C7.08 3 6.224 3 5.123 3Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CornerTopRight.astro", void 0);

const $$Astro$3y = createAstro();
const $$Corners = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3y, $$props, $$slots);
  Astro2.self = $$Corners;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Corners",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M10.1 3c.428 0 .72 0 .944.019.22.018.332.05.41.09a1 1 0 0 1 .437.437c.04.078.072.19.09.41.019.225.019.516.019.944v.6a.5.5 0 0 0 1 0v-.62c0-.403 0-.735-.022-1.006-.023-.281-.072-.54-.196-.782a2 2 0 0 0-.874-.874c-.243-.124-.501-.173-.782-.196C10.856 2 10.523 2 10.12 2H9.5a.5.5 0 0 0 0 1h.6ZM5.5 2h-.62c-.403 0-.735 0-1.006.022-.281.023-.54.072-.782.196a2 2 0 0 0-.874.874c-.124.243-.173.501-.196.782C2 4.144 2 4.477 2 4.88V5.5a.5.5 0 0 0 1 0v-.6c0-.428 0-.72.019-.944.018-.22.05-.332.09-.41a1 1 0 0 1 .437-.437c.078-.04.19-.072.41-.09C4.18 3 4.472 3 4.9 3h.6a.5.5 0 0 0 0-1ZM13 9.5a.5.5 0 0 0-1 0v.6c0 .428 0 .72-.019.944-.018.22-.05.332-.09.41a1 1 0 0 1-.437.437c-.078.04-.19.072-.41.09-.225.019-.516.019-.944.019h-.6a.5.5 0 0 0 0 1h.62c.403 0 .735 0 1.006-.022.281-.023.54-.072.782-.196a2 2 0 0 0 .874-.874c.124-.243.173-.501.196-.782.022-.27.022-.603.022-1.005V9.5ZM2.5 9a.5.5 0 0 1 .5.5v.6c0 .428 0 .72.019.944.018.22.05.332.09.41a1 1 0 0 0 .437.437c.078.04.19.072.41.09.225.019.516.019.944.019h.6a.5.5 0 0 1 0 1h-.62c-.403 0-.735 0-1.006-.022-.281-.023-.54-.072-.782-.196a2 2 0 0 1-.874-.874c-.124-.243-.173-.501-.196-.782C2 10.856 2 10.523 2 10.12V9.5a.5.5 0 0 1 .5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Corners.astro", void 0);

const $$Astro$3x = createAstro();
const $$CountdownTimer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3x, $$props, $$slots);
  Astro2.self = $$CountdownTimer;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Countdown Timer",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M13.15 7.5c0-2.835-2.21-5.65-5.65-5.65-2.778 0-4.151 2.056-4.737 3.15H4.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.813C2.705 3.071 4.334.85 7.5.85c4.063 0 6.65 3.335 6.65 6.65 0 3.315-2.587 6.65-6.65 6.65-1.944 0-3.562-.77-4.715-1.942a6.772 6.772 0 0 1-1.427-2.167.5.5 0 1 1 .925-.38c.28.681.692 1.314 1.216 1.846.972.99 2.336 1.643 4.001 1.643 3.44 0 5.65-2.815 5.65-5.65ZM7 10V5h1v5H7Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CountdownTimer.astro", void 0);

const $$Astro$3w = createAstro();
const $$CounterClockwiseClock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3w, $$props, $$slots);
  Astro2.self = $$CounterClockwiseClock;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Counter Clockwise Clock",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M13.15 7.5c0-2.835-2.21-5.65-5.65-5.65-2.778 0-4.152 2.056-4.737 3.15H4.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.813C2.705 3.071 4.334.85 7.5.85c4.063 0 6.65 3.335 6.65 6.65 0 3.315-2.587 6.65-6.65 6.65-1.944 0-3.562-.77-4.715-1.942a6.772 6.772 0 0 1-1.427-2.167.5.5 0 1 1 .925-.38c.28.681.692 1.314 1.216 1.846.972.99 2.336 1.643 4.001 1.643 3.44 0 5.65-2.815 5.65-5.65ZM7.5 4a.5.5 0 0 1 .5.5v2.793l1.854 1.853a.5.5 0 0 1-.708.708l-2-2A.5.5 0 0 1 7 7.5v-3a.5.5 0 0 1 .5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CounterClockwiseClock.astro", void 0);

const $$Astro$3v = createAstro();
const $$Crop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3v, $$props, $$slots);
  Astro2.self = $$Crop;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Crop",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.5 0a.5.5 0 0 1 .5.5V3h7.5a.5.5 0 0 1 .5.5V11h2.5a.5.5 0 1 1 0 1H12v2.5a.5.5 0 0 1-1 0V12H3.5a.5.5 0 0 1-.5-.5V4H.5a.5.5 0 1 1 0-1H3V.5a.5.5 0 0 1 .5-.5ZM4 4v7h7V4H4Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Crop.astro", void 0);

const $$Astro$3u = createAstro();
const $$Cross1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3u, $$props, $$slots);
  Astro2.self = $$Cross1;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Cross 1",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M12.854 2.854a.5.5 0 0 0-.708-.708L7.5 6.793 2.854 2.146a.5.5 0 1 0-.708.708L6.793 7.5l-4.647 4.646a.5.5 0 0 0 .708.708L7.5 8.207l4.646 4.647a.5.5 0 0 0 .708-.708L8.207 7.5l4.647-4.646Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Cross1.astro", void 0);

const $$Astro$3t = createAstro();
const $$Cross2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3t, $$props, $$slots);
  Astro2.self = $$Cross2;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Cross 2",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5l3.469-3.468Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Cross2.astro", void 0);

const $$Astro$3s = createAstro();
const $$CrossCircled = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3s, $$props, $$slots);
  Astro2.self = $$CrossCircled;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Cross Circled",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M.877 7.5a6.623 6.623 0 1 1 13.246 0 6.623 6.623 0 0 1-13.246 0ZM7.5 1.827a5.673 5.673 0 1 0 0 11.346 5.673 5.673 0 0 0 0-11.346Zm2.354 3.32a.5.5 0 0 1 0 .707L8.207 7.5l1.647 1.646a.5.5 0 0 1-.708.708L7.5 8.207 5.854 9.854a.5.5 0 0 1-.708-.708L6.793 7.5 5.146 5.854a.5.5 0 0 1 .708-.708L7.5 6.793l1.646-1.647a.5.5 0 0 1 .708 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CrossCircled.astro", void 0);

const $$Astro$3r = createAstro();
const $$Crosshair1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3r, $$props, $$slots);
  Astro2.self = $$Crosshair1;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Crosshair 1",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M.877 7.502a6.625 6.625 0 1 1 13.25 0 6.625 6.625 0 0 1-13.25 0ZM1.85 7A5.676 5.676 0 0 1 7 1.849V4.5a.5.5 0 1 0 1 0V1.849A5.677 5.677 0 0 1 13.155 7H10.5a.5.5 0 0 0 0 1h2.655A5.676 5.676 0 0 1 8 13.155V10.5a.5.5 0 0 0-1 0v2.655A5.677 5.677 0 0 1 1.849 8H4.5a.5.5 0 0 0 0-1H1.849Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Crosshair1.astro", void 0);

const $$Astro$3q = createAstro();
const $$Crosshair2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3q, $$props, $$slots);
  Astro2.self = $$Crosshair2;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Crosshair 2",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5 0a.5.5 0 0 1 .5.5v1.307A5.624 5.624 0 0 1 13.007 7H14.5a.5.5 0 0 1 0 1h-1.511A5.625 5.625 0 0 1 8 12.989V14.5a.5.5 0 0 1-1 0v-1.493A5.624 5.624 0 0 1 1.807 8H.5a.5.5 0 0 1 0-1h1.289A5.624 5.624 0 0 1 7 1.789V.5a.5.5 0 0 1 .5-.5ZM8 12.032V9.5a.5.5 0 0 0-1 0v2.554A4.675 4.675 0 0 1 2.763 8H5.5a.5.5 0 0 0 0-1H2.742A4.674 4.674 0 0 1 7 2.742V5.5a.5.5 0 0 0 1 0V2.763A4.675 4.675 0 0 1 12.054 7H9.5a.5.5 0 0 0 0 1h2.532A4.675 4.675 0 0 1 8 12.032Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Crosshair2.astro", void 0);

const $$Astro$3p = createAstro();
const $$CrumpledPaper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3p, $$props, $$slots);
  Astro2.self = $$CrumpledPaper;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Crumpled Paper",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.61.063a.45.45 0 0 0-.528.27l-.928 2.32-2.321.93a.45.45 0 0 0-.193.687l1.371 1.829-.948 3.792a.45.45 0 0 0 .264.524L4.2 11.613l1.425 2.137a.45.45 0 0 0 .498.183l3.5-1a.41.41 0 0 0 .018-.006l3-1a.45.45 0 0 0 .297-.33l1-4.5a.45.45 0 0 0-.169-.457l-1.82-1.365V3a.45.45 0 0 0-.249-.402l-3-1.5a.45.45 0 0 0-.092-.035l-4-1Zm6.822 5.949 1.343 1.007-2.563 2.135a.45.45 0 0 0-.139.204l-.82 2.457-1.515-.947a.45.45 0 1 0-.477.764l1.142.713-2.21.632L4.873 11a.45.45 0 0 0-.2-.165L2.03 9.734l.821-3.284H5a.45.45 0 1 0 0-.9H2.725L1.712 4.2l1.802-.721 2.844.948a.45.45 0 0 0 .493-.146l1.773-2.216 2.426 1.213v1.917l-2.217.887a.45.45 0 0 0-.26.276l-.5 1.5a.45.45 0 1 0 .854.284L9.36 6.84l2.071-.828ZM7.711 1.766 6.345 3.474l-2.25-.75.677-1.692 2.939.734Zm2.5 10.023 1.905-.635.659-2.964-1.889 1.574-.675 2.025Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CrumpledPaper.astro", void 0);

const $$Astro$3o = createAstro();
const $$Cube = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3o, $$props, $$slots);
  Astro2.self = $$Cube;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Cube",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.289.797a.5.5 0 0 1 .422 0l6 2.8A.5.5 0 0 1 14 4.05v6.9a.5.5 0 0 1-.289.453l-6 2.8a.5.5 0 0 1-.422 0l-6-2.8A.5.5 0 0 1 1 10.95v-6.9a.5.5 0 0 1 .289-.453l6-2.8ZM2 4.806 7 6.93v6.034l-5-2.333V4.806Zm6 8.159 5-2.333V4.806L8 6.93v6.034Zm-.5-6.908 4.772-2.028L7.5 1.802 2.728 4.029 7.5 6.057Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Cube.astro", void 0);

const $$Astro$3n = createAstro();
const $$CursorArrow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3n, $$props, $$slots);
  Astro2.self = $$CursorArrow;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Cursor Arrow",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.292.049a.5.5 0 0 1 .535.077L12.86 7.95a.5.5 0 0 1-.306.878l-3.334.147 1.931 4.244a.5.5 0 0 1-.247.662l-2.153.98a.5.5 0 0 1-.662-.247L6.153 10.37l-2.29 2.416A.5.5 0 0 1 3 12.44V.504a.5.5 0 0 1 .292-.455ZM4 1.599v9.589l1.938-2.044a.5.5 0 0 1 .818.137l2.035 4.463 1.242-.566-2.031-4.463a.5.5 0 0 1 .433-.707l2.82-.124L4 1.599Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CursorArrow.astro", void 0);

const $$Astro$3m = createAstro();
const $$CursorText = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3m, $$props, $$slots);
  Astro2.self = $$CursorText;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Cursor Text",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.5 1a.5.5 0 0 0 0 1c.922 0 1.54.23 1.92.564.373.325.58.802.58 1.436v3H5.75a.5.5 0 0 0 0 1H7v3c0 .634-.207 1.11-.58 1.436-.38.334-.998.564-1.92.564a.5.5 0 0 0 0 1c1.078 0 1.96-.27 2.58-.811.162-.142.302-.3.42-.47.118.17.258.328.42.47.62.541 1.502.811 2.58.811a.5.5 0 0 0 0-1c-.922 0-1.54-.23-1.92-.564C8.206 12.111 8 11.634 8 11V8h1.25a.5.5 0 0 0 0-1H8V4c0-.634.207-1.11.58-1.436C8.96 2.23 9.577 2 10.5 2a.5.5 0 0 0 0-1c-1.078 0-1.96.27-2.58.811-.162.142-.302.3-.42.47a2.588 2.588 0 0 0-.42-.47C6.46 1.27 5.577 1 4.5 1Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/CursorText.astro", void 0);

const $$Astro$3l = createAstro();
const $$Dash = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3l, $$props, $$slots);
  Astro2.self = $$Dash;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Dash",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Dash.astro", void 0);

const $$Astro$3k = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3k, $$props, $$slots);
  Astro2.self = $$Dashboard;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Dashboard",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 1.04 2.15C1 2.324 1 2.52 1 2.75V5.25c0 .229 0 .426.041.6A1.5 1.5 0 0 0 2.15 6.96C2.324 7 2.52 7 2.75 7H5.25c.229 0 .426 0 .6-.041A1.5 1.5 0 0 0 6.96 5.85C7 5.676 7 5.48 7 5.25V2.75c0-.229 0-.426-.041-.6A1.5 1.5 0 0 0 5.85 1.04C5.676 1 5.48 1 5.25 1H2.8Zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.003.374-.014.417a.5.5 0 0 1-.37.37C5.575 5.996 5.509 6 5.2 6H2.8c-.308 0-.374-.003-.417-.014a.5.5 0 0 1-.37-.37C2.004 5.575 2 5.509 2 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37ZM9.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 8.04 2.15C8 2.324 8 2.52 8 2.75V5.25c0 .229 0 .426.041.6A1.5 1.5 0 0 0 9.15 6.96C9.324 7 9.52 7 9.75 7H12.25c.229 0 .426 0 .6-.041A1.5 1.5 0 0 0 13.96 5.85C14 5.676 14 5.48 14 5.25V2.75c0-.229 0-.426-.041-.6A1.5 1.5 0 0 0 12.85 1.04C12.676 1 12.48 1 12.25 1H9.8Zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 0 1-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.003-.417-.014a.5.5 0 0 1-.37-.37C9.004 5.575 9 5.509 9 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37ZM2.75 8H5.25c.229 0 .426 0 .6.041A1.5 1.5 0 0 1 6.96 9.15C7 9.324 7 9.52 7 9.75V12.25c0 .229 0 .426-.041.6A1.5 1.5 0 0 1 5.85 13.96C5.676 14 5.48 14 5.25 14H2.75c-.229 0-.426 0-.6-.041A1.5 1.5 0 0 1 1.04 12.85C1 12.676 1 12.48 1 12.25V9.75c0-.229 0-.426.041-.6A1.5 1.5 0 0 1 2.15 8.04C2.324 8 2.52 8 2.75 8Zm.05 1c-.308 0-.374.003-.417.014a.5.5 0 0 0-.37.37C2.004 9.425 2 9.491 2 9.8v2.4c0 .308.003.374.014.417a.5.5 0 0 0 .37.37c.042.01.108.013.416.013h2.4c.308 0 .374-.004.417-.014a.5.5 0 0 0 .37-.37c.01-.042.013-.108.013-.416V9.8c0-.308-.003-.374-.014-.417a.5.5 0 0 0-.37-.37C5.575 9.004 5.509 9 5.2 9H2.8Zm7-1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 8.04 9.15C8 9.324 8 9.52 8 9.75V12.25c0 .229 0 .426.041.6A1.5 1.5 0 0 0 9.15 13.96c.174.041.371.041.6.041H12.25c.229 0 .426 0 .6-.041a1.5 1.5 0 0 0 1.109-1.109c.041-.174.041-.371.041-.6V9.75c0-.229 0-.426-.041-.6A1.5 1.5 0 0 0 12.85 8.04C12.676 8 12.48 8 12.25 8H9.8Zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 0 1-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.004-.417-.014a.5.5 0 0 1-.37-.37C9.004 12.575 9 12.509 9 12.2V9.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Dashboard.astro", void 0);

const $$Astro$3j = createAstro();
const $$Dimensions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3j, $$props, $$slots);
  Astro2.self = $$Dimensions;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Dimensions",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3 2.739a.25.25 0 0 1-.403.197L1.004 1.697a.25.25 0 0 1 0-.394L2.597.063A.25.25 0 0 1 3 .262v.74h6V.26a.25.25 0 0 1 .404-.197l1.592 1.239a.25.25 0 0 1 0 .394l-1.592 1.24A.25.25 0 0 1 9 2.738V2H3v.739ZM9.5 5h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-7-1A1.5 1.5 0 0 0 1 5.5v7A1.5 1.5 0 0 0 2.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 9.5 4h-7Zm12.239 2H14v6h.739a.25.25 0 0 1 .197.403l-1.239 1.593a.25.25 0 0 1-.394 0l-1.24-1.593a.25.25 0 0 1 .198-.403H13V6h-.739a.25.25 0 0 1-.197-.403l1.239-1.593a.25.25 0 0 1 .394 0l1.24 1.593a.25.25 0 0 1-.198.403Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Dimensions.astro", void 0);

const $$Astro$3i = createAstro();
const $$Disc = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3i, $$props, $$slots);
  Astro2.self = $$Disc;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Disc",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877ZM1.827 7.5a5.673 5.673 0 1 1 11.346 0 5.673 5.673 0 0 1-11.346 0Zm6.546 0a.873.873 0 1 1-1.745 0 .873.873 0 0 1 1.745 0Zm.95 0a1.823 1.823 0 1 1-3.645 0 1.823 1.823 0 0 1 3.645 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Disc.astro", void 0);

const $$Astro$3h = createAstro();
const $$DividerHorizontal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3h, $$props, $$slots);
  Astro2.self = $$DividerHorizontal;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Divider Horizontal",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2 7.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/DividerHorizontal.astro", void 0);

const $$Astro$3g = createAstro();
const $$DividerVertical = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3g, $$props, $$slots);
  Astro2.self = $$DividerVertical;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Divider Vertical",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5 2a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0v-10a.5.5 0 0 1 .5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/DividerVertical.astro", void 0);

const $$Astro$3f = createAstro();
const $$DotFilled = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3f, $$props, $$slots);
  Astro2.self = $$DotFilled;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Dot Filled",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0 2.375 2.375 0 0 1 4.75 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/DotFilled.astro", void 0);

const $$Astro$3e = createAstro();
const $$Dot = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3e, $$props, $$slots);
  Astro2.self = $$Dot;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Dot",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5 9.125a1.625 1.625 0 1 0 0-3.25 1.625 1.625 0 0 0 0 3.25Zm0 1a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Dot.astro", void 0);

const $$Astro$3d = createAstro();
const $$DotsHorizontal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3d, $$props, $$slots);
  Astro2.self = $$DotsHorizontal;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Dots Horizontal",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.625 7.5a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Zm5 0a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12.5 8.625a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/DotsHorizontal.astro", void 0);

const $$Astro$3c = createAstro();
const $$DotsVertical = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3c, $$props, $$slots);
  Astro2.self = $$DotsVertical;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Dots Vertical",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M8.625 2.5a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Zm0 5a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM7.5 13.625a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/DotsVertical.astro", void 0);

const $$Astro$3b = createAstro();
const $$DoubleArrowDown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3b, $$props, $$slots);
  Astro2.self = $$DoubleArrowDown;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Double Arrow Down",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.854 2.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7.5 5.793 3.854 2.146Zm0 6a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7.5 11.793 3.854 8.146Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/DoubleArrowDown.astro", void 0);

const $$Astro$3a = createAstro();
const $$DoubleArrowLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3a, $$props, $$slots);
  Astro2.self = $$DoubleArrowLeft;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Double Arrow Left",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M6.854 3.854a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L3.207 7.5l3.647-3.646Zm6 0a.5.5 0 0 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L9.207 7.5l3.647-3.646Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/DoubleArrowLeft.astro", void 0);

const $$Astro$39 = createAstro();
const $$DoubleArrowRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$39, $$props, $$slots);
  Astro2.self = $$DoubleArrowRight;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Double Arrow Right",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2.146 11.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 1 0-.708.708L5.793 7.5l-3.647 3.646Zm6 0a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 1 0-.708.708L11.793 7.5l-3.647 3.646Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/DoubleArrowRight.astro", void 0);

const $$Astro$38 = createAstro();
const $$DoubleArrowUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$38, $$props, $$slots);
  Astro2.self = $$DoubleArrowUp;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Double Arrow Up",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M11.146 6.854a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 3.207l3.646 3.647Zm0 6a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 .708.708L7.5 9.207l3.646 3.647Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/DoubleArrowUp.astro", void 0);

const $$Astro$37 = createAstro();
const $$Download = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$37, $$props, $$slots);
  Astro2.self = $$Download;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Download",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5 1.05a.45.45 0 0 1 .45.45v6.914l2.232-2.232a.45.45 0 1 1 .636.636l-3 3a.45.45 0 0 1-.636 0l-3-3a.45.45 0 1 1 .636-.636L7.05 8.414V1.5a.45.45 0 0 1 .45-.45ZM2.5 10a.5.5 0 0 1 .5.5V12c0 .554.446 1 .996 1h7.005A.999.999 0 0 0 12 12v-1.5a.5.5 0 0 1 1 0V12c0 1.104-.894 2-1.999 2H3.996A1.997 1.997 0 0 1 2 12v-1.5a.5.5 0 0 1 .5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Download.astro", void 0);

const $$Astro$36 = createAstro();
const $$DragHandleDots1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$36, $$props, $$slots);
  Astro2.self = $$DragHandleDots1;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Drag Handle Dots 1",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<circle cx="4.5" cy="2.5" r=".6"></circle><circle cx="4.5" cy="4.5" r=".6"></circle><circle cx="4.5" cy="6.499" r=".6"></circle><circle cx="4.5" cy="8.499" r=".6"></circle><circle cx="4.5" cy="10.498" r=".6"></circle><circle cx="4.5" cy="12.498" r=".6"></circle><circle cx="6.5" cy="2.5" r=".6"></circle><circle cx="6.5" cy="4.5" r=".6"></circle><circle cx="6.5" cy="6.499" r=".6"></circle><circle cx="6.5" cy="8.499" r=".6"></circle><circle cx="6.5" cy="10.498" r=".6"></circle><circle cx="6.5" cy="12.498" r=".6"></circle><circle cx="8.499" cy="2.5" r=".6"></circle><circle cx="8.499" cy="4.5" r=".6"></circle><circle cx="8.499" cy="6.499" r=".6"></circle><circle cx="8.499" cy="8.499" r=".6"></circle><circle cx="8.499" cy="10.498" r=".6"></circle><circle cx="8.499" cy="12.498" r=".6"></circle><circle cx="10.499" cy="2.5" r=".6"></circle><circle cx="10.499" cy="4.5" r=".6"></circle><circle cx="10.499" cy="6.499" r=".6"></circle><circle cx="10.499" cy="8.499" r=".6"></circle><circle cx="10.499" cy="10.498" r=".6"></circle><circle cx="10.499" cy="12.498" r=".6"></circle></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/DragHandleDots1.astro", void 0);

const $$Astro$35 = createAstro();
const $$DragHandleDots2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$35, $$props, $$slots);
  Astro2.self = $$DragHandleDots2;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Drag Handle Dots 2",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5.5 4.625a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Zm4 0a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM10.625 7.5a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM5.5 8.625a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Zm5.125 2.875a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM5.5 12.625a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/DragHandleDots2.astro", void 0);

const $$Astro$34 = createAstro();
const $$DragHandleHorizontal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$34, $$props, $$slots);
  Astro2.self = $$DragHandleHorizontal;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Drag Handle Horizontal",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2.5 4.1a.4.4 0 1 0 0 .8h10a.4.4 0 0 0 0-.8h-10Zm0 2a.4.4 0 1 0 0 .8h10a.4.4 0 0 0 0-.8h-10Zm-.4 2.4c0-.22.18-.4.4-.4h10a.4.4 0 0 1 0 .8h-10a.4.4 0 0 1-.4-.4Zm.4 1.6a.4.4 0 0 0 0 .8h10a.4.4 0 0 0 0-.8h-10Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/DragHandleHorizontal.astro", void 0);

const $$Astro$33 = createAstro();
const $$DragHandleVertical = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$33, $$props, $$slots);
  Astro2.self = $$DragHandleVertical;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Drag Handle Vertical",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.1 12.5a.4.4 0 0 0 .8 0v-10a.4.4 0 0 0-.8 0v10Zm2 0a.4.4 0 0 0 .8 0v-10a.4.4 0 0 0-.8 0v10Zm2.4.4a.4.4 0 0 1-.4-.4v-10a.4.4 0 1 1 .8 0v10a.4.4 0 0 1-.4.4Zm1.6-.4a.4.4 0 0 0 .8 0v-10a.4.4 0 0 0-.8 0v10Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/DragHandleVertical.astro", void 0);

const $$Astro$32 = createAstro();
const $$DrawingPinFilled = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$32, $$props, $$slots);
  Astro2.self = $$DrawingPinFilled;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Drawing Pin Filled",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M9.621 1.136a.5.5 0 0 1 .707 0l1.061 1.06 1.414 1.415 1.06 1.06a.5.5 0 1 1-.706.708l-.653-.653-3.637 4.848 1.108 1.108a.5.5 0 0 1-.707.707L7.854 9.975l-1.061-1.06-3.27 3.27a.5.5 0 1 1-.708-.708l3.27-3.27-1.06-1.06-1.414-1.415a.5.5 0 1 1 .707-.707l1.108 1.108 4.848-3.637-.653-.653a.5.5 0 0 1 0-.707Z"></path><path d="M9.621 1.136a.5.5 0 0 1 .707 0l1.061 1.06 1.414 1.415 1.06 1.06a.5.5 0 1 1-.706.708l-.653-.653-3.637 4.848 1.108 1.108a.5.5 0 0 1-.707.707L7.854 9.975l-1.061-1.06-3.27 3.27a.5.5 0 1 1-.708-.708l3.27-3.27-1.06-1.06-1.414-1.415a.5.5 0 1 1 .707-.707l1.108 1.108 4.848-3.637-.653-.653a.5.5 0 0 1 0-.707Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/DrawingPinFilled.astro", void 0);

const $$Astro$31 = createAstro();
const $$DrawingPin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$31, $$props, $$slots);
  Astro2.self = $$DrawingPin;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Drawing Pin",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M10.329 1.136a.5.5 0 0 0-.708.707l.653.653-4.848 3.637-1.108-1.108a.5.5 0 0 0-.707.707l1.414 1.414 1.06 1.061-3.27 3.27a.5.5 0 1 0 .708.708l3.27-3.27 1.06 1.06 1.415 1.414a.5.5 0 1 0 .707-.707L8.867 9.574l3.637-4.848.653.653a.5.5 0 1 0 .707-.707l-1.06-1.061-1.415-1.414-1.06-1.06Zm-4.19 5.711 4.85-3.637.8.801-3.636 4.85L6.14 6.846Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/DrawingPin.astro", void 0);

const $$Astro$30 = createAstro();
const $$DropdownMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$30, $$props, $$slots);
  Astro2.self = $$DropdownMenu;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Dropdown Menu",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5 3.1a.4.4 0 1 0 0 .8h7a.4.4 0 0 0 0-.8h-7Zm0 2a.4.4 0 1 0 0 .8h7a.4.4 0 0 0 0-.8h-7Zm-.4 2.4c0-.22.18-.4.4-.4h7a.4.4 0 0 1 0 .8h-7a.4.4 0 0 1-.4-.4Zm.4 1.6a.4.4 0 1 0 0 .8h7a.4.4 0 0 0 0-.8h-7Zm-.4 2.4c0-.22.18-.4.4-.4h7a.4.4 0 0 1 0 .8h-7a.4.4 0 0 1-.4-.4ZM2.5 9.25 5 6H0l2.5 3.25Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/DropdownMenu.astro", void 0);

const $$Astro$2$ = createAstro();
const $$EnterFullScreen = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2$, $$props, $$slots);
  Astro2.self = $$EnterFullScreen;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Enter Full Screen",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3Zm7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V3H9.5a.5.5 0 0 1-.5-.5ZM2.5 9a.5.5 0 0 1 .5.5V12h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm10 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H12V9.5a.5.5 0 0 1 .5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/EnterFullScreen.astro", void 0);

const $$Astro$2_ = createAstro();
const $$Enter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2_, $$props, $$slots);
  Astro2.self = $$Enter;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Enter",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.5 1a.5.5 0 0 0 0 1H12v11H4.5a.5.5 0 0 0 0 1H12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4.5Zm2.104 3.896a.5.5 0 1 0-.708.708L7.293 7H.5a.5.5 0 0 0 0 1h6.793L5.896 9.396a.5.5 0 0 0 .708.708l2.25-2.25a.5.5 0 0 0 0-.708l-2.25-2.25Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Enter.astro", void 0);

const $$Astro$2Z = createAstro();
const $$EnvelopeClosed = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2Z, $$props, $$slots);
  Astro2.self = $$EnvelopeClosed;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Envelope Closed",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H1Zm0 1h13v.925a.448.448 0 0 0-.241.07L7.5 7.967 1.241 3.995A.448.448 0 0 0 1 3.925V3Zm0 1.908V12h13V4.908L7.741 8.88a.45.45 0 0 1-.482 0L1 4.908Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/EnvelopeClosed.astro", void 0);

const $$Astro$2Y = createAstro();
const $$EnvelopeOpen = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2Y, $$props, $$slots);
  Astro2.self = $$EnvelopeOpen;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Envelope Open",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.947.165a1 1 0 0 0-.894 0l-6.5 3.25A1 1 0 0 0 0 4.309V12a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V4.309a1 1 0 0 0-.553-.894l-6.5-3.25Zm5.622 3.928L7.5 1.06 1.431 4.093 7.5 7.291l6.069-3.198ZM1 4.883V12h13V4.884L7.71 8.198a.45.45 0 0 1-.42 0L1 4.884Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/EnvelopeOpen.astro", void 0);

const $$Astro$2X = createAstro();
const $$ExclamationTriangle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2X, $$props, $$slots);
  Astro2.self = $$ExclamationTriangle;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Exclamation Triangle",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M8.445.609a1.1 1.1 0 0 0-1.89 0L.161 11.337A1.1 1.1 0 0 0 1.106 13h12.788a1.1 1.1 0 0 0 .945-1.663L8.445.609Zm-1.03.512a.1.1 0 0 1 .17 0l6.395 10.728a.1.1 0 0 1-.086.151H1.106a.1.1 0 0 1-.086-.151L7.414 1.12Zm-.588 3.365a.674.674 0 1 1 1.346 0L8.02 8.487a.52.52 0 0 1-1.038 0l-.154-4Zm1.423 5.99a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ExclamationTriangle.astro", void 0);

const $$Astro$2W = createAstro();
const $$ExitFullScreen = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2W, $$props, $$slots);
  Astro2.self = $$ExitFullScreen;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Exit Full Screen",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5.5 2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H5V2.5a.5.5 0 0 1 .5-.5Zm4 0a.5.5 0 0 1 .5.5V5h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5ZM2 9.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V10H2.5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H10v2.5a.5.5 0 0 1-1 0v-3Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ExitFullScreen.astro", void 0);

const $$Astro$2V = createAstro();
const $$Exit = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2V, $$props, $$slots);
  Astro2.self = $$Exit;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Exit",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7.5a.5.5 0 0 0 0-1H3V2h7.5a.5.5 0 0 0 0-1H3Zm9.604 3.896a.5.5 0 0 0-.708.708L13.293 7H6.5a.5.5 0 0 0 0 1h6.793l-1.397 1.396a.5.5 0 0 0 .708.708l2.25-2.25a.5.5 0 0 0 0-.708l-2.25-2.25Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Exit.astro", void 0);

const $$Astro$2U = createAstro();
const $$ExternalLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2U, $$props, $$slots);
  Astro2.self = $$ExternalLink;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "External Link",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8.5a.5.5 0 0 0-1 0V12H3V3h3.5a.5.5 0 0 0 0-1H3Zm9.854.146a.5.5 0 0 1 .146.351V5.5a.5.5 0 0 1-1 0V3.707L6.854 8.854a.5.5 0 1 1-.708-.708L11.293 3H9.5a.5.5 0 0 1 0-1h3a.499.499 0 0 1 .354.146Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ExternalLink.astro", void 0);

const $$Astro$2T = createAstro();
const $$EyeClosed = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2T, $$props, $$slots);
  Astro2.self = $$EyeClosed;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Eye Closed",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M14.765 6.076a.5.5 0 0 1 .159.689 9.52 9.52 0 0 1-1.554 1.898l1.201 1.201a.5.5 0 0 1-.707.707l-1.263-1.263a8.473 8.473 0 0 1-2.667 1.343l.449 1.677a.5.5 0 0 1-.966.258l-.458-1.709a8.666 8.666 0 0 1-2.918 0l-.458 1.71a.5.5 0 1 1-.966-.26l.45-1.676a8.473 8.473 0 0 1-2.668-1.343l-1.263 1.263a.5.5 0 1 1-.707-.707l1.2-1.201A9.52 9.52 0 0 1 .077 6.765a.5.5 0 0 1 .848-.53 8.426 8.426 0 0 0 1.77 2.034A7.462 7.462 0 0 0 7.5 9.999c2.808 0 5.156-1.493 6.576-3.764a.5.5 0 0 1 .689-.16Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/EyeClosed.astro", void 0);

const $$Astro$2S = createAstro();
const $$EyeNone = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2S, $$props, $$slots);
  Astro2.self = $$EyeNone;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Eye None",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M13.354 2.354a.5.5 0 0 0-.708-.708L10.683 3.61A8.475 8.475 0 0 0 7.5 3C4.308 3 1.656 4.706.076 7.235a.5.5 0 0 0 0 .53c.827 1.323 1.947 2.421 3.285 3.167l-1.715 1.714a.5.5 0 0 0 .708.708l1.963-1.964c.976.393 2.045.61 3.183.61 3.192 0 5.844-1.706 7.424-4.235a.5.5 0 0 0 0-.53c-.827-1.323-1.947-2.421-3.285-3.167l1.715-1.714Zm-3.45 2.035A7.517 7.517 0 0 0 7.5 4C4.803 4 2.53 5.378 1.096 7.5c.777 1.15 1.8 2.081 3.004 2.693L9.904 4.39ZM5.096 10.61 10.9 4.807c1.204.612 2.227 1.543 3.004 2.693C12.47 9.622 10.197 11 7.5 11a7.518 7.518 0 0 1-2.404-.389Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/EyeNone.astro", void 0);

const $$Astro$2R = createAstro();
const $$EyeOpen = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2R, $$props, $$slots);
  Astro2.self = $$EyeOpen;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Eye Open",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5 11c-2.697 0-4.97-1.378-6.404-3.5C2.53 5.378 4.803 4 7.5 4s4.97 1.378 6.404 3.5C12.47 9.622 10.197 11 7.5 11Zm0-8C4.308 3 1.656 4.706.076 7.235a.5.5 0 0 0 0 .53C1.656 10.294 4.308 12 7.5 12s5.844-1.706 7.424-4.235a.5.5 0 0 0 0-.53C13.344 4.706 10.692 3 7.5 3Zm0 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/EyeOpen.astro", void 0);

const $$Astro$2Q = createAstro();
const $$Face = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2Q, $$props, $$slots);
  Astro2.self = $$Face;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Face",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877ZM1.827 7.5a5.673 5.673 0 1 1 11.346 0 5.673 5.673 0 0 1-11.346 0Zm3.21 1.714a.5.5 0 1 0-.82.572A3.996 3.996 0 0 0 7.5 11.5c1.36 0 2.56-.679 3.283-1.714a.5.5 0 0 0-.82-.572A2.996 2.996 0 0 1 7.5 10.5a2.996 2.996 0 0 1-2.463-1.286Zm.338-2.364a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Zm5.125-.875a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Face.astro", void 0);

const $$Astro$2P = createAstro();
const $$FigmaLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2P, $$props, $$slots);
  Astro2.self = $$FigmaLogo;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Figma Logo",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7 2.05H5.525a1.475 1.475 0 0 0 0 2.95H7V2.05Zm0-1h2.475a2.475 2.475 0 0 1 1.492 4.45A2.475 2.475 0 0 1 8 9.463V11.425A2.475 2.475 0 1 1 4.033 9.45a2.471 2.471 0 0 1-.983-1.975c0-.807.386-1.523.983-1.975a2.475 2.475 0 0 1 1.492-4.45H7Zm1 1V5h1.475a1.475 1.475 0 1 0 0-2.95H8Zm-2.475 6.9H7V6H5.525a1.475 1.475 0 0 0-.006 2.95h.006ZM4.05 11.425c0-.813.657-1.472 1.47-1.475H7v1.475a1.475 1.475 0 0 1-2.95 0ZM8 7.472a1.475 1.475 0 1 1 0 .006v-.006Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/FigmaLogo.astro", void 0);

const $$Astro$2O = createAstro();
const $$FileMinus = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2O, $$props, $$slots);
  Astro2.self = $$FileMinus;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "File Minus",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3 2.5a.5.5 0 0 1 .5-.5h5.793L12 4.707V12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-10ZM3.5 1A1.5 1.5 0 0 0 2 2.5v10A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V4.604a.75.75 0 0 0-.22-.53L9.854 1.145A.5.5 0 0 0 9.5 1h-6Zm1.75 6a.5.5 0 0 0 0 1h4.5a.5.5 0 0 0 0-1h-4.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/FileMinus.astro", void 0);

const $$Astro$2N = createAstro();
const $$FilePlus = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2N, $$props, $$slots);
  Astro2.self = $$FilePlus;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "File Plus",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V4.707L9.293 2H3.5ZM2 2.5A1.5 1.5 0 0 1 3.5 1h6a.5.5 0 0 1 .354.146l2.926 2.927c.141.14.22.332.22.53V12.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 12.5v-10Zm2.75 5a.5.5 0 0 1 .5-.5H7V5.25a.5.5 0 0 1 1 0V7h1.75a.5.5 0 0 1 0 1H8v1.75a.5.5 0 0 1-1 0V8H5.25a.5.5 0 0 1-.5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/FilePlus.astro", void 0);

const $$Astro$2M = createAstro();
const $$FileText = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2M, $$props, $$slots);
  Astro2.self = $$FileText;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "File Text",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3 2.5a.5.5 0 0 1 .5-.5h5.586a.5.5 0 0 1 .353.146l2.415 2.415a.5.5 0 0 1 .146.353V12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-10ZM3.5 1A1.5 1.5 0 0 0 2 2.5v10A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V4.914a1.5 1.5 0 0 0-.44-1.06l-2.414-2.415A1.5 1.5 0 0 0 9.086 1H3.5Zm1 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/FileText.astro", void 0);

const $$Astro$2L = createAstro();
const $$File = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2L, $$props, $$slots);
  Astro2.self = $$File;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "File",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V6H8.5a.5.5 0 0 1-.5-.5V2H3.5Zm5.5.707L11.293 5H9V2.707ZM2 2.5A1.5 1.5 0 0 1 3.5 1h5a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 13 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 12.5v-10Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/File.astro", void 0);

const $$Astro$2K = createAstro();
const $$FontBold = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2K, $$props, $$slots);
  Astro2.self = $$FontBold;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Font Bold",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5.105 12c-.397 0-.681-.088-.853-.264-.168-.18-.252-.465-.252-.853V4.117c0-.397.086-.681.258-.853.176-.176.458-.264.847-.264H9.03c1.108 0 2.025.982 2.025 2.185 0 .9-.45 1.634-1.35 2.051 1.162.213 1.814 1.392 1.814 2.245 0 1.031-.528 2.519-2.24 2.519H5.104Zm3.274-3.997H5.8v2.628h2.579c.521 0 1.25-.51 1.25-1.332 0-.823-.729-1.296-1.25-1.296ZM5.8 4.37v2.327h2.38c.36 0 1.097-.337 1.097-1.196 0-.86-.797-1.131-1.097-1.131H5.8Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/FontBold.astro", void 0);

const $$Astro$2J = createAstro();
const $$FontFamily = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2J, $$props, $$slots);
  Astro2.self = $$FontFamily;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Font Family",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2.5 4.5C2.5 3.099 3.599 2 5 2h7.499a.5.5 0 0 1 .001 1H8.692l-.287.855A1887.39 1887.39 0 0 1 7.343 7H8.5a.5.5 0 0 1 0 1H7.004c-.437 1.285-.84 2.461-1.046 3.039-.322.9-.75 1.447-1.29 1.739-.505.273-1.026.272-1.384.272H3.25a.55.55 0 0 1 0-1.1c.392 0 .654-.01.894-.14.22-.119.511-.395.778-1.142.185-.517.532-1.527.92-2.668H4.5a.5.5 0 0 1 0-1h1.682a1350.118 1350.118 0 0 0 1.18-3.496L7.533 3H5c-.849 0-1.5.651-1.5 1.5a.5.5 0 0 1-1 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/FontFamily.astro", void 0);

const $$Astro$2I = createAstro();
const $$FontItalic = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2I, $$props, $$slots);
  Astro2.self = $$FontItalic;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Font Italic",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5.675 3.5a.45.45 0 0 1 .45-.45h4.5a.45.45 0 1 1 0 .9h-1.62l-1.774 7.1h1.644a.45.45 0 0 1 0 .9h-4.5a.45.45 0 1 1 0-.9h1.619l1.775-7.1H6.125a.45.45 0 0 1-.45-.45Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/FontItalic.astro", void 0);

const $$Astro$2H = createAstro();
const $$FontRoman = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2H, $$props, $$slots);
  Astro2.self = $$FontRoman;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Font Roman",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.8 3.5a.45.45 0 0 1 .45-.45h4.5a.45.45 0 0 1 0 .9H8.1v7.1h1.65a.45.45 0 0 1 0 .9h-4.5a.45.45 0 1 1 0-.9H6.9v-7.1H5.25a.45.45 0 0 1-.45-.45Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/FontRoman.astro", void 0);

const $$Astro$2G = createAstro();
const $$FontSize = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2G, $$props, $$slots);
  Astro2.self = $$FontSize;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Font Size",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2.782 2.217a.4.4 0 0 0-.565 0l-2 2a.4.4 0 0 0 .565.566L2.1 3.466v8.068L.782 10.217a.4.4 0 0 0-.565.566l2 2a.4.4 0 0 0 .565 0l2-2a.4.4 0 0 0-.565-.566l-1.318 1.317V3.466l1.318 1.317a.4.4 0 0 0 .565-.566l-2-2Zm7.718.533a.5.5 0 0 1 .47.33l3 8.32a.5.5 0 0 1-.94.34l-.982-2.724H8.952l-.982 2.723a.5.5 0 0 1-.94-.34l3-8.319a.5.5 0 0 1 .47-.33Zm0 1.974 1.241 3.442H9.26L10.5 4.724Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/FontSize.astro", void 0);

const $$Astro$2F = createAstro();
const $$FontStyle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2F, $$props, $$slots);
  Astro2.self = $$FontStyle;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Font Style",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1.038 9.98c-.103-.322.078-.603.362-.731.284-.129.695-.115.87.205.584 1.06 1.376 1.274 2.217 1.274 1.04 0 1.81-.466 1.81-1.274 0-.65-.385-.99-1.426-1.311l-.712-.221c-1.514-.473-2.27-1.23-2.27-2.466 0-1.659 1.387-2.769 3.354-2.769 1.674 0 2.731.648 3.195 1.624.133.278.138.602-.21.88s-.704.157-.995-.153c-.76-.811-1.238-.988-1.977-.988-1.116 0-1.709.586-1.709 1.23 0 .586.416.952 1.4 1.254l.732.227c1.55.473 2.295 1.199 2.295 2.41 0 1.601-1.28 2.92-3.513 2.92-1.595 0-3.061-.978-3.423-2.11Zm10.811-1.2c-1.188-.385-1.684-.919-1.684-1.792 0-1.12.999-1.942 2.448-1.942 1.242 0 2.05.587 2.365 1.589.066.211-.019.345-.23.414-.209.068-.43.05-.51-.153-.302-.773-.886-1.133-1.638-1.133-.953 0-1.586.489-1.586 1.153 0 .535.332.834 1.233 1.128l.588.189c1.227.397 1.717.905 1.717 1.785 0 1.18-1.071 2.026-2.56 2.026-1.348 0-2.336-.763-2.572-1.708-.055-.217-.008-.307.28-.374.289-.067.371-.063.472.175.284.674.981 1.19 1.86 1.19.96 0 1.651-.547 1.651-1.264 0-.527-.287-.775-1.246-1.088l-.588-.195Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/FontStyle.astro", void 0);

const $$Astro$2E = createAstro();
const $$Frame = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2E, $$props, $$slots);
  Astro2.self = $$Frame;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Frame",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M11 1.5a.5.5 0 0 0-1 0V4H5V1.5a.5.5 0 0 0-1 0V4H1.5a.5.5 0 0 0 0 1H4v5H1.5a.5.5 0 0 0 0 1H4v2.5a.5.5 0 0 0 1 0V11h5v2.5a.5.5 0 0 0 1 0V11h2.5a.5.5 0 0 0 0-1H11V5h2.5a.5.5 0 0 0 0-1H11V1.5ZM10 10V5H5v5h5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Frame.astro", void 0);

const $$Astro$2D = createAstro();
const $$FramerLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2D, $$props, $$slots);
  Astro2.self = $$FramerLogo;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Framer Logo",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.382 1.296A.5.5 0 0 1 3.84.997h7.66a.5.5 0 0 1 .5.5V5.5a.5.5 0 0 1-.5.5H8.635l2.894 3.162a.5.5 0 0 1-.369.838H8v3.5a.5.5 0 0 1-.854.354l-4-4A.5.5 0 0 1 3 9.5v-4a.5.5 0 0 1 .5-.5h2.865L3.471 1.835a.5.5 0 0 1-.089-.54ZM7.72 5 4.975 1.997H11V5H7.72Zm-.44 1H4v3h6.025L7.28 6Zm-2.573 4L7 12.293V10H4.707Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/FramerLogo.astro", void 0);

const $$Astro$2C = createAstro();
const $$Gear = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2C, $$props, $$slots);
  Astro2.self = $$Gear;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Gear",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.07.65a.85.85 0 0 0-.828.662l-.238 1.05c-.38.11-.74.262-1.08.448l-.91-.574a.85.85 0 0 0-1.055.118l-.606.606a.85.85 0 0 0-.118 1.054l.574.912c-.186.338-.337.7-.447 1.079l-1.05.238a.85.85 0 0 0-.662.829v.857a.85.85 0 0 0 .662.829l1.05.238c.11.379.261.74.448 1.08l-.575.91a.85.85 0 0 0 .118 1.055l.607.606a.85.85 0 0 0 1.054.118l.911-.574c.339.186.7.337 1.079.447l.238 1.05a.85.85 0 0 0 .829.662h.857a.85.85 0 0 0 .829-.662l.238-1.05c.38-.11.74-.26 1.08-.447l.911.574a.85.85 0 0 0 1.054-.118l.606-.606a.85.85 0 0 0 .118-1.054l-.574-.911c.187-.34.338-.7.448-1.08l1.05-.238a.85.85 0 0 0 .662-.829v-.857a.85.85 0 0 0-.662-.83l-1.05-.237c-.11-.38-.26-.74-.447-1.08l.574-.91a.85.85 0 0 0-.118-1.055l-.606-.606a.85.85 0 0 0-1.055-.118l-.91.574a5.323 5.323 0 0 0-1.08-.448l-.239-1.05A.85.85 0 0 0 7.928.65h-.857ZM4.92 3.813a4.476 4.476 0 0 1 1.795-.745L7.071 1.5h.857l.356 1.568c.659.116 1.268.375 1.795.744l1.36-.857.607.606-.858 1.36c.37.527.628 1.136.744 1.795l1.568.356v.857l-1.568.355a4.475 4.475 0 0 1-.744 1.796l.857 1.36-.606.606-1.36-.857a4.476 4.476 0 0 1-1.795.743L7.928 13.5h-.857l-.356-1.568a4.475 4.475 0 0 1-1.794-.744l-1.36.858-.607-.606.858-1.36a4.476 4.476 0 0 1-.744-1.796L1.5 7.93v-.857l1.568-.356a4.476 4.476 0 0 1 .744-1.794L2.954 3.56l.606-.606 1.36.858ZM9.026 7.5a1.525 1.525 0 1 1-3.05 0 1.525 1.525 0 0 1 3.05 0Zm.9 0a2.425 2.425 0 1 1-4.85 0 2.425 2.425 0 0 1 4.85 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Gear.astro", void 0);

const $$Astro$2B = createAstro();
const $$GitHubLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2B, $$props, $$slots);
  Astro2.self = $$GitHubLogo;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "GitHub Logo",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5.85a6.65 6.65 0 0 0-2.102 12.96c.332.061.454-.144.454-.32 0-.159-.006-.576-.01-1.131-1.849.401-2.24-.892-2.24-.892-.302-.768-.738-.973-.738-.973-.604-.412.046-.404.046-.404.667.047 1.018.685 1.018.685.594 1.017 1.557.723 1.936.553.06-.43.232-.723.422-.889-1.477-.168-3.029-.738-3.029-3.287 0-.726.26-1.319.685-1.784-.069-.168-.297-.844.065-1.76 0 0 .558-.179 1.828.681.53-.147 1.1-.22 1.665-.223a6.394 6.394 0 0 1 1.665.223c1.27-.86 1.827-.68 1.827-.68.363.915.135 1.59.066 1.759.427.465.684 1.058.684 1.784 0 2.555-1.555 3.117-3.036 3.282.238.205.45.611.45 1.232 0 .888-.007 1.605-.007 1.823 0 .178.12.385.457.32A6.652 6.652 0 0 0 7.499.85Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/GitHubLogo.astro", void 0);

const $$Astro$2A = createAstro();
const $$Globe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2A, $$props, $$slots);
  Astro2.self = $$Globe;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Globe",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5 1.8a5.7 5.7 0 1 0 0 11.4 5.7 5.7 0 0 0 0-11.4ZM.9 7.5a6.6 6.6 0 1 1 13.2 0 6.6 6.6 0 0 1-13.2 0Z"></path><path d="M13.5 7.9h-12v-.8h12v.8Z"></path><path d="M7.1 13.5v-12h.8v12h-.8zm3.275-6c0-2.173-.781-4.322-2.313-5.743l.476-.514c1.702 1.58 2.537 3.93 2.537 6.257 0 2.327-.835 4.678-2.537 6.257l-.476-.514c1.532-1.42 2.313-3.57 2.313-5.743zM4 7.5c0-2.324.808-4.673 2.458-6.253l.484.506C5.458 3.173 4.7 5.323 4.7 7.5c0 2.176.758 4.327 2.242 5.747l-.484.506C4.808 12.173 4 9.823 4 7.5z"></path><path d="M7.5 3.958c2.17 0 4.375.401 5.87 1.236a.35.35 0 1 1-.34.612c-1.35-.754-3.422-1.148-5.53-1.148s-4.18.394-5.53 1.148a.35.35 0 1 1-.34-.612c1.495-.835 3.7-1.236 5.87-1.236zm0 6.892c2.17 0 4.375-.401 5.87-1.236a.35.35 0 1 0-.34-.612c-1.35.754-3.422 1.148-5.53 1.148s-4.18-.394-5.53-1.148a.35.35 0 1 0-.34.611c1.495.836 3.7 1.237 5.87 1.237z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Globe.astro", void 0);

const $$Astro$2z = createAstro();
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2z, $$props, $$slots);
  Astro2.self = $$Grid;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Grid",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M12.5 2H8v5h5V2.5a.5.5 0 0 0-.5-.5Zm.5 6H8v5h4.5a.5.5 0 0 0 .5-.5V8ZM7 7V2H2.5a.5.5 0 0 0-.5.5V7h5ZM2 8v4.5a.5.5 0 0 0 .5.5H7V8H2Zm.5-7A1.5 1.5 0 0 0 1 2.5v10A1.5 1.5 0 0 0 2.5 14h10a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 12.5 1h-10Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Grid.astro", void 0);

const $$Astro$2y = createAstro();
const $$Group = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2y, $$props, $$slots);
  Astro2.self = $$Group;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Group",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1.45.95a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-1.5h1.5a.5.5 0 0 0 0-1h-2Zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm-.5 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-3.5-7.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Zm11.5-.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5Zm-2-4.5a.5.5 0 1 0 0 1h1.5v1.5a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.501-.5H11.45Zm-10 10a.5.5 0 0 1 .5.5v1.5h1.5a.5.5 0 1 1 0 1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5Zm12.5.5a.5.5 0 0 0-1 0v1.5h-1.5a.5.5 0 1 0 0 1h2a.5.5 0 0 0 .5-.5v-2Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Group.astro", void 0);

const $$Astro$2x = createAstro();
const $$Half1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2x, $$props, $$slots);
  Astro2.self = $$Half1;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Half 1",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877Zm-.5.972A5.673 5.673 0 0 0 7 13.15V1.849ZM8 13.15A5.673 5.673 0 0 0 8 1.849V13.15Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Half1.astro", void 0);

const $$Astro$2w = createAstro();
const $$Half2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2w, $$props, $$slots);
  Astro2.self = $$Half2;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Half 2",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877Zm0 .95a5.673 5.673 0 0 0 0 11.346V1.827Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Half2.astro", void 0);

const $$Astro$2v = createAstro();
const $$HamburgerMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2v, $$props, $$slots);
  Astro2.self = $$HamburgerMenu;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Hamburger Menu",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12ZM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Zm0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/HamburgerMenu.astro", void 0);

const $$Astro$2u = createAstro();
const $$Hand = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2u, $$props, $$slots);
  Astro2.self = $$Hand;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Hand",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M6.811 1.647c-.19 1.232-.128 2.238-.043 3.658.016.26.033.532.049.823a.5.5 0 0 1-.992.115l-.077-.436c-.104-.642-.264-1.552-.57-2.36-.316-.834-.73-1.406-1.244-1.587-.284-.099-.515-.017-.675.15a.82.82 0 0 0-.196.744c.152.59.383 1.163.635 1.764l.068.162c.23.545.47 1.117.65 1.71v.002c.146.484.24.867.315 1.17l.08.322A.5.5 0 0 1 4 8.387a9.518 9.518 0 0 1-.68-.669 57.738 57.738 0 0 1-.122-.13c-.15-.16-.28-.3-.414-.428-.323-.309-.599-.48-.977-.516h-.003c-.242-.025-.389.02-.485.082-.099.063-.198.178-.28.386-.061.173-.023.518.155.857l.004.008c.204.408.548.839.984 1.316.216.236.448.475.688.724l.01.011c.236.244.48.497.718.755.832.903 1.68 1.97 1.866 3.217h6.046c.055-1.565.367-2.732.778-3.865.158-.435.325-.85.496-1.277.327-.817.668-1.669.988-2.75.328-1.11.239-1.738.09-2.068-.144-.321-.37-.422-.48-.444-.243-.048-.343.013-.411.083-.103.104-.2.304-.278.624a8.82 8.82 0 0 0-.159 1.022l-.003.028c-.038.32-.08.677-.163.948a.539.539 0 0 1-.17.274.502.502 0 0 1-.366.118c-.289-.024-.46-.272-.466-.545-.009-.393.023-.79.042-1.182.036-.73.07-1.432.018-2.132V2.83c-.033-.499-.376-.827-.724-.906a.636.636 0 0 0-.466.06c-.132.076-.28.23-.378.53v.004c-.042.123-.084.36-.12.695a21.4 21.4 0 0 0-.085 1.082c-.02.326-.034.664-.048.968-.017.383-.031.712-.048.891a.528.528 0 0 1-.061.205c-.021.04-.134.251-.424.26a.508.508 0 0 1-.454-.259c-.06-.11-.066-.24-.07-.366a27.762 27.762 0 0 1-.005-.445c-.003-.342-.003-.729-.003-.838 0-1.044 0-2.056-.092-3.066-.055-.403-.384-.64-.803-.644-.42-.004-.765.227-.833.647Zm2.601-.285C9.215.448 8.4.008 7.654 0c-.79-.008-1.666.466-1.83 1.49v.003c-.042.265-.072.522-.093.774-.337-.593-.805-1.118-1.465-1.35a1.606 1.606 0 0 0-1.73.403 1.82 1.82 0 0 0-.446 1.667l.003.01c.172.671.431 1.306.683 1.908l.066.156c.18.427.352.838.497 1.252-.375-.332-.82-.605-1.436-.665-.414-.041-.8.027-1.125.236-.324.208-.537.52-.674.87l-.003.009c-.203.55-.035 1.209.204 1.666.269.536.691 1.05 1.139 1.54.226.247.467.496.706.743l.007.007c.238.247.475.492.704.74C3.81 12.49 4.5 13.464 4.5 14.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5c0-1.679.302-2.854.727-4.024.138-.38.295-.77.46-1.184.337-.843.711-1.779 1.043-2.9.366-1.239.326-2.133.043-2.762-.286-.638-.793-.935-1.197-1.015-.448-.089-.84-.01-1.15.216a7.833 7.833 0 0 0-.004-.07c-.063-.95-.731-1.638-1.499-1.813a1.635 1.635 0 0 0-1.188.17 1.638 1.638 0 0 0-.323.244Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Hand.astro", void 0);

const $$Astro$2t = createAstro();
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2t, $$props, $$slots);
  Astro2.self = $$Heading;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Heading",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M8.754 2.05a.45.45 0 1 0 0 .9H9.95v4.1h-4.9v-4.1h1.204a.45.45 0 1 0 0-.9h-3.5a.45.45 0 1 0 0 .9H3.95v9.1H2.754a.45.45 0 0 0 0 .9h3.5a.45.45 0 0 0 0-.9H5.05v-4.1h4.9v4.1H8.754a.45.45 0 0 0 0 .9h3.5a.45.45 0 0 0 0-.9H11.05v-9.1h1.204a.45.45 0 0 0 0-.9h-3.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Heading.astro", void 0);

const $$Astro$2s = createAstro();
const $$Height = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2s, $$props, $$slots);
  Astro2.self = $$Height;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Height",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.181 1.682a.45.45 0 0 1 .637 0l2.5 2.5a.45.45 0 0 1-.637.636L7.95 3.086v8.828l1.731-1.732a.45.45 0 0 1 .637.636l-2.5 2.5a.45.45 0 0 1-.637 0l-2.5-2.5a.45.45 0 0 1 .637-.636l1.732 1.732V3.086L5.317 4.818a.45.45 0 0 1-.637-.636l2.5-2.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Height.astro", void 0);

const $$Astro$2r = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2r, $$props, $$slots);
  Astro2.self = $$Home;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Home",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.08.222a.6.6 0 0 1 .84 0l6.75 6.64a.6.6 0 0 1-.84.856L13 6.902V12.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5V6.902l-.83.816a.6.6 0 1 1-.84-.856L7.08.222Zm.42 1.27L12 5.918V12h-2V8.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V12H3V5.918l4.5-4.426ZM7 12h2V9H7v3Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Home.astro", void 0);

const $$Astro$2q = createAstro();
const $$IconJarLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2q, $$props, $$slots);
  Astro2.self = $$IconJarLogo;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "IconJar Logo",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5.003c-.695 0-1.25.278-1.25.747 0 .247.174.37.327.477.118.084.223.158.223.273 0 .207-.738.243-1.602.284-1.222.06-2.698.13-2.698.716A.5.5 0 0 0 3 3h9a.5.5 0 0 0 .5-.5c0-.586-1.476-.657-2.698-.716C8.938 1.743 8.2 1.707 8.2 1.5c0-.115.105-.19.223-.273.153-.107.327-.23.327-.477 0-.469-.555-.747-1.25-.747Zm-4.605 6.12a1.958 1.958 0 0 0-.87 1.933l.81 4.421A1.867 1.867 0 0 0 4.662 14h5.676c.898 0 1.651-.644 1.825-1.523l.812-4.42c.115-.733-.146-1.524-.84-1.963-.406-.264-.493-.762 0-.966C12.827 4.864 12.693 4 12 4H3c-.695 0-.801.893-.105 1.157.491.175.404.673 0 .966ZM8.2 6.25c0-.432-.114-.874-.294-1.25H4.111a1.4 1.4 0 0 1 .118.655c-.034.57-.383 1.014-.749 1.278l-.025.018-.026.017a.96.96 0 0 0-.418.92l.807 4.4a.867.867 0 0 0 .843.712h5.676c.4 0 .756-.285.843-.711l.807-4.4c.061-.407-.092-.763-.388-.95l-.011-.007c-.393-.256-.755-.704-.79-1.284A1.398 1.398 0 0 1 10.912 5H9.055A2.127 2.127 0 0 0 9 5.5c0 .474.217.871.444 1.287.249.456.51.934.51 1.563 0 .92-.455 1.492-1.332 1.492-.49 0-1.044-.381-1.044-1.084 0-.405.138-.742.283-1.098.164-.402.34-.83.34-1.41Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/IconJarLogo.astro", void 0);

const $$Astro$2p = createAstro();
const $$IdCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2p, $$props, $$slots);
  Astro2.self = $$IdCard;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Id Card",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M14 11V4H1v7h13Zm1-7v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1ZM2 5.25A.25.25 0 0 1 2.25 5h3.5a.25.25 0 0 1 .25.25v4.5a.25.25 0 0 1-.25.25h-3.5A.25.25 0 0 1 2 9.75v-4.5ZM7.5 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM7.5 5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/IdCard.astro", void 0);

const $$Astro$2o = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2o, $$props, $$slots);
  Astro2.self = $$Image;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Image",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2.5 1h10A1.5 1.5 0 0 1 14 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-10A1.5 1.5 0 0 1 2.5 1Zm0 1a.5.5 0 0 0-.5.5v5.864l1.682-1.682a.45.45 0 0 1 .647.01l3.545 3.798 2.808-2.808a.45.45 0 0 1 .636 0L13 9.364V2.5a.5.5 0 0 0-.5-.5h-10ZM2 12.5V9.636l1.989-1.988 3.542 3.794L8.941 13H2.5a.5.5 0 0 1-.5-.5Zm10.5.5h-2.345l-1.672-1.847L11 8.636l2 2V12.5a.5.5 0 0 1-.5.5ZM6.65 5.5a.85.85 0 1 1 1.7 0 .85.85 0 0 1-1.7 0Zm.85-1.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Image.astro", void 0);

const $$Astro$2n = createAstro();
const $$InfoCircled = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2n, $$props, $$slots);
  Astro2.self = $$InfoCircled;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Info Circled",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877ZM1.827 7.5a5.673 5.673 0 1 1 11.346 0 5.673 5.673 0 0 1-11.346 0Zm6.423-3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6 6h1.5a.5.5 0 0 1 .5.5V10h1v1H6v-1h1V7H6V6Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/InfoCircled.astro", void 0);

const $$Astro$2m = createAstro();
const $$Input = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2m, $$props, $$slots);
  Astro2.self = $$Input;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Input",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M6.5 1a.5.5 0 0 0 0 1c.627 0 .957.2 1.156.478C7.878 2.79 8 3.288 8 4v7c0 .712-.122 1.21-.344 1.522-.199.278-.53.478-1.156.478a.5.5 0 0 0 0 1c.873 0 1.543-.3 1.97-.897l.03-.044.03.044c.427.597 1.097.897 1.97.897a.5.5 0 0 0 0-1c-.627 0-.957-.2-1.156-.478C9.122 12.21 9 11.712 9 11V4c0-.712.122-1.21.344-1.522C9.543 2.2 9.874 2 10.5 2a.5.5 0 0 0 0-1c-.873 0-1.543.3-1.97.897l-.03.044-.03-.044C8.042 1.3 7.372 1 6.5 1ZM14 5h-3V4h3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-3v-1h3V5ZM6 4v1H1v5h5v1H1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Input.astro", void 0);

const $$Astro$2l = createAstro();
const $$LapTimer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2l, $$props, $$slots);
  Astro2.self = $$LapTimer;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Lap Timer",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5.5.5A.5.5 0 0 1 6 0h3a.5.5 0 0 1 0 1H8v1.12a6.363 6.363 0 0 1 2.992 1.016.638.638 0 0 1 .066-.078l1-1a.625.625 0 0 1 .884.884l-.975.975A6.4 6.4 0 1 1 7 2.119V1H6a.5.5 0 0 1-.5-.5Zm-3.4 8a5.4 5.4 0 1 1 10.8 0 5.4 5.4 0 0 1-10.8 0Zm5.4 0V4.1a4.4 4.4 0 1 0 3.111 7.511L7.5 8.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/LapTimer.astro", void 0);

const $$Astro$2k = createAstro();
const $$Layers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2k, $$props, $$slots);
  Astro2.self = $$Layers;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Layers",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.754.82a.5.5 0 0 0-.508 0l-5.5 3.25a.5.5 0 0 0 0 .86l5.5 3.25a.5.5 0 0 0 .508 0l5.5-3.25a.5.5 0 0 0 0-.86L7.754.82ZM7.5 7.17 2.983 4.5 7.5 1.83l4.517 2.67L7.5 7.17Zm-5.93.326a.5.5 0 0 1 .684-.176l5.246 3.1 5.246-3.1a.5.5 0 1 1 .508.86l-5.5 3.25a.5.5 0 0 1-.508 0l-5.5-3.25a.5.5 0 0 1-.177-.684Zm0 3a.5.5 0 0 1 .684-.177l5.246 3.1 5.246-3.1a.5.5 0 0 1 .508.861l-5.5 3.25a.5.5 0 0 1-.508 0l-5.5-3.25a.5.5 0 0 1-.177-.684Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Layers.astro", void 0);

const $$Astro$2j = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2j, $$props, $$slots);
  Astro2.self = $$Layout;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Layout",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M9 2H6v11h3V2Zm1 0v11h2.5a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H10ZM2.5 2H5v11H2.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5Zm0-1A1.5 1.5 0 0 0 1 2.5v10A1.5 1.5 0 0 0 2.5 14h10a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 12.5 1h-10Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Layout.astro", void 0);

const $$Astro$2i = createAstro();
const $$LetterCaseCapitalize = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2i, $$props, $$slots);
  Astro2.self = $$LetterCaseCapitalize;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Letter Case Capitalize",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.69 2.75a.5.5 0 0 1 .467.32l3.21 8.32a.5.5 0 0 1-.933.36L5.383 9.025H2.01L.967 11.75a.5.5 0 0 1-.934-.358l3.19-8.32a.5.5 0 0 1 .467-.321Zm.002 1.893 1.363 3.532H2.337l1.355-3.532Zm7.207.564c-1.64 0-2.89 1.479-2.89 3.403 0 2.024 1.35 3.402 2.89 3.402a3.06 3.06 0 0 0 2.255-.99v.508a.45.45 0 1 0 .9 0V5.72a.45.45 0 0 0-.9 0v.503A3.01 3.01 0 0 0 10.9 5.207Zm2.255 4.591V7.302c-.39-.721-1.213-1.244-2.067-1.244-.978 0-2.052.908-2.052 2.552 0 1.543.974 2.552 2.052 2.552.883 0 1.685-.667 2.067-1.364Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/LetterCaseCapitalize.astro", void 0);

const $$Astro$2h = createAstro();
const $$LetterCaseLowercase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2h, $$props, $$slots);
  Astro2.self = $$LetterCaseLowercase;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Letter Case Lowercase",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.699 5.207c-1.64 0-2.89 1.479-2.89 3.403 0 2.024 1.35 3.402 2.89 3.402a3.06 3.06 0 0 0 2.255-.99v.508a.45.45 0 0 0 .9 0V5.72a.45.45 0 0 0-.9 0v.503a3.01 3.01 0 0 0-2.255-1.016Zm2.255 4.592V7.301c-.39-.72-1.213-1.243-2.067-1.243-.978 0-2.052.908-2.052 2.552 0 1.543.974 2.552 2.052 2.552.883 0 1.684-.666 2.067-1.363Zm4.845-4.592c-1.64 0-2.89 1.479-2.89 3.403 0 2.024 1.35 3.402 2.89 3.402.822 0 1.675-.343 2.255-.99v.508a.45.45 0 0 0 .9 0V5.72a.45.45 0 1 0-.9 0v.503A3.01 3.01 0 0 0 10.8 5.207Zm2.255 4.591V7.302c-.39-.721-1.213-1.244-2.067-1.244-.978 0-2.052.908-2.052 2.552 0 1.543.974 2.552 2.052 2.552.883 0 1.685-.667 2.067-1.364Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/LetterCaseLowercase.astro", void 0);

const $$Astro$2g = createAstro();
const $$LetterCaseToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2g, $$props, $$slots);
  Astro2.self = $$LetterCaseToggle;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Letter Case Toggle",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M11.29 2.75a.5.5 0 0 1 .467.32l3.21 8.32a.5.5 0 0 1-.934.36l-1.05-2.725H9.61L8.567 11.75a.5.5 0 0 1-.934-.358l3.19-8.32a.5.5 0 0 1 .466-.321Zm.002 1.893 1.362 3.532H9.937l1.354-3.532Zm-8.393.564c-1.64 0-2.89 1.479-2.89 3.403 0 2.024 1.35 3.402 2.89 3.402a3.06 3.06 0 0 0 2.255-.99v.508a.45.45 0 0 0 .9 0V5.72a.45.45 0 1 0-.9 0v.503A3.01 3.01 0 0 0 2.9 5.207Zm2.255 4.591V7.302c-.39-.721-1.213-1.244-2.067-1.244-.978 0-2.052.908-2.052 2.552 0 1.543.974 2.552 2.052 2.552.883 0 1.685-.667 2.067-1.364Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/LetterCaseToggle.astro", void 0);

const $$Astro$2f = createAstro();
const $$LetterCaseUppercase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2f, $$props, $$slots);
  Astro2.self = $$LetterCaseUppercase;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Letter Case Uppercase",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.626 2.75a.5.5 0 0 1 .468.327l3.076 8.32a.5.5 0 0 1-.938.346L5.224 9.016H2.027L1.02 11.743a.5.5 0 1 1-.938-.347l3.076-8.32a.5.5 0 0 1 .469-.326Zm0 1.942L4.91 8.166H2.34l1.284-3.474Zm7.746-1.942a.5.5 0 0 1 .469.327l3.075 8.32a.5.5 0 1 1-.938.346L12.97 9.016H9.773l-1.008 2.727a.5.5 0 1 1-.938-.347l3.076-8.32a.5.5 0 0 1 .469-.326Zm0 1.942 1.284 3.474h-2.568l1.284-3.474Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/LetterCaseUppercase.astro", void 0);

const $$Astro$2e = createAstro();
const $$LetterSpacing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2e, $$props, $$slots);
  Astro2.self = $$LetterSpacing;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Letter Spacing",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.553 1c.2 0 .38.12.46.303L8.01 8.3a.5.5 0 1 1-.92.394l-.975-2.277H2.99l-.976 2.277a.5.5 0 0 1-.92-.394l3-6.997A.5.5 0 0 1 4.552 1Zm0 1.77 1.199 2.797H3.354l1.199-2.798Zm6.503 6.232a.5.5 0 0 0 .466-.317l2.751-7.002a.5.5 0 0 0-.93-.366l-2.287 5.818L8.77 1.317a.5.5 0 1 0-.931.366l2.752 7.002a.5.5 0 0 0 .465.317Zm3.898 3.498a.4.4 0 0 1-.118.283l-2 2a.4.4 0 0 1-.565-.566l1.317-1.317H1.519l1.318 1.317a.4.4 0 0 1-.566.566l-2-2a.4.4 0 0 1 0-.566l2-2a.4.4 0 0 1 .566.566L1.519 12.1h12.069l-1.317-1.317a.4.4 0 0 1 .565-.566l2 2a.4.4 0 0 1 .118.283Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/LetterSpacing.astro", void 0);

const $$Astro$2d = createAstro();
const $$LightningBolt = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2d, $$props, $$slots);
  Astro2.self = $$LightningBolt;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Lightning Bolt",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M8.697.04a.5.5 0 0 1 .296.542L8.09 6h4.41a.5.5 0 0 1 .4.8l-6 8a.5.5 0 0 1-.893-.382L6.91 9H2.5a.5.5 0 0 1-.4-.8l6-8a.5.5 0 0 1 .597-.16ZM3.5 8h4a.5.5 0 0 1 .493.582L7.33 12.56 11.5 7h-4a.5.5 0 0 1-.493-.582L7.67 2.44 3.5 8Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/LightningBolt.astro", void 0);

const $$Astro$2c = createAstro();
const $$LineHeight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2c, $$props, $$slots);
  Astro2.self = $$LineHeight;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Line Height",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.782 2.217a.4.4 0 0 0-.565 0l-2 2a.4.4 0 0 0 .565.566L3.1 3.466v8.068l-1.317-1.317a.4.4 0 0 0-.565.566l2 2a.4.4 0 0 0 .565 0l2-2a.4.4 0 0 0-.565-.566l-1.318 1.317V3.466l1.318 1.317a.4.4 0 0 0 .565-.566l-2-2ZM8.5 4a.5.5 0 1 0 0 1h6a.5.5 0 0 0 0-1h-6ZM8 7.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 1 0 0 1h6a.5.5 0 0 0 0-1h-6Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/LineHeight.astro", void 0);

const $$Astro$2b = createAstro();
const $$Link1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2b, $$props, $$slots);
  Astro2.self = $$Link1;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Link 1",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.625 4h-.061c-.523 0-.857 0-1.146.055-1.18.225-2.12 1.116-2.36 2.275C1 6.613 1 6.94 1 7.437v.126c0 .497 0 .824.058 1.107.24 1.16 1.18 2.05 2.36 2.275.289.055.623.055 1.146.055H5.5a.5.5 0 1 0 0-1h-.875c-.604 0-.836-.002-1.02-.037-.802-.154-1.413-.752-1.568-1.496C2.002 8.297 2 8.083 2 7.5c0-.582.002-.798.037-.967.155-.744.766-1.342 1.569-1.496C3.789 5.002 4.02 5 4.625 5H5.5a.5.5 0 0 0 0-1h-.875Zm5.75 1c.604 0 .835.002 1.019.037.803.154 1.414.752 1.568 1.496.035.17.038.385.038.967 0 .583-.003.798-.038.967-.154.744-.765 1.342-1.568 1.496-.184.035-.415.037-1.02.037H9.5a.5.5 0 0 0 0 1h.935c.523 0 .857 0 1.146-.055 1.18-.225 2.12-1.116 2.36-2.275C14 8.387 14 8.06 14 7.563v-.126c0-.497 0-.824-.059-1.107-.24-1.16-1.18-2.05-2.36-2.275C11.293 4 10.958 4 10.435 4H9.5a.5.5 0 0 0 0 1h.875ZM5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1H5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Link1.astro", void 0);

const $$Astro$2a = createAstro();
const $$Link2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2a, $$props, $$slots);
  Astro2.self = $$Link2;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Link 2",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M8.512 3.005c.676-.46 1.531-.468 2.167-.05.144.094.298.244.71.656.412.412.562.566.657.71.417.636.408 1.49-.051 2.167-.105.155-.267.32-.694.747l-.62.619a.5.5 0 0 0 .708.707l.619-.619.043-.043c.37-.37.606-.606.771-.849.675-.994.71-2.287.06-3.278-.159-.241-.39-.472-.741-.823l-.045-.045-.044-.045c-.352-.351-.583-.582-.824-.74-.99-.65-2.284-.616-3.278.06-.243.164-.48.4-.85.77l-.042.043-.619.62a.5.5 0 1 0 .707.706l.62-.618c.426-.427.592-.59.746-.695ZM4.318 7.147a.5.5 0 0 0-.707-.707l-.619.618-.043.043c-.37.37-.606.606-.771.85-.675.993-.71 2.287-.06 3.277.159.242.39.473.741.824l.045.045.044.044c.352.351.583.583.824.741.99.65 2.284.616 3.278-.06.243-.165.48-.401.849-.771l.043-.043.619-.619a.5.5 0 1 0-.708-.707l-.618.619c-.427.427-.593.59-.747.694-.676.46-1.532.469-2.167.051-.144-.094-.298-.245-.71-.657-.412-.412-.562-.566-.657-.71-.417-.635-.408-1.49.051-2.167.105-.154.267-.32.694-.747l.619-.618Zm5.304-1.061a.5.5 0 0 0-.707-.708L5.379 8.914a.5.5 0 1 0 .707.707l3.536-3.535Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Link2.astro", void 0);

const $$Astro$29 = createAstro();
const $$LinkBreak1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$29, $$props, $$slots);
  Astro2.self = $$LinkBreak1;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Link Break 1",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M13.354 2.354a.5.5 0 0 0-.708-.708l-11 11a.5.5 0 0 0 .708.708l11-11ZM2.037 8.467c.137.66.632 1.204 1.302 1.426l-.76.76a2.91 2.91 0 0 1-1.52-1.983c-.06-.283-.06-.61-.06-1.107v-.126c0-.497 0-.824.06-1.107.24-1.16 1.179-2.05 2.36-2.275C3.706 4 4.04 4 4.563 4H5.5a.5.5 0 0 1 0 1h-.875c-.604 0-.836.002-1.02.037-.802.154-1.413.752-1.568 1.496-.035.17-.037.385-.037.967 0 .583.002.798.037.967Zm10.925-1.934a1.935 1.935 0 0 0-1.301-1.426l.76-.76a2.91 2.91 0 0 1 1.52 1.983c.059.283.059.61.059 1.107v.126c0 .497 0 .824-.059 1.107-.24 1.16-1.18 2.05-2.36 2.275-.288.055-.623.055-1.146.055H9.5a.5.5 0 1 1 0-1h.875c.604 0 .835-.002 1.019-.037.803-.154 1.414-.752 1.568-1.496.035-.17.038-.384.038-.967 0-.582-.003-.798-.038-.967Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/LinkBreak1.astro", void 0);

const $$Astro$28 = createAstro();
const $$LinkBreak2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$28, $$props, $$slots);
  Astro2.self = $$LinkBreak2;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Link Break 2",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 1 1-1 0v-2a.5.5 0 0 1 .5-.5ZM.646.646a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 1 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708ZM0 4.5A.5.5 0 0 1 .5 4h2a.5.5 0 1 1 0 1h-2a.5.5 0 0 1-.5-.5Zm12 6a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1h-2a.5.5 0 0 1-.5-.5ZM10.5 12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5Zm1.646.146a.5.5 0 0 1 .707 0l1.5 1.5a.5.5 0 0 1-.707.707l-1.5-1.5a.5.5 0 0 1 0-.707ZM7.765 3.7c.427-.427.592-.589.747-.694.676-.46 1.531-.468 2.166-.051.145.095.299.245.71.657.412.412.563.566.658.71.417.636.408 1.49-.052 2.167-.104.154-.267.32-.694.747l-.619.619a.5.5 0 0 0 .708.707l.618-.62.043-.042c.37-.37.606-.606.772-.85.675-.993.71-2.287.06-3.277-.16-.241-.39-.472-.742-.823l-.044-.045-.045-.045c-.351-.351-.582-.582-.824-.74-.99-.651-2.283-.616-3.277.059-.243.165-.48.402-.85.771l-.042.043-.619.619a.5.5 0 1 0 .707.707l.619-.619ZM2.992 7.06l-.043.042c-.37.37-.606.606-.771.85-.676.993-.71 2.287-.06 3.277.158.241.39.472.74.824l.046.044.044.045c.351.351.582.582.824.74.99.651 2.284.616 3.278-.06.243-.164.48-.4.849-.77l.043-.043.618-.619a.5.5 0 0 0-.707-.707l-.619.619c-.427.427-.592.589-.746.694-.677.46-1.532.468-2.167.051-.144-.095-.299-.245-.71-.657-.412-.412-.563-.566-.657-.71-.418-.636-.409-1.49.05-2.167.106-.154.268-.32.695-.747l.619-.619a.5.5 0 1 0-.707-.707l-.62.62Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/LinkBreak2.astro", void 0);

const $$Astro$27 = createAstro();
const $$LinkNone1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$27, $$props, $$slots);
  Astro2.self = $$LinkNone1;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Link None 1",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.564 4H5.5a.5.5 0 0 1 0 1h-.875c-.604 0-.836.002-1.019.037-.803.154-1.414.752-1.568 1.496-.035.17-.038.384-.038.967 0 .582.003.798.038.967.154.744.765 1.342 1.568 1.496.183.035.415.037 1.019.037H5.5a.5.5 0 1 1 0 1h-.935c-.523 0-.858 0-1.147-.055-1.18-.226-2.12-1.116-2.36-2.275C1 8.387 1 8.06 1 7.563a325.8 325.8 0 0 0 0-.126c0-.497 0-.824.058-1.107.24-1.16 1.18-2.05 2.36-2.275C3.708 4 4.042 4 4.564 4Zm6.83 1.037C11.21 5.002 10.979 5 10.375 5H9.5a.5.5 0 1 1 0-1h.935c.523 0 .858 0 1.146.055 1.18.225 2.12 1.115 2.36 2.275.06.283.06.61.059 1.107v.126c0 .497 0 .824-.059 1.107-.24 1.16-1.18 2.05-2.36 2.275-.288.055-.623.055-1.145.055H9.5a.5.5 0 0 1 0-1h.875c.604 0 .836-.002 1.019-.037.803-.154 1.414-.752 1.568-1.496.035-.17.038-.385.038-.967 0-.583-.003-.798-.038-.967-.154-.744-.765-1.343-1.568-1.496Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/LinkNone1.astro", void 0);

const $$Astro$26 = createAstro();
const $$LinkNone2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$26, $$props, $$slots);
  Astro2.self = $$LinkNone2;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Link None 2",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M10.679 2.954c-.636-.417-1.49-.408-2.167.051-.154.105-.32.268-.747.695l-.619.618a.5.5 0 0 1-.707-.707l.619-.619.043-.042c.37-.37.606-.607.849-.772.994-.675 2.288-.71 3.278-.06.241.159.472.39.824.741l.044.045.045.045c.351.351.582.582.74.823.651.99.616 2.284-.059 3.278-.165.243-.402.48-.771.85l-.043.042-.619.619a.5.5 0 1 1-.707-.707l.619-.619c.427-.427.589-.592.694-.747.46-.676.468-1.531.051-2.167-.095-.144-.245-.298-.657-.71-.412-.412-.566-.562-.71-.657ZM4.318 6.44a.5.5 0 0 1 0 .707l-.619.618c-.427.427-.59.593-.694.747-.46.677-.468 1.532-.051 2.167.095.144.245.298.657.71.412.412.566.563.71.657.635.418 1.49.409 2.167-.05.154-.106.32-.268.747-.695l.618-.619a.5.5 0 1 1 .708.707l-.62.62-.042.042c-.37.37-.606.606-.85.771-.993.676-2.287.71-3.277.06-.241-.158-.472-.39-.824-.74-.014-.016-.03-.03-.044-.045a91.54 91.54 0 0 1-.045-.045c-.351-.351-.582-.582-.741-.824-.65-.99-.615-2.284.06-3.278.165-.243.402-.48.771-.849l.043-.043.619-.618a.5.5 0 0 1 .707 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/LinkNone2.astro", void 0);

const $$Astro$25 = createAstro();
const $$ListBullet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$25, $$props, $$slots);
  Astro2.self = $$ListBullet;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "List Bullet",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1.5 5.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4 4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5ZM4.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm0 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9ZM2.25 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ListBullet.astro", void 0);

const $$Astro$24 = createAstro();
const $$LockClosed = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$24, $$props, $$slots);
  Astro2.self = $$LockClosed;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Lock Closed",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5 4.636c0-.876.242-1.53.643-1.962.396-.427 1.003-.696 1.858-.696.856 0 1.462.269 1.857.694.4.431.642 1.085.642 1.961V6H5V4.636ZM4 6V4.636c0-1.055.293-1.978.91-2.643.623-.67 1.517-1.015 2.591-1.015 1.075 0 1.969.344 2.59 1.014.617.664.909 1.587.909 2.641V6h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1ZM3 7h9v6H3V7Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/LockClosed.astro", void 0);

const $$Astro$23 = createAstro();
const $$LockOpen1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$23, $$props, $$slots);
  Astro2.self = $$LockOpen1;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Lock Open 1",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.499 0C6.326 0 5.36.39 4.738 1.194 4.238 1.839 4 2.682 4 3.634h1c0-.79.197-1.4.528-1.828.388-.5 1.024-.806 1.97-.806.859 0 1.465.265 1.86.686.4.426.642 1.074.642 1.95V6H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1V3.636c0-1.055-.293-1.974-.912-2.634C9.465.338 8.57 0 7.498 0ZM3 7h9v6H3V7Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/LockOpen1.astro", void 0);

const $$Astro$22 = createAstro();
const $$LockOpen2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$22, $$props, $$slots);
  Astro2.self = $$LockOpen2;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Lock Open 2",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M9 3.636c0-.876.242-1.524.642-1.95.395-.421 1.001-.686 1.86-.686.946 0 1.582.306 1.97.806.331.427.528 1.037.528 1.827h1c0-.95-.237-1.794-.738-2.44C13.64.39 12.674 0 11.502 0c-1.073 0-1.967.338-2.59 1.002C8.294 1.662 8 2.582 8 3.636V6H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9V3.636ZM1 7h9v6H1V7Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/LockOpen2.astro", void 0);

const $$Astro$21 = createAstro();
const $$Loop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$21, $$props, $$slots);
  Astro2.self = $$Loop;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Loop",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.354 1.854a.5.5 0 1 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 1 0 .708-.708L2.207 4H9.5A3.5 3.5 0 0 1 13 7.5a.5.5 0 0 0 1 0A4.5 4.5 0 0 0 9.5 3H2.207l1.147-1.146ZM2 7.5a.5.5 0 0 0-1 0A4.5 4.5 0 0 0 5.5 12h7.293l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708L12.793 11H5.5A3.5 3.5 0 0 1 2 7.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Loop.astro", void 0);

const $$Astro$20 = createAstro();
const $$MagicWand = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$20, $$props, $$slots);
  Astro2.self = $$MagicWand;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Magic Wand",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M13.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 0 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6V.5Zm-2.046 2.646a.5.5 0 0 1 0 .708l-1 1a.5.5 0 1 1-.707-.708l1-1a.5.5 0 0 1 .707 0Zm-2 2a.5.5 0 0 1 0 .708l-7 7a.5.5 0 1 1-.708-.708l7-7a.5.5 0 0 1 .708 0ZM13.5 5.1c.22 0 .4.18.4.4v.6h.6a.4.4 0 0 1 0 .8h-.6v.6a.4.4 0 0 1-.8 0v-.6h-.6a.4.4 0 0 1 0-.8h.6v-.6c0-.22.18-.4.4-.4ZM8.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6V.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/MagicWand.astro", void 0);

const $$Astro$1$ = createAstro();
const $$MagnifyingGlass = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1$, $$props, $$slots);
  Astro2.self = $$MagnifyingGlass;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Magnifying Glass",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M10 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-.691 3.516a4.5 4.5 0 1 1 .707-.707l2.838 2.837a.5.5 0 0 1-.708.708L9.31 10.016Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/MagnifyingGlass.astro", void 0);

const $$Astro$1_ = createAstro();
const $$Margin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1_, $$props, $$slots);
  Astro2.self = $$Margin;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Margin",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1.5 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm3 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM8 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm3.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM1.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm.5-3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM1.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM2 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM13.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm.5-3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM13.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm3.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM4 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm1 0h5v5H5V5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Margin.astro", void 0);

const $$Astro$1Z = createAstro();
const $$MaskOff = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1Z, $$props, $$slots);
  Astro2.self = $$MaskOff;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Mask Off",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1 2h13v11H1V2ZM0 2a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2Zm4.875 5.5a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM7.5 3.875a3.625 3.625 0 1 0 0 7.25 3.625 3.625 0 0 0 0-7.25Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/MaskOff.astro", void 0);

const $$Astro$1Y = createAstro();
const $$MaskOn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1Y, $$props, $$slots);
  Astro2.self = $$MaskOn;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Mask On",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1Zm6.5 9.625a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/MaskOn.astro", void 0);

const $$Astro$1X = createAstro();
const $$MinusCircled = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1X, $$props, $$slots);
  Astro2.self = $$MinusCircled;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Minus Circled",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877ZM1.827 7.5a5.673 5.673 0 1 1 11.346 0 5.673 5.673 0 0 1-11.346 0ZM4.5 7a.5.5 0 0 0 0 1h6a.5.5 0 1 0 0-1h-6Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/MinusCircled.astro", void 0);

const $$Astro$1W = createAstro();
const $$Minus = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1W, $$props, $$slots);
  Astro2.self = $$Minus;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Minus",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2.25 7.5a.5.5 0 0 1 .5-.5h9.5a.5.5 0 0 1 0 1h-9.5a.5.5 0 0 1-.5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Minus.astro", void 0);

const $$Astro$1V = createAstro();
const $$Mix = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1V, $$props, $$slots);
  Astro2.self = $$Mix;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Mix",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2.15 4a1.85 1.85 0 1 1 3.7 0 1.85 1.85 0 0 1-3.7 0ZM4 1.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM5.82 11 2.5 12.837V9.163L5.82 11ZM2.64 8.212a.7.7 0 0 0-1.039.612v4.352a.7.7 0 0 0 1.039.613l3.933-2.176a.7.7 0 0 0 0-1.225L2.64 8.212ZM8.3 9a.7.7 0 0 1 .7-.7h4a.7.7 0 0 1 .7.7v4a.7.7 0 0 1-.7.7H9a.7.7 0 0 1-.7-.7V9Zm.9.2v3.6h3.6V9.2H9.2Zm4.243-7.007a.45.45 0 0 0-.636-.636L11 3.364 9.193 1.557a.45.45 0 1 0-.636.636L10.364 4 8.557 5.807a.45.45 0 1 0 .636.636L11 4.636l1.807 1.807a.45.45 0 0 0 .636-.636L11.636 4l1.807-1.807Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Mix.astro", void 0);

const $$Astro$1U = createAstro();
const $$MixerHorizontal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1U, $$props, $$slots);
  Astro2.self = $$MixerHorizontal;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Mixer Horizontal",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM3 5c.017 0 .033 0 .05-.002a2.5 2.5 0 0 0 4.9 0A.507.507 0 0 0 8 5h5.5a.5.5 0 0 0 0-1H8c-.017 0-.033 0-.05.002a2.5 2.5 0 0 0-4.9 0A.507.507 0 0 0 3 4H1.5a.5.5 0 0 0 0 1H3Zm8.95 5.998a2.5 2.5 0 0 1-4.9 0A.507.507 0 0 1 7 11H1.5a.5.5 0 0 1 0-1H7c.017 0 .033 0 .05.002a2.5 2.5 0 0 1 4.9 0A.506.506 0 0 1 12 10h1.5a.5.5 0 0 1 0 1H12c-.017 0-.033 0-.05-.002ZM8 10.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/MixerHorizontal.astro", void 0);

const $$Astro$1T = createAstro();
const $$MixerVertical = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1T, $$props, $$slots);
  Astro2.self = $$MixerVertical;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Mixer Vertical",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5 1.5a.5.5 0 0 0-1 0V7c0 .017 0 .033.002.05a2.5 2.5 0 0 0 0 4.9A.506.506 0 0 0 4 12v1.5a.5.5 0 0 0 1 0V12c0-.017 0-.033-.002-.05a2.5 2.5 0 0 0 0-4.9A.507.507 0 0 0 5 7V1.5Zm6 0a.5.5 0 0 0-1 0V3c0 .017 0 .033.002.05a2.5 2.5 0 0 0 0 4.9A.507.507 0 0 0 10 8v5.5a.5.5 0 0 0 1 0V8c0-.017 0-.033-.002-.05a2.5 2.5 0 0 0 0-4.9A.507.507 0 0 0 11 3V1.5ZM4.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM9 5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/MixerVertical.astro", void 0);

const $$Astro$1S = createAstro();
const $$ModulzLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1S, $$props, $$slots);
  Astro2.self = $$ModulzLogo;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Modulz Logo",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.26 3.167 4.37 5.333V1l2.89 2.167ZM1 8.222l2.889-2.166L1 3.889v4.333ZM1 14l2.889-2.167L1 9.667V14Zm6.74-5.778 2.89-2.166-2.89-2.167v4.333ZM14 3.167l-2.889 2.166V1L14 3.167Zm-2.889 7.944L14 8.944l-2.889-2.166v4.333Zm-7.222 0L1 8.944l2.889-2.166v4.333Zm.481-5.055 2.89 2.166V3.89L4.37 6.056Zm-.481-.723L1 3.167 3.889 1v4.333ZM7.74 3.167l2.889 2.166V1L7.74 3.167ZM14 8.222l-2.889-2.166L14 3.889v4.333Zm-2.889 3.611L14 14V9.667l-2.889 2.166Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ModulzLogo.astro", void 0);

const $$Astro$1R = createAstro();
const $$Moon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1R, $$props, $$slots);
  Astro2.self = $$Moon;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Moon",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6V.5Zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6v-.6Zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6v-.6ZM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4A6.57 6.57 0 0 1 9.203 5.1a6.602 6.602 0 0 1-6.243 6.59c-.214.012-.333.264-.183.417.069.07.138.139.21.206l.072.066.26.226.188.148.121.09.187.131.176.115c.12.076.244.149.37.217l.264.135.26.12.303.122.244.086a6.568 6.568 0 0 0 1.103.26l.317.04.267.02a6.6 6.6 0 0 0 6.943-7.328l-.037-.277a6.557 6.557 0 0 0-.384-1.415l-.113-.268-.077-.166-.074-.148a6.602 6.602 0 0 0-.546-.883l-.153-.2-.199-.24-.163-.18-.12-.124-.16-.158-.223-.2-.32-.26-.245-.177-.292-.19-.321-.186-.328-.165-.113-.052-.24-.101-.276-.104-.252-.082-.325-.09-.265-.06-.292-.053Zm1.86 4.318a7.578 7.578 0 0 0-.572-2.894 5.601 5.601 0 1 1-4.748 10.146 7.61 7.61 0 0 0 3.66-2.51.749.749 0 0 0 1.355-.442.75.75 0 0 0-.584-.732c.062-.116.122-.235.178-.355A1.25 1.25 0 1 0 10.35 6.2c.034-.295.052-.595.052-.9Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Moon.astro", void 0);

const $$Astro$1Q = createAstro();
const $$Move = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1Q, $$props, $$slots);
  Astro2.self = $$Move;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Move",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.818.932a.45.45 0 0 0-.636 0l-1.75 1.75a.45.45 0 1 0 .636.636L7 2.386V5.5a.5.5 0 0 0 1 0V2.386l.932.932a.45.45 0 0 0 .636-.636L7.818.932ZM8 9.5a.5.5 0 0 0-1 0v3.114l-.932-.932a.45.45 0 0 0-.636.636l1.75 1.75a.45.45 0 0 0 .636 0l1.75-1.75a.45.45 0 0 0-.636-.636L8 12.614V9.5Zm1-2a.5.5 0 0 1 .5-.5h3.114l-.932-.932a.45.45 0 0 1 .636-.636l1.75 1.75a.45.45 0 0 1 0 .636l-1.75 1.75a.45.45 0 0 1-.636-.636L12.614 8H9.5a.5.5 0 0 1-.5-.5ZM3.318 6.068 2.386 7H5.5a.5.5 0 0 1 0 1H2.386l.932.932a.45.45 0 0 1-.636.636l-1.75-1.75a.45.45 0 0 1 0-.636l1.75-1.75a.45.45 0 1 1 .636.636Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Move.astro", void 0);

const $$Astro$1P = createAstro();
const $$NotionLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1P, $$props, $$slots);
  Astro2.self = $$NotionLogo;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Notion Logo",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.258 3.117c.42.341.577.315 1.366.262l7.433-.446c.158 0 .027-.157-.026-.183l-1.235-.893c-.236-.184-.551-.394-1.155-.341l-7.198.525c-.262.026-.315.157-.21.262l1.025.814Zm.446 1.732v7.821c0 .42.21.578.683.552l8.17-.473c.472-.026.525-.315.525-.656V4.324c0-.34-.131-.525-.42-.499l-8.538.499c-.315.026-.42.184-.42.525Zm8.065.42c.052.236 0 .472-.237.499l-.394.078v5.774c-.341.184-.657.29-.92.29-.42 0-.525-.132-.84-.526L6.803 7.342v3.911l.815.184s0 .472-.657.472l-1.812.105c-.053-.105 0-.367.184-.42l.472-.13V6.292L5.15 6.24c-.053-.236.078-.577.446-.604l1.944-.13L10.22 9.6V5.978l-.683-.079c-.053-.289.157-.499.42-.525l1.813-.105Zm-9.93-3.937L9.326.781c.919-.08 1.155-.026 1.733.394l2.39 1.68c.395.288.526.367.526.682v9.212c0 .578-.21.92-.946.971l-8.694.525c-.552.027-.815-.052-1.104-.42l-1.76-2.283c-.315-.42-.446-.735-.446-1.103V2.25c0-.472.21-.866.814-.918Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/NotionLogo.astro", void 0);

const $$Astro$1O = createAstro();
const $$Opacity = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1O, $$props, $$slots);
  Astro2.self = $$Opacity;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Opacity",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5 1.5C4.5 4.25 3 6.5 3 9a4.5 4.5 0 1 0 9 0c0-2.5-1.5-4.75-4.5-7.5ZM11 9c0-1.888-1.027-3.728-3.5-6.126C5.027 5.272 4 7.112 4 9a3.5 3.5 0 1 0 7 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Opacity.astro", void 0);

const $$Astro$1N = createAstro();
const $$Overline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1N, $$props, $$slots);
  Astro2.self = $$Overline;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Overline",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.5 1.1a.4.4 0 1 0 0 .8h8a.4.4 0 0 0 0-.8h-8ZM5 4.25a.5.5 0 0 0-1 0v5.3a3.5 3.5 0 0 0 7 0v-5.3a.5.5 0 0 0-1 0v5.3a2.5 2.5 0 0 1-5 0v-5.3Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Overline.astro", void 0);

const $$Astro$1M = createAstro();
const $$Padding = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1M, $$props, $$slots);
  Astro2.self = $$Padding;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Padding",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2.857 2h9.286c.473 0 .857.384.857.857v9.286a.857.857 0 0 1-.857.857H2.857A.857.857 0 0 1 2 12.143V2.857C2 2.384 2.384 2 2.857 2ZM1 2.857C1 1.831 1.831 1 2.857 1h9.286C13.168 1 14 1.831 14 2.857v9.286A1.857 1.857 0 0 1 12.143 14H2.857A1.857 1.857 0 0 1 1 12.143V2.857ZM7.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-3 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm6.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM10.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm.5-3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Padding.astro", void 0);

const $$Astro$1L = createAstro();
const $$PaperPlane = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1L, $$props, $$slots);
  Astro2.self = $$PaperPlane;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Paper Plane",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1.203 1.043a.5.5 0 0 0-.635.709L3.921 7.5.568 13.248a.5.5 0 0 0 .635.709l13.5-6a.5.5 0 0 0 0-.914l-13.5-6ZM4.846 7.1 2.212 2.586 13.27 7.5 2.212 12.414 4.846 7.9H9a.4.4 0 1 0 0-.8H4.846Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/PaperPlane.astro", void 0);

const $$Astro$1K = createAstro();
const $$Pause = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1K, $$props, $$slots);
  Astro2.self = $$Pause;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Pause",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M6.05 2.75a.55.55 0 0 0-1.1 0v9.5a.55.55 0 0 0 1.1 0v-9.5Zm4 0a.55.55 0 0 0-1.1 0v9.5a.55.55 0 0 0 1.1 0v-9.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Pause.astro", void 0);

const $$Astro$1J = createAstro();
const $$Pencil1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1J, $$props, $$slots);
  Astro2.self = $$Pencil1;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Pencil 1",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M11.854 1.146a.5.5 0 0 0-.707 0L3.714 8.578a1 1 0 0 0-.212.314L2.04 12.303a.5.5 0 0 0 .657.657l3.411-1.463a1 1 0 0 0 .314-.211l7.432-7.432a.5.5 0 0 0 0-.708l-2-2Zm-7.432 8.14L11.5 2.206 12.793 3.5l-7.078 7.078-1.496.641-.438-.438.64-1.496Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Pencil1.astro", void 0);

const $$Astro$1I = createAstro();
const $$Pencil2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1I, $$props, $$slots);
  Astro2.self = $$Pencil2;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Pencil 2",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M12.146 1.146a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .708l-3.942 3.942a1 1 0 0 1-.26.188L6.724 9.947a.5.5 0 0 1-.671-.67l1.963-3.928a1 1 0 0 1 .188-.26l3.942-3.943Zm.354 1.061-3.59 3.59-1.037 2.076.254.254 2.077-1.038L13.793 3.5 12.5 2.207ZM10 2 9 3H4.9c-.428 0-.72 0-.944.019-.22.018-.332.05-.41.09a1 1 0 0 0-.437.437c-.04.078-.072.19-.09.41C3 4.18 3 4.472 3 4.9v6.2c0 .428 0 .72.019.944.018.22.05.332.09.41a1 1 0 0 0 .437.437c.078.04.19.072.41.09.225.019.516.019.944.019h6.2c.428 0 .72 0 .944-.019.22-.018.332-.05.41-.09a1 1 0 0 0 .437-.437c.04-.078.072-.19.09-.41.019-.225.019-.516.019-.944V7l1-1V11.12c0 .403 0 .735-.022 1.006-.023.281-.072.54-.196.782a2 2 0 0 1-.874.874c-.243.124-.501.173-.782.196-.27.022-.603.022-1.005.022H4.88c-.403 0-.735 0-1.006-.022-.281-.023-.54-.072-.782-.196a2 2 0 0 1-.874-.874c-.124-.243-.173-.501-.196-.782C2 11.856 2 11.523 2 11.12V4.88c0-.403 0-.735.022-1.006.023-.281.072-.54.196-.782a2 2 0 0 1 .874-.874c.243-.124.501-.173.782-.196C4.144 2 4.477 2 4.88 2H10Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Pencil2.astro", void 0);

const $$Astro$1H = createAstro();
const $$Person = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1H, $$props, $$slots);
  Astro2.self = $$Person;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Person",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5.875a3.625 3.625 0 0 0-1.006 7.109c-1.194.145-2.218.567-2.99 1.328-.982.967-1.479 2.408-1.479 4.288a.475.475 0 1 0 .95 0c0-1.72.453-2.88 1.196-3.612.744-.733 1.856-1.113 3.329-1.113s2.585.38 3.33 1.113c.742.733 1.195 1.892 1.195 3.612a.475.475 0 1 0 .95 0c0-1.88-.497-3.32-1.48-4.288-.77-.76-1.795-1.183-2.989-1.328A3.627 3.627 0 0 0 7.5.875ZM4.825 4.5a2.675 2.675 0 1 1 5.35 0 2.675 2.675 0 0 1-5.35 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Person.astro", void 0);

const $$Astro$1G = createAstro();
const $$PieChart = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1G, $$props, $$slots);
  Astro2.self = $$PieChart;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Pie Chart",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1.85 7.5a5.65 5.65 0 1 1 11.3 0 5.65 5.65 0 0 1-11.3 0ZM7.5.85a6.65 6.65 0 1 0 0 13.3 6.65 6.65 0 0 0 0-13.3ZM7 8V3.128A4.4 4.4 0 0 1 11.872 8H7Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/PieChart.astro", void 0);

const $$Astro$1F = createAstro();
const $$Pilcrow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1F, $$props, $$slots);
  Astro2.self = $$Pilcrow;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Pilcrow",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3 5.5C3 7.983 4.992 9 7 9v3.5a.5.5 0 0 0 1 0V3.1h1v9.4a.5.5 0 0 0 1 0V3.1h1.5a.55.55 0 1 0 0-1.1H7C4.992 2 3 3.017 3 5.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Pilcrow.astro", void 0);

const $$Astro$1E = createAstro();
const $$PinBottom = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1E, $$props, $$slots);
  Astro2.self = $$PinBottom;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Pin Bottom",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M13.5 13.95a.45.45 0 0 0 0-.9h-12a.45.45 0 1 0 0 .9h12Zm-2.432-6.382a.45.45 0 1 0-.636-.636L7.95 9.414V1.5a.45.45 0 0 0-.9 0v7.914L4.568 6.932a.45.45 0 1 0-.636.636l3.25 3.25a.45.45 0 0 0 .636 0l3.25-3.25Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/PinBottom.astro", void 0);

const $$Astro$1D = createAstro();
const $$PinLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1D, $$props, $$slots);
  Astro2.self = $$PinLeft;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Pin Left",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2.05 13.5a.45.45 0 0 0 .9 0v-12a.45.45 0 1 0-.9 0v12Zm6.382-2.432a.45.45 0 1 0 .636-.636L6.586 7.95H14.5a.45.45 0 0 0 0-.9H6.586l2.482-2.482a.45.45 0 1 0-.636-.636l-3.25 3.25a.45.45 0 0 0 0 .636l3.25 3.25Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/PinLeft.astro", void 0);

const $$Astro$1C = createAstro();
const $$PinRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1C, $$props, $$slots);
  Astro2.self = $$PinRight;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Pin Right",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M12.95 1.5a.45.45 0 0 0-.9 0v12a.45.45 0 1 0 .9 0v-12ZM6.568 3.932a.45.45 0 1 0-.636.636L8.414 7.05H.5a.45.45 0 0 0 0 .9h7.914l-2.482 2.482a.45.45 0 1 0 .636.636l3.25-3.25a.45.45 0 0 0 0-.636l-3.25-3.25Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/PinRight.astro", void 0);

const $$Astro$1B = createAstro();
const $$PinTop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1B, $$props, $$slots);
  Astro2.self = $$PinTop;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Pin Top",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1.5 1.05a.45.45 0 1 0 0 .9h12a.45.45 0 1 0 0-.9h-12Zm2.432 6.382a.45.45 0 1 0 .636.636L7.05 5.586V13.5a.45.45 0 0 0 .9 0V5.586l2.482 2.482a.45.45 0 1 0 .636-.636l-3.25-3.25a.45.45 0 0 0-.636 0l-3.25 3.25Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/PinTop.astro", void 0);

const $$Astro$1A = createAstro();
const $$Play = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1A, $$props, $$slots);
  Astro2.self = $$Play;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Play",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.242 2.322a.5.5 0 0 1 .491-.014l9 4.75a.5.5 0 0 1 0 .884l-9 4.75A.5.5 0 0 1 3 12.25v-9.5a.5.5 0 0 1 .242-.428ZM4 3.579v7.842L11.429 7.5 4 3.58Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Play.astro", void 0);

const $$Astro$1z = createAstro();
const $$PlusCircled = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1z, $$props, $$slots);
  Astro2.self = $$PlusCircled;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Plus Circled",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877ZM1.827 7.5a5.673 5.673 0 1 1 11.346 0 5.673 5.673 0 0 1-11.346 0ZM7.5 4a.5.5 0 0 1 .5.5V7h2.5a.5.5 0 1 1 0 1H8v2.5a.5.5 0 0 1-1 0V8H4.5a.5.5 0 0 1 0-1H7V4.5a.5.5 0 0 1 .5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/PlusCircled.astro", void 0);

const $$Astro$1y = createAstro();
const $$Plus = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1y, $$props, $$slots);
  Astro2.self = $$Plus;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Plus",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M8 2.75a.5.5 0 0 0-1 0V7H2.75a.5.5 0 0 0 0 1H7v4.25a.5.5 0 0 0 1 0V8h4.25a.5.5 0 0 0 0-1H8V2.75Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Plus.astro", void 0);

const $$Astro$1x = createAstro();
const $$QuestionMarkCircled = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1x, $$props, $$slots);
  Astro2.self = $$QuestionMarkCircled;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Question Mark Circled",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M.877 7.5a6.623 6.623 0 1 1 13.246 0 6.623 6.623 0 0 1-13.246 0ZM7.5 1.827a5.673 5.673 0 1 0 0 11.346 5.673 5.673 0 0 0 0-11.346Zm.75 8.673a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-2.2-4.25c0-.678.585-1.325 1.45-1.325s1.45.647 1.45 1.325c0 .491-.27.742-.736 1.025-.051.032-.111.066-.176.104a5.28 5.28 0 0 0-.564.36c-.242.188-.524.493-.524.961a.55.55 0 0 0 1.1.004.443.443 0 0 1 .1-.098c.102-.079.215-.144.366-.232.078-.045.167-.097.27-.159.534-.325 1.264-.861 1.264-1.965 0-1.322-1.115-2.425-2.55-2.425-1.435 0-2.55 1.103-2.55 2.425a.55.55 0 0 0 1.1 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/QuestionMarkCircled.astro", void 0);

const $$Astro$1w = createAstro();
const $$QuestionMark = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1w, $$props, $$slots);
  Astro2.self = $$QuestionMark;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Question Mark",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5.075 4.1c0-1.189 1.182-2.175 2.425-2.175 1.243 0 2.425.986 2.425 2.175 0 1.099-.557 1.614-1.306 2.279l-.031.027C7.845 7.065 6.925 7.88 6.925 9.5a.575.575 0 1 0 1.15 0c0-1.085.554-1.594 1.307-2.26l.02-.02c.748-.662 1.673-1.482 1.673-3.12C11.075 2.128 9.219.775 7.5.775S3.925 2.128 3.925 4.1a.575.575 0 1 0 1.15 0ZM7.5 13.358a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/QuestionMark.astro", void 0);

const $$Astro$1v = createAstro();
const $$Quote = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1v, $$props, $$slots);
  Astro2.self = $$Quote;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Quote",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M9.425 3.441c.631-.204 1.359-.2 1.954.105 1.374.706 1.969 2.526 1.416 4.454-.248.865-.685 1.705-1.609 2.552-.924.848-2.206 1.348-2.8 1.348A.38.38 0 0 1 8 11.525c0-.207.176-.375.386-.375.679 0 1.286-.37 2.005-.914.55-.417.98-.95 1.217-1.414.455-.888.47-2.14-.265-2.473-.353.386-.813.61-1.366.61-1.2 0-1.907-.965-1.876-1.839.029-.835.56-1.43 1.324-1.679Zm-6 0c.631-.204 1.359-.2 1.954.105C6.753 4.252 7.348 6.072 6.795 8c-.248.865-.685 1.705-1.609 2.552-.924.848-2.206 1.348-2.8 1.348A.38.38 0 0 1 2 11.525c0-.207.176-.375.386-.375.679 0 1.286-.37 2.005-.914.55-.417.98-.95 1.217-1.414.455-.888.47-2.14-.265-2.473-.353.386-.814.61-1.366.61-1.2 0-1.907-.965-1.876-1.839.029-.835.56-1.43 1.324-1.679Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Quote.astro", void 0);

const $$Astro$1u = createAstro();
const $$Radiobutton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1u, $$props, $$slots);
  Astro2.self = $$Radiobutton;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Radiobutton",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877ZM1.827 7.5a5.673 5.673 0 1 1 11.346 0 5.673 5.673 0 0 1-11.346 0Zm5.673 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Radiobutton.astro", void 0);

const $$Astro$1t = createAstro();
const $$Reader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1t, $$props, $$slots);
  Astro2.self = $$Reader;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Reader",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.2 1h-.023c-.308 0-.573 0-.79.02-.231.023-.459.071-.67.201a1.5 1.5 0 0 0-.496.495c-.13.212-.178.44-.2.67C2 2.604 2 2.87 2 3.177V11.823c0 .308 0 .573.02.79.023.231.071.459.201.67a1.5 1.5 0 0 0 .495.496c.212.13.44.178.67.2.218.021.483.021.791.021H10.823c.308 0 .573 0 .79-.02.231-.023.459-.071.67-.201a1.5 1.5 0 0 0 .496-.495c.13-.212.178-.44.2-.67.021-.218.021-.483.021-.791V3.177c0-.308 0-.573-.02-.79a1.519 1.519 0 0 0-.201-.67 1.5 1.5 0 0 0-.495-.496 1.519 1.519 0 0 0-.67-.2A8.997 8.997 0 0 0 10.823 1H4.2Zm-.961 1.074c.028-.018.085-.043.242-.058C3.645 2.001 3.863 2 4.2 2h6.6c.337 0 .555 0 .72.016.156.015.213.04.241.058a.5.5 0 0 1 .165.165c.018.028.043.085.058.242.015.164.016.382.016.719v8.6c0 .337 0 .555-.016.72-.015.156-.04.213-.058.241a.5.5 0 0 1-.165.165c-.028.018-.085.043-.242.058A8.534 8.534 0 0 1 10.8 13H4.2c-.337 0-.555 0-.72-.016-.156-.015-.213-.04-.241-.058a.5.5 0 0 1-.165-.165c-.018-.028-.043-.085-.058-.242A8.558 8.558 0 0 1 3 11.8V3.2c0-.337 0-.555.016-.72.015-.156.04-.213.058-.241a.5.5 0 0 1 .165-.165ZM5 10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5Zm-.5-2.5A.5.5 0 0 1 5 7h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5ZM5 4a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1H5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Reader.astro", void 0);

const $$Astro$1s = createAstro();
const $$Reload = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1s, $$props, $$slots);
  Astro2.self = $$Reload;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Reload",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1.85 7.5c0-2.835 2.21-5.65 5.65-5.65 2.778 0 4.152 2.056 4.737 3.15H10.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.813C12.296 3.071 10.666.85 7.5.85 3.437.85.85 4.185.85 7.5c0 3.315 2.587 6.65 6.65 6.65 1.944 0 3.562-.77 4.714-1.942a6.77 6.77 0 0 0 1.428-2.167.5.5 0 1 0-.925-.38 5.77 5.77 0 0 1-1.216 1.846c-.971.99-2.336 1.643-4.001 1.643-3.44 0-5.65-2.815-5.65-5.65Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Reload.astro", void 0);

const $$Astro$1r = createAstro();
const $$Reset = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1r, $$props, $$slots);
  Astro2.self = $$Reset;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Reset",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.854 2.146a.5.5 0 0 1 0 .708L3.707 4H9a4.5 4.5 0 1 1 0 9H5a.5.5 0 0 1 0-1h4a3.5 3.5 0 1 0 0-7H3.707l1.147 1.146a.5.5 0 1 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Reset.astro", void 0);

const $$Astro$1q = createAstro();
const $$Resume = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1q, $$props, $$slots);
  Astro2.self = $$Resume;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Resume",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.05 2.75a.55.55 0 1 0-1.1 0v9.5a.55.55 0 0 0 1.1 0v-9.5Zm2.683-.442A.5.5 0 0 0 5 2.75v9.5a.5.5 0 0 0 .733.442l9-4.75a.5.5 0 0 0 0-.884l-9-4.75ZM6 11.42V3.579L13.429 7.5l-7.43 3.92Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Resume.astro", void 0);

const $$Astro$1p = createAstro();
const $$Rocket = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1p, $$props, $$slots);
  Astro2.self = $$Rocket;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Rocket",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="m6.854 3.854.8-.8c.644-.645 1.775-1.092 2.898-1.253a5.342 5.342 0 0 1 1.504-.02c.443.066.714.196.84.323.127.126.257.397.323.84.064.427.059.95-.02 1.504-.16 1.123-.608 2.254-1.253 2.898L7.5 11.793l-1.146-1.146a.5.5 0 1 0-.708.707l1.5 1.5a.5.5 0 0 0 .708 0l.547-.548 1.17 1.951a.5.5 0 0 0 .783.097l2-2a.5.5 0 0 0 .141-.425l-.465-3.252.624-.623c.855-.856 1.358-2.225 1.535-3.465.09-.627.1-1.25.019-1.794-.08-.528-.256-1.05-.604-1.399-.349-.348-.871-.525-1.4-.604a6.333 6.333 0 0 0-1.793.02C9.17.987 7.8 1.49 6.946 2.345l-.623.624-3.252-.465a.5.5 0 0 0-.425.141l-2 2a.5.5 0 0 0 .097.783l1.95 1.17-.547.547a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 1 0 .708-.708L3.207 7.5l.647-.646 3-3Zm3.245 9.34-.97-1.617 2.017-2.016.324 2.262-1.37 1.37ZM3.423 5.87l2.016-2.016-2.262-.324-1.37 1.37 1.616.97Zm-1.07 4.484a.5.5 0 1 0-.707-.708l-1 1a.5.5 0 1 0 .708.707l1-1Zm1.5 1.5a.5.5 0 1 0-.707-.707l-2 2a.5.5 0 0 0 .708.707l2-2Zm1.5 1.5a.5.5 0 1 0-.707-.708l-1 1a.5.5 0 1 0 .708.707l1-1ZM9.5 6.748a1.249 1.249 0 1 0 0-2.498 1.249 1.249 0 0 0 0 2.498Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Rocket.astro", void 0);

const $$Astro$1o = createAstro();
const $$RotateCounterClockwise = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1o, $$props, $$slots);
  Astro2.self = $$RotateCounterClockwise;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Rotate Counter Clockwise",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.597 2.936A.25.25 0 0 0 8 2.74V2c1.981 0 3.185.364 3.91 1.09C12.637 3.814 13 5.018 13 7a.5.5 0 0 0 1 0c0-2.056-.367-3.603-1.382-4.618C11.603 1.368 10.056 1 8 1V.261a.25.25 0 0 0-.403-.197L6.004 1.303a.25.25 0 0 0 0 .394l1.593 1.24ZM9.5 5h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-7-1A1.5 1.5 0 0 0 1 5.5v7A1.5 1.5 0 0 0 2.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 9.5 4h-7Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/RotateCounterClockwise.astro", void 0);

const $$Astro$1n = createAstro();
const $$RowSpacing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1n, $$props, $$slots);
  Astro2.self = $$RowSpacing;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Row Spacing",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.818.682a.45.45 0 0 0-.636 0l-2 2a.45.45 0 0 0 .636.636L7.05 2.086V5.5a.45.45 0 1 0 .9 0V2.086l1.232 1.232a.45.45 0 0 0 .636-.636l-2-2Zm.132 12.232V9.5a.45.45 0 1 0-.9 0v3.414l-1.232-1.232a.45.45 0 0 0-.636.636l2 2a.45.45 0 0 0 .636 0l2-2a.45.45 0 1 0-.636-.636L7.95 12.914ZM1.5 7a.5.5 0 0 0 0 1h12a.5.5 0 1 0 0-1h-12Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/RowSpacing.astro", void 0);

const $$Astro$1m = createAstro();
const $$Rows = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1m, $$props, $$slots);
  Astro2.self = $$Rows;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Rows",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M14 12.85H1v1.3h13v-1.3Zm0-4H1v1.3h13v-1.3Zm-13-4h13v1.3H1v-1.3Zm13-4H1v1.3h13V.85Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Rows.astro", void 0);

const $$Astro$1l = createAstro();
const $$RulerHorizontal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1l, $$props, $$slots);
  Astro2.self = $$RulerHorizontal;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Ruler Horizontal",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M.5 4a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5H.5Zm.5 6V5h1.075v2.5a.425.425 0 0 0 .85 0V5h1.15v1.5a.425.425 0 0 0 .85 0V5h1.15v1.5a.425.425 0 0 0 .85 0V5h1.15v2.5a.425.425 0 0 0 .85 0V5h1.15v1.5a.425.425 0 0 0 .85 0V5h1.15v1.5a.425.425 0 0 0 .85 0V5H14v5H1Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/RulerHorizontal.astro", void 0);

const $$Astro$1k = createAstro();
const $$RulerSquare = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1k, $$props, $$slots);
  Astro2.self = $$RulerSquare;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Ruler Square",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M.5 0a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V5h9.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H.5ZM1 4.075V1h3.075v3.075H1Zm0 .85V14h3v-1.075H2.75a.425.425 0 1 1 0-.85H4v-1.15H2.25a.425.425 0 0 1 0-.85H4v-1.15H2.75a.425.425 0 1 1 0-.85H4v-1.15H2.75a.425.425 0 1 1 0-.85H4v-1.15H1ZM4.925 4h1.15V2.75a.425.425 0 0 1 .85 0V4h1.15V2.75a.425.425 0 0 1 .85 0V4h1.15V2.25a.425.425 0 1 1 .85 0V4h1.15V2.75a.425.425 0 0 1 .85 0V4H14V1H4.925v3Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/RulerSquare.astro", void 0);

const $$Astro$1j = createAstro();
const $$Section = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1j, $$props, $$slots);
  Astro2.self = $$Section;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Section",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM2 5v5h11V5H2Zm0-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2Zm-.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM4 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM3.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM6 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM5.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM8 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM10 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM9.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM12 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM11.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM14 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM13.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Section.astro", void 0);

const $$Astro$1i = createAstro();
const $$SewingPinFilled = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1i, $$props, $$slots);
  Astro2.self = $$SewingPinFilled;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Sewing Pin Filled",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M10 3.5a2.5 2.5 0 0 1-2 2.45v7.55a.5.5 0 0 1-1 0V5.95a2.5 2.5 0 1 1 3-2.45Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/SewingPinFilled.astro", void 0);

const $$Astro$1h = createAstro();
const $$SewingPin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1h, $$props, $$slots);
  Astro2.self = $$SewingPin;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Sewing Pin",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M6 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm2 2.45a2.5 2.5 0 1 0-1 0v7.55a.5.5 0 0 0 1 0V5.95Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/SewingPin.astro", void 0);

const $$Astro$1g = createAstro();
const $$ShadowInner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1g, $$props, $$slots);
  Astro2.self = $$ShadowInner;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Shadow Inner",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M.877 7.5a6.623 6.623 0 1 1 13.246 0 6.623 6.623 0 0 1-13.246 0ZM7.5 1.827a5.673 5.673 0 1 0 0 11.346 5.673 5.673 0 0 0 0-11.346Z"></path><path d="M12.162 3.852c-3.804 1.037-7.273 4.506-8.31 8.31l-.482-.132c1.084-3.974 4.686-7.577 8.66-8.66l.132.482Z" opacity=".05"></path><path d="M11.88 3.427C8.035 4.505 4.507 8.034 3.428 11.88l-.481-.134c1.125-4.015 4.785-7.675 8.8-8.8l.135.481Z" opacity=".1"></path><path d="M11.52 3.026c-3.83 1.136-7.352 4.657-8.492 8.486l-.48-.143c1.189-3.99 4.839-7.638 8.83-8.823l.142.48Z" opacity=".15"></path><path d="M11.047 2.662C7.31 3.877 3.879 7.308 2.663 11.043l-.475-.154C3.453 7 7.004 3.45 10.892 2.186l.155.476Z" opacity=".2"></path><path d="M10.52 2.324c-3.6 1.29-6.896 4.585-8.192 8.183l-.47-.169c1.346-3.739 4.754-7.144 8.493-8.485l.17.47Z" opacity=".25"></path><path d="M9.902 2.031C6.5 3.395 3.4 6.494 2.034 9.896l-.464-.187c1.417-3.528 4.617-6.728 8.146-8.142l.186.464Z" opacity=".3"></path><path d="M9.207 1.789C6.061 3.203 3.211 6.052 1.793 9.197l-.456-.205c1.468-3.257 4.408-6.194 7.665-7.66l.205.457Z" opacity=".35"></path><path d="M8.407 1.62c-2.814 1.431-5.35 3.965-6.782 6.778l-.445-.226c1.48-2.908 4.092-5.519 7-6.997l.227.446Z" opacity=".4"></path><path d="M7.462 1.567c-2.375 1.38-4.508 3.512-5.89 5.887l-.432-.252c1.425-2.45 3.62-4.644 6.071-6.067l.251.432Z" opacity=".45"></path><path d="M6.304 1.705a17.386 17.386 0 0 0-4.6 4.6l-.414-.28a17.886 17.886 0 0 1 4.734-4.734l.28.414Z" opacity=".5"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ShadowInner.astro", void 0);

const $$Astro$1f = createAstro();
const $$ShadowNone = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1f, $$props, $$slots);
  Astro2.self = $$ShadowNone;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Shadow None",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5.877a6.623 6.623 0 0 0-5.023 10.94l-.83.83a.5.5 0 1 0 .707.707l.83-.83a6.623 6.623 0 0 0 9.34-9.34l.83-.83a.5.5 0 0 0-.707-.708l-.83.83A6.597 6.597 0 0 0 7.5.878Zm3.642 2.274a5.673 5.673 0 0 0-7.992 7.992l7.992-7.992Zm-7.284 8.698a5.673 5.673 0 0 0 7.991-7.992L3.858 11.85Z"></path><path d="M6.783 13.376c1.956-3.423 1.956-8.329 0-11.752l.434-.248c2.044 3.577 2.044 8.671 0 12.248l-.434-.248Z" opacity=".05"></path><path d="M7.282 13.477c1.957-3.482 1.957-8.472 0-11.955l.436-.244c2.043 3.634 2.043 8.81 0 12.444l-.436-.245Z" opacity=".1"></path><path d="M7.821 13.506c1.904-3.51 1.905-8.492.004-12.005l.44-.238c1.981 3.662 1.98 8.822-.004 12.482l-.44-.239Z" opacity=".15"></path><path d="M8.413 13.429c1.782-3.5 1.783-8.354.001-11.855l.446-.227c1.854 3.644 1.853 8.666-.002 12.309l-.445-.227Z" opacity=".2"></path><path d="M9.024 13.296c1.633-3.458 1.635-8.119.006-11.58l.452-.212c1.693 3.595 1.69 8.412-.005 12.005l-.453-.213Z" opacity=".25"></path><path d="M9.668 13.066c1.442-3.37 1.443-7.754.003-11.125l.46-.196c1.493 3.496 1.492 8.022-.003 11.517l-.46-.197Z" opacity=".3"></path><path d="M10.331 12.746c1.224-3.225 1.225-7.255.004-10.482l.467-.177c1.265 3.341 1.264 7.497-.003 10.836l-.468-.177Z" opacity=".35"></path><path d="M11.015 12.299c.979-3.002.98-6.586.003-9.588l.476-.155c1.009 3.103 1.008 6.796-.003 9.898l-.476-.155Z" opacity=".4"></path><path d="M11.721 11.668c.704-2.655.705-5.671.003-8.327l.483-.128c.725 2.74.724 5.844-.002 8.583l-.484-.128Z" opacity=".45"></path><path d="M12.443 10.752c.41-2.114.41-4.391 0-6.505l.49-.095a17.888 17.888 0 0 1 .001 6.695l-.49-.095Z" opacity=".5"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ShadowNone.astro", void 0);

const $$Astro$1e = createAstro();
const $$ShadowOuter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1e, $$props, $$slots);
  Astro2.self = $$ShadowOuter;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Shadow Outer",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M12.14 3.886a6 6 0 1 1-8.244 8.269l.425-.263a5.5 5.5 0 1 0 7.557-7.58l.262-.426Z" opacity=".05"></path><path d="M12.851 5.073a5.5 5.5 0 1 1-7.778 7.778l.357-.35a5 5 0 1 0 7.07-7.07l.351-.358Z" opacity=".2"></path><path d="M13.302 6.45a5 5 0 0 1-6.9 6.822l.26-.427a4.5 4.5 0 0 0 6.21-6.14l.43-.254Z" opacity=".35"></path><path d="M13.374 7.94a4.5 4.5 0 0 1-5.502 5.417l.126-.484a4 4 0 0 0 4.89-4.816l.486-.117Z" opacity=".5"></path><path d="M12.915 9.821a4.005 4.005 0 0 1-3.123 3.1l-.098-.49a3.505 3.505 0 0 0 2.732-2.712l.49.102Z" opacity=".65"></path><path d="M1.277 7.503a6.225 6.225 0 1 1 12.45 0 6.225 6.225 0 0 1-12.45 0Zm6.225-5.275a5.275 5.275 0 1 0 0 10.55 5.275 5.275 0 0 0 0-10.55Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ShadowOuter.astro", void 0);

const $$Astro$1d = createAstro();
const $$Shadow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1d, $$props, $$slots);
  Astro2.self = $$Shadow;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Shadow",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M.877 7.5a6.623 6.623 0 1 1 13.246 0 6.623 6.623 0 0 1-13.246 0ZM7.5 1.827a5.673 5.673 0 1 0 0 11.346 5.673 5.673 0 0 0 0-11.346Z"></path><path d="M6.783 13.376c1.956-3.423 1.956-8.329 0-11.752l.434-.248c2.044 3.577 2.044 8.671 0 12.248l-.434-.248Z" opacity=".05"></path><path d="M7.282 13.477c1.957-3.482 1.957-8.472 0-11.955l.436-.244c2.043 3.634 2.043 8.81 0 12.444l-.436-.245Z" opacity=".1"></path><path d="M7.821 13.506c1.904-3.51 1.905-8.492.004-12.005l.44-.238c1.981 3.662 1.98 8.822-.004 12.482l-.44-.239Z" opacity=".15"></path><path d="M8.413 13.429c1.782-3.5 1.783-8.354.001-11.855l.446-.227c1.854 3.644 1.853 8.666-.002 12.309l-.445-.227Z" opacity=".2"></path><path d="M9.024 13.296c1.633-3.458 1.635-8.119.006-11.58l.452-.212c1.693 3.595 1.69 8.412-.005 12.005l-.453-.213Z" opacity=".25"></path><path d="M9.668 13.066c1.442-3.37 1.443-7.754.003-11.125l.46-.196c1.493 3.496 1.492 8.022-.003 11.517l-.46-.197Z" opacity=".3"></path><path d="M10.331 12.746c1.224-3.225 1.225-7.255.004-10.482l.467-.177c1.265 3.341 1.264 7.497-.003 10.836l-.468-.177Z" opacity=".35"></path><path d="M11.015 12.299c.979-3.002.98-6.586.003-9.588l.476-.155c1.009 3.103 1.008 6.796-.003 9.898l-.476-.155Z" opacity=".4"></path><path d="M11.721 11.668c.704-2.655.705-5.671.003-8.327l.483-.128c.725 2.74.724 5.844-.002 8.583l-.484-.128Z" opacity=".45"></path><path d="M12.443 10.752c.41-2.114.41-4.391 0-6.505l.49-.095a17.888 17.888 0 0 1 .001 6.695l-.49-.095Z" opacity=".5"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Shadow.astro", void 0);

const $$Astro$1c = createAstro();
const $$Share1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1c, $$props, $$slots);
  Astro2.self = $$Share1;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Share 1",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm.713 1.164a2.5 2.5 0 1 1 0-2.328l3.391-2.12A2.5 2.5 0 1 1 14 3.5a2.5 2.5 0 0 1-4.484 1.52l-3.53 2.207a2.526 2.526 0 0 1 0 .546l3.53 2.206a2.5 2.5 0 1 1-.411.804l-3.392-2.12ZM11.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Share1.astro", void 0);

const $$Astro$1b = createAstro();
const $$Share2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1b, $$props, $$slots);
  Astro2.self = $$Share2;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Share 2",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.5 5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1.25a.5.5 0 0 1 0-1h1.25A1.5 1.5 0 0 1 13 5.5v6a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 11.5v-6A1.5 1.5 0 0 1 3.5 4h1.25a.5.5 0 0 1 0 1H3.5ZM7 1.636 5.568 3.068a.45.45 0 0 1-.636-.636l2.25-2.25a.45.45 0 0 1 .636 0l2.25 2.25a.45.45 0 0 1-.636.636L8 1.636V8.5a.5.5 0 0 1-1 0V1.636Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Share2.astro", void 0);

const $$Astro$1a = createAstro();
const $$Shuffle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1a, $$props, $$slots);
  Astro2.self = $$Shuffle;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Shuffle",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M12.354 1.146a.5.5 0 0 0-.708.708L12.793 3H12c-1.296 0-2.289.584-3.128 1.39-.671.644-1.279 1.467-1.877 2.278-.132.179-.263.357-.395.532C5.109 9.188 3.49 11 .5 11a.5.5 0 0 0 0 1c3.51 0 5.391-2.188 6.9-4.2.144-.192.283-.38.42-.565.597-.808 1.14-1.544 1.745-2.124C10.289 4.416 11.046 4 12 4h.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2ZM.5 3c2.853 0 4.63 1.446 6.005 3.067l-.129.176a78.944 78.944 0 0 1-.484.65C4.573 5.293 3.026 4 .5 4a.5.5 0 0 1 0-1Zm8.372 7.61c-.5-.479-.963-1.057-1.414-1.655.189-.238.369-.474.542-.705l.09-.12c.494.664.963 1.268 1.475 1.76.724.694 1.481 1.11 2.435 1.11h.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L12.793 12H12c-1.296 0-2.289-.584-3.128-1.39Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Shuffle.astro", void 0);

const $$Astro$19 = createAstro();
const $$Size = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$19, $$props, $$slots);
  Astro2.self = $$Size;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Size",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M11.5 3.05a.45.45 0 0 1 .45.45v4a.45.45 0 0 1-.9 0V4.586L4.586 11.05H7.5a.45.45 0 0 1 0 .9h-4a.45.45 0 0 1-.45-.45v-4a.45.45 0 1 1 .9 0v2.914l6.464-6.464H7.5a.45.45 0 1 1 0-.9h4Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Size.astro", void 0);

const $$Astro$18 = createAstro();
const $$SketchLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$18, $$props, $$slots);
  Astro2.self = $$SketchLogo;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Sketch Logo",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.537.827a.375.375 0 0 0-.074 0l-3.5.35a.375.375 0 0 0-.266.152L.7 5.425a.373.373 0 0 0 .012.465l6.498 7.898a.375.375 0 0 0 .58 0l6.498-7.898a.374.374 0 0 0 .087-.238v-.024a.373.373 0 0 0-.075-.203L11.303 1.33a.375.375 0 0 0-.266-.152l-3.5-.35Zm3.388 4.448v-.023l-.003.023h.003Zm.01-.1h2.253l-1.939-2.649-.315 2.649Zm-.364-3.291-2.527-.253 2.13 3.58.397-3.327Zm-3.615-.253-2.527.253.396 3.326 2.13-3.579Zm-3.206.895L1.812 5.175h2.254L3.75 2.526ZM1.794 6.025l4.965 6.034-2.535-5.992a.301.301 0 0 1-.015-.042H1.794Zm3.357 0L7.5 12.108l2.35-6.083H5.15Zm5.64 0a.3.3 0 0 1-.015.042l-2.535 5.992 4.965-6.034H10.79ZM7.5 2.183l1.84 3.092H5.66L7.5 2.183Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/SketchLogo.astro", void 0);

const $$Astro$17 = createAstro();
const $$Slash = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$17, $$props, $$slots);
  Astro2.self = $$Slash;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Slash",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.109 14 9.466 1h1.352L5.46 14H4.109Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Slash.astro", void 0);

const $$Astro$16 = createAstro();
const $$Slider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$16, $$props, $$slots);
  Astro2.self = $$Slider;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Slider",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M10.3 7.5a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0Zm.905.5a2.751 2.751 0 0 1-5.41 0H.5a.5.5 0 0 1 0-1h5.295a2.751 2.751 0 0 1 5.41 0H14.5a.5.5 0 0 1 0 1h-3.295Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Slider.astro", void 0);

const $$Astro$15 = createAstro();
const $$SpaceBetweenHorizontally = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$15, $$props, $$slots);
  Astro2.self = $$SpaceBetweenHorizontally;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Space Between Horizontally",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M14.5 1a.5.5 0 0 0-.5.5V6h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4v4.5a.5.5 0 1 0 1 0v-12a.5.5 0 0 0-.5-.5ZM5 6H1V1.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0V9h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/SpaceBetweenHorizontally.astro", void 0);

const $$Astro$14 = createAstro();
const $$SpaceBetweenVertically = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$14, $$props, $$slots);
  Astro2.self = $$SpaceBetweenVertically;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Space Between Vertically",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1 .5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H9v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1H1.5A.5.5 0 0 1 1 .5ZM7 9a1 1 0 0 0-1 1v4H1.5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H9v-4a1 1 0 0 0-1-1H7Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/SpaceBetweenVertically.astro", void 0);

const $$Astro$13 = createAstro();
const $$SpaceEvenlyHorizontally = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$13, $$props, $$slots);
  Astro2.self = $$SpaceEvenlyHorizontally;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Space Evenly Horizontally",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M14.5 1a.5.5 0 0 0-.5.5v12a.5.5 0 1 0 1 0v-12a.5.5 0 0 0-.5-.5ZM.5 1a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 1 0v-12A.5.5 0 0 0 .5 1ZM2 7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Zm7-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/SpaceEvenlyHorizontally.astro", void 0);

const $$Astro$12 = createAstro();
const $$SpaceEvenlyVertically = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$12, $$props, $$slots);
  Astro2.self = $$SpaceEvenlyVertically;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Space Evenly Vertically",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1 .5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12A.5.5 0 0 1 1 .5ZM7 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7Zm0 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H7Zm-5.5 6a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/SpaceEvenlyVertically.astro", void 0);

const $$Astro$11 = createAstro();
const $$SpeakerLoud = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$11, $$props, $$slots);
  Astro2.self = $$SpeakerLoud;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Speaker Loud",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.47 1.05a.5.5 0 0 1 .28.45v12a.5.5 0 0 1-.807.395L3.221 11H1.5A1.5 1.5 0 0 1 0 9.5v-4A1.5 1.5 0 0 1 1.5 4h1.721l3.722-2.895a.5.5 0 0 1 .527-.054Zm-.72 1.472L3.7 4.895A.5.5 0 0 1 3.393 5H1.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1.893a.5.5 0 0 1 .307.105l3.05 2.373V2.522Zm3.528 1.326a.4.4 0 0 1 .555.111 6.407 6.407 0 0 1 0 7.081.4.4 0 0 1-.666-.443 5.607 5.607 0 0 0 0-6.194.4.4 0 0 1 .111-.555Zm2.4-2.418a.4.4 0 0 0-.61.518 8.602 8.602 0 0 1 0 11.104.4.4 0 0 0 .61.518 9.402 9.402 0 0 0 0-12.14Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/SpeakerLoud.astro", void 0);

const $$Astro$10 = createAstro();
const $$SpeakerModerate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$10, $$props, $$slots);
  Astro2.self = $$SpeakerModerate;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Speaker Moderate",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M8 1.5a.5.5 0 0 0-.8-.4L3.333 4H1.5A1.5 1.5 0 0 0 0 5.5v4A1.5 1.5 0 0 0 1.5 11h1.833L7.2 13.9a.5.5 0 0 0 .8-.4v-12ZM3.8 4.9 7 2.5v10l-3.2-2.4a.5.5 0 0 0-.3-.1h-2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 0 .3-.1Zm7.033-.94a.4.4 0 0 0-.666.443 5.607 5.607 0 0 1 0 6.194.4.4 0 1 0 .666.444 6.407 6.407 0 0 0 0-7.082Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/SpeakerModerate.astro", void 0);

const $$Astro$$ = createAstro();
const $$SpeakerOff = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$$, $$props, $$slots);
  Astro2.self = $$SpeakerOff;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Speaker Off",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.724 1.053A.5.5 0 0 1 8 1.5v12a.5.5 0 0 1-.8.4L3.333 11H1.5A1.5 1.5 0 0 1 0 9.5v-4A1.5 1.5 0 0 1 1.5 4h1.833L7.2 1.1a.5.5 0 0 1 .524-.047ZM7 2.5 3.8 4.9a.5.5 0 0 1-.3.1h-2a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h2a.5.5 0 0 1 .3.1L7 12.5v-10Zm7.854 2.646a.5.5 0 0 1 0 .708L13.207 7.5l1.647 1.646a.5.5 0 0 1-.708.708L12.5 8.207l-1.646 1.647a.5.5 0 0 1-.708-.708L11.793 7.5l-1.647-1.646a.5.5 0 0 1 .708-.708L12.5 6.793l1.646-1.647a.5.5 0 0 1 .708 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/SpeakerOff.astro", void 0);

const $$Astro$_ = createAstro();
const $$SpeakerQuiet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$_, $$props, $$slots);
  Astro2.self = $$SpeakerQuiet;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Speaker Quiet",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M8 1.5a.5.5 0 0 0-.8-.4L3.333 4H1.5A1.5 1.5 0 0 0 0 5.5v4A1.5 1.5 0 0 0 1.5 11h1.833L7.2 13.9a.5.5 0 0 0 .8-.4v-12ZM3.8 4.9 7 2.5v10l-3.2-2.4a.5.5 0 0 0-.3-.1h-2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 0 .3-.1Zm6.283.156a.4.4 0 1 0-.666.443 3.623 3.623 0 0 1 0 4.002.4.4 0 1 0 .666.443 4.423 4.423 0 0 0 0-4.888Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/SpeakerQuiet.astro", void 0);

const $$Astro$Z = createAstro();
const $$Square = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Z, $$props, $$slots);
  Astro2.self = $$Square;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Square",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1 1h13v13H1V1Zm1 1v11h11V2H2Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Square.astro", void 0);

const $$Astro$Y = createAstro();
const $$Stack = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Y, $$props, $$slots);
  Astro2.self = $$Stack;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Stack",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.754 1.82a.5.5 0 0 0-.508 0l-5.5 3.25a.5.5 0 0 0 0 .86l5.5 3.25a.5.5 0 0 0 .508 0l5.5-3.25a.5.5 0 0 0 0-.86l-5.5-3.25ZM7.5 8.17 2.983 5.5 7.5 2.83l4.517 2.67L7.5 8.17Zm-5.246.15a.5.5 0 0 0-.508.86l5.5 3.25a.5.5 0 0 0 .508 0l5.5-3.25a.5.5 0 1 0-.508-.86L7.5 11.42l-5.246-3.1Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Stack.astro", void 0);

const $$Astro$X = createAstro();
const $$StarFilled = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$X, $$props, $$slots);
  Astro2.self = $$StarFilled;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Star Filled",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.223.666a.3.3 0 0 1 .554 0L9.413 4.6a.3.3 0 0 0 .253.184l4.248.34a.3.3 0 0 1 .171.528L10.85 8.424a.3.3 0 0 0-.097.297l.99 4.145a.3.3 0 0 1-.45.326L7.657 10.97a.3.3 0 0 0-.312 0l-3.637 2.222a.3.3 0 0 1-.448-.326l.989-4.145a.3.3 0 0 0-.097-.297L.915 5.652a.3.3 0 0 1 .171-.527l4.248-.34a.3.3 0 0 0 .253-.185L7.223.666Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/StarFilled.astro", void 0);

const $$Astro$W = createAstro();
const $$Star = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$W, $$props, $$slots);
  Astro2.self = $$Star;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Star",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="m6.98 1.252-.022.05L5.588 4.6a.3.3 0 0 1-.253.184l-3.561.286-.055.004-.331.027-.3.024a.3.3 0 0 0-.172.527l.23.196.252.216.041.036 2.713 2.324a.3.3 0 0 1 .097.297l-.83 3.475-.012.053-.077.323-.07.294a.3.3 0 0 0 .448.326l.258-.158.284-.173.046-.028 3.049-1.863a.3.3 0 0 1 .312 0l3.049 1.863.046.028.284.173.258.158a.3.3 0 0 0 .448-.326l-.07-.293-.077-.324-.013-.053-.829-3.475a.3.3 0 0 1 .097-.297L13.562 6.1l.041-.036.253-.216.23-.196a.3.3 0 0 0-.172-.527l-.3-.024-.332-.027-.055-.004-3.56-.286a.3.3 0 0 1-.254-.184L8.042 1.302l-.021-.05-.128-.307-.116-.279a.3.3 0 0 0-.554 0l-.116.279-.128.307Zm.52 1.352-.99 2.38a1.3 1.3 0 0 1-1.096.797l-2.57.206 1.958 1.677a1.3 1.3 0 0 1 .418 1.29l-.598 2.507 2.2-1.344a1.3 1.3 0 0 1 1.356 0l2.2 1.344-.598-2.508a1.3 1.3 0 0 1 .418-1.289l1.958-1.677-2.57-.206a1.3 1.3 0 0 1-1.096-.797l-.99-2.38Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Star.astro", void 0);

const $$Astro$V = createAstro();
const $$StitchesLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$V, $$props, $$slots);
  Astro2.self = $$StitchesLogo;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Stitches Logo",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1.85 7.5c0-.287.021-.569.063-.844l7.65-4.417c.3.117.587.26.859.424L3.77 6.503a.447.447 0 0 0-.234.374.447.447 0 0 0 .196.394l3.592 2.567-3.453 1.994A5.638 5.638 0 0 1 1.85 7.5Zm6.518 2.775a.42.42 0 0 0 .025-.014l1.448-.836a.448.448 0 0 0 .018-.01l1.451-.838a.45.45 0 0 0 .052-.756L7.828 5.2l3.388-1.957a5.637 5.637 0 0 1 1.849 5.24L5.569 12.81a5.623 5.623 0 0 1-.882-.41l3.681-2.126Zm-.187-.931L4.817 6.939l.692-.4 3.297 2.444-.625.36ZM6.36 6.048l.62-.357 3.296 2.444-.62.358L6.36 6.048Zm1.973-4.137-6.09 3.515a5.652 5.652 0 0 1 6.09-3.515ZM6.847 13.113a5.652 5.652 0 0 0 5.842-3.373l-5.842 3.373ZM7.5.85a6.65 6.65 0 1 0 0 13.3 6.65 6.65 0 0 0 0-13.3Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/StitchesLogo.astro", void 0);

const $$Astro$U = createAstro();
const $$Stop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$U, $$props, $$slots);
  Astro2.self = $$Stop;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Stop",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2 3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Zm10 0H3v9h9V3Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Stop.astro", void 0);

const $$Astro$T = createAstro();
const $$Stopwatch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$T, $$props, $$slots);
  Astro2.self = $$Stopwatch;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Stopwatch",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5.5.5A.5.5 0 0 1 6 0h3a.5.5 0 0 1 0 1H8v1.12a6.363 6.363 0 0 1 2.992 1.016.638.638 0 0 1 .066-.078l.8-.8a.625.625 0 0 1 .884.884l-.775.775A6.4 6.4 0 1 1 7 2.119V1H6a.5.5 0 0 1-.5-.5Zm-3.4 8a5.4 5.4 0 1 1 10.8 0 5.4 5.4 0 0 1-10.8 0Zm5.9-4a.5.5 0 0 0-1 0v5a.5.5 0 1 0 1 0v-5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Stopwatch.astro", void 0);

const $$Astro$S = createAstro();
const $$StretchHorizontally = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$S, $$props, $$slots);
  Astro2.self = $$StretchHorizontally;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Stretch Horizontally",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M14.5 1a.5.5 0 0 0-.5.5V6H1V1.5a.5.5 0 1 0-1 0v12a.5.5 0 0 0 1 0V9h13v4.5a.5.5 0 1 0 1 0v-12a.5.5 0 0 0-.5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/StretchHorizontally.astro", void 0);

const $$Astro$R = createAstro();
const $$StretchVertically = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$R, $$props, $$slots);
  Astro2.self = $$StretchVertically;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Stretch Vertically",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1 .5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12A.5.5 0 0 1 1 .5ZM9 14V1H6v13H1.5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H9Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/StretchVertically.astro", void 0);

const $$Astro$Q = createAstro();
const $$Strikethrough = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Q, $$props, $$slots);
  Astro2.self = $$Strikethrough;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Strikethrough",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5 3.25a.5.5 0 0 0-1 0V7.1H2.5a.4.4 0 1 0 0 .8H4v.65a3.5 3.5 0 1 0 7 0V7.9h1.5a.4.4 0 0 0 0-.8H11V3.25a.5.5 0 1 0-1 0V7.1H5V3.25ZM5 7.9v.65a2.5 2.5 0 0 0 5 0V7.9H5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Strikethrough.astro", void 0);

const $$Astro$P = createAstro();
const $$Sun = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$P, $$props, $$slots);
  Astro2.self = $$Sun;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Sun",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5ZM2.197 2.197a.5.5 0 0 1 .707 0L4.318 3.61a.5.5 0 0 1-.707.707L2.197 2.904a.5.5 0 0 1 0-.707ZM.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm1.697 5.803a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0ZM12.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-1.818-2.682a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707L11.39 4.318a.5.5 0 0 1-.707 0ZM8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm2.682-1.818a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707l-1.414-1.414a.5.5 0 0 1 0-.707ZM5.5 7.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Sun.astro", void 0);

const $$Astro$O = createAstro();
const $$Switch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$O, $$props, $$slots);
  Astro2.self = $$Switch;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Switch",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M10.5 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-2.829 7A4.491 4.491 0 0 1 6 7.5c0-1.414.652-2.675 1.671-3.5H4.5a3.5 3.5 0 1 0 0 7h3.171ZM0 7.5A4.5 4.5 0 0 1 4.5 3h6a4.5 4.5 0 1 1 0 9h-6A4.5 4.5 0 0 1 0 7.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Switch.astro", void 0);

const $$Astro$N = createAstro();
const $$Symbol = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$N, $$props, $$slots);
  Astro2.self = $$Symbol;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Symbol",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1.903 7.297c0 3.044 2.207 5.118 4.686 5.547a.521.521 0 1 1-.178 1.027C3.5 13.367.861 10.913.861 7.297c0-1.537.699-2.745 1.515-3.663.585-.658 1.254-1.193 1.792-1.602H2.532a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V2.686l-.001.002c-.572.43-1.27.957-1.875 1.638-.715.804-1.253 1.776-1.253 2.97Zm11.108.406c0-3.012-2.16-5.073-4.607-5.533a.521.521 0 1 1 .192-1.024c2.874.54 5.457 2.98 5.457 6.557 0 1.537-.699 2.744-1.515 3.663-.585.658-1.254 1.193-1.792 1.602h1.636a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 1 1 1 0v1.845h.002c.571-.432 1.27-.958 1.874-1.64.715-.803 1.253-1.775 1.253-2.97Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Symbol.astro", void 0);

const $$Astro$M = createAstro();
const $$Table = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$M, $$props, $$slots);
  Astro2.self = $$Table;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Table",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M8 2h4.5a.5.5 0 0 1 .5.5V5H8V2ZM7 5V2H2.5a.5.5 0 0 0-.5.5V5h5ZM2 6v3h5V6H2Zm6 0h5v3H8V6Zm0 4h5v2.5a.5.5 0 0 1-.5.5H8v-3Zm-6 2.5V10h5v3H2.5a.5.5 0 0 1-.5-.5Zm-1-10A1.5 1.5 0 0 1 2.5 1h10A1.5 1.5 0 0 1 14 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-10Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Table.astro", void 0);

const $$Astro$L = createAstro();
const $$Target = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$L, $$props, $$slots);
  Astro2.self = $$Target;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Target",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M.9 7.5a6.6 6.6 0 1 1 13.2 0 6.6 6.6 0 0 1-13.2 0Zm6.6-5.7a5.7 5.7 0 1 0 0 11.4 5.7 5.7 0 0 0 0-11.4ZM3.075 7.5a4.425 4.425 0 1 1 8.85 0 4.425 4.425 0 0 1-8.85 0ZM7.5 3.925a3.575 3.575 0 1 0 0 7.15 3.575 3.575 0 0 0 0-7.15Zm0 1.325a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM6.05 7.5a1.45 1.45 0 1 1 2.9 0 1.45 1.45 0 0 1-2.9 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Target.astro", void 0);

const $$Astro$K = createAstro();
const $$TextAlignCenter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$K, $$props, $$slots);
  Astro2.self = $$TextAlignCenter;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Text Align Center",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2 4.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm2 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm-1 3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/TextAlignCenter.astro", void 0);

const $$Astro$J = createAstro();
const $$TextAlignJustify = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$J, $$props, $$slots);
  Astro2.self = $$TextAlignJustify;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Text Align Justify",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2.5 4a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1h-10ZM2 7.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm0 3a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/TextAlignJustify.astro", void 0);

const $$Astro$I = createAstro();
const $$TextAlignLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$I, $$props, $$slots);
  Astro2.self = $$TextAlignLeft;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Text Align Left",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2 4.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm0 3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/TextAlignLeft.astro", void 0);

const $$Astro$H = createAstro();
const $$TextAlignRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$H, $$props, $$slots);
  Astro2.self = $$TextAlignRight;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Text Align Right",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M2 4.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm5 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-3 3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/TextAlignRight.astro", void 0);

const $$Astro$G = createAstro();
const $$TextNone = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$G, $$props, $$slots);
  Astro2.self = $$TextNone;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Text None",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M13.354 2.354a.5.5 0 0 0-.708-.708l-.717.718a.45.45 0 0 0-.429-.314h-8a.45.45 0 0 0-.45.45v2a.45.45 0 1 0 .9 0V2.95h3v4.393l-5.304 5.303a.5.5 0 0 0 .708.708L6.95 8.757v3.293H5.754a.45.45 0 1 0 0 .9h3.5a.45.45 0 0 0 0-.9H8.05V7.657l5.304-5.303ZM8.05 6.243l3-3V2.95h-3v3.293Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/TextNone.astro", void 0);

const $$Astro$F = createAstro();
const $$Text = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$F, $$props, $$slots);
  Astro2.self = $$Text;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Text",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M3.95 2.95V4.5a.45.45 0 0 1-.9 0v-2a.45.45 0 0 1 .45-.45h8a.45.45 0 0 1 .45.45v2a.45.45 0 1 1-.9 0V2.95h-3v9.1h1.204a.45.45 0 0 1 0 .9h-3.5a.45.45 0 1 1 0-.9H6.95v-9.1h-3Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Text.astro", void 0);

const $$Astro$E = createAstro();
const $$ThickArrowDown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$E, $$props, $$slots);
  Astro2.self = $$ThickArrowDown;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Thick Arrow Down",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 .407.79l-5 7a.5.5 0 0 1-.814 0l-5-7A.5.5 0 0 1 2.5 6H5V3.5ZM6 4v2.5a.5.5 0 0 1-.5.5H3.472L7.5 12.64 11.528 7H9.5a.5.5 0 0 1-.5-.5V4H6Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ThickArrowDown.astro", void 0);

const $$Astro$D = createAstro();
const $$ThickArrowLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$ThickArrowLeft;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Thick Arrow Left",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1 7.5a.5.5 0 0 0 .21.407l7 5A.5.5 0 0 0 9 12.5V10h2.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H9V2.5a.5.5 0 0 0-.79-.407l-7 5A.5.5 0 0 0 1 7.5Zm7-4.028V5.5a.5.5 0 0 0 .5.5H11v3H8.5a.5.5 0 0 0-.5.5v2.028L2.36 7.5 8 3.472Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ThickArrowLeft.astro", void 0);

const $$Astro$C = createAstro();
const $$ThickArrowRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$ThickArrowRight;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Thick Arrow Right",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M14 7.5a.5.5 0 0 1-.21.407l-7 5A.5.5 0 0 1 6 12.5V10H3.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5H6V2.5a.5.5 0 0 1 .79-.407l7 5A.5.5 0 0 1 14 7.5ZM7 3.472V5.5a.5.5 0 0 1-.5.5H4v3h2.5a.5.5 0 0 1 .5.5v2.028L12.64 7.5 7 3.472Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ThickArrowRight.astro", void 0);

const $$Astro$B = createAstro();
const $$ThickArrowUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$ThickArrowUp;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Thick Arrow Up",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5 1a.5.5 0 0 1 .407.21l5 7A.5.5 0 0 1 12.5 9H10v2.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V9H2.5a.5.5 0 0 1-.407-.79l5-7A.5.5 0 0 1 7.5 1ZM3.472 8H5.5a.5.5 0 0 1 .5.5V11h3V8.5a.5.5 0 0 1 .5-.5h2.028L7.5 2.36 3.472 8Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ThickArrowUp.astro", void 0);

const $$Astro$A = createAstro();
const $$Timer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$Timer;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Timer",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5.85a.5.5 0 0 0-.5.5v2.172a.5.5 0 1 0 1 0v-1.65a5.65 5.65 0 1 1-4.81 1.974.5.5 0 1 0-.762-.647A6.65 6.65 0 1 0 7.5.85Zm-.76 7.23L4.224 4.573a.25.25 0 0 1 .348-.348L8.081 6.74a.96.96 0 1 1-1.34 1.34Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Timer.astro", void 0);

const $$Astro$z = createAstro();
const $$Tokens = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$Tokens;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Tokens",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM9 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm-7 6a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM4.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6-1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM9 10.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Tokens.astro", void 0);

const $$Astro$y = createAstro();
const $$TrackNext = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$TrackNext;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Track Next",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M13.05 2.75a.55.55 0 1 0-1.1 0v4.533a.5.5 0 0 0-.217-.225l-9-4.75A.5.5 0 0 0 2 2.75v9.5a.5.5 0 0 0 .733.442l9-4.75a.5.5 0 0 0 .217-.225v4.533a.55.55 0 0 0 1.1 0v-9.5ZM3 11.42V3.58l7.429 3.92L3 11.42Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/TrackNext.astro", void 0);

const $$Astro$x = createAstro();
const $$TrackPrevious = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$TrackPrevious;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Track Previous",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1.95 2.75a.55.55 0 1 1 1.1 0v4.533a.5.5 0 0 1 .217-.225l9-4.75A.5.5 0 0 1 13 2.75v9.5a.5.5 0 0 1-.733.442l-9-4.75a.5.5 0 0 1-.217-.225v4.533a.55.55 0 0 1-1.1 0v-9.5ZM4.57 7.5 12 11.42V3.58L4.571 7.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/TrackPrevious.astro", void 0);

const $$Astro$w = createAstro();
const $$TransparencyGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$TransparencyGrid;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Transparency Grid",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M0 0h3v3H0V0Zm6 3H3v3H0v3h3v3H0v3h3v-3h3v3h3v-3h3v3h3v-3h-3V9h3V6h-3V3h3V0h-3v3H9V0H6v3Zm0 3V3h3v3H6Zm0 3H3V6h3v3Zm3 0V6h3v3H9Zm0 0H6v3h3V9Z" opacity=".25"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/TransparencyGrid.astro", void 0);

const $$Astro$v = createAstro();
const $$Trash = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Trash;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Trash",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5.5 1a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM3 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H11v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4h-.5a.5.5 0 0 1-.5-.5ZM5 4h5v8H5V4Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Trash.astro", void 0);

const $$Astro$u = createAstro();
const $$TriangleDown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$TriangleDown;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Triangle Down",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4 6h7l-3.5 4.5L4 6Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/TriangleDown.astro", void 0);

const $$Astro$t = createAstro();
const $$TriangleLeft = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$TriangleLeft;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Triangle Left",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M9 4v7L4.5 7.5 9 4Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/TriangleLeft.astro", void 0);

const $$Astro$s = createAstro();
const $$TriangleRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$TriangleRight;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Triangle Right",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M6 11V4l4.5 3.5L6 11Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/TriangleRight.astro", void 0);

const $$Astro$r = createAstro();
const $$TriangleUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$TriangleUp;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Triangle Up",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4 9h7L7.5 4.5 4 9Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/TriangleUp.astro", void 0);

const $$Astro$q = createAstro();
const $$TwitterLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$TwitterLogo;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Twitter Logo",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.233 4.696c0-1.727 1.4-3.127 3.127-3.127 1.014 0 1.823.479 2.365 1.175a5.246 5.246 0 0 0 1.626-.629 2.634 2.634 0 0 1-1.148 1.45l.002.003a5.26 5.26 0 0 0 1.5-.413l-.001.002c-.337.505-.76.95-1.248 1.313.026.177.04.354.04.53 0 3.687-2.809 7.975-7.975 7.975a7.93 7.93 0 0 1-4.296-1.26.5.5 0 0 1-.108-.748.45.45 0 0 1 .438-.215c.916.108 1.83-.004 2.637-.356a3.086 3.086 0 0 1-1.69-1.876.45.45 0 0 1 .103-.448 3.07 3.07 0 0 1-1.045-2.31v-.034a.45.45 0 0 1 .365-.442 3.068 3.068 0 0 1-.344-1.416c0-.468.003-1.058.332-1.59a.45.45 0 0 1 .323-.208.5.5 0 0 1 .538.161 6.964 6.964 0 0 0 4.46 2.507v-.044Zm-1.712 7.279a6.936 6.936 0 0 1-2.249-.373 5.318 5.318 0 0 0 2.39-1.042.45.45 0 0 0-.27-.804 2.174 2.174 0 0 1-1.714-.888c.19-.015.376-.048.556-.096a.45.45 0 0 0-.028-.876 2.18 2.18 0 0 1-1.644-1.474c.2.048.409.077.623.084a.45.45 0 0 0 .265-.824A2.177 2.177 0 0 1 2.48 3.87c0-.168.003-.317.013-.453a7.95 7.95 0 0 0 5.282 2.376.5.5 0 0 0 .513-.61 2.127 2.127 0 0 1 2.071-2.614c1.234 0 2.136 1.143 2.136 2.432 0 3.256-2.476 6.974-6.975 6.974Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/TwitterLogo.astro", void 0);

const $$Astro$p = createAstro();
const $$Underline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Underline;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Underline",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M5 2.75a.5.5 0 0 0-1 0v5.3a3.5 3.5 0 0 0 7 0v-5.3a.5.5 0 1 0-1 0v5.3a2.5 2.5 0 1 1-5 0v-5.3ZM3.5 13.1a.4.4 0 1 0 0 .8h8a.4.4 0 0 0 0-.8h-8Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Underline.astro", void 0);

const $$Astro$o = createAstro();
const $$Update = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Update;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Update",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1.903 7.297c0 3.044 2.207 5.118 4.686 5.547a.521.521 0 1 1-.178 1.027C3.5 13.367.861 10.913.861 7.297c0-1.537.699-2.745 1.515-3.663.585-.658 1.254-1.193 1.792-1.602H2.532a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V2.686l-.001.002c-.572.43-1.27.957-1.875 1.638-.715.804-1.253 1.776-1.253 2.97Zm11.108.406c0-3.012-2.16-5.073-4.607-5.533a.521.521 0 1 1 .192-1.024c2.874.54 5.457 2.98 5.457 6.557 0 1.537-.699 2.744-1.515 3.663-.585.658-1.254 1.193-1.792 1.602h1.636a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 1 1 1 0v1.845h.002c.571-.432 1.27-.958 1.874-1.64.715-.803 1.253-1.775 1.253-2.97Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Update.astro", void 0);

const $$Astro$n = createAstro();
const $$Upload = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Upload;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Upload",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.818 1.182a.45.45 0 0 0-.636 0l-3 3a.45.45 0 1 0 .636.636L7.05 2.586V9.5a.45.45 0 1 0 .9 0V2.586l2.232 2.232a.45.45 0 1 0 .636-.636l-3-3ZM2.5 10a.5.5 0 0 1 .5.5V12c0 .554.446 1 .996 1h7.005A.999.999 0 0 0 12 12v-1.5a.5.5 0 1 1 1 0V12a2 2 0 0 1-1.999 2H3.996A1.997 1.997 0 0 1 2 12v-1.5a.5.5 0 0 1 .5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Upload.astro", void 0);

const $$Astro$m = createAstro();
const $$ValueNone = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$ValueNone;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Value None",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7.5.877a6.623 6.623 0 0 0-5.023 10.94l-.83.83a.5.5 0 1 0 .707.707l.83-.83a6.623 6.623 0 0 0 9.34-9.34l.83-.83a.5.5 0 1 0-.708-.708l-.83.83A6.597 6.597 0 0 0 7.5.878Zm3.642 2.274a5.673 5.673 0 0 0-7.992 7.992l7.992-7.992Zm-7.284 8.698a5.673 5.673 0 0 0 7.992-7.992L3.857 11.85Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ValueNone.astro", void 0);

const $$Astro$l = createAstro();
const $$Value = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Value;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Value",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M.877 7.5a6.623 6.623 0 1 1 13.246 0 6.623 6.623 0 0 1-13.246 0ZM7.5 1.827a5.673 5.673 0 1 0 0 11.346 5.673 5.673 0 0 0 0-11.346Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Value.astro", void 0);

const $$Astro$k = createAstro();
const $$VercelLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$VercelLogo;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Vercel Logo",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="m7.5 1-.577 1.003L1.175 12 .6 13h13.8l-.575-1-5.748-9.997L7.5 1Zm0 2.006L2.329 12H12.67L7.5 3.006Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/VercelLogo.astro", void 0);

const $$Astro$j = createAstro();
const $$Video = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Video;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Video",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.764 3.122A32.656 32.656 0 0 1 7.5 3c.94 0 1.868.049 2.736.122 1.044.088 1.72.148 2.236.27.47.111.733.258.959.489.024.025.06.063.082.09.2.23.33.518.405 1.062.08.583.082 1.343.082 2.492 0 1.135-.002 1.885-.082 2.46-.074.536-.204.821-.405 1.054a2.276 2.276 0 0 1-.083.09c-.23.234-.49.379-.948.487-.507.12-1.168.178-2.194.264-.869.072-1.812.12-2.788.12-.976 0-1.92-.048-2.788-.12-1.026-.086-1.687-.144-2.194-.264-.459-.108-.719-.253-.948-.487a2.299 2.299 0 0 1-.083-.09c-.2-.233-.33-.518-.405-1.054C1.002 9.41 1 8.66 1 7.525c0-1.149.002-1.91.082-2.492.075-.544.205-.832.405-1.062.023-.027.058-.065.082-.09.226-.231.489-.378.959-.489.517-.122 1.192-.182 2.236-.27ZM0 7.525c0-2.242 0-3.363.73-4.208.036-.042.085-.095.124-.135.78-.799 1.796-.885 3.826-1.056C5.57 2.05 6.527 2 7.5 2c.973 0 1.93.05 2.82.126 2.03.171 3.046.257 3.826 1.056.039.04.087.093.124.135.73.845.73 1.966.73 4.208 0 2.215 0 3.323-.731 4.168a3.243 3.243 0 0 1-.125.135c-.781.799-1.778.882-3.773 1.048C9.48 12.951 8.508 13 7.5 13s-1.98-.05-2.87-.124c-1.996-.166-2.993-.25-3.774-1.048a3.316 3.316 0 0 1-.125-.135C0 10.848 0 9.74 0 7.525Zm5.25-2.142a.25.25 0 0 1 .35-.23l4.828 2.118c.2.088.2.37 0 .458L5.6 9.846a.25.25 0 0 1-.35-.229V5.383Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Video.astro", void 0);

const $$Astro$i = createAstro();
const $$ViewGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$ViewGrid;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "View Grid",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M7 2H1.5a.5.5 0 0 0-.5.5V7h6V2Zm1 0v5h6V2.5a.5.5 0 0 0-.5-.5H8ZM7 8H1v4.5a.5.5 0 0 0 .5.5H7V8Zm1 5V8h6v4.5a.5.5 0 0 1-.5.5H8ZM1.5 1A1.5 1.5 0 0 0 0 2.5v10A1.5 1.5 0 0 0 1.5 14h12a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-12Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ViewGrid.astro", void 0);

const $$Astro$h = createAstro();
const $$ViewHorizontal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$ViewHorizontal;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "View Horizontal",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M1.5 2h12a.5.5 0 0 1 .5.5V7H1V2.5a.5.5 0 0 1 .5-.5ZM1 8v4.5a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V8H1ZM0 2.5A1.5 1.5 0 0 1 1.5 1h12A1.5 1.5 0 0 1 15 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 12.5v-10Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ViewHorizontal.astro", void 0);

const $$Astro$g = createAstro();
const $$ViewNone = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$ViewNone;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "View None",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M14 2.587 1.852 13H13.5a.5.5 0 0 0 .5-.5V2.587ZM.763 13.807l.062.073.03-.026c.195.094.414.146.645.146h12a1.5 1.5 0 0 0 1.5-1.5v-10a1.5 1.5 0 0 0-.763-1.307l-.062-.073-.03.025A1.494 1.494 0 0 0 13.5 1h-12A1.5 1.5 0 0 0 0 2.5v10c0 .56.307 1.05.763 1.307ZM1 12.413 13.148 2H1.5a.5.5 0 0 0-.5.5v9.913Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ViewNone.astro", void 0);

const $$Astro$f = createAstro();
const $$ViewVertical = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ViewVertical;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "View Vertical",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M8 2h5.5a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H8V2ZM7 2H1.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5H7V2Zm-7 .5A1.5 1.5 0 0 1 1.5 1h12A1.5 1.5 0 0 1 15 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 12.5v-10Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ViewVertical.astro", void 0);

const $$Astro$e = createAstro();
const $$Width = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Width;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Width",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M4.818 4.682a.45.45 0 0 1 0 .636L3.086 7.05h8.828l-1.732-1.732a.45.45 0 0 1 .636-.636l2.5 2.5a.45.45 0 0 1 0 .636l-2.5 2.5a.45.45 0 0 1-.636-.636l1.732-1.732H3.086l1.732 1.732a.45.45 0 1 1-.636.636l-2.5-2.5a.45.45 0 0 1 0-.636l2.5-2.5a.45.45 0 0 1 .636 0Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/Width.astro", void 0);

const $$Astro$d = createAstro();
const $$ZoomIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ZoomIn;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Zoom In",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M10 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-.691 3.516a4.5 4.5 0 1 1 .707-.707l2.838 2.837a.5.5 0 0 1-.708.708L9.31 10.016ZM4.25 6.5a.5.5 0 0 1 .5-.5H6V4.75a.5.5 0 0 1 1 0V6h1.25a.5.5 0 0 1 0 1H7v1.25a.5.5 0 0 1-1 0V7H4.75a.5.5 0 0 1-.5-.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ZoomIn.astro", void 0);

const $$Astro$c = createAstro();
const $$ZoomOut = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ZoomOut;
  /*! radix-icons | MIT License | https://icons.modulz.app/ */
  let {
    size,
    title,
    width = size,
    height = size,
    ...props
  } = {
    "fill": "CurrentColor",
    "fill-rule": "evenodd",
    "title": "Zoom Out",
    "viewBox": "0 0 15 15",
    ...Astro2.props
  };
  const toAttributeSize = (size2) => String(size2).replace(/(?<=[0-9])x$/, "em");
  size = toAttributeSize(size);
  width = toAttributeSize(width);
  height = toAttributeSize(height);
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")}${spreadAttributes(props)}>${title ? renderTemplate`<title>${title}</title>` : ""}<path d="M6.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0 1a4.48 4.48 0 0 0 2.809-.984l2.837 2.838a.5.5 0 0 0 .708-.708L10.016 9.31A4.5 4.5 0 1 0 6.5 11ZM4.75 6a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 0-1h-3.5Z"></path></svg>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/node_modules/@astropub/icons/dist/ZoomOut.astro", void 0);

const $$Astro$b = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Footer;
  const { links } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class=" bg-violet-950 w-full p-2"><div class="container mx-auto flex justify-between items-center"><!-- Logos de la aplicación --><img src="/rocket.svg" alt="" class="w-14 md:w-16 lg:w-18"><!-- Enlaces a la derecha --><ul class="list-none pl-5 mt-2 flex flex-row flex-wrap gap-4 m-1"><li class="ml-4"><a${addAttribute(links.website, "href")} class="text-white md:text-md lg:text-lg hover:underline flex items-center transition-transform transform-gpu hover:scale-105" target="_blank" rel="noopener noreferrer">${renderComponent($$result, "Link2", $$Link2, { "class": "mr-2 w-6 md:w-10" })}
Website
</a></li><li class="ml-4"><a${addAttribute(links.flickr, "href")} class="text-white md:text-md lg:text-lg hover:underline flex items-center transition-transform transform-gpu hover:scale-105" target="_blank" rel="noopener noreferrer">${renderComponent($$result, "Image", $$Image, { "class": "mr-2 w-6 md:w-10" })}
Flickr
</a></li><li class="ml-4"><a${addAttribute(links.twitter, "href")} class="text-white md:text-md lg:text-lg hover:underline flex items-center transition-transform transform-gpu hover:scale-105" target="_blank" rel="noopener noreferrer">${renderComponent($$result, "TwitterLogo", $$TwitterLogo, { "class": "mr-2 w-6 md:w-10" })}
Twitter
</a></li><li class="ml-4"><a${addAttribute(links.elon_twitter, "href")} class="text-white md:text-md lg:text-lg hover:underline flex items-center transition-transform transform-gpu hover:scale-105" target="_blank" rel="noopener noreferrer">${renderComponent($$result, "Person", $$Person, { "class": "mr-2 w-6 md:w-10" })}
Elon Musk's Twitter
</a></li></ul></div></footer>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/components/footer/Footer.astro", void 0);

const BASE_URL = ({}).PUBLIC_BASE_URL_API_PHOTOS;
const API_KEY = ({}).SECRET_API_PHOTOS_KEY;
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
  const data = await getPhotos(query);
  const photos = data.photos.photo;
  const photosUrl = photos.map((photo) => {
    const { farm, server, id, secret } = photo;
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
  });
  return photosUrl;
}

const $$Astro$a = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Index$4;
  const company = await getCompany();
  await getPhotosUrl("spacex");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout$1, { "title": "SpaceXmirror", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-between h-screen" data-astro-cid-j7pv25f6><svg class="astro-a" width="495" height="623" viewBox="0 0 495 623" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-astro-cid-j7pv25f6><!-- ... Tu SVG aquí ... --></svg><div class="md:flex md:justify-around md:items-center text-white" data-astro-cid-j7pv25f6><h1 class="text-4xl text-center px-6 md:w-1/3 md:text-4xl lg:text-5xl ml-0 lg:ml-20 font-semibold" data-astro-cid-j7pv25f6>
Welcome to <span class="text-gradient" data-astro-cid-j7pv25f6>SpaceXMirror!</span></h1><div class="md:w-2/3 lg:p-20 flex flex-col justify-center" data-astro-cid-j7pv25f6><p class="text-lg p-4 text-center md:text-start md:p-10 lg:text-xl text-slate-300" data-astro-cid-j7pv25f6>${company.summary}</p><div class="flex justify-around gap-5" data-astro-cid-j7pv25f6><!--           <a
            href="/next-launches"
            rel="noopener noreferrer"
            class="w-fit bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:via-purple-500 hover:to-red-400 text-white font-bold hover:scale-105 py-2 px-4 rounded-full"
          >
            Next Launch
          </a> --><a href="/gallery" rel="noopener noreferrer" class="w-fit bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:via-purple-500 hover:to-red-400 text-white font-bold hover:scale-105 py-2 px-4 rounded-full" data-astro-cid-j7pv25f6>
Visit Gallery
</a><!--           <a
            href="/upcoming-launches"
            rel="noopener noreferrer"
            class="w-fit bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:via-purple-500 hover:to-red-400 text-white font-bold hover:scale-105 py-2 px-4 rounded-full"
          >
            Upcoming Launches
          </a> --></div></div></div><div class="flex flex-col justify-center items-center text-center gap-5 md:text-start  md:flex-row md:justify-around md:items-start text-slate-300" data-astro-cid-j7pv25f6><div class="justify-self-center" data-astro-cid-j7pv25f6><h2 class="text-2xl font-semibold text-white" data-astro-cid-j7pv25f6>- Company Info</h2><ul class="list-disc pl-5 list-inside text-lg" data-astro-cid-j7pv25f6><li data-astro-cid-j7pv25f6><span class="font-semibold text-white" data-astro-cid-j7pv25f6>Founder: ${" "}</span>${company.founder} (${company.founded})
</li><li data-astro-cid-j7pv25f6><span class="font-semibold text-white" data-astro-cid-j7pv25f6>Employees: ${" "}</span>${company.employees}</li><li data-astro-cid-j7pv25f6><span class="font-semibold text-white" data-astro-cid-j7pv25f6>Vehicles: ${" "}</span>${company.vehicles}</li><li data-astro-cid-j7pv25f6><span class="font-semibold text-white" data-astro-cid-j7pv25f6>Launch Sites: ${" "}</span>${company.launch_sites}</li><li data-astro-cid-j7pv25f6><span class="font-semibold text-white" data-astro-cid-j7pv25f6>Test Sites: ${" "}</span>${company.test_sites}</li><li data-astro-cid-j7pv25f6><span class="font-semibold text-white" data-astro-cid-j7pv25f6>Valuation: ${" "}</span> $${company.valuation}
billion
</li></ul></div><div class="justify-self-center" data-astro-cid-j7pv25f6><h2 class="text-2xl font-semibold text-white" data-astro-cid-j7pv25f6>- Leadership</h2><ul class="list-disc pl-5 list-inside text-lg" data-astro-cid-j7pv25f6><li data-astro-cid-j7pv25f6><span class="font-semibold text-white" data-astro-cid-j7pv25f6>CEO: ${" "}</span>${company.ceo}</li><li data-astro-cid-j7pv25f6><span class="font-semibold text-white" data-astro-cid-j7pv25f6>CTO: ${" "}</span>${company.cto}</li><li data-astro-cid-j7pv25f6><span class="font-semibold text-white" data-astro-cid-j7pv25f6>COO: ${" "}</span>${company.coo}</li><li data-astro-cid-j7pv25f6><span class="font-semibold text-white" data-astro-cid-j7pv25f6>CTO Propulsion: ${" "}</span>${company.cto_propulsion}</li></ul></div><div class="justify-self-center" data-astro-cid-j7pv25f6><h2 class="text-2xl font-semibold text-white" data-astro-cid-j7pv25f6>- Headquarters</h2><p data-astro-cid-j7pv25f6><span class="font-semibold text-white" data-astro-cid-j7pv25f6>Address: ${" "}</span>${company.headquarters.address}</p><p data-astro-cid-j7pv25f6><span class="font-semibold text-white" data-astro-cid-j7pv25f6>City: ${" "}</span>${company.headquarters.city}</p><p data-astro-cid-j7pv25f6><span class="font-semibold text-white" data-astro-cid-j7pv25f6>State: ${" "}</span>${company.headquarters.state}</p></div></div>${renderComponent($$result2, "Navigation", $$Navigation, { "data-astro-cid-j7pv25f6": true })}${renderComponent($$result2, "Footer", $$Footer, { "links": company.links, "data-astro-cid-j7pv25f6": true })}</div>` })}`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/index.astro", void 0);

const $$file$4 = "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/index.astro";
const $$url$4 = "";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro();
const $$CapsuleCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$CapsuleCard;
  const { id, serial, last_update, status } = Astro2.props;
  let statusClass = "bg-gray-500";
  if (status === "active") {
    statusClass = "bg-green-500";
  } else if (status === "destroyed") {
    statusClass = "bg-red-500";
  } else if (status === "retired") {
    statusClass = "bg-yellow-500";
  } else if (status === "lost") {
    statusClass = "bg-red-500";
  } else if (status === "inactive") {
    statusClass = "bg-gray-500";
  } else if (status === "unknown") {
    statusClass = "bg-orange-500";
  }
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-j2hhhe3c><a${addAttribute(`/capsules/${id}`, "href")} class="card-link" data-astro-cid-j2hhhe3c><div data-astro-cid-j2hhhe3c><h2 class="text-xl m-2 text-white" data-astro-cid-j2hhhe3c>${serial}</h2><p class="text-lg ml-2 w-2/3 text-slate-300" data-astro-cid-j2hhhe3c>${last_update}</p></div><div class="status" data-astro-cid-j2hhhe3c><p${addAttribute(`text-lg p-2 rounded-md text-white ${statusClass}`, "class")} data-astro-cid-j2hhhe3c>${status}</p></div></a></li>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/components/cards/CapsuleCard.astro", void 0);

const $$Astro$8 = createAstro();
const $$CapsuleList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CapsuleList;
  const { list } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="launch-list " data-astro-cid-c7ak75lb>${list.map((capsule) => renderTemplate`${renderComponent($$result, "CapsuleCard", $$CapsuleCard, { "id": capsule.id, "serial": capsule.serial, "status": capsule.status, "last_update": capsule.last_update, "data-astro-cid-c7ak75lb": true })}`)}</ul>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/components/list/CapsuleList.astro", void 0);

const $$Astro$7 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$3;
  const Capsules = await getCapsules();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout$1, { "title": "Capsules", "data-astro-cid-3vznmk2r": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="bg py-8" data-astro-cid-3vznmk2r><div class="container w-2/3 mx-auto text-start" data-astro-cid-3vznmk2r>${renderComponent($$result2, "BackButton", $$BackButton, { "data-astro-cid-3vznmk2r": true })}<h1 class="mt-4 text-4xl font-bold text-white" data-astro-cid-3vznmk2r>Capsules</h1><p class="mt-4 first-letter:text-lg text-slate-300" data-astro-cid-3vznmk2r>
Here you can find all the Capsules.
</p></div></div><div class="mt-4" data-astro-cid-3vznmk2r>${renderComponent($$result2, "CapsuleList", $$CapsuleList, { "list": Capsules, "data-astro-cid-3vznmk2r": true })}</div>` })}`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/capsules/index.astro", void 0);

const $$file$3 = "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/capsules/index.astro";
const $$url$3 = "/capsules";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$2;
  const photos = await getPhotosUrl("spacex");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout$1, { "title": `Gallery` }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center "><div class="w-fit">${renderComponent($$result2, "BackButton", $$BackButton, {})}</div><h1 class="text-white text-7xl text-center mb-12">Gallery SpaceX</h1></div>${renderComponent($$result2, "Gallery", Gallery, { "images": photos, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/matia/Desktop/codes/astro-spacex/src/components/gallery/Gallery", "client:component-export": "default" })}` })}`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/gallery/index.astro", void 0);

const $$file$2 = "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/gallery/index.astro";
const $$url$2 = "/gallery";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$RocketCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$RocketCard;
  const { id, name, img, first_flight, active } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-isskyi2f><a${addAttribute(`/rockets/${id}`, "href")} class="card-link" data-astro-cid-isskyi2f><img class="card-image"${addAttribute(img, "src")}${addAttribute(name, "alt")} data-astro-cid-isskyi2f><h2 class="absolute top-2 left-2 text-xl p-2 rounded-lg mx-auto bg-black bg-opacity-40 text-white bg-accent" data-astro-cid-isskyi2f>${name}</h2><p class="absolute top-2 right-2 text-sm p-2 rounded-lg mx-auto bg-black bg-opacity-40 text-white" data-astro-cid-isskyi2f>${first_flight}</p><div class="status" data-astro-cid-isskyi2f>${active ? renderTemplate`<p class="success" data-astro-cid-isskyi2f>Active</p>` : renderTemplate`<p class="failure" data-astro-cid-isskyi2f>Inactive</p>`}</div></a></li>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/components/cards/RocketCard.astro", void 0);

const $$Astro$4 = createAstro();
const $$RocketList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$RocketList;
  const { list } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="launch-list d-flex flex-wrap" data-astro-cid-uun65wic>${list.map((rocket) => renderTemplate`${renderComponent($$result, "RocketCard", $$RocketCard, { "id": rocket.id, "name": rocket.name, "img": rocket.flickr_images[0], "first_flight": rocket.first_flight, "active": rocket.active, "data-astro-cid-uun65wic": true })}`)}</ul>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/components/list/RocketList.astro", void 0);

const $$Astro$3 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  const rockets = await getRockets();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout$1, { "title": "Rockets", "data-astro-cid-r2obvrxa": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="bg-gradient py-8" data-astro-cid-r2obvrxa><div class="container w-2/3 mx-auto text-start" data-astro-cid-r2obvrxa>${renderComponent($$result2, "BackButton", $$BackButton, { "data-astro-cid-r2obvrxa": true })}<h1 class="mt-4 text-4xl font-bold text-white" data-astro-cid-r2obvrxa>Rockets</h1><p class="mt-4 first-letter:text-lg text-slate-300" data-astro-cid-r2obvrxa>
Here you can find all the rockets.
</p></div></div><div class="mt-4" data-astro-cid-r2obvrxa>${renderComponent($$result2, "RocketList", $$RocketList, { "list": rockets, "data-astro-cid-r2obvrxa": true })}</div>` })}<!-- -to-r from-orange-700 via-orange-950 to-orange-5500 -->`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/rockets/index.astro", void 0);

const $$file$1 = "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/rockets/index.astro";
const $$url$1 = "/rockets";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$CoreCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CoreCard;
  const { id, serial, launchesCount, status } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-oo6o657t><a${addAttribute(`/cores/${id}`, "href")} class="card-link" data-astro-cid-oo6o657t><div class="info" data-astro-cid-oo6o657t><h2 class="text-white" data-astro-cid-oo6o657t>${serial}</h2><p class="text-slate-300" data-astro-cid-oo6o657t>Reused: ${launchesCount}</p></div><div class="status" data-astro-cid-oo6o657t>${status ? renderTemplate`<p class="success" data-astro-cid-oo6o657t>Active</p>` : renderTemplate`<p class="failure" data-astro-cid-oo6o657t>Inactive</p>`}</div></a></li>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/components/cards/CoreCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$CoreList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CoreList;
  const { list } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="launch-list" data-astro-cid-fvdhlyb4>${list.map((core) => renderTemplate`${renderComponent($$result, "CoreCard", $$CoreCard, { "id": core.id, "serial": core.serial, "status": core.status, "launchesCount": core.reuse_count, "data-astro-cid-fvdhlyb4": true })}`)}</ul>`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/components/list/CoreList.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const Cores = await getCores();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout$1, { "title": "Cores", "data-astro-cid-a2lsyor7": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="bg-gradient py-8" data-astro-cid-a2lsyor7><div class="container w-2/3 mx-auto text-start" data-astro-cid-a2lsyor7>${renderComponent($$result2, "BackButton", $$BackButton, { "data-astro-cid-a2lsyor7": true })}<h1 class="mt-4 text-4xl font-bold text-white" data-astro-cid-a2lsyor7>Cores</h1><p class="mt-4 first-letter:text-lg text-slate-300" data-astro-cid-a2lsyor7>
Here you can find all the Cores.
</p></div></div><div class="mt-4" data-astro-cid-a2lsyor7>${renderComponent($$result2, "CoreList", $$CoreList, { "list": Cores, "data-astro-cid-a2lsyor7": true })}<div class="mt-4" data-astro-cid-a2lsyor7></div><!-- -to-r from-green-700 via-green-950 to-green-5500  --></div>` })}`;
}, "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/cores/index.astro", void 0);

const $$file = "C:/Users/matia/Desktop/codes/astro-spacex/src/pages/cores/index.astro";
const $$url = "/cores";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$3 as a, index$2 as b, index$1 as c, index as d, index$4 as i };
