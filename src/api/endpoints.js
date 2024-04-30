// primul pas este sa imi tin intr o constanta api-key

const API_KEY = 'd4a834b6-f79b-45b5-87e6-7efd691630b6';

// definesc functia care returneaza endpointul folosit pentru a anumita categorie de stiri
export function getNewsCategoriesEndpoint(category, pageNumber = 1, pageSize = 20){
    const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page-size=${pageSize}&page=${pageNumber}`;

    return `https://content.guardianapis.com/search${queryParams}`;
}

export function getNewsDetailsEndpoint(newsId){
    const queryParams = `?api-key=${API_KEY}&show-fields=all`;
    return `https://content.guardianapis.com/${newsId}${queryParams}`
}