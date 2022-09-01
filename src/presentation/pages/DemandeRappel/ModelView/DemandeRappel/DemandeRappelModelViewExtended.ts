import IsCloneable from "@maciffr/react-mvc/lib/contracts/IsCloneable";
import DemandeRappelModelView from "./DemandeRappelModelView";

export interface DemandeRappelModelViewExtended
    extends IsCloneable<DemandeRappelModelViewExtended>,
        DemandeRappelModelView {}

export function DemandeRappelModelViewPrototype(): DemandeRappelModelViewExtended {
    return {
        clone: DemandeRappelModelViewPrototype,
        formErrorDemandeRappel: this.formErrorDemandeRappel,
        prenom: this.prenom,
        nom: this.nom,
        nomEntreprise: this.nomEntreprise
    };
}
