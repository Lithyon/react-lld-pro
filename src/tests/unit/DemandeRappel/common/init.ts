import {DemandeRappelController} from "../../../../presentation/pages/DemandeRappel/DemandeRappelController";
import {DemandeRappelServiceImpl} from "../../../../domain/services/DemandeRappel";
import {DemandeRappelRepositoryImpl} from "../../../../domain/repository/DemandeRappel";
import DemandeRappelRequestEntity from "../../../../domain/data/API/Entity/DemandeRappelRequestEntity";

export function init() {
    const demandeRappelRepo = new DemandeRappelRepositoryImpl({
        envoyerDemandeRappel(request: DemandeRappelRequestEntity): Promise<void> {
            return Promise.resolve();
        }
    });

    const demandeRappelService = new DemandeRappelServiceImpl(demandeRappelRepo);

    return new DemandeRappelController({
        demandeRappelService
    });
}
