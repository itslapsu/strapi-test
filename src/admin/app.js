const config = {
  locales: ["en"],
  translations: {
    en: {
      "Auth.form.welcome.title": "Welcome!",
      "Auth.form.welcome.subtitle": "Log in to API (slap.pp.ua)",
      "app.components.LeftMenu.navbrand.title": "API Dashboard",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
