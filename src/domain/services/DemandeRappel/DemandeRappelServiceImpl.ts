import FormErrorDemandeRappelModelViewBuilder from "../../../presentation/pages/DemandeRappel/ModelView/FormErrorDemandeRappel/FormErrorDemandeRappelModelViewBuilder";
import FormErrorDemandeRappelModelView from "../../../presentation/pages/DemandeRappel/ModelView/FormErrorDemandeRappel/FormErrorDemandeRappelModelView";
import DemandeRappelModelView from "../../../presentation/pages/DemandeRappel/ModelView/DemandeRappel/DemandeRappelModelView";

export default class DemandeRappelServiceImpl {
    formHasError(formError: FormErrorDemandeRappelModelView): boolean {
        return Object.values(formError).filter((v: string) => v !== "").length !== 0;
    }

    validationFormulaire(demandeRappel: DemandeRappelModelView): FormErrorDemandeRappelModelView {
        const formError = FormErrorDemandeRappelModelViewBuilder.buildEmpty();

        if (demandeRappel.prenom.length === 0) {
            formError.prenom = "Veuillez renseigner votre prénom";
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