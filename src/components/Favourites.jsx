import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Favourites = () => {
  //creo il collegamento con lo stato a livello globale tramite useSelector
  //lo state era dichiarato in redux --> index.js ma ora è disponibile anche in Favourites
  //ora companies contiene un array, inizialmente vuoto, ma che verrà riempito successivamente
  const companies = useSelector((state) => state.favourites.content);
  //per ogni elemento dentro a companies si genererà una nuva row contenente il nome della compagnia che è un link allo stesso tempo
  //favourites riceverà nuove stringhe,e quindi nuovi elementi nell'array tramite una DISPACH
  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Preferiti</h1>
          <Link to="/">Vai alla Home</Link>
          {
            //non essendoci un id identificativo per ogni company, viene aggiunto un indice per differenziare un elemento dall'altro
          }{" "}
          {companies.map((company, i) => (
            <Row key={i} className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
              <Col xs={3}>
                <Link to={`/${company}`}>{company}</Link>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
