import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageDetails from "./PageDetails";
import DemandeRappel from "./DemandeRappel";

export default function Pages() {
    const [serverPath] = window.location.pathname.split(/\/app/gi);

    return (
        <BrowserRouter basename={serverPath}>
            <Routes>
                <Route path={PageDetails.demandeRappel.link} element={<DemandeRappel />} />
            </Routes>
        </BrowserRouter>
    );
}
