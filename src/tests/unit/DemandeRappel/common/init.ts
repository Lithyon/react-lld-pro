import {DemandeRappelController} from "../../../../presentation/pages/DemandeRappel/DemandeRappelController";
import {DemandeRappelServiceImpl} from "../../../../domain/services/DemandeRappel";

export function init() {
    const demandeRappelService = new DemandeRappelServiceImpl();

    return new DemandeRappelController({
        demandeRappelService
    });
}
