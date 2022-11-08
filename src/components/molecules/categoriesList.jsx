import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoriesList() {
  return (
    <>
      <Nav>
        {" "}
        <Link className="nav-link" to={"category/1"}>
          category1
        </Link>
      </Nav>
      <Nav>
        <Link className="nav-link" to={"/"}>
          category1
        </Link>
      </Nav>
      <Nav>
        <Link className="nav-link" to={"/"}>
          category1
        </Link>
      </Nav>
    </>
  );
}

export default CategoriesList;
