import { useEffect } from "react";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import NewsCategory from "./pages/NewsCategory";
import NewsDetails from "./pages/NewsDetails";
import Page404 from "./pages/Page404";
// Import componentele pt routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getNewsCategoriesEndpoint } from "./api/endpoints";

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
    path: "/category/:categoryID",
    element: <NewsCategory/>,
  },
  {
    path: "/news/:newsId",
    element: <NewsDetails />,
  },
]);
function App() {
  useEffect(()=>{
    const categoryApiLink = getNewsCategoriesEndpoint('football');
    fetch(categoryApiLink)
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
    })
  },[])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
