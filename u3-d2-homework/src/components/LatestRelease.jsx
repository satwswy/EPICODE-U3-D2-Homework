import { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap"
import bookArray from "../data/scifi.json"

class LatestRelease extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-center mt-3">
                    
                        {
                            bookArray.map(book => {
                                return (
                                <Col key={book.asin} xs={12} sm={6} md={4} lg={3} >
                                <Card >
                                    <Card.Img variant="top" src={book.img} />
                                    <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>
                                        <Card.Text>
                                            {book.category}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col>
                            )})
                        }

                    
                </Row>
            </Container>
        )
    }
}
export default LatestRelease