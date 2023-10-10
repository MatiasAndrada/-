export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('../../chunks/pages/_page__f7f31368.mjs');

export { page };
