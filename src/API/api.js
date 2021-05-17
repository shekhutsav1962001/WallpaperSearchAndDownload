const baseURL = "https://api.unsplash.com/";
const API_KEY = process.env.REACT_APP_API_KEY;

export const getTrendingImages = async () => {
    try {
        let url = `${baseURL}/photos?client_id=${API_KEY}&per_page=30`;
        const res = await fetch(url);

        if (!res.ok) {
            console.error("failed", res.status);
            return;
        }

        const json = await res.json();
        if (json.length) {
            return json;
        }
        else {
            return [];
        }

    } catch (error) {
        console.error("error in making request", error);
        return [];
    }

};

/** Return the searched images */
export const getSearchedImages = async (query) => {


    try {
        let url = `${baseURL}/search/photos?client_id=${API_KEY}&per_page=30&query=${query}`;
        const res = await fetch(url);

        if (!res.ok) {
            console.error("failed", res.status);
            return;
        }

        const json = await res.json();
        if (json.results.length) {
            return json.results;
        }
        else {
            return [];
        }
    } catch (error) {
        console.error("error in making request", error);
        return [];
    }

};