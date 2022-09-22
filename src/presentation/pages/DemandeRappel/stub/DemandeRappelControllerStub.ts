import ControllerBase from "@maciffr/react-mvc/core/ControllerBase";
import {
    DemandeRappelModelViewExtended,
    DemandeRappelModelViewPrototype
} from "../ModelView/DemandeRappel/DemandeRappelModelViewExtended";
import CloneableExtension from "@maciffr/react-mvc/core/CloneableExtension";
import DemandeRappelModelView from "../ModelView/DemandeRappel/DemandeRappelModelView";
import DemandeRappelController from "../DemandeRappelController";

type action = () => void;

interface HandlerStubProperties {
    demandeRappel: action;
    onChangePrenom: action;
    onChangeNom: action;
    onChangeNomEntreprise: action;
    onChangeTelephone: action;
    onAfficherModaleConfirmationOk: action;
    onAfficherModaleConfirmationKo: action;
    redirect: action;
}

export default class DemandeRappelControllerStub
    extends ControllerBase<DemandeRappelModelViewExtended>
    implements DemandeRappelController
{
    private _state: DemandeRappelModelViewExtended;

    constructor(
        {
            demandeRappel,
            onChangePrenom,
            onChangeNom,
            onChangeNomEntreprise,
            onChangeTelephone,
            onAfficherModaleConfirmationOk,
            onAfficherModaleConfirmationKo,
            redirect
        }: HandlerStubProperties,
        stateStub: DemandeRappelModelView
    ) {
        super();

        this.onChangePrenom = onChangePrenom;
        this.onChangeNom = onChangeNom;
        this.onChangeNomEntreprise = onChangeNomEntreprise;
        this.onChangeTelephone = onChangeTelephone;
        this.demandeRappel = demandeRappel;
        this.onAfficherModaleConfirmationOk = onAfficherModaleConfirmationOk;
        this.onAfficherModaleConfirmationKo = onAfficherModaleConfirmationKo;
        this.redirect = redirect;

        this._state = CloneableExtension<DemandeRappelModelView, DemandeRappelModelViewExtended>(
            stateStub,
            DemandeRappelModelViewPrototype
        );
    }

    demandeRappel(): void {}

    onChangePrenom(prenom: string): void {}

    onChangeNom(nom: string): void {}

    onChangeNomEntreprise(nomEntreprise: string): void {}

    onChangeTelephone(telephone: string): void {}

    onAfficherModaleConfirmationOk(afficherModaleConfirmationOk: boolean): void {}

    onAfficherModaleConfirmationKo(afficherModaleConfirmationKo: boolean): void {}

    redirect(): void {}

    get state(): DemandeRappelModelViewExtended {
        return this._state.clone();
    }
}
