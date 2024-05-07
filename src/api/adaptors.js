export function getNewsList(apiResponse) {
  // daca raspunsul nu contine date, returnam un aray gol
  if (!apiResponse || !apiResponse.response) {
    return [];
  }
  // extrag datele de results de la api
  const rawNewsList = apiResponse.response.results;
  // iterez din arrayul rawNewsList
  const adaptedNewsList = rawNewsList.map((news) => {
    return {
      id: news.id,
      thumbnail: news.fields.thumbnail,
      title: news.fields.headline,
      description: news.fields.trailText,
    };
  });
  // returnez datele adaptate
  return adaptedNewsList;
}
export function getNewsDetails(apiResponse) {
  // daca raspunsul de la Api nu contine date, returnez un array gol
  if (!apiResponse || !apiResponse.response) {
    return [];
  }
  const rawNewsDetails = apiResponse.response.content;
  const adaptedNewsDetails = {
    date: rawNewsDetails.webPublicationDate,
    title: rawNewsDetails.fields.headline,
    description: rawNewsDetails.fields.trailText,
    image: rawNewsDetails.fields.main,
    content: rawNewsDetails.fields.body,
    author: rawNewsDetails.fields.byline,
    thumbnail: rawNewsDetails.fields.thumbnail,
  };
  return adaptedNewsDetails;
}
