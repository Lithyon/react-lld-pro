import ParametreDemandeEntity from "./ParametreDemandeEntity";

export default interface DemandeRappelRequestEntity {
    readonly cdCanal: string;
    readonly typeDemande: string;
    readonly nmPers: string;
    readonly znPrenPers: string;
    readonly parametreDemande: ParametreDemandeEntity;
    readonly cdTyContact: string;
    readonly znInfosContact: string;
}
