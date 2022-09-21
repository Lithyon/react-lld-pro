import FormErrorDemandeRappelModelView from "../FormErrorDemandeRappel/FormErrorDemandeRappelModelView";
import CiviliteModelView from "../Civilite/CiviliteModelView";

export default interface DemandeRappelModelView {
    readonly formErrorDemandeRappel: FormErrorDemandeRappelModelView;
    readonly prenom: string;
    readonly nom: string;
    readonly nomEntreprise: string;
    readonly telephone: string;
    readonly afficherModaleConfirmationOk: boolean;
    readonly afficherModaleConfirmationKo: boolean;
    readonly civilite: CiviliteModelView;
}
