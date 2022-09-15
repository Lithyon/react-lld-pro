import DemandeRappelDAO from "./DemandeRappelDAO";
import DemandeRappelRequestEntity from "../API/Entity/DemandeRappelRequestEntity";
import {RequestBuilder} from "maciffr-client-http";

const BASE_URL = `${window.servicesRestBaseUrl || ""}/internet-echange-rest`;
const HTTP_STATUS_SUCCESS = 200;

export default class DemandeRappelDAOImpl implements DemandeRappelDAO {
    async envoyerDemandeRappel(request: DemandeRappelRequestEntity): Promise<void> {
        const response = await RequestBuilder.post<Promise<void>>(
            `${BASE_URL}/unprotected/echanges/creer_demande_contact_hors_epi`
        )
            .appendHeader("Content-Type", "application/JSON")
            .body(request)
            .fetch();

        if (response.status !== HTTP_STATUS_SUCCESS) {
            throw new Error(response.statusText);
        }
    }
}
