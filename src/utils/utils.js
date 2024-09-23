export const getUrlsOfImages = (path) => {
    return new URL(`assets/${path}`, import.meta.url).href;
};
