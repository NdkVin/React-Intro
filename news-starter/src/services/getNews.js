import axios from "axios"

const NEWS_API_BASE_URL = process.env.REACT_APP_NEWS_API_BASE_URL;
const NEWS_API_KEY = process.env.REACT_APP_API_KEY;

export const getNews = async ({ SearchQuery='technology',  }) => {
    try {
        const path = "/everything";
        const query = `?q=${SearchQuery}&apiKey=${NEWS_API_KEY}`;
        const endpointUrl = `${NEWS_API_BASE_URL}${path}${query}`;

        const res = await axios.get(endpointUrl);
        if(res.status === 200) {
            const additionalObject = {
                category: SearchQuery
            }

            const resData = {
                ...res.data,
                ...additionalObject
            }
    
            return resData
        }

    } catch (error) {
        console.error(error);
    }
}