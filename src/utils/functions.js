export const getImageURL = imageParameter => {
return new URL(`../assets/${imageParameter}`, import.meta.url).href
}