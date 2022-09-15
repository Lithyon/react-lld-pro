import ParametreDemandeState from "./ParametreDemandeState";

export default interface DemandeRappelRequestState {
    cdCanal: string;
    typeDemande: string;
    nmPers: string;
    znPrenPers: string;
    parametreDemande: ParametreDemandeState;
    cdTyContact: string;
    znInfosContact: string;
}
