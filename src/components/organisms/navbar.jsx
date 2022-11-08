import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoriesList from "../molecules/categoriesList";

import ShopCart from "../molecules/shopcart";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" fixed className="pt-3 pb-3">
      <Container>
        <Navbar>
          <Link className="navbar-brand text-light " to={"/"}>
            <h3 className="mb-2 fw-bold"> E-commerce</h3>
          </Link>
        </Navbar>
        <Nav className="me-auto">
          <Nav>
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
          </Nav>
          <CategoriesList />
        </Nav>
        <Nav className="ms-auto">
          <Nav>
            <Link className="nav-link" to={"/"}>
              Register
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-link" to={"/"}>
              Login
            </Link>
          </Nav>
          <Nav>
            <ShopCart goTo="/cart" ItemNumber={2} />
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
