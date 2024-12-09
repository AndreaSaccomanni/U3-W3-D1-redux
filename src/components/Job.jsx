import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Heart } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";

const Job = ({ data }) => {
  const dispach = useDispatch();

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Heart onClick={() => dispach({ type: "ADD_TO_FAVOURITES", payload: data.company_name })} className="me-2" />
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
