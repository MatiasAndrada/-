export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('../../chunks/pages/_id__69ca02b6.mjs').then(n => n.i);

export { page };
