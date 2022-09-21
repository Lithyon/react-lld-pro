import IsCloneable from "@maciffr/react-mvc/lib/contracts/IsCloneable";
import CiviliteModelView from "./CiviliteModelView";

export interface CiviliteModelViewExtended extends IsCloneable<CiviliteModelViewExtended>, CiviliteModelView {}

export function CiviliteModelViewPrototype(): CiviliteModelViewExtended {
    return {
        clone: CiviliteModelViewPrototype,
        libelle: this.libelle,
        code: this.code
    };
}
