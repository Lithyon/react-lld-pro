import {CiviliteCode} from "../../../../../domain/data/Enum/DefaultCivilite";

export default interface CiviliteModelView {
    readonly code: CiviliteCode;
    readonly libelle: string;
}
