import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { removeFromFavorites } from "../store/Favorites/actions";
import { useContext } from "react";
import { FavoritexContext } from "../store/Favorites/context";
import "./NewsCard.css";
export default function NewsCard(props) {
  const { newsId, imgSrc, title, description, hasCloseButton } = props;
  // extrag functia care imi modifica stateul global
  const { favoritesDispatch } = useContext(FavoritexContext);
  function handleRemoveFromFavorites(id) {
    const actionsResult = removeFromFavorites(id);
    favoritesDispatch(actionsResult);
  }
  return (
    <Card className="newsCard d-flex flex-column align-items-center justify-content-between h-100">
      <Link to={`/news/${encodeURIComponent(newsId)}`}>
        <Card.Img src={imgSrc} variant="top" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Link>
      {hasCloseButton && (
        <Button
          variant="light"
          onClick={() => {
            handleRemoveFromFavorites(newsId);
          }}
        >
          <span className="material-symbols-outlined">close</span>
        </Button>
      )}
    </Card>
  );
}
