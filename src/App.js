import { useEffect, useReducer } from "react";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import NewsCategory from "./pages/NewsCategory";
import NewsDetails from "./pages/NewsDetails";
import Page404 from "./pages/Page404";
// Import componentele pt routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { favoritesReducer, initialState } from "./store/Favorites/reducer";
import { FavoritexContext } from "./store/Favorites/context";

// Ne definim rutele necesare aplicatiei
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/category/:categoryId",
    element: <NewsCategory />,
  },
  {
    path: "/news/:newsId",
    element: <NewsDetails />,
  },
]);
function App() {
  // initializez reducerul pt stirile favorite
  const [favoritesState, favoritesDispatch] = useReducer(
    favoritesReducer,
    initialState
  );
  const favoritesContextValue = {
    favoritesState,
    favoritesDispatch,
  };
  return (
    <div className="App">
      <FavoritexContext.Provider value={favoritesContextValue}>
        <RouterProvider router={router} />
      </FavoritexContext.Provider>
    </div>
  );
}

export default App;
