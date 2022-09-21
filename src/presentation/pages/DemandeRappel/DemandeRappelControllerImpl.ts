import ControllerBase from "@maciffr/react-mvc/core/ControllerBase";
import DemandeRappelModelView from "./ModelView/DemandeRappel/DemandeRappelModelView";
import CloneableExtension from "@maciffr/react-mvc/core/CloneableExtension";
import {
    DemandeRappelModelViewExtended,
    DemandeRappelModelViewPrototype
} from "./ModelView/DemandeRappel/DemandeRappelModelViewExtended";
import FormErrorDemandeRappelModelViewBuilder from "./ModelView/FormErrorDemandeRappel/FormErrorDemandeRappelModelViewBuilder";
import {DemandeRappelServiceImpl} from "../../../domain/services/DemandeRappel";
import CiviliteModelView from "./ModelView/Civilite/CiviliteModelView";
import CiviliteModelViewBuilder from "./ModelView/Civilite/CiviliteModelViewBuilder";
import DemandeRappelController from "./DemandeRappelController";

interface DemandeRappelControllerDependencies {
    readonly demandeRappelService: DemandeRappelServiceImpl;
}

export class DemandeRappelControllerImpl
    extends ControllerBase<DemandeRappelModelViewExtended>
    implements DemandeRappelController
{
    private _state: DemandeRappelModelViewExtended;

    constructor(readonly dependencies: DemandeRappelControllerDependencies) {
        super();
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangeNomEntreprise = this.onChangeNomEntreprise.bind(this);
        this.onChangeTelephone = this.onChangeTelephone.bind(this);
        this.demandeRappel = this.demandeRappel.bind(this);
        this.onAfficherModaleConfirmationOk = this.onAfficherModaleConfirmationOk.bind(this);
        this.onAfficherModaleConfirmationKo = this.onAfficherModaleConfirmationKo.bind(this);
        this.redirect = this.redirect.bind(this);
        this.onChangeCivilite = this.onChangeCivilite.bind(this);

        this._state = CloneableExtension<DemandeRappelModelView, DemandeRappelModelViewExtended>(
            {
                formErrorDemandeRappel: FormErrorDemandeRappelModelViewBuilder.buildEmpty(),
                prenom: "",
                nom: "",
                nomEntreprise: "",
                telephone: "",
                afficherModaleConfirmationOk: false,
                afficherModaleConfirmationKo: false,
                civilite: CiviliteModelViewBuilder.buildEmpty()
            },
            DemandeRappelModelViewPrototype
        );
    }

    get state(): DemandeRappelModelViewExtended {
        return this._state.clone();
    }

    onChangePrenom(prenom: string) {
        this._state = {
            ...this._state,
            prenom,
            formErrorDemandeRappel: {
                ...this._state.formErrorDemandeRappel,
                prenom: ""
            }
        };

        this.raiseStateChanged();
    }

    onChangeNom(nom: string) {
        this._state = {
            ...this._state,
            nom,
            formErrorDemandeRappel: {
                ...this._state.formErrorDemandeRappel,
                nom: ""
            }
        };

        this.raiseStateChanged();
    }

    onChangeNomEntreprise(nomEntreprise: string) {
        this._state = {
            ...this._state,
            nomEntreprise,
            formErrorDemandeRappel: {
                ...this._state.formErrorDemandeRappel,
                nomEntreprise: ""
            }
        };

        this.raiseStateChanged();
    }

    onChangeTelephone(telephone: string) {
        this._state = {
            ...this._state,
            telephone,
            formErrorDemandeRappel: {
                ...this._state.formErrorDemandeRappel,
                telephone: ""
            }
        };

        this.raiseStateChanged();
    }

    onChangeCivilite(civilite: CiviliteModelView) {
        this._state = {
            ...this._state,
            civilite,
            formErrorDemandeRappel: {
                ...this._state.formErrorDemandeRappel,
                civilite: ""
            }
        };

        this.raiseStateChanged();
    }

    async demandeRappel() {
        try {
            const formErrorDemandeRappel = await this.dependencies.demandeRappelService.demandeRappel(this._state);

            this._state = {
                ...this._state,
                formErrorDemandeRappel
            };

            if (!this.dependencies.demandeRappelService.formHasError(formErrorDemandeRappel)) {
                this._state = {
                    ...this._state,
                    afficherModaleConfirmationOk: true
                };
                window.dataLayer?.push({event: "page_view", page_name: "LLD_Pro_WCB_Envoyer_OK"});
            }
        } catch (e) {
            this._state = {
                ...this.state,
                afficherModaleConfirmationKo: true
            };

            window.dataLayer?.push({event: "page_view", page_name: "LLD_Pro_WCB_Envoyer_KO"});
        }
        this.raiseStateChanged();
    }

    onAfficherModaleConfirmationOk(afficherModaleConfirmationOk: boolean) {
        this._state = {
            ...this.state,
            afficherModaleConfirmationOk
        };
        this.raiseStateChanged();
    }

    onAfficherModaleConfirmationKo(afficherModaleConfirmationKo: boolean) {
        this._state = {
            ...this.state,
            afficherModaleConfirmationKo
        };
        this.raiseStateChanged();
    }

    redirect() {
        window.location.replace("/assurance/professionnels-et-entreprises/lld-professionnel");
    }
}
