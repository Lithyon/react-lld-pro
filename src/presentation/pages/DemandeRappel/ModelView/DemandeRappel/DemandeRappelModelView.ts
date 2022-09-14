import FormErrorDemandeRappelModelView from "../FormErrorDemandeRappel/FormErrorDemandeRappelModelView";

export default interface DemandeRappelModelView {
    readonly formErrorDemandeRappel: FormErrorDemandeRappelModelView;
    readonly prenom: string;
    readonly nom: string;
    readonly nomEntreprise: string;
    readonly telephone: string;
    readonly afficherModaleConfirmationOk: boolean;
    readonly afficherModaleConfirmationKo: boolean;
}
