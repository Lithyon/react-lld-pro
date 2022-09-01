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
        this.validationFormulaire = this.validationFormulaire.bind(this);

        this._state = CloneableExtension<DemandeRappelModelView, DemandeRappelModelViewExtended>(
            {
                formErrorDemandeRappel: FormErrorDemandeRappelModelViewBuilder.buildEmpty(),
                prenom: "",
                nom: "",
                nomEntreprise: ""
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

    validationFormulaire() {
        const formErrorDemandeRappel = this.dependencies.demandeRappelService.validationFormulaire(this._state);

        this._state = {
            ...this._state,
            formErrorDemandeRappel
        };

        this.raiseStateChanged();
    }
}
