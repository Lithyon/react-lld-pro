import ParametreDemandeState from "./ParametreDemandeState";
import InfoContactState from "./InfoContactState";

export default interface DemandeRappelRequestState {
    cdCanal: string;
    typeDemande: string;
    nmPers: string;
    znPrenPers: string;
    parametresDemande: ParametreDemandeState;
    coordonneesContact: Array<InfoContactState>;
    cdCivil: string;
}
