import ControllerBase from "@maciffr/react-mvc/core/ControllerBase";
import DemandeRappelModelView from "./ModelView/DemandeRappel/DemandeRappelModelView";
import CloneableExtension from "@maciffr/react-mvc/core/CloneableExtension";
import {
    DemandeRappelModelViewExtended,
    DemandeRappelModelViewPrototype
} from "./ModelView/DemandeRappel/DemandeRappelModelViewExtended";
import FormErrorDemandeRappelModelViewBuilder from "./ModelView/FormErrorDemandeRappel/FormErrorDemandeRappelModelViewBuilder";
import {DemandeRappelServiceImpl} from "../../../domain/services/DemandeRappel";

interface DemandeRappelControllerDependencies {
    readonly demandeRappelService: DemandeRappelServiceImpl;
}

export class DemandeRappelController extends ControllerBase<DemandeRappelModelViewExtended> {
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

        this._state = CloneableExtension<DemandeRappelModelView, DemandeRappelModelViewExtended>(
            {
                formErrorDemandeRappel: FormErrorDemandeRappelModelViewBuilder.buildEmpty(),
                prenom: "",
                nom: "",
                nomEntreprise: "",
                telephone: "",
                afficherModaleConfirmationOk: false,
                afficherModaleConfirmationKo: false
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

    async demandeRappel() {
        try {
            const formErrorDemandeRappel = await this.dependencies.demandeRappelService.demandeRappel(this._state);
            this._state = {
                ...this._state,
                afficherModaleConfirmationOk:
                    !this.dependencies.demandeRappelService.formHasError(formErrorDemandeRappel),
                formErrorDemandeRappel
            };
        } catch (e) {
            this._state = {
                ...this.state,
                afficherModaleConfirmationKo: true
            };
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
}
