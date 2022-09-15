import DemandeRappelRequestEntity from "../API/Entity/DemandeRappelRequestEntity";

export default interface DemandeRappelDAO {
    envoyerDemandeRappel(request: DemandeRappelRequestEntity): Promise<void>;
}
