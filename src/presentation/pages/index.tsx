import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageDetails from "./PageDetails";
import Home from "./Home";
import {Card, Col, Container, Row} from "macif-components";

export default function Pages() {
    return (
        <Container className="mcf-mt--10">
            <Row>
                <Col>
                    <Card body>
                        <BrowserRouter>
                            <Routes>
                                <Route path={PageDetails.home.link} element={<Home />} />
                            </Routes>
                        </BrowserRouter>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
