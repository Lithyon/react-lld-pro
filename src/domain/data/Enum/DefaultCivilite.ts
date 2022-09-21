import CiviliteModelView from "../../../presentation/pages/DemandeRappel/ModelView/Civilite/CiviliteModelView";

export enum CiviliteCode {
    MONSIEUR = "MON",
    MADAME = "MME",
    UNKNOWN = ""
}

export const DefaultCivilite: Array<CiviliteModelView> = [
    {code: CiviliteCode.MADAME, libelle: "Madame"},
    {code: CiviliteCode.MONSIEUR, libelle: "Monsieur"}
];
