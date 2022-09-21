import FormErrorDemandeRappelModelViewBuilder from "../../../presentation/pages/DemandeRappel/ModelView/FormErrorDemandeRappel/FormErrorDemandeRappelModelViewBuilder";
import FormErrorDemandeRappelModelView from "../../../presentation/pages/DemandeRappel/ModelView/FormErrorDemandeRappel/FormErrorDemandeRappelModelView";
import DemandeRappelModelView from "../../../presentation/pages/DemandeRappel/ModelView/DemandeRappel/DemandeRappelModelView";
import {DemandeRappelRepositoryImpl} from "../../repository/DemandeRappel";
import DemandeRappelRequestStateExtended, {
    DemandeRappelRequestStatePrototype
} from "../../model/DemandeRappel/DemandeRappelRequestStateExtended";
import CloneableExtension from "@maciffr/react-mvc/core/CloneableExtension";
import DemandeRappelRequestState from "../../model/DemandeRappel/DemandeRappelRequestState";
import {CodeCanal} from "../../data/Enum/CodeCanal";
import {CodeTypeDemande} from "../../data/Enum/CodeTypeDemande";
import {CodeTypeContact} from "../../data/Enum/CodeTypeContact";

export default class DemandeRappelServiceImpl {
    private readonly _demandeRappelRepo: DemandeRappelRepositoryImpl;

    constructor(demandeRappelRepo: DemandeRappelRepositoryImpl) {
        this._demandeRappelRepo = demandeRappelRepo;
    }

    private static verifierTelephone(value: string): boolean {
        const testRegex: RegExpMatchArray = value.match(/^0[1-9]{1}[0-9]{8}$/) || [];
        return testRegex.length === 0;
    }

    formHasError(formError: FormErrorDemandeRappelModelView): boolean {
        return Object.values(formError).filter((v: string) => v !== "").length !== 0;
    }

    validationFormulaire(demandeRappel: DemandeRappelModelView): FormErrorDemandeRappelModelView {
        const formError = FormErrorDemandeRappelModelViewBuilder.buildEmpty();

        if (!demandeRappel.civilite.code) {
            formError.civilite = "Veuillez renseigner votre civilité";
        }

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
            const request = CloneableExtension<DemandeRappelRequestState, DemandeRappelRequestStateExtended>(
                {
                    cdCivil: demandeRappel.civilite.code,
                    cdCanal: CodeCanal.TELEPHONE,
                    typeDemande: CodeTypeDemande.OFFRE_LLD_PRO_MACIF_DIRECT_PRO,
                    nmPers: demandeRappel.nom,
                    znPrenPers: demandeRappel.prenom,
                    parametresDemande: {
                        raisonSociale: demandeRappel.nomEntreprise
                    },
                    coordonneesContact: [
                        {
                            typeContact: CodeTypeContact.TELEPHONE,
                            valeur: demandeRappel.telephone
                        }
                    ]
                },
                DemandeRappelRequestStatePrototype
            );
            await this._demandeRappelRepo.envoyerDemandeRappel(request);
        }

        return formError;
    }
}
