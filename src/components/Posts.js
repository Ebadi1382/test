import React, { useEffect } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { postsAction } from "../redux/action";

const Posts = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { data, loading } = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(postsAction(params.id));
  }, []);
  console.log(users.data)
  return (
    <div>
      {loading ? (
        <Spinner variant="info" animation="grow" />
      ) : (
        <>
          <h1>
            <Badge bg="danger">{users.data[params.id-1].name}</Badge>
          </h1>
          {/* <h1>
            <Badge bg="danger">{location.state.name}</Badge>
          </h1> */}
          <Container>
            <Row>
              {data.map((item) => (
                <Col sm={3} key={item.id} className="mt-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{item.id}</Card.Title>
                      <Card.Text>{item.title}</Card.Text>
                      <Card.Text>{item.body}</Card.Text>
                      <Button
                        variant="dark"
                        onClick={() => navigate(`${item.id}`)}
                      >
                        comments
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}
    </div>
  );
};

export default Posts;
