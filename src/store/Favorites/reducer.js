// initializez state ul cu un array gol
export const initialState = {
  news: [],
};
export function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES": {
      // caut sa vad daca stirea este deja adaugata la favorite
      const isInList = state.news.find((singleNews) => {
        return singleNews.id === action.payload.id;
      });
      // daca gasesc stirea in lista, returnez state ul asa cum este
      if (isInList) {
        return state;
      } else {
        const newState = {
          news: [action.payload, ...state.news],
        };
        return newState;
      }
    }
    case "REMOVE_FROM_FAVORITES": {
      const filteredNews = state.news.filter((singleNews) => {
        return singleNews.id !== action.payload;
      });
      const newState = {
        news: filteredNews,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
