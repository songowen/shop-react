import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/detail.js";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  // 정렬 함수
  function sortShoesAlphabetically() {
    const sortedShoes = [...shoes].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setShoes(sortedShoes);
  }

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Shoeshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  <button
                    className="btn btn-primary mb-3"
                    onClick={sortShoesAlphabetically}
                  >
                    가나다 순 정렬
                  </button>
                  {shoes.map((shoe) => (
                    <Card key={shoe.id} shoes={shoe} />
                  ))}
                </div>
              </div>
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<div>존재하지 않는 페이지입니다.</div>} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" +
          (props.shoes.id + 1) +
          ".jpg"
        }
        width="80%"
        alt={props.shoes.title}
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}원</p>
    </div>
  );
}

export default App;
