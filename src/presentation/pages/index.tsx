import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageDetails from "./PageDetails";
import DemandeRappel from "./DemandeRappel";

export default function Pages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={PageDetails.demandeRappel.link} element={<DemandeRappel />} />
            </Routes>
        </BrowserRouter>
    );
}
