import React from "react";
import {DemandeRappelControllerImpl} from "./DemandeRappelControllerImpl";
import DemandeRappelView from "./DemandeRappelView";
import DemandeRappelService from "../../../domain/services/DemandeRappel";

export default function DemandeRappel() {
    const controller = new DemandeRappelControllerImpl({
        demandeRappelService: DemandeRappelService
    });

    return <DemandeRappelView controller={controller} />;
}
