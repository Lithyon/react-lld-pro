import React from "react";
import {DemandeRappelController} from "./DemandeRappelController";
import DemandeRappelView from "./DemandeRappel";
import DemandeRappelService from "../../../domain/services/DemandeRappel";

export default function DemandeRappel() {
    const controller = new DemandeRappelController({
        demandeRappelService: DemandeRappelService
    });

    return <DemandeRappelView controller={controller} />;
}
