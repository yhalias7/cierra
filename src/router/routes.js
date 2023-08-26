var routes = [];

const files = require.context('../pages', true, /routes\.js$/i);
files.keys().forEach(key => {
   routes = routes.concat(files(key).default);
});

export default routes;
