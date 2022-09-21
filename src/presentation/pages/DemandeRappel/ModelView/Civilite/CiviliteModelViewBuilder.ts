import {CiviliteCode} from "../../../../../domain/data/Enum/DefaultCivilite";

export default class CiviliteModelViewBuilder {
    static buildEmpty() {
        return {
            code: CiviliteCode.UNKNOWN,
            libelle: ""
        };
    }
}
