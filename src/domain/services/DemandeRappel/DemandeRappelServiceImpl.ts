import FormErrorDemandeRappelModelViewBuilder from "../../../presentation/pages/DemandeRappel/ModelView/FormErrorDemandeRappel/FormErrorDemandeRappelModelViewBuilder";
import FormErrorDemandeRappelModelView from "../../../presentation/pages/DemandeRappel/ModelView/FormErrorDemandeRappel/FormErrorDemandeRappelModelView";
import DemandeRappelModelView from "../../../presentation/pages/DemandeRappel/ModelView/DemandeRappel/DemandeRappelModelView";

export default class DemandeRappelServiceImpl {
    private static verifierTelephone(value: string): boolean {
        const testRegex: RegExpMatchArray = value.match(/^0[1-9]{1}[0-9]{8}$/) || [];
        return testRegex.length === 0;
    }

    formHasError(formError: FormErrorDemandeRappelModelView): boolean {
        return Object.values(formError).filter((v: string) => v !== "").length !== 0;
    }

    validationFormulaire(demandeRappel: DemandeRappelModelView): FormErrorDemandeRappelModelView {
        const formError = FormErrorDemandeRappelModelViewBuilder.buildEmpty();

        if (demandeRappel.prenom.length === 0) {
            formError.prenom = "Veuillez renseigner votre prénom";
        }

        if (demandeRappel.nom.length === 0) {
            formError.nom = "Veuillez renseigner votre nom";
        }

        if (demandeRappel.nomEntreprise.length === 0) {
            formError.nomEntreprise = "Veuillez saisir au minimum une lettre";
        }

        if (demandeRappel.telephone.length === 0) {
            formError.telephone = "Veuillez renseigner un numéro de téléphone";
        } else if (DemandeRappelServiceImpl.verifierTelephone(demandeRappel.telephone)) {
            formError.telephone = "Veuillez saisir un numéro de téléphone valide";
        }

        return formError;
    }

    async demandeRappel(demandeRappel: DemandeRappelModelView): Promise<FormErrorDemandeRappelModelView> {
        const formError = this.validationFormulaire(demandeRappel);

        if (!this.formHasError(formError)) {
            // DO SOMETHING
        }

        return formError;
    }
}
