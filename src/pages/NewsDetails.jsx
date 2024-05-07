import React, { useContext } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { getNewsDetailsEndpoint } from "../api/endpoints";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsDetails } from "../api/adaptors";
import { getFormatedDate } from "../utils/date";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./NewsDetails.css";
import { addToFavorite } from "../store/Favorites/actions";
import { FavoritexContext } from "../store/Favorites/context";

export default function NewsDetails() {
  // extrag functia care imi modifica stateul global de stiri favorite
  const {favoritesDispatch} = useContext(FavoritexContext);
  let { newsId } = useParams();
  // avand in vedere ca am codificat Id in NewsCard.jsx, acum trebuie sa il decodific
  newsId = decodeURIComponent(newsId);
  // generez endpointul pentru detaliile stirilor
  const newsDetailsEndpoint = getNewsDetailsEndpoint(newsId);
  //   cerem datele stirii de la server
  const newsDetails = useFetch(newsDetailsEndpoint);
  // adaptez datele de la server in functie de datele necesare componentei
  const adaptedNewsDetails = getNewsDetails(newsDetails);
  // extrag cheile din adaptedNewsDetails folosind obj destructuring
  const { date, title, description, image, content, author, thumbnail } =
    adaptedNewsDetails;
  // formatez data primita de la API catre formatul: zi/luna/an
  const formatedDate = getFormatedDate(date);
  function handleAddToFavorites(news){
    // apelez actiunea de adaugare la favorite
    const actionResult = addToFavorite(news);
    // trimit rezultatul actiunii catre reducer
    favoritesDispatch(actionResult);
  }
  return (
    <Layout>
      <Container className="newsDetails my-5">
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={8}>
            <h1 className="pt-3 mb-5">{title}</h1>
            <p className="fw-bold">{description}</p>
            {/* de la API noi primim imaginea sub forma de taguri de html, iar pt a le afisa pe ecran, avem nevoie de prop dagerouslySetInnerHTML = innerHTML din JS */}
            <div
              dangerouslySetInnerHTML={{ __html: image }}
              className="mb-4"
            ></div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="fw-bold">
                <p>{author}</p>
                <p className="mb-0">{formatedDate}</p>
              </div>
              <Button
                onClick={() => {
                  handleAddToFavorites({
                    id: newsId,
                    thumbnail,
                    title,
                    description,
                    hasCloseButton: true,
                  });
                }}
              >
                Adauga la favorite
              </Button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
