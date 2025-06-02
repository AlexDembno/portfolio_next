export const GA_MEASUREMENT_ID = "G-1DLGNE0JRJ";

export const pageview = (url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
