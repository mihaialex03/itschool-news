import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function NewsCard(props) {
  const { newsId, imgSrc, title, description } = props;
  return (
    <Card className="newsCard d-flex flex-column align-items-center justify-content-between h-100">
      <Link to={`/news/${encodeURIComponent(newsId)}`}>
        <Card.Img src={imgSrc} variant="top" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}
