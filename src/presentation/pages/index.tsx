import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageDetails from "./PageDetails";
import {Card, Col, Container, Row} from "macif-components";
import DemandeRappel from "./DemandeRappel";

export default function Pages() {
    return (
        <Container className="mcf-mt--10">
            <Row>
                <Col>
                    <Card body>
                        <BrowserRouter>
                            <Routes>
                                <Route path={PageDetails.demandeRappel.link} element={<DemandeRappel />} />
                            </Routes>
                        </BrowserRouter>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
