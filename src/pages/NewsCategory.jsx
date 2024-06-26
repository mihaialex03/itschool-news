import React from "react";
import Layout from "../components/Layout";
import { useParams, useSearchParams } from "react-router-dom";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsList } from "../api/adaptors";
import { Container} from "react-bootstrap";
import NewsCardList from "../components/NewsCardList";
import NewsPagination from "../components/NewsPagination";
export default function NewsCategory() {
  // extrag parametru categoryId din URL
  const { categoryId } = useParams();
  // extrag query param din URL
  const [queryParams] = useSearchParams();
  let currentPage = queryParams.get("page");
  // Daca nu avem queryParam in URL, inseamna ca suntem pe pagina principala de categorie
  if (!currentPage) {
    currentPage = 1;
  }

  const newsCategoryEndpoint = getNewsCategoriesEndpoint(
    categoryId,
    currentPage
  );
  // fac fetch la date de la The Guardian
  const news = useFetch(newsCategoryEndpoint);
  const adaptedNews = getNewsList(news);
  let pageTitle = "";
  switch (categoryId) {
    case "technology":
      pageTitle = "Tech";
      break;
    case "football":
      pageTitle = "Football";
      break;
    default:
      break;
  }

  return (
    <Layout>
      <Container>
        <h1 className="mb-5 pt-3">{pageTitle}</h1>
        {/* afisez stirile despre tehnologie */}
        <NewsCardList newsList={adaptedNews} />
        <NewsPagination active={currentPage} baseURL={`/category/${categoryId}`} />
      </Container>
    </Layout>
  );
}
