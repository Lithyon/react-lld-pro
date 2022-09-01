import IsCloneable from "@maciffr/react-mvc/lib/contracts/IsCloneable";
import FormErrorDemandeRappelModelView from "./FormErrorDemandeRappelModelView";

export interface FormErrorDemandeRappelModelViewExtended
    extends IsCloneable<FormErrorDemandeRappelModelViewExtended>,
        FormErrorDemandeRappelModelView {}

export function FormErrorDemandeRappelModelViewPrototype(): FormErrorDemandeRappelModelViewExtended {
    return {
        clone: FormErrorDemandeRappelModelViewPrototype,
        prenom: this.prenom,
        nom: this.nom,
        nomEntreprise: this.nomEntreprise,
        telephone: this.telephone
    };
}
