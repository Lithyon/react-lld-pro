import ParametresDemandeEntity from "./ParametresDemandeEntity";
import CoordonneeContactEntity from "./CoordonneeContactEntity";

export default interface DemandeRappelRequestEntity {
    readonly cdCanal: string;
    readonly typeDemande: string;
    readonly nmPers: string;
    readonly znPrenPers: string;
    readonly parametresDemande: ParametresDemandeEntity;
    readonly coordonneesContact: Array<CoordonneeContactEntity>;
    readonly cdCivil: string;
}
