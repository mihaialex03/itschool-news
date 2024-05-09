import { useNavigate } from "react-router-dom";
import "./Pagination.css";
import Pagination from "react-bootstrap/Pagination";

export default function NewsPagination(props) {
  // extrag props
  let { active, baseURL } = props;
  // folosesc hookul de useNavigate
  let navigate = useNavigate();
  // daca nu primesc nicio valoare pt propul active, atunci inseamna ca pagina activa va fi 1
  if (!active) {
    active = 1;
  }
  let items = [];
  //   vom avea 5 componente de paginatie si atunci folosim for sa iteram de 5 ori
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === Number(active)}
        // daca pagina este activa, ii adaug un id pt stilizare
        id={active ? "pagination-active" : null}
        onClick={() => {
          // la click pe buton, navigam catre noua pagina
          navigate(`${baseURL}?page=${number}`);
          // trebuie sa scrolez sus inapoi pe pagina
          window.scrollTo({
            top: 0,
            behaviour: "smooth",
          });
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="d-flex justify-content-center">
        <Pagination className="pagination">{items}</Pagination>
    </div>
  )
}
