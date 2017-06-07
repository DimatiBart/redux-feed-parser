export const LOAD_DATA = "LOAD_DATA";
export const DATA_LOADED = "LOADED_DATA";

export let loadData = (url) => (
    {
        type: LOAD_DATA,
        url
    }
);

export let dataLoaded = (posts) => (
    {
        type: DATA_LOADED,
        posts
    }
);