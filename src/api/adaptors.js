export function getNewsList(apiResponse){
    // daca raspunsul nu contine date, returnam un aray gol
    if(!apiResponse || !apiResponse.response){
        return[];
    }
    // extrag datele de results de la api
    const rawNewsList = apiResponse.response.results;
    // iterez din arrayul rawNewsList
    const adaptedNewsList = rawNewsList.map((news)=>{
        return{
            id: news.id,
            thumbnail: news.fields.thumbnail,
            title: news.fields.headline,
            description: news.fields.trailText
        }
    })
    // returnez datele adaptate
    return adaptedNewsList;
}