import React, { useEffect } from "react";
import { Badge, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { commentsAction } from "../redux/action";

const Comments = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.comments);
  useEffect(() => {
    dispatch(commentsAction(params.postId));
  }, []);
  console.log(data);
  return (
    <div>
      {loading ? (
        <Spinner variant="info" animation="grow" />
      ) : (
        <>
          <h1>
            <Badge bg="danger">{params.postId}</Badge>
          </h1>
          <Container>
            <Row>
              {data.map((item) => (
                <Col sm={3} key={item.id} className="mt-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>
                        {item.id}|{item.email}
                      </Card.Title>
                      <Card.Text>{item.name}</Card.Text>
                      <Card.Text>{item.body}</Card.Text>
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

export default Comments;
