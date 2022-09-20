import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { usersAction } from "../redux/action";

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(usersAction());
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner variant="info" animation="grow" />
      ) : (
        <Container>
          <Row>
            {data.map((item) => (
              <Col sm={3} key={item.id} className="mt-3">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>
                      {item.id}|{item.username}
                    </Card.Title>
                    <Card.Text>{item.name}</Card.Text>
                    <Card.Text>{item.email}</Card.Text>
                    <Button
                      variant="dark"
                      onClick={() =>
                        navigate(`${item.id}`, { state: { name: item.name } })
                      }
                    >
                      post
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Users;
